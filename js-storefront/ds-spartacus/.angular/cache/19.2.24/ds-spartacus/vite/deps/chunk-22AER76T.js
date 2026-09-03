import {
  InvoicesFields,
  PDFInvoicesFacade
} from "./chunk-DM7JC3BZ.js";
import {
  DatePickerModule,
  FileDownloadService,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ListNavigationModule,
  MediaModule,
  PaginationComponent,
  SortingComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  AuthGuard,
  CxDatePipe,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LanguageService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  ReactiveFormsModule
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  combineLatest,
  skip,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-components.mjs
var _c0 = (a0) => ({
  id: a0
});
function InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "cx-pagination", 12);
    ɵɵlistener("viewPageEvent", function InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("pagination", ctx_r1.pagination);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_thead_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 13)(1, "th", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 14);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 14);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 14);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "th", 14);
    ɵɵelement(14, "cx-icon", 15);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "pdfInvoices.invoicesTable.invoiceId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 8, "pdfInvoices.invoicesTable.createdAt"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 10, "pdfInvoices.invoicesTable.netAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 12, "pdfInvoices.invoicesTable.totalAmount"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(15, 14, "pdfInvoices.invoicesTable.attachment"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.DOWNLOAD);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_thead_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 13)(1, "tr")(2, "th", 14);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 14);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 14);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 14);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "th", 14);
    ɵɵelement(15, "cx-icon", 15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "pdfInvoices.invoicesTable.invoiceId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 8, "pdfInvoices.invoicesTable.createdAt"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 10, "pdfInvoices.invoicesTable.netAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 12, "pdfInvoices.invoicesTable.totalAmount"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(16, 14, "pdfInvoices.invoicesTable.attachment"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.DOWNLOAD);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_tr_21_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function InvoicesListComponent_ng_container_0_ng_container_1_tr_21_button_31_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const invoice_r5 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.downloadPDFInvoice(invoice_r5.invoiceId, invoice_r5.externalSystemId));
    });
    ɵɵelement(2, "cx-icon", 15);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "span", 25);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const invoice_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 4, "pdfInvoices.invoicesTable.attachmentDescription", ɵɵpureFunction1(11, _c0, invoice_r5.invoiceId)));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(3, 7, "pdfInvoices.invoicesTable.download"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.FILE);
    ɵɵadvance(2);
    ɵɵproperty("innerText", ɵɵpipeBind1(5, 9, "pdfInvoices.invoicesTable.download"));
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 16)(1, "td", 17)(2, "div", 18);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 19);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "td", 20)(8, "div", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 19);
    ɵɵtext(12);
    ɵɵpipe(13, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(14, "td", 21)(15, "div", 18);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 19);
    ɵɵtext(19);
    ɵɵelementEnd()();
    ɵɵelementStart(20, "td", 21)(21, "div", 18);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "div", 19);
    ɵɵtext(25);
    ɵɵelementEnd()();
    ɵɵelementStart(26, "td", 22)(27, "div", 18);
    ɵɵtext(28);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(30, "div", 19);
    ɵɵtemplate(31, InvoicesListComponent_ng_container_0_ng_container_1_tr_21_button_31_Template, 6, 13, "button", 23);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const invoice_r5 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 10, "pdfInvoices.invoicesTable.invoiceId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", invoice_r5.invoiceId, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 12, "pdfInvoices.invoicesTable.createdAt"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 14, invoice_r5.createdAt, "longDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 17, "pdfInvoices.invoicesTable.netAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.formattedValue) ? invoice_r5.netAmount == null ? null : invoice_r5.netAmount.formattedValue : (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.currencyIso) + " " + (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.value), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 19, "pdfInvoices.invoicesTable.totalAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.formattedValue) ? invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.formattedValue : (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.currencyIso) + " " + (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.value), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 21, "pdfInvoices.invoicesTable.attachment"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", invoice_r5.invoiceId);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "cx-pagination", 26);
    ɵɵlistener("viewPageEvent", function InvoicesListComponent_ng_container_0_ng_container_1_div_23_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("pagination", ctx_r1.pagination);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div")(2, "div", 1)(3, "h2");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 2)(7, "div", 3)(8, "label", 4)(9, "span");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "cx-sorting", 5);
    ɵɵpipe(13, "cxTranslate");
    ɵɵpipe(14, "cxTranslate");
    ɵɵlistener("sortListEvent", function InvoicesListComponent_ng_container_0_ng_container_1_Template_cx_sorting_sortListEvent_12_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.sortChange($event));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(15, InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template, 2, 1, "div", 6);
    ɵɵelementEnd();
    ɵɵelementStart(16, "table", 7);
    ɵɵpipe(17, "cxTranslate");
    ɵɵtemplate(18, InvoicesListComponent_ng_container_0_ng_container_1_thead_18_Template, 16, 16, "thead", 8)(19, InvoicesListComponent_ng_container_0_ng_container_1_thead_19_Template, 17, 16, "thead", 8);
    ɵɵelementStart(20, "tbody");
    ɵɵtemplate(21, InvoicesListComponent_ng_container_0_ng_container_1_tr_21_Template, 32, 23, "tr", 9);
    ɵɵelementEnd()();
    ɵɵelementStart(22, "div", 10);
    ɵɵtemplate(23, InvoicesListComponent_ng_container_0_ng_container_1_div_23_Template, 2, 1, "div", 6);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const invoicesList_r7 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 12, "pdfInvoices.invoicesTable.header"), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 14, "pdfInvoices.sortBy"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(13, 16, "pdfInvoices.sortBy"));
    ɵɵproperty("sortOptions", ctx_r1.sortOptions)("selectedOption", ctx_r1.sort)("ariaLabel", ɵɵpipeBind1(14, 18, "pdfInvoices.sortInvoices"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalPages && invoicesList_r7.pagination.totalPages > 1);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(17, 20, "pdfInvoices.invoicesTable.label"));
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", invoicesList_r7.invoices);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalPages && invoicesList_r7.pagination.totalPages > 1);
  }
}
function InvoicesListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InvoicesListComponent_ng_container_0_ng_container_1_Template, 24, 22, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const invoicesList_r7 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalCount && invoicesList_r7.pagination.totalCount > 0);
  }
}
var InvoicesListComponent = class _InvoicesListComponent {
  constructor(pdfInvoicesFacade, translationService, downloadService, languageService, globalMessageService) {
    this.pdfInvoicesFacade = pdfInvoicesFacade;
    this.translationService = translationService;
    this.downloadService = downloadService;
    this.languageService = languageService;
    this.globalMessageService = globalMessageService;
    this.ICON_TYPE = ICON_TYPE;
    this.PAGE_SIZE = 5;
    this.sort = "byInvoiceIdAsc";
    this.sortMapping = {
      byCreatedAtAsc: "createdAt:asc",
      byCreatedAtDesc: "createdAt:desc",
      byInvoiceIdAsc: "invoiceId:asc",
      byInvoiceIdDesc: "invoiceId:desc",
      byNetAmountAsc: "netAmount:asc",
      byNetAmountDesc: "netAmount:desc",
      byTotalAmountAsc: "totalAmount:asc",
      byTotalAmountDesc: "totalAmount:desc"
    };
    this._initQueryParams = {
      currentPage: 0,
      pageSize: this.PAGE_SIZE,
      fields: InvoicesFields.FULL,
      sort: this.sortMapping[this.sort]
      //backend supports sort codes like invoiceId:asc
    };
    this.queryParams$ = new BehaviorSubject(this._initQueryParams);
    this.invoicesList$ = this.queryParams$.pipe(switchMap((param) => this.pdfInvoicesFacade.getInvoicesForOrder(param)), tap((invoicesList) => this.pagination = {
      currentPage: invoicesList.pagination?.page,
      pageSize: invoicesList.pagination?.count,
      totalPages: invoicesList.pagination?.totalPages,
      totalResults: invoicesList.pagination?.totalCount,
      sort: this.sortMapping[this.sort]
    }), catchError((error) => {
      if (error && this.getNotEnabledError(error)?.length) {
        this.globalMessageService.add({
          key: "pdfInvoices.featureNotEnabled"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
      return EMPTY;
    }));
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.languageService.getActive().pipe(skip(1)).subscribe(() => this.updateQueryParams({
      fields: InvoicesFields.FULL
    })));
    this.getSortOptions();
  }
  updateQueryParams(partialParams) {
    Object.keys(partialParams).forEach((key) => this._initQueryParams[key] = partialParams[key]);
    if (!partialParams.fields) {
      this._initQueryParams.fields = InvoicesFields.DEFAULT;
    }
    this.queryParams$.next(this._initQueryParams);
  }
  pageChange(currentPage) {
    this.updateQueryParams({
      currentPage
    });
  }
  sortChange(sortCode) {
    this.sort = sortCode;
    this.updateQueryParams({
      sort: this.sortMapping[sortCode],
      //backend supports sort codes like invoiceId:asc
      currentPage: 0
    });
  }
  downloadPDFInvoice(invoiceId, externalSystemId) {
    this.pdfInvoicesFacade.getInvoicePDF(invoiceId, externalSystemId).pipe(take(1)).subscribe({
      next: (data) => {
        const file = new Blob([data], {
          type: data.type
        });
        const url = URL.createObjectURL(file);
        this.downloadService.download(url, `${invoiceId}.pdf`);
      }
    });
  }
  getSortOptions() {
    this.sortOptions = [];
    Object.keys(this.sortMapping).forEach((sortKey) => this.sortOptions.push({
      code: sortKey,
      selected: false
    }));
    const translations = this.sortOptions.map((sort) => this.translationService.translate(`pdfInvoices.sorts.${sort.code}`));
    combineLatest(translations).pipe(take(1)).subscribe((translated) => this.sortOptions.forEach((sort, index) => sort.name = translated[index]));
  }
  getNotEnabledError(response) {
    return response?.details ? response.details.filter((error) => error?.type === "UnknownResourceError") : [];
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function InvoicesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesListComponent)(ɵɵdirectiveInject(PDFInvoicesFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(FileDownloadService), ɵɵdirectiveInject(LanguageService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InvoicesListComponent,
      selectors: [["cx-invoices-list"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-invoices-list-header"], [1, "cx-invoices-list-body"], [1, "cx-invoices-list-sort", "top"], [1, "cx-invoices-list-form-group", "form-group"], ["ariaControls", "cx-invoices-list-table", 3, "sortListEvent", "sortOptions", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-invoices-list-pagination", 4, "ngIf"], ["id", "cx-invoices-list-table", 1, "table", "cx-invoices-list-table"], ["class", "cx-invoices-list-thead-mobile", 4, "cxFeature"], ["class", "cx-invoices-list-row", 4, "ngFor", "ngForOf"], [1, "cx-invoices-list-sort", "bottom"], [1, "cx-invoices-list-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], [1, "cx-invoices-list-thead-mobile"], ["scope", "col"], [1, "cx-invoices-list-attachment-icon", 3, "type", "title"], [1, "cx-invoices-list-row"], [1, "cx-invoices-list-code"], [1, "cx-invoices-list-label"], [1, "cx-invoices-list-value"], [1, "cx-invoices-list-date"], [1, "cx-invoices-list-monetary"], [1, "cx-invoices-list-attachment"], ["class", "cx-invoices-list-attachment-btn", 3, "click", 4, "ngIf"], [1, "cx-invoices-list-attachment-btn", 3, "click"], [1, "cx-invoices-list-attachment-text", 3, "innerText"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"]],
      template: function InvoicesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, InvoicesListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.invoicesList$));
        }
      },
      dependencies: [NgForOf, NgIf, SortingComponent, PaginationComponent, IconComponent, FeatureDirective, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesListComponent, [{
    type: Component,
    args: [{
      selector: "cx-invoices-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="invoicesList$ | async as invoicesList">
  <ng-container
    *ngIf="
      invoicesList.pagination &&
      invoicesList.pagination.totalCount &&
      invoicesList.pagination.totalCount > 0
    "
  >
    <div>
      <!-- HEADER -->
      <div class="cx-invoices-list-header">
        <h2>
          {{ 'pdfInvoices.invoicesTable.header' | cxTranslate }}
        </h2>
      </div>

      <!-- BODY -->
      <div class="cx-invoices-list-body">
        <div class="cx-invoices-list-sort top">
          <label class="cx-invoices-list-form-group form-group">
            <span>
              {{ 'pdfInvoices.sortBy' | cxTranslate }}
            </span>
            <cx-sorting
              [sortOptions]="sortOptions"
              (sortListEvent)="sortChange($event)"
              [selectedOption]="sort"
              placeholder="{{ 'pdfInvoices.sortBy' | cxTranslate }}"
              [ariaLabel]="'pdfInvoices.sortInvoices' | cxTranslate"
              ariaControls="cx-invoices-list-table"
            ></cx-sorting>
          </label>
          <div
            class="cx-invoices-list-pagination"
            *ngIf="
              invoicesList.pagination &&
              invoicesList.pagination.totalPages &&
              invoicesList.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-top"
            ></cx-pagination>
          </div>
        </div>

        <!-- TABLE -->
        <table
          id="cx-invoices-list-table"
          class="table cx-invoices-list-table"
          attr.aria-label="{{
            'pdfInvoices.invoicesTable.label' | cxTranslate
          }}"
        >
          <thead
            *cxFeature="'!a11yTableHeaderReadout'"
            class="cx-invoices-list-thead-mobile"
          >
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.invoiceId' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.createdAt' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.netAmount' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.totalAmount' | cxTranslate }}
            </th>
            <th scope="col">
              <cx-icon
                [type]="ICON_TYPE.DOWNLOAD"
                class="cx-invoices-list-attachment-icon"
                title="{{
                  'pdfInvoices.invoicesTable.attachment' | cxTranslate
                }}"
              ></cx-icon>
            </th>
          </thead>
          <thead
            *cxFeature="'a11yTableHeaderReadout'"
            class="cx-invoices-list-thead-mobile"
          >
            <tr>
              <th scope="col">
                {{ 'pdfInvoices.invoicesTable.invoiceId' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'pdfInvoices.invoicesTable.createdAt' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'pdfInvoices.invoicesTable.netAmount' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'pdfInvoices.invoicesTable.totalAmount' | cxTranslate }}
              </th>
              <th scope="col">
                <cx-icon
                  [type]="ICON_TYPE.DOWNLOAD"
                  class="cx-invoices-list-attachment-icon"
                  title="{{
                    'pdfInvoices.invoicesTable.attachment' | cxTranslate
                  }}"
                ></cx-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let invoice of invoicesList.invoices"
              class="cx-invoices-list-row"
            >
              <td class="cx-invoices-list-code">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.invoiceId' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{ invoice.invoiceId }}
                </div>
              </td>
              <td class="cx-invoices-list-date">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.createdAt' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{ invoice.createdAt | cxDate: 'longDate' }}
                </div>
              </td>
              <td class="cx-invoices-list-monetary">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.netAmount' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{
                    invoice.netAmount?.formattedValue
                      ? invoice.netAmount?.formattedValue
                      : invoice.netAmount?.currencyIso +
                        '&nbsp;' +
                        invoice.netAmount?.value
                  }}
                </div>
              </td>
              <td class="cx-invoices-list-monetary">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.totalAmount' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{
                    invoice.totalAmount?.formattedValue
                      ? invoice.totalAmount?.formattedValue
                      : invoice.totalAmount?.currencyIso +
                        '&nbsp;' +
                        invoice.totalAmount?.value
                  }}
                </div>
              </td>
              <td class="cx-invoices-list-attachment">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.attachment' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  <button
                    *ngIf="invoice.invoiceId"
                    class="cx-invoices-list-attachment-btn"
                    (click)="
                      downloadPDFInvoice(
                        invoice.invoiceId,
                        invoice.externalSystemId
                      )
                    "
                    attr.aria-label="{{
                      'pdfInvoices.invoicesTable.attachmentDescription'
                        | cxTranslate
                          : {
                              id: invoice.invoiceId,
                            }
                    }}"
                  >
                    <cx-icon
                      [type]="ICON_TYPE.FILE"
                      class="cx-invoices-list-attachment-icon"
                      title="{{
                        'pdfInvoices.invoicesTable.download' | cxTranslate
                      }}"
                    >
                    </cx-icon>
                    <span
                      class="cx-invoices-list-attachment-text"
                      [innerText]="
                        'pdfInvoices.invoicesTable.download' | cxTranslate
                      "
                    >
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Select Form and Pagination Bottom -->
        <div class="cx-invoices-list-sort bottom">
          <div
            class="cx-invoices-list-pagination"
            *ngIf="
              invoicesList.pagination &&
              invoicesList.pagination.totalPages &&
              invoicesList.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-bottom"
            ></cx-pagination>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: PDFInvoicesFacade
  }, {
    type: TranslationService
  }, {
    type: FileDownloadService
  }, {
    type: LanguageService
  }, {
    type: GlobalMessageService
  }], null);
})();
var PDFInvoicesComponentsModule = class _PDFInvoicesComponentsModule {
  static {
    this.ɵfac = function PDFInvoicesComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PDFInvoicesComponentsModule,
      declarations: [InvoicesListComponent],
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, ListNavigationModule, UrlModule, IconModule, MediaModule, SpinnerModule, FeaturesConfigModule],
      exports: [InvoicesListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsPDFInvoicesComponent: {
            component: InvoicesListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, ListNavigationModule, UrlModule, IconModule, MediaModule, SpinnerModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, ListNavigationModule, UrlModule, IconModule, MediaModule, SpinnerModule, FeaturesConfigModule],
      declarations: [InvoicesListComponent],
      exports: [InvoicesListComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsPDFInvoicesComponent: {
            component: InvoicesListComponent,
            guards: [AuthGuard]
          }
        }
      })]
    }]
  }], null, null);
})();

export {
  InvoicesListComponent,
  PDFInvoicesComponentsModule
};
//# sourceMappingURL=chunk-22AER76T.js.map
