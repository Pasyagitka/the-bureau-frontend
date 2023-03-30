/* eslint-disable jsx-a11y/control-has-associated-label */
import { EquipmentDto } from "@/types/dto/storage/equipment/equipmentDto";
import ListItem from "./ListItem";

function EquipmentList({ equipment = [], handleRemove }: { equipment: EquipmentDto[]; handleRemove: () => void }) {
  const listItems = equipment.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      type={item.type}
      mounting={item.mounting}
      handleRemove={() => handleRemove(item.id)}
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
                Тип
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
              >
                Монтаж
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
          {equipment && <tbody>{listItems}</tbody>}
        </table>
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
          <div className="flex items-center" />
        </div>
      </div>
    </div>
  );
}

export default EquipmentList;
