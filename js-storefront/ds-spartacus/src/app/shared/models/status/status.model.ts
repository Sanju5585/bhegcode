export enum StatusType {
  ORDER = 'order',
  QUOTE = 'quote',
  RMA = 'rma',
  EQUIPMENT = 'equipment',
}

export enum OrderType {
  RESALE = 'RSL',
  STOCK = 'STK',
}
export interface SearchParams {
  pageNumber?: any;
  status?: any;
  orderStatus?: string;
  searchTerm?: string;
  fromDate?: string;
  toDate?: string;
  pageSize?: any;
  sortBy?: string;
  isRefreshedFlag?: boolean;
  customerNumber?: any;
  productLinesList?: any;
  equipmentStatus?: any;
}

export interface RMASearchParams {
  orderType?: string;
  customerAddedFlag?: boolean;
  customerDeletedFlag?: boolean;
  fromDate?: string;
  toDate?: string;
  rmaStatus?: string;
  isRefreshedFlag?: string;
  searchByValue?: string;
  sortBy?: string;
  pageSize?: any;
  pageNumber?: any;
  productLinesList?: any;
  customerNumber?: any;
}

export type OrderTypeKey = keyof typeof OrderType;

export const ORDER_TYPE_KEYS = new Map<OrderType, OrderTypeKey>(
  Object.entries(OrderType).map(([key, value]: [OrderTypeKey, OrderType]) => [
    value,
    key,
  ])
);

export enum QuoteStatus {
  EDIT = 'EDIT',
  ACCEPT = 'ACCEPT',
  MERGE = 'MERGE',
  PARTIAL = 'PARTIAL',
  FULL = 'FULL',
  REJECT = 'REJECT',
  PARTIALREJECT = 'PARTIALREJECT',
}

export enum CurrentQuoteStatus {
  PENDING = 'PENDING',
  OPEN = 'OPEN',
}
