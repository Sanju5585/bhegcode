import { Component ,SecurityContext } from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { ApiService } from '../../../core/http/api.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  WindowRef,
} from '@spartacus/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ActivatedRoute } from '@angular/router';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-waygate-dummy-product',
  standalone: false,
  templateUrl: './waygate-dummy-product.component.html',
  styleUrl: './waygate-dummy-product.component.scss',
})
export class WaygateDummyProductComponent {
  productName: string;
  productLine: string;
  logoPath: string;
  productCode: any = '';
  productDescription: string = '';
  imgSrc: String = '';
  constructor(
    protected activeCartFacade: ActiveCartFacade,
    private apiService: ApiService,
    protected winRef: WindowRef,
    private customerAccService: CustomerAccountService,
    private custAccService: CustomerAccountService,
    private globalMessageService: GlobalMessageService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.productName = this.route.snapshot.paramMap.get('dummyCode');
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.displaySiteLogo();
    });
  }
  displaySiteLogo() {
    if (this.productLine == AllProductLine.waygate) {
      this.logoPath = '../../../../../assets/img/waygateTechLogo.svg';
    } else if (this.productLine == AllProductLine.bently) {
      this.logoPath = '../../../../../assets/img/bannernav4.png';
    } else if (this.productLine == AllProductLine.panametrics) {
      this.logoPath = '../../../../../assets/img/Pana_brand_logo.png';
    } else if (this.productLine == AllProductLine.druck) {
      this.logoPath = '../../../../../assets/img/druck_homepage_logo.png';
    } else {
      this.logoPath = '../../../../../assets/img/bh-logo.svg';
    }
  }
  addtocartdummy() {
    if (this.productCode.length != 0) {
      this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
        let urlParams = [
          'users',
          'current',
          'carts',
          cartId,
          'entries',
          'placeHolder',
        ];
        let url = this.apiService.constructUrl(urlParams);
        let payload = {
          quantity: '1',
          product: {
            code: 'PART_PLACEHOLDER',
          },
          dummyPartNumber: this.sanitizer.sanitize( SecurityContext.HTML,this.productCode),
          dummyProductDescription: this.sanitizer.sanitize( SecurityContext.HTML,this.productDescription),
        };
        this.apiService.postData(url, payload).subscribe((res) => {
          this.customerAccService.getProductLine().subscribe((productLine) => {
            this.winRef.location.href = `/${productLine}/cart`;
          });
        });
      });
    } else {
      this.globalMessageService.add(
        'Please fill the mandatory fields to add to cart',
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
      window.scroll(0, 0);
    }
  }
}
