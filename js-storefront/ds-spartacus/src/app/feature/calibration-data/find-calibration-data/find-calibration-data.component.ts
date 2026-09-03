import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Injectable,
  SecurityContext,
} from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { CalibrationDataService } from '../services/calibration-data.service';
import { Observable } from 'rxjs';
import { AuthService } from '@spartacus/core';
import { TranslationService } from '@spartacus/core';
import { Router } from '@angular/router';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { SiteEquipmentsService } from '../../site-equipments/site-equipments.service';
import { HttpCancelService } from '../../../shared/services/httpcancel.service';
import { take, takeUntil } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Injectable()
@Component({
  standalone: false,
  selector: 'app-find-calibration-data',
  templateUrl: './find-calibration-data.component.html',
  styleUrls: ['./find-calibration-data.component.scss'],
})
export class FindCalibrationDataComponent implements OnInit {
  @ViewChild('languageDropdown') languageDropdown: ElementRef;
  findSerialNumber;
  searchOptions;
  searchResult;
  loggedInUser;
  equipmentFound;
  equipmentNotFound;
  findCalibration;
  backToEquipment;
  backToHome = true;
  searchEquipmentBox = true;
  backtohome;
  fetchData;
  hasCalData;
  showSpinner: boolean = false;
  equipmentSerialNumber: string;
  equipmentProbeType: string;
  equipmentServicedate: string;
  equipmentlastServiceDate: any;
  lastCalDate: string;
  resetSearchButtons;
  sensorModelImageURL;
  probeListResponse;
  productFamily;
  modelListResponse;
  probeType: string = '';
  probeModelType: string = '';
  probeSerialNumber: string = '';
  serialNumber: any;
  sensor: any;
  propsSensorsDropDown: boolean = false;
  propsModelsDropDown: boolean = false;
  res: any;
  user$: Observable<unknown>;
  userType = '';
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
  language;
  waygateImage;
  productSelected: string = '';
  batchId: string;
  fabNumber;
  showPDFSpinner: boolean = false;
  lang: string;
  caliberationType;
  druckProduct;
  druckNotFound;
  druckFound;
  druckImage;
  druckLoadingImg: boolean = false;
  docId: string;
  serialNumberDruck: string = '';
  druckSerialNumber: string;
  equipmentFoundDruck;
  equipmentDruckNotFound;
  rightBox: boolean = false;
  batch: boolean = true;
  selectedType;
  selectedBatch: boolean = true;
  selectedFabric: boolean = false;
  searchType: String = '';
  searchList: any = ['BATCH', 'FABRICATION'];
  productLines = {
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
  };
  lastCalDateUnformatted: any;

  constructor(
    private launchDialogService: LaunchDialogService,
    public calService: CalibrationDataService,
    protected authService: AuthService,
    private translate: TranslationService,
    private router: Router,
    protected globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    public eqService: SiteEquipmentsService,
    private httpCancelService: HttpCancelService,
    public sanitizer: DomSanitizer
  ) {}

