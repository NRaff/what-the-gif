const express = require("express");
const app = express();

// * Setup
const port = process.env.PORT || 5000;
const users = require("./routes/api/users")
const bodyParser = require('body-parser')

// * Add middleware for body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// * Define Routes for App
app.use("/api/users", users);

// * Activate and start listening on server
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));