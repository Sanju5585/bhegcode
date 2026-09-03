import { Component, OnInit, Input } from '@angular/core';
import {
  AuthService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { SavedCartService } from '../../saved-cart/service/saved-cart.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { take } from 'rxjs/operators';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-rma-switch-cart-dialog',
  templateUrl: './rma-switch-cart.html',
  styleUrls: ['./rma-switch-cart.scss'],
})
export class RMASwitchCartDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  @Input()
  productAccessData;

  currentCartName = '';
  currentCartType;
  switchToCartType;
  commerceCartType = CommerceTypes;
  currentCartCode;
  savingAndLoadingCart = false;
  isLoggedIn;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  cartLoaded$: Observable<boolean> = this.activeCartFacade.isStable();
  existFlag: string;
  reason: any;
  constructor(
    private launchDialogService: LaunchDialogService,
    private productCatService: ProductCatelogService,
    private authService: AuthService,
    private activeCartFacade: ActiveCartFacade,
    private savedCartService: SavedCartService,
    public multiCartFacade: MultiCartFacade,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.currentCartType = data?.currentCartType;
      this.switchToCartType = data?.switchToCartType;
      this.currentCartCode = data?.currentCartCode;
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.isLoggedIn = true;
      else this.isLoggedIn = false;
    });
  }

  closeModal(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
  }

  onCartNameChange(ev) {
    this.currentCartName = ev.target.value;
  }

  checkExistingName() {
    let param = {
      page: 0,
      saveCartName: this.currentCartName,
      show: 'Page',
    };
    this.savedCartService
      .checkExistingName(param, this.currentCartCode)
      .subscribe((res: any) => {
        this.existFlag = res;
        if (this.existFlag == 'true') {
          return;
        } else {
          this.savingAndLoadingCart = true;
          this.productCatService
            .saveSwitchAndReloadCart(
              this.currentCartCode,
              this.currentCartName,
              this.switchToCartType
            )
            .subscribe(
              (res: any) => {
                this.savingAndLoadingCart = false;
                this.multiCartFacade.createCart({
                  userId: 'current',
                  extraData: {
                    active: true,
                  },
                });
                this.actions$
                  .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
                  .subscribe((cartResponse: any) => {
                    if (cartResponse?.payload?.cartId) {
                      this.productCatService
                        .saveCartType(
                          cartResponse.payload.cartId,
                          this.switchToCartType,
                          OCC_USER_ID_CURRENT
                        )
                        .subscribe((res2) => {
                          this.multiCartFacade.loadCart({
                            cartId: cartResponse.payload.cartId,
                            userId: OCC_USER_ID_CURRENT,
                            extraData: {
                              active: true,
                            },
                          });
                          this.actions$
                            .pipe(
                              ofType(CartActions.LOAD_CART_SUCCESS),
                              take(1)
                            )
                            .subscribe((cartResponse2: any) => {
                              this.savingAndLoadingCart = false;
                              this.closeModal(true);
                            });
                        });
                    }
                  });
              },
              (err) => {
                let errorMsg = '';
                if (err !== undefined && err['error'] !== undefined) {
                  if (err.error?.errors[0]?.message == '102') {
                    console.error('Cart name already exists');
                  } else if (err.error?.errors[0]?.message == '101') {
                    console.error('Max Cart Saved Error');
                  } else {
                    console.error(
                      'There was some issue while saving your cart'
                    );
                  }
                }
              }
            );
        }
      });
  }

  saveCart() {
    this.existFlag = 'false';
    this.checkExistingName();
  }

  discardCart() {
    this.productCatService
      .clearCart(
        this.currentCartCode,
        OCC_USER_ID_ANONYMOUS,
        this.switchToCartType
      )
      .subscribe((res) => {
        if (!res.error) {
          this.closeModal(true);
        }
      });
  }
}
