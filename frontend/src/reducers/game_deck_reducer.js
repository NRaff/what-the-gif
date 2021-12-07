import { RECEIVE_ALL_CARDS } from "../actions/game_deck_actions";

const gameDeck = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      let allCards = Object.values(action.cards)
      allCards.map((card, idx) => {
        nextState[idx + 1] = card
      }) 
      return nextState

    default:
      return state;
  }
}

export default gameDeck