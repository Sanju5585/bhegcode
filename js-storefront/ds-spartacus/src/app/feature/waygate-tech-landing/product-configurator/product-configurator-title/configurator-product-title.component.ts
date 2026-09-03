import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  SimpleChange,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import {
  GlobalMessageService,
  GlobalMessageType,
  Product,
  ProductScope,
  ProductService,
} from '@spartacus/core';
import {
  CommonConfigurator,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorAttributeCompositionContext,
  ConfiguratorCommonsService,
} from '@spartacus/product-configurator/rulebased';

import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';

import {
  EMPTY,
  Observable,
  Subject,
  firstValueFrom,
  of,
  race,
  timer,
} from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { ApiService } from '../../../../core/http/api.service';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { Store } from '@ngrx/store';
import { SetAccessoriesInStore } from '../../../../core/product-catalog/store/actions/product-categories.action';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { ConfiguratorPriceSummaryServiceService } from '../../waygate-product-details/configurator-price-summary-service.service';

@Component({
  standalone: false,
  selector: 'cx-configurator-product-title',
  templateUrl: './configurator-product-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./configurator-product-title.component.scss'],
})
export class ConfiguratorProductTitleComponent {
  public hasConflictMessageDisplayed$ = new Subject<boolean>();
  public attribute: any[] = [];
  resetFlag: boolean = true;
  productCode: string;
  configurationError: boolean = false;
  configurableProducts: any = [];
  showConfigurationIncompletError: boolean = false;
  //jsonResponse = [];
  constructor(
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    private configuratorPriceSummaryService: ConfiguratorPriceSummaryServiceService,
    protected productService: ProductService,
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private productCategoriesService: ProductCategoriesService,
    private store: Store,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService
  ) {}
  container$: Observable<{
    routerData: ConfiguratorRouter.Data;
    configuration: Configurator.Configuration;
    product: Product | undefined;
  }> = this.configRouterExtractorService.extractRouterData().pipe(
    switchMap((routerData) =>
      this.configuratorCommonsService
        .getConfiguration(routerData.owner)
        .pipe(map((configuration) => ({ routerData, configuration })))
        .pipe(
          switchMap((cont) =>
            this.productService.get(cont.configuration.productCode).pipe(
              map((product) => ({
                routerData: cont.routerData,
                configuration: cont.configuration,
                product,
              }))
            )
          )
        )
    )
  );
  product$: Observable<Product> = this.configRouterExtractorService
    .extractRouterData()
    .pipe(
      switchMap((routerData) =>
        this.configuratorCommonsService.getConfiguration(routerData.owner)
      ),
      map((configuration) => {
        switch (configuration.owner.type) {
          case CommonConfigurator.OwnerType.PRODUCT:
          case CommonConfigurator.OwnerType.CART_ENTRY:
            return configuration.productCode;
          case CommonConfigurator.OwnerType.ORDER_ENTRY:
            return configuration.overview.productCode;
        }
      }),
      switchMap((productCode) => this.productService.get(productCode))
    );

