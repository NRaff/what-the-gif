import * as giphyUtil from '../util/giphy_util'

export const RECEIVE_GIF = 'RECEIVE_GIF'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export const CLEAR_GIFS = 'CLEAR_GIFS'

const receiveGif = gif => ({
  type: RECEIVE_GIF,
  gif
})

const receiveGifs = gifs => ({
  type: RECEIVE_GIFS,
  gifs
})

const clearGifs = () => ({
  type: CLEAR_GIFS
})

export const fetchGifs = searchTerm => dispatch => {
  giphyUtil.searchGifs(searchTerm)
    .then( ({ data }) => {
      debugger
      dispatch(receiveGifs(data.data))
    })
}