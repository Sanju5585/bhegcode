import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { IconModule, KeyboardFocusModule } from '@spartacus/storefront';
import { CustomConfiguratorGroupMenuComponent } from './configurator-group-menu.component';

@NgModule({
  imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfiguratorMenu: {
          component: CustomConfiguratorGroupMenuComponent,
        },
      },
    }),
    provideConfig({
      icon: {
        symbols: {
          SUCCESS: 'fa-regular fa-circle-check',
          ERROR: 'fa-solid fa-circle-exclamation',
          WARNING: 'fa-solid fa-triangle-exclamation',
        },
      },
    }),
  ],
  declarations: [CustomConfiguratorGroupMenuComponent],
  exports: [CustomConfiguratorGroupMenuComponent],
})
export class ConfiguratorGroupMenuModule {}
