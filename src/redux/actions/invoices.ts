import { invoiceLinks } from "@/constants";
import { PaginatedForBrigadierQueryDto, PaginatedQueryDto } from "@/types/dto/query/paginatedQuery.Dto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fileDownload from "js-file-download";
import {
  CREATE_INVOICE,
  GET_ALL_INVOICES,
  GET_FOR_BRIGADIER,
  GET_INVOICE_ITEMS,
  GET_INVOICE_FILE,
} from "../actionTypes/invoices";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_ALL_INVOICES, async ({ offset = 0, limit = 10 }: PaginatedQueryDto) => {
  const request = await axios.get(invoiceLinks.getAll, {
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

export const getForBrigadier = createAsyncThunk(
  GET_FOR_BRIGADIER,
  async ({ brigadierId, offset = 0, limit = 10 }: PaginatedForBrigadierQueryDto) => {
    const request = await axios.get(invoiceLinks.getForBrigadier(brigadierId), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: {
        offset,
        limit,
      },
    });
    return request.data;
  }
);

export const getFile = createAsyncThunk(GET_INVOICE_FILE, async (id: number) => {
  const request = await axios.get(invoiceLinks.getFile(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    responseType: "blob",
  });
  // return request.data;
  fileDownload(request.data, `invoice${id}.docx`);
});

export const getItems = createAsyncThunk(GET_INVOICE_ITEMS, async (id: number) => {
  const request = await axios.get(invoiceLinks.getItems(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});

export const create = createAsyncThunk(CREATE_INVOICE, async (data: unknown) => {
  const request = await axios.post(invoiceLinks.create, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
