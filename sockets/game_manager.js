const validateGameJoin = require('../validations/joingame');
const validateCreateGameInput = require('../validations/creategame');
const Game = require('../models/Game')

module.exports = (io, socket) => {
  const socketCreateGame = game => {
    const { errors, isValid } = validateCreateGameInput(game);

    let response = {}
    if (!isValid) {
      response = {
        status: 400,
        errors: errors
      }
      socket.emit('test chat', response)
      return response
    }
    createGame(game)
      .then(res => {
        socket.join(res.gameCode)
        // console.log(res)
        socket.on(res.gameCode, () => {console.log(`Game Channel: ${res.title}`)})
        io.in('test chat').emit(`Channel Rooms: ${res.title}`)
        console.log(res.gameCode)
        console.log(socket.rooms)
      })
      .catch(err => {
        socket.emit('test chat', {error: err})
      })
  }

  const createGame = game => {
    const newGame = new Game({
      gameOwner: game.gameOwner,
      gameCode: game.gameCode,
      maxPlayers: game.maxPlayers,
      scoreToWin: game.scoreToWin,
      title: game.title,
      roundTimeLimit: game.roundTimeLimit
    })
    newGame.players.push({
      user: game.gameOwner
    })
    return newGame.save()
  }

  socket.on("game:create", socketCreateGame)
}