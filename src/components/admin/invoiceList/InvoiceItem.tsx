import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import invoiceIcon from "icons/invoice.png";
import downloadIcon from "icons/download.png";
import deleteIcon from "icons/delete.png";
import IconButton from "@/elements/buttons/IconButton";

function InvoiceItem({
  invoice,
  clickTitle,
  handleClick,
  handleDownload,
}: {
  invoice: InvoiceDto;
  clickTitle: string;
  handleClick: () => void;
  handleDownload: () => void;
}) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-11/12 md:w-100 m-auto">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${invoiceIcon})`,
          }}
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{invoice.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">{invoice.customer}</p>
          <p className="mt-2 text-gray-600 text-sm">{invoice.total}</p>
          <div className="flex item-center justify-end gap-3 mt-3">
            <IconButton icon={deleteIcon} alt="Delete" isLink={false} onClick={() => handleClick()} />
            <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceItem;
