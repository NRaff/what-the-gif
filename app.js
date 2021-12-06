const express = require("express");
const app = express();
const passport = require('passport');

// * Setup
const port = process.env.PORT || 5000;
const users = require("./routes/api/users")
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

// * Activate and start listening on server
app.listen(port, () => console.log(`Server is running on port ${port}`));