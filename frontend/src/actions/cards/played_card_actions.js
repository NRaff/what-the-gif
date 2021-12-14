export const RECEIVE_SUBMITTED_CARD = 'RECEIVE_SUBMITTED_CARD'
export const REMOVE_SUBMITTED_CARD = 'REMOVE_SUBMITTED_CARD'
export const REMOVE_SUBMITTED_CARDS = 'REMOVE_SUBMITTED_CARDS'

export const receiveSubmittedCard = payload => ({
  type: RECEIVE_SUBMITTED_CARD,
  payload
})

export const removeSubmittedCard = payload => ({
  type: REMOVE_SUBMITTED_CARD,
  payload
})

export const removeSubmittedCards = () => ({
  type: REMOVE_SUBMITTED_CARDS
})

export const submitCard = payload => dispatch => {
  dispatch(receiveSubmittedCard(payload))
}

export const removeCard = payload => dispatch => {
  dispatch(removeSubmittedCard(payload))
}