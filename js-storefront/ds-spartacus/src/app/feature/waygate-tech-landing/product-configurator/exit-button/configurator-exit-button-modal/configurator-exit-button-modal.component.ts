import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product, ProductService, RoutingService } from '@spartacus/core';
import {
  CommonConfigurator,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorCommonsService,
} from '@spartacus/product-configurator/rulebased';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { Store } from '@ngrx/store';
import { ProductCategoriesService } from '../../../../../core/product-catalog/services/product-categories.service';
import { SetAccessoriesInStore } from '../../../../../core/product-catalog/store/actions/product-categories.action';

@Component({
  standalone: false,
  selector: 'app-configurator-exit-button-modal',
  templateUrl: './configurator-exit-button-modal.component.html',
  styleUrls: ['./configurator-exit-button-modal.component.scss'],
})
export class ConfiguratorExitButtonModalComponent {
  productLine: string;
  ngOnInit() {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }
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

  constructor(
    public dialog: MatDialog,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected productService: ProductService,
    protected routingService: RoutingService,
    private customerAccService: CustomerAccountService,
    protected router: Router,
    private store: Store,
    private productCategoriesService: ProductCategoriesService
  ) {}
  closeModal() {
    this.dialog.closeAll();
  }
  exitConfiguration(pCode: any, pName: any) {
    this.dialog.closeAll();
    if (localStorage.getItem('quickOrderParts')) {
      localStorage.removeItem('configuredData');
      this.store.dispatch(new SetAccessoriesInStore({}));
      localStorage.removeItem('navigateAfterReload');
      localStorage.removeItem('quickOrderParts');
      this.router.navigate([this.productLine, 'product', pCode, pName]);
    }
    const data = JSON.parse(localStorage.getItem('configuredData'));
    localStorage.removeItem('configuredData');
    this.store.dispatch(new SetAccessoriesInStore({}));
    localStorage.removeItem('navigateAfterReload');
    localStorage.removeItem('quickOrderParts');
    this.router.navigate([
      this.productLine,
      'product',
      data.mainProduct.code,
      data.mainProduct.name,
    ]);
  }
  protected navigateToCart(): void {
    this.router.navigate([this.productLine, 'cart']);
  }
}
