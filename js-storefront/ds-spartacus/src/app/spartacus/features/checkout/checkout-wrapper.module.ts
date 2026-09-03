import { NgModule } from '@angular/core';
import { CheckoutB2BModule } from '@spartacus/checkout/b2b';
import { CheckoutModule } from '@spartacus/checkout/base';
import { CheckoutScheduledReplenishmentModule } from '@spartacus/checkout/scheduled-replenishment';
import { DigitalPaymentsModule } from '@spartacus/digital-payments';
import { S4ServiceCheckoutModule } from '@spartacus/s4-service/checkout';

@NgModule({
  declarations: [],
  imports: [
    CheckoutModule,
    CheckoutB2BModule,
    CheckoutScheduledReplenishmentModule,
    S4ServiceCheckoutModule,
    DigitalPaymentsModule,
  ],
})
export class CheckoutWrapperModule {}
