export const RECEIVE_SUBMITTED_CARD = 'RECEIVE_SUBMITTED_CARD'
export const REMOVE_SUBMITTED_CARD = 'REMOVE_SUBMITTED_CARD'

export const receiveSubmittedCard = card => ({
  type: RECEIVE_SUBMITTED_CARD,
  card
})

export const removeSubmittedCard = card => ({
  type: REMOVE_SUBMITTED_CARD,
  card
})

export const submitCard = card => dispatch => {
  dispatch(receiveSubmittedCard(card))
}

export const removeCard = card => dispatch => {
  dispatch(removeSubmittedCard(card))
}