import { brigadierLinks, requestLinks } from "@/constants";
import { UpdateBrigadierDto } from "@/types/dto/brigadier/updateBrigadierDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_ALL_BRIGADIERS,
  GET_BRIGADIER,
  DELETE_BRIGADIERS,
  EDIT_BRIGADIERS,
  GET_BRIGADIER_REQUESTS,
  GET_RECOMMENDED_BRIGADIERS,
  UPLOAD_AVATAR,
} from "../actionTypes/brigadiers";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_ALL_BRIGADIERS, async () => {
  const request = await axios.get(brigadierLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(GET_BRIGADIER, async (id: number) => {
  const request = await axios.get(brigadierLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const remove = createAsyncThunk(DELETE_BRIGADIERS, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.delete(brigadierLinks.delete(id), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return request.data;
  } catch (error) {
    alert(`${error.response.data.statusCode}: ${error.response.data.message}`);
    return rejectWithValue(error.response.data);
  }
});

export const update = createAsyncThunk(
  EDIT_BRIGADIERS,
  async ({ id, updateBrigadierDto }: { id: number; updateBrigadierDto: UpdateBrigadierDto }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(brigadierLinks.update(id), updateBrigadierDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return request.data;
    } catch (error) {
      alert(`${error.response.data.statusCode}: ${error.response.data.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  UPLOAD_AVATAR,
  async ({ id, file }: { id: number; file: unknown }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(brigadierLinks.uploadAvatar(id), file, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return request.data;
    } catch (error) {
      alert(`${error.response.data.statusCode}: ${error.response.data.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRequests = createAsyncThunk(GET_BRIGADIER_REQUESTS, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.get(requestLinks.getBrigadierRequests(id), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return request.data;
  } catch (error) {
    alert(`${error.response.data.statusCode}: ${error.response.data.message}`);
    return rejectWithValue(error.response.data);
  }
});

export const getRecommended = createAsyncThunk(GET_RECOMMENDED_BRIGADIERS, async (date: Date) => {
  const request = await axios.get(brigadierLinks.getRecommended, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: { date },
  });
  return request.data;
});
