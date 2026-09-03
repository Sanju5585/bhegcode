import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDocsComponent } from './training-docs.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpinnerModule } from '@spartacus/storefront';

@NgModule({
  declarations: [TrainingDocsComponent],
  imports: [
    CommonModule,
    UrlModule,
    I18nModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    NgSelectModule,
    SpinnerModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['trainingDocs'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrainingDocsModule {}
