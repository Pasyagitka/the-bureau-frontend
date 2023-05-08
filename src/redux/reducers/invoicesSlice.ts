/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import { getAll, getItems, getForBrigadier, remove, get, update } from "../actions/invoices";

type InvoicesStateProps = {
  invoices: InvoiceDto[];
  total: number;
  invoiceItems: Array<unknown>;
  invoice: InvoiceDto;
};

const initialState = {
  invoices: [],
  total: 0,
  invoice: {},
};

const invoicesReducer = createReducer<InvoicesStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.invoices = action.payload.data;
    state.total = action.payload.total;
  });
  builder.addCase(getForBrigadier.fulfilled, (state, action) => {
    state.invoices = action.payload.data;
    state.total = action.payload.total;
  });
  builder.addCase(getItems.fulfilled, (state, action) => {
    state.invoiceItems = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.invoice = action.payload;
  });
  builder.addCase(update.fulfilled, (state, action) => {
    const index = state.invoices.findIndex((item) => item.id === action.payload.id);
    state.invoices[index] = {
      ...state.invoices[index],
      ...action.payload,
    };
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.invoices = state.invoices.filter((x) => x.id !== action.payload.id);
  });
});

export default invoicesReducer;
