import {
  RECEIVE_USER_LOGOUT,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const SessionReducer = (state=initialState, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER:
      nextState['isAuthenticated'] = true
      nextState['user'] = action.currentUser
      return nextState
   
    default:
        return state;
  }
}

export default SessionReducer;