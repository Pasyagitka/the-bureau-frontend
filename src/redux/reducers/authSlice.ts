/* eslint-disable default-param-last */
import { PayloadAction } from "@reduxjs/toolkit";
import { AUTHENTICATED, GET_USER, NOT_AUTHENTICATED } from "../actionTypes/auth";

const initialState = {
  authChecked: false,
  loggedIn: false,
  role: "",
  id: null,
};

export default function authReducer(
  state = initialState,
  action: PayloadAction<{ role: "Admin" | "Client" | "Brigadier"; id: number }>
) {
  switch (action.type) {
    case AUTHENTICATED:
      console.log(action.payload);
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
      };
    case GET_USER:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
}
