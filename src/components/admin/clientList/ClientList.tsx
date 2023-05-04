/* eslint-disable consistent-return */
import SearchInput from "@/elements/inputs/SearchInput";
import { ClientDto } from "@/types/dto/client/clientDto";
import ClientItem from "./ClientItem";

function ClientList({
  clients = [],
  handleRemove,
  handleApprove,
}: {
  clients: ClientDto[];
  handleRemove: () => void;
  handleApprove: () => void;
}) {
  const listItems = clients.map((client) => {
    if (!client?.user?.isActivated) return;
    return (
      <ClientItem
        key={client.id}
        client={client}
        handleClick={() => handleRemove(client?.user?.id)}
        clickTitle="Заблокировать"
      />
    );
  });
  const notApprovedlistItems = clients.map((client) => {
    if (client?.user?.isActivated) return;
    return (
      <ClientItem
        key={client.id}
        client={client}
        handleClick={() => handleApprove(client?.user?.id)}
        clickTitle="Подтвердить"
      />
    );
  });

  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Клиенты</p>
          <p className="text-2xl font-light text-gray-400">Описание...</p>
        </div>
        <div className="text-end">
          <SearchInput />
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{notApprovedlistItems}</div>
      </div>
      <hr />
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
      </div>
    </div>
  );
}

export default ClientList;
