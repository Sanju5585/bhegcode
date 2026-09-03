import {
  getBreakpoint
} from "./chunk-2XYHRBAQ.js";
import "./chunk-XGCW5RY7.js";
import {
  components,
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-tabs.entry.js
var bhTabsCss = '.bh-tabs--wrapper{width:100%;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-tabs--container{height:44px;display:flex;align-items:center;position:relative;outline:none}.bh-tabs--container.small{height:36px}.bh-tabs--container.border{border-bottom:var(--effect-border-width-regular) solid var(--color-border-common-primary)}.bh-tabs--item{white-space:nowrap;display:flex;align-items:center;margin-right:var(--spacing-margin-medium);color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;height:100%;font-weight:400}.bh-tabs--item-label{max-width:250px;overflow-x:hidden;text-overflow:ellipsis}.bh-tabs--item:hover,.bh-tabs--item.selected{color:var(--color-text-common-primary)}.bh-tabs--item.selected{font-weight:500}.bh-tabs--item.truncated{visibility:hidden;position:fixed;pointer-events:none}.bh-tabs--truncation-menu{display:flex;align-items:center}.bh-tabs--truncation-menu.hidden{display:none}.bh-tabs--truncation-menu:hover,.bh-tabs--truncation-menu.selected{color:var(--color-text-common-primary)}.bh-tabs--truncation-menu{color:var(--color-text-common-secondary);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;height:44px}.bh-tabs--container.small .bh-tabs--truncation-menu{height:36px}.bh-tabs--truncation-menu--container{position:absolute;top:52px;right:0;z-index:10}.bh-tabs--truncation-menu--container.hidden{visibility:hidden;position:fixed}.bh-tabs--container.border .bh-tabs--truncation-menu--container{top:53px}.bh-tabs--container.small .bh-tabs--truncation-menu--container{top:44px}.bh-tabs--container.small.border .bh-tabs--truncation-menu--container{top:45px}.bh-tabs--item.active{color:var(--color-text-common-primary)}.bh-tabs--item:last-child{margin-right:0}.bh-tabs--item__icon{margin-right:var(--spacing-margin-xsmall)}.bh-tabs--active-highlight{position:absolute;height:2px;bottom:0;pointer-events:none;background-color:var(--color-fill-cta-primary-default)}.bh-tabs--label-block{display:flex;align-items:center;position:relative}.bh-tabs--truncation-wrapper{display:flex}.bh-tabs--trucation-icon{color:var(--color-text-common-secondary);cursor:pointer}.bh-tabs--trucation-icon:hover,.bh-tabs--trucation-icon:active,.bh-tabs--trucation-icon.selected{color:var(--color-text-common-primary)}.bh-tabs--label-block.truncated{position:fixed;opacity:0;visibility:hidden;pointer-events:none}.bh-tabs--label{color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;max-width:220px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.bh-tabs--label:hover,.bh-tabs--label:active,.bh-tabs--label.selected{color:var(--color-text-common-primary);text-decoration:underline}.bh-tabs--label.selected{color:var(--color-text-common-primary)}.bh-tabs--icon{color:var(--color-text-common-secondary);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-tabs--icon:hover,.bh-tabs--icon:active,.bh-tabs--icon.selected{color:var(--color-text-common-primary)}.bh-tabs--chevron-down{cursor:pointer;padding-left:var(--spacing-padding-xxsmall)}.bh-tabs--menu-container{position:absolute;top:26px;z-index:100}.bh-tabs--menu-container.flipped{right:0}@media (max-width: 599px){.bh-tabs--wrapper{margin:0 calc(-1 * var(--spacing-margin-small));padding-left:var(--spacing-padding-small);padding-right:var(--spacing-padding-small);overflow-x:auto}.bh-tabs--container{display:inline-flex}.bh-tabs--label{max-width:120px}}.bh-tabs--item[aria-disabled="true"]{pointer-events:none;cursor:not-allowed;color:var(--color-text-label-disabled-default)}.bh-tab-item-close--icon{display:flex;justify-content:center;align-items:center;padding-left:8px}.bh-tab-item-close--icon>i{display:none;color:var(--color-text-common-secondary)}.bh-tab-item-close--icon.selected>i{display:inline;color:var(--color-text-common-primary)}.bh-tab-item-close--icon.selected:hover>i{color:var(--color-text-common-primary);background-color:var(--color-fill-menu-highlighted);border-radius:4px}.bh-tab-item-close--icon:hover>i{display:inline;color:var(--color-text-common-primary);border-radius:4px;background-color:var(--color-fill-menu-highlighted)}.bh-tab-item-close--icon[aria-disabled="true"]>i{pointer-events:none;cursor:not-allowed;color:var(--color-text-label-disabled-default)}.bh-tabs--item:hover .bh-tab-item--dismiss .bh-tab-item-close--icon i{display:inline;color:var(--color-text-common-primary);border-radius:4px;background-color:var(--color-fill-menu-highlighted)}';
var BhTabsStyle0 = bhTabsCss;
var TRUNCATION_MENU = "truncation-menu";
var BhTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeTabUpdate = createEvent(this, "activeTabUpdate", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 3);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 3);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.ellipsisTextLimit = 26;
    this._ellipsisTextLimit = void 0;
    this.displayTabLimit = 0;
    this.reorderTabs = false;
    this.draggedIndex = null;
    this.removeTab = false;
    this.items = void 0;
    this._hideClose = false;
    this._items = void 0;
    this.activeKey = void 0;
    this.selectedKey = void 0;
    this.isBorder = true;
    this.isSmall = false;
    this.menuWidth = "fluid";
    this.menuEllipsis = false;
    this.isTruncationMenuOpen = false;
    this.truncateIndex = -1;
    this.truncateIndexPrev = -1;
    this.viewport = void 0;
    this.isInUpdate = false;
    this.firstItemWidth = void 0;
  }
  changeItems() {
    if (typeof this.items === "string") {
      try {
        this._items = JSON.parse(this.items);
      } catch (_a) {
      }
    } else {
      this._items = this.items;
    }
    this._ellipsisTextLimit = this.ellipsisTextLimit;
    this._items = this._items.map((item) => {
      return {
        label: item.label.length > this._ellipsisTextLimit ? `${item.label.substring(0, this._ellipsisTextLimit)}...` : item.label,
        extendedText: item.label.length > this._ellipsisTextLimit ? item.label : null,
        key: item.key,
        icon: item.icon,
        fullText: item.label,
        isDisabled: item.isDisabled ? item.isDisabled : false,
        isReoderDisabled: item.isReoderDisabled ? item.isReoderDisabled : false
      };
    });
    this.handleTruncation();
    setTimeout(() => this.setActiveKey(this.activeKey, true), 25);
  }
  watchActiveKey() {
    this.setActiveKey(this.activeKey, true);
  }
  // Listeners
  handleResize() {
    this.viewport = getBreakpoint();
    this.handleTruncation();
    setTimeout(() => {
      this.setActiveKey(this.activeKey, true);
    });
  }
  setActiveTab(event) {
    if (!event.detail || !event.detail.key) return;
    const key = event.detail.key;
    this.setActiveKey(key);
  }
  watchIsTruncationMenuOpen() {
    if (this.isTruncationMenuOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
      this.element__container.focus();
    }
  }
  toggleTrucateMenu() {
    this.isTruncationMenuOpen = !this.isTruncationMenuOpen;
  }
  handleTruncation() {
    var _a;
    if (!this._items || this._items.length < 1) return;
    if (this.viewport === "small") {
      this.truncateIndex = -1;
      return;
    }
    this.truncateIndexPrev = this.truncateIndex;
    const tars = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-tabs--item");
    const idx = this._items.findIndex((item, index) => {
      if (tars) {
        return Array.from(tars).slice(0, index + 1).reduce((acc, tar) => {
          return acc + tar.clientWidth + 20;
        }, 0) > this.element__container.clientWidth - 24;
      } else {
        return false;
      }
    });
    if (idx > 0) {
      this.truncateIndex = this.displayTabLimit < this._items.length && this.displayTabLimit > 0 && this.displayTabLimit < idx ? this.displayTabLimit : idx;
    } else {
      this.truncateIndex = this.displayTabLimit < this._items.length && this.displayTabLimit > 0 ? this.displayTabLimit : -1;
    }
    if (this.truncateIndex === -1) {
      this.isTruncationMenuOpen = false;
    }
    if (this.truncateIndex !== this.truncateIndexPrev && this.isTruncationMenuOpen) {
      this.isInUpdate = true;
      this.isTruncationMenuOpen = false;
      this.setActiveKey(this.activeKey);
    }
    const currentIndex = this.selectedKey === TRUNCATION_MENU ? TRUNCATION_MENU : this._items.findIndex((item) => {
      return item.key === this.selectedKey;
    });
    if (currentIndex !== TRUNCATION_MENU && currentIndex > 0 && this.truncateIndex > -1 && currentIndex > this.truncateIndex) {
      this.selectedKey = TRUNCATION_MENU;
    }
  }
  handleTruncationSelection(event) {
    var _a;
    if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.value) {
      const key = event.detail.value;
      if (this.displayTabLimit > 0) {
        const index = this._items.findIndex((item) => item.key === key);
        const targetIndex = this.truncateIndex - 1;
        if (index !== -1 && targetIndex >= 0 && targetIndex < this._items.length) {
          [this._items[targetIndex], this._items[index]] = [this._items[index], this._items[targetIndex]];
        }
        setTimeout(() => this.setActiveKey(key, false));
      } else {
        this.setActiveKey(key);
      }
    }
    this.isTruncationMenuOpen = false;
  }
  setActiveKey(key, preventEventEmission = false) {
    try {
      this.activeKey = key;
      this.selectedKey = key;
      if (this.element__active_highlight && this.element__container) {
        const tar = this.element__container.querySelector(`[data-key="${key}"]`);
        if (tar) {
          if (tar.classList.contains("truncated")) {
            const truncate = this.element__container.querySelector(".bh-tabs--truncation-menu");
            this.element__active_highlight.style.width = `${truncate.offsetWidth}px`;
            this.element__active_highlight.style.left = `${truncate.offsetLeft}px`;
          } else {
            this.element__active_highlight.style.width = this.removeTab && !this._hideClose ? `${tar.getBoundingClientRect().width - 26}px` : `${tar.getBoundingClientRect().width}px`;
            this.element__active_highlight.style.left = `${tar.offsetLeft}px`;
          }
        }
      }
      if (!preventEventEmission) {
        this.activeTabUpdate.emit(this._items.find((item) => item.key === this.activeKey));
        this.bhEventSelected.emit(this._items.find((item) => item.key === this.activeKey));
      }
    } catch (e) {
      console.log(e);
    }
  }
  preventDefaultForScrollKeys(event) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown" || event.code === "ArrowRight" || event.code === "ArrowLeft" || event.code === "Space") {
      event.preventDefault();
      return false;
    }
  }
  tabsGlobalClickEvent(event) {
    if (this.element__truncation.contains(event.target) || this.element__menu__truncation.contains(event.target)) return;
    this.isTruncationMenuOpen = false;
  }
  componentWillLoad() {
    this.changeItems();
    this._ellipsisTextLimit = this.ellipsisTextLimit;
    this.viewport = getBreakpoint();
  }
  componentDidLoad() {
    window.addEventListener("click", (event) => this.tabsGlobalClickEvent(event));
    setTimeout(() => {
      var _a, _b, _c;
      if (this._items && !this.activeKey) {
        this.setActiveKey((_a = this._items[0]) === null || _a === void 0 ? void 0 : _a.key, true);
        this.handleTruncation();
        const tar = (_c = this.element__container.querySelector(`[data-key="${(_b = this._items[0]) === null || _b === void 0 ? void 0 : _b.key}"]`)) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-tabs--item__icon");
        if (tar) {
          let _timeout;
          const _interval = setInterval(() => {
            var _a2;
            if (tar.clientWidth <= 24) {
              this.setActiveKey((_a2 = this._items[0]) === null || _a2 === void 0 ? void 0 : _a2.key, true);
              this.handleTruncation();
              clearTimeout(_timeout);
              clearInterval(_interval);
            }
          }, 25);
          _timeout = setTimeout(() => {
            clearInterval(_interval);
          }, 5e3);
        }
      }
    });
    if (this.activeKey) {
      this.setActiveKey(this.activeKey, true);
    }
    const that = this;
    window.addEventListener("keydown", (event) => {
      if (!that.element__container.contains(event.target)) return;
      const currentIndex = that.selectedKey === TRUNCATION_MENU ? TRUNCATION_MENU : that._items.findIndex((item) => {
        return item.key === that.selectedKey;
      });
      switch (event.code) {
        case "ArrowRight":
          if (that.isTruncationMenuOpen) that.isTruncationMenuOpen = false;
          if (currentIndex === TRUNCATION_MENU) {
            that.selectedKey = TRUNCATION_MENU;
          } else {
            if (currentIndex === that.truncateIndex - 1 && that.truncateIndex > -1) {
              that.selectedKey = TRUNCATION_MENU;
            } else {
              if (currentIndex < that._items.length - 1) that.selectedKey = that._items[currentIndex + 1].key;
            }
          }
          if (that.viewport === "small") {
            event.preventDefault();
            that.calibrateScrollXPosition();
          }
          break;
        case "ArrowLeft":
          if (that.isTruncationMenuOpen) that.isTruncationMenuOpen = false;
          if (currentIndex === TRUNCATION_MENU) {
            that.selectedKey = that._items[that.truncateIndex - 1].key;
          } else {
            if (currentIndex > that.truncateIndex && that.truncateIndex > -1) {
              if (currentIndex > 0) that.selectedKey = that._items[that.truncateIndex - 1].key;
            } else {
              if (currentIndex > 0) that.selectedKey = that._items[currentIndex - 1].key;
            }
          }
          if (that.viewport === "small") {
            event.preventDefault();
            that.calibrateScrollXPosition();
          }
          break;
        case "Space":
          if (that.selectedKey === TRUNCATION_MENU) {
            that.toggleTrucateMenu();
          } else if (that.selectedKey !== that.activeKey) {
            that.setActiveKey(that.selectedKey, false);
          }
          break;
        case "Enter":
          if (that.selectedKey === TRUNCATION_MENU) {
            that.toggleTrucateMenu();
          } else if (that.selectedKey !== that.activeKey) {
            that.setActiveKey(that.selectedKey, false);
          }
          break;
      }
    }, false);
    if (this._items.length === 1) {
      this._hideClose = true;
    }
  }
  calibrateScrollXPosition() {
    const selectedElement = this.element__wrapper.querySelector(`.bh-tabs--item[data-key="${this.selectedKey}"]`);
    const displayWindow = {
      left: this.element__wrapper.scrollLeft,
      right: this.element__wrapper.scrollLeft + this.element__wrapper.clientWidth
    };
    const selectedElementWindow = {
      left: selectedElement.offsetLeft,
      right: selectedElement.offsetLeft + selectedElement.clientWidth
    };
    if (selectedElementWindow.right + 24 > displayWindow.right) {
      this.element__wrapper.scrollTo(this.element__wrapper.scrollLeft + selectedElement.clientWidth * 2, 0);
    } else if (selectedElementWindow.left - 24 < displayWindow.left) {
      this.element__wrapper.scrollTo(this.element__wrapper.scrollLeft - selectedElement.clientWidth * 2, 0);
    }
  }
  componentDidRender() {
    var _a, _b;
    const items = this.element__container.querySelectorAll(".bh-tabs--item");
    if (this.firstItemWidth !== ((_a = Array.from(items)[0]) === null || _a === void 0 ? void 0 : _a.clientWidth) || !this.firstItemWidth) {
      this.firstItemWidth = (_b = Array.from(items)[0]) === null || _b === void 0 ? void 0 : _b.clientWidth;
    }
  }
  componentDidUpdate() {
    var _a, _b;
    this.handleTruncation();
    const items = this.element__container.querySelectorAll(".bh-tabs--item");
    if (this.firstItemWidth !== ((_a = Array.from(items)[0]) === null || _a === void 0 ? void 0 : _a.clientWidth) || !this.firstItemWidth) {
      this.firstItemWidth = (_b = Array.from(items)[0]) === null || _b === void 0 ? void 0 : _b.clientWidth;
    }
  }
  disconnectedCallback() {
    window.removeEventListener("click", (event) => this.tabsGlobalClickEvent(event));
  }
  getHideTooltip() {
    return true;
  }
  handleDragStart(event, index) {
    this.draggedIndex = index;
    event.dataTransfer.effectAllowed = "move";
  }
  handleDrop(event, dropIndex, isReoderDisabled) {
    event.preventDefault();
    const isInvalidDrag = this.draggedIndex === null || this.draggedIndex === dropIndex || isReoderDisabled;
    if (isInvalidDrag) return;
    const updatedItems = [...this._items];
    const [movedItem] = updatedItems.splice(this.draggedIndex, 1);
    updatedItems.splice(dropIndex, 0, movedItem);
    this._items = updatedItems;
    this.bhEventChange.emit({
      type: "tabitem-position-change",
      "previousindex": this.draggedIndex + 1,
      "currentindex": dropIndex + 1
    });
    this.draggedIndex = null;
    setTimeout(() => this.setActiveKey(this.activeKey, true), 25);
  }
  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.effectAllowed = "move";
  }
  closeTabItem(key) {
    var _a, _b;
    const indexToRemove = this._items.findIndex((item) => item.key === key);
    if (indexToRemove === -1) return;
    const removedItem = this._items[indexToRemove];
    this._items.splice(indexToRemove, 1);
    this._items = [...this._items];
    if (this.selectedKey === key) {
      const fallbackIndex = Math.min(indexToRemove, this._items.length - 1);
      this.activeKey = (_b = (_a = this._items[fallbackIndex]) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : this._items[0].key;
    }
    this.bhEventClose.emit({
      type: "clear",
      removedItem
    });
    setTimeout(() => this.setActiveKey(this.activeKey, false));
    if (this._items.length === 1) {
      this._hideClose = true;
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.tabs.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    if (this.isInUpdate) {
      setTimeout(() => {
        this.isInUpdate = false;
        this.isTruncationMenuOpen = true;
      });
    }
    return h(Host, {
      key: "1724d6f35a27daf91c7ea29cd821ef1862bb095a",
      class: "bh-tabs"
    }, h("div", {
      key: "1effd40254465d146726d4c8e6303521f2c2a305",
      class: "bh-tabs--wrapper",
      ref: (el) => {
        this.element__wrapper = el;
      }
    }, h("div", {
      key: "425d5712eb8fb56792bada445c83f38389527898",
      class: `bh-tabs--container ${this.isBorder ? "border" : ""} ${this.isSmall ? "small" : ""}`,
      ref: (el) => {
        this.element__container = el;
      },
      tabIndex: 0,
      onKeyDown: this.preventDefaultForScrollKeys
    }, h("div", {
      key: "e37c00dd28dc9ccaede3daca77504c6c5d4b2162",
      ref: (el) => {
        this.element__active_highlight = el;
      },
      class: "motion--fast bh-tabs--active-highlight"
    }), this._items && this._items.map((item, index) => {
      return h("div", {
        class: `bh-tabs--item ${this.selectedKey === item.key ? "selected" : ""} motion--fast ${item.key === this.activeKey ? "active" : ""} ${index >= this.truncateIndex && this.truncateIndex > -1 ? "truncated" : ""}`,
        draggable: this.reorderTabs && !item.isReoderDisabled,
        onDragStart: (ev) => this.handleDragStart(ev, index),
        onDragOver: (ev) => this.handleDragOver(ev),
        onDrop: (ev) => this.handleDrop(ev, index, item.isReoderDisabled),
        "data-key": item.key,
        "aria-disabled": item.isDisabled ? "true" : "false"
      }, item.icon && h("i", {
        class: `material-icons material-icons-outlined ${this.isSmall ? "typography--icon-small" : "typography--icon-medium"} bh-tabs--item__icon ${this.selectedKey === item.key ? "selected" : ""}`
      }, item.icon), h("span", {
        class: `bh-tabs--item-label ${this.isSmall ? "typography--label-small" : "typography--label-medium"}`,
        onClick: () => {
          if (!item.isDisabled) this.setActiveKey(item.key);
        }
      }, item.label.length > this._ellipsisTextLimit ? h(Components.tooltip, {
        message: item.extendedText,
        placement: "top",
        hide: false
      }, h("span", null, item.label, "      ")) : h("span", null, item.label)), this.removeTab && !this._hideClose && h("div", {
        class: `bh-tab-item--dismiss`
      }, h(Components.icon, {
        icon: "close",
        size: "small",
        color: "primary",
        class: `bh-tab-item-close--icon ${this.selectedKey === item.key ? "selected" : ""}`,
        style: {
          cursor: "pointer"
        },
        "aria-disabled": item.isDisabled ? "true" : "false",
        onClick: () => {
          if (!item.isDisabled) this.closeTabItem(item.key);
        }
      })));
    }), h("div", {
      key: "b5b5d12e86ef8600d17094be42c828ce2aefb074",
      class: `bh-tabs--truncation-menu ${this.selectedKey === TRUNCATION_MENU ? "selected" : ""} ${this.truncateIndex > -1 ? "" : "hidden"}`
    }, h("i", {
      key: "bc45aa4163866768935e15b45ee4144aaf1135d1",
      class: `material-icons material-icons-outlined ${this.isSmall ? "typography--icon-small" : "typography--icon-medium"}`,
      ref: (el) => {
        this.element__truncation = el;
      },
      onClick: () => {
        this.toggleTrucateMenu();
      }
    }, "more_horiz"), h("div", {
      key: "8ec04c8c87a49ae011703ce8ca8dec8e51d94724",
      class: `bh-tabs--truncation-menu--container ${this.isTruncationMenuOpen ? "" : "hidden"}`,
      ref: (el) => {
        this.element__menu__truncation = el;
      }
    }, h(Components.menu, {
      key: "cbf12ab93d65e32076004ba502e1502363c3406e",
      menuItems: {
        itemGroups: [{
          items: this._items.slice(this.truncateIndex).map((opt) => {
            return {
              label: opt.fullText,
              value: opt.key,
              isDisabled: opt.isDisabled ? opt.isDisabled : false
            };
          })
        }]
      },
      isFocused: this.isTruncationMenuOpen,
      menuWidth: this.menuWidth ? this.menuWidth : "fluid",
      menuHeight: "small",
      ellipsis: this.menuEllipsis,
      selected: this.activeKey,
      onBhEventSelected: (event) => {
        this.handleTruncationSelection(event);
        event.preventDefault();
        event.stopPropagation();
      }
    }))))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "items": ["changeItems"],
      "activeKey": ["watchActiveKey"],
      "isTruncationMenuOpen": ["watchIsTruncationMenuOpen"]
    };
  }
};
BhTabs.style = BhTabsStyle0;
export {
  BhTabs as bh_tabs
};
//# sourceMappingURL=bh-tabs.entry-NKJ4TXBE.js.map
