import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MediaModule, SpinnerModule } from '@spartacus/storefront';
import { I18nModule, ConfigModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RmaCheckoutdetailsComponent } from './rma-checkoutdetails/rma-checkoutdetails.component';
import { CustomerAccountrmaComponent } from './customer-accountrma/customer-accountrma.component';

import { PaymentDetailsrmaComponent } from './payment-detailsrma/payment-detailsrma.component';
import { ShippingDetailsrmaComponent } from './shipping-detailsrma/shipping-detailsrma.component';
import { EnduserDetailsrmaComponent } from './enduser-detailsrma/enduser-detailsrma.component';
//import {CheckoutOrderSummaryComponent} from '../../checkout/guest-checkout/checkout-order-summary/checkout-order-summary.component'
//import { GuestBuyCheckoutModule } from '../../checkout/guest-buy-checkout.module'
import { GuestBuyCheckoutModule } from '../../checkout/guest-checkout/guest-buy-checkout.module';
import { RmaConfirmationComponent } from './rma-confirmation/rma-confirmation.component';
import { ComplianceQuestionrmaComponent } from './compliance-questionrma/compliance-questionrma.component';
import { NotificationAttachmentrmaComponent } from './notification-attachmentrma/notification-attachmentrma.component';
import { CheckoutFileuploadComponent } from './checkout-fileupload/checkout-fileupload.component';
import { PayerDetailsrmaComponent } from './payer-detailsrma/payer-detailsrma.component';
import { BilltoAddressrmaComponent } from './billto-addressrma/billto-addressrma.component';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';
import { DatePickerModule } from '../../../shared/components/date-picker/date-picker.module';

@NgModule({
  declarations: [
    RmaCheckoutdetailsComponent,
    CustomerAccountrmaComponent,
    NotificationAttachmentrmaComponent,
    ComplianceQuestionrmaComponent,
    PaymentDetailsrmaComponent,
    ShippingDetailsrmaComponent,
    EnduserDetailsrmaComponent,
    CustomerAccountrmaComponent,
    RmaConfirmationComponent,
    CheckoutFileuploadComponent,
    PayerDetailsrmaComponent,
    BilltoAddressrmaComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MediaModule,
    I18nModule,
    RouterModule,
    NgSelectModule,
    SpinnerModule,
    NgbModule,
    FileUploadModule,
    GuestBuyCheckoutModule,
    DatePickerModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },

        chunks: {
          checkOut: ['labels', 'errors', 'titles', 'rma-confirmation'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RmaCheckoutdetailsComponent],
})
export class RmaCheckoutModule {}
