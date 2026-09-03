import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  OccEndpointsService,
  ConverterService,
  Occ,
  OCC_CART_ID_CURRENT,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { CART_NORMALIZER, Cart } from '@spartacus/cart/base/root';
import { OccCartAdapter } from '@spartacus/cart/base/occ';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

@Injectable()
export class DsOccCartAdapter extends OccCartAdapter {
  productLine: string;
  constructor(
    protected override http: HttpClient,
    protected override occEndpointsService: OccEndpointsService,
    protected override converterService: ConverterService,
    private custAccService: CustomerAccountService
  ) {
    super(http, occEndpointsService, converterService);
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  public override load(userId: string, cartId: string): Observable<Cart> {
    const activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage();
    if (activeSalesArea) {
      return this.http
        .get(
          this.occEndpointsService.buildUrl('cart', {
            urlParams: { userId, cartId },
            queryParams: { guestSalesArea: activeSalesArea.salesAreaId },
          })
        )
        .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
    if (cartId === OCC_CART_ID_CURRENT) {
      return this.loadAll(userId).pipe(
        map((carts) => {
          if (carts) {
            const activeCart = carts.find((cart) => {
              return cart['saveTime'] === undefined;
            });
            return activeCart;
          } else {
            return null;
          }
        })
      );
    } else {
      return this.http
        .get<Occ.Cart>(
          this.occEndpointsService.buildUrl('cart', {
            urlParams: { userId, cartId },
            queryParams: { productLine: this.productLine },
          })
        )
        .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
  }
}
