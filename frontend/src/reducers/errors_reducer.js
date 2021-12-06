import { combineReducers } from "redux";
import SessionErrors from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: SessionErrors
})

export default errorsReducer