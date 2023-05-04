import RequestEquipmentList from "@/elements/requestEquipmentList/RequestEquipmentList";
import BrigadierCompact from "@/elements/brigadierCompact/BrigadierCompact";
import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { ClientRequestDto } from "@/types/dto/client/clientRequestDto";

function ClientRequestItem({ request }: { request: ClientRequestDto }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg flex-col md:flex-row overflow-hidden justify-between">
        <div className="w-full md:w-2/6 p-4">
          <RequestEquipmentList equipmentList={request.requestEquipment} />
        </div>
        <div className="p-4">
          <h1 className="text-gray-900 font-bold md:text-2xl">
            {`${request.address?.city}, ул.${request.address?.street}, дом ${request.address?.house} ${
              request.address?.flat ?? ""
            }`}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">{request.comment}</p>
          <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={request.stage.id} />
          </div>
          <div className="flex item-center justify-between mt-3">
            <RequestTimeline status={request.status} />
          </div>
        </div>
        {request.brigadier ? (
          <div className="w-full md:w-1/6 p-4">
            <BrigadierCompact brigadier={request.brigadier} />
          </div>
        ) : (
          <div className="w-full md:w-1/6 p-4">
            <BrigadierCompact brigadier={{ firstname: "назначен", surname: "Не", patronymic: "" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientRequestItem;
