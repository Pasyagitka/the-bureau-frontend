/* eslint-disable jsx-a11y/control-has-associated-label */
import { AccessoriesDto } from "@/types/dto/storage/accessories/accessoriesDto";
import { TablePagination } from "@mui/material";
import { Table } from "rsuite";
import { useState } from "react";
import editIcon from "icons/edit.png";
import cancelIcon from "icons/cancel.png";
import IconButton from "@/elements/buttons/IconButton";

const { Column, HeaderCell, Cell } = Table;

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
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();

  const getData = () => {
    console.log(sortColumn, sortType);
    if (sortColumn && sortType) {
      const arr = accessories.slice();
      return arr.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        }
        return y - x;
      });
    }
    return accessories;
  };

  const handleSortColumn = (sColumn, sType) => {
    setSortColumn(sColumn);
    setSortType(sType);
  };

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <Table
          height={500}
          data={getData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          className="font-sm w-full"
          style={{ fontSize: "0.875rem" }}
        >
          <Column width={70} align="center" fixed sortable>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column flexGrow={1} fixed sortable>
            <HeaderCell>Артикул</HeaderCell>
            <Cell dataKey="sku" />
          </Column>

          <Column flexGrow={2} sortable>
            <HeaderCell>Наименование</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          <Column flexGrow={1} sortable>
            <HeaderCell>Цена за штуку (р)</HeaderCell>
            <Cell dataKey="price" />
          </Column>

          <Column flexGrow={1} sortable>
            <HeaderCell>Количество на складе</HeaderCell>
            <Cell dataKey="quantity_in_stock" />
          </Column>

          <Column flexGrow={1} sortable>
            <HeaderCell>Количество в счетах</HeaderCell>
            <Cell dataKey="quantity_reserved" />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Оборудование</HeaderCell>
            <Cell style={{ padding: "6px" }}>
              {(rowData) => (
                <p>
                  {rowData.equipment?.type} (№{rowData.equipment.id})
                </p>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell />
            <Cell>{(rowData) => <IconButton icon={editIcon} alt="Edit" to={`update/${rowData.id}`} isLink />}</Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell />
            <Cell>
              {(rowData) => (
                <IconButton icon={cancelIcon} alt="Delete" isLink={false} onClick={() => handleRemove(rowData.id)} />
              )}
            </Cell>
          </Column>
        </Table>
        <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between">
          {numberOfPages > 1 && (
            <TablePagination
              page={page}
              count={total}
              rowsPerPage={10}
              rowsPerPageOptions={[10]}
              labelDisplayedRows={({ from, to, count }) =>
                `${from}–${to} из ${count !== -1 ? count : `more than ${to}`}`
              }
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccessoriesList;
