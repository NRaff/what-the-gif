import { receiveGame } from '../actions/game_actions'
import { startGame } from '../actions/ui_actions'
import { receiveUsers } from '../actions/user_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'

const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    case GAME_STARTED:
      dispatch(startGame())
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
    default:
      break;
  }
}

export default GameDispatch;