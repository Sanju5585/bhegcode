import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuantityCounterComponent } from './quantity-counter.component';
import { ConfigModule, I18nModule } from '@spartacus/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, I18nModule],
  declarations: [QuantityCounterComponent],
  exports: [QuantityCounterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuantityCounterModule {}
