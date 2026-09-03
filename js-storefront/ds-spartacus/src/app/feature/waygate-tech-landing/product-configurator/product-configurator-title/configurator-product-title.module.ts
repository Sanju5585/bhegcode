import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { ConfiguratorProductTitleComponent } from './configurator-product-title.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    I18nModule,
    IconModule,
    MediaModule,
    MatIconModule,
  ],
  providers: [
    provideConfig((<CmsConfig>{
      cmsComponents: {
        ConfiguratorProductTitle: {
          component: ConfiguratorProductTitleComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorProductTitleComponent],
  exports: [ConfiguratorProductTitleComponent],
})
export class ConfiguratorProductTitleModule {}
