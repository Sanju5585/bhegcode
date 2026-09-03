import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBubbleComponent } from './status-bubble.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [StatusBubbleComponent],
  imports: [CommonModule, MatTooltipModule],
  exports: [StatusBubbleComponent],
})
export class StatusBubbleModule {}
