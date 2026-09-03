import { NgModule } from '@angular/core';
import { RulebasedConfiguratorModule } from '@spartacus/product-configurator/rulebased';
import { RulebasedCpqConfiguratorModule } from '@spartacus/product-configurator/rulebased/cpq';
import { DSVariantConfiguratorOccModule } from '../../../core/cart/occ-adapters/variant-configurator-occ.module';

@NgModule({
  declarations: [],
  imports: [
    DSVariantConfiguratorOccModule,
    RulebasedConfiguratorModule,
    RulebasedCpqConfiguratorModule,
  ],
})
export class RulebasedConfiguratorWrapperModule {}
