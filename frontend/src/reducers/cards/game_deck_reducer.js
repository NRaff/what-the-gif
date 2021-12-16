import { 
  RECEIVE_ALL_CARDS, 
  REMOVE_DELT_CARD, 
  REMOVE_CARDS,
  REMOVE_ALL_CARDS 
} from "../../actions/cards/game_deck_actions";
const gameDeck = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      if (!action.cards) return nextState
      action.cards.forEach((card, idx) => {
        nextState[card.gifId] = card
      }) 
      return nextState
    case REMOVE_DELT_CARD:
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
    case REMOVE_ALL_CARDS:
      return {}
    default:
      return state;
  }
}

export default gameDeck