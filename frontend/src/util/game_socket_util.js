import { io } from 'socket.io-client'

var socket = io()

const setupGameSocket = (gameCode, dispatch) => {
  socket.on(`joined-game:${gameCode}`, payload => {
    dispatch(payload)
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

  return socket
}

export default setupGameSocket;