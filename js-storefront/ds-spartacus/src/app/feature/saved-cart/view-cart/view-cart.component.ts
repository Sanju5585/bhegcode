import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { SavedCartService } from '../service/saved-cart.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit, OnDestroy {
  page: number = 0;
  pageSize: number = 50;
  type: string = 'All';
  sortCode: string = 'desc';
  viewcartData: any;
  loadingFlag: boolean = false;
  Msg: string = '';
  preventFlag: boolean = false;
  $subscription: Subscription;
  savedCartMsg;
  title: string;

  constructor(
    private savedcartService: SavedCartService,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);

    this.translate
      .translate('savedCart.saveCartTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.filterData(this.page, this.pageSize, this.type, this.sortCode);
    this.resetData();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
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

  openPopup(item) {
    const viewSalesAreaDialog = this.launchDialogService.openDialog(
      DS_DIALOG.VIEW_SALES_AREA_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (viewSalesAreaDialog) {
      viewSalesAreaDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.savedcartService.setValidation({ data: item, type: '' });
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

  handleChange(event) {
    if (event.target.value) {
      this.type = event.target.value;
      this.filterData(this.page, this.pageSize, this.type, this.sortCode);
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

  viewDetail(code, name: string) {
    if (code) this.savedcartService.setCartCode(code);
    if (name) this.savedcartService.setCartName(name);
    this.router.navigate(['/saved-cart/details']);
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

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }
}
