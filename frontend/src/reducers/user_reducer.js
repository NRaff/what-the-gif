import { RECEIVE_FAVORITE_GIF, REMOVE_FAVORITE_GIF } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER} from "../actions/session_actions"
import { RECEIVE_INITIAL_HAND, REMOVE_CARD_FROM_HAND, RECEIVE_NEW_CARD} from '../actions/hand_actions'
const UserReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_FAVORITE_GIF:
      return Object.assign({}, state, { [action.gif.id]: action.gif })
    case REMOVE_FAVORITE_GIF:
      let nState = Object.assign({}, state)
      delete nState[action.gifId]
      return nState
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_INITIAL_HAND:
      
      let user = action.payload.user
      let cards = action.payload.cards
      let nextState = Object.assign({}, state)
      nextState[user].hand = cards 
      return nextState
    case REMOVE_CARD_FROM_HAND:
      
      let currentUser = action.payload.user
      let cardId = action.payload.cardId
      let revisedArray = []
      state[currentUser].hand.forEach(card => {
        if (card === cardId){
        } else {
          revisedArray.push(card)
        }
      })
      state[currentUser].hand = revisedArray
      return state
    case RECEIVE_NEW_CARD: 
    
      let handArray = []
       state.forEach(card => {
         handArray.push(card)
       })
       handArray.push(action.card)
       return handArray
    default:
      return state;
  }
}

export default UserReducer;