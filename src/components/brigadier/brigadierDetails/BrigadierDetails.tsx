import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import { Link } from "react-router-dom";
import DetailsItem from "../../request/requestDetails/DetailsItem";

function BrigadierInfo({ brigadier }: { brigadier: BrigadierDto }) {
  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12" />
      <div className="title">
        <p className="text-4xl font-bold text-gray-800 mb-4">Brigadier Info</p>
        {/* <p className="text-2xl font-light text-gray-400">Description...</p> */}
        <Link
          to={`update/${brigadier.id}`}
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
      <div className="border-t border-gray-200 mt-4">
        <dl>
          <DetailsItem
            title="Full name"
            value={`${brigadier.surname} ${brigadier.firstname} ${brigadier.patronymic}`}
            isDark
          />
          <DetailsItem title="Contact phone" value={`+${brigadier.contactNumber}`} />
        </dl>
      </div>
    </div>
  );
}

export default BrigadierInfo;
