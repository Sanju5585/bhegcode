import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './searchbox.component';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import {
  IconModule,
  ItemCounterModule,
  MediaModule,
} from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartModule } from '../../cart/add-to-cart/add-to-cart.module';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['navigation-menu'],
        },
      },
    }),
    MediaModule,
    ItemCounterModule,
    ReactiveFormsModule,
    FormsModule,
    AddToCartModule,
    ClickOutsideDirectiveModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        SearchBoxComponent: {
          component: SearchBoxComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [SearchBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchboxModule {}
