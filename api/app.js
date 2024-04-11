const express = require("express");
const app = express();
const movies = require("./routes/movies.js");
const connectDB = require('./db/connect');
require('dotenv').config()

const port = 3000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/movies", movies);

const init = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

init();