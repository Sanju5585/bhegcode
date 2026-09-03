import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  SecurityContext,
} from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select } from '@ngrx/store';
import { RmaService } from '../../rma-services/rma.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import {
  FileProgressLayouts,
  FileSizes,
} from '../../../../shared/models/fileSize.model';
import {
  RmaEntry,
  AdditionalInfo,
} from '../../../../shared/models/rma/rma.model';

@Component({
  standalone: false,
  selector: 'ds-rma-documentation',
  templateUrl: './rma-documentation.component.html',
  styleUrls: ['./rma-documentation.component.scss'],
})
export class RmaDocumentationComponent implements OnInit {
  @Input()
  serviceOfferingData: any;
  @Input() warrentyClaimFlag: boolean;

  @Input()
  rmaEntry: RmaEntry;

  @ViewChild('textval') textval: ElementRef;

  @ViewChild('textval2') textval2: ElementRef;

  @Output()
  rmaEntryData = new EventEmitter<RmaEntry>();

  index = 0;
  readonly START_YEAR = 1959;
  readonly END_YEAR = new Date().getFullYear();
  readonly STEP = 1;
  readonly ALLOWED_EXTENSIONS = ['pdf', 'jpg'];
  readonly layouts = FileProgressLayouts;
  files = [];
  rmaNumber;
  warrantyCLaimInformation;
  manufacturingYear;
  manufactureYearSelected = '0000';
  warrantyText = '';

  additionalInfo: AdditionalInfo = new AdditionalInfo();

  yearRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    ).reverse();

  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
    fileName: '',
  };
  uploadUrl = 'users/current/rma/uploadAdditionalFile';
  deleteUrl = 'users/current/rma/removeAttachment';

  constructor(
    private translate: TranslationService,
    private rmaService: RmaService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.rmaNumber = this.rmaService.rmaNumber;
    this.warrantyCLaimInformation = this.rmaService.warrantyCLaimInformation;
    this.manufacturingYear = this.rmaService.manufacturingYear;
    if (this.rmaNumber != undefined || this.rmaNumber != null) {
      this.additionalInfo.serviceNotes =
        '\n\n\n\n This is Repeat RMA, Original RMA #' + this.rmaNumber;
    }
    if (
      this.warrantyCLaimInformation != undefined ||
      this.warrantyCLaimInformation != null
    ) {
      this.additionalInfo.warrantyStatement = this.warrantyCLaimInformation;
    }
    if (this.manufacturingYear != undefined || this.manufacturingYear != null) {
      this.manufactureYearSelected = this.manufacturingYear;
    }

    if (this.rmaEntry.quantity <= 1) {
      const eqMapping =
        this.serviceOfferingData?.offeringList[0]?.partEquipmentMapping;
      const selectedSerialNo =
        this.rmaEntry?.serialNumber?.length > 0
          ? this.rmaEntry?.serialNumber[0]
          : '';
      eqMapping?.filter((eq) => {
        if (eq.partSerialNumber == selectedSerialNo) {
          this.manufactureYearSelected = eq.warrantyDate;
        }
      });
    }
    this.setWarrantyMsg();
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  private setWarrantyMsg() {
    if (
      this.manufactureYearSelected === undefined ||
      this.manufactureYearSelected === '0000'
    ) {
      this.warrantyText = this.getTranslatedText('rma-form.noLongerWarranty');
    } else if (
      this.manufactureYearSelected &&
      new Date().getFullYear() - Number(this.manufactureYearSelected) <= 1 &&
      this.rmaEntry.quantity == 1
    ) {
      this.warrantyText = this.getTranslatedText(
        'rma-form.warrantyEligibility'
      );
    } else if (
      this.manufactureYearSelected &&
      new Date().getFullYear() - Number(this.manufactureYearSelected) > 1
    ) {
      this.warrantyText = this.getTranslatedText('rma-form.warrantyEvaluation');
    } else {
    }
  }

  getFileSize(fileSize) {
    if (Math.round((fileSize / 1024) * 1000) / 1000 >= 1024.0) {
      return (Math.round(fileSize / 1024) / 1024).toFixed(2) + FileSizes.KB;
    }
    if (Math.round((fileSize / 1024) * 1000) / 1000 < 1024.0) {
      return (
        (Math.round((fileSize / 1024) * 1000) / 1000).toFixed() + FileSizes.KB
      );
    }
  }

  selectedFiles(event) {
    this.deleteParams.fileName = event[0].name;
    this.files = [...this.files, ...event];
  }

  warrantyClaimInput(evt) {
    let warrantyClaimTxt = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        evt.target.value.substring(0, 255)
      ),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    warrantyClaimTxt = warrantyClaimTxt?.replace(/&#34|&#10/g, '');
    this.additionalInfo.warrantyStatement = warrantyClaimTxt;
    this.sendRmaEntryData();
  }

  serviceNotesInput(evt) {
    let serviceNotesTxt = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        evt.target.value.substring(0, 2000)
      ),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this.additionalInfo.serviceNotes = serviceNotesTxt;
    this.sendRmaEntryData();
  }

  changeYearOfManufacture(evt) {
    this.manufactureYearSelected = evt;

    this.setWarrantyMsg();
    this.additionalInfo.manufactureYear = evt;
    this.sendRmaEntryData();
  }

  sendRmaEntryData() {
    this.rmaEntry = {
      ...this.rmaEntry,
      additionalInfo: { ...this.additionalInfo },
    };
    this.rmaEntryData.emit(this.rmaEntry);
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }

  stop(e) {
    if (e.target.value.length >= 255) {
      e.preventDefault();
      return false;
    }
  }
  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 255);
    this.sendRmaEntryData();
  }

  myFunction(e) {
    if (e.target.value.length >= 255) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 255);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  stopServiceNotes(e) {
    if (e.target.value.length >= 2000) {
      e.preventDefault();
      return false;
    }
  }
  trimTextServiceNotes() {
    this.textval2.nativeElement.value =
      this.textval2.nativeElement.value.substring(0, 2000);
  }

  myFunctionServiceNotes(e) {
    if (e.target.value.length >= 2000) {
      this.textval2.nativeElement.value =
        this.textval2.nativeElement.value.substring(0, 2000);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }
}
