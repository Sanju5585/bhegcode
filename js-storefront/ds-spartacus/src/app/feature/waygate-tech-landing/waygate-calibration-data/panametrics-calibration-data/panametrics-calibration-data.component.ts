import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import saveAs from 'file-saver';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { CalibrationDataService } from '../../../calibration-data/services/calibration-data.service';
import { SiteEquipmentsService } from '../../../site-equipments/site-equipments.service';

@Component({
  standalone: false,
  selector: 'app-panametrics-calibration-data',
  templateUrl: './panametrics-calibration-data.component.html',
  styleUrls: ['./panametrics-calibration-data.component.scss'],
})
export class PanametricsCalibrationDataComponent implements OnInit {
  panaCalibrationForm: FormGroup;
  probeListResponse: any;
  modelListResponse: any;
  userType: string;
  initPana = true;
  propsModels: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  propsModelsDropDown: boolean;
  probeModelType: any;
  sensorModelImageURL: any;
  showSpinner: boolean;
  productFamilyCode: any = 280;

  probeSerialNumber: any;
  probeType: any;

  noResponse: boolean;
  panaCalResponse: any;
  showPDFSpinner: boolean;
  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    public eqService: SiteEquipmentsService,
    public calService: CalibrationDataService,
    private authService: AuthService,
    private launchDialogService: LaunchDialogService,
    private customerAccountService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    protected globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {
    this.authService.isUserLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.userType = 'current';
      } else {
        this.userType = 'anonymous';
      }
    });
  }

  ngOnInit(): void {
    this.panaCalibrationForm = this.fb.group({
      probeSerialNumber: ['', Validators.required],
      probeType: [null, Validators.required],
    });

    this.panaCalibrationForm
      .get('probeSerialNumber')
      .valueChanges.subscribe((value) => {
        if (value) {
          const senitizedValue = this.sanitizer.sanitize(
            SecurityContext.HTML,
            value
          );

          if (value != senitizedValue) {
            this.panaCalibrationForm.patchValue({
              probeSerialNumber: senitizedValue,
            });
            this.panaCalibrationForm
              .get('probeSerialNumber')
              .updateValueAndValidity();
          }
        }
      });

    this.getProbeTypeList();
    this.getModelTypeList();
  }

  onFormResetset() {
    this.panaCalibrationForm.reset({ probeSerialNumber: '', probeType: null });
    this.initPana = true;
  }

  getProbeTypeList() {
    this.eqService.getProbeType(this.userType).subscribe((res) => {
      this.probeListResponse = res;
    });
  }

  getModelTypeList() {
    const modelList = [];
    this.eqService.getModelType(this.userType).subscribe((res) => {
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

  onModelSelect(event) {
    this.sensorModelImageURL = event.detail.value;
    this.probeModelType = event.detail.label;
  }

  formSubmitted() {
    this.showSpinner = true;

    this.eqService
      .searchResults(
        this.panaCalibrationForm.value.probeSerialNumber,
        this.panaCalibrationForm.value.probeType,
        this.productFamilyCode,
        this.userType
      )
      .subscribe((res: any) => {
        this.showSpinner = false;
        if (res) {
          this.initPana = false;
          this.noResponse = false;
          this.panaCalResponse = res;
          this.probeSerialNumber = res.probeSerialNumber;
          this.probeType = res.sensorType;
        } else {
          this.initPana = false;
          this.noResponse = true;
          this.panaCalResponse = null;
        }
        this.gtmService.sendEvent({
          event: 'CalibrationDataTracker',
          serialNumber: this.probeSerialNumber,
        });
      });
  }

  calDownloadClick() {
    if (this.userType == 'current') {
      this.downloadCalibrationPDF();
    } else {
      this.openCalibrationModal();
    }
  }
  downloadCalibrationPDF() {
    const probeSerialNumberForfilename = this.probeSerialNumber?.split('-')[0];
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
    this.calService.getSerialNumber = this.probeSerialNumber;
    this.calService.getProbType = this.probeType;
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
