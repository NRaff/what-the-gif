import { io } from 'socket.io-client'
import { receiveGame } from '../actions/game_actions'
import { receiveUsers } from '../actions/user_actions'

var socket = io()

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

  return socket
}

export default setupGameSocket;