import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';
import { CustomConfiguratorPreviousNextButtonsComponent } from './configurator-previous-next-buttons.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, I18nModule, KeyboardFocusModule, MatIconModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfiguratorPrevNext: {
          component: CustomConfiguratorPreviousNextButtonsComponent,
        },
      },
    }),
  ],
  declarations: [CustomConfiguratorPreviousNextButtonsComponent],
  exports: [CustomConfiguratorPreviousNextButtonsComponent],
})
export class ConfiguratorPreviousNextButtonsModule {}
