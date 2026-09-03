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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-dialog.entry.js
var bhDialogCss = ".bh-dialog__wrapper.close{visibility:hidden;opacity:0}.bh-dialog__wrapper.open{visibility:visible;opacity:1}.bh-dialog__container{width:360px;border-radius:var(--effect-border-radius-medium);box-shadow:var(--effect-drop-shadow-elevation-low);overflow:hidden;position:fixed;z-index:3001;top:50vh;left:calc(50vw - 180px);background-color:var(--color-fill-common-secondary);padding:var(--spacing-padding-medium) 0;min-height:100px;opacity:0;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-dialog__container.open{opacity:1;transition:opacity var(--motion-duration-normal) var(--motion-easing-normal)}.bh-dialog__container.with-illustration .bh-dialog__header,.bh-dialog__container.with-illustration .bh-dialog__body{text-align:center}.bh-dialog__header{overflow:hidden;display:flex;justify-content:space-between;align-items:center;padding-bottom:var(--spacing-padding-xxsmall);padding-right:var(--spacing-padding-medium);padding-left:var(--spacing-padding-medium)}.bh-dialog__header.no-header-copy{padding-bottom:0}.bh-dialog__header-copy--header{margin:0;width:calc(100% - 40px)}.bh--dialog__header-dismiss{cursor:pointer;top:20px;right:20px;color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;transition:box-shadow;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast);outline:none}.bh--dialog__header-dismiss:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh--dialog__header-dismiss:focus:not(:focus-visible){box-shadow:none}.bh-dialog__illustration{margin:0 auto;padding-top:30px}.bh-dialog__body{overflow-y:auto;margin-bottom:var(--spacing-margin-large);padding-right:var(--spacing-padding-medium);padding-left:var(--spacing-padding-medium);color:var(--color-text-common-secondary);min-height:32px;max-height:240px;display:block}.bh-dialog__body-copy{display:block;width:100%;overflow-x:hidden;text-overflow:ellipsis;white-space:pre-wrap}.bh-dialog__body.no-header-copy{margin-right:calc(\n    var(--font-size-icon-small) + var(--spacing-margin-xxsmall)\n  )}.bh-dialog__body .highlighted{color:var(--color-text-common-primary)}.bh-dialog__footer{padding-right:var(--spacing-padding-medium);padding-left:var(--spacing-padding-medium)}.bh-dialog__footer--ctas{display:flex;justify-content:flex-end}.bh-dialog__footer--cta{margin:0 calc(var(--spacing-margin-small) / 2)}.bh-dialog__footer--cta:first-child{margin-left:0}.bh-dialog__footer--cta:last-child{margin-right:0}.bh-dialog__backdrop{width:100vw;height:100vh;position:fixed;background-color:var(--color-fill-common-overlay);opacity:0;top:0;left:0;z-index:3000;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-dialog__backdrop.open{opacity:var(--effect-base-opacity-80);transition:opacity var(--motion-duration-normal) var(--motion-easing-normal)}@media (max-width: 599px){.bh-dialog__container{width:calc(100vw - 24px);left:12px}.bh-dialog__body{max-height:20vh}}.enabledialogMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}";
var BhDialogStyle0 = bhDialogCss;
var BhDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.ctaClick = createEvent(this, "ctaClick", 3);
    this.dialogOpenclass = "open";
    this.header = void 0;
    this.message = void 0;
    this.isOpen = false;
    this.wrapperIsOpen = false;
    this.ctas = void 0;
    this._ctas = void 0;
    this.illustration = void 0;
    this.isDismissible = true;
    this.isHTMLTemplate = false;
    this.wrapperStyle = void 0;
    this.enableMicroInteraction = true;
  }
  watchIsOpen() {
    const that = this;
    if (this.isOpen) {
      this.wrapperIsOpen = true;
      this.bhEventOpen.emit();
      setTimeout(() => {
        const focusableContents = that.el__container.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableContents[0];
        firstFocusableElement === null || firstFocusableElement === void 0 ? void 0 : firstFocusableElement.focus();
      }, 100);
    } else {
      setTimeout(() => {
        this.wrapperIsOpen = false;
      }, 100);
      this.bhEventClose.emit();
    }
  }
  watchCtas() {
    this.parseData();
  }
  /**
   * open
   * Custom event for opening the dialog through custom event
   * Event Name: open
   */
  openDialogEvent() {
    this.isOpen = true;
  }
  /**
   * close
   * Custom event for closing the dialog through custom event
   * Event Name: close
   */
  closeDialogEvent() {
    this.isOpen = false;
  }
  closeDialog() {
    this.isOpen = false;
  }
  onCtaClick(key) {
    this.ctaClick.emit(key);
    this.bhEventCtaClick.emit(key);
  }
  parseData() {
    this._ctas = typeof this.ctas === "string" ? JSON.parse(this.ctas) : this.ctas;
  }
  componentWillLoad() {
    this.wrapperIsOpen = this.isOpen;
    this.parseData();
    if (this.enableMicroInteraction) {
      this.dialogOpenclass = "open enabledialogMicroInteraction";
    }
  }
  handleKeyboardEvent(event) {
    if (!this.isOpen || event.key !== "Tab") return;
    const focusableContents = this.el__container.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableContents[0];
    const lastFocusableElement = focusableContents[focusableContents.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement === null || lastFocusableElement === void 0 ? void 0 : lastFocusableElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement === null || firstFocusableElement === void 0 ? void 0 : firstFocusableElement.focus();
        event.preventDefault();
      }
    }
  }
  componentDidLoad() {
    const that = this;
    window.addEventListener("keydown", (event) => {
      that.handleKeyboardEvent(event);
    }, false);
  }
  parseMessage(message) {
    const bTagStart = "<b>";
    const bTagEnd = "</b>";
    let str = message;
    if ((str === null || str === void 0 ? void 0 : str.indexOf(bTagStart)) > -1) {
      const tags = [];
      while (str.indexOf(bTagStart) > -1) {
        tags.push(h("span", null, str.slice(0, str.indexOf(bTagStart))));
        tags.push(h("span", {
          class: "highlighted typography--body-small-semi-bold"
        }, str.slice(str.indexOf(bTagStart) + bTagStart.length, str.indexOf(bTagEnd))));
        str = str.substring(str.indexOf(bTagEnd) + bTagEnd.length);
      }
      if (str) tags.push(h("span", null, str));
      return h("span", {
        class: "typography--body-small bh-dialog__body-copy"
      }, tags.map((tag) => {
        return tag;
      }));
    } else {
      return h("span", {
        class: "typography--body-small bh-dialog__body-copy"
      }, message);
    }
  }
  dialogBodyrender() {
    if (this.isHTMLTemplate) {
      return h("slot", {
        name: "bh-dialog-template"
      });
    } else {
      return this.parseMessage(this.message);
    }
  }
  render() {
    var _a, _b, _c;
    const prefix = this.host.tagName.toLowerCase().replace(components.dialog.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      key: "686647fab28b83e73b24eb3e3908de53ea849dcc",
      class: "bh-dialog"
    }, h("div", {
      key: "e89b8b67c247436ab1ebb4fb70104b77a49d5e83",
      class: `bh-dialog__wrapper ${this.wrapperIsOpen ? "open" : "close"}`
    }, h("div", {
      key: "4161720f77e05c53705fca19737cc19855d8beb7",
      class: `bh-dialog__container ${this.illustration ? "with-illustration" : ""} ${this.isOpen ? this.dialogOpenclass : "close"}`,
      ref: (el) => {
        this.el__container = el;
      },
      style: {
        top: `calc(50vh - ${((_a = this.el__container) === null || _a === void 0 ? void 0 : _a.clientHeight) / 2}px)`
      }
    }, h("div", {
      key: "e8da293c5a5ca010b35f6e396393d6c40ee54ed5",
      class: `bh-dialog__header ${!this.header && !this.illustration ? "no-header-copy" : ""}`
    }, !this.illustration && h("h3", {
      class: "typography--subtitle-medium bh-dialog__header-copy--header typography--color-primary"
    }, this.header), this.illustration && h(Components.illustration, {
      class: "bh-dialog__illustration",
      style: {
        margin: "0 auto"
      },
      source: this.illustration,
      title: this.header
    }), this.isDismissible && h("i", {
      tabIndex: 0,
      class: "material-icons material-icons-outlined typography--icon-small bh--dialog__header-dismiss",
      onClick: () => {
        this.closeDialog();
      },
      onKeyDown: (event) => {
        if (event.key === "Enter") this.closeDialog();
      }
    }, "close")), h("div", {
      key: "7baa3e6d5cc715ec1f6f51ffce5a7af86e8476fd",
      class: `bh-dialog__body ${!this.header && !this.illustration ? "no-header-copy" : ""}`
    }, this.dialogBodyrender()), this._ctas && h("div", {
      class: "bh-dialog__footer"
    }, h("div", {
      class: "bh-dialog__footer--ctas"
    }, (_c = (_b = this._ctas) === null || _b === void 0 ? void 0 : _b.slice(0, 3)) === null || _c === void 0 ? void 0 : _c.map((cta) => {
      var _a2;
      return h(Components.button, {
        style: {
          width: cta.fluid ? `${100 / ((_a2 = this._ctas) === null || _a2 === void 0 ? void 0 : _a2.slice(0, 3).length)}%` : ""
        },
        class: `bh-dialog__footer--cta`,
        "data-key": cta.key,
        isSmall: cta.size === "medium" ? false : true,
        isFluid: cta.fluid,
        type: cta.type,
        label: cta.label,
        leftIcon: cta.leftIcon,
        rightIcon: cta.rightIcon,
        isDisabled: cta.isDisabled,
        isLoading: cta.isLoading,
        onClick: () => {
          if (cta.isDisabled) return;
          this.onCtaClick(cta.key);
        }
      });
    })))), h("div", {
      key: "484322dc77c86871c8cfb6bd38be263d0e65d2cd",
      class: `bh-dialog__backdrop ${this.isOpen ? "open" : "close"}`,
      onClick: () => {
        if (this.isDismissible) {
          this.closeDialog();
        }
      }
    })));
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
BhDialog.style = BhDialogStyle0;
export {
  BhDialog as bh_dialog
};
//# sourceMappingURL=bh-dialog.entry-R7M47EHE.js.map