  onSensorSelect(event) {
    console.log(event);
    this.probeType = event.detail?.value;
    if (this.probeSerialNumber == '' && this.probeType == '') {
      this.searchButttonFlag = true;
    } else if (this.probeSerialNumber != '') {
      this.searchButttonFlag = false;
    }
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

  ngOnInit(): void {
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
    this.getProbeTypeList();
    this.getModelTypeList();
    this.productLines.itemGroups.forEach(group => {
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

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onChange(e, field) {
    this.error[field] = '';
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    this[field] = testRegex(e.target.value, REGULAR_PATTERN.alphaNumeric);
    this.error.serialNumber = '';
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

  onModelSelect(event) {
    console.log(event);
    this.sensorModelImageURL = event.detail.value;
    this.probeModelType = event.detail.label;
  }

  fetchSearchResults(searchType) {
    if (this.selectedBatch === true) {
      searchType = 'BATCH';
    } else {
      searchType = 'FABRICATION';
    }
    if (this.productSelected == 'Panametrix') {
      this.productFamily = 280;
      this.showSpinner = true;
      this.calService
        .searchResults(
          testRegex(
            this.sanitizer.sanitize(
              SecurityContext.HTML,
              this.probeSerialNumber.trim()
            ),
            REGULAR_PATTERN.alphaNumeric
          ),
          this.probeType,
          this.productFamily
        )
        .subscribe((res: any) => {
          this.showSpinner = false;
          if (res) {
            this.equipmentSerialNumber = res.probeSerialNumber;
            this.equipmentProbeType = res.sensorType;
            const equipmentlastServiceDate = res.lastCalibrationDate;
            this.lastCalDate = equipmentlastServiceDate.replace(/-/g, ' ');
            this.lastCalDateUnformatted = equipmentlastServiceDate;
            this.equipmentFound = true;
            this.equipmentNotFound = false;
            this.findSerialNumber = false;
            this.fetchData = false;
            this.hasCalData = true;
            this.backToHome = false;
            this.backToEquipment = true;
          }
          if (res === null) {
            this.serialNumber = this.probeSerialNumber;
            this.sensor = this.probeType;
            this.showSpinner = false;
            this.equipmentFound = false;
            this.findSerialNumber = false;
            this.equipmentNotFound = true;
            this.backToHome = false;
            this.backToEquipment = true;
          }
        });
    }

    if (this.productSelected == 'waygateFamily') {
      this.showSpinner = true;
      this.calService
        .searchCertificates(
          this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.fabricationNumber.trim()
          ),
          searchType
        )
        .subscribe((res: any) => {
          this.showSpinner = false;
          this.languageDropdown?.nativeElement
            ? (this.languageDropdown.nativeElement.value = '')
            : '';
          if (res) {
            this.waygateImage = false;
            this.fabricationNotFound = false;
            this.findSerialNumber = false;
            this.waygateProduct = true;
            this.panametricproduct = false;
            this.searchComponent = true;
          }
          if (res.caliberationType === 'BATCH' && res.foundInDB === 'true') {
            this.caliberationType = res.caliberationType;
            this.batchId = res.number;
            this.fabricationFound = false;
            this.batchFound = true;
            this.batchNotFound = false;
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
            this.batchNotFound = true;
          } else if (this.selectedBatch && res.foundInDB === 'false') {
            this.fabNumber = this.fabricationNumber;
            this.fabricationFound = false;
            this.batchFound = false;
            this.batchNotFound = true;
          } else if (
            res.caliberationType === 'FABRICATION' &&
            res.foundInDB === 'true'
          ) {
            this.caliberationType = res.caliberationType;
            this.batchId = res.number;
            this.fabricationFound = true;
            this.batchFound = false;
            this.batchNotFound = false;
          }
        });
    }

    if (this.productSelected == 'druckPressure') {
      this.serialNumberDruck = testRegex(
        this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.serialNumberDruck.trim()
        ),
        REGULAR_PATTERN.alphaNumeric
      );
      this.showSpinner = true;
      this.calService
        .searchDruckCalibrationData(279, this.serialNumberDruck.trim())
        .subscribe((res: any) => {
          this.showSpinner = false;
          if (res) {
            this.druckImage = false;
            this.docId = res.mediaId;
          }
          if (res.searchData.isInBynder == true) {
            this.druckSerialNumber = this.serialNumberDruck;
            this.docId = res.searchData.mediaId;
            this.equipmentFoundDruck = true;
            this.equipmentDruckNotFound = false;
          }

          if (res.searchData.isInBynder == false) {
            this.druckSerialNumber = this.serialNumberDruck;
            this.equipmentFoundDruck = false;
            this.equipmentDruckNotFound = true;
          }
        });
    }
  }

  downloadDruckCalibrationData() {
    this.productLine = this.productLine;
    this.serialNumber = this.serialNumber;
    this.showPDFSpinner = true;
    this.calService
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

  getProbeTypeList() {
    var probeList = [];
    this.calService.getProbeType().subscribe((res) => {
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

    this.calService.getModelType().subscribe((res) => {
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
  reset() {
    this.equipmentNotFound = false;
    this.equipmentFound = false;
    this.fetchData = true;
    this.hasCalData = false;
    this.fabricationNumber = '';
    this.searchOptions = true;
    this.probeSerialNumber = '';
    this.probeType = '';
    this.probeModelType = '';
    this.sensorModelImageURL = this.modelListResponse[0].sensorModelImageURL;
    this.searchButttonFlag = true;
    this.druckFound = false;
    this.druckNotFound = false;
    this.serialNumberDruck = '';
    if (this.productSelected == 'Panametrix') {
      this.findSerialNumber = true;
    } else if (this.productSelected == 'waygateFamily') {
      this.waygateImage = true;
      this.batchFound = false;
      this.batchNotFound = false;
      this.fabricationFound = false;
    } else if (this.productSelected == 'druckPressure') {
      this.druckImage = true;
      this.equipmentFoundDruck = false;
      this.equipmentDruckNotFound = false;
    }
  }

  openCalibrationModal() {
    const componentdata = {
      lastUpdatedDate: this.lastCalDateUnformatted,
    };
    const caliDataRequestDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CALI_DATA_REQUEST_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (caliDataRequestDialog) {
      caliDataRequestDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.calService.getSerialNumber = this.probeSerialNumber;
    this.calService.getProbType = this.probeType;
  }

  backClickTo() {
    this.searchEquipmentBox = true;
    this.backToHome = false;
    this.backToEquipment = false;
  }

  loggin() {
    this.router.navigate(['/login']);
  }

  backClick() {
    this.router.navigate(['/homepage']);
  }

  productSelect(event) {
    console.log(event);
    this.httpCancelService.cancelPendingRequests();
    this.productLine = event.detail?.value;
    this.searchButttonFlag = true;
    this.showSpinner = false;
    this.fabricationNumber = '';
    this.probeSerialNumber = '';
    this.probeType = '';
    this.serialNumberDruck = '';
    this.probeModelType = '';
    this.fabricationNumber = '';
    this.searchComponent = true;
    this.batchFound = false;
    this.batchNotFound = false;
    this.fabricationFound = false;
    this.druckFound = false;
    this.druckNotFound = false;
    this.equipmentFound = false;
    this.fabricationNotFound = false;
    this.equipmentNotFound = false;
    this.equipmentDruckNotFound = false;
    this.equipmentFoundDruck = false;
    this.rightBox = true;
    if (this.productLine == 'Panametrix') {
      this.productSelected = this.productLine;
      this.searchEquipmentBox = true;
      this.findSerialNumber = true;
      this.panametricproduct = true;
      this.waygateProduct = false;
      this.bentlyProduct = false;
      this.waygateImage = false;
      this.druckImage = false;
      this.druckProduct = false;
      this.equipmentFoundDruck = false;
      this.equipmentDruckNotFound = false;
    } else if (this.productLine == 'waygateFamily') {
      this.productSelected = this.productLine;
      this.waygateImage = true;
      this.druckImage = false;
      this.findSerialNumber = false;
      this.waygateProduct = true;
      this.bentlyProduct = false;
      this.panametricproduct = false;
      this.druckProduct = false;
      this.equipmentFoundDruck = false;
      this.equipmentDruckNotFound = false;
    } else if (this.productLine == 'druckPressure') {
      this.productSelected = this.productLine;
      this.findSerialNumber = false;
      this.druckImage = true;
      this.waygateImage = false;
      this.druckProduct = true;
      this.bentlyProduct = false;
      this.waygateProduct = false;
      this.panametricproduct = false;
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
    this.calService
      .downloadCertificatePDF(this.batchId, this.caliberationType)
      .subscribe(
        (res: Blob) => {
          if (res !== null && res !== undefined) {
            this.showPDFSpinner = false;
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File(
              [blob],
              'CalibrationCertificate' + timestamp + '.pdf',
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
    this.lang = '';
    this.calService
      .downloadFilmidentificationPDF(this.batchId, event.detail?.value)
      .subscribe(
        (res: Blob) => {
          this.languageDropdown?.nativeElement
            ? (this.languageDropdown.nativeElement.value = '')
            : '';
          if (res !== null && res !== undefined) {
            this.showPDFSpinner = false;
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File(
              [blob],
              'CalibrationCertificate' + timestamp + '.pdf',
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

  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    return next
      .handle(req)
      .pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()));
  }
}
