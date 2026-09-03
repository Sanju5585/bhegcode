import { Component, Input, OnInit } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { RmaTrackingService } from '../../rma-tracking.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { environment } from '../../../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-share-rma-dilog',
  templateUrl: './share-rma-dilog.component.html',
  styleUrls: ['./share-rma-dilog.component.scss'],
})
export class ShareRmaDilogComponent implements OnInit {
  public email = '';
  orderDetail: any;
  customerNumber: any;
  emailList: any = [];
  emailError: any;
  @Input() userType;
  showLoading: boolean = false;

  constructor(
    private launchDialogService: LaunchDialogService,
    private rmaTrackingService: RmaTrackingService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService
  ) {}

  ngOnInit(): void {
    this.rmaTrackingService.emitRmaDetail.subscribe((res) => {
      this.orderDetail = res;
      // let custDetail = this.orderDetail.soldTo.split(' ')
      this.customerNumber = res.customerAcct;
    });
    this.launchDialogService.data$.subscribe((data) => {
      this.userType = data?.userType;
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onChange(e) {
    const emailRegx =
      '^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}(s*(, )s*|s*$))+$';
    if (e.target.value && !e.target.value.match(emailRegx)) {
      this.emailError = this.getTranslatedText('order-tracking.emailError');
    } else {
      this.emailError = '';
      this.email = e.target.value;
    }
  }

  cancel() {
    this.launchDialogService.closeDialog('close');
  }
  onSubmit() {
    if (this.email == '') {
      this.emailError = this.getTranslatedText('order-tracking.emailRequired');
    }
    if (this.emailError == '') {
      if (this.userType === 'current') {
        this.shareRmaDetails('');
      } else {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(environment.siteKey, { action: '' })
            .then((token) => {
              this.shareRmaDetails(token);
            });
        });
      }
    }
  }

  shareRmaDetails(token) {
    this.showLoading = true;
    this.emailList = this.email.toLowerCase().split(',');
    this.rmaTrackingService
      .shareRmaDetail(
        this.orderDetail.rmaNumber,
        this.customerNumber,
        this.emailList,
        token
      )
      .subscribe((res) => {
        this.showLoading = false;
        this.launchDialogService.closeDialog('close');
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.successMsg'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
      });
  }
}
