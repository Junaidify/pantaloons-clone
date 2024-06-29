import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { fetchData, wishlistReducer } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetchData,
  wishlistReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
