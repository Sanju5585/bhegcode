import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { IconModule, ItemCounterModule } from '@spartacus/storefront';
import { ConfiguratorAddToCartButtonComponent } from './configurator-add-to-cart-button.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    ItemCounterModule,
    IconModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig((<CmsConfig>{
      cmsComponents: {
        ConfiguratorAddToCartButton: {
          component: ConfiguratorAddToCartButtonComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAddToCartButtonComponent],
  exports: [ConfiguratorAddToCartButtonComponent],
})
export class ConfiguratorAddToCartButtonModule {}
