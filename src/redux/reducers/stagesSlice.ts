/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/stage";

type StageStateProps = {};

const initialState = {};

const stagesReducer = createReducer<StageStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state = action.payload;
  });
});

export default stagesReducer;
