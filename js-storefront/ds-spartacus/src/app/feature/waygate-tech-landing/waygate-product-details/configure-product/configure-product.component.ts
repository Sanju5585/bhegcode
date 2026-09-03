import {
  ChangeDetectionStrategy,
  Input,
  Component,
  Optional,
} from '@angular/core';
import { Product } from '@spartacus/core';
import {
  CurrentProductService,
  ProductListItemContext,
} from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonConfigurator } from '../../../../core/product-configurator/common-configurator.model';
import { ConfiguratorProductScope } from '../../../../core/product-configurator/configurator-product-scope';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'cx-configure-product',
  templateUrl: './configure-product.component.html',
  styleUrls: ['./configure-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureProductComponent {
  @Input() productcode: string;
  nonConfigurable: Product = { configurable: true };
  product$: Observable<Product> = (this.productListItemContext
    ? this.productListItemContext.product$
    : this.currentProductService
      ? this.currentProductService.getProduct(
          ConfiguratorProductScope.CONFIGURATOR
        )
      : of(null)
  ).pipe(
    //needed because also currentProductService might return null
    map((product) => (product ? product : this.nonConfigurable))
  );

  ownerTypeProduct: CommonConfigurator.OwnerType =
    CommonConfigurator.OwnerType.PRODUCT;

  constructor(
    @Optional() protected productListItemContext: ProductListItemContext, // when on PLP
    @Optional() protected currentProductService: CurrentProductService,
    private route: ActivatedRoute,
    private router: Router // when on PDP
  ) {}

  ngOnInit() {}
  navigateTo() {
    this.router.navigate([
      '/configure/vc/product/entityKey/',
      this.productcode,
    ]);
  }
}
