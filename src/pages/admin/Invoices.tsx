import InvoiceList from "@/components/admin/invoiceList/InvoiceList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getAll } from "@/redux/actions/invoices";
import { useEffect } from "react";

function Invoices() {
  const limit = 10;
  const offset = 0;
  const dispatch = useAppDispatch();

  const invoices = useAppSelector((state) => state.invoices.invoices);

  function loadAll() {
    dispatch(getAll({ limit, offset }));
  }
  useEffect(loadAll, [dispatch]);

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
    />
  );
}

export default Invoices;
