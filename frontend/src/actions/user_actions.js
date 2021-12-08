import * as UserUtil from '../util/user_util'

export const RECEIVE_FAVORITE_GIF = "RECEIVE_FAVORITE_GIF";
export const REMOVE_FAVORITE_GIF = "REMOVE_FAVORITE_GIF";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveFavoriteGIF = user => ({
  type: RECEIVE_FAVORITE_GIF,
  user
});

export const removeFavoriteGIF = user => ({
  type: REMOVE_FAVORITE_GIF,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const setFavGIF = gif => dispatch => UserUtil.setFavoriteGIF(gif)
  .then((payload) => 
    (dispatch(receiveFavoriteGIF(payload.data.user))
    ), err =>
      dispatch(receiveErrors(err))
  );

export const deleteFavGIF = (user) => dispatch => UserUtil.removeFavoriteGIF(user)
  .then((payload) =>
  (dispatch(removeFavoriteGIF(payload.data.user))
  ), err =>
    dispatch(receiveErrors(err))
  );