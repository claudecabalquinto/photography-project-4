const express = require('express');
const router = express.Router();
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');


// GET /api/photos
router.get('/', photosCtrl.index);
// POST /api/photos/upload
router.post('/upload', upload.single('photo'), photosCtrl.upload);
// The 'photo' maps to the name used when adding the input to the FormData object
router.post('/:id/reviews', photosCtrl.addReview);
router.delete('/:id', photosCtrl.deletePhoto);
router.put('/:photoId/reviews/:reviewId', photosCtrl.updateReview);




module.exports = router;