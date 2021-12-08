import { RECEIVE_ALL_CATEGORIES, REMOVE_CATEGORY } from '../actions/deck_category_actions'

const DeckCategoryReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      action.categories.forEach((category, idx) => {
        nextState[idx + 1] = {
          id: idx + 1,
          name: category.name,
          name_encoded: category.name_encoded
        }
      })
      return nextState
    case REMOVE_CATEGORY:
      delete nextState[action.category.id]
      return nextState
    default:
      return state;
  }
}

export default DeckCategoryReducer;