import {
  parseMessage
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-system-alert-item.entry.js
var bhSystemAlertItemCss = ".bh-system-alert-item{display:block;box-sizing:border-box;max-width:434px;border-radius:var(--effect-border-radius-medium);box-shadow:var(--effect-drop-shadow-elevation-low);background-color:var(--color-fill-common-secondary);padding:var(--spacing-padding-medium) var(--spacing-padding-small);margin-bottom:var(--spacing-margin-xsmall)}.bh-system-alert-item.close{display:none;opacity:0}.bh-system-alert-item.open{opacity:1}.bh-system-alert-item__header-copy{margin:-1px 0 var(--spacing-margin-xxsmall) 0;color:var(--color-text-common-primary)}@supports (-webkit-touch-callout: none){.bh-system-alert-item__header-copy{margin-top:-2px}}.bh-system-alert-item__message-copy{margin:0;margin-bottom:var(--spacing-margin-xsmall)}.bh-system-alert-item__timestamp-copy{margin:0}.bh-system-alert-item__header-dismiss{height:var(--spacing-padding-medium);cursor:pointer;color:var(--color-text-common-secondary);margin-left:var(--spacing-margin-xsmall);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-system-alert-item__container{display:flex;flex-direction:column}.bh-system-alert-item__body{width:100%;color:var(--color-text-common-secondary);display:flex}.bh-system-alert-item__body.highlighted{color:var(--color-text-common-primary)}.bh-system-alert-item__footer--ctas{display:flex;justify-content:flex-start;margin-top:var(--spacing-margin-medium);margin-left:26px;max-width:360px;min-width:0}.bh-system-alert-item__footer--cta{display:flex;margin:0 calc(var(--spacing-margin-small) / 2);min-width:0}.bh-system-alert-item__footer--cta>*{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;min-width:0}.bh-system-alert-item__footer--cta:first-child{margin-left:0}.bh-system-alert-item__footer--cta:last-child{margin-right:0}@media (max-width: 599px){.bh-system-alert-item{width:auto}.bh-system-alert-item__footer--ctas{max-width:220px}}";
var BhSystemAlertItemStyle0 = bhSystemAlertItemCss;
var BhSystemAlertItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeAlertItem = createEvent(this, "removeAlertItem", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.ctaClick = createEvent(this, "ctaClick", 3);
    this.index = void 0;
    this.status = void 0;
    this.alertkey = void 0;
    this.timestamp = void 0;
    this.header = void 0;
    this.message = void 0;
    this.isOpen = true;
    this.ctas = void 0;
    this._ctas = void 0;
    this.opacity = void 0;
    this.closeOnCtaClick = true;
  }
  watchIsOpen() {
    if (this.isOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
    }
  }
  watchCtas() {
    this.parseData();
  }
  /**
   * Custom event for opening the dialog through custom event
   */
  openSystemAlertItemEvent() {
    this.isOpen = true;
  }
  /**
   * Custom event for closing the dialog through custom event
   */
  closeSystemAlertItemEvent() {
    this.isOpen = false;
  }
  closeSystemAlertItem() {
    if (this.alertkey == void 0) {
      this.isOpen = false;
    }
    this.key = this.alertkey;
    this.removeAlertItem.emit(this);
  }
  onCtaClick(key) {
    this.ctaClick.emit(key);
    if (this.closeOnCtaClick) {
      this.closeSystemAlertItem();
    }
    this.bhEventCtaClick.emit(key);
  }
  componentWillRender() {
    switch (this.status) {
      case "success":
        this.icon = "check_circle";
        this.iconColor = "var(--color-base-teal-600)";
        break;
      case "critical":
        this.icon = "security";
        this.iconColor = "var(--color-base-rose-600)";
        break;
      case "warning":
        this.icon = "notification_important";
        this.iconColor = "var(--color-base-gold-800)";
        break;
      case "info":
        this.icon = "info";
        this.iconColor = "var(--color-base-cyan-600)";
        break;
    }
  }
  parseData() {
    if (typeof this.ctas === "string") {
      try {
        this._ctas = JSON.parse(this.ctas);
      } catch (_a) {
      }
    } else {
      this._ctas = this.ctas;
    }
  }
  componentWillLoad() {
    this.parseData();
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.systemAlertItem.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Host, {
      key: "ba480f53edca23b7036b0095baf5637252cd4165",
      class: `bh-system-alert-item motion--normal ${this.isOpen ? "open" : "close"}`
    }, h("div", {
      key: "80a114769aa49b20dc89724cd060fc840f0aca0a",
      style: this.opacity,
      class: "bh-system-alert-item__container",
      ref: (el) => {
        this.el__container = el;
      }
    }, h("div", {
      key: "ab28fef0e82db0172b8bbde32ef79f74060d465f",
      class: "bh-system-alert-item__body"
    }, h(Components.icon, {
      key: "acf8475c0471137768f92994e0137e029196ef71",
      icon: this.icon,
      size: "small",
      color: this.iconColor,
      style: {
        marginRight: "8px"
      }
    }), h("div", {
      key: "18bc1b396bffc7968ffd60bc82b2efd116adef7e",
      style: {
        width: "100%"
      }
    }, this.header && h("h3", {
      class: "typography--subtitle-medium bh-system-alert-item__header-copy"
    }, this.header), h("p", {
      key: "4475b162f07f63233c755ca89fe01812b61cfcd7",
      class: "typography--body-small bh-system-alert-item__message-copy",
      innerHTML: parseMessage(this.message, "highlighted")
    }), this.timestamp && h("p", {
      class: "typography--body-small bh-system-alert-item__timestamp-copy"
    }, this.timestamp)), h(Components.icon, {
      key: "a5caf10c8f9bd52c9281ac16fb1cd7b40c591b4a",
      icon: "close",
      size: "small",
      color: "secondary",
      style: {
        cursor: "pointer",
        marginLeft: "var(--spacing-margin-xsmall)"
      },
      onClick: () => this.closeSystemAlertItem()
    })), h("div", {
      key: "3b148c93cd1bbd2016f5086ffcdd0800058c3dd9",
      class: "bh-system-alert-item__footer--ctas"
    }, (_b = (_a = this._ctas) === null || _a === void 0 ? void 0 : _a.slice(0, 2)) === null || _b === void 0 ? void 0 : _b.map((cta) => {
      return h(Components.button, {
        class: "bh-system-alert-item__footer--cta",
        isSmall: cta.size === "medium" ? false : true,
        type: cta.type,
        label: cta.label,
        isDisabled: cta.isDisabled,
        isLoading: cta.isLoading,
        leftIcon: cta.leftIcon,
        rightIcon: cta.rightIcon,
        onClick: () => {
          if (cta.isDisabled) return;
          this.onCtaClick(cta.key);
        }
      });
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["watchIsOpen"],
      "ctas": ["watchCtas"]
    };
  }
};
BhSystemAlertItem.style = BhSystemAlertItemStyle0;
export {
  BhSystemAlertItem as bh_system_alert_item
};
//# sourceMappingURL=bh-system-alert-item.entry-GS3XX4PF.js.map
