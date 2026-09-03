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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-line-chart.entry.js
var LINE_CHART_ERROR_MESSAGE = "Unable to locate the expected attributes. Please check the documentation and attach mandatory attributes";
var bhLineChartCss = ".bh-line-chart{display:block;overflow-x:hidden;position:relative}.bh-line-chart-wrapper{width:100%;height:420px}.bh-line-chart--legend{list-style-type:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;display:flex;flex-wrap:wrap;justify-content:center;margin-top:calc(var(--spacing-margin-medium) - var(--spacing-margin-xxsmall));margin-right:calc(-1 * var(--spacing-margin-large))}.bh-line-chart--legend-li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:var(--spacing-margin-xxsmall)}.bh-line-chart--legend-li.hidden{opacity:0.2}.bh-line-chart--legend-item{display:flex;align-items:center;margin-right:var(--spacing-margin-large)}.bh-line-chart--legend-item--dot{width:8px;height:8px;border-radius:50%;display:block;margin-right:var(--spacing-margin-xsmall)}";
var BhLineChartStyle0 = bhLineChartCss;
var BhLineChart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.data = void 0;
    this._data = void 0;
    this.option = void 0;
    this._option = void 0;
    this.height = 400;
    this.yaxisallowstring = false;
    this.chartOptionOverride = void 0;
    this._chartOptionOverride = void 0;
    this._chartOption = void 0;
    this.theme = void 0;
    this._theme = void 0;
    this.disabledDatasetIndex = [];
  }
  watchData() {
    try {
      this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
      this.componentDidLoad();
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  watchOption() {
    try {
      this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
      this.componentDidLoad();
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  watchChartOptionOverride() {
    try {
      this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
      this.componentDidLoad();
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  watchTheme() {
    this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
  }
  componentWillLoad() {
    try {
      this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
      this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
      this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
      this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  sanitizeData(e) {
    let array = e.map((e2) => {
      return parseFloat(e2);
    });
    return array;
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
    try {
      let encodeDecodeHTML = function(s) {
        let newS = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        let doc = new DOMParser().parseFromString(newS, "text/html");
        return doc.documentElement.textContent;
      }, customChartLegend = function(chart) {
        const renderLabels = (chart2) => {
          const {
            data
          } = chart2;
          return data.datasets.map((dataset) => encodeDecodeHTML(`<li class="bh-line-chart--legend-li">
              <div class="bh-line-chart--legend-item">
                <span class="bh-line-chart--legend-item--dot" style="background-color: ${dataset.borderColor}"></span>
                <span class="typography--label-small typography--color-primary">${dataset.label}</span>
              </div>
            </li>
            `)).join("");
        };
        return encodeDecodeHTML(`
        <ul class="bh-line-chart--legend">
          ${renderLabels(chart)}
        </ul>
        
      `);
      }, customChartTooltip = function(tooltipModel) {
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
              style += "; border-color:" + colors.borderColor;
              style += "; border-width: " + _DesignTokens.effectBorderWidth.thick;
              var decorator = '<div style="background-color: ' + colors.borderColor + `; width: ${_DesignTokens.spacing.marginXsmall}; height: ${_DesignTokens.spacing.marginXsmall}; border-radius: 50%; margin-right: ${_DesignTokens.spacing.marginXsmall};"></div>`;
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
          tooltipEl.style.left = tooltipModel.caretX - parseInt(_DesignTokens.spacing.marginLarge.replace("px", "")) - tooltipModel.width + "px";
        } else {
          tooltipEl.style.left = tooltipModel.caretX + parseInt(_DesignTokens.spacing.marginXsmall.replace("px", "")) + "px";
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
      };
      const that = this;
      const ctx = this.element__canvas.getContext("2d");
      const _DesignTokens = this._theme || DesignTokens;
      Chart.defaults.LineWithDecorations = Chart.defaults.line;
      Chart.controllers.LineWithDecorations = Chart.controllers.line.extend({
        draw: function(ease) {
          Chart.controllers.line.prototype.draw.call(this, ease);
          if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            const activePoint = this.chart.tooltip._active[0], ctx2 = this.chart.ctx, x = activePoint.tooltipPosition().x, topY = this.chart.scales["y-axis-0"].top, bottomY = this.chart.scales["y-axis-0"].bottom;
            ctx2.save();
            ctx2.beginPath();
            ctx2.moveTo(x, topY);
            ctx2.lineTo(x, bottomY);
            ctx2.lineWidth = parseInt(_DesignTokens.effectBorderWidth.regular.replace("px", ""));
            ctx2.strokeStyle = _DesignTokens.colorBorder.controlUnselected;
            ctx2.stroke();
            this.chart.tooltip._active.forEach((activeElement, index) => {
              if (that.disabledDatasetIndex.find((i) => i === index) > -1) ;
              else {
                const circle = new Path2D();
                circle.moveTo(x, activeElement._model.y);
                circle.arc(x, activeElement._model.y, 4, 0, 2 * Math.PI);
                ctx2.fillStyle = activeElement._options.borderColor;
                ctx2.fill(circle);
              }
            });
            ctx2.restore();
          }
        }
      });
      this._chartOption = this.chartOptionOverride ? this.chartOptionOverride : {
        type: "LineWithDecorations",
        data: {
          labels: (_a = this._data) === null || _a === void 0 ? void 0 : _a.labels,
          datasets: (_b = this._data) === null || _b === void 0 ? void 0 : _b.datasets.map((dataset, index) => {
            var _a2, _b2, _c2;
            return {
              label: dataset.label,
              data: this.sanitizeData(dataset.data),
              lineTension: 0,
              borderDash: ((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.styleOverride) && ((_b2 = this._option.styleOverride[index]) === null || _b2 === void 0 ? void 0 : _b2.isDashed) ? [5, 5] : [],
              borderWidth: 2,
              borderColor: ((_c2 = this._option) === null || _c2 === void 0 ? void 0 : _c2.styleOverride) && this._option.styleOverride[index] && this._option.styleOverride[index].color ? this._option.styleOverride[index].color : getChartColor(this._option.mode, index),
              backgroundColor: _DesignTokens.colorFill.controlUnselected,
              borderCapStyle: "round",
              pointRadius: 0,
              pointHoverRadius: 4,
              pointHoverBorderColor: _DesignTokens.colorFill.controlUnselected,
              pointHitRadius: 12
            };
          })
        },
        options: {
          responsive: true,
          tooltips: {
            enabled: false,
            intersect: false,
            mode: "x-axis",
            caretSize: 0,
            caretPadding: _DesignTokens.spacing.paddingXsmall.replace("px", ""),
            titleFontFamily: _DesignTokens.fontFamily.bodySmall,
            bodyFontFamily: _DesignTokens.fontFamily.bodySmall,
            titleSpacing: _DesignTokens.spacing.paddingXxsmall.replace("px", ""),
            bodySpacing: 0,
            cornerRadius: _DesignTokens.effectBorderRadius.medium.replace("px", ""),
            xPadding: _DesignTokens.spacing.paddingXsmall.replace("px", ""),
            yPadding: _DesignTokens.spacing.paddingXxsmall.replace("px", ""),
            custom: ((_d = (_c = this._option) === null || _c === void 0 ? void 0 : _c.tooltipSetting) === null || _d === void 0 ? void 0 : _d.isDisabled) ? () => {
            } : customChartTooltip
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              ticks: {
                suggestedMin: (_f = (_e = this._option) === null || _e === void 0 ? void 0 : _e.xAxis) === null || _f === void 0 ? void 0 : _f.suggestedMin,
                suggestedMax: (_h = (_g = this._option) === null || _g === void 0 ? void 0 : _g.xAxis) === null || _h === void 0 ? void 0 : _h.suggestedMax,
                stepSize: ((_k = (_j = this._option) === null || _j === void 0 ? void 0 : _j.xAxis) === null || _k === void 0 ? void 0 : _k.stepSize) ? (_m = (_l = this._option) === null || _l === void 0 ? void 0 : _l.xAxis) === null || _m === void 0 ? void 0 : _m.stepSize : 20,
                fontFamily: _DesignTokens.fontFamily.bodySmall,
                fontColor: _DesignTokens.colorText.commonSecondary,
                fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
                padding: _DesignTokens.spacing.paddingXsmall.replace("px", "")
              },
              gridLines: {
                color: ((_p = (_o = this._option) === null || _o === void 0 ? void 0 : _o.xAxis) === null || _p === void 0 ? void 0 : _p.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
                zeroLineColor: ((_r = (_q = this._option) === null || _q === void 0 ? void 0 : _q.xAxis) === null || _r === void 0 ? void 0 : _r.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary
              },
              scaleLabel: {
                display: ((_t = (_s = this._option) === null || _s === void 0 ? void 0 : _s.xAxis) === null || _t === void 0 ? void 0 : _t.label) ? true : false,
                fontFamily: _DesignTokens.fontFamily.bodySmall,
                labelString: (_v = (_u = this._option) === null || _u === void 0 ? void 0 : _u.xAxis) === null || _v === void 0 ? void 0 : _v.label
              }
            }],
            yAxes: [{
              ticks: {
                suggestedMin: (_x = (_w = this._option) === null || _w === void 0 ? void 0 : _w.yAxis) === null || _x === void 0 ? void 0 : _x.suggestedMin,
                suggestedMax: (_z = (_y = this._option) === null || _y === void 0 ? void 0 : _y.yAxis) === null || _z === void 0 ? void 0 : _z.suggestedMax,
                fontFamily: _DesignTokens.fontFamily.bodySmall,
                fontColor: _DesignTokens.colorText.commonSecondary,
                fontSize: _DesignTokens.fontSize.bodySmall.replace("px", ""),
                padding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
                stepSize: ((_1 = (_0 = this._option) === null || _0 === void 0 ? void 0 : _0.yAxis) === null || _1 === void 0 ? void 0 : _1.stepSize) ? (_3 = (_2 = this._option) === null || _2 === void 0 ? void 0 : _2.yAxis) === null || _3 === void 0 ? void 0 : _3.stepSize : 20,
                callback: (value, index) => {
                  var _a2;
                  if (this.yaxisallowstring) {
                    return (_a2 = this._data) === null || _a2 === void 0 ? void 0 : _a2.datasets[index].yAxisStringLabel;
                  } else {
                    return value;
                  }
                }
              },
              gridLines: {
                color: ((_5 = (_4 = this._option) === null || _4 === void 0 ? void 0 : _4.yAxis) === null || _5 === void 0 ? void 0 : _5.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary,
                zeroLineColor: ((_7 = (_6 = this._option) === null || _6 === void 0 ? void 0 : _6.yAxis) === null || _7 === void 0 ? void 0 : _7.isHidden) ? _DesignTokens.colorFill.controlUnselected : _DesignTokens.colorBorder.commonPrimary
              },
              scaleLabel: {
                display: true,
                fontFamily: _DesignTokens.fontFamily.bodySmall,
                labelString: (_9 = (_8 = this._option) === null || _8 === void 0 ? void 0 : _8.yAxis) === null || _9 === void 0 ? void 0 : _9.label
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
      this._chart = new Chart(ctx, this._chartOption);
      if (!((_10 = this._option) === null || _10 === void 0 ? void 0 : _10.disableLegend)) {
        this.element__legends.innerHTML = this._chart.generateLegend();
        this.bindLegendClickEvent();
      }
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  bindLegendClickEvent() {
    try {
      const legendItems = this.element__legends.querySelectorAll(".bh-line-chart--legend-li");
      legendItems.forEach((item, i) => {
        item.addEventListener("click", () => {
          this.disabledDatasetIndex = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? this.disabledDatasetIndex.filter((idx) => idx !== i) : [...this.disabledDatasetIndex, i];
          this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? legendItems[i].classList.add("hidden") : legendItems[i].classList.remove("hidden");
          const baseHexColor = this._option.styleOverride && this._option.styleOverride[i] && this._option.styleOverride[i].color ? this._option.styleOverride[i].color : getChartColor(this._option.mode, i);
          this._chart.data.datasets[i].borderColor = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? `${baseHexColor}00` : baseHexColor;
          this._chart.update();
          this.bhEventChange.emit({
            disabledDatasetIndex: this.disabledDatasetIndex
          });
        });
      });
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
  }
  render() {
    try {
      return h(Host, {
        key: "c0aee91e11be9238079f46ae96611ff303422b05",
        class: "bh-line-chart"
      }, h("div", {
        key: "a60bf4668e1db9ff22c7a3bae344c275362a793b",
        class: "bh-line-chart-wrapper",
        style: {
          height: `${this.height}px`
        }
      }, h("canvas", {
        key: "ed48fc2147cc0057852770fdd96e3359d99376fd",
        ref: (el) => {
          this.element__canvas = el;
        }
      })), h("div", {
        key: "1433d878c5d0dc5b119e1fcae4e871d892c88067",
        ref: (el) => {
          this.element__legends = el;
        }
      }), h("div", {
        key: "fb6f4f531b57c3908f0e06ee80a2be785f04bf28",
        ref: (el) => {
          this.element__tooltip = el;
        }
      }, h("table", {
        key: "ef0f20b2ca17ba0545e3deee14f4816185dbfaa4",
        class: "bink-calc__tooltip"
      })));
    } catch (err) {
      console.warn(LINE_CHART_ERROR_MESSAGE);
    }
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
BhLineChart.style = BhLineChartStyle0;
export {
  BhLineChart as bh_line_chart
};
//# sourceMappingURL=bh-line-chart.entry-VMAH7JA6.js.map
