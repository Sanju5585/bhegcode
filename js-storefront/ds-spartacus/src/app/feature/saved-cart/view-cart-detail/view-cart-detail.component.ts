import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { SavedCartService } from '../service/saved-cart.service';
import { ViewSalesAreaComponent } from '../view-sales-area/view-sales-area.component';
import { Subscription } from 'rxjs';
import moment from 'moment';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CartType } from '@spartacus/cart/base/root';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { ProductType } from '../../../shared/models/cartType.models';
@Component({
  standalone: false,
  selector: 'app-view-cart-detail',
  templateUrl: './view-cart-detail.component.html',
  styleUrls: ['./view-cart-detail.component.scss'],
})
export class ViewCartDetailComponent implements OnInit {
  showToggle: boolean;
  isSavecartCollapsed: boolean = false;
  data;
  public cartType = CartType;
  public productType = ProductType;
  nonFilmProduct: any[] = [];
  filmProduct: any[] = [];
  $subscription: Subscription;
  savedTime: string;
  showCartName: string;
  constructor(
    private savedCartService: SavedCartService,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('savedCart.saveCartTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getCartCode();
    this.savedCartService.getCartName.subscribe((data) => {
      this.showCartName = data;
    });
  }

  getCartCode() {
    this.$subscription = this.savedCartService
      .getGetCode()
      .subscribe((code) => {
        if (code) this.cartDetails(code);
      });
  }

  toggleButton() {
    this.showToggle = !this.showToggle;
  }

  cartDetails(cartId) {
    this.savedCartService.ViewCartDetail(cartId).subscribe(
      (data: any) => {
        this.data = data;
        this.getForamtedDate(this.data);
        if (this.data?.cartType == 'HYBRID') this.filmOrNonFilm(this.data);
        if (this.data?.locationMap.length > 1) this.locationWiseRMA(this.data);
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  getForamtedDate(data: any) {
    this.savedTime = moment(data?.saveTime).format('MMM Do YYYY, h:mm a');
  }

  filmOrNonFilm(items) {
    if (items.entries.length > 0) {
      for (let item of items.entries) {
        if (
          item.productType == this.productType.Typ1 ||
          item.productType == this.productType.Typ2
        ) {
          this.nonFilmProduct.push(item);
        } else if (item.productType == this.productType.Typ3) {
          this.filmProduct.push(item);
        }
      }
    }
  }

  locationWiseRMA(items) {
    if (items.locationMap.length > 1) {
      this.nonFilmProduct = items.returnsCartData.filter(
        (x) => x.returnLocationId == items.locationMap[0].key
      );
      this.filmProduct = items.returnsCartData.filter(
        (x) => x.returnLocationId == items.locationMap[1].key
      );
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  openPopup(type) {
    const viewSalesAreaDialog = this.launchDialogService.openDialog(
      DS_DIALOG.VIEW_SALES_AREA_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (viewSalesAreaDialog) {
      viewSalesAreaDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.savedCartService.setValidation({ data: this.data, type: type });
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }
}
