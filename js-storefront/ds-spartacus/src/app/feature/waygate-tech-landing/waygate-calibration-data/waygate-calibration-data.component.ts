import {
  Component,
  ElementRef,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { AuthService, TranslationService } from '@spartacus/core';
import { SiteEquipmentsService } from '../../site-equipments/site-equipments.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CalibrationDataService } from '../../calibration-data/services/calibration-data.service';
import { saveAs } from 'file-saver';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
@Component({
  standalone: false,
  selector: 'app-waygate-calibration-data',
  templateUrl: './waygate-calibration-data.component.html',
  styleUrls: ['./waygate-calibration-data.component.scss'],
})
export class WaygateCalibrationDataComponent {
  @ViewChild('languageDropdown') languageDropdown: ElementRef;
  currentlanguage = 'English';
  breadcrumbs: any[] = [];
  batch: boolean = true;
  fabricationNumber: string = '';
  showPDFSpinner: boolean = false;
  selectedType;
  selectedBatch: boolean = true;
  selectedFabric: boolean = false;
  searchButttonFlag: boolean = true;
  showSpinner: boolean = false;
  searchType: String = '';
  probeSerialNumber: string = '';
  probeType: string = '';
  probeModelType;
  equipmentFound;
  equipmentNotFound;
  alreadyInwatchList;
  findSerialNumber = true;
  serialNumberDruck: string = '';
  fabricationNotFound;
  fabricationFound;
  batchFound;
  fabNumber;
  waygateImage;
  waygateProduct;
  panametricproduct = false;
  imageFound;
  searchComponent = false;
  calibrationType;
  batchId: string;
  searchOptions = true;
  sensorModelImageURL;
  modelListResponse;
  batchNotFound;
  propsModelsDropDown: boolean = false;
  propsModels: { itemGroups: { items: any[] }[] };

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
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  currentLang: string = 'en';
  productLine: string;
  ProductLines = AllProductLine;
  propsSensors: { itemGroups: { items: any[] }[] };
  panaSerialNumber: any;
  panaSensorTypes: any[];
  panaProbeTypes: any[];
  sensorType: any;
  initPana: boolean = true;
  productFamilyCode: any = 280;
  noResponse: boolean;
  panaCalResponse: any;
  constructor(
    private breadCrumbService: BreadcrumbService,
    public eqService: SiteEquipmentsService,
    private translate: TranslationService,
    protected globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer,
    private authService: AuthService,
    public calService: CalibrationDataService,
    private customerAccountService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private launchDialogService: LaunchDialogService,
    private translationService: TranslationService,
  ) {
    this.translationService
    .translate('mySiteEquipment.calibrationandCertificate')
    .subscribe((res: string) => {
      this.breadcrumbs = [
        {
          name: res
        },
      ];
    })
    this.customerAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.getProbeTypeList();
        this.getModelTypeList();
      } else {
        this.getGuestProbeTypeList();
        this.getGUestModelTypeList();
      }
    });
  }

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

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
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

      this.panaProbeTypes = modelList;
      this.propsModelsDropDown = true;
      this.probeModelType = this.modelListResponse[0].sensorModelName;
      this.sensorModelImageURL = this.modelListResponse[0].sensorModelImageURL;
    });
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
    this.searchButttonFlag = true;
    this.serialNumberDruck = '';
    this.findSerialNumber = true;
    this.imageFound = false;
    this.batchFound = false;
    this.batchNotFound = false;
    this.fabricationNotFound = false;
    this.fabricationFound = false;
    this.fabricationNumber = '';
    this.waygateImage = true;
    this.waygateImage = false;
  }

  fetchSearchResults(searchType) {
    if (this.selectedBatch === true) {
      searchType = 'BATCH';
    } else {
      searchType = 'FABRICATION';
    }

    this.showSpinner = true;
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
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
              this.batchNotFound = false;
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
              this.batchNotFound = true;
              this.fabricationNotFound = true;
            } else if (this.selectedBatch && res.foundInDB === 'false') {
              this.fabNumber = this.fabricationNumber;
              this.fabricationFound = false;
              this.batchFound = false;
              this.batchNotFound = true;
              this.fabricationNotFound = true;
            } else if (
              res.caliberationType === 'FABRICATION' &&
              res.foundInDB === 'true'
            ) {
              this.fabricationFound = true;
              this.batchFound = false;
              this.batchNotFound = false;
              this.fabricationNotFound = false;
            }
          });
        this.gtmService.sendEvent({
          event: 'CalibrationDataTracker',
          serialNumber: this.probeSerialNumber,
        });
        this.searchButttonFlag = true;
      } else {
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
            this.resetFlags();
            if (res) {
              this.waygateImage = false;
              this.fabricationNotFound = false;
              this.findSerialNumber = false;
              this.waygateProduct = true;
              this.panametricproduct = false;
              this.searchComponent = true;
            }
            if (res.caliberationType === 'BATCH' && res.foundInDB === 'true') {
              this.calibrationType = res.caliberationType;
              this.batchId = res.number;
              this.fabricationFound = false;
              this.batchFound = true;
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
              this.calibrationType = res.caliberationType;
              this.batchId = res.number;
              this.fabricationFound = true;
              this.batchFound = false;
              // this.batchNotFound = true;
            }
            // else{
            //   this.batchNotFound = true
            // }
          });
        this.gtmService.sendEvent({
          event: 'CalibrationDataTracker',
          serialNumber: this.probeSerialNumber,
        });
      }
      this.searchButttonFlag = true;
    });
  }

  resetFlags() {
    this.batchNotFound = false;
    this.fabricationNotFound = false;
    this.batchFound = false;
    this.fabricationFound = false;
  }

  downloadCertificationPDF() {
    let timestamp = new Date().getTime();
    this.showPDFSpinner = true;
    this.userLoggedIn$.subscribe((res) => {
      let service;
      if (res) {
        service = this.eqService.downloadCertificatePDF(
          this.batchId,
          this.calibrationType
        );
      } else {
        service = this.calService.downloadCertificatePDF(
          this.batchId,
          this.calibrationType
        );
      }
      service.subscribe(
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
          this.gtmService.sendEvent({
            event: 'CalibrationDataDownload',
            serialNumber: this.probeSerialNumber,
          });
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
    });
  }
  currentlng(event) {
    this.currentLang = event.detail.value;
  }

  downloadTestresultsPDF(event) {
    let timestamp = new Date().getTime();
    this.showPDFSpinner = true;
    this.userLoggedIn$.subscribe((isLoggedIn) => {
      let service;
      if (isLoggedIn) {
        service = this.eqService.downloadFilmidentificationPDF(
          this.batchId,
          this.currentLang
        );
      } else {
        service = this.calService.downloadFilmidentificationPDF(
          this.batchId,
          this.currentLang
        );
      }
      service.subscribe(
        (res: Blob) => {
          if (res !== null && res !== undefined) {
            this.languageDropdown?.nativeElement
              ? (this.languageDropdown.nativeElement.value = 'English') //newly added
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
          this.gtmService.sendEvent({
            event: 'CalibrationDataDownload',
            serialNumber: this.probeSerialNumber,
          });
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
    });
  }
  addPanaEqId(event) {
    this.panaSerialNumber = event.target.value;
  }
  getProbeTypeList() {
    var probeList = [];
    this.eqService.getProbeType().subscribe((res: any) => {
      const probeListResponse = res;
      probeListResponse.forEach((probes) => {
        probeList.push({
          label: probes.sensorName,
          value: probes.sensorCode,
        });
      });
      this.panaSensorTypes = probeList;
      this.sensorType = probeList[0]?.value;
    });
  }
  onSensorSelect(event) {
    this.sensorType = event.value;
  }
  onModelSelect(event) {
    this.sensorModelImageURL = event.value;
    this.probeModelType = event.label;
  }
  resetPana() {
    this.initPana = true;
    this.sensorType = this.panaSensorTypes[0]?.value;
    this.panaSerialNumber = null;
  }
  searchPana() {
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.eqService
          .searchResults(
            this.panaSerialNumber,
            this.sensorType,
            this.productFamilyCode
          )
          .subscribe((res: any) => {
            this.initPana = false;
            if (res) {
              this.noResponse = false;
              this.panaSerialNumber = res?.probeSerialNumber;
              this.panaCalResponse = res;
            } else {
              this.noResponse = true;
              this.panaCalResponse = null;
            }
            this.gtmService.sendEvent({
              event: 'CalibrationDataTracker',
              serialNumber: this.probeSerialNumber,
            });
          });
      } else {
        this.calService
          .searchResults(
            this.panaSerialNumber,
            this.sensorType,
            this.productFamilyCode
          )
          .subscribe((res: any) => {
            this.initPana = false;
            if (res) {
              this.noResponse = false;
              this.panaSerialNumber = res?.probeSerialNumber;
              this.panaCalResponse = res;
            } else {
              this.noResponse = true;
              this.panaCalResponse = null;
            }
            this.gtmService.sendEvent({
              event: 'CalibrationDataTracker',
              serialNumber: this.probeSerialNumber,
            });
          });
      }
    });
  }
  disableSearch() {
    if (this.sensorType && this.panaSerialNumber) return false;
    else return true;
  }
  calDownloadClick() {
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.downloadCalibrationPDF();
      } else {
        this.openCalibrationModal();
      }
    });
  }
  downloadCalibrationPDF() {
    const probeSerialNumberForfilename = this.panaSerialNumber?.split('-')[0];
    this.eqService
      .downloadCalibrationPDF(this.panaSerialNumber, this.sensorType)
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
            this.customerAccountService.getCurrentCustomerAccount();
            this.gtmService.sendEvent({
              event: 'CalibrationDataDownload',
              serialNumber: this.probeSerialNumber,
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
  openCalibrationModal() {
    const componentdata = {
      lastUpdatedDate: this.panaCalResponse.lastUpdatedDate,
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
    this.calService.getSerialNumber = this.panaSerialNumber;
    this.calService.getProbType = this.sensorType;
  }
  getGuestProbeTypeList() {
    var probeList = [];
    this.calService.getProbeType().subscribe((res: any) => {
      const probeListResponse = res;
      probeListResponse.forEach((probes) => {
        probeList.push({
          label: probes.sensorName,
          value: probes.sensorCode,
        });
      });
      this.panaSensorTypes = probeList;
      this.sensorType = probeList[0]?.value;
    });
  }
  getGUestModelTypeList() {
    var modelList = [];
    this.calService.getModelType().subscribe((res) => {
      this.modelListResponse = res;
      this.modelListResponse.forEach((models) => {
        modelList.push({
          label: models.sensorModelName,
          value: models.sensorModelImageURL,
        });
      });

      this.panaProbeTypes = modelList;
      this.propsModelsDropDown = true;
      this.probeModelType = this.modelListResponse[0].sensorModelName;
      this.sensorModelImageURL = this.modelListResponse[0].sensorModelImageURL;
    });
  }
}
