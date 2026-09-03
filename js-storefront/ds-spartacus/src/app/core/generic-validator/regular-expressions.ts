export const REGULAR_PATTERN = {
  textOnly: /[^\p{L}\p{N}a-zA-Z・.。 ]+/gu,
  numbersOnly: /[^\d+ .]+/g,
  alphaNumeric: /[^\p{L}\p{N}a-zA-Z0-9 ,+-。:/#*&!_.%;・()@]+/gu,
  alphaNumericOnlyForAllLang: /[^\p{L}\p{N}a-zA-Z0-9 ,+-。:/#*&!_.%;・()@]+/gu,
  alphaNemericOnly: /[^\p{L}\p{N}a-zA-Z0-9。 -]+/gu,
  alphaNumericWithSpecialCharater: /[^\p{L}\p{N}a-zA-Z0-9 ,。+-:/#*&!_.%;・()@]+/gu,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  // phoneNumberRegex: /^(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/g,
  commonEmailRegx:/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
  phoneNumberRegex: /^[a-zA-Z0-9-.+()# ]{6,20}$/,
  phoneNumberManageAccountRegex: /^[a-zA-Z0-9-.+()# ]{6,16}$/,
};

export const testRegex = (str, regexPattern) => {
  const sanitizedString = str?.replace(regexPattern, '');
  return sanitizedString;
};
