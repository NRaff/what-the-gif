

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS"
export const REMOVE_DEALT_CARDS = "REMOVE_DEALT_CARDS"

export const receiveCards = cards => ({
  type: RECEIVE_ALL_CARDS,
  cards
})

export const removeDeltCards = card => ({
  type: REMOVE_DEALT_CARDS, 
  card
})