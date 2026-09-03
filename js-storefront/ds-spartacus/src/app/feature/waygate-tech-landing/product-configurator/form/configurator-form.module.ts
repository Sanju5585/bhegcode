/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { ConfiguratorFormComponent } from './configurator-form.component';
import { ConfiguratorGroupModule } from '../group/configurator-group.module';

@NgModule({
  imports: [CommonModule, I18nModule, NgSelectModule, ConfiguratorGroupModule],
  providers: [
    provideConfig((<CmsConfig>{
      cmsComponents: {
        ConfiguratorForm: {
          component: ConfiguratorFormComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorFormComponent],
  exports: [ConfiguratorFormComponent],
})
export class ConfiguratorFormModule {}
