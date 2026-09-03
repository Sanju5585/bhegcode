import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { MediaModule, SpinnerModule } from '@spartacus/storefront';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary/checkout-order-summary.component';
import { ComplianceQuestionComponent } from './compliance-question/compliance-question.component';
import { CustomerAccountDetailsComponent } from './customer-account-details/customer-account-details.component';
import { EndUserDetailsComponent } from './end-user-details/end-user-details.component';
import { GuestBuyCheckoutComponent } from './guest-buy-checkout/guest-buy-checkout.component';
import { NotificationAttachementComponent } from './notification-attachement/notification-attachement.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ShipingDetailsComponent } from './shiping-details/shiping-details.component';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';
import { DsRecaptchaModule } from '../../../shared/components/recaptcha/recaptcha.module';

@NgModule({
  declarations: [
    GuestBuyCheckoutComponent,
    CustomerAccountDetailsComponent,
    PaymentDetailsComponent,
    ShipingDetailsComponent,
    NotificationAttachementComponent,
    ComplianceQuestionComponent,
    CheckoutOrderSummaryComponent,
    EndUserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MediaModule,
    I18nModule,
    RouterModule,
    NgSelectModule,
    SpinnerModule,
    NgbModule,
    FileUploadModule,
    DsRecaptchaModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          checkOut: ['labels', 'errors', 'titles'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    GuestBuyCheckoutComponent,
    CustomerAccountDetailsComponent,
    CheckoutOrderSummaryComponent,
  ],
})
export class GuestBuyCheckoutModule {}
