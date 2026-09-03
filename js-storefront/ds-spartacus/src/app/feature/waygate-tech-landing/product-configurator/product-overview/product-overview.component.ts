import { Component } from '@angular/core';
import {
  ConfiguratorPriceSummaryComponent,
  ConfiguratorProductTitleComponent,
} from '@spartacus/product-configurator/rulebased';

@Component({
  standalone: false,
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent extends ConfiguratorPriceSummaryComponent {}
