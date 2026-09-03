import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-menu-item.entry.js
var bhMenuItemCss = '.bh-menu-item__container[tabIndex="0"]:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-menu-item__container[tabIndex="0"]:focus:not(:focus-visible){box-shadow:none}.bh-menu-item__container{display:flex;flex-direction:column;flex:1;width:100%;outline:none}.bh-menu-item{min-height:44px;display:flex;flex-direction:row;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;justify-content:flex-start;align-items:center;color:var(--color-text-common-secondary);white-space:pre-wrap;height:var(--button-medium-height);transition:all;transition-duration:var(--motion-duration-fast);transition-timing-function:var(--motion-easing-fast)}.bh-menu-item:hover{transition:all;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item__chevron,.bh-menu-item__label,.bh-menu-item__icon{pointer-events:none}@media (hover: hover){.bh-menu-item{cursor:pointer;}}.typography--icon-small.bh-menu-item__icon,.typography--icon-medium.bh-menu-item__icon{width:34px;height:34px;min-width:34px;min-height:34px;display:flex;align-items:center;justify-content:center;border-radius:100%}.bh-menu-item:hover .bh-menu-item__icon{transition:all;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav{color:var(--color-text-common-secondary)}.bh-menu-item--side-nav.hover,.bh-menu-item--side-nav:hover{color:var(--color-text-common-primary)}.bh-menu-item--side-nav .bh-menu-item__icon{transition:all;transition-duration:var(--motion-duration-fast);transition-timing-function:var(--motion-easing-fast)}.bh-menu-item--side-nav.hover .bh-menu-item__icon,.bh-menu-item--side-nav:hover .bh-menu-item__icon{background-color:var(--color-fill-menu-highlighted);transition:all;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav.bh-menu-item--selected .bh-menu-item__icon{background-color:var(--color-fill-menu-selected);transition:background-color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav.bh-menu-item--selected,.bh-menu-item--side-nav:active{color:var(--color-text-common-primary);transition:color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav.bh-menu-item--selected .bh-menu-item__icon{background-color:var(--color-fill-menu-selected);transition:background-color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav .bh-menu-item__icon{margin-left:var(--spacing-margin-small)}.bh-menu-item--side-nav .bh-menu-item__label{margin-left:var(--spacing-margin-medium);visibility:hidden;opacity:0;transition:visibility, opacity, height;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s}.bh-menu-item--side-nav .bh-menu-item__icon+.bh-menu-item__label{margin-left:var(--spacing-margin-small)}.bh-nav-menu__submenu-item .bh-menu-item--side-nav .bh-menu-item__icon{visibility:hidden;transition:visibility, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s}.bh-menu-item--side-nav .bh-menu-item__chevron{visibility:hidden;flex:1;justify-content:flex-end;flex-direction:row;display:flex;margin-right:var(--spacing-margin-medium);transition:visibility, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s}.bh-menu-item__chevron{transition:opacity var(--motion-duration-normal) var(--motion-easing-normal)}.bh-menu-item__chevron.shown{opacity:1}.bh-menu-item__chevron.hidden{opacity:0}.bh-menu-item--side-nav-open{color:var(--color-text-common-secondary);white-space:pre-wrap}.bh-menu-item--side-nav-open:hover{color:var(--color-text-common-primary)}.bh-menu-item--side-nav-open.bh-menu-item--selected,.bh-menu-item--side-nav-open:active{color:var(--color-text-common-primary);transition:color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav-open.bh-menu-item--selected .bh-menu-item__icon{background-color:var(--color-fill-menu-selected);transition:background-color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--side-nav-open .bh-menu-item__icon{margin-left:var(--spacing-margin-small)}.bh-menu-item--side-nav-open .bh-menu-item__label{margin-left:var(--spacing-margin-medium)}.bh-menu-item--side-nav-open .bh-menu-item__icon+.bh-menu-item__label{margin-left:var(--spacing-margin-small);transition:visibility, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-nav-menu__submenu-item .bh-menu-item--side-nav-open .bh-menu-item__icon{visibility:hidden;opacity:0;transition:visibility, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-menu-item--side-nav-open .bh-menu-item__chevron{flex:1;justify-content:flex-end;flex-direction:row;display:flex;margin-right:var(--spacing-margin-small);transition:visibility, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-menu-item--header .bh-menu-item__icon,.bh-menu-item--header .bh-menu-item__chevron{display:none}.bh-menu-item--header{color:var(--color-text-common-inverse-secondary);margin:0 calc(var(--spacing-margin-large)/2)}.bh-menu-item--header:hover,.bh-menu-item--header:active,.bh-menu-item--header.bh-menu-item--selected{color:var(--color-text-common-inverse-primary);transition:color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--settings{width:100%;min-height:var(--settings-menu-item-height);height:max-content}.bh-menu-item--settings:hover,.bh-menu-item--settings.keyboard-focused{background-color:var(--color-fill-menu-highlighted)}.bh-menu-item--settings.bh-menu-item--selected,.bh-menu-item--settings:active{background-color:var(--color-fill-menu-selected);transition:background-color;transition-duration:var(--motion-duration-normal);transition-timing-function:var(--motion-easing-normal)}.bh-menu-item--settings.bh-menu-item--selected:hover,.bh-menu-item--settings.bh-menu-item--selected.keyboard-focused,.bh-menu-item--settings:active:hover,.bh-menu-item--settings:active.keyboard-focused{box-shadow:inset var(--effect-drop-shadow-focus-primary)}e .bh-menu-item--settings{color:var(--color-text-common-secondary);background-color:var(--color-fill-control-unselected);width:initial;height:initial}.bh-menu-item--settings.bh-menu-item--selected,.bh-menu-item--settings:hover,.bh-menu-item--settings:active{color:var(--color-text-common-primary)}.bh-menu-item--settings .bh-menu-item__icon{margin-left:var(--spacing-margin-medium)}.bh-menu-item--settings .bh-menu-item__label{overflow:hidden;width:90%;text-overflow:ellipsis;white-space:nowrap;padding-left:var(--spacing-padding-medium)}.bh-menu-item--settings .bh-menu-item__chevron{flex:1;justify-content:flex-end;flex-direction:row;display:flex;margin-right:var(--spacing-margin-medium)}.bh-menu-item--settings .bh-menu-item__icon+.bh-menu-item__label{overflow:hidden;width:90%;text-overflow:ellipsis;white-space:nowrap;padding-left:var(--spacing-padding-small)}.bh-menu-item--mobile{color:var(--color-text-common-secondary)}.bh-menu-item--mobile:hover{color:var(--color-text-common-primary)}.bh-menu-item--mobile.bh-menu-item--selected,.bh-menu-item--mobile:active{color:var(--color-text-common-primary)}.bh-menu-item--mobile.bh-menu-item--selected .bh-menu-item__icon{background-color:var(--color-fill-menu-selected)}.bh-menu-item--mobile .bh-menu-item__icon{margin-left:var(--spacing-margin-xsmall)}.bh-menu-item--mobile .bh-menu-item__label{margin-left:var(--spacing-margin-medium)}.bh-menu-item--mobile .bh-menu-item__icon+.bh-menu-item__label{margin-left:var(--spacing-margin-xsmall)}.bh-nav-menu__submenu-item .bh-menu-item--mobile .bh-menu-item__icon{visibility:hidden}.bh-menu-item--mobile .bh-menu-item__chevron{flex:1;justify-content:flex-end;flex-direction:row;display:flex;margin-right:var(--spacing-margin-xsmall)}.bh-tabular-list__tooltip{position:absolute;top:0;background-color:var(--color-text-common-primary);color:var(--color-fill-common-secondary);display:block;width:300px;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);font-size:xx-small;border-radius:var(--effect-border-radius-medium);pointer-events:none;opacity:0;white-space:initial;overflow:hidden;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-tabular-list__tooltip.shown{opacity:1}.bh-tabular-list__tooltip__ghost-element{visibility:hidden;pointer-events:none;display:table;padding:0;height:0;position:absolute;max-width:30px;font-size:xx-small;word-break:normal}span.initialtooltiptext>span.bh-menu-item__label{white-space:initial}';
var BhMenuItemStyle0 = bhMenuItemCss;
var BhMenuLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.id = void 0;
    this.type = "side-nav";
    this.isSelected = false;
    this.label = void 0;
    this.icon = void 0;
    this.chevron = void 0;
    this.isHovered = false;
    this.isFocusable = false;
    this.isKeyboardFocused = false;
    this.isSubmenuBackSelected = false;
  }
  mouseOverEvent(event) {
    try {
      const root = event.target;
      const innerContent = root.innerHTML;
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltipGhostElement.innerHTML = innerContent;
      if (this.type === "side-nav-open") {
        if (this.labelelement.offsetWidth < this.labelelement.scrollWidth) {
          this.el__tooltip.classList.add("shown");
          this.el__tooltipMessage.innerHTML = this.label;
        }
      } else {
        if (this.el__tooltipGhostElement.clientWidth + 1 > root.clientWidth && root.clientWidth > 219) {
          this.el__tooltip.classList.add("shown");
          this.el__tooltipMessage.innerHTML = innerContent;
          const eventTargetRect = event.target.getClientRects()[0];
          this.el__tooltip.style.left = "-" + (this.el__tooltipGhostElement.getClientRects()[0].left - eventTargetRect.left) + "px";
          this.el__tooltip.style.top = `${eventTargetRect.top > 200 ? "-" + 2 * eventTargetRect.height : eventTargetRect.height + 8}px`;
        }
      }
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltip.style.left = "unset";
      this.el__tooltip.style.top = "unset";
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  render() {
    const menuLinkClasses = [`bh-menu-item bh-menu-item--${this.type}`];
    if (this.isSelected) menuLinkClasses.push("bh-menu-item--selected");
    if (this.isHovered) menuLinkClasses.push("hover");
    if (this.isKeyboardFocused) menuLinkClasses.push("keyboard-focused");
    const labelClasses = ["bh-menu-item__label typography--menu-link-medium"];
    let iconClasses = ["bh-menu-item__icon", "typography--icon-small"];
    return h(Host, {
      key: "5280399eeb9a6070a8ec01898f637974ff7d5b31",
      class: "bh-menu-item__container",
      id: this.id,
      part: "menuItemContainer",
      focusable: this.isFocusable ? "true" : "false",
      tabIndex: this.isFocusable ? 0 : -1,
      ref: (el) => {
        this.element__host = el;
      }
    }, h("div", {
      key: "295a10b99fd06d97cff3bb9fa04683c3301d2f8e",
      class: menuLinkClasses.join(" "),
      onMouseOver: ($event) => {
        this.mouseOverEvent($event);
      },
      part: "menuLink",
      onMouseLeave: () => {
        this.mouseLeaveEvent();
      }
    }, this.icon && h("i", {
      class: iconClasses.join(" ")
    }, this.icon), this.label && h("span", {
      part: "menuItemLabel",
      class: labelClasses.join(" "),
      ref: (el) => {
        this.labelelement = el;
      }
    }, this.label, h("div", {
      class: `bh-tabular-list__tooltip`,
      ref: (el) => {
        this.el__tooltip = el;
      }
    }, h("span", {
      class: "typography--body-small-semi-bold initialtooltiptext",
      ref: (el) => {
        this.el__tooltipMessage = el;
      }
    })), h("div", {
      class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
      ref: (el) => {
        this.el__tooltipGhostElement = el;
      }
    })), this.chevron && h("i", {
      class: `bh-menu-item__chevron typography--icon-small ${this.chevron ? "shown" : "hidden"}`
    }, `${this.chevron}`)), h("div", {
      key: "dd3d53a471061c3046178fe872dddb64018d6e60",
      class: "bh-menu-item__sublinks"
    }, h("slot", {
      key: "feb71481dce73207efa3c7d23143c1a2b45e89c6"
    })));
  }
  get host() {
    return getElement(this);
  }
};
BhMenuLink.style = BhMenuItemStyle0;
export {
  BhMenuLink as bh_menu_item
};
//# sourceMappingURL=bh-menu-item.entry-5YRXTUBV.js.map
