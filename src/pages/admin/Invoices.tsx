import InvoiceList from "@/components/admin/invoiceList/InvoiceList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getAll } from "@/redux/actions/invoices";
import { useEffect, useState } from "react";

function Invoices() {
  const limit = 10;

  const dispatch = useAppDispatch();
  const [activePage, setactivePage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { invoices, total } = useAppSelector((state) => state.invoices);

  function loadAll() {
    dispatch(getAll({ limit, offset }));
  }
  useEffect(loadAll, [dispatch]);

  function handlePaginationChange(pageNumber: number) {
    // why not using getter value from useState (activePage|offset)
    // setState is async and request goes to server jest when it will be updated

    const newOffset = (pageNumber - 1) * limit;

    setactivePage(pageNumber);
    setOffset(newOffset);

    dispatch(getAll({ limit, offset: newOffset }));
  }

  const handleRemove = (id: number) => {
    // dispatch(deactivate(id));
  };

  const handleDownload = (id: number) => {
    dispatch(get(id));
  };

  return (
    <InvoiceList
      invoices={invoices}
      handleRemove={(id) => handleRemove(id)}
      handleDownload={(id) => handleDownload(id)}
      page={activePage}
      handlePageChange={(x: number) => handlePaginationChange(x)}
      pageSize={limit}
      total={total || 10}
    />
  );
}

export default Invoices;
