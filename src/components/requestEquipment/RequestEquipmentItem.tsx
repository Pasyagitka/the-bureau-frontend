function RequestEquipmentItem() {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-2">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-sm">Equipment...</div>
          <div className="text-gray-600 text-sm">Floor</div>
        </div>
        <div className="text-gray-600 text-xs">2pt</div>
      </div>
    </li>
  );
}

export default RequestEquipmentItem;
