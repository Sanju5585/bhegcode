/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
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

import {
  ConfiguratorAttributeCheckboxListModule,
  ConfiguratorAttributeCheckboxModule,
  ConfiguratorAttributeCompositionModule,
  ConfiguratorAttributeDropDownModule,
  ConfiguratorAttributeFooterModule,
  ConfiguratorAttributeHeaderModule,
  ConfiguratorAttributeInputFieldModule,
  ConfiguratorAttributeMultiSelectionBundleModule,
  ConfiguratorAttributeMultiSelectionImageModule,
  ConfiguratorAttributeNotSupportedModule,
  ConfiguratorAttributeNumericInputFieldModule,
  ConfiguratorAttributeRadioButtonModule,
  ConfiguratorAttributeReadOnlyModule,
  ConfiguratorAttributeSingleSelectionBundleDropdownModule,
  ConfiguratorAttributeSingleSelectionBundleModule,
  ConfiguratorAttributeSingleSelectionImageModule,
  ConfiguratorConflictDescriptionModule,
  ConfiguratorConflictSuggestionModule,
} from '@spartacus/product-configurator/rulebased';
import { ConfiguratorGroupComponent } from './configurator-group.component';
import { MatIconModule } from '@angular/material/icon';
import { ViewAllPopupComponent } from './view-all-popup/view-all-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewAllPopupCheckboxComponent } from './view-all-popup-checkbox/view-all-popup-checkbox.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    NgSelectModule,
    ConfiguratorAttributeNotSupportedModule,
    ConfiguratorAttributeInputFieldModule,
    ConfiguratorAttributeFooterModule,
    ConfiguratorAttributeNumericInputFieldModule,
    ConfiguratorAttributeHeaderModule,
    ConfiguratorAttributeRadioButtonModule,
    ConfiguratorAttributeSingleSelectionBundleModule,
    ConfiguratorAttributeMultiSelectionBundleModule,
    ConfiguratorAttributeReadOnlyModule,
    ConfiguratorAttributeSingleSelectionImageModule,
    ConfiguratorAttributeSingleSelectionBundleDropdownModule,
    ConfiguratorAttributeCheckboxModule,
    ConfiguratorAttributeCheckboxListModule,
    ConfiguratorAttributeDropDownModule,
    ConfiguratorAttributeMultiSelectionImageModule,
    ConfiguratorConflictDescriptionModule,
    ConfiguratorConflictSuggestionModule,
    ConfiguratorAttributeCompositionModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfiguratorForm: {
          component: ConfiguratorGroupComponent,
        },
      },
    }),
  ],
  declarations: [
    ConfiguratorGroupComponent,
    ViewAllPopupComponent,
    ViewAllPopupCheckboxComponent,
  ],
  exports: [ConfiguratorGroupComponent],
})
export class ConfiguratorGroupModule {}
