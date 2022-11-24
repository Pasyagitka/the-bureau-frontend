// import { Dispatch } from "redux";
// import axios from "../../api/middleware/api";
// import {
//   FETCH_ACTION_MOVIES,
//   FETCH_COMEDY_MOVIES,
//   FETCH_DOCUMENTARIES,
//   FETCH_HORROR_MOVIES,
//   FETCH_NETFLIX_ORIGINALS,
//   FETCH_ROMANCE_MOVIES,
//   FETCH_TOP_RATED,
//   FETCH_TRENDING,
// } from "../actionTypes/movies";
// import { moviesLinks } from "../../constants";

// export function fetchTrending() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.trending);
//     dispatch({ type: FETCH_TRENDING, payload: request.data.results });
//   };
// }

// export function fetchTopRated() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.topRated);
//     dispatch({ type: FETCH_TOP_RATED, payload: request.data.results });
//   };
// }

// export function fetchActionMovies() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.actionMovies);
//     dispatch({ type: FETCH_ACTION_MOVIES, payload: request.data.results });
//   };
// }

// export function fetchComedy() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.comedy);
//     dispatch({ type: FETCH_COMEDY_MOVIES, payload: request.data.results });
//   };
// }

// export function fetchHorrorMovies() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.horror);
//     dispatch({ type: FETCH_HORROR_MOVIES, payload: request.data.results });
//   };
// }

// export function fetchRomance() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.romance);
//     dispatch({ type: FETCH_ROMANCE_MOVIES, payload: request.data.results });
//   };
// }

// export function fetchDocumentaries() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.documentaries);
//     dispatch({ type: FETCH_DOCUMENTARIES, payload: request.data.results });
//   };
// }

// export function fetchNetflixOriginals() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(moviesLinks.netflixOriginals);
//     dispatch({ type: FETCH_NETFLIX_ORIGINALS, payload: request.data.results });
//   };
// }
