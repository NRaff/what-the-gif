import { combineReducers } from "redux";
import SessionErrors from "./session_errors_reducer";
import gameErrors from "./game_errors_reducer";

const errorsReducer = combineReducers({
  session: SessionErrors,
  game: gameErrors
})

export default errorsReducer