import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsService } from '@spartacus/core';
import { switchMap, take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { bannerContentSlot } from '../../../shared/products-constants';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
export interface SlideInterface {
  url: string;
  title: string;
}

@Component({
  standalone: false,
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.scss'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  slideIndex = 0;
  componentArraylist: any = [];
  slidesArr = [];
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
        this.slotPosition = bannerContentSlot[this.productLine];
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
                  this.slidesArr.push(slideRes);
                });
            });
          } else {
            this.iscontentAvailableFromSlot = false;
          }
        },
        (error) => {}
      );
  }

  ngOnDestroy() {}

  plusSlides(n) {
    this.slideIndex += n;
  }

  currentSlide(n) {
    this.slideIndex = n;
  }

  isInternalLink(url: string) {
    return !url?.startsWith('https://') && !url?.startsWith('https://');
  }

  handleExternalUrl(url: string) {
    window.open(url, '_blank');
  }
}
