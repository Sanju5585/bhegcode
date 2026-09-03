import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmaFormContainerComponent } from './rma-form-container/rma-form-container.component';
import { RmaOverviewComponent } from './rma-overview/rma-overview.component';
import { IdentifyEquipmentComponent } from './identify-equipment/identify-equipment.component';
import { ReturnOfferingComponent } from './return-offering/return-offering.component';
import { RmaDocumentationComponent } from './rma-documentation/rma-documentation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EquipmentSearchResultsComponent } from './equipment-search-results/equipment-search-results.component';
import { RmaHelpFindPartComponent } from './rma-help-find-part/rma-help-find-part.component';
import { RmaProductSearchComponent } from './rma-product-search/rma-product-search.component';
import {
  ConfigModule,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DIALOG_TYPE,
  IconModule,
  ItemCounterModule,
  KeyboardFocusModule,
  ListNavigationModule,
  MediaModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { OfferingsrPipe } from './repair.pipe';
import { AddedToReturnCartDialogComponent } from './added-to-return-cart-dialog/added-to-return-cart-dialog';
import { RouterModule } from '@angular/router';
import { GoToHazardousFormDialogComponent } from './goto-hazard-form-dialog/goto-hazard-form-dialog';
import { AddAccessoriesDialogComponent } from './add-accessories-dialog/add-accessories-dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FileUploadModule } from '../../../shared/components/file-upload/file-upload.module';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { CustomUploadModule } from '../../../shared/components/custom-upload/custom-upload.module';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';
@NgModule({
  declarations: [
    RmaFormContainerComponent,
    RmaOverviewComponent,
    IdentifyEquipmentComponent,
    ReturnOfferingComponent,
    RmaDocumentationComponent,
    EquipmentSearchResultsComponent,
    RmaHelpFindPartComponent,
    RmaProductSearchComponent,
    OfferingsrPipe,
    AddedToReturnCartDialogComponent,
    GoToHazardousFormDialogComponent,
    AddAccessoriesDialogComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    I18nModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    MediaModule,
    ItemCounterModule,
    SpinnerModule,
    ListNavigationModule,
    ClickOutsideDirectiveModule,
    UrlModule,
    IconModule,
    RouterModule,
    KeyboardFocusModule,
    MatTooltipModule,
    CustomUploadModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['rma-form'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.GOTO_HAZARD_FORM_DIALOG]: {
          inlineRoot: true,
          component: GoToHazardousFormDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.ADDED_TO_RETURN_CART_DIALOG]: {
          inlineRoot: true,
          component: AddedToReturnCartDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.ADD_ACCESSORIES_DIALOG]: {
          inlineRoot: true,
          component: AddAccessoriesDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RmaFormModule {}
