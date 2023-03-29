import { invoiceLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fileDownload from "js-file-download";
import { GET_ALL_INVOICES, GET_INVOICE } from "../actionTypes/invoices";
import { getToken } from "./auth";

export const getAll = createAsyncThunk(GET_ALL_INVOICES, async () => {
  const request = await axios.get(invoiceLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    params: {
      offset: 0,
      limit: 10,
    },
  });
  return request.data;
});

export const get = createAsyncThunk(GET_INVOICE, async (id: number) => {
  const request = await axios.get(invoiceLinks.get(id), {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    responseType: "blob",
  });
  // return request.data;
  fileDownload(request.data, `invoice${id}.docx`);
});
