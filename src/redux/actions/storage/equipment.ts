import { equipmentLinks } from "@/constants";
import {
  ADD_EQUIPMENT,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  GET_ALL_EQUIPMENT,
} from "@/redux/actionTypes/storage/equipment";
import { CreateEquipmentDto } from "@/types/dto/storage/equipment/createEquipmentDto";
import { UpdateEquipmentDto } from "@/types/dto/storage/equipment/updateEquipmentDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
export const create = createAsyncThunk(
  ADD_EQUIPMENT,
  async (createEquipmentDto: CreateEquipmentDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(equipmentLinks.create, createEquipmentDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Оборудование добавлено");
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAll = createAsyncThunk(GET_ALL_EQUIPMENT, async () => {
  const request = await axios.get(equipmentLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(EDIT_EQUIPMENT, async (id: number) => {
  const request = await axios.get(equipmentLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const remove = createAsyncThunk(DELETE_EQUIPMENT, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.delete(equipmentLinks.delete(id), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    toast.success("Оборудование удалено");

    return request.data;
  } catch (error) {
    toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);
    return rejectWithValue(error.response.data);
  }
});

export const update = createAsyncThunk(
  EDIT_EQUIPMENT,
  async ({ id, updateEquipmentDto }: { id: number; updateEquipmentDto: UpdateEquipmentDto }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(equipmentLinks.update(id), updateEquipmentDto, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      toast.success("Изменения сохранены");
      return request.data;
    } catch (error) {
      toast.error(`${error.response.data.statusCode}: ${error.response.data.message?.toString()}`);

      return rejectWithValue(error.response.data);
    }
  }
);
