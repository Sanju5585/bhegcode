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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-bar-chart.entry.js
var bhBarChartCss = ".bh-bar-chart{display:block;overflow-x:hidden}.bh-bar-chart-wrapper{}.bh-bar-chart--legend{list-style-type:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;display:flex;flex-wrap:wrap;justify-content:center;margin-top:calc(var(--spacing-margin-medium) - var(--spacing-margin-xxsmall));margin-right:calc(-1 * var(--spacing-margin-large))}.bh-bar-chart--legend-li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:var(--spacing-margin-xxsmall)}.bh-bar-chart--legend-li.hidden{opacity:0.2}.bh-bar-chart--legend-item{display:flex;align-items:center;margin-right:var(--spacing-margin-large)}.bh-bar-chart--legend-item--dot{width:8px;height:8px;border-radius:50%;display:block;margin-right:var(--spacing-margin-xsmall)}";
var BhBarChartStyle0 = bhBarChartCss;
var BhBarChart = class {
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
    this.disabledDatasetIndex = [];
    this.theme = void 0;
    this._theme = void 0;
    this.tooltipLeftAlignmentIssue = false;
  }
  watchData() {
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
    this.componentDidLoad();
  }
  watchOption() {
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this.componentDidLoad();
  }
  watchChartOptionOverride() {
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
      return parseFloat(e2);
    });
    return array;
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
    if (this._chart) {
      this._chart.destroy();
    }
    const that = this;
    const ctx = this.element__canvas.getContext("2d");
    const _DesignTokens = this._theme || DesignTokens;
    this._chartOption = this.chartOptionOverride ? this.chartOptionOverride : {
      type: "bar",
      data: {
        labels: (_a = this._data) === null || _a === void 0 ? void 0 : _a.labels,
        datasets: (_c = (_b = this._data) === null || _b === void 0 ? void 0 : _b.datasets) === null || _c === void 0 ? void 0 : _c.map((dataset, index) => {
          return {
            label: dataset.label,
            data: this.sanitizeData(dataset.data),
            lineTension: 0.05,
            borderWidth: 0,
            backgroundColor: this._option.styleOverride && this._option.styleOverride[index] && this._option.styleOverride[index].color ? this._option.styleOverride[index].color : getChartColor(this._option.mode, index),
            hoverBackgroundColor: this._option.styleOverride && this._option.styleOverride[index] && this._option.styleOverride[index].color ? this._option.styleOverride[index].color : getChartColor(this._option.mode, index),
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHitRadius: 12
          };
        })
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false,
          intersect: false,
          mode: "index",
          caretSize: 0,
          caretPadding: _DesignTokens.spacing.paddingXsmall.replace("px", ""),
          titleFontFamily: _DesignTokens.fontFamily.bodySmall,
          bodyFontFamily: _DesignTokens.fontFamily.bodySmall,
          titleSpacing: _DesignTokens.spacing.paddingXxsmall.replace("px", ""),
          bodySpacing: 0,
          cornerRadius: _DesignTokens.effectBorderRadius.medium.replace("px", ""),
          xPadding: _DesignTokens.spacing.paddingXsmall.replace("px", ""),
          yPadding: _DesignTokens.spacing.paddingXxsmall.replace("px", ""),
          custom: ((_e = (_d = this._option) === null || _d === void 0 ? void 0 : _d.tooltipSetting) === null || _e === void 0 ? void 0 : _e.isDisabled) ? () => {
          } : customChartTooltip
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 0.75,
            categoryPercentage: 0.5,
            ticks: {
              suggestedMin: (_g = (_f = this._option) === null || _f === void 0 ? void 0 : _f.xAxis) === null || _g === void 0 ? void 0 : _g.suggestedMin,
              suggestedMax: (_j = (_h = this._option) === null || _h === void 0 ? void 0 : _h.xAxis) === null || _j === void 0 ? void 0 : _j.suggestedMax,
              stepSize: ((_l = (_k = this._option) === null || _k === void 0 ? void 0 : _k.xAxis) === null || _l === void 0 ? void 0 : _l.stepSize) ? (_o = (_m = this._option) === null || _m === void 0 ? void 0 : _m.xAxis) === null || _o === void 0 ? void 0 : _o.stepSize : 20,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              fontColor: _DesignTokens.colorText.commonSecondary,
              fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
              padding: _DesignTokens.spacing.paddingXsmall.replace("px", ""),
              callback: function(value) {
                if (value.length < 13) {
                  return value;
                }
                return value.substr(0, 13) + "...";
              }
            },
            gridLines: {
              color: ((_q = (_p = this._option) === null || _p === void 0 ? void 0 : _p.xAxis) === null || _q === void 0 ? void 0 : _q.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineColor: ((_s = (_r = this._option) === null || _r === void 0 ? void 0 : _r.xAxis) === null || _s === void 0 ? void 0 : _s.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineWidth: 0
            },
            scaleLabel: {
              display: ((_u = (_t = this._option) === null || _t === void 0 ? void 0 : _t.xAxis) === null || _u === void 0 ? void 0 : _u.label) ? true : false,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              labelString: (_w = (_v = this._option) === null || _v === void 0 ? void 0 : _v.xAxis) === null || _w === void 0 ? void 0 : _w.label
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMin: (_y = (_x = this._option) === null || _x === void 0 ? void 0 : _x.yAxis) === null || _y === void 0 ? void 0 : _y.suggestedMin,
              suggestedMax: (_0 = (_z = this._option) === null || _z === void 0 ? void 0 : _z.yAxis) === null || _0 === void 0 ? void 0 : _0.suggestedMax,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              fontColor: _DesignTokens.colorText.commonSecondary,
              fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
              padding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
              stepSize: ((_2 = (_1 = this._option) === null || _1 === void 0 ? void 0 : _1.yAxis) === null || _2 === void 0 ? void 0 : _2.stepSize) ? (_4 = (_3 = this._option) === null || _3 === void 0 ? void 0 : _3.yAxis) === null || _4 === void 0 ? void 0 : _4.stepSize : 20
            },
            gridLines: {
              color: ((_6 = (_5 = this._option) === null || _5 === void 0 ? void 0 : _5.yAxis) === null || _6 === void 0 ? void 0 : _6.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              zeroLineColor: ((_8 = (_7 = this._option) === null || _7 === void 0 ? void 0 : _7.yAxis) === null || _8 === void 0 ? void 0 : _8.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
              drawBorder: false
            },
            scaleLabel: {
              display: ((_10 = (_9 = this._option) === null || _9 === void 0 ? void 0 : _9.xAxis) === null || _10 === void 0 ? void 0 : _10.label) ? true : false,
              fontFamily: _DesignTokens.fontFamily.bodySmall,
              labelString: (_12 = (_11 = this._option) === null || _11 === void 0 ? void 0 : _11.yAxis) === null || _12 === void 0 ? void 0 : _12.label
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
        return data.datasets.map((dataset) => encodeDecodeHTML(`<li class="bh-bar-chart--legend-li">
              <div class="bh-bar-chart--legend-item">
                <span class="bh-bar-chart--legend-item--dot" style="background-color: ${dataset.backgroundColor}"></span>
                <span class="typography--label-small typography--color-primary">${dataset.label}</span>
              </div>
            </li>
            `)).join("");
      };
      return encodeDecodeHTML(`
        <ul class="bh-bar-chart--legend">
          ${renderLabels(chart)}
        </ul>
        
      `);
    }
    function customChartTooltip(tooltipModel) {
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
      function getBody(bodyItem) {
        return bodyItem.lines;
      }
      if (tooltipModel.body) {
        var titleLines = tooltipModel.title || [];
        var bodyLines = tooltipModel.body.map(getBody);
        var innerHtml = "<thead>";
        titleLines.forEach(function(title) {
          var _a2, _b2;
          innerHtml += "<tr><th>" + (((_a2 = that._option.tooltipSetting) === null || _a2 === void 0 ? void 0 : _a2.title) ? (_b2 = that._option.tooltipSetting) === null || _b2 === void 0 ? void 0 : _b2.title : title) + "</th></tr>";
        });
        innerHtml += "</thead><tbody>";
        bodyLines.forEach(function(body, i) {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (!that.disabledDatasetIndex.includes(i)) {
            var colors = tooltipModel.labelColors[i];
            var style = "background:" + colors.backgroundColor;
            style += "; border-color:" + colors.backgroundColor;
            style += "; border-width: 2px";
            var decorator = `<div style="background-color: ${colors.backgroundColor}; width: ${_DesignTokens.spacing.marginXsmall}; height: ${_DesignTokens.spacing.marginXsmall}; border-radius: 50%; margin-right: ${_DesignTokens.spacing.marginXsmall};"></div>`;
            var span = '<span style="' + style + '"></span>';
            const data = `${body[0].slice(0, body[0].indexOf(":") + 2)}${((_b2 = (_a2 = that._option.tooltipSetting) === null || _a2 === void 0 ? void 0 : _a2.unit) === null || _b2 === void 0 ? void 0 : _b2.prefix) ? (_d2 = (_c2 = that._option.tooltipSetting) === null || _c2 === void 0 ? void 0 : _c2.unit) === null || _d2 === void 0 ? void 0 : _d2.prefix : ""}${body[0].slice(body[0].indexOf(": ") + 2)}${((_f2 = (_e2 = that._option.tooltipSetting) === null || _e2 === void 0 ? void 0 : _e2.unit) === null || _f2 === void 0 ? void 0 : _f2.suffix) ? (_h2 = (_g2 = that._option.tooltipSetting) === null || _g2 === void 0 ? void 0 : _g2.unit) === null || _h2 === void 0 ? void 0 : _h2.suffix : ""}`;
            innerHtml += '<tr><td><div style="display: flex; align-items: center;">' + decorator + span + data + "</div></td></tr>";
          }
        });
        innerHtml += "</tbody>";
        var tableRoot = tooltipEl.querySelector("table");
        tableRoot.innerHTML = innerHtml;
      }
      var position = this._chart.canvas.getBoundingClientRect();
      tooltipEl.style.opacity = "1";
      tooltipEl.style.textAlign = "left";
      tooltipEl.style.position = "absolute";
      if (tooltipModel.caretX + tooltipModel.width > position.width * 0.75) {
        tooltipEl.style.left = tooltipModel.caretX - parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")) * 2 - tooltipModel.width + "px";
      } else {
        tooltipEl.style.left = tooltipModel.caretX + parseInt(_DesignTokens.spacing.paddingXxsmall.replace("px", "")) * 2 + "px";
      }
      if (that.tooltipLeftAlignmentIssue) {
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - tooltipModel.width + "px";
      }
      tooltipEl.style.top = position.top + window.scrollY + tooltipModel.caretY + "px";
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
    if (!((_13 = this._option) === null || _13 === void 0 ? void 0 : _13.disableLegend)) {
      this.element__legends.innerHTML = this._chart.generateLegend();
      this.bindLegendClickEvent();
    }
  }
  bindLegendClickEvent() {
    const legendItems = this.element__legends.querySelectorAll(".bh-bar-chart--legend-li");
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
      key: "9433a1702edea5fc9273b638ee71ba655385124d",
      class: "bh-bar-chart"
    }, h("div", {
      key: "f7d9344e34f66e80add2d7145cc053099616bf4e",
      class: "bh-bar-chart-wrapper",
      style: {
        height: `${this.height}px`
      }
    }, h("canvas", {
      key: "c89e427be37ebbee4c581cc8490f42a6803db1ba",
      ref: (el) => {
        this.element__canvas = el;
      }
    })), h("div", {
      key: "c82422348e41c7c24382dae2b0c195c385dff1f6",
      ref: (el) => {
        this.element__legends = el;
      }
    }), h("div", {
      key: "4d3c7c4dd7c0e3058da9842daa687d0f2249c1df",
      ref: (el) => {
        this.element__tooltip = el;
      }
    }, h("table", {
      key: "3972a35a6bb7d1628a19e14ede762c85b79a069e",
      class: "bink-calc__tooltip"
    })));
  }
  static get watchers() {
    return {
      "data": ["watchData"],
      "option": ["watchOption"],
      "chartOptionOverride": ["watchChartOptionOverride"],
      "theme": ["watchTheme"]
    };
  }
};
BhBarChart.style = BhBarChartStyle0;
export {
  BhBarChart as bh_bar_chart
};
//# sourceMappingURL=bh-bar-chart.entry-L7WCDSWM.js.map
