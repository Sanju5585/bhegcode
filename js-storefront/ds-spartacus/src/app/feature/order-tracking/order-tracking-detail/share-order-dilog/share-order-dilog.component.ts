import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { OrderTrackingService } from '../../order-tracking.service';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-share-order-dilog',
  templateUrl: './share-order-dilog.component.html',
  styleUrls: ['./share-order-dilog.component.scss'],
})
export class ShareOrderDilogComponent implements OnInit {
  public email = '';
  orderDetail: any;
  customerNumber: any;
  emailList: any = [];
  emailError: string;
  @Input() userType;
  showLoading: boolean = false;

  constructor(
    private launchDialogService: LaunchDialogService,
    private orderTrackingService: OrderTrackingService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService
  ) {}

  ngOnInit(): void {
    this.orderTrackingService.emitOrderDetail.subscribe((res) => {
      this.orderDetail = res;
      let custDetail = this.orderDetail.soldTo.split('-');
      this.customerNumber = custDetail[custDetail.length - 1].trim(' ');
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
  cancel() {
    this.launchDialogService.closeDialog('cancel');
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
  onSubmit() {
    if (this.email == '') {
      this.emailError = this.getTranslatedText('order-tracking.emailRequired');
    }
    if (this.emailError == '') {
      if (this.userType === 'current') {
        this.shareOrderDetails('');
      } else {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(environment.siteKey, { action: '' })
            .then((token) => {
              this.shareOrderDetails(token);
            });
        });
      }
    }
  }
  shareOrderDetails(token) {
    this.showLoading = true;
    this.emailList = this.email.toLowerCase().split(',');
    this.orderTrackingService
      .shareRmaDetail(
        this.orderDetail.code,
        this.customerNumber,
        this.emailList,
        token
      )
      .subscribe((res) => {
        this.showLoading = false;
        this.launchDialogService.closeDialog('submit');
        this.globalMessageService.add(
          this.getTranslatedText('order-tracking.successMsg'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
      });
  }
}
