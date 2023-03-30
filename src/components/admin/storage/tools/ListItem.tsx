import StageBadge from "@/elements/stageBadge/StageBadge";
import editIcon from "icons/edit.png";
import cancelIcon from "icons/cancel.png";
import IconButton from "@/elements/buttons/IconButton";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ListItem({
  id,
  name,
  stage,
  handleRemove,
}: {
  id: number;
  name: string;
  stage: number;
  handleRemove: () => void;
}) {
  return (
    <tr className="h-12">
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
        <div className="flex flex-wrap items-center gap-2">
          <StageBadge stage={stage} />
        </div>
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
