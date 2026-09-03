import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HazardInfoComponent } from './hazard-info.component';
import { ConfigModule, I18nModule } from '@spartacus/core';

const router: Routes = [
  {
    path: '',
    component: HazardInfoComponent,
  },
];

@NgModule({
  declarations: [HazardInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(router),
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['hazard'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HazardModule {}
