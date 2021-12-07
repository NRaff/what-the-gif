// import * as DeckUtil from '../util/game_util'  whatever util is needed
import * as GiphyUtil from '../util/giphy_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'
// export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS'

export const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
})

export const receiveErrors = errors => ({
  type: RECEIVE_CATEGORY_ERRORS,
  errors
})

export const removeCategory = (category) => ({
  type: REMOVE_CATEGORY,
  category
})

export const getGifCategories = categories => dispatch => GiphyUtil.getGifCategories(categories)
  .then((categories) =>
    (dispatch(receiveAllCategories(categories))
  ), err =>
    dispatch(receiveErrors(err))
)

export const getGameCategories = categories => dispatch => GiphyUtil.getGameCategories(categories)
  .then((categories) =>
    (dispatch(receiveAllCategories(categories))
  ), err =>
    dispatch(receiveErrors(err))
)