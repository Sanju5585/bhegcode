import {
  OrderDetailItemsComponent,
  OrderDetailTotalsComponent,
  OrderDetailsService,
  OrderOverviewComponent
} from "./chunk-ODL34PK5.js";
import "./chunk-22AER76T.js";
import "./chunk-DM7JC3BZ.js";
import "./chunk-KW2L2NIV.js";
import {
  ORDER_NORMALIZER
} from "./chunk-UIW5AQFA.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-P4IPRL4B.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import "./chunk-KEAKWHYV.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  FormErrorsComponent,
  FormErrorsModule,
  ListNavigationModule,
  PaginationComponent,
  SortingComponent,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  B2BUserRole,
  ConfigModule,
  ConverterService,
  CxDatePipe,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  PROCESS_FEATURE,
  RoutingService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  authGroup_actions,
  process_selectors,
  provideDefaultConfig,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  Store,
  StoreFeatureModule,
  StoreModule,
  combineReducers,
  createFeatureSelector,
  createSelector,
  select
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import {
  queueScheduler
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  combineLatest,
  filter,
  map,
  observeOn,
  of,
  shareReplay,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-order-approval.mjs
var _c0 = (a0, a1) => ({
  orderCode: a0,
  orderTotal: a1
});
var _c1 = (a0) => ({
  label: a0
});
var _c2 = () => ({
  cxRoute: "orderApprovals"
});
function OrderApprovalDetailFormComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 3);
    ɵɵelement(2, "cx-spinner");
    ɵɵelementEnd()();
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderApproval_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "orderApprovalDetails.form.title_" + ctx_r1.approvalDecision, ɵɵpureFunction2(4, _c0, orderApproval_r1 == null ? null : orderApproval_r1.order == null ? null : orderApproval_r1.order.code, orderApproval_r1 == null ? null : orderApproval_r1.order == null ? null : orderApproval_r1.order.totalPriceWithTax == null ? null : orderApproval_r1.order.totalPriceWithTax.formattedValue)), " ");
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 8);
    ɵɵlistener("ngSubmit", function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_form_2_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const orderApproval_r1 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submitDecision(orderApproval_r1));
    });
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "textarea", 9)(5, "cx-form-errors", 10);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 11)(8, "div", 12)(9, "button", 13);
    ɵɵlistener("click", function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_form_2_Template_button_click_9_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.cancelDecisionForm());
    });
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 12)(13, "button", 14);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("formGroup", ctx_r1.approvalForm);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(3, 8, "orderApprovalDetails.form.comment_" + ctx_r1.approvalDecision + ".label"), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-invalid", ((tmp_8_0 = ctx_r1.approvalForm.get("comment")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r1.approvalForm.get("comment")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "commentError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(16, _c1, ɵɵpipeBind1(6, 10, "orderApprovalDetails.form.comment_" + ctx_r1.approvalDecision + ".label")))("control", ctx_r1.approvalForm.get("comment"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 12, "orderApprovalDetails.form.cancel"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "orderApprovalDetails.form.submit_" + ctx_r1.approvalDecision), " ");
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_div_1_Template, 4, 7, "div", 4)(2, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_form_2_Template, 16, 18, "form", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.approvalFormVisible);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.approvalFormVisible);
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "button", 18);
    ɵɵlistener("click", function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_7_Template_button_click_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.displayDecisionForm(ctx_r1.approvalDecisionValue.REJECT));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderApprovalDetails.showForm_REJECT"), " ");
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "button", 18);
    ɵɵlistener("click", function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_8_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.displayDecisionForm(ctx_r1.approvalDecisionValue.APPROVE));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderApprovalDetails.showForm_APPROVE"), " ");
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11)(2, "div", 15)(3, "a", 16);
    ɵɵpipe(4, "cxUrl");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(7, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_7_Template, 4, 3, "div", 17)(8, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_div_8_Template, 4, 3, "div", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderApproval_r1 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(4, 4, ɵɵpureFunction0(8, _c2)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 6, "orderApprovalDetails.back"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", orderApproval_r1 == null ? null : orderApproval_r1.approvalDecisionRequired);
    ɵɵadvance();
    ɵɵproperty("ngIf", orderApproval_r1 == null ? null : orderApproval_r1.approvalDecisionRequired);
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 1)(1, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_ng_container_1_Template, 9, 9, "ng-container", 1);
  }
  if (rf & 2) {
    const orderApproval_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", orderApproval_r1 == null ? null : orderApproval_r1.approvalDecisionRequired);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.approvalFormVisible);
  }
}
function OrderApprovalDetailFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderApprovalDetailFormComponent_ng_container_0_div_1_Template, 3, 0, "div", 2);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, OrderApprovalDetailFormComponent_ng_container_0_ng_template_3_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const approvalFormTemplate_r6 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.loading$))("ngIfElse", approvalFormTemplate_r6);
  }
}
function OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_thead_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 6)(1, "th", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 7);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 7);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 7);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderApprovalDetails.permissionResults.permission"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 6, "orderApprovalDetails.permissionResults.approver"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 8, "orderApprovalDetails.permissionResults.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 10, "orderApprovalDetails.permissionResults.approverComments"), " ");
  }
}
function OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_thead_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 6)(1, "tr")(2, "th", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 7);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 7);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 7);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "orderApprovalDetails.permissionResults.permission"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 6, "orderApprovalDetails.permissionResults.approver"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 8, "orderApprovalDetails.permissionResults.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 10, "orderApprovalDetails.permissionResults.approverComments"), " ");
  }
}
function OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td", 8)(2, "div", 9);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "td", 10)(8, "div", 9);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "td", 11)(13, "div", 9);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelementStart(17, "td", 12)(18, "div", 9);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const permissionResult_r1 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "orderApprovalDetails.permissionResults.permission"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 10, "orderApprovalDetails.permissionResults.permissionType_" + (permissionResult_r1 == null ? null : permissionResult_r1.permissionType == null ? null : permissionResult_r1.permissionType.code)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 12, "orderApprovalDetails.permissionResults.approver"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", permissionResult_r1.approverName, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "orderApprovalDetails.permissionResults.status"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", permissionResult_r1.statusDisplay, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 16, "orderApprovalDetails.permissionResults.approverComments"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", permissionResult_r1.approverNotes ? permissionResult_r1.approverNotes : ɵɵpipeBind1(22, 18, "orderApprovalDetails.permissionResults.noApprovalComments"), " ");
  }
}
function OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(5, "table", 3);
    ɵɵtemplate(6, OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_thead_6_Template, 13, 12, "thead", 4)(7, OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_thead_7_Template, 14, 12, "thead", 4);
    ɵɵelementStart(8, "tbody");
    ɵɵtemplate(9, OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_tr_9_Template, 23, 20, "tr", 5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "orderApprovalDetails.permissionResults.header"), " ");
    ɵɵadvance(3);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", order_r2.permissionResults);
  }
}
function OrderDetailPermissionResultsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailPermissionResultsComponent_ng_container_0_ng_container_1_Template, 10, 6, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r2.permissionResults == null ? null : order_r2.permissionResults.length);
  }
}
var _c3 = (a0) => ({
  approvalCode: a0
});
var _c4 = (a0) => ({
  cxRoute: "orderApprovalDetails",
  params: a0
});
function OrderApprovalListComponent_ng_container_0_ng_container_1_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 15)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "cx-sorting", 16);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_label_3_Template_cx_sorting_sortListEvent_4_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeSortCode($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "orderHistory.sortBy"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", orderApprovals_r4.sorts)("sortLabels", ɵɵpipeBind1(5, 7, ctx_r2.sortLabels$))("selectedOption", orderApprovals_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(6, 9, "orderHistory.sortOrders"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 15)(1, "span", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "cx-sorting", 16);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_label_4_Template_cx_sorting_sortListEvent_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeSortCode($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "orderHistory.sortOrders"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", orderApprovals_r4.sorts)("sortLabels", ɵɵpipeBind1(5, 7, ctx_r2.sortLabels$))("selectedOption", orderApprovals_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(6, 9, "orderHistory.sortOrders"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_thead_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 17)(1, "th", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 18);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 18);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 18);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "th", 18);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "th", 18);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "orderApprovalList.orderCode"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 8, "orderApprovalList.POCode"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 10, "orderApprovalList.placedBy"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 12, "orderApprovalList.date"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "orderApprovalList.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 16, "orderApprovalList.total"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_thead_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 17)(1, "tr")(2, "th", 18);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 18);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 18);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "th", 18);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "th", 18);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "orderApprovalList.orderCode"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "orderApprovalList.POCode"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 10, "orderApprovalList.placedBy"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(13, 12, "orderApprovalList.date"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 14, "orderApprovalList.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 16, "orderApprovalList.total"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 19);
    ɵɵlistener("click", function OrderApprovalListComponent_ng_container_0_ng_container_1_tr_14_Template_tr_click_0_listener($event) {
      const approval_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.goToApprovalDetails($event, approval_r7));
    });
    ɵɵelementStart(1, "td", 20)(2, "div", 21);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 22);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 23)(9, "div", 21);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 22);
    ɵɵpipe(13, "cxUrl");
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "td", 24)(17, "div", 21);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "a", 22);
    ɵɵpipe(21, "cxUrl");
    ɵɵtext(22);
    ɵɵelementEnd()();
    ɵɵelementStart(23, "td", 25)(24, "div", 21);
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(27, "a", 22);
    ɵɵpipe(28, "cxUrl");
    ɵɵtext(29);
    ɵɵpipe(30, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(31, "td", 26)(32, "div", 21);
    ɵɵtext(33);
    ɵɵpipe(34, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(35, "a", 22);
    ɵɵpipe(36, "cxUrl");
    ɵɵtext(37);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(39, "td", 27)(40, "div", 21);
    ɵɵtext(41);
    ɵɵpipe(42, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(43, "a", 22);
    ɵɵpipe(44, "cxUrl");
    ɵɵtext(45);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const approval_r7 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 18, "orderApprovalList.orderCode"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 20, ɵɵpureFunction1(51, _c4, ɵɵpureFunction1(49, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", approval_r7.order == null ? null : approval_r7.order.code, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 22, "orderApprovalList.POCode"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(13, 24, ɵɵpureFunction1(55, _c4, ɵɵpureFunction1(53, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate((approval_r7.order == null ? null : approval_r7.order.purchaseOrderNumber) || ɵɵpipeBind1(15, 26, "orderApprovalList.none"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 28, "orderApprovalList.placedBy"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(21, 30, ɵɵpureFunction1(59, _c4, ɵɵpureFunction1(57, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate(approval_r7.order == null ? null : approval_r7.order.orgCustomer == null ? null : approval_r7.order.orgCustomer.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 32, "orderApprovalList.date"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(28, 34, ɵɵpureFunction1(63, _c4, ɵɵpureFunction1(61, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(30, 36, approval_r7.order == null ? null : approval_r7.order.created, "longDate"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 39, "orderApprovalList.status"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(36, 41, ɵɵpureFunction1(67, _c4, ɵɵpureFunction1(65, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(38, 43, "orderDetails.statusDisplay_" + (approval_r7.order == null ? null : approval_r7.order.statusDisplay)), "");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(42, 45, "orderApprovalList.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(44, 47, ɵɵpureFunction1(71, _c4, ɵɵpureFunction1(69, _c3, approval_r7 == null ? null : approval_r7.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", approval_r7.order == null ? null : approval_r7.order.totalPrice == null ? null : approval_r7.order.totalPrice.formattedValue, "");
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_label_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 15)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "cx-sorting", 16);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_label_17_Template_cx_sorting_sortListEvent_4_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeSortCode($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "orderHistory.sortBy"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", orderApprovals_r4.sorts)("sortLabels", ɵɵpipeBind1(5, 7, ctx_r2.sortLabels$))("selectedOption", orderApprovals_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(6, 9, "orderHistory.sortOrders"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label")(1, "span", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "cx-sorting", 16);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_label_18_Template_cx_sorting_sortListEvent_4_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeSortCode($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "orderHistory.sortOrders"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", orderApprovals_r4.sorts)("sortLabels", ɵɵpipeBind1(5, 7, ctx_r2.sortLabels$))("selectedOption", orderApprovals_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(6, 9, "orderHistory.sortOrders"));
  }
}
function OrderApprovalListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "div", 4);
    ɵɵtemplate(3, OrderApprovalListComponent_ng_container_0_ng_container_1_label_3_Template, 7, 11, "label", 5)(4, OrderApprovalListComponent_ng_container_0_ng_container_1_label_4_Template, 7, 11, "label", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6)(6, "cx-pagination", 7);
    ɵɵlistener("viewPageEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_Template_cx_pagination_viewPageEvent_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.pageChange($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "table", 8)(8, "caption", 9);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(11, OrderApprovalListComponent_ng_container_0_ng_container_1_thead_11_Template, 19, 18, "thead", 10)(12, OrderApprovalListComponent_ng_container_0_ng_container_1_thead_12_Template, 20, 18, "thead", 10);
    ɵɵelementStart(13, "tbody");
    ɵɵtemplate(14, OrderApprovalListComponent_ng_container_0_ng_container_1_tr_14_Template, 46, 73, "tr", 11);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 12)(16, "div", 4);
    ɵɵtemplate(17, OrderApprovalListComponent_ng_container_0_ng_container_1_label_17_Template, 7, 11, "label", 5)(18, OrderApprovalListComponent_ng_container_0_ng_container_1_label_18_Template, 7, 11, "label", 13);
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 6)(20, "cx-pagination", 14);
    ɵɵlistener("viewPageEvent", function OrderApprovalListComponent_ng_container_0_ng_container_1_Template_cx_pagination_viewPageEvent_20_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.pageChange($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵproperty("cxFeature", "a11yShowLabelOfSelect");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yShowLabelOfSelect");
    ɵɵadvance(2);
    ɵɵproperty("pagination", orderApprovals_r4.pagination);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 10, "orderApprovalList.orderApprovalList"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderApprovals_r4.values);
    ɵɵadvance(3);
    ɵɵproperty("cxFeature", "a11yShowLabelOfSelect");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yShowLabelOfSelect");
    ɵɵadvance(2);
    ɵɵproperty("pagination", orderApprovals_r4.pagination);
  }
}
function OrderApprovalListComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "div");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, "orderApprovalList.emptyList"));
  }
}
function OrderApprovalListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderApprovalListComponent_ng_container_0_ng_container_1_Template, 21, 12, "ng-container", 2)(2, OrderApprovalListComponent_ng_container_0_ng_template_2_Template, 5, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderApprovals_r4 = ctx.ngIf;
    const noOrder_r10 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", orderApprovals_r4.pagination && orderApprovals_r4.pagination.totalResults && orderApprovals_r4.pagination.totalResults > 0)("ngIfElse", noOrder_r10);
  }
}
var OrderApprovalDecisionValue;
(function(OrderApprovalDecisionValue2) {
  OrderApprovalDecisionValue2["APPROVE"] = "APPROVE";
  OrderApprovalDecisionValue2["REJECT"] = "REJECT";
})(OrderApprovalDecisionValue || (OrderApprovalDecisionValue = {}));
var ORDER_APPROVAL_FEATURE = "order-approval";
var ORDER_APPROVAL_ENTITIES = "order-approval-entities";
var ORDER_APPROVAL_LIST = "order-approval-list";
var ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID = "orderApproval.makeDecision";
var LOAD_ORDER_APPROVAL = "[OrderApproval] Load OrderApproval Data";
var LOAD_ORDER_APPROVAL_FAIL = "[OrderApproval] Load OrderApproval Data Fail";
var LOAD_ORDER_APPROVAL_SUCCESS = "[OrderApproval] Load OrderApproval Data Success";
var LOAD_ORDER_APPROVALS = "[OrderApproval] Load OrderApprovals";
var LOAD_ORDER_APPROVALS_FAIL = "[OrderApproval] Load OrderApprovals Fail";
var LOAD_ORDER_APPROVALS_SUCCESS = "[OrderApproval] Load OrderApprovals Success";
var MAKE_DECISION = "[OrderApproval] Make OrderApproval Decision";
var MAKE_DECISION_FAIL = "[OrderApproval] Make OrderApproval Decision Fail";
var MAKE_DECISION_SUCCESS = "[OrderApproval] Make OrderApproval Decision Success";
var MAKE_DECISION_RESET = "[OrderApproval] Make OrderApproval Decision Reset";
var LoadOrderApproval = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORDER_APPROVAL_ENTITIES, payload.orderApprovalCode);
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVAL;
  }
};
var LoadOrderApprovalFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORDER_APPROVAL_ENTITIES, payload.orderApprovalCode, payload.error);
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVAL_FAIL;
  }
};
var LoadOrderApprovalSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORDER_APPROVAL_ENTITIES, Array.isArray(payload) ? payload.map((orderApproval) => orderApproval.code ?? "") : payload.code ?? "");
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVAL_SUCCESS;
  }
};
var LoadOrderApprovals = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORDER_APPROVAL_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVALS;
  }
};
var LoadOrderApprovalsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORDER_APPROVAL_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVALS_FAIL;
  }
};
var LoadOrderApprovalsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORDER_APPROVAL_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_ORDER_APPROVALS_SUCCESS;
  }
};
var MakeDecision = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID);
    this.payload = payload;
    this.type = MAKE_DECISION;
  }
};
var MakeDecisionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = MAKE_DECISION_FAIL;
  }
};
var MakeDecisionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID);
    this.payload = payload;
    this.type = MAKE_DECISION_SUCCESS;
  }
};
var MakeDecisionReset = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID);
    this.type = MAKE_DECISION_RESET;
  }
};
var orderApproval_action = Object.freeze({
  __proto__: null,
  LOAD_ORDER_APPROVAL,
  LOAD_ORDER_APPROVALS,
  LOAD_ORDER_APPROVALS_FAIL,
  LOAD_ORDER_APPROVALS_SUCCESS,
  LOAD_ORDER_APPROVAL_FAIL,
  LOAD_ORDER_APPROVAL_SUCCESS,
  LoadOrderApproval,
  LoadOrderApprovalFail,
  LoadOrderApprovalSuccess,
  LoadOrderApprovals,
  LoadOrderApprovalsFail,
  LoadOrderApprovalsSuccess,
  MAKE_DECISION,
  MAKE_DECISION_FAIL,
  MAKE_DECISION_RESET,
  MAKE_DECISION_SUCCESS,
  MakeDecision,
  MakeDecisionFail,
  MakeDecisionReset,
  MakeDecisionSuccess
});
var getOrderApprovalState = createFeatureSelector(ORDER_APPROVAL_FEATURE);
var getOrderApprovalManagementState = createSelector(getOrderApprovalState, (state) => state[ORDER_APPROVAL_FEATURE]);
var getOrderApprovalsState = createSelector(getOrderApprovalManagementState, (state) => state && state.entities);
var getOrderApproval = (orderApprovalCode) => createSelector(getOrderApprovalsState, (state) => utilsGroup.entityLoaderStateSelector(state, orderApprovalCode));
var getOrderApprovalList = (params) => createSelector(getOrderApprovalManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var orderApproval_selector = Object.freeze({
  __proto__: null,
  getOrderApproval,
  getOrderApprovalList,
  getOrderApprovalManagementState,
  getOrderApprovalState,
  getOrderApprovalsState
});
var OrderApprovalService = class _OrderApprovalService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  loadOrderApproval(orderApprovalCode) {
    this.userIdService.takeUserId().subscribe((userId) => this.store.dispatch(new LoadOrderApproval({
      userId,
      orderApprovalCode
    })));
  }
  loadOrderApprovals(params) {
    this.userIdService.takeUserId().subscribe((userId) => this.store.dispatch(new LoadOrderApprovals({
      userId,
      params
    })));
  }
  getOrderApproval(orderApprovalCode) {
    return this.store.select(getOrderApproval(orderApprovalCode));
  }
  getOrderApprovalList(params) {
    return this.store.select(getOrderApprovalList(params));
  }
  get(orderApprovalCode) {
    return this.getOrderApproval(orderApprovalCode).pipe(observeOn(queueScheduler), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadOrderApproval(orderApprovalCode);
      }
    }), filter((state) => Boolean(state.success || state.error)), map((state) => state.value));
  }
  /**
   * Emits true if a request is currently fetching order approval data from
   * the server.
   *
   * @param orderApprovalCode The approval code for which we want the loading status.
   */
  getOrderApprovalLoading(orderApprovalCode) {
    return this.getOrderApproval(orderApprovalCode).pipe(map((orderApprovalState) => orderApprovalState.loading ?? false));
  }
  getList(params) {
    return this.getOrderApprovalList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadOrderApprovals(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  makeDecision(orderApprovalCode, orderApprovalDecision) {
    this.userIdService.takeUserId().subscribe((userId) => this.store.dispatch(new MakeDecision({
      userId,
      orderApprovalCode,
      orderApprovalDecision
    })));
  }
  /**
   * Returns the makeDecision loading flag.  Returns true when the process triggered
   * by makeDecision() is currently running.
   */
  getMakeDecisionResultLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID)));
  }
  /**
   * Returns the makeDecision failure outcome.  Returns true when the outcome
   * of makeDecision() was an error.
   */
  getMakeDecisionResultError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID)));
  }
  /**
   * Returns the makeDecision process success outcome.  Returns true when the outcome
   * of makeDecision() was a success.
   */
  getMakeDecisionResultSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID)));
  }
  /**
   * Resets the makeDecision process state. It is usually preferable to reset the
   * process state before making a call to makeDecision() for which we then want
   * to monitor the loading state or the outcome.
   */
  resetMakeDecisionProcessState() {
    this.store.dispatch(new MakeDecisionReset());
  }
  static {
    this.ɵfac = function OrderApprovalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderApprovalService,
      factory: _OrderApprovalService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var OrderApprovalDetailService = class _OrderApprovalDetailService {
  constructor(routingService, orderApprovalService) {
    this.routingService = routingService;
    this.orderApprovalService = orderApprovalService;
    this.approvalCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.approvalCode));
    this.orderApproval$ = this.approvalCode$.pipe(filter((approvalCode) => Boolean(approvalCode)), tap((approvalCode) => this.orderApprovalService.loadOrderApproval(approvalCode)), switchMap((approvalCode) => this.orderApprovalService.get(approvalCode)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.order$ = this.orderApproval$.pipe(map((orderApproval) => orderApproval?.order));
  }
  /**
   * Returns a string that represents the approval code
   * found in the page url.
   */
  getOrderApprovalCodeFromRoute() {
    return this.approvalCode$;
  }
  /**
   * Returns the order data from the approval details that have been
   * retrieved from the approval code in the page url.
   */
  getOrderDetails() {
    return this.order$;
  }
  /**
   * Returns the approval details that have been retrieved from the
   * approval code in the page url.
   */
  getOrderApproval() {
    return this.orderApproval$;
  }
  static {
    this.ɵfac = function OrderApprovalDetailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalDetailService)(ɵɵinject(RoutingService), ɵɵinject(OrderApprovalService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderApprovalDetailService,
      factory: _OrderApprovalDetailService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderApprovalService
  }], null);
})();
var OrderApprovalDetailFormComponent = class _OrderApprovalDetailFormComponent {
  constructor(orderApprovalDetailService, orderApprovalService, fb) {
    this.orderApprovalDetailService = orderApprovalDetailService;
    this.orderApprovalService = orderApprovalService;
    this.fb = fb;
    this.approvalDecisionValue = OrderApprovalDecisionValue;
    this.approvalFormVisible = false;
    this.approvalForm = this.fb.group({
      comment: [""]
    });
    this.orderApprovalLoading$ = this.orderApprovalDetailService.getOrderApprovalCodeFromRoute().pipe(switchMap((approvalCode) => this.orderApprovalService.getOrderApprovalLoading(approvalCode)));
    this.decisionResultLoading$ = this.orderApprovalService.getMakeDecisionResultLoading();
    this.loading$ = combineLatest([this.orderApprovalLoading$, this.decisionResultLoading$]).pipe(map(([approvalLoading, decisionResultLoading]) => approvalLoading || decisionResultLoading));
    this.orderApproval$ = this.orderApprovalDetailService.getOrderApproval();
    this.orderApprovalService.resetMakeDecisionProcessState();
  }
  displayDecisionForm(decision) {
    this.approvalDecision = decision;
    if (decision === OrderApprovalDecisionValue.APPROVE) {
      this.approvalForm.controls.comment.clearValidators();
    } else {
      this.approvalForm.controls.comment.setValidators([Validators.required]);
    }
    this.approvalFormVisible = true;
  }
  cancelDecisionForm() {
    this.approvalFormVisible = false;
    this.approvalForm.reset();
  }
  submitDecision(orderApproval) {
    if (this.approvalForm.valid) {
      this.orderApprovalService.makeDecision(orderApproval.code ?? "", {
        decision: this.approvalDecision,
        comment: this.approvalForm.controls.comment.value
      });
      this.approvalFormVisible = false;
    } else {
      this.approvalForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    this.orderApprovalService.resetMakeDecisionProcessState();
  }
  static {
    this.ɵfac = function OrderApprovalDetailFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalDetailFormComponent)(ɵɵdirectiveInject(OrderApprovalDetailService), ɵɵdirectiveInject(OrderApprovalService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderApprovalDetailFormComponent,
      selectors: [["cx-order-approval-detail-form"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["approvalFormTemplate", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-spinner"], ["class", "cx-approval-form-header row", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "cx-approval-form-header", "row"], [1, "cx-approval-form-label", "col-sm-12"], [3, "ngSubmit", "formGroup"], ["rows", "3", "formControlName", "comment", "maxlength", "255", 1, "form-control"], ["id", "commentError", 3, "translationParams", "control"], [1, "form-group", "row"], [1, "col-lg-6", "col-md-12"], ["type", "button", 1, "btn", "btn-block", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "col-lg-4", "col-md-12"], ["cxBtnLikeLink", "", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "col-lg-4 col-md-12", 4, "ngIf"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
      template: function OrderApprovalDetailFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderApprovalDetailFormComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderApproval$));
        }
      },
      dependencies: [ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, NgIf, FormErrorsComponent, SpinnerComponent, RouterLink, BtnLikeLinkDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalDetailFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-approval-detail-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="orderApproval$ | async as orderApproval">
  <div *ngIf="loading$ | async; else approvalFormTemplate">
    <div class="cx-spinner">
      <cx-spinner></cx-spinner>
    </div>
  </div>

  <ng-template #approvalFormTemplate>
    <ng-container *ngIf="orderApproval?.approvalDecisionRequired">
      <div *ngIf="approvalFormVisible" class="cx-approval-form-header row">
        <div class="cx-approval-form-label col-sm-12">
          {{
            'orderApprovalDetails.form.title_' + approvalDecision
              | cxTranslate
                : {
                    orderCode: orderApproval?.order?.code,
                    orderTotal:
                      orderApproval?.order?.totalPriceWithTax?.formattedValue,
                  }
          }}
        </div>
      </div>

      <form
        [formGroup]="approvalForm"
        (ngSubmit)="submitDecision(orderApproval)"
        *ngIf="approvalFormVisible"
      >
        <label
          >{{
            'orderApprovalDetails.form.comment_' + approvalDecision + '.label'
              | cxTranslate
          }}
          <textarea
            class="form-control"
            rows="3"
            formControlName="comment"
            maxlength="255"
            [attr.aria-invalid]="
              approvalForm.get('comment')?.touched &&
              approvalForm.get('comment')?.invalid
            "
            [attr.aria-errormessage]="'commentError'"
          ></textarea>

          <cx-form-errors
            id="commentError"
            [translationParams]="{
              label:
                'orderApprovalDetails.form.comment_' +
                  approvalDecision +
                  '.label' | cxTranslate,
            }"
            [control]="approvalForm.get('comment')"
          ></cx-form-errors>
        </label>
        <div class="form-group row">
          <div class="col-lg-6 col-md-12">
            <button
              class="btn btn-block btn-secondary"
              (click)="cancelDecisionForm()"
              type="button"
            >
              {{ 'orderApprovalDetails.form.cancel' | cxTranslate }}
            </button>
          </div>
          <div class="col-lg-6 col-md-12">
            <button class="btn btn-block btn-primary" type="submit">
              {{
                'orderApprovalDetails.form.submit_' + approvalDecision
                  | cxTranslate
              }}
            </button>
          </div>
        </div>
      </form>
    </ng-container>
    <ng-container *ngIf="!approvalFormVisible">
      <div class="form-group row">
        <div class="col-lg-4 col-md-12">
          <a
            [routerLink]="{ cxRoute: 'orderApprovals' } | cxUrl"
            class="btn btn-block btn-secondary"
            cxBtnLikeLink
            >{{ 'orderApprovalDetails.back' | cxTranslate }}</a
          >
        </div>
        <div
          class="col-lg-4 col-md-12"
          *ngIf="orderApproval?.approvalDecisionRequired"
        >
          <button
            class="btn btn-block btn-primary"
            (click)="displayDecisionForm(approvalDecisionValue.REJECT)"
          >
            {{ 'orderApprovalDetails.showForm_REJECT' | cxTranslate }}
          </button>
        </div>
        <div
          class="col-lg-4 col-md-12"
          *ngIf="orderApproval?.approvalDecisionRequired"
        >
          <button
            class="btn btn-block btn-primary"
            (click)="displayDecisionForm(approvalDecisionValue.APPROVE)"
          >
            {{ 'orderApprovalDetails.showForm_APPROVE' | cxTranslate }}
          </button>
        </div>
      </div>
    </ng-container>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderApprovalDetailService
  }, {
    type: OrderApprovalService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var ApproverGuard = class _ApproverGuard {
  constructor(userAccountFacade, routingService, globalMessageService) {
    this.userAccountFacade = userAccountFacade;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
  }
  canActivate() {
    return this.userAccountFacade.get().pipe(filter((user) => !!user && Object.keys(user).length > 0), map((user) => user?.roles), map((roles) => {
      const hasRole = Array.isArray(roles) && (roles.includes(B2BUserRole.APPROVER) || roles.includes(B2BUserRole.ADMIN));
      if (!hasRole) {
        this.routingService.go({
          cxRoute: "home"
        });
        this.globalMessageService.add({
          key: "orderApprovalGlobal.notification.noSufficientPermissions"
        }, GlobalMessageType.MSG_TYPE_WARNING);
      }
      return hasRole;
    }));
  }
  static {
    this.ɵfac = function ApproverGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApproverGuard)(ɵɵinject(UserAccountFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ApproverGuard,
      factory: _ApproverGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApproverGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAccountFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var OrderDetailPermissionResultsComponent = class _OrderDetailPermissionResultsComponent {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
    this.order$ = this.orderDetailsService.getOrderDetails();
    useFeatureStyles("a11yTableHeaderReadout");
  }
  static {
    this.ɵfac = function OrderDetailPermissionResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailPermissionResultsComponent)(ɵɵdirectiveInject(OrderDetailsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailPermissionResultsComponent,
      selectors: [["cx-order-detail-permission-results"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-approval-header"], [1, "cx-approval-label"], [1, "table", "table-striped", "cx-approval-table"], ["class", "cx-approval-thead-mobile", 4, "cxFeature"], [4, "ngFor", "ngForOf"], [1, "cx-approval-thead-mobile"], ["scope", "col"], [1, "cx-approval-permissionCode"], [1, "cx-approval-table-label"], [1, "cx-approval-approverName"], [1, "cx-approval-statusDisplay"], [1, "cx-approval-approvalNotes"]],
      template: function OrderDetailPermissionResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailPermissionResultsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgForOf, NgIf, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailPermissionResultsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-detail-permission-results",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="order.permissionResults?.length">
    <div class="cx-approval-header">
      <div class="cx-approval-label">
        {{ 'orderApprovalDetails.permissionResults.header' | cxTranslate }}
      </div>
    </div>
    <table class="table table-striped cx-approval-table">
      <thead
        *cxFeature="'!a11yTableHeaderReadout'"
        class="cx-approval-thead-mobile"
      >
        <th scope="col">
          {{
            'orderApprovalDetails.permissionResults.permission' | cxTranslate
          }}
        </th>
        <th scope="col">
          {{ 'orderApprovalDetails.permissionResults.approver' | cxTranslate }}
        </th>
        <th scope="col">
          {{ 'orderApprovalDetails.permissionResults.status' | cxTranslate }}
        </th>
        <th scope="col">
          {{
            'orderApprovalDetails.permissionResults.approverComments'
              | cxTranslate
          }}
        </th>
      </thead>
      <thead
        *cxFeature="'a11yTableHeaderReadout'"
        class="cx-approval-thead-mobile"
      >
        <tr>
          <th scope="col">
            {{
              'orderApprovalDetails.permissionResults.permission' | cxTranslate
            }}
          </th>
          <th scope="col">
            {{
              'orderApprovalDetails.permissionResults.approver' | cxTranslate
            }}
          </th>
          <th scope="col">
            {{ 'orderApprovalDetails.permissionResults.status' | cxTranslate }}
          </th>
          <th scope="col">
            {{
              'orderApprovalDetails.permissionResults.approverComments'
                | cxTranslate
            }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let permissionResult of order.permissionResults">
          <td class="cx-approval-permissionCode">
            <div class="cx-approval-table-label">
              {{
                'orderApprovalDetails.permissionResults.permission'
                  | cxTranslate
              }}
            </div>
            {{
              'orderApprovalDetails.permissionResults.permissionType_' +
                permissionResult?.permissionType?.code | cxTranslate
            }}
          </td>
          <td class="cx-approval-approverName">
            <div class="cx-approval-table-label">
              {{
                'orderApprovalDetails.permissionResults.approver' | cxTranslate
              }}
            </div>
            {{ permissionResult.approverName }}
          </td>
          <td class="cx-approval-statusDisplay">
            <div class="cx-approval-table-label">
              {{
                'orderApprovalDetails.permissionResults.status' | cxTranslate
              }}
            </div>
            {{ permissionResult.statusDisplay }}
          </td>
          <td class="cx-approval-approvalNotes">
            <div class="cx-approval-table-label">
              {{
                'orderApprovalDetails.permissionResults.approverComments'
                  | cxTranslate
              }}
            </div>
            {{
              permissionResult.approverNotes
                ? permissionResult.approverNotes
                : ('orderApprovalDetails.permissionResults.noApprovalComments'
                  | cxTranslate)
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var OrderApprovalDetailsModule = class _OrderApprovalDetailsModule {
  static {
    this.ɵfac = function OrderApprovalDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalDetailsModule,
      declarations: [OrderApprovalDetailFormComponent, OrderDetailPermissionResultsComponent],
      imports: [ReactiveFormsModule, CommonModule, I18nModule, UrlModule, FormErrorsModule, SpinnerModule, RouterModule, BtnLikeLinkModule, ConfigModule, FeaturesConfigModule],
      exports: [OrderApprovalDetailFormComponent, OrderDetailPermissionResultsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ReactiveFormsModule, CommonModule, I18nModule, UrlModule, FormErrorsModule, SpinnerModule, RouterModule, BtnLikeLinkModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderApprovalDetailTotalsComponent: {
            component: OrderDetailTotalsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailApprovalDetailsComponent: {
            component: OrderDetailPermissionResultsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          AccountOrderDetailsApprovalDetailsComponent: {
            component: OrderDetailPermissionResultsComponent
          },
          OrderApprovalDetailShippingComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailItemsComponent: {
            component: OrderDetailItemsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailFormComponent: {
            component: OrderApprovalDetailFormComponent,
            guards: [AuthGuard, ApproverGuard]
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [ReactiveFormsModule, CommonModule, I18nModule, UrlModule, FormErrorsModule, SpinnerModule, RouterModule, BtnLikeLinkModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderApprovalDetailTotalsComponent: {
            component: OrderDetailTotalsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailApprovalDetailsComponent: {
            component: OrderDetailPermissionResultsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          AccountOrderDetailsApprovalDetailsComponent: {
            component: OrderDetailPermissionResultsComponent
          },
          OrderApprovalDetailShippingComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailItemsComponent: {
            component: OrderDetailItemsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderApprovalDetailService
            }],
            guards: [AuthGuard, ApproverGuard]
          },
          OrderApprovalDetailFormComponent: {
            component: OrderApprovalDetailFormComponent,
            guards: [AuthGuard, ApproverGuard]
          }
        }
      }), FeaturesConfigModule],
      declarations: [OrderApprovalDetailFormComponent, OrderDetailPermissionResultsComponent],
      exports: [OrderApprovalDetailFormComponent, OrderDetailPermissionResultsComponent]
    }]
  }], null, null);
})();
var OrderApprovalListComponent = class _OrderApprovalListComponent {
  constructor(routing, orderApprovalService, translation) {
    this.routing = routing;
    this.orderApprovalService = orderApprovalService;
    this.translation = translation;
    this.PAGE_SIZE = 5;
    useFeatureStyles("a11yShowLabelOfSelect");
  }
  ngOnInit() {
    this.fetchApprovalListPage({});
    this.sortLabels$ = combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.orderNumber")]).pipe(map(([textByDate, textByOrderNumber]) => {
      return {
        byDate: textByDate,
        byOrderNumber: textByOrderNumber
      };
    }));
  }
  changeSortCode(sortCode) {
    const fetchParams = {
      sort: sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchApprovalListPage(fetchParams);
  }
  pageChange(page) {
    const fetchParams = {
      sort: this.sortType,
      currentPage: page
    };
    this.fetchApprovalListPage(fetchParams);
  }
  fetchApprovalListPage(searchConfig) {
    searchConfig.pageSize = this.PAGE_SIZE;
    this.orderApprovalService.loadOrderApprovals(searchConfig);
    this.orderApprovals$ = this.orderApprovalService.getList(searchConfig);
  }
  goToApprovalDetails(event, orderApproval) {
    if (event?.target?.nodeName.toLowerCase() !== "a") {
      this.routing.go({
        cxRoute: "orderApprovalDetails",
        params: {
          approvalCode: orderApproval.code
        }
      });
    }
  }
  static {
    this.ɵfac = function OrderApprovalListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalListComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(OrderApprovalService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderApprovalListComponent,
      selectors: [["cx-order-approval-list"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noOrder", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-order-approval-sort", "top", "row"], [1, "cx-order-approval-form-group", "form-group", "col-sm-12", "col-md-4", "col-lg-4"], ["class", "cx-order-approval-form-group-label", 4, "cxFeature"], [1, "cx-order-approval-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], ["role", "table", "id", "order-approval-table", 1, "table", "cx-order-approval-table"], [1, "cx-visually-hidden"], ["class", "cx-order-approval-thead-mobile", 4, "cxFeature"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "cx-order-approval-sort", "bottom", "row"], [4, "cxFeature"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], [1, "cx-order-approval-form-group-label"], ["ariaControls", "order-approval-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "ariaLabel"], [1, "cx-order-approval-thead-mobile"], ["scope", "col"], ["role", "row", 3, "click"], ["role", "cell", 1, "cx-order-approval-code"], [1, "d-md-none", "cx-order-approval-label"], [1, "cx-order-approval-value", 3, "routerLink"], ["role", "cell", 1, "cx-order-approval-po-code"], ["role", "cell", 1, "cx-order-approval-placed"], ["role", "cell", 1, "cx-order-approval-date"], ["role", "cell", 1, "cx-order-approval-status"], ["role", "cell", 1, "cx-order-approval-total"], [1, "cx-order-approval-no-order", "row"], [1, "col-sm-12", "col-md-6", "col-lg-4"]],
      template: function OrderApprovalListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderApprovalListComponent_ng_container_0_Template, 4, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderApprovals$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, SortingComponent, PaginationComponent, FeatureDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalListComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-approval-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="orderApprovals$ | async as orderApprovals">
  <ng-container
    *ngIf="
      orderApprovals.pagination &&
        orderApprovals.pagination.totalResults &&
        orderApprovals.pagination.totalResults > 0;
      else noOrder
    "
  >
    <!-- Select Form and Pagination Top -->
    <div class="cx-order-approval-sort top row">
      <div
        class="cx-order-approval-form-group form-group col-sm-12 col-md-4 col-lg-4"
      >
        <label
          *cxFeature="'a11yShowLabelOfSelect'"
          class="cx-order-approval-form-group-label"
        >
          <span>{{ 'orderHistory.sortBy' | cxTranslate }}</span>
          <cx-sorting
            [sortOptions]="orderApprovals.sorts"
            [sortLabels]="sortLabels$ | async"
            (sortListEvent)="changeSortCode($event)"
            [selectedOption]="orderApprovals.pagination.sort"
            [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
            ariaControls="order-approval-table"
          ></cx-sorting>
        </label>
        <label
          *cxFeature="'!a11yShowLabelOfSelect'"
          class="cx-order-approval-form-group-label"
        >
          <span class="cx-visually-hidden">{{
            'orderHistory.sortOrders' | cxTranslate
          }}</span>
          <cx-sorting
            [sortOptions]="orderApprovals.sorts"
            [sortLabels]="sortLabels$ | async"
            (sortListEvent)="changeSortCode($event)"
            [selectedOption]="orderApprovals.pagination.sort"
            [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
            ariaControls="order-approval-table"
          ></cx-sorting>
        </label>
      </div>
      <div class="cx-order-approval-pagination">
        <cx-pagination
          [pagination]="orderApprovals.pagination"
          (viewPageEvent)="pageChange($event)"
          paginationID="pagination-top"
        ></cx-pagination>
      </div>
    </div>
    <!-- TABLE -->
    <table
      role="table"
      id="order-approval-table"
      class="table cx-order-approval-table"
    >
      <caption class="cx-visually-hidden">
        {{
          'orderApprovalList.orderApprovalList' | cxTranslate
        }}
      </caption>
      <thead
        *cxFeature="'!a11yTableHeaderReadout'"
        class="cx-order-approval-thead-mobile"
      >
        <th scope="col">
          {{ 'orderApprovalList.orderCode' | cxTranslate }}
        </th>
        <th scope="col">{{ 'orderApprovalList.POCode' | cxTranslate }}</th>
        <th scope="col">{{ 'orderApprovalList.placedBy' | cxTranslate }}</th>
        <th scope="col">{{ 'orderApprovalList.date' | cxTranslate }}</th>
        <th scope="col">
          {{ 'orderApprovalList.status' | cxTranslate }}
        </th>
        <th scope="col">{{ 'orderApprovalList.total' | cxTranslate }}</th>
      </thead>
      <thead
        *cxFeature="'a11yTableHeaderReadout'"
        class="cx-order-approval-thead-mobile"
      >
        <tr>
          <th scope="col">
            {{ 'orderApprovalList.orderCode' | cxTranslate }}
          </th>
          <th scope="col">{{ 'orderApprovalList.POCode' | cxTranslate }}</th>
          <th scope="col">{{ 'orderApprovalList.placedBy' | cxTranslate }}</th>
          <th scope="col">{{ 'orderApprovalList.date' | cxTranslate }}</th>
          <th scope="col">
            {{ 'orderApprovalList.status' | cxTranslate }}
          </th>
          <th scope="col">{{ 'orderApprovalList.total' | cxTranslate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          role="row"
          *ngFor="let approval of orderApprovals.values"
          (click)="goToApprovalDetails($event, approval)"
        >
          <td role="cell" class="cx-order-approval-code">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.orderCode' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
            >
              {{ approval.order?.code }}</a
            >
          </td>
          <td role="cell" class="cx-order-approval-po-code">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.POCode' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
              >{{
                approval.order?.purchaseOrderNumber ||
                  ('orderApprovalList.none' | cxTranslate)
              }}</a
            >
          </td>
          <td role="cell" class="cx-order-approval-placed">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.placedBy' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
              >{{ approval.order?.orgCustomer?.name }}</a
            >
          </td>
          <td role="cell" class="cx-order-approval-date">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.date' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
              >{{ approval.order?.created | cxDate: 'longDate' }}</a
            >
          </td>

          <td role="cell" class="cx-order-approval-status">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.status' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
            >
              {{
                'orderDetails.statusDisplay_' + approval.order?.statusDisplay
                  | cxTranslate
              }}</a
            >
          </td>
          <td role="cell" class="cx-order-approval-total">
            <div class="d-md-none cx-order-approval-label">
              {{ 'orderApprovalList.total' | cxTranslate }}
            </div>
            <a
              [routerLink]="
                {
                  cxRoute: 'orderApprovalDetails',
                  params: { approvalCode: approval?.code },
                } | cxUrl
              "
              class="cx-order-approval-value"
            >
              {{ approval.order?.totalPrice?.formattedValue }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Select Form and Pagination Bottom -->
    <div class="cx-order-approval-sort bottom row">
      <div
        class="cx-order-approval-form-group form-group col-sm-12 col-md-4 col-lg-4"
      >
        <label
          *cxFeature="'a11yShowLabelOfSelect'"
          class="cx-order-approval-form-group-label"
        >
          <span>{{ 'orderHistory.sortBy' | cxTranslate }}</span>
          <cx-sorting
            [sortOptions]="orderApprovals.sorts"
            [sortLabels]="sortLabels$ | async"
            (sortListEvent)="changeSortCode($event)"
            [selectedOption]="orderApprovals.pagination.sort"
            [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
            ariaControls="order-approval-table"
          ></cx-sorting>
        </label>
        <label *cxFeature="'!a11yShowLabelOfSelect'">
          <span class="cx-visually-hidden">{{
            'orderHistory.sortOrders' | cxTranslate
          }}</span>
          <cx-sorting
            [sortOptions]="orderApprovals.sorts"
            [sortLabels]="sortLabels$ | async"
            (sortListEvent)="changeSortCode($event)"
            [selectedOption]="orderApprovals.pagination.sort"
            [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
            ariaControls="order-approval-table"
          ></cx-sorting>
        </label>
      </div>
      <div class="cx-order-approval-pagination">
        <cx-pagination
          [pagination]="orderApprovals.pagination"
          (viewPageEvent)="pageChange($event)"
          paginationID="pagination-bottom"
        ></cx-pagination>
      </div>
    </div>
  </ng-container>

  <!-- NO ORDER CONTAINER -->
  <ng-template #noOrder>
    <div class="cx-order-approval-no-order row">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div>{{ 'orderApprovalList.emptyList' | cxTranslate }}</div>
      </div>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderApprovalService
  }, {
    type: TranslationService
  }], null);
})();
var OrderApprovalListModule = class _OrderApprovalListModule {
  static {
    this.ɵfac = function OrderApprovalListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalListModule,
      declarations: [OrderApprovalListComponent],
      imports: [CommonModule, ConfigModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, FeaturesConfigModule],
      exports: [OrderApprovalListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderApprovalListComponent: {
            component: OrderApprovalListComponent,
            guards: [AuthGuard, ApproverGuard]
          }
        }
      }), UrlModule, RouterModule, ListNavigationModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderApprovalListComponent: {
            component: OrderApprovalListComponent,
            guards: [AuthGuard, ApproverGuard]
          }
        }
      }), UrlModule, RouterModule, ListNavigationModule, I18nModule, FeaturesConfigModule],
      declarations: [OrderApprovalListComponent],
      exports: [OrderApprovalListComponent]
    }]
  }], null, null);
})();
var OrderApprovalComponentsModule = class _OrderApprovalComponentsModule {
  static {
    this.ɵfac = function OrderApprovalComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalComponentsModule,
      imports: [RouterModule, OrderApprovalListModule, OrderApprovalDetailsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule, OrderApprovalListModule, OrderApprovalDetailsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, OrderApprovalListModule, OrderApprovalDetailsModule]
    }]
  }], null, null);
})();
var OrderApprovalAdapter = class {
};
var OrderApprovalConnector = class _OrderApprovalConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, orderApprovalCode) {
    return this.adapter.load(userId, orderApprovalCode);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  makeDecision(userId, orderApprovalCode, orderApprovalDecision) {
    return this.adapter.makeDecision(userId, orderApprovalCode, orderApprovalDecision);
  }
  static {
    this.ɵfac = function OrderApprovalConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalConnector)(ɵɵinject(OrderApprovalAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderApprovalConnector,
      factory: _OrderApprovalConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderApprovalAdapter
  }], null);
})();
var ORDER_APPROVAL_NORMALIZER = new InjectionToken("OrderApprovalNormalizer");
var ORDER_APPROVALS_NORMALIZER = new InjectionToken("OrderApprovalsListNormalizer");
var ORDER_APPROVAL_DECISION_NORMALIZER = new InjectionToken("OrderApprovalDecisionNormalizer");
var OccOrderApprovalAdapter = class _OccOrderApprovalAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, orderApprovalCode) {
    return this.http.get(this.getOrderApprovalEndpoint(userId, orderApprovalCode)).pipe(this.converter.pipeable(ORDER_APPROVAL_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getOrderApprovalsEndpoint(userId, params)).pipe(this.converter.pipeable(ORDER_APPROVALS_NORMALIZER));
  }
  makeDecision(userId, orderApprovalCode, orderApprovalDecision) {
    return this.http.post(this.getOrderApprovalDecisionEndpoint(userId, orderApprovalCode), orderApprovalDecision).pipe(this.converter.pipeable(ORDER_APPROVAL_DECISION_NORMALIZER));
  }
  getOrderApprovalEndpoint(userId, orderApprovalCode) {
    return this.occEndpoints.buildUrl("orderApproval", {
      urlParams: {
        userId,
        orderApprovalCode
      }
    });
  }
  getOrderApprovalsEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("orderApprovals", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getOrderApprovalDecisionEndpoint(userId, orderApprovalCode) {
    return this.occEndpoints.buildUrl("orderApprovalDecision", {
      urlParams: {
        userId,
        orderApprovalCode
      }
    });
  }
  static {
    this.ɵfac = function OccOrderApprovalAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderApprovalAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderApprovalAdapter,
      factory: _OccOrderApprovalAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderApprovalAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccOrderApprovalDecisionNormalizer = class _OccOrderApprovalDecisionNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrderApprovalDecisionNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderApprovalDecisionNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderApprovalDecisionNormalizer,
      factory: _OccOrderApprovalDecisionNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderApprovalDecisionNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccOrderApprovalListNormalizer = class _OccOrderApprovalListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.orderApprovals?.map((orderApproval) => __spreadValues({}, this.converter.convert(orderApproval, ORDER_APPROVAL_NORMALIZER))) ?? [];
    return target;
  }
  static {
    this.ɵfac = function OccOrderApprovalListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderApprovalListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderApprovalListNormalizer,
      factory: _OccOrderApprovalListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderApprovalListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccOrderApprovalNormalizer = class _OccOrderApprovalNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.order) {
      target.order = this.converter.convert(source.order, ORDER_NORMALIZER);
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrderApprovalNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderApprovalNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderApprovalNormalizer,
      factory: _OccOrderApprovalNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderApprovalNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var defaultOccOrderApprovalConfig = {
  backend: {
    occ: {
      endpoints: {
        orderApprovals: "/users/${userId}/orderapprovals",
        orderApproval: "/users/${userId}/orderapprovals/${orderApprovalCode}?fields=FULL",
        orderApprovalDecision: "/users/${userId}/orderapprovals/${orderApprovalCode}/decision"
      }
    }
  }
};
var OrderApprovalOccModule = class _OrderApprovalOccModule {
  static {
    this.ɵfac = function OrderApprovalOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccOrderApprovalConfig), {
        provide: OrderApprovalAdapter,
        useClass: OccOrderApprovalAdapter
      }, {
        provide: ORDER_APPROVAL_NORMALIZER,
        useExisting: OccOrderApprovalNormalizer,
        multi: true
      }, {
        provide: ORDER_APPROVALS_NORMALIZER,
        useExisting: OccOrderApprovalListNormalizer,
        multi: true
      }, {
        provide: ORDER_APPROVAL_DECISION_NORMALIZER,
        useExisting: OccOrderApprovalDecisionNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccOrderApprovalConfig), {
        provide: OrderApprovalAdapter,
        useClass: OccOrderApprovalAdapter
      }, {
        provide: ORDER_APPROVAL_NORMALIZER,
        useExisting: OccOrderApprovalNormalizer,
        multi: true
      }, {
        provide: ORDER_APPROVALS_NORMALIZER,
        useExisting: OccOrderApprovalListNormalizer,
        multi: true
      }, {
        provide: ORDER_APPROVAL_DECISION_NORMALIZER,
        useExisting: OccOrderApprovalDecisionNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();
var OrderApprovalEffects = class _OrderApprovalEffects {
  constructor(actions$, orderApprovalConnector) {
    this.actions$ = actions$;
    this.orderApprovalConnector = orderApprovalConnector;
    this.logger = inject(LoggerService);
    this.loadOrderApproval$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_APPROVAL), map((action) => action.payload), filter((payload) => payload.userId !== OCC_USER_ID_ANONYMOUS), switchMap(({
      userId,
      orderApprovalCode
    }) => {
      return this.orderApprovalConnector.get(userId, orderApprovalCode).pipe(map((orderApproval) => {
        return new LoadOrderApprovalSuccess([orderApproval]);
      }), catchError((error) => of(new LoadOrderApprovalFail({
        orderApprovalCode,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadOrderApprovals$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_APPROVALS), map((action) => action.payload), filter((payload) => payload.userId !== OCC_USER_ID_ANONYMOUS), switchMap(({
      userId,
      params
    }) => this.orderApprovalConnector.getList(userId, params).pipe(switchMap((orderApprovals) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(orderApprovals, "code");
      return [new LoadOrderApprovalSuccess(values), new LoadOrderApprovalsSuccess({
        page,
        params
      })];
    }), catchError((error) => of(new LoadOrderApprovalsFail({
      params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.makeDecision$ = createEffect(() => this.actions$.pipe(ofType(MAKE_DECISION), map((action) => action.payload), filter((payload) => payload.userId !== OCC_USER_ID_ANONYMOUS), switchMap(({
      userId,
      orderApprovalCode,
      orderApprovalDecision
    }) => this.orderApprovalConnector.makeDecision(userId, orderApprovalCode, orderApprovalDecision).pipe(switchMap((orderApprovalDecisionData) => [new MakeDecisionSuccess({
      orderApprovalCode,
      orderApprovalDecision: orderApprovalDecisionData
    }), new LoadOrderApproval({
      userId,
      orderApprovalCode
    })]), catchError((error) => of(new MakeDecisionFail({
      orderApprovalCode,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
  }
  static {
    this.ɵfac = function OrderApprovalEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalEffects)(ɵɵinject(Actions), ɵɵinject(OrderApprovalConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderApprovalEffects,
      factory: _OrderApprovalEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderApprovalConnector
  }], null);
})();
var effects = [OrderApprovalEffects];
var orderApprovalInitialState = void 0;
var orderApprovalsInitialState = void 0;
function orderApprovalsEntitiesReducer(state = orderApprovalInitialState, action) {
  switch (action.type) {
    case LOAD_ORDER_APPROVAL_SUCCESS:
      return action.payload;
    case MAKE_DECISION_SUCCESS:
      return state;
  }
  return state;
}
function orderApprovalsListReducer(state = orderApprovalsInitialState, action) {
  switch (action.type) {
    case LOAD_ORDER_APPROVALS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function getReducers() {
  return {
    [ORDER_APPROVAL_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(ORDER_APPROVAL_ENTITIES, orderApprovalsEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(ORDER_APPROVAL_LIST, orderApprovalsListReducer)
    })
  };
}
var reducerToken = new InjectionToken("OrganizationReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearOrganizationState(reducer) {
  return function(state, action) {
    if (action.type === authGroup_actions.LOGOUT) {
      state = void 0;
    }
    return reducer(state, action);
  };
}
var metaReducers = [clearOrganizationState];
var OrderApprovalStoreModule = class _OrderApprovalStoreModule {
  static {
    this.ɵfac = function OrderApprovalStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalStoreModule,
      imports: [StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [StoreModule.forFeature(ORDER_APPROVAL_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalStoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreModule.forFeature(ORDER_APPROVAL_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var OrderApprovalCoreModule = class _OrderApprovalCoreModule {
  static forRoot() {
    return {
      ngModule: _OrderApprovalCoreModule,
      providers: [OrderApprovalConnector]
    };
  }
  static {
    this.ɵfac = function OrderApprovalCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalCoreModule,
      imports: [OrderApprovalStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [OrderApprovalStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalCoreModule, [{
    type: NgModule,
    args: [{
      imports: [OrderApprovalStoreModule]
    }]
  }], null, null);
})();
var OrderApprovalModule = class _OrderApprovalModule {
  static {
    this.ɵfac = function OrderApprovalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalModule,
      imports: [OrderApprovalCoreModule, OrderApprovalOccModule, OrderApprovalComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [OrderApprovalCoreModule.forRoot(), OrderApprovalOccModule, OrderApprovalComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalModule, [{
    type: NgModule,
    args: [{
      imports: [OrderApprovalCoreModule.forRoot(), OrderApprovalOccModule, OrderApprovalComponentsModule]
    }]
  }], null, null);
})();
export {
  ApproverGuard,
  ORDER_APPROVALS_NORMALIZER,
  ORDER_APPROVAL_DECISION_NORMALIZER,
  ORDER_APPROVAL_ENTITIES,
  ORDER_APPROVAL_FEATURE,
  ORDER_APPROVAL_LIST,
  ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID,
  ORDER_APPROVAL_NORMALIZER,
  OccOrderApprovalAdapter,
  OccOrderApprovalDecisionNormalizer,
  OccOrderApprovalListNormalizer,
  OccOrderApprovalNormalizer,
  orderApproval_action as OrderApprovalActions,
  OrderApprovalAdapter,
  OrderApprovalComponentsModule,
  OrderApprovalConnector,
  OrderApprovalDecisionValue,
  OrderApprovalDetailFormComponent,
  OrderApprovalDetailService,
  OrderApprovalDetailsModule,
  OrderApprovalListComponent,
  OrderApprovalListModule,
  OrderApprovalModule,
  OrderApprovalOccModule,
  orderApproval_selector as OrderApprovalSelectors,
  OrderApprovalService,
  OrderDetailPermissionResultsComponent
};
//# sourceMappingURL=@spartacus_organization_order-approval.js.map
