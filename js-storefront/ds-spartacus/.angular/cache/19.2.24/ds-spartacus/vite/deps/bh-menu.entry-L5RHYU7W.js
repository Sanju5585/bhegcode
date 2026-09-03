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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-menu.entry.js
var MENU_ERROR_MESSAGE = "Unable to locate the expected attributes. Please check the documentation and attach mandatory attributes";
var bhMenuCss = ".bh-menu__container{background-color:var(--color-fill-common-secondary);border-radius:var(--effect-border-radius-medium);box-shadow:var(--effect-drop-shadow-elevation-medium);width:250px;outline:none}.bh-menu__container:focus{box-shadow:var(--effect-drop-shadow-elevation-medium),\n    var(--effect-drop-shadow-focus-primary)}.bh-menu__container:focus:not(:focus-visible){box-shadow:var(--effect-drop-shadow-elevation-medium)}.bh-menu__container.width--large{width:280px}.bh-menu__container.width--medium{width:250px}.bh-menu__container.width--small{width:160px}.bh-menu__container.width--fluid{width:100%}.bh-menu__container.width--auto{width:auto}.bh-menu__container.width--min-content{width:min-content}.bh-menu__ul{padding:var(--spacing-padding-xsmall) 0;list-style-type:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;max-height:260px;overflow-y:auto;word-break:break-word}.bh-menu__ul.small{max-height:210px}.bh-menu__ul.no-padding--top{padding-top:0}.bh-menu__ul.no-padding--bottom{padding-bottom:0}.bh-menu__li{padding:var(--spacing-padding-small);color:var(--color-text-common-secondary);display:flex;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-menu__li.multiselect{align-items:flex-start}.bh-menu__li.item-padding-right{padding-right:var(--spacing-padding-xlarge)}.bh-menu__li.small{padding:var(--spacing-padding-xsmall) var(--spacing-padding-small)}.bh-menu__li-label.ellipsis .bh-tooltip__slot-container{overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;display:block}.bh-menu__li-label.ellipsis{overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.bh-menu__li-label.multiselect{margin-top:2px}.bh-menu__li-icon{margin-right:var(--spacing-margin-small);display:flex}.bh-menu__li-checkbox{margin-right:var(--spacing-margin-small);display:flex}.bh-menu__badge{margin-left:auto}.bh-menu__li:not(.disabled):hover,.bh-menu__li.key-focused{background-color:var(--color-fill-menu-highlighted);color:var(--color-text-common-primary)}.bh-menu__li.selected,.bh-menu__li:hover.selected,.bh-menu__li.key-focused.selected{background-color:var(--color-fill-menu-selected);color:var(--color-text-common-primary)}.bh-menu__li.disabled{cursor:not-allowed;color:var(--color-text-common-disabled)}.bh-menu__li:hover.selected,.bh-menu__li.key-focused.selected{box-shadow:inset var(--effect-drop-shadow-focus-primary)}.bh-menu__sub-header{display:flex;align-items:center;color:var(--color-text-common-secondary);padding:var(--spacing-padding-xsmall) var(--spacing-padding-small)\n    var(--spacing-padding-small);border-bottom:var(--effect-border-width-regular) solid\n    var(--color-border-common-secondary);margin-bottom:var(--spacing-margin-xxsmall);margin-top:var(--spacing-margin-medium)}.bh-menu__sub-header-label{overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.bh-menu__sub-header.first-group{margin-top:0}.bh-menu__sub-header:not(:first-child){margin-top:var(--spacing-margin-medium)}.bh-menu__search-container{padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);border-bottom:1px solid var(--color-border-common-primary);min-width:100px;width:auto}.bh-menu__null-state{text-align:center;padding:var(--spacing-padding-medium)}.bh-menu__null-state.type-ahead--padding{padding:var(--spacing-padding-small)}.bh-menu__null-state-copy{color:var(--color-text-common-secondary)}.bh-menu__cta-container{display:flex;border-top:1px solid var(--color-border-common-primary);padding:var(--spacing-margin-small)}.bh-menu__cta{margin:0 calc(var(--spacing-margin-small) / 2)}.bh-menu__cta:first-child{margin-left:0}.bh-menu__cta:last-child{margin-right:0}";
var BhMenuStyle0 = bhMenuCss;
var SELECT_ALL = "selectall";
var UNSELECT = "unselect";
var BhMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.multiselectChange = createEvent(this, "multiselectChange", 7);
    this.ctaClick = createEvent(this, "ctaClick", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventInput = createEvent(this, "bhEventInput", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.unselect = createEvent(this, "unselect", 3);
    this.close = createEvent(this, "close", 3);
    this.menuItems = void 0;
    this._menuItems = void 0;
    this._itemGroups = void 0;
    this._itemGroupsFlattened = void 0;
    this._itemGroupsRaw = void 0;
    this._itemGroupsFlattenedRaw = void 0;
    this.keyFocusedItemValue = void 0;
    this.searchMode = "contains";
    this.isFocused = void 0;
    this.keyboardFocused = false;
    this.noMatchText = "No matches for";
    this.noOptionAvailableText = "No options available";
    this.menuWidth = "medium";
    this.menuHeight = "medium";
    this.isUnselectable = void 0;
    this.isDropDownMenu = false;
    this.placeholder = void 0;
    this.isMultiSelect = void 0;
    this.checkedItem = [];
    this.isSelectAll = void 0;
    this.isSearchable = void 0;
    this.isInDataUpdate = false;
    this.filterQuery = void 0;
    this.isItemPaddingRight = void 0;
    this.selected = void 0;
    this._selected = void 0;
    this.isEllipsis = void 0;
    this.tooltipLeftPadding = 0;
    this.stopClickPropagation = false;
    this.containerMinWidth = void 0;
    this.tooltipByItemKey = {};
    this.isTypeAhead = void 0;
    this.tooltipIsInline = true;
    this.tooltipPlacement = "top";
    this._searchText = void 0;
    this.clearSearchText = false;
    this.query = void 0;
  }
  watchIsFocused() {
    if (this.isFocused) {
      setTimeout(() => {
        var _a;
        this.element__container.focus();
        if (!this.keyFocusedItemValue || !this._itemGroupsFlattenedRaw.find((item) => {
        })) {
          this.keyFocusedItemValue = (_a = this._itemGroupsFlattenedRaw[0]) === null || _a === void 0 ? void 0 : _a.value;
        }
        if (this.keyboardFocused) {
          let startingValue = null;
          if (this.isMultiSelect) ;
          else {
            if (this.selected) {
              startingValue = typeof this.selected === "string" ? this.selected : this.selected.value;
            }
          }
          const foundItem = this._itemGroupsFlattened.find((item) => item.value === startingValue);
          if (foundItem) {
            this.keyFocusedItemValue = startingValue;
          } else if (this._itemGroupsFlattened.length > 0) {
            this.keyFocusedItemValue = this._itemGroupsFlattened[0].value;
          }
          this.scrollToFocusedItem();
        }
        window.addEventListener("keydown", this.preventDefaultForScrollKeys, false);
      }, 100);
    } else {
      window.removeEventListener("keydown", this.preventDefaultForScrollKeys, false);
    }
  }
  clearSearchTextWatch() {
    if (this.clearSearchText) {
      this._searchText = "";
      this.isInDataUpdate = true;
      this.filterQuery = "";
      this.bhEventInput.emit("");
    }
  }
  // Added this to dynamically filter results in bh-type-ahead
  onMenuItemUpdate() {
    this._menuItems = typeof this.menuItems === "string" ? JSON.parse(this.menuItems) : this.menuItems;
    this.parseItemGroups();
  }
  // highlightSearchResult(result: string) {
  // let str = result.toLowerCase();
  //   let q = this.query.toLowerCase();
  // if (q && str.indexOf(q) > -1) {
  //   const tags = [];
  //   while (str.indexOf(q) > -1) {
  //     tags.push(<span>{result.slice(0, str.indexOf(q))}</span>);
  //     tags.push(
  //       <span
  //         style={{ color: "var(--color-text-common-primary)" }}
  //         class="typography--body-medium-semi-bold"
  //       >
  //         {result.slice(str.indexOf(q), str.indexOf(q) + q.length)}
  //       </span>
  //     );
  //     result = result.substring(str.indexOf(q) + q.length);
  //     str = result.toLowerCase();
  //   }
  //   if (result) tags.push(<span>{result}</span>);
  //   return (
  //     <span class="typography--body-medium">
  //       {tags.map((tag) => {
  //         return tag;
  //       })}
  //     </span>
  //   );
  // }
  //  return <span class="typography--body-medium">{result}</span>;
  // }
  highlightSearchResult(result) {
    let q = this.query.toLowerCase();
    const out = [];
    let buffer = "";
    let i = 0;
    let j = 0;
    while (i < result.length) {
      if (j < q.length && result[i].toLowerCase() === q[j]) {
        if (buffer) {
          out.push(h("span", null, buffer));
          buffer = "";
        }
        out.push(h("span", {
          style: {
            color: "var(--color-text-common-primary)"
          },
          class: "typography--body-medium-semi-bold"
        }, result[i]));
        j++;
      } else {
        buffer += result[i];
      }
      i++;
    }
    if (buffer) out.push(h("span", null, buffer));
    if (j === q.length) {
      return h("span", {
        class: "typography--body-medium"
      }, out.map((t) => t));
    }
  }
  scrollToFocusedItem() {
    const focusedElement = this.element__container.querySelector(`.bh-menu__li[data-key="${this.keyFocusedItemValue}"]`);
    if (focusedElement) {
      focusedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onItemClicked(item) {
    if (this.isMultiSelect) {
      this._itemGroupsFlattened.map((i) => {
        i.isSelected = false;
      });
      this.checkedItem = (this.checkedItem.find((i) => i.value === item.value) ? this.checkedItem.filter((i) => i.value !== item.value) : [...this.checkedItem, item]).map((item2) => {
        item2.isSelected = true;
        return item2;
      });
      this.multiselectChange.emit({
        checkedItem: this.checkedItem,
        isSelectedAll: this.checkedItem.length === this._itemGroupsFlattenedRaw.length
      });
      this.bhEventChange.emit(this.checkedItem);
    } else {
      this.bhEventSelected.emit(item);
      this.close.emit();
    }
  }
  onCheckboxStateChange(item, isChecked) {
    if (!this.isMultiSelect) return;
    item.isSelected = isChecked;
    if (isChecked) {
      item.isSelected = true;
      this.checkedItem = [...this.checkedItem, item];
    } else {
      this.checkedItem = this.checkedItem.filter((i) => {
        if (i.value == item.value) {
          i.isSelected = false;
        }
      });
    }
  }
  preventDefaultForScrollKeys(event) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown" || event.code === "ArrowRight" || event.code === "ArrowLeft") {
      event.preventDefault();
      return false;
    }
  }
  handleKeydown(event) {
    var _a, _b, _c, _d;
    const currentIndex = this._itemGroupsFlattened.findIndex((item) => {
      return item.value === this.keyFocusedItemValue;
    });
    switch (event.code) {
      case "ArrowUp":
        if (currentIndex - 1 >= 0) {
          this.keyFocusedItemValue = this._itemGroupsFlattened[currentIndex - 1].value;
        } else if (currentIndex === 0) {
          if (this.isMultiSelect && this.isSelectAll) {
            this.keyFocusedItemValue = SELECT_ALL;
          } else if (!this.isMultiSelect && this.isUnselectable) {
            this.keyFocusedItemValue = UNSELECT;
          }
        }
        if (((_a = this.element__container.querySelector(".bh-menu__ul")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top) > ((_b = this.element__container.querySelector(`.bh-menu__li[data-key="${this.keyFocusedItemValue}"]`)) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().top)) {
          this.element__container.querySelector(".bh-menu__ul").scrollTo(0, this.element__container.querySelector(".bh-menu__ul").scrollTop - this.element__container.querySelector(".bh-menu__ul").clientHeight / 2 > 0 ? this.element__container.querySelector(".bh-menu__ul").scrollTop - this.element__container.querySelector(".bh-menu__ul").clientHeight / 2 : 0);
        }
        break;
      case "ArrowDown":
        if (currentIndex > -1 && currentIndex + 1 < this._itemGroupsFlattened.length) {
          this.keyFocusedItemValue = this._itemGroupsFlattened[currentIndex + 1].value;
          if (((_c = this.element__container.querySelector(".bh-menu__ul")) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().bottom) < ((_d = this.element__container.querySelector(`.bh-menu__li[data-key="${this.keyFocusedItemValue}"]`)) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().bottom)) {
            const scrollableHeight = this.element__container.querySelector(".bh-menu__ul").scrollHeight - this.element__container.querySelector(".bh-menu__ul").clientHeight;
            this.element__container.querySelector(".bh-menu__ul").scrollTo(0, this.element__container.querySelector(".bh-menu__ul").scrollTop + this.element__container.querySelector(".bh-menu__ul").clientHeight / 2 < scrollableHeight ? this.element__container.querySelector(".bh-menu__ul").scrollTop + this.element__container.querySelector(".bh-menu__ul").clientHeight / 2 : scrollableHeight);
          }
        } else if (currentIndex === -1 && (this.keyFocusedItemValue === SELECT_ALL || this.keyFocusedItemValue === UNSELECT)) {
          this.keyFocusedItemValue = this._itemGroupsFlattened[0].value;
        }
        break;
      case "Space":
        if (!this.isDropDownMenu) {
          if (this.isMultiSelect) {
            if (this.isSelectAll && this.keyFocusedItemValue === SELECT_ALL) {
              this.handleSelectAll();
            } else {
              this.onItemClicked(this._itemGroupsFlattened.find((item) => {
                if (item === null || item === void 0 ? void 0 : item.isDisabled) return false;
                return item.value === this.keyFocusedItemValue;
              }));
            }
          }
        }
        break;
      case "Enter":
        if (this.isDropDownMenu) {
          if (this.isMultiSelect) {
            if (this.isSelectAll && this.keyFocusedItemValue === SELECT_ALL) {
              this.handleSelectAll();
            } else {
              this.onItemClicked(this._itemGroupsFlattened.find((item) => {
                if (item === null || item === void 0 ? void 0 : item.isDisabled) return false;
                return item.value === this.keyFocusedItemValue;
              }));
            }
          } else {
            this.onItemClicked(this._itemGroupsFlattened.find((item) => {
              if (item === null || item === void 0 ? void 0 : item.isDisabled) return false;
              return item.value === this.keyFocusedItemValue;
            }));
          }
        } else {
          if (this.isMultiSelect) {
            this.close.emit();
          } else {
            if (this.isUnselectable && this.keyFocusedItemValue === UNSELECT) {
              this.handleUnselect();
              this.close.emit();
            } else {
              this.onItemClicked(this._itemGroupsFlattened.find((item) => {
                if (item === null || item === void 0 ? void 0 : item.isDisabled) return false;
                return item.value === this.keyFocusedItemValue;
              }));
              this.close.emit();
            }
          }
        }
        break;
      case "Tab":
        if (this.isDropDownMenu) {
          if (this.isMultiSelect) {
            this.close.emit();
          } else {
            if (this.isUnselectable && this.keyFocusedItemValue === UNSELECT) {
              this.handleUnselect();
              this.close.emit();
            } else {
              this.onItemClicked(this._itemGroupsFlattened.find((item) => {
                if (item === null || item === void 0 ? void 0 : item.isDisabled) return false;
                return item.value === this.keyFocusedItemValue;
              }));
              this.close.emit();
            }
          }
        }
        break;
    }
  }
  handleUnselect() {
    if (this.isMultiSelect) {
      this.checkedItem = [];
    }
    this.unselect.emit();
  }
  handleSelectAll() {
    const selectableRawItems = this._itemGroupsFlattened.filter((item) => !item.isDisabled);
    const selectableItems = this._itemGroupsFlattened.filter((item) => !item.isDisabled);
    if (this.checkedItem.length === selectableRawItems.length && this.checkedItem.length === selectableItems.length) {
      this._itemGroupsFlattened.map((i) => {
        i.isSelected = false;
      });
      this.checkedItem = [];
    } else {
      let common = this._itemGroupsFlattened.filter((filterItem) => {
        return this.checkedItem.some((flattenItem) => flattenItem.value === filterItem.value);
      });
      if (common.length == this._itemGroupsFlattened.length) {
        common.map((commonElement) => {
          this.checkedItem.splice(this.checkedItem.indexOf(this.checkedItem.find((i) => {
            if (i.value == commonElement.value) {
              i.isSelected = false;
              return i;
            }
          })), 1);
        });
      } else {
        if (common.length == 0) {
          this._itemGroupsFlattened.map((item) => {
            if (!item.isDisabled) {
              item.isSelected = true;
              this.checkedItem.push(item);
            }
            return;
          });
        } else {
          let difference = this._itemGroupsFlattened.filter((filterItem) => {
            return !this.checkedItem.some((flattenItem) => {
              return flattenItem.value === filterItem.value;
            });
          });
          if (difference.length > 0) {
            difference.map((item) => {
              if (!item.isDisabled) {
                item.isSelected = true;
                this.checkedItem.push(item);
              }
            });
          }
        }
      }
    }
    this.multiselectChange.emit({
      checkedItem: this.checkedItem,
      isSelectedAll: this.checkedItem.length === this._itemGroupsFlattenedRaw.length
    });
    this.parseItemGroups();
  }
  componentWillLoad() {
    var _a, _b, _c, _d, _e, _f;
    if (this.clearSearchText) {
      this._searchText = "";
    }
    if (typeof this.menuItems == "undefined") {
      console.warn("Menu items cant be undefined");
      return;
    }
    this._menuItems = typeof this.menuItems === "string" ? JSON.parse(this.menuItems) : this.menuItems;
    let _itemGroups, _itemGroupsRaw;
    if (Array.isArray(this._menuItems)) {
      if (typeof this._menuItems[0] === "string") {
        _itemGroups = [{
          items: this.filterQuery ? this._menuItems.filter((item) => {
            if (this.searchMode == "contains") {
              return item.toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return item.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase()) == 0;
            }
          }).map((item) => {
            return {
              label: item,
              value: item
            };
          }) : this._menuItems.map((item) => {
            return {
              label: item,
              value: item
            };
          })
        }];
        _itemGroupsRaw = [{
          items: this._menuItems.map((item) => {
            return {
              label: item,
              value: item
            };
          })
        }];
      } else {
        _itemGroups = [{
          items: this.filterQuery ? this._menuItems.filter((item) => {
            if (this.searchMode == "contains") {
              return item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return (item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase())) == 0;
            }
          }).map((item) => {
            return item;
          }) : this._menuItems.map((item) => {
            return item;
          })
        }];
        _itemGroupsRaw = [{
          items: this._menuItems.map((item) => {
            return item;
          })
        }];
      }
    } else {
      _itemGroups = (_a = this._menuItems) === null || _a === void 0 ? void 0 : _a.itemGroups.map((itemGroup) => {
        return {
          header: itemGroup.header,
          items: this.filterQuery ? itemGroup.items.filter((item) => {
            if (this.searchMode == "contains") {
              return item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return (item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase())) == 0;
            }
          }) : itemGroup.items,
          divider: itemGroup.divider
        };
      });
      _itemGroupsRaw = (_b = this._menuItems) === null || _b === void 0 ? void 0 : _b.itemGroups.map((itemGroup) => {
        return {
          header: itemGroup.header,
          items: itemGroup.items,
          divider: itemGroup.divider
        };
      });
    }
    this._itemGroups = _itemGroups;
    this._itemGroupsRaw = _itemGroupsRaw;
    let _flattened = [];
    if (!!this._itemGroups) {
      (_c = this._itemGroups) === null || _c === void 0 ? void 0 : _c.forEach((ig) => {
        _flattened = _flattened.concat(ig.items);
      });
    }
    this._itemGroupsFlattened = _flattened;
    let _flattenedRaw = [];
    (_d = this._itemGroupsRaw) === null || _d === void 0 ? void 0 : _d.forEach((ig) => {
      _flattenedRaw = _flattenedRaw.concat(ig.items);
    });
    this._itemGroupsFlattenedRaw = _flattenedRaw;
    if (this.isMultiSelect) {
      let _checkedItem = [];
      (_e = this._itemGroupsRaw) === null || _e === void 0 ? void 0 : _e.forEach((ig) => {
        _checkedItem = _checkedItem.concat(ig.items.filter((item) => {
          if (item.isSelected === false) return false;
          if (typeof this.selected == "string") {
            let selectedItems = JSON.parse(this.selected);
            selectedItems.forEach((i) => {
              if (item.value == i) {
                item.isSelected = true;
              }
            });
          }
          return item.isSelected || this.checkedItem.find((ci) => {
            return ci.value === item.value;
          });
        }));
      });
      this.checkedItem = _checkedItem;
      if (this.checkedItem.length > 0) {
        this.multiselectChange.emit({
          checkedItem: this.checkedItem,
          isSelectedAll: this.checkedItem.length === this._itemGroupsFlattenedRaw.length
        });
      }
    } else {
      if (typeof this.selected == "string") {
        (_f = this._itemGroups) === null || _f === void 0 ? void 0 : _f.forEach((ig) => {
          if (ig.value == this.selected) {
            ig.isSelected = true;
          }
        });
      }
    }
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        }
      }));
    } catch (e) {
    }
    this.wheelOpt = supportsPassive ? {
      passive: false
    } : false;
    this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  }
  componentDidRender() {
    if (!this.isSearchable && !this.menuItems) {
      setTimeout(() => {
        var _a, _b, _c;
        this.containerMinWidth = ((_c = (_b = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelector(".bh-menu__li")) === null || _b === void 0 ? void 0 : _b.querySelector("span")) === null || _c === void 0 ? void 0 : _c.clientWidth) + 64;
      }, 0);
    }
    if (this.isEllipsis) {
      this.scheduleTooltipMeasurement();
    }
  }
  disconnectedCallback() {
    if (this.tooltipMeasureRaf) {
      cancelAnimationFrame(this.tooltipMeasureRaf);
      this.tooltipMeasureRaf = void 0;
    }
  }
  getItemKey(item) {
    var _a, _b;
    return String((_b = (_a = item === null || item === void 0 ? void 0 : item.value) !== null && _a !== void 0 ? _a : item === null || item === void 0 ? void 0 : item.label) !== null && _b !== void 0 ? _b : "");
  }
  getRowTooltipKey(item, itemGroupIndex, itemIndex) {
    return `${itemGroupIndex}-${itemIndex}-${this.getItemKey(item)}`;
  }
  isLabelTruncated(labelEl) {
    const availableWidth = labelEl.getBoundingClientRect().width;
    if (!availableWidth || availableWidth <= 1) return false;
    const text = (labelEl.getAttribute("data-tooltip-text") || labelEl.textContent || "").trim();
    if (!text) return false;
    const style = window.getComputedStyle(labelEl);
    const font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const paddingLeft = parseFloat(style.paddingLeft || "0") || 0;
    const paddingRight = parseFloat(style.paddingRight || "0") || 0;
    const contentWidth = Math.max(availableWidth - paddingLeft - paddingRight, 0);
    if (!this.tooltipMeasureCanvas) {
      this.tooltipMeasureCanvas = document.createElement("canvas");
    }
    const context = this.tooltipMeasureCanvas.getContext("2d");
    if (!context) return false;
    context.font = font;
    const textWidth = context.measureText(text).width;
    return textWidth > contentWidth + 1;
  }
  isTooltipMapEqual(nextMap) {
    const prevKeys = Object.keys(this.tooltipByItemKey);
    const nextKeys = Object.keys(nextMap);
    if (prevKeys.length !== nextKeys.length) return false;
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (this.tooltipByItemKey[key] !== nextMap[key]) return false;
    }
    return true;
  }
  scheduleTooltipMeasurement() {
    if (!this.element__container) return;
    if (this.tooltipMeasureRaf) {
      cancelAnimationFrame(this.tooltipMeasureRaf);
    }
    this.tooltipMeasureRaf = requestAnimationFrame(() => {
      this.tooltipMeasureRaf = void 0;
      const labels = Array.from(this.element__container.querySelectorAll(".bh-menu__li-label"));
      const nextMap = {};
      labels.forEach((labelEl) => {
        const key = labelEl.getAttribute("data-tooltip-key");
        if (!key) return;
        nextMap[key] = this.isLabelTruncated(labelEl);
      });
      if (!this.isTooltipMapEqual(nextMap)) {
        this.tooltipByItemKey = nextMap;
      }
    });
  }
  parseItemGroups() {
    var _a, _b, _c;
    let _itemGroups, _itemGroupsRaw;
    if (Array.isArray(this._menuItems)) {
      if (typeof this._menuItems[0] === "string") {
        _itemGroups = [{
          items: this.filterQuery ? this._menuItems.filter((item) => {
            if (this.searchMode == "contains") {
              return item.trim().toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return item.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase()) == 0;
            }
          }).map((item) => {
            return {
              label: item,
              value: item
            };
          }) : this._menuItems.map((item) => {
            return {
              label: item,
              value: item
            };
          })
        }];
        _itemGroupsRaw = [{
          items: this._menuItems.map((item) => {
            return {
              label: item,
              value: item
            };
          })
        }];
      } else {
        _itemGroups = [{
          items: this.filterQuery ? this._menuItems.filter((item) => {
            if (this.searchMode == "contains") {
              return item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return (item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase())) == 0;
            }
          }).map((item) => {
            return item;
          }) : this._menuItems.map((item) => {
            return item;
          })
        }];
        _itemGroupsRaw = [{
          items: this._menuItems.map((item) => {
            return item;
          })
        }];
      }
    } else {
      _itemGroups = (_a = this._menuItems) === null || _a === void 0 ? void 0 : _a.itemGroups.map((itemGroup) => {
        return {
          header: itemGroup.header,
          items: this.filterQuery ? itemGroup.items.filter((item) => {
            if (this.searchMode == "contains") {
              return item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().includes(this.filterQuery.toLowerCase());
            }
            if (this.searchMode == "startWith") {
              return (item === null || item === void 0 ? void 0 : item.label.trim().toLowerCase().indexOf(this.filterQuery.trim().toLowerCase())) == 0;
            }
          }) : itemGroup.items,
          divider: itemGroup.divider
        };
      });
      _itemGroupsRaw = (_b = this._menuItems) === null || _b === void 0 ? void 0 : _b.itemGroups.map((itemGroup) => {
        return {
          header: itemGroup.header,
          items: itemGroup.items,
          divider: itemGroup.divider
        };
      });
    }
    this._itemGroups = _itemGroups;
    this._itemGroupsRaw = _itemGroupsRaw;
    let _flattened = [];
    if (!!this._itemGroups) {
      (_c = this._itemGroups) === null || _c === void 0 ? void 0 : _c.forEach((ig) => {
        _flattened = _flattened.concat(ig.items);
      });
    }
    this._itemGroupsFlattened = _flattened;
    let _flattenedRaw = [];
    this._itemGroupsRaw.forEach((ig) => {
      _flattenedRaw = _flattenedRaw.concat(ig.items);
    });
    this._itemGroupsFlattenedRaw = _flattenedRaw;
    if (this._itemGroups[0].items.length > 0) {
      this.keyFocusedItemValue = this._itemGroupsFlattened[0].value;
    }
    if (this.isMultiSelect) {
      let _checkedItem = [];
      this._itemGroupsRaw.forEach((ig) => {
        _checkedItem = _checkedItem.concat(ig.items.filter((item) => {
          if (item.isSelected === false) return false;
          return item.isSelected || this.checkedItem.find((ci) => {
            return ci.value === item.value;
          });
        }));
      });
      this.checkedItem = _checkedItem;
      if (this.checkedItem.length > 0 && !this.isInDataUpdate) {
        this.multiselectChange.emit({
          checkedItem: this.checkedItem,
          isSelectedAll: this.checkedItem.length === this._itemGroupsFlattenedRaw.length
        });
      }
    }
  }
  isEllipsisActive(elem) {
    if (elem) {
      return elem.scrollWidth > elem.clientWidth;
    }
    return true;
  }
  render() {
    var _a, _b, _c, _d, _e;
    try {
      const prefix = this.host.tagName.toLowerCase().replace(components.menu.tagNameBase, "");
      const Components = generateComponentLiteralWithPrefix(prefix);
      if (this.isInDataUpdate) {
        this.parseItemGroups();
        setTimeout(() => {
          this.isInDataUpdate = false;
        });
      }
      return h(Host, {
        key: "159232b5096c05c7d4b2509a9d5d04408182a9d5",
        class: "bh-menu"
      }, h("div", {
        key: "733425ed174fefc5c8d765e712f5e329faba26b8",
        part: "menuContainer",
        class: `bh-menu__container width--${this.menuWidth}`,
        ref: (el) => {
          this.element__container = el;
        },
        style: this.menuWidth === "fluid" ? {
          minWidth: this.containerMinWidth ? `${this.containerMinWidth}px` : `10vw`
        } : {},
        tabIndex: 0,
        onKeyDown: (event) => {
          this.handleKeydown(event);
        }
      }, this.isSearchable && h("div", {
        class: "bh-menu__search-container"
      }, h(Components.textInput, {
        class: "bh-menu__search-text-input",
        placeholder: this.placeholder ? this.placeholder : "search",
        startIcon: "search",
        isSmall: true,
        isFluid: true,
        value: this._searchText,
        onBhEventInput: (event) => {
          this._searchText = event.detail;
          event.preventDefault();
          event.stopPropagation();
          this.isInDataUpdate = true;
          this.filterQuery = event.detail;
          this.bhEventInput.emit(event.detail);
          this.tooltipByItemKey = {};
        },
        onBhEventChange: (event) => {
          event.preventDefault();
          event.stopPropagation();
        }
      })), this.menuItems && this._itemGroups && h("ul", {
        class: `bh-menu__ul ${this.isSearchable ? "no-padding--top" : ""} ${!this._itemGroups[0].items.length ? "no-padding--bottom no-padding--top" : ""} ${!Array.isArray(this._menuItems) && !!this._menuItems && ((_b = (_a = this._menuItems) === null || _a === void 0 ? void 0 : _a.ctas) === null || _b === void 0 ? void 0 : _b.length) > 0 ? "no-padding--bottom" : ""} ${this.menuHeight === "small" ? "small" : ""}`
      }, this.isUnselectable && h("li", {
        "data-key": `${UNSELECT}`,
        class: `bh-menu__li ${this.keyFocusedItemValue === UNSELECT && this.keyboardFocused ? "key-focused" : ""} typography--body-medium unselect ${this.menuHeight === "small" ? "small" : ""}`,
        onClick: () => {
          this.handleUnselect();
        }
      }, h("span", null, `[${this.placeholder ? this.placeholder : "Select"}]`)), this.isMultiSelect && this.isSelectAll && h("li", {
        "data-key": `${SELECT_ALL}`,
        class: `bh-menu__li ${this.keyFocusedItemValue === SELECT_ALL && this.keyboardFocused ? "key-focused" : ""} typography--body-medium ${this.menuHeight === "small" ? "small" : ""} ${this.checkedItem.length ? "selected" : ""}`,
        onClick: (event) => {
          this.handleSelectAll();
          event.preventDefault();
          event.stopPropagation();
        }
      }, h("span", {
        class: "bh-menu__li-checkbox"
      }, h(Components.checkbox, {
        isUnfocusable: true,
        isChecked: this.checkedItem.length > 0 ? true : false,
        isIndeterminate: this.checkedItem.length !== this._itemGroupsFlattenedRaw.length ? this.checkedItem.length === 0 ? false : true : false,
        onBhEventChange: (event) => {
          this.handleSelectAll();
          event.preventDefault();
          event.stopPropagation();
        }
      })), h("span", null, "Select All")), this.isMultiSelect && this.isSelectAll && h(Components.divider, {
        marginTop: "xxsmall",
        marginBottom: "xxsmall"
      }), this._itemGroups.map((itemGroup, itemGroupIndex) => {
        var _a2, _b2;
        return h("div", {
          class: "bh-menu__item-group",
          part: "menuItemGroup"
        }, itemGroup.items.length > 0 && h("div", null, itemGroup.header && h("div", {
          class: `bh-menu__sub-header typography--label-small ${((_b2 = (_a2 = this._itemGroups) === null || _a2 === void 0 ? void 0 : _a2.filter((ig) => ig.items.length > 0)[0]) === null || _b2 === void 0 ? void 0 : _b2.header) === itemGroup.header ? "first-group" : ""}`
        }, h("span", {
          class: "bh-menu__sub-header-label"
        }, itemGroup.header)), itemGroup.items.map((item, itemIndex) => {
          var _a3;
          const rowTooltipKey = this.getRowTooltipKey(item, itemGroupIndex, itemIndex);
          return h("li", {
            class: `bh-menu__li ${item.className ? item.className : ""} ${item.value === this.keyFocusedItemValue && this.keyboardFocused ? "key-focused" : ""} typography--body-medium ${this.selected == item.value ? "selected" : ""} ${this.checkedItem.find((i) => (i === null || i === void 0 ? void 0 : i.value) === item.value) ? "selected" : ""} ${this.menuHeight === "small" ? "small" : ""} ${this.isItemPaddingRight ? "item-padding-right" : ""} ${this.isMultiSelect ? "multiselect" : ""}
                                ${item.isDisabled ? "disabled" : ""}`,
            "data-key": item.value,
            onClick: (event) => {
              if (item.isDisabled) return;
              this.onItemClicked(item);
              if (this.stopClickPropagation) return;
              event.preventDefault();
              event.stopPropagation();
            }
          }, item.icon && !this.isMultiSelect && h("span", {
            class: "bh-menu__li-icon"
          }, h("i", {
            class: "material-icons material-icons-outlined typography--icon-small"
          }, item.icon)), item.customIcon && !this.isMultiSelect && h("span", {
            class: "bh-menu__li-icon"
          }, h(Components.icon, {
            "custom-icon": item.customIcon,
            "custom-icon-alt": item.customIconAlt,
            size: "small"
          })), this.isMultiSelect && h("span", {
            class: "bh-menu__li-checkbox"
          }, h(Components.checkbox, {
            isUnfocusable: true,
            isChecked: ((_a3 = this.checkedItem) === null || _a3 === void 0 ? void 0 : _a3.find((i) => i.value === item.value)) ? true : false,
            isDisabled: item.isDisabled,
            onBhEventChange: (event) => {
              this.onCheckboxStateChange(item, event.target.checked);
              event.preventDefault();
              event.stopPropagation();
            }
          })), h("span", {
            "data-tooltip-key": rowTooltipKey,
            "data-tooltip-text": (item === null || item === void 0 ? void 0 : item.label) || "",
            class: `bh-menu__li-label ${this.isEllipsis ? "ellipsis" : ""} ${this.isMultiSelect ? "multiselect" : ""}`
          }, this.isEllipsis && this.tooltipByItemKey[rowTooltipKey] ? h("div", null, h(Components.tooltip, {
            message: item === null || item === void 0 ? void 0 : item.label,
            placement: this.tooltipPlacement,
            inline: this.isSearchable ? false : this.tooltipIsInline,
            tooltipLeftPadding: this.tooltipLeftPadding
          }, this.query ? this.highlightSearchResult(item === null || item === void 0 ? void 0 : item.label) : item === null || item === void 0 ? void 0 : item.label)) : this.query ? this.highlightSearchResult(item === null || item === void 0 ? void 0 : item.label) : item === null || item === void 0 ? void 0 : item.label), item.badge && h("span", {
            class: "bh-menu__badge"
          }, h(Components.badge, {
            label: item.badge,
            theme: "neutral"
          })));
        }), itemGroup.divider && h(Components.divider, {
          marginTop: "xxsmall",
          marginBottom: "xxsmall"
        })));
      })), ((_c = this._itemGroups) === null || _c === void 0 ? void 0 : _c.filter((itemGroup) => itemGroup.items.length > 0).length) === 0 && h("div", {
        class: `bh-menu__null-state ${this.isTypeAhead ? "type-ahead--padding" : ""}`
      }, h("p", {
        class: "bh-menu__null-state-copy typography--body-medium"
      }, this.isTypeAhead ? h("div", {
        style: {
          display: "flex",
          minWidth: "0px",
          justifyContent: "center"
        }
      }, h("span", {
        style: {
          flexShrink: "0"
        }
      }, this.noMatchText, " "), h("p", {
        style: {
          textOverflow: "ellipsis",
          margin: "0px",
          overflow: "hidden"
        }
      }, '"', this.query), h("span", {
        style: {
          flexShrink: "0"
        }
      }, '"')) : h("span", null, this.noOptionAvailableText))), !Array.isArray(this._menuItems) && ((_d = this._menuItems) === null || _d === void 0 ? void 0 : _d.ctas) && h("div", {
        class: "bh-menu__cta-container"
      }, (_e = this._menuItems) === null || _e === void 0 ? void 0 : _e.ctas.map((ctaProp, ctaIndex) => {
        var _a2, _b2;
        return ctaIndex >= 2 ? null : h("div", {
          class: "bh-menu__cta",
          style: {
            width: `${100 / (!Array.isArray(this._menuItems) && ((_a2 = this._menuItems) === null || _a2 === void 0 ? void 0 : _a2.ctas.length) > 2 ? 50 : !Array.isArray(this._menuItems) ? (_b2 = this._menuItems) === null || _b2 === void 0 ? void 0 : _b2.ctas.length : 0)}%`
          }
        }, h(Components.button, {
          type: ctaProp.type,
          label: ctaProp === null || ctaProp === void 0 ? void 0 : ctaProp.label,
          isSmall: ctaProp.size === "medium" ? false : true,
          isFluid: true,
          isDisabled: ctaProp.isDisabled,
          isLoading: ctaProp.isLoading,
          leftIcon: ctaProp.leftIcon,
          rightIcon: ctaProp.rightIcon,
          onClick: () => {
            if (ctaProp.isDisabled) return;
            this.ctaClick.emit(ctaProp);
            this.bhEventCtaClick.emit(ctaProp.key);
          },
          "data-key": ctaProp.key
        }));
      }))));
    } catch (err) {
      console.warn(MENU_ERROR_MESSAGE);
    }
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isFocused": ["watchIsFocused"],
      "clearSearchText": ["clearSearchTextWatch"],
      "menuItems": ["onMenuItemUpdate"]
    };
  }
};
BhMenu.style = BhMenuStyle0;
export {
  BhMenu as bh_menu
};
//# sourceMappingURL=bh-menu.entry-L5RHYU7W.js.map
