import { combineReducers } from "redux";
import accessoriesReducer from "./accessoriesSlice";
import authReducer from "./authSlice";
import brigadiersSlice from "./brigadiersSlice";
import clientsSlice from "./clientsSlice";
import equipmentReducer from "./equipmentSlice";
import requestsSlice from "./requestsSlice";
import stagesSlice from "./stagesSlice";
import toolsReducer from "./toolsSlice";
// import appReducer from "./appSlice";

const rootReducer = combineReducers({
  tools: toolsReducer,
  accessories: accessoriesReducer,
  equipment: equipmentReducer,
  auth: authReducer,
  clients: clientsSlice,
  brigadiers: brigadiersSlice,
  stages: stagesSlice,
  requests: requestsSlice,
  // movies: moviesReducer,
  // search: searchReducer,
  // app: appReducer,
});

export default rootReducer;