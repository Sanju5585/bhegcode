import { HttpErrorModel } from '@spartacus/core';
import { ProductCategory } from '../../model/product-categories.model';
import * as fromProductCategoriesAction from '../actions/product-categories.action';

export interface ProductCategoriesState {
  productCategories: ProductCategory[] | HttpErrorModel;
  accessories: any;
  quickOrderParts: '';
  quickOrderProductsAndPrices: [];
}

const initalState: ProductCategoriesState = {
  productCategories: [],
  accessories: {},
  quickOrderParts: '',
  quickOrderProductsAndPrices: [],
};

export function productCategoriesReducer(
  state = initalState,
  action: fromProductCategoriesAction.ProductCategoriesActions
) {
  switch (action.type) {
    case fromProductCategoriesAction.FETCH_ALL_CATEGORIES:
      return {
        ...state,
      };
    case fromProductCategoriesAction.FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        productCategories: {
          ...state.productCategories,
          ...action.payload,
        },
      };
    case fromProductCategoriesAction.SET_ACCESSORIES_IN_STORE:
      localStorage.setItem('configuredData', JSON.stringify(action.payload));
      return {
        ...state,
        accessories: action.payload,
      };
    case fromProductCategoriesAction.SET_QUICK_ORDER_PARTS_IN_STORE:
      return {
        ...state,
        quickOrderParts: JSON.stringify(action.payload),
      };
    case fromProductCategoriesAction.SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_SUCCESS:
      console.log(
        'action.payload',
        action.payload,
        state?.quickOrderProductsAndPrices
      );
      const uniqueProducts: any[] = state?.quickOrderProductsAndPrices?.filter(
        (item: any) =>
          item?.vcLongPartNumber != action?.payload?.vcLongPartNumber
      );
      console.log('quickOrderProductsAndPrices', uniqueProducts);
      return {
        ...state,
        quickOrderProductsAndPrices: [...uniqueProducts, ...[action.payload]],
      };
    default:
      return state;
  }
}
