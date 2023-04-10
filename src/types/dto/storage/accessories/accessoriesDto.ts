export type AccessoriesDto = {
  id: number;
  sku: string;
  name: string;
  quantity_in_stock: number;
  equipment: {
    id: number;
  };
};
