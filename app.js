const mongoose = require('mongoose');
const express = require("express");
const app = express();
const passport = require('passport');
const db = require('./config/keys').mongoURI;

// * Setup
const port = process.env.PORT || 5000;
const users = require("./routes/api/users")
const games = require("./routes/api/games")
const bodyParser = require('body-parser')


// * Add middleware for body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./config/passport')(passport);

// * Define Routes for App
app.use("/api/users", users);
app.use("/api/games", games);

// * Activate and start listening on server
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.listen(port, () => console.log(`Server is running on port ${port}`));
