import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { GuestBuyCheckoutModule } from './guest-checkout/guest-buy-checkout.module';
import { BuyCheckoutModule } from './buy-checkout/buy-checkout.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, BuyCheckoutModule, GuestBuyCheckoutModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule {}
