import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmaTrackingModule } from './rma-tracking/rma-tracking.module';
import { RmaFormModule } from './rma-form/rma-form.module';
import { RmaCartModule } from './rma-cart/rma-cart.module';
import { HazardInfoModule } from './hazard-info/hazard-info.module';
import { RmaCheckoutModule } from './rma-checkout/rma-checkout.module';
import { RmaStatusModule } from './rma-status/rma-status.module';

@NgModule({
  imports: [
    CommonModule,
    RmaTrackingModule,
    RmaFormModule,
    RmaCartModule,
    HazardInfoModule,
    RmaCheckoutModule,
    RmaStatusModule,
  ],
  declarations: [],
})
export class RmaModule {}
