type RequestEquipmentDto = {
  quantity: number;
  equipment: number;
};

export type CreateRequestDto = {
  clientDateStart: Date;
  clientDateEnd: Date;
  comment: string | null;
  stage: number;
  address: {
    country: string;
    city: string;
    street: string;
    house: number;
    corpus: string | null;
    flat: number | null;
  };
  requestEquipment: RequestEquipmentDto[];
};
