import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartPageLayoutHandler } from './cart-page-layout-handler';
import { CartSharedModule } from './cart-shared/cart-shared.module';
import { CartTotalsModule } from './cart-totals/cart-totals.module';
import { AddToWishListModule } from './add-to-wishlist/add-to-wish-list.module';
import { SaveForLaterModule } from './save-for-later/save-for-later.module';
import { DIALOG_TYPE, PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { SwitchCustomerDialogComponent } from './switch-ds-account/switch-ds-account';
import { RMASwitchCustomerDialogComponent } from './rma-switch-ds-account/rma-switch-ds-account';
import { RMASwitchCartDialogComponent } from './rma-switch-cart-dialog/rma-switch-cart';
import { CommonModule } from '@angular/common';
import { RepeatRMAUpdateMessageComponent } from './rma-update-message-cart/repeat-rma-message-cart-dialog';
import { DS_DIALOG } from '../../core/dialog/dialog.config';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CartDetailsModule,
    CartTotalsModule,
    CartSharedModule,
    SaveForLaterModule,
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['buyCart', 'savedCart'],
        },
      },
    }),
  ],
  exports: [
    AddToWishListModule,
    CartDetailsModule,
    CartTotalsModule,
    CartSharedModule,
    AddToCartModule,
    // CartModule,
    SaveForLaterModule,
    SwitchCustomerDialogComponent,
    RMASwitchCustomerDialogComponent,
    RMASwitchCartDialogComponent,
    RepeatRMAUpdateMessageComponent,
  ],
  declarations: [
    SwitchCustomerDialogComponent,
    RMASwitchCustomerDialogComponent,
    RMASwitchCartDialogComponent,
    RepeatRMAUpdateMessageComponent,
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: CartPageLayoutHandler,
      multi: true,
    },
    provideConfig({
      launch: {
        [DS_DIALOG.SWITCH_CUSTOMER_DIALOG]: {
          inlineRoot: true,
          component: SwitchCustomerDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.RMA_SWITCH_CUSTOMER_DIALOG]: {
          inlineRoot: true,
          component: RMASwitchCustomerDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.RMA_SWITCH_CART_DIALOG]: {
          inlineRoot: true,
          component: RMASwitchCartDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.REPEAT_RMA_UPDATE_MESSAGE_DIALOG]: {
          inlineRoot: true,
          component: RepeatRMAUpdateMessageComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CartComponentModule {}
