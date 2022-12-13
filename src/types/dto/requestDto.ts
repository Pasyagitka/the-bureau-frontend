import { BrigadierDto } from "./brigadier/brigadierDto";
import { ClientDto } from "./client/clientDto";
import { RequestAccessoryDto } from "./requestAccessoriesDto";
import { RequestEquipmentDto } from "./requestEquipmentDto";
import { RequestToolDto } from "./requestToolsDto";
import { StageDto } from "./stageDto";

type AddressDto = {
  country: string;
  city: string;
  street: string;
  house: number;
  corpus: string;
  flat: string;
};

export type RequestDto = {
  id: number;
  client: ClientDto;
  brigadier?: BrigadierDto;
  address: AddressDto;
  status: string;
  comment: string;
  requestEquipment?: RequestEquipmentDto[];
  requestTools?: RequestToolDto[];
  requestAccessories?: RequestAccessoryDto[];
  stage: StageDto;
  mountingDate: Date;
};
