import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
})
export class AccessDeniedComponent implements OnInit, OnDestroy {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.showHideBreadcrumb(false);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.showHideBreadcrumb(true);
  }

  redirectToContactUs() {
    this.router.navigate(['/contactus']);
  }
}
