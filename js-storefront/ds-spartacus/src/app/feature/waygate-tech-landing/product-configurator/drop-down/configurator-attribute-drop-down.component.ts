/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { UntypedFormControl } from '@angular/forms';
import { Config, TranslationService, useFeatureStyles } from '@spartacus/core';
import {
  Configurator,
  ConfiguratorAttributeCompositionContext,
  ConfiguratorAttributePriceChangeService,
  ConfiguratorAttributeQuantityService,
  ConfiguratorAttributeSingleSelectionBaseComponent,
  ConfiguratorCommonsService,
  ConfiguratorStorefrontUtilsService,
} from '@spartacus/product-configurator/rulebased';
import { take } from 'rxjs';

@Component({
  standalone: false,
  selector: 'cx-configurator-attribute-drop-down',
  templateUrl: './configurator-attribute-drop-down.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfiguratorAttributePriceChangeService],
})
export class ConfiguratorAttributeDropDownComponent
  extends ConfiguratorAttributeSingleSelectionBaseComponent
  implements OnInit
{
  attributeDropDownForm = new UntypedFormControl('');
  group: string;

  protected config = inject(Config);

  constructor(
    protected override quantityService: ConfiguratorAttributeQuantityService,
    protected override translation: TranslationService,
    protected override attributeComponentContext: ConfiguratorAttributeCompositionContext,
    protected override configuratorCommonsService: ConfiguratorCommonsService,
    protected override configuratorStorefrontUtilsService: ConfiguratorStorefrontUtilsService,
    private translationService: TranslationService
  ) {
    super(
      quantityService,
      translation,
      attributeComponentContext,
      configuratorCommonsService,
      configuratorStorefrontUtilsService
    );

    this.group = attributeComponentContext.group.id;
    useFeatureStyles('productConfiguratorAttributeTypesV2');
  }

  ngOnInit() {
    this.attributeDropDownForm.setValue(this.attribute.selectedSingleValue);
  }

  override getSelectedValue(): Configurator.Value | undefined {
    return this.attribute.values?.find((value) => value?.selected);
  }

  /**
   * Retrieves a selected value description.
   *
   * @returns - if a selected value description is defined then it will be returned, otherwise an empty string
   */
  getSelectedValueDescription(): string {
    return this.getSelectedValue()?.description ?? '';
  }

  getValueCode(code: string): string {
    let value: string;
    if (code == Configurator.RetractValueCode) {
      this.translationService
        .translate('configurator.attribute.noOptionSelectedMsg')
        .pipe(take(1))
        .subscribe((text) => {
          value = text;
          return value;
        });
    } else {
      value = code;
    }

    return value;
  }
}
