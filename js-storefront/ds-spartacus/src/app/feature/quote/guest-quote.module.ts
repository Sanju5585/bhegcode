import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  I18nModule,
  ConfigModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  DIALOG_TYPE,
  ItemCounterModule,
  MediaModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { MatExpansionModule } from '@angular/material/expansion';
import { GuestQuoteCartComponent } from './guest-quote-cart/guest-quote-cart.component';
import { GuestQuoteCheckoutComponent } from './guest-quote-checkout/guest-quote-checkout.component';
import { GuestQuoteCartProductComponent } from './guest-quote-cart/guest-quote-cart-product/guest-quote-cart-product.component';
import { GuestQuoteBakertabComponent } from './guest-quote-bakertab/guest-quote-bakertab.component';
import { GuestQuoteEmailtabComponent } from './guest-quote-emailtab/guest-quote-emailtab.component';
import { GuestQuotePopupComponent } from './guest-quote-popup/guest-quote-popup.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';

@NgModule({
  declarations: [
    GuestQuoteCartComponent,
    GuestQuoteCheckoutComponent,
    GuestQuoteCartProductComponent,
    GuestQuoteBakertabComponent,
    GuestQuoteEmailtabComponent,
    GuestQuotePopupComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    NgbModule,
    ItemCounterModule,
    MatExpansionModule,
    MediaModule,
    UrlModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerModule,
    FileUploadModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['quote-cart', 'quotecheckout'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.GUEST_QUOTE_DIALOG]: {
          inlineRoot: true,
          component: GuestQuotePopupComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [GuestQuoteCheckoutComponent],
})
export class GuestQuoteModule {}
