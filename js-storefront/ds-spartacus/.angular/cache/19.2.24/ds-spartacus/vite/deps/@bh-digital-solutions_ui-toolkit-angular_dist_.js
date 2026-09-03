import {
  bootstrapLazy
} from "./chunk-5YQC5RSE.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  NgModule,
  NgZone,
  Output,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import {
  __decorate
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/loader.js
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return void 0;
  return bootstrapLazy(JSON.parse('[["bh-accordion",[[4,"bh-accordion",{"header":[1],"isOpen":[4,"open"],"subtext":[513],"size":[1],"iconOrientation":[1,"icon-orientation"],"viewport":[32]},null,{"isOpen":["watchIsOpen"]}]]],["bh-alert",[[0,"bh-alert",{"alerts":[513],"type":[1],"timeout":[4],"closeOnCtaClick":[4,"close-on-cta-click"],"dismissAfter":[2,"dismiss-after"],"_alerts":[32],"viewport":[32],"opacity":[32]},[[9,"resize","handleResize"],[0,"addAlert","addAlertItem"],[0,"removeAlertItem","removeAlertItem"]],{"alerts":["watchAlerts"]}]]],["bh-alert-item",[[4,"bh-alert-item",{"alertkey":[1],"index":[2],"type":[1],"status":[1],"message":[1],"timeout":[4],"dismissible":[4],"dismissAfter":[2,"dismiss-after"],"isHTMLTemplate":[1540,"html-template"],"isOpened":[1540,"isopen"],"isOpen":[32]},[[0,"open","openAlertItemEvent"],[0,"close","closeAlertItemEvent"]],{"isOpened":["watchIsOpen"]}]]],["bh-app-shell-menu",[[0,"bh-app-shell-menu",{"type":[1],"mobileViewLabel":[4,"mobile-view-label"],"navigation":[1],"navigationSelected":[1,"navigation-selected"],"settings":[1],"userInfo":[16],"isSideMenuOpen":[4,"is-side-menu-open"],"isSettingsMenuOpen":[4,"is-settings-menu-open"],"isMobileMenuOpen":[4,"is-mobile-menu-open"],"settingsSelected":[1,"settings-selected"],"enableMicroInteraction":[4,"enable-micro-interaction"],"_navigation":[32],"_navigationSections":[32],"_showNavigationSections":[32],"settingsMenuKeyboardNavigationKey":[32],"settingsSubMenuKeyboardNavigationKey":[32],"isInSubmenuSelection":[32],"isSubmenuBackSelected":[32],"_navigationSelected":[32],"itemKeyOnHover":[32],"isOverHoverDuractionThreshold":[32],"openSubmenuParentKey":[32],"itemKeyVal":[32],"_settings":[32],"_settingsSelected":[32],"viewport":[32]},[[9,"resize","handleResize"]],{"navigation":["watchNavigation"],"navigationSelected":["watchNavigationSelected"],"itemKeyOnHover":["watchItemKeyOnHover"],"settings":["watchSettings"],"isSettingsMenuOpen":["watchIsSettingsMenuOpen"],"settingsSelected":["watchSettingsSelected"]}]]],["bh-avatar",[[0,"bh-avatar",{"size":[513],"type":[513],"image":[513],"firstname":[513],"lastname":[513],"isRing":[4,"ring"],"isActive":[4,"active"]}]]],["bh-avatar-group",[[0,"bh-avatar-group",{"type":[513]}]]],["bh-badge",[[4,"bh-badge",{"position":[1],"label":[1],"color":[1],"theme":[1025],"type":[1],"icon":[1],"offset":[1],"isFluid":[4,"fluid"]}]]],["bh-bar-chart",[[0,"bh-bar-chart",{"data":[1],"option":[1],"height":[2],"chartOptionOverride":[1032,"chart-option-override"],"theme":[8],"tooltipLeftAlignmentIssue":[4,"tooltip-left-alignment-issue"],"_data":[32],"_option":[32],"_chartOptionOverride":[32],"_chartOption":[32],"disabledDatasetIndex":[32],"_theme":[32]},null,{"data":["watchData"],"option":["watchOption"],"chartOptionOverride":["watchChartOptionOverride"],"theme":["watchTheme"]}]]],["bh-button-dropdown",[[0,"bh-button-dropdown",{"label":[1],"type":[1],"isFluid":[4,"fluid"],"isDisabled":[4,"disabled"],"isLoading":[4,"loading"],"leftIcon":[1,"left-icon"],"rightIcon":[1,"right-icon"],"menuItems":[1025,"menu-items"],"additionalMenuItems":[1,"additional-menu-items"],"menuWidth":[1,"width"],"isMultiSelect":[4,"multiselect"],"isSelectAll":[4,"selectall"],"isSearchable":[4,"searchable"],"isUnselectable":[4,"unselectable"],"placeholder":[1],"isSmall":[4,"small"],"iconOverride":[1,"icon-override"],"tooltipMessage":[513,"tooltip-message"],"flipVertical":[4,"flip-vertical"],"isOpen":[1540,"open"],"flipOffset":[1,"flip-offset"],"isEllipsis":[4,"ellipsis"],"isInline":[4,"inline"],"enableMicroInteraction":[4,"enable-micro-interaction"],"isReadyToStyle":[32],"badgeLabel":[32],"_flipOffset":[32],"filpped":[32],"inlineStyle":[32],"isInlineStyleSet":[32],"inlineUuid":[32],"interval":[32]},[[9,"resize","handleResize"],[16,"bhEventScroll","bhEventScroll"]],{"isOpen":["isOpenChange"]}]]],["bh-button-group",[[4,"bh-button-group"]]],["bh-chip-group",[[4,"bh-chip-group",{"isOverflow":[516,"overflow"]}]]],["bh-custom-time-picker",[[0,"bh-custom-time-picker",{"format":[1],"time":[1],"displaySeconds":[4,"display-seconds"],"label":[1],"labelvalue":[1],"isOpen":[32],"hour":[32],"minute":[32],"seconds":[32],"meridiem":[32],"isValid":[32],"hours":[32],"minsSeconds":[32]},null,{"time":["timeChanged"]}]]],["bh-data-table",[[0,"bh-data-table",{"option":[513],"content":[513],"sortState":[1025,"sort-state"],"_option":[32],"_content":[32],"_sortState":[32],"dataToDisplay":[32],"currentPage":[32],"checkedItem":[32],"filterQuery":[32],"itemCount":[32],"headerCheckbox":[32],"isInDataUpdate":[32],"cellWidths":[32],"viewport":[32],"selectCellLeft":[32],"isDropdownOpen":[32],"isActionMenuOpen":[32],"tableCellWidthRatios":[32],"checkboxColumnOffset":[32],"breakpoint":[32],"isCellsWithFullTableWidth":[32],"tableBodyScrollState":[32]},[[9,"resize","handleResize"]],{"option":["watchOption"],"content":["watchContent"],"sortState":["watchSortState"]}]]],["bh-date-picker",[[0,"bh-date-picker",{"todayLabel":[1,"today-label"],"cancelLabel":[1,"cancel-label"],"disableHelper":[4,"disable-helper"],"allowManualValidation":[4,"allow-manual-validation"],"placeholder":[1],"id":[1],"label":[1],"reset":[4],"customDisableDate":[1,"custom-disable-date"],"handleNegativeTimezone":[4,"handle-negative-timezone"],"width":[1],"value":[513],"minValue":[1,"min-value"],"maxValue":[1,"max-value"],"dateFormat":[513,"date-format"],"isInfo":[513,"info"],"isReadOnly":[516,"readonly"],"isInvalid":[516,"invalid"],"isRequired":[516,"required"],"errorMessage":[1,"error-message"],"clearButton":[4,"clear-button"],"isSmall":[516,"small"],"disabled":[4],"disableUserInput":[4,"disable-user-input"],"_value":[32],"_disabled":[32]},null,{"width":["watchWidth"],"reset":["resetDate"],"value":["watchValue"],"disabled":["watchDisabled"]}]]],["bh-date-time-picker",[[0,"bh-date-time-picker",{"id":[1],"dateLabel":[1,"date-label"],"timeLabel":[1,"time-label"],"handleNegativeTimezone":[4,"handle-negative-timezone"],"width":[1],"disableHelper":[4,"disable-helper"],"value":[513],"timeFormat":[513,"time-format"],"isReadOnly":[516,"readonly"],"minValue":[1,"min-value"],"maxValue":[1,"max-value"],"isInvalid":[516,"invalid"],"isRequired":[516,"required"],"dateErrorMessage":[1,"date-error-message"],"timeErrorMessage":[1,"time-error-message"],"reset":[516],"_value":[32],"viewport":[32]},[[9,"resize","handleResize"]],{"value":["watchValue"],"reset":["resetnewDate"]}]]],["bh-datetime-range-picker",[[0,"bh-datetime-range-picker",{"minDate":[1537,"min-date"],"maxDate":[1537,"max-date"],"selectedRange":[1537,"selected-range"],"presets":[1537],"startIcon":[1537,"start-icon"],"label":[1537],"helperText":[1537,"helper-text"],"placeholder":[1537],"isDisabled":[1540,"is-disabled"],"id":[1537],"dateFormat":[1537,"date-format"],"isSingleDatePicker":[1540,"is-single-date-picker"],"showSecondsInTimePicker":[1540,"show-seconds-in-time-picker"],"timeFormat":[1537,"time-format"],"showTimepicker":[1540,"show-timepicker"],"required":[516],"errorMessage":[1,"error-message"],"startTimerLable":[1,"start-timer-lable"],"fromtabularlist":[4],"endTimerLable":[1,"end-timer-lable"],"isFluid":[516,"fluid"],"isSmall":[516,"small"],"applyLabel":[1537,"apply-label"],"resetLabel":[1537,"reset-label"],"isInline":[4,"inline"],"showPicker":[32],"selectedStart":[32],"selectedEnd":[32],"tempStart":[32],"tempEnd":[32],"hoverDate":[32],"currentMonth":[32],"currentYear":[32],"currentYearGridStart":[32],"showMonthGrid":[32],"showYearGrid":[32],"startTime":[32],"endTime":[32],"selectedDateValue":[32],"startTimeValue":[32],"endTimeValue":[32],"startTimeLabel":[32],"endTimeLabel":[32],"tempSelectedPreset":[32],"selectedPreset":[32],"selectedStartTimeValue":[32],"selectedEndTimeValue":[32],"touched":[32],"inputWidth":[32],"_tooltip":[32],"_tooltipMessage":[32],"_custom_range_selected":[32],"inlineStyle":[32]},[[16,"bhEventScroll","bhEventScroll"]],{"currentYear":["handleYearChange"],"startTime":["handleStartTimeChange"],"endTime":["handleEndTimeChange"],"tempStart":["handleSelectedStartDateChange"],"tempEnd":["handleSelectedEndDateChange"],"tempSelectedPreset":["handleSelectedPresetLabelChange"]}]]],["bh-dialog",[[4,"bh-dialog",{"header":[1],"message":[1],"isOpen":[1540,"open"],"ctas":[1],"illustration":[1],"isDismissible":[4,"dismissible"],"isHTMLTemplate":[4,"html-template"],"enableMicroInteraction":[4,"enable-micro-interaction"],"wrapperIsOpen":[32],"_ctas":[32],"wrapperStyle":[32]},[[0,"open","openDialogEvent"],[0,"close","closeDialogEvent"]],{"isOpen":["watchIsOpen"],"ctas":["watchCtas"]}]]],["bh-divider",[[0,"bh-divider",{"type":[513],"marginLeft":[513,"marginleft"],"marginRight":[513,"marginright"],"marginTop":[513,"margintop"],"marginBottom":[513,"marginbottom"]}]]],["bh-error",[[0,"bh-error",{"source":[1],"errorNumber":[513,"error-number"],"title":[513],"description":[513],"ctas":[1],"_ctas":[32]},null,{"ctas":["watchCtas"]}]]],["bh-footer",[[0,"bh-footer",{"marginTop":[513,"margintop"],"termsText":[513,"termstext"],"theme":[1],"showLogo":[4,"show-logo"],"logo":[513],"termsHREF":[513,"termshref"],"privacyText":[513,"privacytext"],"privacyHREF":[513,"privacyhref"],"cookiesText":[513,"cookiestext"],"cookiesHREF":[513,"cookieshref"]}]]],["bh-form-message",[[0,"bh-form-message",{"message":[513],"isError":[516,"error"],"isDisabled":[516,"disabled"]}]]],["bh-header",[[4,"bh-header",{"type":[513],"closeSettingsMenu":[8,"close-settings-menu"],"logo":[513],"appname":[513],"headerLimit":[514,"header-limit"],"iconLinks":[513,"icon-links"],"_iconLinks":[32]},null,{"iconLinks":["watchIconLinks"]}]]],["bh-illustration",[[4,"bh-illustration",{"source":[1],"title":[1],"description":[1],"htmlDescription":[1028,"html-description"]},null,{"source":["setImgSrc"]}]]],["bh-incrementer",[[0,"bh-incrementer",{"label":[513],"unit":[513],"placeholderNumber":[514,"placeholder-number"],"minValue":[514,"min-value"],"maxValue":[514,"max-value"],"incrementFactor":[514,"increment-factor"],"value":[513],"message":[513],"isReadOnly":[516,"readonly"],"isError":[516,"error"],"isDisabled":[516,"disabled"],"isFluid":[516,"fluid"]}]]],["bh-inline-dropdown",[[0,"bh-inline-dropdown",{"typography":[1],"menuItems":[1,"menu-items"],"menuWidth":[1,"width"],"isSearchable":[4,"searchable"],"selectedValue":[1537,"selected-value"],"value":[1544],"isSmall":[516,"small"],"inlineAnchorId":[513,"inline-anchor-id"],"isInline":[4,"inline"],"isEllipsis":[4,"ellipsis"],"enableMicroInteraction":[4,"enable-micro-interaction"],"keyboardFocused":[4,"keyboard-focused"],"closeDropdownOnScroll":[4,"close-dropdown-on-scroll"],"noOptionAvailableText":[1537,"no-option-available-text"],"isOpen":[1540,"open"],"flipOffset":[2,"flip-offset"],"searchablePlaceholder":[513,"searchable-placeholder"],"interval":[32],"data":[32],"keySelected":[32],"isFlipped":[32],"isInlineStyleSet":[32],"inlineStyle":[32],"inlineUuid":[32]},[[9,"resize","handleResize"],[16,"bhEventScroll","bhEventScroll"]],{"menuItems":["watchMenuItems"],"isOpen":["isOpenChange"]}]]],["bh-kpi",[[0,"bh-kpi",{"kpiTitle":[513,"kpi-title"],"value":[520],"sub":[520],"sup":[520],"icon":[513],"stats":[513],"_stats":[32]},null,{"stats":["watchStats"]}]]],["bh-line-chart",[[0,"bh-line-chart",{"data":[1],"option":[1],"height":[2],"yaxisallowstring":[4],"chartOptionOverride":[1032,"chart-option-override"],"theme":[8],"_data":[32],"_option":[32],"_chartOptionOverride":[32],"_chartOption":[32],"_theme":[32],"disabledDatasetIndex":[32]},null,{"data":["watchData"],"option":["watchOption"],"chartOptionOverride":["watchChartOptionOverride"],"theme":["watchTheme"]}]]],["bh-list",[[4,"bh-list",{"padding":[1]}]]],["bh-menu",[[0,"bh-menu",{"menuItems":[1025,"menu-items"],"searchMode":[1,"search-mode"],"isFocused":[4,"focused"],"keyboardFocused":[4,"keyboard-focused"],"noMatchText":[1537,"no-match-text"],"noOptionAvailableText":[1537,"no-option-available-text"],"menuWidth":[1,"width"],"menuHeight":[1,"height"],"isUnselectable":[4,"unselectable"],"isDropDownMenu":[4,"is-drop-down-menu"],"placeholder":[1],"isMultiSelect":[516,"multiselect"],"isSelectAll":[4,"selectall"],"isSearchable":[4,"searchable"],"isItemPaddingRight":[4,"is-item-padding-right"],"selected":[1],"isEllipsis":[4,"ellipsis"],"tooltipLeftPadding":[2,"tooltipleftpadding"],"stopClickPropagation":[516,"stop-click-propagation"],"isTypeAhead":[4,"is-type-ahead"],"tooltipIsInline":[4,"tooltipisinline"],"tooltipPlacement":[1,"tooltipplacement"],"clearSearchText":[4,"clear-search-text"],"query":[1],"_menuItems":[32],"_itemGroups":[32],"_itemGroupsFlattened":[32],"_itemGroupsRaw":[32],"_itemGroupsFlattenedRaw":[32],"keyFocusedItemValue":[32],"checkedItem":[32],"isInDataUpdate":[32],"filterQuery":[32],"_selected":[32],"containerMinWidth":[32],"tooltipByItemKey":[32],"_searchText":[32]},null,{"isFocused":["watchIsFocused"],"clearSearchText":["clearSearchTextWatch"],"menuItems":["onMenuItemUpdate"]}]]],["bh-menu-item",[[4,"bh-menu-item",{"id":[513],"type":[513],"isSelected":[516,"selected"],"label":[513],"icon":[513],"chevron":[513],"isHovered":[4,"is-hovered"],"isFocusable":[4,"is-focusable"],"isKeyboardFocused":[4,"is-keyboard-focused"],"isSubmenuBackSelected":[4,"is-submenu-back-selected"]}]]],["bh-mobile-menu",[[4,"bh-mobile-menu",{"userfirstname":[513],"userlastname":[513],"userimage":[513],"useremail":[513],"mobileViewLabel":[516,"mobile-view-label"],"isOpen":[516,"open"],"navigation":[16],"settings":[16],"settingsMenuOpened":[32]},[[0,"settingsSubmenuOpened","settingsSubmenuOpenHandler"],[0,"settingsSubmenuClosed","settingsSubmenuClosedHandler"]]]]],["bh-nav-menu",[[4,"bh-nav-menu",{"type":[513],"withAppShellMenu":[4,"with-app-shell-menu"],"navigation":[16],"lastRendered":[32],"expandedIndex":[32],"children":[32]},null,{"navigation":["watchNavigation"]}]]],["bh-pagination",[[0,"bh-pagination",{"pagePreSelect":[514,"page-pre-select"],"itemCountOptions":[513,"item-count-options"],"manualPageChange":[516,"manual-page-change"],"customUpdate":[516,"custom-update"],"enableMicroInteraction":[516,"enable-micro-interaction"],"totalItemCount":[514,"total-item-count"],"numOfPagesToExpose":[514,"num-of-pages-to-expose"],"itemCount":[514,"item-count"],"itemPerPageText":[1537,"item-per-page-text"],"refresh":[4],"totalPageCount":[32],"_itemCount":[32],"currentPageNumber":[32],"_pagePreSelect":[32]},null,{"itemCountOptions":["watchItemCountOptions"],"totalItemCount":["watchTotalItemCount"],"pagePreSelect":["watchPagePreSelect"],"itemCount":["watchItemCount"],"refresh":["watchRefresh"]}]]],["bh-panel",[[4,"bh-panel",{"isOpen":[1540,"open"],"width":[1],"header":[1],"isPadded":[4,"padded"],"tooltipOnCloseIcon":[1540,"tooltip-on-close-icon"],"outsidePanelClick":[4,"outside-panel-click"],"closebtnText":[1537,"closebtn-text"],"enableMicroInteraction":[4,"enable-micro-interaction"]},[[0,"open","openPanelEvent"],[16,"isSettingsMenuOpenUpdate","isSettingsMenuOpenUpdate"],[0,"close","closePanelEvent"]],{"isOpen":["watchIsOpen"]}]]],["bh-progress-bar",[[0,"bh-progress-bar",{"mode":[1],"size":[1],"progress":[1026],"automaticTimeout":[2,"automatic-timeout"],"isInAutoProgress":[32]},[[0,"beginIncrement","beginIncrement"],[0,"progressComplete","progressCompleteEvent"],[0,"progressReset","progressResetEvent"]],{"progress":["watchProgress"]}]]],["bh-scatter-chart",[[0,"bh-scatter-chart",{"data":[1],"option":[1],"height":[2],"chartOptionOverride":[1032,"chart-option-override"],"theme":[8],"_data":[32],"_option":[32],"_chartOptionOverride":[32],"_chartOption":[32],"_theme":[32],"disabledDatasetIndex":[32]},null,{"data":["watchData"],"option":["watchOption"],"chartOptionOverride":["watchcCartOptionOverride"],"theme":["watchTheme"]}]]],["bh-selection-group",[[4,"bh-selection-group",{"layout":[513],"isGrid":[516,"grid"],"message":[513],"isError":[516,"error"],"isDisabled":[516,"disabled"]}]]],["bh-settings-menu",[[4,"bh-settings-menu",{"settings":[16],"userfirstname":[513],"userlastname":[513],"userimage":[513],"useremail":[513],"isMobile":[516,"mobile"],"isOpen":[516,"open"],"isSubmenuBackSelected":[4,"is-submenu-back-selected"],"isFocusable":[4,"is-focusable"],"selectedIndex":[32],"children":[32],"isReady":[32]},[[16,"isSettingsMenuOpenUpdate","isSettingsMenuOpenUpdate"]],{"settings":["watchSettings"],"isMobile":["watchMobileHandler"],"isOpen":["watchOpenHandler"]}]]],["bh-slider",[[0,"bh-slider",{"value":[513],"minValue":[2,"min-value"],"minLabel":[1,"min-label"],"maxValue":[2,"max-value"],"maxLabel":[1,"max-label"],"size":[1],"isDisabled":[4,"is-disabled"],"textOnly":[4,"text-only"],"suffixText":[1,"suffix-text"],"prefixText":[1,"prefix-text"],"sliderLabel":[1,"slider-label"],"_value":[32],"showMinMax":[32],"minMaxLabelType":[32],"_isDisabled":[32]},null,{"value":["watchValue"],"minValue":["watchMinValue"],"minLabel":["watchMinLabel"],"maxValue":["watchMaxValue"],"maxLabel":["watchMaxLabel"],"is-disabled":["watchIsDisabled"]}]]],["bh-spinner",[[0,"bh-spinner",{"position":[1],"size":[1],"offset":[1],"_offset":[32]},null,{"offset":["watchOffset"]}]]],["bh-status-indicator",[[4,"bh-status-indicator",{"position":[1],"color":[1],"theme":[1025],"size":[1],"offset":[1],"isFluid":[4,"fluid"]}]]],["bh-stepper",[[0,"bh-stepper",{"steps":[1],"layout":[513],"current":[1538],"_steps":[32],"completedStep":[32],"breakpoint":[32],"isReadyToEmitComplete":[32]},[[0,"reset","resetListener"],[9,"resize","handleResize"]],{"steps":["watchSteps"],"current":["updateCurrent"]}]]],["bh-system-alert-item",[[0,"bh-system-alert-item",{"index":[2],"status":[1],"alertkey":[1],"timestamp":[1],"header":[1],"message":[1],"isOpen":[1540,"open"],"ctas":[1],"opacity":[16],"closeOnCtaClick":[4,"close-on-cta-click"],"_ctas":[32]},[[0,"open","openSystemAlertItemEvent"],[0,"close","closeSystemAlertItemEvent"]],{"isOpen":["watchIsOpen"],"ctas":["watchCtas"]}]]],["bh-tabs",[[0,"bh-tabs",{"ellipsisTextLimit":[2,"ellipsis-text-limit"],"displayTabLimit":[1026,"display-tab-limit"],"reorderTabs":[4,"reorder-tabs"],"removeTab":[4,"remove-tab"],"items":[1],"activeKey":[1025,"active-key"],"isBorder":[4,"border"],"isSmall":[4,"small"],"menuWidth":[1,"menu-width"],"menuEllipsis":[4,"menu-ellipsis"],"_ellipsisTextLimit":[32],"draggedIndex":[32],"_hideClose":[32],"_items":[32],"selectedKey":[32],"isTruncationMenuOpen":[32],"truncateIndex":[32],"truncateIndexPrev":[32],"viewport":[32],"isInUpdate":[32],"firstItemWidth":[32]},[[9,"resize","handleResize"],[0,"setActiveTab","setActiveTab"]],{"items":["changeItems"],"activeKey":["watchActiveKey"],"isTruncationMenuOpen":["watchIsTruncationMenuOpen"]}]]],["bh-text-area",[[0,"bh-text-area",{"label":[513],"placeholder":[513],"messageType":[513,"messagetype"],"messageText":[1537,"messagetext"],"fluidHorz":[516,"fluidhorz"],"fluidVert":[516,"fluidvert"],"isError":[516,"error"],"isDisabled":[516,"disabled"],"maxChar":[514,"maxcharacters"],"isReadOnly":[1540,"readonly"],"value":[1537],"isRequired":[516,"required"],"isInlineEditing":[1540,"inlineediting"],"helpText":[1537,"helptext"],"valueCount":[32],"countString":[32],"isInitializedAsReadOnly":[32]}]]],["bh-time-picker",[[0,"bh-time-picker",{"id":[1],"label":[1],"width":[1],"format":[513],"isSmall":[516,"small"],"isDisabled":[516,"disabled"],"value":[513],"isReadOnly":[516,"readonly"],"isInvalid":[516,"invalid"],"isRequired":[516,"required"],"errorMessage":[1,"error-message"],"disableHelper":[4,"disable-helper"],"_value":[32],"_isDisabled":[32],"_isSmall":[32]},null,{"width":["watchWidth"],"value":["watchValue"],"isDisabled":["watchDisabled"],"isSmall":["watchSmall"]}]]],["bh-time-zone-picker",[[0,"bh-time-zone-picker",{"menuWidth":[1,"width"],"value":[520],"label":[513],"isRequired":[516,"required"],"placeholder":[513],"message":[513],"isSmall":[516,"small"],"isFluid":[516,"fluid"],"isError":[516,"error"],"isDisabled":[516,"disabled"],"selectedText":[32],"menuItems":[32]},null,{"value":["handleValue"]}]]],["bh-toggle",[[0,"bh-toggle",{"value":[513],"label":[513],"name":[513],"isChecked":[516,"checked"],"isDisabled":[516,"disabled"],"isError":[516,"error"]}]]],["bh-token-demo",[[0,"bh-token-demo",{"tokens":[513]}]]],["bh-a_26",[[4,"bh-tabular-list",{"option":[1],"header":[1],"schema":[1],"payload":[1],"selectedItems":[8,"selected-items"],"customSelectedItems":[1,"custom-selected-items"],"id":[1],"customHtmlNoDataAvailable":[4,"custom-html-no-data-available"],"customSortPagination":[516,"custom-sort-pagination"],"noDataAvailable":[513,"no-data-available"],"isLoading":[1028,"loading"],"overridecss":[1],"enableMicroInteraction":[516,"enable-micro-interaction"],"itemCount":[514,"item-count"],"clearFilter":[4,"clear-filter"],"refresh":[4],"itemPerPageText":[1025,"item-per-page-text"],"searchByText":[1025,"search-by-text"],"dropdownAllText":[1025,"dropdown-all-text"],"applyLabelDateTimeRangeFilter":[1025,"apply-label-date-time-range-filter"],"resetLabelDateTimeRangeFilter":[1025,"reset-label-date-time-range-filter"],"placeholderDateTimeRangeFilter":[1025,"placeholder-date-time-range-filter"],"todayLabelDatePicker":[1025,"today-label-date-picker"],"cancelLabelDatePicker":[1025,"cancel-label-date-picker"],"_option":[32],"manualPageChange":[32],"_header":[32],"_schema":[32],"_payload":[32],"_selectedItems":[32],"sorter":[32],"dataToShow":[32],"isFirstTimeToRender":[32],"viewport":[32],"searchQuery":[32],"searchResults":[32],"dataIndexStart":[32],"dataIndexEnd":[32],"paginationOptions":[32],"isContextMenuShown":[32],"contextMenuHighlight":[32],"_overridecss":[32],"extraClass":[32],"_itemCount":[32],"_clearFilter":[32],"filterQueries":[32],"isTooltipShown":[32],"readyToBlurWithTabShift":[32],"isCollapsed":[32]},[[9,"resize","handleResize"],[0,"results","setSearchResults"]],{"option":["watchOption"],"header":["watchHeader"],"schema":["watchSchema"],"payload":["watchPayload"],"selectedItems":["watchSelectedItems"],"customSelectedItems":["watchCustomSelectedItems"],"id":["watchIdChange"],"overridecss":["watchOverrideCss"],"itemCount":["watchItemCount"],"clearFilter":["clearFilterWatch"]}],[1,"bh-a",{"type":[513],"font":[1],"href":[513],"target":[513],"text":[513],"isDisabled":[516,"disabled"],"noUnderline":[516,"nounderline"],"externalLink":[516,"external-link"],"leftIcon":[513,"left-icon"],"isFooter":[4,"is-footer"],"textLimit":[514,"text-limit"],"tabularwidth":[1],"rightIcon":[1537,"right-icon"]}],[4,"bh-action-bar",{"buttonDropdownFooterAction":[1,"button-dropdown-footer-action"],"footerActions":[1,"footer-actions"],"_buttonDropdownFooterAction":[32],"_footerActions":[32],"viewport":[32]},[[9,"resize","handleResize"]],{"buttonDropdownFooterAction":["WatchButtonDropdownFooterAction"],"footerActions":["watchFooterActions"]}],[0,"bh-action-menu",{"menuItems":[1025,"menu-items"],"disableTooltip":[516,"disable-tooltip"],"selectedValue":[1,"selected-value"],"additionalMenuItems":[1,"additional-menu-items"],"menuWidth":[1,"width"],"isMultiSelect":[4,"multiselect"],"flipHorizontal":[4,"flip-horizontal"],"isSelectAll":[4,"selectall"],"isSearchable":[4,"searchable"],"isUnselectable":[4,"unselectable"],"placeholder":[1],"isSmall":[4,"small"],"iconOverride":[1,"icon-override"],"keyboardFocused":[4,"keyboard-focused"],"isOpen":[1540,"open"],"flipOffset":[1,"flip-offset"],"isEllipsis":[4,"ellipsis"],"inlineAnchorId":[513,"inline-anchor-id"],"tooltipLeftPadding":[2,"tooltipleftpadding"],"tooltipIsInline":[4,"tooltipisinline"],"tooltipPlacement":[1,"tooltipplacement"],"isInline":[4,"inline"],"enableMicroInteraction":[4,"enable-micro-interaction"],"isReadyToStyle":[32],"badgeLabel":[32],"_flipOffset":[32],"filpped":[32],"inlineStyle":[32],"isInlineStyleSet":[32],"inlineUuid":[32],"interval":[32]},[[9,"resize","handleResize"],[16,"bhEventScroll","bhEventScroll"]],{"isOpen":["isOpenChange"]}],[1,"bh-app-shell",{"isMenuOpen":[516,"menu-open"],"type":[513],"applogo":[513],"appname":[513],"headerLimit":[514,"header-limit"],"userfirstname":[513],"userlastname":[513],"userimage":[513],"useremail":[513],"mobileViewLabel":[516,"mobile-view-label"],"iconLinks":[513,"icon-links"],"navigation":[1],"navigationSelected":[1,"navigation-selected"],"settings":[1],"settingsSelected":[1,"settings-selected"],"enableAppShellMenuMicroInteraction":[4,"enable-app-shell-menu-micro-interaction"],"viewport":[32],"isMobileMenuOpen":[32],"isSettingsMenuOpen":[32],"isSideMenuOpen":[32],"sideMenuHovered":[32],"renderMobile":[32],"_navigation":[32],"_navigationSelected":[32],"_settings":[32],"_settingsSelected":[32],"_iconLinks":[32],"progressBarSize":[32]},[[9,"resize","handleResize"],[0,"navSubMenuOpened","navSubMenuOpenedHandler"],[0,"navSubMenuClosed","navSubMenuClosedHandler"]],{"isSettingsMenuOpen":["watchIsSettingsMenuOpen"],"isMenuOpen":["watchIsMenuOpen"],"iconLinks":["watchIconLinks"],"navigation":["watchNavigation"],"navigationSelected":["watchNavigationSelected"],"settings":["watchSettings"],"settingsSelected":["watchSettingsSelected"]}],[0,"bh-breadcrumbs",{"items":[1],"isBorder":[4,"border"],"inlineAnchorId":[513,"inline-anchor-id"],"isInline":[4,"inline"],"menuWidth":[1,"menu-width"],"selectedItem":[8,"selected-item"],"_items":[32],"inlineStyle":[32],"isInlineStyleSet":[32],"_searchable":[32],"inlineUuid":[32],"isOptionMenuOpen":[32],"isOptionMenuHorizontallyFlipped":[32],"isTruncationMenuOpen":[32],"viewport":[32],"truncateIndex":[32]},[[9,"resize","handleResize"],[0,"addItem","addItem"]],{"_items":["watchItems"],"items":["changeItems"],"isTruncationMenuOpen":["watchIsTruncationMenuOpen"],"isOptionMenuOpen":["watchIsOptionMenuOpen"]}],[0,"bh-button",{"type":[513],"disableTooltip":[516,"disable-tooltip"],"label":[513],"leftIcon":[513,"left-icon"],"rightIcon":[513,"right-icon"],"tooltipMessage":[513,"tooltip-message"],"disabledTooltipMessage":[513,"disabled-tooltip-message"],"isDisabled":[516,"is-disabled"],"isFluid":[516,"fluid"],"isSmall":[516,"small"],"isLoading":[516,"loading"],"disableTooltipPlacement":[513,"disable-tooltip-placement"],"normalTooltipPlacement":[513,"normal-tooltip-placement"],"disablePointerEvent":[4,"disable-pointer-event"]}],[0,"bh-button-tabs",{"ellipsisTextLimit":[2,"ellipsis-text-limit"],"items":[1],"activeKey":[1025,"active-key"],"isSmall":[4,"small"],"tooltipMessage":[513,"tooltip-message"],"menuWidth":[1,"menu-width"],"_ellipsisTextLimit":[32],"hideToolip":[32],"_items":[32],"selectedKey":[32],"isTruncationMenuOpen":[32],"truncateIndex":[32],"truncateIndexPrev":[32],"viewport":[32],"isInUpdate":[32],"firstItemWidth":[32]},[[9,"resize","handleResize"],[0,"setActiveTab","setActiveTab"]],{"ellipsisTextLimit":["changeEllipsisTextLimit"],"items":["changeItems"],"activeKey":["watchActiveKey"],"isTruncationMenuOpen":["watchIsTruncationMenuOpen"]}],[4,"bh-card",{"heading":[1],"tooltipText":[513,"tooltiptext"],"border":[4],"headerActions":[1,"header-actions"],"subtext":[513],"icon":[513],"isFocusable":[4,"focusable"],"footerActions":[1,"footer-actions"],"actionMenu":[1,"action-menu"],"stopBubble":[516,"stopbubble"],"isExpandable":[4,"expandable"],"expandableOpen":[4,"expandable-open"],"_headerActions":[32],"_footerActions":[32],"withHeaderActionSlot":[32],"withFooterActionSlot":[32],"withTitleExtensionSlot":[32],"_actionMenu":[32],"viewport":[32],"isOpen":[32]},[[9,"resize","handleResize"]],{"headerActions":["watchHeaderActions"],"footerActions":["watchFooterActions"],"actionMenu":["watchActionMenu"],"isOpen":["watchIsOpen"]}],[0,"bh-chip",{"size":[513],"color":[513],"theme":[513],"preSelect":[516,"pre-select"],"type":[513],"isDisabled":[516,"disabled"],"dismissible":[516],"icon":[513],"link":[513],"label":[513],"selectedColor":[513,"selected-color"],"selectedTheme":[513,"selected-theme"],"plain":[516],"selected":[32],"dismissed":[32],"selectable":[32]},[[2,"click","toggleSelected"]],{"preSelect":["watchPreSelect"]}],[4,"bh-content",{"isSideMenuOpen":[516,"sidemenuopen"],"termsText":[513,"termstext"],"termsHREF":[513,"termshref"],"privacyText":[513,"privacytext"],"privacyHREF":[513,"privacyhref"],"cookiesText":[513,"cookiestext"],"cookiesHREF":[513,"cookieshref"],"progressBarMode":[1,"progress-bar-mode"],"contentPush":[516,"content-push"],"progress":[2],"showProgressBar":[4,"show-progress-bar"],"theme":[1],"showLogo":[4,"show-logo"],"isNoPadding":[4,"nopadding"],"backgroundColor":[1,"background-color"],"_backgroundColor":[32],"breakpoint":[32]},[[9,"resize","handleResize"]],{"backgroundColor":["watchBackgroundColor"]}],[0,"bh-date-range-picker",{"id":[1],"startDateLabel":[1,"start-date-label"],"isReset":[4,"reset"],"reset":[4],"endDateLabel":[1,"end-date-label"],"width":[1],"value":[16],"isReadOnly":[516,"readonly"],"isInvalid":[516,"invalid"],"isRequired":[516,"required"],"errorMessage":[1,"error-message"],"disableHelper":[4,"disablehelper"],"disableUserInput":[4,"disable-user-input"],"handleNegativeTimezone":[4,"handle-negative-timezone"],"dateFormat":[513,"date-format"],"startValue":[32],"endValue":[32],"viewport":[32]},[[9,"resize","handleResize"]],{"isReset":["resetDate"]}],[0,"bh-donut-chart",{"data":[1],"option":[1],"height":[2],"label":[1],"legendLayout":[1,"legend-layout"],"chartOptionOverride":[1032,"chart-option-override"],"theme":[8],"_data":[32],"_option":[32],"_label":[32],"_chartOptionOverride":[32],"_chartOption":[32],"_theme":[32],"disabledDatasetIndex":[32],"isMaxedOut":[32],"toMax":[32],"dataToRender":[32]},null,{"data":["watchData"],"option":["watchOption"],"label":["watchLabel"],"chartOptionOverride":["watchChartOptionOverride"],"theme":["watchTheme"]}],[0,"bh-dropdown",{"menuItems":[1,"menu-items"],"menuWidth":[1,"width"],"isSearchable":[4,"searchable"],"isMultiSelect":[4,"multiselect"],"isSelectAll":[4,"selectall"],"label":[513],"noOptionAvailableText":[1537,"no-option-available-text"],"isRequired":[516,"required"],"isUnselectable":[4,"unselectable"],"placeholder":[513],"searchablePlaceholder":[513,"searchable-placeholder"],"message":[513],"isFluid":[516,"fluid"],"isError":[516,"error"],"isDisabled":[516,"disabled"],"showAllLabel":[1,"showall-label"],"value":[520],"isSmall":[516,"small"],"inlineAnchorId":[513,"inline-anchor-id"],"isInline":[4,"inline"],"isEllipsis":[4,"ellipsis"],"isItemPaddingRight":[4,"is-item-padding-right"],"fromtabularlist":[4],"enableMicroInteraction":[4,"enable-micro-interaction"],"closeDropdownOnScroll":[4,"close-dropdown-on-scroll"],"isOpen":[1540,"open"],"flipOffset":[2,"flip-offset"],"selectedValue":[8,"selected-value"],"searchMode":[1,"search-mode"],"keyboardFocused":[4,"keyboard-focused"],"isOverflowHidden":[4,"overflow-hidden"],"interval":[32],"keySelected":[32],"selectedIcon":[32],"selectedCustomIcon":[32],"selectedCustomIconAlt":[32],"isFlipped":[32],"inlineStyle":[32],"isInlineStyleSet":[32],"inlineUuid":[32]},[[9,"resize","handleResize"],[16,"bhEventScroll","bhEventScroll"]],{"isOpen":["isOpenChange"]}],[0,"bh-icon",{"size":[1],"icon":[1],"color":[1],"href":[1],"target":[1],"customIcon":[1,"custom-icon"],"customIconAlt":[1,"custom-icon-alt"]}],[4,"bh-modal",{"header":[1],"subheader":[1],"width":[1],"isOpen":[1540,"open"],"ctas":[1],"isDismissible":[4,"dismissible"],"outsideModalClick":[4,"outside-modal-click"],"customizeClickEvent":[4,"customize-click-event"],"enableMicroInteraction":[4,"enable-micro-interaction"],"wrapperIsOpen":[32],"_ctas":[32],"containerStyle":[32],"subheaderStyle":[32],"viewport":[32]},[[0,"open","openModalEvent"],[0,"close","closeModalEvent"],[9,"resize","handleResize"]],{"isOpen":["watchIsOpen","watchOpen"],"ctas":["watchCtas"]}],[0,"bh-radio-button",{"value":[513],"label":[513],"name":[513],"isChecked":[516,"checked"],"isDisabled":[516,"disabled"],"isError":[516,"error"]}],[0,"bh-search",{"data":[520],"type":[1],"search":[513],"searchParams":[1,"search-params"],"maxLength":[514,"maxlength"],"value":[513],"placeholder":[513],"isFluid":[516,"fluid"],"isSmall":[516,"small"],"isDisabled":[516,"disabled"],"disableFuzzySearch":[516,"disablefuzzysearch"],"disablePointerEvent":[4,"disable-pointer-event"],"isError":[516,"error"],"isRounded":[516,"rounded"],"onFocus":[16],"onBlur":[16],"shouldTrim":[4,"should-trim"],"isButtonSearch":[516,"button-search"],"focusOnSearch":[516,"focus-on-search"],"_data":[32],"_searchBtn":[32],"_searchParams":[32],"filterQuery":[32],"searchResults":[32]},null,{"data":["watchData"],"search":["watchSearch"],"searchParams":["watchSearchParams"]}],[0,"bh-text-input",{"type":[513],"isMultiChipSearch":[4,"is-multi-chip-serach"],"label":[513],"isRequired":[516,"required"],"placeholder":[513],"message":[513],"isFluid":[516,"fluid"],"isError":[516,"error"],"isDisabled":[516,"disabled"],"startIcon":[513,"start-icon"],"endIcon":[513,"end-icon"],"stopClickPropagation":[516,"stop-click-propagation"],"maxLength":[514,"maxlength"],"pattern":[513],"value":[513],"isSmall":[516,"small"],"isRounded":[516,"rounded"],"isReadOnly":[516,"readonly"],"focusOnInput":[516,"focus-on-input"],"unit":[1],"isSmallWidth":[4,"is-small-width"],"onFocus":[16],"isInlineEditing":[1540,"inlineediting"],"hideTooltip":[32],"isEllipses":[32],"isInitializedAsReadOnly":[32]}],[4,"bh-title-wrapper",{"type":[513],"header":[513],"subtext":[513],"cta":[513],"_cta":[32],"breakpoint":[32],"withHeaderActionSlot":[32]},[[9,"resize","handleResize"]],{"cta":["watchCta"]}],[4,"bh-tooltip",{"message":[513],"ismessage":[516],"legendData":[513,"legenddata"],"tooltipTitle":[513,"tooltiptitle"],"tooltipMessageFromTop":[514,"tooltipmessagefromtop"],"tooltipLeftPadding":[514,"tooltipleftpadding"],"hide":[516],"invisible":[516],"isInline":[516,"inline"],"placement":[1],"isLegend":[516,"islegend"],"isTitle":[516,"istitle"],"isFromTabularlist":[516,"is-from-tabularlist"],"isShown":[32],"_isLegend":[32],"isReady":[32]},null,{"isShown":["isShownChange"],"isLegend":["isLegendChange"]}],[0,"bh-tree",{"id":[1],"payload":[1],"option":[1],"_payload":[32],"_option":[32]},null,{"payload":["watchPayload"],"option":["watchOption"]}],[0,"bh-type-ahead",{"isMultiChipSearch":[4,"is-multi-chip-serach"],"data":[513],"showrecent":[516],"value":[1537],"placeholder":[1],"isFluid":[516,"fluid"],"isSmall":[516,"small"],"isDisabled":[516,"disabled"],"isError":[516,"error"],"label":[513],"message":[513],"clear":[1540],"noMatchText":[1537,"no-match-text"],"_data":[32],"_showrecent":[32],"menuItems":[32],"isOpen":[32],"SelectedChipItems":[32],"isFocused":[32],"query":[32]},[[0,"results","setMenuItems"],[0,"query","setQuery"]],{"data":["watchData"],"showrecent":["watchShowrecent"],"isOpen":["watchIsOpen"],"clear":["watchClear"]}],[0,"bh-uploader",{"id":[1],"isSmall":[516,"small"],"helpText":[1,"help-text"],"fileType":[1,"file-type"],"maxFiles":[2,"max-files"],"method":[1],"maxFileSize":[2,"max-file-size"],"target":[1],"type":[1],"isTarget":[4,"istarget"],"leftIcon":[1,"left-icon"],"noAuto":[4,"no-auto"],"isDisabled":[516,"disabled"],"label":[1],"headers":[1],"reset":[64]},[[0,"upload","uploadEventHandler"]]],[0,"bh-vertical-menu",{"menuItems":[1,"menu-items"],"selected":[1025],"stopClickPropagation":[516,"stop-click-propagation"],"_menuItems":[32],"_selected":[32],"viewport":[32]},[[9,"resize","handleResize"]]],[0,"bh-checkbox",{"value":[513],"label":[513],"name":[513],"isChecked":[1540,"checked"],"isDisabled":[516,"disabled"],"isIndeterminate":[516,"indeterminate"],"isError":[516,"error"],"isUnfocusable":[516,"unfocusable"],"message":[513]}]]]]'), options);
};

