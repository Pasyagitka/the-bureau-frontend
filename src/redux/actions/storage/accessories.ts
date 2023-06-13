/* eslint-disable import/no-cycle */
import { accessoriesLinks } from "@/constants";
import {
  ADD_ACCESSORIES,
  DELETE_ACCESSORIES,
  EDIT_ACCESSORIES,
  EXPORT_ACCESSORIES,
  GET_ALL_ACCESSORIES,
  GET_AVAILABLE_FOR_INVOICE,
  IMPORT_ACCESSORIES,
} from "@/redux/actionTypes/storage/accessories";
import { CreateAccessoryDto } from "@/types/dto/storage/accessories/createAccessoryDto";
import { UpdateAccessoryDto } from "@/types/dto/storage/accessories/updateAccessoryDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import fileDownload from "js-file-download";
import { getToken } from "../auth";

export const create = createAsyncThunk(
  ADD_ACCESSORIES,
  async (createAccessoriesDto: CreateAccessoryDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(accessoriesLinks.create, createAccessoriesDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success(`Комплектующее добавлено`);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
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

// TODO что-то не то с EDIT
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
    toast.success(`Комплектующее удалено`);
    return request.data;
  } catch (error) {
    toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
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
      toast.success(`Изменения сохранены`);
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const importAccessories = createAsyncThunk(
  IMPORT_ACCESSORIES,
  async ({ file }: { id: number; file: unknown }, { rejectWithValue }) => {
    try {
      const request = await axios.post(accessoriesLinks.import, file, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(`Комплектующие обновлены (${request.data.total})`);
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const exportAccessories = createAsyncThunk(EXPORT_ACCESSORIES, async () => {
  const request = await axios.post(accessoriesLinks.export, null, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    responseType: "blob",
  });
  fileDownload(request.data, `accessories.csv`);
});
