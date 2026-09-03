import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EquipmentsDetailsComponent } from './equipments-details.component';

import { EquipmentDetailsHistoryComponent } from './components/equipment-details-history/equipment-details-history.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';

const router: Routes = [
  {
    path: '',
    component: EquipmentsDetailsComponent,
  },
];

@NgModule({
  declarations: [EquipmentsDetailsComponent, EquipmentDetailsHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(router),
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatTabsModule,
    MatTooltipModule,
  ],
})
export class SiteEquipmentsDetailsModule {}
