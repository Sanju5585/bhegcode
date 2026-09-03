import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'ds-cart-delete-dilog',
  templateUrl: './cart-delete-dilog.component.html',
  styleUrls: ['./cart-delete-dilog.component.scss'],
})
export class CartDeleteDilogComponent implements OnInit {
  @Input()
  cart: any;

  @Input()
  userType: any;

  @Input()
  guestQuote: any;

  @Input()
  cartName = 'Shopping';

  deleteCart;
  reason: any;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.cart = data?.cart;
      this.userType = data?.userType;
      this.cartName = data?.cartId;
      this.guestQuote = data?.guestQuote;
    });
    if (this.cart) {
      this.deleteCart = false;
    } else {
      this.deleteCart = true;
    }
  }

  closeModal(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
  }
}
