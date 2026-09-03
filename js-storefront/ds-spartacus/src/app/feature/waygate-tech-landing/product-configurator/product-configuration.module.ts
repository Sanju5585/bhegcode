import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DIALOG_TYPE,
  IconModule,
  KeyboardFocusModule,
} from '@spartacus/storefront';
import { I18nModule, provideConfig } from '@spartacus/core';

import { ConfiguratorProductTitleModule } from './product-configurator-title/configurator-product-title.module';
import { ConfiguratorTabBarModule } from './configurator-tab-bar';
import { ConfiguratorGroupMenuModule } from './group-menu';
import { ConfiguratorPreviousNextButtonsModule } from './prev-next-buttons';
import { ConfiguratorExitButtonModule } from './exit-button';
import { ConfiguratorAddToCartButtonModule } from './product-overview/add-to-cart-button';
import { ConfiguratorFormModule } from './form';
import { ConfiguratorGroupModule } from './group';
import { ConfiguratorAttributeCheckboxListModule } from './checkbox-list';

import { ConfiguratorHaveAquestionModelComponent } from './configurator-have-aquestion-model/configurator-have-aquestion-model.component';
import { ConfiguratorAttributeInputFieldModule } from './input-field';
import { ConfiguratorAttributeNotSupportedModule } from './not-supported';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ConfiguratorAttributeRadioButtonModule } from './radio-button';
import { ConfiguratorAttributeDropDownModule } from './drop-down';
import { ConfiguratorAttributeHeaderModule } from './header';
import { ConfiguratorAttributeReadOnlyModule } from './read-only';

/* import { ConfiguratorFormModule } from './config-form'; */

@NgModule({
  declarations: [ConfiguratorHaveAquestionModelComponent],
  exports: [ConfiguratorHaveAquestionModelComponent],
  imports: [
    CommonModule,
    KeyboardFocusModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    I18nModule,
    ConfiguratorTabBarModule,
    ConfiguratorProductTitleModule,
    ConfiguratorGroupMenuModule,
    ConfiguratorPreviousNextButtonsModule,
    ConfiguratorExitButtonModule,
    ConfiguratorAddToCartButtonModule,
    ConfiguratorFormModule,
    ConfiguratorGroupModule,
    ConfiguratorAttributeCheckboxListModule,
    FileUploadModule,
    ConfiguratorAttributeInputFieldModule,
    ConfiguratorAttributeNotSupportedModule,
    ConfiguratorAttributeRadioButtonModule,
    ConfiguratorAttributeDropDownModule,
    ConfiguratorAttributeHeaderModule,
    ConfiguratorAttributeReadOnlyModule,
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.HAVE_A_QUESTION_DIALOG]: {
          inlineRoot: true,
          component: ConfiguratorHaveAquestionModelComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ProductConfigurationModule {}
