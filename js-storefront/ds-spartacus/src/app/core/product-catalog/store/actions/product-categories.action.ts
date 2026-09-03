import { Action } from '@ngrx/store';
import { ProductCategory } from '../../model/product-categories.model';

export const FETCH_ALL_CATEGORIES =
  '[Product Categories Megamenu] Fetch All Product Categories';
export const FETCH_ALL_CATEGORIES_SUCCESS =
  '[Product Categories Megamenu] Fetch All Product Categories Success';
export const FETCH_ALL_CATEGORIES_FAIL =
  '[Product Categories Megamenu] Fetch All Product Categories Fail';
export const SET_ACCESSORIES_IN_STORE = 'SET_ACCESSORIES_IN_STORE';

export const SET_QUICK_ORDER_PARTS = 'SET_QUICK_ORDER_PARTS';

export const SET_QUICK_ORDER_PARTS_IN_STORE = 'SET_QUICK_ORDER_PARTS_IN_STORE';

export const SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER =
  'SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER';

export const SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_SUCCESS =
  'SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_SUCCESS';

export const SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_FAILURE =
  'SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_FAILURE';

export class FetchAllProductCategories implements Action {
  readonly type = FETCH_ALL_CATEGORIES;
  constructor(public payload: string) {}
}

export class FetchAllProductCategoriesSuccess implements Action {
  readonly type = FETCH_ALL_CATEGORIES_SUCCESS;
  constructor(public payload: ProductCategory[]) {}
}

export class FetchAllProductCategoriesFail implements Action {
  readonly type = FETCH_ALL_CATEGORIES_FAIL;
  constructor(public payload: { error?: any }) {}
}

export class SetAccessoriesInStore implements Action {
  readonly type = SET_ACCESSORIES_IN_STORE;
  constructor(public payload: any) {}
}

export class SetQuickOrderParts implements Action {
  readonly type = SET_QUICK_ORDER_PARTS;
  constructor(public payload: any) {}
}

export class SetQuickOrderPartsInStore implements Action {
  readonly type = SET_QUICK_ORDER_PARTS_IN_STORE;
  constructor(public payload: any) {}
}

export class SetVCProductsAndPricesForQuickOrder implements Action {
  readonly type = SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER;
  constructor(public payload: any) {}
}

export class SetVCProductsAndPricesForQuickOrderFailure implements Action {
  readonly type = SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_FAILURE;
  constructor(public payload: any) {}
}

export class SetVCProductsAndPricesForQuickOrderSuccess implements Action {
  readonly type = SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER_SUCCESS;
  constructor(public payload: any) {}
}

export type ProductCategoriesActions =
  | FetchAllProductCategories
  | FetchAllProductCategoriesSuccess
  | FetchAllProductCategoriesFail
  | SetAccessoriesInStore
  | SetQuickOrderParts
  | SetQuickOrderPartsInStore
  | SetVCProductsAndPricesForQuickOrder
  | SetVCProductsAndPricesForQuickOrderFailure
  | SetVCProductsAndPricesForQuickOrderSuccess;
