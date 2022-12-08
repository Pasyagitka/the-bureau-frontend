import { EquipmentDto } from "@/types/dto/equipmentDto";

function RequestEquipmentItem(equipment: EquipmentDto) {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-2">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-sm">{equipment.type}</div>
          <div className="text-gray-600 text-sm">{equipment.mounting}</div>
        </div>
        <div className="text-gray-600 text-xs">{equipment.quantity}p</div>
      </div>
    </li>
  );
}

export default RequestEquipmentItem;
