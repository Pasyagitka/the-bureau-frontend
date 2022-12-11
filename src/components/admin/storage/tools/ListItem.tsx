import StageBadge from "@/elements/stageBadge/StageBadge";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ListItem({
  id,
  name,
  quantity,
  stage,
  handleRemove,
}: {
  id: number;
  name: string;
  quantity: number;
  stage: number;
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
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex flex-wrap items-center gap-2 my-5">
          <StageBadge stage={stage} />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`update/${id}`} className="text-lime-600 hover:text-lime-900">
          Edit
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button type="button" className="text-red-600 hover:text-red-900" onClick={() => handleRemove()}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;