import { io } from 'socket.io-client'
import { receiveGame } from '../actions/game_actions'
import { receiveUsers } from '../actions/user_actions'

var socket = io()

const manager = {
  sendToGame: (gameCode, payload) => {
    socket.emit(`joined-game:${gameCode}`, payload)
  },
  getGame: gameCode => {
    socket.emit(`game:get`, { gameCode })
  },
  createGame: payload => {
    socket.emit(`game:create`, payload)
  },
  joinGame: payload => {
    socket.emit(`game:join`, payload)
  }
}

const setupGameSocket = (gameCode, dispatch) => {
  socket.on(`joined-game:${gameCode}`, payload => {
    dispatch(receiveUsers(payload.users))
    dispatch(receiveGame(payload.game))
  })
  socket.on(`created-game:${gameCode}`, payload => {
    dispatch(payload)
  })
  socket.on('create-game-error', payload => {
    dispatch(payload)
  })
  socket.on('join-game-error', payload => {
    dispatch(payload)
  })

  return manager
}

export default setupGameSocket;