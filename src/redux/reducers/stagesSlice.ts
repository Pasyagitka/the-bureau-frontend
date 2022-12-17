/* eslint-disable default-param-last */
import { StageDto } from "@/types/dto/stageDto";
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/stage";

type StageStateProps = {
  stages: StageDto[];
};

const initialState = {
  stages: [],
};

const stagesReducer = createReducer<StageStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.stages = action.payload;
  });
});

export default stagesReducer;
