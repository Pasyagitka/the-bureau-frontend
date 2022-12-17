import { RequestToolDto } from "@/types/dto/requestToolsDto";
import RequestToolsItem from "./RequestToolsItem";

function RequestTools({ tools = [] }: { tools: RequestToolDto[] }) {
  const listItems = tools.map((item) => <RequestToolsItem key={item.id} tool={item} />);

  return (
    <div className="container flex flex-col w-5/6 mx-auto items-center justify-center bg-white rounded-lg shadow">
      <ul className="flex flex-col divide divide-y w-11/12">{listItems}</ul>
    </div>
  );
}

export default RequestTools;
