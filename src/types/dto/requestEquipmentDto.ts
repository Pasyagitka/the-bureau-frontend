export type RequestEquipmentDto = {
  id: number;
  quantity: number;
  equipment: {
    type: string;
  };
};
