/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import { getAll, get, getForBrigadier } from "../actions/invoices";

type InvoicesStateProps = {
  invoices: InvoiceDto[];
  total: number;
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
  builder.addCase(get.fulfilled, (state, action) => {
    state.invoice = action.payload;
  });
});

export default invoicesReducer;
