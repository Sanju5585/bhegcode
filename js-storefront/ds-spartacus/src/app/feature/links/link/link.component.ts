import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListofportalService } from '../link/listofportal.service';
import { TranslationService } from '@spartacus/core';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

export interface links {
  digitalSolutionsPortals: string;
  siteName: string;
  productLine: string;
  description: string;
  type: string;
  oldDescription: string;
  loginRequired: string;
}

@Component({
  standalone: false,
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  linkList: any;
  loadSpinner: boolean = false;
  acendingOrder: boolean = true;
  decendingOrder: boolean = false;
  constructor(
    private listofportalService: ListofportalService,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService
  ) {
    this.getLinkList();
  }

  displayedColumns: string[] = [
    'siteName',
    'productLine',
    'description',
    'type',
    'loginRequired',
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('link.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getLinkList();
    this.dataSource.sort = this.sort;
  }

  linkSortData(sort, direction) {
    const data = this.linkList.slice();
    if (this.acendingOrder == true) {
      this.acendingOrder = false;
      this.decendingOrder = true;
    } else {
      this.acendingOrder = true;
      this.decendingOrder = false;
    }
    this.linkList = data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (sort) {
        case 'siteName':
          return this.compare(
            a.siteName?.toLowerCase() || '',
            b.siteName?.toLowerCase() || '',
            isAsc
          );
        case 'productLine':
          return this.compare(
            a.productLine?.toLowerCase() || '',
            b.productLine?.toLowerCase() || '',
            isAsc
          );
        case 'description':
          return this.compare(
            a.description?.toLowerCase() || '',
            b.description?.toLowerCase() || '',
            isAsc
          );
        case 'type':
          return this.compare(
            a.type?.toLowerCase() || '',
            b.type?.toLowerCase() || '',
            isAsc
          );
        case 'loginRequired':
          return this.compare(
            a.loginRequired?.toLowerCase() || '',
            b.loginRequired?.toLowerCase() || '',
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getLinkList() {
    this.loadSpinner = true;
    this.listofportalService.getLinkData().subscribe(
      (res) => {
        this.loadSpinner = false;
        this.linkList = res;
        this.linkSortData('productLine', 'asc');
        for (let i = 0; i < this.linkList.length; i++) {
          if (
            this.linkList[i] &&
            this.linkList[i].loginRequired &&
            this.linkList[i].loginRequired.indexOf('Yes') !== -1
          ) {
            this.linkList[i].loginRequired = this.linkList[
              i
            ].loginRequired.replace('Yes', 'Login');
          }
          if (
            this.linkList[i] &&
            this.linkList[i].loginRequired &&
            this.linkList[i].loginRequired.indexOf('No') !== -1
          ) {
            this.linkList[i].loginRequired = this.linkList[
              i
            ].loginRequired.replace('No', 'Public');
          }
        }
      },
      (error) => {
        this.loadSpinner = false;
      }
    );
  }
}
