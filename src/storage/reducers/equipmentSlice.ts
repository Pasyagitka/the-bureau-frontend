/* eslint-disable default-param-last */
import { EquipmentDto } from "@/types/dto/equipmentDto";
import { createReducer } from "@reduxjs/toolkit";
import { getAll } from "../actions/storage/equipment";

type EquipmentStateProps = {
  equipment: EquipmentDto[];
};

const initialState = {
  equipment: [],
};

const equipmentReducer = createReducer<EquipmentStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.equipment = action.payload;
  });
});

export default equipmentReducer;
