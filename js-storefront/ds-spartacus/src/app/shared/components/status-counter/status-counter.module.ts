import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCounterDirective } from './status-counter.directive';

@NgModule({
  declarations: [StatusCounterDirective],
  imports: [CommonModule],
  exports: [StatusCounterDirective],
})
export class StatusCounterModule {}
