import { io } from 'socket.io-client'
import GameDispatch from './game_dispatch'

var socket = io()


export const manager = gameCode =>  ({
  sendToGame: payload => {
    const newPayload = Object.assign({}, payload,{gameCode})
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
  killSocket: () => {
    socket.removeAllListeners(`joined-game:${gameCode}`)
  },
  stopListening: () => {
    socket.removeAllListeners()
  },
  socket: socket
})

export const setupGameSocket = (gameCode, dispatch) => {
    if (gameCode) {
      socket.on(`joined-game:${gameCode}`, payload => {
        GameDispatch(payload, dispatch)
      })
      socket.once(`created-game:${gameCode}`, payload => {
        dispatch(payload)
      })
      socket.on('create-game-error', payload => {
        dispatch(payload)
      })
      socket.on('join-game-error', payload => {
        dispatch(payload)
      })
    }
  return manager(gameCode)
}

export const stopListening = () => {
  socket.removeAllListeners()
}

// export default setupGameSocket;