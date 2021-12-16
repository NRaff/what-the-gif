import {
  RECEIVE_ROUND,
  CLEAR_ROUNDS
} from "../actions/round_actions"

const roundsReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ROUND:
      nextState[action.round.id] = action.round
      return nextState;
    case CLEAR_ROUNDS:
      return {}
    default:
      return state
  }
}

export default roundsReducer;