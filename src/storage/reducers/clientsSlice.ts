/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { ClientDto } from "@/types/dto/clientDto";
import { getAll } from "../actions/clients";

type ClientsStateProps = {
  clients: ClientDto[];
};

const initialState = {
  clients: [],
};

const clientsReducer = createReducer<ClientsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.clients = action.payload;
  });
});

export default clientsReducer;
