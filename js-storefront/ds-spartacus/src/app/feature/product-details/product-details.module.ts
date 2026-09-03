import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StarRatingModule,
  IconModule,
  SpinnerModule,
  MediaModule,
  ItemCounterModule,
} from '@spartacus/storefront';
import {
  ConfigModule,
  CmsConfig,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import { ProductIntroComponent } from './product-intro/product-intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddToCartModule } from '../cart/add-to-cart/add-to-cart.module';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
@NgModule({
  declarations: [ProductIntroComponent, ProductSummaryComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    IconModule,
    AddToCartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTooltipModule,
    SpinnerModule,
    MediaModule,
    ItemCounterModule,
    I18nModule,
    NgSelectModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['pdp'],
        },
      },
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductIntroComponent,
        },
        ProductSummaryComponent: {
          component: ProductSummaryComponent,
        },
      },
    } as CmsConfig),
  ],
  providers: [
    provideConfig({
      routing: {
        category: {
          paths: ['product/:productCode/:name', 'product/:productCode'],
          paramsMapping: { productCode: 'code' },
          protected: false,
        },
        notFound: {
          paths: [''],
        },
      },
    } as CmsConfig),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsModule {}
