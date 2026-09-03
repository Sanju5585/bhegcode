import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Subscription } from 'rxjs';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import moment from 'moment';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { saveAs } from 'file-saver';
import { QuoteCartService } from '../quote-cart/quote-cart.service';

@Component({
  selector: 'app-quote-confirmation',
  standalone: false,
  templateUrl: './quote-confirmation.component.html',
  styleUrl: './quote-confirmation.component.scss',
})
export class QuoteConfirmationComponent implements OnInit, OnDestroy {
  breadcrumbs: { name: string; url: string }[] = [];
  code: string;
  email: string;
  subscriptions: Subscription[] = [];
  productLine: AllProductLine;

  constructor(
    private route: ActivatedRoute,
    private translationService: TranslationService,
    private userAccountFacade: UserAccountFacade,
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    private quoteCartService : QuoteCartService,
    protected globalMessageService: GlobalMessageService,
  ) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.translationService
        .translate('quoteCart.quote-confirmation')
        .subscribe((res: string) => {
          this.breadcrumbs = [
            {
              name: res,
              url: `/waygate/quote-confirmation/${this.code}`,
            },
          ];
        })
    );

    this.subscriptions.push(
      this.customerAccService
        .getProductLine()
        .subscribe((productLine: AllProductLine) => {
          this.productLine = productLine;
        })
    );
    this.subscriptions.push(
      this.userAccountFacade
        .get()
        .subscribe((user: any) => (this.email = user.email))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe);
  }
  downloadQuote(){
    this.quoteCartService.downloadDocument(this.code,this.email).subscribe(
      (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = moment(new Date()).format('D-MMM-yyyy');
          let fileName = 'QuoteDetail_' + this.code + '_'+ currentDate;
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File([blob], fileName + '.pdf', {
            type: 'application/pdf',
          });
          saveAs(file);
        } else {
          this.displayDownloadError();
        }
      },
      (error) => {
        this.displayDownloadError();
      }
    );
  }
  displayDownloadError() {
    this.globalMessageService.add(
      this.getTranslatedText('quoteCart.downloadError'),

      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
