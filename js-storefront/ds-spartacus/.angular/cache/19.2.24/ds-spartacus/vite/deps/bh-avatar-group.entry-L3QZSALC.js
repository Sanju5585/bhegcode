import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-avatar-group.entry.js
var bhAvatarGroupCss = ".bh-avatar-group{display:flex;flex-direction:row;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;cursor:default;user-select:none}@media (hover: hover){.bh-avatar-group__tooltip-target{cursor:pointer}.bh-avatar-group__tooltip-target:hover .bh-avatar-group__tooltip{opacity:1}}.bh-avatar-group__tooltip-target:active .bh-avatar-group__tooltip{opacity:1}.bh-avatar:active .bh-avatar__ring{transform:rotate(45deg)}.bh-avatar-group{position:relative;display:flex}.bh-avatar-group .bh-tooltip--bh-avatar-tooltip:first-child .bh-avatar{margin-left:var(--spacing-margin-none)}.bh-avatar-group .bh-avatar,.bh-avatar-group__additional{position:relative;width:var(--avatar-group-avatar-width);height:var(--avatar-group-avatar-height);display:inline-block;cursor:default;margin-left:calc(-1 * var(--spacing-margin-xsmall));border-width:var(--effect-border-width-thick);border-style:solid;border-radius:100%;font-family:var(--font-family-avatar-small);font-size:var(--font-size-avatar-small);font-weight:var(--font-weight-avatar-small);line-height:var(--font-line-height-avatar-small);letter-spacing:var(--font-letter-spacing-avatar-small);border-color:var(--color-fill-common-primary)}.bh-avatar-group .bh-avatar{background-color:var(--color-fill-avatar-secondary)}.bh-avatar-group .bh-avatar--ring .bh-avatar__initials,.bh-avatar-group .bh-avatar--ring .bh-avatar__image{width:var(--avatar-group-avatar-width);height:var(--avatar-group-avatar-height)}.bh-avatar-group--primary .bh-avatar{border-color:var(--color-fill-common-primary);background-color:var(--color-fill-common-primary)}.bh-avatar-group--primary .bh-avatar-group__additional{border-color:var(--color-fill-common-primary)}.bh-avatar-group--secondary .bh-avatar{border-color:var(--color-fill-common-secondary);background-color:var(--color-fill-common-secondary)}.bh-avatar-group--secondary .bh-avatar-group__additional{border-color:var(--color-fill-common-secondary)}.bh-avatar-group--tertiary .bh-avatar{border-color:var(--color-fill-common-tertiary);background-color:var(--color-fill-common-tertiary)}.bh-avatar-group--tertiary .bh-avatar-group__additional{border-color:var(--color-fill-common-tertiary)}.bh-avatar-group--brand .bh-avatar{border-color:var(--color-fill-common-brand);background-color:var(--color-fill-common-brand)}.bh-avatar-group--brand .bh-avatar-group__additional{border-color:var(--color-fill-common-brand)}.bh-avatar-group__additional{border-radius:100%;background-color:var(--color-fill-avatar-tertiary);color:var(--color-text-common-primary);user-select:none}.bh-avatar-group .bh-avatar__initials{background-color:var(--color-fill-avatar-secondary)}.bh-avatar-group .bh-avatar__ring{display:none}.bh-avatar-group__additional span{position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center}";
var BhAvatarGroupStyle0 = bhAvatarGroupCss;
var BhAvatarGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "primary";
  }
  componentWillLoad() {
    this.children = Array.from(this.host.children);
    this.host.innerHTML = "";
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.avatarGroup.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    this.host.innerHTML = "";
    const avatarGroupClasses = ["bh-avatar-group"];
    if (this.type === "secondary") {
      avatarGroupClasses.push("bh-avatar-group--secondary");
    } else if (this.type === "tertiary") {
      avatarGroupClasses.push("bh-avatar-group--tertiary");
    } else if (this.type === "brand") {
      avatarGroupClasses.push("bh-avatar-group--brand");
    } else {
      avatarGroupClasses.push("bh-avatar-group--primary");
    }
    var avatarCount = this.children.length;
    var avatars = [];
    this.children.map((child, i) => {
      const fullname = [];
      if (child.getAttribute("firstname") != null) {
        fullname.push(child.getAttribute("firstname"));
      }
      if (child.getAttribute("lastname") != null) {
        fullname.push(child.getAttribute("lastname"));
      }
      if (avatarCount > 5) {
        if (i < 4) {
          avatars.push(h(Components.tooltip, {
            key: "9f65cc983423c52b3db3521201c9606d3b02d380",
            class: "bh-tooltip--bh-avatar-tooltip",
            message: fullname.join(" ")
          }, h(Components.avatar, {
            key: "eba44cb3564d2bbaa28fc11c8c096a6b04d971ac",
            type: "secondary",
            image: child.getAttribute("image"),
            firstname: child.getAttribute("firstname"),
            lastname: child.getAttribute("lastname")
          })));
        } else if (i === 4) {
          var addtionalNames = [];
          for (var j = i; j < this.children.length; j++) {
            const additionalFullname = [];
            if (this.children[j].getAttribute("firstname") != null) {
              additionalFullname.push(this.children[j].getAttribute("firstname"));
            }
            if (this.children[j].getAttribute("lastname") != null) {
              additionalFullname.push(this.children[j].getAttribute("lastname"));
            }
            addtionalNames.push(additionalFullname.join(" "));
          }
          avatars.push(h(Components.tooltip, {
            key: "1ed3debbd13a05654eddd6bba8ee1dda433db98c",
            class: "bh-tooltip--bh-avatar-tooltip",
            message: addtionalNames.join("\n")
          }, h("div", {
            key: "68de5e7d5ef512377c3f7531243e91a5e347042d",
            class: "bh-avatar-group__additional typography--button-link-small"
          }, h("span", {
            key: "99baf3552bf2be64ddb48a345ab02550ae893a0d"
          }, avatarCount - 4, "+"))));
        }
      } else {
        avatars.push(h(Components.tooltip, {
          key: "9513c494877540039ded3e912b1e5b25de3c35ff",
          class: "bh-tooltip--bh-avatar-tooltip",
          message: fullname.join(" ")
        }, h(Components.avatar, {
          key: "639dfa2079f8ef49989b8e0c6ffb63c4613a0067",
          type: "secondary",
          image: child.getAttribute("image"),
          firstname: child.getAttribute("firstname"),
          lastname: child.getAttribute("lastname")
        })));
      }
    });
    return h(Host, {
      key: "6382a0a85d895cbdd3c12d663b431b1baa53936d",
      class: avatarGroupClasses.join(" ")
    }, avatars);
  }
  get host() {
    return getElement(this);
  }
};
BhAvatarGroup.style = BhAvatarGroupStyle0;
export {
  BhAvatarGroup as bh_avatar_group
};
//# sourceMappingURL=bh-avatar-group.entry-L3QZSALC.js.map
