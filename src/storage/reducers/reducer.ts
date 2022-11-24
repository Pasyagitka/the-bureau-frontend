import { combineReducers } from "redux";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
// import appReducer from "./appSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  // app: appReducer,
});

export default rootReducer;
