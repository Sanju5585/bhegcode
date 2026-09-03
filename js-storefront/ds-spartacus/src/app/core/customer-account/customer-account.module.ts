import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customerAccountReducer } from './store/reducers/customer-account.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerAccountEffects } from './store/effects/customer-account-effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('customer-accounts', customerAccountReducer),
    EffectsModule.forFeature([CustomerAccountEffects]),
  ],
})
export class CustomerAccountModule {}
