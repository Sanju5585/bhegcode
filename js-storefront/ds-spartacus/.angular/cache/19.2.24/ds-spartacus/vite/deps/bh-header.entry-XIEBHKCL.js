import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  createEvent,
  getAssetPath,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-header.entry.js
var bhHeaderCss = `:host{display:block}.bh-header{background-color:var(--color-fill-common-brand);height:var(--header-desktop-height);display:flex;align-items:center;z-index:2000;position:fixed;top:0px;left:0px;right:0px}.bh-header--primary{padding-left:16px;padding-right:32px}.bh-header--secondary{padding-left:32px;padding-right:32px}.bh-header__hamburger{position:relative;width:32px;height:32px;cursor:pointer;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;outline:none;border-radius:var(--effect-border-radius-medium)}.bh-header__hamburger:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-header__hamburger:focus:not(:focus-visible){box-shadow:none}.bh-header__hamburger-icon{position:absolute;width:32px;height:32px;pointer-events:none;background-image:url('data:image/svg+xml; utf8, <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 8.44772 5.44772 8 6 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H6C5.44772 10 5 9.55228 5 9ZM5 16C5 15.4477 5.44772 15 6 15H26C26.5523 15 27 15.4477 27 16C27 16.5523 26.5523 17 26 17H6C5.44772 17 5 16.5523 5 16ZM6 22C5.44772 22 5 22.4477 5 23C5 23.5523 5.44772 24 6 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H6Z" fill="white"/></svg>')}.bh-header__hamburger--open .bh-header__hamburger-icon{background-image:url('data:image/svg+xml; utf8, <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 8.44772 5.44772 8 6 8H26C26.5523 8 27 8.44772 27 9C27 9.55228 26.5523 10 26 10H6C5.44772 10 5 9.55228 5 9ZM5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16ZM6 22C5.44772 22 5 22.4477 5 23C5 23.5523 5.44772 24 6 24H20C20.5523 24 21 23.5523 21 23C21 22.4477 20.5523 22 20 22H6Z" fill="white"/></svg>')}.bh-header__logo{max-width:170px;max-height:48px;object-fit:cover;background-size:cover}.bh-header--primary .bh-header__hamburger+.bh-header__logo{margin-left:20px}.bh-header__logo+.bh-header__app-name{border-left:1px solid var(--color-text-common-inverse-secondary);margin-left:var(--spacing-margin-medium);padding-left:var(--spacing-padding-small)}.bh-header__app-name{color:var(--color-text-common-inverse-primary)}.bh-header__spacer{display:flex;flex:1}.bh-header__nav-menu{margin-right:var(--spacing-margin-medium)}.bh-header__icon-links{display:flex;flex-direction:row;color:var(--color-text-common-inverse-primary)}.bh-header__icon{cursor:pointer;width:36px;height:36px;border-radius:100%;display:flex;align-items:center;justify-content:center;user-select:none;margin-left:var(--spacing-margin-xxsmall);outline:none}.bh-header__icon:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-header__icon:focus:not(:focus-visible){box-shadow:none}.bh-header__icon:first-of-type{margin-left:0px}.bh-header__icon:hover,.bh-header__icon:active{cursor:pointer;width:36px;height:36px;background-color:var(--color-fill-cta-primary-hover-supplemental);border-radius:100%;display:flex;align-items:center;justify-content:center}.bh-header__icon-links+.bh-avatar{margin-left:var(--spacing-margin-small)}.bh-header .bh-avatar{min-width:var(--avatar-medium-width)}.bh-header--secondary .bh-header__hamburger{display:none}@media only screen and (max-width: 1023px){.bh-header--primary{padding-left:16px;padding-right:20px}.bh-header--secondary{padding-right:20px;padding-left:20px}.bh-header__app-name{display:none}.bh-header__icon-links+.bh-avatar{margin-left:var(--spacing-margin-small)}.bh-header--secondary .bh-header__icon-links+.bh-avatar{margin-left:var(--spacing-margin-none)}.bh-header__hamburger--open .bh-header__hamburger-icon{background-image:url('data:image/svg+xml; utf8, <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.4203 23.7782C22.8108 24.1687 23.444 24.1687 23.8345 23.7782C24.225 23.3876 24.225 22.7545 23.8345 22.364L17.4706 16L23.8345 9.63604C24.225 9.24552 24.225 8.61235 23.8345 8.22183C23.444 7.8313 22.8108 7.8313 22.4203 8.22183L16.0563 14.5858L9.69239 8.22183C9.30186 7.8313 8.6687 7.8313 8.27817 8.22183C7.88765 8.61235 7.88765 9.24552 8.27817 9.63604L14.6421 16L8.27817 22.364C7.88765 22.7545 7.88765 23.3876 8.27817 23.7782C8.6687 24.1687 9.30186 24.1687 9.69239 23.7782L16.0563 17.4142L22.4203 23.7782Z" fill="white"/></svg>')}}@media only screen and (min-width: 600px){.bh-header{height:var(--header-tablet-height);z-index:2200}}@media only screen and (max-width: 599px){.bh-header--primary,.bh-header--secondary{height:var(--header-mobile-height);padding-right:var(--spacing-padding-small);padding-left:var(--spacing-padding-small)}.bh-header--primary .bh-header__hamburger+.bh-header__logo,.bh-header--secondary .bh-header__hamburger+.bh-header__logo{margin-left:12px}.bh-header__nav-menu{display:none}.bh-header .bh-avatar{display:none}.bh-header--secondary .bh-header__icon-links,.bh-header__icon-links{display:flex}.bh-header__icon--help{display:none}.bh-header__logo{max-width:146px;max-height:44px}.bh-header--secondary .bh-header__hamburger{display:flex}}`;
var BhHeaderStyle0 = bhHeaderCss;
var BhHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.type = "primary";
    this.closeSettingsMenu = void 0;
    this.logo = getAssetPath(`./assets/bakerhughes_logo.svg`);
    this.appname = void 0;
    this.headerLimit = 30;
    this.iconLinks = void 0;
    this._iconLinks = void 0;
  }
  watchIconLinks() {
    this._iconLinks = typeof this.iconLinks === "string" ? JSON.parse(this.iconLinks) : this.iconLinks;
  }
  componentWillLoad() {
    if (this.logo === "" || this.logo === void 0) {
      this.logo = getAssetPath(`./assets/bakerhughes_logo.svg`);
    }
    this._iconLinks = typeof this.iconLinks === "string" ? JSON.parse(this.iconLinks) : this.iconLinks;
  }
  render() {
    var _a, _b, _c;
    const prefix = this.host.tagName.toLowerCase().replace(components.header.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    Array.from(this.host.children).map((child) => {
      if (child.getAttribute("slot") === "bh-header__nav-menu") {
        Array.from(child.children).map((menuLink) => {
          menuLink.setAttribute("type", "header");
        });
      } else if (child.nodeName === Components.avatar.toUpperCase()) {
        child.setAttribute("ring", "true");
        child.setAttribute("size", "medium");
      }
    });
    const headerClasses = ["bh-header"];
    headerClasses.push(`bh-header--${this.type}`);
    return h(Host, {
      key: "b85d11956b3b3dec9269d4d52e90db71e7377d12",
      class: headerClasses.join(" "),
      onClick: (event) => {
        if (!(event.target.classList.contains("bh-app-shell__avatar") || event.target.classList.contains("bh-avatar__image") || event.target.classList.contains("bh-avatar__initials"))) {
          this.closeSettingsMenu();
        }
      }
    }, h("slot", {
      key: "508b5eaa04d2a879df37005a94af7c1a7e47fd37",
      name: "bh-header__menu-toggle"
    }), h("img", {
      key: "44dbf293f37df7537dbcdb0d915ceb59c5bfbce0",
      class: "bh-header__logo",
      part: "appHeaderLogo",
      src: this.logo
    }), h("div", {
      key: "6494729af39e6246faf2067a30220f3ab3222981",
      class: "bh-header__app-name typography--menu-link-medium",
      part: "appHeaderName"
    }, ((_a = this.appname) === null || _a === void 0 ? void 0 : _a.length) <= this.headerLimit ? this.appname : ((_b = this.appname) === null || _b === void 0 ? void 0 : _b.substring(0, this.headerLimit)) + "..."), h("slot", {
      key: "a5d1c0cbde288efb6b4b762f79eca43533477e29",
      name: "bh-header__spacer"
    }, h("div", {
      key: "30940df613417abba6b9f3874a17a5c1a41964a7",
      class: "bh-header__spacer",
      part: "appHeaderSpacer"
    })), this.type === "secondary" && h("div", {
      class: "bh-header__nav-menu"
    }, h("slot", {
      name: "bh-header__nav-menu"
    })), h("div", {
      key: "20813e63053c76ad9a3ea013a41d803b1326ba3d",
      class: "bh-header__icon-links",
      part: "appHeaderIconLinks"
    }, this._iconLinks && ((_c = this._iconLinks) === null || _c === void 0 ? void 0 : _c.map((icon) => {
      return h("span", null, icon.tooltipText && h(Components.tooltip, {
        message: icon.tooltipText
      }, h("div", {
        id: icon.key,
        class: `bh-header__icon bh-header__icon--${icon.name} motion--fast`,
        onClick: () => {
          this.bhEventCtaClick.emit({
            type: "iconLinks",
            icon
          });
        },
        tabIndex: 0,
        onKeyDown: (event) => {
          if (event.code === "Enter") {
            this.bhEventCtaClick.emit({
              type: "iconLinks",
              icon
            });
          }
        }
      }, icon.badge ? h(Components.badge, {
        label: icon.badge,
        position: "appended"
      }, h("i", {
        class: "typography--icon-medium"
      }, icon.name)) : h("i", {
        class: "typography--icon-medium"
      }, icon.name))), !icon.tooltipText && h("div", {
        id: icon.key,
        class: `bh-header__icon bh-header__icon--${icon.name} motion--fast`,
        onClick: () => {
          this.bhEventCtaClick.emit({
            type: "iconLinks",
            icon
          });
        },
        tabIndex: 0,
        onKeyDown: (event) => {
          if (event.code === "Enter") {
            this.bhEventCtaClick.emit({
              type: "iconLinks",
              icon
            });
          }
        }
      }, icon.badge ? h(Components.badge, {
        label: icon.badge,
        position: "appended"
      }, h("i", {
        class: "typography--icon-medium"
      }, icon.name)) : h("i", {
        class: "typography--icon-medium"
      }, icon.name)));
    }))), h("slot", {
      key: "77417ad634dac8c88ba6ce36e102faf8604f11f8",
      name: "bh-header__avatar"
    }));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "iconLinks": ["watchIconLinks"]
    };
  }
};
BhHeader.style = BhHeaderStyle0;
export {
  BhHeader as bh_header
};
//# sourceMappingURL=bh-header.entry-XIEBHKCL.js.map
