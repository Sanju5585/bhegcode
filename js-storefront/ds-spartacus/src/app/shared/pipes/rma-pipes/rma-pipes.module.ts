import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmaProductPipe } from './rma-product.pipe';
import { RmaAccessoryPipe } from './rma-accessory.pipe';

@NgModule({
  declarations: [RmaProductPipe, RmaAccessoryPipe],
  imports: [CommonModule],
  exports: [RmaProductPipe, RmaAccessoryPipe],
})
export class RmaPipesModule {}
