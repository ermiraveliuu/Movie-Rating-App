const express = require("express");
const { addReview, editReview, getReviews, deleteReview } = require('../controllers/reviews')
const router = express.Router();

router.route("/").get(getReviews);
router.route("/add").post(addReview);
router.route("/:id").delete(deleteReview);
router.route("/:id").put(editReview);

module.exports = router;