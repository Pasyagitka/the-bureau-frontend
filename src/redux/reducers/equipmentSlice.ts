/* eslint-disable default-param-last */
import { EquipmentDto } from "@/types/dto/storage/equipment/equipmentDto";
import { createReducer } from "@reduxjs/toolkit";
import { create, get, getAll, remove } from "../actions/storage/equipment";

type EquipmentStateProps = {
  equipment: EquipmentDto[];
  total: number;
  equipmentItem: EquipmentDto;
};

const initialState = {
  equipment: [],
  total: 0,
  equipmentItem: {},
};

const equipmentReducer = createReducer<EquipmentStateProps>(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.equipment = action.payload;
  });
  builder.addCase(get.fulfilled, (state, action) => {
    state.equipmentItem = action.payload;
  });
  builder.addCase(create.fulfilled, (state, action) => {
    state.equipment.push(action.payload);
  });
  builder.addCase(remove.fulfilled, (state, action) => {
    state.equipment = state.equipment.filter((x) => x.id !== action.payload.id);
  });
});

export default equipmentReducer;
