import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import { Pagination } from "@mui/material";
import { ChangeEvent } from "react";
import InvoiceItem from "./InvoiceItem";

interface InvoiceListProps {
  invoices: Array<InvoiceDto>;
  handleRemove: () => void;
  handleDownload: () => void;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
  page: number;
  pageSize: number;
  total: number;
}

function InvoiceList({
  invoices = [],
  handlePageChange,
  handleRemove,
  handleDownload,
  page,
  pageSize,
  total,
}: InvoiceListProps) {
  const numberOfPages = Math.ceil(total / pageSize);
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
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Выставленные чета</p>
          <p className="text-2xl font-light text-gray-400">Скачать счета в формате .docx</p>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
        <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between">
          <Pagination page={page} onChange={handlePageChange} count={numberOfPages} className="my-12" />
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
