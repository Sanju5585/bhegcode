import {
  ContentType,
  EpdVisualizationConfig,
  EventListenerUtils
} from "./chunk-4IIVWVMK.js";
import {
  AddToCartComponent
} from "./chunk-P4IPRL4B.js";
import "./chunk-KEAKWHYV.js";
import {
  CarouselModule,
  CurrentProductService,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterModule,
  MediaComponent,
  MediaModule,
  ProductReferencesModule,
  PromotionsModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConverterService,
  CxNumericPipe,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  ProductReferenceService,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  WindowRef,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  Subject,
  catchError,
  combineLatest,
  concat,
  distinctUntilChanged,
  filter,
  first,
  map,
  mergeMap,
  of,
  shareReplay,
  tap
} from "./chunk-R6FETK65.js";
import {
  Observable,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/epd-visualization/fesm2022/spartacus-epd-visualization-core.mjs
var NODES_RESPONSE_NORMALIZER = new InjectionToken("NodesResponseNormalizer");
var SceneAdapter = class {
};
var SceneConnector = class _SceneConnector {
  constructor(sceneAdapter) {
    this.sceneAdapter = sceneAdapter;
  }
  /**
   * Used for invoking the EPD Visualization API for retrieving scene node information.
   * @param sceneId The scene id to use as the sceneId path parameter.
   * @param nodeIds An array of scene node ids to pass in id query parameters.
   * @param $expand A set of strings to combine to form the $expand query parameter.
   * @param $filter A set of strings to combine to form the $filter query parameter.
   * @param contentType The contentType query parameter.
   * @returns An Observable producing a NodesResponse which contains an array of objects describing scene nodes.
   */
  getNodes(sceneId, nodeIds, $expand, $filter, contentType) {
    return this.sceneAdapter.getNodes(sceneId, nodeIds, $expand, $filter, contentType);
  }
  static {
    this.ɵfac = function SceneConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SceneConnector)(ɵɵinject(SceneAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SceneConnector,
      factory: _SceneConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SceneConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SceneAdapter
  }], null);
})();
var LOOKUP_VISUALIZATIONS_RESPONSE_NORMALIZER = new InjectionToken("LookupVisualizationsResponseNormalizer");
var VisualizationAdapter = class {
};
var VisualizationConnector = class _VisualizationConnector {
  constructor(visualizationAdapter) {
    this.visualizationAdapter = visualizationAdapter;
  }
  /**
   * Used for finding a visualization by Usage ID that has anonymous (unauthenticated) read access enabled.
   * The search is performed in the SAP EPD Visualization service instance associated with the SaaS subscription for the SAP EPD tenant.
   * @param visualizationUsageId The SAP EPD Visualization usage ID value identifying visualizations to match.
   * Only visualizations that have the specified usage ID value will be returned.
   * @param folderUsageId The SAP EPD Visualization usage ID identifying folders to search for visualizations.
   * Only folders that are tagged with the specified usage ID value that have anonymous access enabled will be searched.
   * @returns An Observable producing a LookupVisualizationsResponse which contains an array of objects describing matched visualizations.
   */
  lookupVisualization(visualizationUsageId, folderUsageId) {
    return this.visualizationAdapter.lookupVisualization(visualizationUsageId, folderUsageId);
  }
  static {
    this.ɵfac = function VisualizationConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualizationConnector)(ɵɵinject(VisualizationAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualizationConnector,
      factory: _VisualizationConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualizationConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: VisualizationAdapter
  }], null);
})();
var SceneNodeToProductLookupService = class _SceneNodeToProductLookupService {
  constructor(epdVisualizationConfig, sceneConnector) {
    this.epdVisualizationConfig = epdVisualizationConfig;
    this.sceneConnector = sceneConnector;
    this.productCodesByNodeIdMap$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    this.nodeIdsByProductCodeMap$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const usageIdConfig = epdVisualization.usageIds;
    this.productUsageId = usageIdConfig.productUsageId;
  }
  /**
   * Called to populate the maps with the data for the given scene.
   * This can be done before the scene has been loaded since this just involves a storage service API call
   * @param sceneId The scene id of the loaded scene.
   */
  populateMapsForScene(sceneId) {
    this.getNodeIdProductCodesForScene(sceneId).pipe(first()).subscribe((nodeIdProductCodes) => {
      this.productCodesByNodeIdMap$.next(this.getProductCodesByNodeIdMap(nodeIdProductCodes));
      this.nodeIdsByProductCodeMap$.next(this.getNodeIdsByProductCodeMap(nodeIdProductCodes));
    });
  }
  getNodeIdProductCodesForScene(sceneId) {
    return this.sceneConnector.getNodes(
      sceneId,
      void 0,
      ["hotspot", `usageId.'${this.productUsageId.name}'`],
      void 0,
      // add $filter when usageId filtering available in backend
      "*"
    ).pipe(map((data) => {
      return data.nodes.filter((node) => node.usageIds && node.usageIds.filter((u) => u.name === this.productUsageId.name).length > 0).map((node) => {
        return {
          nodeId: node.sid,
          productCodes: node.usageIds.filter((u) => u.name === this.productUsageId.name).map((u) => u.keys[0].value)
        };
      });
    }));
  }
  getProductCodesByNodeIdMap(nodeIdProductCodes) {
    return nodeIdProductCodes.reduce((productCodeByNodeIdMap, nodeIdProductCodeTuple) => {
      productCodeByNodeIdMap.set(nodeIdProductCodeTuple.nodeId, nodeIdProductCodeTuple.productCodes);
      return productCodeByNodeIdMap;
    }, /* @__PURE__ */ new Map());
  }
  getNodeIdsByProductCodeMap(nodeIdProductCodes) {
    return nodeIdProductCodes.reduce((nodeIdByProductCodeMap, nodeIdProductCodeTuple) => {
      nodeIdProductCodeTuple.productCodes.forEach((productCode) => {
        const nodeIds = nodeIdByProductCodeMap.get(productCode);
        if (nodeIds !== void 0) {
          nodeIds.push(nodeIdProductCodeTuple.nodeId);
        } else {
          nodeIdByProductCodeMap.set(productCode, [nodeIdProductCodeTuple.nodeId]);
        }
      });
      return nodeIdByProductCodeMap;
    }, /* @__PURE__ */ new Map());
  }
  /**
   * Get distinct values while retaining ordering.
   */
  distinct(values) {
    const uniqueArray = [];
    const valueSet = /* @__PURE__ */ new Set();
    values.forEach((value) => {
      if (!valueSet.has(value)) {
        valueSet.add(value);
        uniqueArray.push(value);
      }
    });
    return uniqueArray;
  }
  _lookupProductCodes(productCodesByNodeIdMap, nodeIds) {
    return this.distinct(nodeIds.flatMap((nodeId) => productCodesByNodeIdMap.get(nodeId) || []));
  }
  /**
   * Returns an Observable producing an array of product codes corresponding to the specified scene node ids in the currently loaded scene.
   * @param nodeIds The scene node ids.
   * @returns An Observable producing an array of product codes corresponding to the specified scene node ids in the currently loaded scene.
   */
  lookupProductCodes(nodeIds) {
    return this.productCodesByNodeIdMap$.pipe(first(), map((productCodesByNodeIdMap) => this._lookupProductCodes(productCodesByNodeIdMap, nodeIds)));
  }
  /**
   * Returns an array of product codes corresponding to the specified scene node ids in the currently loaded scene.
   * Returns an empty array if the map of product codes by node id has not yet been populated.
   * For cases where the code must execute synchronously.
   * @param nodeIds The scene node ids.
   * @returns An array of product codes corresponding to the specified scene node ids in the currently loaded scene.
   */
  syncLookupProductCodes(nodeIds) {
    return this._lookupProductCodes(this.productCodesByNodeIdMap$.getValue(), nodeIds);
  }
  _lookupNodeIds(nodeIdsByProductCodeMap, productCodes) {
    return this.distinct(productCodes.flatMap((productCode) => nodeIdsByProductCodeMap.get(productCode) || []));
  }
  /**
   * Returns an Observable producing an array of scene node ids corresponding to the specified product codes in the currently loaded scene.
   * @param productCodes The product codes.
   * @returns An Observable producing an array of scene node ids corresponding to the specified product codes in the currently loaded scene.
   */
  lookupNodeIds(productCodes) {
    return this.nodeIdsByProductCodeMap$.pipe(map((nodeIdsByProductCodeMap) => this._lookupNodeIds(nodeIdsByProductCodeMap, productCodes)));
  }
  /**
   * Returns an array of scene node ids corresponding to the specified product codes in the currently loaded scene.
   * Returns an empty array if the map of node ids by product code has not yet been populated.
   * For cases where the code must execute synchronously.
   * @param productCodes The product codes.
   * @returns An array of scene node ids corresponding to the specified product codes in the currently loaded scene.
   */
  syncLookupNodeIds(productCodes) {
    return this._lookupNodeIds(this.nodeIdsByProductCodeMap$.getValue(), productCodes);
  }
  static {
    this.ɵfac = function SceneNodeToProductLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SceneNodeToProductLookupService)(ɵɵinject(EpdVisualizationConfig), ɵɵinject(SceneConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SceneNodeToProductLookupService,
      factory: _SceneNodeToProductLookupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SceneNodeToProductLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EpdVisualizationConfig
  }, {
    type: SceneConnector
  }], null);
})();
var VisualizationLookupService = class _VisualizationLookupService {
  constructor(epdVisualizationConfig, visualizationConnector) {
    this.epdVisualizationConfig = epdVisualizationConfig;
    this.visualizationConnector = visualizationConnector;
  }
  /**
   * Finds visualizations by usage id containing product code values.
   * The search space is limited to folders with a configured usage id value.
   * @param productCode The product code value to search for.
   * @returns An Observable producing an VisualizationInfo array containing the set of matching visualizations.
   */
  findMatchingVisualizations(productCode) {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const usageIdConfig = epdVisualization.usageIds;
    const productUsageId = usageIdConfig.productUsageId;
    const folderUsageId = usageIdConfig.folderUsageId;
    const usage = {
      name: productUsageId.name,
      keys: [{
        name: productUsageId.keyName,
        value: productCode
      }]
    };
    return this.visualizationConnector.lookupVisualization(usage, folderUsageId).pipe(map((data) => data.visualizations.filter((item) => item.contentType === ContentType.Model3D || item.contentType === ContentType.Drawing2D)));
  }
  static {
    this.ɵfac = function VisualizationLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualizationLookupService)(ɵɵinject(EpdVisualizationConfig), ɵɵinject(VisualizationConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualizationLookupService,
      factory: _VisualizationLookupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualizationLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EpdVisualizationConfig
  }, {
    type: VisualizationConnector
  }], null);
})();
var EpdVisualizationCoreModule = class _EpdVisualizationCoreModule {
  static {
    this.ɵfac = function EpdVisualizationCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EpdVisualizationCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [SceneConnector, VisualizationConnector, SceneNodeToProductLookupService, VisualizationLookupService]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationCoreModule, [{
    type: NgModule,
    args: [{
      providers: [SceneConnector, VisualizationConnector, SceneNodeToProductLookupService, VisualizationLookupService]
    }]
  }], null, null);
})();

