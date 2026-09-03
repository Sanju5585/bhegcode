/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Configurator } from '@spartacus/product-configurator/rulebased';

export class ConfigFormUpdateEvent {
  changedAttribute: Configurator.Attribute;
  ownerKey: string;
  updateType?: Configurator.UpdateType;
}

export interface QuantityUpdateEvent {
  quantity: number;
  valueCode?: string;
}
