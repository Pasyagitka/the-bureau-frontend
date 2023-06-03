/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */

import { createReducer } from "@reduxjs/toolkit";
import { clearRequestReportsState, getAll, patch } from "../actions/requestReports";

type RequestReportsStateProps = {
  requestReports: Array<unknown>;
};

const initialState = {
  requestReports: [],
};

const requestReportsReducer = createReducer<RequestReportsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.requestReports = action.payload;
  });
  builder.addCase(patch.fulfilled, (state, action) => {
    state.requestReports = action.payload;
  });
  builder.addCase(clearRequestReportsState, () => initialState);
});

export default requestReportsReducer;
