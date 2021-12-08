// import { RECEIVE_FAVORITE_GIF, REMOVE_FAVORITE_GIF } from "../actions/user_actions";
import { RECEIVE_FAVORITE_GIF } from "../actions/user_actions";

const UserReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_FAVORITE_GIF:
      return Object.assign({}, state, { [action.user._id]: action.user })
    // case REMOVE_FAVORITE_GIF:
    //   let nState = Object.assign({}, state)
    //   delete nState[action.gifId]
    //   return nState
    default:
      return state;
  }
}

export default UserReducer;