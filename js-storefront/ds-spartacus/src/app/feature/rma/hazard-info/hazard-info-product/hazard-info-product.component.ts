import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'ds-hazard-info-product',
  templateUrl: './hazard-info-product.component.html',
  styleUrls: ['./hazard-info-product.component.scss'],
})
export class HazardInfoProductComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {}
}
