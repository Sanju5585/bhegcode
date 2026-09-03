import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DefaultProductCode } from '../../../core/product-catalog/model/product-categories.model';

@Component({
  standalone: false,
  selector: 'app-waygate-breadcrumbs',
  templateUrl: './waygate-breadcrumbs.component.html',
  styleUrls: ['./waygate-breadcrumbs.component.scss'],
})
export class WaygateBreadcrumbsComponent implements OnInit, OnChanges {
  @Input()
  breadcrumbs: any[] = [];
  productLine: string;
  constructor(
    private customerAccService: CustomerAccountService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if (changes.breadcrumbs && this.breadcrumbs?.length > 0) {
      //this logic added if root default productcode ECOM_LVL0_00000000 comes in breadcrums then remove that object
      this.breadcrumbs = this.breadcrumbs.filter(
        (obj) => obj?.url?.indexOf(DefaultProductCode) == -1
      );
    }
  }
  waygatePage() {
    this.customerAccService.disableChangeAccount.next(false);
    this.router.navigate(['/', this.productLine]);
  }
}
