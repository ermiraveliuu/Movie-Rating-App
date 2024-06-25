const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  _id: { type: String },
  tmdb_id: { type: String },
  name: { type: String },
  englishName: { type: String }
})

module.exports = mongoose.model('Language', LanguageSchema);