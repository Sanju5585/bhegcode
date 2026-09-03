import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MyFavoritesComponent } from './my-favorites.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { I18Pipe } from '../../shared/pipes/i18.pipe';

@NgModule({
  declarations: [MyFavoritesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    DatePipe,
    I18Pipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
  ],
})
export class MyFavoritesModule {}
