export enum RequestStatus {
  INPROCESSING = "InProcessing",
  ACCEPTED = "Accepted",
  COMPLETED = "Completed",
  APPROVED = "Approved",
}

export const requestStatusesTitles = {
  InProcessing: "В обработке",
  Accepted: "Принята бригадиром",
  Completed: "Выполнена",
  Approved: "Подтверждена",
};

export const requestStatusesColors = {
  InProcessing: "bg-lime-500",
  Accepted: "bg-orange-500",
  Completed: "bg-yellow-500",
  Approved: "bg-blue-500",
};

export const requestStatusesColorsTable = {
  InProcessing: "green",
  Accepted: "orange",
  Completed: "yellow",
  Approved: "blue",
};
