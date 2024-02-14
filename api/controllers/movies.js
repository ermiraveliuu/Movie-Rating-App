const getAllMovies = (req, res) => {
  res.send("Get All Movies");
};

const getMovie = (req, res) => {
  res.json({id: req.params.id});
};

const createMovie = (req, res) => {
  res.json(req.body);
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
