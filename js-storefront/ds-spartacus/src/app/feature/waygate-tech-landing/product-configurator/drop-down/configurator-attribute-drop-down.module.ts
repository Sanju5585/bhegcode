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
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
} from '@spartacus/core';
import { KeyboardFocusModule } from '@spartacus/storefront';

import { ConfiguratorAttributeInputFieldModule } from '../input-field/configurator-attribute-input-field.module';

import { ConfiguratorAttributeDropDownComponent } from './configurator-attribute-drop-down.component';
import {
  ConfiguratorAttributeCompositionConfig,
  ConfiguratorAttributeNumericInputFieldModule,
  ConfiguratorAttributeQuantityModule,
  ConfiguratorPriceModule,
  ConfiguratorShowMoreModule,
} from '@spartacus/product-configurator/rulebased';

@NgModule({
  imports: [
    CommonModule,
    ConfiguratorAttributeQuantityModule,
    FormsModule,
    I18nModule,
    KeyboardFocusModule,
    NgSelectModule,
    ReactiveFormsModule,
    ConfiguratorPriceModule,
    ConfiguratorAttributeNumericInputFieldModule,
    ConfiguratorAttributeInputFieldModule,
    ConfiguratorShowMoreModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig((<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        // addRetractOption: true,
        assignment: {
          AttributeType_dropdown: ConfiguratorAttributeDropDownComponent,
          AttributeType_dropdown_add: ConfiguratorAttributeDropDownComponent,
        },
      },
    }) as CmsConfig),
  ],
  declarations: [ConfiguratorAttributeDropDownComponent],
  exports: [ConfiguratorAttributeDropDownComponent],
})
export class ConfiguratorAttributeDropDownModule {}
