import { RECEIVE_ALL_CATEGORIES, REMOVE_CATEGORY } from '../actions/category_actions'

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      action.categories.forEach((category, idx) => {
        nextState[idx + 1] = category
      })
      return nextState
    case REMOVE_CATEGORY:
      delete nextState[action.category]
      return nextState
    default:
      return state;
  }
}

export default CategoryReducer;