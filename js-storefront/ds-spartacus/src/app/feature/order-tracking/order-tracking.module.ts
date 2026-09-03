import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  I18nModule,
  UrlModule,
  ConfigModule,
  provideConfig,
} from '@spartacus/core';
import { RouterModule } from '@angular/router';
import {
  SpinnerModule,
  IconModule,
  MediaModule,
  DIALOG_TYPE,
} from '@spartacus/storefront';
import { OrderTrackingDetailComponent } from './order-tracking-detail/order-tracking-detail.component';
import { AddressDetailsComponent } from './order-tracking-detail/address-details/address-details.component';
import { AssociatedDocumentsComponent } from './order-tracking-detail/associated-documents/associated-documents.component';
import { LineItemsComponent } from './order-tracking-detail/line-items/line-items.component';
import { OrderTrackingProductComponent } from './order-tracking-detail/order-tracking-product/order-tracking-product.component';
import { OrderTrackingService } from './order-tracking.service';
import { OrderTrackingListComponent } from './order-tracking-list/order-tracking-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShareOrderDilogComponent } from './order-tracking-detail/share-order-dilog/share-order-dilog.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { DateRangePickerModule } from '../../shared/components/date-range-picker/date-range-picker.module';
import { DsRecaptchaModule } from '../../shared/components/recaptcha/recaptcha.module';
import { ScrollContainerModule } from '../../shared/components/scroll-container/scroll-container.module';
import { StatusBubbleModule } from '../../shared/components/status-bubble/status-bubble.module';
import { StatusTilesModule } from '../../shared/components/status-tiles/status-tiles.module';

@NgModule({
  declarations: [
    AddressDetailsComponent,
    LineItemsComponent,
    OrderTrackingProductComponent,
    OrderTrackingDetailComponent,
    OrderTrackingListComponent,
    AssociatedDocumentsComponent,
    ShareOrderDilogComponent,
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    UrlModule,
    IconModule,
    I18nModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    ScrollContainerModule,
    MediaModule,
    StatusBubbleModule,
    FormsModule,
    StatusTilesModule,
    DateRangePickerModule,
    ReactiveFormsModule,
    NgSelectModule,
    DsRecaptchaModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['order-tracking'],
        },
      },
    }),
  ],
  providers: [
    OrderTrackingService,
    DatePipe,
    provideConfig({
      launch: {
        [DS_DIALOG.SHARE_ORDER_DIALOG]: {
          inlineRoot: true,
          component: ShareOrderDilogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  exports: [OrderTrackingListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrderTrackingModule {}
