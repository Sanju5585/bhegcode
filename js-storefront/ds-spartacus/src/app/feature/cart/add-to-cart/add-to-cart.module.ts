import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import {
  DIALOG_TYPE,
  IconModule,
  ItemCounterModule,
  KeyboardFocusModule,
  PromotionsModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { CartLoadingDialogComponent } from '../cart-loading-dialog/cart-loading-dialog';
import { SwitchCartDialogComponent } from '../switch-cart-dialog/switch-cart';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import { OccCartAdapter } from '@spartacus/cart/base/occ';
import { WaygateRouterDialogComponent } from '../../waygate-tech-landing/quick-order/waygate-router-dialog/waygate-router-dialog.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CartSharedModule,
    RouterModule,
    SpinnerModule,
    PromotionsModule,
    FeaturesConfigModule,
    UrlModule,
    IconModule,
    I18nModule,
    ItemCounterModule,
    KeyboardFocusModule,
    NgSelectModule,
  ],
  providers: [
    OccCartAdapter,
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          component: AddToCartComponent,
        },
      },
    }),
    provideConfig({
      launch: {
        [DS_DIALOG.ADD_TO_CART_DIALOG]: {
          inlineRoot: true,
          component: AddedToCartDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CART_LOADING_DIALOG]: {
          inlineRoot: true,
          component: CartLoadingDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.SWITCH_CART_DIALOG]: {
          inlineRoot: true,
          component: SwitchCartDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.QUICK_ORDER_ROUTE_GAURD]: {
          inlineRoot: true,
          component: WaygateRouterDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  declarations: [
    AddToCartComponent,
    AddedToCartDialogComponent,
    SwitchCartDialogComponent,
    CartLoadingDialogComponent,
  ],
  exports: [AddToCartComponent, AddedToCartDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddToCartModule {}
