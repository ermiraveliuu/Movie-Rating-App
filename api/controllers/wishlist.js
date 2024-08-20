const Wishlist = require('../models/Wishlist')
const Movie = require('../models/Movie')

const getUserWishlist = async (req, res) => {
  const { userId } = req.query;
  try {
    const wishlist = await Wishlist.findOne({ userId }).populate('movies');
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }
    res.status(200).json(wishlist.movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addMovieToWishlist = async (req, res) => {
  const { userId, movieId } = req.body;

  try {
    // Validate movie existence
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Find or create a wishlist for the user
    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, movies: [movieId] });
    } else {
      if (wishlist.movies.includes(movieId)) {
        return res.status(400).json({ message: 'Movie is already in the wishlist' });
      }
      wishlist.movies.push(movieId);
    }
    await wishlist.save();

    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeMovieFromWishlist = async (req, res) => {
  const { userId, movieId } = req.body;

  try {
    // Find the wishlist for the user
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    // Remove the movie from the wishlist
    wishlist.movies = wishlist.movies.filter(id => !id.equals(movieId));
    await wishlist.save();

    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUserWishlist, addMovieToWishlist, removeMovieFromWishlist }