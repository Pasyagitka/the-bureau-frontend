/* eslint-disable default-param-last */
import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_TRENDING,
  FETCH_TOP_RATED,
  FETCH_ACTION_MOVIES,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANCE_MOVIES,
  FETCH_DOCUMENTARIES,
  FETCH_NETFLIX_ORIGINALS,
} from "../actionTypes/movies";

const initialState = {};

function moviesReducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case FETCH_TRENDING: {
      return { ...state, trending: action.payload };
    }
    case FETCH_TOP_RATED: {
      return { ...state, topRated: action.payload };
    }
    case FETCH_ACTION_MOVIES: {
      return { ...state, action: action.payload };
    }
    case FETCH_COMEDY_MOVIES: {
      return { ...state, comedy: action.payload };
    }
    case FETCH_HORROR_MOVIES: {
      return { ...state, horror: action.payload };
    }
    case FETCH_ROMANCE_MOVIES: {
      return { ...state, romance: action.payload };
    }
    case FETCH_DOCUMENTARIES: {
      return { ...state, documentaries: action.payload };
    }
    case FETCH_NETFLIX_ORIGINALS: {
      return { ...state, netflixOriginals: action.payload };
    }
    default:
      return state;
  }
}

export default moviesReducer;
