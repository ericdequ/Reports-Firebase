"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js_components_search_visualizations_ChartError_jsx-js_helpers_awardAmountHelper_js"],{

/***/ "./js/components/search/visualizations/ChartError.jsx":
/*!************************************************************!*\
  !*** ./js/components/search/visualizations/ChartError.jsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _sharedComponents_icons_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharedComponents/icons/Icons */ \"./js/components/sharedComponents/icons/Icons.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * ChartError.jsx\n * Created by Kevin Li 12/26/17\n */\n\n\n\nvar ChartError = function ChartError() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"visualization-message-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"visualization-no-results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"error-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sharedComponents_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ExclamationTriangle, {\n    alt: \"An error occurred\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"title\"\n  }, \"An error occurred.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"description\"\n  }, \"Something went wrong while gathering your data.\")));\n};\nvar _default = ChartError;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(ChartError, \"ChartError\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\components\\\\search\\\\visualizations\\\\ChartError.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\components\\\\search\\\\visualizations\\\\ChartError.jsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack:///./js/components/search/visualizations/ChartError.jsx?");

/***/ }),

/***/ "./js/dataMapping/award/awardAmountsSection.js":
/*!*****************************************************!*\
  !*** ./js/dataMapping/award/awardAmountsSection.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"asstAwardTypesWithSimilarAwardAmountData\": () => (/* binding */ asstAwardTypesWithSimilarAwardAmountData),\n/* harmony export */   \"awardTableClassMap\": () => (/* binding */ awardTableClassMap),\n/* harmony export */   \"caresActSpendingCategories\": () => (/* binding */ caresActSpendingCategories),\n/* harmony export */   \"currentColor\": () => (/* binding */ currentColor),\n/* harmony export */   \"defcTypes\": () => (/* binding */ defcTypes),\n/* harmony export */   \"faceValueColor\": () => (/* binding */ faceValueColor),\n/* harmony export */   \"formattedSpendingCategoriesByAwardType\": () => (/* binding */ formattedSpendingCategoriesByAwardType),\n/* harmony export */   \"infrastructureCurrentColor\": () => (/* binding */ infrastructureCurrentColor),\n/* harmony export */   \"infrastructureObligatedColor\": () => (/* binding */ infrastructureObligatedColor),\n/* harmony export */   \"infrastructureOutlayColor\": () => (/* binding */ infrastructureOutlayColor),\n/* harmony export */   \"infrastructurePotentialColor\": () => (/* binding */ infrastructurePotentialColor),\n/* harmony export */   \"infrastructureSpendingCategoriesByAwardType\": () => (/* binding */ infrastructureSpendingCategoriesByAwardType),\n/* harmony export */   \"lineOffsetsBySpendingCategory\": () => (/* binding */ lineOffsetsBySpendingCategory),\n/* harmony export */   \"nonFederalFundingColor\": () => (/* binding */ nonFederalFundingColor),\n/* harmony export */   \"obligatedColor\": () => (/* binding */ obligatedColor),\n/* harmony export */   \"orderedTableTitles\": () => (/* binding */ orderedTableTitles),\n/* harmony export */   \"outlayColor\": () => (/* binding */ outlayColor),\n/* harmony export */   \"potentialColor\": () => (/* binding */ potentialColor),\n/* harmony export */   \"spendingCategoriesByAwardType\": () => (/* binding */ spendingCategoriesByAwardType),\n/* harmony export */   \"subsidyColor\": () => (/* binding */ subsidyColor),\n/* harmony export */   \"tableTitlesBySpendingCategoryAndAwardType\": () => (/* binding */ tableTitlesBySpendingCategoryAndAwardType)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * In the map spendingCategoriesByAwardType:\n * @keys are awardTypes\n * @values are properties on redux.award.overview object which are the\n * spending categories, in ascending order (under normative case), small, bigger, biggest (optional)\n */\n\nvar orderedTableTitles = [\"Outlayed Amount\", \"Obligated Amount\", \"Infrastructure Outlayed Amount\", \"Infrastructure Obligated Amount\", \"COVID-19 Outlayed Amount\", \"COVID-19 Obligated Amount\", \"Current Award Amount\", \"Potential Award Amount\", \"Combined Outlayed Amounts\", \"Combined Obligated Amounts\", \"Combined Current Award Amounts\", \"Combined Potential Award Amounts\", \"Non-Federal Funding\", \"Total Funding\", \"Original Subsidy Cost\", \"Face Value of Direct Loan\"];\nvar spendingCategoriesByAwardType = {\n  loan: ['_totalOutlay', '_totalObligation', '_subsidy', '_faceValue'],\n  contract: ['_totalObligation', '_baseExercisedOptions', '_baseAndAllOptions', '_totalOutlay'],\n  idv: ['_totalObligation', '_baseExercisedOptions', '_baseAndAllOptions', '_totalOutlay'],\n  idv_aggregated: ['_totalObligation', '_baseExercisedOptions', '_baseAndAllOptions', '_combinedOutlay']\n};\nvar infrastructureSpendingCategoriesByAwardType = {\n  contract: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure'],\n  idv: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure'],\n  idv_aggregated: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure'],\n  asst: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure'],\n  loan: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure'],\n  grant: ['_fileCOutlayInfrastructure', '_fileCObligatedInfrastructure']\n};\nvar caresActSpendingCategories = ['fileCObligatedFormatted', 'fileCOutlayFormatted'];\nvar formattedSpendingCategoriesByAwardType = {\n  contract: ['fileCOutlayFormatted', 'fileCObligatedFormatted', 'totalObligationFormatted', 'baseExercisedOptionsFormatted', 'baseAndAllOptionsFormatted', 'totalOutlayFormatted', 'infrastructureOutlayFormatted', 'infrastructureObligationFormatted'],\n  idv: ['fileCOutlayFormatted', 'fileCObligatedFormatted', 'totalObligationFormatted', 'baseExercisedOptionsFormatted', 'baseAndAllOptionsFormatted', 'totalOutlayFormatted', 'infrastructureOutlayFormatted', 'infrastructureObligationFormatted'],\n  idv_aggregated: ['fileCOutlayFormatted', 'fileCObligatedFormatted', 'totalObligationFormatted', 'baseExercisedOptionsFormatted', 'baseAndAllOptionsFormatted', 'combinedOutlayFormatted', 'infrastructureOutlayFormatted', 'infrastructureObligationFormatted'],\n  asst: ['fileCObligatedFormatted', 'fileCOutlayFormatted', 'totalObligationFormatted', 'nonFederalFundingFormatted', 'totalFundingFormatted', 'totalOutlayFormatted', 'infrastructureOutlayFormatted', 'infrastructureObligationFormatted'],\n  loan: ['fileCObligatedFormatted', 'fileCOutlayFormatted', 'subsidyFormatted', 'faceValueFormatted', 'totalOutlayFormatted', 'totalObligationFormatted', 'infrastructureOutlayFormatted', 'infrastructureObligationFormatted']\n};\nvar awardTableClassMap = {\n  \"Combined Obligated Amounts\": \"award-amounts__obligated\",\n  \"Combined Outlayed Amounts\": \"award-amounts__data-icon-dark-blue\",\n  \"Combined Current Award Amounts\": \"award-amounts__current\",\n  \"Combined Potential Award Amounts\": \"award-amounts__potential\",\n  \"Obligated Amount\": \"award-amounts__obligated\",\n  \"Current Award Amount\": \"award-amounts__current\",\n  \"Potential Award Amount\": \"award-amounts__potential\",\n  \"Non-Federal Funding\": \"award-amounts__data-icon_transparent-green\",\n  \"Total Funding\": \"award-amounts__data-icon_gray\",\n  \"Face Value of Direct Loan\": \"award-amounts__data-icon_face-value\",\n  \"Original Subsidy Cost\": \"award-amounts__data-icon_subsidy\",\n  \"COVID-19 Obligated Amount\": \"award-amounts__file-c-obligations\",\n  \"COVID-19 Outlayed Amount\": \"award-amounts__file-c-outlays\",\n  \"Outlayed Amount\": \"award-amounts__data-icon-dark-blue\",\n  \"Combined Infrastructure Obligated Amounts\": \"award-amounts__infrastructure-obligated\",\n  \"Combined Infrastructure Outlayed Amounts\": \"award-amounts__infrastructure-outlays\",\n  \"Infrastructure Obligated Amount\": \"award-amounts__infrastructure-obligated\",\n  \"Infrastructure Outlayed Amount\": \"award-amounts__infrastructure-outlays\",\n  \"Infrastructure Obligated Amounts\": \"award-amounts__infrastructure-obligated\",\n  \"Infrastructure Outlayed Amounts\": \"award-amounts__infrastructure-outlays\"\n};\nvar tableTitlesBySpendingCategoryAndAwardType = {\n  asst: {\n    totalFundingFormatted: 'Total Funding',\n    nonFederalFundingFormatted: 'Non-Federal Funding',\n    totalObligationFormatted: 'Obligated Amount',\n    fileCOutlayFormatted: 'COVID-19 Outlayed Amount',\n    fileCObligatedFormatted: 'COVID-19 Obligated Amount',\n    totalOutlayFormatted: 'Outlayed Amount',\n    infrastructureOutlayFormatted: 'Infrastructure Outlayed Amount',\n    infrastructureObligationFormatted: 'Infrastructure Obligated Amount'\n  },\n  idv_aggregated: {\n    baseExercisedOptionsFormatted: 'Combined Current Award Amounts',\n    baseAndAllOptionsFormatted: 'Combined Potential Award Amounts',\n    totalObligationFormatted: 'Combined Obligated Amounts',\n    combinedOutlayFormatted: 'Combined Outlayed Amounts',\n    fileCOutlayFormatted: 'COVID-19 Outlayed Amount',\n    fileCObligatedFormatted: 'COVID-19 Obligated Amount',\n    infrastructureOutlayFormatted: 'Combined Infrastructure Outlayed Amounts',\n    infrastructureObligationFormatted: 'Combined Infrastructure Obligated Amounts'\n  },\n  contract: {\n    totalOutlayFormatted: 'Outlayed Amount',\n    totalObligationFormatted: 'Obligated Amount',\n    baseExercisedOptionsFormatted: 'Current Award Amount',\n    baseAndAllOptionsFormatted: 'Potential Award Amount',\n    fileCOutlayFormatted: 'COVID-19 Outlayed Amount',\n    fileCObligatedFormatted: 'COVID-19 Obligated Amount',\n    infrastructureOutlayFormatted: 'Infrastructure Outlayed Amount',\n    infrastructureObligationFormatted: 'Infrastructure Obligated Amount'\n  },\n  idv: {\n    baseExercisedOptionsFormatted: 'Current Award Amount',\n    baseAndAllOptionsFormatted: 'Potential Award Amount',\n    totalObligationFormatted: 'Obligated Amount',\n    fileCOutlayFormatted: 'COVID-19 Outlayed Amount',\n    fileCObligatedFormatted: 'COVID-19 Obligated Amount',\n    totalOutlayFormatted: 'Outlayed Amount',\n    infrastructureOutlayFormatted: 'Infrastructure Outlayed Amounts',\n    infrastructureObligationFormatted: 'Infrastructure Obligated Amounts'\n  },\n  loan: {\n    subsidyFormatted: 'Original Subsidy Cost',\n    faceValueFormatted: 'Face Value of Direct Loan',\n    fileCOutlayFormatted: 'COVID-19 Outlayed Amount',\n    fileCObligatedFormatted: 'COVID-19 Obligated Amount',\n    totalOutlayFormatted: 'Outlayed Amount',\n    totalObligationFormatted: 'Obligated Amount',\n    infrastructureOutlayFormatted: 'Infrastructure Outlayed Amounts',\n    infrastructureObligationFormatted: 'Infrastructure Obligated Amounts'\n  }\n};\n\n// similar relationship between spending categories\nvar asstAwardTypesWithSimilarAwardAmountData = ['grant', 'other', 'insurance', 'direct payment'];\nvar outlayColor = '#0b2e5a';\nvar obligatedColor = '#4773aa';\nvar currentColor = '#8aa6c9';\nvar potentialColor = '#dce4ee';\nvar subsidyColor = '#8c6e86';\nvar faceValueColor = '#ded5db';\nvar nonFederalFundingColor = '#47AAA7';\nvar infrastructureOutlayColor = \"#2d6878\";\nvar infrastructureObligatedColor = '#afcdd5';\nvar infrastructureCurrentColor = '#8ba6c9';\nvar infrastructurePotentialColor = '#dce4ee';\n\n// Offsets per DEV-5242:\n// 3px padding between outermost bar and first nested bar\nvar defaultPadding = 6;\n// 2px of padding for each additional nested bar\nvar additionalPadding = 4;\n// offset = defaultPadding + (additionalPadding * levels nested relative to outermost bar)\nvar lineOffsetsBySpendingCategory = {\n  obligationProcurement: defaultPadding + additionalPadding * 1,\n  obligationAsst: defaultPadding,\n  // mark up for loans is a bit different.\n  subsidy: 3,\n  totalFunding: defaultPadding,\n  nonFederalFunding: defaultPadding,\n  faceValue: 0,\n  current: defaultPadding,\n  potential: 0,\n  // cannot understand why we have to divide this by two...!!!???\n  fileCProcurementObligated: (defaultPadding + additionalPadding * 2) / 2,\n  fileCProcurementOutlay: (defaultPadding + additionalPadding * 3) / 2,\n  fileCAsstObligation: defaultPadding + additionalPadding * 1,\n  fileCAsstOutlay: defaultPadding + additionalPadding * 2,\n  loanFileCObligated: 7,\n  loanFileCOutlay: 9\n};\nvar defcTypes = [{\n  codeType: \"covid\",\n  keys: {\n    outlay: \"_fileCOutlay\",\n    obligated: \"_fileCObligated\",\n    outlayAbbreviated: \"fileCOutlayAbbreviated\",\n    obligationAbbreviation: \"fileCObligatedAbbreviated\"\n  },\n  label: \"COVID-19 Spending\",\n  preText: \"COVID-19\"\n}, {\n  codeType: \"infrastructure\",\n  keys: {\n    outlay: \"_fileCOutlayInfrastructure\",\n    obligated: \"_fileCObligatedInfrastructure\",\n    outlayAbbreviated: \"infrastructureOutlayAbbreviated\",\n    obligationAbbreviation: \"infrastructureObligationAbbreviated\"\n  },\n  label: \"Infrastructure Spending\",\n  preText: \"Infrastructure\"\n}];\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(orderedTableTitles, \"orderedTableTitles\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(spendingCategoriesByAwardType, \"spendingCategoriesByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(infrastructureSpendingCategoriesByAwardType, \"infrastructureSpendingCategoriesByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(caresActSpendingCategories, \"caresActSpendingCategories\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(formattedSpendingCategoriesByAwardType, \"formattedSpendingCategoriesByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(awardTableClassMap, \"awardTableClassMap\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(tableTitlesBySpendingCategoryAndAwardType, \"tableTitlesBySpendingCategoryAndAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(asstAwardTypesWithSimilarAwardAmountData, \"asstAwardTypesWithSimilarAwardAmountData\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(outlayColor, \"outlayColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(obligatedColor, \"obligatedColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(currentColor, \"currentColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(potentialColor, \"potentialColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(subsidyColor, \"subsidyColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(faceValueColor, \"faceValueColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(nonFederalFundingColor, \"nonFederalFundingColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(infrastructureOutlayColor, \"infrastructureOutlayColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(infrastructureObligatedColor, \"infrastructureObligatedColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(infrastructureCurrentColor, \"infrastructureCurrentColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(infrastructurePotentialColor, \"infrastructurePotentialColor\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(defaultPadding, \"defaultPadding\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(additionalPadding, \"additionalPadding\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(lineOffsetsBySpendingCategory, \"lineOffsetsBySpendingCategory\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n  reactHotLoader.register(defcTypes, \"defcTypes\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\dataMapping\\\\award\\\\awardAmountsSection.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack:///./js/dataMapping/award/awardAmountsSection.js?");

