import DayJs from "react-dayjs";

function BrigadierHistoryItem({ item }: { item: unknown }) {
  // const datetime = dayjs(item.modifiedDate).format();
  return (
    <li className="flex flex-row h-full">
      <div className="flex justify-between p-2 gap-5 w-full">
        <div className="text-sm">{item.brigadier}</div>
        <div className="text-gray-600 text-sm">
          <DayJs format="DD.MM.YYYY в HH:mm">{item.modifiedDate}</DayJs>
        </div>
      </div>
    </li>
  );
}

export default BrigadierHistoryItem;
