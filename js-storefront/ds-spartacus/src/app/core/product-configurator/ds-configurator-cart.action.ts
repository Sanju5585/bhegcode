import { MULTI_CART_DATA } from '@spartacus/cart/base/core';
import {  StateUtils } from '@spartacus/core';
import { DsConfgiurator } from './ds-configurator.model';


export const ADD_TO_CART = '[Configurator] Add to cart';

export class DSAddToCart extends StateUtils.EntityProcessesIncrementAction {
  override readonly type = ADD_TO_CART;
  constructor(public payload: DsConfgiurator.DSAddToCartParameter) {
    super(MULTI_CART_DATA, payload.cartId);
  }
}

