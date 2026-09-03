import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-settings-menu.entry.js
var bhSettingsMenuCss = `:host{display:block}.bh-settings-menu{display:flex;width:var(--settings-menu-width);border-radius:var(--effect-border-radius-medium);background:var(--color-fill-common-secondary);box-shadow:var(--effect-drop-shadow-elevation-extra-high);flex-direction:column;align-items:center;padding-bottom:0;max-height:500px;overflow-x:hidden;overflow-y:auto;outline:none;padding-top:2px;margin-top:-2px}.bh-settings-menu[tabIndex="0"]:focus{box-shadow:var(--effect-drop-shadow-elevation-extra-high), var(--effect-drop-shadow-focus-primary)}.bh-settings-menu[tabIndex="0"]:focus:not(:focus-visible){box-shadow:var(--effect-drop-shadow-elevation-extra-high)}.bh-settings-menu::after{content:'&nbsp;';width:100%;color:transparent;pointer-events:none;display:block;height:var(
    --spacing-padding-medium
  );}.bh-settings-menu--mobile{display:flex;width:100%;min-height:initial;border-radius:initial;box-shadow:initial;background:var(--color-fill-common-secondary);flex-direction:column;align-items:center}.bh-settings-menu__user-container{display:flex;flex-direction:column;align-items:center;width:100%}.bh-settings-menu__user-avatar{margin-top:var(--spacing-margin-medium)}.bh-settings-menu__user-name{margin-top:var(--spacing-margin-small);color:var(--color-text-common-primary);max-width:calc(100% - (2 * var(--spacing-margin-large)));text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bh-settings-menu__user-email{color:var(--color-text-common-secondary);text-overflow:ellipsis;max-width:calc(100% - (2 * var(--spacing-margin-large)));text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bh-settings-menu__divider{width:100%}.bh-menu-item__container.bh-settings-menu__menu-item--hidden>.bh-menu-item{display:none}.bh-menu-item__container.bh-settings-menu__submenu-item--hidden .bh-menu-item{display:none}.bh-settings-menu__divider--hidden{display:none}.bh-settings-menu__submenu-title-container{width:100%}.bh-settings-menu__submenu-title{cursor:pointer;color:var(--color-text-common-secondary);display:flex;align-items:center;justify-content:flex-start;flex-direction:row;margin-top:var(--spacing-padding-medium);height:var(--settings-menu-item-height);outline:none}.bh-settings-menu__submenu-title:hover,.bh-settings-menu__submenu-title.keyboard-focused{background-color:var(--color-fill-menu-highlighted)}.bh-settings-menu__submenu-title:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-settings-menu__submenu-title:focus:not(:focus-visible){box-shadow:none}.bh-settings-menu__submenu-item--hidden{display:none !important}.bh-settings-menu__submenu-title i{margin-left:var(--spacing-margin-medium);margin-right:var(--spacing-margin-small)}@media screen and (max-width: 599px){.bh-settings-menu{max-height:100vh}}`;
