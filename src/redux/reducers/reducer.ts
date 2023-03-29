import { combineReducers } from "redux";
import accessoriesReducer from "./accessoriesSlice";
import authReducer from "./authSlice";
import brigadiersSlice from "./brigadiersSlice";
import clientsSlice from "./clientsSlice";
import equipmentReducer from "./equipmentSlice";
import invoicesSlice from "./invoicesSlice";
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
  invoices: invoicesSlice,
});

export default rootReducer;
