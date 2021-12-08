import { RECEIVE_PLAYED_CATEGORY, REMOVE_PLAYED_CATEGORY } from "../actions/played_category_actions";

const playedCategory = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PLAYED_CATEGORY:
      nextState[action.category.id] = action.category
      return nextState
    case REMOVE_PLAYED_CATEGORY:
      delete nextState[action.category.id]
      return nextState
    default:
      return state;
  }
}

export default playedCategory