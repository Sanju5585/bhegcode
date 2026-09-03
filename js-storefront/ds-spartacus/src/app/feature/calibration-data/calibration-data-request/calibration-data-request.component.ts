import { Component, Input, OnInit ,SecurityContext } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { CalibrationDataService } from '../services/calibration-data.service';
import { TranslationService, WindowRef } from '@spartacus/core';
import { Router } from '@angular/router';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { saveAs } from 'file-saver';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../core/generic-validator/regular-expressions';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: false,
  selector: 'app-calibration-data-request',
  templateUrl: './calibration-data-request.component.html',
  styleUrls: ['./calibration-data-request.component.scss'],
})
export class CalibrationDataRequestComponent implements OnInit {
  constructor(
    private launchDialogService: LaunchDialogService,
    public calService: CalibrationDataService,
    private translate: TranslationService,
    private route: Router,
    private globalMessageService: GlobalMessageService,
    private gtmService: GoogleTagManagerService,
    private windowRef: WindowRef,
    public sanitizer: DomSanitizer
  ) {}

  sensorType: string;
  probeSerialNumber: string;
  probeType: string;
  showSpinner: boolean = false;
  showPDFSpinner: boolean = false;
  country: string = '';
  state: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  workPhone: string = '';
  zipCode: string = '';
  organization: string = '';
  title: string = '';
  emailAddress: any;
  address: string = '';
  streetAddress: string = '';
  city: string = '';
  promote: boolean = false;
  checked: any;
  isformValid: boolean;
  @Input() lastUpdatedDate: string;
  sessionStorageObject: any = {
    address: '',
    city: '',
    country: '',
    email: '',
    firstName: '',
    lastName: '',
    organization: '',
    state: '',
    streetAddress: '',
    title: '',
    workPhone: '',
    zipCode: '',
    promote: '',
  };

