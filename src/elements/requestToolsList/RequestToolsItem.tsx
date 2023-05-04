import { RequestToolDto } from "@/types/dto/request/requestToolsDto";

function RequestToolsItem({ tool }: { tool: RequestToolDto }) {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-2">
        <div className="flex-1 pl-1 mr-16">
          <div className="text-gray-600 text-sm">{tool.name}</div>
        </div>
      </div>
    </li>
  );
}

export default RequestToolsItem;
