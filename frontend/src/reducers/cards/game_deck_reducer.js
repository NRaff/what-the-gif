import { 
  RECEIVE_ALL_CARDS, 
  REMOVE_DEALT_CARD, 
  REMOVE_CARDS 
} from "../../actions/game_deck_actions";
import { gifObject } from "../../util/giphy_util";
const gameDeck = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      if (!action.cards) return nextState
      action.cards.forEach((card, idx) => {
        nextState[card.gifId] = card//gifObject(card)
      }) 
      return nextState
    case REMOVE_DEALT_CARD:
      delete nextState[action.cardId]
      return nextState

    case REMOVE_CARDS:
      let cards = action.payload.cards
      let deleteCards = []
      cards.forEach(cards => {
        deleteCards.push(cards.gifId)
      })
      
      deleteCards.forEach((card) => {

        delete nextState[card]
      })
      return nextState
    default:
      return state;
  }
}

export default gameDeck