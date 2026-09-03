import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CustomUploadComponent } from './custom-upload.component';

const router: Routes = [
  {
    path: '',
    component: CustomUploadComponent,
  },
];

@NgModule({
  declarations: [CustomUploadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forChild(router),
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
  exports: [CustomUploadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomUploadModule {}
