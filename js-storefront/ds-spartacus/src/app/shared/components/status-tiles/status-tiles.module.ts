import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusTilesComponent } from './status-tiles.component';
import { StatusCounterModule } from '../status-counter/status-counter.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [StatusTilesComponent],
  imports: [CommonModule, StatusCounterModule, MatTooltipModule],
  exports: [StatusTilesComponent],
})
export class StatusTilesModule {}
