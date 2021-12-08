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

export const clearGifs = () => ({
  type: CLEAR_GIFS
})

export const fetchGifs = (searchTerm, num=10) => dispatch => {
  giphyUtil.searchGifs(searchTerm, num)
    .then( ({ data }) => {
      dispatch(receiveGifs(data.data))
    })
}

export const fetchGif = gifId => dispatch => {
  giphyUtil.searchGifs(gifId)
    .then(({ data }) => {
      dispatch(receiveGif(data.data))
    })
}