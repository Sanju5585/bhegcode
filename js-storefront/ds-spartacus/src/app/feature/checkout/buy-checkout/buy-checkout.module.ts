import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { DIALOG_TYPE, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { GuestBuyCheckoutModule } from '../guest-checkout/guest-buy-checkout.module';
import { BuyCheckoutdetailsComponent } from './buy-checkoutdetails/buy-checkoutdetails.component';
import { ComplianceQuestionComponent } from './compliance-question/compliance-question.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { EnduserDetailsComponent } from './enduser-details/enduser-details.component';
import { NotificationAttachmentComponent } from './notification-attachment/notification-attachment.component';
import {
  OrderSummaryComponent,
  SaveModalComponent,
} from './order-summary/order-summary.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { PayerDetailsComponent } from './payer-details/payer-details.component';
import { BilltoAddressComponent } from './billto-address/billto-address.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { DatePickerModule } from '../../../shared/components/date-picker/date-picker.module';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';

@NgModule({
  declarations: [
    BuyCheckoutdetailsComponent,
    CustomerAccountComponent,
    NotificationAttachmentComponent,
    ComplianceQuestionComponent,
    PaymentDetailsComponent,
    ShippingDetailsComponent,
    EnduserDetailsComponent,
    OrderSummaryComponent,
    PayerDetailsComponent,
    BilltoAddressComponent,
    SaveModalComponent,
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
    DatePickerModule,
    GuestBuyCheckoutModule,
    FileUploadModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },

        chunks: {
          checkoutConfirmation: ['checkoutConfirmation'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.SAVE_MODAL]: {
          inlineRoot: true,
          component: SaveModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BuyCheckoutdetailsComponent],
})
export class BuyCheckoutModule {}
