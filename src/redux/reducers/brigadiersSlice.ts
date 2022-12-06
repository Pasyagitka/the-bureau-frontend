/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import { RequestDto } from "@/types/dto/requestDto";
import { getAll, get, getRequests, remove } from "../actions/brigadiers";

type BrigadiersStateProps = {
  brigadiers: BrigadierDto[];
  brigadier: BrigadierDto;
  requests: RequestDto[];
};

const initialState = {
  brigadiers: [],
  brigadier: {},
  requests: [],
};

const brigadiersReducer = createReducer<BrigadiersStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.brigadiers = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.brigadier = action.payload;
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.brigadiers = state.brigadiers.filter((x) => x.id !== action.payload.id);
  });
  builder.addCase(getRequests.fulfilled, (state, action) => {
    state.requests = action.payload;
  });
});

export default brigadiersReducer;
