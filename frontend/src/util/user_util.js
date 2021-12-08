import axios from "axios";

export const setFavoriteGIF = (payload) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.patch('/api/users/fav/create', payload)
)

export const editFavoriteGIF = (gif) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.patch('/api/users/fav/edit', gif)
)

export const removeFavoriteGIF = (gifId) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.delete('/api/users/fav', gifId)
)