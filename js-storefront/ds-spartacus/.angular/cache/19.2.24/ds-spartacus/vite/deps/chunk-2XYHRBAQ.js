import {
  DesignTokens
} from "./chunk-XGCW5RY7.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/utils-46b2d2ab.js
function getBreakpoint(w) {
  const width = w ? w : window.innerWidth;
  if (DesignTokens.breakpoints.LayoutMediaQueryLarge <= width) {
    return "large";
  } else if (DesignTokens.breakpoints.LayoutMediaQueryMedium <= width && DesignTokens.breakpoints.LayoutMediaQueryLarge > width) {
    return "medium";
  } else {
    return "small";
  }
}
function parseMessage(message, className) {
  const bTagStart = "<b>";
  const bTagEnd = "</b>";
  let str = message;
  if ((str === null || str === void 0 ? void 0 : str.indexOf(bTagStart)) > -1) {
    const tags = [];
    while ((str === null || str === void 0 ? void 0 : str.indexOf(bTagStart)) > -1) {
      tags.push(`<span>${str.slice(0, str.indexOf(bTagStart))}</span>`);
      tags.push(`<span class="${className} typography--body-small-semi-bold">${str.slice(str.indexOf(bTagStart) + bTagStart.length, str.indexOf(bTagEnd))}</span>`);
      str = str.substring(str.indexOf(bTagEnd) + bTagEnd.length);
    }
    if (str) tags.push(`<span>${str}</span>`);
    return `<span class="typography--body-small">${tags.map((tag) => {
      return tag;
    }).join("")}</span>`;
  } else {
    return `<span class="typography--body-small">${message}</span>`;
  }
}
function parseJSONString(jsonString, message) {
  if (!jsonString) return {};
  if (typeof jsonString !== "string") return jsonString;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (message) console.warn(message);
    return {};
  }
}

export {
  getBreakpoint,
  parseMessage,
  parseJSONString
};
//# sourceMappingURL=chunk-2XYHRBAQ.js.map
