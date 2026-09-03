import { Component, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import moment from 'moment';
import { Observable, of } from 'rxjs';
import { concatMap, debounceTime, share, take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import { MyQuotesService } from './my-quotes.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { SavedCartService } from '../../saved-cart/service/saved-cart.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.scss'],
})
export class MyQuotesComponent {
  breadcrumbs: any[] = [];
  pageSizes = [10, 20, 50, 100];
  cart$: Observable<any>;
  startRange = 1;
  totalCount = 0;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number;
  currentPage: number = 1;
  selectedNotificationId = -1;
  currentUserType;
  userLoggedIn$: Observable<boolean>;
  monthOptions = [
    {
      label: 'my-quotes.3Months',
      value: 3,
    },
    {
      label: 'my-quotes.6Months',
      value: 6,
    },
    {
      label: 'my-quotes.12Months',
      value: 12,
    },
    {
      label: 'my-quotes.24Months',
      value: 24,
    },
  ];
  orderTiles = [
    {
      label: 'my-quotes.all',
      value: '',
    },
    {
      label: 'my-quotes.inProgress',
      value: 'In Process',
    },
    {
      label: 'my-quotes.submitted',
      value: 'Submitted',
    },
    {
      label: 'my-quotes.blocked',
      value: 'Blocked',
    },
    {
      label: 'my-quotes.rejected',
      value: 'Rejected',
    },
    {
      label: 'my-quotes.expired',
      value: 'Expired',
    },
    {
      label: 'my-quotes.completed',
      value: 'Completed',
    },
  ];

  selectedTile = '';
  selectedMonth: number = 24;
  selectedAccount: number;
  selectedQuoteId: any;
  noData: boolean;
  params: any;
  resData: any;
  orderList: any;
  orderData: any;
  searchTerm: any;
  myQuoteData$: Observable<any>;
  activeCustomerAccount$: Observable<CustomerAccount>;
  customerAccountName: string;
  b2bUnits: any[];
  activeList: any;
  productLine: string;
  timeout: number;
  searchControl = new FormControl('');

  constructor(
    private customerAccService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private translationService: TranslationService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private myQuoteService: MyQuotesService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private savedCartService: SavedCartService,
    private globalMessageService: GlobalMessageService,
    protected activeCartFacade: ActiveCartFacade,
    private authService: AuthService,
    public sanitizer: DomSanitizer,
    private winRef: WindowRef
  ) {}

