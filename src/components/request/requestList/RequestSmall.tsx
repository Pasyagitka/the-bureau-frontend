import IconButton from "@/elements/buttons/IconButton";
import { RequestDto } from "@/types/dto/requestDto";
import { Link } from "react-router-dom";
import downloadIcon from "icons/download.png";
import editIcon from "icons/edit.png";

function RequestSmall({ request, handleDownload }: { request: RequestDto; handleDownload: () => void }) {
  const colors = {
    InProcessing: "bg-lime-500",
    Completed: "bg-yellow-500",
    Approved: "bg-blue-500",
  };
  const requestStatuses = {
    InProcessing: "В обработке",
    Completed: "Выполнена",
    Approved: "Подтверждена",
  };
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      {/* <Link to={`${request.id}`} > */}
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        {/* <div className="w-2/6 p-4">
          <RequestEquipment />
        </div> */}
        <Link to={`${request.id}`} className="p-2 w-2/3">
          <h1 className="text-gray-900 font-bold text-2xl">Заявка №{request.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`${request.address?.country}, г. ${request.address?.city}, ул.${request.address?.street}, дом ${
              request.address?.house
            }${request.address?.corpus ?? ""} ${request.address?.flat ?? ""}`}
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
        </Link>
        <div className="flex flex-col w-1/3">
          <span className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end ${colors[request.status]} `}>
            {requestStatuses[request.status]}
          </span>
          <div className="flex items-end justify-end gap-3 m-3 h-full">
            <IconButton icon={editIcon} alt="Delete" isLink to={`${request.id}/edit`} />
            <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestSmall;
