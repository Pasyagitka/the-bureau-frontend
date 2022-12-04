import { toolsLinks } from "@/constants";
import { CreateToolDto } from "@/types/dto/storage/tools/createToolDto";
import { UpdateToolDto } from "@/types/dto/storage/tools/updateToolDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/middleware/api";
import { ADD_TOOLS, DELETE_TOOLS, EDIT_TOOLS, GET_ALL_TOOLS, GET_TOOL } from "../../actionTypes/storage/tools";
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
// export function fetchTools() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(toolsLinks.getTools);
//     dispatch({ type: FETCH_TOOLS, payload: request.data.results });
//   };
// }

// eslint-disable-next-line import/prefer-default-export
export const create = createAsyncThunk(ADD_TOOLS, async (createToolDto: CreateToolDto) => {
  const request = await axios.post(toolsLinks.create, createToolDto, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const getAll = createAsyncThunk(GET_ALL_TOOLS, async () => {
  const request = await axios.get(toolsLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
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

export const remove = createAsyncThunk(DELETE_TOOLS, async (id: number) => {
  const request = await axios.delete(toolsLinks.delete(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const update = createAsyncThunk(
  EDIT_TOOLS,
  async ({ id, updateToolDto }: { id: number; updateToolDto: UpdateToolDto }) => {
    const request = await axios.put(toolsLinks.update(id), updateToolDto, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return request.data;
  }
);
