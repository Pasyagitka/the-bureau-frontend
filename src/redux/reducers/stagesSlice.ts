/* eslint-disable default-param-last */
import { StageDto } from "@/types/dto/stageDto";
import { createReducer } from "@reduxjs/toolkit";
import { update } from "../actions/brigadiers";
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
  builder.addCase(update.fulfilled, (state, action) => {
    const index = state.stages.findIndex((item) => item.id === action.payload.id);
    state.stages[index] = {
      ...state.stages[index],
      ...action.payload,
    };
  });
});

export default stagesReducer;
