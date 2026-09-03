import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  WindowRef,
} from '@spartacus/core';
import { ConfiguratorExitButtonComponent } from './configurator-exit-button.component';
import { ConfiguratorExitButtonModalComponent } from './configurator-exit-button-modal/configurator-exit-button-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, I18nModule, MatIconModule, RouterModule],
  providers: [
    provideConfig((<CmsConfig>{
      cmsComponents: {
        ConfiguratorExitButton: {
          component: ConfiguratorExitButtonComponent,
        },
      },
    }) as CmsConfig),
    WindowRef,
  ],
  declarations: [
    ConfiguratorExitButtonComponent,
    ConfiguratorExitButtonModalComponent,
  ],
  exports: [ConfiguratorExitButtonComponent],
})
export class ConfiguratorExitButtonModule {}
