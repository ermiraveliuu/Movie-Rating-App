const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    backdrop_path: { type: String },
    budget: { type: Number },
    genreIds: { type: [String], default: [] },
    genres: { type: [String], default: [] },
    id: { type: Number, required: [true, 'Must provide id'] },
    imdb_id: { type: String },
    overview: { type: String},
    popularity: { type: Number },
    poster_path: { type: String},
    release_date: { type: Date },
    revenue: { type: Number },
    runtime: { type: Number },
    status: { type: String},
    title: { type: String, required: [true, 'Must provide title'] },
    vote_average: { type: Number, default: 0 },
    vote_count: { type: Number, default: 0.0 }
});

module.exports = mongoose.model('Movie', MovieSchema);