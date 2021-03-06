const mongoose = require('mongoose');
const express = require("express");
const app = express();
const passport = require('passport');
const db = require('./config/keys').mongoURI;
const path = require('path')
const {createServer} = require('http')
const server = createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
const registerGameManager = require("./sockets/game_manager")

// * Setup
const port = process.env.PORT || 8080;
const users = require("./routes/api/users")
const games = require("./routes/api/games")
const bodyParser = require('body-parser')

// * Prep for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

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


// * Setup Sockets
const onConnection = socket => {
  registerGameManager(io, socket)
}

io.on('connection', socket => {
  onConnection(socket)
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

server.listen(port, () => {
  console.log(`Listening on ${port}`)
})
