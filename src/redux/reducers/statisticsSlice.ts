/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import {
  getBrigadiersCount,
  getClientsCount,
  getRequestsStat,
  getInvoicesStat,
  getBrigadiersTop,
  getInstalledEquipment,
  getSoldAccessories,
} from "../actions/statistics";

type StatisticsStateProps = {
  brigadiersCount: number;
  clientsCount: number;
  requestsStat: unknown;
  invoicesStat: unknown;
  brigadiersTop: unknown;
  installedEquipment: number;
  soldAccessories: number;
};

const initialState = {};

const statisticsReducer = createReducer<StatisticsStateProps>(initialState, (builder) => {
  builder.addCase(getBrigadiersCount.fulfilled, (state, action) => {
    state.brigadiersCount = action.payload;
  });
  builder.addCase(getClientsCount.fulfilled, (state, action) => {
    state.clientsCount = action.payload;
  });
  builder.addCase(getRequestsStat.fulfilled, (state, action) => {
    state.requestsStat = action.payload;
  });
  builder.addCase(getInvoicesStat.fulfilled, (state, action) => {
    state.invoicesStat = action.payload;
  });
  builder.addCase(getBrigadiersTop.fulfilled, (state, action) => {
    state.brigadiersTop = action.payload;
  });
  builder.addCase(getInstalledEquipment.fulfilled, (state, action) => {
    state.installedEquipment = action.payload;
  });
  builder.addCase(getSoldAccessories.fulfilled, (state, action) => {
    state.soldAccessories = action.payload;
  });
});

export default statisticsReducer;
