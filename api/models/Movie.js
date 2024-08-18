const mongoose = require('mongoose');
const { Genre } = require('./Genre')

const MovieSchema = new mongoose.Schema({
    backdrop_path: { type: String, required: [true, 'Must provide backdrop_path'] },
    budget: { type: Number },
    genreIds: { type: [String] },
    id: { type: Number, required: [true, 'Must provide id'] },
    imdb_id: { type: String },
    overview: { type: String, required: [true, 'Must provide overview'] },
    popularity: { type: Number },
    poster_path: { type: String, required: [true, 'Must provide poster_path'] },
    release_date: { type: Date },
    revenue: { type: Number },
    runtime: { type: Number, required: [true, 'Must provide runtime'] },
    status: { type: String, required: [true, 'Must provide status'] },
    title: { type: String, required: [true, 'Must provide title'] },
    vote_average: { type: Number, required: [true, 'Must provide vote_average'] },
    vote_count: { type: Number, required: [true, 'Must provide vote_count'] }
});

module.exports = mongoose.model('Movie', MovieSchema);