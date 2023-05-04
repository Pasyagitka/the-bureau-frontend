import IconButton from "@/elements/buttons/IconButton";
import { RequestDto } from "@/types/dto/requestDto";
import { Link } from "react-router-dom";
import downloadIcon from "icons/download.png";
import editIcon from "icons/edit.png";
import approveIcon from "icons/approve.png";
import { requestStatusesTitles, requestStatusesColors, RequestStatus } from "@/types/enum/request-statuses.enum";
import dayjs from "dayjs";
import DayJs from "react-dayjs";

function RequestSmall({
  detailsLink,
  notClickable,
  hideButtons,
  request,
  handleDownload,
}: {
  detailsLink: string;
  notClickable?: boolean;
  hideButtons?: boolean;
  request: RequestDto;
  handleDownload: () => void;
}) {
  const isExpired =
    dayjs(request.mountingDate).startOf("day") < dayjs().startOf("day") &&
    request.status !== RequestStatus.APPROVED &&
    request.status !== RequestStatus.COMPLETED;
  return (
    <div className="overflow-hidden shadow-lg rounded-lg w-full h-full cursor-pointer m-auto">
      {/* <Link to={`${request.id}`} > */}
      <div className="flex w-full h-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        {/* <div className="w-2/6 p-4">
          <RequestEquipment />
        </div> */}
        <Link to={detailsLink} className="p-2 w-2/3">
          <h1 className="text-gray-900 font-bold text-2xl">Заявка №{request.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`${request.address?.city}, ул.${request.address?.street}, дом ${request.address?.house}${
              request.address?.flat ? `, кв ${request.address?.flat}` : ""
            }`}
          </p>
          {/* <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={1} />
          </div> */}
          {/* <div className="flex item-center justify-between mt-3">
            <RequestTimeline />
          </div> */}
          <div className="flex gap-3">
            <p className="mt-2 text-gray-600 text-sm">
              {`Клиент: ${request.client?.surname} ${request.client?.firstname} ${request.client?.patronymic}`}
            </p>
            {/* <Link to={request.id} className="px-2 py-1 mt-2  text-xs rounded-full text-white  bg-lime-500 ">
              ?
            </Link> */}
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            {`Бригадир: ${
              request.brigadier
                ? `${request.brigadier?.surname} ${request.brigadier?.firstname} ${request.brigadier?.patronymic}`
                : "Нет"
            }`}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Дата монтажа: <DayJs format="DD.MM.YYYY">{request.mountingDate}</DayJs>
            {isExpired && (
              <span className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end bg-red-300 `}>
                Просрочена
              </span>
            )}
          </p>
        </Link>
        <div className="flex flex-col w-1/3">
          <span
            className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end ${
              requestStatusesColors[request.status]
            } `}
          >
            {requestStatusesTitles[request.status]}
          </span>

          <div className="flex items-end justify-end gap-3 m-3 h-full">
            {!hideButtons && (
              <>
                <IconButton icon={editIcon} alt="Delete" isLink to={`${request.id}/edit`} />
                <IconButton icon={approveIcon} alt="Approve" isLink to={`${request.id}/approve`} />
                <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

RequestSmall.defaultProps = {
  hideButtons: false,
  notClickable: false,
};

export default RequestSmall;
