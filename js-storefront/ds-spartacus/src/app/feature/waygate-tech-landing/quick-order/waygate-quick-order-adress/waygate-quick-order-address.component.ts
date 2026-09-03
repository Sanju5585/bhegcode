import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { QuickOrderService } from '../quick-order.service';
import { EventEmitter } from '@angular/core';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
@Component({
  selector: 'app-waygate-quick-order-address',
  standalone: false,
  templateUrl: './waygate-quick-order-address.component.html',
  styleUrl: './waygate-quick-order-address.component.scss',
})
export class WaygateQuickOrderAddressComponent {
  @Input() bulkUploadSelection: any[] = [];
  @Input() validatedProductsList: any;
  @Output() submitWithEca = new EventEmitter();
  selectedRows:any = [];
  disableButtons = false;
  constructor(
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private cd: ChangeDetectorRef,
    private quickOrderService: QuickOrderService,
    private productCategoriesService: ProductCategoriesService
  ) {}

  openAddressModel(rowKey) {
    const componentData = {
      isQuickOrder: true,
      selRowKey: rowKey,
      bulkSelectionData: this.bulkUploadSelection,
    };
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.addressModelService.setAddAddressFlag('enduser');
  }

  submitClick(){
    const noEcaProdList = this.bulkUploadSelection.filter(p => !p.ecaCode?.trim()).map(entry => entry?.description);
    const componentData = {
      emptyEcaProducts: noEcaProdList
    }
    if (noEcaProdList && noEcaProdList?.length > 0) {
      const ecaMissingDialog = this.launchDialogService.openDialog(
        DS_DIALOG.ECA_MISSING_DIALOG,
        undefined,
        undefined,
        componentData
      );
      if (ecaMissingDialog) {
        ecaMissingDialog.pipe(take(1)).subscribe((value) => {});
      }
    }else{
        this.submitWithEca.emit('');
    }
  }

  cancelClick() {
    this.quickOrderService.showProducts();
    setTimeout(() => { this.quickOrderService.hideLoader();  }, 0);
  }

    onRemoveProduct(key) {
      this.disableButtons = true;
    const removeProductsDialog = this.launchDialogService.openDialog(
      DS_DIALOG.REMOVE_PRODUCTS,
      undefined,
      undefined,
      {}
    );
    if (removeProductsDialog) {
      removeProductsDialog.pipe(take(1)).subscribe((value) => {
        if (value && value.instance?.reason) {
          this.validatedProductsList = this.validatedProductsList.filter(
            (row) => row.key !== key
          );
          this.bulkUploadSelection = this.bulkUploadSelection.filter(
            (row) => row.key !== key
          );
          let listContent = this.validatedProductsList
            .map((item) => item.partNum)
            .join('\n');
          this.productCategoriesService.setQuickOrderParts(listContent);
          if (this.validatedProductsList.length > 0) {
            this.selectedRows = this.validatedProductsList?.filter(
              (item) => !item.disabled && item.showPrice
            );
          } 
        }
        this.disableButtons = false;
      });
    }
  }
}
