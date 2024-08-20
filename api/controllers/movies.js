const Movie = require('../models/Movie')
const mongoose = require('mongoose')
const Wishlist = require('../models/Wishlist')
const Genre = require('../models/Genre')
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
    const moviesWithRatings = await Movie.aggregate([
      {
        $match: query // Apply filters and search
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: limit
      }
    ]);

    res.status(201).json({
      status: 'success',
      data: moviesWithRatings,
      length: moviesWithRatings.length,
      pageCount: Math.ceil(itemCount / limit)
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    const userId = req.query.userId
    let isInWishlist = false;
    if (userId) {
      const wishlist = await Wishlist.findOne({ userId });
      if (wishlist) {
        isInWishlist = wishlist.movies.includes(new mongoose.Types.ObjectId(req.params.id));
      }
    }
    const genres = await Genre.find({ tmdb_id: { $in: movie.genre_ids } })
    const language = await Language.find({ tmdb_id:  movie._doc.original_language })
    res.status(201).json({
      ...movie._doc,
      isInWishlist,
      genres: genres.map(genre => genre?.name),
      language: language[0].englishName ?? 'Not Known'
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({message: error})
  }
};


module.exports = {
  getAllMovies,
  getMovie,
};
