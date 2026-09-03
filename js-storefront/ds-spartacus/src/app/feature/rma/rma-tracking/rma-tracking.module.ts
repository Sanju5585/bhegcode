import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RmaListingComponent } from './rma-listing/rma-listing.component';
import {
  DIALOG_TYPE,
  IconModule,
  MediaModule,
  SpinnerModule,
} from '@spartacus/storefront';
import {
  ConfigModule,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RmaTrackingService } from './rma-tracking.service';
import { RmaTrackingDetailComponent } from './rma-detail/rma-tracking-detail/rma-tracking-detail.component';
import { AssociatedDocumentsComponent } from './rma-detail/rma-tracking-detail/associated-documents/associated-documents.component';
import { ShareRmaDilogComponent } from './rma-detail/share-rma-dilog/share-rma-dilog.component';
import { RmaTrackingProductComponent } from './rma-detail/rma-tracking-detail/rma-tracking-product/rma-tracking-product.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { DateRangePickerModule } from '../../../shared/components/date-range-picker/date-range-picker.module';
import { DsRecaptchaModule } from '../../../shared/components/recaptcha/recaptcha.module';
import { ScrollContainerModule } from '../../../shared/components/scroll-container/scroll-container.module';
import { StatusBubbleModule } from '../../../shared/components/status-bubble/status-bubble.module';
import { StatusTilesModule } from '../../../shared/components/status-tiles/status-tiles.module';
import { LineItemsComponent } from './rma-detail/rma-tracking-detail/line-items/line-items.component';

@NgModule({
  declarations: [
    RmaListingComponent,
    RmaTrackingDetailComponent,
    RmaTrackingProductComponent,
    LineItemsComponent,
    AssociatedDocumentsComponent,
    ShareRmaDilogComponent,
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
          common: ['rma-tracking'],
        },
      },
    }),
  ],
  providers: [
    RmaTrackingService,
    DatePipe,
    provideConfig({
      launch: {
        [DS_DIALOG.SHARE_RMA_DIALOG]: {
          inlineRoot: true,
          component: ShareRmaDilogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  exports: [RmaListingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RmaTrackingModule {}
