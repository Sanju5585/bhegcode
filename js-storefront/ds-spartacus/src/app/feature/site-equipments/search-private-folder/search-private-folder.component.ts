import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'ds-search-private-folder',
  templateUrl: './search-private-folder.component.html',
  styleUrls: ['./search-private-folder.component.scss'],
})
export class SearchPrivateFolderComponent implements OnInit {
  constructor(
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('mySiteEquipment.customer-file.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
  }
}
