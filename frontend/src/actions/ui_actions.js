import { 
  GAME_STARTED, 
  GAME_OVER, 
  RESET_GAME 
} from "../util/game_dispatch";

export const ROUND_OVER = 'ROUND_OVER'
export const RESET_ROUND = 'RESET_ROUND'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const NEXT_ROUND = 'NEXT_ROUND'
export const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
export const TOGGLE_TIME_UP = 'TOGGLE_TIME_UP'
export const TOGGLE_SHOW_SUBMITTED = 'TOGGLE_SHOW_SUBMITTED'

export const startGame = () => ({
  type: GAME_STARTED
})

export const resetGame = () => ({
  type: RESET_GAME
})

export const endGame = () => ({
  type: GAME_OVER
})

export const roundOver = () => ({
  type: ROUND_OVER
})

export const resetRound = () => ({
  type: RESET_ROUND
})

export const updateCategory = () => ({
  type: UPDATE_CATEGORY
})

export const nextRound = (roundNum) => ({
  type: NEXT_ROUND,
  roundNum
})

export const setCurrentGame = game => ({
  type: SET_CURRENT_GAME,
  game
})

export const toggleTimeUp = () => ({
  type: TOGGLE_TIME_UP
})

export const toggleShowSubmitted= () => ({
  type: TOGGLE_SHOW_SUBMITTED
})