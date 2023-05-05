import { createAsyncThunk } from "@reduxjs/toolkit";
import { EDIT_CLIENTS, GET_ALL_CLIENTS, GET_CLIENT, GET_CLIENT_REQUESTS } from "@/redux/actionTypes/clients";
import axios from "axios";
import { clientLinks, requestLinks } from "@/constants";
import { UpdateClientDto } from "@/types/dto/client/updateClientDto";
import { toast } from "react-toastify";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_ALL_CLIENTS, async () => {
  const request = await axios.get(clientLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(GET_CLIENT, async (id: number) => {
  const request = await axios.get(clientLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const update = createAsyncThunk(
  EDIT_CLIENTS,
  async ({ id, updateClientDto }: { id: number; updateClientDto: UpdateClientDto }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(clientLinks.update(id), updateClientDto, {
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

export const getRequests = createAsyncThunk(GET_CLIENT_REQUESTS, async (id: number) => {
  const request = await axios.get(requestLinks.getClientRequests(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
