import { 
  GAME_STARTED, 
  GAME_OVER, 
  RESET_GAME 
} from "../util/game_dispatch";

import { 
  ROUND_OVER, 
  RESET_ROUND,
  UPDATE_CATEGORY,
  NEXT_ROUND,
  SET_CURRENT_GAME,
  TOGGLE_TIME_UP,
  TOGGLE_SHOW_SUBMITTED,
  ROUND_WINNER_CHOSEN
 } from "../actions/ui_actions";

const defaultState = {
  gameStatus: false,
  roundNum: 1,
  categoryNum: 0,
  currentGame: null,
  timesUp: false,
  showSubmitted: false,
  roundWinnerChosen: false,
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
      nextState.roundNum = 1
      return nextState
    case ROUND_OVER:
      nextState.roundOver = true
      return nextState
    case RESET_ROUND:
      nextState.roundOver = false
      return nextState
    case NEXT_ROUND:
      nextState.roundNum = action.roundNum
      return nextState
    case UPDATE_CATEGORY:
      nextState.categoryNum += 1
      return nextState;
    case SET_CURRENT_GAME:
      nextState.currentGame = action.game._id
      return nextState
    case TOGGLE_TIME_UP:
      nextState.timesUp = !nextState.timesUp
      return nextState
    case TOGGLE_SHOW_SUBMITTED:
      nextState.showSubmitted = !nextState.showSubmitted
      return nextState
    case ROUND_WINNER_CHOSEN:
      nextState.roundWinnerChosen = !nextState.roundWinnerChosen
      return nextState
    default:
      return state
  }
}

export default uiReducer;