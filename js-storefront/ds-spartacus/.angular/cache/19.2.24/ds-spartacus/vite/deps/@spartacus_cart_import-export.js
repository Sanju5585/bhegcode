import {
  ORDER_ENTRIES_CONTEXT,
  OrderEntriesSource,
  ProductImportStatus
} from "./chunk-KEAKWHYV.js";
import {
  ContextService,
  DIALOG_TYPE,
  ExportCsvFileService,
  FileUploadComponent,
  FileUploadModule,
  FilesFormValidators,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  FormUtils,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ImportCsvFileService,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  MessageComponent,
  MessageComponentModule,
  PageComponentModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  Config,
  ConfigModule,
  CxDatePipe,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  TranslatePipe,
  TranslationService,
  UrlModule,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  filter,
  finalize,
  map,
  of,
  startWith,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export-core.mjs
var ImportExportConfig = class _ImportExportConfig {
  static {
    this.ɵfac = function ImportExportConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ImportExportConfig,
      factory: function ImportExportConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ImportExportConfig)();
        } else {
          __ngConditionalFactory__ = ɵɵinject(Config);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var CartNameSource;
(function(CartNameSource2) {
  CartNameSource2["FILE_NAME"] = "fileName";
  CartNameSource2["DATE_TIME"] = "dateTime";
})(CartNameSource || (CartNameSource = {}));
var defaultImportExportConfig = {
  cartImportExport: {
    file: {
      separator: ","
    },
    import: {
      fileValidity: {
        maxSize: 1,
        maxEntries: {
          [OrderEntriesSource.NEW_SAVED_CART]: 100,
          [OrderEntriesSource.SAVED_CART]: 100,
          [OrderEntriesSource.ACTIVE_CART]: 10,
          [OrderEntriesSource.QUICK_ORDER]: 10
        },
        allowedTypes: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv", ".csv"]
      },
      cartNameGeneration: {
        source: CartNameSource.FILE_NAME
      }
    },
    export: {
      additionalColumns: [{
        name: {
          key: "name"
        },
        value: "product.name"
      }, {
        name: {
          key: "price"
        },
        value: "totalPrice.formattedValue"
      }],
      messageEnabled: true,
      downloadDelay: 1e3,
      maxEntries: 1e3,
      fileOptions: {
        fileName: "cart",
        extension: "csv",
        type: "text/csv"
      }
    }
  }
};
var ImportExportCoreModule = class _ImportExportCoreModule {
  static forRoot() {
    return {
      ngModule: _ImportExportCoreModule,
      providers: [provideDefaultConfig(defaultImportExportConfig)]
    };
  }
  static {
    this.ɵfac = function ImportExportCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ImportExportCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
LAUNCH_CALLER["IMPORT_TO_CART"] = "IMPORT_TO_CART";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export-components.mjs
function ExportOrderEntriesComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function ExportOrderEntriesComponent_button_0_Template_button_click_0_listener() {
      const entries_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.exportCsv(entries_r2));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "exportEntries.exportProductToCsv"), "\n");
  }
}
var _c0 = ["open"];
function ImportOrderEntriesComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function ImportOrderEntriesComponent_button_0_Template_button_click_0_listener() {
      const orderEntriesContext_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openDialog(orderEntriesContext_r2));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "importEntries.importProducts"), "\n");
  }
}
var _c1 = () => ({
  autofocus: ".cx-message"
});
function ImportEntriesFormComponent_form_0_cx_message_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-message", 10);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", ɵɵpipeBind1(1, 4, "importEntriesDialog.selectedSuccessfully"))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION)("isVisibleCloseButton", false)("cxFocus", ɵɵpureFunction0(6, _c1));
  }
}
function ImportEntriesFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("submit", function ImportEntriesFormComponent_form_0_Template_form_submit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formSubmitSubject$.next(void 0));
    });
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, ImportEntriesFormComponent_form_0_cx_message_2_Template, 2, 7, "cx-message", 3);
    ɵɵelementEnd();
    ɵɵelementStart(3, "p", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "p");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "label")(10, "cx-file-upload", 5);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(13, "cx-form-errors", 6);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 7)(15, "button", 8);
    ɵɵlistener("click", function ImportEntriesFormComponent_form_0_Template_button_click_15_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close("Close Import Products Dialog"));
    });
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 9);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_10_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r1.form.get("file")) == null ? null : tmp_2_0.value) && ((tmp_2_0 = ctx_r1.form.get("file")) == null ? null : tmp_2_0.valid));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 11, "importEntriesDialog.importProductsSubtitle"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 13, "importEntriesDialog.importProductFileDetails"), " ");
    ɵɵadvance(3);
    ɵɵproperty("formControl", ctx_r1.form.get("file"))("accept", ctx_r1.allowedTypes);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 15, "importEntriesDialog.selectFile"), " ");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.form.get("file"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 17, "importEntriesDialog.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ((tmp_10_0 = ctx_r1.form.get("file")) == null ? null : tmp_10_0.status) === "PENDING");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 19, "importEntriesDialog.upload"), " ");
  }
}
var _c2 = (a0) => ({
  count: a0
});
function ImportEntriesSummaryComponent_p_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "importEntriesDialog.summary.loaded", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "importEntriesDialog.summary.loadedToCart", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 9);
    ɵɵtemplate(1, ImportEntriesSummaryComponent_p_1_ng_container_1_Template, 3, 4, "ng-container", 10)(2, ImportEntriesSummaryComponent_p_1_ng_container_2_Template, 3, 4, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r0.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.orderEntriesSource.QUICK_ORDER);
  }
}
function ImportEntriesSummaryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "importEntriesDialog.summary.loading", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 12);
    ɵɵelement(1, "cx-icon", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconTypes.SUCCESS);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 2, "importEntriesDialog.summary.successes", ctx_r0.summary), "\n");
  }
}
function ImportEntriesSummaryComponent_div_5_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "importEntriesDialog.summary.messages." + message_r3.statusCode, message_r3), " ");
  }
}
function ImportEntriesSummaryComponent_div_5_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, ImportEntriesSummaryComponent_div_5_ul_8_li_1_Template, 3, 4, "li", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.summary.warningMessages);
  }
}
function ImportEntriesSummaryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "p");
    ɵɵelement(2, "cx-icon", 15);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "button", 16);
    ɵɵlistener("click", function ImportEntriesSummaryComponent_div_5_Template_button_click_5_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.toggleWarningList());
    });
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(8, ImportEntriesSummaryComponent_div_5_ul_8_Template, 2, 1, "ul", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r0.iconTypes.ERROR);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 4, "importEntriesDialog.summary.warning", ɵɵpureFunction1(9, _c2, ctx_r0.summary.warningMessages.length)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 7, ctx_r0.warningDetailsOpened ? "importEntriesDialog.summary.hide" : "importEntriesDialog.summary.show"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.warningDetailsOpened);
  }
}
function ImportEntriesSummaryComponent_div_6_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "importEntriesDialog.summary.messages." + message_r5.statusCode, message_r5), " ");
  }
}
function ImportEntriesSummaryComponent_div_6_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, ImportEntriesSummaryComponent_div_6_ul_8_li_1_Template, 3, 4, "li", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.summary.errorMessages);
  }
}
function ImportEntriesSummaryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "p");
    ɵɵelement(2, "cx-icon", 20);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "button", 16);
    ɵɵlistener("click", function ImportEntriesSummaryComponent_div_6_Template_button_click_5_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.toggleErrorList());
    });
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(8, ImportEntriesSummaryComponent_div_6_ul_8_Template, 2, 1, "ul", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r0.iconTypes.RESET);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 4, "importEntriesDialog.summary.error", ɵɵpureFunction1(9, _c2, ctx_r0.summary.errorMessages.length)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 7, ctx_r0.errorDetailsOpened ? "importEntriesDialog.summary.hide" : "importEntriesDialog.summary.show"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.errorDetailsOpened);
  }
}
function ImportEntriesSummaryComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function ImportEntriesSummaryComponent_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.close("Close Import Products Dialog"));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "importEntriesDialog.close"), " ");
  }
}
function ImportEntriesSummaryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "importEntriesDialog.summary.info"));
  }
}
function ImportToNewSavedCartFormComponent_form_0_cx_message_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-message", 18);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", ɵɵpipeBind1(1, 4, "importEntriesDialog.selectedSuccessfully"))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION)("isVisibleCloseButton", false)("cxFocus", ɵɵpureFunction0(6, _c1));
  }
}
function ImportToNewSavedCartFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("submit", function ImportToNewSavedCartFormComponent_form_0_Template_form_submit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formSubmitSubject$.next(void 0));
    });
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, ImportToNewSavedCartFormComponent_form_0_cx_message_2_Template, 2, 7, "cx-message", 3);
    ɵɵelementEnd();
    ɵɵelement(3, "cx-form-required-legend");
    ɵɵelementStart(4, "p", 4);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "p");
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "cx-file-upload", 5);
    ɵɵlistener("update", function ImportToNewSavedCartFormComponent_form_0_Template_cx_file_upload_update_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateCartName());
    });
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(15, "cx-form-errors", 6);
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 7)(17, "label")(18, "span", 8);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelement(21, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(22, "input", 9)(23, "cx-form-errors", 10);
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 7)(25, "label")(26, "span", 8);
    ɵɵtext(27);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementStart(29, "span", 11);
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelement(32, "textarea", 12)(33, "cx-form-errors", 13);
    ɵɵelementStart(34, "p", 14);
    ɵɵtext(35);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(37, "div", 15)(38, "button", 16);
    ɵɵlistener("click", function ImportToNewSavedCartFormComponent_form_0_Template_button_click_38_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close("Close Import Products Dialog"));
    });
    ɵɵtext(39);
    ɵɵpipe(40, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(41, "button", 17);
    ɵɵtext(42);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_11_0;
    let tmp_17_0;
    let tmp_22_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r1.form.get("file")) == null ? null : tmp_2_0.value) && ((tmp_2_0 = ctx_r1.form.get("file")) == null ? null : tmp_2_0.valid));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 23, "importEntriesDialog.importProductsNewSavedCartSubtitle"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 25, "importEntriesDialog.importProductFileDetails"), " ");
    ɵɵadvance(4);
    ɵɵproperty("formControl", ctx_r1.form.get("file"))("accept", ctx_r1.allowedTypes);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 27, "importEntriesDialog.selectFile"), " ");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.form.get("file"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 29, "importEntriesDialog.savedCartName"), " ");
    ɵɵadvance(3);
    ɵɵproperty("maxLength", ctx_r1.nameMaxLength);
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.form.get("name")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.form.get("name")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance();
    ɵɵproperty("control", ctx_r1.form.get("name"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 31, "importEntriesDialog.savedCartDescription"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" (", ɵɵpipeBind1(31, 33, "importEntriesDialog.optional"), ") ");
    ɵɵadvance(2);
    ɵɵproperty("maxLength", ctx_r1.descriptionMaxLength);
    ɵɵattribute("aria-invalid", ((tmp_17_0 = ctx_r1.form.get("description")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = ctx_r1.form.get("description")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "descriptionError");
    ɵɵadvance();
    ɵɵproperty("control", ctx_r1.form.get("description"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(36, 35, "importEntriesDialog.charactersLeft", ɵɵpureFunction1(42, _c2, ctx_r1.descriptionsCharacterLeft)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(40, 38, "importEntriesDialog.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ((tmp_22_0 = ctx_r1.form.get("file")) == null ? null : tmp_22_0.status) === "PENDING");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 40, "importEntriesDialog.upload"), " ");
  }
}
function ImportEntriesDialogComponent_ng_container_13_ng_container_1_cx_import_to_new_saved_cart_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-import-to-new-saved-cart-form", 12);
    ɵɵlistener("submitEvent", function ImportEntriesDialogComponent_ng_container_13_ng_container_1_cx_import_to_new_saved_cart_form_1_Template_cx_import_to_new_saved_cart_form_submitEvent_0_listener($event) {
      ɵɵrestoreView(_r1);
      const context_r2 = ɵɵnextContext(2).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.importProducts(context_r2, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const context_r2 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_13_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-import-entries-form", 12);
    ɵɵlistener("submitEvent", function ImportEntriesDialogComponent_ng_container_13_ng_container_1_ng_template_2_Template_cx_import_entries_form_submitEvent_0_listener($event) {
      ɵɵrestoreView(_r4);
      const context_r2 = ɵɵnextContext(2).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.importProducts(context_r2, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const context_r2 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImportEntriesDialogComponent_ng_container_13_ng_container_1_cx_import_to_new_saved_cart_form_1_Template, 1, 1, "cx-import-to-new-saved-cart-form", 11)(2, ImportEntriesDialogComponent_ng_container_13_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const reducedForm_r5 = ɵɵreference(3);
    const context_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isNewCartForm(context_r2))("ngIfElse", reducedForm_r5);
  }
}
function ImportEntriesDialogComponent_ng_container_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-import-entries-summary", 13);
    ɵɵpipe(1, "async");
    ɵɵlistener("closeEvent", function ImportEntriesDialogComponent_ng_container_13_ng_template_2_Template_cx_import_entries_summary_closeEvent_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.close("Close Import Products Dialog"));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const context_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("summary", ɵɵpipeBind1(1, 2, ctx_r2.summary$))("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImportEntriesDialogComponent_ng_container_13_ng_container_1_Template, 4, 2, "ng-container", 10)(2, ImportEntriesDialogComponent_ng_container_13_ng_template_2_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const importSummary_r7 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.formState)("ngIfElse", importSummary_r7);
  }
}
function ImportExportOrderEntriesComponent_cx_import_order_entries_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-import-order-entries");
  }
}
function ImportExportOrderEntriesComponent_cx_export_order_entries_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-export-order-entries");
  }
}
var ExportOrderEntriesToCsvService = class _ExportOrderEntriesToCsvService {
  constructor(exportCsvFileService, importExportConfig, globalMessageService, translationService) {
    this.exportCsvFileService = exportCsvFileService;
    this.importExportConfig = importExportConfig;
    this.globalMessageService = globalMessageService;
    this.translationService = translationService;
    this.columns = [{
      name: {
        key: "code"
      },
      value: "product.code"
    }, {
      name: {
        key: "quantity"
      },
      value: "quantity"
    }, ...this.exportConfig?.additionalColumns ?? []];
  }
  get exportConfig() {
    return this.importExportConfig.cartImportExport?.export;
  }
  get separator() {
    return this.importExportConfig.cartImportExport?.file.separator;
  }
  downloadCsv(entries) {
    this.getResolvedEntries(entries).pipe(take(1)).subscribe((csvData) => this.download(csvData));
  }
  resolveValue(combinedKeys, entry) {
    return combinedKeys.split(".").reduce((obj, key) => obj ? obj[key] : "", entry)?.toString() ?? "";
  }
  resolveValues(entries) {
    return entries.map((entry) => this.columns.map((column) => this.resolveValue(column.value, entry)));
  }
  getTranslatedColumnHeaders() {
    return combineLatest(this.columns.map((column) => this.translationService.translate(`exportEntries.columnNames.${column.name.key}`)));
  }
  displayExportMessage() {
    this.globalMessageService.add({
      key: "exportEntries.exportMessage"
    }, GlobalMessageType.MSG_TYPE_INFO);
  }
  limitValues(data) {
    return this.exportConfig?.maxEntries ? data.splice(0, this.exportConfig?.maxEntries) : data;
  }
  getResolvedEntries(entries) {
    const values = this.limitValues(this.resolveValues(entries));
    return this.getTranslatedColumnHeaders().pipe(map((headers) => {
      return [headers, ...values];
    }));
  }
  download(entries) {
    if (this.exportConfig?.messageEnabled) {
      this.displayExportMessage();
    }
    setTimeout(() => {
      if (this.exportConfig !== void 0 && this.separator !== void 0) {
        this.exportCsvFileService.download(entries, this.separator, this.exportConfig.fileOptions);
      }
    }, this.exportConfig?.downloadDelay ?? 0);
  }
  static {
    this.ɵfac = function ExportOrderEntriesToCsvService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExportOrderEntriesToCsvService)(ɵɵinject(ExportCsvFileService), ɵɵinject(ImportExportConfig), ɵɵinject(GlobalMessageService), ɵɵinject(TranslationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExportOrderEntriesToCsvService,
      factory: _ExportOrderEntriesToCsvService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesToCsvService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ExportCsvFileService
  }, {
    type: ImportExportConfig
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }], null);
})();
var ExportOrderEntriesComponent = class _ExportOrderEntriesComponent {
  constructor(exportEntriesService, contextService) {
    this.exportEntriesService = exportEntriesService;
    this.contextService = contextService;
    this.styles = "container";
    this.orderEntriesContext$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
    this.entries$ = this.orderEntriesContext$.pipe(switchMap((orderEntriesContext) => orderEntriesContext?.getEntries?.() ?? of(void 0)));
  }
  exportCsv(entries) {
    this.exportEntriesService.downloadCsv(entries);
  }
  static {
    this.ɵfac = function ExportOrderEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExportOrderEntriesComponent)(ɵɵdirectiveInject(ExportOrderEntriesToCsvService), ɵɵdirectiveInject(ContextService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExportOrderEntriesComponent,
      selectors: [["cx-export-order-entries"]],
      hostVars: 2,
      hostBindings: function ExportOrderEntriesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.styles);
        }
      },
      standalone: false,
      decls: 3,
      vars: 5,
      consts: [["class", "btn btn-tertiary cx-export-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-tertiary", "cx-export-btn", 3, "click"]],
      template: function ExportOrderEntriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ExportOrderEntriesComponent_button_0_Template, 3, 3, "button", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵproperty("ngIf", ((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.entries$)) == null ? null : tmp_0_0.length) > 0 && ɵɵpipeBind1(2, 3, ctx.entries$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-export-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<button
  *ngIf="(entries$ | async)?.length > 0 && (entries$ | async) as entries"
  class="btn btn-tertiary cx-export-btn"
  (click)="exportCsv(entries)"
>
  {{ 'exportEntries.exportProductToCsv' | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: ExportOrderEntriesToCsvService
  }, {
    type: ContextService
  }], {
    styles: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var ExportOrderEntriesModule = class _ExportOrderEntriesModule {
  static {
    this.ɵfac = function ExportOrderEntriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExportOrderEntriesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ExportOrderEntriesModule,
      declarations: [ExportOrderEntriesComponent],
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, ConfigModule],
      exports: [ExportOrderEntriesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, ConfigModule.withConfig({
        cmsComponents: {
          ExportOrderEntriesComponent: {
            component: ExportOrderEntriesComponent
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, ConfigModule.withConfig({
        cmsComponents: {
          ExportOrderEntriesComponent: {
            component: ExportOrderEntriesComponent
          }
        }
      })],
      exports: [ExportOrderEntriesComponent],
      declarations: [ExportOrderEntriesComponent]
    }]
  }], null, null);
})();
var ImportOrderEntriesComponent = class _ImportOrderEntriesComponent {
  constructor(launchDialogService, contextService) {
    this.launchDialogService = launchDialogService;
    this.contextService = contextService;
    this.subscription = new Subscription();
    this.orderEntriesContext$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
  }
  openDialog(orderEntriesContext) {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.IMPORT_TO_CART, this.element, {
      orderEntriesContext
    });
  }
  static {
    this.ɵfac = function ImportOrderEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportOrderEntriesComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ContextService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportOrderEntriesComponent,
      selectors: [["cx-import-order-entries"]],
      viewQuery: function ImportOrderEntriesComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "btn btn-tertiary cx-import-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-tertiary", "cx-import-btn", 3, "click"]],
      template: function ImportOrderEntriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ImportOrderEntriesComponent_button_0_Template, 3, 3, "button", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntriesContext$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<button
  *ngIf="orderEntriesContext$ | async as orderEntriesContext"
  class="btn btn-tertiary cx-import-btn"
  (click)="openDialog(orderEntriesContext)"
