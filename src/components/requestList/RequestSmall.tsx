import { RequestDto } from "@/types/dto/requestDto";
import { Link } from "react-router-dom";

function RequestSmall({ request }: { request: RequestDto }) {
  return (
    <Link to={`${request.id}`} className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        {/* <div className="w-2/6 p-4">
          <RequestEquipment />
        </div> */}
        <div className="p-2">
          <h1 className="text-gray-900 font-bold text-2xl">Request №{request.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {`${request.address.country}, г. ${request.address.city}, ул.${request.address.street}, дом ${
              request.address.house
            }${request.address.corpus ?? ""}, кв. ${request.address.flat}`}
          </p>
          {/* <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={1} />
          </div> */}
          {/* <div className="flex item-center justify-between mt-3">
            <RequestTimeline />
          </div> */}
          <div className="flex gap-3">
            <p className="mt-2 text-gray-600 text-sm">
              {`Client: ${request.client.surname} ${request.client.firstname} ${request.client.patronymic}`}
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
        </div>
        <span className="px-2 py-1 h-fit m-1 text-xs rounded-full text-white  bg-lime-500 ">{request.status}</span>
      </div>
    </Link>
  );
}

export default RequestSmall;
