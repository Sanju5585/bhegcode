import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
})
export class ShopCategoryComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  exploreProds() {
    this.router.navigate([
      '/waygate/categories/ECOM_LVL1_00000001/Waygate-Technologies?query=:relevance:allCategories:ECOM_LVL1_00000001',
    ]);
  }
  ngOnDestroy(): void {}
}
