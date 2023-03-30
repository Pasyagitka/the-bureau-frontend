import { ClientDto } from "@/types/dto/client/clientDto";
import AccentButton from "../buttons/AccentButton";

function ClientSmall({ client }: { client: ClientDto }) {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4">
      <div className="flex-row gap-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 dark:text-white text-lg font-medium">
            {client.surname} {client.firstname} {client.patronymic}
          </span>
          <span className="text-gray-400 text-xs">+{client.contactNumber}</span>
        </div>
        <AccentButton to={`${client.id}`} title="Больше" />
      </div>
    </div>
  );
}

export default ClientSmall;
