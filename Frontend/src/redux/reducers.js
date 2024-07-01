import { API_REQUEST, CART_API, WISHLIST_API } from "../constants/actionTypes";
import { cartInitialState, initialState, wishlistInitialState } from "./initialStates";

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

    case WISHLIST_API.DELETE:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          data: state.data.data.filter((item) => item.id !== action.payload),
        },
      };

    default:
      return state;
  }
};


export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case CART_API.FETCH:
      return { ...state, loading: true };

    case CART_API.ERROR:
      return { ...state, loading: false, error: action.payload };

    case CART_API.SUCCESS:
      return {
        ...state,
        loading: false,
        data: Array.isArray(action.payload) ? action.payload : [action.payload]
      };

    case CART_API.DELETE:
      return {
        ...state,
        loading: false,
        data: state.data.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};


