import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { switchMap, take } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import { WaygateDeleteAllCartsPopupComponent } from '../../../../waygate-tech-landing/waygate-view-cart-details/waygate-delete-all-carts-popup/waygate-delete-all-carts-popup.component';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { MultiCartFacade, ActiveCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { SavedCartService } from '../../../../saved-cart/service/saved-cart.service';

@Component({
  standalone: false,
  selector: 'ds-mini-cart-details',
  templateUrl: './mini-cart-details.component.html',
  styleUrls: ['./mini-cart-details.component.scss'],
})
export class MiniCartDetailsComponent implements OnInit {
  @Input()
  cart;

  @Output()
  closeMenu = new EventEmitter<boolean>();

  commerceTypes = CommerceTypes;
  readonly MAX_SHOW_LENGTH = 5;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  user$: Observable<unknown>;
  userType = '';
  loadingData: any;
  productLine: string;
  b2bUnit: string;
  salesOrg: string;
  commerceType: string;
  salesAreaId: string;

  @Input() showWaygate = null;

  constructor(
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    public cref: ChangeDetectorRef,
    private customerAccService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private http: HttpClient,
    private router: Router,
    private savedCartService: SavedCartService,
    private actions$: Actions,
    private multiCartFacade: MultiCartFacade,
    private activeCartFacade: ActiveCartFacade
  ) {}
  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    this.loadingData = true;
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
      (res: any) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
        console.log(res);
        this.b2bUnit = res?.orgUnit?.uid?.split('_')[0];
        this.salesOrg = res?.orgUnit?.uid?.split('_')[1];
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
    if (this.userType == 'current') {
      this.loadingData = false;
    } else {
      this.loadingData = false;
    }
    this.cref.detectChanges();
  }
  ngOnChanges() {
    if (this.cart) {
      var parts = this.cart?.saleaAreaID?.split('_');
      this.commerceType = this?.cart?.commerceType || 'BUY';
    }
  }

  closeBox() {
    if (this.cart?.commerceType == this.commerceTypes.RETURNS) {
      window.location.href = `${this.productLine}/returns/cart`;
    } else if (this.cart?.commerceType == this.commerceTypes.QUOTE) {
      window.location.href = `${this.productLine}/quote/cart`;
    } else {
      window.location.href = `${this.productLine}/cart`;
    }
    this.customerAccService.disableChangeAccount.next(false);
    this.closeMenu.emit(true);
  }
  openDeleteAllCartsPopup(value?: any) {
    const dialog = this.launchDialogService.openDialog(
      DS_DIALOG.DELETE_ALL_CARTS_DIALOG
    );
    if (dialog) {
      dialog.pipe(take(1)).subscribe((result) => {});
    }
    this.launchDialogService.dialogClose.subscribe((value: any) => {
      if (
        value === 'deleteAllCartsConfirm' ||
        value?.instance?.reason === 'deleteAllCartsConfirm'
      ) {
        this.savedCartService
          .deleteAllCarts(this.b2bUnit, this.salesOrg, this.commerceType)
          .subscribe({
            next: () => {
              this.multiCartFacade.createCart({
                userId: 'current',
                extraData: { active: true },
              });
              this.actions$
                .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
                .subscribe((res: any) => {
                  this.multiCartFacade.loadCart({
                    userId: 'current',
                    cartId: res.payload.cartId,
                    extraData: { active: true },
                  });

                  this.router
                    .navigate([`/${this.productLine}/cart`])
                    .then(() => {
                      this.globalMessageService.add(
                        { key: 'savedCart.deleteAllSuccess' },
                        GlobalMessageType.MSG_TYPE_CONFIRMATION
                      );
                    });
                });
            },

            error: () => {
              this.activeCartFacade
                .getActiveCartId()
                .pipe(take(1))
                .subscribe((cartId) => {
                  if (cartId) {
                    this.multiCartFacade.removeCart(cartId);
                  }
                  this.multiCartFacade.createCart({
                    userId: 'current',
                    extraData: { active: true },
                  });

                  this.actions$
                    .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
                    .subscribe((res: any) => {
                      this.multiCartFacade.loadCart({
                        userId: 'current',
                        cartId: res.payload.cartId,
                        extraData: { active: true },
                      });
                      this.router
                        .navigate([`/${this.productLine}/cart`])
                        .then(() => {
                          this.globalMessageService.add(
                            { key: 'savedCart.deleteAllSuccess' },
                            GlobalMessageType.MSG_TYPE_CONFIRMATION
                          );
                        });
                    });
                });
            },
          });
      }
    });
  }

  // testRMA(){
  //   if (this.cart?.commerceType == this.commerceTypes.RETURNS) {
  //     window.location.href =  `${this.productLine}/returns/cart`;
  //   }
  //   this.customerAccService.disableChangeAccount.next(false);
  //   this.closeMenu.emit(true);
  // }
}
