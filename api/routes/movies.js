const express = require("express");

const router = express.Router();

const {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies");

router.route("/").get(getAllMovies);
router.route("/:id").get(getMovie);
router.route("/").post(createMovie);
router.route("/:id").patch(updateMovie);
router.route("/:id").delete(deleteMovie)

module.exports = router;
