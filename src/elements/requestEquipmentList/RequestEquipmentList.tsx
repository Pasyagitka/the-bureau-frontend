import { RequestEquipmentDto } from "@/types/dto/requestEquipmentDto";
import RequestEquipmentItem from "./RequestEquipmentItem";

function RequestEquipmentList({ equipmentList = [] }: { equipmentList: Array<RequestEquipmentDto> }) {
  const listItems = equipmentList.map((equipment) => <RequestEquipmentItem key={equipment.id} equipment={equipment} />);

  return (
    <div className="container flex flex-col mx-auto w-5/6 items-center justify-center bg-white rounded-lg shadow mb-4">
      <ul className="flex flex-col divide divide-y w-11/12">{listItems}</ul>
    </div>
  );
}

export default RequestEquipmentList;
