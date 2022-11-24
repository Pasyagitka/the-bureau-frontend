// /* eslint-disable import/prefer-default-export */
// import { Dispatch } from "redux";
// import axios from "../../api/middleware/api";
// import { FETCH_SEARCH_MOVIE } from "../actionTypes/search";
// import { moviesLinks } from "../../constants";

// export function fetchSearchResult(searchQuery: string) {
//   return async (dispatch: Dispatch) => {
//     const path = moviesLinks.search + searchQuery;
//     const request = await axios.get(path);
//     dispatch({ type: FETCH_SEARCH_MOVIE, payload: request.data.results });
//   };
// }
