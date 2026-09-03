import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { AuthService, TranslationService } from '@spartacus/core';
import { Router } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { delay, switchMap, take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { LandingPagesService } from '../../landing/landing-pages.service';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { OrderTrackingService } from '../../order-tracking/order-tracking.service';
import { RmaTrackingService } from '../../rma/rma-tracking/rma-tracking.service';
import { forkJoin, timer } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-waygate-track-order',
  templateUrl: './waygate-track-order.component.html',
  styleUrls: ['./waygate-track-order.component.scss'],
})
export class WaygateTrackOrderComponent implements OnInit {
  breadcrumbs: any[] = [];
  purchaseNumber = '';
  checkStatusNumber = '';
  stausName: string;
  statusDetails: any;
  isUserLoggedIn = false;
  noDataFound = false;
  showStatus = false;
  currentUid: string = '';
  googleCaptcha: string = '';
  showSpinner: boolean = false;
  orderStatus: boolean = false;
  rmaStatus: boolean = false;
  isLoggedIn: boolean = false;
  showWaygate: boolean;
  error = {
    purchaseNumber: '',
    currentUid: '',
  };
  productLine: string;
  wrongCustomer: any;
  wrongStore: any;
  orderList: any[];
  rmaList: any[];
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private landingPagesService: LandingPagesService,
    private customerAccountService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    public rmaTrackingService: RmaTrackingService,
    public orderTrackingService: OrderTrackingService,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.customerAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      if (
        productLine == AllProductLine.waygate ||
        productLine == AllProductLine.bently ||
        productLine == AllProductLine.panametrics ||
        productLine == AllProductLine.druck ||
        productLine == AllProductLine.reuterStokes
      ) {
        this.showWaygate = true;
      } else {
        this.showWaygate = false;
      }
    });
    this.getCurrentSalesArea();
    this.translate
      .translate('track-order.trackOrderBreadcrumb')
      .subscribe((res: string) => {
        this.breadcrumbs = [
          { name: res, url: `/${this.productLine}/track-order` },
        ];
      });
    this.authService.isUserLoggedIn().subscribe((success) => {
      if (success) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
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

  getCurrentSalesArea() {
    this.customerAccountService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.currentUid = res?.uid ?? '';
      }
    });
  }
  orderRedirect(code, orderDetails) {
    this.orderTrackingService.emitOrderDetail.next(orderDetails);
    const redirectUrl = this.isLoggedIn
      ? `/${this.productLine}/my-orders`
      : `/${this.productLine}/track-order/details`;

    this.router.navigate([redirectUrl, code]);
  }

  onChange(event, order) {
    event.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      event.target.value
    );
    this.noDataFound = false;
    this.rmaStatus = false;
    this.orderStatus = false;
    this.showStatus = false;
    if (order === 'purchaseNumber') {
      this.purchaseNumber = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
        REGULAR_PATTERN.alphaNumeric
      );
      this.purchaseNumber = this.purchaseNumber.trim();
      this.error.purchaseNumber = '';
      this.stausName = order;
      this.checkStatusNumber = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
        REGULAR_PATTERN.alphaNumeric
      );
    } else {
      this.currentUid = event.target.value;
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.error.currentUid = this.getTranslatedText(
          'guest-home.error.cstmrDigitOnly'
        );
      } else {
        this.error.currentUid = '';
      }
    }
  }

  reset() {
    this.purchaseNumber = '';
    this.error.purchaseNumber = '';
    this.error.currentUid = '';
    this.checkStatusNumber = '';
    this.noDataFound = false;
    this.showStatus = false;
    this.rmaStatus = false;
    this.orderStatus = false;
    if (!this.isLoggedIn) {
      this.currentUid = '';
    }
  }

  whereDofind() {
    const guestTrackModal = this.launchDialogService.openDialog(
      DS_DIALOG.GUEST_TRACK_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (guestTrackModal) {
      guestTrackModal.pipe(take(1)).subscribe((value) => {});
    }
  }

  rmaRedirect(rmaNumber, element) {
    this.rmaTrackingService.emitRmaDetail.next(element);
    const redirectUrl = this.isLoggedIn
      ? `/${this.productLine}/my-returns`
      : '/quick-status/rma';

    if (!this.isLoggedIn) {
      this.orderTrackingService.emitGuestOrderDetail.next('true');
    }
    this.router.navigate([redirectUrl, rmaNumber]);
  }

  ordersByPO() {
    return this.landingPagesService.orderStatus(
      this.checkStatusNumber,
      this.currentUid,
      'purchaseNumber'
    );
  }
  ordersByON() {
    return this.landingPagesService.orderStatus(
      this.checkStatusNumber,
      this.currentUid,
      'orderNumber'
    );
  }
  rmaByPO() {
    return this.landingPagesService.rmaOrderStatus(
      this.checkStatusNumber,
      this.currentUid,
      'purchaseNumber'
    );
  }
  rmaByON() {
    return this.landingPagesService.rmaOrderStatus(
      this.checkStatusNumber,
      this.currentUid,
      'orderNumber'
    );
  }

  findOrderStatusByPurchaseNumber() {
    this.showSpinner = true;
    this.noDataFound = false;
    this.wrongCustomer = false;
    this.wrongStore = false;
    this.landingPagesService
      .orderStatus(this.checkStatusNumber, this.currentUid, 'purchaseNumber')
      .subscribe(
        (resp: any) => {
          this.statusDetails = resp.orderData;
          // if (resp?.orderError) {
          //   this.wrongCustomer = resp?.orderError?.wrongCustomer;
          //   this.wrongStore = resp?.orderError?.wrongStore;
          // }
          if (this.statusDetails === undefined || this.statusDetails === null) {
            this.findOrderStatusByOrderNumber();
          } else {
            if (resp.orderData.length == 1) {
              this.orderRedirect(resp.orderData[0]?.code, resp.orderData[0]);
            } else {
              this.updateFlagsToShowData();
            }
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  findOrderStatusByOrderNumber() {
    this.landingPagesService
      .orderStatus(this.checkStatusNumber, this.currentUid, 'orderNumber')
      .subscribe(
        (resp: any) => {
          if (resp?.orderError) {
            this.wrongCustomer = resp?.orderError?.wrongCustomer;
            this.wrongStore = resp?.orderError?.wrongStore;
          }
          this.statusDetails = resp.orderData;
          if (this.statusDetails === undefined || this.statusDetails === null) {
            this.findRmaOrderStatus();
          } else {
            if (resp.orderData.length == 1) {
              this.orderRedirect(resp.orderData[0]?.code, resp.orderData[0]);
            } else {
              this.updateFlagsToShowData();
            }
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  findRmaOrderStatus() {
    this.showStatus = false;
    this.landingPagesService
      .rmaOrderStatus(this.checkStatusNumber, this.currentUid, 'purchaseNumber')
      .subscribe((data: any) => {
        this.statusDetails = data.rmaHeaderStatusDetails;
        if (this.statusDetails.length > 0) {
          if (this.statusDetails.length == 1) {
            this.rmaRedirect(
              this.statusDetails[0]?.rmaNumber,
              this.statusDetails[0]
            );
          } else {
            this.rmaStatus = true;
            this.showStatus = true;
            this.showSpinner = false;
          }
        } else {
          this.findOrderStatusByRmaPoNumber();
        }
      });
  }

  findOrderStatusByRmaPoNumber() {
    this.landingPagesService
      .rmaOrderStatus(this.checkStatusNumber, this.currentUid, 'orderNumber')
      .subscribe(
        (data: any) => {
          this.statusDetails = data.rmaHeaderStatusDetails;
          if (data?.rmaError) {
            this.wrongCustomer = data?.rmaError?.wrongCustomer;
            this.wrongStore = data?.rmaError?.wrongStore;
          }
          if (this.statusDetails.length > 0) {
            if (this.statusDetails.length == 1) {
              this.rmaRedirect(
                this.statusDetails[0]?.rmaNumber,
                this.statusDetails[0]
              );
            } else {
              this.rmaStatus = true;
              this.showStatus = true;
              this.showSpinner = false;
            }
          } else {
            this.showStatus = false;
            this.showSpinner = false;
            this.noDataFound = true;
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  updateFlagsToShowData() {
    this.orderStatus = true;
    this.showStatus = true;
    this.showSpinner = false;
  }

  trackOrderStatus() {
    this.wrongCustomer = false;
    this.wrongStore = false;

    if (!this.currentUid || !this.checkStatusNumber) {
      if (!this.currentUid) {
        this.error.currentUid = this.getTranslatedText(
          'guest-home.error.cstmrNumberError'
        );
      }
      if (!this.checkStatusNumber) {
        this.error.purchaseNumber = this.getTranslatedText(
          'guest-home.error.POorORDERorRMA'
        );
      }
    } else {
      if (this.isLoggedIn) {
        this.showSpinner = true;
        // this.findOrderStatusByPurchaseNumber();

        forkJoin({
          req1: this.landingPagesService.orderStatusByPO(
            this.checkStatusNumber,
            this.currentUid
          ),
          req2: timer(1000).pipe(
            switchMap(() =>
              this.landingPagesService.orderStatusByNumber(
                this.checkStatusNumber,
                this.currentUid
              )
            )
          ),

          req3: timer(500).pipe(
            switchMap(() =>
              this.landingPagesService.rmaStatusByPO(
                this.checkStatusNumber,
                this.currentUid
              )
            )
          ),
          req4: timer(1500).pipe(
            switchMap(() =>
              this.landingPagesService.rmaStatusByNumber(
                this.checkStatusNumber,
                this.currentUid
              )
            )
          ),
        }).subscribe(({ req1, req2, req3, req4 }: any) => {
          console.log({ req1, req2, req3, req4 });
          this.showSpinner = false;
          this.orderList = [
            ...(req1?.orderData || []),
            ...(req2?.orderData || []),
          ];
          this.rmaList = [
            ...(req3?.rmaHeaderStatusDetails || []),
            ...(req4?.rmaHeaderStatusDetails || []),
          ];

          if (this.orderList?.length == 1) {
            if (this.rmaList?.length == 0) {
              this.orderRedirect(this.orderList[0]?.code, this.orderList[0]);
              return;
            }
          }
          if (this.rmaList?.length == 1) {
            if (this.orderList?.length == 0) {
              this.rmaRedirect(this.rmaList[0]?.rmaNumber, this.rmaList[0]);
              return;
            }
          }
          if (this.orderList?.length == 0 && this.rmaList?.length == 0) {
            this.wrongCustomer =
              req1?.orderError?.wrongCustomer &&
              req2?.orderError?.wrongCustomer;
            this.wrongStore =
              req1?.orderError?.wrongStore && req2?.orderError?.wrongStore;
            // this.updateFlagsToShowData();

            if (!this.wrongCustomer && !this.wrongStore) {
              this.noDataFound = true;
            }
          }
        });
      } else {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(environment.siteKey, { action: '' })
            .then((token) => {
              this.googleCaptcha = token;
              this.getOrderStatusForGuestUserByPoNumber();
            });
        });
        this.pushEventForGtm('PO Number');
      }
    }
  }

  pushEventForGtm(queryType: string) {
    this.gtmService.sendEvent({
      event: 'guestQuickOrderTracker',
      poOrderNumber: this.checkStatusNumber,
      queryType: queryType,
    });
  }

  getOrderStatusForGuestUserByPoNumber() {
    this.showSpinner = true;
    this.landingPagesService
      .quickOrderStatus({
        customerNumber: this.currentUid,
        poNumber: this.checkStatusNumber,
        googleCaptcha: this.googleCaptcha,
      })
      .subscribe(
        (resp: any) => {
          this.statusDetails = resp.orderData;

          if (this.statusDetails === undefined || this.statusDetails === null) {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(environment.siteKey, { action: '' })
                .then((token) => {
                  this.googleCaptcha = token;
                  this.getOrderStatusForGuestUserByRmaNumber();
                });
            });
            this.pushEventForGtm('Order/RMA Number');
          } else {
            if (resp.orderData.length == 1) {
              this.orderRedirect(resp.orderData[0]?.code, resp.orderData[0]);
            } else {
              this.orderStatus = true;
              this.showStatus = true;
              this.showSpinner = false;
            }
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  getOrderStatusForGuestUserByRmaNumber() {
    this.showSpinner = true;
    this.landingPagesService
      .quickOrderStatus({
        customerNumber: this.currentUid,
        rmaNumber: this.checkStatusNumber,
        googleCaptcha: this.googleCaptcha,
      })
      .subscribe(
        (resp: any) => {
          this.statusDetails = resp.orderData;

          if (this.statusDetails === undefined || this.statusDetails === null) {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(environment.siteKey, { action: '' })
                .then((token) => {
                  this.googleCaptcha = token;
                  this.getRmaStatusForGuestUserByPoNumber();
                });
            });
          } else {
            if (resp.orderData.length == 1) {
              this.orderRedirect(resp.orderData[0]?.code, resp.orderData[0]);
            } else {
              this.orderStatus = true;
              this.showStatus = true;
              this.showSpinner = false;
            }
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  getRmaStatusForGuestUserByPoNumber() {
    this.showSpinner = true;
    this.landingPagesService
      .rmaStatusDetails({
        customerNumber: this.currentUid,
        poNumber: this.checkStatusNumber,
        googleCaptcha: this.googleCaptcha,
      })
      .subscribe(
        (data: any) => {
          if ((data.errorMsg && data.errorMsg !== undefined) || data === null) {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(environment.siteKey, { action: '' })
                .then((token) => {
                  this.googleCaptcha = token;
                  this.getRmaStatusForGuestUserByRmaNumber();
                });
            });
          } else {
            this.rmaRedirect(data?.rmaNumber, data);
          }
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  getRmaStatusForGuestUserByRmaNumber() {
    this.showSpinner = true;
    this.landingPagesService
      .rmaStatusDetails({
        customerNumber: this.currentUid,
        rmaNumber: this.checkStatusNumber,
        googleCaptcha: this.googleCaptcha,
      })
      .subscribe(
        (data: any) => {
          if ((data.errorMsg && data.errorMsg !== undefined) || data === null) {
            this.noDataFound = true;
            this.showStatus = false;
          } else {
            this.rmaRedirect(data?.rmaNumber, data);
          }
          this.showSpinner = false;
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }
  openSlider() {
    this.customerAccountService.openSlider();
  }
  cancel() {
    this.wrongCustomer = false;
    this.wrongStore = false;
    this.noDataFound = false;
  }
  getCurrency(cur) {
    return cur.split(' ')[0];
  }
}
