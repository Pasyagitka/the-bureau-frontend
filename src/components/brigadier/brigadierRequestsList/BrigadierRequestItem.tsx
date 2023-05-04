import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { BrigadierRequestDto } from "@/types/dto/request/brigadierRequestDto";
import RequestEquipmentList from "@/elements/requestEquipmentList/RequestEquipmentList";
import RequestAccessories from "@/elements/requestAccessoriesList/RequestAccessories";
import editIcon from "icons/edit.png";
import downloadIcon from "icons/download.png";
import IconButton from "@/elements/buttons/IconButton";
import dayjs from "dayjs";
import DayJs from "react-dayjs";
import { RequestStatus } from "@/types/enum/request-statuses.enum";

function BrigadierRequestItem({
  request,
  handleDownload,
}: {
  request: BrigadierRequestDto;
  handleDownload: () => void;
}) {
  const isExpired =
    dayjs(request.mountingDate).startOf("day") < dayjs().startOf("day") &&
    request.status !== RequestStatus.APPROVED &&
    request.status !== RequestStatus.COMPLETED;
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg flex-col md:flex-row overflow-hidden justify-between">
        <h1 className="text-gray-900 font-bold md:text-2xl md:m-5 mx-5 my-1">{request.id}</h1>
        <div className="p-4 w-full md:w-2/3">
          <h1 className="text-gray-900 font-bold md:text-2xl">
            {`${request.address?.city}, ул.${request.address?.street}, дом ${request.address?.house} ${
              request.address?.flat ?? ""
            } `}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`Клиент: ${request.client?.surname} ${request.client?.firstname} ${request.client?.patronymic}`}
          </p>
          <p className="mt-2 text-gray-600 text-sm">{request.comment}</p>
          <div className="flex flex-wrap items-center gap-2 md:my-5 my-1">
            <StageBadge stage={request.stage.id} />
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Дата монтажа: <DayJs format="DD.MM.YYYY">{request.mountingDate}</DayJs>
            {isExpired && (
              <span className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end bg-red-300 `}>
                Просрочена
              </span>
            )}
          </p>
          <div className="flex w-1/2 mx-auto flex-col md:w-full item-center justify-between mt-3">
            <RequestTimeline status={request.status} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex h-fit flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <p className="mt-2 text-gray-600 text-sm text-center">Оборудование</p>
                <RequestEquipmentList equipmentList={request.requestEquipment} />
              </div>
              <div className="w-full md:w-2/3">
                <p className="mt-2 text-gray-600 text-sm text-center mb-4">Комплектующие</p>
                <RequestAccessories accessories={request.requestAccessories} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-5 px-5 py-5 mt-2 border-b border-gray-200 bg-white text-sm w-32">
          <IconButton icon={editIcon} alt="Edit" isLink to={`requests/${request.id}/edit`} />
          <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
        </div>
      </div>
    </div>
  );
}

export default BrigadierRequestItem;
