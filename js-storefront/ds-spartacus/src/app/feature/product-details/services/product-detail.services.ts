import { Injectable } from '@angular/core';
import { ProductScope, ProductService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  product$: Observable<any> = this.currentProductService.getProduct(
    ProductScope.DETAILS
  );

  constructor(
    public commonService: CommonService,
    private currentProductService: CurrentProductService,
    private routingService: RoutingService
  ) {}

  updateProductFavouriteStatus(product) {
    const urlparams = ['users', 'current', 'saveProductsToFavourites'];
    // const apiUrl = this.commonService.constructUrl(urlparams);
    const formData = new FormData();
    formData.append('code', product.code);
    // return this.commonService.postData(apiUrl, formData);
  }

  getCode(): Observable<string> {
    return this.routingService
      .getRouterState()
      .pipe(map((state) => state.state.params['productCode']));
  }
}
