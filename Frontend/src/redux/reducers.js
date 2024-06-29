import { API_REQUEST, WISHLIST_API } from "../constants/actionTypes";
import { initialState, wishlistInitialState } from "./initialStates";

export const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST.FETCH:
      return { ...state, loading: true };

    case API_REQUEST.ERROR:
      return { ...state, loading: false, error: action.payload };

    case API_REQUEST.SUCCESS:
      return {
        ...state,
        loading: false,
        data: Array.isArray(action.payload)
          ? [...state.data, ...action.payload]
          : [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export const wishlistReducer = (state = wishlistInitialState, action) => {
  switch (action.type) {
    case WISHLIST_API.FETCH:
      return { ...state, loading: true };

    case WISHLIST_API.ERROR:
      return { ...state, loading: false, error: action.payload };

    case WISHLIST_API.SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          data: action.payload,
        },
      };

    default:
      return state;
  }
};
