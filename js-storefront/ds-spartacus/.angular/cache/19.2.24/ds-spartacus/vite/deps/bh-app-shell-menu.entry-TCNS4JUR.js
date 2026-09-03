import {
  getBreakpoint,
  parseJSONString
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-app-shell-menu.entry.js
var bhAppShellMenuCss = ':root{--color-border-common-primary:#ced7d4;--table-background-color:#ffffff;--color-border-common-secondary:#b8b8b8;--color-border-cta-secondary-default:#adbdb9;--color-border-cta-secondary-hover:#8ca39d;--color-border-cta-secondary-pressed:#748e88;--color-border-cta-secondary-focused:#adbdb9;--color-border-control-unselected:#a0a0a0;--color-border-control-selected:#02a783;--color-border-control-disabled:#adbdb9;--color-border-control-error:#e16e75;--color-border-form-default:#ced7d4;--color-border-form-hover:#adbdb9;--color-border-form-focused:#02a783;--color-border-form-disabled:#adbdb9;--color-border-form-error:#e16e75;--color-border-form-error-hover:#f0373a;--color-border-data-viz-comparison-secondary:#b8b8b8;--color-border-data-viz-comparison-primary:#666eb4;--color-border-data-viz-default-1:#666eb4;--color-border-data-viz-default-2:#4ca2a8;--color-border-data-viz-default-3:#af74b9;--color-border-data-viz-default-4:#b49566;--color-border-data-viz-default-5:#dd887c;--color-border-data-viz-default-6:#e6b056;--color-border-data-viz-default-7:#dd7cc2;--color-border-data-viz-default-8:#b0cd5d;--color-border-common-focused:#2cb0bc;--color-border-common-error:#ec979b;--color-border-semantic-success:#05322b;--color-border-semantic-error:#e12d39;--color-border-semantic-neutral:#adbdb9;--color-border-semantic-warning:#e87516;--color-border-semantic-info:#1f6362;--color-fill-data-viz-comparison-secondary:#d0d0d0;--color-fill-data-viz-comparison-primary:#666eb4;--color-fill-data-viz-default-1:#666eb4;--color-fill-semantic-error-hover:#fdcbd3;--color-fill-semantic-neutral-pressed:#8ca39d;--color-fill-semantic-error-selected:#e12d39;--color-fill-data-viz-default-2:#4ca2a8;--color-fill-data-viz-default-3:#af74b9;--color-fill-data-viz-default-4:#b49566;--color-fill-data-viz-default-5:#dd887c;--color-fill-data-viz-default-6:#e6b056;--color-fill-data-viz-default-7:#dd7cc2;--color-fill-data-viz-default-8:#b0cd5d;--color-fill-control-error-hover:#fdcbd3;--color-fill-common-primary:#f8faf9;--color-fill-common-secondary:#ffffff;--color-fill-common-brand:#05322b;--color-fill-common-tertiary:#ebefee;--color-fill-cta-primary-default:#147d64;--color-fill-cta-primary-hover:#0c6b58;--color-fill-cta-primary-pressed:#014d40;--color-fill-cta-primary-focused:#147d64;--color-fill-cta-secondary-default:rgba(255, 255, 255, 0);--color-fill-cta-secondary-hover:#ebefee;--color-fill-cta-secondary-pressed:#adbdb9;--color-fill-cta-secondary-focused:rgba(255, 255, 255, 0);--color-fill-cta-critical-default:#e12d39;--color-fill-cta-critical-hover:#cf2333;--color-fill-cta-critical-pressed:#c21a2c;--color-fill-control-error-supplemental:#e16e75;--color-fill-cta-critical-focused:#e12d39;--color-fill-cta-disabled:#ebefee;--color-fill-control-unselected:rgba(255, 255, 255, 0);--color-fill-control-unselected-supplemental:#a0a0a0;--color-fill-control-unselected-hover:#f3f3f3;--color-fill-control-selected:#02a783;--color-fill-control-disabled:#ebefee;--color-fill-control-disabled-supplemental:#ced7d4;--color-fill-control-error:#feeaee;--color-fill-menu-unselected:#ffffff;--color-fill-menu-highlighted:#ebefee;--color-fill-menu-selected:#c6f7e2;--color-fill-menu-selected-supplemental:#effcf6;--color-fill-form-disabled:#ebefee;--color-fill-form-error:#feeaee;--color-fill-avatar-primary:#147d64;--color-fill-avatar-secondary:#653cad;--color-fill-avatar-tertiary:#ced7d4;--color-fill-avatar-circumference:#02a783;--color-fill-common-overlay:rgba(18, 18, 18, 0.8);--color-fill-control-accent:#a0a0a0;--color-fill-control-selected-hover:#147d64;--color-fill-control-slider-disabled:#ced7d4;--color-fill-control-slider-background:#e7e7e7;--color-fill-semantic-success-default:#147d64;--color-fill-semantic-success-supplemental:#199473;--color-fill-semantic-error-supplemental:#cf2333;--color-fill-semantic-error-default:#cf2333;--color-fill-semantic-info-default:#299ba3;--color-fill-semantic-info-supplemental:#299ba3;--color-fill-semantic-info-highlight:#e1f8f9;--color-fill-semantic-warning-default:#e87516;--color-fill-semantic-warning-supplemental:#e87516;--color-fill-cta-secondary-hover-supplemental:#ced7d4;--color-fill-semantic-error-highlight:#feeaee;--color-fill-semantic-warning-hover:#fcf5c1;--color-fill-semantic-warning-highlight:#fefbe6;--color-fill-semantic-error-status-background:#feeaee;--color-fill-semantic-warning-status-background:#fefbe6;--color-fill-semantic-neutral-hover:#adbdb9;--color-fill-semantic-neutral-selected:#5c7b74;--color-fill-semantic-neutral-default:#ced7d4;--color-fill-semantic-accent-default:#5d37a7;--color-fill-semantic-accent-supplemental:#452996;--color-fill-semantic-accent-highlight:#ece7f5;--color-fill-cta-primary-hover-supplemental:#014d40;--color-fill-semantic-success-pressed:#65d6ad;--color-fill-semantic-error-pressed:#e16e75;--color-fill-semantic-success-hover:#8eedc7;--color-fill-semantic-success-highlight:#effcf6;--color-fill-semantic-success-status-background:#effcf6;--color-fill-semantic-neutral-disabled:#ebefee;--color-fill-semantic-neutral-highlight:#ebefee;--color-fill-semantic-neutral-status-background:#ebefee;--color-text-cta-primary:#ffffff;--color-text-common-primary:#121212;--kpi-sub-color:#121212;--kpi-sup-color:#121212;--color-text-common-secondary:#595959;--color-text-common-disabled:#adbdb9;--color-text-common-brand:#05322b;--color-text-common-inverse-primary:#ffffff;--color-text-common-inverse-secondary:rgba(255, 255, 255, 0.6);--color-text-link-primary-default:#02a783;--color-text-link-secondary-default:#1a2321;--color-text-link-tertiary-default:#595959;--color-text-link-hover:#147d64;--color-text-link-pressed:#014d40;--color-text-link-disabled:#d0d0d0;--color-text-link-inverse-default:#ffffff;--color-text-link-inverse-hover:#02a783;--color-text-link-inverse-disabled:#2a2a2a;--color-text-label-default:#595959;--color-text-label-placeholder:#717171;--color-text-label-disabled-default:#adbdb9;--color-text-label-disabled-highlighted:#adbdb9;--color-text-label-error:#e16e75;--color-text-label-critical:#c21a2c;--color-text-label-brand:#05322b;--color-text-label-success:#02a783;--color-text-label-warning:#e87516;--color-text-cta-disabled:#adbdb9;--color-text-cta-secondary:#121212;--font-family-headline-xlarge:"Poppins", sans-serif;--font-family-headline-large:"Poppins", sans-serif;--font-family-headline-medium:"Poppins", sans-serif;--font-family-headline-small:"Poppins", sans-serif;--font-family-title-medium:"Poppins", sans-serif;--font-family-title-small:"Poppins", sans-serif;--font-family-subtitle-large:"Poppins", sans-serif;--font-family-subtitle-medium:"Poppins", sans-serif;--font-family-subtitle-small:"Poppins", sans-serif;--font-family-body-large:"Noto Sans", sans-serif;--font-family-body-medium:"Noto Sans", sans-serif;--font-family-body-medium-semi-bold:"Noto Sans", sans-serif;--font-family-body-small:"Noto Sans", sans-serif;--font-family-body-small-semi-bold:"Noto Sans", sans-serif;--font-family-decorative-large:"Poppins", sans-serif;--font-family-decorative-medium:"Poppins", sans-serif;--font-family-decorative-small:"Poppins", sans-serif;--font-family-label-medium:"Poppins", sans-serif;--font-family-label-small:"Poppins", sans-serif;--font-family-menu-link-medium:"Poppins", sans-serif;--font-family-button-link-medium:"Poppins", sans-serif;--font-family-button-link-small:"Poppins", sans-serif;--font-family-avatar-large:"Poppins", sans-serif;--font-family-avatar-medium:"Poppins", sans-serif;--font-family-avatar-small:"Poppins", sans-serif;--font-family-icon-medium:"Material Icons Outlined";--font-family-icon-small:"Material Icons Outlined";--font-family-title-medium-mobile:"Poppins", sans-serif;--font-family-title-small-mobile:"Poppins", sans-serif;--font-weight-headline-xlarge:600;--font-weight-headline-large:600;--font-weight-headline-medium:600;--font-weight-headline-small:600;--font-weight-title-medium:600;--font-weight-title-small:600;--font-weight-subtitle-large:600;--font-weight-subtitle-medium:600;--font-weight-subtitle-small:600;--font-weight-body-large:400;--font-weight-body-medium:400;--font-weight-body-medium-semi-bold:600;--font-weight-body-small:400;--font-weight-body-small-semi-bold:600;--font-weight-decorative-large:400;--font-weight-decorative-medium:400;--font-weight-decorative-small:400;--font-weight-label-medium:500;--font-weight-label-small:500;--font-weight-menu-link-medium:500;--font-weight-button-link-medium:600;--font-weight-button-link-small:600;--font-weight-avatar-large:600;--font-weight-avatar-medium:600;--font-weight-avatar-small:600;--font-weight-title-medium-mobile:600;--font-weight-title-small-mobile:600;--font-size-headline-xlarge:56px;--font-size-headline-large:48px;--font-size-headline-medium:40px;--font-size-headline-small:32px;--font-size-title-medium:24px;--font-size-title-small:20px;--font-size-subtitle-large:18px;--font-size-subtitle-medium:16px;--font-size-subtitle-small:14px;--font-size-body-large:16px;--font-size-body-medium:14px;--font-size-body-medium-semi-bold:14px;--font-size-body-small:12px;--font-size-body-small-semi-bold:12px;--font-size-decorative-large:16px;--font-size-decorative-medium:14px;--font-size-decorative-small:12px;--font-size-label-medium:14px;--font-size-label-small:12px;--font-size-menu-link-medium:14px;--font-size-button-link-medium:14px;--font-size-button-link-small:12px;--font-size-avatar-large:20px;--font-size-avatar-medium:14px;--font-size-avatar-small:12px;--font-size-icon-medium:24px;--font-size-icon-small:18px;--font-size-title-medium-mobile:20px;--font-size-title-small-mobile:18px;--font-line-height-headline-xlarge:62px;--font-line-height-headline-large:58px;--font-line-height-headline-medium:52px;--font-line-height-headline-small:40px;--font-line-height-title-medium:28px;--font-line-height-title-small:24px;--font-line-height-subtitle-large:24px;--font-line-height-subtitle-medium:22px;--font-line-height-subtitle-small:20px;--font-line-height-body-large:22px;--font-line-height-body-medium:20px;--font-line-height-body-medium-semi-bold:20px;--font-line-height-body-small:18px;--font-line-height-body-small-semi-bold:18px;--font-line-height-decorative-large:22px;--font-line-height-decorative-medium:20px;--font-line-height-decorative-small:18px;--font-line-height-label-medium:20px;--font-line-height-label-small:18px;--font-line-height-menu-link-medium:20px;--font-line-height-button-link-medium:20px;--font-line-height-button-link-small:18px;--font-line-height-avatar-large:28px;--font-line-height-avatar-medium:20px;--font-line-height-avatar-small:18px;--kpi-sub-font-size:12px;--kpi-sup-font-size:12px;--font-line-height-title-small-mobile:24px;--font-letter-spacing-headline-xlarge:-1.5px;--font-letter-spacing-headline-large:-1px;--font-letter-spacing-headline-medium:-1px;--font-letter-spacing-headline-small:-0.5px;--font-letter-spacing-title-medium:-0.5px;--font-letter-spacing-title-small:-0.5px;--font-letter-spacing-subtitle-large:-0.25px;--font-letter-spacing-subtitle-medium:-0.25px;--font-letter-spacing-subtitle-small:-0.25px;--font-letter-spacing-body-large:0px;--font-letter-spacing-body-medium:0px;--font-letter-spacing-body-medium-semi-bold:0px;--font-letter-spacing-body-small:0px;--font-letter-spacing-body-small-semi-bold:0px;--font-letter-spacing-decorative-large:0px;--font-letter-spacing-decorative-medium:0px;--font-letter-spacing-decorative-small:0px;--font-letter-spacing-label-medium:-0.25px;--font-letter-spacing-label-small:-0.25px;--font-letter-spacing-menu-link-medium:-0.25px;--font-letter-spacing-button-link-medium:0px;--font-letter-spacing-button-link-small:0px;--font-letter-spacing-avatar-large:0px;--font-letter-spacing-avatar-medium:0px;--font-letter-spacing-avatar-small:0px;--font-letter-spacing-title-medium-mobile:-0.5px;--font-letter-spacing-title-small-mobile:-0.25px;--effect-border-radius-light:2px;--effect-border-radius-medium:4px;--effect-border-width-regular:1px;--effect-border-width-thick:2px;--effect-drop-shadow-focus-primary:0px 0px 0px 2px #8eedc7ff;--effect-drop-shadow-focus-error:0px 0px 0px 2px #fdcbd3ff;--effect-drop-shadow-elevation-low:0px 2px 6px 0px #00000014;--effect-drop-shadow-elevation-medium:0px 2px 6px 0px #0000001f;--effect-drop-shadow-elevation-high:0px 2px 8px 0px #00000029;--effect-drop-shadow-elevation-extra-high:0px 6px 16px 0px #00000033;--layout-media-query-small:0px;--layout-media-query-medium:600px;--layout-media-query-large:1024px;--layout-grid-columns-small:4;--layout-grid-columns-medium:8;--layout-grid-columns-large:12;--motion-easing-fast:cubic-bezier(0.42,0,0.58,1);--motion-easing-normal:cubic-bezier(0.42,0,0.58,1);--motion-easing-slow:cubic-bezier(0.42,0,0.58,1);--motion-duration-slow:300ms;--motion-duration-normal:200ms;--motion-duration-fast:100ms;--spacing-padding-xxsmall:4px;--spacing-padding-xsmall:8px;--spacing-padding-small:12px;--spacing-padding-medium:20px;--spacing-padding-large:30px;--spacing-padding-xlarge:52px;--spacing-padding-xxlarge:84px;--spacing-margin-large:32px;--spacing-margin-xlarge:52px;--spacing-margin-xxlarge:84px;--spacing-margin-xxsmall:4px;--spacing-margin-xsmall:8px;--spacing-margin-small:12px;--spacing-margin-medium:20px;--color-base-teal-950:#05322b;--color-base-teal-900:#014d40;--color-base-teal-800:#0c6b58;--color-base-teal-700:#147d64;--color-base-teal-600:#199473;--color-base-teal-500:#02a783;--color-base-teal-400:#3ebd93;--color-base-teal-300:#65d6ad;--color-base-teal-200:#8eedc7;--color-base-teal-100:#c6f7e2;--color-base-teal-050:#effcf6;--color-base-gray-900:#121212;--color-base-translucent-gray:rgba(18, 18, 18, 0.8);--color-base-gray-800:#2a2a2a;--color-base-gray-700:#414141;--color-base-gray-600:#595959;--color-base-gray-500:#717171;--color-base-gray-400:#888888;--color-base-gray-300:#a0a0a0;--color-base-gray-200:#b8b8b8;--color-base-gray-100:#d0d0d0;--color-base-gray-075:#e7e7e7;--color-base-gray-050:#f3f3f3;--color-base-gray-025:#f9f9f9;--color-base-rose-900:#b30920;--color-base-rose-800:#c21a2c;--color-base-rose-700:#cf2333;--color-base-rose-600:#e12d39;--color-base-rose-500:#f0373a;--color-base-rose-400:#eb4b53;--color-base-rose-300:#e16e75;--color-base-rose-200:#ec979b;--color-base-rose-100:#fdcbd3;--color-base-rose-050:#feeaee;--color-base-gold-900:#e87516;--color-base-gold-800:#ed9d22;--color-base-gold-700:#f0b529;--color-base-gold-600:#f3cc30;--color-base-gold-500:#f4dd33;--color-base-gold-400:#f6e252;--color-base-gold-300:#f8e771;--color-base-gold-200:#faee99;--color-base-gold-100:#fcf5c1;--color-base-gold-050:#fefbe6;--color-base-cyan-900:#1f6362;--color-base-cyan-800:#26868b;--color-base-cyan-700:#299ba3;--color-base-cyan-600:#2cb0bc;--color-base-cyan-500:#2fc0cf;--color-base-cyan-400:#3ecad4;--color-base-cyan-300:#5ad3db;--color-base-cyan-200:#86e1e5;--color-base-cyan-100:#b5edef;--color-base-cyan-050:#e1f8f9;--color-base-purple-900:#341e86;--color-base-purple-800:#452996;--color-base-purple-700:#512f9e;--color-base-purple-600:#5d37a7;--color-base-purple-500:#653cad;--color-base-purple-400:#7c58b9;--color-base-purple-300:#9376c6;--color-base-purple-200:#b19dd6;--color-base-purple-100:#d0c4e6;--color-base-purple-050:#ece7f5;--color-base-white-100:#ffffff;--color-base-white-060:rgba(255, 255, 255, 0.6);--color-base-data-viz-100:#666eb4;--color-base-data-viz-200:#4ca2a8;--color-base-data-viz-300:#af74b9;--color-base-data-viz-400:#b49566;--color-base-data-viz-500:#dd887c;--color-base-data-viz-600:#e6b056;--color-base-data-viz-700:#dd7cc2;--color-base-data-viz-800:#b0cd5d;--color-base-transparent:rgba(255, 255, 255, 0);--color-base-earth-950:#1a2321;--color-base-earth-900:#22302d;--color-base-earth-800:#334541;--color-base-earth-700:#415853;--color-base-earth-600:#506c65;--color-base-earth-500:#5c7b74;--color-base-earth-400:#748e88;--color-base-earth-300:#8ca39d;--color-base-earth-200:#adbdb9;--color-base-earth-100:#ced7d4;--color-base-earth-050:#ebefee;--color-base-earth-025:#f8faf9;--font-base-font-family-decorative:"Poppins", sans-serif;--font-base-font-family-body:"Noto Sans", sans-serif;--font-base-font-family-icon:"Material Icons Outlined";--font-base-font-weight-regular:400;--font-base-font-weight-medium:500;--font-base-font-weight-semibold:600;--font-base-text-transform-uppercase:uppercase;--font-base-text-transform-capitalize:capitalize;--font-base-text-transform-lowercase:lowercase;--font-base-text-decoration-line-through:line-through;--font-base-text-decoration-underline:underline;--font-base-font-size-56:56px;--font-base-font-size-48:48px;--font-base-font-size-40:40px;--font-base-font-size-32:32px;--font-base-font-size-24:24px;--font-base-font-size-20:20px;--font-base-font-size-18:18px;--font-base-font-size-16:16px;--font-base-font-size-14:14px;--font-base-font-size-12:12px;--font-base-font-size-10:10px;--font-base-line-height-16:16px;--font-base-line-height-62:62px;--font-base-line-height-58:58px;--font-base-line-height-52:52px;--font-base-line-height-40:40px;--font-base-line-height-28:28px;--font-base-line-height-24:24px;--font-base-line-height-22:22px;--font-base-line-height-20:20px;--font-base-line-height-18:18px;--font-base-letter-spacing-1-5:-1.5px;--font-base-letter-spacing-1:-1px;--font-base-letter-spacing-0-5:-0.5px;--font-base-letter-spacing-0-25:-0.25px;--font-base-letter-spacing-0:0px;--effect-base-border-radius-8:8px;--effect-base-border-radius-12:8px;--effect-base-opacity-95:0.95;--effect-base-opacity-90:0.9;--effect-base-opacity-85:0.85;--effect-base-opacity-80:0.8;--effect-base-opacity-70:0.7;--effect-base-opacity-60:0.6;--effect-base-opacity-50:0.4;--effect-base-opacity-40:0.4;--effect-base-opacity-30:0.3;--effect-base-opacity-20:0.2;--effect-base-opacity-10:0.1;--effect-base-drop-shadow-rose:0px 0px 0px 2px #fdcbd3ff;--effect-base-drop-shadow-teal:0px 0px 0px 2px #8eedc7ff;--effect-base-drop-shadow-small:0px 2px 6px 0px #00000014;--effect-base-drop-shadow-medium:0px 2px 6px 0px #0000001f;--effect-base-drop-shadow-large:0px 2px 8px 0px #00000029;--effect-base-drop-shadow-xlarge:0px 6px 16px 0px #00000033;--effect-base-border-width-1:1px;--effect-base-border-width-2:2px;--effect-base-border-radius-2:2px;--effect-base-border-radius-4:4px;--effect-base-transition-duration-100-ms:100ms;--effect-base-transition-duration-200-ms:200ms;--effect-base-transition-duration-300-ms:300ms;--effect-base-transition-timing-ease-in-ease-out:cubic-bezier(0.42,0,0.58,1);--size-base-space-0:0px;--size-base-space-4:4px;--size-base-space-8:8px;--size-base-space-12:12px;--size-base-space-20:20px;--size-base-space-32:32px;--size-base-space-52:52px;--size-base-space-84:84px;--size-base-mq-0-599:0px;--size-base-mq-600-1023:600px;--size-base-mq-1024:1024px;--size-base-columns-12:12;--size-base-columns-8:8;--size-base-columns-4:4;--badge-count-position-right:-12px;--badge-count-position-top:-12px;--tabularlist-header-cell-min-width:auto;--tabulatlist-header-cell-overflow:hidden;--tabulatlist-header-cell-textoverflow:ellipsis;--tabulatlist-header-cell-margin:0;--tabulatlist-header-cell-padding:12px;--tabularlist-default-height:491px;--position-bh-action-bar:fixed;--datepicker-input-field-height:44px;--datepicker-input-icon-position-left:12px;--datepicker-input-icon-position-top:12px;--datepicker-input-value-padding:0px 0px 0px 26px;--date-picker-text-field-width:280px}.bh-app-shell-menu{z-index:2100}.bh-app-shell-menu__side-menu{position:fixed;left:0px;padding-top:104px;top:0px;bottom:0px;width:58px;background-color:var(--color-fill-common-secondary);z-index:600;border-right:1px solid var(--color-border-common-primary);transition:width var(--motion-duration-normal) var(--motion-easing-normal);}.bh-app-shell__side-menu--open{width:var(--side-menu-open-desktop-width);visibility:visible;}.bh-app-shell__side-menu--tablet,.bh-app-shell__side-menu--desktop{visibility:visible;transition:left var(--motion-duration-normal) var(--motion-easing-normal),\n    width var(--motion-duration-normal) var(--motion-easing-normal);z-index:2100}@media only screen and (max-width: 1023px){.bh-app-shell__side-menu--tablet,.bh-app-shell__side-menu--desktop{width:var(--side-menu-open-desktop-width);left:calc(-1 * var(--side-menu-open-desktop-width))}}.bh-app-shell__side-menu--tablet.bh-app-shell__side-menu--open,.bh-app-shell__side-menu--desktop.bh-app-shell__side-menu--open{left:0}.bh-app-shell-menu__side-menu.tablet{left:-58px}.bh-app-shell__side-menu--open.tablet{left:0}.bh-app-shell-menu__side-menu-item{position:relative}.bh-app-shell-menu__side-menu-item__sub-menu{position:absolute;left:58px;top:0;padding-left:8px;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-app-shell-menu__side-menu-item__sub-menu.shown{visibility:visible;opacity:1}.bh-app-shell-menu__side-menu-item__sub-menu.hidden{visibility:hidden;opacity:0}.bh-app-shell-menu__settings-menu{position:fixed;right:36px;top:62px;z-index:3000;visibility:hidden;opacity:0}.bh-app-shell-menu__settings-menu.open{visibility:visible;opacity:1}.bh-app-shell-menu__submenu{display:block}.bh-app-shell-menu__submenu.hidden{display:none}.bh-app-shell-menu__submenu-item{transition:height, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s;visibility:visible;opacity:1;height:44px}.bh-app-shell-menu__submenu-item.hidden{transition:height, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s;visibility:hidden;opacity:0;height:0px}.bh-menu__item-group{background-color:var(--color-fill-common-secondary);border-top:1px solid var(--color-border-common-primary);padding-bottom:8px;margin-bottom:8px}.bh-menu__item-group .bh-menu__section-header{color:var(--color-text-common-secondary);padding:8px 0 8px 16px;text-align:left}:host .enablesettingMenuMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.bh-app-shell__side-menu--open{overflow:initial}';
var BhAppShellMenuStyle0 = bhAppShellMenuCss;
var BhAppShellMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.settingOpenclass = "open";
    this.type = "primary";
    this.mobileViewLabel = void 0;
    this.navigation = void 0;
    this._navigation = void 0;
    this._navigationSections = void 0;
    this._showNavigationSections = false;
    this.settingsMenuKeyboardNavigationKey = void 0;
    this.settingsSubMenuKeyboardNavigationKey = void 0;
    this.isInSubmenuSelection = false;
    this.isSubmenuBackSelected = false;
    this.navigationSelected = void 0;
    this._navigationSelected = void 0;
    this.itemKeyOnHover = void 0;
    this.isOverHoverDuractionThreshold = false;
    this.openSubmenuParentKey = void 0;
    this.itemKeyVal = 0;
    this.settings = void 0;
    this._settings = void 0;
    this.userInfo = void 0;
    this.isSideMenuOpen = false;
    this.isSettingsMenuOpen = false;
    this.isMobileMenuOpen = false;
    this.settingsSelected = void 0;
    this._settingsSelected = void 0;
    this.enableMicroInteraction = false;
    this.viewport = void 0;
  }
  watchNavigation() {
    this.createNavigation(this.navigation);
  }
  watchNavigationSelected() {
    this._navigationSelected = parseJSONString(this.navigationSelected, "Invalid navigationSelected JSON");
  }
  watchItemKeyOnHover() {
    if (!this.itemKeyOnHover) return;
    this.isOverHoverDuractionThreshold = false;
    clearTimeout(this.itemKeyOnHover__timeout);
    this.itemKeyOnHover__timeout = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("scroll"));
      this.isOverHoverDuractionThreshold = true;
    }, 2e3);
  }
  watchSettings() {
    var _a;
    this.itemKeyVal++;
    this._settings = parseJSONString(this.settings, "Invalid settings JSON");
    this.settingsMenuKeyboardNavigationKey = this._settings && this._settings[0] ? (_a = this._settings[0]) === null || _a === void 0 ? void 0 : _a.key : "";
  }
  watchIsSettingsMenuOpen() {
    if (this.isSettingsMenuOpen) {
      setTimeout(() => {
        this.el__settingsMenuDesktop.focus();
      });
    }
  }
  watchSettingsSelected() {
    this.itemKeyVal++;
    this._settingsSelected = parseJSONString(this.settingsSelected, "Invalid settingsSelected JSON");
  }
  handleResize() {
    const vp = getBreakpoint();
    if (vp !== this.viewport) this.viewport = vp;
  }
  handleNavigationMenuSelection(navItem) {
    this._navigationSelected = {
      item: navItem.item,
      submenuItem: navItem.submenuItem ? navItem.submenuItem : ""
    };
    this.bhEventSelected.emit({
      type: "navigation",
      keys: this._navigationSelected
    });
    this.itemKeyOnHover = "";
  }
  handleSettingSelection(settingItem) {
    if (settingItem.submenuItem) {
      this._settingsSelected = [...this._settingsSelected.filter((s) => s.item !== settingItem.item), {
        item: settingItem.item,
        submenuItem: settingItem.submenuItem
      }];
    }
    this.bhEventSelected.emit({
      type: "settings",
      keys: settingItem
    });
  }
  createNavigationSections() {
    this._navigationSections = this._navigation.reduce((acc, itemGroup) => {
      var _a;
      const section = (_a = itemGroup.section) !== null && _a !== void 0 ? _a : "";
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(itemGroup);
      return acc;
    }, {});
    this._showNavigationSections = Object.keys(this._navigationSections).filter((section) => section !== "").length > 0;
  }
  createNavigation(navigation) {
    this._navigation = parseJSONString(navigation, "Invalid navigation JSON");
    this.createNavigationSections();
  }
  handleSettingsMenuKeydown(event) {
    var _a, _b;
    const itemsInSettings = this._settings.filter((item) => {
      return item.key;
    });
    const currentIndex = this.isInSubmenuSelection ? itemsInSettings.find((setting) => {
      return setting.key === this.settingsMenuKeyboardNavigationKey;
    }).submenu.findIndex((submenuItem) => {
      return submenuItem.key === this.settingsSubMenuKeyboardNavigationKey;
    }) : itemsInSettings.findIndex((setting) => {
      return setting.key === this.settingsMenuKeyboardNavigationKey;
    });
    switch (event.code) {
      case "ArrowUp":
        if (this.isInSubmenuSelection) {
          if (currentIndex > 0) {
            this.settingsSubMenuKeyboardNavigationKey = itemsInSettings.find((setting) => {
              return setting.key === this.settingsMenuKeyboardNavigationKey;
            }).submenu[currentIndex - 1].key;
          } else if (currentIndex === 0) {
            this.isSubmenuBackSelected = true;
          }
        } else {
          if (currentIndex > 0) this.settingsMenuKeyboardNavigationKey = itemsInSettings[currentIndex - 1].key;
        }
        break;
      case "ArrowDown":
        if (this.isInSubmenuSelection) {
          if (this.isSubmenuBackSelected) {
            this.isSubmenuBackSelected = false;
          } else if (currentIndex + 1 < itemsInSettings.find((setting) => {
            return setting.key === this.settingsMenuKeyboardNavigationKey;
          }).submenu.length) {
            this.settingsSubMenuKeyboardNavigationKey = itemsInSettings.find((setting) => {
              return setting.key === this.settingsMenuKeyboardNavigationKey;
            }).submenu[currentIndex + 1].key;
          }
        } else {
          if (currentIndex + 1 < itemsInSettings.length) this.settingsMenuKeyboardNavigationKey = itemsInSettings[currentIndex + 1].key;
        }
        break;
      case "Enter":
        if (this.isInSubmenuSelection) {
          if (this.isSubmenuBackSelected) {
            this.el__settingsMenuDesktop.querySelector(".bh-settings-menu__submenu-title-container").dispatchEvent(new MouseEvent("click"));
            this.isSubmenuBackSelected = false;
            this.isInSubmenuSelection = false;
          } else {
            this.el__settingsMenuDesktop.querySelector(`[data-key="${this.settingsSubMenuKeyboardNavigationKey}"]`).dispatchEvent(new MouseEvent("click"));
          }
        } else {
          if ((_a = itemsInSettings.find((item) => {
            return item.key === this.settingsMenuKeyboardNavigationKey;
          })) === null || _a === void 0 ? void 0 : _a.submenu) {
            this.el__settingsMenuDesktop.querySelector(`[data-key="${this.settingsMenuKeyboardNavigationKey}"]`).dispatchEvent(new MouseEvent("click"));
            this.isInSubmenuSelection = true;
            this.settingsSubMenuKeyboardNavigationKey = this._settingsSelected.find((selected) => {
              return selected.item === this.settingsMenuKeyboardNavigationKey;
            }).submenuItem || ((_b = this._settings.find((setting) => {
              return setting.key === this.settingsMenuKeyboardNavigationKey;
            }).submenu[0]) === null || _b === void 0 ? void 0 : _b.key);
          } else {
            this.handleSettingSelection({
              item: this.settingsMenuKeyboardNavigationKey
            });
          }
        }
        break;
      case "Tab":
        const avatarElementInNav = document.querySelector('.bh-app-shell__avatar[slot="bh-header__avatar"]');
        if (avatarElementInNav) {
          event.preventDefault();
          avatarElementInNav.focus();
          avatarElementInNav.dispatchEvent(new MouseEvent("click"));
        }
    }
  }
  componentWillRender() {
  }
  componentWillLoad() {
    var _a;
    this.viewport = getBreakpoint();
    this._navigationSelected = parseJSONString(this.navigationSelected, "Invalid navigationSelected JSON");
    this._settingsSelected = parseJSONString(this.settingsSelected, "Invalid settingsSelected JSON");
    this.createNavigation(this.navigation);
    this._settings = parseJSONString(this.settings, "Invalid settings JSON");
    this.settingsMenuKeyboardNavigationKey = this._settings && this._settings[0] ? (_a = this._settings[0]) === null || _a === void 0 ? void 0 : _a.key : "";
    if (this.enableMicroInteraction) {
      this.settingOpenclass = "open enablesettingMenuMicroInteraction";
    }
  }
  renderNavList(navs, Components) {
    return navs === null || navs === void 0 ? void 0 : navs.map((item) => {
      var _a, _b, _c;
      if (item.submenu && item.submenu.length > 0) {
        return h("div", {
          class: "bh-app-shell-menu__side-menu-item",
          onMouseEnter: () => {
            this.itemKeyOnHover = item.key;
          },
          onMouseLeave: () => {
            this.itemKeyOnHover = "";
          }
        }, h(Components.menuItem, {
          type: this.isSideMenuOpen ? "side-nav-open" : "side-nav",
          label: item.label,
          icon: item.icon,
          key: item.key,
          isKeyboardFocused: item.key === this.settingsMenuKeyboardNavigationKey,
          isSelected: ((_a = this._navigationSelected) === null || _a === void 0 ? void 0 : _a.item) === item.key,
          isHovered: this.itemKeyOnHover === item.key,
          chevron: this.isSideMenuOpen ? this.openSubmenuParentKey === item.key ? "expand_less" : "expand_more" : "",
          onClick: () => {
            if (this.isSideMenuOpen) {
              this.openSubmenuParentKey = this.openSubmenuParentKey === item.key ? "" : item.key;
            }
          },
          onFocus: () => {
            this.itemKeyOnHover = item.key;
          },
          onKeyDown: (event) => {
            if (event.code === "Enter") {
              if (this.isSideMenuOpen) {
                this.openSubmenuParentKey = this.openSubmenuParentKey === item.key ? "" : item.key;
              }
            }
          },
          isFocusable: true
        }), h("div", {
          class: `bh-app-shell-menu__side-menu-item__sub-menu ${this.itemKeyOnHover === item.key && !this.isSideMenuOpen ? "shown" : "hidden"}`
        }, h(Components.menu, {
          isFocused: this.itemKeyOnHover === item.key && !this.isSideMenuOpen,
          selected: (_b = this._navigationSelected) === null || _b === void 0 ? void 0 : _b.submenuItem,
          menuItems: {
            itemGroups: [{
              items: item.submenu.map((sm) => {
                return {
                  label: sm.label,
                  value: sm.key
                };
              })
            }]
          },
          menuWidth: "small",
          onBhEventSelected: (event) => {
            var _a2;
            event.preventDefault();
            event.stopPropagation();
            this.handleNavigationMenuSelection({
              item: item.key,
              submenuItem: (_a2 = event.detail) === null || _a2 === void 0 ? void 0 : _a2.value
            });
          }
        })), h("div", {
          class: `bh-app-shell-menu__submenu ${this.viewport === "small" ? "hidden" : "shown"}`
        }, item.submenu.map((submenuItem) => {
          return h(Components.menuItem, {
            class: `bh-nav-menu__submenu-item bh-app-shell-menu__submenu-item ${this.isSideMenuOpen && this.openSubmenuParentKey === item.key ? "shown" : "hidden"}`,
            type: "side-nav-open",
            icon: item.icon,
            label: submenuItem.label,
            key: submenuItem.key,
            isFocusable: true,
            onClick: () => {
              this.handleNavigationMenuSelection({
                item: item.key,
                submenuItem: submenuItem.key
              });
            },
            onKeyDown: (event) => {
              if (event.code === "Enter") {
                this.handleNavigationMenuSelection({
                  item: item.key,
                  submenuItem: submenuItem.key
                });
              }
            }
          });
        })));
      } else {
        return h("div", {
          class: "bh-app-shell-menu__side-menu-item",
          onMouseEnter: () => {
            this.itemKeyOnHover = item.key;
          },
          onMouseLeave: () => {
            this.itemKeyOnHover = "";
          },
          onClick: () => {
            this.handleNavigationMenuSelection({
              item: item.key,
              submenuItem: ""
            });
          },
          onKeyDown: (event) => {
            if (event.code === "Enter") {
              this.handleNavigationMenuSelection({
                item: item.key,
                submenuItem: ""
              });
            }
          }
        }, h(Components.tooltip, {
          message: item.label,
          placement: "right",
          hide: this.isSideMenuOpen
        }, h(Components.menuItem, {
          type: this.isSideMenuOpen ? "side-nav-open" : "side-nav",
          label: item.label,
          icon: item.icon,
          key: item.key,
          isSelected: ((_c = this._navigationSelected) === null || _c === void 0 ? void 0 : _c.item) === item.key,
          onClick: () => {
            this.openSubmenuParentKey = "";
          },
          onKeyDown: (event) => {
            if (event.code === "Enter") this.openSubmenuParentKey = "";
          },
          onFocus: () => {
            this.itemKeyOnHover = item.key;
          },
          isFocusable: true
        })));
      }
    });
  }
  renderSectionedNavList(Components) {
    var _a;
    return Object.keys((_a = this._navigationSections) !== null && _a !== void 0 ? _a : {}).map((section) => {
      return h("div", {
        class: "bh-menu__item-group"
      }, section !== "" && this.isSideMenuOpen && h("div", {
        class: "bh-menu__section-header"
      }, h("span", {
        class: "bh-menu__section-header-label typography--subtitle-small"
      }, section)), h(Components.navMenu, {
        slot: "bh-nav-menu",
        type: this.isSideMenuOpen ? "side-nav-open" : "side-nav"
      }, this.renderNavList(this._navigationSections[section], Components)));
    });
  }
  renderMobileNavList(Components, navList) {
    return h(Components.navMenu, {
      type: "mobile",
      withAppShellMenu: true,
      navigation: navList
    }, navList === null || navList === void 0 ? void 0 : navList.map((item) => {
      var _a, _b;
      if (item.submenu && item.submenu.length > 0) {
        return h(Components.menuItem, {
          isFocusable: true,
          type: "mobile",
          label: item.label,
          key: item.key,
          icon: item.icon,
          isSelected: ((_a = this._navigationSelected) === null || _a === void 0 ? void 0 : _a.item) === item.key
        }, item.submenu.map((submenuItem) => {
          return h(Components.menuItem, {
            icon: item.icon,
            isFocusable: true,
            label: submenuItem.label,
            key: submenuItem.key,
            onClick: () => {
              this.handleNavigationMenuSelection({
                item: item.key,
                submenuItem: submenuItem.key
              });
            },
            onKeyDown: (event) => {
              if (event.code === "Enter") {
                this.handleNavigationMenuSelection({
                  item: item.key,
                  submenuItem: submenuItem.key
                });
              }
            }
          });
        }));
      } else {
        return h(Components.menuItem, {
          isFocusable: true,
          label: item.label,
          icon: item.icon,
          key: item.key,
          isSelected: ((_b = this._navigationSelected) === null || _b === void 0 ? void 0 : _b.item) === item.key,
          onClick: () => {
            this.handleNavigationMenuSelection({
              item: item.key,
              submenuItem: ""
            });
          },
          onKeyDown: (event) => {
            if (event.code === "Enter") {
              this.handleNavigationMenuSelection({
                item: item.key,
                submenuItem: ""
              });
            }
          }
        });
      }
    }));
  }
  renderMobileSectionedNavList(Components) {
    var _a;
    return Object.keys((_a = this._navigationSections) !== null && _a !== void 0 ? _a : {}).map((section) => {
      return h("div", {
        class: "bh-menu__item-group"
      }, section !== "" && h("div", {
        class: "bh-menu__section-header"
      }, h("span", {
        class: "bh-menu__section-header-label typography--subtitle-small"
      }, section)), this.renderMobileNavList(Components, this._navigationSections[section]));
    });
  }
  renderMobileNavigation(Components) {
    return h("div", {
      slot: "bh-app-shell__nav-menu"
    }, this._showNavigationSections ? this.renderMobileSectionedNavList(Components) : this.renderMobileNavList(Components, this._navigation));
  }
  renderMobileSettings(Components) {
    var _a;
    return h("div", {
      slot: "bh-app-shell__settings-menu"
    }, this._settings && h(Components.settingsMenu, {
      isMobile: true,
      key: this.itemKeyVal,
      settings: this._settings,
      isFocusable: false
    }, (_a = this._settings) === null || _a === void 0 ? void 0 : _a.map((item) => {
      const selectedItem = this._settingsSelected.find((s) => s.item === item.key);
      if (item.isDivider) {
        return h(Components.divider, null);
      } else {
        if (item.submenu && item.submenu.length > 0) {
          return h(Components.menuItem, {
            type: "settings",
            label: item.label,
            icon: item.icon,
            key: item.key,
            isFocusable: true,
            onKeyDown: (event) => {
              if (event.code === "Enter") {
                event.target.dispatchEvent(new MouseEvent("click"));
              }
            }
          }, item.submenu.map((submenuItem) => {
            return h(Components.menuItem, {
              type: "settings",
              label: submenuItem.label,
              icon: submenuItem.icon,
              key: submenuItem.key,
              isSelected: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.submenuItem) === submenuItem.key,
              onClick: () => {
                this.handleSettingSelection({
                  item: item.key,
                  submenuItem: submenuItem.key
                });
              },
              onKeyDown: (event) => {
                if (event.code === "Enter") {
                  this.handleSettingSelection({
                    item: item.key,
                    submenuItem: submenuItem.key
                  });
                }
              },
              isFocusable: true
            });
          }));
        } else {
          return h(Components.menuItem, {
            type: "settings",
            label: item.label,
            icon: item.icon,
            key: item.key,
            isFocusable: true,
            isSelected: this._settingsSelected.find((s) => s.item === item.key) ? true : false,
            onClick: () => {
              this.handleSettingSelection({
                item: item.key
              });
            },
            onKeyDown: (event) => {
              if (event.code === "Enter") {
                this.handleSettingSelection({
                  item: item.key
                });
              }
            }
          });
        }
      }
    })));
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const prefix = this.host.tagName.toLowerCase().replace(components.appShellMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    this._navigationSelected = parseJSONString(this.navigationSelected, "Invalid navigationSelected JSON");
    return h(Host, {
      key: "1ada87ed2a5368e775185116f343ede8777ef2bf",
      class: "bh-app-shell-menu"
    }, this.type === "primary" && (this.viewport === "large" || this.viewport === "medium") && h("div", {
      class: `bh-app-shell-menu__side-menu ${this.isSideMenuOpen ? "bh-app-shell__side-menu--open" : ""} ${this.viewport === "medium" ? "bh-app-shell__side-menu--tablet" : ""} ${this.viewport === "large" ? "bh-app-shell__side-menu--desktop" : ""}`
    }, this._showNavigationSections ? this.renderSectionedNavList(Components) : this.renderNavList(this._navigation, Components)), this.viewport !== "small" && h("div", {
      class: `bh-app-shell-menu__settings-menu ${this.isSettingsMenuOpen ? this.settingOpenclass : ""}`
    }, h(Components.settingsMenu, {
      userfirstname: (_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.firstname,
      userlastname: (_b = this.userInfo) === null || _b === void 0 ? void 0 : _b.lastname,
      useremail: (_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.email,
      userimage: (_d = this.userInfo) === null || _d === void 0 ? void 0 : _d.image,
      settings: this._settings,
      isSubmenuBackSelected: this.isSubmenuBackSelected,
      ref: (el) => {
        this.el__settingsMenuDesktop = el;
      },
      onKeyDown: (event) => {
        this.handleSettingsMenuKeydown(event);
      },
      key: this.itemKeyVal,
      isFocusable: true
    }, (_e = this._settings) === null || _e === void 0 ? void 0 : _e.map((item) => {
      const selectedItem = this._settingsSelected.find((s) => s.item === item.key);
      if (item.isDivider) {
        return h(Components.divider, null);
      } else {
        if (item.submenu && item.submenu.length > 0) {
          return h(Components.menuItem, {
            type: "settings",
            label: item.label,
            icon: item.icon,
            key: item.key,
            isSelected: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.submenuItem) ? false : true,
            isKeyboardFocused: item.key === this.settingsMenuKeyboardNavigationKey,
            "data-key": item.key
          }, item.submenu.map((submenuItem) => {
            return h(Components.menuItem, {
              type: "settings",
              label: submenuItem.label,
              icon: submenuItem.icon,
              key: submenuItem.key,
              isKeyboardFocused: submenuItem.key === this.settingsSubMenuKeyboardNavigationKey && !this.isSubmenuBackSelected,
              isSubmenuBackSelected: this.isSubmenuBackSelected,
              isSelected: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.submenuItem) === submenuItem.key,
              onClick: () => {
                this.handleSettingSelection({
                  item: item.key,
                  submenuItem: submenuItem.key
                });
              },
              onKeyDown: (event) => {
                if (event.code === "Enter") {
                  this.handleSettingSelection({
                    item: item.key,
                    submenuItem: submenuItem.key
                  });
                }
              },
              "data-key": submenuItem.key
            });
          }));
        } else {
          return h(Components.menuItem, {
            type: "settings",
            label: item.label,
            icon: item.icon,
            key: item.key,
            isKeyboardFocused: item.key === this.settingsMenuKeyboardNavigationKey,
            isSelected: this._settingsSelected.find((s) => s.item === item.key) ? true : false,
            onClick: () => {
              this.handleSettingSelection({
                item: item.key
              });
            }
          });
        }
      }
    }))), this.viewport === "small" && h(Components.mobileMenu, {
      userfirstname: (_f = this.userInfo) === null || _f === void 0 ? void 0 : _f.firstname,
      userlastname: (_g = this.userInfo) === null || _g === void 0 ? void 0 : _g.lastname,
      useremail: (_h = this.userInfo) === null || _h === void 0 ? void 0 : _h.email,
      userimage: (_j = this.userInfo) === null || _j === void 0 ? void 0 : _j.image,
      isOpen: this.isMobileMenuOpen,
      navigation: this._navigation,
      settings: this._settings,
      mobileViewLabel: this.mobileViewLabel
    }, this.renderMobileNavigation(Components), this.renderMobileSettings(Components)));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "navigation": ["watchNavigation"],
      "navigationSelected": ["watchNavigationSelected"],
      "itemKeyOnHover": ["watchItemKeyOnHover"],
      "settings": ["watchSettings"],
      "isSettingsMenuOpen": ["watchIsSettingsMenuOpen"],
      "settingsSelected": ["watchSettingsSelected"]
    };
  }
};
BhAppShellMenu.style = BhAppShellMenuStyle0;
export {
  BhAppShellMenu as bh_app_shell_menu
};
//# sourceMappingURL=bh-app-shell-menu.entry-TCNS4JUR.js.map
