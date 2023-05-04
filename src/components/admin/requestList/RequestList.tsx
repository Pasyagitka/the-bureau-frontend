import { RequestDto } from "@/types/dto/request/requestDto";
import RequestCompact from "./RequestCompact";

function RequestList({ requests = [], handleDownload }: { requests: RequestDto[]; handleDownload: () => void }) {
  return (
    <>
      <p className="text-2xl font-bold text-gray-800 mb-4">Список заявок</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {requests.map((request) => (
          <RequestCompact key={request.id} request={request} handleDownload={() => handleDownload(request.id)} />
        ))}
      </div>
    </>
  );
}

export default RequestList;
