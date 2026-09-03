import { NgModule } from '@angular/core';
import { CdpCustomerTicketingModule } from '@spartacus/cdp/customer-ticketing';
import { CustomerTicketingModule } from '@spartacus/customer-ticketing';

@NgModule({
  declarations: [],
  imports: [CustomerTicketingModule, CdpCustomerTicketingModule],
})
export class CustomerTicketingWrapperModule {}
