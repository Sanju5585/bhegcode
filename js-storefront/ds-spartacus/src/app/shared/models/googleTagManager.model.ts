import {
  ItemListType,
  LoginMethodType,
  StoreType,
  PaymentType,
  GtmEvents,
} from '../enums/gtm.enum';

export interface GTMDataLayer {
  event: string | GtmEvents | any;
  store?: StoreType | string;
  user_id?: string;
  user_scope?: string;
  customerAccount?: string;
  customerCountry?: string;
  sales_area?: string;
  authentication_method?: LoginMethodType;
  ecommerce?: Ecommerce;
  serialNumber?: any;
  queryType?: any;
  poOrderNumber?: any;
  productCode?: any;
  pagePath?: any;
  userType?: any;
  vcBaseProductCode?: any;
  vcConfigId?: any;
  vcPrice?: any;
  vcBaseProductName?: any;
  vcPosition?: any;
  cartType?: string;
  commerceType?: GTMCartType;
}

export interface Ecommerce {
  payment_type?: PaymentType;
  item_list_id?: ItemListType;
  item_list_name?: ItemListType;
  transaction_id?: string;
  value?: any;
  tax?: any;
  shipping?: any;
  currency?: string;
  coupon?: string;
  items?: EcommerceItem[];
}

export enum GTMCartType {
  BUY_CART = 'BUY CART',
  RMA_CART = 'RMA CART',
  QUOTE_CART = 'QUOTE CART',
}
export interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_type?: string;
  config_id?: string;
  coupon?: string;
  discount?: number | '';
  index: number | '';
  item_brand: StoreType | '';
  item_category?: string;
  item_category2?: string;
  item_category3?: string;
  item_category4?: string;
  item_category5?: string;
  item_list_id?: ItemListType;
  item_list_name?: ItemListType;
  item_variant?: string;
  location_id?: string;
  price: number | '';
  quantity?: number;
}
