import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteEquipmentsService } from '../site-equipments.service';
import { TranslationService } from '@spartacus/core';
import moment from 'moment';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
@Component({
  standalone: false,
  selector: 'add-equipment-to-watchlist',
  templateUrl: './add-equipment-to-watchlist.component.html',
  styleUrls: ['./add-equipment-to-watchlist.component.scss'],
})
export class AddEquipmentToWatchlistComponent implements OnInit {
  @ViewChild('textval') textval: ElementRef;
  @Input()
  productAccessData;
  findSerialNumber = true;
  searchOptions = true;
  searchResult;
  alreadyInwatchList;
  equipmentFound;
  equipmentNotFound;
  addNewEquipment = false;
  panaEquipment = false;
  sensorTypeSelect = false;
  searchEquipmentBox = true;
  backToEquipment = true;
  backToEquipmentFind = false;
  equipmentData: any;
  EndcustomerListResponse;
  probeListResponse;
  modelListResponse;
  sensorModelImageURL;
  endCustomerId: string = '';
  tagAssetNumber: string = '';
  customTariff: string = '';
  lastServiceDate: string = '';
  location: string = '';
  partName: string = '';
  partNumber: string = '';
  serialNumber: string = '';
  serviceInterval: string = '';
  equipmentSerialNumber: string;
  equipmentPartNumber: string;
  equipmentProbeType: string;
  equipmentServicedate: string;
  equipmentlastServiceDate: string;
  familyname: string;
  probeSerialNumber: string = '';
  event: any;
  probeType: string;
  selected: any;
  notes;
  productValue;
  productFamily: any = '';
  productFamilyCode = 280;
  familyName;
  minDate;
  maxDate;
  showSpinner: boolean = false;
  showPDFSpinner: boolean = false;
  sensorTypeSelected: string;
  endCustomerNameDisplay: string;
  endCustomerNameDropDown: boolean = false;
  arrPartAutoSearchResult: any = [];
  showPartLoader: boolean = false;
  partialPartNumber: string = '';
  showPartList: boolean = false;
  showPartHelp: boolean = false;
  searchText: any;

  propsProducts: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  propsSensors: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  propsModels: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  endCustomerName: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  error = {
    serialNumber: '',
    partNumber: '',
    partName: '',
    location: '',
    lastServiceDate: '',
    serviceInterval: '',
    endCustomerName: '',
    tagAssetNumber: '',
    productFamilyError: '',
    sensorType: '',
    probeSerialNumber: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public eqService: SiteEquipmentsService,
    private translate: TranslationService,
    protected globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('mySiteEquipment.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );

    if (
      this.eqService.getPartName != '' &&
      this.eqService.getPartNumber != ''
    ) {
      this.partName = this.eqService.getPartName;
      this.partNumber = this.eqService.getPartNumber;
    } else {
      this.partNumber = this.route.snapshot.queryParams['partNumber'];
      this.probeSerialNumber = this.route.snapshot.queryParams['serialNumber'];
      this.partName = this.route.snapshot.queryParams['partName'];
    }

    this.getEndCustomerList();
    this.minDate = new Date();
    this.minDate = this.minDate.setMonth(this.minDate.getMonth() - 24);
    this.maxDate = new Date();
  }

  onChange(e, field) {
    this.error[field] = '';
    e.target.value = testRegex(e.target.value, REGULAR_PATTERN.alphaNumeric);
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    this[field] = e.target.value;
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (event.target.value.length > 2) {
        event.preventDefault();
        return false;
      }
      return false;
    }
    return true;
  }

  getEndCustomer(event) {
    event.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      event.target.value
    );
    this.endCustomerNameDisplay = event.detail.label;
    this.endCustomerId = event.detail.value;
    if (event.detail.value === '') {
      this.error.endCustomerName = this.getTranslatedText(
        'mySiteEquipment.error.endCustomerName'
      );
    } else {
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onSensorSelect(event) {
    this.probeType = event.detail;
    this.sensorTypeSelected = event.detail;
  }

  stop(event) {
    if (event.target.value.length >= 1333) {
      event.preventDefault();
      return false;
    }
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 1333);
  }

