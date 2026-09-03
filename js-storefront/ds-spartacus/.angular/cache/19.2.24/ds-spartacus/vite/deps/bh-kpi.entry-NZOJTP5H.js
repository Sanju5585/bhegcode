import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-kpi.entry.js
var bhKpiCss = ".bh-kpi__container{border:1px solid var(--color-border-common-primary);border-radius:var(--effect-border-radius-medium);padding:var(--spacing-padding-medium);background-color:var(--color-fill-common-secondary)}.bh-kpi__title-copy{color:var(--color-text-common-secondary);display:block}.bh-kpi__body{display:flex;height:68px;justify-content:space-between;align-items:center}.bh-kpi__body--value{color:var(--color-text-common-primary);white-space:nowrap}.bh-kpi__body--icon{width:60px;height:60px;background-color:var(--color-fill-common-tertiary);border-radius:12px;color:var(--color-text-common-secondary);font-size:24px;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.bh-kpi__stats{display:flex;align-items:center}.bh-kpi__stats-display{margin-right:var(--spacing-margin-xsmall);height:20px;background-color:var(--color-fill-semantic-neutral-status-background);color:var(--color-text-common-secondary);border-radius:var(--effect-border-radius-medium);padding:0 var(--spacing-padding-xsmall);display:flex;align-items:center}.bh-kpi__stats-display.bh-kpi-stats-display-theme--positive{color:var(--color-text-label-success);background-color:var(--color-fill-semantic-success-status-background)}.bh-kpi__stats-display.bh-kpi-stats-display-theme--critical{color:var(--color-text-label-critical);background-color:var(--color-fill-semantic-error-status-background)}.bh-kpi__stats-display.bh-kpi-stats-display-theme--warning{color:var(--color-text-label-warning);background-color:var(--color-fill-semantic-warning-status-background)}.bh-kpi__stats-display.bh-kpi-stats-display-theme--neutral{color:var(--color-text-label-default);background-color:var(--color-fill-semantic-neutral-status-background)}.bh-kpi__stats--icon{height:18px}.bh-kpi--sub{font-size:var(--kpi-sub-font-size);color:var(--kpi-sub-color)}.bh-kpi--sup{font-size:var(--kpi-sup-font-size);color:var(--kpi-sup-color)}.bh-kpi__stats--icon>.material-icons-outlined{font-size:18px}.bh-kpi__stats--value-label{height:18px;margin-left:var(--spacing-margin-xxsmall)}.bh-kpi__stats--value-label:empty{margin-left:0}.bh-kpi__stats__description{color:var(--color-text-common-secondary)}";
var BhKpiStyle0 = bhKpiCss;
var BhKpi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.kpiTitle = void 0;
    this.value = void 0;
    this.sub = void 0;
    this.sup = void 0;
    this.icon = void 0;
    this.stats = void 0;
    this._stats = void 0;
  }
  watchStats() {
    this._stats = typeof this.stats === "string" ? JSON.parse(this.stats) : this.stats;
  }
  componentWillLoad() {
    this._stats = typeof this.stats === "string" ? JSON.parse(this.stats) : this.stats;
  }
  render() {
    var _a, _b;
    const statsIcon = (() => {
      var _a2;
      switch ((_a2 = this._stats) === null || _a2 === void 0 ? void 0 : _a2.trend) {
        case "up":
          return "trending_up";
        case "down":
          return "trending_down";
        case "flat":
          return "trending_flat";
        default:
          return "trending_flat";
      }
    })();
    return h(Host, {
      class: "bh-kpi"
    }, h("div", {
      class: "bh-kpi__container"
    }, h("div", {
      class: "bh-kpi__title"
    }, h("span", {
      class: "bh-kpi__title-copy typography--label-small"
    }, this.kpiTitle)), h("div", {
      class: "bh-kpi__body"
    }, h("span", {
      class: "bh-kpi__body--value typography--headline-small"
    }, this.value, this.sub && h("sub", {
      class: "bh-kpi--sub"
    }, this.sub), this.sup && h("sup", {
      class: "bh-kpi--sup"
    }, this.sup)), this.icon && h("span", {
      class: "bh-kpi__body--icon"
    }, h("i", {
      class: "material-icons material-icons-outlined bh-button__icon"
    }, this.icon))), this._stats && h("div", {
      class: "bh-kpi__stats"
    }, h("div", {
      class: `bh-kpi__stats-display ${this._stats.trend ? `bh-kpi-stats-display-theme--${this._stats.interpretation}` : "bh-kpi-stats-display-theme--neutral"}`
    }, h("span", {
      class: "bh-kpi__stats--icon"
    }, h("i", {
      class: "material-icons material-icons-outlined"
    }, ((_a = this._stats) === null || _a === void 0 ? void 0 : _a.icon) ? (_b = this._stats) === null || _b === void 0 ? void 0 : _b.icon : statsIcon)), h("span", {
      class: "bh-kpi__stats--value-label typography--body-small"
    }, this._stats.value)), h("span", {
      class: "bh-kpi__stats__description typography--body-small"
    }, this._stats.description))));
  }
  static get watchers() {
    return {
      "stats": ["watchStats"]
    };
  }
};
BhKpi.style = BhKpiStyle0;
export {
  BhKpi as bh_kpi
};
//# sourceMappingURL=bh-kpi.entry-NZOJTP5H.js.map
