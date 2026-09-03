import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaComponent } from './recaptcha.component';
import {
  RecaptchaModule,
  RecaptchaV3Module,
  RECAPTCHA_V3_SITE_KEY,
} from 'ng-recaptcha';
import { environment } from '../../../../environments/environment';

@NgModule({
  declarations: [RecaptchaComponent],
  imports: [CommonModule, RecaptchaModule, RecaptchaV3Module],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.siteKey },
  ],
  exports: [RecaptchaComponent],
})
export class DsRecaptchaModule {}
