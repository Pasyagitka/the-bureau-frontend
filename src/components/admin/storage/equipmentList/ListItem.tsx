import editIcon from "icons/edit.png";
import cancelIcon from "icons/cancel.png";
import IconButton from "@/elements/buttons/IconButton";

function ListItem({
  id,
  type,
  mounting,
  handleRemove,
}: {
  id: number;
  type: string;
  mounting: string;
  handleRemove: () => void;
}) {
  return (
    <tr className="h-12">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <p className="text-gray-700 whitespace-no-wrap">{id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-700 whitespace-no-wrap">{type}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-700 whitespace-no-wrap">{mounting}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <IconButton icon={editIcon} alt="Edit" isLink to={`update/${id}`} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <IconButton icon={cancelIcon} alt="Delete" isLink={false} onClick={() => handleRemove()} />
      </td>
    </tr>
  );
}

export default ListItem;
