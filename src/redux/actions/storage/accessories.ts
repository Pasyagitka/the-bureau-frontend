/* eslint-disable import/no-cycle */
import { accessoriesLinks } from "@/constants";
import {
  ADD_ACCESSORIES,
  DELETE_ACCESSORIES,
  EDIT_ACCESSORIES,
  GET_ALL_ACCESSORIES,
  GET_AVAILABLE_FOR_INVOICE,
} from "@/redux/actionTypes/storage/accessories";
import { CreateAccessoryDto } from "@/types/dto/storage/accessories/createAccessoryDto";
import { UpdateAccessoryDto } from "@/types/dto/storage/accessories/updateAccessoryDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // TODO use axios custom instance or setup
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
export const create = createAsyncThunk(
  ADD_ACCESSORIES,
  async (createAccessoriesDto: CreateAccessoryDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(accessoriesLinks.create, createAccessoriesDto, {
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

export const getAll = createAsyncThunk(
  GET_ALL_ACCESSORIES,
  async ({ offset = 0, limit = 10, searchQuery, filterQuery }) => {
    const request = await axios.get(accessoriesLinks.getAll, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: {
        offset,
        limit,
        search: searchQuery || null,
        equipmentId: filterQuery || null,
      },
    });
    return request.data;
  }
);

export const getAvailableForInvoice = createAsyncThunk(GET_AVAILABLE_FOR_INVOICE, async () => {
  const request = await axios.get(accessoriesLinks.getAvaliableForInvoice, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(EDIT_ACCESSORIES, async (id: number) => {
  const request = await axios.get(accessoriesLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const remove = createAsyncThunk(DELETE_ACCESSORIES, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.delete(accessoriesLinks.delete(id), {
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
  EDIT_ACCESSORIES,
  async (
    { id, updateAccessoriesDto }: { id: number; updateAccessoriesDto: UpdateAccessoryDto },
    { rejectWithValue }
  ) => {
    try {
      const request = await axios.patch(accessoriesLinks.update(id), updateAccessoriesDto, {
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
