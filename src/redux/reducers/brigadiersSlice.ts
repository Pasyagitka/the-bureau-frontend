/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import { BrigadierRequestDto } from "@/types/dto/brigadierRequestDto";
import { getAll, get, getRequests, remove, activate, deactivate } from "../actions/brigadiers";

type BrigadiersStateProps = {
  brigadiers: BrigadierDto[];
  notApproved: BrigadierDto[];
  brigadier: BrigadierDto;
  requests: BrigadierRequestDto[];
};

const initialState = {
  brigadiers: [],
  notApproved: [],
  brigadier: {},
  requests: [],
};

const brigadiersReducer = createReducer<BrigadiersStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.brigadiers = action.payload;
  });
  builder.addCase(activate.fulfilled, (state, action) => {
    const index = state.brigadiers.findIndex((i) => i.user?.id === action.payload.id);
    state.brigadiers[index] = {
      ...state.brigadiers[index],
      user: {
        ...action.payload,
      },
    };
  });
  builder.addCase(deactivate.fulfilled, (state, action) => {
    const index = state.brigadiers.findIndex((i) => i.user?.id === action.payload.id);
    state.brigadiers[index] = {
      ...state.brigadiers[index],
      user: {
        ...action.payload,
      },
    };
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
