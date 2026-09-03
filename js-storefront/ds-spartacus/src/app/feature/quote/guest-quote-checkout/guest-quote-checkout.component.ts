import { Component, Input, OnInit } from '@angular/core';
import { GuestQuoteService } from '../guest-quote.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
@Component({
  standalone: false,
  selector: 'app-guest-quote-checkout',
  templateUrl: './guest-quote-checkout.component.html',
  styleUrls: ['./guest-quote-checkout.component.scss'],
})
export class GuestQuoteCheckoutComponent implements OnInit {
  quoteDetailsSubscription: Subscription;
  quoteId: string = '';
  cartID: string = '';
  constructor(
    private quoteService: GuestQuoteService,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService,
    private router: Router
  ) {}
  index = 0;

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('quotecheckout.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.quoteDetailsSubscription =
      this.quoteService.getQuoteCartDetails.subscribe((quoteDetails) => {
        this.quoteId = quoteDetails['code'];
        this.cartID = quoteDetails['cartCode'];
      });
  }
  continueshopping() {
    this.router.navigate(['/homepage']);
  }
}
