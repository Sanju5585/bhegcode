import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LaunchDialogService } from '@spartacus/storefront';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';

@Component({
  standalone: false,
  selector: 'app-guest-user-order-details',
  templateUrl: './guest-user-order-details.component.html',
  styleUrls: ['./guest-user-order-details.component.scss'],
})
export class GuestUserOrderDetailsComponent implements OnInit {
  breadcrumbs: any[];
  userType: string = '';
  state: string = 'summary';
  orderIdToBeTracked: number;
  orderDetails: any;
  displayContentsOnLoad: boolean = false;
  productLine: string;

  constructor(
    protected globalMessageService: GlobalMessageService,
    private orderTrackingService: OrderTrackingService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslationService,
    private router: Router,
    protected authService: AuthService,
    private custAccountService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private location: Location
  ) {}

  async ngOnInit() {
    this.custAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.getOrderIdFromRequest();
    this.breadcrumbs = [
      {
        url: `/${this.productLine}/my-orders`,
        name: 'order-tracking.pageTitle',
      },
      {
        url: `/${this.productLine}/my-orders/${this.orderIdToBeTracked}`,
        name: 'order-tracking.orderDetails',
      },
    ];
    await this.fetchUser();
    this.updateLangForOptions(this.breadcrumbs, 'name');
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  fetchUser() {
    this.authService.isUserLoggedIn().subscribe((success) => {
      this.userType = success ? 'current' : 'anonymous';
      this.orderTrackingService.userType = this.userType;
      this.fetchOrderTrackingDetails();
    });
  }

  changeState(state) {
    this.state = state;
  }

  getOrderIdFromRequest() {
    this.activatedRoute.paramMap.subscribe((value: any) => {
      this.orderIdToBeTracked = value.params.orderId;
    });
  }

  fetchOrderTrackingDetails() {
    // this.orderDetails$ = this.orderTrackingService.emitOrderDetail;
    this.orderTrackingService.emitOrderDetail.subscribe(
      (response) => {
        if (!response && this.orderIdToBeTracked) {
          this.fetchDeatilsFromApi();
        } else {
          this.orderDetails = response;
        }
      },
      (error) => {
        this.displayContentsOnLoad = false;
        this.showError();
      }
    );
  }

  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };

  activateState(status, step) {
    switch (status) {
      case 'Received':
        return step < 2;
      case 'Processing':
        return step < 3;
      case 'Shipped':
        return step < 4;
      case 'ShippedInvoiced':
        return step < 5;

      case 'Blocked':
        return step < 3;
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  fetchDeatilsFromApi() {
    if (this.orderIdToBeTracked) {
      this.orderTrackingService
        .getOrderTrackingDetails(this.orderIdToBeTracked)
        .subscribe(
          (data) => {
            this.orderDetails = data;
            this.displayContentsOnLoad = true;
          },
          (error) => {
            this.displayContentsOnLoad = false;
            this.showError();
          }
        );
    }
  }

  backLink() {
    this.location.back();
  }
  shareDetail() {
    const componentData = {
      userType: this.userType,
    };
    const shareOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SHARE_ORDER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (shareOrderDialog) {
      shareOrderDialog.pipe(take(1)).subscribe((value) => {});
    }
  }

  showError() {
    this.globalMessageService.add(
      this.getTranslatedText('order-tracking.error.ordermsg'),
      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    this.router.navigate([`/${this.productLine}/track-order`]);
    return;
  }
}
