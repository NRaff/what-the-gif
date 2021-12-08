import { RECEIVE_FAVORITE_GIF, RECEIVE_USER, REMOVE_FAVORITE_GIF } from "../actions/user_actions";
// import { RECEIVE_FAVORITE_GIF } from "../actions/user_actions";

const UserReducer = (state={}, action) => {
  Object.freeze(state)
  let nState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_USER:
      // debugger
      nState[action.user._id] = action.user
    case RECEIVE_FAVORITE_GIF:
      return Object.assign({}, state, { [action.user._id]: action.user })
    case REMOVE_FAVORITE_GIF:
      nState[action.user._id].favGIF = ''
      return nState
    default:
      return state;
  }
}

export default UserReducer;