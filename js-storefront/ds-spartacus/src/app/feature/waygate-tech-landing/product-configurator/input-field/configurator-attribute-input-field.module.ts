import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';

import { ConfiguratorAttributeInputFieldComponent } from './configurator-attribute-input-field.component';
import { ConfiguratorAttributeCompositionConfig } from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [
    KeyboardFocusModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          AttributeType_string: ConfiguratorAttributeInputFieldComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeInputFieldComponent],
  exports: [ConfiguratorAttributeInputFieldComponent],
})
export class ConfiguratorAttributeInputFieldModule {}
