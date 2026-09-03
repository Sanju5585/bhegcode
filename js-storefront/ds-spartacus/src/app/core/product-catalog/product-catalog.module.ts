import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productCategoriesReducer } from './store/reducers/product-categories.reducer';
import { ProductCategoriesEffects } from './store/effects/product-categories.effects';
import {
  HttpErrorHandler,
  ProductAdapter,
  ProductSearchAdapter,
  provideConfig,
} from '@spartacus/core';
import { DsOccProductConfig } from './config/custom-occ-product-config';
import { DsOccProductSearchAdapter } from './occ-adapters/ds-occ-product-search.adapter';
import { DsOccProductAdapter } from './occ-adapters/ds-occ-product.adapter';
import { DSForbiddenHandler } from '../auth/ds-forbidden.handler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('product-categories', productCategoriesReducer),
    EffectsModule.forFeature([ProductCategoriesEffects]),
  ],
  providers: [
    provideConfig(DsOccProductConfig),
    {
      provide: ProductSearchAdapter,
      useClass: DsOccProductSearchAdapter,
    },
    {
      provide: ProductAdapter,
      useClass: DsOccProductAdapter,
    },
    {
      provide: HttpErrorHandler,
      useExisting: DSForbiddenHandler,
      multi: true,
    },
  ],
})
export class ProductCatalogModule {}
