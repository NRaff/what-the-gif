import axios from "axios";

export const createGame = (gameData) => (
  axios.post('/api/games/create', gameData)
)

export const joinGame = (gameData) => (
  // Not sure on the routes name just guessing its join
  axios.post('/api/games/join', gameData)
)