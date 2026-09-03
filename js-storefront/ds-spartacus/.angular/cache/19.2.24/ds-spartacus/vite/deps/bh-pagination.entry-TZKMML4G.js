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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-pagination.entry.js
var bhPaginationCss = ".bh-pagination{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.bh-pagination__container--page-count{display:flex;align-items:center}.bh-pagination__page-count-label--descriptor{color:var(--color-text-common-secondary);margin-right:var(--spacing-margin-small)}.bh-pagination__page-count--dropdown{}.bh-pagination__page-count-label--counter{color:var(--color-text-common-secondary);margin-left:var(--spacing-margin-large)}.bh-pagination__container--paginator{display:flex;align-items:center}.bh-pagination__paginator-button{color:var(--color-text-common-secondary);cursor:pointer;display:block;outline:none;padding:var(--spacing-padding-xxsmall);text-align:center;width:20px;border-radius:50%}.bh-pagination__paginator-button.hidden{display:none}.bh-pagination__paginator-button:hover{color:var(--color-text-common-primary);background-color:var(--color-fill-menu-highlighted)}.bh-pagination__paginator-button:focus{color:var(--color-text-common-primary);background-color:var(--color-fill-menu-highlighted);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-pagination__paginator-button:focus:not(:focus-visible){box-shadow:none}.bh-pagination__paginator-button.active{color:var(--color-text-common-primary);background-color:var(--color-fill-menu-highlighted)}.bh-pagination__paginator-button.disabled,.bh-pagination__paginator-button.disabled:hover{background-color:transparent}.bh-pagination__paginator-button{margin-right:var(--spacing-margin-xxsmall)}.bh-pagination__paginator-chevron{width:20px;height:20px}.bh-pagination__paginator-chevron.disabled{cursor:not-allowed;color:var(--color-text-label-disabled-default);background-color:none}.bh-pagination__truncation{color:var(--color-text-common-secondary);display:block;padding:var(--spacing-padding-xxsmall);text-align:center;width:20px}.bh-pagination__truncation.hidden{display:none}.bh-pagination__paginator-chevron__icon.material-icons-outlined{font-size:16px;vertical-align:middle}.bh-inline-dropdown__menu-container .bh-menu__ul{word-break:normal}@media screen and (max-width: 599px){.bh-pagination{justify-content:center}.bh-pagination__container--page-count{display:none}}";
var BhPaginationStyle0 = bhPaginationCss;
var BhPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageNumberChange = createEvent(this, "pageNumberChange", 7);
    this.itemCountChange = createEvent(this, "itemCountChange", 7);
    this.dropdownOpened = createEvent(this, "dropdownOpened", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.pagePreSelect = 0;
    this.itemCountOptions = [10, 20, 50];
    this.manualPageChange = false;
    this.customUpdate = false;
    this.enableMicroInteraction = true;
    this.totalItemCount = 100;
    this.numOfPagesToExpose = 3;
    this.itemCount = void 0;
    this.itemPerPageText = "Items per page";
    this.refresh = false;
    this.totalPageCount = 0;
    this._itemCount = 10;
    this.currentPageNumber = 0;
    this._pagePreSelect = 0;
  }
  watchItemCountOptions() {
    if (typeof this.itemCountOptions === "string") {
      try {
        this._itemCountOptions = JSON.parse(this.itemCountOptions);
      } catch (_a) {
      }
    } else {
      this._itemCountOptions = this.itemCountOptions;
    }
  }
  watchTotalItemCount() {
    console.log("manualPageChange -----", this.manualPageChange);
    if (!this.manualPageChange) {
      this.currentPageNumber = 0;
    }
  }
  watchPagePreSelect() {
    this._pagePreSelect = this.pagePreSelect;
    if (this._pagePreSelect === 0) {
      this.currentPageNumber = this._pagePreSelect;
    }
    if (this._pagePreSelect > 0) {
      this.currentPageNumber = this._pagePreSelect - 1;
    }
  }
  watchItemCount() {
    if (this.itemCount > 0) {
      this._itemCount = this.itemCount;
      if (this.customUpdate) {
        this.currentPageNumber = 0;
      }
    }
  }
  watchRefresh() {
    if (this.refresh) {
      this.currentPageNumber = 0;
      this.pageNumberChange.emit(0);
      this.bhEventChange.emit({
        itemCount: this._itemCount,
        currentPage: this.currentPageNumber
      });
      this.bhEventSelected.emit({
        itemCount: this._itemCount,
        currentPage: this.currentPageNumber
      });
    }
    this.refresh = false;
  }
  handleItemCountSelected(event) {
    const itemCountNumber = Number(event.detail);
    const updatedPageNumber = Math.floor(this.currentPageNumber * this._itemCount / itemCountNumber);
    this._itemCount = itemCountNumber;
    this.currentPageNumber = updatedPageNumber;
    this.itemCountChange.emit({
      itemCount: itemCountNumber,
      currentPage: this.currentPageNumber
    });
    this.bhEventChange.emit({
      itemCount: itemCountNumber,
      currentPage: this.currentPageNumber
    });
    this.bhEventSelected.emit({
      itemCount: itemCountNumber,
      currentPage: this.currentPageNumber
    });
  }
  // Private Methods
  onSelectPreviousPage(event) {
    if (this.currentPageNumber < 1) return;
    this.onPageSelected(event, this.currentPageNumber - 1);
  }
  onSelectNextPage(event) {
    if (this.currentPageNumber > this.totalPageCount - 2) return;
    this.onPageSelected(event, this.currentPageNumber + 1);
  }
  onPageSelected(event, index) {
    event.preventDefault();
    this.currentPageNumber = index;
    this.pageNumberChange.emit(index);
    this.bhEventChange.emit({
      itemCount: this._itemCount,
      currentPage: this.currentPageNumber
    });
    this.bhEventSelected.emit({
      itemCount: this._itemCount,
      currentPage: this.currentPageNumber
    });
  }
  componentWillLoad() {
    try {
      if (typeof this.itemCountOptions === "string") {
        try {
          this._itemCountOptions = JSON.parse(this.itemCountOptions);
        } catch (_a) {
        }
      } else {
        this._itemCountOptions = this.itemCountOptions;
      }
      if (this.itemCount > 0) {
        this._itemCount = this.itemCount;
      } else {
        this._itemCount = this._itemCountOptions[0];
      }
      if (this.pagePreSelect === 0) {
        this._pagePreSelect = this.pagePreSelect;
        this.currentPageNumber = this._pagePreSelect;
      }
      if (this.pagePreSelect > 0) {
        this._pagePreSelect = this.pagePreSelect;
        this.currentPageNumber = this._pagePreSelect - 1;
      }
    } catch (_b) {
    }
  }
  // componentShouldUpdate(){
  // 	// console.log("hiiiiiiiiiii",this.refresh);
  // 	if(this.refresh){
  // 		this.currentPageNumber=0;
  // 		console.log(this.currentPageNumber);
  // 		this.refresh = false;
  // 	}
  // }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.pagination.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    if (!this._itemCountOptions || this._itemCountOptions.length < 1) return;
    const firstItemIndex = this.currentPageNumber * this._itemCount + 1;
    const lastItemIndex = (this.currentPageNumber + 1) * this._itemCount;
    const pages = [];
    for (let i = 0; i < this.totalItemCount / this._itemCount; i++) pages.push(i);
    const pagesWithoutFirstLast = pages.filter((p) => p !== 0 && p !== pages.length - 1);
    this.totalPageCount = pages.length;
    const pagesToDisplay = this.currentPageNumber <= this.numOfPagesToExpose - 1 ? pagesWithoutFirstLast.filter((p) => p > 0 && p <= this.numOfPagesToExpose) : this.currentPageNumber >= this.totalPageCount - this.numOfPagesToExpose ? pagesWithoutFirstLast.filter((p) => p < this.totalPageCount - 1 && p >= this.totalPageCount - this.numOfPagesToExpose - 1) : pagesWithoutFirstLast.filter((p) => p >= this.currentPageNumber - this.numOfPagesToExpose / 2 && p < this.currentPageNumber + this.numOfPagesToExpose / 2);
    return h(Host, {
      class: "bh-pagination"
    }, h("div", {
      class: "bh-pagination__container--page-count"
    }, h("span", {
      class: "typography--body-medium bh-pagination__page-count-label--descriptor"
    }, this.itemPerPageText), h("div", {
      class: "bh-pagination__page-count--dropdown"
    }, h(Components.inlineDropdown, {
      typography: "body-medium",
      enableMicroInteraction: this.enableMicroInteraction,
      menuItems: {
        itemGroups: [{
          items: this._itemCountOptions.map((opt) => {
            return {
              value: opt,
              label: opt.toString()
            };
          })
        }]
      },
      value: this._itemCount,
      width: "auto",
      isSmall: true,
      onBhEventChange: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleItemCountSelected(e);
      },
      onOpened: (event) => {
        this.dropdownOpened.emit(event.detail);
      },
      onBhEventSelected: (e) => {
        e.preventDefault();
        e.stopPropagation();
      }
    })), h("span", {
      class: "typography--body-medium bh-pagination__page-count-label--counter"
    }, this.totalItemCount > 0 && `${firstItemIndex} - ${lastItemIndex > this.totalItemCount ? this.totalItemCount : lastItemIndex} of ${this.totalItemCount}`)), h("div", {
      class: "bh-pagination__container--paginator"
    }, h("span", {
      tabindex: this.currentPageNumber > 0 ? 0 : -1,
      class: `bh-pagination__paginator-button motion--normal bh-pagination__paginator-chevron  typography--body-medium ${this.currentPageNumber === 0 ? "disabled" : ""}`,
      onClick: (event) => {
        this.onSelectPreviousPage(event);
      },
      onKeyPress: (event) => {
        if (event.key === "Enter") {
          this.onSelectPreviousPage(event);
        }
      }
    }, h("i", {
      class: "bh-pagination__paginator-chevron__icon material-icons material-icons-outlined bh-button__icon"
    }, "keyboard_arrow_left")), h("span", {
      tabindex: "0",
      class: `typography--body-medium motion--normal bh-pagination__paginator-button ${this.currentPageNumber === 0 ? "active" : ""}`,
      onClick: (event) => {
        this.onPageSelected(event, 0);
      },
      onKeyPress: (event) => {
        if (event.key === "Enter") {
          this.onPageSelected(event, 0);
        }
      }
    }, "1"), h("span", {
      class: `typography--body-medium bh-pagination__truncation ${pagesToDisplay[0] > 1 ? "" : "hidden"}`
    }, "..."), pagesWithoutFirstLast.map((index) => {
      return h("span", {
        tabindex: "0",
        class: `typography--body-medium motion--normal bh-pagination__paginator-button ${index === this.currentPageNumber ? "active" : ""} ${pagesToDisplay.find((p) => p === index) ? "" : "hidden"}`,
        onClick: (event) => {
          this.onPageSelected(event, index);
        },
        onKeyPress: (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            this.onPageSelected(event, index);
          }
        }
      }, index + 1);
    }), h("span", {
      class: `typography--body-medium bh-pagination__truncation ${pagesToDisplay[pagesToDisplay.length - 1] < pages.length - 2 ? "" : "hidden"}`
    }, "..."), h("span", {
      tabindex: "0",
      class: `typography--body-medium motion--normal bh-pagination__paginator-button ${this.totalPageCount < 2 ? "hidden" : ""} ${this.currentPageNumber === this.totalPageCount - 1 ? "active" : ""}`,
      onClick: (event) => {
        this.onPageSelected(event, this.totalPageCount - 1);
      },
      onKeyPress: (event) => {
        if (event.key === "Enter") {
          this.onPageSelected(event, this.totalPageCount - 1);
        }
      }
    }, this.totalPageCount), h("span", {
      tabindex: this.currentPageNumber < this.totalPageCount - 1 ? 0 : -1,
      class: `bh-pagination__paginator-button motion--normal bh-pagination__paginator-chevron typography--body-medium  ${this.currentPageNumber === this.totalPageCount - 1 ? "disabled" : ""}`,
      onClick: (event) => {
        this.onSelectNextPage(event);
      },
      onKeyPress: (event) => {
        if (event.key === "Enter") {
          this.onSelectNextPage(event);
        }
      }
    }, h("i", {
      class: "bh-pagination__paginator-chevron__icon material-icons material-icons-outlined bh-button__icon"
    }, "keyboard_arrow_right"))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "itemCountOptions": ["watchItemCountOptions"],
      "totalItemCount": ["watchTotalItemCount"],
      "pagePreSelect": ["watchPagePreSelect"],
      "itemCount": ["watchItemCount"],
      "refresh": ["watchRefresh"]
    };
  }
};
BhPagination.style = BhPaginationStyle0;
export {
  BhPagination as bh_pagination
};
//# sourceMappingURL=bh-pagination.entry-TZKMML4G.js.map
