import * as UserUtil from '../util/user_util'

export const RECEIVE_FAVORITE_GIF = "RECEIVE_FAVORITE_GIF";
export const REMOVE_FAVORITE_GIF = "REMOVE_FAVORITE_GIF";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveFavoriteGIF = gif => ({
  type: RECEIVE_FAVORITE_GIF,
  gif
});

export const removeFavoriteGIF = gifId => ({
  type: REMOVE_FAVORITE_GIF,
  gifId
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const setFavGIF = gif => dispatch => UserUtil.setFavoriteGIF(gif)
  .then((gif) => 
    (dispatch(receiveFavoriteGIF(gif))
    ), err =>
      dispatch(receiveErrors(err))
  );

export const updateFavGIF = gif => dispatch => UserUtil.editFavoriteGIF(gif)
  .then((gif) =>
  (dispatch(receiveFavoriteGIF(gif))
  ), err =>
    dispatch(receiveErrors(err))
  );

export const deleteFavGIF = gifId => dispatch => UserUtil.editFavoriteGIF(gifId)
  .then(() =>
  (dispatch(removeFavoriteGIF(gifId))
  ), err =>
    dispatch(receiveErrors(err))
  );