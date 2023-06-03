/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { RequestAccessoryDto } from "@/types/dto/request/requestAccessoriesDto";
import { RequestDto } from "@/types/dto/request/requestDto";
import { RequestToolDto } from "@/types/dto/request/requestToolsDto";
import {
  create,
  get,
  getAccessories,
  getAll,
  getCalendar,
  getTools,
  getWeeklyReport,
  updateByAdmin,
  updateByBrigadier,
  getCalendarForBrigadier,
  getScheduleForRequest,
  clearState,
} from "../actions/requests";

type RequestsStateProps = {
  requests: RequestDto[];
  request: RequestDto;
  requestTools: RequestToolDto[];
  requestAccessories: RequestAccessoryDto[];
  weeklyReport: Array<unknown>;
  calendar: Array<unknown>;
  brigadierHistory: Array<unknown>;
};

const initialState = {
  requests: [],
  request: {},
  requestTools: [],
  requestAccessories: [],
  weeklyReport: [],
  calendar: [],
  brigadierHistory: [],
};

const requestsReducer = createReducer<RequestsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.requests = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.request = action.payload;
  });
  builder.addCase(getAccessories.fulfilled, (state, action) => {
    state.requestAccessories = action.payload;
  });
  builder.addCase(getTools.fulfilled, (state, action) => {
    state.requestTools = action.payload;
  });
  builder.addCase(getWeeklyReport.fulfilled, (state, action) => {
    state.weeklyReport = action.payload;
  });
  builder.addCase(getCalendar.fulfilled, (state, action) => {
    state.calendar = action.payload;
  });
  builder.addCase(getCalendarForBrigadier.fulfilled, (state, action) => {
    state.calendar = action.payload;
  });
  builder.addCase(getScheduleForRequest.fulfilled, (state, action) => {
    state.brigadierHistory = action.payload;
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
  builder.addCase(clearState, () => initialState);
});

export default requestsReducer;
