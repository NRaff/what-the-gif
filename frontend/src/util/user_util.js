import axios from "axios";

export const setFavoriteGIF = (payload) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.patch('/api/users/fav/create', payload)
)

// export const editFavoriteGIF = (gif) => (
//   // All routes are TEMP - will need to replace once the backend routes are created
//   axios.patch('/api/users/fav/edit', gif)
// )

export const removeFavoriteGIF = (user) => (
  // All routes are TEMP - will need to replace once the backend routes are created
  axios.patch('/api/users/fav/delete', user)
)