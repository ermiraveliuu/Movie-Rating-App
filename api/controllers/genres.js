const Genre = require('../models/Genre')

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find()
    res.status(201).json({
      status: 'success',
      data: genres,
      length: genres.length
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

module.exports = { getAllGenres }