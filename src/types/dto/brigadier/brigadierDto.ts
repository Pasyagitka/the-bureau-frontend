import { UserDto } from "../userDto";

export type BrigadierDto = {
  id: number;
  surname: string;
  firstname: string;
  patronymic: string;
  contactNumber: number;
  user: UserDto;
};
