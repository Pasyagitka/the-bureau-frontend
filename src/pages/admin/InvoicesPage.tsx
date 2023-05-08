import InvoiceItem from "@/components/admin/invoiceList/InvoiceItem";
import InvoiceList from "@/components/admin/invoiceList/InvoiceList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getFile, getAll } from "@/redux/actions/invoices";
import { InvoiceStatus } from "@/types/enum/invoice-statuses.enum";
import { useEffect, useState } from "react";

function InvoicesPage() {
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
    dispatch(getFile(id));
  };

  const notApprovedListItems = invoices.flatMap((invoice) =>
    invoice.status === InvoiceStatus.IN_PROCESSING ? (
      <InvoiceItem
        key={invoice.id}
        invoice={invoice}
        handleClick={() => handleRemove(invoice.id)}
        handleDownload={() => handleDownload(invoice.id)}
        clickTitle="удалить"
        editLink={`${invoice.id}/update`}
        hasEditButton
        hasStatus={false}
      />
    ) : null
  );

  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Выставленные cчета</p>
          <p className="text-2xl font-light text-gray-400">Заявки на счета от бригадиров</p>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{notApprovedListItems}</div>
        <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between" />
      </div>
      <InvoiceList
        invoices={invoices.filter((x) => x.status !== InvoiceStatus.IN_PROCESSING)}
        handleRemove={(id) => handleRemove(id)}
        handleDownload={(id) => handleDownload(id)}
        page={activePage}
        handlePageChange={handlePageChange}
        pageSize={limit}
        total={total || 10}
      />
    </div>
  );
}

export default InvoicesPage;
