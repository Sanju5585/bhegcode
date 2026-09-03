import { Product } from './../../../core/product-catalog/model/product-model';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  SecurityContext,
} from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SiteEquipmentsService } from '../site-equipments.service';
import { TranslationService } from '@spartacus/core';
import moment from 'moment';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { saveAs } from 'file-saver';
import { HttpCancelService } from '../../../shared/services/httpcancel.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { Observable, Subscription } from 'rxjs';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
@Component({
  standalone: false,
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements OnInit {
  @ViewChild('languageDropdown') languageDropdown: ElementRef;
  private createRmaSubscripton: Subscription;
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
  productFamilyResponse;
  EndcustomerListResponse;
  probeListResponse;
  modelListResponse;
  sensorModelImageURL;
  endCustomerId: string = '';
  tagAssetNumber: string = '';
  customeTariff: string = '';
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
  probeType: string = '';
  selected: any;
  notes;
  productValue;
  productFamilyCode = 280;
  familyName;
  minDate;
  maxDate;
  lastCalDate: string;
  showSpinner: boolean = false;
  showPDFSpinner: boolean = false;
  propsSensorsDropDown: boolean = false;
  propsModelsDropDown: boolean = false;
  endCustomerNameDropDown: boolean = false;
  sensorTypeSelected: string;
  endCustomerNameDisplay: string;
  showAddLink: boolean = true;
  savedToWatchList: boolean = false;
  additionalInfo;
  probeModelType;

  sensorType;
  addUpdateFlag;
  customer;
  productData: any;
  rmaStatus: any;
  searchButttonFlag: boolean = true;
  productLine;
  batchFound;
  fabricationFound;
  batchNotFound;
  fabricationNotFound;
  panametricproduct = false;
  familySelect = true;
  searchComponent = false;
  waygateProduct;
  bentlyProduct;
  waygateProductHeader = true;
  fabricationNumber: string = '';
  imageFound;
  productSelected: string = '';
  batchId: string;
  fabNumber;
  pancalRightSection = false;
  calibrationType;
  waygateImage;
  druckProduct;
  druckNotFound;
  druckFound;
  druckImage;
  druckLoadingImg: boolean = false;
  serialNumberDruck: string = '';
  druckSerialNumber: string;
  docId: string;
  rightBox: Boolean = false;
  batch: boolean = true;
  selectedType;
  selectedBatch: boolean = true;
  selectedFabric: boolean = false;
  searchType: String = '';
  searchList: any = ['BATCH', 'FABRICATION'];
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

  productFamily = {
    itemGroups: [
      {
        items: [
          {
            label: 'mySiteEquipment.productCode',
            value: 'Panametrix',
          },
          {
            label: 'mySiteEquipment.waygateFilmChemistry',
            value: 'waygateFamily',
          },
          {
            label: 'mySiteEquipment.druckPressureSensors',
            value: 'druckPressure',
          },
          {
            label: 'mySiteEquipment.bentlyCalibrationCert',
            value: 'bentlyCertificates',
          },
        ],
      },
    ],
  };
  languages = {
    itemGroups: [
      {
        items: [
          {
            label: 'English',
            value: 'en',
          },
          {
            label: 'French',
            value: 'fr',
          },
        ],
      },
    ],
  };

  constructor(
    private router: Router,
    public eqService: SiteEquipmentsService,
    private translate: TranslationService,
    protected globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    private multiCartFacade: MultiCartFacade,
    private returnProdService: ProductReturnService,
    private custAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private httpCancelService: HttpCancelService,
    private customerAccService: CustomerAccountService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnDestroy(): void {
    this.createRmaSubscripton?.unsubscribe();
  }

  ngOnInit() {
    this.translate
      .translate('mySiteEquipment.findcalibrationCerificatesLink')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadCrumbs([
          {
            label: res,
            link: '/calibration-data',
          },
        ])
      );
    this.translate
      .translate('mySiteEquipment.findcalibrationCerificates')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.getProbeTypeList();
    this.getModelTypeList();
    this.getEndCustomerList();
    this.minDate = new Date();
    this.minDate = this.minDate.setMonth(this.minDate.getMonth() - 24);
    this.maxDate = new Date();
    this.productFamily.itemGroups.forEach(group => {
      this.updateLangForOptions(group.items,'label')
     });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  handleChange(e: any) {
    this.fabricationNumber = '';
    this.selectedType = e.target.value;
    if (this.selectedType === 'BATCH') {
      this.selectedBatch = true;
      this.selectedFabric = false;
    } else {
      this.selectedBatch = false;
      this.selectedFabric = true;
    }
  }
  onChange(e, field) {
    this.error[field] = '';
    this[field] = e.target.value;
    this.error.serialNumber = '';
    e.target.value = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (
      field === 'probeSerialNumber' &&
      e.target.value != '' &&
      this.probeType != '' &&
      this.probeSerialNumber != ''
    ) {
      this.searchButttonFlag = false;
    } else if (
      (field === 'serialNumberDruck' && this.serialNumberDruck.length >= 3) ||
      (field === 'fabricationNumber' && this.fabricationNumber != '')
    ) {
      this.searchButttonFlag = false;
    } else {
      this.searchButttonFlag = true;
    }
  }

  pasteData(event: ClipboardEvent, field) {
    this[field] = event.target;
    if (
      field === 'probeSerialNumber' &&
      this.probeType != '' &&
      this.probeSerialNumber != ''
    ) {
      this.searchButttonFlag = false;
      if (this.probeSerialNumber != '' && this.probeType === '') {
        this.searchButttonFlag = true;
      } else {
        this.searchButttonFlag = false;
        this.probeSerialNumber = event.clipboardData.getData('text');
      }
    } else {
      this.searchButttonFlag = true;
      this.probeSerialNumber = event.clipboardData.getData('text');
    }
    if (field === 'serialNumberDruck' || field === 'fabricationNumber') {
      this.searchButttonFlag = false;
      this.fabricationNumber = event.clipboardData.getData('text');
      this.serialNumberDruck = event.clipboardData.getData('text');
      if (this.serialNumberDruck.length >= 3) {
        this.searchButttonFlag = false;
      } else {
        this.searchButttonFlag = true;
      }
    } else {
      this.searchButttonFlag = true;
    }
  }

  getEndCustomer(event) {
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
    this.probeType = event.detail.label;
    if (this.probeSerialNumber == '' && this.probeType == '') {
      this.searchButttonFlag = true;
    } else if (this.probeSerialNumber != '') {
      this.searchButttonFlag = false;
    }
  }

  createNewRma() {
    const updatedProduct = {
      ...this.productData,
      serialNumber: this.serialNumber,
      similar: false,
    };
    this.createRmaSubscripton = this.returnProdService
      .rmaValidateAndRedirect(updatedProduct)
      .subscribe((val: any) => {
        if (!val?.modal) {
          this.multiCartFacade.reloadCart(val, {
            active: true,
          });
          this.returnProdService.selectRmaProduct(updatedProduct);
          this.router.navigate([`/${this.productLine}/returns/cart`]);
        }
      });
  }

  addEquipmentToWatchList() {
    let lastServiceDateFormatted;
    if (this.lastServiceDate === null || this.lastServiceDate == '') {
      lastServiceDateFormatted = '';
    } else {
      lastServiceDateFormatted = moment(this.lastServiceDate).format(
        'YYYY-MM-DD'
      );
    }

    let inputParams = [
      [
        {
          addUpdateFlag: this.addUpdateFlag,
          additionalInfo: this.additionalInfo,
          assetNumber: '',
          endCustomer: '',
          endCustomerName: '',
          favourites: true,
          htsCode: '',
          inactiveFlag: false,
          lastServiceDate: lastServiceDateFormatted,
          location: '',
          partName: this.partName,
          partNumber: this.partNumber,
          pinned: '',
          removeFlag: true,
          selectedOption: 'P',
          serialNumber: this.probeSerialNumber,
          serviceHistoryDetails: [],
          serviceInterval: '',
          status: 'ACTIVE',
          thereInMELFlag: false,
          sensorType: this.sensorType ? this.sensorType : '',
          customer: this.customer ? this.customer : '',
        },
      ],
    ];

    this.eqService.addNewEquipment(inputParams).subscribe(
      (res: any) => {
        if (res) {
          this.showAddLink = false;
          this.savedToWatchList = true;
        }
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.equipmentToWatchlistFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }
  getProbeTypeList() {
    var probeList = [];
    this.eqService.getProbeType().subscribe((res) => {
      this.probeListResponse = res;
      this.probeListResponse.forEach((probes) => {
        probeList.push({
          label: probes.sensorName,
          value: probes.sensorCode,
        });
      });

      this.propsSensors = {
        itemGroups: [
          {
            items: probeList,
          },
        ],
      };

      this.propsSensorsDropDown = true;
    });
  }

  getModelTypeList() {
    var modelList = [];
    this.eqService.getModelType().subscribe((res) => {
      this.modelListResponse = res;
      this.modelListResponse.forEach((models) => {
        modelList.push({
          label: models.sensorModelName,
          value: models.sensorModelImageURL,
        });
      });

      this.propsModels = {
        itemGroups: [
          {
            items: modelList,
          },
        ],
      };
      this.propsModelsDropDown = true;
      this.probeModelType = this.modelListResponse[0].sensorModelName;
      this.sensorModelImageURL = this.modelListResponse[0].sensorModelImageURL;
    });
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
    });

    this.endCustomerName = {
      itemGroups: [
        {
          items: customerList,
        },
      ],
    };
    this.endCustomerNameDropDown = true;
  }

  onModelSelect(event) {
    this.sensorModelImageURL = event.detail.value;
    this.probeModelType = event.detail.label;
  }
  resetSearch() {
    this.equipmentNotFound = false;
    this.equipmentFound = false;
    this.findSerialNumber = true;
    this.searchOptions = true;
    this.probeSerialNumber = '';
    this.alreadyInwatchList = false;
    this.probeType = '';
    this.probeModelType = '';
    this.sensorModelImageURL = this.modelListResponse[0].sensorModelImageURL;
    this.searchButttonFlag = true;
    this.druckFound = false;
    this.druckNotFound = false;
    this.druckImage = true;
    this.serialNumberDruck = '';
    if (this.productSelected == 'Panametrix') {
      this.findSerialNumber = true;
      this.druckImage = false;
    } else if (this.productSelected == 'waygateFamily') {
      this.imageFound = false;
      this.batchFound = false;
      this.fabricationNotFound = false;
      this.fabricationFound = false;
      this.fabricationNumber = '';
      this.waygateImage = true;
      this.druckImage = false;
    } else if (this.productSelected == 'druckPressure') {
      this.waygateImage = false;
      this.druckImage = true;
    }
  }
  fetchSearchResults(searchType) {
    if (this.selectedBatch === true) {
      searchType = 'BATCH';
    } else {
      searchType = 'FABRICATION';
    }
    if (this.productSelected == 'Panametrix') {
      if (this.probeSerialNumber == '' || this.probeSerialNumber == undefined) {
        this.error.probeSerialNumber = this.getTranslatedText(
          'mySiteEquipment.error.probeSerialNumber'
        );
        return false;
      } else if (this.probeType == '' || this.probeType == undefined) {
        this.error.sensorType = this.getTranslatedText(
          'mySiteEquipment.error.sensorType'
        );
        return false;
      } else {
        this.showSpinner = true;

        this.eqService
          .searchResults(
            this.probeSerialNumber,
            this.probeType,
            this.productFamilyCode
          )
          .subscribe((res: any) => {
            this.showSpinner = false;
            if (res) {
              this.partName = res.partName;
              this.probeSerialNumber = res.probeSerialNumber;
              this.probeType = res.sensorType;
              this.partNumber = res.partNumber;
              this.additionalInfo = res.additionalInfo;
              this.sensorType = res.sensorType;
              this.equipmentSerialNumber = res.probeSerialNumber;
              this.equipmentProbeType = res.sensorType;
              this.equipmentPartNumber = res.partNumber;
              this.lastServiceDate = res.lastServiceDate;
              this.customer = res.customer;
              const equipmentlastServiceDate = res.lastCalibrationDate;
              this.lastCalDate = equipmentlastServiceDate.replace(/-/g, ' ');
              this.serialNumber = res.probeSerialNumber;
              this.productData = res.productData;
              this.rmaStatus = res.rmaStatus;
            }
            if (res && res.isPinned === false) {
              if (res.isInSap === true) {
                this.addUpdateFlag = 'CP_UPDATE';
              } else {
                this.addUpdateFlag = 'CP_ADD';
              }
            }
            if (
              (res && res.isInSap === false) ||
              (res && res.isInSap === true && res.isPinned === false)
            ) {
              this.equipmentFound = true;
              this.equipmentNotFound = false;
              this.findSerialNumber = false;
              this.alreadyInwatchList = false;
            }

            if (res && res.isInSap === false && res.isPinned === false) {
              this.equipmentFound = true;
              this.equipmentNotFound = false;
              this.findSerialNumber = false;
              this.alreadyInwatchList = false;
              this.showAddLink = true;
              this.savedToWatchList = false;
            }

            if (res === null) {
              this.equipmentSerialNumber = this.probeSerialNumber;
              this.equipmentProbeType = this.probeType;
              this.equipmentFound = false;
              this.findSerialNumber = false;
              this.equipmentNotFound = true;
              this.alreadyInwatchList = false;
            }
            if (res && res.isPinned === true) {
              this.equipmentFound = false;
              this.findSerialNumber = false;
              this.alreadyInwatchList = true;
              this.equipmentNotFound = false;
            }
          });
      }
    }

    if (this.productSelected == 'waygateFamily') {
      this.showSpinner = true;
      this.eqService
        .searchCertificates(this.fabricationNumber.trim(), searchType)
        .subscribe((res: any) => {
          this.languageDropdown?.nativeElement
            ? (this.languageDropdown.nativeElement.value = '')
            : '';
          this.showSpinner = false;
          if (res) {
            this.waygateImage = false;
            this.searchComponent = true;
            this.panametricproduct = false;
            this.waygateProduct = true;
            this.findSerialNumber = false;
            this.imageFound = false;
            this.batchId = res.number;
            this.calibrationType = res.caliberationType;
          }
          if (res.caliberationType === 'BATCH' && res.foundInDB === 'true') {
            this.fabricationFound = false;
            this.batchFound = true;
            this.fabricationNotFound = false;
          } else if (!this.selectedBatch && res.foundInDB === 'false') {
            if (!/(-)/.test(this.fabricationNumber)) {
              this.fabNumber = this.fabricationNumber.replace(
                /^([\w]{3})/,
                '$1-'
              );
            } else {
              this.fabNumber = this.fabricationNumber;
            }
            this.fabricationFound = false;
            this.batchFound = false;
            this.fabricationNotFound = true;
          } else if (this.selectedBatch && res.foundInDB === 'false') {
            this.fabNumber = this.fabricationNumber;
            this.fabricationFound = false;
            this.batchFound = false;
            this.fabricationNotFound = true;
          } else if (
            res.caliberationType === 'FABRICATION' &&
            res.foundInDB === 'true'
          ) {
            this.fabricationFound = true;
            this.batchFound = false;
            this.fabricationNotFound = false;
          }
        });
    }
    if (this.productSelected == 'druckPressure') {
      this.showSpinner = true;
      this.eqService
        .searchDruckCalibrationData(279, this.serialNumberDruck.trim())
        .subscribe((res: any) => {
          this.showSpinner = false;
          if (res) {
            this.druckImage = false;
          }
          if (res.searchData.isInBynder == true) {
            this.druckSerialNumber = this.serialNumberDruck;
            this.docId = res.searchData.mediaId;
            this.druckFound = true;
            this.druckNotFound = false;
          }

          if (res.searchData.isInBynder == false) {
            this.druckSerialNumber = this.serialNumberDruck;
            this.druckFound = false;
            this.druckNotFound = true;
          }
        });
    }
  }

  downloadCalibrationPDF() {
    const probeSerialNumberForfilename = this.probeSerialNumber?.split('-')[0];
    this.probeType = this.probeType ? this.probeType : this.sensorTypeSelected;
    this.showPDFSpinner = true;
    this.eqService
      .downloadCalibrationPDF(this.probeSerialNumber, this.probeType)
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
            this.custAccService
              .getCurrentCustomerAccount()
              .subscribe((data) => {
                this.gtmService.sendEvent({
                  event: 'CalibrationDataTracker',
                  serialNumber: this.probeSerialNumber,
                });
              });
          } else {
            this.globalMessageService.add(
              this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          }
        },
        (error) => {
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

  cancelButton() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/calibration-data']));
  }
  backClick() {
    this.router.navigate(['/my-equipments']).then(() => {
      window.location.reload();
    });
  }

  onDateChange(e) {
    this.lastServiceDate = moment(e).format('DD-MM-YYYY');
  }

  openEquipmentDetails(partNumber, serialNumber, customer, isFlag) {
    this.router.navigate(['/equipment-details'], {
      queryParams: {
        partNumber: partNumber,
        serialNumber: serialNumber,
        customer: customer,
        isUpdate: isFlag,
      },
    });
  }

  redirectToAddEquipment() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/add-equipment-to-watchlist'], {
        queryParams: {
          partNumber: this.partNumber,
          partName: this.partName,
          serialNumber: this.probeSerialNumber,
        },
      })
    );
  }

  productSelect(event) {
    this.httpCancelService.cancelPendingRequests();
    this.productLine = event.detail.value;
    this.searchButttonFlag = true;
    this.showSpinner = false;
    this.fabricationNumber = '';
    this.probeSerialNumber = '';
    this.probeType = '';
    this.serialNumberDruck = '';
    this.probeModelType = '';
    this.searchComponent = true;
    this.batchFound = false;
    this.batchNotFound = false;
    this.fabricationFound = false;
    this.druckNotFound = false;
    this.druckFound = false;
    this.equipmentFound = false;
    this.equipmentNotFound = false;
    this.fabricationNotFound = false;
    this.rightBox = true;
    this.productSelected = this.productLine;
    if (this.productLine == 'Panametrix') {
      this.pancalRightSection = true;
      this.alreadyInwatchList = false;
      this.searchEquipmentBox = true;
      this.findSerialNumber = true;
      this.panametricproduct = true;
      this.waygateProduct = false;
      this.druckProduct = false;
      this.waygateImage = false;
      this.bentlyProduct = false;
      this.druckImage = false;
      this.druckNotFound = false;
      this.druckFound = false;
      this.batchFound = false;
      this.batchNotFound = false;
      this.fabricationFound = false;
      this.equipmentFound = false;
      this.equipmentNotFound = false;
    } else if (this.productLine == 'waygateFamily') {
      this.pancalRightSection = false;
      this.waygateProduct = true;
      this.findSerialNumber = false;
      this.panametricproduct = false;
      this.druckProduct = false;
      this.waygateImage = true;
      this.bentlyProduct = false;
      this.druckImage = false;
      this.druckNotFound = false;
      this.druckFound = false;
      this.batchFound = false;
      this.batchNotFound = false;
      this.fabricationFound = false;
      this.equipmentFound = false;
      this.equipmentNotFound = false;
    } else if (this.productLine == 'druckPressure') {
      this.pancalRightSection = false;
      this.panametricproduct = false;
      this.waygateProduct = false;
      this.druckProduct = true;
      this.bentlyProduct = false;
      this.waygateImage = false;
      this.druckImage = true;
      this.druckNotFound = false;
      this.druckFound = false;
      this.batchFound = false;
      this.batchNotFound = false;
      this.fabricationFound = false;
      this.equipmentFound = false;
      this.equipmentNotFound = false;
    } else if (this.productLine == 'bentlyCertificates') {
      this.productSelected = this.productLine;
      this.rightBox = false;
      this.searchComponent = false;
      this.bentlyProduct = true;
      this.panametricproduct = false;
      this.waygateProduct = false;
      this.druckProduct = false;
    }
  }

  downloadCertificationPDF() {
    let timestamp = new Date().getTime();
    this.showPDFSpinner = true;
    this.eqService
      .downloadCertificatePDF(this.batchId, this.calibrationType)
      .subscribe(
        (res: Blob) => {
          if (res !== null && res !== undefined) {
            this.showPDFSpinner = false;
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File(
              [blob],
              'CertificateData' + timestamp + '.pdf',
              {
                type: 'application/pdf',
              }
            );
            var fileURL = window.URL.createObjectURL(file);
            window.open(fileURL, '_blank');
          }
        },
        (error) => {
          this.showPDFSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  downloadTestresultsPDF(event) {
    let timestamp = new Date().getTime();
    this.showPDFSpinner = true;
    this.eqService
      .downloadFilmidentificationPDF(this.batchId, event.detail)
      .subscribe(
        (res: Blob) => {
          if (res !== null && res !== undefined) {
            this.languageDropdown?.nativeElement
              ? (this.languageDropdown.nativeElement.value = '')
              : '';
            this.showPDFSpinner = false;
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File(
              [blob],
              'CertificateData' + timestamp + '.pdf',
              {
                type: 'application/pdf',
              }
            );
            var fileURL = window.URL.createObjectURL(file);
            window.open(fileURL, '_blank');
          }
        },
        (error) => {
          this.showPDFSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  downloadDruckCalibrationPDF() {
    this.showPDFSpinner = true;
    this.eqService
      .downloadDruckCalibrationData(this.productLine, this.docId)
      .subscribe(
        (res: any) => {
          if (res !== null && res !== undefined) {
            window.open(res.s3FileUrl);
            this.showPDFSpinner = false;
          }
        },
        (error) => {
          this.showPDFSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }
  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    return next
      .handle(req)
      .pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()));
  }
}
