// import * as DeckUtil from '../util/game_util'  whatever util is needed
import { getCategories } from '../util/giphy_api_util';


export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const receiveAllCategories = (category) => ({
  type: RECEIVE_ALL_CATEGORIES,
  category
})

// export const receiveCategory = (category) => ({
//   type: RECEIVE_CATEGORY,
//   category
// })

export const removeCategory = () => ({
  type: REMOVE_CATEGORY
})

export const fetchCategories = () => dispatch => (
  getCategories()
    .then(categories => dispatch(receiveAllCategories(categories)))
    .catch(err => console.log(err))
)

// export const ;