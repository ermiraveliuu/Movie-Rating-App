const Movie = require('../models/Movie')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.status(201).json(movies);
  } catch (e) {
    res.status(500).json({message: e})
  }
};

const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find({id: req.params.id})
    res.status(201).json(movies);
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
