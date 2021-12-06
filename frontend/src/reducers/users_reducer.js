
const UsersReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 1:
      return state;
    default:
      return state;
  }
}

export default UsersReducer;