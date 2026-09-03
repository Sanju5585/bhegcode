import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import {
  AuthActions,
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, switchMap, take, tap } from 'rxjs/operators';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';

@Component({
  standalone: false,
  // tslint:disable-next-line:component-selector
  selector: 'ds-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniCartComponent implements OnInit {
  totalNumberOfCart;
  cartitem: any;
  constructor(
    protected activeCartFacade: ActiveCartFacade,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private cRef: ChangeDetectorRef,
    private globalMessageService: GlobalMessageService,
    private actions$: Actions,
    private multiCartFacade: MultiCartFacade
  ) {}

  iconTypes = ICON_TYPE;
  isShowDivIf = false;
  cartId;
  commerceTypes = CommerceTypes;
  cart$: Observable<any>;
  quantity$: Observable<number> = this.activeCartFacade.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string> = this.activeCartFacade.getActive().pipe(
    filter((cart) => !!cart.totalPrice),
    map((cart) => cart.totalPrice.formattedValue)
  );

  user$: Observable<any>;
  isLoggedInUser = false;
  openMenu = false;
  userType = '';

  ngOnInit() {
    this.cart$ = this.activeCartFacade.getActive();
    this.cart$.subscribe((res) => {
      this.totalNumberOfCart = null;
      this.cartitem = res.totalItems;
      if (this.cartitem == 0) {
        this.totalNumberOfCart = this.cartitem;
      } else {
        this.totalNumberOfCart = localStorage.getItem('numberOfCart')
          ? localStorage.getItem('numberOfCart') == '0 ' ||
            localStorage.getItem('numberOfCart') == 'undefined' ||
            localStorage.getItem('numberOfCart') == ''
            ? 0
            : localStorage.getItem('numberOfCart')
          : 0;
      }
    });
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    this.user$.pipe(
      filter(user => user?.isCurrentUser),
      take(1),
      tap(() => {
        return this.createNewCart();
      })
    ).subscribe();
    this.actions$
      .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(2))
      .subscribe((res: any) => {
        this.multiCartFacade.reloadCart(res.payload.cartId, { active: true });
      });
  }
    
  createNewCart() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.userType === 'current' && !this.cartId) {
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
          })
      } else {
        this.multiCartFacade.loadCart({
          userId: 'current',
          cartId: this.cartId,
          extraData: { active: true },
        });
      }
    })
  }

  closeMenu(event) {
    this.openMenu = false;
  }
}
