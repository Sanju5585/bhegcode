import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  ConverterService,
  PRODUCT_NORMALIZER,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, share, switchMap, take } from 'rxjs/operators';
import { WaygateListingService } from './waygate-listing.service';
// import { FacetService } from '@spartacus/storefront';
import { CategoryLevel } from './waygate-category-order.map';
import { FacetService } from '../../product-listing/product-facet-navigation/services/facet.service';
import { ProductFilterType } from '../../product-listing/product-facet-navigation/facet.model';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-waygate-listing',
  templateUrl: './waygate-listing.component.html',
  styleUrls: ['./waygate-listing.component.scss'],
})
export class WaygateListingComponent {
  categoryCode: string;
  user$: Observable<any>;
  userType: string;
  params: any;
  user: any;
  searchResults$: Observable<any>;
  breadCrumbs$: Observable<any>;
  breadcrumbs: any = [];
  relevance = `:relevance:allCategories:`;
  throttle = 300;
  scrollDistance = 3;
  pageSize = 15;
  currentPage = 0;
  products: any[] = [];
  searchResults = null;
  queryParams$: Observable<any>;
  params$: Observable<any>;
  mode: string = 'GRID';
  searchInput: any;
  searchQuery: any;
  sortCode: string;
  activeSalesArea: string;
  customerAccount: string;
  routeFrom = ItemListTypeEnum.ProductListing;
  currentPriority: CategoryLevel.LVL0;
  selectedFilters: any[];
  productLine: string;
  productsApiFlag = false;
  productFilterType = ProductFilterType;
  productTypeStatus = [];
  filter: any;
  selectedQuery: any;
  relevanceDefaultSort = 'Select';
  contactUsUrl: string;
  showFiltersSlider: boolean = false;
  showScrollToTop: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private waygateListingService: WaygateListingService,
    private router: Router,
    private windowRef: WindowRef,
    private converterService: ConverterService,
    private cRef: ChangeDetectorRef,
    private facetService: FacetService,
    private gtmService: GoogleTagManagerService,
    private custAccService: CustomerAccountService,
    private translate: TranslationService,
    public routes: ActivatedRoute
  ) {
    this.mode =
      this.windowRef.nativeWindow.localStorage.getItem('waygateMode') || 'GRID';
  }

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.contactUsUrl = `/${productLine}/contactus`;
    });
    this.setProductTypeFilterStatus();
    this.windowRef.nativeWindow.scrollTo({ top: 0, behavior: 'smooth' });
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    this.routes.params.subscribe((params) => {
      this.params = params;
      if (params?.['query']) {
        this.routeFrom = ItemListTypeEnum.Search;
      }
      // this.setCategoryBreadCrumbs();
    });
    this.params$ = this.route.params;
    this.queryParams$ = this.route.queryParams;
    combineLatest(this.user$, this.queryParams$, this.params$)
      .pipe(
        distinctUntilChanged((prev, curr) => prev[0]?.email !== curr[0]?.email)
      )
      .subscribe((data) => {
        this.selectedQuery = data[1]?.query || '';
        if (data[0]) {
          this.user = data[0];
          this.userType = 'current';
          this.custAccService
            .getCurrentCustomerAccount()
            .subscribe((res: any) => {
              this.customerAccount = res?.uid || '';
              this.activeSalesArea =
                res.selectedSalesArea?.salesAreaId.split('_')[1];
            });
        } else {
          this.userType = 'anonymous';
          const activeSalesArea =
            this.custAccService.getGuestActiveSalesAreaFromStorage();
          this.activeSalesArea = activeSalesArea?.saleAreaId || '1800_GE_GE';
        }

        if (data[2]?.searchInput) {
          this.routeFrom = ItemListTypeEnum.Search;
          this.breadcrumbs = [
            {
              name: 'Home',
              url: `/${this.productLine}`,
            },
          ];
          this.categoryCode = '';
          if (!data[1]?.query || !data[1]?.filter) {
            // this.updateRoute({
            //   query: data[2]?.searchInput,
            // });
            this.products = [];
            this.searchQuery = decodeURIComponent(
              data[1]?.query || data[2]?.searchInput
            );
            this.filter = ProductFilterType.ALL;
            // return;
          }
          if (
            this.searchQuery != data[1]?.query ||
            this.searchInput != data[2]?.searchInput ||
            this.sortCode != data[1].sort ||
            this.filter != data[1].filter
          ) {
            this.currentPage = 0;
            this.products = [];
            this.searchQuery = decodeURIComponent(
              data[1]?.query || data[2]?.searchInput
            );
            this.searchInput = decodeURIComponent(data[2]?.searchInput);
            this.sortCode != data[1].sort;
            this.filter = data[1].filter || ProductFilterType.ALL;
          }
          this.params = {
            ...this.params,
            ...data[1],
            searchInput: decodeURIComponent(this.searchInput),
            query: decodeURIComponent(data[1]?.query || `${this.searchInput}`),
            pageSize: data[1]?.pageSize || this.pageSize,
            currentPage: parseInt(data[1]?.currentPage) || this.currentPage,
          };

          // if sorting order not present then make ascending as default sorting
          if (!this.params?.sort) {
            this.params.sort = 'relevance';
          }
          this.currentPage = this.params.currentPage;
          if (this.currentPage == 0) {
            this.products = [];
          }
          setTimeout(() => {
            this.getProducts();
          }, 500);
        } else {
          if (!data[1]?.query || !data[1]?.filter) {
            // this.updateRoute({
            //   query: `${this.relevance}${data[2]?.cCode}`,
            // });
            this.searchQuery = data[1]?.query;
            this.filter = ProductFilterType.ALL;
            // return;
          }
          if (
            this.categoryCode != data[2]?.cCode ||
            this.searchQuery != data[1]?.query ||
            this.sortCode != data[1].sort ||
            this.filter != data[1].filter
          ) {
            this.currentPage = 0;
            this.categoryCode = data[2]?.cCode;
            this.searchQuery = decodeURIComponent(
              data[1]?.query || `${this.relevance}${data[2]?.cCode}`
            );
            this.sortCode = data[1].sort;
            this.filter = data[1].filter || ProductFilterType.ALL;
          }
          this.params = {
            ...this.params,
            ...data[1],
            searchInput: decodeURIComponent(this.searchInput),
            query: decodeURIComponent(
              data[1]?.query || `${this.relevance}${this.categoryCode}`
            ),
            pageSize: data[1]?.pageSize || this.pageSize,
            filter: data[1]?.filter || 'ALL',
            currentPage: parseInt(data[1]?.currentPage) || this.currentPage,
          };
          // if sorting order not present then make ascending as default sorting
          if (!this.params?.sort) {
            this.params.sort = 'relevance';
          }
          this.currentPage = this.params.currentPage;
          if (this.currentPage == 0) {
            this.products = [];
          }
          setTimeout(() => {
            this.getProducts();
          }, 500);
          this.getBreadcrumbs();
        }
      });

    this.facetService.getFilterSliderState.subscribe((slider) => {
      this.showFiltersSlider = slider;
    });
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event'])
  scrollToTop(event) {
    this.showScrollToTop = window.scrollY > 100;
  }

  getProducts() {
    this.productsApiFlag = false;
    this.searchResults$ = this.waygateListingService
      .getProducts(this.userType, this.params)
      .pipe(share());
    this.searchResults$.pipe(take(1)).subscribe((results) => {
      this.productsApiFlag = true;
      this.searchResults = results;
      this.pushAddToCartEvent(this.searchResults.products);
      this.hideCategories();
      this.products = this.products.concat(
        this.searchResults?.products?.map((product) =>
          this.converterService.convert(product, PRODUCT_NORMALIZER)
        )
      );
      this.getFacets(results.facets);
      this.getPriorityOfSelectedFactes(results.facets);
      this.cRef.detectChanges();
      if (
        (this.currentPage > 1 &&
          this.currentPage * this.pageSize > this.products.length) ||
        (this.currentPage == 1 && this.pageSize * 2 > this.products.length)
      ) {
        this.getRemainingProducts();
      }
    });
  }
  getRemainingProducts() {
    this.productsApiFlag = false;
    const params = {
      ...this.params,
      pageSize: this.currentPage * this.pageSize,
      currentPage: 0,
    };
    this.searchResults$ = this.waygateListingService
      .getProducts(this.userType, params)
      .pipe(share());
    this.searchResults$.pipe(take(1)).subscribe((results: any) => {
      this.productsApiFlag = true;
      this.searchResults = results;
      this.pushAddToCartEvent(this.searchResults.products);
      this.hideCategories();
      this.getPriorityOfSelectedFactes(results.facets);
      let tempHolder = this.searchResults?.products?.map((product) =>
        this.converterService.convert(product, PRODUCT_NORMALIZER)
      );
      this.products = tempHolder.concat(this.products);
      const uniqueEntries = [];
      const encounteredProductNames = new Set();
      this.products.forEach((entry) => {
        if (!encounteredProductNames.has(entry.code)) {
          uniqueEntries.push(entry);
          encounteredProductNames.add(entry.code);
        }
      });
      this.products = uniqueEntries;
      this.cRef.detectChanges();
    });
  }
  getBreadcrumbs() {
    this.breadCrumbs$ = this.waygateListingService.getBreadcrumbs(
      this.userType,
      this.categoryCode
    );
    this.breadCrumbs$.subscribe((res) => {
      this.breadcrumbs = res.breadCrumbs.map((crumb) => {
        const params = crumb.url.split('/');
        return {
          name: crumb.name,
          url: `/${this.productLine}/categories/${params[3]}/${params[1]}`,
        };
      });
    });
  }
  onScrollDown(pagination) {
    if (pagination.totalPages > this.currentPage + 1) {
      this.currentPage = this.currentPage + 1;
      this.updateRoute({ currentPage: this.currentPage });
    }
  }
  setSort(event) {
    this.updateRoute({ sort: event, currentPage: 0 });
  }
  updateRoute(param) {
    this.router.navigate([], {
      queryParams: {
        ...this.params,
        ...param,
      },
      queryParamsHandling: 'merge',
    });
  }
  updateRoutePreserve(param) {
    this.router.navigate([], {
      queryParams: {
        ...this.params,
        ...param,
      },
      queryParamsHandling: 'preserve',
    });
  }

  toggleMode(mode) {
    this.mode = mode;
    this.windowRef.nativeWindow.localStorage.setItem('waygateMode', this.mode);
  }
  goToTop() {
    this.windowRef.nativeWindow.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getLinkParams(facet) {
    return this.facetService.getLinkParams(facet.query?.query.value);
  }

  hideCategories() {
    if (this.categoryCode) {
      const categoryLevel = this.categoryCode.split('_');
      const facets = this.searchResults.facets;
      const newFacets = facets?.filter(
        (facet) => facet.priority < CategoryLevel[categoryLevel[1]]
      );
      this.searchResults.facets = newFacets;
    }
    return;
  }
  getFacets = (facets) => {
    let selectedFacets = [];

    facets?.forEach(
      (facet) =>
        (selectedFacets = [
          ...selectedFacets,
          ...facet?.values.filter((value) => value.selected),
        ])
    );
    this.selectedFilters = selectedFacets;
  };
  getPriorityOfSelectedFactes = (facets) => {
    let priority = [];
    this.currentPriority = facets[0]?.priority;
    priority = facets
      .map((facet) =>
        facet.values.reduce((a, c) => c.selected || a, false)
          ? facet.priority
          : null
      )
      .filter((el) => el !== null);
    this.currentPriority =
      priority?.length > 0
        ? Math.min(...priority, CategoryLevel.LVL0)
        : facets[0]?.priority;
  };

  pushAddToCartEvent(productList: any[]) {
    const item: Ecommerce = {
      item_list_id: this.routeFrom,
      item_list_name: this.routeFrom,
      items: productList.map((product, index) => {
        return {
          item_id: product?.code,
          item_name: product?.name,
          coupon: '',
          discount: product?.discountPercentage
            ? Number(product?.discountPercentage)
            : '',
          index: index,
          item_brand: this.gtmService.getItemBrand(),
          item_category: this.breadcrumbs[0] ? this.breadcrumbs[0].name : '',
          item_category2: this.breadcrumbs[1] ? this.breadcrumbs[1].name : '',
          item_category3: this.breadcrumbs[2] ? this.breadcrumbs[2].name : '',
          item_category4: this.breadcrumbs[3] ? this.breadcrumbs[3].name : '',
          item_category5: this.breadcrumbs[4] ? this.breadcrumbs[4].name : '',
          item_list_id: this.routeFrom,
          item_list_name: this.routeFrom,
          item_variant: '',
          location_id: '',
          price: product?.yourPrice?.value || '',
          quantity: 1,
        };
      }),
    };

    const eventData: GTMDataLayer = {
      store: this.gtmService.getItemBrand(),
      ecommerce: item,
      event: GtmEvents.ViewItemList,
    };
    this.gtmService.sendEvent(eventData);
  }

  setProductTypeFilterStatus() {
    this.facetService.getSelectedProductFilter().subscribe((filter) => {
      this.productTypeStatus = [];
      if (filter == this.productFilterType.BUY) {
        const activeProductType = {
          count: 1,
          name: this.getTranslatedText('waygate.BuyableProducts'),
          selected: true,
          filterCode: this.productFilterType.BUY,
        };
        this.productTypeStatus.push(activeProductType);
      } else if (filter == this.productFilterType.RETURN) {
        const activeProductType = {
          count: 1,
          name: this.getTranslatedText('waygate.ReturnableProducts'),
          selected: true,
          filterCode: this.productFilterType.RETURN,
        };
        this.productTypeStatus.push(activeProductType);
      } else {
        const activeBuyProductType = {
          count: 1,
          name: this.getTranslatedText('waygate.BuyableProducts'),
          selected: true,
          filterCode: this.productFilterType.RETURN,
        };
        const activeREturnProductType2 = {
          count: 1,
          name: this.getTranslatedText('waygate.ReturnableProducts'),
          selected: true,
          filterCode: this.productFilterType.BUY,
        };
        this.productTypeStatus.push(
          activeBuyProductType,
          activeREturnProductType2
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

  getProductTypeLinkParams(productCode) {
    return this.facetService.getLinkParams(this.selectedQuery, productCode);
  }

  openFilters() {
    this.showFiltersSlider = !this.showFiltersSlider;
    this.facetService.openFiltersSlider();
  }
}
