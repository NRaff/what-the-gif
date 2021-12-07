import { RECEIVE_ALL_CARDS } from "../actions/game_deck_actions";

const gameDeck = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      let allCards = Object.values(action.cards)
      allCards.map((card, idx) => {
        
      }) 

    default:
      return state;
  }
}

export default gameDeck