import { requestReportLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { GET_REQUEST_REPORTS, PATCH_REQUEST_REPORTS } from "../actionTypes/requestReports";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_REQUEST_REPORTS, async (requestId: number) => {
  const request = await axios.get(requestReportLinks.get(requestId), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const patch = createAsyncThunk(
  PATCH_REQUEST_REPORTS,
  async ({ requestId, files }: { requestId: number; files: unknown }, { rejectWithValue }) => {
    try {
      const response = await axios.post(requestReportLinks.create(requestId), files, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(`Отчетность обновлена`);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);
