import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss'],
})
export class CustomerAccountComponent implements OnInit {
  @Input() soldAddress;
  @Input() customerAccount;
  constructor() {}
  ngOnInit(): void {}
}