  myFunction(e) {
    if (e.target.value.length >= 1333) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 1333);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  addEquipmentDetails() {
    let inputParams = [
      [
        {
          addUpdateFlag: 'CP_ADD',
          additionalInfo: this.notes ? this.notes : '',
          assetNumber: this.tagAssetNumber ? this.tagAssetNumber : '',
          endCustomer: this.endCustomerId ? this.endCustomerId : '',
          endCustomerName: this.endCustomerNameDisplay
            ? this.endCustomerNameDisplay
            : '',
          favourites: true,
          htsCode: this.customTariff ? this.customTariff : '',
          inactiveFlag: false,
          lastServiceDate: this.lastServiceDate ? this.lastServiceDate : '',
          location: this.location ? this.location : '',
          nextServiceDueInMonths: '',
          partName: this.partName ? this.partName : '',
          partNumber:
            testRegex(
              this.sanitizer.sanitize(SecurityContext.HTML, this.partNumber),
              REGULAR_PATTERN.alphaNumeric
            ) || '',
          pinned: 'X',
          removeFlag: false,
          selectedOption: 'P',
          sensorType: this.probeType ? this.sensorTypeSelected : '',
          serialNumber: this.probeSerialNumber,
          serviceDueDate: '',
          serviceHistoryDetails: [],
          serviceInterval: this.serviceInterval ? this.serviceInterval : '',
          status: 'ACTIVE',
          thereInMELFlag: true,
          customer: '',
        },
      ],
    ];
    if (this.probeSerialNumber === '' || this.probeSerialNumber === undefined) {
      this.error.probeSerialNumber = this.getTranslatedText(
        'mySiteEquipment.error.serialNumber'
      );
    } else if (this.partNumber === '' || this.partNumber === undefined) {
      this.error.partNumber = this.getTranslatedText(
        'mySiteEquipment.error.partNumber'
      );
    } else {
      this.showSpinner = true;
      this.eqService.addNewEquipment(inputParams).subscribe(
        (res: any) => {
          if (res) {
            this.showSpinner = false;
            this.router
              .navigateByUrl('/my-equipments', { skipLocationChange: true })
              .then(() => {
                this.router.navigate(['/my-equipments']);
              });
          }
        },
        (error) => {
          this.showSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.addEquipmentFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
    }
  }

  getEndCustomerList() {
    var customerList = [];
    this.eqService.getEndcustomer().subscribe((res) => {
      this.EndcustomerListResponse = res;
      this.EndcustomerListResponse.forEach((customers) => {
        customerList.push({
          label: customers.customerName + '&' + customers.customerNumber,
          value: customers.customerNumber,
        });
      });
      this.endCustomerName = {
        itemGroups: [
          {
            items: customerList,
          },
        ],
      };
      this.endCustomerNameDropDown = true;
    });
  }

  onModelSelect(event) {
    this.sensorModelImageURL = event.detail;
  }
  resetSearch() {
    this.probeSerialNumber = '';
  }

  cancelButton() {
    this.router.navigate(['/my-equipments']);
  }

  backClick() {
    this.router.navigate(['/']);
  }

  onDateChange(e) {
    this.lastServiceDate = moment(e).format('YYYY-MM-DD');
  }

  autoSearch(e, field) {
    this.partNumber = '';
    this.error[field] = '';
    e.target.value = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this[field] = e.target.value;
    this.searchText = e.target.value;
    if (this.searchText.length == 0) return;
    this.showPartLoader = true;
    this.eqService.msePartAutoSearch(this.searchText).subscribe((res) => {
      if (res && JSON.stringify(res) != '{}') {
        this.arrPartAutoSearchResult = [];
        this.showPartList = true;
        for (let eachProduct of res['products']) {
          this.showPartLoader = false;
          this.arrPartAutoSearchResult.push(eachProduct);
        }
      } else {
        this.arrPartAutoSearchResult = [];
        this.showPartList = false;
        this.showPartLoader = false;
      }
      if (this.arrPartAutoSearchResult.length == 0) {
        this.showPartList = false;
      }
      this.showPartLoader = false;
    });
  }
  setPartNumberToField(partData) {
    this.partNumber = partData.code;
    this.showPartList = false;
    this.partName = partData.name;
    this.arrPartAutoSearchResult = [];
  }
  clearPartNumber() {
    this.partNumber = '';
    this.showPartList = false;
    this.partName = '';
  }
}
