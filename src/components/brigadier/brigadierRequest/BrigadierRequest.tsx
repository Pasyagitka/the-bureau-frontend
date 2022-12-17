import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { BrigadierRequestDto } from "@/types/dto/brigadierRequestDto";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";
import RequestEquipment from "@/components/request/requestEquipment/RequestEquipment";
import RequestTools from "@/components/request/requestTools/RequestTools";
import RequestAccessories from "@/components/request/requestAccessories/RequestAccessories";

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
            }${request.address?.corpus ?? ""}, кв. ${request.address?.flat}`}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`Client: ${request.client?.surname} ${request.client?.firstname} ${request.client?.patronymic}`}
          </p>
          <p className="mt-2 text-gray-600 text-sm">{request.comment}</p>
          <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={3} />
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
              Details
            </button>
            <Collapse isOpened={visible}>
              <div className="flex flex-row h-fit">
                <div className="w-1/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Equipment</p>
                  <RequestEquipment equipmentList={request.requestEquipment} />
                </div>
                <div className="w-2/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Accessories</p>
                  <RequestAccessories accessories={request.requestAccessories} />
                </div>
                <div className="w-1/3">
                  <p className="mt-2 text-gray-600 text-sm text-center">Tools</p>
                  <RequestTools tools={request.requestTools} />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <Link
          to={`requests/${request.id}/edit`}
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
        >
          <img
            src="https://img.icons8.com/3d-fluency/512/edit.png"
            width="30px"
            height="30px"
            alt="Edit"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default BrigadierRequest;