/***/ }),

/***/ "./js/helpers/awardAmountHelper.js":
/*!*****************************************!*\
  !*** ./js/helpers/awardAmountHelper.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"determineFileCSpendingScenario\": () => (/* binding */ determineFileCSpendingScenario),\n/* harmony export */   \"determineInfrastructureSpendingScenario\": () => (/* binding */ determineInfrastructureSpendingScenario),\n/* harmony export */   \"determineLoanSpendingScenario\": () => (/* binding */ determineLoanSpendingScenario),\n/* harmony export */   \"determineSpendingScenario\": () => (/* binding */ determineSpendingScenario),\n/* harmony export */   \"determineSpendingScenarioAsstAwards\": () => (/* binding */ determineSpendingScenarioAsstAwards),\n/* harmony export */   \"determineSpendingScenarioByAwardType\": () => (/* binding */ determineSpendingScenarioByAwardType),\n/* harmony export */   \"formatAwardAmountRange\": () => (/* binding */ formatAwardAmountRange),\n/* harmony export */   \"generateDefcTabs\": () => (/* binding */ generateDefcTabs),\n/* harmony export */   \"generatePercentage\": () => (/* binding */ generatePercentage),\n/* harmony export */   \"getAscendingSpendingCategoriesByAwardType\": () => (/* binding */ getAscendingSpendingCategoriesByAwardType),\n/* harmony export */   \"getInfrastructureAscendingSpendingCategoriesByAwardType\": () => (/* binding */ getInfrastructureAscendingSpendingCategoriesByAwardType)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _moneyFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moneyFormatter */ \"./js/helpers/moneyFormatter.js\");\n/* harmony import */ var _dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataMapping/award/awardAmountsSection */ \"./js/dataMapping/award/awardAmountsSection.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * awardAmountHelper.js\n * Created by michaelbray on 3/7/17.\n */\n\n\n\n\n// formats the specific checkboxes\n// options are NPM accounting package options\nvar formatAwardAmountRange = function formatAwardAmountRange(range) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  var minLabel = (0,_moneyFormatter__WEBPACK_IMPORTED_MODULE_1__.formatMoneyWithPrecision)(range[0], options);\n  var maxLabel = (0,_moneyFormatter__WEBPACK_IMPORTED_MODULE_1__.formatMoneyWithPrecision)(range[1], options);\n  var label = \"\".concat(minLabel, \" - \").concat(maxLabel);\n  if (!range[0] && range[0] !== 0) {\n    label = \"\".concat(maxLabel, \" & Under\");\n  }\n  if (!range[1] && range[1] !== 0) {\n    label = \"\".concat(minLabel, \" & Above\");\n  }\n  return label;\n};\n\n/**\n * This fn & map together are designed to return the appropriate parameters for each award type\n * for the determineSpendingScenario fn.\n\n* In the fn getAscendingSpendingCategoriesByAwardType:\n * @awardType is one of grant, loan, other, contract, idv\n * @awardAmountObj is the object from the api, parsed by our models, keyed by spending-category w/ integer values.\n*/\n\nvar getAscendingSpendingCategoriesByAwardType = function getAscendingSpendingCategoriesByAwardType(awardType, awardAmountObj) {\n  if (Object.keys(_dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.spendingCategoriesByAwardType).includes(awardType)) {\n    return _dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.spendingCategoriesByAwardType[awardType].map(function (category) {\n      return awardAmountObj[category];\n    });\n  }\n  return [];\n};\nvar getInfrastructureAscendingSpendingCategoriesByAwardType = function getInfrastructureAscendingSpendingCategoriesByAwardType(awardType, awardAmountObj) {\n  if (Object.keys(_dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.infrastructureSpendingCategoriesByAwardType).includes(awardType)) {\n    return _dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.infrastructureSpendingCategoriesByAwardType[awardType].map(function (category) {\n      return awardAmountObj[category];\n    });\n  }\n  return [];\n};\n\n// includes logic for grant, loan, insurance, and other award types\nvar determineSpendingScenarioAsstAwards = function determineSpendingScenarioAsstAwards(awardAmountObj) {\n  var _totalObligation = awardAmountObj._totalObligation,\n    _nonFederalFunding = awardAmountObj._nonFederalFunding,\n    _totalFunding = awardAmountObj._totalFunding;\n  // if any of the values are negative, return insufficient data\n  if (_totalObligation < 0 || _nonFederalFunding < 0 || _totalFunding < 0) {\n    return 'insufficientData';\n  } else if (_totalObligation === 0 && _nonFederalFunding === 0 && _totalFunding === 0) {\n    return 'insufficientData';\n  }\n  // if total funding is sum of obligation and non federal funding, return normal\n  else if (_totalObligation + _nonFederalFunding === _totalFunding) {\n    return 'normal';\n  }\n  // if totalObligation equals totalFunding or is less than total funding while nonFederalFunding is null or zero\n  else if (_totalObligation <= _totalFunding && !_nonFederalFunding) {\n    return 'normal';\n  }\n  return 'insufficientData';\n};\n\n// includes logic for idvs, contracts, loan award types\nvar determineSpendingScenario = function determineSpendingScenario() {\n  var small = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var bigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var biggest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var allCategoriesAreInPlay = small && bigger && biggest;\n  if (small === 0 && bigger === 0 && biggest === 0) {\n    return 'insufficientData';\n  } else if (small < 0 || bigger < 0 || biggest < 0) {\n    return 'insufficientData';\n  } else if (allCategoriesAreInPlay) {\n    if (small <= bigger && bigger <= biggest) {\n      return 'normal';\n    } else if (bigger <= small && small <= biggest) {\n      return 'exceedsBigger';\n    } else if (bigger <= biggest && biggest <= small) {\n      return 'exceedsBiggest';\n    }\n  } else if (small >= 0) {\n    if (small <= bigger && bigger > 0) {\n      return 'normal';\n    }\n  }\n  return 'insufficientData';\n};\nvar determineFileCSpendingScenario = function determineFileCSpendingScenario(awardType, awardAmountObj) {\n  var _fileCOutlay = awardAmountObj._fileCOutlay,\n    _fileCObligated = awardAmountObj._fileCObligated;\n  if (_fileCObligated === 0 && _fileCOutlay === 0) return 'normal';\n  var spendingCategoriesToConsider = getAscendingSpendingCategoriesByAwardType(awardType, awardAmountObj);\n  var fileCScenario = spendingCategoriesToConsider.reduce(function (scenario, spendingCategory) {\n    if (scenario !== 'normal') return scenario;\n    return determineSpendingScenario(_fileCOutlay, _fileCObligated, spendingCategory);\n  }, 'normal');\n  return fileCScenario === 'normal' ? 'normal' : 'insufficientData';\n};\nvar determineLoanSpendingScenario = function determineLoanSpendingScenario(awardAmountObj) {\n  var _totalOutlay = awardAmountObj._totalOutlay,\n    _totalObligation = awardAmountObj._totalObligation,\n    _subsidy = awardAmountObj._subsidy,\n    _faceValue = awardAmountObj._faceValue;\n  if (_subsidy === 0 && _faceValue === 0) return 'insufficientData';\n  if (_subsidy < 0 || _faceValue < 0) return 'insufficientData';\n  if (_totalOutlay > _totalObligation || _totalOutlay > _subsidy || _totalOutlay > _faceValue || _totalObligation > _subsidy || _totalObligation > _faceValue || _subsidy > _faceValue) return 'insufficientData';\n  if (_totalObligation === 0 && _totalOutlay === 0) {\n    if (_subsidy <= _faceValue) return 'normal';\n    return 'insufficientData';\n  }\n  if (_totalOutlay <= _totalObligation <= _subsidy <= _faceValue) return 'normal';\n  return 'insufficientData';\n};\nvar determineInfrastructureSpendingScenario = function determineInfrastructureSpendingScenario(awardType, awardAmountObj) {\n  var _fileCOutlayInfrastructure = awardAmountObj._fileCOutlayInfrastructure,\n    _fileCObligatedInfrastructure = awardAmountObj._fileCObligatedInfrastructure;\n  if (_fileCObligatedInfrastructure === 0 && _fileCOutlayInfrastructure === 0) return 'normal';\n  var spendingCategoriesToConsider = getInfrastructureAscendingSpendingCategoriesByAwardType(awardType, awardAmountObj);\n  var fileCScenario = spendingCategoriesToConsider.reduce(function (scenario) {\n    if (scenario !== 'normal') return scenario;\n    return determineSpendingScenario(_fileCOutlayInfrastructure, _fileCObligatedInfrastructure);\n  }, 'normal');\n  return fileCScenario === 'normal' ? 'normal' : 'insufficientData';\n};\nvar determineSpendingScenarioByAwardType = function determineSpendingScenarioByAwardType(awardType, awardAmountObj, infrastructure) {\n  if (infrastructure) {\n    if (determineInfrastructureSpendingScenario(awardType, awardAmountObj) !== 'normal') return 'insufficientData';\n  }\n  if (determineFileCSpendingScenario(awardType, awardAmountObj) !== 'normal') return 'insufficientData';\n  if (_dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.asstAwardTypesWithSimilarAwardAmountData.includes(awardType)) {\n    return determineSpendingScenarioAsstAwards(awardAmountObj);\n  }\n  if (awardType === 'loan') {\n    return determineLoanSpendingScenario(awardAmountObj);\n  }\n\n  // Small, bigger, and biggest define the expected ratio between spending categories\n  var _getAscendingSpending = getAscendingSpendingCategoriesByAwardType(awardType, awardAmountObj),\n    _getAscendingSpending2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getAscendingSpending, 3),\n    small = _getAscendingSpending2[0],\n    bigger = _getAscendingSpending2[1],\n    biggest = _getAscendingSpending2[2];\n  return determineSpendingScenario(small, bigger, biggest);\n};\nvar generatePercentage = function generatePercentage(value) {\n  return \"\".concat((value * 100).toFixed(2), \"%\");\n};\nvar generateDefcTabs = function generateDefcTabs(awardData) {\n  var keysInData = [];\n  _dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.defcTypes.forEach(function (item) {\n    if (awardData[item.keys.outlay] > 0 || awardData[item.keys.obligated] > 0) {\n      keysInData.push(item.codeType);\n    }\n  });\n  if (keysInData.length === 0) {\n    return [];\n  }\n  var tabs = [{\n    internal: 'overall',\n    label: 'Overall Spending'\n  }];\n  _dataMapping_award_awardAmountsSection__WEBPACK_IMPORTED_MODULE_2__.defcTypes.forEach(function (item) {\n    if (keysInData.indexOf(item.codeType) > -1) {\n      tabs.push({\n        internal: item.codeType,\n        label: item.label\n      });\n    }\n  });\n  return tabs;\n};\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(formatAwardAmountRange, \"formatAwardAmountRange\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(getAscendingSpendingCategoriesByAwardType, \"getAscendingSpendingCategoriesByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(getInfrastructureAscendingSpendingCategoriesByAwardType, \"getInfrastructureAscendingSpendingCategoriesByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineSpendingScenarioAsstAwards, \"determineSpendingScenarioAsstAwards\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineSpendingScenario, \"determineSpendingScenario\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineFileCSpendingScenario, \"determineFileCSpendingScenario\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineLoanSpendingScenario, \"determineLoanSpendingScenario\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineInfrastructureSpendingScenario, \"determineInfrastructureSpendingScenario\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(determineSpendingScenarioByAwardType, \"determineSpendingScenarioByAwardType\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(generatePercentage, \"generatePercentage\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n  reactHotLoader.register(generateDefcTabs, \"generateDefcTabs\", \"C:\\\\Firebase\\\\Reports-Firebase\\\\src\\\\js\\\\helpers\\\\awardAmountHelper.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack:///./js/helpers/awardAmountHelper.js?");

/***/ })

}]);