const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  tmdb_id: { type: String },
})

module.exports = mongoose.model('Genre', GenreSchema);