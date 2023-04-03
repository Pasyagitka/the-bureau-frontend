import InvoiceList from "@/components/admin/invoiceList/InvoiceList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getAll } from "@/redux/actions/invoices";
import { useEffect, useState } from "react";

function Invoices() {
  const limit = 12;

  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { invoices, total } = useAppSelector((state) => state.invoices);

  function loadAll() {
    dispatch(getAll({ limit, offset }));
  }
  useEffect(loadAll, [dispatch]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (value - 1) * limit;
    setActivePage(value);
    setOffset(newOffset);
    dispatch(getAll({ limit, offset: newOffset }));
  };

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
      handlePageChange={handlePageChange}
      pageSize={limit}
      total={total || 10}
    />
  );
}

export default Invoices;
