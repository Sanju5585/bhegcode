import { Component, OnInit, Input } from '@angular/core';
@Component({
  standalone: false,
  selector: 'vs-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  @Input() soldToAddress: any;
  @Input() shipToAddress: any;
  @Input() endUserAddress: any;

  ngOnInit(): void {}
}
