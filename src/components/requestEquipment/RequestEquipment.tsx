import RequestEquipmentItem from "./RequestEquipmentItem";

function RequestEquipment() {
  return (
    <div className="container flex flex-col mx-auto w-5/6 items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y w-11/12">
        <RequestEquipmentItem />
        <RequestEquipmentItem />
        <RequestEquipmentItem />
        <RequestEquipmentItem />
      </ul>
    </div>
  );
}

export default RequestEquipment;
