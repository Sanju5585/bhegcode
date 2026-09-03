import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { ContactUsService } from '../contact-us.service';
import { Observable } from 'rxjs';
import { ContactUsFormModel } from '../contact-us.model';
import {
  TranslationService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'ds-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent implements OnInit {
  @ViewChild('textval') textval: ElementRef;
  @ViewChild('communicationPef2') communicationPef2: ElementRef;
  @ViewChild('communicationPef1') communicationPef1: ElementRef;
  countriesList$: Observable<any>;
  isformValid: boolean;
  firstName: string = '';
  lastName: string = '';
  companyName: string = '';
  jobRole: string = '';
  companyEmail: string = '';
  phoneNumber: string = '';
  country: string = '';
  state: string = '';
  city: string = '';
  postalCode: string = '';
  areaOfIntrest: string = '';
  requestDetails: string = '';
  communicationPef: string = '';
  loadSpinner = false;
  isSuccessMsg = false;
  contactUsModel: ContactUsFormModel;
  REGULAR_PATTERN = REGULAR_PATTERN;

  error = {
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    jobRole: '',
    phoneNumber: '',
    country: '',
    state: '',
    postalCode: '',
    city: '',
    areaOfIntrest: '',
    requestDetails: '',
    communicationPef: '',
  };

  contactUsMessages: any;

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

  jobRolesList: any;
  jobRolesItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  areasOfInterestList: any;
  areasOfInterestItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  constructor(
    private contactUsService: ContactUsService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer
  ) {
    this.getCountryList();
    this.getJobRolesList();
    this.getAreasOfIntList();
    this.getMessages();
  }

  ngOnInit(): void {
    this.contactUsModel = new ContactUsFormModel();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  // function to get country list
  getCountryList() {
    this.contactUsService.getNewCountries().subscribe(
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
  // function to get state list
  getStateList(event, field) {
    this.onChange(event, field);
    let countryCode = event.detail.value;
    this.contactUsService.getNewRegion(countryCode).subscribe(
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

  // function to get job roles list
  getJobRolesList() {
    this.contactUsService.getJobRoles().subscribe(
      (data) => {
        this.jobRolesList = data;
        var jobRoles = [];
        this.jobRolesList &&
          this.jobRolesList.jobRoles.forEach((roles) => {
            jobRoles.push({
              label: roles.name,
              value: roles.jobRoleId,
            });
          });
        this.jobRolesItems = {
          itemGroups: [
            {
              items: jobRoles,
            },
          ],
        };
      },
      (error) => {}
    );
  }

  getMessages() {
    this.contactUsService.getMessages().subscribe(
      (data) => {
        this.contactUsMessages = data;
      },
      (error) => {}
    );
  }

  // function to get areas of interests list
  getAreasOfIntList() {
    this.contactUsService.getAreaOfInterest().subscribe(
      (data) => {
        this.areasOfInterestList = data;
        var aresOfInt = [];
        this.areasOfInterestList &&
          this.areasOfInterestList.areaOfInterest.forEach((areas) => {
            aresOfInt.push({
              label: areas.name,
              value: areas.id,
            });
          });
        this.areasOfInterestItems = {
          itemGroups: [
            {
              items: aresOfInt,
            },
          ],
        };
      },
      (error) => {}
    );
  }

  onSubmit() {
    this.isformValid = true;
    this.isSuccessMsg = false;
    let formKeys = [
      'firstName',
      'lastName',
      'companyName',
      'jobRole',
      'companyEmail',
      'phoneNumber',
      'country',
      'state',
      'city',
      'postalCode',
      'areaOfIntrest',
      'requestDetails',
      'communicationPef',
    ];
    formKeys.forEach((key) => {
      if (this.sanitizer.sanitize(SecurityContext.HTML, this[key]) === '') {
        this.error[key] = this.contactUsMessages.contactUs.error[key];
        this.isformValid = false;
      }
    });
    if (this.isformValid) {
      this.loadSpinner = true;
      this.contactUsService.saveContactUsDetails(this.contactUsModel).subscribe(
        (data) => {
          this.isSuccessMsg = true;
          this.loadSpinner = false;
          this.communicationPef1.nativeElement.firstElementChild.children[0].checked =
            false;
          this.communicationPef2.nativeElement.firstElementChild.children[0].checked =
            false;
          this.resetForm();
          window.scrollTo(0, 0);
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('contactUs.error.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.loadSpinner = false;
        }
      );
    }
  }

  // function to handle on change
  onChange(e, field) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    if (field) {
      if (field === 'companyEmail') {
        var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value
          ? e.target.value.toLowerCase()
          : '';
        if (e.target.value && !e.target.value.match(emailRegx)) {
          this.error.companyEmail = this.getTranslatedText(
            'contactUs.error.validEmailMessage'
          );
        } else {
          this.error.companyEmail = '';
        }
      } else if (field === 'phoneNumber') {
        var phoneNumRegx = '/^[0-9]+$/';
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        if (!testRegex(e.target.value, REGULAR_PATTERN.numbersOnly)) {
          this.error.phoneNumber = this.getTranslatedText(
            'contactUs.error.validPhoneMessage'
          );
        } else {
          this.error.phoneNumber = '';
        }
      } else if (field === 'firstName') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.bypassSecurityTrustHtml(e.target.value),
          REGULAR_PATTERN.textOnly
        );
        if (!this[field]) {
          this.error.firstName = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.firstName = '';
        }
      } else if (field === 'lastName') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.bypassSecurityTrustHtml(e.target.value),
          REGULAR_PATTERN.textOnly
        );
        if (!this[field]) {
          this.error.lastName = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.lastName = '';
        }
      } else if (field === 'companyName') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
          REGULAR_PATTERN.textOnly
        );
        if (!this[field]) {
          this.error.companyName = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.companyName = '';
        }
      } else if (field === 'city') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
          REGULAR_PATTERN.textOnly
        );
        if (!this[field]) {
          this.error.city = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.companyName = '';
        }
      } else if (field === 'postalCode') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
          REGULAR_PATTERN.numbersOnly
        );
        if (!testRegex(e.target.value, REGULAR_PATTERN.numbersOnly)) {
          this.error.postalCode = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.companyName = '';
        }
      } else {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this.contactUsModel[field] = this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.contactUsModel[field]
        );
      }

      if (field === 'requestDetails') {
        this.error[field] = '';
        this[field] = e.target.value;
        this.contactUsModel[field] = e.target.value ? e.target.value : '';
        this[field] = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
          REGULAR_PATTERN.alphaNumericWithSpecialCharater
        );
        if (!this[field]) {
          this.error.requestDetails = this.getTranslatedText(
            'contactUs.error.errorCommonMessage'
          );
        } else {
          this.error.requestDetails = '';
        }
        if (e.target.value === '') {
          this.error.requestDetails = '';
        }
      }
    }
  }

  stop(e) {
    if (e.target.value.length >= 300) {
      e.preventDefault();
      return false;
    }
  }

  myFunction(e) {
    if (e.target.value.length >= 300) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 300);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 300);
  }

  ngAfterViewInit() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 300);
  }

  // function to reset the values
  resetForm() {
    let formKeys = [
      'firstName',
      'lastName',
      'companyName',
      'jobRole',
      'companyEmail',
      'phoneNumber',
      'country',
      'state',
      'city',
      'postalCode',
      'areaOfIntrest',
      'requestDetails',
      'communicationPef',
    ];
    formKeys.forEach((key) => {
      this[key] = '';
    });
  }
}
