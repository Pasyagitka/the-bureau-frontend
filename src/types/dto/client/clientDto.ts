export type ClientDto = {
  id: number;
  surname: string;
  firstname: string;
  patronymic: string;
  contactNumber: number;

  user: {
    email: string;
  };
};
