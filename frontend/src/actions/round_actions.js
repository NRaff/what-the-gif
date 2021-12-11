export const RECEIVE_ROUND = 'RECEIVE_ROUND'
export const CLEAR_ROUNDS = 'CLEAR_ROUNDS'

export const receiveRound = round => ({
  type: RECEIVE_ROUND,
  round
})

export const clearRounds = () => ({
  type: CLEAR_ROUNDS
})