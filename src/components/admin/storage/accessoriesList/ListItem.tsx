import editIcon from "icons/edit.png";
import cancelIcon from "icons/cancel.png";
import IconButton from "@/elements/buttons/IconButton";

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
        <IconButton icon={editIcon} alt="Edit" to={`update/${id}`} isLink />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <IconButton icon={cancelIcon} alt="Delete" isLink={false} onClick={() => handleRemove()} />
      </td>
    </tr>
  );
}

export default ListItem;
