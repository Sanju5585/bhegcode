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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-panel.entry.js
var bhPanelCss = "@-webkit-keyframes animate{0%{-webkit-transform:translateX(100px);transform:translateX(100px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes animate{0%{-webkit-transform:translateX(100px);transform:translateX(100px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}.bh-panel{position:fixed;right:0;z-index:3001;top:var(--header-desktop-height);bottom:0px;height:100vh;width:0px;overflow:hidden;box-shadow:var(--effect-drop-shadow-elevation-extra-high);background-color:var(--color-fill-common-secondary);}.enablepanelMicroInteraction{-webkit-animation:animate 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 200ms both;animation:animate 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 200ms both}.bh-panel__backdrop{position:fixed;width:100vw;height:100vh;top:var(--header-desktop-height);bottom:0px;left:0;z-index:3000;background-color:transparent}.bh-panel.open.small,.bh-panel--container.small{width:320px}.bh-panel.open.medium,.bh-panel--container.medium{width:500px}.bh-panel.open.fluid,.bh-panel--container.fluid{width:50vw}.bh-panel.close{width:0px}.bh-panel--header{display:flex;justify-content:space-between;align-items:center;height:30px;padding:var(--spacing-padding-medium);border-bottom:var(--effect-border-width-regular) solid\n    var(--color-border-common-primary)}.bh-panel-header-text{overflow:hidden;width:90%;text-overflow:ellipsis;white-space:nowrap}.bh-tabular-list__tooltip{position:absolute;left:50px;top:0;background-color:var(--color-text-common-primary);color:var(--color-fill-common-secondary);display:table;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);border-radius:var(--effect-border-radius-medium);pointer-events:none;opacity:0;white-space:pre-wrap;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-tabular-list__tooltip.shown{opacity:1}.bh-tabular-list__tooltip__ghost-element{visibility:hidden;pointer-events:none;display:table;padding:0 var(--spacing-padding-small);height:0;position:absolute;max-width:300px}.padding{padding:var(--spacing-padding-medium)}@media (max-width: 599px){.bh-panel--header{height:59px;}.bh-panel.open.small,.bh-panel.open.medium,.bh-panel.open.fluid,.bh-panel--container.small,.bh-panel--container.medium,.bh-panel--container.fluid{width:100vw}}@media only screen and (max-width: 1023px){.bh-panel{top:var(--header-tablet-height);bottom:0px}}@media only screen and (max-width: 599px){.bh-panel{top:var(--header-mobile-height);bottom:0px}}";
var BhPanelStyle0 = bhPanelCss;
var BhPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.panelOpenclass = "open";
    this.isOpen = false;
    this.width = "medium";
    this.header = void 0;
    this.isPadded = false;
    this.tooltipOnCloseIcon = false;
    this.outsidePanelClick = true;
    this.closebtnText = "Close";
    this.enableMicroInteraction = true;
  }
  watchIsOpen() {
    if (this.isOpen) {
      this.isOpen = true;
      this.bhEventOpen.emit({
        "target": "bh-panel",
        "open": this.isOpen
      });
    } else {
      setTimeout(() => {
        this.isOpen = false;
        this.bhEventClose.emit({
          "target": "bh-panel",
          "open": this.isOpen
        });
      }, 100);
    }
  }
  /**
   * Custom event for opening the panel through custom event
   */
  openPanelEvent() {
    this.isOpen = true;
  }
  isSettingsMenuOpenUpdate() {
    this.isOpen = false;
  }
  /**
   * Custom event for closing the panel through custom event
   */
  closePanelEvent() {
    this.isOpen = false;
  }
  componentDidUpdate() {
  }
  componentDidLoad() {
  }
  componentWillLoad() {
    if (this.enableMicroInteraction) {
      this.panelOpenclass = "open enablepanelMicroInteraction";
    }
  }
  closePanel() {
    this.isOpen = false;
  }
  mouseOverEvent(event) {
    try {
      const root = event.target;
      const innerContent = root.innerHTML;
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltipGhostElement.innerHTML = innerContent;
      if (this.el__tooltipGhostElement.clientWidth + 1 > root.clientWidth && root.clientWidth > 219) {
        this.el__tooltip.classList.add("shown");
        this.el__tooltipMessage.innerHTML = innerContent;
        this.el__tooltip.style.left = "1rem";
        this.el__tooltip.style.right = "3rem";
        this.el__tooltip.style.top = "3rem";
      }
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.panel.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Host, {
      key: "94b6867db9715f50c3d6f2628712f5ce61f2dd7b",
      ref: (el) => {
        this.el__container = el;
      }
    }, h("div", {
      key: "20b6bd477e961781c67e7ba047d558c8bb986ff9",
      // tabindex='0'
      // onBlur={() => this.closePanel()}
      class: `bh-panel ${this.isOpen ? this.panelOpenclass : "close"} ${this.isOpen ? this.width : ""}`
    }, h("div", {
      key: "01ac759851b8b725d8cb3d1aa7f52981679fa634",
      class: `bh-panel--container ${this.width}`
    }, h("div", {
      key: "d8c6adc64198cab137f5af8a1b6cab8c55f5db9d",
      class: "bh-panel--header"
    }, h("span", {
      key: "cd99fd6ece3309bfa284c4ee1d4c3353cc75a416",
      class: "typography--subtitle-medium typography--color-primary bh-panel-header-text",
      onMouseOver: ($event) => {
        this.mouseOverEvent($event);
      },
      onMouseLeave: () => {
        this.mouseLeaveEvent();
      }
    }, this.header, h("div", {
      key: "434b71a29c62b66bf1849bc05beba21a5ea1efc3",
      class: `bh-tabular-list__tooltip`,
      ref: (el) => {
        this.el__tooltip = el;
      }
    }, h("span", {
      key: "a560d82c33436a10e2d96dd609e4e5ead8c6712f",
      class: "typography--body-small-semi-bold",
      ref: (el) => {
        this.el__tooltipMessage = el;
      }
    })), h("div", {
      key: "031bcf7d76ef30019105a6707f5b9648ec751310",
      class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
      ref: (el) => {
        this.el__tooltipGhostElement = el;
      }
    })), this.tooltipOnCloseIcon && h(Components.tooltip, {
      message: this.closebtnText
    }, h(Components.icon, {
      icon: "close",
      size: "small",
      color: "primary",
      class: "bh-alert-item--icon",
      style: {
        cursor: "pointer"
      },
      onClick: () => this.closePanel()
    })), !this.tooltipOnCloseIcon && h(Components.icon, {
      icon: "close",
      size: "small",
      color: "primary",
      class: "bh-alert-item--icon",
      style: {
        cursor: "pointer"
      },
      onClick: () => this.closePanel()
    })), h("div", {
      key: "a9322f463b8a92a0d9ec52f54ac1e42073334006",
      class: `${this.isPadded ? "padding" : ""}`
    }, h("slot", {
      key: "ddd9c4d6ae50d19fdd58c5350f30c556b8a3a393"
    })))), this.isOpen && h("div", {
      class: "bh-panel__backdrop",
      onClick: () => {
        if (this.outsidePanelClick) {
          this.closePanel();
        }
      }
    }));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["watchIsOpen"]
    };
  }
};
BhPanel.style = BhPanelStyle0;
export {
  BhPanel as bh_panel
};
//# sourceMappingURL=bh-panel.entry-DAIMD2N7.js.map
