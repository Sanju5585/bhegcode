import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GuestQuoteService } from '../guest-quote.service';
@Component({
  standalone: false,
  selector: 'app-guest-quote-popup',
  templateUrl: './guest-quote-popup.component.html',
  styleUrls: ['./guest-quote-popup.component.scss'],
})
export class GuestQuotePopupComponent implements OnInit {
  quoteDetailsSubscription: Subscription;
  quoteDetails = {};
  loadSpinner = false;
  constructor(
    private launchDialogService: LaunchDialogService,
    private guestQuoteservice: GuestQuoteService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.quoteDetailsSubscription =
      this.guestQuoteservice.getQuoteCartDetails.subscribe((quoteDetails) => {
        this.quoteDetails = quoteDetails['code'];
      });
  }
  //on click of no btn or cross icon
  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
  //on click of Yes btn
  restoreCart() {
    this.loadSpinner = true;
    this.guestQuoteservice.cancelQuoteId(this.quoteDetails).subscribe(
      (code) => {
        this.loadSpinner = false;
        this.closeModal();
        this.guestQuoteservice.setIsQuoteEnable(false);
        this.router.navigate(['quote/cart']);
      },
      (error) => {}
    );
  }
}
