/* eslint-disable default-param-last */
import { AUTHENTICATED, GET_USER, NOT_AUTHENTICATED } from "../actionTypes/auth";

const initialState = {
  authChecked: false,
  loggedIn: false,
  role: "",
  id: null,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: true,
        role: action.payload.role,
        id: action.payload.id,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: false,
        role: "",
        id: null,
        user: null,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
