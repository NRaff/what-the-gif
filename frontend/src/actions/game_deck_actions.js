import * as GiphyUtil from '../util/giphy_util'

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS"
export const REMOVE_DEALT_CARDS = "REMOVE_DEALT_CARDS"

export const receiveCards = cards => ({
  type: RECEIVE_ALL_CARDS,
  cards
})

export const removeDeltCards = cardId => ({
  type: REMOVE_DEALT_CARDS, 
  cardId
})

export const fetchCards = () => dispatch => GiphyUtil.getGameDeck(['happy'])
  .then(payload => dispatch(receiveCards(payload)))