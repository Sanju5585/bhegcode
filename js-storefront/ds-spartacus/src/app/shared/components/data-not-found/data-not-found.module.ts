import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { RouterModule, Routes } from '@angular/router';
import { DataNotFoundComponent } from './data-not-found.component';

const router: Routes = [
  {
    path: ':type',
    component: DataNotFoundComponent,
  },
];

@NgModule({
  declarations: [DataNotFoundComponent],
  imports: [
    CommonModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataNotFoundModule {}
