import {
  BREAKPOINT,
  BreakpointService,
  CarouselComponent,
  CarouselModule,
  CarouselScrollingComponent,
  CarouselScrollingModule,
  CurrentProductService,
  DIALOG_TYPE,
  FocusDirective,
  FocusableCarouselItemDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  LcpContextDirective,
  LcpContextDirectiveModule,
  MediaComponent,
  MediaModule,
  OutletModule,
  ProductImagesComponent
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  I18nModule,
  TranslatePipe,
  isNotNullable,
  provideDefaultConfig,
  useFeatureStyles
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
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  fromEvent,
  merge
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  of,
  shareReplay,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom-components.mjs
function ProductImageZoomThumbnailsComponent_ng_container_0_cx_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-carousel", 3);
  }
  if (rf & 2) {
    const thumbs_r1 = ɵɵnextContext().ngIf;
    ɵɵnextContext();
    const thumb_r2 = ɵɵreference(3);
    ɵɵproperty("items", thumbs_r1)("hideIndicators", false)("template", thumb_r2);
  }
}
function ProductImageZoomThumbnailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomThumbnailsComponent_ng_container_0_cx_carousel_1_Template, 1, 3, "cx-carousel", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const thumbs_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", thumbs_r1.length);
  }
}
function ProductImageZoomThumbnailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-media", 4);
    ɵɵpipe(1, "async");
    ɵɵlistener("focus", function ProductImageZoomThumbnailsComponent_ng_template_2_Template_cx_media_focus_0_listener() {
      const item_r4 = ɵɵrestoreView(_r3).item;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.openImage(item_r4.container));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("is-active", ɵɵpipeBind1(1, 3, ctx_r4.isActive(item_r4.container)));
    ɵɵproperty("container", item_r4.container);
  }
}
var _c0 = ["defaultImage"];
var _c1 = ["zoomContainer"];
var _c2 = ["zoomedImage"];
var _c3 = ["zoomButton"];
function ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template_button_click_0_listener() {
      const previousProduct_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.openImage(previousProduct_r2.container));
    });
    ɵɵelement(3, "cx-icon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "productImageZoomDialog.previousSlide"))("title", ɵɵpipeBind1(2, 5, "productImageZoomDialog.previousSlide"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconType.CARET_LEFT);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_cx_media_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-media", 18, 0);
    ɵɵlistener("loaded", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_cx_media_1_Template_cx_media_loaded_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.onImageLoad());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const main_r5 = ɵɵnextContext(3).ngIf;
    ɵɵproperty("container", main_r5);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19, 1)(2, "cx-media", 20, 2);
    ɵɵlistener("mousemove", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template_cx_media_mousemove_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.pointerMove($event));
    })("touchmove", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template_cx_media_touchmove_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.touchMove($event));
    })("touchend", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template_cx_media_touchend_2_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.clearTouch());
    })("loaded", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template_cx_media_loaded_2_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.onImageLoad());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const main_r5 = ɵɵnextContext(3).ngIf;
    ɵɵadvance(2);
    ɵɵproperty("container", main_r5);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_cx_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵproperty("type", ctx_r2.iconType.SEARCH_PLUS);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_cx_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 23);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵproperty("type", ctx_r2.iconType.SEARCH_MINUS);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21, 3);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("click", function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.zoom());
    });
    ɵɵtemplate(6, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_cx_icon_6_Template, 1, 1, "cx-icon", 22)(7, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_cx_icon_7_Template, 1, 1, "cx-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("title", ctx_r2.isZoomed ? ɵɵpipeBind1(2, 4, "common.zoomOut") : ɵɵpipeBind1(3, 6, "common.zoomIn"));
    ɵɵattribute("aria-label", ctx_r2.isZoomed ? ɵɵpipeBind1(4, 8, "common.zoomOut") : ɵɵpipeBind1(5, 10, "common.zoomIn"));
    ɵɵadvance(6);
    ɵɵproperty("ngIf", !ctx_r2.isZoomed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isZoomed);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_cx_media_1_Template, 2, 1, "cx-media", 15)(2, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_div_2_Template, 4, 1, "div", 16)(3, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_button_3_Template, 8, 12, "button", 17);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isZoomed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isZoomed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 3, ctx_r2.imageLoaded));
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_cx_media_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-media", 25, 0);
  }
  if (rf & 2) {
    const main_r5 = ɵɵnextContext(3).ngIf;
    ɵɵproperty("container", main_r5);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19, 1)(2, "cx-media", 26, 2);
    ɵɵlistener("mousemove", function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_div_2_Template_cx_media_mousemove_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.pointerMove($event));
    })("touchmove", function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_div_2_Template_cx_media_touchmove_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.touchMove($event));
    })("touchend", function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_div_2_Template_cx_media_touchend_2_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.clearTouch());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const main_r5 = ɵɵnextContext(3).ngIf;
    ɵɵadvance(2);
    ɵɵproperty("container", main_r5);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_cx_media_1_Template, 2, 1, "cx-media", 24)(2, ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_div_2_Template, 4, 1, "div", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isZoomed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isZoomed);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template_button_click_0_listener() {
      const nextProduct_r10 = ɵɵrestoreView(_r9).ngIf;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.openImage(nextProduct_r10.container));
    });
    ɵɵelement(3, "cx-icon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "productImageZoomDialog.nextSlide"))("title", ɵɵpipeBind1(2, 5, "productImageZoomDialog.nextSlide"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconType.CARET_RIGHT);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7)(1, "div", 8);
    ɵɵtemplate(2, ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template, 4, 7, "button", 9);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, ProductImageZoomViewComponent_ng_container_0_div_1_div_4_Template, 5, 5, "div", 10)(5, ProductImageZoomViewComponent_ng_container_0_div_1_ng_container_5_Template, 3, 2, "ng-container", 11);
    ɵɵelementStart(6, "div", 8);
    ɵɵtemplate(7, ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template, 4, 7, "button", 9);
    ɵɵpipe(8, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const thumbs_r11 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r2.getPreviousProduct(thumbs_r11)));
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yKeyboardAccessibleZoom");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yKeyboardAccessibleZoom");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(8, 6, ctx_r2.getNextProduct(thumbs_r11)));
  }
}
function ProductImageZoomViewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomViewComponent_ng_container_0_div_1_Template, 9, 8, "div", 6);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.thumbnails$));
  }
}
var _c4 = ["expandButton"];
function ProductImageZoomTriggerComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3, 0);
    ɵɵlistener("click", function ProductImageZoomTriggerComponent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerZoom());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-icon", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "productImageZoomTrigger.expand"), " ");
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconType.EXPAND_ARROWS);
  }
}
function ProductImageZoomTriggerComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5, 0);
    ɵɵlistener("click", function ProductImageZoomTriggerComponent_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerZoom());
    });
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelement(5, "cx-icon", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "productImageZoomTrigger.expand"), " ");
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconType.EXPAND_ARROWS);
  }
}
var _c5 = (a0) => ({
  product: a0
});
function ProductImageZoomProductImagesComponent_ng_container_0_cx_media_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-media", 4);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ProductImageZoomProductImagesComponent_ng_container_0_cx_media_1_Template_cx_media_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.triggerZoom(true));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lcpContext_r4 = ctx.$implicit;
    const main_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("container", main_r5)("fetchPriority", ɵɵpipeBind1(1, 2, lcpContext_r4.fetchPriority$));
  }
}
function ProductImageZoomProductImagesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomProductImagesComponent_ng_container_0_cx_media_1_Template, 2, 4, "cx-media", 2);
    ɵɵelementStart(2, "cx-product-image-zoom-trigger", 3);
    ɵɵlistener("dialogClose", function ProductImageZoomProductImagesComponent_ng_container_0_Template_cx_product_image_zoom_trigger_dialogClose_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.triggerZoom(false));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("expandImage", ctx_r2.expandImage.value)("galleryIndex", ctx_r2.selectedIndex);
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_1_cx_carousel_scrolling_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-carousel-scrolling", 7);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const product_r6 = ɵɵnextContext(2).ngIf;
    const thumbs_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    const thumb_r8 = ɵɵreference(5);
    ɵɵproperty("items", thumbs_r7)("template", thumb_r8)("trackByFn", ctx_r2.trackByFn);
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 4, "carousel.carouselForProduct", ɵɵpureFunction1(7, _c5, product_r6.name)));
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_1_cx_carousel_scrolling_1_Template, 2, 9, "cx-carousel-scrolling", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const thumbs_r7 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", thumbs_r7.length);
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_2_cx_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-carousel", 9);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const product_r6 = ɵɵnextContext(2).ngIf;
    const thumbs_r7 = ɵɵnextContext().ngIf;
    ɵɵnextContext();
    const thumb_r8 = ɵɵreference(5);
    ɵɵproperty("items", thumbs_r7)("hideIndicators", false)("template", thumb_r8);
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 4, "carousel.carouselForProduct", ɵɵpureFunction1(7, _c5, product_r6.name)));
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_2_cx_carousel_1_Template, 2, 9, "cx-carousel", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const thumbs_r7 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", thumbs_r7.length);
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 5)(2, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("cxFeature", "productCarouselScrolling");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!productCarouselScrolling");
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.product$));
  }
}
function ProductImageZoomProductImagesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-media", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("focus", function ProductImageZoomProductImagesComponent_ng_template_4_Template_cx_media_focus_0_listener() {
      const item_r10 = ɵɵrestoreView(_r9).item;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openImage(item_r10.container));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("is-active", ɵɵpipeBind1(1, 3, ctx_r2.isActive(item_r10.container)));
    ɵɵproperty("container", item_r10.container);
  }
}
var ProductImageZoomThumbnailsComponent = class _ProductImageZoomThumbnailsComponent {
  constructor() {
    this.mainMediaContainer = new BehaviorSubject({});
    this.productImage = new EventEmitter();
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.activeThumb.subscribe((image) => {
      this.mainMediaContainer.next(image);
    }));
  }
  openImage(image) {
    this.mainMediaContainer.next(image);
    if (typeof image.zoom?.galleryIndex === "number") {
      this.productImage.emit({
        image,
        index: image.zoom.galleryIndex
      });
    }
  }
  isActive(thumbnail) {
    return this.mainMediaContainer.asObservable().pipe(filter(isNotNullable), map((container) => {
      return container.zoom?.url && thumbnail.zoom?.url && container.zoom.url === thumbnail.zoom.url;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ProductImageZoomThumbnailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomThumbnailsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductImageZoomThumbnailsComponent,
      selectors: [["cx-product-image-zoom-thumbnails"]],
      inputs: {
        thumbs$: "thumbs$",
        activeThumb: "activeThumb"
      },
      outputs: {
        productImage: "productImage"
      },
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["thumb", ""], [4, "ngIf"], ["class", "thumbs", "itemWidth", "70px", 3, "items", "hideIndicators", "template", 4, "ngIf"], ["itemWidth", "70px", 1, "thumbs", 3, "items", "hideIndicators", "template"], ["cxFocusableCarouselItem", "", "tabindex", "0", 3, "focus", "container"]],
      template: function ProductImageZoomThumbnailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductImageZoomThumbnailsComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ProductImageZoomThumbnailsComponent_ng_template_2_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.thumbs$));
        }
      },
      dependencies: [CarouselComponent, FocusableCarouselItemDirective, NgIf, MediaComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomThumbnailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-thumbnails",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="thumbs$ | async as thumbs">\n  <cx-carousel\n    *ngIf="thumbs.length"\n    class="thumbs"\n    [items]="thumbs"\n    itemWidth="70px"\n    [hideIndicators]="false"\n    [template]="thumb"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item="item">\n  <cx-media\n    cxFocusableCarouselItem\n    [container]="item.container"\n    tabindex="0"\n    (focus)="openImage(item.container)"\n    [class.is-active]="isActive(item.container) | async"\n  >\n  </cx-media>\n</ng-template>\n'
    }]
  }], () => [], {
    productImage: [{
      type: Output
    }],
    thumbs$: [{
      type: Input
    }],
    activeThumb: [{
      type: Input
    }]
  });
})();
var ProductImageZoomViewComponent = class _ProductImageZoomViewComponent {
  get defaultImage() {
    return this._defaultImage;
  }
  set defaultImage(el) {
    if (el) {
      this._defaultImage = el;
      this.defaultImageReady.next(true);
    }
  }
  get zoomImage() {
    return this._zoomImage;
  }
  set zoomImage(el) {
    if (el) {
      this._zoomImage = el;
      this.zoomReady.next(true);
    }
  }
  constructor(currentProductService, renderer, cdRef, breakpointService) {
    this.currentProductService = currentProductService;
    this.renderer = renderer;
    this.cdRef = cdRef;
    this.breakpointService = breakpointService;
    this.iconType = ICON_TYPE;
    this.mainMediaContainer = new BehaviorSubject(null);
    this.defaultImageReady = new BehaviorSubject(false);
    this.zoomReady = new BehaviorSubject(false);
    this.imageLoaded = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.mainMediaContainer$ = this.mainMediaContainer.asObservable();
    this.defaultImageReady$ = this.defaultImageReady.asObservable();
    this.zoomReady$ = this.zoomReady.asObservable();
    this.featureConfigService = inject(FeatureConfigService);
    this.activeThumb = new EventEmitter();
    this.defaultImageClickHandler$ = this.defaultImageReady$.pipe(filter(Boolean), switchMap((_) => merge(...this.clickOrDoubleClick(this.defaultImage)).pipe(tap(() => this.zoom()))));
    this.zoomImageClickHandler$ = this.zoomReady$.pipe(filter(Boolean), switchMap((_) => merge(...this.clickOrDoubleClick(this.zoomImage)).pipe(tap(() => this.zoom()))));
    this.startCoords = null;
    this.left = 0;
    this.top = 0;
    this.isZoomed = false;
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), distinctUntilChanged(), tap((p) => {
      if (this.galleryIndex) {
        const image = Array.isArray(p.images?.GALLERY) ? p.images?.GALLERY.find((img) => img.zoom?.galleryIndex === this.galleryIndex) : p.images?.GALLERY;
        this.mainMediaContainer.next(image || null);
      } else {
        this.mainMediaContainer.next(p.images?.PRIMARY ? p.images.PRIMARY : {});
      }
    }), shareReplay(1));
    this.thumbnails$ = this.product$.pipe(map((p) => this.createThumbs(p)), shareReplay(1));
    this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer$]).pipe(map(([, container]) => container));
    useFeatureStyles("a11yKeyboardAccessibleZoom");
    useFeatureStyles("a11yCroppedFocusRing");
  }
  ngOnInit() {
    this.subscription.add(this.defaultImageClickHandler$.subscribe());
    this.subscription.add(this.zoomImageClickHandler$.subscribe());
  }
  openImage(item) {
    this.mainMediaContainer.next(item);
    this.activeThumb.emit(item);
  }
  /** find the index of the main media in the list of media */
  getActive() {
    if (Array.isArray(this.mainMediaContainer.value)) {
      return this.mainMediaContainer.value[0].thumbnail?.galleryIndex || 0;
    }
    return this.mainMediaContainer?.value?.thumbnail?.galleryIndex || 0;
  }
  getPreviousProduct(thumbs) {
    const active = this.getActive();
    if (active === 0) {
      return thumbs[active];
    }
    return thumbs[active - 1];
  }
  getNextProduct(thumbs) {
    const active = this.getActive();
    if (active === thumbs.length - 1) {
      return thumbs[active];
    }
    return thumbs[active + 1];
  }
  /**
   * Zoom in or out of the image
   */
  zoom() {
    this.isZoomed = !this.isZoomed;
    this.startCoords = null;
    this.left = 0;
    this.top = 0;
    this.cdRef.markForCheck();
    if (this.featureConfigService.isEnabled("a11yKeyboardAccessibleZoom")) {
      this.imageLoaded.next(false);
      this.imageLoaded.pipe(filter(Boolean), take(1)).subscribe(() => {
        setTimeout(() => {
          this.zoomButton.nativeElement.focus();
        });
      });
    }
  }
  /**
   * Touch screen image pan
   *
   * @param event
   */
  touchMove(event) {
    const touch = event.touches[0] || event.changedTouches[0];
    const boundingRect = this.zoomedImage?.nativeElement?.getBoundingClientRect();
    const imageElement = this.zoomedImage?.nativeElement?.firstChild;
    if (!this.startCoords) {
      this.startCoords = {
        x: touch.clientX,
        y: touch.clientY
      };
    }
    this.left += touch.clientX - this.startCoords.x;
    this.top += touch.clientY - this.startCoords.y;
    this.moveImage(this.left, this.top, boundingRect, imageElement);
    this.startCoords = {
      x: touch.clientX,
      y: touch.clientY
    };
  }
  /**
   * Clears touch location
   */
  clearTouch() {
    this.startCoords = null;
  }
  /**
   * Pointer image pan
   *
   * @param event
   */
  pointerMove(event) {
    const boundingRect = this.zoomedImage.nativeElement.getBoundingClientRect();
    const imageElement = this.zoomedImage.nativeElement.firstChild;
    const {
      positionX,
      positionY
    } = this.calculatePointerMovePosition(this.zoomedImage, event.clientX, event.clientY);
    this.moveImage(positionX, positionY, boundingRect, imageElement);
  }
  changeImage(event) {
    this.mainMediaContainer.next(event.image);
  }
  /**
   * Applies the offset from touchMove or pointerMove to the image element
   *
   * @param positionX
   * @param positionY
   * @param boundingRect
   * @param imageElement
   */
  moveImage(positionX, positionY, boundingRect, imageElement) {
    const {
      x,
      y
    } = this.handleOutOfBounds(positionX, positionY, imageElement, boundingRect);
    if (imageElement) {
      this.renderer.setStyle(imageElement, "left", x + "px");
      this.renderer.setStyle(imageElement, "top", y + "px");
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Returns click and dblclick event mapping for the given element
   *
   * @param element
   */
  clickOrDoubleClick(element) {
    return [fromEvent(element.nativeElement, "click").pipe(switchMap(() => this.breakpointService.isUp(BREAKPOINT.md)), filter(Boolean)), fromEvent(element.nativeElement, "dblclick").pipe(switchMap(() => this.breakpointService.isDown(BREAKPOINT.lg)), filter(Boolean))];
  }
  /**
   * Return an array of CarouselItems for the product thumbnails.
   * In case there are less then 2 thumbs, we return null.
   */
  createThumbs(product) {
    if (!product.images || !product.images.GALLERY || Array.isArray(product.images.GALLERY) && product.images.GALLERY.length < 2) {
      return [];
    }
    const images = product.images.GALLERY;
    return images.map((c) => of({
      container: c
    }));
  }
  /**
   * Keeps the zoom image from leaving the bounding container
   *
   * @param positionX
   * @param positionY
   * @param imageElement
   * @param boundingRect
   */
  handleOutOfBounds(positionX, positionY, imageElement, boundingRect) {
    const paddingX = 60;
    const paddingY = 60;
    if (positionY <= -imageElement?.height + paddingY) {
      positionY = -imageElement?.height + paddingY;
    }
    if (positionY >= boundingRect?.height - paddingY) {
      positionY = boundingRect?.height - paddingY;
    }
    if (positionX <= -imageElement?.width - boundingRect?.width / 2 + paddingX) {
      positionX = -imageElement?.width - boundingRect?.width / 2 + paddingX;
    }
    if (positionX >= imageElement?.width + boundingRect?.width / 2 - paddingX) {
      positionX = imageElement?.width + boundingRect?.width / 2 - paddingX;
    }
    return {
      x: positionX,
      y: positionY
    };
  }
  /**
   * Returns the position of the image based on the cursor pointer
   *
   * @param element
   * @param clientX
   * @param clientY
   */
  calculatePointerMovePosition(element, clientX, clientY) {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    const x = clientX - boundingRect.left;
    const y = clientY - boundingRect.top;
    const positionX = -x + element.nativeElement.clientWidth / 2;
    const positionY = -y + element.nativeElement.clientHeight / 2;
    return {
      positionX,
      positionY
    };
  }
  onImageLoad() {
    this.imageLoaded.next(true);
  }
  static {
    this.ɵfac = function ProductImageZoomViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomViewComponent)(ɵɵdirectiveInject(CurrentProductService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(BreakpointService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductImageZoomViewComponent,
      selectors: [["cx-product-image-zoom-view"]],
      viewQuery: function ProductImageZoomViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5, ElementRef);
          ɵɵviewQuery(_c1, 5, ElementRef);
          ɵɵviewQuery(_c2, 5, ElementRef);
          ɵɵviewQuery(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultImage = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.zoomImage = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.zoomedImage = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.zoomButton = _t.first);
        }
      },
      inputs: {
        galleryIndex: "galleryIndex"
      },
      standalone: false,
      decls: 3,
      vars: 5,
      consts: [["defaultImage", ""], ["zoomContainer", ""], ["zoomedImage", ""], ["zoomButton", ""], [4, "ngIf"], [3, "productImage", "thumbs$", "activeThumb"], ["class", "cx-main-image-group", 4, "ngIf"], [1, "cx-main-image-group"], [1, "cx-navigate-image"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], ["class", "cx-image-container", 4, "cxFeature"], [4, "cxFeature"], [1, "btn", "btn-link", 3, "click"], [3, "type"], [1, "cx-image-container"], ["class", "cx-default-image-zoom", 3, "container", "loaded", 4, "ngIf"], ["class", "cx-zoom-container", 4, "ngIf"], ["class", "btn btn-link cx-zoom-btn", 3, "title", "click", 4, "ngIf"], [1, "cx-default-image-zoom", 3, "loaded", "container"], [1, "cx-zoom-container"], [1, "cx-image-zoomed", 3, "mousemove", "touchmove", "touchend", "loaded", "container"], [1, "btn", "btn-link", "cx-zoom-btn", 3, "click", "title"], ["class", "cx-zoom-indicator", 3, "type", 4, "ngIf"], [1, "cx-zoom-indicator", 3, "type"], ["class", "cx-default-image-zoom", 3, "container", 4, "ngIf"], [1, "cx-default-image-zoom", 3, "container"], [1, "cx-image-zoomed", 3, "mousemove", "touchmove", "touchend", "container"]],
      template: function ProductImageZoomViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductImageZoomViewComponent_ng_container_0_Template, 3, 3, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "cx-product-image-zoom-thumbnails", 5);
          ɵɵlistener("productImage", function ProductImageZoomViewComponent_Template_cx_product_image_zoom_thumbnails_productImage_2_listener($event) {
            return ctx.changeImage($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.mainImage$));
          ɵɵadvance(2);
          ɵɵproperty("thumbs$", ctx.thumbnails$)("activeThumb", ctx.activeThumb);
        }
      },
      dependencies: [NgIf, IconComponent, MediaComponent, FeatureDirective, ProductImageZoomThumbnailsComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomViewComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="mainImage$ | async as main">
  <div class="cx-main-image-group" *ngIf="thumbnails$ | async as thumbs">
    <div class="cx-navigate-image">
      <button
        class="btn btn-link"
        [attr.aria-label]="'productImageZoomDialog.previousSlide' | cxTranslate"
        [attr.title]="'productImageZoomDialog.previousSlide' | cxTranslate"
        *ngIf="getPreviousProduct(thumbs) | async as previousProduct"
        (click)="openImage(previousProduct.container)"
      >
        <cx-icon [type]="iconType.CARET_LEFT"></cx-icon>
      </button>
    </div>
    <!-- TODO: (CXSPA-7492) - Remove feature flag next major release. -->
    <div *cxFeature="'a11yKeyboardAccessibleZoom'" class="cx-image-container">
      <cx-media
        #defaultImage
        class="cx-default-image-zoom"
        (loaded)="onImageLoad()"
        *ngIf="!isZoomed"
        [container]="main"
      >
      </cx-media>
      <div #zoomContainer class="cx-zoom-container" *ngIf="isZoomed">
        <cx-media
          #zoomedImage
          class="cx-image-zoomed"
          [container]="main"
          (mousemove)="pointerMove($event)"
          (touchmove)="touchMove($event)"
          (touchend)="clearTouch()"
          (loaded)="onImageLoad()"
        >
        </cx-media>
      </div>
      <button
        #zoomButton
        *ngIf="imageLoaded | async"
        [attr.aria-label]="
          isZoomed
            ? ('common.zoomOut' | cxTranslate)
            : ('common.zoomIn' | cxTranslate)
        "
        title="{{
          isZoomed
            ? ('common.zoomOut' | cxTranslate)
            : ('common.zoomIn' | cxTranslate)
        }}"
        class="btn btn-link cx-zoom-btn"
        (click)="zoom()"
      >
        <cx-icon
          [type]="iconType.SEARCH_PLUS"
          *ngIf="!isZoomed"
          class="cx-zoom-indicator"
        ></cx-icon>
        <cx-icon
          [type]="iconType.SEARCH_MINUS"
          *ngIf="isZoomed"
          class="cx-zoom-indicator"
        ></cx-icon>
      </button>
    </div>
    <ng-container *cxFeature="'!a11yKeyboardAccessibleZoom'">
      <cx-media
        #defaultImage
        class="cx-default-image-zoom"
        *ngIf="!isZoomed"
        [container]="main"
      >
      </cx-media>
      <div #zoomContainer class="cx-zoom-container" *ngIf="isZoomed">
        <cx-media
          #zoomedImage
          class="cx-image-zoomed"
          [container]="main"
          (mousemove)="pointerMove($event)"
          (touchmove)="touchMove($event)"
          (touchend)="clearTouch()"
        >
        </cx-media></div
    ></ng-container>
    <div class="cx-navigate-image">
      <button
        class="btn btn-link"
        [attr.aria-label]="'productImageZoomDialog.nextSlide' | cxTranslate"
        [attr.title]="'productImageZoomDialog.nextSlide' | cxTranslate"
        *ngIf="getNextProduct(thumbs) | async as nextProduct"
        (click)="openImage(nextProduct.container)"
      >
        <cx-icon [type]="iconType.CARET_RIGHT"></cx-icon>
      </button>
    </div>
  </div>
