import { Address} from '@spartacus/core';

export interface CurrentCustomerAccount {
  b2bUnitName: string;
  b2bUnitUid: string;
  baseStoreName: string;
  companyLogoURL: string;
  currencyIso: string;
  currencySymbol: string;
  salesOrg: string;
  orgUnit: OrgUnit;
}

export interface OrgUnit {
  active?: boolean;
  favorite?: boolean;
  name?: string;
  recent?: boolean;
  uid: string;
}

export interface CustomerAccount {
  active?: boolean;
  addresses?: Address[];
  favorite?: boolean;
  name?: string;
  recent?: boolean;
  salesAreaObjectDataList?: [SalesArea];
  uid: string;
  selectedSalesArea?: SalesArea;
  currencyIso?: string;
  currencySymbol?: string;
  visibleCategories?: string[];
}

export interface SalesArea {
  active?: boolean;
  salesAreaId: string;
  salesAreaName?: string;
  address?: Address;
}

export interface MyWaygateSelectedAccount {
  active?: boolean;
  salesAreaId: string;
  salesAreaName?: string;
  address?: Address;
  uid:string,
}

export interface MyWayGateOrderDetails {
  orderId:string;
  MyWagateCustId:string;
  MyWagateSalesId:string;
  isLogin:boolean;
}
