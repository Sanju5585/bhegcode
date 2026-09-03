import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '@spartacus/storefront';
import { SpinnerOverlayComponent } from './spinner-overlay.component';

@NgModule({
  declarations: [SpinnerOverlayComponent],
  imports: [CommonModule, SpinnerModule],
})
export class SpinnerOverlayModule {}
