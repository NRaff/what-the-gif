import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: errorsReducer
})

export default RootReducer;