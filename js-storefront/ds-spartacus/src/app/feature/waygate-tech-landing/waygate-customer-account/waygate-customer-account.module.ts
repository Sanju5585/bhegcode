import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { WaygateCustomerAccountComponent } from './waygate-customer-account.component';
import { WaygateCustomerAccountSliderComponent } from './waygate-customer-account-slider/waygate-customer-account-slider.component';
import { WaygateCurrentCustomerAccountComponent } from './waygate-current-customer-account/waygate-current-customer-account.component';
import { WaygateChangeCustomerAccountComponent } from './waygate-change-customer-account/waygate-change-customer-account.component';
import { CustomerAccountModule } from '../../../core/customer-account/customer-account.module';

@NgModule({
  declarations: [
    WaygateCustomerAccountComponent,
    WaygateCustomerAccountSliderComponent,
    WaygateCurrentCustomerAccountComponent,
    WaygateChangeCustomerAccountComponent,
  ],
  imports: [
    CustomerAccountModule,
    CommonModule,
    I18nModule,
    SpinnerModule,
    ConfigModule.withConfig({
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
    WaygateCustomerAccountComponent,
    WaygateCustomerAccountSliderComponent,
    WaygateCurrentCustomerAccountComponent,
    WaygateChangeCustomerAccountComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WaygateCustomerAccountModule {}
