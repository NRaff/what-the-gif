import axios from "axios";

export const setFavoriteGIF = (gif) => (
  axios.post('/api/users/fav/create', gif)
)

export const editFavoriteGIF = (gif) => (
  axios.patch('/api/users/fav/edit', gif)
)

export const removeFavoriteGIF = (gifId) => (
  axios.delete('/api/users/fav', gifId)
)