</ng-container>

<cx-product-image-zoom-thumbnails
  [thumbs$]="thumbnails$"
  [activeThumb]="activeThumb"
  (productImage)="changeImage($event)"
></cx-product-image-zoom-thumbnails>
`
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: BreakpointService
  }], {
    galleryIndex: [{
      type: Input
    }],
    defaultImage: [{
      type: ViewChild,
      args: ["defaultImage", {
        read: ElementRef
      }]
    }],
    zoomImage: [{
      type: ViewChild,
      args: ["zoomContainer", {
        read: ElementRef
      }]
    }],
    zoomedImage: [{
      type: ViewChild,
      args: ["zoomedImage", {
        read: ElementRef
      }]
    }],
    zoomButton: [{
      type: ViewChild,
      args: ["zoomButton"]
    }]
  });
})();
var ProductImageZoomDialogComponent = class _ProductImageZoomDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(launchDialogService, el) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconType = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  close(reason = "") {
    this.launchDialogService.closeDialog(reason);
  }
  static {
    this.ɵfac = function ProductImageZoomDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomDialogComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductImageZoomDialogComponent,
      selectors: [["cx-product-image-zoom-dialog"]],
      hostBindings: function ProductImageZoomDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ProductImageZoomDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      inputs: {
        galleryIndex: "galleryIndex"
      },
      standalone: false,
      decls: 11,
      vars: 12,
      consts: [["role", "dialog", 1, "modal-dialog", "modal-dialog-centered", "modal-lg", "cx-image-zoom-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-dialog-content"], [1, "modal-header", "cx-dialog-header"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "modal-body", "cx-dialog-body"], [3, "galleryIndex"]],
      template: function ProductImageZoomDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵlistener("esc", function ProductImageZoomDialogComponent_Template_div_esc_0_listener() {
            return ctx.close("Escape clicked");
          });
          ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "button", 3);
          ɵɵpipe(5, "cxTranslate");
          ɵɵpipe(6, "cxTranslate");
          ɵɵlistener("click", function ProductImageZoomDialogComponent_Template_button_click_4_listener() {
            return ctx.close("cross click");
          });
          ɵɵelementStart(7, "span", 4);
          ɵɵelement(8, "cx-icon", 5);
          ɵɵelementEnd()()();
          ɵɵelementStart(9, "div", 6);
          ɵɵelement(10, "cx-product-image-zoom-view", 7);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵattribute("aria-label", ɵɵpipeBind1(1, 6, "productImageZoomDialog.zoomedInImage"));
          ɵɵadvance(4);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(5, 8, "productImageZoomDialog.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(6, 10, "productImageZoomDialog.close"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconType.CLOSE);
          ɵɵadvance(2);
          ɵɵproperty("galleryIndex", ctx.galleryIndex);
        }
      },
      dependencies: [IconComponent, FocusDirective, ProductImageZoomViewComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="modal-dialog modal-dialog-centered modal-lg cx-image-zoom-dialog"
  role="dialog"
  (esc)="close('Escape clicked')"
  [cxFocus]="focusConfig"
  [attr.aria-label]="'productImageZoomDialog.zoomedInImage' | cxTranslate"
>
  <div class="modal-content cx-dialog-content">
    <div class="modal-header cx-dialog-header">
      <button
        type="button"
        class="close"
        title="{{ 'productImageZoomDialog.close' | cxTranslate }}"
        [attr.aria-label]="'productImageZoomDialog.close' | cxTranslate"
        (click)="close('cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconType.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="modal-body cx-dialog-body">
      <cx-product-image-zoom-view
        [galleryIndex]="galleryIndex"
      ></cx-product-image-zoom-view>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    galleryIndex: [{
      type: Input
    }],
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultProductImageZoomLayoutConfig = {
  launch: {
    PRODUCT_IMAGE_ZOOM: {
      inline: true,
      component: ProductImageZoomDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ProductImageZoomTriggerComponent = class _ProductImageZoomTriggerComponent {
  set expandImage(expand) {
    if (expand) {
      this.triggerZoom();
    }
  }
  constructor(launchDialogService, vcr) {
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.iconType = ICON_TYPE;
    this.subscriptions = new Subscription();
    this.dialogClose = new EventEmitter();
    useFeatureStyles("a11yLinkBtnsToTertiaryBtns");
  }
  triggerZoom() {
    const component = this.launchDialogService.launch(LAUNCH_CALLER.PRODUCT_IMAGE_ZOOM, this.vcr);
    if (component) {
      this.subscriptions.add(combineLatest([component, this.launchDialogService.dialogClose]).pipe(tap(([comp]) => {
        if (this.galleryIndex) {
          comp.instance.galleryIndex = this.galleryIndex;
        }
      }), filter(([, close]) => Boolean(close)), tap(([comp]) => {
        this.launchDialogService.clear(LAUNCH_CALLER.PRODUCT_IMAGE_ZOOM);
        comp?.destroy();
        this.dialogClose.emit();
        this.expandButton.nativeElement.focus();
      })).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ProductImageZoomTriggerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomTriggerComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductImageZoomTriggerComponent,
      selectors: [["cx-product-image-zoom-trigger"]],
      viewQuery: function ProductImageZoomTriggerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandButton = _t.first);
        }
      },
      inputs: {
        galleryIndex: "galleryIndex",
        expandImage: "expandImage"
      },
      outputs: {
        dialogClose: "dialogClose"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [["expandButton", ""], ["class", "btn btn-tertiary", 3, "click", 4, "cxFeature"], ["class", "btn btn-link cx-action-link", 3, "click", 4, "cxFeature"], [1, "btn", "btn-tertiary", 3, "click"], [3, "type"], [1, "btn", "btn-link", "cx-action-link", 3, "click"]],
      template: function ProductImageZoomTriggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductImageZoomTriggerComponent_button_0_Template, 5, 4, "button", 1)(1, ProductImageZoomTriggerComponent_button_1_Template, 6, 4, "button", 2);
        }
        if (rf & 2) {
          ɵɵproperty("cxFeature", "a11yLinkBtnsToTertiaryBtns");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yLinkBtnsToTertiaryBtns");
        }
      },
      dependencies: [IconComponent, FeatureDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomTriggerComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-trigger",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<!-- TODO: (CXSPA-7603) - Remove feature flag next major release. -->
<button
  *cxFeature="'a11yLinkBtnsToTertiaryBtns'"
  #expandButton
  class="btn btn-tertiary"
  (click)="triggerZoom()"
>
  {{ 'productImageZoomTrigger.expand' | cxTranslate }}
  <cx-icon [type]="iconType.EXPAND_ARROWS"></cx-icon>
</button>

<button
  *cxFeature="'!a11yLinkBtnsToTertiaryBtns'"
  #expandButton
  class="btn btn-link cx-action-link"
  (click)="triggerZoom()"
>
  <span>
    {{ 'productImageZoomTrigger.expand' | cxTranslate }}
    <cx-icon [type]="iconType.EXPAND_ARROWS"></cx-icon
  ></span>
</button>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    expandButton: [{
      type: ViewChild,
      args: ["expandButton"]
    }],
    galleryIndex: [{
      type: Input
    }],
    expandImage: [{
      type: Input
    }],
    dialogClose: [{
      type: Output
    }]
  });
})();
var ProductImageZoomProductImagesComponent = class _ProductImageZoomProductImagesComponent extends ProductImagesComponent {
  constructor(currentProductService) {
    super(currentProductService);
    this.currentProductService = currentProductService;
    this.expandImage = new BehaviorSubject(false);
    this.product$ = this.product$;
  }
  openImage(item) {
    this.mainMediaContainer.next(item);
    this.selectedIndex = this.mainMediaContainer.value?.zoom?.galleryIndex;
  }
  /**
   * Opens image zoom dialog.
   */
  triggerZoom(value) {
    this.expandImage.next(value);
  }
  static {
    this.ɵfac = function ProductImageZoomProductImagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomProductImagesComponent)(ɵɵdirectiveInject(CurrentProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductImageZoomProductImagesComponent,
      selectors: [["cx-product-images"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 6,
      consts: [["thumb", ""], [4, "ngIf"], [3, "container", "fetchPriority", "click", 4, "cxLcpContext"], [3, "dialogClose", "expandImage", "galleryIndex"], [3, "click", "container", "fetchPriority"], [4, "cxFeature"], ["role", "region", "tabindex", "-1", "class", "thumbs", 3, "items", "template", "trackByFn", 4, "ngIf"], ["role", "region", "tabindex", "-1", 1, "thumbs", 3, "items", "template", "trackByFn"], ["role", "region", "tabindex", "-1", "class", "thumbs", "itemWidth", "120px", 3, "items", "hideIndicators", "template", 4, "ngIf"], ["role", "region", "tabindex", "-1", "itemWidth", "120px", 1, "thumbs", 3, "items", "hideIndicators", "template"], ["cxFocusableCarouselItem", "", "tabindex", "0", "format", "product", 3, "focus", "container"]],
      template: function ProductImageZoomProductImagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductImageZoomProductImagesComponent_ng_container_0_Template, 3, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ProductImageZoomProductImagesComponent_ng_container_2_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, ProductImageZoomProductImagesComponent_ng_template_4_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.mainImage$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.thumbs$));
        }
      },
      dependencies: [CarouselComponent, FocusableCarouselItemDirective, CarouselScrollingComponent, NgIf, MediaComponent, FeatureDirective, LcpContextDirective, ProductImageZoomTriggerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomProductImagesComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-images",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="mainImage$ | async as main">
  <cx-media
    [container]="main"
    (click)="triggerZoom(true)"
    *cxLcpContext="let lcpContext"
    [fetchPriority]="lcpContext.fetchPriority$ | async"
  ></cx-media>
  <cx-product-image-zoom-trigger
    [expandImage]="expandImage.value"
    [galleryIndex]="selectedIndex"
    (dialogClose)="triggerZoom(false)"
  ></cx-product-image-zoom-trigger>
</ng-container>

<ng-container *ngIf="thumbs$ | async as thumbs">
  <ng-container *ngIf="product$ | async as product">
    <ng-container *cxFeature="'productCarouselScrolling'">
      <cx-carousel-scrolling
        role="region"
        [attr.aria-label]="
          'carousel.carouselForProduct' | cxTranslate: { product: product.name }
        "
        tabindex="-1"
        *ngIf="thumbs.length"
        class="thumbs"
        [items]="thumbs"
        [template]="thumb"
        [trackByFn]="trackByFn"
      ></cx-carousel-scrolling>
    </ng-container>
    <ng-container *cxFeature="'!productCarouselScrolling'">
      <cx-carousel
        role="region"
        [attr.aria-label]="
          'carousel.carouselForProduct' | cxTranslate: { product: product.name }
        "
        tabindex="-1"
        *ngIf="thumbs.length"
        class="thumbs"
        [items]="thumbs"
        itemWidth="120px"
        [hideIndicators]="false"
        [template]="thumb"
      ></cx-carousel>
    </ng-container>
  </ng-container>
</ng-container>

<ng-template #thumb let-item="item">
  <cx-media
    cxFocusableCarouselItem
    [container]="item.container"
    tabindex="0"
    (focus)="openImage(item.container)"
    [class.is-active]="isActive(item.container) | async"
    format="product"
  >
  </cx-media>
</ng-template>
`
    }]
  }], () => [{
    type: CurrentProductService
  }], null);
})();
var ProductImageZoomModule = class _ProductImageZoomModule {
  static {
    this.ɵfac = function ProductImageZoomModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductImageZoomModule,
      declarations: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent],
      imports: [CarouselModule, CarouselScrollingModule, CommonModule, I18nModule, IconModule, KeyboardFocusModule, MediaModule, OutletModule, RouterModule, FeaturesConfigModule, LcpContextDirectiveModule],
      exports: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultProductImageZoomLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ProductImagesComponent: {
            component: ProductImageZoomProductImagesComponent
          }
        }
      })],
      imports: [CarouselModule, CarouselScrollingModule, CommonModule, I18nModule, IconModule, KeyboardFocusModule, MediaModule, OutletModule, RouterModule, FeaturesConfigModule, LcpContextDirectiveModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomModule, [{
    type: NgModule,
    args: [{
      imports: [CarouselModule, CarouselScrollingModule, CommonModule, I18nModule, IconModule, KeyboardFocusModule, MediaModule, OutletModule, RouterModule, FeaturesConfigModule, LcpContextDirectiveModule],
      providers: [provideDefaultConfig(defaultProductImageZoomLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ProductImagesComponent: {
            component: ProductImageZoomProductImagesComponent
          }
        }
      })],
      declarations: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent],
      exports: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent]
    }]
  }], null, null);
})();
var ProductImageZoomComponentsModule = class _ProductImageZoomComponentsModule {
  static {
    this.ɵfac = function ProductImageZoomComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductImageZoomComponentsModule,
      imports: [ProductImageZoomModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductImageZoomModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductImageZoomModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom.mjs
var ProductImageZoomModule2 = class _ProductImageZoomModule {
  static {
    this.ɵfac = function ProductImageZoomModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductImageZoomModule,
      imports: [ProductImageZoomComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductImageZoomComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomModule2, [{
    type: NgModule,
    args: [{
      imports: [ProductImageZoomComponentsModule]
    }]
  }], null, null);
})();
export {
  ProductImageZoomModule2 as ProductImageZoomModule
};
//# sourceMappingURL=@spartacus_product_image-zoom.js.map
