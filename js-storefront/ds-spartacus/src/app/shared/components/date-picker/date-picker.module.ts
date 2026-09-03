import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePickerComponent } from './date-picker.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
@NgModule({
  declarations: [DatePickerComponent],
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

  exports: [DatePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DatePickerModule {}