>
  {{ 'importEntries.importProducts' | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ContextService
  }], {
    element: [{
      type: ViewChild,
      args: ["open"]
    }]
  });
})();
var ImportProductsFromCsvService = class _ImportProductsFromCsvService {
  constructor() {
  }
  csvDataToProduct(csvData) {
    return csvData.map((row) => ({
      productCode: row[0],
      quantity: Number(row[1])
    }));
  }
  isDataParsableToProducts(data) {
    const patternRegex = new RegExp(/(?:\s|^)\d+(?=\s|$)/);
    return data.length > 0 && data.every((row) => patternRegex.test(row[1]));
  }
  static {
    this.ɵfac = function ImportProductsFromCsvService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportProductsFromCsvService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ImportProductsFromCsvService,
      factory: _ImportProductsFromCsvService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportProductsFromCsvService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var ImportEntriesFormComponent = class _ImportEntriesFormComponent {
  constructor(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig) {
    this.launchDialogService = launchDialogService;
    this.importToCartService = importToCartService;
    this.importCsvService = importCsvService;
    this.filesFormValidators = filesFormValidators;
    this.importExportConfig = importExportConfig;
    this.formSubmitSubject$ = new Subject();
    this.globalMessageType = GlobalMessageType;
    this.submitEvent = new EventEmitter();
  }
  ngOnInit() {
    this.form = this.buildForm();
    this.formSubmitSubject$.pipe(tap(() => {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        FormUtils.deepUpdateValueAndValidity(this.form);
      }
    }), switchMap(() => this.form.statusChanges.pipe(startWith(this.form.get("file")?.status), filter((status) => status !== "PENDING"), take(1))), filter((status) => status === "VALID")).subscribe(() => {
      this.save();
    });
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  save() {
    const file = this.form.get("file")?.value?.[0];
    if (this.separator !== void 0) {
      this.importCsvService.loadFile(file, this.separator).subscribe((loadedFile) => {
        this.submitEvent.emit({
          products: this.importToCartService.csvDataToProduct(loadedFile)
        });
      });
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("file", new UntypedFormControl("", [Validators.required, this.filesFormValidators.maxSize(this.maxSize)], [(control) => this.separator !== void 0 ? this.importCsvService.validateFile(control.value[0], {
      separator: this.separator,
      isDataParsable: this.importToCartService.isDataParsableToProducts,
      maxEntries: this.maxEntries
    }) : of(null)]));
    return form;
  }
  get allowedTypes() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.allowedTypes;
  }
  get maxSize() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxSize;
  }
  get maxEntries() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxEntries?.[this.type];
  }
  get separator() {
    return this.importExportConfig.cartImportExport?.file.separator;
  }
  static {
    this.ɵfac = function ImportEntriesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportEntriesFormComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ImportProductsFromCsvService), ɵɵdirectiveInject(ImportCsvFileService), ɵɵdirectiveInject(FilesFormValidators), ɵɵdirectiveInject(ImportExportConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportEntriesFormComponent,
      selectors: [["cx-import-entries-form"]],
      inputs: {
        type: "type"
      },
      outputs: {
        submitEvent: "submitEvent"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["aria-live", "assertive", "aria-atomic", "true"], [3, "text", "type", "isVisibleCloseButton", "cxFocus", 4, "ngIf"], [1, "cx-import-entries-subtitle"], [3, "formControl", "accept"], ["prefix", "formErrors.file", 3, "control"], [1, "cx-import-entries-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "text", "type", "isVisibleCloseButton", "cxFocus"]],
      template: function ImportEntriesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ImportEntriesFormComponent_form_0_Template, 21, 21, "form", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormErrorsComponent, FocusDirective, FileUploadComponent, MessageComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form
  *ngIf="form"
  [formGroup]="form"
  (submit)="formSubmitSubject$.next(undefined)"
>
  <div aria-live="assertive" aria-atomic="true">
    <cx-message
      *ngIf="form.get('file')?.value && form.get('file')?.valid"
      [text]="'importEntriesDialog.selectedSuccessfully' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      [isVisibleCloseButton]="false"
      [cxFocus]="{ autofocus: '.cx-message' }"
    ></cx-message>
  </div>
  <p class="cx-import-entries-subtitle">
    {{ 'importEntriesDialog.importProductsSubtitle' | cxTranslate }}
  </p>
  <p>
    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}
  </p>
  <label>
    <cx-file-upload [formControl]="form.get('file')" [accept]="allowedTypes">
      {{ 'importEntriesDialog.selectFile' | cxTranslate }}
    </cx-file-upload>
    <cx-form-errors
      [control]="form.get('file')"
      prefix="formErrors.file"
    ></cx-form-errors>
  </label>
  <div class="cx-import-entries-footer">
    <button
      (click)="close('Close Import Products Dialog')"
      class="btn btn-secondary"
      type="button"
    >
      {{ 'importEntriesDialog.cancel' | cxTranslate }}
    </button>
    <button
      class="btn btn-primary"
      type="submit"
      [disabled]="form.get('file')?.status === 'PENDING'"
    >
      {{ 'importEntriesDialog.upload' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ImportProductsFromCsvService
  }, {
    type: ImportCsvFileService
  }, {
    type: FilesFormValidators
  }, {
    type: ImportExportConfig
  }], {
    submitEvent: [{
      type: Output
    }],
    type: [{
      type: Input
    }]
  });
})();
var ImportEntriesSummaryComponent = class _ImportEntriesSummaryComponent {
  constructor() {
    this.iconTypes = ICON_TYPE;
    this.orderEntriesSource = OrderEntriesSource;
    this.warningDetailsOpened = false;
    this.errorDetailsOpened = false;
    this.closeEvent = new EventEmitter();
  }
  close(reason) {
    this.closeEvent.emit(reason);
  }
  toggleWarningList() {
    this.warningDetailsOpened = !this.warningDetailsOpened;
  }
  toggleErrorList() {
    this.errorDetailsOpened = !this.errorDetailsOpened;
  }
  static {
    this.ɵfac = function ImportEntriesSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportEntriesSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportEntriesSummaryComponent,
      selectors: [["cx-import-entries-summary"]],
      inputs: {
        type: "type",
        summary: "summary"
      },
      outputs: {
        closeEvent: "closeEvent"
      },
      standalone: false,
      decls: 11,
      vars: 7,
      consts: [["loading", ""], ["info", ""], [1, "cx-import-entries-summary-status"], [3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["class", "cx-import-entries-summary-successes", 4, "ngIf"], ["class", "cx-import-entries-summary-warnings", 4, "ngIf"], ["class", "cx-import-entries-summary-errors", 4, "ngIf"], [1, "cx-import-entries-summary-footer"], ["class", "btn btn-secondary", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "cx-import-entries-summary-successes"], [1, "success", 3, "type"], [1, "cx-import-entries-summary-warnings"], [1, "warning", 3, "type"], [1, "btn", "btn-tertiary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-import-entries-summary-errors"], [1, "error", 3, "type"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
      template: function ImportEntriesSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵtemplate(1, ImportEntriesSummaryComponent_p_1_Template, 3, 2, "p", 3)(2, ImportEntriesSummaryComponent_ng_template_2_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
          ɵɵtemplate(4, ImportEntriesSummaryComponent_p_4_Template, 4, 5, "p", 4)(5, ImportEntriesSummaryComponent_div_5_Template, 9, 11, "div", 5)(6, ImportEntriesSummaryComponent_div_6_Template, 9, 11, "div", 6);
          ɵɵelementStart(7, "div", 7);
          ɵɵtemplate(8, ImportEntriesSummaryComponent_button_8_Template, 3, 3, "button", 8)(9, ImportEntriesSummaryComponent_ng_template_9_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const loading_r7 = ɵɵreference(3);
          const info_r8 = ɵɵreference(10);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.summary.loading)("ngIfElse", loading_r7);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.summary.successesCount > 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.summary.warningMessages.length > 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.summary.errorMessages.length > 0);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.summary.loading)("ngIfElse", info_r8);
        }
      },
      dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-import-entries-summary-status">
  <p *ngIf="!summary.loading; else loading" [ngSwitch]="type">
    <ng-container *ngSwitchCase="orderEntriesSource.QUICK_ORDER">
      {{ 'importEntriesDialog.summary.loaded' | cxTranslate: summary }}
    </ng-container>
    <ng-container *ngSwitchDefault>
      {{ 'importEntriesDialog.summary.loadedToCart' | cxTranslate: summary }}
    </ng-container>
  </p>
  <ng-template #loading>
    <p>
      {{ 'importEntriesDialog.summary.loading' | cxTranslate: summary }}
    </p>
  </ng-template>
</div>
<p
  *ngIf="summary.successesCount > 0"
  class="cx-import-entries-summary-successes"
>
  <cx-icon class="success" [type]="iconTypes.SUCCESS"></cx-icon>
  {{ 'importEntriesDialog.summary.successes' | cxTranslate: summary }}
</p>
<div
  *ngIf="summary.warningMessages.length > 0"
  class="cx-import-entries-summary-warnings"
>
  <p>
    <cx-icon class="warning" [type]="iconTypes.ERROR"></cx-icon>
    {{
      'importEntriesDialog.summary.warning'
        | cxTranslate: { count: summary.warningMessages.length }
    }}
    <button class="btn btn-tertiary" (click)="toggleWarningList()">
      {{
        (warningDetailsOpened
          ? 'importEntriesDialog.summary.hide'
          : 'importEntriesDialog.summary.show'
        ) | cxTranslate
      }}
    </button>
  </p>
  <ul *ngIf="warningDetailsOpened">
    <li *ngFor="let message of summary.warningMessages">
      {{
        'importEntriesDialog.summary.messages.' + message.statusCode
          | cxTranslate: message
      }}
    </li>
  </ul>
</div>
<div
  *ngIf="summary.errorMessages.length > 0"
  class="cx-import-entries-summary-errors"
>
  <p>
    <cx-icon class="error" [type]="iconTypes.RESET"></cx-icon>
    {{
      'importEntriesDialog.summary.error'
        | cxTranslate: { count: summary.errorMessages.length }
    }}
    <button class="btn btn-tertiary" (click)="toggleErrorList()">
      {{
        (errorDetailsOpened
          ? 'importEntriesDialog.summary.hide'
          : 'importEntriesDialog.summary.show'
        ) | cxTranslate
      }}
    </button>
  </p>
  <ul *ngIf="errorDetailsOpened">
    <li *ngFor="let message of summary.errorMessages">
      {{
        'importEntriesDialog.summary.messages.' + message.statusCode
          | cxTranslate: message
      }}
    </li>
  </ul>
</div>
<div class="cx-import-entries-summary-footer">
  <button
    *ngIf="!summary.loading; else info"
    (click)="close('Close Import Products Dialog')"
    class="btn btn-secondary"
    type="button"
  >
    {{ 'importEntriesDialog.close' | cxTranslate }}
  </button>
  <ng-template #info>
    <p>{{ 'importEntriesDialog.summary.info' | cxTranslate }}</p>
  </ng-template>
</div>
`
    }]
  }], null, {
    type: [{
      type: Input
    }],
    summary: [{
      type: Input
    }],
    closeEvent: [{
      type: Output
    }]
  });
})();
var ImportToNewSavedCartFormComponent = class _ImportToNewSavedCartFormComponent extends ImportEntriesFormComponent {
  get descriptionsCharacterLeft() {
    return this.descriptionMaxLength - (this.form.get("description")?.value?.length || 0);
  }
  constructor(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig, datePipe) {
    super(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig);
    this.launchDialogService = launchDialogService;
    this.importToCartService = importToCartService;
    this.importCsvService = importCsvService;
    this.filesFormValidators = filesFormValidators;
    this.importExportConfig = importExportConfig;
    this.datePipe = datePipe;
    this.descriptionMaxLength = 250;
    this.nameMaxLength = 50;
    this.submitEvent = new EventEmitter();
  }
  save() {
    const file = this.form.get("file")?.value?.[0];
    if (this.separator !== void 0) {
      this.importCsvService.loadFile(file, this.separator).subscribe((loadedFile) => {
        this.submitEvent.emit({
          products: this.importToCartService.csvDataToProduct(loadedFile),
          savedCartInfo: {
            name: this.form.get("name")?.value,
            description: this.form.get("description")?.value
          }
        });
      });
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("file", new UntypedFormControl("", [Validators.required, this.filesFormValidators.maxSize(this.maxSize)], [(control) => this.separator !== void 0 ? this.importCsvService.validateFile(control.value[0], {
      separator: this.separator,
      isDataParsable: this.importToCartService.isDataParsableToProducts,
      maxEntries: this.maxEntries
    }) : of(null)]));
    form.setControl("name", new UntypedFormControl("", [Validators.required, Validators.maxLength(this.nameMaxLength)]));
    form.setControl("description", new UntypedFormControl("", [Validators.maxLength(this.descriptionMaxLength)]));
    return form;
  }
  updateCartName() {
    const nameField = this.form.get("name");
    if (nameField && !nameField?.value && this.cartNameGeneration?.source) {
      switch (this.cartNameGeneration.source) {
        case CartNameSource.FILE_NAME: {
          this.setFieldValueByFileName(nameField);
          break;
        }
        case CartNameSource.DATE_TIME: {
          this.setFieldValueByDatetime(nameField);
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  setFieldValueByFileName(nameField) {
    const fileName = this.form.get("file")?.value?.[0]?.name?.replace(/\.[^/.]+$/, "");
    nameField.setValue(fileName);
  }
  setFieldValueByDatetime(nameField) {
    const date = /* @__PURE__ */ new Date();
    const fromDateOptions = this.cartNameGeneration?.fromDateOptions;
    const mask = fromDateOptions?.mask;
    const prefix = fromDateOptions?.prefix ?? "";
    const suffix = fromDateOptions?.suffix ?? "";
    const dateString = mask ? this.datePipe.transform(date, mask) : this.datePipe.transform(date);
    nameField.setValue(`${prefix}${dateString}${suffix}`);
  }
  get cartNameGeneration() {
    return this.importExportConfig.cartImportExport?.import?.cartNameGeneration;
  }
  static {
    this.ɵfac = function ImportToNewSavedCartFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportToNewSavedCartFormComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ImportProductsFromCsvService), ɵɵdirectiveInject(ImportCsvFileService), ɵɵdirectiveInject(FilesFormValidators), ɵɵdirectiveInject(ImportExportConfig), ɵɵdirectiveInject(CxDatePipe));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportToNewSavedCartFormComponent,
      selectors: [["cx-import-to-new-saved-cart-form"]],
      outputs: {
        submitEvent: "submitEvent"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe]), ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["aria-live", "assertive", "aria-atomic", "true"], [3, "text", "type", "isVisibleCloseButton", "cxFocus", 4, "ngIf"], [1, "cx-import-entries-subtitle"], [3, "update", "formControl", "accept"], ["prefix", "formErrors.file", 3, "control"], [1, "cx-import-entries-row"], [1, "cx-import-entries-label", "label-content"], ["formControlName", "name", "required", "", "type", "text", 1, "form-control", 3, "maxLength"], ["id", "nameError", 3, "control"], [1, "cx-import-entries-label-optional"], ["formControlName", "description", "rows", "5", 1, "form-control", 3, "maxLength"], ["id", "descriptionError", 3, "control"], [1, "cx-import-entries-input-hint"], [1, "cx-import-entries-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "text", "type", "isVisibleCloseButton", "cxFocus"]],
      template: function ImportToNewSavedCartFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ImportToNewSavedCartFormComponent_form_0_Template, 44, 44, "form", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, FocusDirective, FileUploadComponent, MessageComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportToNewSavedCartFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-to-new-saved-cart-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CxDatePipe],
      standalone: false,
      template: `<form
  *ngIf="form"
  [formGroup]="form"
  (submit)="formSubmitSubject$.next(undefined)"
>
  <div aria-live="assertive" aria-atomic="true">
    <cx-message
      *ngIf="form.get('file')?.value && form.get('file')?.valid"
      [text]="'importEntriesDialog.selectedSuccessfully' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      [isVisibleCloseButton]="false"
      [cxFocus]="{ autofocus: '.cx-message' }"
    ></cx-message>
  </div>
  <cx-form-required-legend />
  <p class="cx-import-entries-subtitle">
    {{ 'importEntriesDialog.importProductsNewSavedCartSubtitle' | cxTranslate }}
  </p>
  <p>
    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}
    <cx-form-required-asterisks />
  </p>
  <label>
    <cx-file-upload
      [formControl]="form.get('file')"
      (update)="updateCartName()"
      [accept]="allowedTypes"
    >
      {{ 'importEntriesDialog.selectFile' | cxTranslate }}
    </cx-file-upload>
    <cx-form-errors
      [control]="form.get('file')"
      prefix="formErrors.file"
    ></cx-form-errors>
  </label>
  <div class="cx-import-entries-row">
    <label>
      <span class="cx-import-entries-label label-content">
        {{ 'importEntriesDialog.savedCartName' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        [maxLength]="nameMaxLength"
        class="form-control"
        formControlName="name"
        required
        type="text"
        [attr.aria-invalid]="
          form.get('name')?.touched && form.get('name')?.invalid
        "
        [attr.aria-errormessage]="'nameError'"
      />
      <cx-form-errors
        id="nameError"
        [control]="form.get('name')"
      ></cx-form-errors>
    </label>
  </div>

  <div class="cx-import-entries-row">
    <label>
      <span class="cx-import-entries-label label-content">
        {{ 'importEntriesDialog.savedCartDescription' | cxTranslate }}
        <span class="cx-import-entries-label-optional">
          ({{ 'importEntriesDialog.optional' | cxTranslate }})
        </span></span
      >
      <textarea
        [maxLength]="descriptionMaxLength"
        class="form-control"
        formControlName="description"
        rows="5"
        [attr.aria-invalid]="
          form.get('description')?.touched && form.get('description')?.invalid
        "
        [attr.aria-errormessage]="'descriptionError'"
      ></textarea>
      <cx-form-errors
        id="descriptionError"
        [control]="form.get('description')"
      ></cx-form-errors>

      <p class="cx-import-entries-input-hint">
        {{
          'importEntriesDialog.charactersLeft'
            | cxTranslate: { count: descriptionsCharacterLeft }
        }}
      </p>
    </label>
  </div>
  <div class="cx-import-entries-footer">
    <button
      (click)="close('Close Import Products Dialog')"
      class="btn btn-secondary"
      type="button"
    >
      {{ 'importEntriesDialog.cancel' | cxTranslate }}
    </button>
    <button
      class="btn btn-primary"
      type="submit"
      [disabled]="form.get('file')?.status === 'PENDING'"
    >
      {{ 'importEntriesDialog.upload' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ImportProductsFromCsvService
  }, {
    type: ImportCsvFileService
  }, {
    type: FilesFormValidators
  }, {
    type: ImportExportConfig
  }, {
    type: CxDatePipe
  }], {
    submitEvent: [{
      type: Output
    }]
  });
})();
var ImportEntriesDialogComponent = class _ImportEntriesDialogComponent {
  constructor(launchDialogService) {
    this.launchDialogService = launchDialogService;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.formState = true;
    this.summary$ = new BehaviorSubject({
      loading: false,
      cartName: "",
      count: 0,
      total: 0,
      successesCount: 0,
      warningMessages: [],
      errorMessages: []
    });
    this.context$ = this.launchDialogService.data$.pipe(map((data) => data.orderEntriesContext));
  }
  isNewCartForm(context) {
    return context.type === OrderEntriesSource.NEW_SAVED_CART;
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  importProducts(context, {
    products,
    savedCartInfo
  }) {
    this.formState = false;
    this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
      loading: true,
      total: products.length,
      cartName: savedCartInfo?.name
    }));
    context.addEntries(products, savedCartInfo).pipe(finalize(() => {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        loading: false
      }));
    })).subscribe((action) => {
      this.populateSummary(action);
    });
  }
  populateSummary(action) {
    if (action.statusCode === ProductImportStatus.SUCCESS) {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        successesCount: this.summary$.value.successesCount + 1
      }));
    } else if (action.statusCode === ProductImportStatus.LOW_STOCK) {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        warningMessages: [...this.summary$.value.warningMessages, action]
      }));
    } else {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        errorMessages: [...this.summary$.value.errorMessages, action]
      }));
    }
  }
  static {
    this.ɵfac = function ImportEntriesDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportEntriesDialogComponent)(ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportEntriesDialogComponent,
      selectors: [["cx-import-entries-dialog"]],
      standalone: false,
      decls: 15,
      vars: 17,
      consts: [["importSummary", ""], ["reducedForm", ""], ["role", "dialog", "aria-labelledby", "dialogTitle", 1, "modal-dialog", "modal-dialog-centered", "cx-import-entries-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-import-entries-container"], [1, "modal-header", "cx-import-entries-header"], ["id", "dialogTitle", 1, "cx-import-entries-title", "modal-title"], ["type", "button", 1, "cx-import-entries-close", "close", 3, "click", "title", "disabled"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "modal-body", 3, "type", "submitEvent", 4, "ngIf", "ngIfElse"], [1, "modal-body", 3, "submitEvent", "type"], [1, "modal-body", 3, "closeEvent", "summary", "type"]],
      template: function ImportEntriesDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("esc", function ImportEntriesDialogComponent_Template_div_esc_0_listener() {
            return ctx.close("Escape clicked");
          });
          ɵɵelementStart(1, "div", 3)(2, "div", 4);
          ɵɵelementContainerStart(3);
          ɵɵelementStart(4, "h3", 5);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementContainerEnd();
          ɵɵelementStart(7, "button", 6);
          ɵɵpipe(8, "cxTranslate");
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "cxTranslate");
          ɵɵlistener("click", function ImportEntriesDialogComponent_Template_button_click_7_listener() {
            return ctx.close("Close Import Products Dialog");
          });
          ɵɵelementStart(11, "span", 7);
          ɵɵelement(12, "cx-icon", 8);
          ɵɵelementEnd()()();
          ɵɵtemplate(13, ImportEntriesDialogComponent_ng_container_13_Template, 4, 2, "ng-container", 9);
          ɵɵpipe(14, "async");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "importEntriesDialog.importProducts"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(8, 9, "importEntriesDialog.close"));
          ɵɵproperty("disabled", (tmp_3_0 = ɵɵpipeBind1(9, 11, ctx.summary$)) == null ? null : tmp_3_0.loading);
          ɵɵattribute("aria-label", ɵɵpipeBind1(10, 13, "importEntriesDialog.close"));
          ɵɵadvance(5);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 15, ctx.context$));
        }
      },
      dependencies: [NgIf, IconComponent, FocusDirective, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="modal-dialog modal-dialog-centered cx-import-entries-dialog"
  role="dialog"
  aria-labelledby="dialogTitle"
>
  <div class="modal-content cx-import-entries-container">
    <!-- Modal Header -->
    <div class="modal-header cx-import-entries-header">
      <ng-container>
        <h3 id="dialogTitle" class="cx-import-entries-title modal-title">
          {{ 'importEntriesDialog.importProducts' | cxTranslate }}
        </h3>
      </ng-container>

      <button
        (click)="close('Close Import Products Dialog')"
        [attr.aria-label]="'importEntriesDialog.close' | cxTranslate"
        title="{{ 'importEntriesDialog.close' | cxTranslate }}"
        class="cx-import-entries-close close"
        type="button"
        [disabled]="(summary$ | async)?.loading"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <ng-container *ngIf="context$ | async as context">
      <ng-container *ngIf="formState; else importSummary">
        <cx-import-to-new-saved-cart-form
          class="modal-body"
          *ngIf="isNewCartForm(context); else reducedForm"
          [type]="context.type"
          (submitEvent)="importProducts(context, $event)"
        ></cx-import-to-new-saved-cart-form>
        <ng-template #reducedForm>
          <cx-import-entries-form
            class="modal-body"
            [type]="context.type"
            (submitEvent)="importProducts(context, $event)"
          ></cx-import-entries-form>
        </ng-template>
      </ng-container>

      <ng-template #importSummary>
        <cx-import-entries-summary
          class="modal-body"
          [summary]="summary$ | async"
          [type]="context.type"
          (closeEvent)="close('Close Import Products Dialog')"
        ></cx-import-entries-summary>
      </ng-template>
    </ng-container>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }], null);
})();
var defaultImportEntriesLayoutConfig = {
  launch: {
    IMPORT_TO_CART: {
      inlineRoot: true,
      component: ImportEntriesDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ImportOrderEntriesModule = class _ImportOrderEntriesModule {
  static {
    this.ɵfac = function ImportOrderEntriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportOrderEntriesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ImportOrderEntriesModule,
      declarations: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, IconModule, KeyboardFocusModule, FileUploadModule, I18nModule, MessageComponentModule, FeaturesConfigModule, ConfigModule, FeaturesConfigModule],
      exports: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultImportEntriesLayoutConfig)],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, IconModule, KeyboardFocusModule, FileUploadModule, I18nModule, MessageComponentModule, FeaturesConfigModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportOrderEntriesComponent: {
            component: ImportOrderEntriesComponent
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, IconModule, KeyboardFocusModule, FileUploadModule, I18nModule, MessageComponentModule, FeaturesConfigModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportOrderEntriesComponent: {
            component: ImportOrderEntriesComponent
          }
        }
      }), FeaturesConfigModule],
      declarations: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent],
      exports: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent],
      providers: [provideDefaultConfig(defaultImportEntriesLayoutConfig)]
    }]
  }], null, null);
})();
var ImportExportOrderEntriesComponent = class _ImportExportOrderEntriesComponent {
  constructor(contextService) {
    this.contextService = contextService;
    this.context$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
    this.shouldDisplayImport$ = this.context$.pipe(map((orderEntriesContext) => !!orderEntriesContext?.addEntries));
    this.shouldDisplayExport$ = this.context$.pipe(switchMap((orderEntriesContext) => orderEntriesContext?.getEntries?.() ?? of([])), map((entries) => !!entries?.length));
  }
  static {
    this.ɵfac = function ImportExportOrderEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportOrderEntriesComponent)(ɵɵdirectiveInject(ContextService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImportExportOrderEntriesComponent,
      selectors: [["cx-import-export-order-entries"]],
      standalone: false,
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"]],
      template: function ImportExportOrderEntriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ImportExportOrderEntriesComponent_cx_import_order_entries_0_Template, 1, 0, "cx-import-order-entries", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ImportExportOrderEntriesComponent_cx_export_order_entries_2_Template, 1, 0, "cx-export-order-entries", 0);
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.shouldDisplayImport$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.shouldDisplayExport$));
        }
      },
      dependencies: [ImportOrderEntriesComponent, ExportOrderEntriesComponent, NgIf, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-export-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<cx-import-order-entries\n  *ngIf="shouldDisplayImport$ | async"\n></cx-import-order-entries>\n<cx-export-order-entries\n  *ngIf="shouldDisplayExport$ | async"\n></cx-export-order-entries>\n'
    }]
  }], () => [{
    type: ContextService
  }], null);
})();
var ImportExportOrderEntriesModule = class _ImportExportOrderEntriesModule {
  static {
    this.ɵfac = function ImportExportOrderEntriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportOrderEntriesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ImportExportOrderEntriesModule,
      declarations: [ImportExportOrderEntriesComponent],
      imports: [PageComponentModule, ConfigModule, I18nModule, UrlModule, ImportOrderEntriesModule, ExportOrderEntriesModule, CommonModule],
      exports: [ImportExportOrderEntriesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PageComponentModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportExportOrderEntriesComponent: {
            component: ImportExportOrderEntriesComponent
          }
        }
      }), I18nModule, UrlModule, ImportOrderEntriesModule, ExportOrderEntriesModule, CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [PageComponentModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportExportOrderEntriesComponent: {
            component: ImportExportOrderEntriesComponent
          }
        }
      }), I18nModule, UrlModule, ImportOrderEntriesModule, ExportOrderEntriesModule, CommonModule],
      exports: [ImportExportOrderEntriesComponent],
      declarations: [ImportExportOrderEntriesComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export.mjs
var ImportExportModule = class _ImportExportModule {
  static {
    this.ɵfac = function ImportExportModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ImportExportModule,
      imports: [ImportExportCoreModule, ExportOrderEntriesModule, ImportOrderEntriesModule, ImportExportOrderEntriesModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ImportExportCoreModule.forRoot(), ExportOrderEntriesModule, ImportOrderEntriesModule, ImportExportOrderEntriesModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportModule, [{
    type: NgModule,
    args: [{
      imports: [ImportExportCoreModule.forRoot(), ExportOrderEntriesModule, ImportOrderEntriesModule, ImportExportOrderEntriesModule]
    }]
  }], null, null);
})();
export {
  ImportExportModule
};
//# sourceMappingURL=@spartacus_cart_import-export.js.map
