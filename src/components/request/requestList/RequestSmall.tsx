import { RequestDto } from "@/types/dto/requestDto";
import { Link } from "react-router-dom";

function RequestSmall({ request }: { request: RequestDto }) {
  const colors = {
    InProcessing: "bg-lime-500",
    Completed: "bg-yellow-500",
    Approved: "bg-blue-500",
  };
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      {/* <Link to={`${request.id}`} > */}
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        {/* <div className="w-2/6 p-4">
          <RequestEquipment />
        </div> */}
        <Link to={`${request.id}`} className="p-2">
          <h1 className="text-gray-900 font-bold text-2xl">Request №{request.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`${request.address?.country}, г. ${request.address?.city}, ул.${request.address?.street}, дом ${
              request.address?.house
            }${request.address?.corpus ?? ""}, кв. ${request.address?.flat}`}
          </p>
          {/* <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={1} />
          </div> */}
          {/* <div className="flex item-center justify-between mt-3">
            <RequestTimeline />
          </div> */}
          <div className="flex gap-3">
            <p className="mt-2 text-gray-600 text-sm">
              {`Client: ${request.client?.surname} ${request.client?.firstname} ${request.client?.patronymic}`}
            </p>
            {/* <Link to={request.id} className="px-2 py-1 mt-2  text-xs rounded-full text-white  bg-lime-500 ">
              ?
            </Link> */}
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            {`Brigadier: ${
              request.brigadier
                ? `${request.brigadier?.surname} ${request.brigadier?.firstname} ${request.brigadier?.patronymic}`
                : "No"
            }`}
          </p>
        </Link>
        <div className="flex flex-row">
          <span className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white ${colors[request.status]} `}>
            {request.status}
          </span>
          <Link
            to={`${request.id}/edit`}
            className="flex-1 py-2 px-4 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequestSmall;
