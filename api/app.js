const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const passport = require("passport");
const movies = require("./routes/movies.js");
const auth = require("./routes/auth-routes.js");
const connectDB = require('./db/connect');
const userModel = require("./models/User");
const { hashSync, compareSync } = require('bcrypt')

require('dotenv').config()
require('./controllers/passport')

const port = 3001;
const app = express();


//middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

//routes
app.use("/api/v1/movies", movies);
app.use("/api/v1/auth", auth);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const init = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

init();