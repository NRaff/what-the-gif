import * as GiphyUtil from '../util/giphy_util'

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS"
export const REMOVE_DEALT_CARD = "REMOVE_DEALT_CARDS"
export const REMOVE_CARDS = "REMOVE_CARDS"

export const receiveCards = cards => ({
  type: RECEIVE_ALL_CARDS,
  cards
})

export const removeDeltCard = cardId => ({
  type: REMOVE_DEALT_CARD, 
  cardId
})

export const removeDeltCards = payload => ({
  type: REMOVE_CARDS,
  payload
})


export const fetchCards = () => dispatch => GiphyUtil.getGameDeck(['happy'])
  .then(payload => dispatch(receiveCards(payload)))