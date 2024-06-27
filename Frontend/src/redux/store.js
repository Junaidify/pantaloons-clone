import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { fetchData } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetchData,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
