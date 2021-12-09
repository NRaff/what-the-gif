import { receiveGame } from '../actions/game_actions'
import { receiveUsers } from '../actions/user_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const JOINED_GAME = 'JOINED_GAME'

const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    case GAME_STARTED:
      console.log("Game should start for everyone")
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
    default:
      break;
  }
}

export default GameDispatch;