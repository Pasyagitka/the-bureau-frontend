import { statisticsLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BRIGADIERS_COUNT,
  BRIGADIERS_TOP,
  CLIENTS_COUNT,
  INSTALLED_EQUIPMENT,
  INVOICES_STAT,
  REQUESTS_STAT,
  SOLD_ACCESSORIES,
} from "../actionTypes/statistics";
import { getToken } from "./auth";

export const getBrigadiersCount = createAsyncThunk(BRIGADIERS_COUNT, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getBrigadiersCount, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getClientsCount = createAsyncThunk(CLIENTS_COUNT, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getClientsCount, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getRequestsStat = createAsyncThunk(REQUESTS_STAT, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getRequestsStat, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getInvoicesStat = createAsyncThunk(INVOICES_STAT, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getInvoicesStat, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getBrigadiersTop = createAsyncThunk(BRIGADIERS_TOP, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getBrigadiersTop, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getInstalledEquipment = createAsyncThunk(INSTALLED_EQUIPMENT, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getInstalledEquipment, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});

export const getSoldAccessories = createAsyncThunk(SOLD_ACCESSORIES, async (month: Date) => {
  const request = await axios.get(statisticsLinks.getSoldAccessories, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      month,
    },
  });
  return request.data;
});
