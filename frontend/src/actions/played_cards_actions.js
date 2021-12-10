import { removeDeltCard, removeDeltCards } from "./game_deck_actions"
export const RECEIVE_PLAYED_CARD = 'RECEIVE_PLAYED_CARD'
export const RECEIVE_PLAYED_CARDS = 'RECEIVE_PLAYED_CARDS'
export const REMOVE_DEALT_CARD = 'REMOVE_DEALT_CARD'

export const receivePlayedCard = card => ({
  type: RECEIVE_PLAYED_CARD,
  card
})

export const receivePlayedCards = payload => ({
  type: RECEIVE_PLAYED_CARDS,
  payload
})

export const removePlayedCard = cardId => ({
  type: REMOVE_DEALT_CARD,
  cardId
})

// The corresponding thunk action to receive a played card should also call the removeDeltCards action
export const fetchCard = card => dispatch => {
   dispatch(receivePlayedCard(card))
   dispatch(removeDeltCard(card.gifId))
}

export const fetchPlayedCards = cards => dispatch => {
  dispatch(receivePlayedCards(cards))
  dispatch(removeDeltCards(cards))
}