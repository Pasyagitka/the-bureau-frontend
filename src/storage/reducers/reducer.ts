import { combineReducers } from "redux";
import accessoriesReducer from "./accessoriesSlice";
import authReducer from "./authSlice";
import equipmentReducer from "./equipmentSlice";
import toolsReducer from "./toolsSlice";
// import appReducer from "./appSlice";

const rootReducer = combineReducers({
  tools: toolsReducer,
  accessories: accessoriesReducer,
  equipment: equipmentReducer,
  auth: authReducer,
  // movies: moviesReducer,
  // search: searchReducer,
  // app: appReducer,
});

export default rootReducer;
