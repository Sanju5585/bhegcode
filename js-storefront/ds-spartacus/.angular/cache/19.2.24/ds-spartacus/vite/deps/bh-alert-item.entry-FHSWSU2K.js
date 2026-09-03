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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-alert-item.entry.js
var bhAlertItemCss = ".bh-alert-item{display:flex;justify-content:space-between;align-items:center;border-radius:var(--effect-base-border-radius-4);margin-bottom:var(--spacing-margin-xsmall);box-sizing:border-box}.bh-alert-item.default{box-shadow:0px 2px 8px rgba(0, 0, 0, 0.16);color:var(--color-text-common-inverse-primary);padding:5px var(--spacing-padding-small)}.bh-alert-item.context{padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);color:#121212}.bh-alert-item.context bh-icon .bh-icon-color--primary{color:#121212}.bh-alert-item.context.success{border:1px solid var(--color-border-semantic-success);background-color:var(--color-fill-semantic-success-highlight)}.bh-alert-item.context.critical{border:1px solid var(--color-border-semantic-error);background-color:var(--color-fill-semantic-error-highlight)}.bh-alert-item.context.warning{border:1px solid var(--color-border-semantic-warning);background-color:var(--color-fill-semantic-warning-highlight)}.bh-alert-item.context.info{border:1px solid var(--color-border-semantic-info);background-color:var(--color-fill-semantic-info-highlight)}.bh-alert-item.close{display:none;opacity:0}.bh-alert-item.open{opacity:1}.bh-alert-item--container{display:flex;justify-content:space-between;align-items:flex-start;width:100%}.bh-alert-item--icon{display:flex;justify-content:center;align-items:center}@supports (-webkit-touch-callout: none){.bh-alert-item--icon{margin-top:1px}}.bh-alert-item--icon-bg{display:flex;justify-content:center;align-items:center;min-height:26px;min-width:26px;border-radius:50%}.bh-alert-item--message.default,.bh-alert-item--message.context{margin:0 var(--spacing-margin-small);width:100%;display:flex;align-self:center;flex-wrap:wrap}.bh-alert-item--message.context{margin-left:var(--spacing-margin-xsmall)}.bh-alert-item--dismiss{display:flex;align-items:center;cursor:pointer}.bh-alert-item--dismiss.default{height:26px}.bh-alert-item--dismiss.context{height:auto}.alert-tempate{padding-left:12px !important;font-size:var(--font-size-body-small) !important}";
var BhAlertItemStyle0 = bhAlertItemCss;
var BhAlertItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeAlertItem = createEvent(this, "removeAlertItem", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.alertkey = void 0;
    this.index = void 0;
    this.type = "default";
    this.status = void 0;
    this.message = void 0;
    this.timeout = void 0;
    this.dismissible = true;
    this.dismissAfter = 8e3;
    this.isHTMLTemplate = false;
    this.isOpened = false;
    this.isOpen = void 0;
  }
  watchIsOpen() {
    this.isOpen = this.isOpened;
    if (!this.isOpen) {
      this.bhEventClose.emit();
    }
  }
  /**
   * Custom event for opening the alert through custom event
   */
  openAlertItemEvent() {
    this.isOpen = true;
  }
  /**
   * Custom event for closing the alert through custom event
   */
  closeAlertItemEvent() {
    this.isOpen = false;
  }
  closeAlertItem() {
    if (this.alertkey == void 0) {
      this.isOpened = false;
      this.isOpen = false;
    }
    this.key = this.alertkey;
    this.removeAlertItem.emit(this);
  }
  componentWillRender() {
    this.isOpen = this.isOpened;
    switch (this.status) {
      case "success":
        this.icon = "check_circle";
        this.bgColor = "var(--color-fill-semantic-success-default)";
        this.iconColor = "var(--color-fill-semantic-success-supplemental)";
        break;
      case "critical":
        this.icon = "security";
        this.bgColor = "var(--color-fill-semantic-error-default)";
        this.iconColor = "var(--color-fill-semantic-error-default)";
        break;
      case "warning":
        this.icon = "notification_important";
        this.bgColor = "var(--color-fill-semantic-warning-default)";
        this.iconColor = "var(--color-fill-semantic-warning-default)";
        break;
      case "info":
        this.icon = "info";
        this.bgColor = "var(--color-fill-semantic-info-default)";
        this.iconColor = "var(--color-fill-semantic-info-default)";
        break;
    }
  }
  componentDidRender() {
    if (this.isOpened) {
      if (this.timeout) {
        setTimeout(() => {
          this.closeAlertItem();
        }, this.dismissAfter);
      }
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.alertItem.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const isDefault = this.type === "default";
    return h(Host, {
      key: "a1dd2e42e6bbb814607b14045a5195fe47cb1f7b",
      style: isDefault && {
        backgroundColor: this.bgColor
      },
      class: `bh-alert-item ${this.isOpen ? "open" : "close"} ${this.type} ${this.status}
					 motion--normal`
    }, h("div", {
      key: "e8ecc4b9109db379abd9bb7dc7ee8281d1dff9aa",
      class: "bh-alert-item--container"
    }, isDefault ? h("div", {
      style: {
        backgroundColor: this.iconBg
      },
      class: "bh-alert-item--icon-bg"
    }, h(Components.icon, {
      icon: this.icon,
      size: "small",
      class: "bh-alert-item--icon",
      color: "inverse_primary"
    })) : h(Components.icon, {
      icon: this.icon,
      size: "small",
      class: "bh-alert-item--icon",
      color: this.iconColor
    }), !this.isHTMLTemplate && h("p", {
      class: `typography--body-small bh-alert-item--message ${this.type} bh-alert-item--message-container`,
      innerHTML: parseMessage(this.message, "highlighted-inverse")
    }), this.isHTMLTemplate && h("span", {
      class: `typography--body-small bh-alert-item--message ${this.type} bh-alert-item--message-container`,
      innerHTML: parseMessage(this.message, "highlighted-inverse")
    }, this.isHTMLTemplate && h("span", {
      class: "alert-tempate typography--body-small"
    }, h("slot", {
      name: "bh-alert-template"
    }))), this.dismissible && h("div", {
      class: `bh-alert-item--dismiss ${this.type}`
    }, h(Components.icon, {
      icon: "close",
      size: "small",
      color: isDefault ? "inverse_primary" : "primary",
      class: "bh-alert-item--icon",
      style: {
        cursor: "pointer"
      },
      onClick: () => this.closeAlertItem()
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpened": ["watchIsOpen"]
    };
  }
};
BhAlertItem.style = BhAlertItemStyle0;
export {
  BhAlertItem as bh_alert_item
};
//# sourceMappingURL=bh-alert-item.entry-FHSWSU2K.js.map
