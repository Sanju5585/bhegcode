import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { RmaTrackingService } from '../../rma-tracking/rma-tracking.service';
import { RmaStatusModel } from '../rma-status.model';
import { RmaStatusService } from '../rma-status.service';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { LandingPagesService } from '../../../landing/landing-pages.service';
import { environment } from '../../../../../environments/environment';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import {
  SAP_RMA_AWAITING_PROCESSING_ORDER,
  SAP_RMA_STATUS,
} from '../../../../shared/models/status/rma-status.model';

@Component({
  standalone: false,
  selector: 'app-rma-status',
  templateUrl: './rma-status.component.html',
  styleUrls: ['./rma-status.component.scss'],
})
export class RmaStatusComponent implements OnInit {
  trackData = false;
  orderNumber = '';
  rmaNumber = '';
  cstmrNumber = '';
  rmaStatusModel: RmaStatusModel;
  noRecordFound = false;
  showData = false;
  loadingTrackFlag = true;
  trackDetails: any;
  rmaStatus = false;
  orderStatus = false;
  purchaseOrderStatus = false;
  error = {
    orderNumber: '',
    rmaNumber: '',
    cstmrNumber: '',
  };
  constructor(
    private rmaServiceStatus: RmaStatusService,
    private landingPageService: LandingPagesService,
    public rmaTrackingService: RmaTrackingService,
    public router: Router,
    private translate: TranslationService,
    private launchDialogService: LaunchDialogService,
    private orderTrackingService: OrderTrackingService,
    private breadCrumbService: BreadcrumbService,
    private gtmService: GoogleTagManagerService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('rma-tracking.statusTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.rmaStatusModel = new RmaStatusModel();
    this.getTrackSummary();
    this.reset();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  trackStatus() {
    this.orderNumber = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.orderNumber),
      REGULAR_PATTERN.alphaNumeric
    );
    this.trackData = false;
    if (
      (this.orderNumber === '' &&
        this.cstmrNumber === '' &&
        this.rmaNumber === '') ||
      (this.orderNumber === undefined &&
        this.cstmrNumber === undefined &&
        this.rmaNumber === undefined)
    ) {
      this.trackData = false;
      this.error.orderNumber = this.getTranslatedText(
        'rma-tracking.error.orderNumberError'
      );
      this.error.rmaNumber = this.getTranslatedText(
        'rma-tracking.error.rmaNumberError'
      );
      this.error.cstmrNumber = this.getTranslatedText(
        'rma-tracking.error.cstmrNumberError'
      );
    } else if (
      (this.orderNumber !== '' || this.rmaNumber !== '') &&
      this.cstmrNumber === ''
    ) {
      this.error.cstmrNumber = this.getTranslatedText(
        'rma-tracking.error.cstmrNumberError'
      );
    } else if (
      this.orderNumber === '' &&
      this.rmaNumber === '' &&
      this.cstmrNumber !== ''
    ) {
      this.error.rmaNumber = this.getTranslatedText(
        'rma-tracking.error.rmaNumberError'
      );
      this.error.orderNumber = this.getTranslatedText(
        'rma-tracking.error.orderNumberError'
      );
    } else {
      this.trackData = false;
      this.error.orderNumber = this.error.orderNumber;
      this.error.rmaNumber = this.error.rmaNumber;
      this.error.cstmrNumber = this.error.cstmrNumber;
      this.rmaStatusModel.rmaNumber = this.rmaNumber ? this.rmaNumber : '';
      this.rmaStatusModel.customerNumber = this.cstmrNumber
        ? this.cstmrNumber
        : '';
      this.rmaStatusModel.poNumber = this.orderNumber ? this.orderNumber : '';
    }
    if (
      (this.orderNumber !== '' || this.rmaNumber !== '') &&
      this.cstmrNumber !== ''
    ) {
      if (
        this.error.orderNumber === '' &&
        this.error.rmaNumber === '' &&
        this.error.cstmrNumber === ''
      ) {
        this.loadingTrackFlag = false;
        /* GTM Snippet */
        let poOrderNum = this.rmaStatusModel?.poNumber
          ? this.rmaStatusModel.poNumber
          : '';
        poOrderNum = this.rmaStatusModel?.rmaNumber
          ? this.rmaStatusModel.rmaNumber
          : poOrderNum;

        let queryNumberType = '';
        if (this.rmaStatusModel?.poNumber) {
          queryNumberType = 'PO Number';
        } else if (this.rmaStatusModel?.rmaNumber) {
          queryNumberType = 'Order/RMA Number';
        }
        this.gtmService.sendEvent({
          event: 'guestQuickOrderTracker',
          poOrderNumber: poOrderNum,
          queryType: queryNumberType,
        });
        /* GTM Snippet */
        grecaptcha.ready(() => {
          grecaptcha
            .execute(environment.siteKey, { action: '' })
            .then((token) => {
              this.rmaStatusModel.googleCaptcha = token;
              this.getOrderStatus();
            });
        });
      }
    }
  }

