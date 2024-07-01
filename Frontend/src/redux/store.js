import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { cartReducer, fetchData, wishlistReducer } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetchData,
  wishlistReducer,
  cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
