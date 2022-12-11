import { BrigadierDto } from "./brigadier/brigadierDto";
import { ClientDto } from "./client/clientDto";

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
  brigadier: BrigadierDto;
  address: AddressDto;
  status: string;
  comment: string;
};
