// eslint-disable-next-line import/prefer-default-export
export enum InvoiceStatus {
  IN_PROCESSING = "InProcessing",
  CREATED = "Created",
  PAID = "Paid",
  APPROVED = "Approved",
}

export const invoiceStatusesTitles = {
  InProcessing: "В обработке",
  Created: "Создан",
  Paid: "Оплачен",
  Approved: "Подтвержден",
};

export const invoiceStatusesColors = {
  InProcessing: "bg-lime-500",
  Created: "bg-orange-500",
  Paid: "bg-yellow-500",
  Approved: "bg-blue-500",
};
