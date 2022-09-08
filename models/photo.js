const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    match: /.{5,}/
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
}, {
  timestamps: true
});

const photoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  url: {type: String, required: true},
  title: String,
  reviews: [reviewSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Photo', photoSchema);