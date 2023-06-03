import { requestLinks, scheduleLinks } from "@/constants";
import { UpdateRequestByAdminDto } from "@/types/dto/request/updateRequestByAdminDto";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fileDownload from "js-file-download";
import { UpdateRequestByBrigadierDto } from "@/types/dto/request/updateRequestByBrigadierDto";
import { CreateRequestDto } from "@/types/dto/request/createRequestDto";
import { toast } from "react-toastify";
import {
  ADD_REQUESTS,
  GET_ALL_REQUESTS,
  GET_REQUEST,
  EDIT_REQUESTS_BY_ADMIN,
  EDIT_REQUESTS_BY_BRIGADIER,
  GET_WEEKLY_REPORT,
  GET_FULL_REPORT,
  GET_REQUEST_ACCESSORIES,
  GET_REQUEST_TOOLS,
  GET_CALENDAR,
  GET_CALENDAR_FOR_BRIGADIER,
  GET_SCHEDULE_FOR_REQUEST,
} from "../actionTypes/requests";
import { getToken } from "./auth";
import { CLEAR_REQUESTS_STATE } from "../actionTypes/clearStates";

export const create = createAsyncThunk(
  ADD_REQUESTS,
  async (createRequestDto: CreateRequestDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(requestLinks.create, createRequestDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Заявка создана");
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAll = createAsyncThunk(GET_ALL_REQUESTS, async () => {
  const request = await axios.get(requestLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getWeeklyReport = createAsyncThunk(GET_WEEKLY_REPORT, async () => {
  const request = await axios.get(requestLinks.getWeeklyReport, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getCalendar = createAsyncThunk(GET_CALENDAR, async () => {
  const request = await axios.get(requestLinks.getCalendar, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getCalendarForBrigadier = createAsyncThunk(GET_CALENDAR_FOR_BRIGADIER, async (brigadierId: number) => {
  const request = await axios.get(requestLinks.getCalendarForBrigadier(brigadierId), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getScheduleForRequest = createAsyncThunk(GET_SCHEDULE_FOR_REQUEST, async (requestId: number) => {
  const request = await axios.get(scheduleLinks.getByRequestId(requestId), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getAccessories = createAsyncThunk(GET_REQUEST_ACCESSORIES, async (id: number) => {
  const request = await axios.get(requestLinks.getAccessories(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getTools = createAsyncThunk(GET_REQUEST_TOOLS, async (id: number) => {
  const request = await axios.get(requestLinks.getTools(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(GET_REQUEST, async (id: number) => {
  const request = await axios.get(requestLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const updateByAdmin = createAsyncThunk(
  EDIT_REQUESTS_BY_ADMIN,
  async (
    { id, updateRequestByAdminDto }: { id: number; updateRequestByAdminDto: UpdateRequestByAdminDto },
    { rejectWithValue }
  ) => {
    try {
      const request = await axios.patch(requestLinks.updateByAdmin(id), updateRequestByAdminDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Изменения сохранены");
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateByBrigadier = createAsyncThunk(
  EDIT_REQUESTS_BY_BRIGADIER,
  async (
    { id, updateRequestByBrigadierDto }: { id: number; updateRequestByBrigadierDto: UpdateRequestByBrigadierDto },
    { rejectWithValue }
  ) => {
    try {
      const request = await axios.patch(requestLinks.updateByBrigadier(id), updateRequestByBrigadierDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Изменения сохранены");
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getFullReport = createAsyncThunk(GET_FULL_REPORT, async (id: number) => {
  try {
    const request = await axios.get(requestLinks.getFullReport(id), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      responseType: "blob",
    });
    fileDownload(request.data, `request${id}.docx`);
  } catch (error) {
    toast.error(`${error.response.data.statusCode}: ${error.response.data.message}`);
  }
});

export const clearState = createAction(CLEAR_REQUESTS_STATE);
