import { ChangeDetectorRef, Component, SecurityContext } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService, OccEndpointsService, TranslationService } from '@spartacus/core';
import { WaygateContactUsService } from './waygate-contactus.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { FileProgressLayouts } from '../../../shared/models/fileSize.model';
import { mailToUrl } from '../../../shared/products-constants';

enum CustTypeEnum {
  newCustomer = 'New Customer',
  existingCust = 'Existing Customer',
}

interface RequestType {
  label: string;
  value: string;
}

@Component({
  standalone: false,
  selector: 'app-waygate-contactus',
  templateUrl: './waygate-contactus.component.html',
  styleUrls: ['./waygate-contactus.component.scss'],
})
export class WaygateContactusComponent {
  readonly ReqType = {
    ORDER: 'Sales',
    RETURN: 'Returns',
    PRODUCTTECHSUPPORT: 'Product tech support',
    WEBSITESUPPORT: 'Web site support',
    OTHER: 'Other',
  };

  subProductLines = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  subProductLineMap: any[] = [];

  requestType: RequestType[] = [
    { label: 'Order', value: this.ReqType.ORDER },
    { label: 'Return', value: this.ReqType.RETURN },
    { label: 'Product tech support', value: this.ReqType.PRODUCTTECHSUPPORT },
    { label: 'Web site support', value: this.ReqType.WEBSITESUPPORT },
    { label: 'Other', value: this.ReqType.OTHER },
  ];
  custType = [CustTypeEnum.newCustomer, CustTypeEnum.existingCust];
  options = {
    Invoice: {
      label: 'contactusPage.invoiceNumber',
      placeholder: 'contactusPage.enterInvoiceNumber',
    },
    [this.ReqType.ORDER]: {
      label: 'contactusPage.orderNumber',
      placeholder: 'contactusPage.enterOrderNumber',
    },
    [this.ReqType.RETURN]: {
      label: 'contactusPage.rmaNumber',
      placeholder: 'contactusPage.enterRmaNumber',
    },
  };
  selectedRequestType: number | string;
  contactusForm: FormGroup;
  isCheckedProductLines: boolean[] = [];
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf', 'png'];
  files = [];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  deleteUrl = 'users/anonymous/contactus/removeQuoteAttach';
  uploadUrl;
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  breadcrumbs: any = [];
  charCount = 0;
  selectedCustType = 0;
  showCustTypeOptn = false;
  loggedIn = false;
  showSussess = false;
  showWarning = false;
  countriesList: any;
  productLine: string;
  mailAddress: string[];
  multiplemailaddress: string[];
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
  currentUrl: string;
  isStateDisabled = true;
  customerCareUrl: string = null;
  _allProductLine = AllProductLine;
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
  userType = 'anonymous';
  isLoading = false;
  progressInfo: number;
  uploadSuccess = 'LOADING';
  showProgress = true;
  formData: any;
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private contactUsService: WaygateContactUsService,
    public sanitizer: DomSanitizer,
    private custAccService: CustomerAccountService,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private occEndpointsService: OccEndpointsService,
    private translate: TranslationService
  ) {}

  ngOnInit() {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      if (this.productLine) {
        this.mailAddress = mailToUrl[this.productLine];

        if (this.productLine == AllProductLine.bently) {
          this.customerCareUrl = mailToUrl[this.productLine][1];
        } else if (this.productLine == AllProductLine.panametrics) {
          this.customerCareUrl = mailToUrl[this.productLine][0];
        } else if (this.productLine == AllProductLine.druck) {
          this.multiplemailaddress = this.mailAddress;
          this.customerCareUrl = mailToUrl[this.productLine][2];
        } else if (this.productLine == AllProductLine.reuterStokes) {
          this.customerCareUrl = mailToUrl[this.productLine][0];
        }
      }
    });
    this.translate
    .translate('waygate.contactUs')
    .subscribe((res: string) => {
      this.breadcrumbs = [
        {
          name: res,
          url: `/${this.productLine}/contactus`,
        },
      ];
    })  
    this.contactusForm = this.fb.group({
      custType: ['', ''],
      requestType: ['', ''],
      requestVal: [''],
      areaOfInterest: [''],
      subProductLine: [''],
      firstName: [''],
      lastName: [''],
      companyName: [''],
      email: ['', [Validators.required, this.emailValidator()]],
      phoneNum: [''],
      country: [''],
      state: [''],
      title: [''],
      mktoPersonNotes: ['', Validators.required],
      optIn: ['', Validators.required],
      contactUsEmail: [''],
    });

    this.contactusForm
      .get('mktoPersonNotes')
      .valueChanges.subscribe((value) => {
        this.charCount = value?.length;
        if (value) {
          let cValue = testRegex(
            this.sanitizer.sanitize(SecurityContext.HTML, value),
            REGULAR_PATTERN.alphaNumeric
          );
          const mktoNotes = document.createElement('textarea');
          mktoNotes.innerHTML = cValue;
          cValue = mktoNotes.value.replace(REGULAR_PATTERN.alphaNumeric, '')
          if (cValue != value) {
            this.contactusForm.patchValue({ mktoPersonNotes: cValue });
            this.contactusForm.get('mktoPersonNotes').updateValueAndValidity();
          }
        }
      });

    this.auth.isUserLoggedIn().subscribe((success: any) => {
      if (success) {
        this.loggedIn = true;
        this.userType = 'current';
        this.showCustTypeOptn = false;
        this.selectedCustType = 1; //for loggedin user default customer type is  'Existing Customer'
        this.contactusForm.patchValue({ custType: '' });
        this.selectedRequestType = 0; // Defaut selection is 'Order'
        this.contactusForm.patchValue({ requestType: this.ReqType.ORDER });
        this.clearValidatorsAndReset([
          'firstName',
          'lastName',
          'companyName',
          'email',
          'phoneNum',
          'country',
          'title',
          'areaOfInterest',
          'state',
        ]);
      } else {
        this.loggedIn = false;
        this.userType = 'anonymous';
        this.showCustTypeOptn = true;
        this.contactusForm.patchValue({
          custType: this.custType[this.selectedCustType],
        });

        this.contactusForm
          .get('firstName')
          .setValidators([
            Validators.required,
            Validators.pattern(/^[\p{L}\p{N}wÁ-ÿA-Za-z,。+-:/#*&!_.%;・()@]+$/u),
          ]);
        this.contactusForm
          .get('lastName')
          .setValidators([
            Validators.required,
            Validators.pattern(/^[\p{L}\p{N}wÁ-ÿA-Za-z,。+-:/#*&!_.%;・()@]+$/u),
          ]);
        this.contactusForm
          .get('companyName')
          .setValidators([Validators.required]);
        this.contactusForm
          .get('email')
          .setValidators([Validators.required, this.emailValidator()]);
        this.contactusForm
          .get('phoneNum')
          .setValidators([Validators.required, Validators.pattern('^[0-9]+$')]);
        this.contactusForm.get('country').setValidators([Validators.required]);
        this.contactusForm.get('state').setValidators([Validators.required]);
        if (this.selectedCustType == 0) {
          this.contactusForm
            .get('areaOfInterest')
            .setValidators([Validators.required]);
          this.contactusForm.get('title').setValidators([Validators.required]);
          this.clearValidatorsAndReset(['subProductLine']);
        }
      }
      this.updateValueAndValidity([
        'firstName',
        'lastName',
        'companyName',
        'email',
        'phoneNum',
        'country',
        'title',
        'areaOfInterest',
        'state',
      ]);
    });
    //--START-> SANITIZE FORM--//
    this.contactusForm.get('firstName').valueChanges.subscribe((value) => {
      if (value) {
        let cValue = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, value),
          REGULAR_PATTERN.alphaNumeric
        );
        const firstNameValue = document.createElement('textarea');
        firstNameValue.innerHTML = cValue;
        cValue = firstNameValue.value.replace(REGULAR_PATTERN.alphaNumeric, '')
        if (cValue != value) {
          this.contactusForm.patchValue({ firstName: cValue });
          this.contactusForm.get('firstName').updateValueAndValidity();
        }
      }
    });

    this.contactusForm.get('lastName').valueChanges.subscribe((value) => {
      if (value) {
        let cValue = testRegex(
          this.sanitizer.bypassSecurityTrustHtml(value),
          REGULAR_PATTERN.alphaNumericOnlyForAllLang
        );
        const lastNameValue = document.createElement('textarea');
        lastNameValue.innerHTML = cValue;
        cValue = lastNameValue.value.replace(REGULAR_PATTERN.alphaNumeric, '')
        if (cValue != value) {
          this.contactusForm.patchValue({ lastName: cValue });
          this.contactusForm.get('lastName').updateValueAndValidity();
        }
      }
    });

    this.contactusForm.get('companyName').valueChanges.subscribe((value) => {
      if (value) {
        let cValue = testRegex(
          this.sanitizer.sanitize(SecurityContext.HTML, value),
          REGULAR_PATTERN.alphaNumeric
        );
        const companyValue = document.createElement('div');
        companyValue.innerHTML = cValue;
        cValue = companyValue.textContent.replace(REGULAR_PATTERN.alphaNumeric, '')
        if (cValue != value) {
          this.contactusForm.patchValue({ companyName: cValue });
          this.contactusForm.get('companyName').updateValueAndValidity();
        }
      }
    });

    //--END-> SANITIZE FORM--//
    this.contactusForm
      .get('mktoPersonNotes')
      .valueChanges.subscribe((value) => {
        this.charCount = value?.length;
      });

    this.contactusForm.get('requestType').valueChanges.subscribe((value) => {
      if (value == this.ReqType.ORDER || value == this.ReqType.RETURN) {
        this.contactusForm
          .get('requestVal')
          .setValidators([Validators.required]);
      } else {
        this.clearValidatorsAndReset(['requestVal']);
      }
      this.contactusForm.get('requestVal').updateValueAndValidity();
    });

    this.uploadUrl = `users/${this.userType}/${this.productLine}/contactus/uploadContactUsAttachment`;
    this.getCountryList();
    this.getAreasOfIntList();
    this.getJobRolesList();
    let _reqType = this.fc.requestType.value;

    if (this.selectedCustType == 0) {
      this.clearValidatorsAndReset(['orderId']);
    } else if (
      (this.selectedCustType == 1 && _reqType === this.ReqType.ORDER) ||
      _reqType === this.ReqType.RETURN
    ) {
      this.getSubproductLines(this.ReqType.ORDER);
    } else {
      this.subProductLines = { itemGroups: [{ items: [] }] };
    }
  }

  getSubproductLines(reqType) {
    this.contactUsService
      .getContactUs(this.userType, this.productLine, reqType)
      .subscribe((data: any) => {
        if (data && data?.subProductLine?.entry?.length > 0) {
          let _subProductLines = [];
          for (let i = 0; i < data.subProductLine?.entry?.length; i++) {
            _subProductLines.push({
              label: data.subProductLine.entry[i].key,
              value: data.subProductLine.entry[i].key,
            });
            this.subProductLineMap.push({
              label: data.subProductLine.entry[i].key,
              value: data.subProductLine.entry[i].value,
            });
          }

          this.contactusForm
            .get('subProductLine')
            .setValidators([Validators.required]);
          this.contactusForm.get('subProductLine').updateValueAndValidity();
          this.subProductLines = {
            itemGroups: [
              {
                items: _subProductLines,
              },
            ],
          };
        } else {
          this.clearValidatorsAndReset(['subProductLine']);
        }
      });
  }

  get fc(): any {
    return this.contactusForm.controls;
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }
      const errors: ValidationErrors | any = {};

      var pattern =
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

      if (!pattern.test(value)) {
        errors.invalidEmail = true;
      }
      if (errors.invalidEmail)
        return Object.keys(errors).length ? errors : null;

      return Object.keys(errors).length ? errors : null;
    };
  }

  onReqTypeClick(index: number, req: string) {
    this.selectedRequestType = index;
    this.contactusForm.get('requestVal').setValue('');
    this.contactusForm.get('requestVal').markAsUntouched();
    const requestRequiresSubproduct = [
      this.ReqType.ORDER,
      this.ReqType.RETURN,
      this.ReqType.PRODUCTTECHSUPPORT,
    ].includes(req);
    if (requestRequiresSubproduct) {
      if (req == this.ReqType.PRODUCTTECHSUPPORT)
        this.getSubproductLines(this.ReqType.ORDER);
      else this.getSubproductLines(req);
    } else {
      this.subProductLines = { itemGroups: [{ items: [] }] };
      this.clearValidatorsAndReset(['subProductLine']);
    }
  }

  onCustTypeClick(index) {
    // index == 0 => new customer option is selected
    // index == 1 => existing customer option is selected

    this.selectedCustType = index;
    if (index == 1) {
      // existing customer option is selected
      this.selectedRequestType = 0;
      this.contactusForm.patchValue({
        requestType: this.requestType[this.selectedRequestType].value,
      });
      this.subProductLines = { itemGroups: [{ items: [] }] };
      this.getSubproductLines(this.ReqType.ORDER);
      this.contactusForm
        .get('subProductLine')
        .setValidators([Validators.required]);
      this.contactusForm.get('subProductLine').updateValueAndValidity();

      this.clearValidatorsAndReset(['areaOfInterest', 'title']);
    } else {
      //new customer option is selected
      this.selectedRequestType = 0;
      this.contactusForm.patchValue({ requestType: '' });
      this.clearValidatorsAndReset(['subProductLine']);
    }
  }

  selectedFiles(event) {
    this.files = event;
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }

  getCountryList() {
    this.contactUsService.getCountries().subscribe(
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
    let countryCode = event.detail.value;
    this.contactusForm.patchValue({ country: event.detail });
    this.contactusForm.get('country').updateValueAndValidity();

    this.contactUsService.getRegion(countryCode).subscribe(
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

  onChange(event, field) {
    if (field == 'state') {
      this.contactusForm.patchValue({ state: event.detail });
      this.contactusForm.get('state').updateValueAndValidity();
    }
    if (field == 'areaOfInterest') {
      this.contactusForm.patchValue({ areaOfInterest: event.detail });
      this.contactusForm.get('areaOfInterest').updateValueAndValidity();
    }
    if (field == 'title') {
      this.contactusForm.patchValue({ title: event.detail });
      this.contactusForm.get('title').updateValueAndValidity();
    }

    if (field === 'subProductLine') {
      this.contactusForm.patchValue({ subProductLine: event.detail });
      const emailObject = this.subProductLineMap.find(
        (subProductLine) => subProductLine.label === event.detail
      );
      if (emailObject) {
        this.contactusForm.patchValue({ contactUsEmail: emailObject.value });
      }
      this.contactusForm.get('subProductLine')?.updateValueAndValidity();
      this.contactusForm.get('contactUsEmail')?.updateValueAndValidity();
    }
  }

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

  close(type) {
    if (type === 'warning') {
      this.showWarning = false;
    }
    if (type === 'success') {
      this.showSussess = false;
    }
  }

  bhDropdownClick(dropdown) {
    if (dropdown == 'country') {
      this.contactusForm.get('country').markAsTouched();
      return;
    }
    if (dropdown == 'subProductLine') {
      this.contactusForm.get('subProductLine').markAsTouched();
      return;
    }
    if (dropdown == 'state') {
      this.contactusForm.get('state').markAsTouched();
      return;
    }
    if (dropdown == 'title') {
      this.contactusForm.get('title').markAsTouched();
      return;
    }
  }

  onSubmit() {
    if (this.contactusForm.valid) {
      this.formData = { ...this.contactusForm.value };
      this.formData = this.transformFormData(this.formData);
      if (this.selectedCustType == 0) {
        delete this.formData?.custType;
        delete this.formData?.requestVal;
        delete this.formData?.requestType;
        delete this.formData?.subProductLine;
      }
      if (this.selectedCustType == 1) {
        let reqValue = this.contactusForm.value?.requestVal;
        if (this.formData.requestType == this.ReqType.ORDER) {
          this.formData.orderNumber = reqValue;
        } else if (this.formData.requestType == this.ReqType.RETURN) {
          this.formData.rmaNumber = reqValue;
        }
        delete this.formData.requestVal;
        delete this.formData.title;
        delete this.formData.areaOfInterest;
        if (this.userType == 'current') {
          delete this.formData?.custType;
          delete this.formData.title;
          delete this.formData.areaOfInterest;
          delete this.formData.companyName;
          delete this.formData.country;
          delete this.formData.email;
          delete this.formData.phoneNum;
          delete this.formData.state;
          delete this.formData.firstName;
          delete this.formData.lastName;
        }
      }
      this.isLoading = true;
      if (this.files.length > 0) {
        const documentData = new FormData();
        documentData.append('file', this.files[0]);
        const apiUrl = this.occEndpointsService.buildUrl(this.uploadUrl, {
          queryParams: this.uploadParams,
        });

        this.uploadFileWithProgress(apiUrl, documentData, {
          reportProgress: false,
          responseType: 'text' as 'json',
        }).subscribe(
          (success) => {
            this.formData.attachmentId = success;
            this.progressInfo = 100;
            this.uploadSuccess = 'SUCCESS';
            this.submitFormData();
          },
          (error) => {
            this.uploadSuccess = 'FAILURE';
            this.showWarning = true;
            setTimeout(() => {
              this.close('warning');
            }, 3000);
            window.scrollTo(0, 0);
          }
        );
      } else {
        this.submitFormData();
      }
    } else {
      this.isLoading = false;
      Object.values(this.contactusForm.controls).forEach((control) => {
        if (control instanceof FormArray) {
          control.markAllAsTouched();
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  private uploadFileWithProgress(
    API_URL: string,
    requestBody: any,
    options?: any
  ) {
    return this.http.post(API_URL, requestBody, options);
  }

  removeFile() {
    this.files = [];
  }

  getFileSize = (fileSize) => {
    if (Math.round((fileSize / 1024) * 1000) / 1000 >= 1024.0) {
      return (Math.round(fileSize / 1024) / 1024).toFixed(2) + ' mb';
    }
    if (Math.round((fileSize / 1024) * 1000) / 1000 < 1024.0) {
      return (Math.round((fileSize / 1024) * 1000) / 1000).toFixed() + ' kb';
    }
  };

  submitFormData() {
    this.contactUsService
      .saveContactUsDetails(
        this.formData,
        this.userType,
        this.productLine,
        this.selectedCustType
      )
      .subscribe(
        (data) => {
          this.showSussess = true;
          setTimeout(() => {
            this.close('success');
          }, 3000);
          this.isLoading = false;
          this.resetForm();
          if (this.loggedIn || this.selectedCustType == 1) {
            this.contactusForm.patchValue({
              requestType:
                this.requestType[this.selectedRequestType].value ??
                this.requestType[0].value,
            });
            this.contactusForm.get('requestType').updateValueAndValidity();
          }
          window.scrollTo(0, 0);
        },
        (error) => {
          this.showWarning = true;
          setTimeout(() => {
            this.close('warning');
          }, 3000);
          this.isLoading = false;
          this.resetForm();
          if (this.loggedIn || this.selectedCustType == 1) {
            this.contactusForm.patchValue({
              requestType:
                this.requestType[this.selectedRequestType].value ??
                this.requestType[0].value,
            });
            this.contactusForm.get('requestType').updateValueAndValidity();
          }
          window.scrollTo(0, 0);
        }
      );
  }

  clearValidatorsAndReset(controls: string[]) {
    controls.forEach((control) => {
      this.contactusForm.get(control)?.clearValidators();
      this.contactusForm.get(control)?.setValue('');
      this.contactusForm.get(control)?.markAsUntouched();
    });
  }

  updateValueAndValidity(controls: string[]) {
    controls.forEach((control) => {
      this.contactusForm.get(control).updateValueAndValidity();
    });
  }

  resetForm() {
    this.contactusForm.reset();
    this.files = [];
    this.contactusForm.patchValue({ country: '' });
    this.contactusForm.get('country').updateValueAndValidity();

    this.contactusForm.patchValue({ state: '' });
    this.contactusForm.get('state').updateValueAndValidity();

    this.contactusForm.patchValue({ areaOfInterest: '' });
    this.contactusForm.get('areaOfInterest').updateValueAndValidity();

    this.contactusForm.patchValue({ title: '' });
    this.contactusForm.get('title').updateValueAndValidity();

    this.contactusForm.patchValue({ subProductLine: '' });
    this.contactusForm.get('subProductLine').updateValueAndValidity();
  }

  transformFormData(formData: any) {
    return Object.keys(formData).reduce((acc, key) => {
      acc[key] =
        typeof formData[key] === 'object' &&
        formData[key] !== null &&
        'label' in formData[key]
          ? formData[key].label
          : formData[key];
      return acc;
    }, {});
  }
}
