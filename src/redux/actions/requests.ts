import { requestLinks } from "@/constants";
import { CreateRequestDto } from "@/types/dto/createRequestDto";
import { UpdateRequestByAdminDto } from "@/types/dto/updateRequestByAdminDto";
import { UpdateRequestByBrigadierDto } from "@/types/dto/updateRequestByBrigadierDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_REQUESTS,
  GET_ALL_REQUESTS,
  GET_REQUEST,
  DELETE_REQUESTS,
  EDIT_REQUESTS_BY_ADMIN,
  EDIT_REQUESTS_BY_BRIGADIER,
} from "../actionTypes/requests";
import { getToken } from "./auth";

export const create = createAsyncThunk(
  ADD_REQUESTS,
  async (createRequestDto: CreateRequestDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(requestLinks.create, createRequestDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(`${error.response.data.statusCode}: ${error.response.data.message}`);
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

export const get = createAsyncThunk(GET_REQUEST, async (id: number) => {
  const request = await axios.get(requestLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const remove = createAsyncThunk(DELETE_REQUESTS, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.delete(requestLinks.delete(id), {
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

export const updateByAdmin = createAsyncThunk(
  EDIT_REQUESTS_BY_ADMIN,
  async ({ id, updateRequestDto }: { id: number; updateRequestDto: UpdateRequestByAdminDto }, { rejectWithValue }) => {
    try {
      const request = await axios.put(requestLinks.updateByAdmin(id), updateRequestDto, {
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

export const updateByBrigadier = createAsyncThunk(
  EDIT_REQUESTS_BY_BRIGADIER,
  async (
    { id, updateRequestDto }: { id: number; updateRequestDto: UpdateRequestByBrigadierDto },
    { rejectWithValue }
  ) => {
    try {
      const request = await axios.put(requestLinks.updateByBrigadier(id), updateRequestDto, {
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
