import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactUsService } from '../contact-us.service';
import { TranslationService } from '@spartacus/core';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

export interface ContactUs {
  type: string;
  region: string;
  businessEntity: string;
  subRegion: string;
  country: string;
  productLine: string;
  email: string;
  phoneNo: string;
  workingHours: string;
}
@Component({
  standalone: false,
  selector: 'ds-contact-us-details',
  templateUrl: './contact-us-details.component.html',
  styleUrls: ['./contact-us-details.component.scss'],
})
export class ContactUsDetailsComponent implements OnInit {
  contactUsList: any;
  contactUsListsecond: any;
  loadSpinner: boolean = false;
  direction: any;
  directionType: any;
  sortColumn: any;
  constructor(
    private contactUsService: ContactUsService,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService
  ) {
    this.getContactList();
    this.getContactUssecond();
  }
  displayedColumnsfirstcontact: string[] = [
    'type',
    'region',
    'subRegion',
    'productLine',
    'email',
    'phoneNum',
    'workingHours',
  ];
  displayedColumns: string[] = [
    'type',
    'region',
    'subRegion',
    'country',
    'productLine',
    'email',
    'phoneNum',
    'workingHours',
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  isShowProductLine = false;

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('contactUs.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.dataSource.sort = this.sort;
  }
  getContactList() {
    this.loadSpinner = true;
    this.contactUsService.getContactUsDetails().subscribe(
      (data) => {
        this.loadSpinner = false;
        this.contactUsList = data['contactussettinglist'];
        //*********** (BHI-22794304) As per business suggestion no need to use "or" for a phone number followed by any other option to dial after calling
        //   for (let i = 0; i < this.contactUsList.length; i++) {
        //     if (
        //       this.contactUsList[i] &&
        //       this.contactUsList[i].phoneNum &&
        //       this.contactUsList[i].phoneNum.indexOf(',') !== -1
        //     )
        //       this.contactUsList[i].phoneNum = this.contactUsList[
        //         i
        //       ].phoneNum.replace(',', '   or    ');
        //   }
        // ***************** commented code ********************
      },
      (error) => {
        this.loadSpinner = false;
      }
    );
  }

  sortDataLogic(sort: any) {
    let a = sort[0];

    if (this.sortColumn == undefined) {
      this.sortColumn = sort[0];
    }
    // Sorting Direction Code
    if (sort[1] == true) {
      if (this.direction == undefined) {
        this.direction = false;
      } else if (this.direction == false) {
        this.direction = this.direction ? false : true;
      } else {
        this.direction = this.direction ? false : true;
      }
    }
    // Checking Column whether it is a same or diff column
    if (this.sortColumn == undefined) {
      this.sortColumn = sort[0];
    }
    if (a != this.sortColumn) {
      this.sortColumn = a;
      this.direction = false;
    }
    // setting Asc and Desc
    if (this.direction == false) {
      this.directionType = 'asc';
    } else {
      this.directionType = 'desc';
    }
    const data = this.contactUsList.slice();
    this.contactUsList = data.sort((a, b) => {
      // code change for dynamic condition based on asc and desc
      const isAsc = this.directionType === 'asc';
      switch (sort[0]) {
        case 'type':
          return this.compare(a.commerceTypeValue, b.commerceTypeValue, isAsc);
        case 'region':
          return this.compare(a.region, b.region, isAsc);
        case 'subRegion':
          return this.compare(a.subRegion, b.subRegion, isAsc);
        case 'country':
          return this.compare(a.country, b.country, isAsc);
        case 'productLine':
          return this.compare(a.productLine, b.productLine, isAsc);
        default:
          return 0;
      }
    });
  }

  check(val: string) {
    let email = val;
    return email.includes('@');
  }

  sortDataSecondLogic(sort: any) {
    let a = sort[0];

    if (this.sortColumn == undefined) {
      this.sortColumn = sort[0];
    }
    // Sorting Direction Code
    if (sort[1] == true) {
      if (this.direction == undefined) {
        this.direction = false;
      } else if (this.direction == false) {
        this.direction = this.direction ? false : true;
      } else {
        this.direction = this.direction ? false : true;
      }
    }
    // Checking Column whether it is a same or diff column
    if (this.sortColumn == undefined) {
      this.sortColumn = sort[0];
    }
    if (a != this.sortColumn) {
      this.sortColumn = a;
      this.direction = false;
    }
    // setting Asc and Desc
    if (this.direction == false) {
      this.directionType = 'asc';
    } else {
      this.directionType = 'desc';
    }
    const data = this.contactUsListsecond.slice();
    this.contactUsListsecond = data.sort((a, b) => {
      // code change for dynamic condition based on asc and desc
      const isAsc = this.directionType === 'asc';
      switch (sort[0]) {
        case 'type':
          return this.compare(a.type, b.type, isAsc);
        case 'region':
          return this.compare(a.region, b.region, isAsc);
        case 'subRegion':
          return this.compare(a.subRegion, b.subRegion, isAsc);
        case 'country':
          return this.compare(a.country, b.country, isAsc);
        case 'productLine':
          return this.compare(a.productLine, b.productLine, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  getContactUssecond() {
    this.loadSpinner = true;
    this.contactUsService.getContactUsDetailssecond().subscribe(
      (data) => {
        this.loadSpinner = false;
        this.contactUsListsecond = data['contactussettinglist'];
        //****** (BHI-22794304) As per business suggestion no need to use "or" for a phone number followed by any other option to dial after calling
        // for (let i = 0; i < this.contactUsListsecond.length; i++) {
        //   if (
        //     this.contactUsListsecond[i] &&
        //     this.contactUsListsecond[i].phoneNum &&
        //     this.contactUsListsecond[i].phoneNum.indexOf(',') !== -1
        //   )
        //     this.contactUsListsecond[i].phoneNum = this.contactUsListsecond[
        //       i
        //     ].phoneNum.replace(',', '   or    ');
        // }
        // ************** commented code************************
      },
      (error) => {
        this.loadSpinner = false;
      }
    );
  }
}
