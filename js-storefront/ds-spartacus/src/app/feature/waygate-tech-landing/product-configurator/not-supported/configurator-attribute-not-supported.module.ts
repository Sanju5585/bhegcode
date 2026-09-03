import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { ConfiguratorAttributeNotSupportedComponent } from './configurator-attribute-not-supported.component';
import { ConfiguratorAttributeCompositionConfig } from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [CommonModule, I18nModule],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          AttributeType_not_implemented:
            ConfiguratorAttributeNotSupportedComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeNotSupportedComponent],
  exports: [ConfiguratorAttributeNotSupportedComponent],
})
export class ConfiguratorAttributeNotSupportedModule {}
