import { API_REQUEST } from "../constants/actionTypes";
import { initialState } from "./initialStates";

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
