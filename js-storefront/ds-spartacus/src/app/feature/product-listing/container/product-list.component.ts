import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AuthService,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  ProductSearchPage,
} from '@spartacus/core';
import { PageLayoutService, ViewConfig } from '@spartacus/storefront';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ViewModes } from '../product-view/product-view.component';
import {
  categoryCodeList,
  LoadproductList,
  ProductListComponentService,
} from './product-list-component.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'cx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private productListSubscription = new Subscription();

  isInfiniteScroll: boolean;

  model$: Observable<ProductSearchPage> =
    this.productListComponentService.model$;

  viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
  ViewModes = ViewModes;
  mode = ViewModes.Grid;
  itemsPerPage: string;
  user: any;
  loadproductList = LoadproductList;
  categoryCodeList = categoryCodeList;

  activeSalesArea: string;
  customerAccount: string;
  routeFrom = ItemListTypeEnum.ProductListing;
  items = [
    { id: 50, name: '50' },
    { id: 100, name: '100' },
    { id: 200, name: '200' },
    { id: 500, name: '500' },
  ];
  params;
  title;
  breadcrumbs = [];
  userLoggedIn$: Observable<any> = this.authService.isUserLoggedIn().pipe(
    switchMap((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        return this.userAccountFacade.get();
      } else {
        return of(undefined);
      }
    })
  );
  userType;

  constructor(
    private pageLayoutService: PageLayoutService,
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig,
    public routes: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private custAccountService: CustomerAccountService,
    private productCatService: ProductCatelogService,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.userType = OCC_USER_ID_CURRENT;
        this.user = res;
        this.custAccountService
          .getCurrentCustomerAccount()
          .subscribe((res: any) => {
            this.customerAccount = res?.uid || '';
            this.activeSalesArea =
              res.selectedSalesArea?.salesAreaId.split('_')[1];
          });
      } else {
        this.userType = OCC_USER_ID_ANONYMOUS;
        this.routes.params.subscribe((params) => {
          this.params = params;
          let param: any = '';
          if (this.params.categoryCode == this.categoryCodeList.WaygateCode) {
            param = this.loadproductList.Waygate;
            this.custAccountService.updateGuestSalesArea(JSON.parse(param));
          }
          if (this.params.categoryCode == this.categoryCodeList.NexusCode) {
            param = this.loadproductList.Nexus;
            this.custAccountService.updateGuestSalesArea(JSON.parse(param));
          }
          if (
            this.params.categoryCode == this.categoryCodeList.PanametricsCode
          ) {
            param = this.loadproductList.Panametrics;
            this.custAccountService.updateGuestSalesArea(JSON.parse(param));
          }
          const activeSalesArea =
            this.custAccountService.getGuestActiveSalesAreaFromStorage();
          this.activeSalesArea = activeSalesArea?.saleAreaId || '1800';
        });
      }
    });
    this.routes.queryParams.subscribe((success: any) => {
      this.itemsPerPage =
        success?.pageSize || this.productListComponentService.defaultPageSize;
      if (this.params) {
        // this.setCategoryBreadCrumbs();
        if (this.title && this.breadcrumbs.length > 0) {
          this.breadcrumbService.setBreadcrumbTitle(this.title);
          this.breadcrumbService.setBreadCrumbs(this.breadcrumbs);
        }
      }
    });
    this.routes.params.subscribe((params: any) => {
      this.params = params;
      if (params['query']) {
        this.routeFrom = ItemListTypeEnum.Search;
      }
      // this.setCategoryBreadCrumbs();
    });
    if (sessionStorage.getItem('mode')) {
      this.mode = sessionStorage.getItem('mode') as ViewModes;
    }
    window.scrollTo(0, 0);
    this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;

    this.subscription.add(
      this.pageLayoutService.templateName$
        .pipe(take(1))
        .subscribe((template) => {
          this.viewMode$.next(this.mode);
        })
    );

    this.productListSubscription = this.model$.subscribe((res) => {
      if (res?.freeTextSearch && res?.pagination?.totalResults) {
        this.breadcrumbService.setBreadCrumbs([]);
        this.breadcrumbService.setBreadcrumbTitle(
          res.pagination.totalResults +
            ' results for "' +
            res.freeTextSearch +
            '"'
        );
      } else if (this.params) {
        this.setCategoryBreadCrumbs();
        if (this.userType == OCC_USER_ID_ANONYMOUS) {
          this.custAccountService.disableChangeAccount.next(true);
          this.productCatService.updateGuestSalesAreaFromCatCode(
            this.params.categoryCode,
            'PLP'
          );
        }
      }

      this.pushAddToCartEvent(res.products);
    });
  }

  setCategoryBreadCrumbs() {
    this.productListComponentService
      .setCategoryBreadCrumbs(
        this.params.categoryCode || this.params.brandCode,
        this.userType
      )
      .subscribe((res: any) => {
        this.breadcrumbs = [];
        this.title = '';
        if (res?.breadCrumbs) {
          for (const value of res.breadCrumbs) {
            if (
              value.categoryCode !=
              (this.params.categoryCode || this.params.brandCode)
            ) {
              const item = { label: '', link: '' };
              item.label = value.name;
              item.link = value.url;
              this.breadcrumbs.push(item);
            } else {
              this.title = value.name;
            }
          }
        }
        this.breadcrumbService.setBreadcrumbTitle(this.title);
        this.breadcrumbService.setBreadCrumbs(this.breadcrumbs);
        // this.cdRef.detectChanges();
      });
  }

  sortList(sortCode: string): void {
    this.productListComponentService.sort(sortCode);
  }

  setViewMode(mode: ViewModes): void {
    this.viewMode$.next(mode);
    this.viewMode$.next(mode);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.productListSubscription?.unsubscribe();
    this.custAccountService.disableChangeAccount.next(false);
  }
  setPageSize(pageSize) {
    this.productListComponentService.setPageSize(pageSize.id);
  }

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
          item_category: this.breadcrumbs[0] ? this.breadcrumbs[0].label : '',
          item_category2: this.breadcrumbs[1] ? this.breadcrumbs[1].label : '',
          item_category3: this.breadcrumbs[2] ? this.breadcrumbs[2].label : '',
          item_category4: this.breadcrumbs[3] ? this.breadcrumbs[3].label : '',
          item_category5: this.breadcrumbs[4] ? this.breadcrumbs[4].label : '',
          item_list_id: this.routeFrom,
          item_list_name: this.routeFrom,
          price: product?.yourPrice?.value || '',
          quantity: 1,
        };
      }),
    };

    const eventData: GTMDataLayer = {
      event: GtmEvents.ViewItemList,
      store: StoreTypeEnum.Dsstore,
      ecommerce: item,
    };
    this.gtmService.sendEvent(eventData);
  }
}
