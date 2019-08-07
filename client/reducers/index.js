import { combineReducers } from "redux";
import colleagueReducer from "./colleagueReducer.js";

const reducers = combineReducers({
  colleague: colleagueReducer
});

export default reducers;
