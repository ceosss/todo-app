import AuthReducer from "./Auth/auth.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
});

export default rootReducer;
