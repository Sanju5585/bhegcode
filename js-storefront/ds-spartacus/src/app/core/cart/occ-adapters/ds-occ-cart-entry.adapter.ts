import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  OccEndpointsService,
  ConverterService,
  ProductService,
} from '@spartacus/core';
import { filter, map, Observable, of, switchMap, take } from 'rxjs';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { OccCartEntryAdapter } from '@spartacus/cart/base/occ';
import {
  Cart,
  CART_MODIFICATION_NORMALIZER,
  CartModification,
} from '@spartacus/cart/base/root';
import { AddressModelService } from '../../../shared/components/address-model/address-model.service';
import { MultiCartService } from '@spartacus/cart/base/core';
import { use } from 'i18next';
import { ProductType } from '../../../shared/models/cartType.models';
import { CustomerType } from '../../../shared/models/customerType.model';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';

interface AddEntryPayload {
  quantity: number;
  product: {
    code: string;
  };
  ecaCode?: string;
}

@Injectable()
export class DsOccCartEntryAdapter extends OccCartEntryAdapter {
  isChannelPartner: boolean;
  constructor(
    protected override http: HttpClient,
    protected override occEndpointsService: OccEndpointsService,
    protected override converterService: ConverterService,
    private custAccService: CustomerAccountService,
    private addressModelService: AddressModelService,
    protected multiCartService: MultiCartService,
    protected productService: ProductService,
    protected customerAccService: CustomerAccountService
  ) {
    super(http, occEndpointsService, converterService);
    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });
  }

  public override add(
    userId: string,
    cartId: string,
    productCode: string,
    quantity: number = 1
  ): Observable<CartModification> {
    return this.multiCartService.getCart(cartId).pipe(
      take(1),
      switchMap((cart: any) => {
        if (cart?.cartType) {
          return of({ cart, product: null });
        }

        return this.productService.get(productCode).pipe(
          filter((p) => !!p),
          take(1),
          map((product) => ({ cart, product }))
        );
      }),
      switchMap(({cart, product})=>{
        const isFilmCart = this.isChannelPartner && (cart?.cartType === 'FILM' || (product as any)?.productType === ProductType.Typ3);
        const isBuyCommerceType = cart?.commerceType === CommerceTypes.BUY;
        const _ecaCode = this.addressModelService.getSelectedEca || null;
        const activeSalesArea =
          this.custAccService.getGuestActiveSalesAreaFromStorage();
        let url = '';
        if (activeSalesArea) {
          url = this.occEndpointsService.buildUrl('addEntries', {
            urlParams: {
              userId,
              cartId,
              quantity,
            },
            queryParams: { guestSalesArea: activeSalesArea.salesAreaId },
          });
        } else {
          url = this.occEndpointsService.buildUrl('addEntries', {
            urlParams: {
              userId,
              cartId,
              quantity,
            },
          });
        }
        // Handle b2b case where the x-www-form-urlencoded is still used
        if (url.includes(`quantity=${quantity}`)) {
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          });
          if (isFilmCart && isBuyCommerceType) {
            url = url.replace('/orgUsers/', '/users/')
            url = url.replace('/carts/', '/filmcart/carts/')
          }
          return this.http
            .post<CartModification>(
              url,
              {},
              { headers, params: { code: productCode, ecaCode: _ecaCode } }
            )
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
        }
        const toAdd: AddEntryPayload = {
          quantity,
          product: { code: productCode },
        };
        toAdd.ecaCode = _ecaCode;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        if (isFilmCart && isBuyCommerceType) {
          url = url.replace('/orgUsers/', '/users/')
          url = url.replace('/carts/', '/filmcart/carts/')
        }
        return this.http
          .post<CartModification>(url, toAdd, { headers })
          .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
      })
    );
  }

  public override update(
    userId: string,
    cartId: string,
    entryNumber: string,
    qty?: number,
    pickupStore?: string,
    pickupToDelivery?: boolean
  ): Observable<CartModification> {
    return this.multiCartService.getCart(cartId).pipe(
      take(1),
      switchMap((cart: any) => {
        const isFilmCart = this.isChannelPartner && cart?.cartType === 'FILM';
        const isBuyCommerceType = cart?.commerceType === CommerceTypes.BUY;
        let url = this.occEndpointsService.buildUrl('updateEntries', {
          urlParams: {
            userId,
            cartId,
            entryNumber,
          },
        });
        const _ecaCode = this.addressModelService.getSelectedEca || null;
        const body = {
          quantity: qty,
          ecaCode: _ecaCode,
          ...(pickupStore && { pickupStore })
        }
        if (isFilmCart && isBuyCommerceType) {
          url = url.replace('/orgUsers/', '/users/')
          url = url.replace('/carts/', '/filmcart/carts/')
        }
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        return this.http
          .patch<CartModification>(url, body, { headers })
          .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
      }))
  } 

}
