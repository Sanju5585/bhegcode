import { Component, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { CalibrationDataService } from '../../../calibration-data/services/calibration-data.service';
import { SiteEquipmentsService } from '../../../site-equipments/site-equipments.service';

@Component({
  standalone: false,
  selector: 'app-druck-calibration',
  templateUrl: './druck-calibration.component.html',
  styleUrls: ['./druck-calibration.component.scss'],
})
export class DruckCalibrationComponent {
  druckCalibrationForm: FormGroup;
  userType: string;
  isInitDruckState = true;

  showSpinner: boolean;
  productFamilyCode: any = 279;

  probeSerialNumber: any;

  calibarationDataNotFound: boolean;
  panaCalResponse: any;
  showPDFSpinner: boolean = false;
  docId: any;
  druckSerialNumber: any;
  productLine: string;
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
    private translate: TranslationService,
    private custAccService: CustomerAccountService
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
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    this.druckCalibrationForm = this.fb.group({
      probeSerialNumber: ['', Validators.required],
    });

    this.druckCalibrationForm
      .get('probeSerialNumber')
      .valueChanges.subscribe((value) => {
        if (value) {
          const senitizedValue = this.sanitizer.sanitize(
            SecurityContext.HTML,
            value
          );

          if (value != senitizedValue) {
            this.druckCalibrationForm.patchValue({
              probeSerialNumber: senitizedValue,
            });
            this.druckCalibrationForm
              .get('probeSerialNumber')
              .updateValueAndValidity();
          }
        }
      });
  }

  onFormResetset() {
    this.druckCalibrationForm.reset({ probeSerialNumber: '' });
    this.isInitDruckState = true;
  }

  formSubmitted() {
    this.showSpinner = true;
    this.calService
      .searchDruckCalibrationData(
        this.productFamilyCode,
        this.druckCalibrationForm.value.probeSerialNumber,
        this.userType
      )
      .subscribe((res: any) => {
        this.showSpinner = false;

        if (res) {
          this.isInitDruckState = false;
          this.docId = res.mediaId;
        }
        if (res.searchData.isInBynder == true) {
          this.druckSerialNumber =
            this.druckCalibrationForm.value.probeSerialNumber;
          this.docId = res.searchData.mediaId;
          this.calibarationDataNotFound = false;
        }

        if (res.searchData.isInBynder == false) {
          this.druckSerialNumber =
            this.druckCalibrationForm.value.probeSerialNumber;
          this.calibarationDataNotFound = true;
        }
        this.gtmService.sendEvent({
          event: 'CalibrationDataTracker',
          serialNumber: this.druckSerialNumber,
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

  downloadDruckCalibrationData() {
    this.productLine = this.productLine;
    this.showPDFSpinner = true;
    this.calService
      .downloadDruckCalibrationData(this.productLine, this.docId, this.userType)
      .subscribe(
        (res: any) => {
          if (res !== null && res !== undefined) {
            window.open(res.s3FileUrl);
            this.showPDFSpinner = false;
            this.gtmService.sendEvent({
              event: 'CalibrationDataDownloadr',
              serialNumber: this.druckSerialNumber,
            });
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
}
