import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import invoiceIcon from "icons/invoice-outline.png";
import downloadIcon from "icons/download.png";
import approveIcon from "icons/approve.png";
import IconButton from "@/elements/buttons/IconButton";

function InvoiceItem({
  isAdmin = false,
  invoice,
  clickTitle,
  handleClick,
  handleDownload,
}: {
  isAdmin: boolean;
  invoice: InvoiceDto;
  clickTitle: string;
  handleClick: () => void;
  handleDownload: () => void;
}) {
  const isApproved = true; // TODO is payed or not
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-100 m-auto">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${invoiceIcon})`,
          }}
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold md:text-2xl">Счет №{invoice.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">{invoice.customer}</p>
          <p className="mt-2 text-gray-600 text-sm">{invoice.total}</p>
          <div className="flex item-center justify-end gap-3 mt-3">
            {/* <IconButton icon={deleteIcon} alt="Delete" isLink={false} onClick={() => handleClick()} /> */}
            {isAdmin && <IconButton icon={approveIcon} alt="Approve" isLink to={`${invoice.id}/approve`} />}
            <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
          </div>
          {isApproved && (
            <span className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end bg-lime-500 `}>Оплачен</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceItem;
