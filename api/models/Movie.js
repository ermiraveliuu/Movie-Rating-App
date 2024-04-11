const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    id: Number,
    name: String
})

const MovieSchema = new mongoose.Schema({
    backdrop_path: String,
    budget: Number,
    genres: [GenreSchema],
    id: Number,
    imdb_id: Number,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: Date,
    revenue: Number,
    runtime: Number,
    status: String,
    title: String,
    vote_average: Number,
    vote_count: Number
});

module.exports = mongoose.model('Movie', MovieSchema);