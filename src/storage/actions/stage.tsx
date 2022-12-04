import { createAsyncThunk } from "@reduxjs/toolkit";
import { stageLinks } from "@/constants";
import axios from "axios";
import { getToken } from "./auth";
import { GET_ALL_STAGES } from "../actionTypes/stages";

// eslint-disable-next-line import/prefer-default-export
export const getAll = createAsyncThunk(GET_ALL_STAGES, async () => {
  const request = await axios.get(stageLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
