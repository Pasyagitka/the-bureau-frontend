import { ClientRequestDto } from "@/types/dto/client/clientRequestDto";
import ClientRequestItem from "./ClientRequestItem";

function ClientRequests({ requests }: { requests: ClientRequestDto[] }) {
  const listItems = requests.map((item) => <ClientRequestItem key={item.id} request={item} />);

  return (
    <div className="w-full bg-white p-2 md:p-12 rounded">
      <div className="header flex items-end justify-between md:mb-12">
        <div className="title">
          <p className="md:text-4xl text-xl font-bold text-gray-700 mb-4">Заявки</p>
          {/* <p className="text-2xl font-light text-gray-400">Описание...</p> */}
        </div>
      </div>
      {listItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-10">{listItems}</div>
      ) : (
        <p className="text-2xl font-light text-gray-400">У вас пока нет заявок</p>
      )}
    </div>
  );
}

export default ClientRequests;
