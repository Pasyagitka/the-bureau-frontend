/* eslint-disable default-param-last */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import { createReducer } from "@reduxjs/toolkit";
import { create, get, getAll, remove } from "../actions/storage/accessories";

type AccessoriesStateProps = {
  accessories: AccessoriesDto[];
  total: number;
  accessory: AccessoriesDto;
};

const initialState = {
  accessories: [],
  total: 0,
  accessory: {},
};

const accessoriesReducer = createReducer<AccessoriesStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.accessories = action.payload.data;
    state.total = action.payload.total;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.accessory = action.payload;
  });
  builder.addCase(create.fulfilled, (state, action) => {
    state.accessories.push(action.payload);
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.accessories = state.accessories.filter((x) => x.id !== action.payload.id);
  });
});

export default accessoriesReducer;
