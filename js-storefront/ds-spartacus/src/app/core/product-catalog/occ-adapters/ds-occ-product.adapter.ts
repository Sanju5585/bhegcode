import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import {
  AuthService,
  ConverterService,
  Occ,
  OccEndpointsService,
  OccProductAdapter,
  OccRequestsOptimizerService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  Product,
  PRODUCT_NORMALIZER,
  ScopedDataWithUrl,
  ScopedProductData,
} from '@spartacus/core';

import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { ProductCategoriesService } from '../services/product-categories.service';
import { ProductCatelogService } from '../services/product-catelog.service';
import { switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { OfflineSearchService } from '../services/offline-search.service';
import { AddressModelService } from '../../../shared/components/address-model/address-model.service';

@Injectable()
export class DsOccProductAdapter extends OccProductAdapter {
  userType: string;
  productLine: string;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  constructor(
    protected override http: HttpClient,
    protected override occEndpoints: OccEndpointsService,
    protected override converter: ConverterService,
    protected override requestsOptimizer: OccRequestsOptimizerService,
    private custAccService: CustomerAccountService,
    private auth: AuthService,
    private authService: AuthService,
    private custAccountService: CustomerAccountService,
    private productCatService: ProductCatelogService,
    private userAccountFacade: UserAccountFacade,
    private addressModelService: AddressModelService,
    private offlineservice: OfflineSearchService
  ) {
    super(http, occEndpoints, converter, requestsOptimizer);

    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.userType = OCC_USER_ID_CURRENT;
        return this.userAccountFacade.get();
      } else {
        this.userType = OCC_USER_ID_ANONYMOUS;
        return of(undefined);
      }
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  override load(productCode: string, scope?: string): Observable<Product> {
    return this.http
      .get(this.getEndpoint(productCode, scope))
      .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }

  override loadMany(products: ScopedProductData[]): ScopedProductData[] {
    const scopedDataWithUrls: ScopedDataWithUrl[] = products.map((model) => ({
      scopedData: model,
      url: this.getEndpoint(model.code, model.scope),
    }));
    return this.requestsOptimizer
      .scopedDataLoad<Occ.Product>(scopedDataWithUrls)
      .map(
        (scopedProduct) =>
          ({
            ...scopedProduct,
            data$: scopedProduct.data$.pipe(
              this.converter.pipeable(PRODUCT_NORMALIZER)
            ),
          } as ScopedProductData)
      );
  }

  protected override getEndpoint(code: string, scope?: string): string {
    console.log('✅ getEndpoint called with ECA:', this.addressModelService.getSelectedEca);
    const activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage();
    const offlineSearchFlag = this.offlineservice.getFlag();
    if (offlineSearchFlag) {
      this.offlineservice.toggleFlag();
      if (this.userType == OCC_USER_ID_CURRENT) {
        return this.occEndpoints.buildUrl(
          'product',

          {
            urlParams: {
              userId: OCC_USER_ID_CURRENT,
            },

            queryParams:
              this.productLine == AllProductLine.bently
                ? {
                    productCode: code,
                    productLine: AllProductLine.bently,
                    offlineSearch: true,                    
                    ...(this.addressModelService.getSelectedEca && {
                      ecaCode: this.addressModelService.getSelectedEca
                    })
                  }
                : { 
                    productCode: code, 
                    offlineSearch: true,                    
                    ...(this.addressModelService.getSelectedEca && {
                      ecaCode: this.addressModelService.getSelectedEca
                    })
                  },
            scope,
          }
        );
      } else {
        if (activeSalesArea) {
          return this.occEndpoints.buildUrl('product', {
            urlParams: {
              userId: OCC_USER_ID_ANONYMOUS,
            },
            queryParams: {
              productCode: code,
              guestSalesArea: activeSalesArea.salesAreaId,
              offlineSearch: true,
            },
            scope,
          });
        } else {
          this.loadWaygate();
          let param = this.getWaygate();
          return this.occEndpoints.buildUrl('product', {
            urlParams: {
              userId: OCC_USER_ID_ANONYMOUS,
            },
            queryParams: {
              productCode: code,
              guestSalesArea: JSON.parse(param).salesAreaId,
              offlineSearch: true,
            },
            scope,
          });
        }
      }
    }
    if (this.userType == OCC_USER_ID_CURRENT) {
      return this.occEndpoints.buildUrl(
        'product',

        {
          urlParams: {
            userId: OCC_USER_ID_CURRENT,
          },

          queryParams:
            this.productLine == AllProductLine.bently
              ? {
                  productCode: code,
                  productLine: AllProductLine.bently,                  
                  ...(this.addressModelService.getSelectedEca && {
                  ecaCode: this.addressModelService.getSelectedEca
                })

                }
              : { productCode: code,                
              ...(this.addressModelService.getSelectedEca && {
                        ecaCode: this.addressModelService.getSelectedEca
                      })
              },
                scope,
        }
      );
    } else {
      if (activeSalesArea) {
        return this.occEndpoints.buildUrl('product', {
          urlParams: {
            userId: OCC_USER_ID_ANONYMOUS,
          },
          queryParams: {
            productCode: code,
            guestSalesArea: activeSalesArea.salesAreaId,
          },
          scope,
        });
      } else {
        this.loadWaygate();
        let param = this.getWaygate();
        return this.occEndpoints.buildUrl('product', {
          urlParams: {
            userId: OCC_USER_ID_ANONYMOUS,
          },
          queryParams: {
            productCode: code,
            guestSalesArea: JSON.parse(param).salesAreaId,
          },
          scope,
        });
      }
    }
  }

  loadWaygate() {
    let param = this.getWaygate();
    this.custAccService.updateGuestSalesArea(JSON.parse(param));
  }

  getWaygate(): any {
    return '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Skaneateles, NY","id":"8822995582999","town":"Skaneateles, NY"},"salesAreaId":"1800_GE_GE","salesAreaName":"Waygate Technologies USA, LP"}';
  }
}
