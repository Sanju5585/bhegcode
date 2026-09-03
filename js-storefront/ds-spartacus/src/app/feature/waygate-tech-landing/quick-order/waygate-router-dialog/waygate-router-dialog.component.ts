import { Component } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';

@Component({
  standalone: false,
  selector: 'app-waygate-router-dialog',
  templateUrl: './waygate-router-dialog.component.html',
  styleUrls: ['./waygate-router-dialog.component.scss'],
})
export class WaygateRouterDialogComponent {
  vcFlow: boolean = false;
  constructor(
    protected launchDialogService: LaunchDialogService,
    private router: Router,
    private productCategoriesService: ProductCategoriesService
  ) {}
  ngOnInit() {
    const vcFlowData = localStorage.getItem('vcFlow');
    if (!vcFlowData) {
      this.vcFlow = true;
    }
  }
  reason: string;
  close(reason: string) {
    const quickOrderData = localStorage.getItem('vcFlow');
    if (!quickOrderData) {
      if (reason === 'confirm') {
        this.productCategoriesService.setQuickOrderParts('');
        localStorage.removeItem('quickOrderConfigData');
      }
    } else {
      localStorage.removeItem('vcFlow');
    }
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
    this.router.events.subscribe((event) => {
      if (
        event instanceof Scroll &&
        event.routerEvent instanceof NavigationEnd
      ) {
        if (
          event.routerEvent.urlAfterRedirects == `/${AllProductLine.waygate}` ||
          event.routerEvent.urlAfterRedirects == `/${AllProductLine.bently}` ||
          event.routerEvent.urlAfterRedirects ==
            `/${AllProductLine.panametrics}` ||
          event.routerEvent.urlAfterRedirects == `/${AllProductLine.druck}` ||
          event.routerEvent.urlAfterRedirects ==
            `/${AllProductLine.reuterStokes}`
        ) {
          location.reload();
        }
      }
    });
  }
}
