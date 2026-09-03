import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { QuickOrderProductsComponent } from './quick-order-products/quick-order-products.component';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  productLineCode,
  productLineName,
} from '../../../shared/products-constants';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { QuickOrderPartsComponent } from './quick-order-parts/quick-order-parts.component';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { QuickOrderService } from './quick-order.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { ActiveCartFacade, OrderEntry } from '@spartacus/cart/base/root';
import { take } from 'rxjs';
import { WindowRef } from '@spartacus/core';
@Component({
  standalone: false,
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.scss'],
})
export class QuickOrderComponent {
  sharedData: any;
  textChange;
  enableAddToCart = false;
  // showLoader: boolean = false;
  showSpinner: boolean = false;
  showInvalidEntryMsg: boolean = false;
  showConfigurableProduct: boolean = false;
  showObsoluteMsg: boolean = false;
  deletedRow: number;
  productLine: string;
  allProductsUrl: string;
  emptyConfigId: boolean = false;
  showZeroPriceMsg: boolean = false;
  @ViewChild(QuickOrderProductsComponent, { static: false })
  private quickOrderProductsComponent: QuickOrderProductsComponent;
  private quickOrderPartsComponent: QuickOrderPartsComponent;
  filteredList: any;
  activeCartData: any;
  productCurrencyIso: any;
  activeCartCurrencyIso: any;
  selected = true;
  bulkUploadSelection: any;
  // showAddressSelectionPage = false;
  showInfoMsg = false;
  messageKey: string;
  currentView$;
  showLoader$;
  validatedProductsList;
  isShowSaveCartBtn = false;
  refreshSelection: boolean;
  infoMsgCartTypeText: string;
  allProductLines = AllProductLine;
  constructor(
    private custAccService: CustomerAccountService,
    private productCategoriesService: ProductCategoriesService,
    private quickOrderService: QuickOrderService,
    protected activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private cdr: ChangeDetectorRef,
    private windowRef: WindowRef
  ) {}

