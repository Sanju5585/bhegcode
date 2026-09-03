import { Component, OnInit } from '@angular/core';
import { SiteEquipmentsService } from '../services/site-equipments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MainService } from '../../../shared/services/main.service';

@Component({
  standalone: false,
  selector: 'app-equipments-details',
  templateUrl: './equipments-details.component.html',
  styleUrls: ['./equipments-details.component.css'],
})
export class EquipmentsDetailsComponent implements OnInit {
  public equipmentDetails: any = {};
  public productDetails: any = {};
  public totalEquipment: number;
  public isArchiving: boolean;
  isCallLookUp: boolean = false;
  public staticImage: any =
    '/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg';
  public contentLoaded: boolean;

  constructor(
    private router: Router,
    private mainService: MainService,
    public eqService: SiteEquipmentsService,
    private route: ActivatedRoute
  ) {
    this.mainService.breadCrumbs = [];
    let loader = document.querySelector('.overlayloader');
    loader['style']['display'] = '';
    this.route.params
      .pipe(
        switchMap((params) =>
          this.eqService.getEquipmentDetail(
            params['partNumber'].replace('+', '/'),
            params['serialNumber'],
            this.route.snapshot.queryParams['isReload']
          )
        )
      )
      .pipe(
        catchError((obs) => {
          this.router.navigateByUrl('/site-equipment');
          return of({});
        })
      )
      .subscribe((details: any) => {
        if (details) {
          if (!details.partNumber) {
            return;
          }
        }
        loader['style']['display'] = 'none';
        this.contentLoaded = true;
        this.equipmentDetails = details;
        this.productDetails = details?.productData;
        this.totalEquipment =
          (this.eqService.filteredEquipmentPartCount[details?.partNumber] &&
            this.eqService.filteredEquipmentPartCount[details?.partNumber] -
              1) ||
          0;

        this.onUpdateDetails(true);
        this.addBreadCrumb();
      });
  }

  addBreadCrumb() {
    const breadCrumbs = [
      { name: 'Home', path: '/home', isExternalLink: true },
      {
        name: 'My Equipment',
        path: '/site-equipment',
        queryParam: { isReload: 'true' },
      },
      {
        name:
          this.equipmentDetails.partName +
          ' (' +
          this.equipmentDetails.partNumber +
          ')',
        path:
          '/site-equipment/' +
          this.equipmentDetails.partNumber +
          '/' +
          this.equipmentDetails.serialNumber,
      },
    ];
    this.mainService.breadCrumbs.push(...breadCrumbs);
    this.mainService.setTitle(
      'BH Digital Solutions Store | Equipment Details ' +
        this.equipmentDetails.serialNumber
    );
  }

  ngOnInit() {
    // this.onUpdateDetails(true);
  }

  onUpdateDetails(event) {
    if (event == true) {
      if (
        !this.equipmentDetails ||
        !this.equipmentDetails.partNumber ||
        !this.equipmentDetails.serialNumber
      ) {
        return;
      }
      let lookupParams = {
        partNumber: this.equipmentDetails.partNumber,
        serialNumber: this.equipmentDetails.serialNumber,
      };
      this.eqService
        .equipmentHistoryLookUp(lookupParams)
        .subscribe((res: any) => {
          this.equipmentDetails = res[0];
        });
    }
  }

  updateMELItem() {
    this.router
      .navigate(
        [
          '/',
          'site-equipment',
          this.equipmentDetails.partNumber,
          this.equipmentDetails.serialNumber,
          'edit',
        ],
        { queryParams: { isReload: true } }
      )
      .then(
        (nav) => {},
        (err) => {}
      );
  }

  archiveEquipment() {
    const data = { ...this.equipmentDetails };
    data.addUpdateFlag = 'CP_UPDATE';
    data.removeFlag = data.rawRemoveFlag = true;
    data.selectedOption = 'A';
    if (data.status.toLowerCase() == 'active') {
      data.rawRemoveFlag = true;
    } else {
      data.rawRemoveFlag = false;
    }
    this.isArchiving = true;
    this.equipmentDetails.addUpdateFlag = 'CP_UPDATE';
    this.eqService.archiveEquipment([data]).subscribe((res) => {
      this.isArchiving = false;
      if (res && res[0] && res[0]['responseType'] == 'S') {
        if (data.rawRemoveFlag) {
          this.equipmentDetails.status = 'INACTIVE';
          this.mainService.showMessage('Archived Successfully', 'success');
        } else {
          this.equipmentDetails.status = 'ACTIVE';
          this.mainService.showMessage('Restored Successfully', 'success');
        }
      }
    });
  }

  getEndCustomer(eq) {
    if (eq) {
      if (<Number>eq.endCustomer == 0 || eq.endCustomer == '') {
        return '';
      } else if (eq.endCustomerName.indexOf('& 0000') !== -1) {
        return eq.endCustomerName;
      }
      return eq.endCustomerName + ' & ' + eq.endCustomer;
    }
  }

  onFavouritesClick(partNum, isFav) {
    if (!isFav) {
      this.eqService.addToFavourite(partNum).subscribe((res: any) => {
        if (res || res == 'true') {
          this.mainService.showMessage(
            'Material added to Favorites',
            'success'
          );
        } else {
          this.mainService.showMessage(
            'Not able to add material to Favorites',
            'error'
          );
        }
      });
    } else {
      this.eqService.removeFromFavourite(partNum).subscribe((res: any) => {
        if (res || res == 'true') {
          this.mainService.showMessage(
            'Material removed from Favorites',
            'success'
          );
        } else {
          this.mainService.showMessage(
            'Not able to remove material from Favorites',
            'error'
          );
        }
      });
    }
  }
}
