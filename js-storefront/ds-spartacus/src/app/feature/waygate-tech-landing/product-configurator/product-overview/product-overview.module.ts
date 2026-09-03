import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview.component';
import { CmsConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [ProductOverviewComponent],
  imports: [CommonModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfiguratorPriceSummary: {
          component: ProductOverviewComponent,
        },
      },
    }),
  ],
})
export class ProductOverviewModule {}
