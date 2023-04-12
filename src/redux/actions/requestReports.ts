import { requestReportLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_REQUEST_REPORTS } from "../actionTypes/requestReports";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_REQUEST_REPORTS, async (requestId: number) => {
  const request = await axios.get(requestReportLinks.get(requestId), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
