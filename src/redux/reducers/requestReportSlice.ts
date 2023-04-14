/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { getAll, patch } from "../actions/requestReports";

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
});

export default requestReportsReducer;
