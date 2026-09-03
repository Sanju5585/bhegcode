/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DSVariantConfiguratorOccAdapter } from './variant-configurator-occ.adapter';
import {
  RulebasedConfiguratorAdapter,
  RulebasedConfiguratorConnector,
  VariantConfiguratorOccAdapter,
} from '@spartacus/product-configurator/rulebased';
import { ConfigModule } from '@spartacus/core';
import { defaultOccVariantConfiguratorConfigFactory } from './default-occ-configurator-variant-config';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfigFactory(defaultOccVariantConfiguratorConfigFactory),
  ],
  providers: [
    {
      provide: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST,
      useClass: DSVariantConfiguratorOccAdapter,
      multi: true,
    },
  ],
})
export class DSVariantConfiguratorOccModule {}
