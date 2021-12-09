import { RECEIVE_FAVORITE_GIF, RECEIVE_USER, REMOVE_FAVORITE_GIF, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_INITIAL_HAND, REMOVE_CARD_FROM_HAND, RECEIVE_NEW_CARD} from '../actions/hand_actions';


const UserReducer = (state={}, action) => {
  Object.freeze(state)
  let nState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_USER:
      nState[action.user._id] = action.user
    case RECEIVE_FAVORITE_GIF:
      return Object.assign({}, state, { [action.user._id]: action.user })
    case REMOVE_FAVORITE_GIF:
      nState[action.user._id].favGIF = ''
      return nState
    case RECEIVE_USERS:
      let newState = {}
      action.users.forEach(user => {
        newState[user._id] = user
      })
      return newState;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_INITIAL_HAND:
      let user = action.payload.user
      let cards = []
      action.payload.cards.forEach(card => {
        cards.push(card.gifId)
      })
      let nextState = Object.assign({}, state)
      nextState[user].curHand = cards 
      return nextState
    case REMOVE_CARD_FROM_HAND:      
      let currentUser = action.payload.user
      let cardId = action.payload.cardId
      let revisedArray = []
      state[currentUser].curHand.forEach(card => {
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