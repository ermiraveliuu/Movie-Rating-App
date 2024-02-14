const express = require("express");
const app = express();
const movies = require("./routes/movies.js");

const port = 3000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/movies", movies);

app.listen(port, console.log(`server is listening on port ${port}`));