  ngOnInit() {
    this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          name: 'my-quotes.myQuotes',
          url: `/${this.productLine}/my-quotes`,
        },
      ];
    });
    this.updateLangForOptions(this.breadcrumbs, 'name');
    this.updateLangForOptions(this.monthOptions, 'label');
    this.updateLangForOptions(this.orderTiles, 'label');
    this.getAccountList();
    this.activateRoute.queryParams.subscribe((params: any) => {
      // In this block we are are finding the which period are selected like 3, 6, 12 or 24 months
      if (params?.fromDate && params?.toDate) {
        const differenceInMonth = moment(params?.toDate).diff(
          moment(params?.fromDate),
          'months',
          true
        );
        const isExist = this.monthOptions.some(
          (option) => option.value === differenceInMonth
        );

        this.selectedMonth = isExist ? differenceInMonth : this.selectedMonth;
      }
      this.params = {
        ...this.params,
        ...params,
        pageNum: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.pageNum || 0
        ),
        quoteNumber: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.quoteNumber || ''
        ),
        fromDate: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.fromDate ||
            moment(new Date())
              .subtract(this.selectedMonth, 'months')
              .format('yyyy-MM-DD')
        ),
        toDate: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.toDate || moment(new Date()).format('yyyy-MM-DD')
        ),
        pageSize: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.pageSize || 10
        ),
        quoteStatus: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.quoteStatus || ''
        ),
        sortBy: this.sanitizer.sanitize(
          SecurityContext.HTML,
          params?.sortBy || 'datedesc'
        ),
      };

      this.searchControl.setValue(this.params.quoteNumber);
      this.selectedTile = this.params.quoteStatus
        ? this.params.quoteStatus
        : '';
      this.getOrders();
    });
    setTimeout(() => {
      this.monthOptions = [...this.monthOptions];
      this.orderTiles = [...this.orderTiles];
    }, 500);

    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.quoteNumber) {
          this.search();
        }
      });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translationService.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  /**
   * @description This function call api/store to get account list ,
   * @returns void
   */
  getAccountList(): void {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((activeList) => {
      this.activeList = activeList;
    });
  }

  getSearchInput() {
    this.winRef.nativeWindow.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.search(), 700);
  }

  search() {
    this.setRoute({
      quoteNumber: this.searchControl.value,
      pageNum: 0,
    });
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }

  async getTranslatedText(key) {
    let message;
    await this.translationService.translate(key).subscribe((res) => {
      message = res;
      return res;
    });
    return message;
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

  pageSizeChanged(event) {
    this.currentPageSize = parseInt(event?.target?.value);
    this.setRoute({ pageSize: this.currentPageSize, pageNum: 0 });
  }

  pageSelected(pageNo) {
    if (1 <= pageNo) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ pageNum: this.currentPage - 1 });
    }
  }

  getOrders() {
    this.params = {
      ...this.params,
    };
    this.noData = false;
    this.myQuoteData$ = this.myQuoteService
      .getQuotes(this.params, this.productLine)
      .pipe(share());
    this.myQuoteData$.subscribe((myQuoteData: any) => {
      this.customerAccountName = myQuoteData.quoteResponse[0].b2bUnit;
      this.totalCount = myQuoteData?.pagination?.totalResults;
      this.startRange =
        myQuoteData?.pagination?.currentPage *
          myQuoteData?.pagination?.pageSize +
        1;
      this.endRange = Math.min(
        this.startRange + myQuoteData?.pagination?.pageSize - 1,
        myQuoteData?.pagination?.totalResults
      );
      this.totalPages = myQuoteData?.pagination?.totalPages;
      this.currentPage = myQuoteData?.pagination?.currentPage + 1;
      this.currentPageSize = myQuoteData?.pagination?.pageSize;
    });
  }

  clearAll() {
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {},
      replaceUrl: true,
    });
  }

  downloadXls() {
    this.params = {
      ...this.params,
      excludeDefaultSoldTo: this.params?.customerNumber ? true : false,
      searchTerm: this.searchControl.value,
    };
    // this.orderTrackingService.getDetailsinXLSFormat(this.params).subscribe(
    //   (res) => {
    //     if (res !== null && res !== undefined) {
    //       const currentDate = moment(new Date()).format('D-MMM-yyyy');
    //       let fileName = 'OrdersList_' + currentDate;
    //       const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
    //       const file = new File([blob], fileName + '.xlsx', {
    //         type: 'application/vnd.ms.excel',
    //       });
    //       saveAs(file);
    //     } else {
    //     }
    //   },
    //   (error) => {}
    // );
  }

  sort(sortCode) {
    this.setRoute({ sortBy: sortCode, pageNum: 0 });
  }

  /**
   * @description this will update the selected status and change the route with selected status, call api
   * @returns void
   */
  onStatusChange(): void {
    this.setRoute({
      quoteStatus: this.selectedTile,
      pageNum: 0,
    });
  }

  /**
   * @description this will update the selected month and change the route with selected status, call api
   * @returns void
   */
  onMonthChange(): void {
    this.setRoute({
      fromDate: moment(new Date())
        .subtract(this.selectedMonth, 'months')
        .format('yyyy-MM-DD'),
      toDate: moment(new Date()).format('yyyy-MM-DD'),
      pageNum: 0,
    });
  }

  /**
   * @description this will update the selected account and change the route with selected status, call api
   * @returns void
   */
  onAccountChange(): void {
    this.setRoute({
      customerNumber: this.selectedAccount,
      pageNum: 0,
    });
  }

  /**
   * @description This function will sort line items by asending
   * @param items Array of line items
   * @returns Array of line items
   */
  getSortedLineItems(items) {
    return items.sort((a, b) => {
      const currentRecordDate = moment(a.orderDate, 'yyyy-MM-DD');
      const nextRecordDate = moment(b.orderDate, 'yyyy-MM-DD');
      return currentRecordDate.diff(nextRecordDate);
    });
  }

  goToQuoteDetailPage(quoteDetail) {
    this.myQuoteService.emitQuoteDetail.next(quoteDetail);
    this.router.navigate([
      '/',
      this.productLine,
      'my-quotes',
      quoteDetail.quoteCode,
    ]);
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    switchSame?: boolean
  ) {
    const componentdata = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
      switchSame: switchSame,
    };
    const switchCartModel = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (switchCartModel) {
      switchCartModel.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.navigateToCartPage(this.selectedQuoteId);
        }
      });
    }
  }

  acceptQuote(quoteId: string) {
    this.selectedQuoteId = quoteId;
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId;
          if (this.currentUserType === OCC_USER_ID_CURRENT) {
            cartId = activeCart.code;
          } else if (this.currentUserType === OCC_USER_ID_ANONYMOUS) {
            cartId = activeCart.guid;
          }
          if (activeCart.entries?.length > 0) {
            this.openSwitchCartModal(
              activeCart.commerceType,
              'QuoteToOrder',
              cartId
            );
            return of({ modal: true });
          } else {
            this.navigateToCartPage(this.selectedQuoteId);
          }
        })
      )
      .subscribe(
        (val) => {
          if (val === null) {
            this.navigateToCartPage(this.selectedQuoteId);
          }
        },
        (error) => {}
      );
  }

  navigateToCartPage(quoteId) {
    this.myQuoteService.acceptQuote(quoteId).subscribe({
      next: (cart: any) => {
        if (cart) {
          sessionStorage.setItem('isQuoteToOrder', 'true');
          this.multiCartFacade.loadCart({
            cartId: cart.code,
            userId: OCC_USER_ID_CURRENT,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe({
              next: (r) => {
                window.location.href = `${this.productLine}/cart`;
              },
              error: (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);

                sessionStorage.setItem('isQuoteToOrder', 'false');
              },
            });
        }
      },
      error: (error) => {
        sessionStorage.setItem('isQuoteToOrder', 'false');
        console.log(error);
      },
    });
  }
}
