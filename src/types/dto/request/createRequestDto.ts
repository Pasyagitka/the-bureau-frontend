type RequestEquipmentDto = {
  quantity: number;
  equipment: number;
};

export type CreateRequestDto = {
  mountingDate: Date;
  comment: string | null;
  stage: number;
  address: {
    city: string;
    street: string;
    house: string;
    flat: number | null;
    lat: string;
    lon: string;
  };
  requestEquipment: RequestEquipmentDto[];
};