  getOrderStatus() {
    this.rmaServiceStatus.quickOrderStatus(this.rmaStatusModel).subscribe(
      (resp) => {
        this.loadingTrackFlag = true;
        this.rmaStatus = false;
        this.trackDetails = resp;
        if (Object.keys(this.trackDetails).length <= 0) {
          this.loadingTrackFlag = false;
          grecaptcha.ready(() => {
            grecaptcha
              .execute(environment.siteKey, { action: '' })
              .then((token) => {
                this.rmaStatusModel.googleCaptcha = token;
                this.getRmaStatus();
              });
          });
        } else {
          this.orderStatus = true;
          this.noRecordFound = true;
          this.showData = false;
          this.trackDetails = resp;
          if (Object.keys(this.trackDetails).length > 0) {
            this.trackData = true;
          } else {
            this.trackData = false;
          }
        }
      },
      (error) => {}
    );
  }

  getRmaStatus() {
    this.rmaServiceStatus.rmaStatusDetails(this.rmaStatusModel).subscribe(
      (data) => {
        this.loadingTrackFlag = true;
        this.trackDetails = data;
        this.rmaStatus = true;
        if (
          (this.trackDetails.errorMsg &&
            this.trackDetails.errorMsg !== undefined) ||
          this.trackDetails === null
        ) {
          this.noRecordFound = false;
          this.showData = true;
          this.trackData = true;
        } else {
          this.orderStatus = false;
          this.noRecordFound = true;
          this.showData = false;
          if (Object.keys(this.trackDetails).length > 0) {
            this.trackData = true;
          } else {
            this.trackData = false;
          }
        }
      },
      (error) => {}
    );
  }

  selectRma() {
    this.rmaTrackingService.emitRmaDetail.next(this.trackDetails);
    if (this.orderStatus) {
      this.orderTrackingService.emitOrderDetail.next(
        this.trackDetails.orderData[0]
      );
      this.orderTrackingService.emitGuestOrderDetail.next('true');
      this.router.navigate([
        'quick-status/order',
        this.trackDetails.orderData[0]?.code,
      ]);
    } else {
      this.router.navigate(['quick-status/rma', this.trackDetails?.rmaNumber]);
    }
  }

  onChange(event, order) {
    if (order === 'orderNumber') {
      this.orderNumber = testRegex(
        event.target.value,
        REGULAR_PATTERN.alphaNumeric
      );
      this.rmaNumber = '';
      this.error.rmaNumber = '';
      this.error.orderNumber = '';
      this.purchaseOrderStatus = true;
      // this.rmaStatus = false;
    } else if (order === 'rmaNumber') {
      this.rmaNumber = event.target.value;
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.error.rmaNumber = this.getTranslatedText(
          'rma-tracking.error.rmaDigitOnly'
        );
        this.orderNumber = '';
      } else {
        this.orderNumber = '';
        this.error.orderNumber = '';
        this.error.rmaNumber = '';
        // this.rmaStatus = true;
        this.purchaseOrderStatus = false;
      }
    } else {
      this.cstmrNumber = event.target.value;
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.error.cstmrNumber = this.getTranslatedText(
          'rma-tracking.error.cstmrDigitOnly'
        );
      } else {
        this.error.cstmrNumber = '';
      }
    }
  }
  reset() {
    this.trackData = false;
    this.orderNumber = '';
    this.rmaNumber = '';
    this.cstmrNumber = '';
    this.error.orderNumber = '';
    this.error.rmaNumber = '';
    this.error.cstmrNumber = '';
    this.noRecordFound = false;
  }

  getTrackSummary() {
    this.landingPageService.getTrackData().subscribe(
      (data) => {
        this.orderNumber = data?.purchaseNumber;
        this.rmaNumber = data?.orderNumber;
        this.cstmrNumber = data?.customerNumber;
        this.rmaStatus = data?.rmaStatus;
        this.purchaseOrderStatus = data?.purchaseOrderStatus;
        this.trackStatus();
      },
      (error) => {}
    );
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
