const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }, // Reference to Movie
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },   // Reference to User
  rating: { type: Number, min: 0, max: 10, required: true }, // Rating out of 10
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);