import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { AddEquipmentToWatchlistComponent } from './add-equipment-to-watchlist/add-equipment-to-watchlist.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { MyEquipmentsComponent } from './my-equipments/my-equipments.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import { UpdateEquipmentDetailsComponent } from './update-equipment-details/update-equipment-details.component';
import { SearchPrivateFolderComponent } from './search-private-folder/search-private-folder.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpCancelService } from '../../shared/services/httpcancel.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateRangePickerModule } from '../../shared/components/date-range-picker/date-range-picker.module';
import { ScrollContainerModule } from '../../shared/components/scroll-container/scroll-container.module';
import { StatusTilesModule } from '../../shared/components/status-tiles/status-tiles.module';
import { I18Pipe } from '../../shared/pipes/i18.pipe';
import { DatePickerModule } from '../../shared/components/date-picker/date-picker.module';

@NgModule({
  declarations: [
    AddEquipmentToWatchlistComponent,
    MyEquipmentsComponent,
    EquipmentDetailsComponent,
    UpdateEquipmentDetailsComponent,
    SearchPrivateFolderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    I18nModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    DateRangePickerModule,
    StatusTilesModule,
    SpinnerModule,
    DatePickerModule,
    NgSelectModule,
    MatPaginatorModule,
    ScrollContainerModule,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    HttpCancelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddEquipmentComponent,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SiteEquipmentsModule {}
