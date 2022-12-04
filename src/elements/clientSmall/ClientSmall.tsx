import { ClientDto } from "@/types/dto/clientDto";
import { Link } from "react-router-dom";

function ClientSmall({ client }: { client: ClientDto }) {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className=" flex flex-col">
          <span className="text-gray-600 dark:text-white text-lg font-medium">
            {client.surname} {client.firstname} {client.patronymic}
          </span>
          <span className="text-gray-400 text-xs">Requests: 1</span>
        </div>
        {/* <button
          type="button"
          className="flex-1 py-2 px-4 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          View
        </button> */}
        <Link
          to={`${client.id}`}
          className="flex-1 py-2 px-4 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ClientSmall;
