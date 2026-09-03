import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountModule } from './customer-account/customer-account.module';
import { RoutingModule } from './routing/routing.module';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { DsCartModule } from './cart/ds-cart.module';
import { OccUserAccountAdapter } from '@spartacus/user/account/occ';
import { CustomOccCartConfigModule } from './config/occ-cart-config';
import { CustomOccProductConfigModule } from './config/occ-product-config';
import { DSConfiguratorCartService } from './product-configurator/configurator-cart.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule,
    CustomerAccountModule,
    ProductCatalogModule,
    // DsCartModule,
    CustomOccCartConfigModule,
    CustomOccProductConfigModule,
  ],
  providers: [OccUserAccountAdapter, DSConfiguratorCartService],
})
export class CoreModule {}
