import { BrigadierDto } from "../brigadier/brigadierDto";
import { RequestEquipmentDto } from "../requestEquipmentDto";
import { StageDto } from "../stageDto";

type AddressDto = {
  country: string;
  city: string;
  street: string;
  house: number;
  corpus: string;
  flat: string;
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
