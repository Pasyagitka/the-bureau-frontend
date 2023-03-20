import { ClientDto } from "@/types/dto/client/clientDto";
import { Link } from "react-router-dom";
import DetailsItem from "../request/requestDetails/DetailsItem";

function ClientDetailsShort({ client }: { client: ClientDto }) {
  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Информация о клиенте</h3>
        <Link
          to={`update/${client.id}`}
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
        >
          Редактировать
        </Link>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem title="ФИО" value={`${client.surname} ${client.firstname} ${client.patronymic}`} isDark />
          <DetailsItem title="Email" value={client.user?.email} />
          <DetailsItem title="Контактный номер" value={`+${client.contactNumber}`} isDark />
        </dl>
      </div>
    </div>
  );
}

export default ClientDetailsShort;
