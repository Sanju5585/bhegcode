import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

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
import {
  CartTypes,
  CommerceTypes,
} from '../../../shared/models/commerceTypes.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { CartType } from '../../../shared/models/cartType.models';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-switch-cart-dialog',
  templateUrl: './switch-cart.html',
  styleUrls: ['./switch-cart.scss'],
})
export class SwitchCartDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  @Input()
  productAccessData;

  currentCartName = '';
  currentCartType;
  switchToCartType;
  switchSame;
  commerceCartType = CommerceTypes;
  currentCartCode;
  savingAndLoadingCart = false;
  isLoggedIn;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  cartLoaded$: Observable<boolean> = this.activeCartFacade.isStable();
  existFlag: string;
  reason: any;
  cartType = CartType;
  isFilmNonFilmType: string = '';
  
  error: string | null = null;

  constructor(
    private launchDialogService: LaunchDialogService,
    private productCatService: ProductCatelogService,
    private authService: AuthService,
    private activeCartFacade: ActiveCartFacade,
    private savedCartService: SavedCartService,
    public sanitizer: DomSanitizer,
    public multiCartFacade: MultiCartFacade,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.currentCartType = data?.currentCartType;
      this.switchToCartType = [CartTypes.FILM, CartTypes.NONFILM].includes(
        data?.switchToCartType
      )
        ? CommerceTypes.QUOTE
        : data?.switchToCartType;
      this.currentCartCode = data?.currentCartCode;
      this.switchSame = data?.switchSame;
      this.isFilmNonFilmType = data?.switchToCartType;
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
    this.currentCartName = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value),
      REGULAR_PATTERN.alphaNumeric
    );
  }
  checkExistingName() {
    let param = {
      page: 0,
      saveCartName: this.currentCartName,
      show: 'Page',
    };
    this.savedCartService
      .checkExistingName(param, this.currentCartCode)
      
.pipe(
      catchError(err => {
        // stop spinner
        this.savingAndLoadingCart = false;

        // show local error instead of global banner
        this.error =
          err?.error?.errors?.[0]?.message ||
          'Name for saved cart cannot be empty';

        return EMPTY; // ⛔ prevents global error propagation
      })
    )

      .subscribe((res: any) => {
        this.existFlag = res;
        if (this.existFlag == 'true') {
          
        this.savingAndLoadingCart = false;

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
                            .subscribe((cartResponse: any) => {
                              this.savingAndLoadingCart = false;
                              this.closeModal(true);
                            });
                        });
                    }
                  });
              },
              (err) => {
                
  this.savingAndLoadingCart = false;

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
    if (!this.currentCartName || this.currentCartName.trim().length === 0) {
      this.error = 'Name for saved cart cannot be empty';
      this.savingAndLoadingCart = false;
      return;
    }

    this.error = null;
    this.savingAndLoadingCart = true;
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
