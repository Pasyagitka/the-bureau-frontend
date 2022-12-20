import { RequestEquipmentDto } from "@/types/dto/requestEquipmentDto";

function RequestEquipmentItem({ equipment }: { equipment: RequestEquipmentDto }) {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer p-2">
        <div className="flex-1 pl-1 mr-16">
          <div className="text-gray-600 text-sm">{equipment?.equipment?.type ?? equipment.id}</div>
        </div>
        <div className="text-gray-600 text-xs">{equipment.quantity}p</div>
      </div>
    </li>
  );
}

export default RequestEquipmentItem;
