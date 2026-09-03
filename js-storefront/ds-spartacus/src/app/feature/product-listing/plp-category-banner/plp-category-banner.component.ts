import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'ds-plp-category-banner',
  templateUrl: './plp-category-banner.component.html',
  styleUrls: ['./plp-category-banner.component.scss'],
})
export class CategoryBannerComponent implements OnInit {
  @Input()
  currentQuery: any;

  public apiurl = environment.occBaseUrl;
  params;

  constructor(public routes: ActivatedRoute) {}

  ngOnInit(): void {}
}
