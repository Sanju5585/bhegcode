import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService } from '@spartacus/core';

import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { GuestQuoteService } from '../guest-quote.service';
import { GuestQuoteBakertabModel } from './guest-quote-bakertab.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GuestQuotePopupComponent } from '../guest-quote-popup/guest-quote-popup.component';
import { OCC_USER_ID_ANONYMOUS } from '@spartacus/core';
import { FileUploadService } from '../file-upload.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import {
  FileProgressLayouts,
  FileSizes,
} from '../../../shared/models/fileSize.model';
import { ApiService } from '../../../core/http/api.service';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'app-guest-quote-bakertab',
  templateUrl: './guest-quote-bakertab.component.html',
  styleUrls: ['./guest-quote-bakertab.component.scss'],
})
export class GuestQuoteBakertabComponent implements OnInit {
  @Input() isSubmitted;
  guestQuoteBakertabModel: GuestQuoteBakertabModel;
  quoteDetailsSubscription: Subscription;
  quoteDetails = {};
  newCartSubscription: Subscription;
  // Variable to store shortLink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  files = [];
  fileName: string;
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  uploadUrl;
  deletUrl;
  /**
   * @param {string} icon
   * @description icon name according to google material design library https://fonts.google.com/icons?selected=Material+Icons
   */
  @Input()
  icon: string;

  /**
   * @param {string} label
   * @description button label ie. Add files, upload
   */
  @Input()
  label: string;

  @Input()
  multiple: boolean = true;

  /**
   * @param {number} maxSizeInMB
   * @description max total upload size in Mb, ie. 10, 20, 30. Send 0 to avoid limitation.
   */
  @Input()
  maxSizeInMB: number = 0;
  /**
   * @param {number} maxFileSizeInMB
   * @description max individual file upload size in Mb, ie. 10, 20, 30. send 0 to avoid limitation.
   */
  @Input()
  maxFileSizeInMB: number = 0;

  /**
   * @param {number} maxLength
   * @description max number of files to upload, ie. 10, 15. send 0 to avoid limitation.
   */
  @Input()
  maxLength: number = 0;

  /**
   * @param {Array} allowedFileExtensions
   * @description array of all the allowed file extensions ie. ['pdf', 'doc', 'jpg'], values should be in lowercase. send [] to avoid limitation.
   */
  @Input()
  allowedFileExtensions = [];

  /**
   * @param {boolean} disableButton
   * @description in case we want to disable input from parent component.
   */
  @Input()
  disableButton: boolean = false;
  /**
   * @param {string} uploadId
   * @description send upload id in every parent component
   */
  @Input()
  uploadId: string = 'uploadFile';

  /**
   * @param {File[]} selectedFiles
   * @description event to send Array of File (not FileList) to parent component.
   */
  fileSizes = FileSizes;
  fileLengthError: boolean = false;
  maxSizeError: boolean = false;
  maxFileSizeError: boolean = false;
  fileTypeError: boolean = false;
  fileFormat: boolean = false;
  fileUploadSuccess: boolean = false;
  fileUploadFailure: boolean = false;
  fileListBlock: boolean = false;
  isDisabledButton: boolean = false;
  fileList: File[] = [];

