/* eslint-disable default-param-last */
import { RequestDto } from "@/types/dto/requestDto";
import { createReducer } from "@reduxjs/toolkit";
import { create, get, getAll, remove, updateByAdmin, updateByBrigadier } from "../actions/requests";

type RequestsStateProps = {
  requests: RequestDto[];
  request: RequestDto;
};

const initialState = {
  requests: [],
  request: {},
};

const requestsReducer = createReducer<RequestsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.requests = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.request = action.payload;
  });
  builder.addCase(create.fulfilled, (state, action) => {
    state.requests.push(action.payload);
  });
  builder.addCase(updateByAdmin.fulfilled, (state, action) => {
    const index = state.requests.findIndex((tutorial) => tutorial.id === action.payload.id);
    state.requests[index] = {
      ...state.requests[index],
      ...action.payload,
    };
  });
  builder.addCase(updateByBrigadier.fulfilled, (state, action) => {
    const index = state.requests.findIndex((tutorial) => tutorial.id === action.payload.id);
    state.requests[index] = {
      ...state.requests[index],
      ...action.payload,
    };
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.requests = state.requests.filter((x) => x.id !== action.payload.id);
  });
});

export default requestsReducer;