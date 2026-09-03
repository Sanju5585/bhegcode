import {
  ERROR_MESSAGE,
  listOfMaterialIconTypes
} from "./chunk-LKFGSGYB.js";
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-button-dropdown.entry.js
var bhButtonDropdownCss = ".bh-button-dropdown{position:relative;display:flex}.bh-button-dropdown__element--button{border-right:1px solid transparent}.bh-button-dropdown__element--button .bh-button{margin:0}.bh-button-dropdown__element--button.secondary{border-right:none}.bh-button-dropdown__element--button .bh-button{border-radius:var(--effect-border-radius-medium) 0 0 var(--effect-border-radius-medium);}.bh-button-dropdown__element--button .bh-button.bh-button--type-secondary{border-right:transparent}.bh-button-dropdown--fluid .bh-button-dropdown__element--button{width:calc(100% - 44px)}.bh-button-dropdown--small.bh-button-dropdown--fluid .bh-button-dropdown__element--button{width:calc(100% - 36px)}.bh-button-dropdown__element--action-menu .bh-button{border-left:1px solid transparent;border-radius:0 var(--effect-border-radius-medium) var(--effect-border-radius-medium) 0}.bh-button-dropdown__element--action-menu .bh-button.bh-button--type-secondary{border-left:1px solid var(--color-border-cta-secondary-default)}.bh-button-dropdown__menu-container{position:absolute;z-index:10;top:48px;left:0;visibility:visible}.bh-button-dropdown--fluid .bh-button-dropdown__menu-container{left:unset;right:0}.bh-button-dropdown__menu-container.small{top:40px}.bh-button-dropdown__menu-container.flip--vertical{bottom:48px;top:unset}.bh-button-dropdown__menu-container.small.flip--vertical{bottom:40px;top:unset}.bh-button-dropdown__menu-container.flip--horizontal{left:0;right:unset}.bh-button-dropdown__menu-container.open{visibility:visible;opacity:1}.bh-button-dropdown__menu-container.closed{visibility:hidden;opacity:0;position:fixed}.bh-button-dropdown__menu-container.inline.open{visibility:hidden}.bh-button-dropdown__menu-container.inline.open.inline-style-set{visibility:visible}.bh-button-dropdown__menu-container.inline.closed{display:none}.enabledropdownMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}";
var BhButtonDropdownStyle0 = bhButtonDropdownCss;
var BhButtonDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.dropdownOpenclass = "shown";
    this.label = void 0;
    this.type = "primary";
    this.isFluid = void 0;
    this.isDisabled = void 0;
    this.isLoading = void 0;
    this.leftIcon = void 0;
    this.rightIcon = void 0;
    this.menuItems = void 0;
    this.additionalMenuItems = void 0;
    this.menuWidth = void 0;
    this.isMultiSelect = void 0;
    this.isSelectAll = void 0;
    this.isSearchable = void 0;
    this.isUnselectable = void 0;
    this.placeholder = void 0;
    this.isSmall = false;
    this.iconOverride = "expand_more";
    this.tooltipMessage = "Secondary Actions";
    this.isReadyToStyle = false;
    this.flipVertical = false;
    this.isOpen = false;
    this.flipOffset = {
      x: 72,
      y: 72
    };
    this.isEllipsis = void 0;
    this.isInline = false;
    this.badgeLabel = "";
    this._flipOffset = void 0;
    this.filpped = {
      x: false,
      y: false
    };
    this.inlineStyle = {};
    this.isInlineStyleSet = void 0;
    this.inlineUuid = void 0;
    this.interval = void 0;
    this.enableMicroInteraction = true;
  }
  handleResize() {
    this.setMenuPosition();
    if (this.isInline) this.styleMenu();
  }
  bhEventScroll(e) {
    var _a, _b;
    if (((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.initiator) === "tabularlist") {
      this.closeMenu();
    } else {
      if (this.isInline) this.styleMenu();
    }
  }
  isOpenChange() {
    try {
      if (this.isOpen) {
        this.bhEventOpen.emit();
      } else {
        this.bhEventClose.emit();
        setTimeout(() => {
          this.element__toggle.querySelector(".bh-button").focus();
        });
      }
      const userAgent = window.navigator.userAgent;
      if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        if (this.isOpen) {
          this.interval = setInterval(() => {
            this.setMenuPosition();
          }, 30);
        } else {
          clearInterval(this.interval);
        }
      }
      if (this.isInline) {
        if (this.isOpen) {
          setTimeout(() => {
            this.isInlineStyleSet = true;
            this.styleMenuOverride();
          }, 50);
        } else {
          this.isInlineStyleSet = false;
          document.body.removeChild(document.getElementById(`bh-button-dropdown__inline-menu__${this.inlineUuid}`));
        }
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  preventDefault(event) {
    event.preventDefault();
  }
  // call this to Disable
  disableScroll() {
    try {
      window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
      window.addEventListener("touchmove", this.preventDefault, this.wheelOpt);
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  // call this to Enable
  enableScroll() {
    try {
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
      window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
      window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  styleMenu() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    try {
      if (!this.isInline) return;
      const tar = this.element__host;
      const shouldFlip = ((_a = tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) + ((_b = tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) + 4 + ((_c = this.element__dropdownMenuGhost.getBoundingClientRect()) === null || _c === void 0 ? void 0 : _c.height) > window.innerHeight;
      this.inlineStyle = {
        position: "fixed",
        left: `${((_d = tar.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.left) + ((_e = tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.width) - this.element__menu.clientWidth}px`,
        top: `${((_f = tar.getBoundingClientRect()) === null || _f === void 0 ? void 0 : _f.top) + ((_g = tar.getBoundingClientRect()) === null || _g === void 0 ? void 0 : _g.height) + 4}px`,
        width: `${(_h = this.element__menu) === null || _h === void 0 ? void 0 : _h.clientWidth}px`,
        transform: `translateY(${shouldFlip ? -((_j = this.element__dropdownMenuGhost.getBoundingClientRect()) === null || _j === void 0 ? void 0 : _j.height) - ((_k = tar.getBoundingClientRect()) === null || _k === void 0 ? void 0 : _k.height) - 8 : 0}px)`,
        zIndex: 100
      };
      this.element__menu.id = `bh-button-dropdown__inline-menu__${this.inlineUuid}`;
      document.body.appendChild(this.element__menu);
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  styleMenuOverride() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
      if (!this.isInline) return;
      const tar = this.element__host;
      const shouldFlip = ((_a = tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) + ((_b = tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) + 4 + ((_c = this.element__dropdownMenuGhost.getBoundingClientRect()) === null || _c === void 0 ? void 0 : _c.height) > window.innerHeight;
      this.inlineStyle = {
        position: "fixed",
        left: `${((_d = tar.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.left) + ((_e = tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.width) - ((_f = this.element__menu.querySelector(".bh-menu__container")) === null || _f === void 0 ? void 0 : _f.clientWidth)}px`,
        top: `${((_g = tar.getBoundingClientRect()) === null || _g === void 0 ? void 0 : _g.top) + ((_h = tar.getBoundingClientRect()) === null || _h === void 0 ? void 0 : _h.height) + 4}px`,
        width: `${(_j = this.element__menu.querySelector(".bh-menu__container")) === null || _j === void 0 ? void 0 : _j.clientWidth}px`,
        transform: `translateY(${shouldFlip ? -((_k = this.element__dropdownMenuGhost.getBoundingClientRect()) === null || _k === void 0 ? void 0 : _k.height) - ((_l = tar.getBoundingClientRect()) === null || _l === void 0 ? void 0 : _l.height) - 8 : 0}px)`,
        zIndex: 100
      };
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  onMultiselectChange(event) {
    try {
      if (this.isMultiSelect) {
        const checkedItem = event.detail.checkedItem;
        this.badgeLabel = (checkedItem === null || checkedItem === void 0 ? void 0 : checkedItem.length) ? checkedItem === null || checkedItem === void 0 ? void 0 : checkedItem.length : "";
        this.bhEventSelected.emit(checkedItem);
        this.bhEventChange.emit(checkedItem);
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  setMenuPosition() {
    var _a, _b, _c, _d;
    try {
      if (this.isInline) return;
      this.filpped = {
        x: false,
        y: ((_b = (_a = this.element__toggle) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) + ((_c = this.element__menu) === null || _c === void 0 ? void 0 : _c.clientHeight) + ((_d = this._flipOffset) === null || _d === void 0 ? void 0 : _d.y) > window.innerHeight
      };
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  actionMenuClickEvent(event) {
    try {
      if (!this.element__toggle.contains(event.target) && !this.element__menu.contains(event.target)) this.closeMenu();
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  closeMenu() {
    try {
      this.isOpen = false;
      if (this.isInline) {
        this.enableScroll();
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  toggleOpen(e) {
    try {
      this.isOpen = !this.isOpen;
      if (this.isInline) {
        if (this.isOpen) {
          this.isReadyToStyle = true;
          this.disableScroll();
        } else {
          this.enableScroll();
        }
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  onCtaClick(event) {
    this.bhEventCtaClick.emit({
      type: "menu",
      payload: event.detail
    });
  }
  onSelect(item) {
    try {
      this.bhEventSelected.emit(item);
      this.bhEventChange.emit(item);
      this.closeMenu();
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  onUnselect() {
    try {
      this.closeMenu();
      if (this.isMultiSelect) {
        this.badgeLabel = "";
      }
      this.bhEventSelected.emit();
      this.bhEventChange.emit();
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  disconnectedCallback() {
    try {
      window.removeEventListener("click", (event) => this.actionMenuClickEvent(event));
      window.removeEventListener("mousewheel", () => this.setMenuPosition());
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  componentWillLoad() {
    try {
      if (this.iconOverride && !(this.iconOverride in listOfMaterialIconTypes)) {
        console.warn("Icon type is not supported in the iconography set");
      }
      this._flipOffset = typeof this.flipOffset === "string" ? JSON.parse(this.flipOffset) : this.flipOffset;
      if (this.isInline) {
        let supportsPassive = false;
        this.inlineUuid = v4();
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
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
    if (this.enableMicroInteraction) {
      this.dropdownOpenclass = "open enabledropdownMicroInteraction";
    }
  }
  componentDidLoad() {
    try {
      window.addEventListener("click", (event) => {
        this.actionMenuClickEvent(event);
      });
      window.addEventListener("mousewheel", () => this.setMenuPosition());
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  componentDidRender() {
    try {
      if (this.isReadyToStyle && this.isInline) {
        this.styleMenu();
        this.isReadyToStyle = false;
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  mergeMenuItems(menuItems, additionalMenuItems) {
    try {
      const _menuItemsJson = typeof menuItems === "string" ? JSON.parse(menuItems) : menuItems;
      let _additionalMenuItemsJson;
      if (typeof additionalMenuItems === "string") {
        try {
          _additionalMenuItemsJson = JSON.parse(additionalMenuItems);
        } catch (_a) {
          _additionalMenuItemsJson = [additionalMenuItems];
        }
      } else {
        _additionalMenuItemsJson = additionalMenuItems;
      }
      let output;
      if (Array.isArray(_menuItemsJson)) {
        const firstItem = _menuItemsJson[0];
        if (typeof firstItem === "string") {
          if (Array.isArray(_additionalMenuItemsJson)) {
            const firstItem2 = _additionalMenuItemsJson[0];
            if (typeof firstItem2 === "string") {
              output = {
                itemGroups: [{
                  items: _additionalMenuItemsJson.map((item) => {
                    return {
                      label: item,
                      value: item
                    };
                  })
                }, {
                  items: _menuItemsJson.map((item) => {
                    return {
                      label: item,
                      value: item
                    };
                  })
                }]
              };
            } else {
              output = {
                itemGroups: [{
                  items: _additionalMenuItemsJson
                }, {
                  items: _menuItemsJson.map((item) => {
                    return {
                      label: item,
                      value: item
                    };
                  })
                }]
              };
            }
          } else {
            output = {
              itemGroups: [{
                items: [_additionalMenuItemsJson]
              }, {
                items: _menuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }]
            };
          }
        } else {
          if (Array.isArray(_additionalMenuItemsJson)) {
            const firstItem2 = _additionalMenuItemsJson[0];
            if (typeof firstItem2 === "string") {
              output = {
                itemGroups: [{
                  items: _additionalMenuItemsJson.map((item) => {
                    return {
                      label: item,
                      value: item
                    };
                  })
                }, {
                  items: _menuItemsJson
                }]
              };
            } else {
              output = {
                itemGroups: [{
                  items: _additionalMenuItemsJson
                }, {
                  items: _menuItemsJson
                }]
              };
            }
          } else {
            output = {
              itemGroups: [{
                items: [_additionalMenuItemsJson]
              }, {
                items: _menuItemsJson
              }]
            };
          }
        }
      } else {
        if (Array.isArray(_additionalMenuItemsJson)) {
          const firstItem = _additionalMenuItemsJson[0];
          if (typeof firstItem === "string") {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }, ..._menuItemsJson.itemGroups],
              ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
            };
          } else {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson
              }, ..._menuItemsJson.itemGroups],
              ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
            };
          }
        } else {
          output = {
            itemGroups: [{
              items: [_additionalMenuItemsJson]
            }, ..._menuItemsJson.itemGroups],
            ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
          };
        }
      }
      return output;
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  render() {
    try {
      const prefix = this.host.tagName.toLowerCase().replace(components.buttonDropdown.tagNameBase, "");
      const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
      if (!this.menuItems) return;
      const _menuItems = this.additionalMenuItems ? this.mergeMenuItems(this.menuItems, this.additionalMenuItems) : this.menuItems;
      return h(Host, {
        ref: (el) => {
          this.element__host = el;
        },
        class: `bh-button-dropdown ${this.isFluid ? "bh-button-dropdown--fluid" : ""} ${this.isSmall ? "bh-button-dropdown--small" : ""}`
      }, h(Components.button, {
        class: `bh-button-dropdown__element--button ${this.type}`,
        type: this.type,
        label: this.label,
        isSmall: this.isSmall,
        isFluid: this.isFluid,
        isDisabled: this.isDisabled,
        isLoading: this.isLoading,
        leftIcon: this.leftIcon,
        rightIcon: this.rightIcon,
        onClick: () => {
          this.bhEventCtaClick.emit({
            type: "button",
            payload: null
          });
        }
      }), h(Components.button, {
        class: "bh-button-dropdown__element--action-menu",
        ref: (el) => this.element__toggle = el,
        type: this.type,
        leftIcon: this.iconOverride,
        isSmall: this.isSmall,
        tooltipMessage: this.tooltipMessage,
        isDisabled: this.isDisabled,
        onClick: (e) => this.toggleOpen(e)
      }), h("div", {
        class: `bh-button-dropdown__menu-container ${this.flipVertical ? "flip--vertical" : ""} ${this.isOpen ? this.dropdownOpenclass : "closed"} ${this.isInline && this.isInlineStyleSet ? "inline-style-set" : ""} ${this.filpped.y ? "flip--vertical" : ""} ${this.filpped.x ? "flip--horizontal" : ""} ${this.isSmall ? "small" : ""} ${this.isInline ? "inline" : ""}`,
        style: this.isInline ? this.inlineStyle : {},
        ref: (el) => this.element__menu = el
      }, h(Components.menu, {
        menuItems: _menuItems,
        menuWidth: this.menuWidth ? this.menuWidth : this.isSmall ? "small" : "medium",
        menuHeight: this.isSmall ? "small" : "medium",
        isFocused: this.isOpen,
        isDropDownMenu: true,
        placeholder: this.placeholder,
        isMultiSelect: this.isMultiSelect,
        isSelectAll: this.isSelectAll,
        isSearchable: this.isSearchable,
        isUnselectable: this.isMultiSelect ? false : this.isUnselectable,
        isItemPaddingRight: this.menuWidth === "fluid",
        isEllipsis: this.isEllipsis,
        onMultiselectChange: (event) => {
          this.onMultiselectChange(event);
        },
        onUnselect: () => {
          this.onUnselect();
        },
        onBhEventChange: (event) => {
          event.preventDefault();
          event.stopPropagation();
        },
        onBhEventSelected: (event) => {
          this.onSelect(event.detail);
          event.preventDefault();
          event.stopPropagation();
        },
        onBhEventCtaClick: (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.onCtaClick(event);
        },
        onClose: () => {
          this.isOpen = false;
        }
      })), this.isInline && h("div", {
        style: {
          visibility: "hidden",
          position: "absolute",
          left: "-99999px"
        },
        ref: (el) => {
          this.element__dropdownMenuGhost = el;
        }
      }, h(Components.menu, {
        menuItems: _menuItems,
        menuWidth: this.menuWidth ? this.menuWidth : this.isSmall ? "small" : "medium",
        menuHeight: this.isSmall ? "small" : "medium",
        isFocused: this.isOpen,
        isDropDownMenu: true,
        placeholder: this.placeholder,
        isMultiSelect: this.isMultiSelect,
        isSelectAll: this.isSelectAll,
        isSearchable: this.isSearchable,
        isUnselectable: this.isMultiSelect ? false : this.isUnselectable,
        isItemPaddingRight: this.menuWidth === "fluid",
        isEllipsis: this.isEllipsis,
        onBhEventChange: (event) => {
          event.preventDefault();
          event.stopPropagation();
        },
        onBhEventSelected: (event) => {
          event.preventDefault();
          event.stopPropagation();
        },
        onBhEventCtaClick: (event) => {
          event.preventDefault();
          event.stopPropagation();
        }
      })));
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["isOpenChange"]
    };
  }
};
BhButtonDropdown.style = BhButtonDropdownStyle0;
export {
  BhButtonDropdown as bh_button_dropdown
};
//# sourceMappingURL=bh-button-dropdown.entry-NOTOZ7W5.js.map
