function BrigadierHistoryItem({ item }: { item: unknown }) {
  // const datetime = dayjs(item.modifiedDate).format("DD/MM/YYYY hh:mm");
  return (
    <li className="flex flex-row h-full">
      <div className="flex justify-between p-2 gap-5 w-full">
        <div className="text-sm">{item.brigadier}</div>
        <div className="text-gray-600 text-sm">{item.modifiedDate}</div>
      </div>
    </li>
  );
}

export default BrigadierHistoryItem;
