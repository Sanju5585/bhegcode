import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, KeyboardFocusModule } from '@spartacus/storefront';
import { FacetComponent } from './facet.component';
import { ProductTypeFacetComponent } from './product-type-facet/product-type-facet';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    IconModule,
    KeyboardFocusModule,
  ],
  declarations: [FacetComponent, ProductTypeFacetComponent],
  exports: [FacetComponent, ProductTypeFacetComponent],
})
export class FacetModule {}
