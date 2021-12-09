import { RECEIVE_GAME } from "../actions/game_actions";

const GameReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_GAME:
      return Object.assign({}, state, { [action.game._id]: action.game})
    default:
      return state;
  }
}

export default GameReducer