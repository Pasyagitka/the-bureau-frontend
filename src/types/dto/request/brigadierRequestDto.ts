import { RequestDto } from "./requestDto";

type RequestEquipmentDto = {
  equipmentId: number;
  quantity: number;
};

export type BrigadierRequestDto = RequestDto & {
  requestEquipment: RequestEquipmentDto[];
};
