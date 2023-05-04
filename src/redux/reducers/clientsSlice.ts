/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { ClientDto } from "@/types/dto/client/clientDto";
import { RequestDto } from "@/types/dto/request/requestDto";
import { getAll, get, getRequests } from "../actions/clients";
import { activate, deactivate } from "../actions/users";

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
  builder.addCase(activate.fulfilled, (state, action) => {
    const index = state.clients.findIndex((i) => i.user?.id === action.payload.id);
    state.clients[index] = {
      ...state.clients[index],
      user: {
        ...action.payload,
      },
    };
  });
  builder.addCase(deactivate.fulfilled, (state, action) => {
    const index = state.clients.findIndex((i) => i.user?.id === action.payload.id);
    state.clients[index] = {
      ...state.clients[index],
      user: {
        ...action.payload,
      },
    };
  });
});

export default clientsReducer;
