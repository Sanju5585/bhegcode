import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { I18nModule, UrlModule, ConfigModule } from '@spartacus/core';

import { ContactUsDetailsComponent } from './contact-us-details/contact-us-details.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactUsComponent } from './contact-us.component';
import { SpinnerModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    ContactUsComponent,
    ContactUsDetailsComponent,
    ContactUsFormComponent,
  ],
  imports: [
    CommonModule,
    UrlModule,
    SpinnerModule,
    I18nModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['contactUs'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactUsModule {}
