import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import {
  DIALOG_TYPE,
  ItemCounterModule,
  SpinnerModule,
} from '@spartacus/storefront';

import { LoggedinHomeComponent } from './loggedin-home/loggedin-home.component';
import { CreateNewOrderComponent } from './loggedin-home/create-new-order/create-new-order.component';
import { CreateNewRmaComponent } from './loggedin-home/create-new-rma/create-new-rma.component';
import { MyCartComponent } from './loggedin-home/my-cart/my-cart.component';
import { OrderAndReturnComponent } from './loggedin-home/order-and-return/order-and-return.component';
import { OrderRmaStatusComponent } from './loggedin-home/order-rma-status/order-rma-status.component';
import { PriceAvailabilityCheckComponent } from './loggedin-home/price-availability-check/price-availability-check.component';
import { PartWithErrorComponent } from './loggedin-home/part-with-error/part-with-error.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { LandingPagesComponent } from './landing-pages.component';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';
import { EquipmentCalibrationDataComponent } from './guest-home/equipment-calibration-data/equipment-calibration-data.component';
import { StatusTrackerComponent } from './guest-home/status-tracker/status-tracker.component';
import { PartDeletePopupComponent } from './loggedin-home/part-delete-popup/part-delete-popup.component';
import { QuantityCounterModule } from '../../shared/components/quantity-counter/quantity-counter.module';
import { RouterModule } from '@angular/router';
import { GuestTrackPopupComponent } from './guest-track-popup/guest-track-popup.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { DsRecaptchaModule } from '../../shared/components/recaptcha/recaptcha.module';
import { I18Pipe } from '../../shared/pipes/i18.pipe';
import { NewGuestHomepageComponent } from './new-guest-homepage/new-guest-homepage.component';
import { NewGuestHomepageHeaderComponent } from './new-guest-homepage-header/new-guest-homepage-header.component';
import { NewGuestHomepageFooterComponent } from './new-guest-homepage-footer/new-guest-homepage-footer.component';

@NgModule({
  declarations: [
    LandingPagesComponent,
    LoggedinHomeComponent,
    GuestHomeComponent,
    CreateNewOrderComponent,
    CreateNewRmaComponent,
    MyCartComponent,
    OrderAndReturnComponent,
    OrderRmaStatusComponent,
    PriceAvailabilityCheckComponent,
    PartWithErrorComponent,
    EquipmentCalibrationDataComponent,
    StatusTrackerComponent,
    PartDeletePopupComponent,
    GuestTrackPopupComponent,
    NewGuestHomepageComponent,
    NewGuestHomepageHeaderComponent,
    NewGuestHomepageFooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    I18nModule,
    ItemCounterModule,
    BreadcrumbModule,
    SpinnerModule,
    QuantityCounterModule,
    DsRecaptchaModule,
    RouterModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['loggedinHome', 'guest-home'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.GUEST_TRACK_DIALOG]: {
          inlineRoot: true,
          component: GuestTrackPopupComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.PART_DELETE_DIALOG]: {
          inlineRoot: true,
          component: PartDeletePopupComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  exports: [OrderRmaStatusComponent],
})
export class LandingPagesModule {}