// node_modules/@bh-digital-solutions/ui-toolkit/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();

// node_modules/@bh-digital-solutions/ui-toolkit-angular/dist/fesm2022/bh-digital-solutions-ui-toolkit-angular.mjs
var _c0 = ["*"];
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var BhA = class BhA2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhA_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhA2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhA2,
    selectors: [["bh-a"]],
    inputs: {
      externalLink: "externalLink",
      font: "font",
      href: "href",
      isDisabled: "isDisabled",
      isFooter: "isFooter",
      leftIcon: "leftIcon",
      noUnderline: "noUnderline",
      rightIcon: "rightIcon",
      tabularwidth: "tabularwidth",
      target: "target",
      text: "text",
      textLimit: "textLimit",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhA_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhA = __decorate([ProxyCmp({
  inputs: ["externalLink", "font", "href", "isDisabled", "isFooter", "leftIcon", "noUnderline", "rightIcon", "tabularwidth", "target", "text", "textLimit", "type"]
})], BhA);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhA, [{
    type: Component,
    args: [{
      selector: "bh-a",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["externalLink", "font", "href", "isDisabled", "isFooter", "leftIcon", "noUnderline", "rightIcon", "tabularwidth", "target", "text", "textLimit", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhAccordion = class BhAccordion2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAccordion2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAccordion2,
    selectors: [["bh-accordion"]],
    inputs: {
      header: "header",
      iconOrientation: "iconOrientation",
      isOpen: "isOpen",
      size: "size",
      subtext: "subtext"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAccordion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAccordion = __decorate([ProxyCmp({
  inputs: ["header", "iconOrientation", "isOpen", "size", "subtext"]
})], BhAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAccordion, [{
    type: Component,
    args: [{
      selector: "bh-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["header", "iconOrientation", "isOpen", "size", "subtext"],
      outputs: ["bhEventOpen", "bhEventClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }]
  });
})();
var BhActionBar = class BhActionBar2 {
  z;
  el;
  ctaClick = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhActionBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhActionBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhActionBar2,
    selectors: [["bh-action-bar"]],
    inputs: {
      buttonDropdownFooterAction: "buttonDropdownFooterAction",
      footerActions: "footerActions"
    },
    outputs: {
      ctaClick: "ctaClick",
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhActionBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhActionBar = __decorate([ProxyCmp({
  inputs: ["buttonDropdownFooterAction", "footerActions"]
})], BhActionBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhActionBar, [{
    type: Component,
    args: [{
      selector: "bh-action-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonDropdownFooterAction", "footerActions"],
      outputs: ["ctaClick", "bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ctaClick: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhActionMenu = class BhActionMenu2 {
  z;
  el;
  opened = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhActionMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhActionMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhActionMenu2,
    selectors: [["bh-action-menu"]],
    inputs: {
      additionalMenuItems: "additionalMenuItems",
      disableTooltip: "disableTooltip",
      enableMicroInteraction: "enableMicroInteraction",
      flipHorizontal: "flipHorizontal",
      flipOffset: "flipOffset",
      iconOverride: "iconOverride",
      inlineAnchorId: "inlineAnchorId",
      isEllipsis: "isEllipsis",
      isInline: "isInline",
      isMultiSelect: "isMultiSelect",
      isOpen: "isOpen",
      isSearchable: "isSearchable",
      isSelectAll: "isSelectAll",
      isSmall: "isSmall",
      isUnselectable: "isUnselectable",
      keyboardFocused: "keyboardFocused",
      menuItems: "menuItems",
      menuWidth: "menuWidth",
      placeholder: "placeholder",
      selectedValue: "selectedValue",
      tooltipIsInline: "tooltipIsInline",
      tooltipLeftPadding: "tooltipLeftPadding",
      tooltipPlacement: "tooltipPlacement"
    },
    outputs: {
      opened: "opened",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange",
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhActionMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhActionMenu = __decorate([ProxyCmp({
  inputs: ["additionalMenuItems", "disableTooltip", "enableMicroInteraction", "flipHorizontal", "flipOffset", "iconOverride", "inlineAnchorId", "isEllipsis", "isInline", "isMultiSelect", "isOpen", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "keyboardFocused", "menuItems", "menuWidth", "placeholder", "selectedValue", "tooltipIsInline", "tooltipLeftPadding", "tooltipPlacement"]
})], BhActionMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhActionMenu, [{
    type: Component,
    args: [{
      selector: "bh-action-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["additionalMenuItems", "disableTooltip", "enableMicroInteraction", "flipHorizontal", "flipOffset", "iconOverride", "inlineAnchorId", "isEllipsis", "isInline", "isMultiSelect", "isOpen", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "keyboardFocused", "menuItems", "menuWidth", "placeholder", "selectedValue", "tooltipIsInline", "tooltipLeftPadding", "tooltipPlacement"],
      outputs: ["opened", "bhEventOpen", "bhEventClose", "bhEventSelected", "bhEventChange", "bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    opened: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhAlert = class BhAlert2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAlert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAlert2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAlert2,
    selectors: [["bh-alert"]],
    inputs: {
      alerts: "alerts",
      closeOnCtaClick: "closeOnCtaClick",
      dismissAfter: "dismissAfter",
      timeout: "timeout",
      type: "type"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAlert_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAlert = __decorate([ProxyCmp({
  inputs: ["alerts", "closeOnCtaClick", "dismissAfter", "timeout", "type"]
})], BhAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAlert, [{
    type: Component,
    args: [{
      selector: "bh-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alerts", "closeOnCtaClick", "dismissAfter", "timeout", "type"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhAlertItem = class BhAlertItem2 {
  z;
  el;
  removeAlertItem = new EventEmitter();
  bhEventClose = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAlertItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAlertItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAlertItem2,
    selectors: [["bh-alert-item"]],
    inputs: {
      alertkey: "alertkey",
      dismissAfter: "dismissAfter",
      dismissible: "dismissible",
      index: "index",
      isHTMLTemplate: "isHTMLTemplate",
      isOpened: "isOpened",
      message: "message",
      status: "status",
      timeout: "timeout",
      type: "type"
    },
    outputs: {
      removeAlertItem: "removeAlertItem",
      bhEventClose: "bhEventClose"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAlertItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAlertItem = __decorate([ProxyCmp({
  inputs: ["alertkey", "dismissAfter", "dismissible", "index", "isHTMLTemplate", "isOpened", "message", "status", "timeout", "type"]
})], BhAlertItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAlertItem, [{
    type: Component,
    args: [{
      selector: "bh-alert-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alertkey", "dismissAfter", "dismissible", "index", "isHTMLTemplate", "isOpened", "message", "status", "timeout", "type"],
      outputs: ["removeAlertItem", "bhEventClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    removeAlertItem: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }]
  });
})();
var BhAppShell = class BhAppShell2 {
  z;
  el;
  isSettingsMenuOpenUpdate = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventScroll = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAppShell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAppShell2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAppShell2,
    selectors: [["bh-app-shell"]],
    inputs: {
      applogo: "applogo",
      appname: "appname",
      enableAppShellMenuMicroInteraction: "enableAppShellMenuMicroInteraction",
      headerLimit: "headerLimit",
      iconLinks: "iconLinks",
      isMenuOpen: "isMenuOpen",
      mobileViewLabel: "mobileViewLabel",
      navigation: "navigation",
      navigationSelected: "navigationSelected",
      settings: "settings",
      settingsSelected: "settingsSelected",
      type: "type",
      useremail: "useremail",
      userfirstname: "userfirstname",
      userimage: "userimage",
      userlastname: "userlastname"
    },
    outputs: {
      isSettingsMenuOpenUpdate: "isSettingsMenuOpenUpdate",
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange",
      bhEventScroll: "bhEventScroll"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAppShell_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAppShell = __decorate([ProxyCmp({
  inputs: ["applogo", "appname", "enableAppShellMenuMicroInteraction", "headerLimit", "iconLinks", "isMenuOpen", "mobileViewLabel", "navigation", "navigationSelected", "settings", "settingsSelected", "type", "useremail", "userfirstname", "userimage", "userlastname"]
})], BhAppShell);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAppShell, [{
    type: Component,
    args: [{
      selector: "bh-app-shell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["applogo", "appname", "enableAppShellMenuMicroInteraction", "headerLimit", "iconLinks", "isMenuOpen", "mobileViewLabel", "navigation", "navigationSelected", "settings", "settingsSelected", "type", "useremail", "userfirstname", "userimage", "userlastname"],
      outputs: ["isSettingsMenuOpenUpdate", "bhEventSelected", "bhEventChange", "bhEventScroll"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    isSettingsMenuOpenUpdate: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventScroll: [{
      type: Output
    }]
  });
})();
var BhAppShellMenu = class BhAppShellMenu2 {
  z;
  el;
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAppShellMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAppShellMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAppShellMenu2,
    selectors: [["bh-app-shell-menu"]],
    inputs: {
      enableMicroInteraction: "enableMicroInteraction",
      isMobileMenuOpen: "isMobileMenuOpen",
      isSettingsMenuOpen: "isSettingsMenuOpen",
      isSideMenuOpen: "isSideMenuOpen",
      mobileViewLabel: "mobileViewLabel",
      navigation: "navigation",
      navigationSelected: "navigationSelected",
      settings: "settings",
      settingsSelected: "settingsSelected",
      type: "type",
      userInfo: "userInfo"
    },
    outputs: {
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAppShellMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAppShellMenu = __decorate([ProxyCmp({
  inputs: ["enableMicroInteraction", "isMobileMenuOpen", "isSettingsMenuOpen", "isSideMenuOpen", "mobileViewLabel", "navigation", "navigationSelected", "settings", "settingsSelected", "type", "userInfo"]
})], BhAppShellMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAppShellMenu, [{
    type: Component,
    args: [{
      selector: "bh-app-shell-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["enableMicroInteraction", "isMobileMenuOpen", "isSettingsMenuOpen", "isSideMenuOpen", "mobileViewLabel", "navigation", "navigationSelected", "settings", "settingsSelected", "type", "userInfo"],
      outputs: ["bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhAvatar = class BhAvatar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAvatar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAvatar2,
    selectors: [["bh-avatar"]],
    inputs: {
      firstname: "firstname",
      image: "image",
      isActive: "isActive",
      isRing: "isRing",
      lastname: "lastname",
      size: "size",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAvatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAvatar = __decorate([ProxyCmp({
  inputs: ["firstname", "image", "isActive", "isRing", "lastname", "size", "type"]
})], BhAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAvatar, [{
    type: Component,
    args: [{
      selector: "bh-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["firstname", "image", "isActive", "isRing", "lastname", "size", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhAvatarGroup = class BhAvatarGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhAvatarGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhAvatarGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhAvatarGroup2,
    selectors: [["bh-avatar-group"]],
    inputs: {
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhAvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhAvatarGroup = __decorate([ProxyCmp({
  inputs: ["type"]
})], BhAvatarGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhAvatarGroup, [{
    type: Component,
    args: [{
      selector: "bh-avatar-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhBadge = class BhBadge2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhBadge2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhBadge2,
    selectors: [["bh-badge"]],
    inputs: {
      color: "color",
      icon: "icon",
      isFluid: "isFluid",
      label: "label",
      offset: "offset",
      position: "position",
      theme: "theme",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhBadge_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhBadge = __decorate([ProxyCmp({
  inputs: ["color", "icon", "isFluid", "label", "offset", "position", "theme", "type"]
})], BhBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhBadge, [{
    type: Component,
    args: [{
      selector: "bh-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "icon", "isFluid", "label", "offset", "position", "theme", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhBarChart = class BhBarChart2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhBarChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhBarChart2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhBarChart2,
    selectors: [["bh-bar-chart"]],
    inputs: {
      chartOptionOverride: "chartOptionOverride",
      data: "data",
      height: "height",
      option: "option",
      theme: "theme",
      tooltipLeftAlignmentIssue: "tooltipLeftAlignmentIssue"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhBarChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhBarChart = __decorate([ProxyCmp({
  inputs: ["chartOptionOverride", "data", "height", "option", "theme", "tooltipLeftAlignmentIssue"]
})], BhBarChart);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhBarChart, [{
    type: Component,
    args: [{
      selector: "bh-bar-chart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chartOptionOverride", "data", "height", "option", "theme", "tooltipLeftAlignmentIssue"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhBreadcrumbs = class BhBreadcrumbs2 {
  z;
  el;
  opened = new EventEmitter();
  itemSelectedUpdate = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhBreadcrumbs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhBreadcrumbs2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhBreadcrumbs2,
    selectors: [["bh-breadcrumbs"]],
    inputs: {
      inlineAnchorId: "inlineAnchorId",
      isBorder: "isBorder",
      isInline: "isInline",
      items: "items",
      menuWidth: "menuWidth",
      selectedItem: "selectedItem"
    },
    outputs: {
      opened: "opened",
      itemSelectedUpdate: "itemSelectedUpdate",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventChange: "bhEventChange",
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhBreadcrumbs = __decorate([ProxyCmp({
  inputs: ["inlineAnchorId", "isBorder", "isInline", "items", "menuWidth", "selectedItem"]
})], BhBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "bh-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inlineAnchorId", "isBorder", "isInline", "items", "menuWidth", "selectedItem"],
      outputs: ["opened", "itemSelectedUpdate", "bhEventOpen", "bhEventClose", "bhEventChange", "bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    opened: [{
      type: Output
    }],
    itemSelectedUpdate: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhButton = class BhButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhButton2,
    selectors: [["bh-button"]],
    inputs: {
      disablePointerEvent: "disablePointerEvent",
      disableTooltip: "disableTooltip",
      disableTooltipPlacement: "disableTooltipPlacement",
      disabledTooltipMessage: "disabledTooltipMessage",
      isDisabled: "isDisabled",
      isFluid: "isFluid",
      isLoading: "isLoading",
      isSmall: "isSmall",
      label: "label",
      leftIcon: "leftIcon",
      normalTooltipPlacement: "normalTooltipPlacement",
      rightIcon: "rightIcon",
      tooltipMessage: "tooltipMessage",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhButton = __decorate([ProxyCmp({
  inputs: ["disablePointerEvent", "disableTooltip", "disableTooltipPlacement", "disabledTooltipMessage", "isDisabled", "isFluid", "isLoading", "isSmall", "label", "leftIcon", "normalTooltipPlacement", "rightIcon", "tooltipMessage", "type"]
})], BhButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhButton, [{
    type: Component,
    args: [{
      selector: "bh-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disablePointerEvent", "disableTooltip", "disableTooltipPlacement", "disabledTooltipMessage", "isDisabled", "isFluid", "isLoading", "isSmall", "label", "leftIcon", "normalTooltipPlacement", "rightIcon", "tooltipMessage", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhButtonDropdown = class BhButtonDropdown2 {
  z;
  el;
  opened = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhButtonDropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhButtonDropdown2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhButtonDropdown2,
    selectors: [["bh-button-dropdown"]],
    inputs: {
      additionalMenuItems: "additionalMenuItems",
      enableMicroInteraction: "enableMicroInteraction",
      flipOffset: "flipOffset",
      flipVertical: "flipVertical",
      iconOverride: "iconOverride",
      isDisabled: "isDisabled",
      isEllipsis: "isEllipsis",
      isFluid: "isFluid",
      isInline: "isInline",
      isLoading: "isLoading",
      isMultiSelect: "isMultiSelect",
      isOpen: "isOpen",
      isSearchable: "isSearchable",
      isSelectAll: "isSelectAll",
      isSmall: "isSmall",
      isUnselectable: "isUnselectable",
      label: "label",
      leftIcon: "leftIcon",
      menuItems: "menuItems",
      menuWidth: "menuWidth",
      placeholder: "placeholder",
      rightIcon: "rightIcon",
      tooltipMessage: "tooltipMessage",
      type: "type"
    },
    outputs: {
      opened: "opened",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange",
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhButtonDropdown_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhButtonDropdown = __decorate([ProxyCmp({
  inputs: ["additionalMenuItems", "enableMicroInteraction", "flipOffset", "flipVertical", "iconOverride", "isDisabled", "isEllipsis", "isFluid", "isInline", "isLoading", "isMultiSelect", "isOpen", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "label", "leftIcon", "menuItems", "menuWidth", "placeholder", "rightIcon", "tooltipMessage", "type"]
})], BhButtonDropdown);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhButtonDropdown, [{
    type: Component,
    args: [{
      selector: "bh-button-dropdown",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["additionalMenuItems", "enableMicroInteraction", "flipOffset", "flipVertical", "iconOverride", "isDisabled", "isEllipsis", "isFluid", "isInline", "isLoading", "isMultiSelect", "isOpen", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "label", "leftIcon", "menuItems", "menuWidth", "placeholder", "rightIcon", "tooltipMessage", "type"],
      outputs: ["opened", "bhEventOpen", "bhEventClose", "bhEventSelected", "bhEventChange", "bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    opened: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhButtonGroup = class BhButtonGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhButtonGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhButtonGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhButtonGroup2,
    selectors: [["bh-button-group"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhButtonGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhButtonGroup = __decorate([ProxyCmp({})], BhButtonGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhButtonGroup, [{
    type: Component,
    args: [{
      selector: "bh-button-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhButtonTabs = class BhButtonTabs2 {
  z;
  el;
  activeTabUpdate = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhButtonTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhButtonTabs2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhButtonTabs2,
    selectors: [["bh-button-tabs"]],
    inputs: {
      activeKey: "activeKey",
      ellipsisTextLimit: "ellipsisTextLimit",
      isSmall: "isSmall",
      items: "items",
      menuWidth: "menuWidth",
      tooltipMessage: "tooltipMessage"
    },
    outputs: {
      activeTabUpdate: "activeTabUpdate",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhButtonTabs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhButtonTabs = __decorate([ProxyCmp({
  inputs: ["activeKey", "ellipsisTextLimit", "isSmall", "items", "menuWidth", "tooltipMessage"]
})], BhButtonTabs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhButtonTabs, [{
    type: Component,
    args: [{
      selector: "bh-button-tabs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeKey", "ellipsisTextLimit", "isSmall", "items", "menuWidth", "tooltipMessage"],
      outputs: ["activeTabUpdate", "bhEventOpen", "bhEventClose", "bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    activeTabUpdate: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhCard = class BhCard2 {
  z;
  el;
  ctaClick = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhCard2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhCard2,
    selectors: [["bh-card"]],
    inputs: {
      actionMenu: "actionMenu",
      border: "border",
      expandableOpen: "expandableOpen",
      footerActions: "footerActions",
      headerActions: "headerActions",
      heading: "heading",
      icon: "icon",
      isExpandable: "isExpandable",
      isFocusable: "isFocusable",
      stopBubble: "stopBubble",
      subtext: "subtext",
      tooltipText: "tooltipText"
    },
    outputs: {
      ctaClick: "ctaClick",
      bhEventCtaClick: "bhEventCtaClick",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhCard_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhCard = __decorate([ProxyCmp({
  inputs: ["actionMenu", "border", "expandableOpen", "footerActions", "headerActions", "heading", "icon", "isExpandable", "isFocusable", "stopBubble", "subtext", "tooltipText"]
})], BhCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhCard, [{
    type: Component,
    args: [{
      selector: "bh-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["actionMenu", "border", "expandableOpen", "footerActions", "headerActions", "heading", "icon", "isExpandable", "isFocusable", "stopBubble", "subtext", "tooltipText"],
      outputs: ["ctaClick", "bhEventCtaClick", "bhEventOpen", "bhEventClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ctaClick: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }]
  });
})();
var BhCheckbox = class BhCheckbox2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhCheckbox2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhCheckbox2,
    selectors: [["bh-checkbox"]],
    inputs: {
      isChecked: "isChecked",
      isDisabled: "isDisabled",
      isError: "isError",
      isIndeterminate: "isIndeterminate",
      isUnfocusable: "isUnfocusable",
      label: "label",
      message: "message",
      name: "name",
      value: "value"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhCheckbox = __decorate([ProxyCmp({
  inputs: ["isChecked", "isDisabled", "isError", "isIndeterminate", "isUnfocusable", "label", "message", "name", "value"]
})], BhCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhCheckbox, [{
    type: Component,
    args: [{
      selector: "bh-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isChecked", "isDisabled", "isError", "isIndeterminate", "isUnfocusable", "label", "message", "name", "value"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhChip = class BhChip2 {
  z;
  el;
  bhEventClose = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhChip2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhChip2,
    selectors: [["bh-chip"]],
    inputs: {
      color: "color",
      dismissible: "dismissible",
      icon: "icon",
      isDisabled: "isDisabled",
      label: "label",
      link: "link",
      plain: "plain",
      preSelect: "preSelect",
      selectedColor: "selectedColor",
      selectedTheme: "selectedTheme",
      size: "size",
      theme: "theme",
      type: "type"
    },
    outputs: {
      bhEventClose: "bhEventClose",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhChip_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhChip = __decorate([ProxyCmp({
  inputs: ["color", "dismissible", "icon", "isDisabled", "label", "link", "plain", "preSelect", "selectedColor", "selectedTheme", "size", "theme", "type"]
})], BhChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhChip, [{
    type: Component,
    args: [{
      selector: "bh-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "dismissible", "icon", "isDisabled", "label", "link", "plain", "preSelect", "selectedColor", "selectedTheme", "size", "theme", "type"],
      outputs: ["bhEventClose", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventClose: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhChipGroup = class BhChipGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhChipGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhChipGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhChipGroup2,
    selectors: [["bh-chip-group"]],
    inputs: {
      isOverflow: "isOverflow"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhChipGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhChipGroup = __decorate([ProxyCmp({
  inputs: ["isOverflow"]
})], BhChipGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhChipGroup, [{
    type: Component,
    args: [{
      selector: "bh-chip-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isOverflow"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhContent = class BhContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhContent2,
    selectors: [["bh-content"]],
    inputs: {
      backgroundColor: "backgroundColor",
      contentPush: "contentPush",
      cookiesHREF: "cookiesHREF",
      cookiesText: "cookiesText",
      isNoPadding: "isNoPadding",
      isSideMenuOpen: "isSideMenuOpen",
      privacyHREF: "privacyHREF",
      privacyText: "privacyText",
      progress: "progress",
      progressBarMode: "progressBarMode",
      showLogo: "showLogo",
      showProgressBar: "showProgressBar",
      termsHREF: "termsHREF",
      termsText: "termsText",
      theme: "theme"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhContent = __decorate([ProxyCmp({
  inputs: ["backgroundColor", "contentPush", "cookiesHREF", "cookiesText", "isNoPadding", "isSideMenuOpen", "privacyHREF", "privacyText", "progress", "progressBarMode", "showLogo", "showProgressBar", "termsHREF", "termsText", "theme"]
})], BhContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhContent, [{
    type: Component,
    args: [{
      selector: "bh-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["backgroundColor", "contentPush", "cookiesHREF", "cookiesText", "isNoPadding", "isSideMenuOpen", "privacyHREF", "privacyText", "progress", "progressBarMode", "showLogo", "showProgressBar", "termsHREF", "termsText", "theme"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhCustomTimePicker = class BhCustomTimePicker2 {
  z;
  el;
  selectedTime = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhCustomTimePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhCustomTimePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhCustomTimePicker2,
    selectors: [["bh-custom-time-picker"]],
    inputs: {
      displaySeconds: "displaySeconds",
      format: "format",
      label: "label",
      labelvalue: "labelvalue",
      time: "time"
    },
    outputs: {
      selectedTime: "selectedTime"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhCustomTimePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhCustomTimePicker = __decorate([ProxyCmp({
  inputs: ["displaySeconds", "format", "label", "labelvalue", "time"]
})], BhCustomTimePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhCustomTimePicker, [{
    type: Component,
    args: [{
      selector: "bh-custom-time-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["displaySeconds", "format", "label", "labelvalue", "time"],
      outputs: ["selectedTime"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    selectedTime: [{
      type: Output
    }]
  });
})();
var BhDataTable = class BhDataTable2 {
  z;
  el;
  getTableDataset = new EventEmitter();
  customHtmlElementClick = new EventEmitter();
  sortUpdate = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDataTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDataTable2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDataTable2,
    selectors: [["bh-data-table"]],
    inputs: {
      content: "content",
      option: "option",
      sortState: "sortState"
    },
    outputs: {
      getTableDataset: "getTableDataset",
      customHtmlElementClick: "customHtmlElementClick",
      sortUpdate: "sortUpdate",
      bhEventCtaClick: "bhEventCtaClick",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDataTable_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDataTable = __decorate([ProxyCmp({
  inputs: ["content", "option", "sortState"]
})], BhDataTable);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDataTable, [{
    type: Component,
    args: [{
      selector: "bh-data-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["content", "option", "sortState"],
      outputs: ["getTableDataset", "customHtmlElementClick", "sortUpdate", "bhEventCtaClick", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    getTableDataset: [{
      type: Output
    }],
    customHtmlElementClick: [{
      type: Output
    }],
    sortUpdate: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhDatePicker = class BhDatePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  bhEventOpen = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDatePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDatePicker2,
    selectors: [["bh-date-picker"]],
    inputs: {
      allowManualValidation: "allowManualValidation",
      cancelLabel: "cancelLabel",
      clearButton: "clearButton",
      customDisableDate: "customDisableDate",
      dateFormat: "dateFormat",
      disableHelper: "disableHelper",
      disableUserInput: "disableUserInput",
      disabled: "disabled",
      errorMessage: "errorMessage",
      handleNegativeTimezone: "handleNegativeTimezone",
      id: "id",
      isInfo: "isInfo",
      isInvalid: "isInvalid",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      isSmall: "isSmall",
      label: "label",
      maxValue: "maxValue",
      minValue: "minValue",
      placeholder: "placeholder",
      reset: "reset",
      todayLabel: "todayLabel",
      value: "value",
      width: "width"
    },
    outputs: {
      bhEventChange: "bhEventChange",
      bhEventOpen: "bhEventOpen"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDatePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDatePicker = __decorate([ProxyCmp({
  inputs: ["allowManualValidation", "cancelLabel", "clearButton", "customDisableDate", "dateFormat", "disableHelper", "disableUserInput", "disabled", "errorMessage", "handleNegativeTimezone", "id", "isInfo", "isInvalid", "isReadOnly", "isRequired", "isSmall", "label", "maxValue", "minValue", "placeholder", "reset", "todayLabel", "value", "width"]
})], BhDatePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDatePicker, [{
    type: Component,
    args: [{
      selector: "bh-date-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowManualValidation", "cancelLabel", "clearButton", "customDisableDate", "dateFormat", "disableHelper", "disableUserInput", "disabled", "errorMessage", "handleNegativeTimezone", "id", "isInfo", "isInvalid", "isReadOnly", "isRequired", "isSmall", "label", "maxValue", "minValue", "placeholder", "reset", "todayLabel", "value", "width"],
      outputs: ["bhEventChange", "bhEventOpen"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }]
  });
})();
var BhDateRangePicker = class BhDateRangePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDateRangePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDateRangePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDateRangePicker2,
    selectors: [["bh-date-range-picker"]],
    inputs: {
      dateFormat: "dateFormat",
      disableHelper: "disableHelper",
      disableUserInput: "disableUserInput",
      endDateLabel: "endDateLabel",
      errorMessage: "errorMessage",
      handleNegativeTimezone: "handleNegativeTimezone",
      id: "id",
      isInvalid: "isInvalid",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      isReset: "isReset",
      reset: "reset",
      startDateLabel: "startDateLabel",
      value: "value",
      width: "width"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDateRangePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDateRangePicker = __decorate([ProxyCmp({
  inputs: ["dateFormat", "disableHelper", "disableUserInput", "endDateLabel", "errorMessage", "handleNegativeTimezone", "id", "isInvalid", "isReadOnly", "isRequired", "isReset", "reset", "startDateLabel", "value", "width"]
})], BhDateRangePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDateRangePicker, [{
    type: Component,
    args: [{
      selector: "bh-date-range-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["dateFormat", "disableHelper", "disableUserInput", "endDateLabel", "errorMessage", "handleNegativeTimezone", "id", "isInvalid", "isReadOnly", "isRequired", "isReset", "reset", "startDateLabel", "value", "width"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhDateTimePicker = class BhDateTimePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDateTimePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDateTimePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDateTimePicker2,
    selectors: [["bh-date-time-picker"]],
    inputs: {
      dateErrorMessage: "dateErrorMessage",
      dateLabel: "dateLabel",
      disableHelper: "disableHelper",
      handleNegativeTimezone: "handleNegativeTimezone",
      id: "id",
      isInvalid: "isInvalid",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      maxValue: "maxValue",
      minValue: "minValue",
      reset: "reset",
      timeErrorMessage: "timeErrorMessage",
      timeFormat: "timeFormat",
      timeLabel: "timeLabel",
      value: "value",
      width: "width"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDateTimePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDateTimePicker = __decorate([ProxyCmp({
  inputs: ["dateErrorMessage", "dateLabel", "disableHelper", "handleNegativeTimezone", "id", "isInvalid", "isReadOnly", "isRequired", "maxValue", "minValue", "reset", "timeErrorMessage", "timeFormat", "timeLabel", "value", "width"]
})], BhDateTimePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDateTimePicker, [{
    type: Component,
    args: [{
      selector: "bh-date-time-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["dateErrorMessage", "dateLabel", "disableHelper", "handleNegativeTimezone", "id", "isInvalid", "isReadOnly", "isRequired", "maxValue", "minValue", "reset", "timeErrorMessage", "timeFormat", "timeLabel", "value", "width"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhDatetimeRangePicker = class BhDatetimeRangePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDatetimeRangePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDatetimeRangePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDatetimeRangePicker2,
    selectors: [["bh-datetime-range-picker"]],
    inputs: {
      applyLabel: "applyLabel",
      dateFormat: "dateFormat",
      endTimerLable: "endTimerLable",
      errorMessage: "errorMessage",
      fromtabularlist: "fromtabularlist",
      helperText: "helperText",
      id: "id",
      isDisabled: "isDisabled",
      isFluid: "isFluid",
      isInline: "isInline",
      isSingleDatePicker: "isSingleDatePicker",
      isSmall: "isSmall",
      label: "label",
      maxDate: "maxDate",
      minDate: "minDate",
      placeholder: "placeholder",
      presets: "presets",
      required: "required",
      resetLabel: "resetLabel",
      selectedRange: "selectedRange",
      showSecondsInTimePicker: "showSecondsInTimePicker",
      showTimepicker: "showTimepicker",
      startIcon: "startIcon",
      startTimerLable: "startTimerLable",
      timeFormat: "timeFormat"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDatetimeRangePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDatetimeRangePicker = __decorate([ProxyCmp({
  inputs: ["applyLabel", "dateFormat", "endTimerLable", "errorMessage", "fromtabularlist", "helperText", "id", "isDisabled", "isFluid", "isInline", "isSingleDatePicker", "isSmall", "label", "maxDate", "minDate", "placeholder", "presets", "required", "resetLabel", "selectedRange", "showSecondsInTimePicker", "showTimepicker", "startIcon", "startTimerLable", "timeFormat"]
})], BhDatetimeRangePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDatetimeRangePicker, [{
    type: Component,
    args: [{
      selector: "bh-datetime-range-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["applyLabel", "dateFormat", "endTimerLable", "errorMessage", "fromtabularlist", "helperText", "id", "isDisabled", "isFluid", "isInline", "isSingleDatePicker", "isSmall", "label", "maxDate", "minDate", "placeholder", "presets", "required", "resetLabel", "selectedRange", "showSecondsInTimePicker", "showTimepicker", "startIcon", "startTimerLable", "timeFormat"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhDialog = class BhDialog2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  ctaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDialog2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDialog2,
    selectors: [["bh-dialog"]],
    inputs: {
      ctas: "ctas",
      enableMicroInteraction: "enableMicroInteraction",
      header: "header",
      illustration: "illustration",
      isDismissible: "isDismissible",
      isHTMLTemplate: "isHTMLTemplate",
      isOpen: "isOpen",
      message: "message"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventCtaClick: "bhEventCtaClick",
      ctaClick: "ctaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDialog_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDialog = __decorate([ProxyCmp({
  inputs: ["ctas", "enableMicroInteraction", "header", "illustration", "isDismissible", "isHTMLTemplate", "isOpen", "message"]
})], BhDialog);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDialog, [{
    type: Component,
    args: [{
      selector: "bh-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["ctas", "enableMicroInteraction", "header", "illustration", "isDismissible", "isHTMLTemplate", "isOpen", "message"],
      outputs: ["bhEventOpen", "bhEventClose", "bhEventCtaClick", "ctaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }]
  });
})();
var BhDivider = class BhDivider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDivider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDivider2,
    selectors: [["bh-divider"]],
    inputs: {
      marginBottom: "marginBottom",
      marginLeft: "marginLeft",
      marginRight: "marginRight",
      marginTop: "marginTop",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDivider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDivider = __decorate([ProxyCmp({
  inputs: ["marginBottom", "marginLeft", "marginRight", "marginTop", "type"]
})], BhDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDivider, [{
    type: Component,
    args: [{
      selector: "bh-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["marginBottom", "marginLeft", "marginRight", "marginTop", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhDonutChart = class BhDonutChart2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDonutChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDonutChart2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDonutChart2,
    selectors: [["bh-donut-chart"]],
    inputs: {
      chartOptionOverride: "chartOptionOverride",
      data: "data",
      height: "height",
      label: "label",
      legendLayout: "legendLayout",
      option: "option",
      theme: "theme"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDonutChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDonutChart = __decorate([ProxyCmp({
  inputs: ["chartOptionOverride", "data", "height", "label", "legendLayout", "option", "theme"]
})], BhDonutChart);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDonutChart, [{
    type: Component,
    args: [{
      selector: "bh-donut-chart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chartOptionOverride", "data", "height", "label", "legendLayout", "option", "theme"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhDropdown = class BhDropdown2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  selected = new EventEmitter();
  opened = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhDropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhDropdown2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhDropdown2,
    selectors: [["bh-dropdown"]],
    inputs: {
      closeDropdownOnScroll: "closeDropdownOnScroll",
      enableMicroInteraction: "enableMicroInteraction",
      flipOffset: "flipOffset",
      fromtabularlist: "fromtabularlist",
      inlineAnchorId: "inlineAnchorId",
      isDisabled: "isDisabled",
      isEllipsis: "isEllipsis",
      isError: "isError",
      isFluid: "isFluid",
      isInline: "isInline",
      isItemPaddingRight: "isItemPaddingRight",
      isMultiSelect: "isMultiSelect",
      isOpen: "isOpen",
      isOverflowHidden: "isOverflowHidden",
      isRequired: "isRequired",
      isSearchable: "isSearchable",
      isSelectAll: "isSelectAll",
      isSmall: "isSmall",
      isUnselectable: "isUnselectable",
      keyboardFocused: "keyboardFocused",
      label: "label",
      menuItems: "menuItems",
      menuWidth: "menuWidth",
      message: "message",
      noOptionAvailableText: "noOptionAvailableText",
      placeholder: "placeholder",
      searchMode: "searchMode",
      searchablePlaceholder: "searchablePlaceholder",
      selectedValue: "selectedValue",
      showAllLabel: "showAllLabel",
      value: "value"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventCtaClick: "bhEventCtaClick",
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange",
      selected: "selected",
      opened: "opened"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhDropdown_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhDropdown = __decorate([ProxyCmp({
  inputs: ["closeDropdownOnScroll", "enableMicroInteraction", "flipOffset", "fromtabularlist", "inlineAnchorId", "isDisabled", "isEllipsis", "isError", "isFluid", "isInline", "isItemPaddingRight", "isMultiSelect", "isOpen", "isOverflowHidden", "isRequired", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "keyboardFocused", "label", "menuItems", "menuWidth", "message", "noOptionAvailableText", "placeholder", "searchMode", "searchablePlaceholder", "selectedValue", "showAllLabel", "value"]
})], BhDropdown);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhDropdown, [{
    type: Component,
    args: [{
      selector: "bh-dropdown",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDropdownOnScroll", "enableMicroInteraction", "flipOffset", "fromtabularlist", "inlineAnchorId", "isDisabled", "isEllipsis", "isError", "isFluid", "isInline", "isItemPaddingRight", "isMultiSelect", "isOpen", "isOverflowHidden", "isRequired", "isSearchable", "isSelectAll", "isSmall", "isUnselectable", "keyboardFocused", "label", "menuItems", "menuWidth", "message", "noOptionAvailableText", "placeholder", "searchMode", "searchablePlaceholder", "selectedValue", "showAllLabel", "value"],
      outputs: ["bhEventOpen", "bhEventClose", "bhEventCtaClick", "bhEventSelected", "bhEventChange", "selected", "opened"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    selected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }]
  });
})();
var BhError = class BhError2 {
  z;
  el;
  bhEventCtaClick = new EventEmitter();
  ctaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhError_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhError2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhError2,
    selectors: [["bh-error"]],
    inputs: {
      ctas: "ctas",
      description: "description",
      errorNumber: "errorNumber",
      source: "source",
      title: "title"
    },
    outputs: {
      bhEventCtaClick: "bhEventCtaClick",
      ctaClick: "ctaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhError_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhError = __decorate([ProxyCmp({
  inputs: ["ctas", "description", "errorNumber", "source", "title"]
})], BhError);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhError, [{
    type: Component,
    args: [{
      selector: "bh-error",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["ctas", "description", "errorNumber", "source", "title"],
      outputs: ["bhEventCtaClick", "ctaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventCtaClick: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }]
  });
})();
var BhFooter = class BhFooter2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhFooter2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhFooter2,
    selectors: [["bh-footer"]],
    inputs: {
      cookiesHREF: "cookiesHREF",
      cookiesText: "cookiesText",
      logo: "logo",
      marginTop: "marginTop",
      privacyHREF: "privacyHREF",
      privacyText: "privacyText",
      showLogo: "showLogo",
      termsHREF: "termsHREF",
      termsText: "termsText",
      theme: "theme"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhFooter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhFooter = __decorate([ProxyCmp({
  inputs: ["cookiesHREF", "cookiesText", "logo", "marginTop", "privacyHREF", "privacyText", "showLogo", "termsHREF", "termsText", "theme"]
})], BhFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhFooter, [{
    type: Component,
    args: [{
      selector: "bh-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cookiesHREF", "cookiesText", "logo", "marginTop", "privacyHREF", "privacyText", "showLogo", "termsHREF", "termsText", "theme"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhFormMessage = class BhFormMessage2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhFormMessage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhFormMessage2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhFormMessage2,
    selectors: [["bh-form-message"]],
    inputs: {
      isDisabled: "isDisabled",
      isError: "isError",
      message: "message"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhFormMessage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhFormMessage = __decorate([ProxyCmp({
  inputs: ["isDisabled", "isError", "message"]
})], BhFormMessage);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhFormMessage, [{
    type: Component,
    args: [{
      selector: "bh-form-message",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isDisabled", "isError", "message"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhHeader = class BhHeader2 {
  z;
  el;
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhHeader2,
    selectors: [["bh-header"]],
    inputs: {
      appname: "appname",
      closeSettingsMenu: "closeSettingsMenu",
      headerLimit: "headerLimit",
      iconLinks: "iconLinks",
      logo: "logo",
      type: "type"
    },
    outputs: {
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhHeader = __decorate([ProxyCmp({
  inputs: ["appname", "closeSettingsMenu", "headerLimit", "iconLinks", "logo", "type"]
})], BhHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhHeader, [{
    type: Component,
    args: [{
      selector: "bh-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["appname", "closeSettingsMenu", "headerLimit", "iconLinks", "logo", "type"],
      outputs: ["bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhIcon = class BhIcon2 {
  z;
  el;
  bhEventClick = new EventEmitter();
  bhEventOnMouseHover = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhIcon2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhIcon2,
    selectors: [["bh-icon"]],
    inputs: {
      color: "color",
      customIcon: "customIcon",
      customIconAlt: "customIconAlt",
      href: "href",
      icon: "icon",
      size: "size",
      target: "target"
    },
    outputs: {
      bhEventClick: "bhEventClick",
      bhEventOnMouseHover: "bhEventOnMouseHover"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhIcon = __decorate([ProxyCmp({
  inputs: ["color", "customIcon", "customIconAlt", "href", "icon", "size", "target"]
})], BhIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhIcon, [{
    type: Component,
    args: [{
      selector: "bh-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "customIcon", "customIconAlt", "href", "icon", "size", "target"],
      outputs: ["bhEventClick", "bhEventOnMouseHover"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventClick: [{
      type: Output
    }],
    bhEventOnMouseHover: [{
      type: Output
    }]
  });
})();
var BhIllustration = class BhIllustration2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhIllustration_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhIllustration2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhIllustration2,
    selectors: [["bh-illustration"]],
    inputs: {
      description: "description",
      htmlDescription: "htmlDescription",
      source: "source",
      title: "title"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhIllustration_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhIllustration = __decorate([ProxyCmp({
  inputs: ["description", "htmlDescription", "source", "title"]
})], BhIllustration);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhIllustration, [{
    type: Component,
    args: [{
      selector: "bh-illustration",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["description", "htmlDescription", "source", "title"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhIncrementer = class BhIncrementer2 {
  z;
  el;
  focus = new EventEmitter();
  blur = new EventEmitter();
  bhEventInput = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhIncrementer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhIncrementer2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhIncrementer2,
    selectors: [["bh-incrementer"]],
    inputs: {
      incrementFactor: "incrementFactor",
      isDisabled: "isDisabled",
      isError: "isError",
      isFluid: "isFluid",
      isReadOnly: "isReadOnly",
      label: "label",
      maxValue: "maxValue",
      message: "message",
      minValue: "minValue",
      placeholderNumber: "placeholderNumber",
      unit: "unit",
      value: "value"
    },
    outputs: {
      focus: "focus",
      blur: "blur",
      bhEventInput: "bhEventInput",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhIncrementer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhIncrementer = __decorate([ProxyCmp({
  inputs: ["incrementFactor", "isDisabled", "isError", "isFluid", "isReadOnly", "label", "maxValue", "message", "minValue", "placeholderNumber", "unit", "value"]
})], BhIncrementer);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhIncrementer, [{
    type: Component,
    args: [{
      selector: "bh-incrementer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["incrementFactor", "isDisabled", "isError", "isFluid", "isReadOnly", "label", "maxValue", "message", "minValue", "placeholderNumber", "unit", "value"],
      outputs: ["focus", "blur", "bhEventInput", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    bhEventInput: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhInlineDropdown = class BhInlineDropdown2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventSelected = new EventEmitter();
  selected = new EventEmitter();
  opened = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhInlineDropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhInlineDropdown2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhInlineDropdown2,
    selectors: [["bh-inline-dropdown"]],
    inputs: {
      closeDropdownOnScroll: "closeDropdownOnScroll",
      enableMicroInteraction: "enableMicroInteraction",
      flipOffset: "flipOffset",
      inlineAnchorId: "inlineAnchorId",
      isEllipsis: "isEllipsis",
      isInline: "isInline",
      isOpen: "isOpen",
      isSearchable: "isSearchable",
      isSmall: "isSmall",
      keyboardFocused: "keyboardFocused",
      menuItems: "menuItems",
      menuWidth: "menuWidth",
      noOptionAvailableText: "noOptionAvailableText",
      searchablePlaceholder: "searchablePlaceholder",
      selectedValue: "selectedValue",
      typography: "typography",
      value: "value"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventChange: "bhEventChange",
      bhEventSelected: "bhEventSelected",
      selected: "selected",
      opened: "opened"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhInlineDropdown_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhInlineDropdown = __decorate([ProxyCmp({
  inputs: ["closeDropdownOnScroll", "enableMicroInteraction", "flipOffset", "inlineAnchorId", "isEllipsis", "isInline", "isOpen", "isSearchable", "isSmall", "keyboardFocused", "menuItems", "menuWidth", "noOptionAvailableText", "searchablePlaceholder", "selectedValue", "typography", "value"]
})], BhInlineDropdown);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhInlineDropdown, [{
    type: Component,
    args: [{
      selector: "bh-inline-dropdown",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDropdownOnScroll", "enableMicroInteraction", "flipOffset", "inlineAnchorId", "isEllipsis", "isInline", "isOpen", "isSearchable", "isSmall", "keyboardFocused", "menuItems", "menuWidth", "noOptionAvailableText", "searchablePlaceholder", "selectedValue", "typography", "value"],
      outputs: ["bhEventOpen", "bhEventClose", "bhEventChange", "bhEventSelected", "selected", "opened"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    selected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }]
  });
})();
var BhKpi = class BhKpi2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhKpi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhKpi2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhKpi2,
    selectors: [["bh-kpi"]],
    inputs: {
      icon: "icon",
      kpiTitle: "kpiTitle",
      stats: "stats",
      sub: "sub",
      sup: "sup",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhKpi_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhKpi = __decorate([ProxyCmp({
  inputs: ["icon", "kpiTitle", "stats", "sub", "sup", "value"]
})], BhKpi);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhKpi, [{
    type: Component,
    args: [{
      selector: "bh-kpi",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["icon", {
        name: "kpiTitle",
        required: true
      }, "stats", "sub", "sup", {
        name: "value",
        required: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhLineChart = class BhLineChart2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhLineChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhLineChart2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhLineChart2,
    selectors: [["bh-line-chart"]],
    inputs: {
      chartOptionOverride: "chartOptionOverride",
      data: "data",
      height: "height",
      option: "option",
      theme: "theme",
      yaxisallowstring: "yaxisallowstring"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhLineChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhLineChart = __decorate([ProxyCmp({
  inputs: ["chartOptionOverride", "data", "height", "option", "theme", "yaxisallowstring"]
})], BhLineChart);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhLineChart, [{
    type: Component,
    args: [{
      selector: "bh-line-chart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chartOptionOverride", "data", "height", "option", "theme", "yaxisallowstring"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhList = class BhList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhList2,
    selectors: [["bh-list"]],
    inputs: {
      padding: "padding"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhList = __decorate([ProxyCmp({
  inputs: ["padding"]
})], BhList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhList, [{
    type: Component,
    args: [{
      selector: "bh-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["padding"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhMenu = class BhMenu2 {
  z;
  el;
  multiselectChange = new EventEmitter();
  ctaClick = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventInput = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  unselect = new EventEmitter();
  close = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhMenu2,
    selectors: [["bh-menu"]],
    inputs: {
      clearSearchText: "clearSearchText",
      isDropDownMenu: "isDropDownMenu",
      isEllipsis: "isEllipsis",
      isFocused: "isFocused",
      isItemPaddingRight: "isItemPaddingRight",
      isMultiSelect: "isMultiSelect",
      isSearchable: "isSearchable",
      isSelectAll: "isSelectAll",
      isTypeAhead: "isTypeAhead",
      isUnselectable: "isUnselectable",
      keyboardFocused: "keyboardFocused",
      menuHeight: "menuHeight",
      menuItems: "menuItems",
      menuWidth: "menuWidth",
      noMatchText: "noMatchText",
      noOptionAvailableText: "noOptionAvailableText",
      placeholder: "placeholder",
      query: "query",
      searchMode: "searchMode",
      selected: "selected",
      stopClickPropagation: "stopClickPropagation",
      tooltipIsInline: "tooltipIsInline",
      tooltipLeftPadding: "tooltipLeftPadding",
      tooltipPlacement: "tooltipPlacement"
    },
    outputs: {
      multiselectChange: "multiselectChange",
      ctaClick: "ctaClick",
      bhEventChange: "bhEventChange",
      bhEventSelected: "bhEventSelected",
      bhEventInput: "bhEventInput",
      bhEventCtaClick: "bhEventCtaClick",
      unselect: "unselect",
      close: "close"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhMenu = __decorate([ProxyCmp({
  inputs: ["clearSearchText", "isDropDownMenu", "isEllipsis", "isFocused", "isItemPaddingRight", "isMultiSelect", "isSearchable", "isSelectAll", "isTypeAhead", "isUnselectable", "keyboardFocused", "menuHeight", "menuItems", "menuWidth", "noMatchText", "noOptionAvailableText", "placeholder", "query", "searchMode", "selected", "stopClickPropagation", "tooltipIsInline", "tooltipLeftPadding", "tooltipPlacement"]
})], BhMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhMenu, [{
    type: Component,
    args: [{
      selector: "bh-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["clearSearchText", "isDropDownMenu", "isEllipsis", "isFocused", "isItemPaddingRight", "isMultiSelect", "isSearchable", "isSelectAll", "isTypeAhead", "isUnselectable", "keyboardFocused", "menuHeight", "menuItems", "menuWidth", "noMatchText", "noOptionAvailableText", "placeholder", "query", "searchMode", "selected", "stopClickPropagation", "tooltipIsInline", "tooltipLeftPadding", "tooltipPlacement"],
      outputs: ["multiselectChange", "ctaClick", "bhEventChange", "bhEventSelected", "bhEventInput", "bhEventCtaClick", "unselect", "close"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    multiselectChange: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventInput: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    unselect: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var BhMenuItem = class BhMenuItem2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhMenuItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhMenuItem2,
    selectors: [["bh-menu-item"]],
    inputs: {
      chevron: "chevron",
      icon: "icon",
      id: "id",
      isFocusable: "isFocusable",
      isHovered: "isHovered",
      isKeyboardFocused: "isKeyboardFocused",
      isSelected: "isSelected",
      isSubmenuBackSelected: "isSubmenuBackSelected",
      label: "label",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhMenuItem = __decorate([ProxyCmp({
  inputs: ["chevron", "icon", "id", "isFocusable", "isHovered", "isKeyboardFocused", "isSelected", "isSubmenuBackSelected", "label", "type"]
})], BhMenuItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhMenuItem, [{
    type: Component,
    args: [{
      selector: "bh-menu-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chevron", "icon", "id", "isFocusable", "isHovered", "isKeyboardFocused", "isSelected", "isSubmenuBackSelected", "label", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhMobileMenu = class BhMobileMenu2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhMobileMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhMobileMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhMobileMenu2,
    selectors: [["bh-mobile-menu"]],
    inputs: {
      isOpen: "isOpen",
      mobileViewLabel: "mobileViewLabel",
      navigation: "navigation",
      settings: "settings",
      useremail: "useremail",
      userfirstname: "userfirstname",
      userimage: "userimage",
      userlastname: "userlastname"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhMobileMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhMobileMenu = __decorate([ProxyCmp({
  inputs: ["isOpen", "mobileViewLabel", "navigation", "settings", "useremail", "userfirstname", "userimage", "userlastname"]
})], BhMobileMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhMobileMenu, [{
    type: Component,
    args: [{
      selector: "bh-mobile-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isOpen", "mobileViewLabel", "navigation", "settings", "useremail", "userfirstname", "userimage", "userlastname"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhModal = class BhModal2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  bhEventScroll = new EventEmitter();
  ctaClick = new EventEmitter();
  bhEventClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhModal2,
    selectors: [["bh-modal"]],
    inputs: {
      ctas: "ctas",
      customizeClickEvent: "customizeClickEvent",
      enableMicroInteraction: "enableMicroInteraction",
      header: "header",
      isDismissible: "isDismissible",
      isOpen: "isOpen",
      outsideModalClick: "outsideModalClick",
      subheader: "subheader",
      width: "width"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventCtaClick: "bhEventCtaClick",
      bhEventScroll: "bhEventScroll",
      ctaClick: "ctaClick",
      bhEventClick: "bhEventClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhModal_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhModal = __decorate([ProxyCmp({
  inputs: ["ctas", "customizeClickEvent", "enableMicroInteraction", "header", "isDismissible", "isOpen", "outsideModalClick", "subheader", "width"]
})], BhModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhModal, [{
    type: Component,
    args: [{
      selector: "bh-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["ctas", "customizeClickEvent", "enableMicroInteraction", "header", "isDismissible", "isOpen", "outsideModalClick", "subheader", "width"],
      outputs: ["bhEventOpen", "bhEventClose", "bhEventCtaClick", "bhEventScroll", "ctaClick", "bhEventClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    bhEventScroll: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }],
    bhEventClick: [{
      type: Output
    }]
  });
})();
var BhNavMenu = class BhNavMenu2 {
  z;
  el;
  navSubMenuOpened = new EventEmitter();
  navSubMenuClosed = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhNavMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhNavMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhNavMenu2,
    selectors: [["bh-nav-menu"]],
    inputs: {
      navigation: "navigation",
      type: "type",
      withAppShellMenu: "withAppShellMenu"
    },
    outputs: {
      navSubMenuOpened: "navSubMenuOpened",
      navSubMenuClosed: "navSubMenuClosed"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhNavMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhNavMenu = __decorate([ProxyCmp({
  inputs: ["navigation", "type", "withAppShellMenu"]
})], BhNavMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhNavMenu, [{
    type: Component,
    args: [{
      selector: "bh-nav-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["navigation", "type", "withAppShellMenu"],
      outputs: ["navSubMenuOpened", "navSubMenuClosed"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    navSubMenuOpened: [{
      type: Output
    }],
    navSubMenuClosed: [{
      type: Output
    }]
  });
})();
var BhPagination = class BhPagination2 {
  z;
  el;
  pageNumberChange = new EventEmitter();
  itemCountChange = new EventEmitter();
  dropdownOpened = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhPagination_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhPagination2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhPagination2,
    selectors: [["bh-pagination"]],
    inputs: {
      customUpdate: "customUpdate",
      enableMicroInteraction: "enableMicroInteraction",
      itemCount: "itemCount",
      itemCountOptions: "itemCountOptions",
      itemPerPageText: "itemPerPageText",
      manualPageChange: "manualPageChange",
      numOfPagesToExpose: "numOfPagesToExpose",
      pagePreSelect: "pagePreSelect",
      refresh: "refresh",
      totalItemCount: "totalItemCount"
    },
    outputs: {
      pageNumberChange: "pageNumberChange",
      itemCountChange: "itemCountChange",
      dropdownOpened: "dropdownOpened",
      bhEventChange: "bhEventChange",
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhPagination_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhPagination = __decorate([ProxyCmp({
  inputs: ["customUpdate", "enableMicroInteraction", "itemCount", "itemCountOptions", "itemPerPageText", "manualPageChange", "numOfPagesToExpose", "pagePreSelect", "refresh", "totalItemCount"]
})], BhPagination);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhPagination, [{
    type: Component,
    args: [{
      selector: "bh-pagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["customUpdate", "enableMicroInteraction", "itemCount", "itemCountOptions", "itemPerPageText", "manualPageChange", "numOfPagesToExpose", "pagePreSelect", "refresh", "totalItemCount"],
      outputs: ["pageNumberChange", "itemCountChange", "dropdownOpened", "bhEventChange", "bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pageNumberChange: [{
      type: Output
    }],
    itemCountChange: [{
      type: Output
    }],
    dropdownOpened: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhPanel = class BhPanel2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhPanel2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhPanel2,
    selectors: [["bh-panel"]],
    inputs: {
      closebtnText: "closebtnText",
      enableMicroInteraction: "enableMicroInteraction",
      header: "header",
      isOpen: "isOpen",
      isPadded: "isPadded",
      outsidePanelClick: "outsidePanelClick",
      tooltipOnCloseIcon: "tooltipOnCloseIcon",
      width: "width"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhPanel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhPanel = __decorate([ProxyCmp({
  inputs: ["closebtnText", "enableMicroInteraction", "header", "isOpen", "isPadded", "outsidePanelClick", "tooltipOnCloseIcon", "width"]
})], BhPanel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhPanel, [{
    type: Component,
    args: [{
      selector: "bh-panel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closebtnText", "enableMicroInteraction", "header", "isOpen", "isPadded", "outsidePanelClick", "tooltipOnCloseIcon", "width"],
      outputs: ["bhEventOpen", "bhEventClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }]
  });
})();
var BhProgressBar = class BhProgressBar2 {
  z;
  el;
  progressComplete = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhProgressBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhProgressBar2,
    selectors: [["bh-progress-bar"]],
    inputs: {
      automaticTimeout: "automaticTimeout",
      mode: "mode",
      progress: "progress",
      size: "size"
    },
    outputs: {
      progressComplete: "progressComplete"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhProgressBar = __decorate([ProxyCmp({
  inputs: ["automaticTimeout", "mode", "progress", "size"]
})], BhProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhProgressBar, [{
    type: Component,
    args: [{
      selector: "bh-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["automaticTimeout", "mode", "progress", "size"],
      outputs: ["progressComplete"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    progressComplete: [{
      type: Output
    }]
  });
})();
var BhRadioButton = class BhRadioButton2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhRadioButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhRadioButton2,
    selectors: [["bh-radio-button"]],
    inputs: {
      isChecked: "isChecked",
      isDisabled: "isDisabled",
      isError: "isError",
      label: "label",
      name: "name",
      value: "value"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhRadioButton = __decorate([ProxyCmp({
  inputs: ["isChecked", "isDisabled", "isError", "label", "name", "value"]
})], BhRadioButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhRadioButton, [{
    type: Component,
    args: [{
      selector: "bh-radio-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isChecked", "isDisabled", "isError", "label", "name", "value"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhScatterChart = class BhScatterChart2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhScatterChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhScatterChart2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhScatterChart2,
    selectors: [["bh-scatter-chart"]],
    inputs: {
      chartOptionOverride: "chartOptionOverride",
      data: "data",
      height: "height",
      option: "option",
      theme: "theme"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhScatterChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhScatterChart = __decorate([ProxyCmp({
  inputs: ["chartOptionOverride", "data", "height", "option", "theme"]
})], BhScatterChart);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhScatterChart, [{
    type: Component,
    args: [{
      selector: "bh-scatter-chart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["chartOptionOverride", "data", "height", "option", "theme"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhSearch = class BhSearch2 {
  z;
  el;
  query = new EventEmitter();
  results = new EventEmitter();
  ctaClick = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSearch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSearch2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSearch2,
    selectors: [["bh-search"]],
    inputs: {
      data: "data",
      disableFuzzySearch: "disableFuzzySearch",
      disablePointerEvent: "disablePointerEvent",
      focusOnSearch: "focusOnSearch",
      isButtonSearch: "isButtonSearch",
      isDisabled: "isDisabled",
      isError: "isError",
      isFluid: "isFluid",
      isRounded: "isRounded",
      isSmall: "isSmall",
      maxLength: "maxLength",
      onBlur: "onBlur",
      onFocus: "onFocus",
      placeholder: "placeholder",
      search: "search",
      searchParams: "searchParams",
      shouldTrim: "shouldTrim",
      type: "type",
      value: "value"
    },
    outputs: {
      query: "query",
      results: "results",
      ctaClick: "ctaClick",
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSearch_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSearch = __decorate([ProxyCmp({
  inputs: ["data", "disableFuzzySearch", "disablePointerEvent", "focusOnSearch", "isButtonSearch", "isDisabled", "isError", "isFluid", "isRounded", "isSmall", "maxLength", "onBlur", "onFocus", "placeholder", "search", "searchParams", "shouldTrim", "type", "value"]
})], BhSearch);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSearch, [{
    type: Component,
    args: [{
      selector: "bh-search",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["data", "disableFuzzySearch", "disablePointerEvent", "focusOnSearch", "isButtonSearch", "isDisabled", "isError", "isFluid", "isRounded", "isSmall", "maxLength", "onBlur", "onFocus", "placeholder", "search", "searchParams", "shouldTrim", "type", "value"],
      outputs: ["query", "results", "ctaClick", "bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    query: [{
      type: Output
    }],
    results: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhSelectionGroup = class BhSelectionGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSelectionGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSelectionGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSelectionGroup2,
    selectors: [["bh-selection-group"]],
    inputs: {
      isDisabled: "isDisabled",
      isError: "isError",
      isGrid: "isGrid",
      layout: "layout",
      message: "message"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSelectionGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSelectionGroup = __decorate([ProxyCmp({
  inputs: ["isDisabled", "isError", "isGrid", "layout", "message"]
})], BhSelectionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSelectionGroup, [{
    type: Component,
    args: [{
      selector: "bh-selection-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isDisabled", "isError", "isGrid", "layout", "message"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhSettingsMenu = class BhSettingsMenu2 {
  z;
  el;
  settingsSubmenuOpened = new EventEmitter();
  settingsSubmenuClosed = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSettingsMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSettingsMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSettingsMenu2,
    selectors: [["bh-settings-menu"]],
    inputs: {
      isFocusable: "isFocusable",
      isMobile: "isMobile",
      isOpen: "isOpen",
      isSubmenuBackSelected: "isSubmenuBackSelected",
      settings: "settings",
      useremail: "useremail",
      userfirstname: "userfirstname",
      userimage: "userimage",
      userlastname: "userlastname"
    },
    outputs: {
      settingsSubmenuOpened: "settingsSubmenuOpened",
      settingsSubmenuClosed: "settingsSubmenuClosed"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSettingsMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSettingsMenu = __decorate([ProxyCmp({
  inputs: ["isFocusable", "isMobile", "isOpen", "isSubmenuBackSelected", "settings", "useremail", "userfirstname", "userimage", "userlastname"]
})], BhSettingsMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSettingsMenu, [{
    type: Component,
    args: [{
      selector: "bh-settings-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isFocusable", "isMobile", "isOpen", "isSubmenuBackSelected", "settings", "useremail", "userfirstname", "userimage", "userlastname"],
      outputs: ["settingsSubmenuOpened", "settingsSubmenuClosed"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    settingsSubmenuOpened: [{
      type: Output
    }],
    settingsSubmenuClosed: [{
      type: Output
    }]
  });
})();
var BhSlider = class BhSlider2 {
  z;
  el;
  bhEventInput = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSlider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSlider2,
    selectors: [["bh-slider"]],
    inputs: {
      isDisabled: "isDisabled",
      maxLabel: "maxLabel",
      maxValue: "maxValue",
      minLabel: "minLabel",
      minValue: "minValue",
      prefixText: "prefixText",
      size: "size",
      sliderLabel: "sliderLabel",
      suffixText: "suffixText",
      textOnly: "textOnly",
      value: "value"
    },
    outputs: {
      bhEventInput: "bhEventInput",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSlider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSlider = __decorate([ProxyCmp({
  inputs: ["isDisabled", "maxLabel", "maxValue", "minLabel", "minValue", "prefixText", "size", "sliderLabel", "suffixText", "textOnly", "value"]
})], BhSlider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSlider, [{
    type: Component,
    args: [{
      selector: "bh-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isDisabled", "maxLabel", "maxValue", "minLabel", "minValue", "prefixText", "size", "sliderLabel", "suffixText", "textOnly", "value"],
      outputs: ["bhEventInput", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventInput: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhSpinner = class BhSpinner2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSpinner2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSpinner2,
    selectors: [["bh-spinner"]],
    inputs: {
      offset: "offset",
      position: "position",
      size: "size"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSpinner_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSpinner = __decorate([ProxyCmp({
  inputs: ["offset", "position", "size"]
})], BhSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSpinner, [{
    type: Component,
    args: [{
      selector: "bh-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "position", "size"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhStatusIndicator = class BhStatusIndicator2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhStatusIndicator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhStatusIndicator2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhStatusIndicator2,
    selectors: [["bh-status-indicator"]],
    inputs: {
      color: "color",
      isFluid: "isFluid",
      offset: "offset",
      position: "position",
      size: "size",
      theme: "theme"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhStatusIndicator_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhStatusIndicator = __decorate([ProxyCmp({
  inputs: ["color", "isFluid", "offset", "position", "size", "theme"]
})], BhStatusIndicator);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhStatusIndicator, [{
    type: Component,
    args: [{
      selector: "bh-status-indicator",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "isFluid", "offset", "position", "size", "theme"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhStepper = class BhStepper2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  stepClick = new EventEmitter();
  complete = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhStepper2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhStepper2,
    selectors: [["bh-stepper"]],
    inputs: {
      current: "current",
      layout: "layout",
      steps: "steps"
    },
    outputs: {
      bhEventChange: "bhEventChange",
      stepClick: "stepClick",
      complete: "complete"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhStepper_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhStepper = __decorate([ProxyCmp({
  inputs: ["current", "layout", "steps"]
})], BhStepper);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhStepper, [{
    type: Component,
    args: [{
      selector: "bh-stepper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["current", "layout", "steps"],
      outputs: ["bhEventChange", "stepClick", "complete"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }],
    stepClick: [{
      type: Output
    }],
    complete: [{
      type: Output
    }]
  });
})();
var BhSystemAlertItem = class BhSystemAlertItem2 {
  z;
  el;
  removeAlertItem = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  ctaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhSystemAlertItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhSystemAlertItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhSystemAlertItem2,
    selectors: [["bh-system-alert-item"]],
    inputs: {
      alertkey: "alertkey",
      closeOnCtaClick: "closeOnCtaClick",
      ctas: "ctas",
      header: "header",
      index: "index",
      isOpen: "isOpen",
      message: "message",
      opacity: "opacity",
      status: "status",
      timestamp: "timestamp"
    },
    outputs: {
      removeAlertItem: "removeAlertItem",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventCtaClick: "bhEventCtaClick",
      ctaClick: "ctaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhSystemAlertItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhSystemAlertItem = __decorate([ProxyCmp({
  inputs: ["alertkey", "closeOnCtaClick", "ctas", "header", "index", "isOpen", "message", "opacity", "status", "timestamp"]
})], BhSystemAlertItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhSystemAlertItem, [{
    type: Component,
    args: [{
      selector: "bh-system-alert-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alertkey", "closeOnCtaClick", "ctas", "header", "index", "isOpen", "message", "opacity", "status", "timestamp"],
      outputs: ["removeAlertItem", "bhEventOpen", "bhEventClose", "bhEventCtaClick", "ctaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    removeAlertItem: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    ctaClick: [{
      type: Output
    }]
  });
})();
var BhTabs = class BhTabs2 {
  z;
  el;
  activeTabUpdate = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTabs2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTabs2,
    selectors: [["bh-tabs"]],
    inputs: {
      activeKey: "activeKey",
      displayTabLimit: "displayTabLimit",
      ellipsisTextLimit: "ellipsisTextLimit",
      isBorder: "isBorder",
      isSmall: "isSmall",
      items: "items",
      menuEllipsis: "menuEllipsis",
      menuWidth: "menuWidth",
      removeTab: "removeTab",
      reorderTabs: "reorderTabs"
    },
    outputs: {
      activeTabUpdate: "activeTabUpdate",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTabs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTabs = __decorate([ProxyCmp({
  inputs: ["activeKey", "displayTabLimit", "ellipsisTextLimit", "isBorder", "isSmall", "items", "menuEllipsis", "menuWidth", "removeTab", "reorderTabs"]
})], BhTabs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTabs, [{
    type: Component,
    args: [{
      selector: "bh-tabs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeKey", "displayTabLimit", "ellipsisTextLimit", "isBorder", "isSmall", "items", "menuEllipsis", "menuWidth", "removeTab", "reorderTabs"],
      outputs: ["activeTabUpdate", "bhEventOpen", "bhEventClose", "bhEventSelected", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    activeTabUpdate: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhTabularList = class BhTabularList2 {
  z;
  el;
  bhEventSelected = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventCtaClick = new EventEmitter();
  bhEventAppended = new EventEmitter();
  bhEventScroll = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTabularList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTabularList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTabularList2,
    selectors: [["bh-tabular-list"]],
    inputs: {
      applyLabelDateTimeRangeFilter: "applyLabelDateTimeRangeFilter",
      cancelLabelDatePicker: "cancelLabelDatePicker",
      clearFilter: "clearFilter",
      customHtmlNoDataAvailable: "customHtmlNoDataAvailable",
      customSelectedItems: "customSelectedItems",
      customSortPagination: "customSortPagination",
      dropdownAllText: "dropdownAllText",
      enableMicroInteraction: "enableMicroInteraction",
      header: "header",
      id: "id",
      isLoading: "isLoading",
      itemCount: "itemCount",
      itemPerPageText: "itemPerPageText",
      noDataAvailable: "noDataAvailable",
      option: "option",
      overridecss: "overridecss",
      payload: "payload",
      placeholderDateTimeRangeFilter: "placeholderDateTimeRangeFilter",
      refresh: "refresh",
      resetLabelDateTimeRangeFilter: "resetLabelDateTimeRangeFilter",
      schema: "schema",
      searchByText: "searchByText",
      selectedItems: "selectedItems",
      todayLabelDatePicker: "todayLabelDatePicker"
    },
    outputs: {
      bhEventSelected: "bhEventSelected",
      bhEventChange: "bhEventChange",
      bhEventCtaClick: "bhEventCtaClick",
      bhEventAppended: "bhEventAppended",
      bhEventScroll: "bhEventScroll"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTabularList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTabularList = __decorate([ProxyCmp({
  inputs: ["applyLabelDateTimeRangeFilter", "cancelLabelDatePicker", "clearFilter", "customHtmlNoDataAvailable", "customSelectedItems", "customSortPagination", "dropdownAllText", "enableMicroInteraction", "header", "id", "isLoading", "itemCount", "itemPerPageText", "noDataAvailable", "option", "overridecss", "payload", "placeholderDateTimeRangeFilter", "refresh", "resetLabelDateTimeRangeFilter", "schema", "searchByText", "selectedItems", "todayLabelDatePicker"]
})], BhTabularList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTabularList, [{
    type: Component,
    args: [{
      selector: "bh-tabular-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["applyLabelDateTimeRangeFilter", "cancelLabelDatePicker", "clearFilter", "customHtmlNoDataAvailable", "customSelectedItems", "customSortPagination", "dropdownAllText", "enableMicroInteraction", "header", "id", "isLoading", "itemCount", "itemPerPageText", "noDataAvailable", "option", "overridecss", "payload", "placeholderDateTimeRangeFilter", "refresh", "resetLabelDateTimeRangeFilter", "schema", "searchByText", "selectedItems", "todayLabelDatePicker"],
      outputs: ["bhEventSelected", "bhEventChange", "bhEventCtaClick", "bhEventAppended", "bhEventScroll"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventSelected: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventCtaClick: [{
      type: Output
    }],
    bhEventAppended: [{
      type: Output
    }],
    bhEventScroll: [{
      type: Output
    }]
  });
})();
var BhTextArea = class BhTextArea2 {
  z;
  el;
  changed = new EventEmitter();
  bhEventInput = new EventEmitter();
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTextArea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTextArea2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTextArea2,
    selectors: [["bh-text-area"]],
    inputs: {
      fluidHorz: "fluidHorz",
      fluidVert: "fluidVert",
      helpText: "helpText",
      isDisabled: "isDisabled",
      isError: "isError",
      isInlineEditing: "isInlineEditing",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      label: "label",
      maxChar: "maxChar",
      messageText: "messageText",
      messageType: "messageType",
      placeholder: "placeholder",
      value: "value"
    },
    outputs: {
      changed: "changed",
      bhEventInput: "bhEventInput",
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTextArea_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTextArea = __decorate([ProxyCmp({
  inputs: ["fluidHorz", "fluidVert", "helpText", "isDisabled", "isError", "isInlineEditing", "isReadOnly", "isRequired", "label", "maxChar", "messageText", "messageType", "placeholder", "value"]
})], BhTextArea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTextArea, [{
    type: Component,
    args: [{
      selector: "bh-text-area",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fluidHorz", "fluidVert", "helpText", "isDisabled", "isError", "isInlineEditing", "isReadOnly", "isRequired", "label", "maxChar", "messageText", "messageType", "placeholder", "value"],
      outputs: ["changed", "bhEventInput", "bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    changed: [{
      type: Output
    }],
    bhEventInput: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhTextInput = class BhTextInput2 {
  z;
  el;
  bhEventInput = new EventEmitter();
  bhEventChange = new EventEmitter();
  bhEventBlur = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTextInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTextInput2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTextInput2,
    selectors: [["bh-text-input"]],
    inputs: {
      endIcon: "endIcon",
      focusOnInput: "focusOnInput",
      isDisabled: "isDisabled",
      isError: "isError",
      isFluid: "isFluid",
      isInlineEditing: "isInlineEditing",
      isMultiChipSearch: "isMultiChipSearch",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      isRounded: "isRounded",
      isSmall: "isSmall",
      isSmallWidth: "isSmallWidth",
      label: "label",
      maxLength: "maxLength",
      message: "message",
      onFocus: "onFocus",
      pattern: "pattern",
      placeholder: "placeholder",
      startIcon: "startIcon",
      stopClickPropagation: "stopClickPropagation",
      type: "type",
      unit: "unit",
      value: "value"
    },
    outputs: {
      bhEventInput: "bhEventInput",
      bhEventChange: "bhEventChange",
      bhEventBlur: "bhEventBlur"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTextInput_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTextInput = __decorate([ProxyCmp({
  inputs: ["endIcon", "focusOnInput", "isDisabled", "isError", "isFluid", "isInlineEditing", "isMultiChipSearch", "isReadOnly", "isRequired", "isRounded", "isSmall", "isSmallWidth", "label", "maxLength", "message", "onFocus", "pattern", "placeholder", "startIcon", "stopClickPropagation", "type", "unit", "value"]
})], BhTextInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTextInput, [{
    type: Component,
    args: [{
      selector: "bh-text-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["endIcon", "focusOnInput", "isDisabled", "isError", "isFluid", "isInlineEditing", "isMultiChipSearch", "isReadOnly", "isRequired", "isRounded", "isSmall", "isSmallWidth", "label", "maxLength", "message", "onFocus", "pattern", "placeholder", "startIcon", "stopClickPropagation", "type", "unit", "value"],
      outputs: ["bhEventInput", "bhEventChange", "bhEventBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventInput: [{
      type: Output
    }],
    bhEventChange: [{
      type: Output
    }],
    bhEventBlur: [{
      type: Output
    }]
  });
})();
var BhTimePicker = class BhTimePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  bhEventInput = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTimePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTimePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTimePicker2,
    selectors: [["bh-time-picker"]],
    inputs: {
      disableHelper: "disableHelper",
      errorMessage: "errorMessage",
      format: "format",
      id: "id",
      isDisabled: "isDisabled",
      isInvalid: "isInvalid",
      isReadOnly: "isReadOnly",
      isRequired: "isRequired",
      isSmall: "isSmall",
      label: "label",
      value: "value",
      width: "width"
    },
    outputs: {
      bhEventChange: "bhEventChange",
      bhEventInput: "bhEventInput"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTimePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTimePicker = __decorate([ProxyCmp({
  inputs: ["disableHelper", "errorMessage", "format", "id", "isDisabled", "isInvalid", "isReadOnly", "isRequired", "isSmall", "label", "value", "width"]
})], BhTimePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTimePicker, [{
    type: Component,
    args: [{
      selector: "bh-time-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disableHelper", "errorMessage", "format", "id", "isDisabled", "isInvalid", "isReadOnly", "isRequired", "isSmall", "label", "value", "width"],
      outputs: ["bhEventChange", "bhEventInput"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }],
    bhEventInput: [{
      type: Output
    }]
  });
})();
var BhTimeZonePicker = class BhTimeZonePicker2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTimeZonePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTimeZonePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTimeZonePicker2,
    selectors: [["bh-time-zone-picker"]],
    inputs: {
      isDisabled: "isDisabled",
      isError: "isError",
      isFluid: "isFluid",
      isRequired: "isRequired",
      isSmall: "isSmall",
      label: "label",
      menuWidth: "menuWidth",
      message: "message",
      placeholder: "placeholder",
      value: "value"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTimeZonePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTimeZonePicker = __decorate([ProxyCmp({
  inputs: ["isDisabled", "isError", "isFluid", "isRequired", "isSmall", "label", "menuWidth", "message", "placeholder", "value"]
})], BhTimeZonePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTimeZonePicker, [{
    type: Component,
    args: [{
      selector: "bh-time-zone-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isDisabled", "isError", "isFluid", "isRequired", "isSmall", "label", "menuWidth", "message", "placeholder", "value"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhTitleWrapper = class BhTitleWrapper2 {
  z;
  el;
  bhEventCtaClick = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTitleWrapper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTitleWrapper2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTitleWrapper2,
    selectors: [["bh-title-wrapper"]],
    inputs: {
      cta: "cta",
      header: "header",
      subtext: "subtext",
      type: "type"
    },
    outputs: {
      bhEventCtaClick: "bhEventCtaClick"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTitleWrapper_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTitleWrapper = __decorate([ProxyCmp({
  inputs: ["cta", "header", "subtext", "type"]
})], BhTitleWrapper);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTitleWrapper, [{
    type: Component,
    args: [{
      selector: "bh-title-wrapper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cta", "header", "subtext", "type"],
      outputs: ["bhEventCtaClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventCtaClick: [{
      type: Output
    }]
  });
})();
var BhToggle = class BhToggle2 {
  z;
  el;
  bhEventChange = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhToggle2,
    selectors: [["bh-toggle"]],
    inputs: {
      isChecked: "isChecked",
      isDisabled: "isDisabled",
      isError: "isError",
      label: "label",
      name: "name",
      value: "value"
    },
    outputs: {
      bhEventChange: "bhEventChange"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhToggle = __decorate([ProxyCmp({
  inputs: ["isChecked", "isDisabled", "isError", "label", "name", "value"]
})], BhToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhToggle, [{
    type: Component,
    args: [{
      selector: "bh-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["isChecked", "isDisabled", "isError", "label", "name", "value"],
      outputs: ["bhEventChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventChange: [{
      type: Output
    }]
  });
})();
var BhTokenDemo = class BhTokenDemo2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTokenDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTokenDemo2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTokenDemo2,
    selectors: [["bh-token-demo"]],
    inputs: {
      tokens: "tokens"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTokenDemo_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTokenDemo = __decorate([ProxyCmp({
  inputs: ["tokens"]
})], BhTokenDemo);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTokenDemo, [{
    type: Component,
    args: [{
      selector: "bh-token-demo",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["tokens"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var BhTooltip = class BhTooltip2 {
  z;
  el;
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTooltip2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTooltip2,
    selectors: [["bh-tooltip"]],
    inputs: {
      hide: "hide",
      invisible: "invisible",
      isFromTabularlist: "isFromTabularlist",
      isInline: "isInline",
      isLegend: "isLegend",
      isTitle: "isTitle",
      ismessage: "ismessage",
      legendData: "legendData",
      message: "message",
      placement: "placement",
      tooltipLeftPadding: "tooltipLeftPadding",
      tooltipMessageFromTop: "tooltipMessageFromTop",
      tooltipTitle: "tooltipTitle"
    },
    outputs: {
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTooltip_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTooltip = __decorate([ProxyCmp({
  inputs: ["hide", "invisible", "isFromTabularlist", "isInline", "isLegend", "isTitle", "ismessage", "legendData", "message", "placement", "tooltipLeftPadding", "tooltipMessageFromTop", "tooltipTitle"]
})], BhTooltip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTooltip, [{
    type: Component,
    args: [{
      selector: "bh-tooltip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["hide", "invisible", "isFromTabularlist", "isInline", "isLegend", "isTitle", "ismessage", "legendData", {
        name: "message",
        required: true
      }, "placement", "tooltipLeftPadding", "tooltipMessageFromTop", "tooltipTitle"],
      outputs: ["bhEventOpen", "bhEventClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }]
  });
})();
var BhTree = class BhTree2 {
  z;
  el;
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTree2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTree2,
    selectors: [["bh-tree"]],
    inputs: {
      id: "id",
      option: "option",
      payload: "payload"
    },
    outputs: {
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTree_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTree = __decorate([ProxyCmp({
  inputs: ["id", "option", "payload"]
})], BhTree);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTree, [{
    type: Component,
    args: [{
      selector: "bh-tree",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [{
        name: "id",
        required: true
      }, "option", "payload"],
      outputs: ["bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhTypeAhead = class BhTypeAhead2 {
  z;
  el;
  selected = new EventEmitter();
  bhEventOpen = new EventEmitter();
  bhEventClose = new EventEmitter();
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhTypeAhead_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhTypeAhead2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhTypeAhead2,
    selectors: [["bh-type-ahead"]],
    inputs: {
      clear: "clear",
      data: "data",
      isDisabled: "isDisabled",
      isError: "isError",
      isFluid: "isFluid",
      isMultiChipSearch: "isMultiChipSearch",
      isSmall: "isSmall",
      label: "label",
      message: "message",
      noMatchText: "noMatchText",
      placeholder: "placeholder",
      showrecent: "showrecent",
      value: "value"
    },
    outputs: {
      selected: "selected",
      bhEventOpen: "bhEventOpen",
      bhEventClose: "bhEventClose",
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhTypeAhead_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhTypeAhead = __decorate([ProxyCmp({
  inputs: ["clear", "data", "isDisabled", "isError", "isFluid", "isMultiChipSearch", "isSmall", "label", "message", "noMatchText", "placeholder", "showrecent", "value"]
})], BhTypeAhead);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhTypeAhead, [{
    type: Component,
    args: [{
      selector: "bh-type-ahead",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["clear", "data", "isDisabled", "isError", "isFluid", "isMultiChipSearch", "isSmall", "label", "message", "noMatchText", "placeholder", "showrecent", "value"],
      outputs: ["selected", "bhEventOpen", "bhEventClose", "bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    selected: [{
      type: Output
    }],
    bhEventOpen: [{
      type: Output
    }],
    bhEventClose: [{
      type: Output
    }],
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var BhUploader = class BhUploader2 {
  z;
  el;
  bhUploadSucess = new EventEmitter();
  bhUploadStart = new EventEmitter();
  bhUploadError = new EventEmitter();
  bhUploadProgress = new EventEmitter();
  bhFileReject = new EventEmitter();
  bhFilesChanged = new EventEmitter();
  bhMaxFilesReachedChanged = new EventEmitter();
  bhUploadAbort = new EventEmitter();
  bhUploadBefore = new EventEmitter();
  bhUploadRequest = new EventEmitter();
  bhUploadResponse = new EventEmitter();
  bhUploadRetry = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhUploader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhUploader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhUploader2,
    selectors: [["bh-uploader"]],
    inputs: {
      fileType: "fileType",
      headers: "headers",
      helpText: "helpText",
      id: "id",
      isDisabled: "isDisabled",
      isSmall: "isSmall",
      isTarget: "isTarget",
      label: "label",
      leftIcon: "leftIcon",
      maxFileSize: "maxFileSize",
      maxFiles: "maxFiles",
      method: "method",
      noAuto: "noAuto",
      target: "target",
      type: "type"
    },
    outputs: {
      bhUploadSucess: "bhUploadSucess",
      bhUploadStart: "bhUploadStart",
      bhUploadError: "bhUploadError",
      bhUploadProgress: "bhUploadProgress",
      bhFileReject: "bhFileReject",
      bhFilesChanged: "bhFilesChanged",
      bhMaxFilesReachedChanged: "bhMaxFilesReachedChanged",
      bhUploadAbort: "bhUploadAbort",
      bhUploadBefore: "bhUploadBefore",
      bhUploadRequest: "bhUploadRequest",
      bhUploadResponse: "bhUploadResponse",
      bhUploadRetry: "bhUploadRetry"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhUploader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhUploader = __decorate([ProxyCmp({
  inputs: ["fileType", "headers", "helpText", "id", "isDisabled", "isSmall", "isTarget", "label", "leftIcon", "maxFileSize", "maxFiles", "method", "noAuto", "target", "type"],
  methods: ["reset"]
})], BhUploader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhUploader, [{
    type: Component,
    args: [{
      selector: "bh-uploader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fileType", "headers", "helpText", "id", "isDisabled", "isSmall", "isTarget", "label", "leftIcon", "maxFileSize", "maxFiles", "method", "noAuto", "target", "type"],
      outputs: ["bhUploadSucess", "bhUploadStart", "bhUploadError", "bhUploadProgress", "bhFileReject", "bhFilesChanged", "bhMaxFilesReachedChanged", "bhUploadAbort", "bhUploadBefore", "bhUploadRequest", "bhUploadResponse", "bhUploadRetry"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhUploadSucess: [{
      type: Output
    }],
    bhUploadStart: [{
      type: Output
    }],
    bhUploadError: [{
      type: Output
    }],
    bhUploadProgress: [{
      type: Output
    }],
    bhFileReject: [{
      type: Output
    }],
    bhFilesChanged: [{
      type: Output
    }],
    bhMaxFilesReachedChanged: [{
      type: Output
    }],
    bhUploadAbort: [{
      type: Output
    }],
    bhUploadBefore: [{
      type: Output
    }],
    bhUploadRequest: [{
      type: Output
    }],
    bhUploadResponse: [{
      type: Output
    }],
    bhUploadRetry: [{
      type: Output
    }]
  });
})();
var BhVerticalMenu = class BhVerticalMenu2 {
  z;
  el;
  bhEventSelected = new EventEmitter();
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static ɵfac = function BhVerticalMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BhVerticalMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: BhVerticalMenu2,
    selectors: [["bh-vertical-menu"]],
    inputs: {
      menuItems: "menuItems",
      selected: "selected",
      stopClickPropagation: "stopClickPropagation"
    },
    outputs: {
      bhEventSelected: "bhEventSelected"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BhVerticalMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
BhVerticalMenu = __decorate([ProxyCmp({
  inputs: ["menuItems", "selected", "stopClickPropagation"]
})], BhVerticalMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BhVerticalMenu, [{
    type: Component,
    args: [{
      selector: "bh-vertical-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["menuItems", "selected", "stopClickPropagation"],
      outputs: ["bhEventSelected"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    bhEventSelected: [{
      type: Output
    }]
  });
})();
var ValueAccessor = class _ValueAccessor {
  el;
  onChange = () => {
  };
  onTouched = () => {
  };
  lastValue;
  constructor(el) {
    this.el = el;
  }
  writeValue(value) {
    this.el.nativeElement.value = this.lastValue = value == null ? "" : value;
  }
  handleChangeEvent(value) {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
    }
  }
  _handleBlurEvent() {
    this.onTouched();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.el.nativeElement.disabled = isDisabled;
  }
  static ɵfac = function ValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueAccessor)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ValueAccessor,
    hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focusout", function ValueAccessor_focusout_HostBindingHandler() {
          return ctx._handleBlurEvent();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{
    type: Directive,
    args: [{}]
  }], () => [{
    type: ElementRef
  }], {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["focusout"]
    }]
  });
})();
var BooleanValueAccessor = class _BooleanValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  writeValue(value) {
    this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
  }
  static ɵfac = function BooleanValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooleanValueAccessor)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BooleanValueAccessor,
    selectors: [["bh-checkbox"], ["bh-radio-button"], ["bh-toggle"]],
    hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("bhEventChange", function BooleanValueAccessor_bhEventChange_HostBindingHandler($event) {
          return ctx.handleChangeEvent($event.target == null ? null : $event.target["isChecked"]);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _BooleanValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessor, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "bh-checkbox, bh-radio-button, bh-toggle",
      host: {
        "(bhEventChange)": 'handleChangeEvent($event.target?.["isChecked"])'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BooleanValueAccessor),
        multi: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var NumericValueAccessor = class _NumericValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  registerOnChange(fn) {
    super.registerOnChange((value) => {
      fn(value === "" ? null : parseFloat(value));
    });
  }
  static ɵfac = function NumericValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericValueAccessor)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NumericValueAccessor,
    selectors: [["bh-slider"]],
    hostBindings: function NumericValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("bhEventChange", function NumericValueAccessor_bhEventChange_HostBindingHandler($event) {
          return ctx.handleChangeEvent($event.target == null ? null : $event.target["value"]);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NumericValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessor, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "bh-slider",
      host: {
        "(bhEventChange)": 'handleChangeEvent($event.target?.["value"])'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NumericValueAccessor),
        multi: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var SelectValueAccessor = class _SelectValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  static ɵfac = function SelectValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectValueAccessor)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SelectValueAccessor,
    selectors: [["bh-dropdown"], ["bh-inline-dropdown"]],
    hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("bhEventChange", function SelectValueAccessor_bhEventChange_HostBindingHandler($event) {
          return ctx.handleChangeEvent($event.target == null ? null : $event.target["value"]);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessor, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "bh-dropdown, bh-inline-dropdown",
      host: {
        "(bhEventChange)": 'handleChangeEvent($event.target?.["value"])'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectValueAccessor),
        multi: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var TextValueAccessor = class _TextValueAccessor extends ValueAccessor {
  constructor(el) {
    super(el);
  }
  static ɵfac = function TextValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextValueAccessor)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextValueAccessor,
    selectors: [["bh-text-area"], ["bh-text-input"], ["bh-search"], ["bh-type-ahead"], ["bh-date-picker"], ["bh-date-range-picker"], ["bh-date-time-picker"], ["bh-time-picker"], ["bh-time-zone-picker"], ["bh-incrementer"]],
    hostBindings: function TextValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("bhEventChange", function TextValueAccessor_bhEventChange_HostBindingHandler($event) {
          return ctx.handleChangeEvent($event.target == null ? null : $event.target["value"]);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextValueAccessor),
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessor, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "bh-text-area, bh-text-input, bh-search, bh-type-ahead, bh-date-picker, bh-date-range-picker, bh-date-time-picker, bh-time-picker, bh-time-zone-picker, bh-incrementer",
      host: {
        "(bhEventChange)": 'handleChangeEvent($event.target?.["value"])'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextValueAccessor),
        multi: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
defineCustomElements(window);
var DECLARATIONS = [
  // proxies
  BhA,
  BhAccordion,
  BhActionBar,
  BhActionMenu,
  BhAlert,
  BhAlertItem,
  BhAppShell,
  BhAppShellMenu,
  BhAvatar,
  BhAvatarGroup,
  BhBadge,
  BhBarChart,
  BhBreadcrumbs,
  BhButton,
  BhButtonDropdown,
  BhButtonGroup,
  BhButtonTabs,
  BhCard,
  BhCheckbox,
  BhChip,
  BhChipGroup,
  BhContent,
  BhDataTable,
  BhDatePicker,
  BhDateTimePicker,
  BhDateRangePicker,
  BhDialog,
  BhDivider,
  BhDonutChart,
  BhDropdown,
  BhError,
  BhFooter,
  BhFormMessage,
  BhHeader,
  BhIcon,
  BhIllustration,
  BhIncrementer,
  BhInlineDropdown,
  BhKpi,
  BhLineChart,
  BhList,
  BhMenu,
  BhMenuItem,
  BhMobileMenu,
  BhModal,
  BhNavMenu,
  BhPagination,
  BhPanel,
  BhProgressBar,
  BhRadioButton,
  BhScatterChart,
  BhSearch,
  BhSelectionGroup,
  BhSettingsMenu,
  BhSlider,
  BhSpinner,
  BhStatusIndicator,
  BhStepper,
  BhSystemAlertItem,
  BhTabs,
  BhTabularList,
  BhTextArea,
  BhTextInput,
  BhTimePicker,
  BhTimeZonePicker,
  BhTitleWrapper,
  BhToggle,
  BhTokenDemo,
  BhTooltip,
  BhTree,
  BhTypeAhead,
  BhUploader,
  BhVerticalMenu,
  // value accssessors
  BooleanValueAccessor,
  NumericValueAccessor,
  SelectValueAccessor,
  TextValueAccessor
];
var ComponentLibraryModule = class _ComponentLibraryModule {
  static ɵfac = function ComponentLibraryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComponentLibraryModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ComponentLibraryModule,
    declarations: [
      // proxies
      BhA,
      BhAccordion,
      BhActionBar,
      BhActionMenu,
      BhAlert,
      BhAlertItem,
      BhAppShell,
      BhAppShellMenu,
      BhAvatar,
      BhAvatarGroup,
      BhBadge,
      BhBarChart,
      BhBreadcrumbs,
      BhButton,
      BhButtonDropdown,
      BhButtonGroup,
      BhButtonTabs,
      BhCard,
      BhCheckbox,
      BhChip,
      BhChipGroup,
      BhContent,
      BhDataTable,
      BhDatePicker,
      BhDateTimePicker,
      BhDateRangePicker,
      BhDialog,
      BhDivider,
      BhDonutChart,
      BhDropdown,
      BhError,
      BhFooter,
      BhFormMessage,
      BhHeader,
      BhIcon,
      BhIllustration,
      BhIncrementer,
      BhInlineDropdown,
      BhKpi,
      BhLineChart,
      BhList,
      BhMenu,
      BhMenuItem,
      BhMobileMenu,
      BhModal,
      BhNavMenu,
      BhPagination,
      BhPanel,
      BhProgressBar,
      BhRadioButton,
      BhScatterChart,
      BhSearch,
      BhSelectionGroup,
      BhSettingsMenu,
      BhSlider,
      BhSpinner,
      BhStatusIndicator,
      BhStepper,
      BhSystemAlertItem,
      BhTabs,
      BhTabularList,
      BhTextArea,
      BhTextInput,
      BhTimePicker,
      BhTimeZonePicker,
      BhTitleWrapper,
      BhToggle,
      BhTokenDemo,
      BhTooltip,
      BhTree,
      BhTypeAhead,
      BhUploader,
      BhVerticalMenu,
      // value accssessors
      BooleanValueAccessor,
      NumericValueAccessor,
      SelectValueAccessor,
      TextValueAccessor
    ],
    exports: [
      // proxies
      BhA,
      BhAccordion,
      BhActionBar,
      BhActionMenu,
      BhAlert,
      BhAlertItem,
      BhAppShell,
      BhAppShellMenu,
      BhAvatar,
      BhAvatarGroup,
      BhBadge,
      BhBarChart,
      BhBreadcrumbs,
      BhButton,
      BhButtonDropdown,
      BhButtonGroup,
      BhButtonTabs,
      BhCard,
      BhCheckbox,
      BhChip,
      BhChipGroup,
      BhContent,
      BhDataTable,
      BhDatePicker,
      BhDateTimePicker,
      BhDateRangePicker,
      BhDialog,
      BhDivider,
      BhDonutChart,
      BhDropdown,
      BhError,
      BhFooter,
      BhFormMessage,
      BhHeader,
      BhIcon,
      BhIllustration,
      BhIncrementer,
      BhInlineDropdown,
      BhKpi,
      BhLineChart,
      BhList,
      BhMenu,
      BhMenuItem,
      BhMobileMenu,
      BhModal,
      BhNavMenu,
      BhPagination,
      BhPanel,
      BhProgressBar,
      BhRadioButton,
      BhScatterChart,
      BhSearch,
      BhSelectionGroup,
      BhSettingsMenu,
      BhSlider,
      BhSpinner,
      BhStatusIndicator,
      BhStepper,
      BhSystemAlertItem,
      BhTabs,
      BhTabularList,
      BhTextArea,
      BhTextInput,
      BhTimePicker,
      BhTimeZonePicker,
      BhTitleWrapper,
      BhToggle,
      BhTokenDemo,
      BhTooltip,
      BhTree,
      BhTypeAhead,
      BhUploader,
      BhVerticalMenu,
      // value accssessors
      BooleanValueAccessor,
      NumericValueAccessor,
      SelectValueAccessor,
      TextValueAccessor
    ]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentLibraryModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      imports: [],
      providers: []
    }]
  }], null, null);
})();
export {
  BhA,
  BhAccordion,
  BhActionBar,
  BhActionMenu,
  BhAlert,
  BhAlertItem,
  BhAppShell,
  BhAppShellMenu,
  BhAvatar,
  BhAvatarGroup,
  BhBadge,
  BhBarChart,
  BhBreadcrumbs,
  BhButton,
  BhButtonDropdown,
  BhButtonGroup,
  BhButtonTabs,
  BhCard,
  BhCheckbox,
  BhChip,
  BhChipGroup,
  BhContent,
  BhCustomTimePicker,
  BhDataTable,
  BhDatePicker,
  BhDateRangePicker,
  BhDateTimePicker,
  BhDatetimeRangePicker,
  BhDialog,
  BhDivider,
  BhDonutChart,
  BhDropdown,
  BhError,
  BhFooter,
  BhFormMessage,
  BhHeader,
  BhIcon,
  BhIllustration,
  BhIncrementer,
  BhInlineDropdown,
  BhKpi,
  BhLineChart,
  BhList,
  BhMenu,
  BhMenuItem,
  BhMobileMenu,
  BhModal,
  BhNavMenu,
  BhPagination,
  BhPanel,
  BhProgressBar,
  BhRadioButton,
  BhScatterChart,
  BhSearch,
  BhSelectionGroup,
  BhSettingsMenu,
  BhSlider,
  BhSpinner,
  BhStatusIndicator,
  BhStepper,
  BhSystemAlertItem,
  BhTabs,
  BhTabularList,
  BhTextArea,
  BhTextInput,
  BhTimePicker,
  BhTimeZonePicker,
  BhTitleWrapper,
  BhToggle,
  BhTokenDemo,
  BhTooltip,
  BhTree,
  BhTypeAhead,
  BhUploader,
  BhVerticalMenu,
  BooleanValueAccessor,
  ComponentLibraryModule,
  NumericValueAccessor,
  SelectValueAccessor,
  TextValueAccessor
};
//# sourceMappingURL=@bh-digital-solutions_ui-toolkit-angular_dist_.js.map
