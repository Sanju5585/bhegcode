import {
  Chart,
  getChartColor
} from "./chunk-LPGPO5UA.js";
import "./chunk-TG4QHA7A.js";
import {
  DesignTokens
} from "./chunk-XGCW5RY7.js";
import "./chunk-RW74KZYS.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-scatter-chart.entry.js
var bhScatterChartCss = ".bh-scatter-chart{display:block;overflow-x:hidden}.bh-scatter-chart--legend{list-style-type:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;display:flex;flex-wrap:wrap;justify-content:center;margin-top:calc(var(--spacing-margin-medium) - var(--spacing-margin-xxsmall));margin-right:calc(-1 * var(--spacing-margin-large))}.bh-scatter-chart--legend-li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:var(--spacing-margin-xxsmall)}.bh-scatter-chart--legend-li.hidden{opacity:0.2}.bh-scatter-chart--legend-item{display:flex;align-items:center;margin-right:var(--spacing-margin-large)}.bh-scatter-chart--legend-item--dot{width:8px;height:8px;border-radius:50%;display:block;margin-right:var(--spacing-margin-xsmall)}.bh-scatter-chart--legend-item--dot.rect{border-radius:0}.bh-scatter-chart--legend-item--dot.rectRounded{border-radius:var(--effect-border-radius-light)}.bh-scatter-chart--legend-item--dot.rectRot{border-radius:0;transform:rotate(45deg)}.bh-scatter-chart--legend-item--dot.triangle{width:0;height:0;border-radius:0;border-style:solid;border-width:0 5px 8px 5px}.bh-scatter-chart--tooltip-title{margin-bottom:var(--spacing-margin-xxsmall);white-space:nowrap}";
var BhScatterChartStyle0 = bhScatterChartCss;
var BhScatterChart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.data = void 0;
    this._data = void 0;
    this.option = void 0;
    this._option = void 0;
    this.height = 400;
    this.chartOptionOverride = void 0;
    this._chartOptionOverride = void 0;
    this._chartOption = void 0;
    this.theme = void 0;
    this._theme = void 0;
    this.disabledDatasetIndex = [];
  }
  watchData() {
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
    this.componentDidLoad();
  }
  watchOption() {
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this.componentDidLoad();
  }
  watchcCartOptionOverride() {
    this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
    this.componentDidLoad();
  }
  watchTheme() {
    this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
  }
  componentWillLoad() {
    this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
  }
  sanitizeData(e) {
    let array = e.map((e2) => {
      return {
        x: parseFloat(e2 === null || e2 === void 0 ? void 0 : e2.x),
        y: parseFloat(e2 === null || e2 === void 0 ? void 0 : e2.y)
      };
    });
    return array;
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    const that = this;
    const ctx = this.element__canvas.getContext("2d");
    const _DesignTokens = this._theme || DesignTokens;
    this._chartOption = this.chartOptionOverride ? this.chartOptionOverride : {
      type: "scatter",
      data: {
        datasets: (_a = this._data) === null || _a === void 0 ? void 0 : _a.datasets.map((dataset, index) => {
          return {
            label: dataset.label,
            data: this.sanitizeData(dataset.data),
            pointStyle: dataset.pointStyle || "circle",
            borderWidth: _DesignTokens.effectBorderWidth.regular.replace("px", ""),
            borderColor: _DesignTokens.colorFill.commonSecondary,
            hoverBorderColor: _DesignTokens.colorFill.commonSecondary,
            backgroundColor: this._option.styleOverride && this._option.styleOverride[index] && this._option.styleOverride[index].color ? this._option.styleOverride[index].color : getChartColor(this._option.mode, index),
            hoverBackgroundColor: this._option.styleOverride && this._option.styleOverride[index] && this._option.styleOverride[index].color ? this._option.styleOverride[index].color : getChartColor(this._option.mode, index),
            pointRadius: dataset.pointRadius || 3,
            pointHoverRadius: dataset.pointHoverRadius || 5,
            pointHitRadius: dataset.pointHoverRadius || 5
          };
        })
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false,
          intersect: false,
          mode: "point",
          caretSize: 0,
          caretPadding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
          titleFontFamily: _DesignTokens.fontFamily.bodySmall,
          bodyFontFamily: _DesignTokens.fontFamily.bodySmall,
          titleSpacing: parseInt(_DesignTokens.spacing.paddingXxsmall.replace("px", "")),
          bodySpacing: 0,
          cornerRadius: _DesignTokens.effectBorderRadius.medium.replace("px", ""),
          xPadding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
          yPadding: parseInt(_DesignTokens.spacing.paddingXxsmall.replace("px", "")),
          custom: ((_b = this._option) === null || _b === void 0 ? void 0 : _b.tooltipSetting) && ((_c = this._option) === null || _c === void 0 ? void 0 : _c.tooltipSetting.isDisabled) ? () => {
          } : customChartTooltip
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scatterPercentage: 0.75,
            categoryPercentage: 0.5,
            ticks: {
              suggestedMin: (_e = (_d = this._option) === null || _d === void 0 ? void 0 : _d.xAxis) === null || _e === void 0 ? void 0 : _e.suggestedMin,
              suggestedMax: (_g = (_f = this._option) === null || _f === void 0 ? void 0 : _f.xAxis) === null || _g === void 0 ? void 0 : _g.suggestedMax,
              stepSize: ((_j = (_h = this._option) === null || _h === void 0 ? void 0 : _h.xAxis) === null || _j === void 0 ? void 0 : _j.stepSize) ? (_l = (_k = this._option) === null || _k === void 0 ? void 0 : _k.xAxis) === null || _l === void 0 ? void 0 : _l.stepSize : 20,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              fontColor: _DesignTokens.colorText.commonSecondary,
              fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
              padding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", ""))
            },
            gridLines: {
              color: ((_o = (_m = this._option) === null || _m === void 0 ? void 0 : _m.xAxis) === null || _o === void 0 ? void 0 : _o.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineColor: ((_q = (_p = this._option) === null || _p === void 0 ? void 0 : _p.xAxis) === null || _q === void 0 ? void 0 : _q.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineWidth: 0
            },
            scaleLabel: {
              display: ((_s = (_r = this._option) === null || _r === void 0 ? void 0 : _r.xAxis) === null || _s === void 0 ? void 0 : _s.label) ? true : false,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              labelString: (_u = (_t = this._option) === null || _t === void 0 ? void 0 : _t.xAxis) === null || _u === void 0 ? void 0 : _u.label
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMin: (_w = (_v = this._option) === null || _v === void 0 ? void 0 : _v.yAxis) === null || _w === void 0 ? void 0 : _w.suggestedMin,
              suggestedMax: (_y = (_x = this._option) === null || _x === void 0 ? void 0 : _x.yAxis) === null || _y === void 0 ? void 0 : _y.suggestedMax,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              fontColor: _DesignTokens.colorText.commonSecondary,
              fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
              padding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
              stepSize: ((_0 = (_z = this._option) === null || _z === void 0 ? void 0 : _z.yAxis) === null || _0 === void 0 ? void 0 : _0.stepSize) ? (_2 = (_1 = this._option) === null || _1 === void 0 ? void 0 : _1.yAxis) === null || _2 === void 0 ? void 0 : _2.stepSize : 20
            },
            gridLines: {
              color: ((_4 = (_3 = this._option) === null || _3 === void 0 ? void 0 : _3.yAxis) === null || _4 === void 0 ? void 0 : _4.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineColor: ((_6 = (_5 = this._option) === null || _5 === void 0 ? void 0 : _5.yAxis) === null || _6 === void 0 ? void 0 : _6.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary
            },
            scaleLabel: {
              display: ((_8 = (_7 = this._option) === null || _7 === void 0 ? void 0 : _7.xAxis) === null || _8 === void 0 ? void 0 : _8.label) ? true : false,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              labelString: (_10 = (_9 = this._option) === null || _9 === void 0 ? void 0 : _9.yAxis) === null || _10 === void 0 ? void 0 : _10.label
            }
          }]
        },
        legend: {
          position: "bottom",
          display: false
        },
        legendCallback: customChartLegend
      }
    };
    function encodeDecodeHTML(s) {
      let newS = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      let doc = new DOMParser().parseFromString(newS, "text/html");
      return doc.documentElement.textContent;
    }
    function customChartLegend(chart) {
      const renderLabels = (chart2) => {
        const {
          data
        } = chart2;
        return data.datasets.map((dataset) => encodeDecodeHTML(`<li class="bh-scatter-chart--legend-li">
            <div class="bh-scatter-chart--legend-item">
              <span class="bh-scatter-chart--legend-item--dot ${dataset.pointStyle === "circle" || dataset.pointStyle === "rect" || dataset.pointStyle === "rectRounded" || dataset.pointStyle === "rectRot" || dataset.pointStyle === "triangle" ? dataset.pointStyle : ""}" style="background-color: ${dataset.pointStyle === "triangle" ? "none" : dataset.backgroundColor}; border-color: ${dataset.pointStyle === "triangle" ? `transparent transparent ${dataset.backgroundColor} transparent` : "none"};"></span>
              <span class="typography--label-small typography--color-primary">${dataset.label}</span>
            </div>
          </li>
          `)).join("");
      };
      return encodeDecodeHTML(`
        <ul class="bh-scatter-chart--legend">
          ${renderLabels(chart)}
        </ul>
        
      `);
    }
    function customChartTooltip(tooltipModel) {
      var _a2;
      var tooltipEl = that.element__tooltip;
      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = "0";
        return;
      }
      tooltipEl.classList.remove("above", "below", "no-transform");
      if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
      } else {
        tooltipEl.classList.add("no-transform");
      }
      function getDataPoints(dataPoint) {
        return {
          x: dataPoint.xLabel,
          y: dataPoint.yLabel
        };
      }
      if (tooltipModel.body) {
        var titleLines = tooltipModel.title || [];
        var dataPoints = tooltipModel.dataPoints.map(getDataPoints);
        var innerHtml = "<thead>";
        titleLines.forEach(function(title) {
          innerHtml += "<tr><th>" + title + "</th></tr>";
        });
        innerHtml += "</thead>";
        if ((_a2 = that._option.tooltipSetting) === null || _a2 === void 0 ? void 0 : _a2.title) {
          innerHtml += `<span class="typography--body-small-semi-bold bh-scatter-chart--tooltip-title">${that._option.tooltipSetting.title}</span>`;
        }
        innerHtml += "<tbody>";
        dataPoints.forEach(function(dataPoint, i) {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _j2, _k2, _l2, _m2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2;
          if (!that.disabledDatasetIndex.includes(i)) {
            var colors = tooltipModel.labelColors[i];
            var style = "background:" + colors.backgroundColor;
            style += "; border-color:" + colors.backgroundColor;
            style += `; border-width: ${_DesignTokens.effectBorderWidth.thick}`;
            var decorator = '<div style="background-color: ' + colors.backgroundColor + `; width: ${_DesignTokens.spacing.marginXsmall}; height: ${_DesignTokens.spacing.marginXsmall}; border-radius: 50%; margin-right: ${_DesignTokens.spacing.marginXsmall};"></div>`;
            var span = '<span style="' + style + '"></span>';
            const xValue = `${((_c2 = (_b2 = (_a3 = that._option.tooltipSetting) === null || _a3 === void 0 ? void 0 : _a3.units) === null || _b2 === void 0 ? void 0 : _b2.xAxis) === null || _c2 === void 0 ? void 0 : _c2.prefix) ? (_f2 = (_e2 = (_d2 = that._option.tooltipSetting) === null || _d2 === void 0 ? void 0 : _d2.units) === null || _e2 === void 0 ? void 0 : _e2.xAxis) === null || _f2 === void 0 ? void 0 : _f2.prefix : ""}${dataPoint.x}${((_j2 = (_h2 = (_g2 = that._option.tooltipSetting) === null || _g2 === void 0 ? void 0 : _g2.units) === null || _h2 === void 0 ? void 0 : _h2.xAxis) === null || _j2 === void 0 ? void 0 : _j2.suffix) ? (_m2 = (_l2 = (_k2 = that._option.tooltipSetting) === null || _k2 === void 0 ? void 0 : _k2.units) === null || _l2 === void 0 ? void 0 : _l2.xAxis) === null || _m2 === void 0 ? void 0 : _m2.suffix : ""}`;
            const yValue = `${((_q2 = (_p2 = (_o2 = that._option.tooltipSetting) === null || _o2 === void 0 ? void 0 : _o2.units) === null || _p2 === void 0 ? void 0 : _p2.yAxis) === null || _q2 === void 0 ? void 0 : _q2.prefix) ? (_t2 = (_s2 = (_r2 = that._option.tooltipSetting) === null || _r2 === void 0 ? void 0 : _r2.units) === null || _s2 === void 0 ? void 0 : _s2.yAxis) === null || _t2 === void 0 ? void 0 : _t2.prefix : ""}${dataPoint.y}${((_w2 = (_v2 = (_u2 = that._option.tooltipSetting) === null || _u2 === void 0 ? void 0 : _u2.units) === null || _v2 === void 0 ? void 0 : _v2.yAxis) === null || _w2 === void 0 ? void 0 : _w2.suffix) ? (_z2 = (_y2 = (_x2 = that._option.tooltipSetting) === null || _x2 === void 0 ? void 0 : _x2.units) === null || _y2 === void 0 ? void 0 : _y2.yAxis) === null || _z2 === void 0 ? void 0 : _z2.suffix : ""}`;
            innerHtml += '<tr><td><div style="display: flex; align-items: center;">' + decorator + span + `${xValue}/${yValue}</div></td></tr>`;
          }
        });
        innerHtml += "</tbody>";
        var tableRoot = tooltipEl.querySelector("table");
        tableRoot.innerHTML = encodeDecodeHTML(innerHtml);
      }
      var position = this._chart.canvas.getBoundingClientRect();
      tooltipEl.style.opacity = "1";
      tooltipEl.style.textAlign = "left";
      tooltipEl.style.position = "absolute";
      if (tooltipModel.caretX + tooltipModel.width > position.width * 0.75) {
        const leftPos = tooltipModel.caretX - 2 * tooltipModel.width - parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", ""));
        tooltipEl.style.left = (leftPos < 0 ? 0 : leftPos) + "px";
      } else {
        const leftPos = tooltipModel.caretX + parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", ""));
        tooltipEl.style.left = (leftPos > position.width ? position.width : leftPos) + "px";
      }
      tooltipEl.style.top = tooltipModel.caretY + "px";
      tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
      tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
      tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
      tooltipEl.style.padding = tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.transition = `opacity ${_DesignTokens.motionDuration.normal} ${_DesignTokens.motionEasing.normal}`;
      tooltipEl.style.color = _DesignTokens.colorText.commonInversePrimary;
      tooltipEl.style.borderRadius = _DesignTokens.effectBorderRadius.medium;
      tooltipEl.style.backgroundColor = _DesignTokens.colorFill.commonOverlay;
      tooltipEl.style.zIndex = "30";
    }
    this._chart = new Chart(ctx, this._chartOption);
    if (!((_11 = this._option) === null || _11 === void 0 ? void 0 : _11.disableLegend)) {
      this.element__legends.innerHTML = this._chart.generateLegend();
      this.bindLegendClickEvent();
    }
  }
  bindLegendClickEvent() {
    const legendItems = this.element__legends.querySelectorAll(".bh-scatter-chart--legend-li");
    legendItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        this.disabledDatasetIndex = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? this.disabledDatasetIndex.filter((idx) => idx !== i) : [...this.disabledDatasetIndex, i];
        this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? legendItems[i].classList.add("hidden") : legendItems[i].classList.remove("hidden");
        const baseHexColor = this._option.styleOverride && this._option.styleOverride[i] && this._option.styleOverride[i].color ? this._option.styleOverride[i].color : getChartColor(this._option.mode, i);
        this._chart.data.datasets[i].backgroundColor = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? `${baseHexColor}14` : baseHexColor;
        this._chart.data.datasets[i].hoverBackgroundColor = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? `${baseHexColor}14` : baseHexColor;
        this._chart.update();
        this.bhEventChange.emit({
          disabledDatasetIndex: this.disabledDatasetIndex
        });
      });
    });
  }
  render() {
    return h(Host, {
      key: "c70e8527d4bebf35307a18d929d9fe463b3b9be3",
      class: "bh-scatter-chart"
    }, h("div", {
      key: "fa66652070dd5e19bd587cad432ecb377a65d400",
      class: "bh-scatter-chart-wrapper",
      style: {
        minWidth: `${this.height}px`,
        height: `${this.height}px`
      }
    }, h("canvas", {
      key: "41ab8502a29c8db3e0da07b3e7422d0f67ef3238",
      ref: (el) => {
        this.element__canvas = el;
      }
    })), h("div", {
      key: "44bc68699a69de173ff4657b97edef77f0fabfa4",
      ref: (el) => {
        this.element__legends = el;
      }
    }), h("div", {
      key: "1bcfc453f1f13c1fdc4403b80c2edee04bde4e0d",
      ref: (el) => {
        this.element__tooltip = el;
      }
    }, h("table", {
      key: "2af03125b87e37dce9294259f648b754e2dc55ad",
      class: "bink-calc__tooltip"
    })));
  }
  static get watchers() {
    return {
      "data": ["watchData"],
      "option": ["watchOption"],
      "chartOptionOverride": ["watchcCartOptionOverride"],
      "theme": ["watchTheme"]
    };
  }
};
BhScatterChart.style = BhScatterChartStyle0;
export {
  BhScatterChart as bh_scatter_chart
};
//# sourceMappingURL=bh-scatter-chart.entry-6PLHWOLH.js.map
