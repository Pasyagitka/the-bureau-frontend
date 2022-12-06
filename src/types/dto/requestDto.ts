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
  brigadier: ClientDto;
  address: AddressDto;
  status: string;
};