  configuration$: Observable<Configurator.Configuration | null> =
    this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => {
        const config$ = this.configuratorCommonsService
          .getConfiguration(routerData.owner)
          .pipe(
            tap((config) => {
              if (config) {
                this.configurationError = false;
              }
            })
          );
        return race([
          config$,
          timer(10000).pipe(
            tap(() => {
              this.configurationError = true;
            }),
            switchMap(() => of(null))
          ),
        ]);
      })
    );

  resetData(configId: any) {
    this.resetConfiguration(configId).subscribe(
      (success: any) => {
        let configData = JSON.parse(localStorage.getItem('configuredData'));
        if (configData?.mainProduct) {
          configData.mainProduct.complete = false;
          configData.mainProduct.configId = '';
        }
        if (Array.isArray(configData.vclist)) {
          configData.vclist.forEach(
            (item) => ((item.complete = false), (item.configId = ''))
          );
        }

        this.store.dispatch(new SetAccessoriesInStore(configData));
        localStorage.setItem(
          'navigateAfterReload',
          `/configure/vc/product/entityKey/${this.configurableProducts[0]}`
        );

        window.location.reload();
      },
      (error: any) => {},
      () => {
        window.location.reload();
      }
    );
  }

  resetConfiguration(configurationId: any) {
    const params = ['ccpconfigurator', 'reset', configurationId];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, {}, { responseType: 'text' });
  }

  downloadCSV(configId: any) {
    let jsonResponse = [];
    this.product$.subscribe((res) => {
      this.productCode = res.code;
    });

    const params = ['ccpconfigurator', configId, 'configurationOverview'];
    const apiUrl = this.apiService.constructUrl(params);
    this.apiService.getData(apiUrl, params).subscribe((overview) => {
      if (overview) {
        (overview as any).groups.forEach((group) => {
          const row = group;
          let groupname = row.groupDescription;
          row.characteristicValues.forEach((config) => {
            const record = {
              'Part Number': this.productCode,
              Group: groupname,
              Configuration: config.characteristic,
              'Configuration Label': config.value,
              'Configuration Option': `="${config.valueId}"`,
            };

            jsonResponse.push(record);
          });
        });
      }
      const data = jsonResponse;
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, 'configurations');
      XLSX.writeFile(workbook, this.productCode + '.csv');
    });
  }
  public openModal() {
    const componentdata = {
      item: this.container$,
    };
    const haveAquestionModal = this.launchDialogService.openDialog(
      DS_DIALOG.HAVE_A_QUESTION_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (haveAquestionModal) {
      haveAquestionModal.pipe(take(1)).subscribe(() => {
        console.log('closing the overview');
      });
    }
  }

  // public openModal() {
  //   const componentdata = {
  //     item: this.container$,
  //   };
  //   const haveAquestionModal = this.launchDialogService.openDialog(
  //     DS_DIALOG.HAVE_A_QUESTION_DIALOG,
  //     undefined,
  //     undefined,
  //     componentdata
  //   );
  //   if (haveAquestionModal) {
  //     haveAquestionModal.pipe(take(1)).subscribe(() => {
  //       console.log('closing the overview');
  //     });
  //   }
  // }
  async ngOnInit() {
    // let configData = await firstValueFrom(
    //   this.productCategoriesService.fetchSelectedAccessories()
    // );
    this.configuratorPriceSummaryService.showError(false);
    this.configuratorPriceSummaryService.configurationIncompleteSubject$.subscribe(
      (show) => {
        this.showConfigurationIncompletError = show;

        this.cdr.detectChanges();
      }
    );
    const path = JSON.parse(localStorage.getItem('navigateAfterReload'));
    if (path) {
      localStorage.removeItem('navigateAfterReload');
      this.router.navigate([path]);
    }
    let configData = JSON.parse(localStorage.getItem('configuredData'));

    if (configData.mainProduct.configurable) {
      this.configurableProducts.push(configData.mainProduct.code);
    }
    for (let i = 0; i < configData.vclist.length; i++) {
      {
        this.configurableProducts.push(configData.vclist[i].code);
      }
    }
    this.configuration$.subscribe(async (data) => {
      if (configData.mainProduct.code === data.productCode) {
        let updatedMainProduct = {
          ...configData.mainProduct,
          configId: data.configId,
          complete: data.complete,
        };
        const updatedConfigData = {
          ...configData,
          mainProduct: updatedMainProduct,
        };
        this.store.dispatch(new SetAccessoriesInStore(updatedConfigData));
      }
      let latestconfigData = await firstValueFrom(
        this.productCategoriesService.fetchSelectedAccessories()
      );

      const updatedvclist = [];
      for (let i = 0; i < latestconfigData.vclist.length; i++) {
        const vc = latestconfigData.vclist[i];
        if (latestconfigData.vclist[i].code === data.productCode) {
          updatedvclist.push({
            ...vc,
            configId: data.configId,
            complete: data.complete,
          });
        } else {
          updatedvclist.push(vc);
        }
      }
      const updatedConfigData = {
        ...latestconfigData,
        vclist: updatedvclist,
      };

      this.store.dispatch(new SetAccessoriesInStore(updatedConfigData));
      localStorage.setItem('configuredData', JSON.stringify(updatedConfigData));
    });

    const c = await firstValueFrom(
      this.productCategoriesService.fetchSelectedAccessories()
    );

    this.configuration$.subscribe((data) => {
      for (let i in data.groups) {
        if (data.groups[i].groupType === 'ConflictHeaderGroup') {
          this.hasConflictMessageDisplayed$.next(true);
          break;
        } else {
          this.hasConflictMessageDisplayed$.next(false);
        }
      }
    });

    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.resetFlag = false;
      }
    });
  }
  navigateTo(productCode: string) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    let idx = 0;
    for (let i = 0; i < this.configurableProducts.length; i++) {
      if (this.configurableProducts[i] === productCode) {
        idx = i;
        break;
      }
    }
    for (let i = 0; i < idx; i++) {
      if (this.checkCompletion(this.configurableProducts[i]) !== true) {
        this.globalMessageService.add(
          'Please complete the current configuration before proceeding',
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        return;
      }
    }
    this.router.navigate(['/configure/vc/product/entityKey/', productCode]);
  }
  checkCompletion(id: string) {
    const configData = JSON.parse(localStorage.getItem('configuredData'));
    if (configData.mainProduct.code === id) {
      if (configData.mainProduct.complete === true) return true;
    }
    for (let i = 0; i < configData.vclist.length; i++) {
      if (
        configData.vclist[i].complete === true &&
        configData.vclist[i].code === id
      )
        return true;
    }

    return false;
  }
  checkCurrentProduct(id: string, mainProductCode: string) {
    if (id === mainProductCode) return true;
    else return false;
  }
}
