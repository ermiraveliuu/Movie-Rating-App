const mongoose = require('mongoose')
const Movie = require('../models/Movie')
const Wishlist = require('../models/Wishlist')
const Review = require('../models/Review')
const Language = require('../models/Language')

const getAllMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number, default 1
    const limit = parseInt(req.query.limit) || 50; // Number of documents per page, default 50

    let query = {};

    if(req.query.q) {
      const searchValue = req.query.q;
      query['title'] = {$regex: searchValue, $options: "i" };
    }

    if(req.query.genreIds) {
      let genres = req.query.genreIds.split(',');
      genres = genres.map(genreId => parseInt(genreId));
      query['genre_ids'] = {$in: genres};
    }

    if(req.query.languageIds) {
      let languages = req.query.languageIds.split(',');
      query['original_language'] = {$in: languages};
    }

    const itemCount = await Movie.countDocuments(query);

    const movies = await Movie.find(query)
      .skip((page - 1) * limit) // Skip documents that are before the current page
      .limit(limit);

    res.status(201).json({
      status: 'success',
      data: movies,
      length: movies.length,
      pageCount: Math.ceil(itemCount / limit)
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

const getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const userId = req.query.userId
    const movie = await Movie.findById(movieId)
    let isInWishlist = false;
    let review = false;
    if (userId) {
      const wishlist = await Wishlist.findOne({ userId });
      if (wishlist) {
        isInWishlist = wishlist.movies.includes(new mongoose.Types.ObjectId(movieId));
      }
      review = await Review.findOne({ user: userId, movie: movieId })
    }
    const language = await Language.find(
      { tmdb_id:  movie._doc.original_language }
    )
    res.status(201).json({
      ...movie._doc,
      isInWishlist,
      review,
      language: language[0].englishName ?? 'Not Known'
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};


module.exports = {
  getAllMovies,
  getMovie,
};
