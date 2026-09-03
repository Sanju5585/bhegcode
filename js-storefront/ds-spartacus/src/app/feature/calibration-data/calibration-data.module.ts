import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalibrationDataComponent } from './calibration-data.component';
import { I18nModule, provideConfig } from '@spartacus/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CalibrationDataRequestComponent } from './calibration-data-request/calibration-data-request.component';
import { CalibrationDataSuccessComponent } from './calibration-data-success/calibration-data-success.component';
import { FindCalibrationDataComponent } from './find-calibration-data/find-calibration-data.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DIALOG_TYPE } from '@spartacus/storefront';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { I18Pipe } from '../../shared/pipes/i18.pipe';
import { AddEquipmentComponent } from '../site-equipments/add-equipment/add-equipment.component';
import { DatePickerModule } from '../../shared/components/date-picker/date-picker.module';

@NgModule({
  declarations: [
    CalibrationDataComponent,
    CalibrationDataRequestComponent,
    CalibrationDataSuccessComponent,
    FindCalibrationDataComponent,
    AddEquipmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    FormsModule,
    DatePickerModule,
  ],
  providers: [
    DatePipe,
    I18Pipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FindCalibrationDataComponent,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    provideConfig({
      launch: {
        [DS_DIALOG.CALI_DATA_SUCCESS_DIALOG]: {
          inlineRoot: true,
          component: CalibrationDataSuccessComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CALI_DATA_REQUEST_DIALOG]: {
          inlineRoot: true,
          component: CalibrationDataRequestComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CalibrationDataModule {}
