/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import { getAll, get } from "../actions/invoices";

type InvoicesStateProps = {
  invoices: InvoiceDto[];
  invoice: InvoiceDto;
};

const initialState = {
  invoices: [],
  invoice: {},
};

const invoicesReducer = createReducer<InvoicesStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.invoices = action.payload.data;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.invoice = action.payload;
  });
});

export default invoicesReducer;
