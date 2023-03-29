import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import invoiceIcon from "icons/invoice.png";
import downloadIcon from "icons/download.png";
import deleteIcon from "icons/delete.png";

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
            <button type="button" onClick={() => handleClick()}>
              <img
                src={deleteIcon}
                width="30px"
                height="30px"
                alt="Download"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
            </button>
            <button type="button" className="text-red-600 hover:text-red-900" onClick={() => handleDownload()}>
              <img
                src={downloadIcon}
                width="30px"
                height="30px"
                alt="Download"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceItem;
