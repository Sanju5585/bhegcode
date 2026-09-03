import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  SecurityContext,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { ProductSearchType } from '../../../../../core/rma/models/rma-form.models';
import { RmaEntry } from '../../../../../shared/models/rma/rma.model';
import { RmaService } from '../../../../rma/rma-services/rma.service';

@Component({
  selector: 'app-waygate-rma-product-search',
  standalone: false,
  templateUrl: './waygate-rma-product-search.component.html',
  styleUrl: './waygate-rma-product-search.component.scss',
})
export class WaygateRmaProductSearchComponent implements OnDestroy {
  productSearchType = ProductSearchType;
  @Input()
  searchType = this.productSearchType.PART;

  @Input() selectedPart: any;

  @Output()
  helpSearchOpen = new EventEmitter<boolean>();

  @Output()
  searchProducts = new EventEmitter<any>();

  @Output()
  partSelected = new EventEmitter<any>();

  @Input()
  rmaEntry: RmaEntry;

  @Input() disableSerialSearch = false;

  searchForm: FormGroup;

  public searchResults;
  parts: any;
  openSuggestions: boolean;

  @Output() rmaPartNumber = new EventEmitter<any>();
  @Output() serialNumberChanged = new EventEmitter<string>();

  @ViewChild('partNumberInput', { static: true }) partNumberInput: ElementRef;

  showPartNoInfo: boolean = false;
  showserialNOInfo: boolean = false;

  searchResults$: Observable<any>;
  subject = new Subject();

  searchingProducts = false;

  serialSearchSubject = new Subject<string>();

  serialSearchResults: any[] = [];
  openSerialSuggestions = false;
  @Output() clearSelectedPart = new EventEmitter<void>();
  // selectedPart: any = null;
  //disableSerialSearch = false;

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
      partNumber: new FormControl(''),
      serialNumber: new FormControl(''),
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

    this.serialSearchSubject
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term: string) => {
        if (term.length >= 3) {
          this.autoSearchSerialTrigger(term);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPart']?.currentValue) {
      this.selectedPart = changes['selectedPart'].currentValue;
      this.searchForm.patchValue({
        partNumber: this.selectedPart?.code || '',
        serialNumber: this.selectedPart?.serialNumber || '',
      });
      this.partSelected.emit(this.selectedPart);

      this.openSuggestions = false;
      this.disableSerialSearch = true;
    }
  }

  openHelpSearch() {
    this.helpSearchOpen.emit(true);
  }

  autoSearchResults(evt) {
    const value = testRegex(evt.target.value, REGULAR_PATTERN.alphaNumeric);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, value);
    this.searchForm.patchValue({ partNumber: sanitized });

    if (!sanitized || sanitized.length < 1) {
      this.parts = [];
      this.openSuggestions = false;
      return;
    }

    this.subject.next(sanitized);
  }

  autoComplete() {
    const searchTerm = this.searchForm.value.partNumber?.trim();
    if (!searchTerm) return;

    this.searchingProducts = true;
    this.parts = null;
    this.openSuggestions = true;

    this.rmaPartNumber.emit({ searchText: searchTerm, parts: this.parts });

    const searchObj = {
      term: searchTerm,
      filter: 'RETURN',
    };

    this.rmaService.autoComplete(OCC_USER_ID_CURRENT, searchObj).subscribe(
      (res) => {
        this.searchingProducts = false;
        this.parts = res;
        this.rmaPartNumber.emit({ searchText: searchTerm, parts: this.parts });
      },
      () => {
        this.searchingProducts = false;
        this.parts = [];
        this.rmaPartNumber.emit({ searchText: searchTerm, parts: this.parts });
      }
    );
  }

  autoSearchSerial(event: any) {
    // if (this.disableSerialSearch) return;
    if (this.disableSerialSearch) {
      const raw = event.target.value;
      const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, raw);
      this.searchForm.patchValue({ serialNumber: sanitized });
      this.serialNumberChanged.emit(sanitized);
      return;
    }
    const value = testRegex(event.target.value, REGULAR_PATTERN.alphaNumeric);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, value);
    this.searchForm.patchValue({ serialNumber: sanitized });
    this.serialNumberChanged.emit(sanitized);
    if (!sanitized || sanitized.length < 1) {
      this.serialSearchResults = [];
      this.openSerialSuggestions = false;
      return;
    }

    this.serialSearchSubject.next(sanitized);
  }

  autoSearchSerialTrigger(term: string) {
    const searchObj = {
      filter: 'RETURN',
      isSerialSearch: true,
      pageNumber: 0,
      pageSize: 250,
      searchType: '',
      srNum: term,
    };

    this.searchingResults = true;
    this.rmaService.partSearch(OCC_USER_ID_CURRENT, searchObj).subscribe(
      (searchResults) => {
        this.searchingResults = false;
        this.serialSearchResults = searchResults as any[];
        this.openSerialSuggestions = true;
      },
      () => {
        this.searchingResults = false;
        this.serialSearchResults = [];
        this.openSerialSuggestions = false;
      }
    );
  }

  selectPart(product) {
    this.selectedPart = product;
    this.disableSerialSearch = true;
    this.partSelected.emit({ ...product, similar: false });
    this.closeSuggestions();
  }

  selectSerial(product: any) {
    this.selectedPart = product;
    this.disableSerialSearch = false;

    this.searchForm.patchValue({
      partNumber: product.code,
      serialNumber: product.serialNumber || '',
    });

    this.partSelected.emit({
      ...product,
      similar: false,
      serialNumber: product.serialNumber,
    });

    this.openSerialSuggestions = false;
  }

  clearPartSelection() {
    this.selectedPart = null;
    this.searchForm.reset();
    this.disableSerialSearch = false;
    this.clearSelectedPart.emit();
  }

  closeSuggestions() {
    this.openSuggestions = false;
  }

  ngOnDestroy() {
    this.clearPartSelection();
  }
}
