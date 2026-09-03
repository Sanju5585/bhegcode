import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressModelComponent } from './address-model.component';
import { DIALOG_TYPE, SpinnerModule } from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';

@NgModule({
  declarations: [AddressModelComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['address-model'],
        },
      },
    }),
  ],
  exports: [AddressModelComponent],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.ADDRESS_DIALOG]: {
          inlineRoot: true,
          component: AddressModelComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddressModelModule {}
