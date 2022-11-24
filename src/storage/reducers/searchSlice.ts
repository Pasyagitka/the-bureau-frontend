/* eslint-disable default-param-last */
import { PayloadAction } from "@reduxjs/toolkit";
import { FETCH_SEARCH_MOVIE } from "../actionTypes/search";

const initialState = {};

function searchReducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case FETCH_SEARCH_MOVIE: {
      return { ...state, result: action.payload };
    }
    default:
      return state;
  }
}

export default searchReducer;