  ngOnInit() {
    this.activeCartFacade.getActive().subscribe((activeCartData: any) => {
      this.activeCartData = activeCartData;
      this.activeCartCurrencyIso = this.activeCartData?.currencyIso;
    });
    this.quickOrderService.hideLoader();
    this.currentView$ = this.quickOrderService.view$;
    this.showLoader$ = this.quickOrderService.loader$;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.allProductsUrl = `/${this.productLine}/categories/${
        productLineCode[this.productLine]
      }/${productLineName[this.productLine]}`;
    });
  }

  handleData(data: any) {
    if (!data) {
      this.sharedData = undefined;
      this.showInvalidEntryMsg = false;
      this.showZeroPriceMsg = false;
      this.enableAddToCart = false;
    } else if (data && data?.data?.validatedBulkUploadList.length > 0) {
      this.sharedData = data;
      // this.showInvalidEntryMsg = false;
      if (
        this.productLine === AllProductLine.panametrics ||
        this.productLine === AllProductLine.bently
      ) {
        this.filteredList =
          this.sharedData?.data?.validatedBulkUploadList?.filter(
            (product) => product?.productAccessData?.isBuy
          );
      } else {
        this.filteredList =
          this.sharedData?.data?.validatedBulkUploadList?.filter(
            (product) =>
              product?.productAccessData?.isBuy &&
              product?.priceAvailabilityData?.price?.value > 0
          );
      }

      this.enableAddToCart =
        this.filteredList?.filter(
          (item) =>
            this.checkForConfigId(
              item.actualPartNum,
              item.configurable,
              item.configurationValid,
              item.baseProductValid,
              item.dummyProduct
            ) === true
        ).length === 0;
      if (this.filteredList.length === 0) this.enableAddToCart = false;
      if (
        this.productLine === AllProductLine.panametrics ||
        this.productLine === AllProductLine.bently
      ) {
        this.showInvalidEntryMsg =
          (this.sharedData?.data?.validatedBulkUploadList?.filter(
            (item) => !item?.productAccessData?.isBuy
          )?.length ?? 0) > 0 ||
          (data?.data?.invalidPartsList?.length ?? 0) > 0;
      } else {
        this.showInvalidEntryMsg =
          this.sharedData?.data?.validatedBulkUploadList.some(
            (product) =>
              Object.keys(product)?.length === 0 ||
              product?.status == 'Error' ||
              !product?.productAccessData?.isBuy
          ) || data?.data?.invalidPartsList?.length > 0;

        this.showZeroPriceMsg =
          this.sharedData?.data?.validatedBulkUploadList.some(
            (product) => product?.priceAvailabilityData?.price?.value === 0
          );
      }

      for (
        let i = 0;
        i < this.sharedData?.data?.validatedBulkUploadList.length;
        i++
      ) {
        const item = this.sharedData?.data?.validatedBulkUploadList[i];
        if (
          this.checkForConfigId(
            item.actualPartNum,
            item.configurable,
            item.configurationValid,
            item.baseProductValid,
            item.dummyProduct
          ) &&
          item.productAccessData?.isBuy
        ) {
          this.emptyConfigId = true;
          break;
        } else {
          this.emptyConfigId = false;
        }
      }
      if (this.windowRef?.isBrowser()) {
        window.scrollTo(0, 0);
      }
    } else {
      this.sharedData = data;
      this.enableAddToCart = false;
      this.showInvalidEntryMsg = true;
      this.showObsoluteMsg = false;
      this.emptyConfigId = false;
    }
  }
  checkForConfigId(
    productCode: any,
    configurable: any,
    configurationValid: any,
    baseProductValid: any,
    dummyProduct: any
  ) {
    let configData = JSON.parse(localStorage.getItem('quickOrderConfigData'));
    if (configurationValid && baseProductValid) return false;

    if (!configData && configurable && configurationValid && baseProductValid)
      return false;

    if (!configData && configurable) return true;

    if (!configData && !configurable) return false;

    let index = configData.findIndex((item) => item.pcode === productCode);
    if (index === -1 && !configurable) return false;
    if (index === -1 && configurable) return true;
    if (index === -1 && !dummyProduct) return true;
    else return false;
  }
  addToCart() {
    if (
      this.activeCartData?.entries?.length > 0 &&
      this.productLine === 'waygate'
    ) {
      if (
        this.activeCartCurrencyIso ===
        this.sharedData?.data?.validatedBulkUploadList[0]?.priceAvailabilityData
          ?.yourPrice?.currencyIso
      ) {
        this.proceedToAddToCart();
      } else {
        const multiCurrencyDialog = this.launchDialogService.openDialog(
          DS_DIALOG.MULTI_CURRENCY_DIALOG,
          undefined,
          undefined
        );

        multiCurrencyDialog.pipe(take(1)).subscribe((value) => {
          let mval =
            (value?.instance?.launchDialogService?._dialogClose._value).toLowerCase();
          if (
            ![
              'close',
              'cross click',
              'cancel create saved cart clicked',
            ].includes(mval)
          ) {
            this.proceedToAddToCart();
          }
        });
      }
    } else {
      this.proceedToAddToCart();
    }
  }
  proceedToAddToCart() {
    //this.showLoader = true;
    this.quickOrderService.showLoader();
    this.showSpinner = true;
    this.quickOrderProductsComponent.addToCart();
    this.showSpinner = false;
  }
  partsCopied(event) {
    this.textChange = event;
  }
  enableCart(data) {
    this.enableAddToCart = data;
  }
  deleteRow(deletedRow: any) {
    this.deletedRow = deletedRow;
  }
  goToProductCatalogue() {
    this.productCategoriesService.setQuickOrderParts('');
  }
  disableAddToCart(event) {
    this.enableAddToCart = event;
  }

  onBulkUploadSelection(event) {
    this.bulkUploadSelection = event;
  }

  onValidatedProductsList(event) {
    this.validatedProductsList = event;
  }

  onSubmitWithEca() {
    this.refreshSelection = false;
    this.quickOrderService.showProducts();
    setTimeout(() => {
      this.quickOrderProductsComponent?.addToCartWithEca();
    });
  }

  onInfoMsg(evt: {
    action: 'show' | 'hide';
    key: string;
    type: string;
    msg?: string;
  }) {
    if (evt.action === 'show') {
      this.messageKey = evt.key || this.messageKey;
      this.showInfoMsg = true;
      this.infoMsgCartTypeText = evt.msg;
    } else {
      this.showInfoMsg = false;
    }
    if (evt.type === 'save_cart') {
      this.isShowSaveCartBtn = true;
    } else {
      this.isShowSaveCartBtn = false;
    }
    this.cdr.markForCheck();
  }

  openSaveCartModal() {
    this.quickOrderProductsComponent?.saveCart(false);
  }
}
