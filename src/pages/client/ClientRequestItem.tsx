import RequestEquipment from "@/components/request/requestEquipment/RequestEquipment";
import BrigadierSmall from "@/elements/brigadierSmall/BrigadierSmall";
import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { ClientRequestDto } from "@/types/dto/client/clientRequestDto";

function ClientRequestItem({ request }: { request: ClientRequestDto }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        <div className="w-2/6 p-4">
          <RequestEquipment equipmentList={request.requestEquipment} />
        </div>
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {`${request.address?.country}, г. ${request.address?.city}, ул.${request.address?.street}, дом ${
              request.address?.house
            }${request.address?.corpus ?? ""}, кв. ${request.address?.flat}`}
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
          <div className="w-1/6 p-4">
            <BrigadierSmall brigadier={request.brigadier} />
          </div>
        ) : (
          <div className="w-1/6 p-4">
            <BrigadierSmall brigadier={{ firstname: "brigadier", surname: "No", patronymic: "" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientRequestItem;
