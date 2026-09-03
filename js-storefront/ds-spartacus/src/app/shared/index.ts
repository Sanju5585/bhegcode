import { NgModule } from '@angular/core';
import { I18Directive } from './directives/i18.directive';
import { CounterDirective } from './directives/counter.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { IntegerPipe } from './pipes/integer.pipe';
import { CustomerFilter } from './pipes/filter.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { DragDropDirective } from './directives/drag-drop.directive';
import { I18Pipe } from './pipes/i18.pipe';
import { CustomNumber } from './pipes/customNumberPipe/customNumberPipe';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    I18Directive,
    CounterDirective,
    TooltipDirective,
    IntegerPipe,
    CustomerFilter,
    CustomNumber,
    TrimPipe,
    DragDropDirective,
    I18Pipe,
  ],
  providers: [DecimalPipe, CurrencyPipe],
  exports: [
    I18Directive,
    CounterDirective,
    TooltipDirective,
    IntegerPipe,
    CustomerFilter,
    CustomNumber,
    TrimPipe,
    DragDropDirective,
    I18Pipe,
  ],
})
export class SharedModule {}
