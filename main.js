/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Regular.ttf */ \"./src/fonts/NotoSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --dark-accent-color: #472183;\\n    --dark-accent-color-light: #6c4d9c;\\n    --dark-accent-color-dark: #391a69;\\n    --header-background: #f1f6f5;\\n    --light-accent-color: #82c3ec;\\n    --cancel-color: #ff4242;\\n    --icon-color: #4b56d2;\\n    --text-color: #505050;\\n    --hover-color: white;\\n    --priority-1-color: #d65156;\\n    --priority-2-color: #fdc945;\\n    --priority-3-color: #62b740;\\n    --priority-4-color: #1b9394;\\n}\\n\\n* {\\n    box-sizing: border-box;\\n}\\n\\n@font-face {\\n    font-family: 'Noto Sans';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Noto Sans';\\n    display: grid;\\n    grid-template-rows: min-content 1fr min-content;\\n    min-height: 100vh;\\n}\\n\\n/* Styling for header and footer */\\nheader, footer {\\n    background-color: var(--dark-accent-color);\\n    color: white;    \\n    text-align: center;\\n    padding: .5rem;\\n}\\n\\nheader {\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n\\nfooter {\\n    font-size: .75rem;\\n}\\n\\n#main-wrapper {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: start;\\n    padding: 2rem;\\n}\\n\\n.player-div {\\n    display: grid;\\n    justify-content: center;\\n    gap: 1rem;\\n    box-sizing: border-box;\\n}\\n\\n.player-name {\\n    font-size: 2rem;\\n    border-radius: 6px;\\n    text-align: center;\\n    background-color: var(--header-background);\\n    box-shadow: -2px 2px 2px 2px gray;\\n    padding: .5rem;\\n    width: 100%;\\n    height: 4rem;\\n    box-sizing: border-box;\\n}\\n\\n.active-player {\\n    border: 4px solid var(--icon-color);\\n}\\n\\n.game-board {\\n    display: grid;\\n    grid-template-columns: repeat(2, auto);\\n    grid-template-rows: repeat(2, auto);\\n    box-shadow: -2px 2px 2px 2px gray;\\n}\\n\\n.row-names {\\n    grid-area: 1 / 1 / 2 / 2;\\n    background-color: var(--header-background);\\n    width: 50px;\\n    display: flex;\\n    flex-direction: column-reverse;\\n    border-left: 4px solid var(--icon-color);\\n}\\n\\n.label {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 50px;\\n    height: 50px;\\n}\\n\\n.column-names {\\n    grid-area: 2 / 2 / 3 / 3;\\n    background-color: var(--header-background);\\n    border-bottom: 4px solid var(--icon-color);\\n    height: 50px;\\n    display: flex;\\n}\\n\\n.spacer {\\n    background-color: var(--header-background);\\n    border-bottom: 4px solid var(--icon-color);\\n    border-left: 4px solid var(--icon-color);\\n    grid-area: 2 / 1 / 3 / 2;\\n    width: 50px;\\n    height: 50px;\\n}\\n\\n.game-grid {\\n    display: grid;\\n    grid-template-rows: repeat(10, min-content);\\n    grid-template-columns: repeat(10, min-content);\\n    border: 1px solid var(--dark-accent-color);\\n    grid-area: 1 / 2 / 2 / 3;\\n}\\n\\n.board-square {\\n    width: 50px;\\n    height: 50px;\\n    border: 1px solid var(--dark-accent-color);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.filled {\\n    background-color: var(--dark-accent-color);\\n    border: 1px solid var(--header-background);\\n}\\n\\n.drag-over {\\n    background-color: var(--dark-accent-color-light);\\n}\\n\\n.ship-square {\\n    background-color: var(--icon-color);\\n}\\n\\n.hit-square {\\n    background-color: var(--cancel-color);\\n}\\n\\n.miss-square {\\n    background-color: var(--light-accent-color);\\n}\\n\\n.last-guess {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.info-div {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    margin-left: .25rem;\\n    margin-right: .25rem;\\n    align-items: center;\\n    min-width: min-content;\\n}\\n\\n.remaining {\\n    text-align: center;\\n    gap: 10px;\\n    font-size: 1.5rem;\\n    margin-bottom: 1rem;\\n}\\n\\nbutton {\\n    border-radius: 6px;\\n    text-align: center;\\n    background-color: var(--icon-color);\\n    box-shadow: -2px 2px 2px 2px gray;\\n    padding: .5rem;\\n    font-family: 'Noto Sans';\\n    color: white;\\n}\\n.reset {\\n    font-size: 1.5rem;\\n    border-radius: 6px;\\n    text-align: center;\\n    background-color: var(--icon-color);\\n    box-shadow: -2px 2px 2px 2px gray;\\n    padding: .5rem;\\n    font-family: 'Noto Sans';\\n    color: white;\\n}\\n\\n.buttons-div {\\n    padding: .5rem;\\n    display: flex;\\n    justify-content: space-evenly;\\n    margin-top: 1rem;\\n}\\n\\n.small-button {\\n    font-size: 1rem;\\n}\\n\\n.ships-div {\\n    gap: 10px;\\n    padding: .25rem;\\n}\\n\\n.ships-hor {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.ships-ver {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.ship {\\n    font-size: 1.5rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;    \\n    background-color: var(--dark-accent-color);\\n    color: white;\\n}\\n\\n.horizontal {\\n    height: 50px;\\n}\\n\\n.vertical {\\n    width: 50px;\\n}\\n\\n.carrier-hor {\\n    width: 250px;    \\n}\\n\\n.carrier-ver {\\n    height: 250px;\\n}\\n\\n.battleship-hor {\\n    width: 200px;\\n}\\n\\n.battleship-ver {\\n    height: 200px;\\n}\\n\\n.destroyer-hor {\\n    width: 150px;\\n}\\n\\n.destroyer-ver {\\n    height: 150px;\\n}\\n\\n.submarine-hor {\\n    width: 150px;\\n}\\n\\n.submarine-ver {\\n    height: 150px;\\n}\\n\\n.patrolboat-hor {\\n    width: 100px;\\n}\\n\\n.patrolboat-ver {\\n    height: 100px;\\n}\\n\\n.rotate {\\n    transform: rotate(-90deg);\\n}\\n\\n.hide {\\n    display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n \n\n\nfunction Dom() {\n\n    const main = document.getElementById('main-wrapper');\n\n    const displayBoard = (Player) => {        \n\n        const {board} = Player; \n\n        const playerDiv = document.createElement('div');\n        playerDiv.classList.add('player-div');\n        playerDiv.setAttribute('id', `${Player.name}`);\n        main.appendChild(playerDiv);\n\n        const displayName = document.createElement('div');\n        displayName.classList.add('player-name');\n        displayName.setAttribute('id', `${Player.name}-name`);\n        displayName.innerText = `${Player.name}`;\n        playerDiv.appendChild(displayName);\n\n        const gameBoard = document.createElement('div');\n        gameBoard.classList.add('game-board');\n        playerDiv.appendChild(gameBoard);\n\n        const rowNames = document.createElement('div');\n        rowNames.classList.add('row-names');\n        gameBoard.appendChild(rowNames);\n\n        Player.board.letters.forEach((letter) => {\n            const letterDiv = document.createElement('div');\n            letterDiv.innerText = letter.toUpperCase();\n            letterDiv.classList.add('label');\n            rowNames.appendChild(letterDiv);\n        });\n\n        const colNames = document.createElement('div');\n        colNames.classList.add('column-names');\n        gameBoard.appendChild(colNames);\n\n        Player.board.numbers.forEach((number) => {\n            const numDiv = document.createElement('div');\n            numDiv.innerText = number;\n            numDiv.classList.add('label');\n            colNames.appendChild(numDiv);\n        })\n\n        const spacer = document.createElement('div');\n        spacer.classList.add('spacer');\n        gameBoard.appendChild(spacer);\n        \n        const gridDiv = document.createElement('div');\n        gridDiv.classList.add('game-grid');\n        gameBoard.appendChild(gridDiv);\n\n        let i;\n        let j;\n        for (i = board.letters.length - 1; i >= 0; i--) {\n            for (j = 1; j < 11; j++) {\n                const square = document.createElement('div');\n                square.classList.add('board-square');\n                square.setAttribute('data-coordinates', `${board.letters[i]}${j}`);\n                if (Player.name === 'Computer') square.addEventListener('click', humanAttack);\n                if (Player.name === 'Human') {\n                    square.addEventListener('dragenter', dragEnter);\n                    square.addEventListener('dragover', dragOver);\n                    square.addEventListener('dragleave', dragLeave);\n                    square.addEventListener('drop', drop);\n                }\n                gridDiv.appendChild(square);\n            }\n        };\n\n        const lastGuess = document.createElement('div');\n        lastGuess.classList.add('last-guess');    \n        playerDiv.appendChild(lastGuess);\n\n        const guessLabel = document.createElement('div');\n        guessLabel.innerText = `${Player.name}'s last guess:`;\n        lastGuess.appendChild(guessLabel);\n\n        const guessSquare = document.createElement('div');\n        guessSquare.setAttribute('data-player', `${Player.name}`);\n        guessSquare.innerText = '';\n        lastGuess.appendChild(guessSquare);\n        \n        function humanAttack(event) {\n            const x = event.target;\n            const guess = x.dataset.coordinates;        \n            Player.board.receiveAttack(guess);\n            changeColor(Player, guess);\n            const guessDiv = document.getElementById('Human');\n            const humanGuess = guessDiv.querySelector('[data-player=\"Human\"]');\n            humanGuess.innerText = `${guess}`;\n            updateShips(Player);\n            if (Player.board.allSunk() === true) {\n                const squares = document.querySelectorAll('.board-square');\n                squares.forEach((square) => square.removeEventListener('click', humanAttack))\n            }\n        };\n        \n        function dragEnter(event) {\n            event.preventDefault();\n            event.target.classList.add('drag-over');\n        }\n\n        function dragOver(event) {\n            event.preventDefault();\n            event.target.classList.add('drag-over');\n        };\n\n        function dragLeave(event) {\n            event.preventDefault();\n            event.target.classList.remove('drag-over');\n        }\n\n        function drop(event) {\n            event.preventDefault();\n            event.target.classList.remove('drag-over');\n            const length = event.dataTransfer.getData('text2');\n            const direction = event.dataTransfer.getData('dir');\n            const {coordinates} = event.target.dataset;            \n            const placed = Player.board.placeShip(coordinates, +length, direction);\n            \n            if (placed === null) {\n            const id = event.dataTransfer.getData('text/plain');\n            const dragged = document.getElementById(id);\n            dragged.classList.remove('hide');\n            } else {\n            const humanBoard = document.getElementById('Human');\n            const squares = humanBoard.querySelectorAll('.board-square');\n            squares.forEach((square) => {\n                const checkSquare = square.dataset.coordinates;\n                if (Player.board.filled.includes(checkSquare)) square.classList.add('filled');\n            });\n            const id = event.dataTransfer.getData('text/plain');\n            const dragged = document.getElementById(id);\n            dragged.classList.add('hide');\n            }\n        }\n        \n    }\n\n    const changeColor = (Player, square) => {\n        const activeBoard = document.getElementById(`${Player.name}`);\n        const activeSquare = activeBoard.querySelector(`[data-coordinates='${square}']`);\n        if (Player.board.filled.includes(square)) {\n            activeSquare.classList.add('hit-square');\n        } else {\n            activeSquare.classList.add('miss-square');\n        };\n    };\n\n    const displayInfo = () => {\n        const infoDiv = document.createElement('div');\n        infoDiv.classList.add('info-div');\n        infoDiv.setAttribute('id', 'info-div');\n        main.appendChild(infoDiv);\n\n        const infoTitle = document.createElement('div');\n        infoTitle.classList.add('player-name');\n        infoTitle.innerText = 'Info';\n        infoDiv.appendChild(infoTitle);\n\n        const remainingShips = document.createElement('div');\n        remainingShips.classList.add('hide');\n        remainingShips.setAttribute('id', 'remaining-ships');\n        infoDiv.appendChild(remainingShips);\n\n        const yourShipsDiv = document.createElement('div');\n        yourShipsDiv.classList.add('remaining');\n        remainingShips.appendChild(yourShipsDiv);\n\n        const yourRemaining = document.createElement('div');\n        yourRemaining.innerText = 'Your remaining ships: ';\n        yourShipsDiv.appendChild(yourRemaining);\n        const yourNumber = document.createElement('div');\n        yourNumber.innerText = 'X';\n        yourNumber.setAttribute('id', 'Human-ships');\n        yourShipsDiv.appendChild(yourNumber);\n\n        const compShipsDiv = document.createElement('div');\n        compShipsDiv.classList.add('remaining');\n        remainingShips.appendChild(compShipsDiv);\n\n        const compRemaining = document.createElement('div');\n        compRemaining.innerText = 'Computer\\'s remaining ships: '\n        compShipsDiv.appendChild(compRemaining);\n        const compNumber = document.createElement('div');\n        compNumber.innerText = 'X';\n        compNumber.setAttribute('id', 'Computer-ships');\n        compShipsDiv.appendChild(compNumber);\n\n        const resetDiv = document.createElement('div');\n        resetDiv.setAttribute('id', 'reset-div');\n        infoDiv.appendChild(resetDiv);\n        resetDiv.classList.add('hide')\n\n        const resetButton = document.createElement('button');\n        resetButton.classList.add('reset');\n        resetButton.setAttribute('id', 'reset-button');\n        resetDiv.appendChild(resetButton);\n        resetButton.innerText = 'Reset Game';      \n    };\n\n    const startingInfo = () => {\n        const infoDiv = document.getElementById('info-div');\n\n        const instructionsDiv = document.createElement('div');\n        instructionsDiv.setAttribute('id', 'instructions');\n        infoDiv.appendChild(instructionsDiv);\n        instructionsDiv.classList.add('remaining');\n\n        const instructions = document.createElement('div');\n        instructions.innerText = 'Drag the ships onto your board.'\n        instructionsDiv.appendChild(instructions);\n        instructions.classList.add('remaining');\n\n        const startDiv = document.createElement('div');\n        instructionsDiv.appendChild(startDiv);\n\n        const startButton = document.createElement('button');\n        startButton.classList.add('reset')\n        startButton.setAttribute('id', 'start-button');\n        startButton.innerText = 'Start Game';\n        startDiv.appendChild(startButton);\n\n        const buttonsDiv = document.createElement('div');\n        buttonsDiv.classList.add('buttons-div');\n        buttonsDiv.setAttribute('id', 'buttons-div');\n        instructionsDiv.appendChild(buttonsDiv);\n\n        const rotateButton = document.createElement('button');\n        rotateButton.classList.add('small-button');\n        rotateButton.setAttribute('id', 'rotate-ships');\n        rotateButton.innerText = 'Rotate Ships';\n        buttonsDiv.appendChild(rotateButton);\n\n        const resetShipsButton = document.createElement('button');\n        resetShipsButton.classList.add('small-button');\n        resetShipsButton.setAttribute('id', 'reset-ships');\n        resetShipsButton.innerText = 'Reset Ships';\n        buttonsDiv.appendChild(resetShipsButton);\n    }\n\n    const updateShips = (Player) => {\n        const update = document.getElementById(`${Player.name}-ships`);\n        let unsunk = Player.board.ships.length;\n        Player.board.ships.forEach((ship) => {\n            if (ship.isSunk() === true)\n            unsunk -= 1;\n        });\n        update.innerText = unsunk;\n    }\n\n    const setShips = () => {\n        const ships = [{length: 5, name: 'carrier'}, \n        {length: 4, name: 'battleship'},\n        {length: 3, name: 'destroyer'},\n        {length: 3, name: 'submarine'},\n        {length: 2, name: 'patrolboat'}];\n        \n        const info = document.getElementById('info-div');\n          \n        const shipsDiv = document.createElement('div');\n        shipsDiv.setAttribute('id', 'ships-div');\n        shipsDiv.classList.add('ships-div', 'ships-hor');\n        info.appendChild(shipsDiv);\n\n        ships.forEach((ship) => {\n            const newShip = createShip(ship.length, ship.name);\n            shipsDiv.appendChild(newShip);\n        });\n\n        function dragStart(event) {\n            event.dataTransfer.setData('text/plain', event.target.id);\n            const {length} = event.target.dataset;\n            event.dataTransfer.setData('text2', length);\n            const {direction} = event.target.dataset\n            event.dataTransfer.setData('dir', direction);      \n        }\n\n        function createShip(length, name) {\n            const d = document.createElement('div');\n            d.classList.add('ship', `${name}-hor`, 'horizontal');\n            d.setAttribute('id', `${name}`);\n            d.setAttribute('data-direction', 'hor');\n            d.innerText = length;\n            d.draggable = true;\n            d.setAttribute('data-length', length);\n            d.addEventListener('dragstart', dragStart);\n            return d;\n        }\n    }\n\n    const colorShips = (Player) => {\n        const humanBoard = document.getElementById('Human');\n        const squares = humanBoard.querySelectorAll('.board-square');\n        squares.forEach((square) => {\n            const checkSquare = square.dataset.coordinates;\n            if (Player.board.filled.includes(checkSquare)) square.classList.add('filled');\n        });\n    };\n\n    const startGame = (Player) => {\n        if (Player.board.ships.length === 5) {\n            const startInfo = document.getElementById('instructions');\n            const remainingShips = document.getElementById('remaining-ships');\n            const resetDiv = document.getElementById('reset-div');\n            startInfo.classList.toggle('hide');\n            remainingShips.classList.toggle('hide');\n            resetDiv.classList.toggle('hide');\n        };        \n    }\n\n    const rotateShips = () => {\n        const shipsDiv = document.getElementById('ships-div');\n        // shipsDiv.classList.toggle('rotate');\n        const ships = shipsDiv.querySelectorAll('.ship');\n        shipsDiv.classList.toggle('ships-hor');\n        shipsDiv.classList.toggle('ships-ver');\n        ships.forEach((ship) => {\n            const {id} = ship;\n            ship.classList.toggle(`${id}-hor`);\n            ship.classList.toggle('horizontal');\n            ship.classList.toggle('vertical');\n            ship.classList.toggle(`${id}-ver`);\n            const dir = ship.getAttribute('data-direction');\n            if (dir === 'hor') ship.setAttribute('data-direction', 'ver');\n            if (dir === 'ver') ship.setAttribute('data-direction', 'hor');\n        });\n    };\n\n    return { displayBoard, changeColor, displayInfo, updateShips, setShips, colorShips, startingInfo, startGame, rotateShips }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/factories/board.js":
/*!********************************!*\
  !*** ./src/factories/board.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n/* eslint-disable no-restricted-syntax */\n\n\nclass Board {\n    constructor(x, y) {\n        this.area = x * y;\n    };\n\n    // Board rows\n    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\n\n    // Board columns\n    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n    filled = [];\n\n    guessed = [];\n\n    ships = [];\n\n    buildGrid() {\n        const squares = [];\n        let i;\n        let j;\n\n        for (i = 0; i < this.letters.length; i++) {\n            for (j = 0; j < this.numbers.length; j++) {\n                const square = this.letters[i] + this.numbers[j];\n                squares.push(square);\n            };\n        };\n\n        this.squares = squares;\n    };\n\n    placeShip(square, length, dir) {\n        // If data exists, split square into letter and number components\n        if (square && length && length > 0) {\n            const shipTest = [];\n            const letter = square.substring(0, 1);\n            const num = square.substring(1);\n\n            // Vertical ship placements\n            if (dir === 'ver') {\n                if (this.squares.includes(square) && !this.filled.includes(square)) {\n                    shipTest.push(square);\n                    let i;\n                    for (i = 1; i < length; i++) {\n                        const letIndex = this.letters.indexOf(letter);\n                        const ext = `${this.letters[letIndex - i]}${num}`;\n                        if (this.squares.includes(ext) && !this.filled.includes(ext)) {\n                            shipTest.push(ext);\n                        };\n                    }\n                };\n            };\n\n            // Horizontal ship placements (default)\n            if (dir === 'hor') {\n                if (this.squares.includes(square) && !this.filled.includes(square)) {\n                    shipTest.push(square);\n                    let i;\n                    for (i = 1; i < length; i++) {\n                        const numIndex = this.numbers.indexOf(+num);         \n                        const ext = `${letter}${this.numbers[numIndex + i]}`;\n                        if (this.squares.includes(ext) && !this.filled.includes(ext)) {\n                            shipTest.push(ext);\n                        }\n                    };\n                };\n            };\n\n            // If entire ship fits on the board, create new ship and add it to filled\n            if (shipTest.length === length) {\n                shipTest.forEach((a) => this.filled.push(a));\n                const placed = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n                placed.coordinates = shipTest;\n                this.ships.push(placed);\n                return placed;\n            };\n        };\n\n        // Error condition\n        return null;\n    };\n\n    receiveAttack(square) {\n        // Square exists and has not been guessed\n        if (square && this.squares.includes(square) && !this.guessed.includes(square)) {\n            this.guessed.push(square);\n            \n\n            // Change color\n\n\n            // Square is a hit\n            if (this.filled.includes(square)) {\n                this.ships.forEach((ship) => {\n                    if (ship.coordinates.includes(square)) {\n                        ship.hits += 1;\n                        ship.sunk = ship.isSunk();\n                    };\n                });\n            };\n        };\n    };\n\n    allSunk() {\n        if (this.ships && this.ships.length > 0) {\n            for (const ship of this.ships) {\n                if (ship.sunk === false) return false;\n            };\n            return true;\n        }\n        return false;\n    };\n}\n\n//# sourceURL=webpack://battleship/./src/factories/board.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/factories/board.js\");\n\n\nclass Player {\n    constructor(playerName) {\n        this.name = playerName;\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.board.buildGrid();\n        this.computerShips();\n    };\n\n    // Keep track of this player's guesses\n    myGuesses = [];\n\n    // Generate a random square\n    randomSquare() {\n        let guess = '';\n        const letIndex = Math.floor(Math.random() * 10);\n        const letter = this.board.letters[letIndex];\n        const num = Math.floor(Math.random() * 10 + 1);\n        guess = `${letter}${num}`;\n        return guess;\n    }\n    \n    // that has not already been guessed (for computer turn)\n    generateAttack() {\n        const guess = this.randomSquare();\n        if (!this.myGuesses.includes(guess)) {\n            this.myGuesses.push(guess);\n            return guess;\n        };\n        return null; \n    };           \n    \n\n    // Generate a random ship and place it on the board\n    randomShip(length) {\n        const square = this.randomSquare();\n        const rDir = Math.floor(Math.random() * 2);\n        let dir;\n        if (rDir === 0) dir = 'hor';\n        if (rDir === 1) dir = 'ver'; \n        const tryShip = this.board.placeShip(square, length, dir);\n        if (tryShip === null) this.randomShip(length);\n    }\n\n    // Generate random ships for computer\n    computerShips() {\n        if (this.name === 'Computer') {\n            this.randomShip(5);\n            this.randomShip(4);\n            this.randomShip(3);\n            this.randomShip(3);\n            this.randomShip(2);\n        } else {\n            return; \n        };\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n        this.coordinates = [];\n        this.sunk = false;\n    };\n\n    hit() {\n        this.hits += 1;\n    };\n\n    isSunk() {\n        return this.hits === this.length;\n    }\n}\n\n \n\n//# sourceURL=webpack://battleship/./src/factories/ship.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playGame)\n/* harmony export */ });\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nfunction playGame() {\n    document.getElementById('main-wrapper').innerText = '';\n    \n    const dom = (0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const human = new _factories_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Human');\n\n    const computer = new _factories_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Computer');\n\n    const players = [human, computer];\n\n    let currentTurn = players[0];\n\n    dom.displayBoard(human);\n    dom.colorShips(human);\n\n    dom.displayInfo();\n    dom.startingInfo();\n\n    document.getElementById('start-button').addEventListener('click', () => {dom.startGame(human)});\n    document.getElementById('start-button').addEventListener('click', () => {dom.updateShips(human)});\n    document.getElementById('start-button').addEventListener('click', () => {dom.updateShips(computer)});\n\n    dom.setShips();\n\n    dom.displayBoard(computer);\n\n    \n    \n\n    document.getElementById('reset-button').addEventListener('click', playGame);\n    document.getElementById('rotate-ships').addEventListener('click', dom.rotateShips);\n    document.getElementById('reset-ships').addEventListener('click', playGame);\n\n    const humanName = document.getElementById(`${human.name}-name`);\n    const compName = document.getElementById(`${computer.name}-name`);\n\n    humanName.classList.add('active-player');\n\n    const compDiv = document.getElementById(`${computer.name}`);\n    const compSquares = compDiv.querySelectorAll('.board-square');\n    compSquares.forEach((square) => square.addEventListener('click', toggleActive));\n\n    // Switch between turns - setTimeout used to give the impression the computer is 'thinking'\n    function toggleActive() {\n        if (human.board.allSunk() === false && computer.board.allSunk() === false) {\n            currentTurn = currentTurn === players[0] ? players[1] : players[0];\n            humanName.classList.toggle('active-player');\n            compName.classList.toggle('active-player');\n\n            if (currentTurn === players[1]) {\n                setTimeout(() => {\n                let guess = computer.generateAttack();\n                while (guess === null) {\n                    guess = computer.generateAttack();\n                }            \n                if (guess) {\n                    human.board.receiveAttack(guess);\n                    dom.changeColor(human, guess);\n                    const guessDiv = compDiv.querySelector('[data-player=\"Computer\"]');\n                    guessDiv.innerText = `${guess}`;\n                    dom.updateShips(human);\n                    toggleActive();\n                }\n                }, 300);\n            }         \n        } else {\n            compSquares.forEach((square) => square.removeEventListener('click', toggleActive));\n            compSquares.forEach((square) => square.removeEventListener('click', dom.humanAttack));\n            if (human.board.allSunk() === true) compName.innerText = 'COMPUTER WINS!';\n            if (computer.board.allSunk() === true) humanName.innerText = 'YOU WIN!';\n        }\n\n    };   \n\n};\n\n//# sourceURL=webpack://battleship/./src/game-loop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n\n\n(0,_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/fonts/NotoSans-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/NotoSans-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eae34fa8f1e0c4c6d797.ttf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/NotoSans-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;