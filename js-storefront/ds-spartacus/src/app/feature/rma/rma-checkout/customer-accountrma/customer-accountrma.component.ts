import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-customer-accountrma',
  templateUrl: './customer-accountrma.component.html',
  styleUrls: ['./customer-accountrma.component.scss'],
})
export class CustomerAccountrmaComponent implements OnInit {
  @Input() rmaSoldToAddress;
  @Input() customerAccount;
  selectedAddress: any = [];
  constructor() {}

  ngOnInit(): void {}
}
