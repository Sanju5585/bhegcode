import { Action, createAction, props } from '@ngrx/store';
import {
  CurrentCustomerAccount,
  CustomerAccount,
  SalesArea,
} from '../customer-account.model';

export const SET_CUST_ACCOUNT = '[Customer Account] Set Customer Account';
export const GET_CUST_ACCOUNT =
  '[Customer Account] Get Current Customer Account';
export const UPDATE_CUST_ACCOUNT =
  '[Customer Account] Update Current Customer Account';
export const LOAD_FAV_CUST_ACCOUNTS =
  '[Customer Account] Load Favourite Customer Accounts';
export const LOAD_FAV_CUST_ACCOUNTS_FAIL =
  '[Customer Account] Load Favourite Customer Accounts Fail';
export const LOAD_FAV_CUST_ACCOUNTS_SUCCESS =
  '[Customer Account] Load Favourite Customer Accounts Success';
export const ADD_FAV_CUST_ACCOUNT =
  '[Customer Account] Add Customer Account to Favourite';
export const REMOVE_FAV_CUST_ACCOUNT =
  '[Customer Account] Remove Customer Account from Favourites';
export const LOAD_RECENT_CUST_ACCOUNTS =
  '[Customer Account] Load Recent Customer Accounts';
export const LOAD_RECENT_CUST_ACCOUNTS_SUCCESS =
  '[Customer Account] Load Recent Customer Accounts Success';
export const LOAD_RECENT_CUST_ACCOUNTS_FAIL =
  '[Customer Account] Load Recent Customer Accounts Fail';
export const LOAD_GUEST_SALES_AREA =
  '[Guest Customer Account] Load Guest Sales Areas';
export const LOAD_GUEST_SALES_AREA_SUCCESS =
  '[Guest  Customer Account] Load Guest Sales Areas Success';
export const LOAD_GUEST_SALES_AREA_FAIL =
  '[Guest Customer Account] Load Guest Sales Areas Fail';
export const UPDATE_GUEST_SALES_AREA =
  '[Guest Customer Account] Update Guest Sales Area';

export const SET_PRODUCTLINE = '[SET PRODUCTLINE] set productline';

export const setProductLine = createAction(
  SET_PRODUCTLINE,
  props<{ payload: string }>()
);

export const UPDATE_AVAIABLE_PRODUCT_LINES =
  '[Customer Account] Set Avaiable Product Lines';

export const SetCustomerAccount = createAction(
  SET_CUST_ACCOUNT,
  props<{ payload: CustomerAccount }>()
);

export const GetCurrentCustomerAccount = createAction(GET_CUST_ACCOUNT);

export const UpdateCurrentCustomerAccount = createAction(
  UPDATE_CUST_ACCOUNT,
  props<{ payload: CustomerAccount }>()
);

export const UpdateAvaiableProductLine = createAction(
  UPDATE_AVAIABLE_PRODUCT_LINES,
  props<{ payload: string[] }>()
);

export const LoadFavCustomerAccounts = createAction(LOAD_FAV_CUST_ACCOUNTS);

export const LoadFavCustomerAccountsFail = createAction(
  LOAD_FAV_CUST_ACCOUNTS_FAIL,
  props<{ payload: { error?: any } }>()
);

export const LoadFavCustomerAccountsSuccess = createAction(
  LOAD_FAV_CUST_ACCOUNTS_SUCCESS,
  props<{ payload: CustomerAccount[] }>()
);

export const AddFavCustomerAccount = createAction(
  ADD_FAV_CUST_ACCOUNT,
  props<{ payload: CustomerAccount }>()
);

export const RemoveFavCustomerAccount = createAction(
  REMOVE_FAV_CUST_ACCOUNT,
  props<{ payload: CustomerAccount }>()
);

export const LoadRecentCustomerAccounts = createAction(
  LOAD_RECENT_CUST_ACCOUNTS
);

export const LoadRecentCustomerAccountsSuccess = createAction(
  LOAD_RECENT_CUST_ACCOUNTS_SUCCESS,
  props<{ payload: CustomerAccount[] }>()
);

export const LoadRecentCustomerAccountsFail = createAction(
  LOAD_RECENT_CUST_ACCOUNTS_FAIL,
  props<{ payload: { error?: any } }>()
);

export const LoadGuestSalesAreas = createAction(LOAD_GUEST_SALES_AREA);

export const LoadGuestSalesAreasFail = createAction(
  LOAD_GUEST_SALES_AREA_FAIL,
  props<{ payload: { error?: any } }>()
);

export const LoadGuestSalesAreasSuccess = createAction(
  LOAD_GUEST_SALES_AREA_SUCCESS,
  props<{ payload: SalesArea[] }>()
);

export const UpateGuestSalesArea = createAction(
  UPDATE_GUEST_SALES_AREA,
  props<{ payload: SalesArea }>()
);

export const SET_CUSTOMER_USER_TYPE =
  '[Customer Account] set customer user type';

export const setCustomerUserType = createAction(
  SET_CUSTOMER_USER_TYPE,
  props<{ payload: string }>()
);

// accessCSRProductLines
export const SET_ACCESS_CSR_PRODUCT_LINES =
  '[Customer Account] set access csr product lines';

export const setAccessCSRProductLines = createAction(
  SET_ACCESS_CSR_PRODUCT_LINES,
  props<{ payload: string[] }>()
);
// export type CustomerAccountActions =
//   | SetCustomerAccount
//   | GetCurrentCustomerAccount
//   | UpdateCurrentCustomerAccount
//   | LoadFavCustomerAccounts
//   | LoadFavCustomerAccountsSuccess
//   | LoadFavCustomerAccountsFail
//   | AddFavCustomerAccount
//   | RemoveFavCustomerAccount
//   | LoadRecentCustomerAccounts
//   | LoadRecentCustomerAccountsSuccess
//   | LoadRecentCustomerAccountsFail
//   | LoadGuestSalesAreas
//   | LoadGuestSalesAreasSuccess
//   | LoadGuestSalesAreasFail
//   | UpateGuestSalesArea;
