import {
  _
} from "./chunk-2U6ZSFHE.js";
import {
  getBreakpoint
} from "./chunk-2XYHRBAQ.js";
import "./chunk-XGCW5RY7.js";
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-data-table.entry.js
var listOfSortStateOption = ["asc", "desc"];
var bhDataTableCss = ".bh-data-table__container{border:var(--effect-border-width-regular) solid var(--color-border-common-primary);border-radius:var(--effect-border-radius-medium);background-color:var(--color-fill-common-secondary);position:relative;z-index:1;-webkit-overflow-scrolling:touch}.bh-data-table__table-header{display:flex;flex-wrap:wrap;justify-content:space-between;padding:calc(var(--spacing-padding-medium) - var(--spacing-margin-xxsmall))\n    var(--spacing-padding-medium);position:relative;z-index:1}.bh-data-table__table-header-label{margin:var(--spacing-margin-small) 0}.bh-data-table__table-header__ctas{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.bh-data-table__table-header__filter-input{margin-left:var(--spacing-padding-small)}.bh-data-table__table-header__filter-input.hidden{display:none}.bh-data-table--action-menu{margin-right:var(--spacing-margin-small);position:relative;z-index:5}.bh-data-table__table-body{overflow:hidden;position:relative;max-height:592px;z-index:3}@-moz-document url-prefix(){.bh-data-table__table-body{overflow-x:visible;scrollbar-width:none}}.bh-data-table__table{border-spacing:0;width:100%}.bh-data-table__tr{width:100%}.bh-data-table__cell-container__checkbox.fixed{position:sticky;left:0;z-index:3}.bh-data-table__checkbox-wrapper{width:18px;display:flex;justify-content:center}.no-transition *{transition:all !important;transition-duration:0s !important}.bh-data-table__null-state{text-align:center;padding:var(--spacing-padding-medium)}.bh-data-table__null-state-copy{color:var(--color-text-common-secondary)}.bh-data-table__th.bh-data-table__action-drawer-cell,.bh-data-table__td.bh-data-table__action-drawer-cell{min-width:38px}.bh-data-table__thead{display:block;position:absolute;top:0;z-index:1}.bh-data-table__th{color:var(--color-text-common-primary);background-color:var(--color-fill-common-tertiary);border-bottom:var(--effect-border-width-regular) solid var(--color-border-common-primary);padding:0 var(--spacing-padding-medium);height:51px;text-align:left;vertical-align:middle;cursor:pointer;user-select:none}.bh-data-table__th.fixed{position:sticky}.bh-data-table__th.bordered{border-right:var(--effect-border-width-regular) solid var(--color-border-common-primary)}.bh-data-table__th.bh-data-table__cell-container__checkbox{padding:0 var(--spacing-padding-medium);background-color:var(--color-fill-common-tertiary);width:18px;min-width:unset}.bh-data-table__th__contents{display:flex;white-space:nowrap}.bh-data-table__sort-icon.material-icons-outlined{font-size:18px;vertical-align:middle;margin-left:var(--spacing-margin-xsmall);color:var(--color-text-common-secondary)}.bh-data-table__sort-icon.material-icons-outlined.highlighted{color:var(--color-text-link-primary-default)}.bh-data-table__tbody__wrapper{max-height:540px;position:relative;margin-top:52px;overflow-y:auto}.bh-data-table__tbody__wrapper.cell-width-full{overflow-x:hidden}.bh-data-table__tbody{display:block}@media screen and (-webkit-min-device-pixel-ratio: 0){.bh-data-table__tbody{display:table}}.bh-data-table__td{color:var(--color-text-common-primary);border-bottom:var(--effect-border-width-regular) solid var(--color-border-common-primary);vertical-align:middle;height:53px;padding:0 var(--spacing-padding-medium);background-color:var(--color-fill-common-secondary);white-space:nowrap;text-overflow:ellipsis;position:relative;z-index:1;}.bh-data-table__td:hover{z-index:2}.bh-data-table__td.fixed{position:sticky;z-index:3}.bh-data-table__td.bordered{border-right:var(--effect-border-width-regular) solid var(--color-border-common-primary)}.bh-data-table__td.bh-data-table__cell-container__checkbox{padding:0 var(--spacing-padding-medium);background-color:var(--color-fill-common-secondary);width:18px;min-width:unset}.bh-data-table__td-content{overflow-x:visible;text-overflow:ellipsis;white-space:nowrap}.bh-data-table__td__dropdown-anchor{width:100%;height:53px;display:flex;align-items:center}.bh-data-table__tr.selected>.bh-data-table__td{background-color:var(--color-fill-menu-selected-supplemental)}.bh-data-table__tr:last-child>.bh-data-table__td{border-bottom:var(--effect-border-width-regular) solid transparent}.bh-data-table__cell-container--profile{display:flex;align-items:center}.bh-data-table__cell-container--profile>bh-avatar{margin-right:var(--spacing-margin-small)}.bh-data-table__action-drawer-header-container,.bh-data-table__action-drawer-container{width:68px;}.bh-data-table--action-menu--desktop{position:relative;visibility:visible}.bh-data-table--action-menu--mobile{position:fixed;visibility:hidden;pointer-events:none}.bh-data-table__pagination-container{position:relative;padding:var(--spacing-padding-xsmall) var(--spacing-padding-medium);border-top:var(--effect-border-width-regular) solid var(--color-border-common-primary);z-index:2}.bh-data-table__pagination-container .bh-inline-dropdown__menu-container .bh-menu__ul{word-break:normal}@media screen and (max-width: 599px){.bh-data-table__table-header__filter-input{display:none}.bh-data-table__table-header__ctas>bh-button{display:none}.bh-data-table--action-menu{margin-right:0}.bh-data-table--action-menu--desktop{position:fixed;visibility:hidden;pointer-events:none}.bh-data-table--action-menu--mobile{position:relative;visibility:visible}}";
var BhDataTableStyle0 = bhDataTableCss;
var BhDataTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getTableDataset = createEvent(this, "getTableDataset", 7);
    this.customHtmlElementClick = createEvent(this, "customHtmlElementClick", 7);
    this.sortUpdate = createEvent(this, "sortUpdate", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this._option = void 0;
    this.option = void 0;
    this._content = void 0;
    this.content = void 0;
    this._sortState = void 0;
    this.sortState = {};
    this.dataToDisplay = void 0;
    this.currentPage = 0;
    this.checkedItem = [];
    this.filterQuery = "";
    this.itemCount = void 0;
    this.headerCheckbox = false;
    this.isInDataUpdate = false;
    this.cellWidths = void 0;
    this.viewport = void 0;
    this.selectCellLeft = 0;
    this.isDropdownOpen = false;
    this.isActionMenuOpen = false;
    this.tableCellWidthRatios = void 0;
    this.checkboxColumnOffset = 0;
    this.breakpoint = void 0;
    this.isCellsWithFullTableWidth = false;
    this.tableBodyScrollState = {
      isScrollX: false,
      isScrollY: false,
      x: 0,
      y: 0
    };
  }
  watchOption() {
    this.mapObjectProps();
  }
  watchContent() {
    this.mapObjectProps();
  }
  watchSortState() {
    this._sortState = typeof this.sortState === "string" ? JSON.parse(this.sortState) : this.sortState;
  }
  preventDefault(event) {
    event.preventDefault();
  }
  // call this to Disable
  disableScroll() {
    window.addEventListener("DOMMouseScroll", this.preventDefault, false);
    window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.addEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  // call this to Enable
  enableScroll() {
    window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
    window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  // Event Listeners
  handleResize() {
    this.setTableCellWidths();
    this.setViewport();
    this.breakpoint = getBreakpoint();
  }
  onItemCountChangeHandler(event) {
    this.isInDataUpdate = true;
    this.itemCount = event.detail.itemCount;
    this.currentPage = event.detail.currentPage;
    if (this._option.async) this.getData();
  }
  onPageNumberChangeHandler(event) {
    this.isInDataUpdate = true;
    this.currentPage = event.detail;
    if (this._option.async) {
      this.getData();
    }
  }
  dropdownOpenStatusChange(event) {
    setTimeout(() => {
      this.isDropdownOpen = event.detail.isOpen;
    });
  }
  actionMenuOpenStatusChange(event) {
    if (event.detail.isOpen) {
      setTimeout(() => {
        this.isActionMenuOpen = true;
        this.disableScroll();
      });
    } else {
      this.isActionMenuOpen = false;
      this.enableScroll();
    }
  }
  // Private Methods
  setViewport() {
    if (window.innerWidth >= 1024) {
      this.viewport = "large";
    } else if (window.innerWidth <= 1023 && window.innerWidth > 600) {
      this.viewport = "medium";
    } else {
      this.viewport = "small";
    }
  }
  // Watcher n' Parser for object / array props
  mapObjectProps() {
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this._content = typeof this.content === "string" ? JSON.parse(this.content) : this.content;
  }
  // Data
  getData() {
    if (!this._option) return;
    const firstDataIndex = this.currentPage * this.itemCount;
    this.getTableDataset.emit(this._option.async ? {
      firstDataIndex,
      dataLength: this.itemCount
    } : {});
  }
  // Checkbox
  onCheckboxStateChange(id, isChecked) {
    if (!this._option.checkbox || !this._option.checkbox.show) return;
    this.checkedItem = isChecked ? [...this.checkedItem, id] : this.checkedItem.filter((index) => index !== id);
  }
  setAllCheckboxState(isChecked) {
    var _a, _b;
    if (!this._option.checkbox || !this._option.checkbox.show) return;
    this.checkedItem = isChecked ? (_b = (_a = this._content.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map((datum) => datum.id) : [];
  }
  // Sorting
  updateSorting(label, props) {
    var _a;
    const sortingOpts = listOfSortStateOption;
    this.isInDataUpdate = true;
    if (_.isEqual((_a = this._sortState) === null || _a === void 0 ? void 0 : _a.props, props)) {
      if (this._sortState.sort === sortingOpts[0]) {
        this._sortState = {
          label,
          props,
          sort: sortingOpts[1]
        };
      } else if (this._sortState.sort === sortingOpts[1]) {
        this._sortState = {};
      }
    } else {
      this._sortState = {
        label,
        props,
        sort: sortingOpts[0]
      };
    }
    this.sortUpdate.emit(this._sortState);
  }
  sortData(data) {
    var _a, _b, _c, _d;
    if ((_b = (_a = this._content) === null || _a === void 0 ? void 0 : _a.fields.find((f) => _.isEqual(f.props, this._sortState.props))) === null || _b === void 0 ? void 0 : _b.isCustomSort) return data;
    if ((_c = this._sortState) === null || _c === void 0 ? void 0 : _c.props) {
      const props = (_d = this._content.fields) === null || _d === void 0 ? void 0 : _d.find((k) => _.isEqual(k.props, this._sortState.props)).props;
      return this._sortState.sort === "desc" ? _.sortBy(data, props[0]).reverse() : _.sortBy(data, props[0]);
    } else {
      return data;
    }
  }
  // Filtering
  filterData(data) {
    if (!this.filterQuery) return data;
    return data.filter((datum) => {
      const str = Object.values(datum).filter((d) => typeof d === "string").find((d) => d.toLowerCase().includes(this.filterQuery.toLowerCase()));
      return str ? true : false;
    });
  }
  tableBodyScorllEvent(event) {
    if (this.tableBodyScrollState.x !== event.target.scrollLeft) {
      clearTimeout(this.tableBodyScrollTimeoutX);
      this.tableBodyScrollState = Object.assign(Object.assign({}, this.tableBodyScrollState), {
        isScrollX: true,
        x: event.target.scrollLeft
      });
      this.tableBodyScrollTimeoutX = setTimeout(() => {
        this.tableBodyScrollState = Object.assign(Object.assign({}, this.tableBodyScrollState), {
          isScrollX: false
        });
      }, 300);
    } else if (this.tableBodyScrollState.y !== event.target.scrollTop) {
      clearTimeout(this.tableBodyScrollTimeoutY);
      this.tableBodyScrollState = Object.assign(Object.assign({}, this.tableBodyScrollState), {
        isScrollY: true,
        y: event.target.scrollTop
      });
      this.tableBodyScrollTimeoutY = setTimeout(() => {
        this.tableBodyScrollState = Object.assign(Object.assign({}, this.tableBodyScrollState), {
          isScrollY: false
        });
      }, 300);
    }
  }
  getWidthPropValue(cellWidth, containerWidth) {
    var _a, _b;
    const container__width = containerWidth ? containerWidth : (_b = (_a = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _a === void 0 ? void 0 : _a.querySelector("table")) === null || _b === void 0 ? void 0 : _b.clientWidth;
    if (!cellWidth || !container__width) return 0;
    if (typeof cellWidth === "number") return cellWidth;
    if (typeof cellWidth === "string") {
      if (cellWidth.slice(-1) === "%") {
        const percentage = parseFloat(cellWidth.replace("%", "")) / 100;
        return percentage * container__width;
      } else if (cellWidth.slice(-2) === "px") {
        return parseFloat(cellWidth.replace("px", ""));
      } else {
        return parseFloat(cellWidth) ? parseFloat(cellWidth) : 0;
      }
    }
    return 0;
  }
  setTableCellWidths() {
    var _a, _b, _c, _d, _e, _f;
    const table__parent = document.getElementById(`bh-data-table__${(_a = this._option) === null || _a === void 0 ? void 0 : _a.id}`);
    if (!this._option || !this._content || !this._content.fields || !table__parent) return;
    const tableWidth = (_b = table__parent === null || table__parent === void 0 ? void 0 : table__parent.querySelector(".bh-data-table__container")) === null || _b === void 0 ? void 0 : _b.clientWidth;
    const checkboxOffset = this._option.checkbox.show ? 58 : 0;
    let cellWidthsMap = this._content.fields.map((field) => {
      const width = field.width ? Math.floor(this.getWidthPropValue(field.width, tableWidth - checkboxOffset)) : 0;
      return field.minWidth && field.minWidth > width ? field.minWidth : width;
    });
    if (cellWidthsMap.reduce((a, w) => {
      return a + w;
    }, checkboxOffset) < tableWidth) {
      cellWidthsMap[cellWidthsMap.length - 1] = cellWidthsMap[cellWidthsMap.length - 1] + (tableWidth - cellWidthsMap.reduce((a, w) => {
        return a + w;
      }, checkboxOffset));
    }
    this.isCellsWithFullTableWidth = cellWidthsMap.reduce((a, w) => {
      return a + w;
    }, checkboxOffset) <= tableWidth;
    const tbodyWrapper = table__parent === null || table__parent === void 0 ? void 0 : table__parent.querySelector(".bh-data-table__tbody__wrapper");
    tbodyWrapper.style.width = `${tableWidth}px`;
    const thElements = (_d = (_c = table__parent === null || table__parent === void 0 ? void 0 : table__parent.querySelector("thead")) === null || _c === void 0 ? void 0 : _c.querySelector("tr")) === null || _d === void 0 ? void 0 : _d.querySelectorAll("th");
    const tbodyTrElements = (_e = table__parent === null || table__parent === void 0 ? void 0 : table__parent.querySelector("tbody")) === null || _e === void 0 ? void 0 : _e.querySelectorAll("tr");
    if (!thElements || !tbodyTrElements) return;
    (_f = this._content.fields) === null || _f === void 0 ? void 0 : _f.forEach((field, i) => {
      const index = this._option.checkbox.show ? i + 1 : i;
      const thContent = thElements[index].querySelector(".bh-data-table__th__contents");
      if (thContent) thContent.style.width = `${cellWidthsMap[i] - (thElements[index].classList.contains("bordered") ? 41 : 40)}px`;
      if (thElements[index].classList.contains("fixed")) {
        thElements[index].style.left = `${cellWidthsMap.slice(0, i).reduce((a, w) => {
          return a + w;
        }, checkboxOffset)}px`;
      }
      tbodyTrElements.forEach((tr) => {
        const tdElements = tr.querySelectorAll("td");
        if (tdElements.length > 0) {
          const tdContent = tdElements[index].querySelector(".bh-data-table__td-content");
          if (tdContent) tdContent.style.width = `${cellWidthsMap[i] - (tdElements[index].classList.contains("bordered") ? 41 : 40)}px`;
          if (tdElements[index].classList.contains("fixed")) {
            tdElements[index].style.left = `${cellWidthsMap.slice(0, i).reduce((a, w) => {
              return a + w;
            }, checkboxOffset)}px`;
          }
        }
      });
    });
  }
  // Table Widths
  setTableCellWidthsOld() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (!this._option) return;
    const tableWidth = (_b = (_a = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _a === void 0 ? void 0 : _a.querySelector("table")) === null || _b === void 0 ? void 0 : _b.clientWidth;
    const tableContainerWidth = (_d = (_c = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-data-table__table-body")) === null || _d === void 0 ? void 0 : _d.clientWidth;
    const tdElements = (_g = (_f = (_e = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _e === void 0 ? void 0 : _e.querySelector("tbody")) === null || _f === void 0 ? void 0 : _f.querySelector("tr")) === null || _g === void 0 ? void 0 : _g.querySelectorAll("td");
    if (!tableWidth || !tableContainerWidth) return;
    if (tdElements) {
      const initTdWidths = Array.prototype.map.call(tdElements, (el) => el.clientWidth);
      const trWidth = initTdWidths.reduce((sum, w) => w + sum, 0);
      const ratio = initTdWidths.map((w) => w / trWidth);
      if (!_.isEqual(ratio, this.tableCellWidthRatios)) this.tableCellWidthRatios = ratio;
    }
    const thElements = (_k = (_j = (_h = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _h === void 0 ? void 0 : _h.querySelector("thead")) === null || _j === void 0 ? void 0 : _j.querySelector("tr")) === null || _k === void 0 ? void 0 : _k.querySelectorAll("th");
    thElements.forEach((th, index) => {
      if ((!this._option.checkbox || !this._option.checkbox.show || index > 0) && index < thElements.length - 1) {
        th.children[0].style.width = `${Math.floor(this.tableCellWidthRatios[index] * tableContainerWidth - 40)}px`;
        if (th.classList.contains("fixed")) {
          th.style.left = `${index > 0 ? this.checkboxColumnOffset : this.checkboxColumnOffset + this.tableCellWidthRatios.slice(1, index).reduce((sum, w) => w + sum, 0) * tableContainerWidth}px`;
          if (th.classList.contains("bordered")) {
            if (Math.floor(this.tableCellWidthRatios[index] * tableContainerWidth) > this._content.fields[index].minWidth) {
              th.children[0].style.width = `${Math.floor(this.tableCellWidthRatios[index] * tableContainerWidth - 40 - 1)}px`;
            }
          }
        } else {
          th.children[0].style.left = "auto";
        }
      } else if (index === thElements.length - 1) {
        th.style.width = `${tableContainerWidth - this.tableCellWidthRatios.slice(1, index).reduce((sum, r) => Math.floor(r * tableContainerWidth) + sum, this.checkboxColumnOffset) - 40 - 1}px`;
        th.style.left = "auto";
      }
    });
    const tbodyWrapper = (_l = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _l === void 0 ? void 0 : _l.querySelector(".bh-data-table__tbody__wrapper");
    tbodyWrapper.style.width = `${tableContainerWidth}px`;
    if (!tdElements) return;
    const trElements = (_o = (_m = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _m === void 0 ? void 0 : _m.querySelector("tbody")) === null || _o === void 0 ? void 0 : _o.querySelectorAll("tr");
    trElements.forEach((tr) => {
      const tdElements2 = tr.querySelectorAll("td");
      tdElements2.forEach((td, index) => {
        if ((!this._option.checkbox || !this._option.checkbox.show || index > 0) && index < tdElements2.length - 1) {
          td.style.width = `${Math.floor(this.tableCellWidthRatios[index] * tableContainerWidth - 40)}px`;
          if (td.classList.contains("fixed")) {
            td.style.left = `${index > 0 ? this.checkboxColumnOffset : this.checkboxColumnOffset + this.tableCellWidthRatios.slice(1, index).reduce((sum, w) => w + sum, 0) * tableContainerWidth}px`;
          } else {
            td.style.left = "auto";
          }
        } else if (index === tdElements2.length - 1) {
          td.style.width = `${tableContainerWidth - this.tableCellWidthRatios.slice(1, index).reduce((sum, r) => Math.floor(r * tableContainerWidth) + sum, this.checkboxColumnOffset) - 40 - 1}px`;
          td.style.left = "auto";
        }
      });
    });
    const selectCellIndex = this._content.fields.findIndex((field) => field.type === "selection");
    this.selectCellLeft = selectCellIndex > 0 ? this.checkboxColumnOffset : this.checkboxColumnOffset + this.tableCellWidthRatios.slice(1, selectCellIndex - 2).reduce((sum, w) => w + sum, 0) * tableWidth + 20;
  }
  tbodyWrapperScroll(event) {
    var _a;
    const thead = (_a = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _a === void 0 ? void 0 : _a.querySelector("thead");
    thead.style.left = `${-event.target.scrollLeft}px`;
  }
  // Lifecycles
  componentWillLoad() {
    var _a, _b, _c, _d, _e, _f;
    this.mapObjectProps();
    this._sortState = typeof this.sortState === "string" ? JSON.parse(this.sortState) : this.sortState;
    this.getData();
    this.breakpoint = getBreakpoint();
    this.checkboxColumnOffset = ((_a = this._option) === null || _a === void 0 ? void 0 : _a.checkbox.show) ? 58 : 0;
    if (this._option) {
      this.itemCount = ((_b = this._option) === null || _b === void 0 ? void 0 : _b.pagination) && ((_c = this._option) === null || _c === void 0 ? void 0 : _c.pagination.options.length) > 0 ? (_d = this._option) === null || _d === void 0 ? void 0 : _d.pagination.options[0] : (_f = (_e = this._content) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.length;
    }
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        }
      }));
    } catch (e) {
    }
    this.wheelOpt = supportsPassive ? {
      passive: false
    } : false;
    this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  }
  componentDidRender() {
    this.setViewport();
    this.setTableCellWidths();
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
    const prefix = this.host.tagName.toLowerCase().replace(components.dataTable.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    this.mapObjectProps();
    if (!this._option || !this._content) return;
    if (((_a = this._content.payload) === null || _a === void 0 ? void 0 : _a.data) && !this._option.pagination) {
      this.itemCount = (_b = this._content.payload) === null || _b === void 0 ? void 0 : _b.length;
    }
    const fixedColumns = this._content.fields.filter((field) => field.fixed);
    const fixedColumnRightIndex = (fixedColumns === null || fixedColumns === void 0 ? void 0 : fixedColumns.length) > 0 ? this._content.fields.findIndex((field) => field === fixedColumns[fixedColumns.length - 1]) : -1;
    const firstDataIndex = this.currentPage * this.itemCount;
    const dataToDisplay = this._option.async ? this.sortData(this.filterData((_c = this._content.payload) === null || _c === void 0 ? void 0 : _c.data)) : (_e = this.sortData(this.filterData((_d = this._content.payload) === null || _d === void 0 ? void 0 : _d.data))) === null || _e === void 0 ? void 0 : _e.slice(firstDataIndex, firstDataIndex + this.itemCount);
    setTimeout(() => {
      this.isInDataUpdate = false;
    });
    return h(Host, {
      id: `bh-data-table__${this._option.id}`
    }, h("div", {
      class: "bh-data-table__container"
    }, this._option.header && h("div", {
      class: "bh-data-table__table-header"
    }, this._option.header.label && h("h3", {
      class: "bh-data-table__table-header-label typography--color-primary typography--subtitle-small"
    }, this._option.header.label), h("div", {
      class: "bh-data-table__table-header__ctas"
    }, ((_f = this._option.header) === null || _f === void 0 ? void 0 : _f.actionMenu) && h("div", {
      class: "bh-data-table--action-menu"
    }, h("div", {
      class: "bh-data-table--action-menu--desktop"
    }, h(Components.actionMenu, {
      menuItems: (_h = (_g = this._option.header) === null || _g === void 0 ? void 0 : _g.actionMenu) === null || _h === void 0 ? void 0 : _h.menuItems,
      menuWidth: ((_k = (_j = this._option.header) === null || _j === void 0 ? void 0 : _j.actionMenu) === null || _k === void 0 ? void 0 : _k.menuWidth) ? (_m = (_l = this._option.header) === null || _l === void 0 ? void 0 : _l.actionMenu) === null || _m === void 0 ? void 0 : _m.menuWidth : "medium",
      isSmall: true,
      isMultiSelect: (_p = (_o = this._option.header) === null || _o === void 0 ? void 0 : _o.actionMenu) === null || _p === void 0 ? void 0 : _p.isMultiSelect,
      isSearchable: (_r = (_q = this._option.header) === null || _q === void 0 ? void 0 : _q.actionMenu) === null || _r === void 0 ? void 0 : _r.isSearchable,
      isUnselectable: (_t = (_s = this._option.header) === null || _s === void 0 ? void 0 : _s.actionMenu) === null || _t === void 0 ? void 0 : _t.isUnselectable,
      placeholder: (_v = (_u = this._option.header) === null || _u === void 0 ? void 0 : _u.actionMenu) === null || _v === void 0 ? void 0 : _v.placeholder,
      iconOverride: (_x = (_w = this._option.header) === null || _w === void 0 ? void 0 : _w.actionMenu) === null || _x === void 0 ? void 0 : _x.iconOverride,
      inlineAnchorId: `bh-data-table__action-menu__${this._option.id}__header-desktop`,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    })), h("div", {
      class: "bh-data-table--action-menu--mobile"
    }, h(Components.actionMenu, {
      menuItems: this._option.header.primaryCta ? {
        itemGroups: [{
          items: [{
            label: this._option.header.primaryCta.label,
            value: this._option.header.primaryCta.label
          }],
          divider: false
        }, ...(_z = (_y = this._option.header.actionMenu) === null || _y === void 0 ? void 0 : _y.menuItems) === null || _z === void 0 ? void 0 : _z.itemGroups],
        ctas: (_2 = (_1 = (_0 = this._option.header) === null || _0 === void 0 ? void 0 : _0.actionMenu) === null || _1 === void 0 ? void 0 : _1.menuItems) === null || _2 === void 0 ? void 0 : _2.ctas
      } : (_3 = this._option.header.actionMenu) === null || _3 === void 0 ? void 0 : _3.menuItems,
      menuWidth: ((_5 = (_4 = this._option.header) === null || _4 === void 0 ? void 0 : _4.actionMenu) === null || _5 === void 0 ? void 0 : _5.menuWidth) ? (_7 = (_6 = this._option.header) === null || _6 === void 0 ? void 0 : _6.actionMenu) === null || _7 === void 0 ? void 0 : _7.menuWidth : "medium",
      isSmall: true,
      isMultiSelect: (_9 = (_8 = this._option.header) === null || _8 === void 0 ? void 0 : _8.actionMenu) === null || _9 === void 0 ? void 0 : _9.isMultiSelect,
      isSearchable: (_11 = (_10 = this._option.header) === null || _10 === void 0 ? void 0 : _10.actionMenu) === null || _11 === void 0 ? void 0 : _11.isSearchable,
      isUnselectable: (_13 = (_12 = this._option.header) === null || _12 === void 0 ? void 0 : _12.actionMenu) === null || _13 === void 0 ? void 0 : _13.isUnselectable,
      placeholder: (_15 = (_14 = this._option.header) === null || _14 === void 0 ? void 0 : _14.actionMenu) === null || _15 === void 0 ? void 0 : _15.placeholder,
      iconOverride: (_17 = (_16 = this._option.header) === null || _16 === void 0 ? void 0 : _16.actionMenu) === null || _17 === void 0 ? void 0 : _17.iconOverride,
      inlineAnchorId: `bh-data-table__action-menu__${this._option.id}__header-mobile`,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    }))), this._option.header.primaryCta && h(Components.button, {
      type: "ghost",
      label: this._option.header.primaryCta.label,
      isSmall: true
    }), this._option.header.cta && h(Components.button, {
      type: this._option.header.cta.type ? this._option.header.cta.type : "primary",
      label: this._option.header.cta.label,
      isSmall: this._option.header.cta.size === "medium" ? false : true,
      isDisabled: this._option.header.cta.isDisabled,
      isLoading: this._option.header.cta.isLoading,
      leftIcon: this._option.header.cta.leftIcon,
      rightIcon: this._option.header.cta.rightIcon,
      onClick: () => {
        if (this._option.header.cta.isDisabled) return;
        this.bhEventCtaClick.emit(this._option.header.cta.key);
      }
    }), h("div", {
      class: `bh-data-table__table-header__filter-input ${this._option.header.hideSearch ? "hidden" : ""}`
    }, h(Components.textInput, {
      placeholder: "Search",
      onKeyUp: (event) => {
        var _a2;
        this.isInDataUpdate = true;
        this.filterQuery = (_a2 = event.target) === null || _a2 === void 0 ? void 0 : _a2.value;
      },
      startIcon: "search",
      isSmall: true
    })))), dataToDisplay && h("div", {
      class: `bh-data-table__table-body`
    }, h("table", {
      class: "bh-data-table__table"
    }, h("thead", {
      class: "bh-data-table__thead"
    }, h("tr", {
      class: "bh-data-table__tr__thead"
    }, this._option.checkbox && this._option.checkbox.show && h("th", {
      class: `bh-data-table__th bh-data-table__cell-container__checkbox ${this._option.checkbox.fixed || this._content.fields.findIndex((field) => field.fixed) > -1 || this.viewport === "small" ? "fixed" : ""} ${this._option.checkbox.fixed && this._content.fields.findIndex((field) => field.fixed) === -1 || this.viewport === "small" ? "bordered" : ""}`
    }, h("div", {
      class: "bh-data-table__checkbox-wrapper"
    }, h(Components.checkbox, {
      isIndeterminate: this.checkedItem.length > 0 && this.checkedItem.length < ((_18 = this._content.payload) === null || _18 === void 0 ? void 0 : _18.data.length),
      onChange: (event) => {
        this.setAllCheckboxState(event.target.checked);
      }
    }))), (_19 = this._content.fields) === null || _19 === void 0 ? void 0 : _19.map((tableHeader, index) => {
      var _a2, _b2, _c2;
      return h("th", {
        class: `bh-data-table__th typography--label-small ${tableHeader.type === "selection" ? "selection" : ""} ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`,
        onClick: () => {
          if (tableHeader.sortable) this.updateSorting(tableHeader.label, tableHeader.props);
        }
      }, h("div", {
        class: "bh-data-table__th__contents"
      }, h("span", null, tableHeader.label), tableHeader.sortable && h("i", {
        class: `bh-data-table__sort-icon material-icons material-icons-outlined bh-button__icon ${_.isEqual((_a2 = this._sortState) === null || _a2 === void 0 ? void 0 : _a2.props, tableHeader.props) ? "highlighted" : ""}`
      }, _.isEqual((_b2 = this._sortState) === null || _b2 === void 0 ? void 0 : _b2.props, tableHeader.props) ? ((_c2 = this._sortState) === null || _c2 === void 0 ? void 0 : _c2.sort) === "asc" ? "arrow_upward" : "arrow_downward" : "unfold_more")));
    }))), h("div", {
      class: `bh-data-table__tbody__wrapper ${this.isCellsWithFullTableWidth ? "cell-width-full" : ""}`,
      onScroll: (event) => {
        this.tbodyWrapperScroll(event);
      }
    }, h("tbody", {
      class: `bh-data-table__tbody ${this.isInDataUpdate ? "no-transition" : ""}`
    }, dataToDisplay.map((datum) => {
      var _a2;
      return h("tr", {
        class: `bh-data-table__tr ${this.checkedItem.find((id) => id === datum.id) > -1 ? "selected" : ""}`
      }, this._option.checkbox && this._option.checkbox.show && h("td", {
        class: `bh-data-table__td bh-data-table__cell-container__checkbox ${this._option.checkbox.fixed || this._content.fields.findIndex((field) => field.fixed) > -1 || this.viewport === "small" ? "fixed" : ""} ${(this._option.checkbox.fixed || this._content.fields.findIndex((field) => field.fixed) > -1) && fixedColumnRightIndex === -1 || this.viewport === "small" ? "bordered" : ""}`
      }, h("div", {
        class: "bh-data-table__checkbox-wrapper"
      }, h(Components.checkbox, {
        isChecked: this.checkedItem.find((id) => id === datum.id) > -1 ? true : false,
        onChange: (event) => {
          this.onCheckboxStateChange(datum.id, event.target.checked);
        }
      }))), (_a2 = this._content.fields) === null || _a2 === void 0 ? void 0 : _a2.map((tableKey, index) => {
        var _a3, _b2, _c2, _d2;
        switch (tableKey.type) {
          case "profile":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content bh-data-table__cell-container--profile"
            }, h(Components.avatar, {
              size: "small",
              image: datum[tableKey.props[1]]
            }), h("span", null, datum[tableKey.props[0]])));
          case "money":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content"
            }, datum[tableKey.props[0]].currency, datum[tableKey.props[0]].amount));
          case "text":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content"
            }, datum[tableKey.props[0]]));
          case "selection":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`,
              style: {
                minWidth: `${tableKey.minWidth ? tableKey.minWidth - 40 : 132}px`,
                position: "relative",
                zIndex: `${((_b2 = (_a3 = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _a3 === void 0 ? void 0 : _a3.querySelector(`bh-dropdown[inline-anchor-id="${`bh-data-table__selection__${this._option.id}__${datum.id}`}"]`)) === null || _b2 === void 0 ? void 0 : _b2.hasAttribute("open")) ? "2" : "1"}`
              }
            }, h("div", {
              class: "bh-data-table__td-content bh-data-table__td__dropdown-anchor",
              "data-anchor-index": `dropdown-anchor--${datum.id}`
            }, h(Components.dropdown, {
              menuItems: datum[tableKey.props[0]],
              value: datum[tableKey.props[1]] ? datum[tableKey.props[1]] : "",
              isSmall: true,
              isFluid: true,
              inlineAnchorId: `bh-data-table__selection__${this._option.id}__${datum.id}`,
              onOpened: (event) => {
                this.dropdownOpenStatusChange(event);
              },
              onBhEventSelected: (event) => {
                this.bhEventChange.emit({
                  type: "input",
                  payload: event.detail,
                  key: tableKey.props[1] ? tableKey.props[1] : "",
                  datum
                });
              },
              onBhEventChange: (event) => {
                this.bhEventChange.emit({
                  type: "input",
                  payload: event.detail,
                  key: tableKey.props[1] ? tableKey.props[1] : "",
                  datum
                });
              }
            })));
          case "status":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content"
            }, h(Components.chip, {
              type: "outlined",
              color: "earth",
              size: "small",
              label: datum[tableKey.props[0]]
            })));
          case "toggle":
            return h("td", {
              class: `bh-data-table__td ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content"
            }, h(Components.toggle, {
              isChecked: datum[tableKey.props[0]],
              onBhEventChange: (event) => {
                this.bhEventChange.emit({
                  type: "input",
                  payload: event.detail,
                  key: tableKey.props[0] || "",
                  datum
                });
              }
            })));
          case "actions":
            return h("td", {
              class: "bh-data-table__td bh-data-table__cell-container__action-drawer bh-data-table__action-drawer-cell",
              style: {
                position: "relative",
                zIndex: `${((_d2 = (_c2 = document.getElementById(`bh-data-table__${this._option.id}`)) === null || _c2 === void 0 ? void 0 : _c2.querySelector(`bh-action-menu[inline-anchor-id="${`bh-data-table__action-menu__${this._option.id}__${datum.id}`}"]`)) === null || _d2 === void 0 ? void 0 : _d2.hasAttribute("open")) ? "2" : "1"}`,
                minWidth: `${tableKey.minWidth ? tableKey.minWidth - 40 : 132}px`
              }
            }, h("div", {
              class: "bh-data-table__td-content bh-data-table__action-drawer-container"
            }, h(Components.actionMenu, {
              menuItems: datum[tableKey.props[0]],
              menuWidth: "small",
              isSmall: true,
              inlineAnchorId: `bh-data-table__action-menu__${this._option.id}__${datum.id}`,
              onOpened: (event) => {
                this.actionMenuOpenStatusChange(event);
              }
            })));
          case "html":
            return h("td", {
              class: `bh-data-table__td typography--body-medium ${index <= fixedColumnRightIndex && this.viewport !== "small" ? "fixed" : ""} ${index === fixedColumnRightIndex && this.viewport !== "small" ? "bordered" : ""}`
            }, h("div", {
              class: "bh-data-table__td-content",
              "data-key": `${this._option.id}__${tableKey.props[0]}--${datum.id}`,
              innerHTML: datum[tableKey.props[0]],
              onClick: () => {
                this.customHtmlElementClick.emit({
                  tableId: `${this._option.id}`,
                  propKey: `${tableKey.props[0]}`,
                  dataId: `${datum.id}`
                });
              }
            }));
        }
      }));
    }))))), (dataToDisplay === null || dataToDisplay === void 0 ? void 0 : dataToDisplay.length) === 0 && h("div", {
      class: "bh-data-table__null-state"
    }, h("p", {
      class: "bh-data-table__null-state-copy typography--label-small"
    }, "No data available.")), this._option.pagination && h("div", {
      class: "bh-data-table__pagination-container",
      ref: (el) => {
        this.element__paginationContainer = el;
      }
    }, h(Components.pagination, {
      itemCountOptions: this._option.pagination.options,
      totalItemCount: this.filterQuery ? this.filterData((_20 = this._content.payload) === null || _20 === void 0 ? void 0 : _20.data).length : (_21 = this._content.payload) === null || _21 === void 0 ? void 0 : _21.length,
      onItemCountChange: (event) => {
        this.onItemCountChangeHandler(event);
      },
      onPageNumberChange: (event) => {
        this.onPageNumberChangeHandler(event);
      },
      onDropdownOpened: (event) => {
        this.element__paginationContainer.style.zIndex = event.detail.isOpen ? "5" : "1";
      },
      onBhEventChange: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventChange.emit({
          type: "pagination",
          payload: event.detail
        });
      }
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "option": ["watchOption"],
      "content": ["watchContent"],
      "sortState": ["watchSortState"]
    };
  }
};
BhDataTable.style = BhDataTableStyle0;
export {
  BhDataTable as bh_data_table
};
//# sourceMappingURL=bh-data-table.entry-BXUOQBBM.js.map
