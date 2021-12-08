import * as GiphyUtil from '../util/giphy_util';

export const RECEIVE_PLAYED_CATEGORY = 'RECEIVE_PLAYED_CATEGORY'
export const REMOVE_PLAYED_CATEGORY = 'REMOVE_PLAYED_CATEGORY'

export const receivePlayedCategory = (category) => ({
  type: RECEIVE_PLAYED_CATEGORY,
  category
})

export const removePlayedCategory = (category) => ({
  type: REMOVE_PLAYED_CATEGORY,
  category
})

export const fetchPlayedCategory = category => dispatch => GiphyUtil.getGifCategories(category)
  .then(category => dispatch(receivePlayedCategory(category)))

// remove from deck and add to played category