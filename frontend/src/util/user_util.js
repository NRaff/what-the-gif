import axios from "axios";

export const setFavoriteGIF = (gif) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.post('/api/users/fav/create', gif)
)

export const editFavoriteGIF = (gif) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.patch('/api/users/fav/edit', gif)
)

export const removeFavoriteGIF = (gifId) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.delete('/api/users/fav', gifId)
)