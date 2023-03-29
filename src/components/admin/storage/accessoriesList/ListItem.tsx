import { Link } from "react-router-dom";
import editIcon from "icons/edit.png";
import cancelIcon from "icons/cancel.png";

function ListItem({
  id,
  sku,
  name,
  equipmentId,
  handleRemove,
}: {
  id: number;
  sku: string;
  name: string;
  equipmentId: number;
  handleRemove: () => void;
}) {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <p className="text-gray-900 whitespace-no-wrap">{id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{sku}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{equipmentId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`update/${id}`} className="text-lime-600 hover:text-lime-900">
          <img
            src={editIcon}
            width="30px"
            height="30px"
            alt="Edit"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button type="button" className="text-red-600 hover:text-red-900" onClick={() => handleRemove()}>
          <img
            src={cancelIcon}
            width="30px"
            height="30px"
            alt="Delete"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
