import {
  BaseOption,
  Category,
  Classification,
  FutureStock,
  Images,
  Promotion,
  Price,
  PriceRange,
  ProductReferences,
  Review,
  Stock,
  VariantMatrixElement,
  VariantOption,
  VariantType,
} from '@spartacus/core';

declare module '@spartacus/core'{
  interface Product{
    ecaCode?: string;
    productType?: string;
  }
}
export interface Product {
  availableForPickup?: boolean;
  averageRating?: number;
  availabilityList?: boolean;
  baseOptions?: BaseOption[];
  baseProduct?: string;
  categories?: Category[];
  classifications?: Classification[];
  code?: string;
  description?: string;
  futureStocks?: FutureStock[];
  images?: Images;
  manufacturer?: string;
  multidimensional?: boolean;
  name?: string;
  nameHtml?: string;
  numberOfReviews?: number;
  potentialPromotions?: Promotion[];
  price?: Price;
  priceRange?: PriceRange;
  productReferences?: ProductReferences;
  purchasable?: boolean;
  reviews?: Review[];
  stock?: Stock;
  summary?: string;
  url?: string;
  variantMatrix?: VariantMatrixElement[];
  variantOptions?: VariantOption[];
  variantType?: VariantType;
  volumePrices?: Price[];
  volumePricesFlag?: boolean;
  productAccessData?: any;
  uom?: string;
  isAnonymousBuy?: boolean;
  isAnonymousReturn?: boolean;
  isAnonymousQuote?: boolean;
  isAnonymousObsolete?: boolean;
  isAnonymousCatalog?: boolean;
  plantAvailableAt?: any;
  estShipData?: any[];
  similar?: boolean;
  serialNumber?: string;
  leadTime?: number;
  discountPercentage?: string;
  discountPrice?: string;
  yourPrice?: YourPrice;
  breadCrumbs?: ProductCategoryBreadCrumb[];
  productType?: string;
  ecaCode?:string;
}


export interface YourPrice {
  currencyIso: string;
  formattedValue: string;
  priceType: string;
  value: number;
}
export interface ProductCategoryBreadCrumb {
  categoryCode: string;
  name: string;
  url: string;
}
