import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { FileDragNDropDirective } from '../../shared/directives/file-drag-n-drop.directive';
import { DsRecaptchaModule } from '../../shared/components/recaptcha/recaptcha.module';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';

@NgModule({
  declarations: [FeedbackComponent, FileDragNDropDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    SpinnerModule,
    FileUploadModule,
    DsRecaptchaModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },

        chunks: {
          common: ['feedback'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedbackModule {}
