import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { SiteEquipmentsRoutingModule } from './site-equipments-routing.module';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { MyEquipmentsComponent } from './my-equipments/my-equipments.component';
// import { MyFavoritesComponent } from './pages/my-favorites/my-favorites.component'
import { EquipmentAccordionComponent } from './equipment-accordion/equipment-accordion.component';
import { EquipmentTabComponent } from './equipment-tab/equipment-tab.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ManEquipmentsComponent } from './man-equipments/man-equipments.component';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { I18Pipe } from '../../shared/pipes/i18.pipe';
// import { JoyrideModule } from 'ngx-joyride';

@NgModule({
  declarations: [
    AddEquipmentComponent,
    MyEquipmentsComponent,
    // MyFavoritesComponent,
    EquipmentAccordionComponent,
    EquipmentTabComponent,
    ManEquipmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // SiteEquipmentsRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    // JoyrideModule.forChild()
  ],
  providers: [
    DatePipe,
    I18Pipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
  ],
})
export class SiteEquipmentsModule {}
