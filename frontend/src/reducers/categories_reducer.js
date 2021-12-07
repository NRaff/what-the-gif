import { RECEIVE_ALL_CATEGORIES } from '../actions/category_actions'

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return Object.assign({}, state, { [action.category._id]: action.category})
    default:
      return state;
  }
}

export default CategoryReducer;