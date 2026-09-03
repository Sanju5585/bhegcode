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

import { ConfiguratorAttributeRadioButtonComponent } from './configurator-attribute-radio-button.component';
import {
  ConfiguratorAttributeCompositionConfig,
  ConfiguratorAttributeInputFieldModule,
  ConfiguratorAttributeNumericInputFieldModule,
  ConfiguratorAttributeQuantityModule,
  ConfiguratorPriceModule,
} from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [
    CommonModule,
    ConfiguratorAttributeQuantityModule,
    FormsModule,
    I18nModule,
    KeyboardFocusModule,
    ReactiveFormsModule,
    ConfiguratorPriceModule,
    ConfiguratorAttributeNumericInputFieldModule,
    ConfiguratorAttributeInputFieldModule,
  ],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          AttributeType_radioGroup: ConfiguratorAttributeRadioButtonComponent,
          AttributeType_radioGroup_add:
            ConfiguratorAttributeRadioButtonComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeRadioButtonComponent],
  exports: [ConfiguratorAttributeRadioButtonComponent],
})
export class ConfiguratorAttributeRadioButtonModule {}
