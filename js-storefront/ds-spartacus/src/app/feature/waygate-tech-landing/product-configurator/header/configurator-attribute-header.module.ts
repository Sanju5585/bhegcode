/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { IconModule } from '@spartacus/storefront';

import { ConfiguratorAttributeHeaderComponent } from './configurator-attribute-header.component';
import {
  ConfiguratorAttributeCompositionConfig,
  ConfiguratorShowMoreModule,
} from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    IconModule,
    NgSelectModule,
    ConfiguratorShowMoreModule,
  ],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          Header: ConfiguratorAttributeHeaderComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeHeaderComponent],
  exports: [ConfiguratorAttributeHeaderComponent],
})
export class ConfiguratorAttributeHeaderModule {}
