import { Component } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable, take } from 'rxjs';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { AuthService, GlobalMessageService, GlobalMessageType, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { ProductCatelogService } from '../../../../../core/product-catalog/services/product-catelog.service';

@Component({
  selector: 'app-waygate-quote-router-dialog',
  standalone: false,
  templateUrl: './waygate-quote-router-dialog.component.html',
  styleUrl: './waygate-quote-router-dialog.component.scss'
})
export class WaygateQuoteRouterDialogComponent {
  constructor(
    protected launchDialogService: LaunchDialogService,
    private router: Router,
    private actions$: Actions,
    private globalMessageService: GlobalMessageService,
    private multiCartFacade: MultiCartFacade,
    private translate: TranslationService,
    private activeCartFacade: ActiveCartFacade,
    private authService: AuthService
  ) {}
  reason: string;
  currentUserType;
  userLoggedIn$: Observable<boolean>;
  cart$: Observable<any>; 
  cart: any;
  cartId;
  close(reason: string) {
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
    this.router.events.subscribe((event) => {
      if (
        event instanceof Scroll &&
        event.routerEvent instanceof NavigationEnd
      ) {
        
          this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
    if((sessionStorage.getItem('isQuoteToOrder') == "true") && (this.reason !== "close")){
      this.multiCartFacade.deleteCart(this.cartId, this.currentUserType);
      
    sessionStorage.setItem('isQuoteToOrder', "false");
    }
    
    
      this.actions$
      .pipe(ofType(CartActions.DELETE_CART_SUCCESS))
      .pipe(take(1))
      .subscribe((r) => {
        sessionStorage.setItem('quoteCartType', '');
        sessionStorage.setItem('isRfqCart', '');
        this.multiCartFacade.createCart({
          userId: this.currentUserType,
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
          .subscribe((res: any) => {
            this.multiCartFacade.loadCart({
              userId: this.currentUserType,
              cartId: res.payload.cartId,
              extraData: {
                active: true,
              },
            });
          });
      });

    this.actions$
      .pipe(ofType(CartActions.DELETE_CART_FAIL))
      .pipe(take(1))
      .subscribe(
        (r) => {
          this.globalMessageService.add(
            this.getTranslatedText('buyCart.clearCartFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        },
        (error) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
    
      }
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
