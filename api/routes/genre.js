const express = require("express");
const { getAllGenres } = require('../controllers/genres')
const router = express.Router();

router.route("/").get(getAllGenres);

module.exports = router;