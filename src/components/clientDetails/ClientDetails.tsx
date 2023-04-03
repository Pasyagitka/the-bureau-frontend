import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/clients";
import { ClientDto } from "@/types/dto/client/clientDto";
import { useEffect } from "react";
import DetailsItem from "../request/requestDetails/DetailsItem";
import RequestSmall from "../request/requestList/RequestSmall";

function ClientDetails() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const client: ClientDto = useAppSelector((state) => state.clients.client);
  const requests = useAppSelector((state) => state.clients.requests);

  function load() {
    dispatch(get(user.client.id));
    dispatch(getRequests(user.client.id));
  }
  useEffect(load, [dispatch]);

  const listItems = requests.map((item) => <RequestSmall key={item.id} request={item} />);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Информация о клиенте</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о клиенте</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem title="ФИО" value={`${client.surname} ${client.firstname} ${client.patronymic}`} isDark />
          <DetailsItem title="Email" value={client.email} />
          <DetailsItem title="Контактный номер" value={`+${client.contactNumber}`} isDark />
        </dl>
      </div>
      <div className="w-1/2 flex flex-col justify-center mx-auto gap-5 my-5">{listItems}</div>
    </div>
  );
}

export default ClientDetails;
