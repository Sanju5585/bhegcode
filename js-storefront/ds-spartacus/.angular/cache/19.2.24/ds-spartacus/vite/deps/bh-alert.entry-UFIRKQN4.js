import {
  v4
} from "./chunk-3LWXUT7V.js";
import {
  components,
  defaultPrefix,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-alert.entry.js
var bhAlertCss = ".bh-alert--content.default{position:fixed;top:64px;left:0;right:0;margin:auto;max-width:800px;z-index:3000}.bh-alert--content.system{position:fixed;top:64px;right:12px;z-index:3000}.bh-alert.default{display:flex;flex-direction:column;z-index:3000}.bh-alert.system{display:flex;flex-direction:column;z-index:3001;max-height:100px;}@media (max-width: 599px){.bh-alert--content.default,.bh-alert--content.system{position:static}.bh-alert.default>*{margin-bottom:var(--spacing-margin-xxsmall)}.bh-alert.system>*{margin-bottom:var(--spacing-margin-xxsmall)}}";
var BhAlertStyle0 = bhAlertCss;
var BhAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.alerts = void 0;
    this._alerts = void 0;
    this.type = void 0;
    this.timeout = void 0;
    this.closeOnCtaClick = true;
    this.dismissAfter = 8e3;
    this.viewport = void 0;
    this.opacity = void 0;
  }
  watchAlerts() {
    let _alerts;
    if (typeof this.alerts === "string") {
      try {
        _alerts = JSON.parse(this.alerts);
      } catch (_a) {
      }
    } else {
      _alerts = this.alerts;
    }
    this._alerts = (_alerts === null || _alerts === void 0 ? void 0 : _alerts.map((alert) => {
      return alert.key ? alert : Object.assign(Object.assign({}, alert), {
        key: `bh-alert-item--${v4()}`
      });
    })) || [];
  }
  // Event Listeners
  handleResize() {
    this.setViewport();
  }
  setViewport() {
    if (window.innerWidth >= 1024) {
      this.viewport = "large";
    } else if (window.innerWidth <= 1023 && window.innerWidth > 600) {
      this.viewport = "medium";
    } else {
      this.viewport = "small";
    }
  }
  addAlertItem(event) {
    var _a;
    if (event.detail && event.detail.status && event.detail.message) {
      this._alerts = [((_a = event.detail) === null || _a === void 0 ? void 0 : _a.key) ? event.detail : Object.assign(Object.assign({}, event.detail), {
        key: `bh-alert-item--${v4()}`
      }), ...this._alerts];
      this.alerts = JSON.stringify(this._alerts);
      this.bhEventChange.emit(this._alerts);
    }
  }
  removeAlertItem(event) {
    this._alerts = this._alerts.filter((_alert) => {
      return _alert.key !== event.detail.key;
    });
    this.alerts = JSON.stringify(this._alerts);
    this.bhEventChange.emit(this._alerts);
  }
  componentWillLoad() {
    let _alerts;
    if (typeof this.alerts === "string") {
      try {
        _alerts = JSON.parse(this.alerts);
      } catch (_a) {
      }
    } else {
      _alerts = this.alerts;
    }
    this._alerts = (_alerts === null || _alerts === void 0 ? void 0 : _alerts.map((alert) => {
      return alert.key ? alert : Object.assign(Object.assign({}, alert), {
        key: `bh-alert-item--${v4()}`
      });
    })) || [];
  }
  renderOpacity(index) {
    if (this.viewport === "small") {
      this.opacity = {
        opacity: index < 1 ? "100%" : index === 1 ? "60%" : index === 2 ? "30%" : "0%"
      };
    } else {
      this.opacity = {
        opacity: index < 2 ? "100%" : index === 2 ? "60%" : index === 3 ? "30%" : "0%"
      };
    }
  }
  renderSystemAlert(alert, index) {
    this.renderOpacity(index);
    const prefix = this.host.tagName.toLowerCase().replace(components.alert.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Components.systemAlertItem, {
      alertkey: alert.key,
      status: alert.status,
      timestamp: alert.timestamp,
      header: alert.header,
      message: alert.message,
      ctas: alert.ctas,
      isOpen: alert.isOpen,
      index,
      style: this.viewport === "small" && index > 2 ? {
        opacity: "0%"
      } : index > 3 ? {
        opacity: "0%"
      } : null,
      opacity: this.opacity,
      closeOnCtaClick: this.closeOnCtaClick
    });
  }
  renderAlert(alert, index) {
    const prefix = this.host.tagName.toLowerCase().replace(components.alert.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Components.alertItem, {
      alertkey: alert.key,
      type: this.type,
      status: alert.status,
      message: alert.message,
      dismissible: alert.dismissible,
      isOpen: alert.isOpen,
      timeout: this.timeout,
      dismissAfter: this.dismissAfter,
      index
    });
  }
  render() {
    var _a;
    return h(Host, {
      key: "f7c8aae29e2f934fe3ce241beda32ba4190937dd",
      class: `bh-alert--content ${this.type}`
    }, h("div", {
      key: "d456b7fe87a35ea98bf3754372472ec9b0047f9d",
      class: `bh-alert ${this.type}`
    }, (_a = this._alerts) === null || _a === void 0 ? void 0 : _a.map((alert, index) => {
      if ("ctas" in alert) {
        return this.renderSystemAlert(alert, index);
      } else {
        return this.renderAlert(alert, index);
      }
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "alerts": ["watchAlerts"]
    };
  }
};
BhAlert.style = BhAlertStyle0;
export {
  BhAlert as bh_alert
};
//# sourceMappingURL=bh-alert.entry-UFIRKQN4.js.map
