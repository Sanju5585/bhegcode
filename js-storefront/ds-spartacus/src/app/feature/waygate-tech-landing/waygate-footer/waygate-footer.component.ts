import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  productLineCode,
  servicesList,
  industriesList,
  usefulLinks,
} from './../../../shared/products-constants';
import { AuthService } from '@spartacus/core';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

declare const Optanon: any;
@Component({
  standalone: false,
  selector: 'app-waygate-footer',
  templateUrl: './waygate-footer.component.html',
  styleUrls: ['./waygate-footer.component.scss'],
})
export class WaygateFooterComponent implements OnInit {
  productLine: string;
  productCategories$: Observable<any>;
  // salesAreas = ['ECOM_LVL1_00000001'];
  productLineCode: string[];
  servicesList: any[];
  industriesList: any[];
  supportList: any[];
  copyRightYear:number;
  supportListGuest: any[];
  usefulLinksList: any[];
  @Input() isChooseBrandPage: boolean = false;
  contactUsUrl: string;
  isIndustriesVisible: boolean = true;
  productNotFoundList: any;
  isServicesVisible: boolean = true;
  mobProductListToggle = false;
  mobServiceToggle = false;
  mobIndustriesToggle = false;
  mobUSefulLinksToggle = false;
  allProductLine = AllProductLine;
  constructor(
    private productCategoriesService: ProductCategoriesService,
    private custAccService: CustomerAccountService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.isIndustriesVisible =
        this.productLine === AllProductLine.reuterStokes ? false : true;
      this.isServicesVisible =
        this.productLine === AllProductLine.druck ? false : true;
      this.productLineCode = productLineCode[this.productLine]?.split(' ');
      this.servicesList = servicesList[this.productLine];
      this.industriesList = industriesList[this.productLine];
      this.usefulLinksList = usefulLinks[this.productLine];
    });
    this.yearValue();

    this.contactUsUrl = `/${this.productLine}/contactus`;

    this.productCategories$ =
      this.productCategoriesService.fetchDefaultProductCategories();
  }

  yearValue() {
    this.copyRightYear = new Date().getFullYear();
  }

  openCookies() {
    Optanon.ToggleInfoDisplay();
  }
  openTerms() {
    (window as any).open(
      '../../../assets/pdf/DSe-CommercePortalTermsofUse.pdf',
      '_blank'
    );
  }

  constructCategoryUrl(category) {
    return `/${this.productLine}/categories/${category.code}/${category.name}`;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
