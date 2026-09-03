import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  FeaturesConfigModule,
  provideConfig,
} from '@spartacus/core';
import { ConfiguratorPriceSummaryComponent } from './configurator-price-summary.component';
import {
  IconModule,
  ItemCounterModule,
  MediaModule,
} from '@spartacus/storefront';
import { MatIconModule } from '@angular/material/icon';
import { CustomQuantityCounterModule } from '../../../../shared/components/custom-quantity-counter/custom-quantity-counter.module';
import { FileUploadModule } from '../../../../shared/components/file-upload/file-upload.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    FeaturesConfigModule,
    ItemCounterModule,
    IconModule,
    MatIconModule,
    MediaModule,
    CustomQuantityCounterModule,
    FileUploadModule
  ],
  providers: [
    provideConfig((<CmsConfig>{
      cmsComponents: {
        ConfiguratorPriceSummary: {
          component: ConfiguratorPriceSummaryComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorPriceSummaryComponent],
  exports: [ConfiguratorPriceSummaryComponent],
})
export class ConfiguratorPriceSummaryModule {}
