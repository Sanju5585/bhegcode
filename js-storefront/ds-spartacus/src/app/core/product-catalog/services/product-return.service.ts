import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OCC_USER_ID_CURRENT, Product } from '@spartacus/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';
import { ProductCatelogService } from './product-catelog.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../dialog/dialog.config';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import { CustomerAccountService } from '../../customer-account/customer-account.service';

@Injectable({ providedIn: 'root' })
export class ProductReturnService {
  selectedRmaProduct$: Observable<Product> = new BehaviorSubject<Product>(
    {} as Product
  );
  productLine: string;

  constructor(
    private launchDialogService: LaunchDialogService,
    private activeCartFacade: ActiveCartFacade,
    private router: Router,
    private customerAccService: CustomerAccountService,
    private productCatService: ProductCatelogService
  ) {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  /**
   * Returns selected RMA Product.
   *
   * @return observable emitting RmaProduct
   */
  getSelectedRmaProduct(): Observable<Product> {
    return this.selectedRmaProduct$;
  }

  /**
   * Select product for RMA Form.
   *
   * @param rmaProduct
   */
  selectRmaProduct(rmaProduct: Product): void {
    (this.selectedRmaProduct$ as BehaviorSubject<Product>).next(rmaProduct);
  }

  rmaValidateAndRedirect(product?) {
    return this.activeCartFacade.getActive().pipe(
      take(1),
      concatMap((activeCart: any) => {
        if (activeCart.entries?.length > 0) {
          if (activeCart.commerceType != CommerceTypes.RETURNS) {
            this.openSwitchCartModal(
              activeCart.commerceType,
              CommerceTypes.RETURNS,
              activeCart.code,
              product
            );
          } else {
            this.selectRmaProduct(product);
            this.router.navigate([`/${this.productLine}/returns/cart`]);
          }
          return of({ modal: true });
        } else {
          return this.productCatService.saveCartType(
            activeCart.code,
            CommerceTypes.RETURNS,
            OCC_USER_ID_CURRENT
          );
        }
      }),
      concatMap((val) => {
        if (!val) {
          return this.activeCartFacade.getActiveCartId();
        }
        return of(val);
      })
    );
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    product
  ) {
    const componentdata = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const swicthCartDialog = this.launchDialogService
      .openDialog(
        DS_DIALOG.SWITCH_CART_DIALOG,
        undefined,
        undefined,
        componentdata
      )
      .pipe(take(1));
    if (swicthCartDialog) {
      swicthCartDialog.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.selectRmaProduct(product);
          this.router.navigate([`/${this.productLine}/returns/cart`]);
        }
      });
    }
  }
}
