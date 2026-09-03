import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmaCartContainerComponent } from './rma-cart-container/rma-cart-container.component';
import { I18nModule, ConfigModule, provideConfig } from '@spartacus/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RmaCartSummaryComponent } from './rma-cart-summary/rma-cart-summary.component';
import { RmaCartProductComponent } from './rma-cart-product/rma-cart-product.component';
import { RmaCartAceessoryComponent } from './rma-cart-aceessory/rma-cart-aceessory.component';
import { DIALOG_TYPE, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RMAProductTypePipe } from './product-type.pipe';
import { RmaCartDeleteDilogComponent } from './rma-cart-delete-dialog/rma-cart-delete-dialog.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { RmaPipesModule } from '../../../shared/pipes/rma-pipes/rma-pipes.module';
import { BreadcrumbModule } from '../../../shared/components/breadcrumb/breadcrumb.module';
@NgModule({
  declarations: [
    RmaCartContainerComponent,
    RmaCartSummaryComponent,
    RmaCartProductComponent,
    RmaCartAceessoryComponent,
    RmaCartDeleteDilogComponent,
    RMAProductTypePipe,
  ],
  imports: [
    CommonModule,
    NgbModule,
    I18nModule,
    MediaModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RmaPipesModule,
    SpinnerModule,
    BreadcrumbModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['rma-cart', 'savedCart'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.RMA_CART_DELETE_DIALOG]: {
          inlineRoot: true,
          component: RmaCartDeleteDilogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RmaCartModule {}
