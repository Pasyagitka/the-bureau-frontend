import { authLinks, userLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACTIVATE_USER, CHANGE_PASSWORD, DEACTIVATE_USER } from "../actionTypes/users";
import { getToken } from "./auth";

export const activate = createAsyncThunk(ACTIVATE_USER, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.patch(userLinks.activate(id), null, {
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

export const deactivate = createAsyncThunk(DEACTIVATE_USER, async (id: number, { rejectWithValue }) => {
  try {
    const request = await axios.patch(userLinks.deactivate(id), null, {
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

export const changePassword = createAsyncThunk(
  CHANGE_PASSWORD,
  async ({ changePasswordDto }: { changePasswordDto: unknown }, { rejectWithValue }) => {
    try {
      const request = await axios.patch(authLinks.changePassword, changePasswordDto, {
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
