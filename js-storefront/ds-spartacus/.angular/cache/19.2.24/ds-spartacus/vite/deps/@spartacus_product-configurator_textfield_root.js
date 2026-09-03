import {
  CommonConfiguratorModule
} from "./chunk-2H7NFAMW.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
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
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-textfield-root.mjs
var PRODUCT_CONFIGURATOR_TEXTFIELD_FEATURE = "productConfiguratorTextfield";
var cmsComponents = ["TextfieldConfigurationForm"];
function defaultProductConfiguratorTextfieldComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_CONFIGURATOR_TEXTFIELD_FEATURE]: {
        cmsComponents
      }
    }
  };
  return config;
}
var TextfieldConfiguratorRootFeatureModule = class _TextfieldConfiguratorRootFeatureModule {
  static {
    this.ɵfac = function TextfieldConfiguratorRootFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorRootFeatureModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorRootFeatureModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductConfiguratorTextfieldComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorRootFeatureModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultProductConfiguratorTextfieldComponentsConfig)]
    }]
  }], null, null);
})();
var defaultTextfieldRoutingConfig = {
  routing: {
    routes: {
      configureTEXTFIELD: {
        paths: ["configure/textfield/:ownerType/entityKey/:entityKey"]
      },
      configureOverviewTEXTFIELD: {
        paths: ["configure-overview/textfield/:ownerType/entityKey/:entityKey/displayOnly/:displayOnly", "configure-overview/textfield/:ownerType/entityKey/:entityKey"]
      }
    }
  }
};
var TextfieldConfiguratorRoutingModule = class _TextfieldConfiguratorRoutingModule {
  static forRoot() {
    return {
      ngModule: _TextfieldConfiguratorRoutingModule,
      providers: [provideDefaultConfig(defaultTextfieldRoutingConfig)]
    };
  }
  static {
    this.ɵfac = function TextfieldConfiguratorRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorRoutingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorRoutingModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorRoutingModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var TextfieldConfiguratorRootModule = class _TextfieldConfiguratorRootModule {
  static forRoot() {
    return {
      ngModule: _TextfieldConfiguratorRootModule
    };
  }
  static {
    this.ɵfac = function TextfieldConfiguratorRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorRootModule,
      imports: [CommonModule, CommonConfiguratorModule, TextfieldConfiguratorRootFeatureModule, TextfieldConfiguratorRoutingModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        layoutSlots: {
          TextfieldConfigurationTemplate: {
            slots: ["TextfieldConfigContent"]
          }
        }
      })],
      imports: [CommonModule, CommonConfiguratorModule, TextfieldConfiguratorRootFeatureModule, TextfieldConfiguratorRoutingModule.forRoot(), RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureTEXTFIELD"
        },
        canActivate: [CmsPageGuard]
      }, {
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewTEXTFIELD"
        },
        canActivate: [CmsPageGuard]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorRootModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CommonConfiguratorModule, TextfieldConfiguratorRootFeatureModule, TextfieldConfiguratorRoutingModule.forRoot(), RouterModule.forChild([{
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureTEXTFIELD"
        },
        canActivate: [CmsPageGuard]
      }, {
        // We can neither omit the path nor set to undefined
        // @ts-ignore
        path: null,
        component: PageLayoutComponent,
        data: {
          cxRoute: "configureOverviewTEXTFIELD"
        },
        canActivate: [CmsPageGuard]
      }])],
      providers: [provideDefaultConfig({
        layoutSlots: {
          TextfieldConfigurationTemplate: {
            slots: ["TextfieldConfigContent"]
          }
        }
      })]
    }]
  }], null, null);
})();
export {
  PRODUCT_CONFIGURATOR_TEXTFIELD_FEATURE,
  TextfieldConfiguratorRootFeatureModule,
  TextfieldConfiguratorRootModule,
  TextfieldConfiguratorRoutingModule,
  defaultProductConfiguratorTextfieldComponentsConfig
};
//# sourceMappingURL=@spartacus_product-configurator_textfield_root.js.map
