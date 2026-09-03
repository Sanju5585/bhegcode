import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { RmaService } from '../../rma-services/rma.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'ds-rma-help-find-part',
  templateUrl: './rma-help-find-part.component.html',
  styleUrls: ['./rma-help-find-part.component.scss'],
})
export class RmaHelpFindPartComponent implements OnInit {
  @Output()
  closeHelpSection = new EventEmitter<boolean>();

  @Output()
  productSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  otherSelected: EventEmitter<any> = new EventEmitter<any>();

  searchComplete = false;
  searchingResults = false;
  findPartNumberForm: FormGroup;
  searchResults: any;

  constructor(
    private formBuilder: FormBuilder,
    private rmaService: RmaService,
    public sanitizer: DomSanitizer
  ) {
    this.findPartNumberForm = this.formBuilder.group({
      partNumber: new FormControl(''),
      serialNumber: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  closeHelp() {
    this.closeHelpSection.emit(true);
  }

  onPartNumValueChange(ev) {
    this.findPartNumberForm.controls['partNumber'].setValue(ev.target.value);
  }

  onSerialNumValueChange(ev) {
    this.findPartNumberForm.controls['serialNumber'].setValue(ev.target.value);
  }

  searchPart() {
    const searchObj = {
      partNum: testRegex(
        this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.findPartNumberForm.controls['partNumber'].value
        ),
        REGULAR_PATTERN.alphaNumeric
      ),
      srNum: testRegex(
        this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.findPartNumberForm.controls['serialNumber'].value
        ),
        REGULAR_PATTERN.alphaNumeric
      ),
    };

    this.searchingResults = true;
    this.rmaService
      .partSearch(OCC_USER_ID_CURRENT, searchObj)
      .subscribe((searchResults) => {
        this.searchComplete = true;
        this.searchingResults = false;
        this.searchResults = searchResults;
      });
  }

  selectProductAfterSearch(product) {
    if (product) {
      this.productSelected.emit(product);
    }
  }

  cantFindPart() {
    this.otherSelected.emit(true);
  }
}
