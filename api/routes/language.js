const express = require("express");
const { getAllLanguages } = require('../controllers/langauges')
const router = express.Router();

router.route("/").get(getAllLanguages);

module.exports = router;