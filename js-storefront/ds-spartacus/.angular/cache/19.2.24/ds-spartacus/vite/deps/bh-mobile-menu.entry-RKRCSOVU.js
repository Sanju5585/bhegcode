import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-mobile-menu.entry.js
var bhMobileMenuCss = ":host{display:block}.bh-mobile-menu{position:fixed;top:0px;bottom:0px;left:0px;right:0px;background-color:var(--color-fill-common-secondary);z-index:100000;top:60px;height:0px;visibility:hidden;overflow:auto}.bh-mobile-menu--open{visibility:visible;height:calc(100vh - calc(100vh - 100%) - 60px)}.bh-top-level-menu--hidden{display:none}.bh-mobile-menu__user-container{display:flex;flex-direction:column;align-items:center;width:100%}.bh-mobile-menu__user-avatar{margin-top:var(--spacing-margin-medium)}.bh-mobile-menu__user-name{margin-top:var(--spacing-margin-small);color:var(--color-text-common-primary);max-width:calc(100% - (2*var(--spacing-margin-large)));text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bh-mobile-menu__user-email{color:var(--color-text-common-secondary);text-overflow:ellipsis;max-width:calc(100% - (2*var(--spacing-margin-large)));text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bh-mobile-menu__divider{width:100%}.bh-mobile-menu__settings-menu{background-color:pink}.bh-mobile-menu__label{margin-left:var(--spacing-margin-small);color:var(--color-text-common-secondary);margin-bottom:var(--spacing-margin-medium)}.bh-mobile-menu .bh-nav-menu{display:block}.bh-mobile-menu--settings-open .bh-nav-menu{display:none}.bh-mobile-menu .bh-menu-item--settings .bh-menu-item__icon{margin-left:var(--spacing-margin-xsmall)}.bh-mobile-menu .bh-menu-item--side-nav .bh-menu-item__icon{margin-left:var(--spacing-margin-xsmall)}.bh-mobile-menu .bh-menu-item__more-icon{margin-right:var(--spacing-margin-xsmall)}";
var BhMobileMenuStyle0 = bhMobileMenuCss;
var BhMobileMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userfirstname = void 0;
    this.userlastname = void 0;
    this.userimage = void 0;
    this.useremail = void 0;
    this.mobileViewLabel = void 0;
    this.isOpen = void 0;
    this.navigation = void 0;
    this.settings = void 0;
    this.settingsMenuOpened = false;
  }
  settingsSubmenuOpenHandler() {
    console.log("Settings Menu Opened");
    this.settingsMenuOpened = true;
  }
  settingsSubmenuClosedHandler() {
    console.log("Settings Menu Closed");
    this.settingsMenuOpened = false;
  }
  componentWillLoad() {
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.mobileMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    let mobileMenuClasses = ["bh-mobile-menu", "motion--normal"];
    if (this.isOpen) mobileMenuClasses.push("bh-mobile-menu--open");
    if (this.settingsMenuOpened) mobileMenuClasses.push("bh-mobile-menu--settings-open");
    let topLevelMenuClasses = ["bh-top-level-menu"];
    if (this.settingsMenuOpened) topLevelMenuClasses.push("bh-top-level-menu--hidden");
    return h(Host, {
      key: "7095d3963a2fa838831d4b1846a34aa12ca71cb7",
      class: mobileMenuClasses.join(" ")
    }, h("div", {
      key: "c48dda252fa8ac36cb8f6317b4182d00b9d0ecd2",
      class: topLevelMenuClasses.join(" ")
    }, h("div", {
      key: "4e7556487bf4ad1d2473bec01a7ef9d855b13594",
      class: "bh-mobile-menu__user-container"
    }, h(Components.avatar, {
      key: "45e77ea9fe3853ed1035f0857f0306fbce04195f",
      class: "bh-mobile-menu__user-avatar",
      size: "large",
      firstname: this.userfirstname,
      lastname: this.userlastname,
      image: this.userimage
    }), h("div", {
      key: "031733cbc027cc78f92cd5d57f6fbe686dabc3c0",
      class: "bh-mobile-menu__user-name typography--subtitle-small"
    }, this.userfirstname + " " + this.userlastname), h("div", {
      key: "37004703519ca58d29d53b2f9c6fae004d283bf1",
      class: "bh-mobile-menu__user-email typography--decorative-small"
    }, this.useremail), h(Components.divider, {
      key: "588c9e83440ff4fad06c9419c06e6583f65ff60f",
      class: "bh-mobile-menu__divider",
      marginLeft: "small",
      marginRight: "small"
    })), this.mobileViewLabel && this.navigation && this.navigation.length > 0 && h("div", {
      class: "typography--label-small bh-mobile-menu__label"
    }, "Menu"), h("slot", {
      key: "2226a9edc3a3343c446a519eb7e84d47428f1404",
      name: "bh-app-shell__nav-menu"
    }), this.navigation && this.navigation.length > 0 && h(Components.divider, {
      marginLeft: "small",
      marginRight: "small"
    }), this.mobileViewLabel && this.settings && this.settings.length > 0 && h("div", {
      class: "typography--label-small bh-mobile-menu__label"
    }, "Settings")), h("slot", {
      key: "73fc0d8531d668c898f94951fe6032c4a5dd6ab9",
      name: "bh-app-shell__settings-menu"
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhMobileMenu.style = BhMobileMenuStyle0;
export {
  BhMobileMenu as bh_mobile_menu
};
//# sourceMappingURL=bh-mobile-menu.entry-RKRCSOVU.js.map
