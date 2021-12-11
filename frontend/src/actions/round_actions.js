export const RECEIVE_ROUND = 'RECEIVE_ROUND'
export const CLEAR_ROUNDS = 'CLEAR_ROUNDS'

const receiveRound = round => ({
  type: RECEIVE_ROUND,
  round
})

const clearRounds = () => ({
  type: CLEAR_ROUNDS
})