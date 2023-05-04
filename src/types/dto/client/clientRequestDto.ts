import { BrigadierDto } from "../brigadier/brigadierDto";
import { RequestEquipmentDto } from "../request/requestEquipmentDto";
import { StageDto } from "../stageDto";

type AddressDto = {
  city: string;
  street: string;
  house: number;
  flat: string;
  lat: string;
  lon: string;
};

export type ClientRequestDto = {
  id: number;
  brigadier: BrigadierDto;
  address: AddressDto;
  status: string;
  stage: StageDto;
  comment: string;
  requestEquipment: RequestEquipmentDto[];
};
