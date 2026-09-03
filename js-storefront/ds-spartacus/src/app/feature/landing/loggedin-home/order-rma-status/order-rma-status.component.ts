import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { LandingPagesService } from '../../landing-pages.service';
import { Router } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';
import { RmaTrackingService } from '../../../rma/rma-tracking/rma-tracking.service';
import {
  SAP_RMA_AWAITING_PROCESSING_ORDER,
  SAP_RMA_STATUS,
} from '../../../../shared/models/status/rma-status.model';
@Component({
  standalone: false,
  selector: 'app-order-rma-status',
  templateUrl: './order-rma-status.component.html',
  styleUrls: ['./order-rma-status.component.scss'],
})
export class OrderRmaStatusComponent implements OnInit {
  purchaseNumber = '';
  rmaNumber = '';
  checkStatusNumber = '';
  showStatus = false;
  stausName: string;
  statusDetails: any;
  noDataFound = false;
  currentUid;
  showSpinner: boolean = false;
  loginErrorMessages: any;
  orderStatus: boolean = false;
  rmaStatus: boolean = false;
  productLine: string;
  error = {
    rmaNumber: '',
  };
  @Input() isClassicView = false;
  showWaygate: boolean;
  constructor(
    private landingPagesService: LandingPagesService,
    private customerAccountService: CustomerAccountService,
    public rmaTrackingService: RmaTrackingService,
    public orderTrackingService: OrderTrackingService,
    private translate: TranslationService,
    public router: Router,
    private launchDialogService: LaunchDialogService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getCurrentProduct();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
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
      if (this.purchaseNumber == ' ') this.reset();
      this.rmaNumber = '';
      this.error.rmaNumber = '';
    } else {
      this.rmaNumber = event.target.value;
      this.purchaseNumber = '';
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.error.rmaNumber = this.getTranslatedText(
          'guest-home.error.rmaDigitOnly'
        );
      } else {
        this.error.rmaNumber = '';
      }
    }
    this.stausName = order;
    this.checkStatusNumber = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
      REGULAR_PATTERN.alphaNumeric
    );
  }
  reset() {
    this.rmaNumber = '';
    this.purchaseNumber = '';
    this.showStatus = false;
    this.error.rmaNumber = '';
    this.checkStatusNumber = '';
    this.noDataFound = false;
    this.rmaStatus = false;
    this.orderStatus = false;
  }

  getCurrentProduct() {
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
  }
  orderRedirect(code, element) {
    this.orderTrackingService.emitOrderDetail.next(element);
    if (this.showWaygate && this.productLine) {
      this.router.navigate([`/${this.productLine}/my-orders`, code]);
    } else {
      this.router.navigate(['/order-details', code]);
    }
  }
  rmaRedirect(rmaNumber, element) {
    this.rmaTrackingService.emitRmaDetail.next(element);
    this.router.navigate(['/rma-details', rmaNumber]);
  }
  showData() {
    this.showSpinner = true;
    this.noDataFound = false;
    if (this.checkStatusNumber !== '' && this.error.rmaNumber === '') {
      this.landingPagesService
        .orderStatus(this.checkStatusNumber, this.currentUid, this.stausName)
        .subscribe(
          (resp: any) => {
            this.statusDetails = resp.orderData;
            if (resp.orderData) {
              this.orderStatus = true;
            }
            if (
              this.statusDetails === undefined ||
              this.statusDetails === null
            ) {
              this.showStatus = false;
              this.landingPagesService
                .rmaOrderStatus(
                  this.checkStatusNumber,
                  this.currentUid,
                  this.stausName
                )
                .subscribe((data: any) => {
                  this.statusDetails = data.rmaHeaderStatusDetails;
                  if (data.rmaHeaderStatusDetails.length > 0) {
                    this.rmaStatus = true;
                    this.showStatus = true;
                  } else {
                    this.showStatus = false;
                    this.noDataFound = true;
                  }
                  this.showSpinner = false;
                });
            } else {
              this.showStatus = true;
              this.showSpinner = false;
            }
          },
          (error) => {
            this.showSpinner = false;
          }
        );
    } else {
      this.showSpinner = false;
    }
  }
  trackorderstatus() {
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

  checkRMAProcessingStatus(rmaTracking) {
    if (
      rmaTracking?.rmaStatus === SAP_RMA_STATUS.PROCESSING &&
      rmaTracking?.rmaItemStatusDetails?.some(
        (checkStatus) =>
          checkStatus.rmaStatus ===
          SAP_RMA_AWAITING_PROCESSING_ORDER.AWAITINGPURCHASEORDER
      )
    ) {
      return true;
    }
    return false;
  }
}
