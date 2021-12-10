const validateGameJoin = require('../validations/joingame');
const validateCreateGameInput = require('../validations/creategame');
const Game = require('../models/Game')
const User = require('../models/User')
const mongoose = require('mongoose')

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

// returns a promise
const getPlayers = players => (
  User.find({
    '_id': {
      $in: players.map(p => (
        mongoose.Types.ObjectId(p.user)
      ))
    }
  })
)

const getGame = (payload, io, socket) => {
  Game.findOne({gameCode: payload.gameCode})
  .then(game => {
    getPlayers(game.players)
      .then(users => {
        game.save()
          .then(updatedGame => {
            const newPayload = {
              game: updatedGame,
              users: users,
              type: "JOINED_GAME"
            }
            io.emit(`joined-game:${game.gameCode}`, newPayload)
          })
          .catch(err => {
            const errPayload = {
              errors: err,
              type: "RECEIVE_GAME_ERRORS"
            }
            socket.emit('join-game-error', errPayload)
          })
      })
      .catch(err => {
        const errPayload = {
          errors: "Please refresh your page and try again.",
          type: "RECEIVE_GAME_ERRORS"
        }
        socket.emit('join-game-error', errPayload)
      })
    })
  .catch(err => {
    const errPayload = {
      errors: "Please refresh your page and try again.",
      type: "RECEIVE_GAME_ERRORS"
    }
    socket.emit('join-game-error', errPayload)
  })
}

const joinGame = (payload, io, socket) => {
  const { errors, isValid } = validateGameJoin(payload);

  if (!isValid) {
    const errPayload = {
      errors: errors,
      type: "RECEIVE_GAME_ERRORS"
    }
    socket.emit('join-game-error', errPayload)
  } else {
    Game.findOne({ gameCode: payload.gameCode })
    .then(game => {
      if (!game) {
        const errPayload = {
          errors: err,
          type: "RECEIVE_GAME_ERRORS"
        }
        socket.emit('join-game-error', errPayload)
      } else {
        game.players.push({ user: payload.playerId })
        User.find({
          '_id': { $in: game.players.map(p => (
            mongoose.Types.ObjectId(p.user)
          ))}
        })
        .then( users => {
          game.save()
          .then(updatedGame => {
            const newPayload = {
              game: updatedGame,
              users: users,
              type: "JOINED_GAME"
            }
            io.emit(`joined-game:${game.gameCode}`, newPayload)
          })
          .catch(err => {
            const errPayload = {
              errors: err,
              type: "RECEIVE_GAME_ERRORS"
            }
            socket.emit('join-game-error', errPayload)
          })
        })
        .catch( err => {
          const errPayload = {
            errors: "Please refresh your page and try again.",
            type: "RECEIVE_GAME_ERRORS"
          }
          socket.emit('join-game-error', errPayload)
        })
      }
    })
  }
}

const updateGame = (payload, io) => {
  const {gameCode} = payload
  // console.log(payload.type)
  io.emit(`joined-game:${gameCode}`, payload)
}

// * Export socket listeners and events
module.exports = (io, socket) => {
  // * Join Game
  const socketJoinGame = payload => {
    joinGame(payload, io, socket)
  }

  const socketUpdateGame = payload => {
    updateGame(payload, io)
  }

  const socketGetGame = payload => {
    getGame(payload, io, socket)
  }

  // * Create a game
  const socketCreateGame = game => {
    const { errors, isValid } = validateCreateGameInput(game);
    if (!isValid) {
      const payload = {
        errors: errors,
        type: "RECEIVE_GAME_ERRORS",
        locale: "Validation"
      }
      io.emit('create-game-error', payload)
    } else {
      createGame(game)
        .then(res => {
          const payload = {
            game: res,
            type: "RECEIVE_GAME"
          }
          io.emit(`created-game:${game.gameCode}`, payload)
        })
        .catch(err => {
          const payload = {
            errors: err,
            type: "RECEIVE_GAME_ERRORS",
            locale: "Save"
          }
          io.emit('create-game-error', payload)
        })
    }
  }
  socket.on("game:join", socketJoinGame)
  socket.on("game:create", socketCreateGame)
  socket.on("game:get", socketGetGame)
  socket.on("game:update", socketUpdateGame)
}