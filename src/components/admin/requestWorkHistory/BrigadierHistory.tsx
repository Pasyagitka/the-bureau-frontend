import BrigadierHistoryItem from "./BrigadierHistoryItem";

function BrigadierHistory({ history }: { history: Array<unknown> }) {
  const listItems = history?.map((item) => <BrigadierHistoryItem item={item} />);
  return (
    <div className="container flex flex-col w-1/2 items-center justify-center bg-white rounded-lg shadow p-2 my-2">
      <ul className="flex flex-col divide divide-y w-full">{listItems}</ul>
    </div>
  );
}

export default BrigadierHistory;