  constructor(
    private apiService: ApiService,
    private translate: TranslationService,
    protected authService: AuthService,
    private launchDialogService: LaunchDialogService,
    private guestQuoteservice: GuestQuoteService,
    private globalMessageService: GlobalMessageService,
    private router: Router,
    private productCatService: ProductCatelogService,
    private fileUploadService: FileUploadService,
    public sanitizer: DomSanitizer
  ) {
    this.getCountryList();
    this.getCountryListenduser();
  }
  index = 0;
  nameCheckout: any = '';
  companyCheckout: any = '';
  phoneCheckout: any = '';
  emailCheckout: any = '';
  addressCheckout: any = '';
  address1Checkout: any = '';
  postalCheckout: any = '';
  cityCheckout: any = '';
  countrys: any = '';
  region: any = '';
  endZipcode: any = '';
  endTown: any = '';
  endUser: any = '';
  endaddressLine: any = '';
  endaddress1Line: any = '';
  quoteName: any = '';
  countryend: any = '';
  regionend: any = '';
  endUserCategory: any = '';
  radiobtnbuy: any;
  submitted: boolean = false;
  checkedSameAddress: boolean = false;
  isFormValid: boolean;
  loadSpinner: boolean = false;
  showLoading: boolean = false;
  address: any;
  endCountryCode: any = '';
  endRegionCode: any = '';
  fileUploadField: any = '';
  error = {
    endUserCategory: '',
    nameCheckout: '',
    companyCheckout: '',
    phoneCheckout: '',
    emailCheckout: '',
    addressCheckout: '',
    address1Checkout: '',
    postalCheckout: '',
    cityCheckout: '',
    countrys: '',
    region: '',
    endZipcode: '',
    endTown: '',
    endUser: '',
    countryend: '',
    regionend: '',
    endaddressLine: '',
    endaddress1Line: '',
    quoteName: '',
    maximumFileSize: '',
    pdfFileFormat: '',
    fileUploadField: '',
  };
  guestquotecheckoutbakerMsg: any;
  countriesList: any;
  countryCheckout: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  stateList: any;
  regionCheckout: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  countriesListend: any;
  countryCheckoutenduser: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  stateListend: any;
  regionCheckoutenduser: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  endUserendlist: any;
  endUserItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  ngOnInit(): void {
    this.guestQuoteBakertabModel = new GuestQuoteBakertabModel();
    this.quoteDetailsSubscription =
      this.guestQuoteservice.getQuoteCartDetails.subscribe((quoteDetails) => {
        this.quoteDetails = quoteDetails['code'];
      });
    this.getEnduserlist();
    this.deletUrl =
      'users/anonymous/quote/' + this.quoteDetails + '/removeQuoteAttach';
  }
  // function to get country list
  getCountryList() {
    this.guestQuoteservice.getCountries().subscribe(
      (data) => {
        this.countriesList = data;
        var countries = [];
        this.countriesList &&
          this.countriesList.countries.forEach((countrys) => {
            countries.push({
              label: countrys.name,
              value: countrys.isocode,
            });
          });
        this.countryCheckout = {
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
    let countryCode = event.detail;
    this.guestQuoteservice.getRegion(countryCode).subscribe(
      (data) => {
        this.stateList = data;
        var states = [];
        this.stateList.regions.forEach((region) => {
          states.push({
            label: region.name,
            value: region.isocode,
          });
        });
        this.regionCheckout = {
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
  //To get countrylist of enduser
  getCountryListenduser() {
    this.guestQuoteservice.getCountries().subscribe(
      (data) => {
        this.countriesListend = data;
        var countries = [];
        this.countriesListend &&
          this.countriesListend.countries.forEach((countryend) => {
            countries.push({
              label: countryend.name,
              value: countryend.isocode,
            });
          });
        this.countryCheckout = {
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
  // function to get state list of end user
  getStateListendsuer(event, field) {
    this.onChange(event, field);
    let countryCode = event.detail;
    this.guestQuoteservice.getRegion(countryCode).subscribe(
      (data) => {
        this.stateList = data;
        var states = [];
        this.stateList.regions.forEach((regionend) => {
          states.push({
            label: regionend.name,
            value: regionend.isocode,
          });
        });
        this.regionCheckoutenduser = {
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
  //function for enduserdetails
  getEnduserlist() {
    this.guestQuoteservice.getEnduserdetails().subscribe(
      (data) => {
        this.endUserendlist = data;
        var endusers = [];
        this.endUserendlist.endUserTypeList.forEach((endUserCategory) => {
          endusers.push({
            label: endUserCategory.name,
            value: endUserCategory.code,
          });
        });
        this.endUserItems = {
          itemGroups: [
            {
              items: endusers,
            },
          ],
        };
      },
      (error) => {}
    );
  }
  //radio btn validation
  handleChange(e, field) {
    if (field === 'radiobtnbuy') {
      this.radiobtnbuy = e.target.value;
    }
  }
  // function to get messages
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  //checking validation and submit
  submitRequestbaker() {
    this.submitted = true;
    let formKeys = [
      'nameCheckout',
      'companyCheckout',
      'phoneCheckout',
      'emailCheckout',
      'addressCheckout',
      'postalCheckout',
      'cityCheckout',
      'countrys',
      'region',
      'countryend',
      'regionend',
      'endZipcode',
      'endTown',
      'endaddressLine',
      'endUser',
      'endUserCategory',
      'maximumFileSize',
      'pdfFileFormat',
    ];
    formKeys.forEach((key) => {
      if (this[key] === '') {
        this.error[key] = this.getTranslatedText('quotecheckout.error.' + key);
        this.submitted = false;
      }
    });

    if (this.error.emailCheckout != '') {
      this.submitted = false;
      window.scrollTo({ top: 600, behavior: 'smooth' });
      return;
    }
    if (this.error.phoneCheckout != '') {
      this.submitted = false;
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }
    if (this.error.postalCheckout != '') {
      this.submitted = false;
      window.scrollTo({ top: 800, behavior: 'smooth' });
      return;
    }
    if (this.error.endZipcode != '') {
      this.submitted = false;
      window.scrollTo({ top: 1200, behavior: 'smooth' });
      return;
    }

    if (this.submitted) {
      this.loadSpinner = true;
      this.showLoading = true;
      this.guestQuoteBakertabModel['emailtype'] = 'customerCare';
      this.guestQuoteservice
        ?.submitQuotequoteId(this.guestQuoteBakertabModel, this.quoteDetails)
        .subscribe(
          (data) => {
            this.loadSpinner = false;
            this.showLoading = false;
            this.guestQuoteservice.setIsQuoteEnable(false);
            this.globalMessageService.add(
              this.getTranslatedText('quotecheckout.error.loadingMsg'),
              GlobalMessageType.MSG_TYPE_CONFIRMATION,
              5000
            );
            window.scrollTo(0, 0);
            this.newCartSubscription = this.productCatService
              .createCartWithType(
                OCC_USER_ID_ANONYMOUS,
                CommerceTypes.GUESTQUOTE
              )
              .subscribe((res) => {
                if (res) {
                  this.router.navigate(['/']);
                } else {
                }
              });
          },
          (error) => {
            this.globalMessageService.add(
              this.getTranslatedText('quotecheckout.error.errorMessage'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            this.showLoading = false;
            this.loadSpinner = false;
          }
        );
    }
  }

  //To cancel quote
  cancelQuote() {
    const shareOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.GUEST_QUOTE_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (shareOrderDialog) {
      shareOrderDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  //set address for checkbox
  setSoldToAddress(address) {
    this.address = address;
  }
  //on click of checkbox address fetching
  checkedSoldToAddress(e) {
    this.resetError();
    this.checkedSameAddress = !this.checkedSameAddress;
    let address = this.address;
    if (this.checkedSameAddress && address) {
      this.endUser = address.nameCheckout;
      this.endaddressLine = address.addressCheckout;
      this.guestQuoteBakertabModel['endaddressLine'] = address.addressCheckout;
      this.endaddress1Line = address.address1Checkout;
      this.guestQuoteBakertabModel['endaddress1Line'] =
        address.address1Checkout;
      this.countryend = address.countrys;
      this.guestQuoteBakertabModel['endUserCountryIso'] = this.endCountryCode;
      this.regionCheckoutenduser = '';
      this.regionCheckoutenduser = this.regionCheckout;
      this.regionend = address.region;
      this.guestQuoteBakertabModel['endUserRegionIso'] = this.endRegionCode;
      this.endTown = address.cityCheckout;
      this.guestQuoteBakertabModel['endTown'] = address.cityCheckout;
      this.endZipcode = address.postalCheckout;
      this.guestQuoteBakertabModel['endZipcode'] = address.postalCheckout;
      var phoneNumRegx = '/^[0-9]+$/';
      if (
        address.postalCheckout &&
        address.postalCheckout.match(/^[0-9]+$/) === null
      ) {
        this.error.endZipcode = this.getTranslatedText(
          'quotecheckout.error.zipcodeInvalid'
        );
      }
    } else {
      this.endUser = '';
      this.endaddressLine = '';
      this.guestQuoteBakertabModel['endaddressLine'] = '';
      this.endaddress1Line = '';
      this.guestQuoteBakertabModel['endaddress1Line'] = '';
      this.countryend = '';
      this.guestQuoteBakertabModel['endUserCountryIso'] = '';
      this.regionCheckoutenduser = '';
      this.regionend = '';
      this.guestQuoteBakertabModel['endUserRegionIso'] = '';
      this.endTown = '';
      this.guestQuoteBakertabModel['endTown'] = '';
      this.endZipcode = '';
      this.guestQuoteBakertabModel['endZipcode'] = '';
    }
  }

  //on change for errormsg
  onChange(e, field) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    if (field) {
      if (field === 'emailCheckout') {
        var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteBakertabModel.emailAddress = e.target.value
          ? e.target.value.toLowerCase()
          : '';
        if (e.target.value && !e.target.value.match(emailRegx)) {
          this.error.emailCheckout = this.getTranslatedText(
            'quotecheckout.error.emailInvalid'
          );
        } else {
          this.error.emailCheckout = '';
        }
      } else if (field === 'endZipcode') {
        var phoneNumRegx = '/^[0-9]+$/';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteBakertabModel[field] = e.target.value
          ? e.target.value
          : '';
        if (e.target.value && e.target.value.match(/^[0-9]+$/) === null) {
          this.error.endZipcode = this.getTranslatedText(
            'quotecheckout.error.zipcodeInvalid'
          );
        } else {
          this.error.endZipcode = '';
        }
      } else if (field === 'postalCheckout') {
        var phoneNumRegx = '/^[0-9]+$/';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteBakertabModel[field] = e.target.value
          ? e.target.value
          : '';
        if (e.target.value && e.target.value.match(/^[0-9]+$/) === null) {
          this.error.postalCheckout = this.getTranslatedText(
            'quotecheckout.error.zipcodeInvalid'
          );
        } else {
          this.error.postalCheckout = '';
        }
      } else if (field === 'phoneCheckout') {
        var phoneNumRegx = '/^[0-9]+$/';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteBakertabModel[field] = e.target.value
          ? e.target.value
          : '';
        if (e.target.value && e.target.value.match(/^[0-9]+$/) === null) {
          this.error.phoneCheckout = this.getTranslatedText(
            'quotecheckout.error.phoneInvalid'
          );
        } else {
          this.error.phoneCheckout = '';
        }
      } else if (field === 'countrys') {
        this.guestQuoteBakertabModel.country = e.detail;
        this.endCountryCode = e.detail;
        this[field] = e.target.value;
        this.error.countrys = '';
      } else if (field === 'countryend') {
        this.error.countryend = '';
        this.guestQuoteBakertabModel.endUserCountryIso = e.detail;
        this[field] = e.target.value;
      } else if (field === 'regionend') {
        this.error.regionend = '';
        this.guestQuoteBakertabModel.endUserRegionIso = e.detail;
        this[field] = e.target.value;
      } else if (field === 'region') {
        this.error.region = '';
        this.guestQuoteBakertabModel.region = e.detail;
        this.endRegionCode = e.detail;
        this[field] = e.target.value;
      } else if (field === 'nameCheckout') {
        this.error[field] = '';
        e.target.value = this.sanitizer.sanitize(
          SecurityContext.HTML,
          e.target.value
        );
        this[field] = e.target.value;
        this.guestQuoteBakertabModel[field] = e.target.value;
        this.guestQuoteBakertabModel.userName = e.target.value
          ? e.target.value
          : '';
      } else {
        this.error[field] = '';
        e.target.value = this.sanitizer.sanitize(
          SecurityContext.HTML,
          e.target.value
        );
        this[field] = e.target.value;
        this.guestQuoteBakertabModel[field] = e.target.value
          ? e.target.value
          : '';
      }
    }
    this.pushAddress();
  }
  resetError() {
    this.error.regionend = '';
    this.error.countryend = '';
    this.error.endaddressLine = '';
    this.error.endaddress1Line = '';
    this.error.endUser = '';
    this.error.endTown = '';
    this.error.endZipcode = '';
    this.error.fileUploadField = '';
  }
  //to take values address
  pushAddress() {
    this.address = {
      addressCheckout: this.addressCheckout,
      address1Checkout: this.address1Checkout,
      countrys: this.countrys,
      region: this.region,
      cityCheckout: this.cityCheckout,
      postalCheckout: this.postalCheckout,
      nameCheckout: this.endUser,
    };
  }

  convertMbToBytes(size: number) {
    return 1024 * 1024 * size;
  }
  selectedFiles(event) {
    this.files = event;
    this.fileUploadService
      .upload(this.quoteDetails, this.files[0])
      .subscribe((data) => {
        if (
          this.files[0].type === '' &&
          this.files[0].type === null &&
          this.files[0].type === undefined
        ) {
          this.fileUploadSuccess = false;
          this.isDisabledButton = false;
          this.fileUploadFailure = true;
        } else {
          this.fileUploadFailure = false;
          this.fileUploadSuccess = true;
          this.isDisabledButton = true;
        }
      });
  }

  deletedFiles(event) {
    this.deletUrl =
      'users/anonymous/quote/' + this.quoteDetails + '/removeQuoteAttach';
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
      this.fileUploadSuccess = false;
      this.fileUploadFailure = false;
      this.isDisabledButton = false;
    }
  }
  getAllowedExtensions() {
    const extArr = this.allowedFileExtensions.map((i) => '.' + i);
    return extArr.join();
  }
  displayExtention() {
    const extArr = this.allowedFileExtensions.map((i) => ' .' + i);
    return extArr.join();
  }
}
