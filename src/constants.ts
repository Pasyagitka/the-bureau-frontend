export const authLinks = {
  login: "/api/auth/login",
  registerClient: "/api/auth/registration",
  registerBrigadier: "/api/auth/brigadier/registration",
};

export const toolsLinks = {
  getAll: "/api/tool",
  get: (id: number) => `/api/tool/${id}`,
  create: "/api/tool",
  update: (id: number) => `/api/tool/${id}`,
  delete: (id: number) => `/api/tool/${id}`,
};

export const accessoriesLinks = {
  getAll: "/api/accessory",
  get: (id: number) => `/api/accessory/${id}`,
  create: "/api/accessory",
  update: (id: number) => `/api/accessory/${id}`,
  delete: (id: number) => `/api/accessory/${id}`,
};

export const equipmentLinks = {
  getAll: "/api/equipment",
  get: (id: number) => `/api/equipment/${id}`,
  create: "/api/equipment",
  update: (id: number) => `/api/equipment/${id}`,
  delete: (id: number) => `/api/equipment/${id}`,
};

export const brigadierLinks = {
  getAll: "/api/brigadier",
  getAlNotActivated: "/api/brigadier",
  get: (id: number) => `/api/brigadier/${id}`,
  update: (id: number) => `/api/brigadier/${id}`,
  delete: (id: number) => `/api/brigadier/${id}`,
};

export const clientLinks = {
  getAll: "/api/client",
  get: (id: number) => `/api/client/${id}`,
  create: "/api/client",
  update: (id: number) => `/api/client/${id}`,
  delete: (id: number) => `/api/client/${id}`,
};

export const stageLinks = {
  getAll: "/api/stages",
};

export const requestLinks = {
  getAll: "/api/request",
  getAccessories: (id: number) => `/api/request/${id}/accessories`,
  getTools: (id: number) => `/api/request/${id}/tools`,
  getEquipment: (id: number) => `/api/request/${id}/equipment`,
  getBrigadierRequests: (brigadierId: number) => `/api/request/brigadier/${brigadierId}`,
  getClientRequests: (clientId: number) => `/api/request/client/${clientId}`,
  get: (id: number) => `/api/request/${id}`,
  create: "/api/request",
  update: (id: number) => `/api/request/${id}`,
  updateByBrigadier: (id: number) => `/api/request/brigadier/update/${id}`,
  updateByAdmin: (id: number) => `/api/request/admin/update/${id}`,
  delete: (id: number) => `/api/request/${id}`,
};

export const scheduleLinks = {
  getAll: "/api/schedule",
  getByBrigadierId: (brigadierId: number) => `/api/schedule/${brigadierId}`,
};

export const userLinks = {
  activate: (id: number) => `/api/user/activate/${id}`,
  deactivate: (id: number) => `/api/user/deactivate/${id}`,
};
