import { io } from 'socket.io-client'

var socket = io()

const setupGameSocket = (gameCode) => {
  socket.on(`joined-game:${gameCode}`, payload => {
    console.log(payload)
  })
  socket.on(`created-game:${gameCode}`, payload => {
    console.log(payload)
  })
  socket.on('create-game-error', payload => {
    console.log(payload)
  })
  socket.on('join-game-error', payload => {
    console.log(payload)
  })

  if (gameCode) {
    socket.on(`game-update:${gameCode}`, payload => {
      console.log(payload)
    })
  }

  return socket
}

export default setupGameSocket;