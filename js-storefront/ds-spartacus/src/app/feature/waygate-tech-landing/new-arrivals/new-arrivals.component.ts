import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsService } from '@spartacus/core';
import { take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { NewArrivalSlot } from '../../../shared/products-constants';

@Component({
  standalone: false,
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit, OnDestroy {
  componentArraylist: any = [];
  NewArrivalList = [];
  baseSiteURL = environment.occBaseUrl;
  productLine: string;
  slotPosition: string;
  iscontentAvailableFromSlot = false;
  allProductLine = AllProductLine;
  constructor(
    private router: Router,
    private cmsService: CmsService,
    private custAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.custAccService
      .getProductLine()
      .pipe(take(1))
      .subscribe((productLine) => {
        this.productLine = productLine;
        this.slotPosition = NewArrivalSlot[this.productLine];
        if (this.slotPosition) {
          this.getContentFromSlots();
        }
      });
  }

  getContentFromSlots() {
    this.cmsService
      .getContentSlot(this.slotPosition)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.componentArraylist = data?.components ?? [];
          if (this.componentArraylist.length > 0) {
            this.iscontentAvailableFromSlot = true;
            this.componentArraylist.forEach((component) => {
              this.cmsService
                .getComponentData(component?.uid)
                .subscribe((slideRes: any) => {
                  const contentArr = slideRes?.content?.split('<br/>');
                  const [partnumber, description, price] = contentArr;
                  const item = { ...slideRes, partnumber, description, price };
                  this.NewArrivalList.push(item);
                });
            });
          } else {
            this.iscontentAvailableFromSlot = false;
          }
        },
        (error) => {}
      );
  }

  isInternalLink(url: string) {
    return !url.startsWith('https://') && !url.startsWith('https://');
  }

  knowMore() {}
  ngOnDestroy(): void {}
}
