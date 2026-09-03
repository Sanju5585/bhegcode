import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ConverterService,
  OccEndpointsService,
  OccProductSearchAdapter,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  ProductSearchPage,
  PRODUCT_SEARCH_PAGE_NORMALIZER,
  PRODUCT_SUGGESTION_NORMALIZER,
  Suggestion,
  AuthService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { SearchConfig } from '../model/search-config';

const DEFAULT_SEARCH_CONFIG: SearchConfig = {
  pageSize: 20,
  filter: 'ALL',
};

@Injectable()
export class DsOccProductSearchAdapter extends OccProductSearchAdapter {
  loggedIn: boolean = false;
  getCurrentGuestSalesArea;
  constructor(
    protected override http: HttpClient,
    protected override occEndpoints: OccEndpointsService,
    protected override converter: ConverterService,
    private custAccService: CustomerAccountService,
    private authService: AuthService
  ) {
    super(http, occEndpoints, converter);
    this.authService.isUserLoggedIn().subscribe((success: any) => {
      this.loggedIn = success;
    });

    this.custAccService.getCurrentGuestSalesArea().subscribe((res) => {
      if (res) {
        this.getCurrentGuestSalesArea = res;
      }
    });
  }

  override search(
    query: string,
    searchConfig: SearchConfig = DEFAULT_SEARCH_CONFIG
  ): Observable<ProductSearchPage> {
    const activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage()
        ? this.custAccService.getGuestActiveSalesAreaFromStorage()
        : this.getCurrentGuestSalesArea;
    if (!this.loggedIn && activeSalesArea) {
      searchConfig = {
        ...searchConfig,
        guestSalesArea: activeSalesArea?.salesAreaId,
      };
    }
    return this.http
      .get(this.getSearchEndpoint(query, searchConfig))
      .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
  }

  override loadSuggestions(
    term: string,
    pageSize: number = 3
  ): Observable<Suggestion[]> {
    return this.http
      .get(this.getSuggestionEndpoint(term, pageSize.toString()))
      .pipe(
        pluck('suggestions'),
        this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER)
      );
  }

  protected override getSearchEndpoint(
    query: string,
    searchConfig: SearchConfig
  ): string {
    const activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage();
    if (activeSalesArea) {
      return this.occEndpoints.buildUrl('productSearch', {
        urlParams: {
          userId: this.loggedIn ? OCC_USER_ID_CURRENT : OCC_USER_ID_ANONYMOUS,
        },
        queryParams: {
          query,
          ...searchConfig,
        },
      });
    } else {
      return this.occEndpoints.buildUrl('productSearch', {
        urlParams: {
          userId: this.loggedIn ? OCC_USER_ID_CURRENT : OCC_USER_ID_ANONYMOUS,
        },
        queryParams: {
          query,
          ...searchConfig,
        },
      });
    }
  }

  protected override getSuggestionEndpoint(term: string, max: string): string {
    return this.occEndpoints.buildUrl('productSuggestions', {
      urlParams: {
        userId: this.loggedIn ? OCC_USER_ID_CURRENT : OCC_USER_ID_ANONYMOUS,
      },
      queryParams: { term, max },
    });
  }
}
