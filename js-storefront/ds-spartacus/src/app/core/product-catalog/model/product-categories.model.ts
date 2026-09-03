export interface ProductCategory {
  categories: ProductCategory[];
  categoryImageUrl: string;
  code: string;
  name: string;
  url: string;
}

export const DefaultProductCode = 'ECOM_LVL0_00000000';
