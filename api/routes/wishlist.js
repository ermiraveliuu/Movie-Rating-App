const express = require("express");
const { getUserWishlist, addMovieToWishlist, removeMovieFromWishlist } = require('../controllers/wishlist')
const router = express.Router();

router.route("/").get(getUserWishlist);
router.route("/add").post(addMovieToWishlist);
router.route("/remove").post(removeMovieFromWishlist);

module.exports = router;