import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { FileUploadProgressComponent } from './file-upload-progress/file-upload-progress.component';

@NgModule({
  declarations: [FileUploadComponent, FileUploadProgressComponent],
  imports: [
    CommonModule,
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

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FileUploadComponent, FileUploadProgressComponent],
})
export class FileUploadModule {}
