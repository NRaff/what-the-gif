import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import errorsReducer from "./errors/errors_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  ui: uiReducer,
  entities: EntitiesReducer,
  errors: errorsReducer
})

export default RootReducer;