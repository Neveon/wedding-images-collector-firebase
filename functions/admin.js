const admin = require('firebase-admin');
const serviceAccount = {
  type: 'service_account',
  project_id: 'image-upload-9aebe',
  private_key_id: 'd17a13188cc0fede2fe110efa50f06606087a557',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFlmmae4X2Yr6Q\ncQumpb2wXT939WE80NPAQw5anOWVpqKeqm7MxlhN6g+o2MX/1Ab/SigRP8K2mWRI\nUQj+n115FI0Pgs+K5i9VUYk/x3DfHw/CxRk9EyR8YdaQfIo33OWNGT+0RyuutdPJ\n4zIYs2Isc1ehfCIasqddCb9WkhNaLasoLR3e4zta9+eeXWwz+NOMFxGk156oNtM+\nqPv5/+ElBOIk7Ui9QRmI0zct2qD2kCcB0ssoRiKRNhdu59VI8UNEiUNiJqjNFC5c\n+c2qDmgEdkB+CFVUHnHb0gwErflZQGzkqiGj1YYYEuEsJQEJLKIZGVC+MCfMPxxt\n4lMTq7WJAgMBAAECggEAC+ON6WQVFpMQtxl8O1vl7uifduj6f7mrghou0Qw3gsKO\n7qff6J2nJtIGfPEFMexout/0Cvyoi0rtxi2tEkAV1GEkjzo+YXPSBYrVTLOEEsLY\nVI5+Qybllz/eVJ2PxgZ6P/wU0ZTGN7ocWx2a8DJL/hN3IoH4/d0B1cbuPsfllvOF\nBgiZL0Ja5o/FhRw3sWKi9jYycQ4dMxkAjHZ/5+OnzKUXPpN4P28+aD28+i+CReal\nHUbCeBtjOjhaT5T5FQOZ8HZFV4C6+UOn6gESFGnjlUxHv9BZ2V15DOhJTFkS6219\n0XRQpmyESMIOQWFu/+JNjE8ehTIUrybRmSEy1hlwcQKBgQD8WuHQU0ANajC9kTe2\nhHsT11/0CQeCNbL9APW7JBRqMwlAh35Jm9BEIIpUbAqhJDZFQKeSzTPaT08MT+6f\n6yFb+NUmrDyDLtaUW9YyOkJQP+OYLECsgBIT4N33y+zkEU4kwCs0YZWV5OnvU+GD\ngblBTGMKYQ+NuOEc80/eQzEUmQKBgQDIcQUkzUKFWe1v1KsnyDheVEJ6jFWRbP3s\nfojxVVHBsjtCVeMVToLmRWOw9gZGN0oMefPmvKND6LLWo2G3qOUxHNWp5lj/Z9BY\n+DSihaLrDQXzWgKQGr+hVVsLHb+EDIsNf/dWL1K6GKrKO2pHdI5MsRxOYIdu6eyg\nArhvpnNOcQKBgGSuUbeO71gqzMVlAahVFNGmtQak75T4na+pSWDflTGFqSRQqobt\nnlr/7JCgBmGiE/DvSawdKJnp2GzeGyM8aTPLhCcIwp/H+R55wWyKp9hilQgqZ6cq\n9YtuxMBPYPThHp80+EfOwyJpkRfGDIwuHl45/q2uackuQMoPHQddIWDJAoGAWPFV\n3/u5DeVWp+4NuMxuvuTSzwBgo/RiRMPtTnGWosXM5+Wmq3i4OygFUawKIrQ8BodD\nBFsmc2bZnMbJAK9QbFeoNAkD6umNGT2iVY/JOFYCEvcY9gr4h8WRbcBYkGbkeSwU\ne8jqA6wYdT6iLWz6C+v3bIwG7N+eYW5zmw+YUPECgYEA8kC7vASVuarBbC/Qh8rJ\ndo7Vq49ULMWdFZ4S/oReKTSUrQfpeiFbwcLeCv1xm+VUr4L3WJf4D+Xi+d40ZoX/\nYhkt4oKnfoOV5YNnbnire3Iz9SUkfT5rC7r53ln0RTZiW8BD0MUqTycWzFmjuoCS\nK+DvY5XhpU7hzX/+khET2ko=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-kobqc@image-upload-9aebe.iam.gserviceaccount.com',
  client_id: '112718631246288885737',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kobqc%40image-upload-9aebe.iam.gserviceaccount.com'
};
//{credential: admin.credential.cert(serviceAccount)}
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

module.exports = { admin, db };
