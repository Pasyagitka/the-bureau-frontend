/* eslint-disable jsx-a11y/control-has-associated-label */
import { ToolsDto } from "@/types/dto/storage/tools/toolsDto";
import ListItem from "./ListItem";

function ToolsList({ tools = [], handleRemove }: { tools: ToolsDto[]; handleRemove: () => void }) {
  const listItems = tools.map((tool) => (
    <ListItem
      key={tool.id}
      id={tool.id}
      name={tool.name}
      stage={tool?.stage?.id}
      handleRemove={() => handleRemove(tool.id)}
    />
  ));
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="h-12">
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Наименование
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Стадия отделки
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              />
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              />
            </tr>
          </thead>
          {tools && <tbody>{listItems}</tbody>}
        </table>
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
          <div className="flex items-center" />
        </div>
      </div>
    </div>
  );
}

export default ToolsList;
