import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterProgressPageComponent } from './register-progress-page/register-progress-page.component';
import { DialogModule } from '../../../shared/components/dialog-component/dialog.module';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistrationEmailConfirmationComponent } from './registration-email-confirmation/registration-email-confirmation.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    RegisterProgressPageComponent,
    RegistrationEmailConfirmationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    I18nModule,
    MatIconModule,
    SpinnerModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FileUploadModule,
    NgSelectModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['registration'],
        },
      },
    }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [
    RegistrationComponent,
    RegisterProgressPageComponent,
    RegistrationEmailConfirmationComponent,
  ],
})
export class RegistrationModule {}
