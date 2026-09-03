import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RmaStatusComponent } from './rma-status/rma-status.component';
import { DateRangePickerModule } from '../../../shared/components/date-range-picker/date-range-picker.module';
import { DsRecaptchaModule } from '../../../shared/components/recaptcha/recaptcha.module';
import { ScrollContainerModule } from '../../../shared/components/scroll-container/scroll-container.module';
import { StatusBubbleModule } from '../../../shared/components/status-bubble/status-bubble.module';
import { StatusTilesModule } from '../../../shared/components/status-tiles/status-tiles.module';

@NgModule({
  declarations: [RmaStatusComponent],
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
    NgbModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RmaStatusModule {}
