import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../../cart';
import { Router } from '@angular/router';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { CartType } from '../../../../../shared/models/cartType.models';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { UserRoleService } from '../../../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'ds-quote-cart-summary',
  templateUrl: './quote-cart-summary.component.html',
  styleUrl: './quote-cart-summary.component.scss',
})
export class QuoteCartSummaryComponent {
  @Input()
  cart$: Observable<any>;

  entries: Item[];
  @Input() quoteType: boolean;
  @Input()
  cart;

  @Input()
  userType: string;

  @Output()
  scrollToEntry: EventEmitter<any> = new EventEmitter();

  @Input() items: any[];
  @Input() profileType: string;
  checkoutNativationPath: string;
  agreeTerm: boolean = false;
  cartType = CartType;
  isEndUserType: boolean;
  restrictedSalesArea: boolean = true;
  currentUserAccess$ = this.userRoleService.currentUserRole
  constructor(
    private router: Router,
    private userRoleService: UserRoleService,
     private cdRef: ChangeDetectorRef,
    private customerAccService: CustomerAccountService
  ) {}

  ngOnInit() {
    this.isEndUserType = this.profileType !== CustomerType.Type1;

    this.customerAccService
      .getProductLine()
      .subscribe((productLine: AllProductLine) => {
        this.checkoutNativationPath = `/${productLine}/checkout`;
      });

    this.userRoleService.getCurrentB2BSalesArea(this.userType).subscribe((res) => {
      if (res === false) {
        this.restrictedSalesArea = false;
      } else {
        this.restrictedSalesArea = true;
      }
      this.cdRef.detectChanges();
    })
  }

  proceedToCheckout(): void {
    this.router.navigate([this.checkoutNativationPath]);
  }
}
