import { Component, OnInit, Input } from '@angular/core';
import { CalibrationDataService } from './services/calibration-data.service';
import { Observable, of } from 'rxjs';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { BreadcrumbService } from '../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'app-calibration-data',
  templateUrl: './calibration-data.component.html',
  styleUrls: ['./calibration-data.component.scss'],
})
export class CalibrationDataComponent implements OnInit {
  findSerialNumber: any;
  propsSensors: any;
  propsModels: any;
  searchOptions;
  searchResult;
  alreadyInwatchList;
  equipmentFound;
  equipmentNotFound;
  findCalibration;
  resetSearchButtons;
  res: any;
  user$: Observable<unknown>;
  userType = '';
  productFamilyResponse: any;
  probeListResponse: any;
  propsProducts: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  constructor(
    public calService: CalibrationDataService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }
}