var BhSettingsMenuStyle0 = bhSettingsMenuCss;
var BhSettingsMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.settingsSubmenuOpened = createEvent(this, "settingsSubmenuOpened", 7);
    this.settingsSubmenuClosed = createEvent(this, "settingsSubmenuClosed", 7);
    this.menuItemClickHandlers = /* @__PURE__ */ new WeakMap();
    this.pendingRefresh = false;
    this.settings = void 0;
    this.userfirstname = void 0;
    this.userlastname = void 0;
    this.userimage = void 0;
    this.useremail = void 0;
    this.isMobile = false;
    this.isOpen = false;
    this.isSubmenuBackSelected = void 0;
    this.isFocusable = false;
    this.selectedIndex = void 0;
    this.children = void 0;
    this.isReady = false;
  }
  watchSettings() {
    this.children = [];
    setTimeout(() => {
      this.appendEvents();
    });
  }
  // Switching between mobile views, or when the settings menu closes,
  // We will want to reset the settings menu to top level - for the next time it opens
  watchMobileHandler() {
    this.selectedIndex = void 0;
    this.settingsSubmenuClosed.emit();
  }
  watchOpenHandler() {
    this.selectedIndex = void 0;
    this.settingsSubmenuClosed.emit();
  }
  scheduleRefresh() {
    if (this.pendingRefresh) return;
    this.pendingRefresh = true;
    requestAnimationFrame(() => {
      this.pendingRefresh = false;
      this.appendEvents();
      forceUpdate(this);
    });
  }
  getBaseLabel(node) {
    const label = node.getAttribute("label") || "";
    return label.split(":").length > 0 ? label.split(":")[0] : label;
  }
  appendEvents() {
    var _a;
    const prefix = this.host.tagName.toLowerCase().replace(components.settingsMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    this.children = Array.from(this.host.children);
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.map((child, i) => {
      if (child.nodeName === Components.menuItem.toUpperCase()) {
        let subchildren = Array.from(child.children);
        if (subchildren.filter((child2) => child2.nodeName === Components.menuItem.toUpperCase()).length > 0) {
          child.setAttribute("chevron", "chevron_right");
          child.setAttribute("menu-index", `${i}`);
          child.addEventListener("click", () => {
            this.settingsSubmenuOpened.emit();
            this.selectedIndex = i;
          });
          subchildren.map((subchild) => {
            subchild.setAttribute("type", "settings");
            subchild.classList.add("bh-settings-menu__submenu-item--hidden");
          });
        }
      }
    });
  }
  setupSlotMutationObserver() {
    if (this.slotMutationObserver) return;
    this.slotMutationObserver = new MutationObserver(() => {
      this.scheduleRefresh();
    });
    this.slotMutationObserver.observe(this.host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["selected", "label"]
    });
  }
  componentWillLoad() {
    this.appendEvents();
  }
  componentDidLoad() {
    this.setupSlotMutationObserver();
    this.appendEvents();
  }
  disconnectedCallback() {
    if (this.slotMutationObserver) {
      this.slotMutationObserver.disconnect();
      this.slotMutationObserver = void 0;
    }
  }
  isSettingsMenuOpenUpdate() {
    this.selectedIndex = void 0;
  }
  onSlotChange() {
    this.scheduleRefresh();
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.settingsMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    if (!this.isReady) {
      setTimeout(() => {
        this.isReady = true;
      });
      return;
    }
    let selectedLabel;
    this.children.map((child, i) => {
      if (child.nodeName === Components.menuItem.toUpperCase()) {
        this.isMobile ? child.setAttribute("type", "mobile") : child.setAttribute("type", "settings");
        if (this.selectedIndex !== void 0) {
          if (this.selectedIndex === Number(child.getAttribute("menu-index"))) {
            if (child.getAttribute("menu-index") !== null) {
              selectedLabel = child.getAttribute("label").split(":").length > 0 ? child.getAttribute("label").split(":")[0] : child.getAttribute("label");
            }
          }
          child.classList.add("bh-settings-menu__menu-item--hidden");
          if (child.getAttribute("focusable") === "true") {
            child.setAttribute("tabIndex", "-1");
          }
        } else {
          child.classList.remove("bh-settings-menu__menu-item--hidden");
          if (child.getAttribute("focusable") === "true") {
            child.setAttribute("tabIndex", "0");
          }
        }
        let subchildren = Array.from(child.children);
        subchildren.map((subchild) => {
          if (subchild.classList.contains("bh-menu-item__sublinks")) {
            let sublinks = Array.from(subchild.children);
            sublinks.map((sublink) => {
              this.isMobile ? sublink.setAttribute("type", "mobile") : sublink.setAttribute("type", "settings");
              if (Number(child.getAttribute("menu-index")) !== this.selectedIndex) {
                sublink.classList.add("bh-settings-menu__submenu-item--hidden");
              } else {
                sublink.classList.remove("bh-settings-menu__submenu-item--hidden");
              }
              if (sublink.getAttribute("selected") === "") {
                let originalLabel = child.getAttribute("label").split(":").length > 0 ? child.getAttribute("label").split(":")[0] : child.getAttribute("label");
                child.setAttribute("label", originalLabel + ": " + sublink.getAttribute("label"));
              }
            });
          }
        });
      }
      if (child.nodeName === Components.divider.toUpperCase()) {
        if (this.selectedIndex !== void 0) {
          child.classList.add("bh-settings-menu__divider--hidden");
        } else {
          child.classList.remove("bh-settings-menu__divider--hidden");
        }
        if (this.isMobile) {
          child.classList.add("bh-settings-menu__divider");
          child.setAttribute("marginLeft", "small");
          child.setAttribute("marginRight", "small");
          child.setAttribute("marginTop", "medium");
          child.setAttribute("marginBottom", "medium");
        } else {
          child.classList.add("bh-settings-menu__divider");
          child.setAttribute("marginLeft", "medium");
          child.setAttribute("marginRight", "medium");
          child.setAttribute("marginTop", "small");
          child.setAttribute("marginBottom", "small");
        }
      }
    });
    const settingsMenuClasses = ["bh-settings-menu"];
    if (this.isMobile) settingsMenuClasses.push("bh-settings-menu--mobile");
    return h(Host, {
      class: settingsMenuClasses.join(" "),
      tabIndex: this.isFocusable ? 0 : -1
    }, this.selectedIndex === void 0 && !this.isMobile && h("div", {
      class: "bh-settings-menu__user-container"
    }, h(Components.avatar, {
      class: "bh-settings-menu__user-avatar",
      size: "large",
      firstname: this.userfirstname,
      lastname: this.userlastname,
      image: this.userimage
    }), h("div", {
      class: "bh-settings-menu__user-name typography--subtitle-small"
    }, this.userfirstname + " " + this.userlastname), h("div", {
      class: "bh-settings-menu__user-email typography--decorative-small"
    }, this.useremail), h(Components.divider, {
      class: "bh-settings-menu__divider",
      marginLeft: "medium",
      marginRight: "medium",
      marginTop: "small",
      marginBottom: "small"
    })), this.selectedIndex !== void 0 && h("div", {
      class: "bh-settings-menu__submenu-title-container",
      onClick: () => {
        this.settingsSubmenuClosed.emit();
        this.selectedIndex = void 0;
      }
    }, h("div", {
      tabIndex: 0,
      class: `bh-settings-menu__submenu-title typography--menu-link-medium ${this.isSubmenuBackSelected ? "keyboard-focused" : ""}`,
      onKeyDown: (event) => {
        if (event.code === "Enter") {
          event.target.parentElement.dispatchEvent(new MouseEvent("click"));
        }
      }
    }, h("i", {
      class: "typography--icon-small"
    }, "chevron_left"), selectedLabel), this.isMobile && h(Components.divider, {
      class: "bh-settings-menu__divider",
      marginLeft: "none",
      marginRight: "none",
      marginTop: "xsmall",
      marginBottom: "xsmall"
    }), !this.isMobile && h(Components.divider, {
      class: "bh-settings-menu__divider",
      marginLeft: "medium",
      marginRight: "medium",
      marginTop: "xxsmall",
      marginBottom: "xxsmall"
    })), h("slot", {
      onSlotchange: () => this.onSlotChange()
    }));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "settings": ["watchSettings"],
      "isMobile": ["watchMobileHandler"],
      "isOpen": ["watchOpenHandler"]
    };
  }
};
BhSettingsMenu.style = BhSettingsMenuStyle0;
export {
  BhSettingsMenu as bh_settings_menu
};
//# sourceMappingURL=bh-settings-menu.entry-44PAQDGB.js.map
