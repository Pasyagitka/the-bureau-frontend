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
      hasApproveButton
      hasDetailsButton
      key={invoice.id}
      invoice={invoice}
      handleClick={() => handleRemove(invoice.id)}
      handleDownload={() => handleDownload(invoice.id)}
      clickTitle="удалить"
      approveLink={`${invoice.id}/approve`}
      detailsLink={`${invoice.id}`}
    />
  ));
  return (
    <div className="my-10">
      <p className="text-2xl font-light text-gray-400">Скачать счета в формате .docx</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
      <div className="px-5 bg-white flex flex-col xs:flex-row items-center xs:justify-between">
        <Pagination page={page} onChange={handlePageChange} count={numberOfPages} className="my-12" />
      </div>
    </div>
  );
}

export default InvoiceList;
