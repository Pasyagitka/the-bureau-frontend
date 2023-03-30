/* eslint-disable default-param-last */
import { ToolsDto } from "@/types/dto/storage/tools/toolsDto";
import { createReducer } from "@reduxjs/toolkit";
import { create, get, getAll, remove, update } from "../actions/storage/tools";

type ToolsStateProps = {
  tools: ToolsDto[];
  total: number;
  tool: ToolsDto;
};

const initialState = {
  tools: [],
  total: 0,
  tool: {},
};

const toolsReducer = createReducer<ToolsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.tools = action.payload.data;
    state.total = action.payload.total;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.tool = action.payload;
  });
  builder.addCase(create.fulfilled, (state, action) => {
    state.tools.push(action.payload);
  });
  builder.addCase(update.fulfilled, (state, action) => {
    const index = state.tools.findIndex((tutorial) => tutorial.id === action.payload.id);
    state.tools[index] = {
      ...state.tools[index],
      ...action.payload,
    };
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.tools = state.tools.filter((x) => x.id !== action.payload.id);
  });
});

export default toolsReducer;
