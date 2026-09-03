import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-waygate-rma-overview-dailog',
  standalone: false,
  templateUrl: './waygate-rma-overview-dailog.component.html',
  styleUrl: './waygate-rma-overview-dailog.component.scss',
})
export class WaygateRmaOverviewDailogComponent {
  @Output() closeRmaOverview = new EventEmitter<void>();
  overviewTextData$: Observable<any>;
  constructor(private cmsService: CmsService) {}

  ngOnInit() {
    this.overviewTextData$ = this.cmsService.getComponentData<any>(
      'RMAOverviewTextComponent'
    );
  }

  oncloseRmaOverview() {
    this.closeRmaOverview.emit();
  }
}
