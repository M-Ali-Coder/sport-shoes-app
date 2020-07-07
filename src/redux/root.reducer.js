import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  // key: reducer
  user: userReducer,
});

export default rootReducer;
