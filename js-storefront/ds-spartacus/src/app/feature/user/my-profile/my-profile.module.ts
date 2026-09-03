import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { NotificationsEmailComponent } from './notifications-email/notifications-email.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderDetailsSummaryComponent } from './order-details-summary/order-details-summary.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ShipToAddressComponent } from './ship-to-address/ship-to-address.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    MyProfileComponent,
    CustomerAccountComponent,
    NotificationsEmailComponent,
    OrderDetailsSummaryComponent,
    PersonalDetailsComponent,
    ShipToAddressComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    SpinnerModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['myProfile'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyProfileModule {}
