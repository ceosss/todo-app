import AuthReducer from "./Auth/auth.reducer";
import DataReducer from "./Data/data.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
  DataReducer,
});

export default rootReducer;
