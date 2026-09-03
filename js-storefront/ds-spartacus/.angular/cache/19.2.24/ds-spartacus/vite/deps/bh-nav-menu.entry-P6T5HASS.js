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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-nav-menu.entry.js
var bhNavMenuCss = ":host{display:flex}.bh-nav-menu--header{display:flex;flex-direction:row}.bh-nav-menu__submenu-item{transition:height, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s;visibility:visible;opacity:1;height:44px}.bh-nav-menu__submenu-item--collapsed{transition:height, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s;visibility:hidden;opacity:0;height:0px}.bh-app-shell-menu__side-menu-item{word-break:break-all}";
var BhNavMenuStyle0 = bhNavMenuCss;
var BhNavMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navSubMenuOpened = createEvent(this, "navSubMenuOpened", 7);
    this.navSubMenuClosed = createEvent(this, "navSubMenuClosed", 7);
    this.type = "side-nav";
    this.withAppShellMenu = false;
    this.navigation = void 0;
    this.lastRendered = void 0;
    this.expandedIndex = void 0;
    this.children = void 0;
  }
  watchNavigation() {
    this.children = [];
    setTimeout(() => {
      this.appendEvents();
    });
  }
  appendEvents() {
    const prefix = this.host.tagName.toLowerCase().replace(components.navMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    this.children = Array.from(this.host.children);
    this.children.map((child, i) => {
      if (child.nodeName === Components.menuItem.toUpperCase()) {
        let subchildren = Array.from(child.children);
        let initiallyExpandMenuItem = false;
        child.addEventListener("click", () => {
          if (this.expandedIndex === i) {
            this.navSubMenuClosed.emit();
            this.expandedIndex = void 0;
          } else if (subchildren.length > 0) {
            this.navSubMenuOpened.emit();
            this.expandedIndex = i;
          } else {
            this.expandedIndex = void 0;
          }
        });
        child.addEventListener("keydown", (event) => {
          if (event.code === "Enter") {
            if (this.expandedIndex === i) {
              this.navSubMenuClosed.emit();
              this.expandedIndex = void 0;
            } else if (subchildren.length > 0) {
              this.navSubMenuOpened.emit();
              this.expandedIndex = i;
            } else {
              this.expandedIndex = void 0;
            }
          }
        });
        if (this.type !== "secondary") {
          if (subchildren.filter((subchild) => subchild.nodeName === Components.menuItem.toUpperCase()).length > 0) {
            child.setAttribute("chevron", "expand_more");
          }
          subchildren.filter((subchild) => subchild.nodeName === Components.menuItem.toUpperCase()).map((subchild) => {
            subchild.setAttribute("type", `${this.type}`);
            subchild.classList.add("bh-nav-menu__submenu-item");
            subchild.classList.add("bh-nav-menu__submenu-item--collapsed");
            if (subchild.getAttribute("selected") === "") {
              this.navSubMenuOpened.emit();
              initiallyExpandMenuItem = true;
            }
            subchild.addEventListener("click", (event) => {
              event.stopPropagation();
              this.lastRendered = Date.now();
            });
          });
        }
        if (initiallyExpandMenuItem) {
          this.expandedIndex = i;
          child.setAttribute("selected", "true");
        }
      }
    });
  }
  componentWillLoad() {
    this.appendEvents();
  }
  render() {
    this.children.map((child, i) => {
      child.setAttribute("type", this.type);
      let subchildren = Array.from(child.children);
      let setParentSelected = false;
      subchildren.map((subchild) => {
        if (subchild.classList.contains("bh-menu-item__sublinks")) {
          let sublinks = Array.from(subchild.children);
          sublinks.map((sublink) => {
            sublink.setAttribute("type", this.type);
            if (sublink.getAttribute("selected") || sublink.getAttribute("selected") === "") {
              setParentSelected = true;
            }
            if (this.expandedIndex === i && (this.type === "side-nav-open" || this.type === "mobile")) {
              sublink.classList.remove("bh-nav-menu__submenu-item--collapsed");
              child.setAttribute("chevron", "expand_less");
            } else {
              sublink.classList.add("bh-nav-menu__submenu-item--collapsed");
              if (subchildren.length > 0) {
                child.setAttribute("chevron", "expand_more");
              } else {
                child.removeAttribute("chevron");
              }
            }
          });
          if (sublinks.length > 0 && !this.withAppShellMenu) {
            if (setParentSelected) {
              child.setAttribute("selected", "");
            } else {
              child.removeAttribute("selected");
            }
          }
        }
      });
    });
    return h(Host, {
      key: "06815025cb85e6456d2b3a7ad0fd029591207305",
      class: `bh-nav-menu bh-nav-menu--${this.type}`
    }, h("slot", {
      key: "c4499cfd9d9464547643242f648debf151577a77"
    }));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "navigation": ["watchNavigation"]
    };
  }
};
BhNavMenu.style = BhNavMenuStyle0;
export {
  BhNavMenu as bh_nav_menu
};
//# sourceMappingURL=bh-nav-menu.entry-P6T5HASS.js.map
