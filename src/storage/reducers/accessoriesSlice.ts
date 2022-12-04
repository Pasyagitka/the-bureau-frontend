/* eslint-disable default-param-last */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/storage/accessories";

type AccessoriesStateProps = {
  accessories: AccessoriesDto[];
};

const initialState = {
  accessories: [],
};

const accessoriesReducer = createReducer<AccessoriesStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.accessories = action.payload;
  });
});

export default accessoriesReducer;
