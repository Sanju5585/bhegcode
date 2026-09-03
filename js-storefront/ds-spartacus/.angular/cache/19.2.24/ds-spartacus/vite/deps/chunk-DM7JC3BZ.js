import {
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-root.mjs
var PDF_INVOICES_FEATURE = "pdfInvoices";
var PDF_INVOICES_CORE_FEATURE = "pdfInvoicesCore";
function pdfInvoicesFacadeFactory() {
  return facadeFactory({
    facade: PDFInvoicesFacade,
    feature: PDF_INVOICES_FEATURE,
    methods: ["getInvoicesForOrder", "getInvoicePDF"]
  });
}
var PDFInvoicesFacade = class _PDFInvoicesFacade {
  static {
    this.ɵfac = function PDFInvoicesFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PDFInvoicesFacade,
      factory: () => pdfInvoicesFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: pdfInvoicesFacadeFactory
    }]
  }], null, null);
})();
var InvoicesFields;
(function(InvoicesFields2) {
  InvoicesFields2["BASIC"] = "BASIC";
  InvoicesFields2["DEFAULT"] = "DEFAULT";
  InvoicesFields2["FULL"] = "FULL";
})(InvoicesFields || (InvoicesFields = {}));
function defaultRequestedDeliveryDateComponentsConfig() {
  const config = {
    featureModules: {
      [PDF_INVOICES_FEATURE]: {
        cmsComponents: ["AccountOrderDetailsPDFInvoicesComponent"]
      },
      // by default core is bundled together with components
      [PDF_INVOICES_CORE_FEATURE]: PDF_INVOICES_FEATURE
    }
  };
  return config;
}
var PDFInvoicesRootModule = class _PDFInvoicesRootModule {
  static {
    this.ɵfac = function PDFInvoicesRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PDFInvoicesRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    }]
  }], null, null);
})();

export {
  PDF_INVOICES_FEATURE,
  PDF_INVOICES_CORE_FEATURE,
  pdfInvoicesFacadeFactory,
  PDFInvoicesFacade,
  InvoicesFields,
  defaultRequestedDeliveryDateComponentsConfig,
  PDFInvoicesRootModule
};
//# sourceMappingURL=chunk-DM7JC3BZ.js.map
