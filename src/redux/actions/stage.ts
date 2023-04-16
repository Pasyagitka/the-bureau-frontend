import { createAsyncThunk } from "@reduxjs/toolkit";
import { stageLinks } from "@/constants";
import axios from "axios";
import { getToken } from "./auth";
import { GET_ALL_STAGES, UPDATE_STAGE_PRICE } from "../actionTypes/stages";

export const getAll = createAsyncThunk(GET_ALL_STAGES, async () => {
  const request = await axios.get(stageLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const update = createAsyncThunk(UPDATE_STAGE_PRICE, async ({ id, data }: { id: number; data: unknown }) => {
  const request = await axios.patch(stageLinks.update(id), data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
