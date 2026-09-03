import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { QuickOrderService } from '../quick-order.service';
import {
  GlobalMessageType,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { first, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { ItemListTypeEnum, GtmEvents } from '../../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  EcommerceItem,
  GTMCartType,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { LandingPagesService } from '../../../landing/landing-pages.service';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { config } from 'process';
import { Store } from '@ngrx/store';
import { SetAccessoriesInStore } from '../../../../core/product-catalog/store/actions/product-categories.action';
import {
  AllProductLine,
  AllProductLineNames,
} from '../../../../shared/enums/availableProductList.enum';
import {
  CartType,
  DecisionType,
  ProductType,
} from '../../../../shared/models/cartType.models';
import { CustomerType } from '../../../../shared/models/customerType.model';

export type BulkNotice =
  | { action: 'show'; key: string; type: string; msg?: string }
  | { action: 'hide' };
@Component({
  standalone: false,
  selector: 'app-quick-order-products',
  templateUrl: './quick-order-products.component.html',
  styleUrls: ['./quick-order-products.component.scss'],
})
export class QuickOrderProductsComponent {
  @Input() sharedData: any;
  @Input() deletedRow: number;
  @Output() disableAddToCart = new EventEmitter();
  @Output() bulkUploadSelection = new EventEmitter();
  @Output() bulkUploadValidatedList = new EventEmitter();

  @Output() infoMsg = new EventEmitter<BulkNotice>();
  // @Output() showAddrSelectionPage = new EventEmitter();
  productDetailsMap: { [code: string]: string } = {};
  showTextBoxMap: { [code: string]: boolean } = {};
  partNumbers: string[] = [];
  selectedSalesArea: string;
  displayDataScource: boolean = true;
  bulkUploadList = [];
  validatedBulkUploadList: any;
  globalMessageService: any;
  currency: any;
  currencySymbol: any;
  cartId: any;
  priceParams = {};
  checkPriceValue: any;
  enableConfig: boolean = false;
  @ViewChild('searchFocusInput') searchFocusInput: ElementRef;
  pageSizes = [10, 20, 50, 100];
  displayViewBreakUpItem: any;
  startRange = 1;
  totalCount = 0;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number;
  currentPage: number = 1;
  displayedColumns: string[] = [
    'select',
    'partNum',
    'description',
    'quantity',
    'price',
  ];
  selection = new SelectionModel<any>(true, []);
  selectedRowsCount: number;
  totalRowCount: number;
  showLoader: boolean = false;
  selectedRows = [];
  eventListData = [];
  @Output() enableAddToCart = new EventEmitter<any>();
  breakUp = false;
  productLine: string;
  contactUsUrl: string;
  testing: boolean = true;
  selectedProductType: ProductType.Typ3 | 'NON_FILM' | null = null;
  cartType: CartType;
  cart: any;
  isChanelPartner: boolean;
  constructor(
    private landingPageService: LandingPagesService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private router: Router,
    private launchDialogService: LaunchDialogService,
    private quickOrderService: QuickOrderService,
    private custAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService,
    private productCategoriesService: ProductCategoriesService,
    private store: Store,
    private activeCartFacade: ActiveCartFacade,
    private customerAccService: CustomerAccountService,
    private winRef: WindowRef
  ) {}
  ngOnInit(): void {
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });
    this.displayDataScource = false;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.contactUsUrl = `/${this.productLine}/contactus`;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if (changes.sharedData && this.sharedData !== undefined) {
      if (this.selection.selected.length > 0) {
        this.selection.clear();
      }
      const list = this.sharedData?.data?.validatedBulkUploadList;

      this.initializeDetailsMap(list);
      this.cartId = this.sharedData?.cartId;
      this.currency = this.sharedData?.data?.currencyISO;
      this.currencySymbol = this.sharedData?.data?.currencyFormattedValue;
      this.bulkUploadList = [];
      if (
        this.productLine === AllProductLine.panametrics ||
        this.productLine === AllProductLine.bently
      ) {
        this.validatedBulkUploadList =
          this.sharedData?.data?.validatedBulkUploadList;
        this.validatedBulkUploadList = this.validatedBulkUploadList.filter(
          (product) =>
            product?.productAccessData?.isBuy &&
            ((product?.status === 'Validated' &&
              product?.configurable == false) ||
              (product?.status !== 'Validated' &&
                product?.configurable == true) ||
              (product?.status !== 'Validated' &&
                product?.configurable == false))
        );
      } else {
        this.validatedBulkUploadList =
          this.sharedData?.data?.validatedBulkUploadList;
        this.validatedBulkUploadList = this.validatedBulkUploadList.filter(
          (product) =>
            product?.productAccessData?.isBuy &&
            (product?.status === 'Validated' ||
              product?.status !== 'Validated') &&
            !product?.configurable &&
            product?.priceAvailabilityData?.price?.value > 0
        );
      }
      let producitem: EcommerceItem[] = [];
      list.forEach((element, index) => {
        element.key = `row_${++index}`;
        if (element?.configurationValid && element?.configurable) {
          producitem.push({
            item_id: element?.actualPartNum,
            config_id: '',
            item_name: element?.description,
            index: 0,
            item_brand: this.gtmService.getItemBrand(),
            price: element?.priceAvailabilityData?.yourPrice?.value,
          });
          let purchaseEcommerceEcommerce: Ecommerce = {
            items: producitem,
            currency: list[0].priceAvailabilityData?.yourPrice?.currencyIso,
          };
          let selectItemDataLayer: GTMDataLayer = {
            event: GtmEvents.PriceLookupVC,
            store: AllProductLineNames[this.productLine],
            vcBaseProductCode: element?.partNum,
            vcConfigId: '',
            vcPrice:
              element?.priceAvailabilityData?.yourPrice?.currencyIso +
              ' ' +
              element?.priceAvailabilityData?.yourPrice?.value,
            vcBaseProductName: element?.description,
            vcPosition: 'Quick Order Table',
            ecommerce: purchaseEcommerceEcommerce,
          };
          this.gtmService.sendEvent(selectItemDataLayer);
        }
      });

      if (
        this.productLine === AllProductLine.panametrics ||
        this.productLine === AllProductLine.bently
      ) {
        this.validatedBulkUploadList =
          this.sharedData?.data?.validatedBulkUploadList;
        this.validatedBulkUploadList = this.validatedBulkUploadList.filter(
          (product) =>
            product?.productAccessData?.isBuy &&
            ((product?.status === 'Validated' &&
              product?.configurable == false) ||
              (product?.status !== 'Validated' &&
                product?.configurable == true) ||
              (product?.status !== 'Validated' &&
                product?.configurable == false))
        );
      } else {
        this.validatedBulkUploadList =
          this.sharedData?.data?.validatedBulkUploadList;
        this.validatedBulkUploadList = this.validatedBulkUploadList.filter(
          (product) =>
            product?.productAccessData?.isBuy &&
            (product?.status === 'Validated' ||
              product?.status !== 'Validated') &&
            !product?.configurable &&
            product?.priceAvailabilityData?.price?.value > 0
        );
      }

      this.initPagination();
      if (this.validatedBulkUploadList?.length > 0) {
        this.selectedRows = this.validatedBulkUploadList
          ?.map((item) => {
            if (item.status === 'Validated') {
              return item;
            } else if (
              item.configurable &&
              item?.priceAvailabilityData?.listPrice?.value != 0 &&
              this.checkForConfigId(
                item.actualPartNum,
                item.configurable,
                item.configurationValid,
                item.baseProductValid,
                item.dummyProduct
              ) === false
            ) {
              return item;
            } else if (item.status === 'Check Price') {
              return item;
            }

            return null;
          })
          .filter((item) => item != null);

        this.displayDataScource = true;
        this.selectedRowsCount = this.selectedRows.length;
        this.selection.select(...this.selectedRows);
        this.customerAccService
          .getCustomerUserType()
          .subscribe((customerType) => {
            this.isChanelPartner = customerType === CustomerType.Type2;
            this.activeCartFacade
              .getActive()
              .pipe(take(1))
              .subscribe((cart: any) => {
                this.cartType = cart?.cartType as CartType;
                this.cart = cart;
                if (this.isChanelPartner)
                  this.initializeSelection(this.selectedRows);
              });
          });
      } else {
        this.displayDataScource = false;
      }
    } else if (changes.deletedRow && this.deletedRow !== undefined) {
      if (
        this.deletedRow >= 0 &&
        this.deletedRow < this.bulkUploadList.length
      ) {
        this.bulkUploadList.splice(this.deletedRow, 1);
        this.selection.deselect(this.bulkUploadList[this.deletedRow]);
      }
    } else {
      this.displayDataScource = false;
    }
    this.bulkUploadSelection.emit(this.selection.selected);
    this.bulkUploadValidatedList.emit(this.validatedBulkUploadList);
  }
  initializeDetailsMap(list: any): void {
    this.partNumbers = list?.map((item: any) => item.partNum);
    this.productDetailsMap = {};
    this.partNumbers.forEach((partNum) => {
      const storedValue = localStorage.getItem(`details_${partNum}`);
      this.productDetailsMap[partNum] = storedValue ?? '';
      this.showTextBoxMap[partNum] = false;
    });
  }
  onDetailsChange(partnum: string, value: string): void {
    this.productDetailsMap[partnum] = value;
    localStorage.setItem(`details_${partnum}`, value);
  }
  toggleTextBox(partNum: string) {
    this.showTextBoxMap[partNum] = !this.showTextBoxMap[partNum];
  }
  checkForAddToCartEnablement(selectedData: any) {
    for (let i = 0; i < selectedData.length; i++) {
      let item = selectedData[i];
      if (
        this.checkForConfigId(
          item.actualPartNum,
          item.configurable,
          item.configurationValid,
          item.baseProductValid,
          item.dummyProduct
        ) === true
      ) {
        return false;
      }
    }
    return true;
  }
  getButtonLabel(partnum: string): string {
    return this.productDetailsMap[partnum]?.trim()
      ? 'Edit Details'
      : '+ Add Details';
  }
  pageSizeChanged(event) {
    this.currentPageSize = parseInt(event?.target?.value);
    this.endRange =
      this.currentPageSize > this.validatedBulkUploadList?.length
        ? this.validatedBulkUploadList?.length
        : this.currentPageSize;
    this.initPagination();
  }
  pageSelected(pageNumber) {
    const calculateStartRange = (pageNumber - 1) * this.currentPageSize + 1;
    if (calculateStartRange > 0 && pageNumber <= this.totalPages) {
      this.currentPage = parseInt(pageNumber);
      this.startRange = calculateStartRange;
      this.endRange = this.startRange + this.currentPageSize - 1;
    }
  }
  navigateToConfigurePage(pcode, partNum?) {
    localStorage.setItem('vcFlow', 'true');
    localStorage.setItem('configuringPart', pcode);
    this.store.dispatch(new SetAccessoriesInStore({}));
    this.winRef.localStorage.setItem('currentVCProd', partNum);
    this.router.navigate([
      '/',
      'configure',
      'vc',
      'product',
      'entityKey',
      pcode,
    ]);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.validatedBulkUploadList.length;
    if (!numRows) return false;
    return numSelected === numRows;
  }

  toggleSelectionAll(event) {
    if (this.isChanelPartner) {
      if (!this.selectedProductType) {
        if (this.cartType) {
          //If active cart contains entry
          this.cartType === CartType.Typ1
            ? (this.selectedProductType = ProductType.Typ3)
            : (this.selectedProductType = 'NON_FILM');
        } else {
          const firstRow = this.validatedBulkUploadList?.[0];
          if (!firstRow) {
            return;
          }
          this.selectedProductType = this.getProductType(firstRow);
        }
      }

      if (event.checked) {
        this.selectedRows = [];
        this.validatedBulkUploadList.forEach((row) => {
          if (
            row?.productAccessData?.isBuy &&
            this.getProductType(row) === this.selectedProductType &&
            row?.status != 'Configure'
          ) {
            this.selection.select(row);
            this.selectedRows.push(row);
          }
        });
        this.selectedRowsCount = this.selection.selected.length;
        this.enableAddToCart.emit(
          this.selectedRowsCount > 0 &&
            this.checkForAddToCartEnablement(this.selection.selected)
            ? true
            : false
        );
        this.enableConfig = (this.sharedData?.data?.validatedBulkUploadList?.every(
          (product) => product?.priceAvailabilityData?.price?.value === 0 &&
            product?.status === 'Configure'
        ) ?? false)
        this.enableAddToCart.emit(
          this.enableConfig ? false : true
        );
      } else {
        this.clearSelection();
      }
      this.bulkUploadSelection.emit(this.selection.selected);
      this.bulkUploadValidatedList.emit(this.validatedBulkUploadList);
    } else {
      if (event.checked) {
        this.validatedBulkUploadList.forEach((row) => {
          if (row?.productAccessData?.isBuy && row?.status != 'Configure') {
            this.selection.select(row);
            this.selectedRowsCount = this.selection.selected.length;
            this.enableAddToCart.emit(
              this.selectedRowsCount > 0 &&
                this.checkForAddToCartEnablement(this.selection.selected)
                ? true
                : false
            );
          }
          this.enableConfig = (this.sharedData?.data?.validatedBulkUploadList?.every(
              (product) => product?.priceAvailabilityData?.price?.value === 0 &&
                product?.status === 'Configure'
            ) ?? false)
            this.enableAddToCart.emit(
              this.enableConfig ? false : true
            );
        });
      } else {
        this.selectedRowsCount = 0;
        this.selection.clear();
      }
    }
  }

  private hasMixedProductTypes() {
    return (
      new Set(
        this.validatedBulkUploadList.map((row) => this.getProductType(row))
      ).size > 1
    );
  }

  toggleSelection(row: any) {
    if (this.isChanelPartner) {
      const productType = this.getProductType(row);
      if (!this.selectedProductType) {
        this.selectedProductType = productType; //??
      }

      if (this.selectedProductType !== productType) {
        return;
      }
    }
    const productList = this.validatedBulkUploadList?.filter(
      (item) => item?.productAccessData?.isBuy === true
    );
    const index = this.selectedRows.indexOf(row);

    if (index === -1 && row?.productAccessData?.isBuy) {
      this.selectedRows.push(row);
    } else {
      this.selectedRows.splice(index, 1);
    }
    this.selectedRowsCount = this.selectedRows.length;
    if (this.selectedRowsCount > 0) {
      this.selection.toggle(row);
      this.enableAddToCart.emit(
        this.selectedRowsCount > 0 &&
          this.checkForAddToCartEnablement(productList)
          ? true
          : false
      );
    } else {
      this.clearSelection();
    }
    this.bulkUploadSelection.emit(this.selection.selected);
    this.bulkUploadValidatedList.emit(this.validatedBulkUploadList);
  }

  clearSelection() {
    this.selectedRowsCount = 0;
    this.selection.clear();
    this.enableAddToCart.emit(false);
    this.selectedRows = [];
    if (this.isChanelPartner) {
      if (this.cartType) {
        //If active cart contains entry
        this.cartType === CartType.Typ1
          ? (this.selectedProductType = ProductType.Typ3)
          : (this.selectedProductType = 'NON_FILM');
      } else {
        if (this.hasMixedProductTypes()) {
          this.selectedProductType = null;
        } else {
          const firstRow = this.validatedBulkUploadList?.[0];
          if (!firstRow) {
            return;
          }
          this.selectedProductType = this.getProductType(firstRow);
        }
      }
    }
  }

  initPagination() {
    this.totalCount = this.validatedBulkUploadList?.length;
    this.totalPages = Math.ceil(this.totalCount / this.currentPageSize);
    this.startRange = 1;
    this.currentPage = 1;
  }

  addToCart(ecaSelected?: boolean) {
    const unique = [];
    if (
      this.isChanelPartner &&
      this.selectedProductType === ProductType.Typ3 &&
      !ecaSelected
    ) {
      //if ITFILM then show eca page
      this.quickOrderService.showAddress();
      return;
    }
    this.bulkUploadList = this.selection.selected
      ?.filter((element) => element?.productAccessData?.isBuy)
      ?.map((element, i) => {
        this.eventListData.push(element);
        let configId = null;
        if (localStorage.getItem('quickOrderConfigData')) {
          const quickOrderConfigData = JSON.parse(
            localStorage.getItem('quickOrderConfigData')
          );
          const matchedItem = quickOrderConfigData.find(
            (item: any) => item.pcode === element.actualPartNum
          );
          configId = matchedItem ? matchedItem.configId : null;
        }
        return {
          lineNo: i,
          availableStock: element.quantity,
          partNum: element.partNum,
          actualPartNum: element.actualPartNum,
          description: element.description,
          dummyProductDescription: element.dummyProduct
            ? localStorage.getItem(`details_${element.partNum}`)
            : null,
          dummyPartNum: element.dummyProduct ? element.partNum : null,
          price: element.configurable ? '' : element?.unitPrice?.value,
          status:
            element.status === 'Check Price'
              ? (element.status = 'Validated')
              : element.status,
          quantity: element.quantity,
          productSNo: element.productSNo,
          configurationflag: '',
          actualQuantity: element.quantity,
          showPrice: element.status === 'Validated' ? true : false,
          disabled: element?.productAccessData?.isBuy ? false : true,
          dummyProduct: element.dummyProduct,
          configurationValid: element?.configId
            ? false
            : element.configurationValid,
          configId:
            element?.configurable &&
            element.baseProductValid &&
            !element.configurationValid
              ? configId
                ? configId
                : element?.configId
              : element?.configId
                ? element?.configId
                : null,
          ecaCode: element?.ecaCode || null, //ITFILM product should have ecaCode
          currency: element?.priceAvailabilityData?.yourPrice?.currencyIso,
        };
      });
    let param = {
      callingsourceinfo: 'Cart Validate Page',
      cartDetailTable_length: 50,
      bulkUploadList: this.bulkUploadList,
      currencyIso: this.currency,
      currencySymbol: this.bulkUploadList[0]?.currency,
    };
    this.landingPageService.addBulkOrder(this.cartId, param).subscribe(
      (res) => {
        this.multiCartFacade.loadCart({
          cartId: this.cartId,
          userId: 'current',
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
          .pipe(take(1))
          .subscribe(
            (r) => {
              this.showLoader = false;
              this.pushEventToGtm();
              this.quickOrderService.setNavigation(true);

              this.productCategoriesService.setQuickOrderParts('');
              localStorage.removeItem('quickOrderParts');
              localStorage.removeItem('quickOrderConfigData');
              this.clearDetailsFromLocalStorage();

              this.router.navigate([this.productLine, 'cart']).finally(() => {
                this.quickOrderService.setNavigation(false);
              });
            },
            (e) => {
              this.showLoader = false;
              this.globalMessageService.add(
                this.getTranslatedText('quickorder.errorAddingToCart'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
          );
      },
      (error) => {
        this.showLoader = false;
      }
    );
  }
  clearDetailsFromLocalStorage() {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('details_')) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }

  getRealTimePrice(data, index) {
    this.priceParams = {
      lineNo: index,
      partNum: data.partNum,
      qty: data.quantity ? data.quantity : 1,
    };
    this.landingPageService
      .checkPrice(this.cartId, this.priceParams)
      .subscribe((res: any) => {
        this.bulkUploadList = this.bulkUploadList.map((item) => {
          if (item.lineNo === index && res.status === 'Validated') {
            item.price = res?.unitPrice?.value;
            item.status = res?.status;
            item.showPrice = true;
          }
          return item;
        });
        this.bulkUploadList = [...this.bulkUploadList];
      });
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
  removeProducts() {
    const removeProductsDialog = this.launchDialogService.openDialog(
      DS_DIALOG.REMOVE_PRODUCTS,
      undefined,
      undefined,
      {}
    );
    if (removeProductsDialog) {
      removeProductsDialog.pipe(take(1)).subscribe((value) => {
        if (value && value.instance?.reason) {
          this.validatedBulkUploadList = this.validatedBulkUploadList.filter(
            (row) => !this.selection.isSelected(row)
          );
          let listContent = this.validatedBulkUploadList
            .map((item) => item.partNum)
            .join('\n');
          this.productCategoriesService.setQuickOrderParts(listContent);
          this.selection.clear();
          if (this.validatedBulkUploadList.length > 0) {
            this.initPagination();
            this.selectedRows = this.validatedBulkUploadList?.filter(
              (item) => !item.disabled && item.showPrice
            );
            this.selectedRowsCount = this.selectedRows.length;
          } else {
            this.displayDataScource = false;
            this.disableAddToCart.emit(false);
          }
        }
      });
    }
  }
  createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr;
  }
  getPageArray() {
    return this.createArray(this.totalPages);
  }
  openViewBreakup() {
    this.breakUp = true;
  }
  closeMenu() {
    this.breakUp = false;
  }
  viewBreakUp(item) {
    this.displayViewBreakUpItem = item;
  }
  compareQty(row) {
    if (
      parseInt(
        row?.priceAvailabilityData?.availabilityDetails[0]?.actualStockQty
      ) < row?.quantity
    ) {
      return true;
    }
    return false;
  }
  notAvailibility(row) {
    if (
      parseInt(
        row?.priceAvailabilityData?.availabilityDetails[0]?.actualStockQty
      ) == 0
    ) {
      return true;
    }
    return false;
  }

  pushEventToGtm() {
    let price = 0;
    const eventData: Ecommerce = {
      currency: this.currency,
      value: price ? price : '',
      items: this.eventListData.map((product, index): EcommerceItem => {
        return {
          item_id: product.partNum,
          quantity: product.quantity,
          item_name: product.description,
          price: product.configurable
            ? ''
            : product?.priceAvailabilityData?.yourPrice?.value,
          discount: product.configurable
            ? ''
            : product?.priceAvailabilityData?.discountPercentage,
          item_list_id: ItemListTypeEnum.QuickOrder,
          item_list_name: ItemListTypeEnum.QuickOrder,
          item_brand: this.gtmService.getItemBrand(),
          index: index,
        };
      }),
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: this.gtmService.getItemBrand(),
      ecommerce: eventData,
      commerceType: GTMCartType.BUY_CART,
    };
    this.gtmService.sendEvent(event);
  }

  addToCartWithEca() {
    //call addtocart function with selected eca
    const isFilmProduct = this.selectedProductType === ProductType.Typ3;
    const isFilmCart = this.cart?.cartType === CartType.Typ1;
    if (this.cart?.cartType && isFilmProduct !== isFilmCart) {
      this.openCartConflictPopup(this.cart);
    } else {
      this.addToCart(true);
    }
  }

  private getProductType(row: any): ProductType.Typ3 | 'NON_FILM' {
    return row?.productType === ProductType.Typ3
      ? ProductType.Typ3
      : 'NON_FILM';
  }

  initializeSelection(rows) {
    // const list = this.validatedBulkUploadList || [];
    const list = rows || [];

    if (!list.length) return;

    const filmList = list.filter(
      (r) => this.getProductType(r) === ProductType.Typ3
    );
    const nonFilmList = list.filter(
      (r) => this.getProductType(r) === 'NON_FILM'
    );

    const resolveTypeFromCart = (): ProductType.Typ3 | 'NON_FILM' => {
      return this.cartType === CartType.Typ1 ? ProductType.Typ3 : 'NON_FILM';
    };

    //Only FILM
    if (filmList.length && !nonFilmList.length) {
      if (this.cartType) {
        this.selectedProductType = resolveTypeFromCart();
        this.cartType !== CartType.Typ1
          ? this.notifyCartTypeRestriction(this.cartType)
          : this.clearNotice();
      } else {
        this.selectedProductType = ProductType.Typ3;
      }

      this.doSelection(
        this.selectedProductType == ProductType.Typ3 ? filmList : nonFilmList
      );
      return;
    }
    //only NON_FILM
    if (!filmList.length && nonFilmList.length) {
      if (this.cartType) {
        this.selectedProductType = resolveTypeFromCart();
        this.cartType === CartType.Typ1
          ? this.notifyCartTypeRestriction(this.cartType)
          : this.clearNotice();
      } else {
        this.selectedProductType = 'NON_FILM';
      }
      this.doSelection(
        this.selectedProductType == ProductType.Typ3 ? filmList : nonFilmList
      );
      return;
    }
    //MIXED
    if (filmList.length && nonFilmList.length) {
      //cart type exist
      if (this.cartType) {
        this.selectedProductType = resolveTypeFromCart();
        this.notifyCartTypeRestriction(this.cartType);
      } else {
        this.selectedProductType = this.getProductType(list[0]);
        this.notifySelectionLocksType();
      }
      this.selection.clear();
      list
        .filter((r) => this.getProductType(r) === this.selectedProductType)
        .forEach((r) => {
          this.selection.select(r);
        });
      this.selectedRowsCount = this.selection.selected.length;
      this.selectedRows = this.selection.selected;
      this.enableAddToCart.emit(
        this.selectedRowsCount > 0 &&
          this.checkForAddToCartEnablement(this.selection.selected)
          ? true
          : false
      );
    }
  }

  doSelection(itemList) {
    this.selection.clear();
    this.selection.select(...itemList);
    this.selectedRowsCount = this.selection.selected.length;
    this.selectedRows = itemList;
    this.enableAddToCart.emit(
      this.selectedRowsCount > 0 &&
        this.checkForAddToCartEnablement(this.selection.selected)
        ? true
        : false
    );
  }

  openCartConflictPopup(cart) {
    this.launchDialogService.closeDialog('opened cart conflict model');
    const duplicateDialog$ = this.launchDialogService.openDialog(
      DS_DIALOG.CART_TYPE_CONFLICT_DIALOG,
      undefined,
      undefined
    );
    if (duplicateDialog$) {
      duplicateDialog$.pipe(take(1)).subscribe((value) => {});
    }
    this.launchDialogService.dialogClose.subscribe((value: any) => {
      if (value === DecisionType.SaveAndContinue) {
        this.saveCart();
        return;
      } else {
        this.quickOrderService.hideLoader();
      }
    });
  }

  saveCart(isAddTocart = true) {
    const componentData = {
      currentCart: this.cart,
    };
    const saveCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (saveCartModal) {
      saveCartModal.pipe(take(1)).subscribe((value) => {
        if (value) {
          if (isAddTocart) this.addToCart(true);
        }
      });
    }
  }

  notifyCartTypeRestriction(cartType) {
    this.infoMsg.emit({
      action: 'show',
      key: 'quickorder.cartTypeRestriction',
      type: 'save_cart',
      msg: cartType,
    });
  }

  notifySelectionLocksType() {
    this.infoMsg.emit({
      action: 'show',
      key: 'quickorder.selectionLocksProductType',
      type: '',
    });
  }

  clearNotice() {
    this.infoMsg.emit({ action: 'hide' });
  }
}
