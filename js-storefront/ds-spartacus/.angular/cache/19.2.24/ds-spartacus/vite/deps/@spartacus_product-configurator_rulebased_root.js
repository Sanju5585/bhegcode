import {
  CommonConfiguratorModule,
  CommonConfiguratorUtilsService,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService
} from "./chunk-2H7NFAMW.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-KEAKWHYV.js";
import {
  BREAKPOINT,
  BreakpointService,
  CmsPageGuard,
  HamburgerMenuModule,
  LayoutConfig,
  PAGE_LAYOUT_HANDLER,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  Priority,
  provideDefaultConfig,
  provideDefaultConfigFactory
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
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  map,
  take
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-rulebased-root.mjs
var CpqConfiguratorPageLayoutHandler = class _CpqConfiguratorPageLayoutHandler {
  static {
    this.templateName = "CpqConfigurationTemplate";
  }
  static {
    this.sectionHeaderDisplayOnly = "headerDisplayOnly";
  }
  static {
    this.sectionNavigationDisplayOnly = "navigationDisplayOnly";
  }
  static {
    this.sectionHeader = "header";
  }
  static {
    this.sectionNavigation = "navigation";
  }
  constructor(configuratorRouterExtractorService, breakpointService, layoutConfig, commonConfiguratorUtilsService) {
    this.configuratorRouterExtractorService = configuratorRouterExtractorService;
    this.breakpointService = breakpointService;
    this.layoutConfig = layoutConfig;
    this.commonConfiguratorUtilsService = commonConfiguratorUtilsService;
  }
  handle(slots$, pageTemplate, section) {
    if (pageTemplate === _CpqConfiguratorPageLayoutHandler.templateName && section === _CpqConfiguratorPageLayoutHandler.sectionHeader) {
      this.compileRouterAndResolution().pipe(take(1)).subscribe((cont) => {
        slots$ = slots$.pipe(map((slots) => this.getHeaderSlots(slots, cont)));
      });
    } else if (pageTemplate === _CpqConfiguratorPageLayoutHandler.templateName && section === _CpqConfiguratorPageLayoutHandler.sectionNavigation) {
      this.compileRouterAndResolution().pipe(take(1)).subscribe((cont) => {
        slots$ = slots$.pipe(map((slots) => this.getNavigationSlots(slots, cont)));
      });
    }
    return slots$;
  }
  compileRouterAndResolution() {
    return this.configuratorRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.breakpointService.isUp(BREAKPOINT.lg).pipe(map((isLargeResolution) => ({
      isLargeResolution,
      routerData
    })))));
  }
  getHeaderSlots(slots, cont) {
    if (cont.routerData.pageType === ConfiguratorRouter.PageType.CONFIGURATION) {
      const extendedSlots = ["PreHeader"];
      extendedSlots.push(...slots);
      return extendedSlots;
    } else if (cont.routerData.displayOnly) {
      if (cont.isLargeResolution) {
        return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _CpqConfiguratorPageLayoutHandler.templateName, _CpqConfiguratorPageLayoutHandler.sectionHeaderDisplayOnly, BREAKPOINT.lg);
      } else {
        return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _CpqConfiguratorPageLayoutHandler.templateName, _CpqConfiguratorPageLayoutHandler.sectionHeaderDisplayOnly, BREAKPOINT.xs);
      }
    } else {
      return slots;
    }
  }
  getNavigationSlots(slots, cont) {
    if (cont.routerData.pageType === ConfiguratorRouter.PageType.OVERVIEW && cont.routerData.displayOnly) {
      if (cont.isLargeResolution) {
        return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _CpqConfiguratorPageLayoutHandler.templateName, _CpqConfiguratorPageLayoutHandler.sectionNavigationDisplayOnly, BREAKPOINT.lg);
      } else {
        return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _CpqConfiguratorPageLayoutHandler.templateName, _CpqConfiguratorPageLayoutHandler.sectionNavigationDisplayOnly, BREAKPOINT.xs);
      }
    } else {
      return slots;
    }
  }
  static {
    this.ɵfac = function CpqConfiguratorPageLayoutHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorPageLayoutHandler)(ɵɵinject(ConfiguratorRouterExtractorService), ɵɵinject(BreakpointService), ɵɵinject(LayoutConfig), ɵɵinject(CommonConfiguratorUtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorPageLayoutHandler,
      factory: _CpqConfiguratorPageLayoutHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorPageLayoutHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfiguratorRouterExtractorService
  }, {
    type: BreakpointService
  }, {
    type: LayoutConfig
  }, {
    type: CommonConfiguratorUtilsService
  }], null);
})();
var CpqConfiguratorLayoutModule = class _CpqConfiguratorLayoutModule {
  static {
    this.ɵfac = function CpqConfiguratorLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorLayoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorLayoutModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        layoutSlots: {
          CpqConfigurationTemplate: {
            header: {
              lg: {
                slots: ["SiteLogo", "CpqConfigExitButton", "MiniCart"]
              },
              xs: {
                slots: ["SiteLogo", "CpqConfigExitButton", "MiniCart"]
              }
            },
            headerDisplayOnly: {
              lg: {
                slots: ["SiteContext", "SiteLinks", "SiteLogo", "SearchBox", "SiteLogin", "MiniCart", "NavigationBar"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "SearchBox", "MiniCart"]
              }
            },
            navigation: {
              lg: {
                slots: []
              },
              slots: ["CpqConfigMenu"]
            },
            navigationDisplayOnly: {
              lg: {
                slots: []
              },
              xs: {
                slots: ["SiteLogin", "NavigationBar", "SiteContext", "SiteLinks"]
              }
            },
            lg: {
              slots: ["CpqConfigHeader", "CpqConfigBanner", "CpqConfigMenu", "CpqConfigContent", "CpqConfigOverviewBanner", "CpqConfigOverviewContent", "CpqConfigBottombar"]
            },
            slots: ["CpqConfigHeader", "CpqConfigBanner", "CpqConfigContent", "CpqConfigOverviewBanner", "CpqConfigOverviewContent", "CpqConfigBottombar"]
          }
        }
      }), {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CpqConfiguratorPageLayoutHandler,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorLayoutModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        layoutSlots: {
          CpqConfigurationTemplate: {
            header: {
              lg: {
                slots: ["SiteLogo", "CpqConfigExitButton", "MiniCart"]
              },
              xs: {
                slots: ["SiteLogo", "CpqConfigExitButton", "MiniCart"]
              }
            },
            headerDisplayOnly: {
              lg: {
                slots: ["SiteContext", "SiteLinks", "SiteLogo", "SearchBox", "SiteLogin", "MiniCart", "NavigationBar"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "SearchBox", "MiniCart"]
              }
            },
            navigation: {
              lg: {
                slots: []
              },
              slots: ["CpqConfigMenu"]
            },
            navigationDisplayOnly: {
              lg: {
                slots: []
              },
              xs: {
                slots: ["SiteLogin", "NavigationBar", "SiteContext", "SiteLinks"]
              }
            },
            lg: {
              slots: ["CpqConfigHeader", "CpqConfigBanner", "CpqConfigMenu", "CpqConfigContent", "CpqConfigOverviewBanner", "CpqConfigOverviewContent", "CpqConfigBottombar"]
            },
            slots: ["CpqConfigHeader", "CpqConfigBanner", "CpqConfigContent", "CpqConfigOverviewBanner", "CpqConfigOverviewContent", "CpqConfigBottombar"]
          }
        }
      }), {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CpqConfiguratorPageLayoutHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
var defaultCpqInteractiveRoutingConfig = {
  routing: {
    routes: {
      configureCLOUDCPQCONFIGURATOR: {
        paths: ["configure/cpq/:ownerType/entityKey/:entityKey"]
      }
    }
  }
};
var CpqConfiguratorInteractiveModule = class _CpqConfiguratorInteractiveModule {
  static {
    this.ɵfac = function CpqConfiguratorInteractiveModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorInteractiveModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorInteractiveModule,
      imports: [RouterModule, HamburgerMenuModule, CpqConfiguratorLayoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultCpqInteractiveRoutingConfig)],
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        data: {
          cxRoute: "configureCLOUDCPQCONFIGURATOR"
        },
        component: PageLayoutComponent,
        canActivate: [CmsPageGuard]
      }]), HamburgerMenuModule, CpqConfiguratorLayoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorInteractiveModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        data: {
          cxRoute: "configureCLOUDCPQCONFIGURATOR"
        },
        component: PageLayoutComponent,
        canActivate: [CmsPageGuard]
      }]), HamburgerMenuModule, CpqConfiguratorLayoutModule],
      providers: [provideDefaultConfig(defaultCpqInteractiveRoutingConfig)]
    }]
  }], null, null);
})();
var defaultCpqOverviewRoutingConfig = {
  routing: {
    routes: {
      configureOverviewCLOUDCPQCONFIGURATOR: {
        paths: ["configure-overview/cpq/:ownerType/entityKey/:entityKey/displayOnly/:displayOnly", "configure-overview/cpq/:ownerType/entityKey/:entityKey"]
      }
    }
  }
};
var CpqConfiguratorOverviewModule = class _CpqConfiguratorOverviewModule {
  static {
    this.ɵfac = function CpqConfiguratorOverviewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorOverviewModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorOverviewModule,
      imports: [RouterModule, CpqConfiguratorLayoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultCpqOverviewRoutingConfig)],
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewCLOUDCPQCONFIGURATOR"
        },
        canActivate: [CmsPageGuard]
      }]), CpqConfiguratorLayoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorOverviewModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewCLOUDCPQCONFIGURATOR"
        },
        canActivate: [CmsPageGuard]
      }]), CpqConfiguratorLayoutModule],
      providers: [provideDefaultConfig(defaultCpqOverviewRoutingConfig)]
    }]
  }], null, null);
})();
var CpqConfiguratorRootModule = class _CpqConfiguratorRootModule {
  static {
    this.ɵfac = function CpqConfiguratorRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorRootModule,
      imports: [CpqConfiguratorInteractiveModule, CpqConfiguratorOverviewModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        routing: {
          protected: true
        }
      })],
      imports: [CpqConfiguratorInteractiveModule, CpqConfiguratorOverviewModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorRootModule, [{
    type: NgModule,
    args: [{
      imports: [CpqConfiguratorInteractiveModule, CpqConfiguratorOverviewModule],
      //force early login
      providers: [provideDefaultConfig({
        routing: {
          protected: true
        }
      })]
    }]
  }], null, null);
})();
var PRODUCT_CONFIGURATOR_RULEBASED_FEATURE = "productConfiguratorRulebased";
var ConfiguratorBadRequestHandler = class _ConfiguratorBadRequestHandler extends HttpErrorHandler {
  constructor(globalMessageService) {
    super(globalMessageService);
    this.globalMessageService = globalMessageService;
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  getPriority() {
    return Priority.NORMAL;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.isRelatedToProductConfigurator(errorResponse);
  }
  handleError(_request, response) {
    this.getIllegalStateErrorsRelatedToProductConfigurator(response).forEach(({
      message
    }) => {
      this.handleIllegalArgumentIssues(message);
    });
  }
  handleIllegalArgumentIssues(message) {
    if (this.isIllegalStateErrorRelatedToMakeToStock(message)) {
      this.globalMessageService.add({
        key: "configurator.httpHandlers.makeToStockBaseProductIssue"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  isNotEmpty(errors) {
    return errors?.length > 0;
  }
  isIllegalStateErrorRelatedToMakeToStock(message) {
    const discountMask = /base product is defined as 'make-to-stock'/;
    return message.match(discountMask) !== null;
  }
  isIllegalStateErrorRelatedToProductConfigurator(message) {
    return message && this.isIllegalStateErrorRelatedToMakeToStock(message);
  }
  getIllegalStateErrorsRelatedToProductConfigurator(response) {
    return (response?.error?.errors ?? []).filter((error) => error.type === "IllegalStateError").filter((error) => this.isIllegalStateErrorRelatedToProductConfigurator(error.message));
  }
  isRelatedToProductConfigurator(response) {
    return this.isNotEmpty(this.getIllegalStateErrorsRelatedToProductConfigurator(response));
  }
  static {
    this.ɵfac = function ConfiguratorBadRequestHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorBadRequestHandler)(ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorBadRequestHandler,
      factory: _ConfiguratorBadRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorBadRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: GlobalMessageService
  }], null);
})();
var cmsComponents = ["ConfiguratorForm", "ConfiguratorOverviewForm", "ConfiguratorOverviewMenu", "ConfiguratorUpdateMessage", "ConfiguratorAddToCartButton", "ConfiguratorMenu", "ConfiguratorGroupTitle", "ConfiguratorOverviewBanner", "ConfiguratorPrevNext", "ConfiguratorPriceSummary", "ConfiguratorProductTitle", "ConfiguratorTabBar", "ConfiguratorExitButton", "ConfiguratorVariantCarousel", "CpqConfiguratorConflictAndErrorMessagesComponent", "ConfiguratorOverviewFilterButton", "ConfiguratorOverviewFilter", "ConfiguratorOverviewSidebar"];
function defaultProductConfiguratorRulebasedComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_CONFIGURATOR_RULEBASED_FEATURE]: {
        cmsComponents
      }
    }
  };
  return config;
}
var RulebasedConfiguratorRootFeatureModule = class _RulebasedConfiguratorRootFeatureModule {
  static {
    this.ɵfac = function RulebasedConfiguratorRootFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorRootFeatureModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorRootFeatureModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductConfiguratorRulebasedComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorRootFeatureModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultProductConfiguratorRulebasedComponentsConfig)]
    }]
  }], null, null);
})();
var defaultRulebasedRoutingConfig = {
  routing: {
    routes: {
      configureCPQCONFIGURATOR: {
        paths: ["configure/vc/:ownerType/entityKey/:entityKey"]
      },
      configureCPQCONFIGURATOR_READ_ONLY: {
        paths: ["configure-overview/vc/:ownerType/entityKey/:entityKey/displayOnly/true"]
      },
      configureOverviewCPQCONFIGURATOR: {
        paths: ["configure-overview/vc/:ownerType/entityKey/:entityKey/displayOnly/:displayOnly", "configure-overview/vc/:ownerType/entityKey/:entityKey"]
      }
    }
  }
};
var RulebasedConfiguratorRoutingModule = class _RulebasedConfiguratorRoutingModule {
  static forRoot() {
    return {
      ngModule: _RulebasedConfiguratorRoutingModule,
      providers: [provideDefaultConfig(defaultRulebasedRoutingConfig)]
    };
  }
  static {
    this.ɵfac = function RulebasedConfiguratorRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorRoutingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorRoutingModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorRoutingModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var VariantConfiguratorInteractiveLayoutModule = class _VariantConfiguratorInteractiveLayoutModule {
  static {
    this.ɵfac = function VariantConfiguratorInteractiveLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorInteractiveLayoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VariantConfiguratorInteractiveLayoutModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        layoutSlots: {
          VariantConfigurationTemplate: {
            header: {
              lg: {
                slots: ["PreHeader", "SiteLogo", "VariantConfigExitButton", "MiniCart"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "VariantConfigExitButton", "MiniCart"]
              }
            },
            navigation: {
              lg: {
                slots: []
              },
              slots: ["VariantConfigMenu"]
            },
            lg: {
              slots: ["VariantConfigHeader", "VariantConfigMenu", "VariantConfigContent", "VariantConfigBottombar", "VariantConfigVariantCarousel"]
            },
            slots: ["VariantConfigHeader", "VariantConfigContent", "VariantConfigBottombar", "VariantConfigVariantCarousel"]
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorInteractiveLayoutModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        layoutSlots: {
          VariantConfigurationTemplate: {
            header: {
              lg: {
                slots: ["PreHeader", "SiteLogo", "VariantConfigExitButton", "MiniCart"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "VariantConfigExitButton", "MiniCart"]
              }
            },
            navigation: {
              lg: {
                slots: []
              },
              slots: ["VariantConfigMenu"]
            },
            lg: {
              slots: ["VariantConfigHeader", "VariantConfigMenu", "VariantConfigContent", "VariantConfigBottombar", "VariantConfigVariantCarousel"]
            },
            slots: ["VariantConfigHeader", "VariantConfigContent", "VariantConfigBottombar", "VariantConfigVariantCarousel"]
          }
        }
      })]
    }]
  }], null, null);
})();
var VariantConfiguratorInteractiveModule = class _VariantConfiguratorInteractiveModule {
  static {
    this.ɵfac = function VariantConfiguratorInteractiveModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorInteractiveModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VariantConfiguratorInteractiveModule,
      imports: [RouterModule, HamburgerMenuModule, VariantConfiguratorInteractiveLayoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        data: {
          cxRoute: "configureCPQCONFIGURATOR"
        },
        component: PageLayoutComponent,
        canActivate: [CmsPageGuard]
      }]), HamburgerMenuModule, VariantConfiguratorInteractiveLayoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorInteractiveModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        data: {
          cxRoute: "configureCPQCONFIGURATOR"
        },
        component: PageLayoutComponent,
        canActivate: [CmsPageGuard]
      }]), HamburgerMenuModule, VariantConfiguratorInteractiveLayoutModule]
    }]
  }], null, null);
})();
var VariantConfiguratorPageLayoutHandler = class _VariantConfiguratorPageLayoutHandler {
  static {
    this.templateName = "VariantConfigurationOverviewTemplate";
  }
  static {
    this.sectionDisplayOnlyName = "headerDisplayOnly";
  }
  constructor(configuratorRouterExtractorService, breakpointService, layoutConfig, commonConfiguratorUtilsService) {
    this.configuratorRouterExtractorService = configuratorRouterExtractorService;
    this.breakpointService = breakpointService;
    this.layoutConfig = layoutConfig;
    this.commonConfiguratorUtilsService = commonConfiguratorUtilsService;
  }
  handle(slots$, pageTemplate, section) {
    if (pageTemplate === _VariantConfiguratorPageLayoutHandler.templateName && section === "header") {
      this.configuratorRouterExtractorService.extractRouterData().pipe(take(1)).subscribe((routerData) => {
        if (routerData.displayOnly) {
          slots$ = slots$.pipe(switchMap(() => this.breakpointService.isUp(BREAKPOINT.lg)), map((isLargeResolution) => {
            if (isLargeResolution) {
              return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _VariantConfiguratorPageLayoutHandler.templateName, _VariantConfiguratorPageLayoutHandler.sectionDisplayOnlyName, BREAKPOINT.lg);
            } else {
              return this.commonConfiguratorUtilsService.getSlotsFromLayoutConfiguration(this.layoutConfig, _VariantConfiguratorPageLayoutHandler.templateName, _VariantConfiguratorPageLayoutHandler.sectionDisplayOnlyName, BREAKPOINT.xs);
            }
          }));
        }
      });
    }
    return slots$;
  }
  static {
    this.ɵfac = function VariantConfiguratorPageLayoutHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorPageLayoutHandler)(ɵɵinject(ConfiguratorRouterExtractorService), ɵɵinject(BreakpointService), ɵɵinject(LayoutConfig), ɵɵinject(CommonConfiguratorUtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VariantConfiguratorPageLayoutHandler,
      factory: _VariantConfiguratorPageLayoutHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorPageLayoutHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfiguratorRouterExtractorService
  }, {
    type: BreakpointService
  }, {
    type: LayoutConfig
  }, {
    type: CommonConfiguratorUtilsService
  }], null);
})();
var VariantConfiguratorOverviewLayoutModule = class _VariantConfiguratorOverviewLayoutModule {
  static {
    this.ɵfac = function VariantConfiguratorOverviewLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorOverviewLayoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VariantConfiguratorOverviewLayoutModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        layoutSlots: {
          VariantConfigurationOverviewTemplate: {
            header: {
              slots: ["SiteLogo", "VariantConfigOverviewExitButton", "MiniCart"]
            },
            headerDisplayOnly: {
              lg: {
                slots: ["SiteContext", "SiteLinks", "SiteLogo", "SearchBox", "SiteLogin", "MiniCart", "NavigationBar"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "SearchBox", "MiniCart"]
              }
            },
            lg: {
              slots: ["VariantConfigOverviewHeader", "VariantConfigOverviewBanner", "VariantConfigOverviewNavigation", "VariantConfigOverviewContent", "VariantConfigOverviewBottombar"]
            },
            slots: ["VariantConfigOverviewHeader", "VariantConfigOverviewBanner", "VariantConfigOverviewFilterButton", "VariantConfigOverviewContent", "VariantConfigOverviewBottombar"]
          }
        }
      }), {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: VariantConfiguratorPageLayoutHandler,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorOverviewLayoutModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        layoutSlots: {
          VariantConfigurationOverviewTemplate: {
            header: {
              slots: ["SiteLogo", "VariantConfigOverviewExitButton", "MiniCart"]
            },
            headerDisplayOnly: {
              lg: {
                slots: ["SiteContext", "SiteLinks", "SiteLogo", "SearchBox", "SiteLogin", "MiniCart", "NavigationBar"]
              },
              xs: {
                slots: ["PreHeader", "SiteLogo", "SearchBox", "MiniCart"]
              }
            },
            lg: {
              slots: ["VariantConfigOverviewHeader", "VariantConfigOverviewBanner", "VariantConfigOverviewNavigation", "VariantConfigOverviewContent", "VariantConfigOverviewBottombar"]
            },
            slots: ["VariantConfigOverviewHeader", "VariantConfigOverviewBanner", "VariantConfigOverviewFilterButton", "VariantConfigOverviewContent", "VariantConfigOverviewBottombar"]
          }
        }
      }), {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: VariantConfiguratorPageLayoutHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
var VariantConfiguratorOverviewModule = class _VariantConfiguratorOverviewModule {
  static {
    this.ɵfac = function VariantConfiguratorOverviewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorOverviewModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VariantConfiguratorOverviewModule,
      imports: [RouterModule, VariantConfiguratorOverviewLayoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewCPQCONFIGURATOR"
        },
        canActivate: [CmsPageGuard]
      }]), VariantConfiguratorOverviewLayoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorOverviewModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewCPQCONFIGURATOR"
        },
        canActivate: [CmsPageGuard]
      }]), VariantConfiguratorOverviewLayoutModule]
    }]
  }], null, null);
})();
var RulebasedConfiguratorRootModule = class _RulebasedConfiguratorRootModule {
  static forRoot() {
    return {
      ngModule: _RulebasedConfiguratorRootModule
    };
  }
  static {
    this.ɵfac = function RulebasedConfiguratorRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorRootModule,
      imports: [CommonModule, CommonConfiguratorModule, RulebasedConfiguratorRootFeatureModule, VariantConfiguratorInteractiveModule, VariantConfiguratorOverviewModule, RulebasedConfiguratorRoutingModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: HttpErrorHandler,
        useExisting: ConfiguratorBadRequestHandler,
        multi: true
      }],
      imports: [CommonModule, CommonConfiguratorModule, RulebasedConfiguratorRootFeatureModule, VariantConfiguratorInteractiveModule, VariantConfiguratorOverviewModule, RulebasedConfiguratorRoutingModule.forRoot()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorRootModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CommonConfiguratorModule, RulebasedConfiguratorRootFeatureModule, VariantConfiguratorInteractiveModule, VariantConfiguratorOverviewModule, RulebasedConfiguratorRoutingModule.forRoot()],
      providers: [{
        provide: HttpErrorHandler,
        useExisting: ConfiguratorBadRequestHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
export {
  ConfiguratorBadRequestHandler,
  CpqConfiguratorInteractiveModule,
  CpqConfiguratorLayoutModule,
  CpqConfiguratorOverviewModule,
  CpqConfiguratorRootModule,
  PRODUCT_CONFIGURATOR_RULEBASED_FEATURE,
  RulebasedConfiguratorRootFeatureModule,
  RulebasedConfiguratorRootModule,
  RulebasedConfiguratorRoutingModule,
  VariantConfiguratorInteractiveLayoutModule,
  VariantConfiguratorInteractiveModule,
  VariantConfiguratorOverviewLayoutModule,
  VariantConfiguratorOverviewModule,
  VariantConfiguratorPageLayoutHandler,
  defaultProductConfiguratorRulebasedComponentsConfig
};
//# sourceMappingURL=@spartacus_product-configurator_rulebased_root.js.map
