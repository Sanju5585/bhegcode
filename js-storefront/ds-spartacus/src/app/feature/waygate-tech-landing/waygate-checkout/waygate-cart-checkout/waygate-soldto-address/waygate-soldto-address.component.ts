import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-waygate-soldto-address',
  templateUrl: './waygate-soldto-address.component.html',
  styleUrls: ['./waygate-soldto-address.component.scss'],
})
export class WaygateSoldtoAddressComponent {
  @Input() soldAddress;
  @Input() customerAccount;
}
