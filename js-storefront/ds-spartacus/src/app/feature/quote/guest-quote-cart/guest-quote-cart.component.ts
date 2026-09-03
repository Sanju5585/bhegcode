import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  RoutingService,
} from '@spartacus/core';
import { TranslationService } from '@spartacus/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { filter, map, switchMap, tap, take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { Item } from './guest-quote-cart-product/guest-quote-cart-product.component';
import { GuestQuoteService } from '../guest-quote.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import {
  ActiveCartFacade,
  MultiCartFacade,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { CartActions, CartConfigService } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { ApiService } from '../../../core/http/api.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { SpinnerOverlayService } from '../../../shared/components/spinner-overlay/spinner-overlay.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'app-guest-quote-cart',
  templateUrl: './guest-quote-cart.component.html',
  styleUrls: ['./guest-quote-cart.component.scss'],
})
export class GuestQuoteCartComponent implements OnInit {
  cart$: Observable<any>;
  entries$: Observable<OrderEntry[]>;
  cartLoaded$: Observable<boolean>;
  loggedIn = false;
  orderPromotions$: Observable<PromotionResult[]>;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  promotions$: Observable<PromotionResult[]>;
  selectiveCartEnabled: boolean;
  cartDetail;
  cartEntryList: any;
  favMsg: any;
  userType = '';
  user$: Observable<unknown>;
  displayMaxSavedCartErrorMsg: boolean;

  cart = [];
  cartId = '';
  private _items: Item[] = [];
  selectedItems: Item[] = [];
  selectAll: boolean = false;

  quoteDetails: any;
  _activeCartId: string;
  showSpinner: boolean = false;
  quoteDetailsSubscription: Subscription;
  isQuoteEnabble: Subscription;

  constructor(
    protected activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
    protected authService: AuthService,
    protected routingService: RoutingService,
    public apiService: ApiService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private quoteService: GuestQuoteService,
    private router: Router,
    private breadCrumbService: BreadcrumbService,
    private spinnerOverlayService: SpinnerOverlayService,
    protected cartConfig: CartConfigService
  ) {}

  ngOnInit() {
    this.isQuoteEnabble = this.quoteService.getIsQuoteEnable.subscribe(
      (isQuoteEnable) => {
        if (isQuoteEnable) {
          //this.router.navigate(['quote/checkout']);
        }
      }
    );
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('quote-cart.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
    this.loadShoppingCart();
  }

  setCartEntryList(e) {
    this.cartEntryList = e;
  }

  loadShoppingCart() {
    this.cart$ = this.activeCartFacade.getActive();
    this.cart$.subscribe((response) => {
      this.cart = response;
      let quoteDetais = { cartCode: response?.code, code: response?.code };
      //this.quoteService.setQuoteCartDetails(quoteDetais);
      //this.quoteService.setIsQuoteEnable(response?.redirectToEditQuote);
      this.cartId = this.userType === 'current' ? response.code : response.guid;
    });

    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this._activeCartId = cartId;
    });

    this.entries$ = this.activeCartFacade
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));

    this.entries$.subscribe((response) => {
      this._items = response;
    });
  }

  openDeleteDialog() {
    const componentData = {
      userType: this.userType,
      cartId: this.cartId,
      guestQuote: true,
    };
    const cartDeleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (cartDeleteDialog) {
      cartDeleteDialog.pipe(take(1)).subscribe((value) => {
        if (value?.instance?.reason == 'delete' || value == 'delete') {
          this.deleteCartItem();
        }
      });
    }
  }

  deleteCartItem() {
    this.spinnerOverlayService.show('Loading Cart');
    for (let i = this.selectedItems.length - 1; i >= 0; i--) {
      this.multiCartFacade.removeEntry(
        this.userType,
        this.cartId,
        this.selectedItems[i].entryNumber
      );
    }

    let callBackCount = 0;
    this.actions$
      .pipe(
        ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
        map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
      )
      // .pipe(take(1))
      .subscribe(
        () => {
          callBackCount++;
          if (callBackCount >= this.selectedItems?.length) {
            this.actions$
              .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
              .pipe(take(1))
              .subscribe(
                (s) => {
                  this.selectedItems = [];
                  this.spinnerOverlayService.hide();
                  this.globalMessageService.add(
                    this.getTranslatedText('quote-cart.error.removeMsg'),
                    GlobalMessageType.MSG_TYPE_CONFIRMATION,
                    5000
                  );
                  window.scrollTo(0, 0);
                },
                (error) => {
                  this.spinnerOverlayService.hide();
                  this.globalMessageService.add(
                    error,
                    GlobalMessageType.MSG_TYPE_ERROR,
                    5000
                  );
                  window.scrollTo(0, 0);
                }
              );
          }
        },
        (error) => {
          this.spinnerOverlayService.hide();
          callBackCount = 0;
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  allSelected(entries) {
    if (this.selectedItems?.length === entries?.length) return true;
    else return false;
  }

  checkAll(event, entries) {
    this.selectAll = event.target.checked;
    if (this.selectAll) this.selectedItems = entries;
    else this.selectedItems = [];
  }

  onEntryCheck(e) {
    if (e.checked) {
      this.selectedItems.push(this._items[e.entryNumber]);
    } else {
      this.selectedItems = this.selectedItems.filter(
        (item) => item.entryNumber !== e.entryNumber
      );
    }
  }

  createQuote() {
    this.showSpinner = true;
    this.quoteService.createQuote(this._activeCartId).subscribe(
      (data) => {
        this.quoteDetails = data;
        this.proccedToSubmitQuote(this.quoteDetails.code);
      },
      (error) => {
        this.showSpinner = false;
      }
    );
  }

  proccedToSubmitQuote(quoteId) {
    this.quoteService.editQuote(quoteId).subscribe(
      (data) => {
        this.showSpinner = false;
        this.router.navigate(['quote/checkout']);
        this.quoteService.setQuoteCartDetails(data);
        this.quoteService.setIsQuoteEnable(true);
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('quote-cart.error.errorMessage'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        this.showSpinner = false;
      }
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
