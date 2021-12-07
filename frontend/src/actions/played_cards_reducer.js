
export const RECEIVE_PLAYED_CARD = 'RECEIVE_PLAYED_CARD'
export const REMOVE_DEALT_CARD = 'REMOVE_DEALT_CARD'

export const receivePlayedCard = card => ({
  type: RECEIVE_PLAYED_CARD,
  card
})

export const removeDeltCard = cardId => ({
  type: REMOVE_DEALT_CARD,
  cardId
})


// The corresponding thunk action to receive a played card should also call the removeDeltCards action

// export const fetchCard = card => dispatch => 