  error_cal = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    organization: '',
    workPhone: '',
  };

  countriesList: any;
  countryItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  stateList: any;
  stateItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  regexPattern = REGULAR_PATTERN;
  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.lastUpdatedDate = data?.lastUpdatedDate;
    });
    this.getCountryList();
    if (this.windowRef.nativeWindow.sessionStorage.getItem('guestUserform')) {
      this.sessionStorageObject = JSON.parse(
        this.windowRef.nativeWindow.sessionStorage.getItem('guestUserform')
      );
    }
  }

  closeModal() {
    this.launchDialogService.closeDialog('');
  }

  openCalibrationSuccess() {
    this.launchDialogService.closeDialog('');
    const caliDataSuccess = this.launchDialogService.openDialog(
      DS_DIALOG.CALI_DATA_SUCCESS_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (caliDataSuccess) {
      caliDataSuccess.pipe(take(1)).subscribe((value) => {});
    }
  }

  login() {
    this.launchDialogService.closeDialog('');
    this.route.navigate(['/login']);
  }

  onChange(e, field, validator?) {
    let textValue = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    this.error_cal[field] = '';
    if (validator) {
      this[field] = testRegex(e.target.value, validator);
    } else {
      this[field] = e.target.value;
    }
    if (field === 'firstName') {
      this[field] = e.target.value;
      const fnValue = document.createElement('div');
      fnValue.innerHTML = textValue;
      textValue = fnValue.textContent.replace(REGULAR_PATTERN.alphaNumeric, '')
      this.sessionStorageObject.firstName = textValue;
    }
    if (field === 'lastName') {
      this[field] = e.target.value;
      const lnValue = document.createElement('div');
      lnValue.innerHTML = textValue;
      textValue = lnValue.textContent.replace(REGULAR_PATTERN.alphaNumeric, '')
      this.sessionStorageObject.lastName = textValue;
    }
    if (field === 'email') {
      this[field] = e.target.value;
      this.sessionStorageObject.email = e.target.value;
    }
    if (field === 'country') {
      this[field] = e.target.value;
      this.sessionStorageObject.country = e.target.value;
    }
    if (field === 'organization') {
      this[field] = e.target.value;
      const companyValue = document.createElement('div');
      companyValue.innerHTML = textValue;
      textValue = companyValue.textContent.replace(REGULAR_PATTERN.alphaNumeric, '')
      this.sessionStorageObject.organization = textValue;
    }

    if (field === 'promote') {
      this.promote = e.target.checked;
    }
  }

  //function to get countries
  getCountryList() {
    this.calService.getCountries().subscribe(
      (data) => {
        this.countriesList = data;
        var countries = [];
        this.countriesList &&
          this.countriesList.countries.forEach((country) => {
            countries.push({
              label: country.name,
              value: country.isocode,
            });
          });
        this.countryItems = {
          itemGroups: [
            {
              items: countries,
            },
          ],
        };
      },
      (error) => {}
    );
  }

  getStateList(event, field) {
    this.onChange(event, field);
    let countryCode = event.detail.value;
    this.calService.getRegion(countryCode).subscribe(
      (data) => {
        this.stateList = data;
        var states = [];
        this.stateList.regions.forEach((state) => {
          states.push({
            label: state.name,
            value: state.isocode,
          });
        });
        this.stateItems = {
          itemGroups: [
            {
              items: states,
            },
          ],
        };
      },
      (error) => {}
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  sendCalibrationData() {
    this.isformValid = true;
    let formKeys = [
      'firstName',
      'lastName',
      'email',
      'country',
      'organization',
    ];
    let guestUserform = {
      address: this.address ? this.address : this.sessionStorageObject.address,
      city: this.city ? this.city : this.sessionStorageObject.city,
      country: this.country ? this.country : this.sessionStorageObject.country,
      email: this.email ? this.email : this.sessionStorageObject.email,
      firstName: this.firstName
        ? this.firstName
        : this.sessionStorageObject.firstName,
      lastName: this.lastName
        ? this.lastName
        : this.sessionStorageObject.lastName,
      organization: this.organization
        ? this.organization
        : this.sessionStorageObject.organization,
      state: this.state ? this.state : this.sessionStorageObject.state,
      streetAddress: this.streetAddress
        ? this.streetAddress
        : this.sessionStorageObject.streetAddress,
      title: this.title ? this.title : this.sessionStorageObject.title,
      workPhone: this.workPhone
        ? this.workPhone
        : this.sessionStorageObject.workPhone,
      zipCode: this.zipCode ? this.zipCode : this.sessionStorageObject.zipCode,
      promote: this.promote ? this.promote : this.sessionStorageObject.promote,
      probeSerialNumber: this.calService.getSerialNumber
        ? this.calService.getSerialNumber
        : this.sessionStorageObject.probeSerialNumber,
      sensorType: this.calService.getProbType
        ? this.calService.getProbType
        : this.sessionStorageObject.sensorType,
      lastCalibrationDate: this.lastUpdatedDate,
      communicationsPreference: this.promote.toString()
        ? this.promote.toString()
        : this.sessionStorageObject.promote.toString(),
    };

    this.windowRef.nativeWindow.sessionStorage.setItem(
      'guestUserform',
      JSON.stringify(guestUserform)
    );

    this.showSpinner = false;

    this.firstName = this.firstName
      ? this.firstName
      : this.sessionStorageObject.firstName;
    this.lastName = this.lastName
      ? this.lastName
      : this.sessionStorageObject.lastName;
    this.email = this.email ? this.email : this.sessionStorageObject.email;
    this.country = this.country
      ? this.country
      : this.sessionStorageObject.country;
    this.organization = this.organization
      ? this.organization
      : this.sessionStorageObject.organization;
    this.probeSerialNumber = this.calService.getSerialNumber
      ? this.calService.getSerialNumber
      : this.sessionStorageObject.probeSerialNumber;

    formKeys.forEach((key) => {
      if (key == 'firstName' && this.firstName === '') {
        this.error_cal['firstName'] = this.getTranslatedText(
          'mySiteEquipment.error_cal.firstName'
        );
        this.isformValid = false;
      }
      if (key === 'lastName' && this.lastName === '') {
        this.error_cal['lastName'] = this.getTranslatedText(
          'mySiteEquipment.error_cal.lastName'
        );
        this.isformValid = false;
      }
      if (key === 'email' && !this.email.match(REGULAR_PATTERN.commonEmailRegx)) {
        this.error_cal['email'] = this.getTranslatedText(
          'mySiteEquipment.error_cal.email'
        );
        this.isformValid = false;
      }

      if (key === 'country' && this.country === '') {
        this.error_cal['country'] = this.getTranslatedText(
          'mySiteEquipment.error_cal.country'
        );
        this.isformValid = false;
      }
      if (key === 'organization' && this.organization === '') {
        this.error_cal['organization'] = this.getTranslatedText(
          'mySiteEquipment.error_cal.organization'
        );
        this.isformValid = false;
      }
    });

    if (!this.isformValid) {
      return false;
    } else {
      this.calService.savePromotions(guestUserform).subscribe((res) => {});

      this.downloadCalibrationPDF();
    }
  }

  downloadCalibrationPDF() {
    const probeSerialNumberForfilename = this.probeSerialNumber?.split('-')[0];
    this.showPDFSpinner = true;
    this.calService
      .downloadCalibrationPDF(
        this.calService.getSerialNumber,
        this.calService.getProbType
      )
      .subscribe(
        (res: Blob) => {
          if (res !== null && res !== undefined) {
            this.showPDFSpinner = false;
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File(
              [blob],
              probeSerialNumberForfilename + '.pdf',
              {
                type: 'application/pdf',
              }
            );
            saveAs(file);
            this.launchDialogService.closeDialog('');
            this.gtmService.sendEvent({
              event: 'CalibrationDataTracker',
              serialNumber: this.calService.getSerialNumber,
            });
          } else {
            this.showPDFSpinner = false;
            this.globalMessageService.add(
              this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          }
        },
        (error) => {
          this.launchDialogService.closeDialog('');
          this.showPDFSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.error_cal.noValidPdfData'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }
}
