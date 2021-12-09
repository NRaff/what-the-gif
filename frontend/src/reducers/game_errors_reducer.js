import { RECEIVE_GAME_ERRORS } from "../actions/game_actions";

const gameErrors = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_GAME_ERRORS:
      return action.errors
  
    default:
      return state;
  }
}

export default gameErrors