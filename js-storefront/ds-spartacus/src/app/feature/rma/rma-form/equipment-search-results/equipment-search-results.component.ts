import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { RmaService } from '../../rma-services/rma.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../../core/customer-account/store/customer-account.model';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'ds-equipment-search-results',
  templateUrl: './equipment-search-results.component.html',
  styleUrls: ['./equipment-search-results.component.scss'],
})
export class EquipmentSearchResultsComponent implements OnInit, OnChanges {
  pageSize = 5;
  currentCustomerAccount$: Observable<CustomerAccount>;
  constructor(
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    protected launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    private rmaService: RmaService
  ) {}
  @Input()
  products = [];
  switchActiveButton: boolean = false;
  rmaSalesAreaId;
  rmaSalesSoldTo;
  returnSalesOrg = [];
  @Input() findPartNumberForm: FormGroup;
  searchingResults: boolean;
  searchComplete: boolean;

  @Output()
  productSelected: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.currentCustomerAccount$.subscribe((res: any) => {
      this.rmaSalesAreaId = res?.selectedSalesArea?.salesAreaId?.split('_')[1];
      let result = res?.selectedSalesArea?.salesAreaId?.split('_')[0];
      this.rmaSalesSoldTo = res?.selectedSalesArea?.salesAreaId.substring(
        result?.length + 1
      );
    });
    if (
      changes['products']?.currentValue != changes['products']?.previousValue
    ) {
      this.switchBusiness();
    }
  }

  items = [
    { id: 50, name: '50' },
    { id: 100, name: '100' },
    { id: 200, name: '200' },
    { id: 500, name: '500' },
  ];
  pagination = {
    currentPage: 0,
    pageSize: this.pageSize,
    sort: 'relevance',
    totalPages: this.products?.length / this.pageSize,
    totalResults: this.products?.length,
  };

  addPart(state, product) {
    switch (state) {
      case 1:
        this.productSelected.emit({
          ...product,
          similar: false,
          ...(product.summary ? { serialNumber: product.summary } : {}),
        });
        break;
      case 2:
        this.productSelected.emit({
          ...product,
          similar: true,
          ...(product.summary ? { serialNumber: product.summary } : {}),
        });
        break;
    }
  }

  currentPage(event) {
    this.pageSize = event;
    this.pagination = { ...this.pagination, currentPage: event };
  }

  getProductCategories(categories: []) {
    let filterCategories = this.removeDuplicateCategory(categories);

    const sortedCats = filterCategories.sort(this.sortAlphaNum);
    let catHierarchy = [];
    sortedCats.map((el: any, index) => {
      if (index > 0) catHierarchy.push(el.name);
    });
    return {
      title: catHierarchy[catHierarchy.length - 1],
      hierarchy: catHierarchy.join(' > '),
    };
  }

  sortAlphaNum(a, b) {
    return a.code.localeCompare(b.code, 'en', { numeric: true });
  }

  removeDuplicateCategory(categories: []) {
    return categories.reduce((arr, item: any) => {
      const removed = arr.filter((i) => i.code !== item.code);
      return [...removed, item];
    }, []);
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  switchDsCustomer(product) {
    product?.productAccessData?.salesAreas.map((area: any, index) => {
      if (!area.isService) {
        product?.productAccessData?.salesAreas.splice(index, 1);
      }
    });
    const componentData = {
      productAccessData: product?.productAccessData,
    };
    const swicthCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (swicthCustomerDialog) {
      swicthCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value != 'close' || value != 'cancel') {
          const salesArea =
            typeof value == 'string'
              ? value
              : value?.instance?.selectedSalesAreaId;
          this.rmaSalesSoldTo = salesArea?.split('_')[0];
          this.rmaSalesAreaId = salesArea?.split('_')[1];
          this.customerAccService
            .updateSalesArea(salesArea, salesArea.split('_')[0])
            .subscribe((res: any) => {
              this.customerAccService.updateAvaiableProductLine(
                res?.visibleCategories || []
              );
              this.customerAccService.refreshPostCustomAccSwitch(
                'switchAccount'
              );
              const searchObj = {
                partNum: this.findPartNumberForm.value.partNumber,
                srNum: this.findPartNumberForm.value.serialNumber,
              };
              this.searchingResults = true;
              this.rmaService
                .partSearch(OCC_USER_ID_CURRENT, searchObj)
                .subscribe((searchResults) => {
                  this.searchComplete = true;
                  this.searchingResults = false;
                  this.switchBusiness();
                });
              this.globalMessageService.add(
                this.getTranslatedText('buyCart.salesAreaSuccess'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
            });
        }
      });
    }
  }

  switchBusiness() {
    this.products = this.products
      .map((product) => {
        let salesOrgFlag = false;
        let switchBusiness = false;
        let switchActiveButton = false;
        this.returnSalesOrg = [];
        product.returnSalesOrg.map((list) => {
          if (list.split('_')[0] == this.rmaSalesAreaId) {
            salesOrgFlag = true;
            switchActiveButton = false;
          }
        });
        if (!salesOrgFlag) {
          product?.productAccessData?.salesAreas?.map((sales) => {
            if (
              sales.salesOrgUid != this.rmaSalesAreaId &&
              sales.salesOrg != this.rmaSalesSoldTo &&
              sales.isService
            ) {
              switchBusiness = true;
              switchActiveButton = true;
            }
          });
        }
        let nonReturnablePart = false;
        if (switchBusiness == false && salesOrgFlag == false) {
          nonReturnablePart = true;
        }
        return {
          ...product,
          switchActiveButton,
          nonReturnablePart,
          salesOrgFlag,
        };
      })
      .filter((p) => !p.nonReturnablePart);
  }
}
