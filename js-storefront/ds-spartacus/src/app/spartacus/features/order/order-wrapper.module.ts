import { NgModule } from '@angular/core';
import { OmfOrderModule } from '@spartacus/omf/order';
import { OrderModule } from '@spartacus/order';
import { S4ServiceOrderModule } from '@spartacus/s4-service/order';

@NgModule({
  declarations: [],
  imports: [OrderModule, S4ServiceOrderModule, OmfOrderModule],
})
export class OrderWrapperModule {}
