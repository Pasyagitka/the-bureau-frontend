import { accessoriesLinks } from "@/constants";
import { GET_ALL_ACCESSORIES } from "@/redux/actionTypes/storage/accessories";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/middleware/api";
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
export const getAll = createAsyncThunk(GET_ALL_ACCESSORIES, async () => {
  const request = await axios.get(accessoriesLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
