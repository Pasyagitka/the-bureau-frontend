/* eslint-disable jsx-a11y/control-has-associated-label */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import ListItem from "./ListItem";

function AccessoriesList({
  accessories = [],
  handleRemove,
}: {
  accessories: AccessoriesDto[];
  handleRemove: () => void;
}) {
  const listItems = accessories.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      sku={item.sku}
      name={item.name}
      equipmentId={item?.equipment?.id}
      handleRemove={() => handleRemove(item.id)}
    />
  ));

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
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
                Артикул
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
                ID оборудования
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
          {accessories && <tbody>{listItems}</tbody>}
        </table>
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
          <div className="flex items-center" />
        </div>
      </div>
    </div>
  );
}

export default AccessoriesList;
