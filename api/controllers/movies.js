const Movie = require('../models/Movie')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.status(201).json({movies});
  } catch (e) {
    res.status(500).json({message: e})
  }
};

const getMovie = async (req, res) => {
  try {
    const {id: movieId} = req.params;
    const movie = await Movie.findOne({_id: movieId})
    if(!movie) {
      return res.status(404).json({msg: `No movie with id: ${movieId}`})
    }
    res.status(200).json({movie});
  } catch (e) {
    res.status(500).json({message: e})
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie);
  } catch (e) {
    res.status(500).json({message: e})
  }
};

const updateMovie = async (req, res) => {
  try {
    const {id: movieId} = req.params
    const movie = await Movie.findOneAndUpdate({_id:movieId}, req.body, {
      new: true,
      runValidators: true
    })

    if(!movie) {
      return res.status(404).json({msg: `No movie with id: ${movieId}`})
    }
    res.status(200).json({})
  } catch (e) {
    res.status(500).json({message: e})
  }
};

const deleteMovie = async (req, res) => {
  try {
    const {id: movieId} = req.params;
    const movie = await Movie.findOneAndDelete({_id:movieId})
    if(!movie) {
      return res.status(404).json({msg: `No movie with id: ${movieId}`})
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).json({message: e})
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
