// import * as DeckUtil from '../util/game_util'  whatever util is needed
import * as GiphyUtil from '../util/giphy_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
// export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS'

export const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
})

export const removeCategory = (category) => ({
  type: REMOVE_CATEGORY,
  category
})

export const fetchGifCategories = () => dispatch => GiphyUtil.getGifCategories()
  .then(categories => {
    const cats = GiphyUtil.getGameCategories(categories)
    dispatch(receiveAllCategories(cats))
  })