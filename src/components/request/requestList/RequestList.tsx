import { RequestDto } from "@/types/dto/requestDto";
import RequestSmall from "./RequestSmall";

function RequestList({
  requests = [],
  searchQuery,
  filterQuery,
  handleDownload,
}: {
  requests: RequestDto[];
  searchQuery: string;
  filterQuery: string;
  handleDownload: () => void;
}) {
  return (
    <>
      <p className="text-2xl font-bold text-gray-800 mb-4">Список заявок</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {requests
          .filter(
            (item) =>
              item.client.surname.toLowerCase().includes(searchQuery.toLowerCase()) &&
              item.status.toLowerCase().includes(filterQuery.toLowerCase())
          )
          .map((request) => (
            <RequestSmall key={request.id} request={request} handleDownload={() => handleDownload(request.id)} />
          ))}
      </div>
    </>
  );
}

export default RequestList;
