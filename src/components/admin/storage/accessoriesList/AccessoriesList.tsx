/* eslint-disable jsx-a11y/control-has-associated-label */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import { Pagination } from "@mui/material";
import ListItem from "./ListItem";

function AccessoriesList({
  accessories = [],
  total,
  page,
  pageSize,
  handleRemove,
  handlePageChange,
}: {
  accessories: AccessoriesDto[];
  total: number;
  page: number;
  pageSize: number;
  handleRemove: () => void;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}) {
  const numberOfPages = Math.ceil(total / pageSize);
  const listItems = accessories.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      sku={item.sku}
      name={item.name}
      quantity={item.quantity_in_stock}
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
                Количество на складе
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
        <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between">
          <Pagination page={page} onChange={handlePageChange} count={numberOfPages} className="my-12" />
        </div>
      </div>
    </div>
  );
}

export default AccessoriesList;
