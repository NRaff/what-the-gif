import { RECEIVE_GAME, REMOVE_ALL_GAMES } from "../actions/game_actions";

const GameReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_GAME:
      return Object.assign({}, state, { [action.game._id]: action.game})
    case REMOVE_ALL_GAMES:
      return {}
    default:
      return state;
  }
}

export default GameReducer