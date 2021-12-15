import {
  RECEIVE_ROUND,
} from "../actions/round_actions"

const roundsReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ROUND:
      nextState[action.round.id] = action.round
      return nextState;
    default:
      return state
  }
}

export default roundsReducer;