/* eslint-disable default-param-last */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/storage/accessories";

type AccessoriesStateProps = {
  accessories: AccessoriesDto[];
  accessorie: AccessoriesDto;
};

const initialState = {
  accessories: [],
  accessorie: {},
};

const accessoriesReducer = createReducer<AccessoriesStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.accessories = action.payload;
  });
  // builder.addCase(get.fulfilled, (state, action) => {
  //   state.accessorie = action.payload;
  // });
  // builder.addCase(create.fulfilled, (state, action) => {
  //   state.accessories.push(action.payload);
  // });
  // builder.addCase(remove.fulfilled, (state, action) => {
  //   state.accessories = state.accessories.filter((x) => x.id !== action.payload.id);
  // });
});

export default accessoriesReducer;
