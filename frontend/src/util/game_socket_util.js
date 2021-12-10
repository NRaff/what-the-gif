import { io } from 'socket.io-client'
import GameDispatch from './game_dispatch'

var socket = io()


const manager = gameCode =>  ({
  sendToGame: payload => {
    const newPayload = Object.assign({}, payload,{gameCode})
    socket.emit(`game:update`, newPayload, () => {
      socket.removeAllListeners(`joined-game:${gameCode}`)
    })
  },
  getGame: () => {
    socket.emit(`game:get`, { gameCode }, () => {
      socket.removeAllListeners(`joined-game:${gameCode}`)
    })
  },
  createGame: payload => {
    socket.emit(`game:create`, payload, () => {
      socket.removeAllListeners(`joined-game:${gameCode}`)
    })
  },
  joinGame: payload => {
    socket.emit(`game:join`, payload, () => {
      socket.removeAllListeners(`joined-game:${gameCode}`)
    })
  },
  killSocket: () => {
    socket.removeAllListeners(`joined-game:${gameCode}`)
  },
  socket: socket
})

const setupGameSocket = (gameCode, dispatch) => {
  socket.on(`joined-game:${gameCode}`, payload => {
    // console.log(`Pushed to game: ${payload.type}`)
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

  return manager(gameCode)
}

export default setupGameSocket;