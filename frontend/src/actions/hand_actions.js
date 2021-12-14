import {removeDeltCards} from './cards/game_deck_actions'
import { receivePlayedCards } from './cards/played_cards_actions'
// import * as giphyUtil from '../util/giphy_util'
export const RECEIVE_INITIAL_HAND = 'RECEIVE_INITIAL_HAND'
export const RECEIVE_NEW_CARD = 'RECEIVE_NEW_CARD'
export const REMOVE_CARD_FROM_HAND = 'REMOVE_CARD_FROM_HAND'

export const receiveInitialHand = payload => ({
  type: RECEIVE_INITIAL_HAND,
  payload
})
export const receiveNewCard = payload => ({
  type: RECEIVE_NEW_CARD,
  payload
})
export const removeCardFromHand = payload => ({
  type: REMOVE_CARD_FROM_HAND,
  payload
})

export const fetchHand = payload => dispatch => {
    dispatch(receiveInitialHand(payload))
    dispatch(removeDeltCards(payload))
    dispatch(receivePlayedCards(payload))
}

export const fetchCurHand = payload => dispatch => {
    dispatch(receiveInitialHand(payload))
}

export const removeCardHand = payload => dispatch => {
  dispatch(removeCardFromHand(payload))
}
export const receiveCardToHand = cardId => dispatch => {
  dispatch(receiveNewCard(cardId))
}

