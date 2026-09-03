import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { RmaService } from '../../../../rma/rma-services/rma.service';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { ProductSearchType } from '../../../../../core/rma/models/rma-form.models';
import { RmaEntry } from '../../../../../shared/models/rma/rma.model';

@Component({
  selector: 'app-waygate-rma-find-similar-dailog',
  standalone: false,
  templateUrl: './waygate-rma-find-similar-dailog.component.html',
  styleUrl: './waygate-rma-find-similar-dailog.component.scss',
})
export class WaygateRmaFindSimilarDailogComponent {
  @Output()
  closeHelpSection = new EventEmitter<boolean>();

  // @Output()
  // productSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  otherSelected: EventEmitter<any> = new EventEmitter<any>();
  noFoundPart: any;

  productSearchType = ProductSearchType;
  @Input()
  searchType = this.productSearchType.PART;

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

  showPartNoInfo: boolean = false;
  showserialNOInfo: boolean = false;

  searchResults$: Observable<any>;
  subject = new Subject();

  searchingProducts = false;
  serialSearchSubject = new Subject<string>();
  serialSearchResults: any[] = [];
  searchingSerialResults = false;
  openSerialSuggestions = false;

  searchTypeEnum = [
    { id: '', searchLabel: 'Equals' },
    { id: 1, searchLabel: 'Starts With' },
    { id: 2, searchLabel: 'Contains' },
    { id: 3, searchLabel: 'Ends With' },
  ];
  searialSearchTypeVal = '';
  searchingResults = false;
  product: any;

  constructor(
    private rmaService: RmaService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public sanitizer: DomSanitizer
  ) {
    this.searchForm = this.formBuilder.group({
      searchTerm: new FormControl(''),
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

  ngOnChanges(changes) {
    if (changes.searchType.currentValue != changes.searchType.previousValue) {
      this.searchForm.patchValue({
        searchTerm: this.rmaEntry?.partNumber || '',
      });
    }
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
    const rawTerm = this.searchForm.value.searchTerm;
    const sanitizedTerm = this.sanitizer.sanitize(
      SecurityContext.HTML,
      testRegex(rawTerm, REGULAR_PATTERN.alphaNemericOnly)?.trim()
    );

    if (!sanitizedTerm) {
      this.parts = [];
      return;
    }

    this.searchingProducts = true;
    this.parts = [];
    this.serialSearchResults = [];

    const searchObj = {
      partNum: sanitizedTerm,
      srNum: '',
      filter: 'RETURN',
      isSerialSearch: false,
      pageNumber: 0,
      pageSize: 250,
      searchType: '',
    };

    this.rmaService.partSearch(OCC_USER_ID_CURRENT, searchObj).subscribe(
      (res) => {
        this.searchingProducts = false;
        this.parts = res as any[];
      },
      () => {
        this.searchingProducts = false;
        this.parts = [];
      }
    );
  }

  autoSearchSerial(event: any) {
    const value = testRegex(event.target.value, REGULAR_PATTERN.alphaNumeric);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, value);
    this.searchForm.patchValue({ serialNumber: sanitized });

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
    this.searchingSerialResults = true;
    this.parts = [];
    this.serialSearchResults = [];
    this.rmaService.partSearch(OCC_USER_ID_CURRENT, searchObj).subscribe(
      (searchResults) => {
        this.searchingSerialResults = false;
        this.parts = searchResults as any[];
      },
      () => {
        this.searchingSerialResults = false;
        this.parts = [];
      }
    );
  }

  selectSearchType(event) {
    this.searialSearchTypeVal = event;
  }

  closeHelp() {
    this.closeHelpSection.emit(true);
  }

  onSelectPart(part: any) {
    this.product = part;
  }

  cantFindPart(part: any) {
    this.noFoundPart = part;
  }

  selectPart() {
    if (this.product) {
      this.partSelected.emit({
        ...this.product,
        serialNumber: this.product.summary || '',
        similar: false
      });  
    } else if (this.noFoundPart) {
      this.otherSelected.emit(true);
    } else {
      console.warn('No account selected');
    }
    this.closeHelp();
  }

  selectSerial(product: any) {
    this.partSelected.emit({
      ...product,
      similar: false,
    });
    this.openSerialSuggestions = false;
    this.closeHelp();
  }

  getProductCategories(categories: []) {
    let filterCategories = this.removeDuplicateCategory(categories);

    const sortedCats = filterCategories.sort(this.sortAlphaNum);
    let catHierarchy = [];
    sortedCats.map((el: any, index) => {
      if (index > 0) catHierarchy.push(el.name);
    });
    return {
      title: catHierarchy[catHierarchy.length - 1],
      hierarchy: catHierarchy.join(' > '),
    };
  }

  sortAlphaNum(a, b) {
    return a.code.localeCompare(b.code, 'en', { numeric: true });
  }

  removeDuplicateCategory(categories: []) {
    return categories.reduce((arr, item: any) => {
      const removed = arr.filter((i) => i.code !== item.code);
      return [...removed, item];
    }, []);
  }

  closeSuggestions() {
    this.openSuggestions = false;
  }

  isDisabled() {
    if (this.searchForm.value.searchTerm.length > 2) return false;
    return true;
  }
}