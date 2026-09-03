import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-avatar.entry.js
var bhAvatarCss = ".bh-avatar{border-radius:100%;display:flex;align-items:center;justify-content:center;position:relative;display:flex;align-items:center;justify-content:center;-webkit-touch-callout:none;cursor:default}@media (hover: hover){.bh-avatar--ring{cursor:pointer}.bh-avatar:hover .bh-avatar__ring{transform:rotate(45deg)}}.bh-avatar:active .bh-avatar__ring,.bh-avatar--active .bh-avatar__ring{transform:rotate(45deg)}.bh-avatar__ring{pointer-events:none}.bh-avatar__initials{background-color:var(--color-fill-avatar-primary);color:var(--color-text-common-inverse-primary);box-sizing:border-box;position:absolute;width:100%;height:100%;border-radius:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-transform:uppercase}.bh-avatar--secondary .bh-avatar__initials{background-color:var(--color-fill-avatar-secondary);color:var(--color-text-common-inverse-primary)}.bh-avatar--tertiary .bh-avatar__initials{background-color:var(--color-fill-avatar-tertiary);color:var(--color-text-common-primary)}.bh-avatar__image{position:absolute;width:100%;height:100%;border-radius:100%;background-size:cover;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;object-fit:cover}.bh-avatar__ring,.bh-avatar__image,.bh-avatar__initials{position:absolute;width:100%;height:100%;border-radius:100%}.bh-avatar--ring.bh-avatar--small .bh-avatar__initials,.bh-avatar--ring.bh-avatar--small .bh-avatar__image{width:var(--avatar-small-ring-width);height:var(--avatar-small-ring-height)}.bh-avatar--ring.bh-avatar--medium .bh-avatar__initials,.bh-avatar--ring.bh-avatar--medium .bh-avatar__image{width:var(--avatar-medium-ring-width);height:var(--avatar-medium-ring-height)}.bh-avatar--ring.bh-avatar--large .bh-avatar__initials,.bh-avatar--ring.bh-avatar--large .bh-avatar__image{width:var(--avatar-large-ring-width);height:var(--avatar-large-ring-height)}.bh-avatar--xsmall{width:24px;height:24px}.bh-avatar--small{width:var(--avatar-small-width);height:var(--avatar-small-height)}.bh-avatar--medium{width:var(--avatar-medium-width);height:var(--avatar-medium-height)}.bh-avatar--large{width:var(--avatar-large-width);height:var(--avatar-large-height)}";
var BhAvatarStyle0 = bhAvatarCss;
var BhAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "medium";
    this.type = "primary";
    this.image = void 0;
    this.firstname = void 0;
    this.lastname = void 0;
    this.isRing = false;
    this.isActive = false;
  }
  render() {
    const avatarClasses = ["bh-avatar"];
    avatarClasses.push(`bh-avatar--${this.size}`);
    if (this.isRing) avatarClasses.push("bh-avatar--ring");
    if (this.isActive) avatarClasses.push("bh-avatar--active");
    avatarClasses.push(`bh-avatar--${this.type}`);
    if (this.size === "small" && this.isRing) avatarClasses.push("typography--avatar-xsmall");
    else if (this.size === "small" && !this.isRing) avatarClasses.push("typography--avatar-small");
    else if (this.size === "medium") avatarClasses.push("typography--avatar-medium");
    else if (this.size === "large") avatarClasses.push("typography--avatar-large");
    const initialClasses = ["bh-avatar__initials"];
    const initials = [];
    this.firstname && initials.push(this.firstname.charAt(0));
    this.lastname && initials.push(this.lastname.charAt(0));
    let hasImage = true;
    if (this.image === void 0) {
      hasImage = false;
    }
    if (this.image === "undefined") {
      hasImage = false;
    }
    if (this.image === null) {
      hasImage = false;
    }
    if (this.image === "") {
      hasImage = false;
    }
    return (
      // Notice that ontouchstart="" is set on the host
      // This is a workaround for the special way ios renders tap events
      // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      h(Host, {
        key: "a85c850575e8435105133bdd14699c74ad9c9ff2",
        class: avatarClasses.join(" "),
        ontouchstart: ""
      }, !hasImage && h("span", {
        class: initialClasses.join(" ")
      }, initials.join("")), hasImage && h("img", {
        class: "bh-avatar__image",
        src: this.image
      }), this.isRing && h("svg", {
        class: "bh-avatar__ring motion--fast",
        width: "44",
        height: "44",
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M1.13475 28.9209C1.28797 29.3825 1.79767 29.6125 2.25248 29.4415C2.70704 29.2706 2.93454 28.7638 2.78299 28.3019C1.27431 23.7036 1.45721 18.7079 3.31695 14.2245C5.28923 9.46975 8.99919 5.64845 13.6918 3.53832C18.3844 1.4282 23.7069 1.18784 28.5761 2.86615C33.1672 4.44861 37.03 7.62471 39.4735 11.8023C39.7191 12.2223 40.2502 12.3885 40.6799 12.1617C41.1094 11.9351 41.2749 11.4019 41.0309 10.9814C38.3772 6.40754 34.1618 2.92978 29.147 1.20128C23.8544 -0.622979 18.069 -0.361714 12.9684 1.9319C7.86773 4.22551 3.83517 8.3791 1.69139 13.5473C-0.339784 18.444 -0.530747 23.9029 1.13475 28.9209ZM42.9721 15.3662C42.8262 14.9025 42.3202 14.6655 41.8627 14.8303C41.4055 14.995 41.17 15.4986 41.3142 15.9625C42.7502 20.5807 42.4885 25.5732 40.5582 30.0306C38.511 34.7576 34.741 38.5276 30.0154 40.5732C25.2899 42.6189 19.9639 42.7864 15.1215 41.0417C10.5556 39.3967 6.74325 36.1682 4.36586 31.9578C4.12686 31.5345 3.59844 31.3611 3.16515 31.582C2.73215 31.8026 2.55821 32.3335 2.79557 32.7573C5.37697 37.3668 9.53716 40.9017 14.5244 42.6985C19.7879 44.5949 25.577 44.4128 30.7134 42.1893C35.8499 39.9658 39.9478 35.868 42.1729 30.7299C44.2812 25.8616 44.5583 20.4062 42.9721 15.3662Z",
        fill: "var(--color-fill-avatar-circumference)"
      })))
    );
  }
};
BhAvatar.style = BhAvatarStyle0;
export {
  BhAvatar as bh_avatar
};
//# sourceMappingURL=bh-avatar.entry-MTUTZC7L.js.map
