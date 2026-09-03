import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { RmaService } from '../../rma-services/rma.service';
import { HazardousForm } from '../hazard-info.model';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'ds-hazard-info-container',
  templateUrl: './hazard-info-container.component.html',
  styleUrls: ['./hazard-info-container.component.scss'],
})
export class HazardInfoContainerComponent implements OnInit {
  readonly PRODUCT_DISPLAY_THRESHOLD = 8;
  showNumber = this.PRODUCT_DISPLAY_THRESHOLD;
  index = 0;
  constructor(
    private rmaService: RmaService,
    private breadcrumbService: BreadcrumbService,
    private translation: TranslationService
  ) {}
  // products = [];

  hazardInfo$: Observable<any>;

  ngOnInit(): void {
    this.hazardInfo$ = this.rmaService.getHazardInfo();
    this.hazardInfo$.subscribe((res: HazardousForm) => {
      if (res.declarationA) {
        this.index = 0;
      } else {
        this.index = 1;
      }

      if (res?.partList?.length < this.PRODUCT_DISPLAY_THRESHOLD) {
        this.showNumber = res.partList.length;
      }
    });
    this.breadcrumbService.setBreadCrumbs([]);
    this.translation
      .translate('hazardInfo.hazardousExposure')
      .subscribe((res: string) => {
        this.breadcrumbService.setBreadcrumbTitle(res);
      });
  }

  getMaxViewCount(products) {
    if (products?.length > this.showNumber) {
      return this.showNumber;
    }
    return products?.length;
  }
}
