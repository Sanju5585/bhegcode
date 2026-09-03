import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductCategoriesState } from '../reducers/product-categories.reducer';

export const selectProductCategoriesState =
  createFeatureSelector<ProductCategoriesState>('product-categories');

export const fetchProductCategories = createSelector(
  selectProductCategoriesState,
  (state) => state.productCategories
);

export const fetchSelectedAccessories = createSelector(
  selectProductCategoriesState,
  (state) => state.accessories
);

export const fetchQuickOrderData = createSelector(
  selectProductCategoriesState,
  (state) => state.quickOrderParts
);

export const fetchQuickOrderVCPriceData = createSelector(
  selectProductCategoriesState,
  (state) => state.quickOrderProductsAndPrices
);
