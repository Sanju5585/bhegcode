import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsOccCartEntryAdapter } from './occ-adapters/ds-occ-cart-entry.adapter';
import { DsOccCartAdapter } from './occ-adapters/ds-occ-cart.adapter';
import { CartAdapter, CartEntryAdapter } from '@spartacus/cart/base/core';
import { provideDefaultConfigFactory } from '@spartacus/core';
import { defaultOccCartConfigFactory } from './config/custom-occ-cart-config';
import { DSVariantConfiguratorOccModule } from './occ-adapters/variant-configurator-occ.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DSVariantConfiguratorOccModule],
  providers: [
    provideDefaultConfigFactory(defaultOccCartConfigFactory),
    {
      provide: CartAdapter,
      useClass: DsOccCartAdapter,
    },
    {
      provide: CartEntryAdapter,
      useClass: DsOccCartEntryAdapter,
    },
  ],
})
export class DsCartModule {}
