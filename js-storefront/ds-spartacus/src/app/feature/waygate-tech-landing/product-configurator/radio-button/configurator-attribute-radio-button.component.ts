/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TranslationService } from '@spartacus/core';
import {
  Configurator,
  ConfiguratorAttributeCompositionContext,
  ConfiguratorAttributePriceChangeService,
  ConfiguratorAttributeQuantityService,
  ConfiguratorAttributeSingleSelectionBaseComponent,
  ConfiguratorCommonsService,
  ConfiguratorStorefrontUtilsService,
} from '@spartacus/product-configurator/rulebased';

@Component({
  standalone: false,
  selector: 'cx-configurator-attribute-radio-button',
  templateUrl: './configurator-attribute-radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfiguratorAttributePriceChangeService],
})
export class ConfiguratorAttributeRadioButtonComponent
  extends ConfiguratorAttributeSingleSelectionBaseComponent
  implements OnInit
{
  attributeRadioButtonForm = new UntypedFormControl('');
  retractValueCode = Configurator.RetractValueCode;

  constructor(
    protected override quantityService: ConfiguratorAttributeQuantityService,
    protected override translation: TranslationService,
    protected override attributeComponentContext: ConfiguratorAttributeCompositionContext,
    protected override configuratorCommonsService: ConfiguratorCommonsService,
    protected override configuratorStorefrontUtilsService: ConfiguratorStorefrontUtilsService
  ) {
    super(
      quantityService,
      translation,
      attributeComponentContext,
      configuratorCommonsService,
      configuratorStorefrontUtilsService
    );
  }

  ngOnInit(): void {
    this.attributeRadioButtonForm.setValue(this.attribute.selectedSingleValue);
  }
}
