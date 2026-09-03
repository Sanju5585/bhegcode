import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import {
  DIALOG_TYPE,
  ItemCounterModule,
  MediaModule,
  PromotionsModule,
} from '@spartacus/storefront';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartActionComponent } from './cart-action/cart-action.component';
import { CartDeleteDilogComponent } from './cart-delete-dilog/cart-delete-dilog.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SaveCartModelComponent } from './save-cart-model/save-cart-model.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { AddressModelModule } from '../../../shared/components/address-model/address-model.module';
import { CustomUploadModule } from '../../../shared/components/custom-upload/custom-upload.module';
import { QuantityCounterModule } from '../../../shared/components/quantity-counter';
import { SpinnerOverlayModule } from '../../../shared/components/spinner-overlay/spinner-overlay.module';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';
import { DatePickerModule } from '../../../shared/components/date-picker/date-picker.module';
import { MultiCurrencyDialogComponent } from './multi-currency-dialog/multi-currency-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartCouponModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    UrlModule,
    NgbModule,
    PromotionsModule,
    DatePickerModule,
    I18nModule,
    MediaModule,
    ItemCounterModule,
    MatExpansionModule,
    FeaturesConfigModule,
    AddressModelModule,
    QuantityCounterModule,
    CustomUploadModule,
    ClickOutsideDirectiveModule,
    SpinnerOverlayModule,
  ],
  declarations: [
    CartItemComponent,
    CartActionComponent,
    OrderSummaryComponent,
    CartItemListComponent,
    CartDeleteDilogComponent,
    SaveCartModelComponent,
    MultiCurrencyDialogComponent,
  ],
  exports: [
    CartItemComponent,
    CartActionComponent,
    OrderSummaryComponent,
    CartItemListComponent,
    SaveCartModelComponent,
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.CART_DELETE_DIALOG]: {
          inlineRoot: true,
          component: CartDeleteDilogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.SAVE_CART_DIALOG]: {
          inlineRoot: true,
          component: SaveCartModelComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.MULTI_CURRENCY_DIALOG]: {
          inlineRoot: true,
          component: MultiCurrencyDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
    provideConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['savedCart'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartSharedModule {}
