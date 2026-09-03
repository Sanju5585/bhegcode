import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  standalone: false,
  selector: 'ds-rma-overview',
  templateUrl: './rma-overview.component.html',
  styleUrls: ['./rma-overview.component.scss'],
})
export class RmaOverviewComponent implements OnInit {
  overviewTextData$: Observable<any>;
  constructor(private cmsService: CmsService) {}

  ngOnInit() {
    this.overviewTextData$ = this.cmsService.getComponentData<any>(
      'RMAOverviewTextComponent'
    );
  }
}
