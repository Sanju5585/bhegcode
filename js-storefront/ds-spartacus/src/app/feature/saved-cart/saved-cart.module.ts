import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewSalesAreaComponent } from './view-sales-area/view-sales-area.component';
import { ViewCartDetailComponent } from './view-cart-detail/view-cart-detail.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {
  ConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { DIALOG_TYPE, SpinnerModule } from '@spartacus/storefront';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';

@NgModule({
  declarations: [
    ViewCartComponent,
    ViewSalesAreaComponent,
    ViewCartDetailComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatExpansionModule,
    MatTableModule,
    MatExpansionModule,
    RouterModule,
    I18nModule,
    SpinnerModule,
  ],
  providers: [
    provideDefaultConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          savedcart: [
            'savedCart',
            'savedCartDetails',
            'savedCartList',
            'savedCartCartPage',
            'savedCartDialog',
            'addToSavedCart',
          ],
        },
      },
    }),
    provideConfig({
      launch: {
        [DS_DIALOG.VIEW_SALES_AREA_DIALOG]: {
          inlineRoot: true,
          component: ViewSalesAreaComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.DELETE_DIALOG]: {
          inlineRoot: true,
          component: DeleteDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SavedCartModule {}
