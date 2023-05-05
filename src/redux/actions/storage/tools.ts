import { toolsLinks } from "@/constants";
import { PaginatedQueryDto } from "@/types/dto/query/paginatedQuery.Dto";
import { CreateToolDto } from "@/types/dto/storage/tools/createToolDto";
import { UpdateToolDto } from "@/types/dto/storage/tools/updateToolDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { ADD_TOOLS, DELETE_TOOLS, EDIT_TOOLS, GET_ALL_TOOLS, GET_TOOL } from "../../actionTypes/storage/tools";
import { getToken } from "../auth";

export const create = createAsyncThunk(ADD_TOOLS, async (createToolDto: CreateToolDto, { rejectWithValue }) => {
  try {
    const response = await axios.post(toolsLinks.create, createToolDto, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    toast.success("Инструмент добавлен");
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.statusCode}: ${error.response.data.message}`);
    return rejectWithValue(error.response.data);
  }
});

export const getAll = createAsyncThunk(GET_ALL_TOOLS, async ({ offset = 0, limit = 10 }: PaginatedQueryDto) => {
  const request = await axios.get(toolsLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      offset,
      limit,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(GET_TOOL, async (id: number) => {
  const request = await axios.get(toolsLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const remove = createAsyncThunk(DELETE_TOOLS, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.delete(toolsLinks.delete(id), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    toast.success("Инструмент удален");
    return request.data;
  } catch (error) {
    toast.error(`${error.response.data.statusCode}: ${error.response.data.message}`);
    return rejectWithValue(error.response.data);
  }
});

export const update = createAsyncThunk(
  EDIT_TOOLS,
  async ({ id, updateToolDto }: { id: number; updateToolDto: UpdateToolDto }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(toolsLinks.update(id), updateToolDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Изменения сохранены");
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
