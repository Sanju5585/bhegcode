import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { TranslationService } from '@spartacus/core';

@Component({
  standalone: false,
  selector: 'app-waygate-manage-account',
  templateUrl: './waygate-manage-account.component.html',
  styleUrls: ['./waygate-manage-account.component.scss'],
})
export class WaygateManageAccountComponent implements OnInit {
  breadcrumbs = [];
  state: any;
  productLine: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerAccService: CustomerAccountService,
    private translate: TranslationService
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.state = queryParams?.state || 'profile';
    });
  }
  changeState = (state) => {
    this.setRoute({ state });
  };
  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute,
    });
  }

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.translate
      .translate('customer-account.manageAccount')
      .subscribe((res: string) => {
        this.breadcrumbs = [
          {
            name: res,
            url: `/${this.productLine}/manage-account`,
          },
        ];
      })
    });
  }
}
