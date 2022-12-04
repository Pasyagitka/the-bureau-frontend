import { equipmentLinks } from "@/constants";
import { GET_ALL_EQUIPMENT } from "@/storage/actionTypes/storage/equipment";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/middleware/api";
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
export const getAll = createAsyncThunk(GET_ALL_EQUIPMENT, async () => {
  const request = await axios.get(equipmentLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
