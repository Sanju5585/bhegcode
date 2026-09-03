import { NgModule } from '@angular/core';
import { CartBaseModule } from '@spartacus/cart/base';
import { CartAdapter, CartEntryAdapter } from '@spartacus/cart/base/core';
import { CpqQuoteModule } from '@spartacus/cpq-quote';
import { EstimatedDeliveryDateModule } from '@spartacus/estimated-delivery-date';
import { DsOccCartEntryAdapter } from '../../../core/cart/occ-adapters/ds-occ-cart-entry.adapter';
import { DsOccCartAdapter } from '../../../core/cart/occ-adapters/ds-occ-cart.adapter';
import { DsCartModule } from '../../../core/cart/ds-cart.module';

@NgModule({
  declarations: [],
  imports: [
    CartBaseModule,
    CpqQuoteModule,
    EstimatedDeliveryDateModule,
    DsCartModule,
  ],
})
export class CartBaseWrapperModule {}
