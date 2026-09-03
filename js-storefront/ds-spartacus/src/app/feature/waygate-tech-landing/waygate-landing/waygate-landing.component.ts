import { Component, OnInit } from '@angular/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
@Component({
  standalone: false,
  selector: 'app-waygate-landing',
  templateUrl: './waygate-landing.component.html',
  styleUrls: ['./waygate-landing.component.scss'],
})
export class WaygateLandingComponent implements OnInit {
  productLine: string;
  allProductLine = AllProductLine;
  
  constructor(private customerAccService: CustomerAccountService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }
}
