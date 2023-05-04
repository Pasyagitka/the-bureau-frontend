import AccentButton from "@/elements/buttons/AccentButton";
import { ClientDto } from "@/types/dto/client/clientDto";
import DetailsItem from "../../../elements/detailsItem/DetailsItem";

function ClientProfileInfo({ client }: { client: ClientDto }) {
  return (
    <div className="w-full bg-white md:p-12 p-2 rounded">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="md:text-4xl text-xl font-bold text-gray-800 mb-4">Личная информация</h3>
        <AccentButton to="update" title="Редактировать" />
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

export default ClientProfileInfo;
