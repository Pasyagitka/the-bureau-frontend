/* eslint-disable default-param-last */
import { PayloadAction } from "@reduxjs/toolkit";
import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actionTypes/auth";

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {},
};

export default function authReducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: false,
        currentUser: {},
      };
    default:
      return state;
  }
}
