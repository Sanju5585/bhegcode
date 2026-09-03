import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HazardInfoContainerComponent } from './hazard-info-container/hazard-info-container.component';
import { HazardInfoProductComponent } from './hazard-info-product/hazard-info-product.component';
import { HazardInfoFormComponent } from './hazard-info-form/hazard-info-form.component';
import { MediaModule } from '@spartacus/storefront';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';

@NgModule({
  declarations: [
    HazardInfoContainerComponent,
    HazardInfoProductComponent,
    HazardInfoFormComponent,
  ],
  imports: [
    CommonModule,
    MediaModule,
    FormsModule,
    FileUploadModule,
    I18nModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['hazardInfo'],
        },
      },
    }),
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HazardInfoModule {}
