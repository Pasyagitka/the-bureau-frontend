import { ClientRequestDto } from "@/types/dto/client/clientRequestDto";
import ClientRequestItem from "./ClientRequestItem";

function ClientRequests({ requests }: { requests: ClientRequestDto[] }) {
  const listItems = requests.map((item) => <ClientRequestItem key={item.id} request={item} />);

  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Client Requests</p>
          <p className="text-2xl font-light text-gray-400">Description...</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">{listItems}</div>
    </div>
  );
}

export default ClientRequests;
