import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomQuantityCounterComponent } from './custom-quantity-counter.component';

@NgModule({
  declarations: [CustomQuantityCounterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CustomQuantityCounterComponent],
})
export class CustomQuantityCounterModule {}
