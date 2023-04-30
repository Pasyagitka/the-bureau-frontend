import { ClientDto } from "@/types/dto/client/clientDto";
import AccentButton from "@/elements/buttons/AccentButton";

function ClientItem({
  client,
  clickTitle,
  handleClick,
}: {
  client: ClientDto;
  clickTitle: string;
  handleClick: () => void;
}) {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4">
      <div className="flex-row gap-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600 text-lg font-medium">
            {client.surname} {client.firstname} {client.patronymic}
          </span>
          <span className="text-gray-400 text-xs">+{client.contactNumber}</span>
        </div>
        <div className="flex item-center justify-between mt-3">
          {/* <h1 className="text-gray-700 font-bold text-xl">бригадир</h1> */}
          <button type="button" onClick={() => handleClick()}>
            {clickTitle}
          </button>
        </div>
        <AccentButton to={`${client.id}`} title="Больше" />
      </div>
    </div>
  );
}

export default ClientItem;
