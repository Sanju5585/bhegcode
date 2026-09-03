import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import {
  AllProductLine,
  ProductLineHomePageURL,
} from '../../../shared/enums/availableProductList.enum';

@Component({
  standalone: false,
  selector: 'app-choose-brand-list',
  templateUrl: './choose-brand-list.component.html',
  styleUrls: ['./choose-brand-list.component.scss'],
})
export class ChooseBrandListComponent {
  availableProductLines = [];
  productLine = AllProductLine;
  customerAct: CustomerAccount;

  @Output() brandSelected: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private custAccountService: CustomerAccountService
  ) {}

  ngOnInit() {
    this.custAccountService
      .getCurrentCustomerAccount()
      .subscribe((currentCustomerAccount) => {
        this.customerAct = currentCustomerAccount;
        this.availableProductLines =
          currentCustomerAccount?.visibleCategories ?? [];
      });
  }

  routeToRedirect(brand: string) {
    this.custAccountService.setProductLineForUser(brand);
    this.custAccountService.setProductLine(brand);
    this.router.navigate([ProductLineHomePageURL[brand]], { replaceUrl: true });
    this.brandSelected.emit(true);
  }
}
