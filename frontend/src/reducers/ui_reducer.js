import { 
  GAME_STARTED, 
  GAME_OVER, 
  RESET_GAME 
} from "../util/game_dispatch";

import { ROUND_OVER, RESET_ROUND } from "../actions/ui_actions";

const defaultState = {
  gameStatus: false,
  roundOver: false
}

const uiReducer = (state=defaultState, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case GAME_STARTED:
      nextState.gameStatus = true
      return nextState
    case RESET_GAME:
      nextState.gameStatus = false
      return nextState
    case ROUND_OVER:
      nextState.roundOver = true
      return nextState
    case RESET_ROUND:
      nextState.roundOver = false
      return nextState
    default:
      return state
  }
}

export default uiReducer;