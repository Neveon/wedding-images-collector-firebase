const functions = require('firebase-functions');
const { uploadImage, getImageUrls } = require('./routes/upload');
const app = require('express')();

const cors = require('cors');
app.use(cors());

// Upload image route
app.post('/image', uploadImage);

// Get image URLs list
app.get('/images', getImageUrls);

// www.baseurl.com/api
exports.api = functions.https.onRequest(app);
