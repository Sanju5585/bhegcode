import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'cx-added-to-cart-dialog',
  templateUrl: './added-to-return-cart-dialog.html',
  styleUrls: ['./added-to-return-cart-dialog.scss'],
})
export class AddedToReturnCartDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;
  product: any;
  modalIsOpen = false;
  loaded$: Observable<boolean>;

  productLine: string;
  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  constructor(
    protected launchDialogService: LaunchDialogService,
    private router: Router,
    private custAccService: CustomerAccountService,
  ) {}

  ngOnInit() {
    
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.launchDialogService.data$.subscribe((data) => {
      this.product = data.product;
      this.loaded$ = data.loaded$;
    });
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }

  redirectToCart() {
    
    this.router.navigate(['/rma/cart']);
    this.dismissModal('redirected');
  }
}
