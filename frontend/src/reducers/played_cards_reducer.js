import { RECEIVE_PLAYED_CARD, REMOVE_DEALT_CARD } from "../actions/played_cards_reducer";

const playedCardsReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_PLAYED_CARD:
      return nextState[action.card.id] = action.card
    case REMOVE_DEALT_CARD: 
      delete nextState[action.cardId]
      return nextState
    default:
      return state;
  }
}


export default playedCardsReducer