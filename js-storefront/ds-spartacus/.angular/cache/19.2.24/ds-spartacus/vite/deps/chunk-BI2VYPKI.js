import {
  ControllerMixin,
  getAncestorRootNodes,
  getDeepActiveElement,
  getFocusableElements,
  i$3,
  isElementFocused,
  isIOS,
  isKeyboardActive,
  registerStyles
} from "./chunk-FPZAVM6P.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/virtual-keyboard-controller-a5ee9eab.js
var instances = [];
var FocusTrapController = class {
  /**
   * @param {HTMLElement} host
   */
  constructor(host) {
    this.host = host;
    this.__trapNode = null;
    this.__onKeyDown = this.__onKeyDown.bind(this);
  }
  /**
   * An array of tab-ordered focusable elements inside the trap node.
   *
   * @return {HTMLElement[]}
   * @private
   */
  get __focusableElements() {
    return getFocusableElements(this.__trapNode);
  }
  /**
   * The index of the element inside the trap node that currently has focus.
   *
   * @return {HTMLElement | undefined}
   * @private
   */
  get __focusedElementIndex() {
    const focusableElements = this.__focusableElements;
    return focusableElements.indexOf(focusableElements.filter(isElementFocused).pop());
  }
  hostConnected() {
    document.addEventListener("keydown", this.__onKeyDown);
  }
  hostDisconnected() {
    document.removeEventListener("keydown", this.__onKeyDown);
  }
  /**
   * Activates a focus trap for a DOM node that will prevent focus from escaping the node.
   * The trap can be deactivated with the `.releaseFocus()` method.
   *
   * If focus is initially outside the trap, the method will move focus inside,
   * on the first focusable element of the trap in the tab order.
   * The first focusable element can be the trap node itself if it is focusable
   * and comes first in the tab order.
   *
   * If there are no focusable elements, the method will throw an exception
   * and the trap will not be set.
   *
   * @param {HTMLElement} trapNode
   */
  trapFocus(trapNode) {
    this.__trapNode = trapNode;
    if (this.__focusableElements.length === 0) {
      this.__trapNode = null;
      throw new Error("The trap node should have at least one focusable descendant or be focusable itself.");
    }
    instances.push(this);
    if (this.__focusedElementIndex === -1) {
      this.__focusableElements[0].focus();
    }
  }
  /**
   * Deactivates the focus trap set with the `.trapFocus()` method
   * so that it becomes possible to tab outside the trap node.
   */
  releaseFocus() {
    this.__trapNode = null;
    instances.pop();
  }
  /**
   * A `keydown` event handler that manages tabbing navigation when the trap is enabled.
   *
   * - Moves focus to the next focusable element of the trap on `Tab` press.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element of the trap on `Shift+Tab` press.
   * When no prev element to focus, the method moves focus to the last focusable element.
   *
   * @param {KeyboardEvent} event
   * @private
   */
  __onKeyDown(event) {
    if (!this.__trapNode) {
      return;
    }
    if (this !== Array.from(instances).pop()) {
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const backward = event.shiftKey;
      this.__focusNextElement(backward);
    }
  }
  /**
   * - Moves focus to the next focusable element if `backward === false`.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element if `backward === true`.
   * When no prev element to focus the method moves focus to the last focusable element.
   *
   * If no focusable elements, the method returns immediately.
   *
   * @param {boolean} backward
   * @private
   */
  __focusNextElement(backward = false) {
    const focusableElements = this.__focusableElements;
    const step = backward ? -1 : 1;
    const currentIndex = this.__focusedElementIndex;
    const nextIndex = (focusableElements.length + currentIndex + step) % focusableElements.length;
    const element = focusableElements[nextIndex];
    element.focus();
    if (element.localName === "input") {
      element.select();
    }
  }
};
var FocusRestorationController = class {
  /**
   * Saves the given node as a target for restoring focus to
   * when `restoreFocus()` is called. If no node is provided,
   * the currently focused node in the DOM is saved as a target.
   *
   * @param {Node | null | undefined} focusNode
   */
  saveFocus(focusNode) {
    this.focusNode = focusNode || getDeepActiveElement();
  }
  /**
   * Restores focus to the target node that was saved previously with `saveFocus()`.
   */
  restoreFocus(options) {
    const focusNode = this.focusNode;
    if (!focusNode) {
      return;
    }
    const preventScroll = options ? options.preventScroll : false;
    if (getDeepActiveElement() === document.body) {
      setTimeout(() => focusNode.focus({
        preventScroll
      }));
    } else {
      focusNode.focus({
        preventScroll
      });
    }
    this.focusNode = null;
  }
};
var overlay = i$3`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;
registerStyles("", overlay, {
  moduleId: "lumo-overlay"
});
var menuOverlayCore = i$3`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;
registerStyles("", menuOverlayCore, {
  moduleId: "lumo-menu-overlay-core"
});
var menuOverlayExt = i$3`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 450px), (max-height: 450px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`;
var menuOverlay = [overlay, menuOverlayCore, menuOverlayExt];
registerStyles("", menuOverlay, {
  moduleId: "lumo-menu-overlay"
});
var overlayStyles = i$3`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;
var scheduled = false;
var beforeRenderQueue = [];
var afterRenderQueue = [];
function schedule() {
  scheduled = true;
  requestAnimationFrame(function() {
    scheduled = false;
    flushQueue(beforeRenderQueue);
    setTimeout(function() {
      runQueue(afterRenderQueue);
    });
  });
}
function flushQueue(queue) {
  while (queue.length) {
    callMethod(queue.shift());
  }
}
function runQueue(queue) {
  for (let i = 0, l = queue.length; i < l; i++) {
    callMethod(queue.shift());
  }
}
function callMethod(info) {
  const context = info[0];
  const callback = info[1];
  const args = info[2];
  try {
    callback.apply(context, args);
  } catch (e) {
    setTimeout(() => {
      throw e;
    });
  }
}
function afterNextRender(context, callback, args) {
  if (!scheduled) {
    schedule();
  }
  afterRenderQueue.push([context, callback, args]);
}
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var isElement = (node) => node && node.nodeType === Node.ELEMENT_NODE;
var logError = (...args) => {
  console.error(`Error: ${args.join(" ")}. Skip setting aria-hidden.`);
};
var correctTargets = (parent, targets) => {
  if (!isElement(parent)) {
    logError(parent, "is not a valid element");
    return [];
  }
  return targets.map((target) => {
    if (!isElement(target)) {
      logError(target, "is not a valid element");
      return null;
    }
    let node = target;
    while (node && node !== parent) {
      if (parent.contains(node)) {
        return target;
      }
      node = node.getRootNode().host;
    }
    logError(target, "is not contained inside", parent);
    return null;
  }).filter((x) => Boolean(x));
};
var applyAttributeToOthers = (originalTarget, parentNode, markerName, controlAttribute) => {
  const targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  const hiddenNodes = [];
  const elementsToKeep = /* @__PURE__ */ new Set();
  const elementsToStop = new Set(targets);
  const keep = (el) => {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    const slot = el.assignedSlot;
    if (slot) {
      keep(slot);
    }
    keep(el.parentNode || el.host);
  };
  targets.forEach(keep);
  const deep = (parent) => {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    const root = parent.shadowRoot;
    const children = root ? [...parent.children, ...root.children] : [...parent.children];
    children.forEach((node) => {
      if (["template", "script", "style"].includes(node.localName)) {
        return;
      }
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr = node.getAttribute(controlAttribute);
        const alreadyHidden = attr !== null && attr !== "false";
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount += 1;
  return () => {
    hiddenNodes.forEach((node) => {
      const counterValue = counterMap.get(node) - 1;
      const markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (uncontrolledNodes.has(node)) {
          uncontrolledNodes.delete(node);
        } else {
          node.removeAttribute(controlAttribute);
        }
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount -= 1;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = (originalTarget, parentNode = document.body, markerName = "data-aria-hidden") => {
  const targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (parentNode) {
    targets.push(...Array.from(parentNode.querySelectorAll("[aria-live]")));
  }
  return applyAttributeToOthers(targets, parentNode, markerName, "aria-hidden");
};
var AriaModalController = class {
  /**
   * @param {HTMLElement} host
   */
  constructor(host, callback) {
    this.host = host;
    this.callback = typeof callback === "function" ? callback : () => host;
  }
  /**
   * Make the controller host modal by hiding other elements from screen readers
   * using `aria-hidden` attribute (can be replaced with `inert` in the future).
   *
   * The method name is chosen to align with the one provided by native `<dialog>`:
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
   */
  showModal() {
    const targets = this.callback();
    this.__showOthers = hideOthers(targets);
  }
  /**
   * Remove `aria-hidden` from other elements unless there are any other
   * controller hosts on the page activated by using `showModal()` call.
   */
  close() {
    if (this.__showOthers) {
      this.__showOthers();
      this.__showOthers = null;
    }
  }
};
var OverlayFocusMixin = (superClass) => class OverlayFocusMixin extends ControllerMixin(superClass) {
  static get properties() {
    return {
      /**
       * When true, opening the overlay moves focus to the first focusable child,
       * or to the overlay part with tabindex if there are no focusable children.
       * @attr {boolean} focus-trap
       */
      focusTrap: {
        type: Boolean,
        value: false
      },
      /**
       * Set to true to enable restoring of focus when overlay is closed.
       * @attr {boolean} restore-focus-on-close
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },
      /**
       * Set to specify the element which should be focused on overlay close,
       * if `restoreFocusOnClose` is set to true.
       * @type {HTMLElement}
       */
      restoreFocusNode: {
        type: HTMLElement
      }
    };
  }
  constructor() {
    super();
    this.__ariaModalController = new AriaModalController(this);
    this.__focusTrapController = new FocusTrapController(this);
    this.__focusRestorationController = new FocusRestorationController();
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(this.__ariaModalController);
    this.addController(this.__focusTrapController);
    this.addController(this.__focusRestorationController);
  }
  /**
   * Release focus and restore focus after the overlay is closed.
   *
   * @protected
   */
  _resetFocus() {
    if (this.focusTrap) {
      this.__ariaModalController.close();
      this.__focusTrapController.releaseFocus();
    }
    if (this.restoreFocusOnClose && this._shouldRestoreFocus()) {
      const preventScroll = !isKeyboardActive();
      this.__focusRestorationController.restoreFocus({
        preventScroll
      });
    }
  }
  /**
   * Save the previously focused node when the overlay starts to open.
   *
   * @protected
   */
  _saveFocus() {
    if (this.restoreFocusOnClose) {
      this.__focusRestorationController.saveFocus(this.restoreFocusNode);
    }
  }
  /**
   * Trap focus within the overlay after opening has completed.
   *
   * @protected
   */
  _trapFocus() {
    if (this.focusTrap) {
      this.__ariaModalController.showModal();
      this.__focusTrapController.trapFocus(this.$.overlay);
    }
  }
  /**
   * Returns true if focus is still inside the overlay or on the body element,
   * otherwise false.
   *
   * Focus shouldn't be restored if it's been moved elsewhere by another
   * component or as a result of a user interaction e.g. the user clicked
   * on a button outside the overlay while the overlay was open.
   *
   * @protected
   * @return {boolean}
   */
  _shouldRestoreFocus() {
    const activeElement = getDeepActiveElement();
    return activeElement === document.body || this._deepContains(activeElement);
  }
  /**
   * Returns true if the overlay contains the given node,
   * including those within shadow DOM trees.
   *
   * @param {Node} node
   * @return {boolean}
   * @protected
   */
  _deepContains(node) {
    if (this.contains(node)) {
      return true;
    }
    let n = node;
    const doc = node.ownerDocument;
    while (n && n !== doc && n !== this) {
      n = n.parentNode || n.host;
    }
    return n === this;
  }
};
var getAttachedInstances = () => Array.from(document.body.children).filter((el) => el instanceof HTMLElement && el._hasOverlayStackMixin && !el.hasAttribute("closing")).sort((a, b) => a.__zIndex - b.__zIndex || 0);
var getOverlayInstances = () => getAttachedInstances().filter((el) => el.$.overlay);
var isLastOverlay = (overlay2, filter = (_overlay) => true) => {
  const filteredOverlays = getOverlayInstances().filter(filter);
  return overlay2 === filteredOverlays.pop();
};
var overlayMap = /* @__PURE__ */ new WeakMap();
var OverlayStackMixin = (superClass) => class OverlayStackMixin extends superClass {
  constructor() {
    super();
    this._hasOverlayStackMixin = true;
  }
  /**
   * Returns true if this is the last one in the opened overlays stack.
   *
   * @return {boolean}
   * @protected
   */
  get _last() {
    return isLastOverlay(this);
  }
  /**
   * Brings the overlay as visually the frontmost one.
   */
  bringToFront() {
    let zIndex = "";
    const frontmost = getAttachedInstances().filter((o) => o !== this).pop();
    if (frontmost) {
      const frontmostZIndex = frontmost.__zIndex;
      zIndex = frontmostZIndex + 1;
    }
    this.style.zIndex = zIndex;
    this.__zIndex = zIndex || parseFloat(getComputedStyle(this).zIndex);
    if (overlayMap.has(this)) {
      overlayMap.get(this).bringToFront();
    }
  }
  /** @protected */
  _enterModalState() {
    if (document.body.style.pointerEvents !== "none") {
      this._previousDocumentPointerEvents = document.body.style.pointerEvents;
      document.body.style.pointerEvents = "none";
    }
    getOverlayInstances().forEach((el) => {
      if (el !== this) {
        el.$.overlay.style.pointerEvents = "none";
      }
    });
  }
  /** @protected */
  _exitModalState() {
    if (this._previousDocumentPointerEvents !== void 0) {
      document.body.style.pointerEvents = this._previousDocumentPointerEvents;
      delete this._previousDocumentPointerEvents;
    }
    const instances2 = getOverlayInstances();
    let el;
    while (el = instances2.pop()) {
      if (el === this) {
        continue;
      }
      el.$.overlay.style.removeProperty("pointer-events");
      if (!el.modeless) {
        break;
      }
    }
  }
};
var OverlayMixin = (superClass) => class OverlayMixin extends OverlayFocusMixin(OverlayStackMixin(superClass)) {
  static get properties() {
    return {
      /**
       * When true, the overlay is visible and attached to body.
       */
      opened: {
        type: Boolean,
        notify: true,
        observer: "_openedChanged",
        reflectToAttribute: true,
        sync: true
      },
      /**
       * Owner element passed with renderer function
       * @type {HTMLElement}
       */
      owner: {
        type: Object,
        sync: true
      },
      /**
       * Object with properties that is passed to `renderer` function
       */
      model: {
        type: Object,
        sync: true
      },
      /**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       * @type {OverlayRenderer | null | undefined}
       */
      renderer: {
        type: Object,
        sync: true
      },
      /**
       * When true the overlay won't disable the main content, showing
       * it doesn't change the functionality of the user interface.
       * @type {boolean}
       */
      modeless: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_modelessChanged",
        sync: true
      },
      /**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       * @type {boolean}
       */
      hidden: {
        type: Boolean,
        reflectToAttribute: true,
        observer: "_hiddenChanged",
        sync: true
      },
      /**
       * When true the overlay has backdrop on top of content when opened.
       * @type {boolean}
       */
      withBackdrop: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_rendererOrDataChanged(renderer, owner, model, opened)"];
  }
  constructor() {
    super();
    this._boundMouseDownListener = this._mouseDownListener.bind(this);
    this._boundMouseUpListener = this._mouseUpListener.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
    this._boundKeydownListener = this._keydownListener.bind(this);
    if (isIOS) {
      this._boundIosResizeListener = () => this._detectIosNavbar();
    }
  }
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("click", () => {
    });
    this.$.backdrop.addEventListener("click", () => {
    });
    this.addEventListener("mouseup", () => {
      if (document.activeElement === document.body && this.$.overlay.getAttribute("tabindex") === "0") {
        this.$.overlay.focus();
      }
    });
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this._boundIosResizeListener) {
      this._detectIosNavbar();
      window.addEventListener("resize", this._boundIosResizeListener);
    }
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._boundIosResizeListener) {
      window.removeEventListener("resize", this._boundIosResizeListener);
    }
  }
  /**
   * Requests an update for the content of the overlay.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    if (this.renderer) {
      this.renderer.call(this.owner, this, this.owner, this.model);
    }
  }
  /**
   * @param {Event=} sourceEvent
   */
  close(sourceEvent) {
    const evt = new CustomEvent("vaadin-overlay-close", {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent
      }
    });
    this.dispatchEvent(evt);
    if (!evt.defaultPrevented) {
      this.opened = false;
    }
  }
  /** @private */
  _detectIosNavbar() {
    if (!this.opened) {
      return;
    }
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const landscape = innerWidth > innerHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (landscape && clientHeight > innerHeight) {
      this.style.setProperty("--vaadin-overlay-viewport-bottom", `${clientHeight - innerHeight}px`);
    } else {
      this.style.setProperty("--vaadin-overlay-viewport-bottom", "0");
    }
  }
  /** @private */
  _addGlobalListeners() {
    document.addEventListener("mousedown", this._boundMouseDownListener);
    document.addEventListener("mouseup", this._boundMouseUpListener);
    document.documentElement.addEventListener("click", this._boundOutsideClickListener, true);
  }
  /** @private */
  _removeGlobalListeners() {
    document.removeEventListener("mousedown", this._boundMouseDownListener);
    document.removeEventListener("mouseup", this._boundMouseUpListener);
    document.documentElement.removeEventListener("click", this._boundOutsideClickListener, true);
  }
  /** @private */
  _rendererOrDataChanged(renderer, owner, model, opened) {
    const ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
    this._oldModel = model;
    this._oldOwner = owner;
    const rendererChanged = this._oldRenderer !== renderer;
    const hasOldRenderer = this._oldRenderer !== void 0;
    this._oldRenderer = renderer;
    const openedChanged = this._oldOpened !== opened;
    this._oldOpened = opened;
    if (rendererChanged && hasOldRenderer) {
      this.innerHTML = "";
      delete this._$litPart$;
    }
    if (opened && renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
      this.requestContentUpdate();
    }
  }
  /** @private */
  _modelessChanged(modeless) {
    if (!modeless) {
      if (this.opened) {
        this._addGlobalListeners();
        this._enterModalState();
      }
    } else {
      this._removeGlobalListeners();
      this._exitModalState();
    }
  }
  /** @private */
  _openedChanged(opened, wasOpened) {
    if (opened) {
      this._saveFocus();
      this._animatedOpening();
      afterNextRender(this, () => {
        this._trapFocus();
        const evt = new CustomEvent("vaadin-overlay-open", {
          bubbles: true
        });
        this.dispatchEvent(evt);
      });
      document.addEventListener("keydown", this._boundKeydownListener);
      if (!this.modeless) {
        this._addGlobalListeners();
      }
    } else if (wasOpened) {
      this._resetFocus();
      this._animatedClosing();
      document.removeEventListener("keydown", this._boundKeydownListener);
      if (!this.modeless) {
        this._removeGlobalListeners();
      }
    }
  }
  /** @private */
  _hiddenChanged(hidden) {
    if (hidden && this.hasAttribute("closing")) {
      this._flushAnimation("closing");
    }
  }
  /**
   * @return {boolean}
   * @private
   */
  _shouldAnimate() {
    const style = getComputedStyle(this);
    const name = style.getPropertyValue("animation-name");
    const hidden = style.getPropertyValue("display") === "none";
    return !hidden && name && name !== "none";
  }
  /**
   * @param {string} type
   * @param {Function} callback
   * @private
   */
  _enqueueAnimation(type, callback) {
    const handler = `__${type}Handler`;
    const listener = (event) => {
      if (event && event.target !== this) {
        return;
      }
      callback();
      this.removeEventListener("animationend", listener);
      delete this[handler];
    };
    this[handler] = listener;
    this.addEventListener("animationend", listener);
  }
  /**
   * @param {string} type
   * @protected
   */
  _flushAnimation(type) {
    const handler = `__${type}Handler`;
    if (typeof this[handler] === "function") {
      this[handler]();
    }
  }
  /** @private */
  _animatedOpening() {
    if (this.parentNode === document.body && this.hasAttribute("closing")) {
      this._flushAnimation("closing");
    }
    this._attachOverlay();
    if (!this.modeless) {
      this._enterModalState();
    }
    this.setAttribute("opening", "");
    if (this._shouldAnimate()) {
      this._enqueueAnimation("opening", () => {
        this._finishOpening();
      });
    } else {
      this._finishOpening();
    }
  }
  /** @private */
  _attachOverlay() {
    this._placeholder = document.createComment("vaadin-overlay-placeholder");
    this.parentNode.insertBefore(this._placeholder, this);
    document.body.appendChild(this);
    this.bringToFront();
  }
  /** @private */
  _finishOpening() {
    this.removeAttribute("opening");
  }
  /** @private */
  _finishClosing() {
    this._detachOverlay();
    this.$.overlay.style.removeProperty("pointer-events");
    this.removeAttribute("closing");
    this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"));
  }
  /** @private */
  _animatedClosing() {
    if (this.hasAttribute("opening")) {
      this._flushAnimation("opening");
    }
    if (this._placeholder) {
      this._exitModalState();
      this.setAttribute("closing", "");
      this.dispatchEvent(new CustomEvent("vaadin-overlay-closing"));
      if (this._shouldAnimate()) {
        this._enqueueAnimation("closing", () => {
          this._finishClosing();
        });
      } else {
        this._finishClosing();
      }
    }
  }
  /** @private */
  _detachOverlay() {
    this._placeholder.parentNode.insertBefore(this, this._placeholder);
    this._placeholder.parentNode.removeChild(this._placeholder);
  }
  /** @private */
  _mouseDownListener(event) {
    this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }
  /** @private */
  _mouseUpListener(event) {
    this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }
  /**
   * Whether to close the overlay on outside click or not.
   * Override this method to customize the closing logic.
   *
   * @param {Event} _event
   * @return {boolean}
   * @protected
   */
  _shouldCloseOnOutsideClick(_event) {
    return this._last;
  }
  /**
   * Outside click listener used in capture phase to close the overlay before
   * propagating the event to the listener on the element that triggered it.
   * Otherwise, calling `open()` would result in closing and re-opening.
   *
   * @private
   */
  _outsideClickListener(event) {
    if (event.composedPath().includes(this.$.overlay) || this._mouseDownInside || this._mouseUpInside) {
      this._mouseDownInside = false;
      this._mouseUpInside = false;
      return;
    }
    if (!this._shouldCloseOnOutsideClick(event)) {
      return;
    }
    const evt = new CustomEvent("vaadin-overlay-outside-click", {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: event
      }
    });
    this.dispatchEvent(evt);
    if (this.opened && !evt.defaultPrevented) {
      this.close(event);
    }
  }
  /**
   * Listener used to close whe overlay on Escape press, if it is the last one.
   * @private
   */
  _keydownListener(event) {
    if (!this._last) {
      return;
    }
    if (this.modeless && !event.composedPath().includes(this.$.overlay)) {
      return;
    }
    if (event.key === "Escape") {
      const evt = new CustomEvent("vaadin-overlay-escape-press", {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);
      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
  }
};
function observeMove(element, callback) {
  let io = null;
  const root = document.documentElement;
  function cleanup() {
    io && io.disconnect();
    io = null;
  }
  function refresh(skip = false, threshold = 1) {
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      callback();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = Math.floor(top);
    const insetRight = Math.floor(root.clientWidth - (left + width));
    const insetBottom = Math.floor(root.clientHeight - (top + height));
    const insetLeft = Math.floor(left);
    const rootMargin = `${-insetTop}px ${-insetRight}px ${-insetBottom}px ${-insetLeft}px`;
    const options = {
      rootMargin,
      threshold: Math.max(0, Math.min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      let ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (ratio === 0) {
          ratio = 1e-7;
        }
        refresh(false, ratio);
      }
      isFirstUpdate = false;
    }
    io = new IntersectionObserver(handleObserve, options);
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
var PROP_NAMES_VERTICAL = {
  start: "top",
  end: "bottom"
};
var PROP_NAMES_HORIZONTAL = {
  start: "left",
  end: "right"
};
var targetResizeObserver = new ResizeObserver((entries) => {
  setTimeout(() => {
    entries.forEach((entry) => {
      if (entry.target.__overlay) {
        entry.target.__overlay._updatePosition();
      }
    });
  });
});
var PositionMixin = (superClass) => class PositionMixin extends superClass {
  static get properties() {
    return {
      /**
       * The element next to which this overlay should be aligned.
       * The position of the overlay relative to the positionTarget can be adjusted
       * with properties `horizontalAlign`, `verticalAlign`, `noHorizontalOverlap`
       * and `noVerticalOverlap`.
       */
      positionTarget: {
        type: Object,
        value: null,
        sync: true
      },
      /**
       * When `positionTarget` is set, this property defines whether to align the overlay's
       * left or right side to the target element by default.
       * Possible values are `start` and `end`.
       * RTL is taken into account when interpreting the value.
       * The overlay is automatically flipped to the opposite side when it doesn't fit into
       * the default side defined by this property.
       *
       * @attr {start|end} horizontal-align
       */
      horizontalAlign: {
        type: String,
        value: "start",
        sync: true
      },
      /**
       * When `positionTarget` is set, this property defines whether to align the overlay's
       * top or bottom side to the target element by default.
       * Possible values are `top` and `bottom`.
       * The overlay is automatically flipped to the opposite side when it doesn't fit into
       * the default side defined by this property.
       *
       * @attr {top|bottom} vertical-align
       */
      verticalAlign: {
        type: String,
        value: "top",
        sync: true
      },
      /**
       * When `positionTarget` is set, this property defines whether the overlay should overlap
       * the target element in the x-axis, or be positioned right next to it.
       *
       * @attr {boolean} no-horizontal-overlap
       */
      noHorizontalOverlap: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * When `positionTarget` is set, this property defines whether the overlay should overlap
       * the target element in the y-axis, or be positioned right above/below it.
       *
       * @attr {boolean} no-vertical-overlap
       */
      noVerticalOverlap: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * If the overlay content has no intrinsic height, this property can be used to set
       * the minimum vertical space (in pixels) required by the overlay. Setting a value to
       * the property effectively disables the content measurement in favor of using this
       * fixed value for determining the open direction.
       *
       * @attr {number} required-vertical-space
       */
      requiredVerticalSpace: {
        type: Number,
        value: 0,
        sync: true
      }
    };
  }
  static get observers() {
    return ["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)", "__overlayOpenedChanged(opened, positionTarget)"];
  }
  constructor() {
    super();
    this.__onScroll = this.__onScroll.bind(this);
    this._updatePosition = this._updatePosition.bind(this);
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this.opened) {
      this.__addUpdatePositionEventListeners();
    }
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__removeUpdatePositionEventListeners();
  }
  /** @private */
  __addUpdatePositionEventListeners() {
    window.visualViewport.addEventListener("resize", this._updatePosition);
    window.visualViewport.addEventListener("scroll", this.__onScroll, true);
    this.__positionTargetAncestorRootNodes = getAncestorRootNodes(this.positionTarget);
    this.__positionTargetAncestorRootNodes.forEach((node) => {
      node.addEventListener("scroll", this.__onScroll, true);
    });
    if (this.positionTarget) {
      this.__observePositionTargetMove = observeMove(this.positionTarget, () => {
        this._updatePosition();
      });
    }
  }
  /** @private */
  __removeUpdatePositionEventListeners() {
    window.visualViewport.removeEventListener("resize", this._updatePosition);
    window.visualViewport.removeEventListener("scroll", this.__onScroll, true);
    if (this.__positionTargetAncestorRootNodes) {
      this.__positionTargetAncestorRootNodes.forEach((node) => {
        node.removeEventListener("scroll", this.__onScroll, true);
      });
      this.__positionTargetAncestorRootNodes = null;
    }
    if (this.__observePositionTargetMove) {
      this.__observePositionTargetMove();
      this.__observePositionTargetMove = null;
    }
  }
  /** @private */
  __overlayOpenedChanged(opened, positionTarget) {
    this.__removeUpdatePositionEventListeners();
    if (positionTarget) {
      positionTarget.__overlay = null;
      targetResizeObserver.unobserve(positionTarget);
      if (opened) {
        this.__addUpdatePositionEventListeners();
        positionTarget.__overlay = this;
        targetResizeObserver.observe(positionTarget);
      }
    }
    if (opened) {
      const computedStyle = getComputedStyle(this);
      if (!this.__margins) {
        this.__margins = {};
        ["top", "bottom", "left", "right"].forEach((propName) => {
          this.__margins[propName] = parseInt(computedStyle[propName], 10);
        });
      }
      this._updatePosition();
      requestAnimationFrame(() => this._updatePosition());
    }
  }
  __positionSettingsChanged() {
    this._updatePosition();
  }
  /** @private */
  __onScroll(e) {
    if (e.target instanceof Node && this.contains(e.target)) {
      return;
    }
    this._updatePosition();
  }
  _updatePosition() {
    if (!this.positionTarget || !this.opened || !this.__margins) {
      return;
    }
    const targetRect = this.positionTarget.getBoundingClientRect();
    if (targetRect.width === 0 && targetRect.height === 0 && this.opened) {
      this.opened = false;
      return;
    }
    const shouldAlignStartVertically = this.__shouldAlignStartVertically(targetRect);
    this.style.justifyContent = shouldAlignStartVertically ? "flex-start" : "flex-end";
    const isRTL = this.__isRTL;
    const shouldAlignStartHorizontally = this.__shouldAlignStartHorizontally(targetRect, isRTL);
    const flexStart = !isRTL && shouldAlignStartHorizontally || isRTL && !shouldAlignStartHorizontally;
    this.style.alignItems = flexStart ? "flex-start" : "flex-end";
    const overlayRect = this.getBoundingClientRect();
    const verticalProps = this.__calculatePositionInOneDimension(targetRect, overlayRect, this.noVerticalOverlap, PROP_NAMES_VERTICAL, this, shouldAlignStartVertically);
    const horizontalProps = this.__calculatePositionInOneDimension(targetRect, overlayRect, this.noHorizontalOverlap, PROP_NAMES_HORIZONTAL, this, shouldAlignStartHorizontally);
    Object.assign(this.style, verticalProps, horizontalProps);
    this.toggleAttribute("bottom-aligned", !shouldAlignStartVertically);
    this.toggleAttribute("top-aligned", shouldAlignStartVertically);
    this.toggleAttribute("end-aligned", !flexStart);
    this.toggleAttribute("start-aligned", flexStart);
  }
  __shouldAlignStartHorizontally(targetRect, rtl) {
    const contentWidth = Math.max(this.__oldContentWidth || 0, this.$.overlay.offsetWidth);
    this.__oldContentWidth = this.$.overlay.offsetWidth;
    const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    const defaultAlignLeft = !rtl && this.horizontalAlign === "start" || rtl && this.horizontalAlign === "end";
    return this.__shouldAlignStart(targetRect, contentWidth, viewportWidth, this.__margins, defaultAlignLeft, this.noHorizontalOverlap, PROP_NAMES_HORIZONTAL);
  }
  __shouldAlignStartVertically(targetRect) {
    const contentHeight = this.requiredVerticalSpace || Math.max(this.__oldContentHeight || 0, this.$.overlay.offsetHeight);
    this.__oldContentHeight = this.$.overlay.offsetHeight;
    const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
    const defaultAlignTop = this.verticalAlign === "top";
    return this.__shouldAlignStart(targetRect, contentHeight, viewportHeight, this.__margins, defaultAlignTop, this.noVerticalOverlap, PROP_NAMES_VERTICAL);
  }
  // eslint-disable-next-line @typescript-eslint/max-params
  __shouldAlignStart(targetRect, contentSize, viewportSize, margins, defaultAlignStart, noOverlap, propNames) {
    const spaceForStartAlignment = viewportSize - targetRect[noOverlap ? propNames.end : propNames.start] - margins[propNames.end];
    const spaceForEndAlignment = targetRect[noOverlap ? propNames.start : propNames.end] - margins[propNames.start];
    const spaceForDefaultAlignment = defaultAlignStart ? spaceForStartAlignment : spaceForEndAlignment;
    const spaceForOtherAlignment = defaultAlignStart ? spaceForEndAlignment : spaceForStartAlignment;
    const shouldGoToDefaultSide = spaceForDefaultAlignment > spaceForOtherAlignment || spaceForDefaultAlignment > contentSize;
    return defaultAlignStart === shouldGoToDefaultSide;
  }
  /**
   * Returns an adjusted value after resizing the browser window,
   * to avoid wrong calculations when e.g. previously set `bottom`
   * CSS property value is larger than the updated viewport height.
   * See https://github.com/vaadin/web-components/issues/4604
   */
  __adjustBottomProperty(cssPropNameToSet, propNames, currentValue) {
    let adjustedProp;
    if (cssPropNameToSet === propNames.end) {
      if (propNames.end === PROP_NAMES_VERTICAL.end) {
        const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        if (currentValue > viewportHeight && this.__oldViewportHeight) {
          const heightDiff = this.__oldViewportHeight - viewportHeight;
          adjustedProp = currentValue - heightDiff;
        }
        this.__oldViewportHeight = viewportHeight;
      }
      if (propNames.end === PROP_NAMES_HORIZONTAL.end) {
        const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        if (currentValue > viewportWidth && this.__oldViewportWidth) {
          const widthDiff = this.__oldViewportWidth - viewportWidth;
          adjustedProp = currentValue - widthDiff;
        }
        this.__oldViewportWidth = viewportWidth;
      }
    }
    return adjustedProp;
  }
  /**
   * Returns an object with CSS position properties to set,
   * e.g. { top: "100px" }
   */
  // eslint-disable-next-line @typescript-eslint/max-params
  __calculatePositionInOneDimension(targetRect, overlayRect, noOverlap, propNames, overlay2, shouldAlignStart) {
    const cssPropNameToSet = shouldAlignStart ? propNames.start : propNames.end;
    const cssPropNameToClear = shouldAlignStart ? propNames.end : propNames.start;
    const currentValue = parseFloat(overlay2.style[cssPropNameToSet] || getComputedStyle(overlay2)[cssPropNameToSet]);
    const adjustedValue = this.__adjustBottomProperty(cssPropNameToSet, propNames, currentValue);
    const diff = overlayRect[shouldAlignStart ? propNames.start : propNames.end] - targetRect[noOverlap === shouldAlignStart ? propNames.end : propNames.start];
    const valueToSet = adjustedValue ? `${adjustedValue}px` : `${currentValue + diff * (shouldAlignStart ? -1 : 1)}px`;
    return {
      [cssPropNameToSet]: valueToSet,
      [cssPropNameToClear]: ""
    };
  }
};
var OverlayClassMixin = (superclass) => class OverlayClassMixinClass extends superclass {
  static get properties() {
    return {
      /**
       * A space-delimited list of CSS class names to set on the overlay element.
       * This property does not affect other CSS class names set manually via JS.
       *
       * Note, if the CSS class name was set with this property, clearing it will
       * remove it from the overlay, even if the same class name was also added
       * manually, e.g. by using `classList.add()` in the `renderer` function.
       *
       * @attr {string} overlay-class
       */
      overlayClass: {
        type: String
      },
      /**
       * An overlay element on which CSS class names are set.
       *
       * @protected
       */
      _overlayElement: {
        type: Object
      }
    };
  }
  static get observers() {
    return ["__updateOverlayClassNames(overlayClass, _overlayElement)"];
  }
  /** @private */
  __updateOverlayClassNames(overlayClass, overlayElement) {
    if (!overlayElement) {
      return;
    }
    if (overlayClass === void 0) {
      return;
    }
    const {
      classList
    } = overlayElement;
    if (!this.__initialClasses) {
      this.__initialClasses = new Set(classList);
    }
    if (Array.isArray(this.__previousClasses)) {
      const classesToRemove = this.__previousClasses.filter((name) => !this.__initialClasses.has(name));
      if (classesToRemove.length > 0) {
        classList.remove(...classesToRemove);
      }
    }
    const classesToAdd = typeof overlayClass === "string" ? overlayClass.split(" ").filter(Boolean) : [];
    if (classesToAdd.length > 0) {
      classList.add(...classesToAdd);
    }
    this.__previousClasses = classesToAdd;
  }
};
var VirtualKeyboardController = class {
  /**
   * @param {{ inputElement?: HTMLElement; opened: boolean } & HTMLElement} host
   */
  constructor(host) {
    this.host = host;
    host.addEventListener("opened-changed", () => {
      if (!host.opened) {
        this.__setVirtualKeyboardEnabled(false);
      }
    });
    host.addEventListener("blur", () => this.__setVirtualKeyboardEnabled(true));
    host.addEventListener("touchstart", () => this.__setVirtualKeyboardEnabled(true));
  }
  /** @private */
  __setVirtualKeyboardEnabled(value) {
    if (this.host.inputElement) {
      this.host.inputElement.inputMode = value ? "" : "none";
    }
  }
};

export {
  overlay,
  menuOverlayCore,
  menuOverlay,
  overlayStyles,
  afterNextRender,
  hideOthers,
  OverlayMixin,
  PositionMixin,
  OverlayClassMixin,
  VirtualKeyboardController
};
/*! Bundled license information:

@bh-digital-solutions/ui-toolkit/dist/esm/virtual-keyboard-controller-a5ee9eab.js:
  (**
   * @license
   * Copyright (c) 2021 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2017 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
  (**
   * @license
   * Copyright (c) 2017 Anton Korzunov
   * SPDX-License-Identifier: MIT
   *)
  (**
   * @license
   * Copyright (c) 2024 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2023 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
//# sourceMappingURL=chunk-BI2VYPKI.js.map
