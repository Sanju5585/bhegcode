import { Component, OnInit } from '@angular/core';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { Router } from '@angular/router';
import { CmsService } from '@spartacus/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { AuthService } from '@spartacus/core';
import { take } from 'rxjs/operators';
import { quickLinks } from './quick-link-constants';

@Component({
  standalone: false,
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss'],
})
export class QuickLinkComponent implements OnInit {
  menuItems: any[];
  productLine: string;
  allProductLine = AllProductLine;
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private cmsService: CmsService,
    private custAccService: CustomerAccountService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService
      .isUserLoggedIn()
      .pipe(take(1))
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        if (this.isLoggedIn) {
          this.custAccService
            .getProductLine()
            .pipe(take(1))
            .subscribe((productLine) => {
              this.productLine = productLine;
              this.menuItems = quickLinks[`${productLine}`];
              if (this.productLine === AllProductLine.bently) {
                this.menuItems.forEach((link) => {
                  if (
                    link.name === 'waygate.quick-links.calibrationCertificate'
                  ) {
                    link.name = 'waygate.quick-links.quickOrder';
                    link.iconImg =
                      '../../../../assets/img/cordant-quick-order.svg';
                  }
                });
              }
            });
        }
      });
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
