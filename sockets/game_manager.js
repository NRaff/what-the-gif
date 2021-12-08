const validateGameJoin = require('../validations/joingame');
const validateCreateGameInput = require('../validations/creategame');
const Game = require('../models/Game')

// * Helper methods
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

const joinGame = async payload => {
  await Game.findOne({gameCode: payload.gameCode})
    .then(game => {
      if (!game) {
        return res.status(422).json({game: "Invalid game code"})
      } else {
        game.players.push({user: payload.playerId})
        return game.save()
      }
    })
}

// * Export socket listeners and events
module.exports = (io, socket) => {
  // * Join Game
  const socketJoinGame = payload => {
    joinGame(payload)
      .then(updatedGame => {
        socket.emit('test chat', updatedGame)
      })
      .catch(err => {
        socket.emit('test chat', err)
      })
  }

  // * Create a game
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
  socket.on("game:join", socketJoinGame)
  socket.on("game:create", socketCreateGame)
}