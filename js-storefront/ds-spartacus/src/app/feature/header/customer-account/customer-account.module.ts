import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountComponent } from './customer-account.component';
import { GuestCustomerAccComponent } from './guest-customer-acc/guest-customer-acc.component';
import { CustomerAccountSliderComponent } from './customer-account-slider/customer-account-slider.component';
import { CurrentCustomerAccountComponent } from './current-customer-account/current-customer-account.component';
import { ChangeCustomerAccountComponent } from './change-customer-account/change-customer-account.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { CustomerAccountModule } from '../../../core/customer-account/customer-account.module';

@NgModule({
  declarations: [
    CustomerAccountComponent,
    GuestCustomerAccComponent,
    CustomerAccountSliderComponent,
    CurrentCustomerAccountComponent,
    ChangeCustomerAccountComponent,
  ],
  imports: [CustomerAccountModule, CommonModule, I18nModule, SpinnerModule],
  providers: [
    provideConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['customer-account'],
        },
      },
    }),
  ],
  exports: [
    CustomerAccountComponent,
    GuestCustomerAccComponent,
    CustomerAccountSliderComponent,
    CurrentCustomerAccountComponent,
    ChangeCustomerAccountComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerAccountComponentModule {}
