import { AfterViewInit, Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RegistrationService } from './registration.service';
import { LanguageService } from '@spartacus/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState } from '@ngrx/router-store';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DialogComponent } from '../../../shared/components/dialog-component/dialog.component';
import {
  RegisterUrl,
  PlApiURL,
  AllProductLine,
} from '../../../shared/enums/availableProductList.enum';
import { LANGUAGES } from '../../../shared/models/language.model';
import { RegFormFields } from '../../../shared/models/registration-models';

declare const Optanon: any;
interface checkBoxArr {
  name: string;
  value: boolean;
}

const productLines = {
  [RegisterUrl.ReuterStokes]: 'Reuter-Stokes',
  [RegisterUrl.Bently]: 'cordant',
  [RegisterUrl.Druck]: 'Druck',
  [RegisterUrl.Panametrics]: 'Panametrics',
  [RegisterUrl.Waygate]: 'Waygate Technologies',
};

@Component({
  standalone: false,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements AfterViewInit {
  addressProofFile: any;
  ownershipStructureFile: any;
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    location.reload();
  }
  registrationForm: FormGroup;
  isCheckedSubProductLines: checkBoxArr[] = [];
  isCheckedMarkets: checkBoxArr[] = [];
  isCheckedOrganisationTypes: checkBoxArr[] = [];
  isCheckedRoles: boolean[] = [];
  pTouched = false;
  setPassFieldType = 'password';
  confirmPassFieldType = 'password';
  currentLanguage = '';
  props: any = {};
  showEmailInfo: boolean = false;
  showPasswordInfo: boolean = false;
  showCustAccNoInfo: boolean = false;
  showEmailGreenTick: boolean = false;
  showQuestionInfo: boolean = false;
  showEndCustomerInfo: boolean = false;
  showAddressProof: boolean = false;
  showOwnerShipStructure: boolean = false;
  regFormFields: RegFormFields = new RegFormFields();
  updatedCountryList = [];
  isLoading: boolean = false;
  ddWidth = '140px';
  currentUrl: string;
  registerUrl = RegisterUrl;
  productLine: string;
  allProductLine = AllProductLine;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf', 'png'];
  showIcon = true;
  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    protected languageService: LanguageService,
    protected router: Router,
    private dialog: MatDialog,
    private store: Store<{ router: RouterState }>,
    private route: ActivatedRoute,
    private custAccService: CustomerAccountService
  ) {}

  ngOnInit() {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    const itemsArr = [];
    for (const key in LANGUAGES) {
      itemsArr.push({
        label: LANGUAGES[key],
        value: key,
      });
    }
    this.props = {
      itemGroups: [
        {
          items: [...itemsArr],
        },
      ],
    };

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, this.emailValidator()]],
      userPswd: ['', [Validators.required, this.passwordValidator()]],
      confirmPassword: ['', [Validators.required, this.matchValidator()]],
      bhCustAccNo: [null, Validators.required],
      endCustomer: [null],
      governmentEntity: [null],
      detailNumber: [''],
      detailNumberValue: [''],
      addressProof: [''],
      addressType: [''],
      ownershipStructure: [''],
      customerNumber: [''],
      companyName: [''],
      companyAddressLine1: [''],
      companyAddressLine2: [''],
      stateProvince: [''],
      town: [''],
      postalCode: [''],
      country: [''],
      productLine: [''],
      subProductLine: this.fb.array([]),
      dsMarket: this.fb.array([]),
      orgTypes: this.fb.array([], Validators.required),
      dsRoles: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      appList: ['DSS'],
      formFlag: ['true'],
      userName: [''],
      phoneNumber: [0],
    });

    this.store.select('router').subscribe((routerState: any) => {
      this.currentUrl = routerState?.router?.state?.url || '';
      this.registrationForm.patchValue({
        productLine: productLines[this.currentUrl] || '',
      });
    });
    this.registrationForm.get('country').valueChanges.subscribe((c) => {
      if (c.value.toLowerCase().trim() == 'high risk') {
        this.registrationForm
          .get('ownershipStructure')
          .setValidators([Validators.required]);
        this.registrationForm
          .get('ownershipStructure')
          .updateValueAndValidity();
      } else {
        this.registrationForm.get('ownershipStructure').clearValidators();
        this.registrationForm.get('ownershipStructure').setValue('');
        this.registrationForm.get('ownershipStructure').markAsUntouched();
      }
    });
    this.registrationForm.get('bhCustAccNo').valueChanges.subscribe((value) => {
      if (value == true) {
        this.registrationForm
          .get('customerNumber')
          .setValidators([
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(10),
          ]);
        this.registrationForm.get('companyName').clearValidators();
        this.registrationForm.get('companyAddressLine1').clearValidators();
        this.registrationForm.get('stateProvince').clearValidators();
        this.registrationForm.get('town').clearValidators();
        this.registrationForm.get('postalCode').clearValidators();
        this.registrationForm.get('country').clearValidators();
        this.registrationForm.get('endCustomer').clearValidators();
        this.registrationForm.get('governmentEntity').clearValidators();
        this.registrationForm.get('addressProof').clearValidators();
        this.registrationForm.get('addressType').clearValidators();
        this.registrationForm.get('detailNumber').clearValidators();
        this.registrationForm.get('detailNumberValue').clearValidators();
        this.registrationForm.get('ownershipStructure').clearValidators();

        this.registrationForm.get('companyName').setValue('');
        this.registrationForm.get('companyAddressLine1').setValue('');
        this.registrationForm.get('stateProvince').setValue('');
        this.registrationForm.get('town').setValue('');
        this.registrationForm.get('postalCode').setValue('');
        this.registrationForm.get('country').setValue('');
        this.registrationForm.get('companyAddressLine2').setValue('');
        this.registrationForm.get('endCustomer').setValue(null);
        this.registrationForm.get('governmentEntity').setValue(null);
        this.registrationForm.get('addressProof').setValue('');
        this.registrationForm.get('addressType').setValue('');
        this.registrationForm.get('detailNumber').setValue('');
        this.registrationForm.get('detailNumberValue').setValue('');
        this.registrationForm.get('ownershipStructure').setValue('');

        this.registrationForm.get('companyName').markAsUntouched();
        this.registrationForm.get('companyAddressLine1').markAsUntouched();
        this.registrationForm.get('stateProvince').markAsUntouched();
        this.registrationForm.get('town').markAsUntouched();
        this.registrationForm.get('postalCode').markAsUntouched();
        this.registrationForm.get('country').markAsUntouched();
        this.registrationForm.get('companyAddressLine2').markAsUntouched();
        this.registrationForm.get('endCustomer').markAsUntouched();
        this.registrationForm.get('governmentEntity').markAsUntouched();
        this.registrationForm.get('addressProof').markAsUntouched();
        this.registrationForm.get('addressType').markAsUntouched();
        this.registrationForm.get('detailNumber').markAsUntouched();
        this.registrationForm.get('detailNumberValue').markAsUntouched();
        this.registrationForm.get('ownershipStructure').markAsUntouched();
      } else if (value == false) {
        this.registrationForm.get('customerNumber').clearValidators();
        this.registrationForm.get('customerNumber').setValue('');
        this.registrationForm.get('customerNumber').markAsUntouched();

        this.registrationForm
          .get('companyName')
          .setValidators([Validators.required]);
        if (this.productLine == AllProductLine.waygate) {
          this.registrationForm
            .get('endCustomer')
            .setValidators([Validators.required]);
          this.registrationForm
            .get('governmentEntity')
            .setValidators([Validators.required]);
          this.registrationForm
            .get('addressProof')
            .setValidators([Validators.required]);
          this.registrationForm
            .get('addressType')
            .setValidators([Validators.required]);
          this.registrationForm
            .get('detailNumber')
            .setValidators([Validators.required]);
          this.registrationForm
            .get('detailNumberValue')
            .setValidators([Validators.required]);

          this.registrationForm.get('endCustomer').updateValueAndValidity();
          this.registrationForm
            .get('governmentEntity')
            .updateValueAndValidity();
          this.registrationForm.get('addressProof').updateValueAndValidity();
          this.registrationForm.get('addressType').updateValueAndValidity();
          this.registrationForm.get('detailNumber').updateValueAndValidity();
          this.registrationForm
            .get('detailNumberValue')
            .updateValueAndValidity();
        }

        this.registrationForm
          .get('companyAddressLine1')
          .setValidators([Validators.required]);
        this.registrationForm
          .get('stateProvince')
          .setValidators([Validators.required]);
        this.registrationForm.get('town').setValidators([Validators.required]);
        this.registrationForm
          .get('postalCode')
          .setValidators([
            Validators.required,
            Validators.pattern('^[A-Za-z0-9 -]{3,10}$'),
          ]);
        this.registrationForm
          .get('country')
          .setValidators([Validators.required]);
      }

      this.registrationForm.get('customerNumber').updateValueAndValidity();
      this.registrationForm.get('companyName').updateValueAndValidity();
      this.registrationForm.get('companyAddressLine1').updateValueAndValidity();
      this.registrationForm.get('stateProvince').updateValueAndValidity();
      this.registrationForm.get('town').updateValueAndValidity();
      this.registrationForm.get('postalCode').updateValueAndValidity();
      this.registrationForm.get('country').updateValueAndValidity();
    });

    this.registrationForm.get('firstName').valueChanges.subscribe((val) => {
      this.registrationForm.get('userPswd').updateValueAndValidity();
    });

    this.registrationForm.get('lastName').valueChanges.subscribe((val) => {
      this.registrationForm.get('userPswd').updateValueAndValidity();
    });

    this.registrationForm.get('emailId').valueChanges.subscribe((val) => {
      this.registrationForm.get('userPswd').updateValueAndValidity();
    });

    this.getDefaultLanguage();
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.registrationService
      .getRegFormFieldsData(PlApiURL[this.currentUrl])
      .subscribe((resData: RegFormFields) => {
        this.isLoading = false;
        this.rearrangeRoles(resData.dsRoles);
        let data: any = resData;
        data.countryList.entry.sort(
          (
            country1: { key: string; value: string },
            country2: { key: string; value: string }
          ) => (country1.key < country2.key ? -1 : 1)
        );
        this.regFormFields = data;
        this.isCheckedSubProductLines = new Array(
          resData.subProductList?.length
        ).fill({ name: '', value: false });
        this.isCheckedMarkets = new Array(resData.dsMarket?.length).fill({
          name: '',
          value: false,
        });
        this.isCheckedOrganisationTypes = new Array(
          resData.accountTypeList?.length
        ).fill({ name: '', value: false });
        this.isCheckedRoles = new Array(resData.dsRoles.length).fill(false);

        const subProductLineControl = this.fc.subProductLine as FormArray;

        if (this.regFormFields.subProductList?.length > 0) {
          subProductLineControl.setValidators([Validators.required]);
        } else {
          subProductLineControl.clearValidators();
          subProductLineControl.clear();
          subProductLineControl.setValue([]);
        }
        subProductLineControl.updateValueAndValidity();

        const dsMarketControl = this.fc.dsMarket as FormArray;

        if (this.regFormFields.dsMarket?.length > 0) {
          dsMarketControl.setValidators([Validators.required]);
        } else {
          dsMarketControl.clearValidators();
          dsMarketControl.clear();
          dsMarketControl.setValue([]);
        }
        dsMarketControl.updateValueAndValidity();
      });
  }

  getDefaultLanguage() {
    this.languageService.getActive().subscribe((res) => {
      this.currentLanguage = LANGUAGES[res];
      this.ddWidth = this.registrationService.calculateInputwidth(
        this.currentLanguage
      );
    });
  }

  onCheckBoxChange(event, controlName, isChecked, index, controlValue?) {
    if (isChecked[index].value) {
      isChecked[index] = { name: controlValue, value: false };
    } else {
      isChecked[index] = { name: controlValue, value: true };
    }

    let formArray: FormArray = this.registrationForm.get(
      controlName
    ) as FormArray;
    if (event.target.value === 'Not Listed Above' && isChecked[index].value) {
      formArray.clear();
      formArray.setValue([]);
      isChecked.fill({ name: '', value: false });
      isChecked[index] = { name: 'Not Listed Above', value: true };
      formArray.push(this.fb.control(event.target.value));
    } else if (
      event.target.value === 'Not Listed Above' &&
      !isChecked[index].value
    ) {
      const index4 = formArray.controls.findIndex(
        (control) => control.value == 'Not Listed Above'
      );
      if (index4 !== -1) {
        formArray.removeAt(index4);
      }
    } else if (event.target.value !== 'Not Listed Above') {
      const index1 = formArray.controls.findIndex((control) => {
        return control.value == 'Not Listed Above';
      });
      if (index1 !== -1) {
        formArray.removeAt(index1);
        isChecked[
          isChecked.findIndex((ele) => ele.name == 'Not Listed Above')
        ] = { name: 'Not Listed Above', value: false };
      }
      const index3 = formArray.controls.findIndex(
        (control) => control.value == event.target.value
      );
      if (index3 !== -1) {
        formArray.removeAt(index3);
      } else {
        formArray.push(this.fb.control(event.target.value));
        formArray.controls.forEach((control) => control.markAsTouched());
      }
    }
  }

  onRadioChange(isChecked, index) {
    if (isChecked == 'isCheckedRoles')
      this.isCheckedRoles = this.isCheckedRoles.map((value, i) => i === index);
  }

  get fc(): any {
    return this.registrationForm.controls;
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const c_value = control.value;
      let value = c_value;
      if (!value) {
        this.pTouched = false;
        return null;
      }
      this.pTouched = true;

      const fName = this.registrationForm.get('firstName')?.value || '';
      const lName = this.registrationForm.get('lastName')?.value || '';
      const email = this.registrationForm.get('emailId')?.value || '';
      let emailSeg = email?.split(/["!#$%&�()*+,-./\:;<=>?@^_`{|}~]/);

      const errors: ValidationErrors | any = {};

      if (value.length < 14) {
        errors.missingLength = true;
      }
      if (!/[!#@$%^&*(),.?:{}|<>_]/.test(value)) {
        errors.missingSpecialChar = true;
      }
      if (!/[a-z]/.test(value)) {
        errors.missingLowerCaseLetter = true;
      }
      if (!/[A-Z]/.test(value)) {
        errors.missingUpperCaseLetter = true;
      }
      if (!/\d/.test(value)) {
        errors.misingNumber = true;
      }
      if (value.toLowerCase().includes(fName.toLowerCase())) {
        errors.includeFirstName = true;
      }
      if (value.toLowerCase().includes(lName.toLowerCase())) {
        errors.includeLastName = true;
      }
      for (let i = 0; i < emailSeg.length; i++) {
        if (value.toLowerCase().includes(emailSeg[i].toLowerCase())) {
          errors.includeUserName = true;
          break;
        }
      }
      this.registrationForm.get('confirmPassword').updateValueAndValidity();

      return Object.keys(errors).length ? errors : null;
    };
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

      var res = value.split('@');
      if (
        res[1].toUpperCase() == 'bhge.com'.toUpperCase() ||
        res[1].toUpperCase() == 'bakerhughes.com'.toUpperCase()
      ) {
        errors.bhEmployee = true;
      }

      // if (value.includes("@yahoo.com") || value.includes("@gmail.com") || value.includes("@hotmail.com")) {
      //   errors.notBussunessEmail = true;
      // }
      return Object.keys(errors).length ? errors : null;
    };
  }

  matchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const errors: ValidationErrors | any = {};

      let _password = this.registrationForm.get('userPswd')?.value || '';
      if (value !== _password) {
        errors.passwordNotMatched = true;
      }
      return Object.keys(errors).length ? errors : null;
    };
  }

  onLanguageChange(event) {
    this.languageService.setActive(event.detail);
    this.router.navigate([this.currentUrl]);
  }

  onChangeCustomerAccNo() {
    if (this.fc.customerNumber.valid) {
      let formData = { ...this.registrationForm.value };
      delete formData.confirmPassword;
      this.isLoading = true;
      this.registrationService
        .sAPCustomerNumberValidation(formData, PlApiURL[this.currentUrl])
        .subscribe((data: any) => {
          this.isLoading = false;
          if (data?.errorMessage) {
            this.fc.customerNumber.setErrors({ invalidNumber: true });
          }
        });
    }
  }

  onEmailChange() {
    if (this.fc.emailId.valid) {
      let email = this.registrationForm.get('emailId').value;
      let fName = this.registrationForm.get('firstName').value;
      let lName = this.registrationForm.get('lastName').value;
      this.isLoading = true;
      this.registrationService
        .fetchSSOForEmail(email, fName, lName, PlApiURL[this.currentUrl])
        .subscribe(
          (res: any) => {
            this.isLoading = false;
            if (res.statusCode == 'YES') {
              //!res.userMessageList
              this.showEmailGreenTick = true;
              this.registrationForm.get('userName').setValue(email);
            } else if (res.statusCode == 'NO') {
              //res.userMessageList?.length > 0
              this.showEmailGreenTick = false;
              this.dialog.open(DialogComponent, {
                data: {
                  type: 'email_exist',
                  title: '',
                  message:
                    'moreThanOneUsername',
                  isI18n: false,
                },
                width: '400px',
              });
              this.fc.emailId.setErrors({ alreadyExist: true });
            }
          },
          (error) => {
            this.showEmailGreenTick = false;
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: 'Alert',
                message:
                  'experiencingTechnicalIssue',
                isI18n: false,
              },
              width: '400px',
            });
            this.fc.emailId.setErrors({ tryAgain: true });
          }
        );
    } else {
      this.showEmailGreenTick = false;
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      if (this.registrationForm.value.productLine == 'Waygate Technologies') {
        if (
          this.registrationForm.value.subProductLine[0] ==
          'Remote Visual Inspection'
        ) {
          this.registrationForm.value.productLine = 'Waygate Visual inspection';
        } else if (this.registrationForm.value.subProductLine[0] == 'Film') {
          this.registrationForm.value.productLine =
            'Waygate film and film products';
        } else if (
          this.registrationForm.value.subProductLine[0] == 'Ultrasonic Testing'
        ) {
          this.registrationForm.value.productLine = 'Waygate Ultrasonic';
        } else if (
          this.registrationForm.value.subProductLine[0] == 'Digital Imaging'
        ) {
          this.registrationForm.value.productLine = 'Waygate x-ray';
        } else if (
          this.registrationForm.value.subProductLine[0] ==
          'Industrial Radiography'
        ) {
          this.registrationForm.value.productLine = 'Waygate radiography';
        } else if (
          this.registrationForm.value.subProductLine[0] == 'Not Listed Above'
        ) {
          this.registrationForm.value.productLine = 'Not Listed Above';
        }
      }

      let formData = {
        ...this.registrationForm.value,
        country: this.registrationForm.value?.country.key,
      };
      delete formData.confirmPassword;
      this.isLoading = true;
      this.registrationService
        .processRequest(formData, PlApiURL[this.currentUrl])
        .subscribe((responseall: any) => {
          this.isLoading = false;
          if (
            null != responseall.statusDetails &&
            responseall.statusDetails == 'Auto Approved'
          ) {
            this.router.navigate(['progress-page'], { relativeTo: this.route });
            return true;
          } else if (
            null != responseall.statusDetails &&
            responseall.statusDetails == 'Manual Approval'
          ) {
            this.router.navigate(['progress-page'], { relativeTo: this.route });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage ==
              'There is an existing record with the same SSO number'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.validation2',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage ==
              'This is not a valid sold-to location number.  Please try again, or enter your company data below'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.validation3',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage ==
              'GE employees and contractors must register at oneidm.ge.com (oneidm.ge.com).'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.msg',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage ==
              'Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bg.register.techErr',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage == 'Issue with creation of SSO in LDAP'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.ssoIssue',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.errorMessage &&
            responseall.errorMessage == 'RegistrationNetworkIssue'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.ntwIssue',
                isI18n: true,
              },
              width: '500px',
            });
          } else if (
            null != responseall.userMessageList &&
            responseall.userMessageList[0] == 'Invalid Captcha'
          ) {
            this.dialog.open(DialogComponent, {
              data: {
                type: 'alert',
                title: '',
                message: 'bh.register.validation4',
                isI18n: true,
              },
              width: '500px',
            });
          } else {
            if (
              responseall?.errorMessage == null ||
              responseall?.errorMessage == ''
            ) {
              this.router.navigateByUrl('/register/progress-page');
            } else {
              this.dialog.open(DialogComponent, {
                data: {
                  type: 'alert',
                  title: '',
                  message: responseall?.errorMessage,
                  isI18n: false,
                },
                width: '500px',
              });
            }
          }
        });
    } else {
      Object.values(this.registrationForm.controls).forEach((control) => {
        if (control instanceof FormArray) {
          control.markAllAsTouched();
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  toggleSetPasswordVisibility() {
    this.setPassFieldType =
      this.setPassFieldType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPassFieldType =
      this.confirmPassFieldType === 'password' ? 'text' : 'password';
  }

  onClickCookie(event: Event) {
    Optanon.ToggleInfoDisplay();
  }

  openTerms() {
    const termsDocUrl =
      environment.occBaseUrl +
      `/_ui/responsive/common/images/DSe-CommercePortalTermsofUse.pdf`;
    (window as any).open(termsDocUrl, '_blank');
  }

  openTermsCondition(data) {
    this.dialog.open(DialogComponent, {
      data: { type: 'manual_approval', title: 'terms of use', message: '' },
      width: '650px',
    });
  }

  logoClick() {
    window.location.href = '/';
  }

  ngAfterViewInit() {
    this.registrationService.hideCommonHeaderFooter();
  }

  rearrangeRoles(dsRoles: string[]) {
    const index = dsRoles.indexOf('Other');
    if (index > -1) {
      dsRoles.splice(index, 1);
      dsRoles.push('Other');
    }
    return dsRoles;
  }
  selectedFiles(event, type) {
    console.log(event, type);
    if (type === 'addressProof') {
      this.addressProofFile = event[0];
      this.uploadKYCAttachment(event[0] as File);
    } else if (type === 'ownershipStructure') {
      this.ownershipStructureFile = event[0];
      this.uploadOSAttachment(event[0] as File);
    }
  }
  removeAttchment(type) {
    if (type === 'addressProof') {
      this.addressProofFile = null;
    } else if (type === 'ownershipStructure') {
      this.ownershipStructureFile = null;
    }
    this.registrationForm.get(type).setValue('');
  }

  uploadKYCAttachment(file) {
    this.registrationService
      .uploadKYCAttachment(this.productLine, file)
      .subscribe((res) => {
        this.registrationForm.get('addressProof').setValue(res);
      });
  }
  uploadOSAttachment(file) {
    this.registrationService
      .uploadOSAttachment(this.productLine, file)
      .subscribe((res) => {
        this.registrationForm.get('ownershipStructure').setValue(res);
      });
  }
}
