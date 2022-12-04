/* eslint-disable default-param-last */
import { createReducer } from "@reduxjs/toolkit";
import { ClientDto } from "@/types/dto/clientDto";
import { RequestDto } from "@/types/dto/requestDto";
import { getAll, get, getRequests } from "../actions/clients";

type ClientsStateProps = {
  clients: ClientDto[];
  client: ClientDto;
  requests: RequestDto[];
};

const initialState = {
  clients: [],
  client: {},
  requests: [],
};

const clientsReducer = createReducer<ClientsStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.clients = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.client = action.payload;
  });
  builder.addCase(getRequests.fulfilled, (state, action) => {
    state.requests = action.payload;
  });
});

export default clientsReducer;
