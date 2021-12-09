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

const joinGame = (payload, socket, io) => {
  // console.log(payload)
  Game.findOne({gameCode: payload.gameCode})
    .then(game => {
      if (!game) {
        const errPayload = {
          error: err,
          type: "RECEIVE_GAME_ERRORS"
        }
        io.emit('join-game-error', errPayload)
      } else {
        game.players.push({user: payload.playerId})
        game.save()
          .then(updatedGame => {
            const newPayload = {
              game: updatedGame,
              type: "RECEIVE_GAME"
            }
            io.emit(`joined-game:${game.gameCode}`, newPayload)
            // io.emit(`game-update:${game.gameCode}`, newPayload)
          })
          .catch(err => {
            const errPayload = {
              error: err,
              type: "RECEIVE_GAME_ERRORS"
            }
            io.emit('join-game-error', errPayload)
          })
      }
    })
}

// * Export socket listeners and events
module.exports = (io, socket) => {
  // * Join Game
  const socketJoinGame = payload => {
    joinGame(payload,socket, io)
  }

  // * Create a game
  const socketCreateGame = game => {
    const { errors, isValid } = validateCreateGameInput(game);

    let response = {}
    if (!isValid) {
      const payload = {
        error: errors,
        type: "RECEIVE_GAME_ERRORS",
        locale: "Validation"
      }
      io.emit('create-game-error', payload)
    } else {
      createGame(game)
        .then(res => {
          console.log('Create Game Success')
          const payload = {
            game: res,
            type: "RECEIVE_GAME"
          }
          io.emit(`created-game:${game.gameCode}`, payload)
        })
        .catch(err => {
          console.log('Create Game Fail')
          const payload = {
            error: err,
            type: "RECEIVE_GAME_ERRORS",
            locale: "Save"
          }
          io.emit('create-game-error', payload)
        })
    }
  }
  socket.on("game:join", socketJoinGame)
  socket.on("game:create", socketCreateGame)
}