import { RECEIVE_PLAYED_CARD, REMOVE_DEALT_CARD, RECEIVE_PLAYED_CARDS } from "../actions/played_cards_actions";

const playedCardsReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_PLAYED_CARD:
      return nextState[action.card.id] = action.card
    case REMOVE_DEALT_CARD: 
      delete nextState[action.cardId]
      return nextState
    case RECEIVE_PLAYED_CARDS:
      // let allCards = Object.values(action.cards)
      action.payload.cards.forEach((card) => {
        nextState[card.gifId] = card
      })

      return nextState
    default:
      return state;
  }
}


export default playedCardsReducer