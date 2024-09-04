const Movie = require('../models/Movie')
const Review = require('../models/Review');

const getReviews = async (req, res) => {
  try {
    const movieId = req.query.movieId;
    const userId = req.query.userId;
    const query = {}
    if(movieId) {
      query.movie = movieId;
    }
    if(userId) {
      query.user = userId;
    }
    const reviews = await Review.find(query).populate(['movie', 'user']);
    res.status(200).json(reviews);
  }
  catch (e) {
    res.status(404).json({message: e})
  }
}

const addReview = async (req, res) => {
  try {
    const { movieId, userId, rating, comment } = req.body
    const review = new Review({
      movie: movieId,
      user: userId,
      rating,
      comment,
    })
    await review.save()

    // Update the movie's rating and vote count
    const movie = await Movie.findById(movieId)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    // Fetch all reviews for the movie
    await refreshMovieRating(movieId);
    res.status(201).json({status: 'success'});
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

editReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const movieId = req.query.movieId;
    const { rating, comment } = req.body
    await Review.findByIdAndUpdate(
      reviewId,
      { $set: { rating, comment } },
      { new: true },
    );
    await refreshMovieRating(movieId);
    res.status(201).json({status: 'success'});
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const movieId = req.query.movieId;
    await Review.findByIdAndDelete(reviewId);
    await refreshMovieRating(movieId);
    res.status(201).json({status: 'success'});
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

refreshMovieRating = async (movieId) => {
  const reviews = await Review.find({ movie: movieId })
  if(reviews.length) {
    const totalReviews = reviews.length;
    const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / totalReviews).toFixed(1)
    await Movie.findByIdAndUpdate(
      movieId,
      { $set: { vote_count: totalReviews, vote_average: averageRating } },
      { new: true }, // Return the updated document
    )
  } else {
    await Movie.findByIdAndUpdate(
      movieId,
      { $set: { vote_count: 0, vote_average: 0 } },
      { new: true }, // Return the updated document
    )
  }
}

module.exports = { getReviews, addReview, deleteReview, editReview }