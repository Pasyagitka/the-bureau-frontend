import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearState, get, getRequests } from "@/redux/actions/clients";
import { ClientDto } from "@/types/dto/client/clientDto";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsItem from "../../elements/detailsItem/DetailsItem";
import RequestCompact from "../../components/admin/requestList/RequestCompact";

function ClientDetailsPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const client: ClientDto = useAppSelector((state) => state.clients.client);
  const requests = useAppSelector((state) => state.clients.requests);

  function load() {
    dispatch(clearState());
    dispatch(get(id));
    dispatch(getRequests(id));
  }
  useEffect(load, [dispatch]);

  const listItems = requests.map((item) => <RequestCompact key={item.id} request={item} showButtons={false} />);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">Информация о клиенте</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о клиенте</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem title="ФИО" value={`${client.surname} ${client.firstname} ${client.patronymic}`} isDark />
          <DetailsItem title="Email" value={client.user?.email} />
          <DetailsItem title="Контактный номер" value={`+${client.contactNumber}`} isDark />
        </dl>
      </div>
      <div className="w-1/2 flex flex-col justify-center mx-auto gap-5 my-5">{listItems}</div>
    </div>
  );
}

export default ClientDetailsPage;
