const { admin, db } = require('../admin');
const config = require('../config');

const firebase = require('firebase');

firebase.initializeApp(config);

exports.getImageUrls = (req, res) => {
  db.doc('/users/images')
    .get()
    .then(doc => {
      res.json(doc.data());
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.uploadImage = (req, res) => {
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs'); // file system

  const busboy = new BusBoy({ headers: req.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
      return res.status(400).json({ error: 'Wrong file type submitted' });
    }

    // Obtaining image extension, like png or jpg
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    // new random filename to avoid malicious values that could be a relative path outside of destination directory
    imageFileName = `${Math.round(
      Math.random() * 100000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
    file.on('error', err => {});
  });
  busboy.on('error', err => {
    console.error(err);
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket(config.storageBucket)
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        // adding alt media prevents download to computer
        const imageURL = `https://firebasestorage.googleapis.com/v0/b/${
          config.storageBucket
        }/o/${imageFileName}?alt=media`;
        return db
          .collection('users')
          .doc('images')
          .update({
            imageUrl: admin.firestore.FieldValue.arrayUnion(imageURL)
          });
      })
      .then(() => {
        return res.json({ message: 'Image uploaded successfully' });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  });
  busboy.end(req.rawBody);
};
