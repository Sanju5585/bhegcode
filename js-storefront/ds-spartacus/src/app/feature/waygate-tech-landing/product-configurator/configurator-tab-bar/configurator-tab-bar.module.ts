import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { CustomConfiguratorTabBarComponent } from './configurator-tab-bar.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    I18nModule,
    UrlModule,
    RouterModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfiguratorTabBar: {
          component: CustomConfiguratorTabBarComponent,
        },
      },
    }),
  ],
  declarations: [CustomConfiguratorTabBarComponent],
  exports: [CustomConfiguratorTabBarComponent],
})
export class ConfiguratorTabBarModule {}
