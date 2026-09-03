import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ConfigModule, I18nModule } from '@spartacus/core';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          sharedComp: [
            'dateRange',
            'custom-upload',
            'file-upload',
            'datanotfound',
          ],
        },
      },
    }),
  ],
  declarations: [DateRangePickerComponent],
  exports: [DateRangePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DateRangePickerModule {}
