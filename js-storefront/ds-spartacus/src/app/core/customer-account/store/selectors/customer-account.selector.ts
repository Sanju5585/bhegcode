import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerAccountState } from '../reducers/customer-account.reducer';

export const selectCustAccountState =
  createFeatureSelector<CustomerAccountState>('customer-accounts');

export const isCustomerAccountLoaded = createSelector(
  selectCustAccountState,
  (state) => state.customerAccountLoaded
);

export const fetchCurrentCustomerAccount = createSelector(
  selectCustAccountState,
  (state) => state.currentCustomerAccount
);

export const fetchFavCustomerAccounts = createSelector(
  selectCustAccountState,
  (state) => state.favCustomerAccounts
);

export const fetchRecentCustomerAccounts = createSelector(
  selectCustAccountState,
  (state) => state.recentCustomerAccounts
);

export const fetchGuestSalesAreas = createSelector(
  selectCustAccountState,
  (state) => state.guestSalesAreas
);

export const fetchCurrentGuestSalesArea = createSelector(
  selectCustAccountState,
  (state) => state.currentGuestSalesArea
);

export const getProductLine = createSelector(
  selectCustAccountState,
  (state) => state.productLine
);

export const getCustomerUserType = createSelector(
  selectCustAccountState,
  (state) => state.customerUserType
);

export const getAccessCSRProductLines = createSelector(
  selectCustAccountState,
  (state) => state.accessCSRProductLines
);