// node_modules/@spartacus/epd-visualization/fesm2022/spartacus-epd-visualization-components.mjs
var _c0 = ["bar"];
var _c1 = ["handle"];
function VisualViewerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "span", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "cx-epd-visualization-viewer-toolbar-button", 8);
    ɵɵpipe(10, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.activateHomeView());
    });
    ɵɵelementEnd();
    ɵɵelementStart(11, "cx-epd-visualization-viewer-toolbar-button", 9);
    ɵɵpipe(12, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigationMode = ctx_r1.NavigationMode.Turntable);
    });
    ɵɵelementEnd();
    ɵɵelementStart(13, "cx-epd-visualization-viewer-toolbar-button", 10);
    ɵɵpipe(14, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigationMode = ctx_r1.NavigationMode.Pan);
    });
    ɵɵelementEnd();
    ɵɵelementStart(15, "cx-epd-visualization-viewer-toolbar-button", 11);
    ɵɵpipe(16, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_15_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigationMode = ctx_r1.NavigationMode.Zoom);
    });
    ɵɵelementEnd();
    ɵɵelementStart(17, "cx-epd-visualization-viewer-toolbar-button", 12);
    ɵɵpipe(18, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_17_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.isolateModeEnabled = !ctx_r1.isolateModeEnabled);
    });
    ɵɵelementEnd();
    ɵɵelementStart(19, "cx-epd-visualization-viewer-toolbar-button", 13);
    ɵɵpipe(20, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_19_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.animationPlaying ? ctx_r1.pauseAnimation() : ctx_r1.playAnimation());
    });
    ɵɵelementEnd();
    ɵɵelementStart(21, "cx-epd-visualization-viewer-toolbar-button", 14);
    ɵɵpipe(22, "cxTranslate");
    ɵɵlistener("click", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_viewer_toolbar_button_click_21_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.showAllHotspotsEnabled = !ctx_r1.showAllHotspotsEnabled);
    });
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 15)(24, "cx-epd-visualization-animation-slider", 16);
    ɵɵtwoWayListener("valueChange", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_animation_slider_valueChange_24_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.animationPosition, $event) || (ctx_r1.animationPosition = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.enter", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_animation_slider_keydown_enter_24_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.animationPlaying ? ctx_r1.pauseAnimation() : ctx_r1.playAnimation();
      return ɵɵresetView($event.preventDefault());
    })("keydown.space", function VisualViewerComponent_ng_container_0_Template_cx_epd_visualization_animation_slider_keydown_space_24_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.animationPlaying ? ctx_r1.pauseAnimation() : ctx_r1.playAnimation();
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵelementEnd()()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("hidden", !ctx_r1.viewportReady);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 25, ctx_r1.is2D ? "epdVisualization.visualViewer.contentType.drawing2D" : "epdVisualization.visualViewer.contentType.model3D"));
    ɵɵadvance(3);
    ɵɵproperty("hidden", !ctx_r1.viewportReady);
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(10, 27, "epdVisualization.visualViewer.toolbar.homeButton.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(12, 29, "epdVisualization.visualViewer.toolbar.rotateButton.label"));
    ɵɵproperty("hidden", ctx_r1.is2D)("checked", ctx_r1.navigationMode === ctx_r1.NavigationMode.Turntable);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(14, 31, "epdVisualization.visualViewer.toolbar.panButton.label"));
    ɵɵproperty("checked", ctx_r1.navigationMode === ctx_r1.NavigationMode.Pan);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(16, 33, "epdVisualization.visualViewer.toolbar.zoomButton.label"));
    ɵɵproperty("checked", ctx_r1.navigationMode === ctx_r1.NavigationMode.Zoom);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(18, 35, "epdVisualization.visualViewer.toolbar.isolateButton.label"));
    ɵɵproperty("hidden", ctx_r1.is2D)("disabled", !ctx_r1.isolateModeEnabled && (ctx_r1.selectedProductCodes == null ? null : ctx_r1.selectedProductCodes.length) === 0)("checked", ctx_r1.isolateModeEnabled);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("iconClass", ctx_r1.animationPlaying ? "fa-pause" : "fa-play");
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(20, 37, ctx_r1.animationPlaying ? "epdVisualization.visualViewer.toolbar.pauseButton.label" : "epdVisualization.visualViewer.toolbar.playButton.label"));
    ɵɵproperty("hidden", ctx_r1.is2D || ctx_r1.animationTotalDuration <= 0)("disabled", ctx_r1.isolateModeEnabled);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("text", ɵɵpipeBind1(22, 39, ctx_r1.showAllHotspotsEnabled ? "epdVisualization.visualViewer.toolbar.hotspotsButton.hide" : "epdVisualization.visualViewer.toolbar.hotspotsButton.show"));
    ɵɵproperty("checked", ctx_r1.showAllHotspotsEnabled)("hidden", !ctx_r1.is2D);
    ɵɵadvance(2);
    ɵɵproperty("hidden", ctx_r1.is2D || ctx_r1.animationTotalDuration <= 0);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isolateModeEnabled);
    ɵɵtwoWayProperty("value", ctx_r1.animationPosition);
  }
}
function VisualViewerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function CompactAddToCartComponent_form_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 3);
    ɵɵpipe(1, "cxTranslate");
    ɵɵelement(2, "cx-icon", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.quantity <= 0 || ctx_r1.quantity > ctx_r1.maxQuantity);
    ɵɵattribute("title", ɵɵpipeBind1(1, 2, "addToCart.addToCart"));
  }
}
function CompactAddToCartComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("submit", function CompactAddToCartComponent_form_0_Template_form_submit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addToCart());
    });
    ɵɵtemplate(1, CompactAddToCartComponent_form_0_button_1_Template, 3, 4, "button", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.addToCartForm);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasStock);
  }
}
var _c2 = (a0, a1) => ({
  item: a0,
  active: a1
});
function PagedListComponent_ng_container_0_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function PagedListComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.ngIf;
    const i_r3 = ɵɵnextContext(3).index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("active", i_r3 === ctx_r0.activeSlideStartIndex);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c2, data_r2, i_r3 === ctx_r0.activeSlideStartIndex));
  }
}
function PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_div_1_Template, 2, 7, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4);
  }
}
function PagedListComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_ng_container_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵpipe(2, "slice");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext().index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("active", i_r3 === ctx_r0.activeSlideStartIndex);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 3, ctx_r0.items, i_r3, i_r3 + ctx_r0.itemsPerSlide));
  }
}
function PagedListComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_ng_container_5_div_1_Template, 3, 7, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r3 % ctx_r0.itemsPerSlide === 0);
  }
}
function PagedListComponent_ng_container_0_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function PagedListComponent_ng_container_0_div_6_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.setActiveSlideStartIndex(ctx_r0.activeSlideStartIndex - ctx_r0.itemsPerSlide));
    });
    ɵɵelement(1, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r0.activeSlideStartIndex === 0);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.previousIcon);
  }
}
function PagedListComponent_ng_container_0_div_6_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function PagedListComponent_ng_container_0_div_6_ng_container_2_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const i_r7 = ɵɵnextContext().index;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.setActiveSlideStartIndex(i_r7));
    });
    ɵɵelement(1, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r7 = ɵɵnextContext().index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("disabled", i_r7 === ctx_r0.activeSlideStartIndex);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.indicatorIcon);
  }
}
function PagedListComponent_ng_container_0_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_div_6_ng_container_2_button_1_Template, 2, 2, "button", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r7 % ctx_r0.itemsPerSlide === 0);
  }
}
function PagedListComponent_ng_container_0_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function PagedListComponent_ng_container_0_div_6_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.setActiveSlideStartIndex(ctx_r0.activeSlideStartIndex + ctx_r0.itemsPerSlide));
    });
    ɵɵelement(1, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r0.activeSlideStartIndex > ctx_r0.items.length - ctx_r0.itemsPerSlide - 1);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.nextIcon);
  }
}
function PagedListComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_div_6_button_1_Template, 2, 2, "button", 12)(2, PagedListComponent_ng_container_0_div_6_ng_container_2_Template, 2, 1, "ng-container", 4)(3, PagedListComponent_ng_container_0_div_6_button_3_Template, 2, 2, "button", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemsPerSlide < ctx_r0.items.length);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemsPerSlide < ctx_r0.items.length);
  }
}
function PagedListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PagedListComponent_ng_container_0_h3_1_Template, 2, 1, "h3", 0)(2, PagedListComponent_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 1);
    ɵɵelementStart(3, "div", 2)(4, "div", 3);
    ɵɵtemplate(5, PagedListComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd()();
    ɵɵtemplate(6, PagedListComponent_ng_container_0_div_6_Template, 4, 3, "div", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.title);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r0.items);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.hideIndicators && ctx_r0.itemsPerSlide < ctx_r0.items.length);
  }
}
var _c3 = (a0) => ({
  cxRoute: "product",
  params: a0
});
function VisualPickingProductListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "epdVisualization.visualPicking.visualPickingProductList.description"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "epdVisualization.visualPicking.visualPickingProductList.itemPrice"), " ");
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22)(1, "a", 23);
    ɵɵpipe(2, "cxUrl");
    ɵɵlistener("keydown.enter", function VisualPickingProductListComponent_ng_template_4_div_0_div_6_Template_a_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r5);
      return ɵɵresetView($event.currentTarget.click());
    });
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).item;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(4, _c3, item_r3.product)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r3.product.name);
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).item;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "epdVisualization.visualPicking.visualPickingProductList.id"), " ", item_r3.product.code, " ");
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).item;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.product.price == null ? null : item_r3.product.price.formattedValue, " ");
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 26);
    ɵɵlistener("click", function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_11_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r6);
      const addToCartComponent_r7 = ɵɵreference(3);
      addToCartComponent_r7.addToCart();
      return ɵɵresetView($event.preventDefault());
    })("keydown.enter", function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_11_Template_div_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r6);
      const addToCartComponent_r7 = ɵɵreference(3);
      addToCartComponent_r7.addToCart();
      return ɵɵresetView($event.preventDefault());
    })("keydown.space", function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_11_Template_div_keydown_space_1_listener($event) {
      ɵɵrestoreView(_r6);
      const addToCartComponent_r7 = ɵɵreference(3);
      addToCartComponent_r7.addToCart();
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵelement(2, "cx-epd-visualization-compact-add-to-cart", 27, 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).item;
    ɵɵadvance(2);
    ɵɵproperty("showQuantity", false)("product", item_r3.product);
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 3);
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 28);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "epdVisualization.visualPicking.visualPickingProductList.outOfStock"), " ");
  }
}
function VisualPickingProductListComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function VisualPickingProductListComponent_ng_template_4_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().item;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.selectedProductCodes = [item_r3.product.code]);
    })("keydown.enter", function VisualPickingProductListComponent_ng_template_4_div_0_Template_div_keydown_enter_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().item;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.selectedProductCodes = [item_r3.product.code]);
    })("keydown.space", function VisualPickingProductListComponent_ng_template_4_div_0_Template_div_keydown_space_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().item;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.selectedProductCodes = [item_r3.product.code]);
    });
    ɵɵelementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    ɵɵelement(4, "cx-media", 14);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "div", 15);
    ɵɵtemplate(6, VisualPickingProductListComponent_ng_template_4_div_0_div_6_Template, 4, 6, "div", 16)(7, VisualPickingProductListComponent_ng_template_4_div_0_div_7_Template, 3, 4, "div", 17);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 18);
    ɵɵtemplate(9, VisualPickingProductListComponent_ng_template_4_div_0_div_9_Template, 2, 1, "div", 19);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 20);
    ɵɵtemplate(11, VisualPickingProductListComponent_ng_template_4_div_0_ng_container_11_Template, 4, 2, "ng-container", 21)(12, VisualPickingProductListComponent_ng_template_4_div_0_ng_container_12_Template, 2, 0, "ng-container", 21)(13, VisualPickingProductListComponent_ng_template_4_div_0_ng_container_13_Template, 4, 3, "ng-container", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().item;
    ɵɵclassProp("selected", item_r3.selected);
    ɵɵadvance(3);
    ɵɵclassProp("selected", item_r3.selected);
    ɵɵadvance();
    ɵɵproperty("container", item_r3.product.images == null ? null : item_r3.product.images.PRIMARY);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r3.product.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.product.code);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r3.product.price);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r3.product.price !== void 0 && item_r3.product.stock.stockLevelStatus !== "outOfStock");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.product.price === void 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.product.price !== void 0 && item_r3.product.stock.stockLevelStatus === "outOfStock");
  }
}
function VisualPickingProductListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, VisualPickingProductListComponent_ng_template_4_div_0_Template, 14, 11, "div", 9);
  }
  if (rf & 2) {
    const active_r8 = ctx.active;
    ɵɵproperty("ngIf", active_r8);
  }
}
var VisualViewerAnimationSliderService = class _VisualViewerAnimationSliderService {
  constructor(elementRef, windowRef, renderer, changeDetectorRef) {
    this.elementRef = elementRef;
    this.windowRef = windowRef;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this._initialized = false;
    this.initializedChange = new EventEmitter();
    this._value = 0;
    this.valueChange = new EventEmitter();
    this._disabled = false;
    this._resizeObserver = void 0;
    this.eventListenerUtils = new EventListenerUtils();
    this._touchIdentifier = void 0;
    this.sizeChange = new EventEmitter();
    this.stepDelta = 1 / 50;
    this.pageDelta = 1 / 10;
    this.eventListenerUtils.initialize(this.renderer);
  }
  initialize() {
    this.updateEventBindings();
    this.setupResizeObserver();
    this.setInitialized();
  }
  setInitialized() {
    this._initialized = true;
    this.initializedChange.emit(true);
    this.initializedChange.complete();
  }
  get initialized() {
    return this._initialized;
  }
  /**
   * Slider value. Value is in the range [0-1].
   */
  set value(value) {
    value = this.clampToRange(value);
    if (this._value === value) {
      return;
    }
    this._value = value;
    this.valueChange.emit(this.value);
  }
  get value() {
    return this._value;
  }
  set disabled(disabled) {
    if (this._disabled === disabled) {
      return;
    }
    this._disabled = disabled;
    this.updateEventBindings();
  }
  get disabled() {
    return this._disabled;
  }
  set hidden(hidden) {
    if (this._hidden === hidden) {
      return;
    }
    this._hidden = hidden;
    this.changeDetectorRef.detectChanges();
  }
  get hidden() {
    return this._hidden;
  }
  get position() {
    return this.valueToPosition(this.value);
  }
  get rightToLeft() {
    return this.windowRef.document.documentElement.dir === "rtl";
  }
  set barElement(barElement) {
    this._barElement = barElement;
  }
  get barElement() {
    return this._barElement;
  }
  set handleElement(handleElement) {
    this._handleElement = handleElement;
  }
  get handleElement() {
    return this._handleElement;
  }
  set resizeObserver(resizeObserver) {
    this._resizeObserver = resizeObserver;
  }
  get resizeObserver() {
    return this._resizeObserver;
  }
  set touchIdentifier(touchIdentifier) {
    this._touchIdentifier = touchIdentifier;
  }
  get touchIdentifier() {
    return this._touchIdentifier;
  }
  getClientWidth(elementRef) {
    if (!elementRef || !elementRef.nativeElement) {
      return void 0;
    }
    const clientRect = this.getClientRect(elementRef);
    return clientRect.right - clientRect.left;
  }
  getClientRect(elementRef) {
    return elementRef.nativeElement.getBoundingClientRect();
  }
  resizeObserverSupported() {
    return window.ResizeObserver !== void 0;
  }
  setupResizeObserver() {
    if (this.resizeObserverSupported()) {
      this.resizeObserver = new ResizeObserver(this.onResize.bind(this));
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  }
  onResize() {
    this.changeDetectorRef.detectChanges();
  }
  updateEventBindings() {
    if (this.disabled) {
      this.eventListenerUtils.detachAllEventListeners(document);
      this.eventListenerUtils.detachAllEventListeners(this.barElement.nativeElement);
      this.eventListenerUtils.detachAllEventListeners(this.handleElement.nativeElement);
    } else {
      this.eventListenerUtils.attachEventListener(this.handleElement.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.eventListenerUtils.attachEventListener(this.barElement.nativeElement, "mousedown", this.onMouseDownOnBar.bind(this));
      this.eventListenerUtils.attachEventListener(this.handleElement.nativeElement, "touchstart", this.onTouchStart.bind(this));
      this.eventListenerUtils.attachEventListener(this.barElement.nativeElement, "touchstart", this.onTouchStartOnBar.bind(this));
      this.eventListenerUtils.attachEventListener(this.handleElement.nativeElement, "focus", this.onHandleFocus.bind(this));
    }
  }
  get handleWidth() {
    return this.getClientWidth(this.handleElement) ?? 0;
  }
  get barWidth() {
    return this.getClientWidth(this.barElement) ?? 0;
  }
  get handleMaxPosition() {
    return this.barWidth - this.handleWidth;
  }
  valueToPosition(value) {
    let position = this.clampToRange(value);
    if (this.rightToLeft) {
      position = 1 - position;
    }
    return position * this.handleMaxPosition;
  }
  positionToValue(position) {
    let value = position / this.handleMaxPosition;
    if (this.rightToLeft) {
      value = 1 - value;
    }
    return value;
  }
  findTouch(touchList, touchIdentifier) {
    for (let i = 0; i < touchList.length; i++) {
      const touch = touchList.item(i);
      if (touch.identifier === touchIdentifier) {
        return touch;
      }
    }
    return void 0;
  }
  get sliderClientPosition() {
    return this.getClientRect(this.elementRef).left;
  }
  onTouchStart(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.touchIdentifier !== void 0) {
      return;
    }
    this.eventListenerUtils.detachEventListeners(document, "touchmove");
    this.eventListenerUtils.attachEventListener(document, "touchmove", this.onTouchMove.bind(this));
    this.eventListenerUtils.detachEventListeners(document, "touchend");
    this.eventListenerUtils.attachEventListener(document, "touchend", this.onTouchEnd.bind(this));
    this.touchIdentifier = event.changedTouches[0].identifier;
  }
  onTouchStartOnBar(event) {
    this.onTouchStart(event);
    this.onTouchMove(event);
  }
  onMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
    this.eventListenerUtils.detachEventListeners(document, "mousemove");
    this.eventListenerUtils.attachEventListener(document, "mousemove", this.onMouseMove.bind(this));
    this.eventListenerUtils.detachEventListeners(document, "mouseup");
    this.eventListenerUtils.attachEventListener(document, "mouseup", this.onMouseUp.bind(this));
  }
  onMouseDownOnBar(event) {
    this.onMouseDown(event);
    this.onMouseMove(event);
  }
  onMouseMove(event) {
    const position = event.clientX - this.sliderClientPosition - this.handleWidth / 2;
    this.applyValue(this.positionToValue(position));
  }
  onMouseUp(_event) {
    this.eventListenerUtils.detachEventListeners(document, "mousemove");
    this.eventListenerUtils.detachEventListeners(document, "mouseup");
  }
  onTouchMove(event) {
    const touchInitiatedOnSlider = this.findTouch(event.changedTouches, this.touchIdentifier);
    if (touchInitiatedOnSlider === void 0) {
      return;
    }
    const touch = this.findTouch(event.touches, this.touchIdentifier);
    const position = touch.clientX - this.sliderClientPosition - this.handleWidth / 2;
    this.applyValue(this.positionToValue(position));
  }
  onTouchEnd(event) {
    const touchInitiatedOnSlider = this.findTouch(event.changedTouches, this.touchIdentifier);
    if (touchInitiatedOnSlider === void 0) {
      return;
    }
    this.touchIdentifier = void 0;
    this.eventListenerUtils.detachEventListeners(document, "touchmove");
    this.eventListenerUtils.detachEventListeners(document, "touchend");
  }
  onHandleFocus() {
    const nativeElement = this.handleElement.nativeElement;
    this.eventListenerUtils.attachEventListener(nativeElement, "blur", this.onHandleBlur.bind(this));
    this.eventListenerUtils.attachEventListener(nativeElement, "keydown", this.onKeyboardEvent.bind(this));
  }
  onHandleBlur() {
    const nativeElement = this.handleElement.nativeElement;
    this.eventListenerUtils.detachEventListeners(nativeElement, "blur");
    this.eventListenerUtils.detachEventListeners(nativeElement, "keydown");
    this.eventListenerUtils.detachEventListeners(nativeElement, "keyup");
  }
  onKeyboardEvent(event) {
    const keyHandler = this.getKeyHandler(event.code, this.rightToLeft);
    if (keyHandler === void 0) {
      return;
    }
    event.preventDefault();
    this.applyValue(keyHandler(this.value));
  }
  getKeyHandler(keyCode, rightToLeft) {
    const increaseStep = (currentValue) => currentValue + this.stepDelta;
    const decreaseStep = (currentValue) => currentValue - this.stepDelta;
    const increasePage = (currentValue) => currentValue + this.pageDelta;
    const decreasePage = (currentValue) => currentValue - this.pageDelta;
    const stepLeft = rightToLeft ? increaseStep : decreaseStep;
    const stepRight = rightToLeft ? decreaseStep : increaseStep;
    const home = () => 0;
    const end = () => 1;
    switch (keyCode) {
      case "ArrowUp":
        return increaseStep;
      case "ArrowDown":
        return decreaseStep;
      case "ArrowLeft":
        return stepLeft;
      case "ArrowRight":
        return stepRight;
      case "PageUp":
        return increasePage;
      case "PageDown":
        return decreasePage;
      case "Home":
        return home;
      case "End":
        return end;
      default:
        return void 0;
    }
  }
  applyValue(value) {
    value = this.clampToRange(value);
    if (this.value !== value) {
      this.value = value;
      this.valueChange.emit(this.value);
    }
  }
  clampToRange(value) {
    return Math.min(Math.max(value, 0), 1);
  }
  static {
    this.ɵfac = function VisualViewerAnimationSliderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerAnimationSliderService)(ɵɵinject(ElementRef), ɵɵinject(WindowRef), ɵɵinject(Renderer2), ɵɵinject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualViewerAnimationSliderService,
      factory: _VisualViewerAnimationSliderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerAnimationSliderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: WindowRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var VisualViewerAnimationSliderComponent = class _VisualViewerAnimationSliderComponent {
  constructor(visualViewerAnimationSliderService) {
    this.visualViewerAnimationSliderService = visualViewerAnimationSliderService;
    this.valueChange = this.visualViewerAnimationSliderService.valueChange;
    this.initializedChange = this.visualViewerAnimationSliderService.initializedChange;
  }
  ngAfterViewInit() {
    this.visualViewerAnimationSliderService.initialize();
  }
  set hidden(hidden) {
    this.visualViewerAnimationSliderService.hidden = hidden;
  }
  get hidden() {
    return this.visualViewerAnimationSliderService.hidden;
  }
  set value(value) {
    this.visualViewerAnimationSliderService.value = value;
  }
  get value() {
    return this.visualViewerAnimationSliderService.value;
  }
  get position() {
    return this.visualViewerAnimationSliderService.position;
  }
  set disabled(disabled) {
    this.visualViewerAnimationSliderService.disabled = disabled;
  }
  get disabled() {
    return this.visualViewerAnimationSliderService.disabled;
  }
  get initialized() {
    return this.visualViewerAnimationSliderService.initialized;
  }
  set barElement(barElement) {
    this.visualViewerAnimationSliderService.barElement = barElement;
  }
  set handleElement(handleElement) {
    this.visualViewerAnimationSliderService.handleElement = handleElement;
  }
  static {
    this.ɵfac = function VisualViewerAnimationSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerAnimationSliderComponent)(ɵɵdirectiveInject(VisualViewerAnimationSliderService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualViewerAnimationSliderComponent,
      selectors: [["cx-epd-visualization-animation-slider"]],
      viewQuery: function VisualViewerAnimationSliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.barElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handleElement = _t.first);
        }
      },
      inputs: {
        hidden: "hidden",
        value: "value",
        disabled: "disabled"
      },
      outputs: {
        valueChange: "valueChange",
        initializedChange: "initializedChange"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([VisualViewerAnimationSliderService])],
      decls: 11,
      vars: 20,
      consts: [["bar", ""], ["handle", ""], [1, "cx-epd-visualization-animation-slider"], [1, "cx-epd-visualization-animation-slider-wrapper"], ["cxVisualViewerAnimationSliderElement", "", 1, "cx-epd-visualization-animation-slider-span", "cx-epd-visualization-animation-slider-bar-wrapper"], [1, "cx-epd-visualization-animation-slider-span", "cx-epd-visualization-animation-slider-bar"], ["cxVisualViewerAnimationSliderHandle", "", 1, "cx-epd-visualization-animation-slider-span", "cx-epd-visualization-animation-slider-pointer"]],
      template: function VisualViewerAnimationSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "span", 4, 0);
          ɵɵelement(4, "span", 5);
          ɵɵelementEnd();
          ɵɵelement(5, "span", 6, 1);
          ɵɵpipe(7, "cxNumeric");
          ɵɵpipe(8, "cxTranslate");
          ɵɵpipe(9, "cxTranslate");
          ɵɵpipe(10, "cxNumeric");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.disabled ? true : void 0);
          ɵɵadvance(5);
          ɵɵstyleProp("left", ɵɵpipeBind2(7, 10, ctx.position, "1.0-0") + "px");
          ɵɵattribute("role", ɵɵpipeBind1(8, 13, "epdVisualization.visualViewer.toolbar.visualViewerAnimationSlider.role"))("aria-label", ɵɵpipeBind1(9, 15, "epdVisualization.visualViewer.toolbar.visualViewerAnimationSlider.label"))("aria-valuenow", ɵɵpipeBind2(10, 17, ctx.value * 100, "1.0-0"))("aria-valuemin", "0")("aria-valuemax", "100")("tabindex", ctx.disabled ? null : 0);
        }
      },
      dependencies: [TranslatePipe, CxNumericPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerAnimationSliderComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-animation-slider",
      providers: [VisualViewerAnimationSliderService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-epd-visualization-animation-slider"
  [class.disabled]="disabled ? true : undefined"
>
  <div class="cx-epd-visualization-animation-slider-wrapper">
    <span
      cxVisualViewerAnimationSliderElement
      #bar
      class="cx-epd-visualization-animation-slider-span cx-epd-visualization-animation-slider-bar-wrapper"
    >
      <span
        class="cx-epd-visualization-animation-slider-span cx-epd-visualization-animation-slider-bar"
      ></span>
    </span>

    <span
      cxVisualViewerAnimationSliderHandle
      #handle
      class="cx-epd-visualization-animation-slider-span cx-epd-visualization-animation-slider-pointer"
      [style.left]="(position | cxNumeric: '1.0-0') + 'px'"
      [attr.role]="
        'epdVisualization.visualViewer.toolbar.visualViewerAnimationSlider.role'
          | cxTranslate
      "
      [attr.aria-label]="
        'epdVisualization.visualViewer.toolbar.visualViewerAnimationSlider.label'
          | cxTranslate
      "
      [attr.aria-valuenow]="value * 100 | cxNumeric: '1.0-0'"
      [attr.aria-valuemin]="'0'"
      [attr.aria-valuemax]="'100'"
      [attr.tabindex]="disabled ? null : 0"
    ></span>
  </div>
</div>
`
    }]
  }], () => [{
    type: VisualViewerAnimationSliderService
  }], {
    hidden: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    disabled: [{
      type: Input
    }],
    initializedChange: [{
      type: Output
    }],
    barElement: [{
      type: ViewChild,
      args: ["bar"]
    }],
    handleElement: [{
      type: ViewChild,
      args: ["handle"]
    }]
  });
})();
var VisualViewerAnimationSliderModule = class _VisualViewerAnimationSliderModule {
  static {
    this.ɵfac = function VisualViewerAnimationSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerAnimationSliderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualViewerAnimationSliderModule,
      declarations: [VisualViewerAnimationSliderComponent],
      imports: [CommonModule, I18nModule],
      exports: [VisualViewerAnimationSliderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerAnimationSliderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      declarations: [VisualViewerAnimationSliderComponent],
      exports: [VisualViewerAnimationSliderComponent]
    }]
  }], null, null);
})();
var VisualViewerToolbarButtonComponent = class _VisualViewerToolbarButtonComponent {
  constructor() {
    this.text = "";
    this.disabled = false;
    this.checked = false;
  }
  static {
    this.ɵfac = function VisualViewerToolbarButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerToolbarButtonComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualViewerToolbarButtonComponent,
      selectors: [["cx-epd-visualization-viewer-toolbar-button"]],
      inputs: {
        text: "text",
        iconLibraryClass: "iconLibraryClass",
        iconClass: "iconClass",
        disabled: "disabled",
        checked: "checked"
      },
      standalone: false,
      decls: 5,
      vars: 9,
      consts: [["type", "submit", 1, "btn", "btn-link", 3, "disabled"], [1, "buttonVBox"], [1, "buttonText"]],
      template: function VisualViewerToolbarButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0)(1, "div", 1);
          ɵɵelement(2, "cx-icon");
          ɵɵelementStart(3, "span", 2);
          ɵɵtext(4);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵclassProp("checked", ctx.checked);
          ɵɵproperty("disabled", ctx.disabled);
          ɵɵattribute("aria-checked", ctx.checked);
          ɵɵadvance(2);
          ɵɵclassMapInterpolate2("", ctx.iconLibraryClass, " ", ctx.iconClass, "");
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.text);
        }
      },
      dependencies: [IconComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerToolbarButtonComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-viewer-toolbar-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<button\n  class="btn btn-link"\n  type="submit"\n  [disabled]="disabled"\n  [class.checked]="checked"\n  [attr.aria-checked]="checked"\n>\n  <div class="buttonVBox">\n    <cx-icon class="{{ iconLibraryClass }} {{ iconClass }}"></cx-icon>\n    <span class="buttonText">{{ text }}</span>\n  </div>\n</button>\n'
    }]
  }], null, {
    text: [{
      type: Input
    }],
    iconLibraryClass: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    checked: [{
      type: Input
    }]
  });
})();
var VisualViewerToolbarButtonModule = class _VisualViewerToolbarButtonModule {
  static {
    this.ɵfac = function VisualViewerToolbarButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerToolbarButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualViewerToolbarButtonModule,
      declarations: [VisualViewerToolbarButtonComponent],
      imports: [CommonModule, IconModule],
      exports: [VisualViewerToolbarButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerToolbarButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule],
      declarations: [VisualViewerToolbarButtonComponent],
      exports: [VisualViewerToolbarButtonComponent]
    }]
  }], null, null);
})();
var NavigationMode;
(function(NavigationMode2) {
  NavigationMode2["Turntable"] = "Turntable";
  NavigationMode2["Pan"] = "Pan";
  NavigationMode2["Zoom"] = "Zoom";
})(NavigationMode || (NavigationMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Exclusive"] = "exclusive";
  SelectionMode2["None"] = "none";
  SelectionMode2["Sticky"] = "sticky";
})(SelectionMode || (SelectionMode = {}));
var NodeContentType;
(function(NodeContentType2) {
  NodeContentType2["Annotation"] = "Annotation";
  NodeContentType2["Background"] = "Background";
  NodeContentType2["Hotspot"] = "Hotspot";
  NodeContentType2["Reference"] = "Reference";
  NodeContentType2["Regular"] = "Regular";
  NodeContentType2["Symbol"] = "Symbol";
})(NodeContentType || (NodeContentType = {}));
var SceneLoadState;
(function(SceneLoadState2) {
  SceneLoadState2[SceneLoadState2["NotStarted"] = 0] = "NotStarted";
  SceneLoadState2[SceneLoadState2["Loading"] = 1] = "Loading";
  SceneLoadState2[SceneLoadState2["Loaded"] = 2] = "Loaded";
  SceneLoadState2[SceneLoadState2["Failed"] = 3] = "Failed";
})(SceneLoadState || (SceneLoadState = {}));
var VisualizationLookupResult;
(function(VisualizationLookupResult2) {
  VisualizationLookupResult2["UniqueMatchFound"] = "UniqueMatchFound";
  VisualizationLookupResult2["NoMatchFound"] = "NoMatchFound";
  VisualizationLookupResult2["MultipleMatchesFound"] = "MultipleMatchesFound";
  VisualizationLookupResult2["UnexpectedError"] = "UnexpectedError";
})(VisualizationLookupResult || (VisualizationLookupResult = {}));
var VisualizationLoadStatus;
(function(VisualizationLoadStatus2) {
  VisualizationLoadStatus2["NotStarted"] = "NotStarted";
  VisualizationLoadStatus2["Loading"] = "Loading";
  VisualizationLoadStatus2["Loaded"] = "Loaded";
  VisualizationLoadStatus2["UnexpectedError"] = "UnexpectedError";
})(VisualizationLoadStatus || (VisualizationLoadStatus = {}));
var ZoomTo;
(function(ZoomTo2) {
  ZoomTo2["All"] = "all";
  ZoomTo2["Node"] = "node";
  ZoomTo2["Selected"] = "selected";
  ZoomTo2["ViewBack"] = "view_back";
  ZoomTo2["ViewBottom"] = "view_bottom";
  ZoomTo2["ViewFront"] = "view_front";
  ZoomTo2["ViewLeft"] = "view_left";
  ZoomTo2["ViewRight"] = "view_right";
  ZoomTo2["ViewTop"] = "view_top";
  ZoomTo2["Visible"] = "visible";
})(ZoomTo || (ZoomTo = {}));
var VisualViewerService = class _VisualViewerService {
  constructor(epdVisualizationConfig, _sceneNodeToProductLookupService, visualizationLookupService, elementRef, changeDetectorRef, windowRef) {
    this.epdVisualizationConfig = epdVisualizationConfig;
    this._sceneNodeToProductLookupService = _sceneNodeToProductLookupService;
    this.visualizationLookupService = visualizationLookupService;
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    this.windowRef = windowRef;
    this._selectedNodeIds$ = new BehaviorSubject([]);
    this._sceneLoadInfo$ = new BehaviorSubject({
      sceneLoadState: SceneLoadState.NotStarted
    });
    this.DEFAULT_BACKGROUND_TOP_COLOR = "--cx-color-inverse";
    this.DEFAULT_BACKGROUND_BOTTOM_COLOR = "--cx-color-inverse";
    this.DEFAULT_HOTSPOT_SELECTION_HIGHLIGHT_COLOR = "rgba(255, 0, 0, 0.6)";
    this.DEFAULT_SHOW_ALL_HOTSPOTS_COLOR = "rgba(255, 255, 0, 0.3)";
    this.DEFAULT_OUTLINE_COLOR = "red";
    this.DEFAULT_OUTLINE_WIDTH = 5;
    this.DEFAULT_SELECTION_MODE = SelectionMode.Exclusive;
    this.DEFAULT_SHOW_ALL_HOTSPOTS_ENABLED = false;
    this.DEFAULT_EXCLUDED_OPACITY = 0.2;
    this.DEFAULT_ZOOM_TO_MARGIN = 0.2;
    this.DEFAULT_FLY_TO_DURATION = 1;
    this._flyToDurationInSeconds = this.DEFAULT_FLY_TO_DURATION;
    this._zoomToMargin = this.DEFAULT_ZOOM_TO_MARGIN;
    this.selectedProductCodesChange = new EventEmitter();
    this._excludedOpacity = this.DEFAULT_EXCLUDED_OPACITY;
    this.animationTimeChange = new EventEmitter();
    this._animationPosition = 0;
    this.animationPositionChange = new EventEmitter();
    this._animationPlaying = false;
    this.animationPlayingChange = new EventEmitter();
    this._isolateModeEnabled = false;
    this.isolateModeEnabledChange = new EventEmitter();
    this._viewportReady = false;
    this.viewportReadyChange = new EventEmitter();
    this.contentChangesFinished = new EventEmitter();
    this.contentLoadFinished = new EventEmitter();
    this.visualizationLoadInfoChange = new EventEmitter();
    if (!this.windowRef.isBrowser()) {
      return;
    }
    const ui5BootStrapped$ = this.bootstrapUi5("ui5bootstrap");
    const ui5Initialized$ = ui5BootStrapped$.pipe(mergeMap(this.initializeUi5.bind(this)));
    this.viewportAdded$ = ui5Initialized$.pipe(mergeMap(this.addViewport.bind(this)), shareReplay());
    this.executeWhenSceneLoaded(this.setInitialPropertyValues.bind(this));
  }
  ngOnDestroy() {
    this.selectedNodeIdsSubscription?.unsubscribe();
  }
  /* istanbul ignore next */
  get sceneNodeToProductLookupService() {
    return this._sceneNodeToProductLookupService;
  }
  /* istanbul ignore next */
  set sceneNodeToProductLookupService(value) {
    this._sceneNodeToProductLookupService = value;
  }
  /* istanbul ignore next */
  get scene() {
    return this._scene;
  }
  /* istanbul ignore next */
  set scene(value) {
    this._scene = value;
  }
  /* istanbul ignore next */
  get nodeHierarchy() {
    return this._nodeHierarchy;
  }
  /* istanbul ignore next */
  set nodeHierarchy(value) {
    this._nodeHierarchy = value;
  }
  get contentConnector() {
    return this._contentConnector;
  }
  set contentConnector(value) {
    this._contentConnector = value;
  }
  get viewport() {
    return this._viewport;
  }
  set viewport(value) {
    this._viewport = value;
  }
  get viewStateManager() {
    return this._viewStateManager;
  }
  set viewStateManager(value) {
    this._viewStateManager = value;
  }
  get animationPlayer() {
    return this._animationPlayer;
  }
  set animationPlayer(value) {
    this._animationPlayer = value;
  }
  get viewManager() {
    return this._viewManager;
  }
  set viewManager(value) {
    this._viewManager = value;
  }
  get drawerToolbar() {
    return this._drawerToolbar;
  }
  set drawerToolbar(value) {
    this._drawerToolbar = value;
  }
  /* istanbul ignore next */
  get sceneId() {
    return this._sceneId;
  }
  /* istanbul ignore next */
  set sceneId(value) {
    this._sceneId = value;
  }
  /* istanbul ignore next */
  get contentType() {
    return this._contentType;
  }
  /* istanbul ignore next */
  set contentType(value) {
    this._contentType = value;
  }
  /* istanbul ignore next */
  get initialViewInfo() {
    return this._initialViewInfo;
  }
  /* istanbul ignore next */
  set initialViewInfo(value) {
    this._initialViewInfo = value;
  }
  /* istanbul ignore next */
  get leafNodeRefs() {
    return this._leafNodeRefs;
  }
  /* istanbul ignore next */
  set leafNodeRefs(value) {
    this._leafNodeRefs = value;
  }
  /* istanbul ignore next */
  get viewPriorToIsolateViewInfo() {
    return this._viewPriorToIsolateViewInfo;
  }
  /* istanbul ignore next */
  set viewPriorToIsolateViewInfo(value) {
    this._viewPriorToIsolateViewInfo = value;
  }
  get viewportAdded$() {
    return this._viewportAdded$;
  }
  set viewportAdded$(value) {
    this._viewportAdded$ = value;
  }
  get selectedNodeIds$() {
    return this._selectedNodeIds$;
  }
  set selectedNodeIds$(value) {
    this._selectedNodeIds$ = value;
  }
  get sceneLoadInfo$() {
    return this._sceneLoadInfo$;
  }
  get flyToDurationInSeconds() {
    return this._flyToDurationInSeconds;
  }
  set flyToDurationInSeconds(value) {
    this._flyToDurationInSeconds = value;
  }
  get zoomToMargin() {
    return this._zoomToMargin;
  }
  set zoomToMargin(value) {
    this._zoomToMargin = value;
  }
  /**
   * The top colour of the background gradient.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-background' with the quotes.
   */
  set backgroundTopColor(backgroundTopColor) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._backgroundTopColor === backgroundTopColor) {
      return;
    }
    this._backgroundTopColor = backgroundTopColor;
    this.executeWhenSceneLoaded(() => {
      this.viewport.setBackgroundColorTop(this.getCSSColor(backgroundTopColor));
    });
  }
  get backgroundTopColor() {
    return this._backgroundTopColor;
  }
  /**
   * The bottom colour of the background gradient.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-background' with the quotes.
   */
  set backgroundBottomColor(backgroundBottomColor) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._backgroundBottomColor === backgroundBottomColor) {
      return;
    }
    this._backgroundBottomColor = backgroundBottomColor;
    this.executeWhenSceneLoaded(() => {
      this.viewport.setBackgroundColorBottom(this.getCSSColor(backgroundBottomColor));
    });
  }
  get backgroundBottomColor() {
    return this._backgroundBottomColor;
  }
  /**
   * The colour applied to selected 2D hotspots in 2D content.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set hotspotSelectionColor(hotspotSelectionColor) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._hotspotSelectionColor === hotspotSelectionColor) {
      return;
    }
    this._hotspotSelectionColor = hotspotSelectionColor;
    this.executeWhenSceneLoaded(() => {
      this.viewStateManager.setHighlightColor(this.getCSSColor(hotspotSelectionColor));
    });
  }
  get hotspotSelectionColor() {
    return this._hotspotSelectionColor;
  }
  /**
   * Highlights all hotspots in 2D content that are included in the includedProductCodes property using the colour specified by the showAllHotspotsColor property.
   */
  set showAllHotspotsEnabled(showAllHotspotsEnabled) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._showAllHotspotsEnabled === showAllHotspotsEnabled) {
      return;
    }
    this._showAllHotspotsEnabled = showAllHotspotsEnabled;
    this.executeWhenSceneLoaded(() => {
      this.applyInclusionStyle(this._includedProductCodes);
    });
  }
  get showAllHotspotsEnabled() {
    return this._showAllHotspotsEnabled;
  }
  /**
   * The colour used to highlight hotspots in 2D content when the showAllHotspotsEnabled property has a value of true.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set showAllHotspotsColor(showAllHotspotsColor) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._showAllHotspotsColor === showAllHotspotsColor) {
      return;
    }
    this._showAllHotspotsColor = showAllHotspotsColor;
    this.executeWhenSceneLoaded(() => {
      const cssColor = this.getCSSColor(showAllHotspotsColor);
      this.viewport.setShowAllHotspotsTintColor(cssColor);
    });
  }
  get showAllHotspotsColor() {
    return this._showAllHotspotsColor;
  }
  /**
   * The outline colour used to indicate selected objects in 3D content.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set outlineColor(outlineColor) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._outlineColor === outlineColor) {
      return;
    }
    this._outlineColor = outlineColor;
    this.executeWhenSceneLoaded(() => {
      this.viewStateManager.setOutlineColor(this.getCSSColor(outlineColor));
    });
  }
  get outlineColor() {
    return this._outlineColor;
  }
  /**
   * The width of the outline used to indicate selected objects in 3D content.
   */
  set outlineWidth(outlineWidth) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._outlineWidth === outlineWidth) {
      return;
    }
    this._outlineWidth = outlineWidth;
    this.executeWhenSceneLoaded(() => {
      this.viewStateManager.setOutlineWidth(outlineWidth);
    });
  }
  get outlineWidth() {
    return this._outlineWidth;
  }
  /**
   * The selection mode.
   * None - Selection is disabled.
   * Exclusive - When selecting objects in the viewport, at most one object can be selected at a time. Clicking/tapping to select a new object will deselect any previously selected objects.
   * Sticky - A multiple selection mode in which clicking/tapping on an object that is not part of the current selection will toggle its selection state without modifying the selection state of the currently selected objects.
   */
  set selectionMode(selectionMode) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._selectionMode === selectionMode) {
      return;
    }
    this._selectionMode = selectionMode;
    this.executeWhenSceneLoaded(() => {
      this.viewport.setSelectionMode(selectionMode);
    });
  }
  get selectionMode() {
    return this._selectionMode;
  }
  /**
   * Gets/sets the selection in terms of product codes.
   * Gets the set of product codes applied to the selected scene nodes.
   * Sets the selection set based on the set of supplied product codes.
   */
  set selectedProductCodes(selectedProductCodes) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._selectedProductCodes = selectedProductCodes;
    this.sceneNodeToProductLookupService.lookupNodeIds(selectedProductCodes).pipe(first()).subscribe((selectedNodeIds) => {
      this.selectedNodeIds$.next(selectedNodeIds);
    });
  }
  get selectedProductCodes() {
    return this._selectedProductCodes;
  }
  /**
   * Gets/sets which objects should be selectable (in terms of product codes).
   * For 3D content:
   * - objects that are included will be selectable and opaque
   * - objects that are not included will not be selectable and will have an opacity specified by the excludedOpacity property.
   *
   * For 2D content:
   * - hotspots that are included will be selectable and can be made visible
   * - hotspots that are not included will not be selectable or visible
   */
  set includedProductCodes(includedProductCodes) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._includedProductCodes = includedProductCodes;
    this.executeWhenSceneLoaded(() => {
      this.applyInclusionStyle(includedProductCodes);
    });
  }
  get includedProductCodes() {
    return this._includedProductCodes;
  }
  /**
   * Gets/sets the opacity to apply to 3D objects that are not in the set specified by the includedProductCodes property.
   */
  set excludedOpacity(excludedOpacity) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._excludedOpacity = excludedOpacity;
  }
  get excludedOpacity() {
    return this._excludedOpacity;
  }
  /**
   * The current time position in seconds in the animation (if there is one).
   */
  set animationTime(animationTime) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._animationTime = animationTime;
  }
  get animationTime() {
    return this._animationTime;
  }
  /**
   * The total duration of the animation in seconds.
   * Returns 0 when there is no animation present (or when a scene has not been loaded).
   */
  get animationTotalDuration() {
    if (this.animationPlayer) {
      return this.animationPlayer.getTotalDuration();
    }
    return 0;
  }
  /**
   * The animation playback position as a fractional value between 0 (start) and 1 (end).
   */
  set animationPosition(position) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._animationPosition === position) {
      return;
    }
    this._animationPosition = position;
    this.executeWhenSceneLoaded(() => {
      const time = position * this.animationPlayer.getTotalDuration();
      this.animationPlayerSetTime(time, false);
    });
  }
  get animationPosition() {
    return this._animationPosition;
  }
  /**
   * Gets/sets whether the animation (if there is one) is currently playing.
   */
  set animationPlaying(animationPlaying) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._animationPlaying === animationPlaying) {
      return;
    }
    this._animationPlaying = animationPlaying;
    this.executeWhenSceneLoaded(() => {
      if (animationPlaying) {
        if (this.animationPosition >= 1) {
          this.animationPlayerSetTime(0, false);
        }
        this.animationPlayer.play();
      } else {
        this.animationPlayer.stop();
      }
      this.animationPlayingChange.emit(animationPlaying);
    });
  }
  get animationPlaying() {
    return this._animationPlaying;
  }
  /**
   * Controls the behaviour when a left mouse button drag is initiated in the viewport.
   * Turntable: A left mouse drag performs a turntable mode rotation.
   * Pan: A left mouse drag pans the camera in the viewport.
   * Zoom: A left mouse drag zooms the camera in the viewport in or out
   */
  set navigationMode(navigationMode) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._navigationMode === navigationMode) {
      return;
    }
    this._navigationMode = navigationMode;
    this.executeWhenSceneLoaded(() => {
      if (this.drawerToolbar && this.viewport) {
        this.drawerToolbar.setNavigationMode(navigationMode);
      }
    });
  }
  get navigationMode() {
    return this._navigationMode;
  }
  /**
   * Isolate mode allows a single object to be viewed in isolation.
   */
  set isolateModeEnabled(isolateModeEnabled) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this._isolateModeEnabled === isolateModeEnabled) {
      return;
    }
    this.executeWhenSceneLoaded(() => {
      this._isolateModeEnabled = isolateModeEnabled;
      if (isolateModeEnabled) {
        this.viewPriorToIsolateViewInfo = this.viewport.getViewInfo({
          camera: true,
          visibility: true
        });
        const selectedNodeRefs = [];
        if (this.is2D) {
          this.viewStateManager.enumerateSelection((nodeRef) => selectedNodeRefs.push(nodeRef));
        } else {
          this.viewStateManager.enumerateOutlinedNodes((nodeRef) => selectedNodeRefs.push(nodeRef));
        }
        this.isolateNodes(selectedNodeRefs);
      } else {
        this.viewport.setViewInfo(this.viewPriorToIsolateViewInfo, this.flyToDurationInSeconds);
      }
      this.isolateModeEnabledChange.emit(this.isolateModeEnabled);
    });
  }
  get isolateModeEnabled() {
    return this._isolateModeEnabled;
  }
  /**
   * Gets whether the viewport is displaying 2D content.
   */
  get is2D() {
    return this._is2D;
  }
  setIs2D(is2D) {
    this._is2D = is2D;
  }
  /**
   * Indicates that a scene has been loaded and the viewport is ready for interaction.
   */
  get viewportReady() {
    return this._viewportReady;
  }
  setViewportReady(viewportReady) {
    if (this._viewportReady === viewportReady) {
      return;
    }
    this._viewportReady = viewportReady;
    this.viewportReadyChange.emit(viewportReady);
  }
  /**
   * Returns the user to the initial camera position used when a scene was first loaded.
   */
  activateHomeView() {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    if (this.is2D) {
      this.viewport.zoomTo(ZoomTo.All, null, this.flyToDurationInSeconds, this.zoomToMargin);
    } else {
      this.viewport.setViewInfo(this.initialViewInfo, this.flyToDurationInSeconds);
    }
    if (this.isolateModeEnabled) {
      this._isolateModeEnabled = false;
      this.isolateModeEnabledChange.emit(false);
    }
  }
  /**
   * Plays the animation (if one exists).
   */
  playAnimation() {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this.animationPlaying = true;
  }
  /**
   * Pauses animation playback.
   */
  pauseAnimation() {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this.animationPlaying = false;
  }
  setInitialPropertyValues() {
    if (this.backgroundTopColor === void 0) {
      this.backgroundTopColor = this.DEFAULT_BACKGROUND_TOP_COLOR;
    }
    if (this.backgroundBottomColor === void 0) {
      this.backgroundBottomColor = this.DEFAULT_BACKGROUND_BOTTOM_COLOR;
    }
    if (this.hotspotSelectionColor === void 0) {
      this.hotspotSelectionColor = this.DEFAULT_HOTSPOT_SELECTION_HIGHLIGHT_COLOR;
    }
    if (this.showAllHotspotsColor === void 0) {
      this.showAllHotspotsColor = this.DEFAULT_SHOW_ALL_HOTSPOTS_COLOR;
    }
    if (this.outlineColor === void 0) {
      this.outlineColor = this.DEFAULT_OUTLINE_COLOR;
    }
    if (this.outlineWidth === void 0) {
      this.outlineWidth = this.DEFAULT_OUTLINE_WIDTH;
    }
    if (this.selectionMode === void 0) {
      this.selectionMode = this.DEFAULT_SELECTION_MODE;
    }
    if (this.showAllHotspotsEnabled === void 0) {
      this.showAllHotspotsEnabled = this.DEFAULT_SHOW_ALL_HOTSPOTS_ENABLED;
    }
    if (this.is2D) {
      if (this.navigationMode === void 0 || this.navigationMode === NavigationMode.Turntable) {
        this.navigationMode = NavigationMode.Pan;
      }
    } else if (this.navigationMode === void 0) {
      this.navigationMode = NavigationMode.Turntable;
    }
    if (this.selectedProductCodes === void 0) {
      this.selectedProductCodes = this.selectedNodeIds$.getValue();
    }
  }
  executeWhenSceneLoaded(callback) {
    this.sceneLoadInfo$.pipe(filter((sceneLoadInfo) => sceneLoadInfo.sceneLoadState === SceneLoadState.Loaded || sceneLoadInfo.sceneLoadState === SceneLoadState.Failed), first()).subscribe((sceneLoadInfo) => {
      if (sceneLoadInfo.sceneLoadState === SceneLoadState.Loaded) {
        callback(sceneLoadInfo.loadedSceneInfo);
      }
    });
  }
  applyInclusionStyle(productCodes) {
    if (productCodes === void 0) {
      return;
    }
    this.sceneNodeToProductLookupService.lookupNodeIds(productCodes).pipe(first()).subscribe((sceneNodeIds) => {
      if (this.is2D) {
        this.applyInclusionStyle2D(sceneNodeIds);
      } else {
        this.applyInclusionStyle3D(sceneNodeIds);
      }
    });
  }
  applyInclusionStyle2D(sceneNodeIds) {
    const nodeRefsToInclude = this.persistentIdToNodeRef(sceneNodeIds, true);
    const hotspotNodeRefs = this.nodeHierarchy.getHotspotNodeIds();
    const hotspotNodeRefsSet = new Set(hotspotNodeRefs);
    const topLevelHotspotNodeRefs = hotspotNodeRefs.filter((hotspotNodeRef) => this.isTopLevelHotspotNode(hotspotNodeRef, hotspotNodeRefsSet));
    if (this._showAllHotspotsEnabled) {
      const nodeRefsToIncludeSet = new Set(nodeRefsToInclude);
      const nodeRefsToExclude = topLevelHotspotNodeRefs.filter((nodeRef) => !nodeRefsToIncludeSet.has(nodeRef));
      this.viewport.showHotspots(nodeRefsToExclude, false, 0);
      this.viewport.showHotspots(nodeRefsToInclude, true, this.getCSSColor(this._showAllHotspotsColor));
    } else {
      this.viewport.showHotspots(topLevelHotspotNodeRefs, false, 0);
    }
  }
  applyInclusionStyle3D(sceneNodeIds) {
    const nodeRefsToInclude = this.persistentIdToNodeRef(sceneNodeIds, true);
    if (!this.leafNodeRefs) {
      this.leafNodeRefs = this.getAllLeafNodeRefs();
    }
    const leafNodeRefsToInclude = nodeRefsToInclude.flatMap((nodeRef) => this.getLeafDescendants(nodeRef, []));
    const leafNodeRefsToIncludeSet = new Set(leafNodeRefsToInclude);
    const leafNodeRefsToExclude = this.leafNodeRefs.filter((leafNodeRef) => !leafNodeRefsToIncludeSet.has(leafNodeRef));
    this.viewStateManager.setOpacity(leafNodeRefsToExclude, this.excludedOpacity);
    leafNodeRefsToInclude.forEach((nodeRef) => this.viewStateManager.setOpacity(nodeRef, this.viewStateManager.getRestOpacity(nodeRef)));
  }
  isTopLevelHotspotNode(hotspotNodeRef, hotspotNodeRefs) {
    return !this.nodeHierarchy.getAncestors(hotspotNodeRef).some((ancestor) => hotspotNodeRefs.has(ancestor));
  }
  isReferenceNode(nodeRef) {
    return this.nodeHierarchy.getNodeContentType(nodeRef) === NodeContentType.Reference;
  }
  getLeafDescendants(nodeRef, leafNodeRefs) {
    if (!this.isReferenceNode(nodeRef)) {
      const children = this.nodeHierarchy.getChildren(nodeRef, false).filter((childNodeRef) => !this.isReferenceNode(childNodeRef));
      if (children.length === 0) {
        leafNodeRefs.push(nodeRef);
      } else {
        children.forEach((childNodeRef) => this.getLeafDescendants(childNodeRef, leafNodeRefs));
      }
    }
    return leafNodeRefs;
  }
  getAllLeafNodeRefs() {
    return this.nodeHierarchy.getChildren(void 0).flatMap((nodeRef) => this.getLeafDescendants(nodeRef, []));
  }
  isolateNodes(nodeRefsToIsolate) {
    nodeRefsToIsolate = nodeRefsToIsolate.slice(0, 1);
    this.viewport.zoomTo(ZoomTo.Node, nodeRefsToIsolate, this.flyToDurationInSeconds, this.zoomToMargin);
    const currentVisibleSids = this.viewPriorToIsolateViewInfo.visibility.visible || [];
    const currentVisibleNodeRefs = this.persistentIdToNodeRef(currentVisibleSids, true);
    this.viewStateManager.setVisibilityState(currentVisibleNodeRefs, false, true, false);
    this.viewStateManager.setVisibilityState(nodeRefsToIsolate, true, true, true);
  }
  animationPlayerSetTime(time, blockEvents) {
    this.animationPlayer.setTime(time, void 0, blockEvents);
  }
  onViewActivated() {
    this.initialViewInfo = this.viewport.getViewInfo({
      camera: true,
      visibility: true
    });
  }
  onTimeChanged(oEvent) {
    let changes = false;
    const time = oEvent.getParameters().time;
    if (this.animationTime !== time) {
      this.animationTime = time;
      this.animationTimeChange.emit(time);
      changes = true;
    }
    const position = this.animationTotalDuration ? this.animationTime / this.animationTotalDuration : 0;
    if (this.animationPosition !== position) {
      this.animationPosition = position;
      this.animationPositionChange.emit(position);
      changes = true;
    }
    if (this.animationPlaying) {
      if (this.animationPosition >= 1) {
        this._animationPlaying = false;
        this.animationPlayingChange.emit(this._animationPlaying);
      }
    }
    if (changes) {
      this.changeDetectorRef.detectChanges();
    }
  }
  setVisualizationLoadInfo(visualizationLoadInfo) {
    this._visualizationLoadInfo = visualizationLoadInfo;
    this.visualizationLoadInfoChange.emit(visualizationLoadInfo);
    this.changeDetectorRef.detectChanges();
  }
  get visualizationLoadInfo() {
    return this._visualizationLoadInfo;
  }
  loadVisualization(productCode) {
    if (!this.windowRef.isBrowser()) {
      return of({
        lookupResult: VisualizationLookupResult.UnexpectedError,
        loadStatus: VisualizationLoadStatus.UnexpectedError,
        errorMessage: "Should not call loadVisualization in server side code"
      });
    }
    this.selectedNodeIdsSubscription?.unsubscribe();
    return this.viewportAdded$.pipe(mergeMap(() => this.resolveVisualization(productCode).pipe(mergeMap((visualizationLoadInfo) => {
      if (visualizationLoadInfo.lookupResult === VisualizationLookupResult.UniqueMatchFound) {
        this.sceneNodeToProductLookupService.populateMapsForScene(this.sceneId);
        let mergedVisualizationLoadInfo = __spreadProps(__spreadValues({}, visualizationLoadInfo), {
          loadStatus: VisualizationLoadStatus.Loading
        });
        this.setVisualizationLoadInfo(mergedVisualizationLoadInfo);
        return this.loadScene(this.sceneId, this.contentType).pipe(mergeMap((sceneLoadInfo) => {
          if (sceneLoadInfo.sceneLoadState === SceneLoadState.Failed) {
            mergedVisualizationLoadInfo = __spreadProps(__spreadValues({}, visualizationLoadInfo), {
              loadStatus: VisualizationLoadStatus.UnexpectedError,
              errorMessage: sceneLoadInfo.errorMessage
            });
          } else {
            this.selectedNodeIdsSubscription = this.selectedNodeIds$.subscribe(this.handleSelectedNodeIds.bind(this));
            mergedVisualizationLoadInfo = __spreadProps(__spreadValues({}, visualizationLoadInfo), {
              loadStatus: VisualizationLoadStatus.Loaded
            });
          }
          this.setVisualizationLoadInfo(mergedVisualizationLoadInfo);
          return of(mergedVisualizationLoadInfo);
        }));
      } else {
        return of(visualizationLoadInfo);
      }
    }))));
  }
  isUi5BootStrapped() {
    return !!this.windowRef.nativeWindow && !!this.windowRef.nativeWindow.sap;
  }
  getCore() {
    return sap.ui.getCore();
  }
  bootstrapUi5(scriptElementId) {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const ui5Config = epdVisualization.ui5;
    return new Observable((subscriber) => {
      if (this.isUi5BootStrapped()) {
        subscriber.next();
        subscriber.complete();
        return;
      }
      const script = this.windowRef.document.createElement("script");
      script.setAttribute("id", scriptElementId);
      this.windowRef.document.getElementsByTagName("head")[0].appendChild(script);
      this.windowRef.document.onUi5Bootstrapped = () => {
        subscriber.next();
        subscriber.complete();
      };
      script.onerror = (error) => {
        subscriber.error(error);
        subscriber.complete();
      };
      script.id = "sap-ui-bootstrap";
      script.type = "text/javascript";
      script.setAttribute("data-sap-ui-compatVersion", "edge");
      script.setAttribute("data-sap-ui-async", "true");
      script.setAttribute("data-sap-ui-onInit", "document.onUi5Bootstrapped()");
      script.src = ui5Config.bootstrapUrl;
    });
  }
  initializeUi5() {
    return new Observable((subscriber) => {
      const core = this.getCore();
      core.attachInit(() => {
        const loadLibraryOptions = {
          async: true
        };
        Promise.all([core.loadLibrary("sap.m", loadLibraryOptions), core.loadLibrary("sap.ui.layout", loadLibraryOptions), core.loadLibrary("sap.ui.vk", loadLibraryOptions), core.loadLibrary("sap.ui.richtexteditor", loadLibraryOptions)]).then(() => {
          subscriber.next();
          subscriber.complete();
        });
      });
    });
  }
  destroyViewportAssociations(viewport) {
    const core = this.getCore();
    if (!core) {
      return;
    }
    this.destroyContentConnector(core, viewport);
    this.destroyViewManagers(core, viewport);
  }
  destroyContentConnector(core, viewport) {
    const contentConnectorId = viewport.getContentConnector();
    if (contentConnectorId) {
      const contentConnector = core.byId(contentConnectorId);
      if (contentConnector) {
        contentConnector.destroy();
      }
    }
  }
  destroyViewManagers(core, viewport) {
    const viewStateManagerId = viewport.getViewStateManager();
    if (viewStateManagerId && core.byId(viewStateManagerId)) {
      const viewStateManager = core.byId(viewStateManagerId);
      if (viewStateManager) {
        const animationPlayer = viewStateManager.getAnimationPlayer();
        if (animationPlayer) {
          animationPlayer.destroy();
        }
        const viewManagerId = viewStateManager.getViewManager();
        if (viewManagerId) {
          const viewManager = core.byId(viewManagerId);
          if (viewManager) {
            viewManager.destroy();
          }
        }
        viewStateManager.destroy();
      }
    }
  }
  onContentChangesStarted() {
    this.viewport.detachNodesPicked(this.onNodesPicked);
  }
  onContentChangesFinished(event) {
    const content = event.getParameter("content");
    const failureReason = event.getParameter("failureReason");
    if (!!content && !failureReason) {
      this.scene = content;
      this.nodeHierarchy = this.scene.getDefaultNodeHierarchy();
      this.viewport.attachNodesPicked(this.onNodesPicked, this);
      if (content.loaders) {
        content.loaders.forEach((contentLoader) => {
          if (contentLoader && contentLoader.attachLoadingFinished !== void 0) {
            contentLoader.attachLoadingFinished(this.onContentLoadingFinished, this);
          }
        });
      }
    }
    this.contentChangesFinished.emit({
      content,
      failureReason
    });
  }
  onContentLoadingFinished(_event) {
    this.contentLoadFinished.emit({});
  }
  onNodesPicked(event) {
    if (this.is2D) {
      this.onNodesPicked2D(event);
    } else {
      this.onNodesPicked3D(event);
    }
  }
  isNodeIncluded(nodeRef) {
    const sids = this.nodeRefToPersistentId([nodeRef], true);
    const productCodes = this.sceneNodeToProductLookupService.syncLookupProductCodes(sids);
    return !!productCodes && productCodes.some((productCode) => this.includedProductCodes.includes(productCode));
  }
  onNodesPicked2D(event) {
    const pickedNodes = event.getParameter("picked");
    if (pickedNodes.length === 0) {
      return;
    }
    const hotSpots = pickedNodes.filter((node) => node.nodeContentType && node.nodeContentType === NodeContentType.Hotspot);
    if (hotSpots.length === 0) {
      return;
    }
    const includedHotSpots = hotSpots.filter((nodeRef) => this.isNodeIncluded(nodeRef));
    pickedNodes.splice(0);
    includedHotSpots.forEach((includedHotSpot) => pickedNodes.push(includedHotSpot));
  }
  onNodesPicked3D(event) {
    const picked = event.getParameter("picked");
    const src = picked.splice(0, picked.length);
    src.forEach((node) => {
      while (!this.isNodeIncluded(node)) {
        node = node.parent;
        if (!node) {
          break;
        }
      }
      if (node) {
        picked.push(node);
      }
    });
  }
  addViewport() {
    return new Observable((subscriber) => {
      sap.ui.require(["sap/ui/vk/ViewManager", "sap/ui/vk/Viewport", "sap/ui/vk/ViewStateManager", "sap/ui/vk/AnimationPlayer", "sap/ui/vk/ContentConnector", "sap/ui/vk/DrawerToolbar"], (sap_ui_vk_ViewManager, sap_ui_vk_Viewport, sap_ui_vk_ViewStateManager, sap_ui_vk_AnimationPlayer, sap_ui_vk_ContentConnector, sap_ui_vk_DrawerToolbar) => {
        const core = this.getCore();
        const uiArea = core.getUIArea(this.elementRef.nativeElement);
        if (uiArea) {
          const oldViewport = uiArea.getContent()[0];
          this.destroyViewportAssociations(oldViewport);
          uiArea.destroyContent();
        }
        this.viewport = new sap_ui_vk_Viewport({
          visible: false
        });
        this.viewport.placeAt(this.elementRef.nativeElement);
        this.contentConnector = new sap_ui_vk_ContentConnector();
        this.contentConnector.attachContentChangesStarted(this.onContentChangesStarted, this);
        this.contentConnector.attachContentChangesFinished(this.onContentChangesFinished, this);
        this.contentConnector.attachContentLoadingFinished(this.onContentLoadingFinished, this);
        this.viewStateManager = new sap_ui_vk_ViewStateManager({
          contentConnector: this.contentConnector
        });
        this.viewport.setContentConnector(this.contentConnector);
        this.viewport.setViewStateManager(this.viewStateManager);
        this.animationPlayer = new sap_ui_vk_AnimationPlayer();
        this.animationPlayer.setViewStateManager(this.viewStateManager);
        this.animationPlayer.attachViewActivated(this.onViewActivated, this);
        this.animationPlayer.attachTimeChanged(this.onTimeChanged, this);
        this.viewManager = new sap_ui_vk_ViewManager({
          contentConnector: this.contentConnector,
          animationPlayer: this.animationPlayer
        });
        this.viewStateManager.setViewManager(this.viewManager);
        this.viewStateManager.attachSelectionChanged(this.onSelectionChanged, this);
        this.viewStateManager.attachOutliningChanged(this.onOutliningChanged, this);
        this.drawerToolbar = new sap_ui_vk_DrawerToolbar({
          viewport: this.viewport,
          visible: false
        });
        this.viewport.addDependent(this.drawerToolbar);
        subscriber.next();
        subscriber.complete();
      });
    });
  }
  getCSSPropertyValue(cssPropertyName) {
    const storefrontElement = document.getElementsByTagName("cx-storefront")[0];
    return getComputedStyle(storefrontElement).getPropertyValue(cssPropertyName);
  }
  getCSSColor(color) {
    return (this.getCSSPropertyValue(color) || color).trim();
  }
  resolveVisualization(productCode) {
    return this.visualizationLookupService.findMatchingVisualizations(productCode).pipe(mergeMap((matches) => {
      let visualizationLoadInfo;
      switch (matches.length) {
        case 0:
          visualizationLoadInfo = {
            lookupResult: VisualizationLookupResult.NoMatchFound,
            loadStatus: VisualizationLoadStatus.NotStarted,
            matches
          };
          break;
        case 1:
          const matchingVisualization = matches[0];
          this.sceneId = matchingVisualization.sceneId;
          this.contentType = matchingVisualization.contentType;
          visualizationLoadInfo = {
            lookupResult: VisualizationLookupResult.UniqueMatchFound,
            loadStatus: VisualizationLoadStatus.NotStarted,
            matches,
            visualization: matchingVisualization
          };
          break;
        default:
          visualizationLoadInfo = {
            lookupResult: VisualizationLookupResult.MultipleMatchesFound,
            loadStatus: VisualizationLoadStatus.NotStarted,
            matches
          };
          break;
      }
      this.setVisualizationLoadInfo(visualizationLoadInfo);
      return of(visualizationLoadInfo);
    }), catchError(() => {
      const visualizationLoadInfo = {
        lookupResult: VisualizationLookupResult.UnexpectedError,
        loadStatus: VisualizationLoadStatus.NotStarted
      };
      this.setVisualizationLoadInfo(visualizationLoadInfo);
      return of(visualizationLoadInfo);
    }));
  }
  persistentIdToNodeRef(nodeIds, filterUnresolvedValues) {
    const nodeRefs = this.scene.persistentIdToNodeRef(nodeIds);
    return filterUnresolvedValues ? nodeRefs.filter((nodeRef) => !!nodeRef) : nodeRefs;
  }
  nodeRefToPersistentId(nodeRefs, filterUnresolvedValues) {
    const sids = this.scene.nodeRefToPersistentId(nodeRefs);
    return filterUnresolvedValues ? sids.filter((sid) => !!sid) : sids;
  }
  getViewStateManagerImplementation() {
    return this.viewStateManager.getImplementation();
  }
  handleSelectedNodeIds(nodeIds) {
    const nodeRefs = this.persistentIdToNodeRef(nodeIds, true);
    if (this.is2D) {
      this.handleSelectedNodes2D(nodeRefs);
    } else {
      this.handleSelectedNodes3D(nodeRefs);
    }
    if (this.isolateModeEnabled && nodeRefs.length > 0) {
      this.isolateNodes(nodeRefs);
    }
    this.setShouldRenderFrame();
  }
  handleSelectedNodes2D(selectedNodes) {
    const existingSelection = [];
    this.viewStateManager.enumerateSelection((nodeRef) => existingSelection.push(nodeRef));
    this.viewStateManager.setSelectionStates([], existingSelection, false, true);
    this.viewStateManager.setSelectionStates(selectedNodes, [], false, true);
  }
  handleSelectedNodes3D(selectedNodes) {
    const existingOutlinedNodeRefs = [];
    this.viewStateManager.enumerateOutlinedNodes((nodeRef) => existingOutlinedNodeRefs.push(nodeRef));
    this.getViewStateManagerImplementation().setOutliningStates([], existingOutlinedNodeRefs, false, true);
    this.getViewStateManagerImplementation().setOutliningStates(selectedNodes, [], false, true);
  }
  setShouldRenderFrame() {
    this.viewport.setShouldRenderFrame();
  }
  is2DContentType(contentType) {
    return contentType === ContentType.Drawing2D;
  }
  loadScene(sceneId, contentType) {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const visualizationApiConfig = epdVisualization.apis;
    if (this.viewportReady) {
      this.setViewportReady(false);
    }
    this.setIs2D(this.is2DContentType(contentType));
    return new Observable((subscriber) => {
      sap.ui.require(["sap/ui/vk/ContentResource"], (ContentResource) => {
        this.sceneLoadInfo$.next({
          sceneLoadState: SceneLoadState.Loading
        });
        this.viewport.setSelectionDisplayMode(this.is2D ? "Highlight" : "Outline");
        const baseUrl = visualizationApiConfig.baseUrl;
        const contentResource = new ContentResource({
          useSecureConnection: false,
          sourceType: this.is2D ? "stream2d" : "stream",
          source: `${baseUrl}/vis/public/storage/v1`,
          veid: sceneId
        });
        this.contentChangesFinished.pipe(first()).subscribe((visualContentLoadFinished) => {
          const succeeded = !!visualContentLoadFinished.content;
          const sceneLoadInfo = succeeded ? {
            sceneLoadState: SceneLoadState.Loaded,
            loadedSceneInfo: {
              sceneId,
              contentType
            }
          } : {
            sceneLoadState: SceneLoadState.Failed,
            errorMessage: visualContentLoadFinished.failureReason
          };
          this.sceneLoadInfo$.next(sceneLoadInfo);
          subscriber.next(sceneLoadInfo);
          subscriber.complete();
        });
        this.contentLoadFinished.pipe(first()).subscribe(() => {
          const sceneLoadInfo = this.sceneLoadInfo$.value;
          if (sceneLoadInfo.sceneLoadState === SceneLoadState.Loaded) {
            this.setViewportReady(true);
            this.changeDetectorRef.detectChanges();
            this.viewport.setVisible(true);
          }
        });
        this.contentConnector.addContentResource(contentResource);
      });
    });
  }
  onSelectionChanged() {
    const nodeRefs = [];
    this.viewStateManager.enumerateSelection((nodeRef) => nodeRefs.push(nodeRef));
    const nodeIds = this.nodeRefToPersistentId(nodeRefs, true);
    this.sceneNodeToProductLookupService.lookupProductCodes(nodeIds).pipe(first()).subscribe((productCodes) => {
      this.selectedProductCodesChange.emit(productCodes);
    });
  }
  onOutliningChanged() {
    const nodeRefs = [];
    this.viewStateManager.enumerateOutlinedNodes((nodeRef) => nodeRefs.push(nodeRef));
    const nodeIds = this.nodeRefToPersistentId(nodeRefs, true);
    this.sceneNodeToProductLookupService.lookupProductCodes(nodeIds).pipe(first()).subscribe((productCodes) => {
      this.selectedProductCodesChange.emit(productCodes);
    });
  }
  static {
    this.ɵfac = function VisualViewerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerService)(ɵɵinject(EpdVisualizationConfig), ɵɵinject(SceneNodeToProductLookupService), ɵɵinject(VisualizationLookupService), ɵɵinject(ElementRef), ɵɵinject(ChangeDetectorRef), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualViewerService,
      factory: _VisualViewerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EpdVisualizationConfig
  }, {
    type: SceneNodeToProductLookupService
  }, {
    type: VisualizationLookupService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: WindowRef
  }], null);
})();
var VisualViewerComponent = class _VisualViewerComponent {
  constructor(visualViewerService) {
    this.visualViewerService = visualViewerService;
    this.selectedProductCodesChange = this.visualViewerService.selectedProductCodesChange;
    this.animationTimeChange = this.visualViewerService.animationTimeChange;
    this.animationPositionChange = this.visualViewerService.animationPositionChange;
    this.animationPlayingChange = this.visualViewerService.animationPlayingChange;
    this.isolateModeEnabledChange = this.visualViewerService.isolateModeEnabledChange;
    this.viewportReadyChange = this.visualViewerService.viewportReadyChange;
    this.SelectionMode = SelectionMode;
    this.NavigationMode = NavigationMode;
  }
  /**
   * The top colour of the background gradient.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-background' with the quotes.
   */
  set backgroundTopColor(backgroundTopColor) {
    this.visualViewerService.backgroundTopColor = backgroundTopColor;
  }
  get backgroundTopColor() {
    return this.visualViewerService.backgroundTopColor;
  }
  /**
   * The bottom colour of the background gradient.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-background' with the quotes.
   */
  set backgroundBottomColor(backgroundBottomColor) {
    this.visualViewerService.backgroundBottomColor = backgroundBottomColor;
  }
  get backgroundBottomColor() {
    return this.visualViewerService.backgroundBottomColor;
  }
  /**
   * The colour applied to selected 2D hotspots in 2D content.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set hotspotSelectionColor(hotspotSelectionColor) {
    this.visualViewerService.hotspotSelectionColor = hotspotSelectionColor;
  }
  get hotspotSelectionColor() {
    return this.visualViewerService.hotspotSelectionColor;
  }
  /**
   * When true, all hotspots in 2D content that are included in the includedProductCodes property are highlighted using the colour specified by the showAllHotspotsColor property.
   */
  set showAllHotspotsEnabled(showAllHotspotsEnabled) {
    this.visualViewerService.showAllHotspotsEnabled = showAllHotspotsEnabled;
  }
  get showAllHotspotsEnabled() {
    return this.visualViewerService.showAllHotspotsEnabled;
  }
  /**
   * The colour used to highlight hotspots in 2D content when the showAllHotspotsEnabled property has a value of true.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set showAllHotspotsColor(showAllHotspotsColor) {
    this.visualViewerService.showAllHotspotsColor = showAllHotspotsColor;
  }
  get showAllHotspotsColor() {
    return this.visualViewerService.showAllHotspotsColor;
  }
  /**
   * The outline colour used to indicate selected objects in 3D content.
   * Can be passed in the CSS color format or as a Spartacus theme color i.e. '--cx-color-primary' with the quotes.
   */
  set outlineColor(outlineColor) {
    this.visualViewerService.outlineColor = outlineColor;
  }
  get outlineColor() {
    return this.visualViewerService.outlineColor;
  }
  /**
   * The width of the outline (in pixels) used to indicate selected objects in 3D content.
   */
  set outlineWidth(outlineWidth) {
    this.visualViewerService.outlineWidth = outlineWidth;
  }
  get outlineWidth() {
    return this.visualViewerService.outlineWidth;
  }
  /**
   * The selection mode.
   * None - Selection is disabled.
   * Exclusive - When selecting objects in the viewport, at most one object can be selected at a time. Clicking/tapping to select a new object will deselect any previously selected objects.
   * Sticky - A multiple selection mode in which clicking/tapping on an object that is not part of the current selection will toggle its selection state without modifying the selection state of the currently selected objects.
   */
  set selectionMode(selectionMode) {
    this.visualViewerService.selectionMode = selectionMode;
  }
  get selectionMode() {
    return this.visualViewerService.selectionMode;
  }
  /**
   * Gets/sets the selection in terms of product codes.
   * Gets the set of product codes applied to the selected scene nodes.
   * Sets the selection set based on the set of supplied product codes.
   */
  set selectedProductCodes(selectedProductCodes) {
    this.visualViewerService.selectedProductCodes = selectedProductCodes;
  }
  get selectedProductCodes() {
    return this.visualViewerService.selectedProductCodes;
  }
  /**
   * Gets/sets which objects should be selectable (in terms of product codes).
   * For 3D content:
   * - objects that are included will be selectable and opaque
   * - objects that are not included will not be selectable and will have an opacity specified by the excludedOpacity property.
   *
   * For 2D content:
   * - hotspots that are included will be selectable and can be made visible
   * - hotspots that are not included will not be selectable or visible
   */
  set includedProductCodes(includedProductCodes) {
    this.visualViewerService.includedProductCodes = includedProductCodes;
  }
  get includedProductCodes() {
    return this.visualViewerService.includedProductCodes;
  }
  /**
   *  Gets/sets the opacity to apply to 3D objects that are not in the set specified by the includedProductCodes property
   */
  set excludedOpacity(excludedOpacity) {
    this.visualViewerService.excludedOpacity = excludedOpacity;
  }
  get excludedOpacity() {
    return this.visualViewerService.excludedOpacity;
  }
  /**
   * The current time position in seconds in the animation (if there is one).
   */
  set animationTime(animationTime) {
    this.visualViewerService.animationTime = animationTime;
  }
  get animationTime() {
    return this.visualViewerService.animationTime;
  }
  /**
   * Gets the total duration of the animation (if there is one). A total duration of 0 indicates that there is no animation that can be played.
   */
  get animationTotalDuration() {
    return this.visualViewerService.animationTotalDuration;
  }
  /**
   *  The animation playback position as a fractional value between 0 (start) and 1 (end).
   */
  set animationPosition(animationPosition) {
    this.visualViewerService.animationPosition = animationPosition;
  }
  get animationPosition() {
    return this.visualViewerService.animationPosition;
  }
  /**
   * Gets/sets whether the animation (if there is one) is currently playing.
   */
  set animationPlaying(animationPlaying) {
    this.visualViewerService.animationPlaying = animationPlaying;
  }
  get animationPlaying() {
    return this.visualViewerService.animationPlaying;
  }
  /**
   * Controls the behaviour when a left mouse button drag is initiated in the viewport.
   * Turntable: A left mouse drag performs a turntable mode rotation.
   * Pan: A left mouse drag pans the camera in the viewport.
   * Zoom: A left mouse drag zooms the camera in the viewport in or out
   */
  set navigationMode(navigationMode) {
    this.visualViewerService.navigationMode = navigationMode;
  }
  get navigationMode() {
    return this.visualViewerService.navigationMode;
  }
  /**
   * Isolate mode allows a single object to be viewed in isolation.
   */
  set isolateModeEnabled(isolateModeEnabled) {
    this.visualViewerService.isolateModeEnabled = isolateModeEnabled;
  }
  get isolateModeEnabled() {
    return this.visualViewerService.isolateModeEnabled;
  }
  /**
   * Gets whether the viewport is displaying 2D content.
   */
  get is2D() {
    return this.visualViewerService.is2D;
  }
  /**
   * Indicates that a scene has been loaded and the viewport is ready for interaction.
   */
  get viewportReady() {
    return this.visualViewerService.viewportReady;
  }
  /**
   * Returns the user to the initial camera position used when a scene was first loaded.
   */
  activateHomeView() {
    this.visualViewerService.activateHomeView();
  }
  /**
   * Plays the animation (if one exists).
   */
  playAnimation() {
    this.visualViewerService.playAnimation();
  }
  /**
   * Pauses animation playback.
   */
  pauseAnimation() {
    this.visualViewerService.pauseAnimation();
  }
  /**
   * Loads the visualization specified by the product code.
   * @param productCode The product code of the visualization to load.
   * @returns An observable that returns a single VisualizationLoadInfo value.
   */
  loadVisualization(productCode) {
    return this.visualViewerService.loadVisualization(productCode);
  }
  static {
    this.ɵfac = function VisualViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerComponent)(ɵɵdirectiveInject(VisualViewerService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualViewerComponent,
      selectors: [["cx-epd-visualization-viewer"]],
      inputs: {
        backgroundTopColor: "backgroundTopColor",
        backgroundBottomColor: "backgroundBottomColor",
        hotspotSelectionColor: "hotspotSelectionColor",
        showAllHotspotsEnabled: "showAllHotspotsEnabled",
        showAllHotspotsColor: "showAllHotspotsColor",
        outlineColor: "outlineColor",
        outlineWidth: "outlineWidth",
        selectionMode: "selectionMode",
        selectedProductCodes: "selectedProductCodes",
        includedProductCodes: "includedProductCodes",
        excludedOpacity: "excludedOpacity",
        animationTime: "animationTime",
        animationPosition: "animationPosition",
        animationPlaying: "animationPlaying",
        navigationMode: "navigationMode",
        isolateModeEnabled: "isolateModeEnabled"
      },
      outputs: {
        selectedProductCodesChange: "selectedProductCodesChange",
        animationTimeChange: "animationTimeChange",
        animationPositionChange: "animationPositionChange",
        animationPlayingChange: "animationPlayingChange",
        isolateModeEnabledChange: "isolateModeEnabledChange",
        viewportReadyChange: "viewportReadyChange"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([VisualViewerService])],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "content-type-symbol", 3, "hidden"], [1, "content-type-text"], [1, "bottom", "overlay"], [1, "toolbar", 3, "hidden"], [1, "toolbarHBox"], [1, "toolbarButtonsHBox"], ["iconLibraryClass", "fas", "iconClass", "fa-home", 1, "homeButton", 3, "click", "text"], ["iconLibraryClass", "fas", "iconClass", "fa-sync-alt", 1, "turntableButton", "toolbarItem", 3, "click", "text", "hidden", "checked"], ["iconLibraryClass", "fas", "iconClass", "fa-arrows-alt", 1, "panButton", "toolbarItem", 3, "click", "text", "checked"], ["iconLibraryClass", "fas", "iconClass", "fa-search", 1, "zoomButton", "toolbarItem", 3, "click", "text", "checked"], ["iconLibraryClass", "fas", "iconClass", "fa-compress", 1, "isolateButton", "toolbarItem", 3, "click", "hidden", "disabled", "text", "checked"], ["iconLibraryClass", "fas", 1, "playPauseButton", "toolbarItem", 3, "click", "iconClass", "text", "hidden", "disabled"], ["iconLibraryClass", "fas", "iconClass", "fa-highlighter", 1, "showAllHotpotsButton", "toolbarItem", 3, "click", "text", "checked", "hidden"], [3, "hidden"], [3, "valueChange", "keydown.enter", "keydown.space", "disabled", "value"], [1, "cx-spinner"]],
      template: function VisualViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, VisualViewerComponent_ng_container_0_Template, 25, 41, "ng-container", 1)(1, VisualViewerComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.viewportReady)("ngIfElse", loading_r3);
        }
      },
      dependencies: [NgIf, VisualViewerToolbarButtonComponent, VisualViewerAnimationSliderComponent, SpinnerComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-viewer",
      providers: [VisualViewerService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="viewportReady; else loading">
  <div class="content-type-symbol" [hidden]="!viewportReady">
    <span class="content-type-text">{{
      (is2D
        ? 'epdVisualization.visualViewer.contentType.drawing2D'
        : 'epdVisualization.visualViewer.contentType.model3D'
      ) | cxTranslate
    }}</span>
  </div>

  <div class="bottom overlay">
    <div [hidden]="!viewportReady" class="toolbar">
      <div class="toolbarHBox">
        <div class="toolbarButtonsHBox">
          <cx-epd-visualization-viewer-toolbar-button
            class="homeButton"
            iconLibraryClass="fas"
            iconClass="fa-home"
            text="{{
              'epdVisualization.visualViewer.toolbar.homeButton.label'
                | cxTranslate
            }}"
            (click)="activateHomeView()"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="turntableButton toolbarItem"
            iconLibraryClass="fas"
            iconClass="fa-sync-alt"
            text="{{
              'epdVisualization.visualViewer.toolbar.rotateButton.label'
                | cxTranslate
            }}"
            [hidden]="is2D"
            (click)="navigationMode = NavigationMode.Turntable"
            [checked]="navigationMode === NavigationMode.Turntable"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="panButton toolbarItem"
            iconLibraryClass="fas"
            iconClass="fa-arrows-alt"
            text="{{
              'epdVisualization.visualViewer.toolbar.panButton.label'
                | cxTranslate
            }}"
            (click)="navigationMode = NavigationMode.Pan"
            [checked]="navigationMode === NavigationMode.Pan"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="zoomButton toolbarItem"
            iconLibraryClass="fas"
            iconClass="fa-search"
            text="{{
              'epdVisualization.visualViewer.toolbar.zoomButton.label'
                | cxTranslate
            }}"
            (click)="navigationMode = NavigationMode.Zoom"
            [checked]="navigationMode === NavigationMode.Zoom"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="isolateButton toolbarItem"
            iconLibraryClass="fas"
            [hidden]="is2D"
            [disabled]="
              !isolateModeEnabled && selectedProductCodes?.length === 0
            "
            iconClass="fa-compress"
            text="{{
              'epdVisualization.visualViewer.toolbar.isolateButton.label'
                | cxTranslate
            }}"
            (click)="isolateModeEnabled = !isolateModeEnabled"
            [checked]="isolateModeEnabled"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="playPauseButton toolbarItem"
            iconLibraryClass="fas"
            iconClass="{{ animationPlaying ? 'fa-pause' : 'fa-play' }}"
            text="{{
              (animationPlaying
                ? 'epdVisualization.visualViewer.toolbar.pauseButton.label'
                : 'epdVisualization.visualViewer.toolbar.playButton.label'
              ) | cxTranslate
            }}"
            [hidden]="is2D || animationTotalDuration <= 0"
            [disabled]="isolateModeEnabled"
            (click)="animationPlaying ? pauseAnimation() : playAnimation()"
          ></cx-epd-visualization-viewer-toolbar-button>

          <cx-epd-visualization-viewer-toolbar-button
            class="showAllHotpotsButton toolbarItem"
            iconLibraryClass="fas"
            iconClass="fa-highlighter"
            text="{{
              (showAllHotspotsEnabled
                ? 'epdVisualization.visualViewer.toolbar.hotspotsButton.hide'
                : 'epdVisualization.visualViewer.toolbar.hotspotsButton.show'
              ) | cxTranslate
            }}"
            [checked]="showAllHotspotsEnabled"
            [hidden]="!is2D"
            (click)="showAllHotspotsEnabled = !showAllHotspotsEnabled"
          ></cx-epd-visualization-viewer-toolbar-button>
        </div>

        <div [hidden]="is2D || animationTotalDuration <= 0">
          <cx-epd-visualization-animation-slider
            [disabled]="isolateModeEnabled"
            [(value)]="animationPosition"
            (keydown.enter)="
              animationPlaying ? pauseAnimation() : playAnimation();
              $event.preventDefault()
            "
            (keydown.space)="
              animationPlaying ? pauseAnimation() : playAnimation();
              $event.preventDefault()
            "
          ></cx-epd-visualization-animation-slider>
        </div>
      </div>
    </div>
  </div>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: VisualViewerService
  }], {
    backgroundTopColor: [{
      type: Input
    }],
    backgroundBottomColor: [{
      type: Input
    }],
    hotspotSelectionColor: [{
      type: Input
    }],
    showAllHotspotsEnabled: [{
      type: Input
    }],
    showAllHotspotsColor: [{
      type: Input
    }],
    outlineColor: [{
      type: Input
    }],
    outlineWidth: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    selectedProductCodes: [{
      type: Input
    }],
    selectedProductCodesChange: [{
      type: Output
    }],
    includedProductCodes: [{
      type: Input
    }],
    excludedOpacity: [{
      type: Input
    }],
    animationTime: [{
      type: Input
    }],
    animationTimeChange: [{
      type: Output
    }],
    animationPosition: [{
      type: Input
    }],
    animationPositionChange: [{
      type: Output
    }],
    animationPlaying: [{
      type: Input
    }],
    animationPlayingChange: [{
      type: Output
    }],
    navigationMode: [{
      type: Input
    }],
    isolateModeEnabled: [{
      type: Input
    }],
    isolateModeEnabledChange: [{
      type: Output
    }],
    viewportReadyChange: [{
      type: Output
    }]
  });
})();
var VisualViewerModule = class _VisualViewerModule {
  static {
    this.ɵfac = function VisualViewerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualViewerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualViewerModule,
      declarations: [VisualViewerComponent],
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerToolbarButtonModule, VisualViewerAnimationSliderModule, SpinnerModule, FeaturesConfigModule],
      exports: [VisualViewerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerToolbarButtonModule, VisualViewerAnimationSliderModule, SpinnerModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualViewerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerToolbarButtonModule, VisualViewerAnimationSliderModule, SpinnerModule, FeaturesConfigModule],
      declarations: [VisualViewerComponent],
      exports: [VisualViewerComponent]
    }]
  }], null, null);
})();
var VisualPickingProductFilterService = class _VisualPickingProductFilterService {
  constructor() {
    this._filter = "";
    this.filter$ = new EventEmitter();
    this.fieldsToMatch = ["code", "name"];
  }
  /**
   * The current filter value.
   * @param filter The filter value to apply.
   */
  set filter(filterStr) {
    if (this._filter === filterStr) {
      return;
    }
    this._filter = filterStr;
    this.filter$.emit(filterStr);
  }
  get filter() {
    return this._filter;
  }
  applyFilter(filterToApply, unfilteredProductReferences) {
    filterToApply = filterToApply.toLowerCase();
    const filteredProductReferences = unfilteredProductReferences.filter((productReference) => {
      const product = productReference.target;
      return this.fieldsToMatch.some((field) => {
        const fieldValue = product[field];
        return fieldValue !== void 0 && fieldValue.toLowerCase().indexOf(filterToApply) !== -1;
      });
    });
    return filteredProductReferences;
  }
  /**
   * Returns an Observable that produces a ProductReference[] each time the filter is updated or the set of product references to filter changes.
   * @param unfilteredProductReferences$ An Observable that returns the unfiltered ProductReference[] to apply filtering to.
   * @returns An Observable that produces a ProductReference[] each time the filter is updated or the set of product references to filter changes.
   */
  getFilteredProducts(unfilteredProductReferences$) {
    return combineLatest([concat(of(""), this.filter$), unfilteredProductReferences$]).pipe(filter(([filterStr, productReferences]) => filterStr !== void 0 && productReferences !== void 0), map(([filterToApply, productReferences]) => this.applyFilter(filterToApply, productReferences)));
  }
  static {
    this.ɵfac = function VisualPickingProductFilterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductFilterService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualPickingProductFilterService,
      factory: _VisualPickingProductFilterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VisualPickingProductFilterComponent = class _VisualPickingProductFilterComponent {
  constructor(visualPickingProductFilterService) {
    this.visualPickingProductFilterService = visualPickingProductFilterService;
    this.iconTypes = ICON_TYPE;
  }
  /**
   * The filter input value.
   */
  set filter(filter2) {
    this.visualPickingProductFilterService.filter = filter2;
  }
  get filter() {
    return this.visualPickingProductFilterService.filter;
  }
  static {
    this.ɵfac = function VisualPickingProductFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductFilterComponent)(ɵɵdirectiveInject(VisualPickingProductFilterService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualPickingProductFilterComponent,
      selectors: [["cx-epd-visualization-product-filter"]],
      inputs: {
        filter: "filter"
      },
      standalone: false,
      decls: 9,
      vars: 20,
      consts: [[1, "form-group", "search-wrapper"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "search", 3, "type", "hidden"], ["tabindex", "0", 1, "reset", 3, "mousedown", "keydown.enter", "type", "hidden"]],
      template: function VisualPickingProductFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "input", 1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵtwoWayListener("ngModelChange", function VisualPickingProductFilterComponent_Template_input_ngModelChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelement(3, "cx-icon", 2);
          ɵɵpipe(4, "cxTranslate");
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementStart(6, "cx-icon", 3);
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("mousedown", function VisualPickingProductFilterComponent_Template_cx_icon_mousedown_6_listener() {
            return ctx.filter = "";
          })("keydown.enter", function VisualPickingProductFilterComponent_Template_cx_icon_keydown_enter_6_listener() {
            return ctx.filter = "";
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(2, 10, "epdVisualization.visualPicking.visualPickingProductFilter.input.placeholder"));
          ɵɵtwoWayProperty("ngModel", ctx.filter);
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.SEARCH)("hidden", ctx.filter.length > 0);
          ɵɵattribute("aria-label", ɵɵpipeBind1(4, 12, "epdVisualization.visualPicking.visualPickingProductFilter.searchButton.label"))("title", ɵɵpipeBind1(5, 14, "epdVisualization.visualPicking.visualPickingProductFilter.searchButton.label"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.RESET)("hidden", ctx.filter.length === 0);
          ɵɵattribute("aria-label", ɵɵpipeBind1(7, 16, "epdVisualization.visualPicking.visualPickingProductFilter.resetButton.label"))("title", ɵɵpipeBind1(8, 18, "epdVisualization.visualPicking.visualPickingProductFilter.resetButton.label"));
        }
      },
      dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductFilterComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-product-filter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="form-group search-wrapper">
  <input
    type="text"
    [(ngModel)]="filter"
    class="form-control"
    placeholder="{{
      'epdVisualization.visualPicking.visualPickingProductFilter.input.placeholder'
        | cxTranslate
    }}"
  />

  <cx-icon
    [type]="iconTypes.SEARCH"
    [attr.aria-label]="
      'epdVisualization.visualPicking.visualPickingProductFilter.searchButton.label'
        | cxTranslate
    "
    [attr.title]="
      'epdVisualization.visualPicking.visualPickingProductFilter.searchButton.label'
        | cxTranslate
    "
    class="search"
    [hidden]="filter.length > 0"
  ></cx-icon>

  <cx-icon
    [type]="iconTypes.RESET"
    [attr.aria-label]="
      'epdVisualization.visualPicking.visualPickingProductFilter.resetButton.label'
        | cxTranslate
    "
    [attr.title]="
      'epdVisualization.visualPicking.visualPickingProductFilter.resetButton.label'
        | cxTranslate
    "
    (mousedown)="filter = ''"
    (keydown.enter)="filter = ''"
    [hidden]="filter.length === 0"
    class="reset"
    tabindex="0"
  ></cx-icon>
</div>
`
    }]
  }], () => [{
    type: VisualPickingProductFilterService
  }], {
    filter: [{
      type: Input
    }]
  });
})();
var VisualPickingProductFilterModule = class _VisualPickingProductFilterModule {
  static {
    this.ɵfac = function VisualPickingProductFilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductFilterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualPickingProductFilterModule,
      declarations: [VisualPickingProductFilterComponent],
      imports: [CommonModule, FormsModule, IconModule, UrlModule, I18nModule],
      exports: [VisualPickingProductFilterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [VisualPickingProductFilterService],
      imports: [CommonModule, FormsModule, IconModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductFilterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, IconModule, UrlModule, I18nModule],
      providers: [VisualPickingProductFilterService],
      declarations: [VisualPickingProductFilterComponent],
      exports: [VisualPickingProductFilterComponent]
    }]
  }], null, null);
})();
var CompactAddToCartComponent = class _CompactAddToCartComponent extends AddToCartComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCompactAddToCartComponent_BaseFactory;
      return function CompactAddToCartComponent_Factory(__ngFactoryType__) {
        return (ɵCompactAddToCartComponent_BaseFactory || (ɵCompactAddToCartComponent_BaseFactory = ɵɵgetInheritedFactory(_CompactAddToCartComponent)))(__ngFactoryType__ || _CompactAddToCartComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CompactAddToCartComponent,
      selectors: [["cx-epd-visualization-compact-add-to-cart"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["class", "btn btn-sm btn-primary btn-block", "type", "submit", 3, "disabled", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "btn-block", 3, "disabled"], [1, "fa", "fa-cart-plus"]],
      template: function CompactAddToCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CompactAddToCartComponent_form_0_Template, 2, 2, "form", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.productCode);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactAddToCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-compact-add-to-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form *ngIf="productCode" [formGroup]="addToCartForm" (submit)="addToCart()">
  <button
    *ngIf="hasStock"
    class="btn btn-sm btn-primary btn-block"
    type="submit"
    [attr.title]="'addToCart.addToCart' | cxTranslate"
    [disabled]="quantity <= 0 || quantity > maxQuantity"
  >
    <cx-icon class="fa fa-cart-plus"></cx-icon>
  </button>
</form>
`
    }]
  }], null, null);
})();
var CompactAddToCartModule = class _CompactAddToCartModule {
  static {
    this.ɵfac = function CompactAddToCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompactAddToCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CompactAddToCartModule,
      declarations: [CompactAddToCartComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, SpinnerModule, PromotionsModule, I18nModule, UrlModule, IconModule, I18nModule, ItemCounterModule],
      exports: [CompactAddToCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, RouterModule, SpinnerModule, PromotionsModule, I18nModule, UrlModule, IconModule, I18nModule, ItemCounterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompactAddToCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, SpinnerModule, PromotionsModule, I18nModule, UrlModule, IconModule, I18nModule, ItemCounterModule],
      declarations: [CompactAddToCartComponent],
      exports: [CompactAddToCartComponent]
    }]
  }], null, null);
})();
var PagedListComponent = class _PagedListComponent {
  setActiveSlideStartIndex(activeSlideStartIndex) {
    this.activeSlideStartIndex = activeSlideStartIndex;
    this.activeSlideStartIndexChange.emit(activeSlideStartIndex);
  }
  constructor(el) {
    this.el = el;
    this.itemsPerSlide = 10;
    this.hideIndicators = false;
    this.indicatorIcon = ICON_TYPE.CIRCLE;
    this.previousIcon = ICON_TYPE.CARET_LEFT;
    this.nextIcon = ICON_TYPE.CARET_RIGHT;
    this.activeSlideStartIndex = 0;
    this.activeSlideStartIndexChange = new EventEmitter();
    this.logger = inject(LoggerService);
  }
  ngOnInit() {
    if (!this.headerTemplate) {
      this.logger.error("No template reference provided to render the header for the `cx-epd-visualization-paged-list`");
      return;
    }
    if (!this.template) {
      this.logger.error("No template reference provided to render the items for the `cx-epd-visualization-paged-list`");
      return;
    }
  }
  static {
    this.ɵfac = function PagedListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagedListComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PagedListComponent,
      selectors: [["cx-epd-visualization-paged-list"]],
      inputs: {
        title: "title",
        items: "items",
        headerTemplate: "headerTemplate",
        template: "template",
        itemsPerSlide: "itemsPerSlide",
        hideIndicators: "hideIndicators",
        indicatorIcon: "indicatorIcon",
        previousIcon: "previousIcon",
        nextIcon: "nextIcon",
        activeSlideStartIndex: "activeSlideStartIndex"
      },
      outputs: {
        activeSlideStartIndexChange: "activeSlideStartIndexChange"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet"], [1, "list-panel"], [1, "slides"], [4, "ngFor", "ngForOf"], ["class", "indicators", 4, "ngIf"], ["class", "slide", 3, "active", 4, "ngIf"], [1, "slide"], ["class", "item", 3, "active", 4, "ngIf"], [1, "item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "indicators"], ["class", "previous", 3, "disabled", "click", 4, "ngIf"], ["class", "next", 3, "disabled", "click", 4, "ngIf"], [1, "previous", 3, "click", "disabled"], [3, "type"], ["class", "slide-indicator", 3, "disabled", "click", 4, "ngIf"], [1, "slide-indicator", 3, "click", "disabled"], [1, "next", 3, "click", "disabled"]],
      template: function PagedListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PagedListComponent_ng_container_0_Template, 7, 4, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", (ctx.items == null ? null : ctx.items.length) > 0 && ctx.itemsPerSlide);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, IconComponent, SlicePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagedListComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-paged-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="items?.length > 0 && itemsPerSlide">\n  <h3 *ngIf="title">{{ title }}</h3>\n\n  <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>\n\n  <div class="list-panel">\n    <div class="slides">\n      <ng-container *ngFor="let _ of items; let i = index">\n        <div\n          class="slide"\n          *ngIf="i % itemsPerSlide === 0"\n          [class.active]="i === activeSlideStartIndex"\n        >\n          <ng-container\n            *ngFor="\n              let item of items | slice: i : i + itemsPerSlide;\n              let j = index\n            "\n          >\n            <div\n              *ngIf="item as data"\n              class="item"\n              [class.active]="i === activeSlideStartIndex"\n            >\n              <ng-container\n                *ngTemplateOutlet="\n                  template;\n                  context: {\n                    item: data,\n                    active: i === activeSlideStartIndex,\n                  }\n                "\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div\n    *ngIf="!hideIndicators && itemsPerSlide < items.length"\n    class="indicators"\n  >\n    <button\n      *ngIf="itemsPerSlide < items.length"\n      class="previous"\n      (click)="setActiveSlideStartIndex(activeSlideStartIndex - itemsPerSlide)"\n      [disabled]="activeSlideStartIndex === 0"\n    >\n      <cx-icon [type]="previousIcon"></cx-icon>\n    </button>\n\n    <ng-container *ngFor="let _ of items; let i = index">\n      <button\n        *ngIf="i % itemsPerSlide === 0"\n        (click)="setActiveSlideStartIndex(i)"\n        [disabled]="i === activeSlideStartIndex"\n        class="slide-indicator"\n      >\n        <cx-icon [type]="indicatorIcon"></cx-icon>\n      </button>\n    </ng-container>\n\n    <button\n      *ngIf="itemsPerSlide < items.length"\n      class="next"\n      (click)="setActiveSlideStartIndex(activeSlideStartIndex + itemsPerSlide)"\n      [disabled]="activeSlideStartIndex > items.length - itemsPerSlide - 1"\n    >\n      <cx-icon [type]="nextIcon"></cx-icon>\n    </button>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    title: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    itemsPerSlide: [{
      type: Input
    }],
    hideIndicators: [{
      type: Input
    }],
    indicatorIcon: [{
      type: Input
    }],
    previousIcon: [{
      type: Input
    }],
    nextIcon: [{
      type: Input
    }],
    activeSlideStartIndex: [{
      type: Input
    }],
    activeSlideStartIndexChange: [{
      type: Output
    }]
  });
})();
var PagedListModule = class _PagedListModule {
  static {
    this.ɵfac = function PagedListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagedListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PagedListModule,
      declarations: [PagedListComponent],
      imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
      exports: [PagedListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagedListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
      declarations: [PagedListComponent],
      exports: [PagedListComponent]
    }]
  }], null, null);
})();
var VisualPickingProductListService = class _VisualPickingProductListService {
  constructor(currentProductService, productReferenceService, visualPickingProductFilterService, epdVisualizationConfig) {
    this.currentProductService = currentProductService;
    this.productReferenceService = productReferenceService;
    this.visualPickingProductFilterService = visualPickingProductFilterService;
    this.epdVisualizationConfig = epdVisualizationConfig;
    this.DEFAULT_ITEMS_PER_SLIDE = 7;
    this.currentProduct$ = this.currentProductService.getProduct().pipe(filter((product) => !!product && !!product.code), map((product) => product), distinctUntilChanged((p1, p2) => p1.code === p2.code));
    this.productReferences$ = new Subject();
    this.activeSlideStartIndex = 0;
    this.itemsPerSlide = this.DEFAULT_ITEMS_PER_SLIDE;
    this.selectedProductCodesChange = new EventEmitter();
    this.filteredItems$ = this.getVisualPickingProductListItems(this.getFilteredProductReferences(), this.selectedProductCodesChange).pipe(shareReplay());
  }
  /**
   * Initializes the service.
   */
  initialize() {
    this.getFilteredProductReferencesSubscription = this.getFilteredProductReferences().subscribe(() => {
      this.activeSlideStartIndex = 0;
    });
    this.visualPickingProductFilterService.filter = "";
    this.filteredItemsSubscription = this.filteredItems$.subscribe((items) => {
      const firstSelectedItemIndex = items.findIndex((item) => item.selected);
      if (firstSelectedItemIndex !== -1) {
        this.activeSlideStartIndex = firstSelectedItemIndex - firstSelectedItemIndex % this.itemsPerSlide;
      }
    });
    this.selectedProductCodes = [];
    this.productReferencesSubscription = this._getProductReferences().subscribe(this.productReferences$);
  }
  ngOnDestroy() {
    this.getFilteredProductReferencesSubscription?.unsubscribe();
    this.filteredItemsSubscription?.unsubscribe();
    this.productReferencesSubscription?.unsubscribe();
  }
  get productReferenceType() {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const visualPickingConfig = epdVisualization.visualPicking;
    return visualPickingConfig.productReferenceType;
  }
  /**
   * Returns an Observable that produces the spare part product references for the current product.
   * @returns An Observable that produces the spare part product references for the current product.
   */
  getProductReferences() {
    return this.productReferences$;
  }
  _getProductReferences() {
    return this.currentProduct$.pipe(tap((product) => this.productReferenceService.loadProductReferences(product.code, this.productReferenceType)), switchMap((product) => this.productReferenceService.getProductReferences(product.code, this.productReferenceType)), filter((productReferences) => productReferences !== void 0));
  }
  /**
   * Returns an Observable that produces a filtered array of spare part product references for the current product.
   * Filtering is performed by the VisualPickingProductFilterService.
   * @returns An Observable that produces a filtered array of spare part product references for the current product.
   */
  getFilteredProductReferences() {
    return this.visualPickingProductFilterService.getFilteredProducts(this.getProductReferences()).pipe(shareReplay());
  }
  set selectedProductCodes(selectedProductCodes) {
    this._selectedProductCodes = selectedProductCodes;
    this.selectedProductCodesChange.next(selectedProductCodes);
  }
  get selectedProductCodes() {
    return this._selectedProductCodes;
  }
  /**
   * Used to create the list item model data for the visual picking product list.
   * Returns an observable containing an array of VisualPickingProductListItem objects created by combining the latest values from
   * an Observable producing an array of product references and
   * an Observable producing an array of selected product codes.
   * The VisualPickingProductListItem model object combines a ProductReference for a spare part and the selected state of the list item.
   * @param productReferences$ An Observable producing the array of ProductReference values to map.
   * @param selectedProductCodes$ An Observable producing the array of selected product codes.
   * @returns An Observable producing an array of VisualPickingProductListItem values.
   */
  getVisualPickingProductListItems(productReferences$, selectedProductCodes$) {
    return combineLatest([productReferences$, selectedProductCodes$]).pipe(filter(([productReferences, selectedProductCodes]) => !!productReferences && !!selectedProductCodes), map(([productReferences, selectedProductCodes]) => {
      return productReferences.filter((productReference) => !!productReference.target && !!productReference.target.code).map((productReference) => {
        const product = productReference.target;
        const productCode = product.code;
        const selected = selectedProductCodes.indexOf(productCode) !== -1;
        return {
          product,
          selected
        };
      });
    }));
  }
  static {
    this.ɵfac = function VisualPickingProductListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductListService)(ɵɵinject(CurrentProductService), ɵɵinject(ProductReferenceService), ɵɵinject(VisualPickingProductFilterService), ɵɵinject(EpdVisualizationConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualPickingProductListService,
      factory: _VisualPickingProductListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: ProductReferenceService
  }, {
    type: VisualPickingProductFilterService
  }, {
    type: EpdVisualizationConfig
  }], null);
})();
var VisualPickingProductListComponent = class _VisualPickingProductListComponent {
  constructor(visualPickingProductListService) {
    this.visualPickingProductListService = visualPickingProductListService;
    this.singleSelection = true;
    this.selectedProductCodesChange = this.visualPickingProductListService.selectedProductCodesChange;
  }
  set selectedProductCodes(selectedProductCodes) {
    this.visualPickingProductListService.selectedProductCodes = selectedProductCodes;
  }
  get selectedProductCodes() {
    return this.visualPickingProductListService.selectedProductCodes;
  }
  get itemsPerSlide() {
    return this.visualPickingProductListService.itemsPerSlide;
  }
  set itemsPerSlide(itemsPerSlide) {
    this.visualPickingProductListService.itemsPerSlide = itemsPerSlide;
  }
  get activeSlideStartIndex() {
    return this.visualPickingProductListService.activeSlideStartIndex;
  }
  set activeSlideStartIndex(activeSlideStartIndex) {
    this.visualPickingProductListService.activeSlideStartIndex = activeSlideStartIndex;
  }
  get filteredItems$() {
    return this.visualPickingProductListService.filteredItems$;
  }
  ngOnInit() {
    this.visualPickingProductListService.initialize();
  }
  static {
    this.ɵfac = function VisualPickingProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductListComponent)(ɵɵdirectiveInject(VisualPickingProductListService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualPickingProductListComponent,
      selectors: [["cx-epd-visualization-product-list"]],
      inputs: {
        title: "title",
        singleSelection: "singleSelection",
        selectedProductCodes: "selectedProductCodes"
      },
      outputs: {
        selectedProductCodesChange: "selectedProductCodesChange"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([VisualPickingProductListService])],
      decls: 6,
      vars: 8,
      consts: [["headerTemplate", ""], ["itemTemplate", ""], ["addToCartComponent", ""], ["noPrice", ""], [3, "activeSlideStartIndexChange", "items", "title", "headerTemplate", "template", "itemsPerSlide", "activeSlideStartIndex"], [1, "cx-item-list-header", "row"], [1, "cx-item-list-desc", "col-6"], [1, "cx-item-list-price", "col-4"], [1, "cx-item-list-total", "col-2"], ["class", "row no-gutters list-item", "tabindex", "0", 3, "selected", "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tabindex", "0", 1, "row", "no-gutters", "list-item", 3, "click", "keydown.enter", "keydown.space"], [1, "col-6", "flex-row", "thumbnail-and-product-info"], [1, "thumbnail-container"], [1, "thumbnail"], ["format", "thumbnail", 3, "container"], [1, "flex-column", "product-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [1, "col-4", "flex-column", "price"], ["class", "cx-price", 4, "ngIf"], [1, "cx-add-to-cart", "col-2", "flex-column"], [4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "keydown.enter", "routerLink"], [1, "cx-code"], [1, "cx-price"], [1, "add-to-cart", 3, "click", "keydown.enter", "keydown.space"], [3, "showQuantity", "product"], [1, "cx-out-of-stock"]],
      template: function VisualPickingProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "cx-epd-visualization-paged-list", 4);
          ɵɵpipe(1, "async");
          ɵɵtwoWayListener("activeSlideStartIndexChange", function VisualPickingProductListComponent_Template_cx_epd_visualization_paged_list_activeSlideStartIndexChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.activeSlideStartIndex, $event) || (ctx.activeSlideStartIndex = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(2, VisualPickingProductListComponent_ng_template_2_Template, 8, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, VisualPickingProductListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const headerTemplate_r9 = ɵɵreference(3);
          const itemTemplate_r10 = ɵɵreference(5);
          ɵɵproperty("items", ɵɵpipeBind1(1, 6, ctx.filteredItems$))("title", ctx.title)("headerTemplate", headerTemplate_r9)("template", itemTemplate_r10)("itemsPerSlide", ctx.itemsPerSlide);
          ɵɵtwoWayProperty("activeSlideStartIndex", ctx.activeSlideStartIndex);
        }
      },
      dependencies: [NgIf, RouterLink, MediaComponent, PagedListComponent, CompactAddToCartComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductListComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-product-list",
      providers: [VisualPickingProductListService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-epd-visualization-paged-list
  [items]="filteredItems$ | async"
  [title]="title"
  [headerTemplate]="headerTemplate"
  [template]="itemTemplate"
  [itemsPerSlide]="itemsPerSlide"
  [(activeSlideStartIndex)]="activeSlideStartIndex"
>
</cx-epd-visualization-paged-list>

<ng-template #headerTemplate>
  <div class="cx-item-list-header row">
    <div class="cx-item-list-desc col-6">
      {{
        'epdVisualization.visualPicking.visualPickingProductList.description'
          | cxTranslate
      }}
    </div>
    <div class="cx-item-list-price col-4">
      {{
        'epdVisualization.visualPicking.visualPickingProductList.itemPrice'
          | cxTranslate
      }}
    </div>
    <!-- Add to cart -->
    <div class="cx-item-list-total col-2"></div>
  </div>
</ng-template>

<ng-template #itemTemplate let-item="item" let-active="active">
  <div
    *ngIf="active"
    class="row no-gutters list-item"
    tabindex="0"
    (click)="selectedProductCodes = [item.product.code]"
    (keydown.enter)="selectedProductCodes = [item.product.code]"
    (keydown.space)="selectedProductCodes = [item.product.code]"
    [class.selected]="item.selected"
  >
    <!-- Item Description -->
    <div class="col-6 flex-row thumbnail-and-product-info">
      <!-- Thumbnail -->
      <div class="thumbnail-container">
        <div class="thumbnail" [class.selected]="item.selected">
          <cx-media
            [container]="item.product.images?.PRIMARY"
            format="thumbnail"
          ></cx-media>
        </div>
      </div>

      <!-- Name -->
      <div class="flex-column product-info">
        <div *ngIf="item.product.name" class="cx-name">
          <a
            class="cx-link"
            [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
            (keydown.enter)="$event.currentTarget.click()"
            >{{ item.product.name }}</a
          >
        </div>

        <!-- ID -->
        <div *ngIf="item.product.code" class="cx-code">
          {{
            'epdVisualization.visualPicking.visualPickingProductList.id'
              | cxTranslate
          }}
          {{ item.product.code }}
        </div>
      </div>
    </div>

    <!-- Item Price -->
    <div class="col-4 flex-column price">
      <div *ngIf="item.product.price" class="cx-price">
        {{ item.product.price?.formattedValue }}
      </div>
    </div>

    <!-- Add to Cart -->
    <div class="cx-add-to-cart col-2 flex-column">
      <ng-container
        *ngIf="
          item.product.price !== undefined &&
          item.product.stock.stockLevelStatus !== 'outOfStock'
        "
      >
        <div
          class="add-to-cart"
          (click)="addToCartComponent.addToCart(); $event.preventDefault()"
          (keydown.enter)="
            addToCartComponent.addToCart(); $event.preventDefault()
          "
          (keydown.space)="
            addToCartComponent.addToCart(); $event.preventDefault()
          "
        >
          <cx-epd-visualization-compact-add-to-cart
            #addToCartComponent
            [showQuantity]="false"
            [product]="item.product"
          ></cx-epd-visualization-compact-add-to-cart>
        </div>
      </ng-container>

      <ng-container #noPrice *ngIf="item.product.price === undefined">
      </ng-container>

      <ng-container
        *ngIf="
          item.product.price !== undefined &&
          item.product.stock.stockLevelStatus === 'outOfStock'
        "
      >
        <div class="cx-out-of-stock">
          {{
            'epdVisualization.visualPicking.visualPickingProductList.outOfStock'
              | cxTranslate
          }}
        </div>
      </ng-container>
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: VisualPickingProductListService
  }], {
    title: [{
      type: Input
    }],
    singleSelection: [{
      type: Input
    }],
    selectedProductCodes: [{
      type: Input,
      args: ["selectedProductCodes"]
    }],
    selectedProductCodesChange: [{
      type: Output
    }]
  });
})();
var VisualPickingProductListModule = class _VisualPickingProductListModule {
  static {
    this.ɵfac = function VisualPickingProductListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingProductListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualPickingProductListModule,
      declarations: [VisualPickingProductListComponent],
      imports: [CommonModule, RouterModule, ProductReferencesModule, MediaModule, IconModule, CarouselModule, PagedListModule, UrlModule, I18nModule, CompactAddToCartModule],
      exports: [VisualPickingProductListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, ProductReferencesModule, MediaModule, IconModule, CarouselModule, PagedListModule, UrlModule, I18nModule, CompactAddToCartModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingProductListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ProductReferencesModule, MediaModule, IconModule, CarouselModule, PagedListModule, UrlModule, I18nModule, CompactAddToCartModule],
      declarations: [VisualPickingProductListComponent],
      exports: [VisualPickingProductListComponent]
    }]
  }], null, null);
})();
var VisualPickingTabService = class _VisualPickingTabService {
  constructor(currentProductService, globalMessageService, changeDetectorRef, windowRef) {
    this.currentProductService = currentProductService;
    this.globalMessageService = globalMessageService;
    this.changeDetectorRef = changeDetectorRef;
    this.windowRef = windowRef;
    this._selectedProductCodes = [];
    this.showErrorMessages = true;
  }
  /**
   * Initialize the service.
   * @param visualViewerService The VisualViewerService instance to use.
   * @param visualPickingProductListService The VisualPickingProductListService instance to use.
   */
  initialize(visualViewerService, visualPickingProductListService) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this.visualViewerService = visualViewerService;
    this.visualPickingProductListService = visualPickingProductListService;
    this.visualizationLoadInfoChangeSubscription = this.visualViewerService.visualizationLoadInfoChange.subscribe(this.handleLoadVisualizationInfoChange.bind(this));
    this.getFilteredProductReferencesSubscription = this.visualPickingProductListService.getFilteredProductReferences().subscribe((productReferences) => {
      const productCodes = productReferences.map((productReference) => productReference.target.code);
      this.visualViewerService.includedProductCodes = productCodes;
    });
    this.getProductReferencesSubscription = this.visualPickingProductListService.getProductReferences().subscribe((productReferences) => {
      this.setProductReferences(productReferences);
      if (productReferences.length > 0) {
        this.visualPickingProductListService.currentProduct$.pipe(first()).subscribe((currentProduct) => {
          this.visualViewerService.loadVisualization(currentProduct.code).pipe(first()).subscribe();
        });
      }
    });
  }
  ngOnDestroy() {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this.visualizationLoadInfoChangeSubscription?.unsubscribe();
    this.getProductReferencesSubscription?.unsubscribe();
    this.getFilteredProductReferencesSubscription?.unsubscribe();
  }
  get selectedProductCodes() {
    return this._selectedProductCodes;
  }
  set selectedProductCodes(selectedProducts) {
    this._selectedProductCodes = selectedProducts;
    this.changeDetectorRef.detectChanges();
  }
  get productReferences() {
    return this._productReferences;
  }
  setProductReferences(value) {
    this._productReferences = value;
    this.changeDetectorRef.markForCheck();
  }
  get visualizationLoadStatus() {
    return this.visualViewerService.visualizationLoadInfo?.loadStatus ?? VisualizationLoadStatus.NotStarted;
  }
  get hideNoProductReferencesText() {
    if (!this.windowRef.isBrowser()) {
      return true;
    }
    return this.productReferences === void 0 || this.productReferences.length > 0;
  }
  get hideProductList() {
    if (!this.windowRef.isBrowser()) {
      return true;
    }
    return this.productReferences === void 0 || this.productReferences.length === 0;
  }
  get hideViewport() {
    if (!this.windowRef.isBrowser()) {
      return true;
    }
    return this.productReferences === void 0 || this.productReferences.length === 0 || !(this.visualizationLoadStatus === VisualizationLoadStatus.Loading || this.visualizationLoadStatus === VisualizationLoadStatus.Loaded);
  }
  showErrorMessage(message) {
    if (this.showErrorMessages) {
      this.globalMessageService.add(message, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  handleLoadVisualizationInfoChange(visualizationLoadInfo) {
    switch (visualizationLoadInfo.lookupResult) {
      case VisualizationLookupResult.UniqueMatchFound:
        switch (visualizationLoadInfo.loadStatus) {
          case VisualizationLoadStatus.Loading:
            break;
          case VisualizationLoadStatus.UnexpectedError:
            this.showErrorMessage({
              key: "epdVisualization.errors.visualLoad.unexpectedLoadError"
            });
            break;
        }
        break;
      case VisualizationLookupResult.NoMatchFound:
        break;
      case VisualizationLookupResult.MultipleMatchesFound:
        this.showErrorMessage({
          key: "epdVisualization.errors.visualLoad.multipleMatchingVisualsFound"
        });
        break;
      case VisualizationLookupResult.UnexpectedError:
        this.showErrorMessage({
          key: "epdVisualization.errors.visualLoad.unexpectedLoadError"
        });
        break;
    }
    this.changeDetectorRef.detectChanges();
  }
  get visualViewerService() {
    return this._visualViewerService;
  }
  set visualViewerService(value) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._visualViewerService = value;
  }
  get visualPickingProductListService() {
    return this._visualPickingProductListService;
  }
  set visualPickingProductListService(value) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    this._visualPickingProductListService = value;
  }
  static {
    this.ɵfac = function VisualPickingTabService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingTabService)(ɵɵinject(CurrentProductService), ɵɵinject(GlobalMessageService), ɵɵinject(ChangeDetectorRef), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualPickingTabService,
      factory: _VisualPickingTabService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingTabService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: GlobalMessageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: WindowRef
  }], null);
})();
var VisualPickingTabComponent = class _VisualPickingTabComponent {
  constructor(visualPickingTabService) {
    this.visualPickingTabService = visualPickingTabService;
  }
  ngAfterViewInit() {
    this.visualPickingTabService.initialize(this.visualViewerService, this.visualPickingProductListService);
  }
  get selectedProductCodes() {
    return this.visualPickingTabService.selectedProductCodes;
  }
  set selectedProductCodes(selectedProducts) {
    this.visualPickingTabService.selectedProductCodes = selectedProducts;
  }
  get hideNoProductReferencesIndicator() {
    return this.visualPickingTabService.hideNoProductReferencesText;
  }
  get hideProductList() {
    return this.visualPickingTabService.hideProductList;
  }
  get hideViewport() {
    return this.visualPickingTabService.hideViewport;
  }
  static {
    this.ɵfac = function VisualPickingTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingTabComponent)(ɵɵdirectiveInject(VisualPickingTabService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VisualPickingTabComponent,
      selectors: [["cx-epd-visualization-visual-picking-tab"]],
      viewQuery: function VisualPickingTabComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(VisualViewerComponent, 5, VisualViewerService);
          ɵɵviewQuery(VisualPickingProductListComponent, 5, VisualPickingProductListService);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.visualViewerService = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.visualPickingProductListService = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵProvidersFeature([VisualPickingTabService])],
      decls: 9,
      vars: 17,
      consts: [[3, "hidden"], [3, "selectedProductCodesChange", "selectedProductCodes", "hidden", "outlineColor", "outlineWidth"], [1, "visual-picking-product-list-container", 3, "hidden"], [3, "selectedProductCodesChange", "selectedProductCodes"], [1, "container", "no-product-references", 3, "hidden"]],
      template: function VisualPickingTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "cx-epd-visualization-viewer", 1);
          ɵɵtwoWayListener("selectedProductCodesChange", function VisualPickingTabComponent_Template_cx_epd_visualization_viewer_selectedProductCodesChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.selectedProductCodes, $event) || (ctx.selectedProductCodes = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2);
          ɵɵelement(3, "cx-epd-visualization-product-filter");
          ɵɵelementStart(4, "cx-epd-visualization-product-list", 3);
          ɵɵtwoWayListener("selectedProductCodesChange", function VisualPickingTabComponent_Template_cx_epd_visualization_product_list_selectedProductCodesChange_4_listener($event) {
            ɵɵtwoWayBindingSet(ctx.selectedProductCodes, $event) || (ctx.selectedProductCodes = $event);
            return $event;
          });
          ɵɵelementEnd()()();
          ɵɵelementStart(5, "div", 4)(6, "span");
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("container-fluid", !ctx.hideViewport)("container", ctx.hideViewport);
          ɵɵproperty("hidden", !ctx.hideNoProductReferencesIndicator);
          ɵɵadvance();
          ɵɵtwoWayProperty("selectedProductCodes", ctx.selectedProductCodes);
          ɵɵproperty("hidden", ctx.hideViewport)("outlineColor", "--cx-color-primary")("outlineWidth", 8);
          ɵɵadvance();
          ɵɵclassProp("viewportHidden", ctx.hideViewport);
          ɵɵproperty("hidden", ctx.hideProductList);
          ɵɵadvance(2);
          ɵɵtwoWayProperty("selectedProductCodes", ctx.selectedProductCodes);
          ɵɵadvance();
          ɵɵproperty("hidden", ctx.hideNoProductReferencesIndicator);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(8, 15, "epdVisualization.visualPicking.visualPickingTab.noProductReferences"));
        }
      },
      dependencies: [VisualViewerComponent, VisualPickingProductListComponent, VisualPickingProductFilterComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingTabComponent, [{
    type: Component,
    args: [{
      selector: "cx-epd-visualization-visual-picking-tab",
      providers: [VisualPickingTabService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [class.container-fluid]="!hideViewport"
  [class.container]="hideViewport"
  [hidden]="!hideNoProductReferencesIndicator"
>
  <cx-epd-visualization-viewer
    [(selectedProductCodes)]="selectedProductCodes"
    [hidden]="hideViewport"
    [outlineColor]="'--cx-color-primary'"
    [outlineWidth]="8"
  >
  </cx-epd-visualization-viewer>

  <div
    class="visual-picking-product-list-container"
    [hidden]="hideProductList"
    [class.viewportHidden]="hideViewport"
  >
    <cx-epd-visualization-product-filter></cx-epd-visualization-product-filter>

    <cx-epd-visualization-product-list
      [(selectedProductCodes)]="selectedProductCodes"
    >
    </cx-epd-visualization-product-list>
  </div>
</div>

<div
  class="container no-product-references"
  [hidden]="hideNoProductReferencesIndicator"
>
  <span>{{
    'epdVisualization.visualPicking.visualPickingTab.noProductReferences'
      | cxTranslate
  }}</span>
</div>
`
    }]
  }], () => [{
    type: VisualPickingTabService
  }], {
    visualViewerService: [{
      type: ViewChild,
      args: [VisualViewerComponent, {
        read: VisualViewerService
      }]
    }],
    visualPickingProductListService: [{
      type: ViewChild,
      args: [VisualPickingProductListComponent, {
        read: VisualPickingProductListService
      }]
    }]
  });
})();
var VisualPickingTabModule = class _VisualPickingTabModule {
  static {
    this.ɵfac = function VisualPickingTabModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualPickingTabModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VisualPickingTabModule,
      declarations: [VisualPickingTabComponent],
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerModule, VisualPickingProductListModule, VisualPickingProductFilterModule],
      exports: [VisualPickingTabComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          VisualPickingTabComponent: {
            component: VisualPickingTabComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerModule, VisualPickingProductListModule, VisualPickingProductFilterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualPickingTabModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, VisualViewerModule, VisualPickingProductListModule, VisualPickingProductFilterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          VisualPickingTabComponent: {
            component: VisualPickingTabComponent
          }
        }
      })],
      declarations: [VisualPickingTabComponent],
      exports: [VisualPickingTabComponent]
    }]
  }], null, null);
})();
var EpdVisualizationComponentsModule = class _EpdVisualizationComponentsModule {
  static {
    this.ɵfac = function EpdVisualizationComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EpdVisualizationComponentsModule,
      imports: [VisualPickingTabModule, VisualViewerModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [VisualPickingTabModule, VisualViewerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationComponentsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [VisualPickingTabModule, VisualViewerModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/epd-visualization/fesm2022/spartacus-epd-visualization-epd-visualization-api.mjs
var StorageV1Adapter = class _StorageV1Adapter {
  constructor(http, epdVisualizationConfig, converter) {
    this.http = http;
    this.epdVisualizationConfig = epdVisualizationConfig;
    this.converter = converter;
    this.logger = inject(LoggerService);
    this.baseUrl = this.getBaseUrl();
  }
  getBaseUrl() {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const visualizationApiConfig = epdVisualization.apis;
    return `${visualizationApiConfig.baseUrl}/vis/public/storage`;
  }
  getUrl(sceneId, nodeIds, $expand, $filter, contentType) {
    const queryParts = [];
    if (nodeIds) {
      nodeIds.forEach((nodeId) => queryParts.push(`id=${nodeId}`));
    }
    if ($expand) {
      queryParts.push(`$expand=${$expand.join(",")}`);
    }
    if ($filter) {
      queryParts.push(`$filter=${$filter.join(",")}`);
    }
    if (contentType) {
      queryParts.push(`contentType=${contentType}`);
    }
    const queryString = queryParts.length ? `?${queryParts.join("&")}` : "";
    return `${this.baseUrl}/v1/scenes/${sceneId}/nodes${queryString}`;
  }
  /**
   * Used for getting information about scene nodes (such as usage ID values).
   * @param sceneId The scene id to use as the sceneId path parameter.
   * @param nodeIds An array of scene node ids to pass in id query parameters.
   * @param $expand A set of strings to combine to form the $expand query parameter.
   * @param $filter A set of strings to combine to form the $filter query parameter.
   * @param contentType The contentType query parameter.
   * @returns An Observable producing a NodesResponse which contains an array of objects describing scene nodes.
   */
  getNodes(sceneId, nodeIds, $expand, $filter, contentType) {
    return this.http.get(this.getUrl(sceneId, nodeIds, $expand, $filter, contentType)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(NODES_RESPONSE_NORMALIZER));
  }
  static {
    this.ɵfac = function StorageV1Adapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StorageV1Adapter)(ɵɵinject(HttpClient), ɵɵinject(EpdVisualizationConfig), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StorageV1Adapter,
      factory: _StorageV1Adapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageV1Adapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: EpdVisualizationConfig
  }, {
    type: ConverterService
  }], null);
})();
var VisualizationV1Adapter = class _VisualizationV1Adapter {
  constructor(http, epdVisualizationConfig, converter) {
    this.http = http;
    this.epdVisualizationConfig = epdVisualizationConfig;
    this.converter = converter;
    this.logger = inject(LoggerService);
    this.baseUrl = this.getBaseUrl();
  }
  getBaseUrl() {
    const epdVisualization = this.epdVisualizationConfig.epdVisualization;
    const visualizationApiConfig = epdVisualization.apis;
    return `${visualizationApiConfig.baseUrl}/vis/public/visualization`;
  }
  getUrl(visualizationUsageId, folderUsageId) {
    const queryParts = [`usage=${encodeURIComponent(JSON.stringify(visualizationUsageId))}`, `folderUsageId=${encodeURIComponent(JSON.stringify(folderUsageId))}`];
    return `${this.baseUrl}/v1/lookup/visualization?${queryParts.join("&")}`;
  }
  /**
   * Used for finding a visualization by Usage ID that has anonymous (unauthenticated) read access enabled.
   * The search is performed in the SAP EPD Visualization service instance associated with the SaaS subscription for the SAP EPD tenant.
   * @param visualizationUsageId The SAP EPD Visualization usage ID value identifying visualizations to match.
   * Only visualizations that have the specified usage ID value will be returned.
   * @param folderUsageId The SAP EPD Visualization usage ID identifying folders to search for visualizations.
   * Only folders that are tagged with the specified usage ID value that have anonymous access enabled will be searched.
   * @returns An Observable producing a LookupVisualizationsResponse which contains an array of objects describing matched visualizations.
   */
  lookupVisualization(visualizationUsageId, folderUsageId) {
    return this.http.get(this.getUrl(visualizationUsageId, folderUsageId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(LOOKUP_VISUALIZATIONS_RESPONSE_NORMALIZER));
  }
  static {
    this.ɵfac = function VisualizationV1Adapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisualizationV1Adapter)(ɵɵinject(HttpClient), ɵɵinject(EpdVisualizationConfig), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VisualizationV1Adapter,
      factory: _VisualizationV1Adapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisualizationV1Adapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: EpdVisualizationConfig
  }, {
    type: ConverterService
  }], null);
})();
var EpdVisualizationApiModule = class _EpdVisualizationApiModule {
  static {
    this.ɵfac = function EpdVisualizationApiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationApiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EpdVisualizationApiModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: SceneAdapter,
        useClass: StorageV1Adapter
      }, {
        provide: VisualizationAdapter,
        useClass: VisualizationV1Adapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationApiModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: SceneAdapter,
        useClass: StorageV1Adapter
      }, {
        provide: VisualizationAdapter,
        useClass: VisualizationV1Adapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/epd-visualization/fesm2022/spartacus-epd-visualization.mjs
var EpdVisualizationModule = class _EpdVisualizationModule {
  static {
    this.ɵfac = function EpdVisualizationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EpdVisualizationModule,
      imports: [EpdVisualizationComponentsModule, EpdVisualizationCoreModule, EpdVisualizationApiModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [EpdVisualizationComponentsModule, EpdVisualizationCoreModule, EpdVisualizationApiModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationModule, [{
    type: NgModule,
    args: [{
      imports: [EpdVisualizationComponentsModule, EpdVisualizationCoreModule, EpdVisualizationApiModule]
    }]
  }], null, null);
})();
export {
  EpdVisualizationModule
};
//# sourceMappingURL=@spartacus_epd-visualization.js.map
