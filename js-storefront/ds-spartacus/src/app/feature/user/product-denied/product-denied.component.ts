import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'app-product-denied',
  templateUrl: './product-denied.component.html',
  styleUrls: ['./product-denied.component.scss'],
})
export class ProductDeniedComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.showHideBreadcrumb(false);
  }
  ngOnDestroy(): void {
    this.breadcrumbService.showHideBreadcrumb(true);
  }
}
