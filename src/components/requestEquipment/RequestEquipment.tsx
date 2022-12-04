import { EquipmentDto } from "@/types/dto/equipmentDto";
import RequestEquipmentItem from "./RequestEquipmentItem";

function RequestEquipment({ equipmentList = [] }: { equipmentList: Array<EquipmentDto> }) {
  const listItems = equipmentList.map((equipment) => <RequestEquipmentItem key={equipment.id} equipment={equipment} />);

  return (
    <div className="container flex flex-col mx-auto w-5/6 items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y w-11/12">
        <RequestEquipmentItem id={0} type="" mounting="" quantity="" />
        <RequestEquipmentItem id={0} type="" mounting="" quantity="" />
        <RequestEquipmentItem id={0} type="" mounting="" quantity="" />
        <RequestEquipmentItem id={0} type="" mounting="" quantity="" />
      </ul>
    </div>
  );
}

export default RequestEquipment;
