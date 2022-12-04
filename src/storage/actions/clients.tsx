import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_CLIENTS } from "@/storage/actionTypes/clients";
import axios from "axios";
import { clientLinks } from "@/constants";
import { getToken } from "./auth";

// eslint-disable-next-line import/prefer-default-export
export const getAll = createAsyncThunk(GET_ALL_CLIENTS, async () => {
  const request = await axios.get(clientLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
