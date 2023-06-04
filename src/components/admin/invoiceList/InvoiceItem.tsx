/* eslint-disable @typescript-eslint/no-unused-vars */
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import invoiceIcon from "icons/invoice-outline.png";
import downloadIcon from "icons/download.png";
import approveIcon from "icons/approve.png";
import detailsIcon from "icons/details.png";
import IconButton from "@/elements/buttons/IconButton";
import { invoiceStatusesColors, invoiceStatusesTitles } from "@/types/enum/invoice-statuses.enum";
import editIcon from "icons/edit.png";
import deleteIcon from "icons/delete.png";

function InvoiceItem({
  hasApproveButton,
  hasDetailsButton,
  hasEditButton,
  hasDeleteButton,
  hasDownloadButton,
  hasStatus,
  approveLink,
  detailsLink,
  editLink,
  invoice,
  clickTitle,
  handleClick,
  handleDownload,
}: {
  hasApproveButton?: boolean;
  hasDetailsButton?: boolean;
  hasEditButton?: boolean;
  hasDeleteButton?: boolean;
  hasDownloadButton?: boolean;
  hasStatus?: boolean;
  approveLink: string;
  detailsLink: string;
  editLink: string;
  invoice: InvoiceDto;
  clickTitle: string;
  handleClick: () => void;
  handleDownload: () => void;
}) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-100 m-auto">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center scale-50"
          style={{
            backgroundImage: `url(${invoiceIcon})`,
          }}
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold md:text-2xl">Счет №{invoice.id}</h1>
          <p className="mt-2 text-gray-600 text-sm">{invoice.customer}</p>
          <p className="mt-2 text-gray-600 text-sm">{invoice.total} руб.</p>
          <div className="flex item-center justify-end gap-3 mt-3">
            {hasApproveButton && <IconButton icon={approveIcon} alt="Approve" isLink to={approveLink} />}
            {hasEditButton && <IconButton icon={editIcon} alt="Edit" isLink to={editLink} />}
            {hasDetailsButton && <IconButton icon={detailsIcon} alt="Details" isLink to={detailsLink} />}
            {hasDeleteButton && (
              <IconButton icon={deleteIcon} alt="Delete" isLink={false} onClick={() => handleClick()} />
            )}
            {hasDownloadButton && (
              <IconButton icon={downloadIcon} alt="Download" isLink={false} onClick={() => handleDownload()} />
            )}
          </div>
          {hasStatus && (
            <span
              className={`px-2 py-1 h-fit m-1 text-xs rounded-full text-white text-end ${
                invoiceStatusesColors[invoice.status]
              } `}
            >
              {invoiceStatusesTitles[invoice.status]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

InvoiceItem.defaultProps = {
  hasApproveButton: false,
  hasDetailsButton: false,
  hasEditButton: false,
  hasDeleteButton: false,
  hasDownloadButton: false,
  hasStatus: true,
};

export default InvoiceItem;
