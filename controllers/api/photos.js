const uploadFile = require('../../config/upload-file');
const Photo = require('../../models/photo');

module.exports = {
  index,
  upload,
  addReview,
  deletePhoto,
  updateReview
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      // console.log(req.file);
      // The uploadFile function will return the uploaded file's S3 endpoint
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title,
        user: req.user._id
      });
      res.json(photoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function addReview(req, res) {
  let photo = await Photo.findById(req.params.id) 
  req.body.user = req.user._id;
  photo.reviews.push(req.body);
  await photo.save()
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function deletePhoto(req, res) {
  await Photo.findByIdAndDelete(req.params.id);
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function updateReview(req, res) {
  let photo = await Photo.findById(req.params.photoId)
  const commentSubdoc = photo.reviews.id(req.params.reviewId);
  commentSubdoc.content = req.body.content;
  commentSubdoc.rating = req.body.rating;
  await photo.save();
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}
