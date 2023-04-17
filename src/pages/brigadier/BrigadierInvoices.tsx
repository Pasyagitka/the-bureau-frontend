import InvoiceItem from "@/components/admin/invoiceList/InvoiceItem";
import { InvoiceDto } from "@/types/dto/invoice/invoiceDto";

function BrigadierInvoices({
  invoices,
  handleRemove,
  handleDownload,
}: {
  invoices: InvoiceDto[];
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
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Мои счета</p>
          <p className="text-2xl font-light text-gray-400">Запрошенные мной счета</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {listItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
        ) : (
          <p className="text-2xl font-light text-gray-400">
            Пока тут ничего нет. Но вы можете запросить счет на комплектующие, нажав кнопку выше
          </p>
        )}
        {/* <BrigadierRequest
          address="Address"
          comment="You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything."
          stage={3}
        /> */}
      </div>
    </div>
  );
}

export default BrigadierInvoices;
