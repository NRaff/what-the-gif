import * as GameUtil from '../util/game_util'
// import jwtDecode from 'jwt-decode'

// Action Types
export const RECEIVE_GAME = 'RECEIVE_GAME'
export const REMOVE_ALL_GAMES = 'REMOVE_ALL_GAMES'
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

export const removeAllGames = () => ({
  type: REMOVE_ALL_GAMES
})

// Thunk action for creating/joining a game

export const createGame = game => dispatch => GameUtil.createGame(game)
  .then((payload) => 
    (dispatch(receiveGame(payload.data))
  ), err => 
    dispatch(receiveErrors(err))
  );

export const joinGame = game => dispatch => GameUtil.joinGame(game)
  .then((payload) => 
    dispatch(receiveGame(payload.data)
  ), err => 
    dispatch(receiveErrors(err))
  )

