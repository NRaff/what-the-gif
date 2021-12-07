import * as GameUtil from '../util/game_api_util'
import jwtDecode from 'jwt-decode'

// Action Types
export const RECEIVE_GAME = 'RECEIVE_GAME'
export const RECEIVE_GAME_ERRORS = 'RECEIVE_GAME_ERRORS'

// Actions
export const receiveGame = (game) => ({
  type: RECEIVE_GAME,
  game
})

export const receiveErrors = errors => ({
  type: RECEIVE_GAME_ERRORS,
  errors
})

// Thunk action for creating/joining a game

export const createGame = game => dispatch => GameUtil.createGame(game)
  .then((game) => 
    (dispatch(receiveGame(game))
  ), err => 
    dispatch(receiveErrors(err))
  );

export const joinGame = game => dispatch => GameUtil.joinGame(game)
  .then((game) => 
    dispatch(receiveGame(game)
  ), err => 
    dispatch(receiveErrors(err))
  )