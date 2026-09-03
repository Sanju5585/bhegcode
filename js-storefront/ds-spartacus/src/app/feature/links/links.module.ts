import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { I18nModule, UrlModule, ConfigModule } from '@spartacus/core';

import { SpinnerModule } from '@spartacus/storefront';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [LinkComponent],
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
          common: ['link'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LinksModule {}
