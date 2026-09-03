import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { WaygateDatePickerComponent } from './waygate-date-picker.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [WaygateDatePickerComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    I18nModule,
    FormsModule,
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

  exports: [WaygateDatePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WaygateDatePicker {}
