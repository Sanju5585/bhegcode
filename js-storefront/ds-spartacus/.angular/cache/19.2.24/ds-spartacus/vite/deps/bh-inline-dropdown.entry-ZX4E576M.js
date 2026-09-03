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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-inline-dropdown.entry.js
var bhInlineDropdownCss = ".bh-inline-dropdown{border:none;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);font:inherit;cursor:default;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:flex-start;position:relative}.bh-inline-dropdown__container{display:flex;flex-direction:row;width:100%}.bh-inline-dropdown__label{color:var(--color-text-common-primary)}.bh-inline-dropdown__required:after{color:var(--color-text-label-critical);content:' *'}.bh-inline-dropdown__label--disabled{color:var(--color-text-label-disabled-default)}.bh-inline-dropdown__icon{padding-left:var(--spacing-padding-xxsmall);align-self:center;color:var(--color-text-common-primary);pointer-events:none;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.bh-inline-dropdown__value-container{display:flex;align-items:center;justify-content:space-between;cursor:pointer;outline:none;border-radius:var(--effect-border-radius-medium);padding:var(--spacing-padding-xsmall);margin:calc(-1 * var(--spacing-margin-xsmall))}.bh-inline-dropdown__value-container:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-inline-dropdown__value-container:focus:not(:focus-visible){box-shadow:none}.bh-inline-dropdown__value{color:var(--color-text-common-primary);padding:0;max-width:250px;pointer-events:none;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.bh-inline-dropdown__value.small{width:86px;padding:var(--spacing-padding-xsmall)\n    calc(var(--spacing-padding-small) + 30px) var(--spacing-padding-xsmall)\n    var(--spacing-padding-small)}.bh-inline-dropdown__value.placeholder{color:var(--color-text-label-placeholder)}.bh-inline-dropdown__value.fluid,.bh-inline-dropdown__value.small.fluid{width:calc(100% - 254px)}.bh-inline-dropdown__menu-container{position:absolute;z-index:1000;background-color:var(--color-fill-common-secondary);width:auto !important;}.bh-inline-dropdown__menu-container.fit-content{display:table}.bh-inline-dropdown__menu-container.hidden{display:none}.enableInlineDropdownMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:transl ateY(0);transform:translateY(0);opacity:1}}";
var BhInlineDropdownStyle0 = bhInlineDropdownCss;
var BhInlineDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 3);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.selected = createEvent(this, "selected", 7);
    this.opened = createEvent(this, "opened", 7);
    this.dropdownOpenclass = "shown";
    this.typography = "label-medium";
    this.menuItems = void 0;
    this.menuWidth = void 0;
    this.isSearchable = void 0;
    this.selectedValue = void 0;
    this.value = void 0;
    this.isSmall = false;
    this.inlineAnchorId = "";
    this.isInline = void 0;
    this.isEllipsis = void 0;
    this.interval = void 0;
    this.enableMicroInteraction = true;
    this.keyboardFocused = false;
    this.closeDropdownOnScroll = false;
    this.noOptionAvailableText = "No options available";
    this.isOpen = false;
    this.flipOffset = 280;
    this.searchablePlaceholder = void 0;
    this.data = void 0;
    this.keySelected = void 0;
    this.isFlipped = false;
    this.isInlineStyleSet = false;
    this.inlineStyle = {};
    this.inlineUuid = void 0;
  }
  watchMenuItems() {
    const _menuItems = typeof this.menuItems === "string" ? JSON.parse(this.menuItems) : this.menuItems;
    if (!_menuItems) return;
    const firstItem = Array.isArray(_menuItems) ? typeof _menuItems[0] === "string" ? {
      label: _menuItems[0],
      value: _menuItems[0]
    } : _menuItems[0] : _menuItems.itemGroups[0].items[0];
    if (!this.value) {
      this.value = firstItem.label;
      this.data = firstItem.value;
      this.keySelected = firstItem.label;
    }
  }
  isOpenChange() {
    if (this.isOpen) {
      this.bhEventOpen.emit({
        "isOpen": this.isOpen,
        "value": this.value
      });
    } else {
      this.bhEventClose.emit({
        "isOpen": this.isOpen,
        "value": this.value
      });
      setTimeout(() => {
        this.element__dropdownLabel.focus();
      });
    }
    this.opened.emit({
      isOpen: this.isOpen,
      inlineAnchorId: this.inlineAnchorId ? this.inlineAnchorId : ""
    });
    const userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      if (this.isOpen) {
        this.interval = setInterval(() => {
          this.setIsFlipped();
        }, 30);
      } else {
        clearInterval(this.interval);
      }
    }
    if (this.inlineAnchorId || this.isInline) {
      if (this.isOpen) {
        setTimeout(() => {
          this.styleMenu();
        }, 50);
        this.enableScroll();
      } else {
        this.enableScroll();
        this.isInlineStyleSet = false;
        document.body.removeChild(document.getElementById(`bh-inline-dropdown__inline-menu__${this.inlineUuid}`));
      }
    }
  }
  handleResize() {
    this.setIsFlipped();
    if (this.inlineAnchorId || this.isInline) this.styleMenu();
  }
  bhEventScroll(e) {
    var _a, _b;
    if (((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.initiator) === "tabularlist") {
      this.closeMenu();
    } else {
      if (this.inlineAnchorId || this.isInline) this.styleMenu();
    }
    if (this.closeDropdownOnScroll) {
      this.closeMenu();
    }
  }
  closeMenu() {
    this.isOpen = false;
  }
  onSelect(item) {
    this.value = item.label;
    this.data = item.value;
    this.selectedValue = item.value;
    this.keySelected = item.label;
    this.selected.emit(this.data);
    this.bhEventSelected.emit(this.data);
    this.bhEventChange.emit(this.data);
    this.closeMenu();
    if (this.inlineAnchorId || this.isInline) {
      this.enableScroll();
    }
  }
  bindDropdownClickEvent(event) {
    if (!this.element__dropdownLabel.contains(event.target) && !this.element__dropdownMenu.contains(event.target)) this.isOpen = false;
  }
  // Keyboard Accessibility to be improved
  bindKeydownEvent(event) {
    console.log(event, "event");
  }
  componentWillLoad() {
    if (this.inlineAnchorId || this.isInline) {
      this.inlineUuid = v4();
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
    const _menuItems = typeof this.menuItems === "string" ? JSON.parse(this.menuItems) : this.menuItems;
    if (!_menuItems) return;
    if (!this.value) {
      const firstItem = Array.isArray(_menuItems) ? typeof _menuItems[0] === "string" ? {
        label: _menuItems[0],
        value: _menuItems[0]
      } : _menuItems[0] : _menuItems.itemGroups[0].items[0];
      this.value = firstItem === null || firstItem === void 0 ? void 0 : firstItem.label;
      this.data = firstItem === null || firstItem === void 0 ? void 0 : firstItem.value;
      this.keySelected = firstItem === null || firstItem === void 0 ? void 0 : firstItem.label;
    } else {
      const targetItem = Array.isArray(_menuItems) ? typeof _menuItems[0] === "string" ? {
        label: this.value,
        value: this.value
      } : _menuItems.find((item) => {
        return item.label === this.value;
      }) : _menuItems.itemGroups[0].items.find((item) => {
        return item.label === (typeof this.value === "string" ? this.value : this.value.toString());
      });
      this.value = targetItem === null || targetItem === void 0 ? void 0 : targetItem.label;
      this.data = targetItem === null || targetItem === void 0 ? void 0 : targetItem.value;
      this.keySelected = targetItem === null || targetItem === void 0 ? void 0 : targetItem.label;
    }
    if (this.enableMicroInteraction) {
      this.dropdownOpenclass = "shown enableInlineDropdownMicroInteraction";
    }
  }
  componentDidLoad() {
    window.addEventListener("click", (event) => this.bindDropdownClickEvent(event));
    window.addEventListener("mousewheel", () => this.setIsFlipped());
  }
  disconnectedCallback() {
    window.removeEventListener("click", (event) => this.bindDropdownClickEvent(event));
    window.removeEventListener("mousewheel", () => this.setIsFlipped());
  }
  setIsFlipped() {
    var _a, _b, _c, _d, _e, _f;
    try {
      if (this.inlineAnchorId || this.isInline) return;
      this.isFlipped = ((_b = (_a = this.element__dropdownLabel) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) >= 0 && ((_d = (_c = this.element__dropdownLabel) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.bottom) + ((_f = (_e = this.element__dropdownLabel) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect()) === null || _f === void 0 ? void 0 : _f.height) - window.innerHeight > -this.flipOffset && window.innerHeight > 500;
    } catch (e) {
      console.log(e);
    }
  }
  styleMenu() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    if (!this.inlineAnchorId && !this.isInline) return;
    const tar = this.inlineAnchorId ? document.body.querySelector(`[inline-anchor-id="${this.inlineAnchorId}"]`) : this.element__host;
    const shouldFlip = ((_a = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) + ((_b = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) + 4 + ((_d = (_c = this.element__dropdownMenuGhost) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.height) > window.innerHeight;
    let leftVal = (_e = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.left;
    if (leftVal + ((_g = (_f = this.element__dropdownMenuGhost) === null || _f === void 0 ? void 0 : _f.getBoundingClientRect()) === null || _g === void 0 ? void 0 : _g.width) > window.innerWidth) {
      leftVal = leftVal - (leftVal + ((_j = (_h = this.element__dropdownMenuGhost) === null || _h === void 0 ? void 0 : _h.getBoundingClientRect()) === null || _j === void 0 ? void 0 : _j.width) - window.innerWidth);
    }
    this.inlineStyle = {
      position: "fixed",
      left: `${leftVal}px`,
      top: `${((_k = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _k === void 0 ? void 0 : _k.top) + ((_l = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _l === void 0 ? void 0 : _l.height)}px`,
      width: `${(_m = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _m === void 0 ? void 0 : _m.width}px`,
      transform: `translateY(${shouldFlip ? -((_p = (_o = this.element__dropdownMenuGhost) === null || _o === void 0 ? void 0 : _o.getBoundingClientRect()) === null || _p === void 0 ? void 0 : _p.height) - ((_q = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _q === void 0 ? void 0 : _q.height) - 8 : 0}px)`
    };
    this.isInlineStyleSet = true;
    this.element__dropdownMenu.id = `bh-inline-dropdown__inline-menu__${this.inlineUuid}`;
    document.body.appendChild(this.element__dropdownMenu);
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
  handleClick() {
    this.isOpen = !this.isOpen;
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.inlineDropdown.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const iconClasses = ["bh-inline-dropdown__icon", "typography--icon-small", "motion--normal"];
    this.setIsFlipped();
    const getMenuWidth = () => {
      if (this.menuWidth) {
        if (this.menuWidth === "large") return "large";
        if (this.menuWidth === "medium") return "medium";
        if (this.menuWidth === "small") return "small";
        if (this.menuWidth === "auto") return "auto";
        if (this.menuWidth === "min-content") return "min-content";
        if (this.menuWidth === "inherit" || this.menuWidth === "fluid") return "fluid";
      } else {
        return "medium";
      }
    };
    return h(Host, {
      class: "bh-inline-dropdown",
      ref: (el) => {
        this.element__host = el;
      }
    }, h("div", {
      class: "bh-inline-dropdown__container"
    }, h("div", {
      class: "bh-inline-dropdown__value-container",
      ref: (el) => {
        this.element__dropdownLabel = el;
      },
      onClick: () => this.handleClick(),
      tabIndex: 0,
      onKeyDown: (event) => {
        if (event.code === "Enter") {
          this.handleClick();
        }
      }
    }, h("span", {
      class: `bh-inline-dropdown__value typography--${this.typography}`
    }, this.value), h("i", {
      class: iconClasses.join(" ")
    }, "expand_more")), h("div", {
      class: `bh-inline-dropdown__menu-container ${this.inlineAnchorId || this.isInline ? this.isOpen && this.isInlineStyleSet ? this.dropdownOpenclass : "hidden" : this.isOpen ? this.dropdownOpenclass : "hidden"} ${this.isFlipped ? "flipped" : ""}`,
      style: this.inlineAnchorId || this.isInline ? this.inlineStyle : {
        top: !this.isFlipped ? `${((_a = this.element__dropdownLabel) === null || _a === void 0 ? void 0 : _a.clientHeight) + 4}px` : "unset",
        bottom: this.isFlipped ? `${((_b = this.element__dropdownLabel) === null || _b === void 0 ? void 0 : _b.clientHeight) + 4}px` : "unset"
      },
      ref: (el) => this.element__dropdownMenu = el
    }, h(Components.menu, {
      menuItems: this.menuItems,
      keyboardFocused: this.keyboardFocused,
      menuWidth: getMenuWidth(),
      menuHeight: this.isSmall ? "small" : "medium",
      isFocused: this.isOpen,
      placeholder: this.searchablePlaceholder ? this.searchablePlaceholder : "Select",
      isDropDownMenu: true,
      noOptionAvailableText: this.noOptionAvailableText,
      selected: this.selectedValue,
      value: this.value,
      isMultiSelect: false,
      isSearchable: this.isSearchable,
      isEllipsis: this.isEllipsis,
      isItemPaddingRight: false,
      onBhEventChange: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onBhEventSelected: (e) => {
        this.onSelect(e.detail);
        e.preventDefault();
        e.stopPropagation();
      }
    })), (this.isInline || this.inlineAnchorId) && h("div", {
      style: {
        visibility: "hidden",
        position: "absolute",
        left: "-99999px"
      },
      ref: (el) => {
        this.element__dropdownMenuGhost = el;
      }
    }, h(Components.menu, {
      menuItems: this.menuItems,
      keyboardFocused: this.keyboardFocused,
      noOptionAvailableText: this.noOptionAvailableText,
      menuWidth: getMenuWidth(),
      menuHeight: this.isSmall ? "small" : "medium",
      isFocused: this.isOpen,
      isDropDownMenu: true,
      selected: this.selectedValue,
      value: this.value,
      placeholder: this.searchablePlaceholder ? this.searchablePlaceholder : "Select",
      isMultiSelect: false,
      isSearchable: this.isSearchable,
      isEllipsis: this.isEllipsis,
      isItemPaddingRight: false,
      onBhEventChange: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onBhEventSelected: (e) => {
        this.onSelect(e.detail);
        e.preventDefault();
        e.stopPropagation();
      }
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "menuItems": ["watchMenuItems"],
      "isOpen": ["isOpenChange"]
    };
  }
};
BhInlineDropdown.style = BhInlineDropdownStyle0;
export {
  BhInlineDropdown as bh_inline_dropdown
};
//# sourceMappingURL=bh-inline-dropdown.entry-ZX4E576M.js.map
