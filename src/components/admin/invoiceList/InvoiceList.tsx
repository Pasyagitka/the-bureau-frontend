import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import InvoiceItem from "./InvoiceItem";

function InvoiceList({
  invoices = [],
  handleRemove,
  handleDownload,
}: {
  invoices: Array<InvoiceDto>;
  handleRemove: () => void;
  handleDownload: () => void;
}) {
  const listItems = invoices.map((invoice) => (
    <InvoiceItem
      key={invoice.id}
      invoice={invoice}
      handleClick={() => handleRemove(invoice.id)}
      handleDownload={() => handleDownload(invoice.id)}
      clickTitle="удалить"
    />
  ));
  return (
    <div className="w-full bg-white p-12 container  rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Счета</p>
          <p className="text-2xl font-light text-gray-400">Описание...</p>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
      </div>
    </div>
  );
}

export default InvoiceList;
