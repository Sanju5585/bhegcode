import { StateUtils } from '@spartacus/core';
import { DsConfgiurator } from './ds-configurator.model';
import { MULTI_CART_DATA } from '@spartacus/cart/base/core';

export const UPDATE_CART_ENTRY = '[Configurator] Update cart entry';

export class DSUpdateCartEntry extends StateUtils.EntityProcessesIncrementAction {
  override readonly type = UPDATE_CART_ENTRY;
  constructor(public payload: DsConfgiurator.DSUpdateCartParameters) {
    super(MULTI_CART_DATA, payload.cartId);
  }
}
