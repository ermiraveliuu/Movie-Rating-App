const Movie = require('../models/Movie')

const getAllMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number, default 1
    const limit = parseInt(req.query.limit) || 50; // Number of documents per page, default 50

    let query = {};

    if(req.query.genreIds) {
      let genres = req.query.genreIds.split(',');
      genres = genres.map(genreId => parseInt(genreId));
      query['genre_ids'] = {$in: genres};
    }

    if(req.query.languageIds) {
      let languages = req.query.languageIds.split(',');
      query['original_language'] = {$in: languages};
    }

    const movies = await Movie.find(query)
                               .skip((page - 1) * limit) // Skip documents that are before the current page
                               .limit(limit);
    res.status(201).json({
      status: 'success',
      data: movies,
      length: movies.length
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(201).json(movie);
  } catch (e) {
    res.status(500).json({message: e})
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

const createMovies = async (req, res) => {
  try {
    for(movie of req.body) {
      await Movie.create(req.body)
    }
    // const movie = await Movie.create(req.body)
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({message: error})
  }
};

const updateMovie = (req, res) => {
  res.send("Update movie");
};

const deleteMovie = (req, res) => {
  res.send("Delete movie");
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
