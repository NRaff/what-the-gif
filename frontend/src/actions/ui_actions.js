import { 
  GAME_STARTED, 
  GAME_OVER, 
  RESET_GAME 
} from "../util/game_dispatch";

export const startGame = () => ({
  type: GAME_STARTED
})

export const resetGame = () => ({
  type: RESET_GAME
})

export const endGame = () => ({
  type: GAME_OVER
})