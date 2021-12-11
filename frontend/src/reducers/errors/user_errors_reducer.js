import { 
  RECEIVE_USER_ERRORS, 
  CLEAR_ERRORS 
} from "../../actions/user_actions";

const userErrors = (state = {}, action) => {
  Object.freeze(state)

  switch (action.value) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default userErrors