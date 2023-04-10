import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { BrigadierRequestDto } from "@/types/dto/brigadierRequestDto";
import { useState } from "react";
import { Collapse } from "react-collapse";
import RequestEquipment from "@/components/request/requestEquipment/RequestEquipment";
import RequestAccessories from "@/components/request/requestAccessories/RequestAccessories";
import editIcon from "icons/edit.png";
import IconButton from "@/elements/buttons/IconButton";

function BrigadierRequest({ request }: { request: BrigadierRequestDto }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        <h1 className="text-gray-900 font-bold text-2xl m-5">{request.id}</h1>
        <div className="p-4 w-2/3">
          <h1 className="text-gray-900 font-bold text-2xl">
            {`${request.address?.country}, г. ${request.address?.city}, ул.${request.address?.street}, дом ${
              request.address?.house
            }${request.address?.corpus ?? ""} ${request.address?.flat ?? ""} `}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`Клиент: ${request.client?.surname} ${request.client?.firstname} ${request.client?.patronymic}`}
          </p>
          <p className="mt-2 text-gray-600 text-sm">{request.comment}</p>
          <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={request.stage.id} />
          </div>
          <div className="flex item-center justify-between mt-3">
            <RequestTimeline status={request.status} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <button
              type="button"
              className="text-gray-900 font-bold text-2xl m-5"
              onClick={(e) => setVisible(!visible)}
            >
              Детали
            </button>
            <Collapse isOpened={visible}>
              <div className="flex flex-row h-fit">
                <div className="w-1/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Оборудование</p>
                  <RequestEquipment equipmentList={request.requestEquipment} />
                </div>
                <div className="w-2/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Комплектующие</p>
                  <RequestAccessories accessories={request.requestAccessories} />
                </div>
                {/* <div className="w-1/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Инструменты</p>
                  <RequestTools tools={request.requestTools} />
                </div> */}
              </div>
            </Collapse>
          </div>
        </div>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <IconButton icon={editIcon} alt="Edit" isLink to={`requests/${request.id}/edit`} />
        </td>
      </div>
    </div>
  );
}

export default BrigadierRequest;
