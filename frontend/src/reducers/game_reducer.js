import { RECEIVE_GAME } from "../actions/game_actions";

const GameReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch (action.type) {
    case RECEIVE_GAME:
      // Top level key of game ID and the object of the game
      return Object.assign({}, state, { [action.game.id]: action.game})
    default:
      return state;
  }
}

export default GameReducer