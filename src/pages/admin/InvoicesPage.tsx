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

  const notAprovedInvoices = invoices.filter((invoice) => invoice.status === InvoiceStatus.IN_PROCESSING);
  const aprovedInvoices = invoices.filter((invoice) => invoice.status !== InvoiceStatus.IN_PROCESSING);

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

  const notApprovedListItems = notAprovedInvoices.map((invoice) => (
    <InvoiceItem
      key={invoice.id}
      invoice={invoice}
      handleClick={() => handleRemove(invoice.id)}
      handleDownload={() => handleDownload(invoice.id)}
      clickTitle="удалить"
      editLink={`${invoice.id}/update`}
      hasEditButton
      hasStatus={false}
      hasRequested
    />
  ));

  console.log(notApprovedListItems);
  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-700">Выставленные cчета</p>
        </div>
      </div>
      {notApprovedListItems.length > 0 && (
        <>
          <p className="text-2xl font-light text-gray-400">Заявки на счета от бригадиров</p>
          <div className="my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{notApprovedListItems}</div>
            <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between" />
          </div>
        </>
      )}
      <InvoiceList
        invoices={aprovedInvoices}
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
