import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  Product,
  ProductService,
  RoutingService,
  WindowRef,
} from '@spartacus/core';
import {
  CommonConfigurator,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorCommonsService,
} from '@spartacus/product-configurator/rulebased';
import {
  BREAKPOINT,
  BreakpointService,
  LaunchDialogService,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ConfiguratorExitButtonModalComponent } from './configurator-exit-button-modal/configurator-exit-button-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
@Component({
  standalone: false,
  selector: 'cx-configurator-exit-button',
  templateUrl: './configurator-exit-button.component.html',
  styleUrls: ['./configurator-exit-button.component.scss'],
})
export class ConfiguratorExitButtonComponent {
  productLine: string;
  logoPath: string;
  isBently: boolean = false;
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
    protected productService: ProductService,
    protected routingService: RoutingService,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected breakpointService: BreakpointService,
    protected windowRef: WindowRef,
    protected location: Location,
    public dialog: MatDialog,
    private launchDialogService: LaunchDialogService,
    private custAccService: CustomerAccountService
  ) {}
  ngOnInit() {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.displaySiteLogo();
    });
  }
  displaySiteLogo() {
    if (this.productLine == AllProductLine.waygate) {
      this.logoPath = '../../../../../assets/img/waygateTechLogo.svg';
    } else if (this.productLine == AllProductLine.bently) {
      this.isBently = true;
      this.logoPath = '../../../../../assets/img/bannernav4.png';
    } else if (this.productLine == AllProductLine.panametrics) {
      this.logoPath = '../../../../../assets/img/Pana_brand_logo.png';
    } else if (this.productLine == AllProductLine.druck) {
      this.logoPath = '../../../../../assets/img/druck_homepage_logo.png';
    } else {
      this.logoPath = '../../../../../assets/img/bh-logo.svg';
    }
  }

  navigateToHome() {
    this.routingService.go(['/', this.productLine]);
  }

  protected navigateToCart(): void {
    this.routingService.go('cart');
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

  public openConfirmationModal() {
    this.dialog.open(ConfiguratorExitButtonModalComponent, {
      /* width:'429px',
      height:'156px' */
    });
  }
  /**
   * Navigates to the product detail page of the product that is being configured.
   */
  exitConfiguration() {
    this.container$.pipe(take(1)).subscribe((container) => {
      if (
        container.routerData.owner.type ===
        CommonConfigurator.OwnerType.CART_ENTRY
      ) {
        this.navigateToCart();
      } else {
        this.routingService.go({
          cxRoute: 'product',
          params: container.product,
        });
      }
    });
  }

  /**
   * Verifies whether the current screen size equals or is larger than breakpoint `BREAKPOINT.md`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is larger than`BREAKPOINT.md` returns `true`, otherwise `false`.
   */
  isDesktop(): Observable<boolean> {
    return this.breakpointService.isUp(BREAKPOINT.md);
  }

  /**
   * Verifies whether the current screen size equals or is smaller than breakpoint `BREAKPOINT.sm`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is smaller than`BREAKPOINT.sm` returns `true`, otherwise `false`.
   */
  isMobile(): Observable<boolean> {
    return this.breakpointService.isDown(BREAKPOINT.sm);
  }
}
