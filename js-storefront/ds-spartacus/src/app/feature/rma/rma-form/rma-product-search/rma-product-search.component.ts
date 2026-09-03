import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RmaService } from '../../rma-services/rma.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ProductSearchType } from '../../../../core/rma/models/rma-form.models';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';

@Component({
  standalone: false,
  selector: 'ds-rma-product-search',
  templateUrl: './rma-product-search.component.html',
  styleUrls: ['./rma-product-search.component.scss'],
})
export class RmaProductSearchComponent implements OnInit, OnChanges {
  productSearchType = ProductSearchType;
  @Input()
  searchType = this.productSearchType.PART;

  @Output()
  helpSearchOpen = new EventEmitter<boolean>();

  @Output()
  searchProducts = new EventEmitter<any>();

  @Output()
  partSelected = new EventEmitter<any>();

  @Input()
  rmaEntry: RmaEntry;

  searchForm: FormGroup;

  public searchResults;
  parts: any;
  openSuggestions: boolean;

  @Output() rmaPartNumber = new EventEmitter<any>();

  @ViewChild('partNumberInput', { static: true }) partNumberInput: ElementRef;

  searchResults$: Observable<any>;
  subject = new Subject();

  searchingProducts = false;

  searchTypeEnum = [
    { id: '', searchLabel: 'Equals' },
    { id: 1, searchLabel: 'Starts With' },
    { id: 2, searchLabel: 'Contains' },
    { id: 3, searchLabel: 'Ends With' },
  ];
  searialSearchTypeVal = '';
  searchingResults = false;

  constructor(
    private rmaService: RmaService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public sanitizer: DomSanitizer
  ) {
    this.searchForm = this.formBuilder.group({
      searchTerm: new FormControl(''),
      filterType: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.searchForm.patchValue({
      searchTerm: this.rmaEntry?.partNumber || '',
    });

    this.searchResults$ = this.subject.pipe(
      debounceTime(450),
      distinctUntilChanged(),
      map(() => {
        this.autoComplete();
      })
    );

    this.searchResults$.subscribe();

    if (this.rmaEntry?.partNumber) {
      this.subject.next(this.rmaEntry.partNumber);
      setTimeout(() => {
        this.renderer.selectRootElement('#partNumberInput').focus();
      }, 500);
    }
  }

  ngOnChanges(changes) {
    if (changes.searchType.currentValue != changes.searchType.previousValue) {
      this.searchForm.patchValue({
        searchTerm: this.rmaEntry?.partNumber || '',
      });
    }
  }

  openHelpSearch() {
    this.helpSearchOpen.emit(true);
  }

  autoSearchResults(evt) {
    evt.target.value = testRegex(
      evt.target.value,
      REGULAR_PATTERN.alphaNumeric
    );
    const searchText = (evt.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      evt.target?.value
    ));
    if (searchText) this.subject.next(searchText);
  }

  autoComplete() {
    this.searchForm.value.searchTerm = testRegex(
      this.searchForm.value.searchTerm,
      REGULAR_PATTERN.alphaNemericOnly
    );
    this.searchForm.value.searchTerm = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.searchForm.value.searchTerm.trim()
    );
    const searchTerm = this.searchForm.value.searchTerm;
    this.searchingProducts = !!this.searchForm.value.searchTerm;
    this.parts = null;
    this.openSuggestions = true;
    this.rmaPartNumber.emit({
      searchText: this.searchForm.value.searchTerm,
      parts: this.parts,
    });
    const searchObj = {
      term: searchTerm || '',
      filter: 'RETURN',
    };

    this.rmaService.autoComplete(OCC_USER_ID_CURRENT, searchObj).subscribe(
      (res) => {
        this.searchingProducts = false;
        this.parts = res;
        this.rmaPartNumber.emit({
          searchText: this.searchForm.value.searchTerm,
          parts: this.parts,
        });
      },
      (error) => {
        this.rmaPartNumber.emit({
          searchText: this.searchForm.value.searchTerm,
          parts: this.parts,
        });
      }
    );
  }

  search() {
    this.searchResults = null;
    const searchObj = {
      // term: this.searchForm.value.searchTerm 000000000001826011,
      filter: 'RETURN',
      isSerialSearch: true,
      pageNumber: 0,
      pageSize: 250,
      searchType: this.searialSearchTypeVal,
      srNum: testRegex(
        this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.searchForm.value.searchTerm
        ),
        REGULAR_PATTERN.alphaNumeric
      ),
    };

    this.searchingResults = true;
    this.rmaService
      .partSearch(OCC_USER_ID_CURRENT, searchObj)
      .subscribe((searchResults) => {
        this.searchingResults = false;
        this.searchResults = searchResults;
        this.searchProducts.emit(this.searchResults);
      });
    // this.searchResults = this.partSearch
  }

  selectSearchType(event) {
    this.searialSearchTypeVal = event;
  }

  selectPart(product) {
    this.partSelected.emit({
      ...product,
      similar: false,
    });
    this.closeSuggestions();
  }

  closeSuggestions() {
    this.openSuggestions = false;
  }

  isDisabled() {
    if (this.searchForm.value.searchTerm.length > 2) return false;
    return true;
  }
}
