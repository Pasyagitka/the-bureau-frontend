/* eslint-disable default-param-last */
import { ToolsDto } from "@/types/dto/storage/tools/toolsDto";
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/storage/tools";

type ToolsStateProps = {
  tools: ToolsDto[];
};

const initialState = {
  tools: [],
};

const toolsReducer = createReducer<ToolsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.tools = action.payload;
  });
});

export default toolsReducer;
