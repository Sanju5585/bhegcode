/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';

import { ConfiguratorAttributeCheckBoxListComponent } from './configurator-attribute-checkbox-list.component';
import {
  ConfiguratorAttributeCompositionConfig,
  ConfiguratorAttributeQuantityModule,
  ConfiguratorPriceModule,
} from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [
    KeyboardFocusModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    ConfiguratorAttributeQuantityModule,
    ConfiguratorPriceModule,
  ],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          AttributeType_checkBoxList:
            ConfiguratorAttributeCheckBoxListComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeCheckBoxListComponent],
  exports: [ConfiguratorAttributeCheckBoxListComponent],
})
export class ConfiguratorAttributeCheckboxListModule {}
