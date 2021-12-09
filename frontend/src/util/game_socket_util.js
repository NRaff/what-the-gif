import { io } from 'socket.io-client'
import { receiveGame } from '../actions/game_actions'
import { receiveUsers } from '../actions/user_actions'
import GameDispatch from './game_dispatch'

var socket = io()

const manager = gameCode =>  ({
  sendToGame: payload => {
    const newPayload = {
      type: payload.type,
      gameCode
    }
    socket.emit(`game:update`, newPayload)
  },
  getGame: () => {
    socket.emit(`game:get`, { gameCode })
  },
  createGame: payload => {
    socket.emit(`game:create`, payload)
  },
  joinGame: payload => {
    socket.emit(`game:join`, payload)
  },
  socket: socket
})

const setupGameSocket = (gameCode, dispatch) => {
  socket.on(`joined-game:${gameCode}`, payload => {
    GameDispatch(payload, dispatch)
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

  return manager(gameCode)
}

export default setupGameSocket;