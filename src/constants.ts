export const authLinks = {
  login: "/api/auth/login",
  registerClient: "/api/auth/registration",
  registerBrigadier: "/api/auth/brigadier/registration",
  activate: (link: string) => `api/auth/activate/${link}`,
  requestResetPassword: "/api/auth/reset-password",
  resetPassword: (login: string, link: string) => `api/auth/reset-password/${login}/${link}`,
  changePassword: `/api/auth/change-password`,
  userinfo: "/api/auth/userinfo",
};

export const accessoriesLinks = {
  getAll: "/api/accessory",
  get: (id: number) => `/api/accessory/${id}`,
  getAvaliableForInvoice: "/api/accessory/available",
  create: "/api/accessory",
  import: "/api/accessory/import",
  update: (id: number) => `/api/accessory/${id}`,
  delete: (id: number) => `/api/accessory/${id}`,
};

export const brigadierLinks = {
  getAll: "/api/brigadier",
  getAllNotActivated: "/api/brigadier",
  get: (id: number) => `/api/brigadier/${id}`,
  getRecommended: "/api/brigadier/recommended",
  update: (id: number) => `/api/brigadier/${id}`,
  uploadAvatar: (id: number) => `/api/brigadier/avatar/${id}`,
  delete: (id: number) => `/api/brigadier/${id}`,
};

export const clientLinks = {
  getAll: "/api/client",
  get: (id: number) => `/api/client/${id}`,
  update: (id: number) => `/api/client/${id}`,
};

export const equipmentLinks = {
  getAll: "/api/equipment",
  get: (id: number) => `/api/equipment/${id}`,
  create: "/api/equipment",
  import: "/api/accessory/import",
  update: (id: number) => `/api/equipment/${id}`,
  delete: (id: number) => `/api/equipment/${id}`,
};

export const invoiceLinks = {
  getAll: "/api/invoice",
  getFile: (id: number) => `/api/invoice/${id}/file`,
  getItems: (id: number) => `/api/invoice/${id}/items`,
  get: (id: number) => `/api/invoice/${id}`,
  create: "/api/invoice",
  getForBrigadier: (brigadierId: number) => `/api/invoice/brigadier/${brigadierId}`,
  update: (id: number) => `/api/invoice/${id}`,
  delete: (id: number) => `/api/invoice/${id}`,
};

export const requestLinks = {
  getAll: "/api/request",
  getCalendar: "/api/request/calendar",
  getCalendarForBrigadier: (brigadierId: number) => `/api/request/calendar/${brigadierId}`,
  getAccessories: (id: number) => `/api/request/${id}/accessories`,
  getTools: (id: number) => `/api/request/${id}/tools`,
  getBrigadierRequests: (brigadierId: number) => `/api/request/brigadier/${brigadierId}`,
  getClientRequests: (clientId: number) => `/api/request/client/${clientId}`,
  getFullReport: (id: number) => `/api/request/${id}/report`,
  get: (id: number) => `/api/request/${id}`,
  create: "/api/request",
  updateByBrigadier: (id: number) => `/api/request/brigadier/${id}`,
  updateByAdmin: (id: number) => `/api/request/admin/${id}`,
};

export const requestReportLinks = {
  get: (requestId: number) => `/api/request-report/${requestId}`,
  create: (requestId: number) => `/api/request-report/${requestId}`,
};

export const scheduleLinks = {
  getByBrigadierId: (brigadierId: number) => `/api/schedule/brigadier/${brigadierId}`,
  getByRequestId: (requestId: number) => `/api/schedule/${requestId}`,
};

export const stageLinks = {
  getAll: "/api/stage",
  update: (id: number) => `/api/stage/${id}`,
};

export const toolsLinks = {
  getAll: "/api/tool",
  get: (id: number) => `/api/tool/${id}`,
  create: "/api/tool",
  import: "/api/accessory/import",
  update: (id: number) => `/api/tool/${id}`,
  delete: (id: number) => `/api/tool/${id}`,
};

export const userLinks = {
  getAll: "/api/user",
  get: (id: number) => `/api/user/${id}`,
  update: (id: number) => `/api/user/${id}`,
  delete: (id: number) => `/api/user/${id}`,
  activate: (id: number) => `/api/user/${id}/activate`,
  deactivate: (id: number) => `/api/user/${id}/deactivate`,
};
