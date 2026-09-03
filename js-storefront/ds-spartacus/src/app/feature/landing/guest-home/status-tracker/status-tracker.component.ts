import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { LandingPagesService } from '../../landing-pages.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
})
export class StatusTrackerComponent implements OnInit {
  orderNumber = '';
  purchaseNumber = '';
  customerNumber = '';
  guestErrorMessages: any;
  rmaStatus = false;
  purchaseOrderStatus = false;
  trackDetails: any;
  trackData = true;
  pageNavigate = false;
  error = {
    customerNumber: '',
    purchaseNumber: '',
    orderNumber: '',
  };
  trackStatusModel = {
    customerNumber: '',
    poNumber: '',
    rmaNumber: '',
    googleCaptcha: '',
  };
  showLoading: boolean = false;
  constructor(
    private landingPageService: LandingPagesService,
    private router: Router,
    private translate: TranslationService,
    private launchDialogService: LaunchDialogService,
    private gtmService: GoogleTagManagerService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  trackStatus() {
    this.showLoading = true;
    if (
      this.orderNumber === '' &&
      this.purchaseNumber === '' &&
      this.customerNumber === ''
    ) {
      this.showLoading = false;
      this.error.orderNumber = this.getTranslatedText(
        'guest-home.error.orderNumberError'
      );
      this.error.customerNumber = this.getTranslatedText(
        'guest-home.error.cstmrNumberError'
      );
      this.error.purchaseNumber = this.getTranslatedText(
        'guest-home.error.purchaseNumberError'
      );
    } else if (
      (this.orderNumber === '' || this.purchaseNumber === '') &&
      this.customerNumber === ''
    ) {
      this.showLoading = false;
      this.error.customerNumber = this.getTranslatedText(
        'guest-home.error.cstmrNumberError'
      );
    } else if (
      this.orderNumber === '' &&
      this.purchaseNumber === '' &&
      this.customerNumber !== ''
    ) {
      this.showLoading = false;
      this.error.orderNumber = this.getTranslatedText(
        'guest-home.error.orderNumberError'
      );
      this.error.purchaseNumber = this.getTranslatedText(
        'guest-home.error.purchaseNumberError'
      );
    } else {
      this.showLoading = false;
      this.error.orderNumber = this.error.orderNumber;
      this.error.customerNumber = this.error.customerNumber;
      this.error.purchaseNumber = this.error.purchaseNumber;
      this.trackStatusModel.customerNumber = this.customerNumber
        ? this.customerNumber
        : '';
      this.trackStatusModel.poNumber = this.purchaseNumber
        ? this.purchaseNumber
        : '';
      this.trackStatusModel.rmaNumber = this.orderNumber
        ? this.orderNumber
        : '';
      if (
        (this.orderNumber !== '' || this.purchaseNumber !== '') &&
        this.customerNumber !== ''
      ) {
        if (
          this.error.orderNumber === '' &&
          this.error.purchaseNumber === '' &&
          this.error.customerNumber === ''
        ) {
          /* GTM Snippet */
          this.showLoading = false;
          let poOrderNum = this.trackStatusModel?.poNumber
            ? this.trackStatusModel.poNumber
            : '';
          poOrderNum = this.trackStatusModel?.rmaNumber
            ? this.trackStatusModel.rmaNumber
            : poOrderNum;

          let queryNumberType = '';
          if (this.trackStatusModel?.poNumber) {
            queryNumberType = 'PO Number';
          } else if (this.trackStatusModel?.rmaNumber) {
            queryNumberType = 'Order/RMA Number';
          }

          grecaptcha.ready(() => {
            grecaptcha
              .execute(environment.siteKey, { action: '' })
              .then((token) => {
                this.trackStatusModel.googleCaptcha = token;
                this.getOrderStatus();
              });
          });

          this.gtmService.sendEvent({
            event: 'guestQuickOrderTracker',
            poOrderNumber: poOrderNum,
            queryType: queryNumberType,
          });

          /* GTM Snippet */
        }
      }
    }
  }

  getOrderStatus() {
    this.showLoading = true;
    this.landingPageService.quickOrderStatus(this.trackStatusModel).subscribe(
      (resp) => {
        this.showLoading = false;
        this.trackDetails = resp;
        if (Object.keys(this.trackDetails).length <= 0) {
          grecaptcha.ready(() => {
            grecaptcha
              .execute(environment.siteKey, { action: '' })
              .then((token) => {
                this.trackStatusModel.googleCaptcha = token;
                this.getRmaStatus();
              });
          });
        } else {
          this.trackData = true;
          this.pageNavigate = true;
          this.navigateToRma();
        }
      },
      (error) => {}
    );
  }

  getRmaStatus() {
    this.landingPageService.rmaStatusDetails(this.trackStatusModel).subscribe(
      (data) => {
        this.trackDetails = data;
        if (this.trackDetails.errorMsg) {
          this.trackData = false;
        } else {
          this.trackData = true;
          this.pageNavigate = true;
          this.navigateToRma();
        }
      },
      (error) => {}
    );
  }
  navigateToRma() {
    if (this.trackData && this.pageNavigate) {
      this.landingPageService.sendTrackData({
        customerNumber: this.customerNumber,
        orderNumber: this.orderNumber,
        purchaseNumber: this.purchaseNumber,
        rmaStatus: this.rmaStatus,
        purchaseOrderStatus: this.purchaseOrderStatus,
      });
      this.router.navigateByUrl('/quick-status');
    }
  }
  onChange(event, order) {
    if (order === 'purchaseNumber') {
      this.purchaseNumber = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
        REGULAR_PATTERN.alphaNumeric
      );
      this.orderNumber = '';
      this.error.orderNumber = '';
      this.error.purchaseNumber = '';
      this.purchaseOrderStatus = true;
      this.rmaStatus = false;
    } else if (order === 'customerNumber') {
      this.customerNumber = event.target.value;
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.error.customerNumber = this.getTranslatedText(
          'guest-home.error.cstmrDigitOnly'
        );
      } else {
        this.error.customerNumber = '';
      }
    } else {
      this.purchaseNumber = '';
      this.orderNumber = event.target.value;
      if (
        event.target.value.match(/^[0-9]+$/) === null &&
        event.target.value !== ''
      ) {
        this.purchaseNumber = '';
        this.error.orderNumber = this.getTranslatedText(
          'guest-home.error.rmaDigitOnly'
        );
      } else {
        this.purchaseNumber = '';
        this.error.orderNumber = '';
        this.error.purchaseNumber = '';
        this.rmaStatus = true;
        this.purchaseOrderStatus = false;
      }
    }
  }
  reset() {
    this.orderNumber = '';
    this.purchaseNumber = '';
    this.customerNumber = '';
    this.error.orderNumber = '';
    this.error.customerNumber = '';
    this.error.purchaseNumber = '';
    this.trackData = true;
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
}
