import InvoiceItem from "@/components/admin/invoiceList/InvoiceItem";
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";
import { InvoiceStatus } from "@/types/enum/invoice-statuses.enum";

function BrigadierInvoices({
  invoices,
  handleRemove,
  handleDownload,
}: {
  invoices: InvoiceDto[];
  handleRemove: () => void;
  handleDownload: () => void;
}) {
  const listItems = invoices.flatMap((invoice) =>
    invoice.status === InvoiceStatus.IN_PROCESSING ? (
      <InvoiceItem
        key={invoice.id}
        invoice={invoice}
        handleClick={() => handleRemove(invoice.id)}
        clickTitle="удалить"
        approveLink={`invoices/${invoice.id}/update`}
        hasEditButton
        editLink={`invoices/${invoice.id}/update`}
        hasStatus={false}
        hasDeleteButton
      />
    ) : null
  );

  const approvedInvoicesItems = invoices.flatMap((invoice) =>
    invoice.status !== InvoiceStatus.IN_PROCESSING ? (
      <InvoiceItem
        key={invoice.id}
        invoice={invoice}
        handleClick={() => handleRemove(invoice.id)}
        handleDownload={() => handleDownload(invoice.scanUrl)}
        clickTitle="удалить"
        hasApproveButton
        approveLink={`invoices/${invoice.id}/commit`}
        detailsLink={`invoices/${invoice.id}`}
        hasDownloadButton
        hasDetailsButton
      />
    ) : null
  );

  return (
    <div className="w-full bg-white p-2 md:p-12 rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="md:text-4xl text-xl font-bold text-gray-800 mb-2">Мои счета</p>
        </div>
      </div>
      <div className="flex gap-2 items-baseline my-2">
        <span className="md:text-2xl text-sm  text-gray-700 font-bold">Запрошенные мной счета</span>
        <span className="text-base flex font-light text-gray-400">
          До тех пор, пока счет не подтвержден администратором, вы можете редактировать его содержимое
        </span>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {listItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
        ) : (
          <p className="md:text-xl text-sm font-light text-gray-400">
            Пока в этом разделе ничего нет. Но вы можете запросить счет на комплектующие, нажав кнопку выше
          </p>
        )}
      </div>
      <div className="flex flex-row mt-12 gap-2 mb-2 items-end">
        <span className="md:text-2xl text-sm font-bold text-gray-700 flex">Выставленные мне счета</span>
        <span className="flex font-light text-gray-400">(оплаченные или которые ждут оплаты)</span>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {approvedInvoicesItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{approvedInvoicesItems}</div>
        ) : (
          <p className="md:text-xl text-sm font-light text-gray-400">
            Пока в этом разделе ничего нет. Но вы можете запросить счет на комплектующие, нажав кнопку выше
          </p>
        )}
      </div>
    </div>
  );
}

export default BrigadierInvoices;
