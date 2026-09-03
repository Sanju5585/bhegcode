import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { SavedCartService } from '../../saved-cart/service/saved-cart.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'app-waygate-view-cart',
  templateUrl: './waygate-view-cart.component.html',
  styleUrls: ['./waygate-view-cart.component.scss'],
})
export class WaygateViewCartComponent implements OnInit {
  breadcrumbs: any[] = [];
  page: number = 0;
  pageSize: number = 100;
  type: string;
  sortCode: string = 'desc';
  viewcartData: any;
  originalViewCartData: any;
  loadingFlag: boolean = false;
  Msg: string = '';
  preventFlag: boolean = false;
  $subscription: Subscription;
  savedCartMsg;
  title: string;
  filterSelected: boolean = false;
  productLine: string;

  constructor(
    private savedcartService: SavedCartService,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private customerAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.translate
      .translate('savedCart.saveCartTitle')
      .subscribe((res: string) =>{
      this.breadcrumbs = [
        {
          name: res,
          url: `/${productLine}/saved-carts`,
        },
      ];
      })
    });
    this.breadCrumbService.setBreadCrumbs([]);

    this.translate
      .translate('savedCart.saveCartTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.type = params?.type || 'All';
      this.filterData(this.page, this.pageSize, this.type, this.sortCode);
    });

    this.resetData();
  }

  filterData(page, pageSize, type, sortCode) {
    if (this.preventFlag) this.loadingFlag = true;
    else this.loadingFlag = false;
    this.viewcartData = [];
    this.savedcartService
      .getSavedCarts(page, pageSize, type, sortCode)
      .subscribe(
        (data: any) => {
          this.loadingFlag = true;
          if (data.saveCartsList.length > 0)
            this.viewcartData = data.saveCartsList;
          else this.Msg = this.getTranslatedText('savedCart.errors.recordMsg');
        },
        (error) => {
          this.loadingFlag = true;
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            10000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  resetData() {
    this.$subscription = this.savedcartService
      .getValidation()
      .subscribe((value) => {
        if (value) {
          this.preventFlag = true;

          if (value?.type == 'normal')
            this.filterData(this.page, this.pageSize, this.type, this.sortCode);
        }
      });
  }

  setType(type: string) {
    this.type = type;
    this.setRoute({ type: type });
  }
  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute,
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  viewDetails(cartId: any) {
    if (!!cartId) {
      // this.savedcartService.setCartCode(cartId)
      this.router.navigate([`/${this.productLine}/saved-carts`, cartId]);
    }
  }

  openDeletePopup(code, name) {
    const componentData = {
      name: name,
    };
    const deleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (deleteDialog) {
      deleteDialog.pipe(take(1)).subscribe((value) => {
        if (value == 'delete' || value?.instance?.reason == 'delete') {
          this.deleteCart(code);
        }
      });
    }
  }

  deleteCart(cartId) {
    this.savedcartService.deleteSavedCart(cartId).subscribe(
      (res) => {
        this.preventFlag = true;
        this.globalMessageService.add(
          this.getTranslatedText('savedCart.cartDeleteSuccess'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
        this.type = 'All';
        this.filterData(this.page, this.pageSize, this.type, this.sortCode);
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
}
