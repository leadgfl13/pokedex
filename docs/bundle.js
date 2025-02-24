/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/collapse-white-space/index.js":
/*!****************************************************!*\
  !*** ./node_modules/collapse-white-space/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapseWhiteSpace: () => (/* binding */ collapseWhiteSpace)
/* harmony export */ });
/**
 * @typedef {'html'|'js'} Style
 *
 * @typedef Options
 *   Configuration.
 * @property {Style} [style='js']
 *   Style of white space to support.
 * @property {boolean} [preserveLineEndings=false]
 *   Whether to collapse white space containing a line ending to that line
 *   ending.
 *   The default is to collapse to a single space.
 * @property {boolean} [trim=false]
 *   Whether to drop white space at the start and end of `value`.
 *   The default is to keep it.
 */

const js = /\s+/g
const html = /[\t\n\v\f\r ]+/g

/**
 * Collapse white space.
 *
 * @param {string} value
 *   Value to collapse white space in.
 * @param {Style|Options} [options='js']
 *   Configuration.
 * @returns {string}
 *   Value with collapsed white space.
 */
function collapseWhiteSpace(value, options) {
  if (!options) {
    options = {}
  } else if (typeof options === 'string') {
    options = {style: options}
  }

  const replace = options.preserveLineEndings ? replaceLineEnding : replaceSpace

  return String(value).replace(
    options.style === 'html' ? html : js,
    options.trim ? trimFactory(replace) : replace
  )
}

/**
 * Replace white space with a line ending as that line ending and otherwise a
 * space.
 *
 * @param {string} value
 * @returns {string}
 */
function replaceLineEnding(value) {
  const match = /\r?\n|\r/.exec(value)
  return match ? match[0] : ' '
}

/**
 * Replace white space with a space.
 *
 * @returns {string}
 */
function replaceSpace() {
  return ' '
}

/**
 * @param {(value: string) => string} replace
 */
function trimFactory(replace) {
  return dropOrReplace

  /**
   * Replace white space with nothing if it starts or ends the string.
   * Calls `replace` otherwise.
   *
   * @param {string} value
   * @param {number} index
   * @param {string} all
   * @returns {string}
   */
  function dropOrReplace(value, index, all) {
    return index === 0 || index + value.length === all.length
      ? ''
      : replace(value)
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Pokemon Solid.ttf */ "./src/Pokemon Solid.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: "pokedexfont";

	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
		url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");

	font-weight: normal;

	font-style: normal;
}

body {
	background-color: skyblue;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.pokedex {
	display: flex;
	flex-direction: row;
	margin: auto;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	height: 80%;
	width: 60%;
	border: 20px groove darkred;
}

img {
	height: 100%;
	width: 100%;
}
.left {
	background-color: red;
	height: 100%;
	display: grid;
	grid-template-rows: 10% 45% 45%;
	box-sizing: border-box;
	border-right: 20px groove rgba(155, 11, 11, 0.691);
	width: 55%;
}

#lightsleft {
	grid-area: 1/1/2/2;
	display: Flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 100%;
	width: 100%;
	background-color: Red;
	border-bottom: 6px solid darkred;
}
#circle {
	height: 60%;
	width: 10%;
	border-radius: 75%;
	background-color: rgb(54, 143, 232);
	border: 4px solid white;
	margin: 2%;
	box-shadow: 2px -2px -2px 2px lightblue;
}

#lightsright {
	align-items: center;
	justify-content: flex-end;
	display: flex;
	padding-right: 2%;
	flex-direction: Row;
	height: 100%;
	width: 25%;
	gap: 10%;
}
.circle2 {
	height: 60%;
	width: 10%;
	border-radius: 75%;
	background-color: rgb(7, 7, 7);
	border: 2px solid rgb(211, 211, 211);
}

#screen {
	grid-area: 2/1/3/2;
	font-family: "pokedexfont";
	display: flex;
	font-size: 48px;
	text-decoration: underline;
	justify-content: center;
	align-items: center;
	height: 70%;
	width: 80%;
	margin: auto;
	background-color: rgb(88, 129, 88);
	border: 14px groove lightgray;
	padding-bottom: 4%;
}

#data {
	grid-area: 3/1/4/2;
	margin: auto;
	height: 90%;
	width: 90%;
	background-color: rgb(88, 129, 88);
	font-family: "pokedexfont";
	border: 6px groove rgb(77, 75, 75);
	font-size: 16px;
	overflow-x: scroll;
}
.right {
	background-color: red;
	border-left: 6px solid groove;
	font-size: 22px;
	font-weight: 700;
	text-align: Center;
	border-left: 4px groove darkred;
	display: flex;
	width: 45%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
}
.bluegrid {
	margin-top: -40%;
	display: Grid;
	background-color: blue;
	height: 10%;
	width: 80%;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(4, 1fr);
	margin-bottom: 30%;
}
.gridsquare {
	border: 2px solid black;
}

.middlearea {
	width: 95%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 3%;
	padding: 3%;
	align-items: center;
}
.searchstuff {
	display: flex;
	flex-direction: Column;
	align-items: center;
	justify-content: center;
}

.minus,
.plus {
	font-size: 68px;
	font-weight: 800;
	color: gold;
	-webkit-text-stroke: 2px black;
}
.blackgrid {
	margin-top: 20%;
	margin-bottom: -40%;
	display: Grid;
	background-color: gray;
	height: 10%;
	width: 80%;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(4, 1fr);
}
.blacksquare {
	border: 2px solid black;
}
button {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "pokedexfont";
	font-size: 20px;
	height: 45px;
	width: 150px;
	border-radius: 8px;
	border: 6px solid gray;

	background-color: darkgray;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,0BAA0B;;CAE1B;wDAC2C;;CAE3C,mBAAmB;;CAEnB,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,QAAQ;CACR,2BAA2B;CAC3B,WAAW;CACX,UAAU;CACV,2BAA2B;AAC5B;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,qBAAqB;CACrB,YAAY;CACZ,aAAa;CACb,+BAA+B;CAC/B,sBAAsB;CACtB,kDAAkD;CAClD,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;CACnB,YAAY;CACZ,WAAW;CACX,qBAAqB;CACrB,gCAAgC;AACjC;AACA;CACC,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,mCAAmC;CACnC,uBAAuB;CACvB,UAAU;CACV,uCAAuC;AACxC;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,aAAa;CACb,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,UAAU;CACV,QAAQ;AACT;AACA;CACC,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,8BAA8B;CAC9B,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,aAAa;CACb,eAAe;CACf,0BAA0B;CAC1B,uBAAuB;CACvB,mBAAmB;CACnB,WAAW;CACX,UAAU;CACV,YAAY;CACZ,kCAAkC;CAClC,6BAA6B;CAC7B,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,UAAU;CACV,kCAAkC;CAClC,0BAA0B;CAC1B,kCAAkC;CAClC,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,qBAAqB;CACrB,6BAA6B;CAC7B,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,+BAA+B;CAC/B,aAAa;CACb,UAAU;CACV,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;AACA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,2BAA2B;CAC3B,qCAAqC;CACrC,kBAAkB;AACnB;AACA;CACC,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,UAAU;CACV,WAAW;CACX,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;;CAEC,eAAe;CACf,gBAAgB;CAChB,WAAW;CACX,8BAA8B;AAC/B;AACA;CACC,eAAe;CACf,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,2BAA2B;CAC3B,qCAAqC;AACtC;AACA;CACC,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,0BAA0B;CAC1B,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,sBAAsB;;CAEtB,0BAA0B;AAC3B","sourcesContent":["@font-face {\n\tfont-family: \"pokedexfont\";\n\n\tsrc: url(\"./Pokemon\\ Solid.ttf\") format(\"woff\"),\n\t\turl(\"./Pokemon\\ Solid.ttf\") format(\"woff\");\n\n\tfont-weight: normal;\n\n\tfont-style: normal;\n}\n\nbody {\n\tbackground-color: skyblue;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.pokedex {\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin: auto;\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\theight: 80%;\n\twidth: 60%;\n\tborder: 20px groove darkred;\n}\n\nimg {\n\theight: 100%;\n\twidth: 100%;\n}\n.left {\n\tbackground-color: red;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 10% 45% 45%;\n\tbox-sizing: border-box;\n\tborder-right: 20px groove rgba(155, 11, 11, 0.691);\n\twidth: 55%;\n}\n\n#lightsleft {\n\tgrid-area: 1/1/2/2;\n\tdisplay: Flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-direction: row;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: Red;\n\tborder-bottom: 6px solid darkred;\n}\n#circle {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: rgb(54, 143, 232);\n\tborder: 4px solid white;\n\tmargin: 2%;\n\tbox-shadow: 2px -2px -2px 2px lightblue;\n}\n\n#lightsright {\n\talign-items: center;\n\tjustify-content: flex-end;\n\tdisplay: flex;\n\tpadding-right: 2%;\n\tflex-direction: Row;\n\theight: 100%;\n\twidth: 25%;\n\tgap: 10%;\n}\n.circle2 {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: rgb(7, 7, 7);\n\tborder: 2px solid rgb(211, 211, 211);\n}\n\n#screen {\n\tgrid-area: 2/1/3/2;\n\tfont-family: \"pokedexfont\";\n\tdisplay: flex;\n\tfont-size: 48px;\n\ttext-decoration: underline;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 70%;\n\twidth: 80%;\n\tmargin: auto;\n\tbackground-color: rgb(88, 129, 88);\n\tborder: 14px groove lightgray;\n\tpadding-bottom: 4%;\n}\n\n#data {\n\tgrid-area: 3/1/4/2;\n\tmargin: auto;\n\theight: 90%;\n\twidth: 90%;\n\tbackground-color: rgb(88, 129, 88);\n\tfont-family: \"pokedexfont\";\n\tborder: 6px groove rgb(77, 75, 75);\n\tfont-size: 16px;\n\toverflow-x: scroll;\n}\n.right {\n\tbackground-color: red;\n\tborder-left: 6px solid groove;\n\tfont-size: 22px;\n\tfont-weight: 700;\n\ttext-align: Center;\n\tborder-left: 4px groove darkred;\n\tdisplay: flex;\n\twidth: 45%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n}\n.bluegrid {\n\tmargin-top: -40%;\n\tdisplay: Grid;\n\tbackground-color: blue;\n\theight: 10%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n\tmargin-bottom: 30%;\n}\n.gridsquare {\n\tborder: 2px solid black;\n}\n\n.middlearea {\n\twidth: 95%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tmargin: 3%;\n\tpadding: 3%;\n\talign-items: center;\n}\n.searchstuff {\n\tdisplay: flex;\n\tflex-direction: Column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.minus,\n.plus {\n\tfont-size: 68px;\n\tfont-weight: 800;\n\tcolor: gold;\n\t-webkit-text-stroke: 2px black;\n}\n.blackgrid {\n\tmargin-top: 20%;\n\tmargin-bottom: -40%;\n\tdisplay: Grid;\n\tbackground-color: gray;\n\theight: 10%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n}\n.blacksquare {\n\tborder: 2px solid black;\n}\nbutton {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"pokedexfont\";\n\tfont-size: 20px;\n\theight: 45px;\n\twidth: 150px;\n\tborder-radius: 8px;\n\tborder: 6px solid gray;\n\n\tbackground-color: darkgray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/franc-min/data.js":
/*!****************************************!*\
  !*** ./node_modules/franc-min/data.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
/** @type {Record<string, Record<string, string>>} */
const data = {
  Latin: {
    spa: ' de|de |os | la| a |la | y |ón |ión|es |ere|rec|ien|o a|der|ció|cho|ech|en |a p|ent|a l|aci|el |na |ona|e d| co|as |da | to|al |ene| en|tod| pe|e l| el|ho |nte| su|per|a t|ad | ti|ers|tie| se|rso|son|e s| pr|o d|oda|te |cia|n d| es|dad|ida| in|ne |est|ion|cio|s d|con|a e| po|men| li|n e|nci|res|su |to |tra| re| lo|tad| na|los|a s| o |ia |que| pa|rá |pro| un|s y|ual|s e|lib|nac|do |ra |er |a d|ue | qu|e e|sta|nal|ar |nes|ica|a c|ser|or |ter|se |por|cci|io |del|l d|des|ado|les|one|a a|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|dos|e a|imi|o s|e c|ert|las|o p|ant|dic|nto| al|ara|ibe|enc|o e|s l|cas| as|e p|ten|ali|o t|soc|y l|n c|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar|l t| ma|l e|pre| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|ta |cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|y d|nid|e i|odo|ios|o y|esp|iva|y e|mat|bli|r a|drá|tri|cti|tal|rim|ont|erá|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|n l|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern',
    eng: 'the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u',
    por: 'de | de| se|ão |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|ção| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| à |ual| em| su|açã|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|rá |qua|a d| pa|com|ais|o c|ame|erá| po|uer|sta|ber|ter| o |ess|ra |e e|das|o à|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|ênc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|uçã|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|ém |ime|tic|dis|raç|eci|ara| ca|nid|tru|ões|ass|seu|por|a a|m p| ex|so |r i|eçã|teç|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|ça |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ruç|ins|çõe|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|uém|gué|ngu|nin| ni|gur|la |pen|nça|na |içã|ião|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|á a|rem|ei |omo|rec|for|s f|esc|ant|à s| vi|o q|ver|a u|nda|und|fun',
    ind: 'an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit',
    fra: ' de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | à |t d|roi|dro| dr| le|té |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l’|t à| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |à l|nne|ons|ité|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d’| re|é d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| dé|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|és | na|us |com|our|ali|tra| ce|al |e o|e n|rté|ber|ibe|tes|r d|e r|its| di|êtr|pou|été|s c|à u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |éga| êt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| ét|t ê|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|ée |ser|l n| pl|anc|lig|t s|n e|s i|t e| ég|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pré|peu|rit|é e|t é|bre|sen|ill|l’a|d’a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l’e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|rés|cla|tés|oir|eut|e f|utr|doi|ibr|ais|ins|éra|’en|iét|l e|s é|nté| ré|ssi| as|nse|ces|é a',
    deu: 'en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ieß| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|für| fü|gel|öff| öf|owi|ill|wil|e v|ric|f e',
    jav: 'ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp',
    vie: 'ng |̣c |́c | qu|à | th|nh | ng|̣i |̀n |và| va| nh|uyê| ph|quy| ca|ền|yề|̀nh|̀i |̣t | ch|ó | tr|ngư|i n| gi|gươ|ời|ườ|́t | co|ượ| cu|ác|ự |ợc| kh| đư|đươ| tư|có| ha|ông|c t| đê|n t|i đ|ìn|̀u |cá|gia|́i |ọi|mọ| mo|ều|iệ|đề|u c|như|pha| ba| bi|ất|̉a |ủa|củ|hôn| đô|g t|́ q|̃ng| ti|tự|t c|̣n | la|n đ|n c|n n|hiê|ch |ay |hay| vi|ân | đi| na|bả| ho|do | do| tô| hi|ội|há|ị |nà|̀ t|ới|hân| mô|́p |àn|̣ d|́ch|̣p |̀o |ào|khô|́n |ột|mộ| hô|ia |ốc|c h|hữ|i v|g n|́ng|uố|quô|h t|ôn |ên |n v|nhâ|̣ t| bâ|i c|g v|̉ng|iế|c c|ật|thư|hư |ướ|̉n | vơ| cô|c đ| đo| sư|t t|ộc|ữn|vớ| vê|ả |̣ng|g đ|̉o |ảo|uậ| đa|bị|là|sự|bấ|hà|hộ|i t|ản|hươ|̀ng|tro|̉m |o v| mi|ể |ục|i h|ức|áp|g c|̃ h|iá|n b|̉i |a m|h c|côn|ện|ớc|hạ|độ| du| cư|a c|n h|tha|ã | xa|́o |áo|ín|̀y |g b| hư|g h|ong|ron|̀ c|cho|̀ n|mì|ực|h v|c b| lu|i b|ệ |ai |ế |̣ c|xã|kha|c q|iể|tộ|ối|đố|á |hoa|o h|h đ|cả|n l|họ|tiê|y t|̉ c|ại|án|̀ đ|oà|y đ|chi|̉ n|phâ|ề |thu|iên|dụ|o c|i m|luâ|c p|ốn|c l|́ c|ũn|cũ|c g|c n|qua|n g|c m|o n|ải|hả|́ t|ho |về| tâ| hơ|o t|ở |hứ|hì|viê|̀m |̉ t|đó|thô|ứ |cứ|hí|́nh|ày|ởn|ưở| bă|tri| ta|m v|c v|ợp|hợ|h m| nư|ết|thi|ặc|ngh|uy ',
    ita: ' di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |tà |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|à e|ità|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rtà|ert|anz|eri|tut|à d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|rà |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|trà|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v',
    tur: ' ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kkı|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|ın |ır |nda|arı|esi|ını|dır| ta|tle|e h|ası|etl|e k| va|ı v|sın|ile|ne |rke|erk|ard|ine| sa|ınd|ini|k h|kın|ama|le |tin|rdı|var|a v| me|e m|na |sin|ere|k v| şa| bu|lan|kes|dir|rin|dan| ma|kı |mak|şah|da | te|mek| ge|nı | hi|nin|en |n h| se|lik|rle|ana|lma|e a|ı h|r ş|ill|si | de|aya|zdi|izd|aiz|hai|ret|hiç|ına| iş|e b| ba|kla|et | hü|rın|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|hür|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|ürr|bu | mi|i v|dil| il| eş|n i|la |el |mal| mü| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| iç|n s|din| di|es |mel|eke|tir|şit|eşi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |tür|a k|eye|ık |ken|uğu| uy|eml|erd|ede|ame| gö|e s|i m|tim|i b|rde|rşı|arş|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |alı| an|ndi|end|hsı|unm|rı |kor|nın| ce|maz|mse|ims|kim|iç | ay|a m|lam|ri |sız|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|ğre|öğr| öğ|al |ıyl|olm|vle|şma|i s|ger|me | da|ind|lem|i o|may|cak|çin|içi|nun|kan|ye |e y|r t|az |ç k|ece|sı |eni| mu|ulu|und|den|lun| fa|şı |ahi|l v|r a|san|kat| so|enm| ev|iş ',
    pol: ' pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|ści|ci |ej | cz| za| w |ych|ośc|rze|prz| ka|wa |eni| na| je|ażd|każ|ma |zło|czł|noś|o d|łow|y c|dy |żdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|ają|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|ać |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|ńst|o s|a i|awa|e p|yst|pos|pow| ró|o o|jąc|ony|nej|owo|dow|ów | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|eńs|no |zne|a s|lwi|olw|ez |odn|rów|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|ówn|zie| ws|aln|orz|nik|o n|icz|zyn|łec|ołe|poł|aro|nar|a j|i z|tęp|stę|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|ełn|peł|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|ą p|ją |zeń|iec|pie|st |jes| to|sob|któ|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|ię |się| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|tór| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| wł|ian| dz| mo|e m|awi|ć s|gan|zez|mu |taw|dst|wią|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna',
    swh: 'a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i',
    sun: 'an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n',
    ron: ' de|re | în|și |are|de | și|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |în |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|nă |ă a|rea|ers|i s| li|sau| ca|rso|ent|lor|ați|al |a d|e o|men|l l|ei |e c|pri|ană| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| să|tea|lă |car|tăț|să |tur|i a|i d|nal| ni|ri |ita|e î|e ș|se |ilo|in |ia |ție|pre|fie|ții|ăți|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i î|a c|i n|a l|pen|ui |nu |ări|ală|ona|l d|ră |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|tă |că |ile|ă d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|inț|a î|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|ă î|leg|u d|e l|nde|int|a f|n a| so|naț|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i ș|rec|dep| că| o | îm|bui|ebu|reb| eg| na|mân|ntu|ili|văț|ând|iei|r ș|bil|pli|od |mod|res|din|e e|cți| au|ali|ă p|ă f|împ|ial|cia|ion|ă c|dec|nta| om|ită| fa|ță |cu |tra|ăță|nvă|înv|ât |ite|i i|lic| pu| ex|riv|tri|rot|ța |ți |l c|rta|imi|ulu|țio|ică|lig|rel|ta |cla|t î|nt |nit|e m|ânt|ămâ|țăm|ger|nța|ru |tru|gur|u c|bli|abi|ată|art|par|ar |rim|iva|l ș| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r',
    hau: 'da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| ƙa|cik|ne |ana|i k|ci |kki|e d|a ƙ| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|‘ya|tar| do|ɗan|ars| ‘y|sam|ƙas|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | ɗa|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |aɗa| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a ɗ|wat|ari| ƙu|on |ans|waɗ|ame|ake|kar|din|zam| fa|a l|ƙun|buw|r d| hu|oki|kok|a ‘|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n ƙ|aya|fi |n r|she|uni|bay|riy|n ‘|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|ɗin|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|aɗi',
    fuv: 'de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|ɗo |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|eɗɗ|neɗ|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|ɗɗo|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|ɓe |ti |fot|aan|eyd|ydi|ɗe |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|ñaa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| ña|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| ɓe|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|ɗee|ita|ira|aaɗ|e p|nng|ma |ank|yan|nda|oo |e ɓ|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|ɗi |und| hu|inn|ŋde|aŋd|jaŋ|a d|den| fe| te|go | su|a h|haa|tal|eɗe|e b|y g|baa|tde| yi|ɗɗa|o h|iiɗ|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|aɗe|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aaɓ|daa|ind|dew|i j|jey| je|ent|tan|o ɗ|geɗ| ge|ñee|a l| ɗu|kko|mak|a s| ga',
    bos: ' pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|žav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|ičn| sa|u n| dj|a t|ija|čno|jem|rža|drž|elj|stu|dna|odn|eni|za |iva|olj|šti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|ašt|zaš|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vič|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|živ|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|nič|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr',
    hrv: ' pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|žav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|rža|drž|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|šti|ašt|zaš|itk|živ|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|nič|kak|vni|ugi| ro|mov|ven|štv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|ći |juč|klj|nic|u k|nap|obi|atn',
    nld: 'en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar',
    srp: ' pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|žav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|rža|drž|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|ičn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|šti|ku |nom|bit|e d|me |iko|čno|oji|lo |vno|nik|e n|đen|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|ašt|zaš|nju| sm|ani| li|dno|eđu|aln|la |akv|oj |šen|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vič|tav|itu|ude|bud| bu|pot|odu|živ|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|štv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |beđ|ist|pun|en |te |dst|rot|zak|ao |kao|i k|juć|o s|st |sam|ter|nar| me|i m|kol|e r|ušt|ruš|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu',
    ckb: ' he| û |ên | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |yên|e b|er |afê|tin|ke | an|iyê|eye|rke|erk|we | be|e h|de | we|hey|fê |i b|yê |ina| bê| li|diy|ber|li |re |î û|nê |ê d| se| ci|eke|di |wî | na|î y|af |ete|hem| wî|sti| ki|rî |kî |î a|yek|n d|kar| te|ne |yî |i h|e k|tî |tê |a w|e d|î b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|û b|n k|adi|ev |zad| az|ras|est|anê| ya|n h|n û|wed| tê|wek|bat|bo | bo| yê|st |n n|ê k|dan|ê h|ema|ê b|iye|î h|din|bûn|r k|ekî| me|par|ûna|ta |wle|ewl|î m| ke|nav|ewe|man|ê t|dî |û m|mû |emû|a m|ika|e û|n w|a x|ê m|e n| ta|ela|n j|eyê|n x|civ|wey|ana| re|khe|ekh|bik|kê |jî |f h|erî| pa|îna|bin|erb|vak|iva|a s| ni|cih|vê |e j|ari| pê|î d|nên|ike|e t|a k|ê x| ye|n a|eyî|n e|ama|bê |ar |ewa|atê|bes|rbe|av |ibe|ist|mî |tem|awa|are|hî |geh|nge|ing|nek|nûn|anû|qan| qa|vî |rti|uke|tuk| şe|eza| da|u d|û a|f û|edi| ra|tu |tiy|tên| mi|xeb| ge|hîn| hî|etê|î j|stî|mal|bib|ra |i d|e m|mam|i a|nik|i m|î k| wi|ûn | ko|a ş|ê j|riy|lat|wel|e e|ine|ane|û h|în |a d|siy|end|aye| za|ija|a n|î n|ek |tek|yet|mbe|emb|û d|rov|iro|mir|eba| xe|mên| ên| hu|nîn|anî|t û|ten|n m|dem|ê û|enê|te |art|i r| jî|u j|ekê|dew',
    yor: ' ní|ti |ọ́ |ní | lá| ẹ̀|àn |ẹ́ |kan|tí | tí|an |ẹ̀ |tọ́|ọ̀ | ẹn|ọn |wọn|í ẹ|bí |áti|lát|̀tọ|ẹ̀t| gb| àt| àw|n l|àti| a |lẹ̀|ẹnì| ó |kọ̀| ló|ì k|sí |ọ̀k| kọ|ra |ni |àbí|tàb| tà|nì | sí|̀ka|ọ̀ọ|n ẹ|àwọ|n t|ó n|̀ọ̀|ílẹ|orí|ló | wọ|tó |dè |ìyà|ún | tó| or|í ì|èdè|kò |‐èd|̀‐è|ẹ̀‐|ríl|í ó|rẹ̀|í à| sì|yàn|gbo|ṣe | kò|í a| rẹ| jẹ|sì | bá|ràn| ṣe|wọ́|nìy|fún| fú|n à|ba |n n|gbà|gbọ|jẹ́|un |ìí | kí|gba|ènì| èn|bá |́ l|a k| ka|dọ̀|kí | òm|in | fi|bò |fi |bẹ́|ọdọ|bọd|́ s|hun|nú |nín|wà |ira|nir|òmì|ìgb| ìg|́ t|ẹni|ínú|i l|ìni|mìn|bà |áà |i ì|ohu| oh|í i|ara| ti|bo |ò l| pé|rú |írà| ọ̀|í ò|ogb|kọ́|pọ̀|ó b|à t|i n|lọ́|ẹ́n| ìb|yìí|gbé|gẹ́|bog|óò |yóò| yó|n k|pé |dá |́wọ|ọ́w|à l|í k| wà|n o|jọ | ir|ọ̀r|ú ì|́ à|ó s|i t|ṣẹ́|̀kọ|í t|yé |lè | lè|fin|àbò| lọ|à n|ùjọ|wùj|irú|ó j| ar|í w|a w| ìm|ú à|̀ t|òfi| òf| àà|fẹ́|àwù|́ni|wù |ìír|mìí| mì|láì| yì|í g|ọ́n|n s|i ẹ|ẹ̀k|àgb|ígb|níg|a n| kú|láà|í o|náà| ná|kẹ́|ípa|níp|ìn | ìk|bé |i g|ọmọ| ọm|i à|iṣẹ|̀ à|ìmọ|n a|n f|jẹ |yí |́ ọ|ó d|́ ò| dá| mú|ààb|ábẹ|láb|ìbá|ò g|jú |i o|lú | èt|̀ ẹ|tọ̀|de |̀ n|i ò| ìy|kàn|́n | bí| iṣ|mọ̀|e ẹ|̀ l| fà|èyí| èy| ìd|mọ́|dé |̀ k|́ p|ò t|mú | fẹ| ìj|rí |ìkẹ|nìk|ìní|n ì|n è|sìn|è ẹ| i |rọ̀| àn|́ b|ùn |́gb|ọ́g|dọ́| dọ|í n|rin|̀ j',
    uzn: 'ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|oʻl|har|ari| oʻ|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|boʻ| eg|oʻz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|taʼ|ham|gi |ib |ʻli|mla|h v|ʻz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|gʻi|uql|n q|oda|ʼli|aʼl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|ʻzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|ʻlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin',
    zlm: 'an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar',
    ibo: 'a n|e n|ke | na| ọ |na | bụ|ọ b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e ọ| ya| ik|a o|a ọ|ma |ụla|bụl|ike| on|nke|e i|a m|ony|ụ n|kik|iki|bụ | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga‐|ha |dụ | mm|ndi|ọ n|wa |rụ |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| dị| ez|ara|we | ih|a‐e|hị |ri |n o|zi |mma|chi|dị |ghi|ụta|iri|ihe| an| oh|a y|gba|ụ ọ| ọz| ak| iw|nya|te |iwu| nt|ro |oro|e ị|zọ |ezi|me |e e|u n|her|ohe| si|a‐a|i m|ala|ụ i| ka|akw| in|ghị|kpe|n e|pụt| e |i i|i o|ide|inw|ụ o|hụ |ahụ|weg|ra |o i|kpa|adụ|mad|si |sit|a s| me|sor|i ọ|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |ụ m|ụrụ|ọrụ| ọr|mak|uso|ama|de |ị o| ọn|ọzọ|chị|egh|enw|apụ|ru | to|i a|a ụ|osi|rị |wet|hed|nch| nc| eb| al|nọd|ọnọ|uru|sir| kw|yer|ji |eny| mk|ịrị|eta| us|tu |ọ d|u ọ| o |ba | mb|ọdụ|ịch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n ọ|o m|kwu|nkw|nwa|obi| ịk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|chọ|o y|asị|otu| ot|ram|u m|ịgh|dịg|zu |nọ |mba| gb|e g|ị m|ọch|ich|pe |agb|i ị|uch|zụz|uny|wun|ọrọ| nn|na‐| di|ge |oge|iji| ij|ọha| ọh|ikp|egi|meg|o o|ụhụ|hụh|mah|n ụ|ọ g|ọta|ekọ|ị n|kwụ|agh|ụmụ|ban|kpu|okp| ah|ịkp|a k|ime| im|zụ |ụzụ|ọzụ| ụz|lit|ali|nat',
    ceb: 'sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya',
    tgl: 'ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa',
    hun: 'en | sz| va| a |és |min|ek | és| mi|jog| jo|an |ind|nek|sze|ság|nde|a v|den|oga|sza|val|ga |mél|ala|emé|gy |n a|van|zem|ele| me|egy|ély| eg|zab|tás| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|ény|ség|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |eté|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|atá|z a| le|yen|es |ra |tés|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|ásá|i m|ban|kin|k m|szt| ál|ame|köz|k a|dsá|ads|ló | kö|ás |ly |on |ébe|tat|a t|n v|áll|mén| vé|nye|kül|lő |a n| cs|i é|ok |ész|ért|lla|lap|ágo|gok|nyi|tek| ke|nd |éte|ami|zés|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k é|mbe|emb|elé|ot |lis|vet|kor|ág |olg| am|szá|ehe|leh|ogo|ott|ül |nte|éle|i v|ogy|hog| ho|kel|n k|tes|nlő|enl|ssá|áza|ház|ég |vel|ába|lek|ége| ha|a h|rés| fe|ány|del|elő|át |alá|art|tar|zto|zás|tő |yil|koz|tko|aló|s k|i e|árs|tár|mze|emz| ny|más|ett|ny |fej|ass|zas| há|d a|t é|is |ésé|ezé|téb| mu|áso|sít|lye|elm|éde|véd|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|nél|t n|ti | má|ai |lás|eve|nev|zte| bá|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s é| ér|ána| es|s t|got|sül| be|vál|csa|se |ése|ad |ges|tos|ja | gy|asz|ten|lmé| tá|eze|árm|bár|ess|l s|üle',
    azj: ' və|və |ər |ir | hə| bi| hü| ol|üqu|hüq|quq|na |in |lar|hər|də | şə|bir|lər|lik|mal|r b|lma|r h| tə|əxs|şəx|ən |dir|uqu|una|an |ali|a m| ma|ikd|ini|r ş|dən|ar |ilə|qun|aq |ası| ya|mək|yət| mə| mü|kdi|əsi|ək |ilm|nin|ndə|olm|əti|ə y|sin|xs |nda|lmə|yyə|i v| qa| az|olu|iyy|ya |ind|zad|qla|ün |ni |lə |tin|n m|aza|arı|ət |n t|maq|lun|lıq|ə b|un |nun|q v|n h|dan|ın | et|tmə|ərə| öz|da |ə v| on|ə a|ına|ını|bil|a b|sı |il |əmi|ara|si | di|ə m|əri|rlə| va|ə h|etm|ığı|ama|dlı|adl|rin|bər|rın|n i|müd|nın| he|mas|ik |n a|dil|alı|irl|ələ|üda|sın|ınd|xsi|li |ə d|nə | bə|əya| in|ə i|lət| sə|nı | iş|anı|eç |heç|q h|eyn|ə e|dır| da|asi|rı |iş |ifa|lığ|i s|fiə|afi|daf| ed|məz|u v|kil| ha|ola|n v|əni|ır |uq |unm| bu| as|sia|osi|sos|ili|ıdı|lıd|nma|ıq |inə|əra|sil|xil|axi|dax|adə|man|a h|ə o|onu|a q|əz | ki|seç| se|ı h|min|lan|ədə|bu |raq|lı |ılı|al |ə q|r v|nla|hsi|əhs|təh|öz |ist| is|məs| əs|ina|ə t|ətl|a v|iə |n b|tər| ta| cə|edi|ala|kim|qu |i t|ulm|məh|n o|aya|ı o|ial| so|ill|siy| də|var|ins|mi |ğı |nik|r i|aql|k h|təm|tam|çün|üçü| üç|ğın|sas|əsa|z h|əmə|zam| za|sti|rəf|n e|r a|ild|həm|ıql|yan|may|n ə|mən|mil| mi|əqi|din|n d|tün| dö|miy|kah|ika| ni|fad|tif|l o|sər|yni| ey|ana|lən|am |ril|ayə|aşı',
    ces: ' pr|ní | a | ne|prá|ráv|na |ost| po|ho | sv|o n| na|vo |neb|ávo|bo |ebo|nos|má | má|ažd|kaž| ka| ro|ch |dý |ždý|ti |ou |a s| př| za|ání|á p| je| v |svo|ého| st|ý m|sti|ně | by|obo|vob|ter|pro|ení|bod| zá| sp|í a|rod|kte|by |mu |u p|o p| ná|ván|jak| ja|a p|o v|í n|ová|oli|ví |spo|roz| kt|mi |í p|ny | ma|ím |i a|do | so|odn|áro|nár|li |né |tví|at |ých|a z| vy|byl|vol|en |ýt |být| bý|t s|tní|stn|o s|í b|to | do|své|vé |ran|ejn|zák|eho|jeh|nes|pří|mí |čin|kol|ají|sou| vš|ích|it |ným|ým |nu |hra|nou|u s|ému| k |du |žen|pod| ze|kla|a v|stv|pol|dní|eré|m p|stá|je |ci |ečn| ni|néh|a n|aké|áva|maj|em |rov|í m|ké |ole|nýc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|í v|smí|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|jí |o d|sob|se | se|í s|ými|i s| i |i v| vz|ním|pra|lně|při|tát|ste|a j|aby| ab| s |oln|a o|m n|čen|slu|řís| os|zem|mez| či|lní|áln|oci|jin| ji|y b|í z|y s|va |vše|t v|ovn|chn|děl|níc|leč| pl|vat| vo|vin|rav|vou|lad|inn|é v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|ném|nez|iál|ího|len|ens|ože|oko|kéh|rac|ven|í k|e s|lán|ělá|zdě|vzd|t k|din|odi|tí | od|ré |tup|pov|pln|ště|ákl|nno|tak|erá|řed|o a|a t|res|jíc| mu|u z|rok| ob|čno|u a|y k|i j|é n|luš|ísl|oso|ciá|soc|níh|o j|cké',
    run: 'ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c',
    plt: 'ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav',
    qug: 'ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ayñ|yñi|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|ñit|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| ña|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |iñi| iñ|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|ñik|uk |iña|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wiñ|ati|ska| ll|kit|n h|uti|kic|mat',
    mad: 'an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil',
    nya: 'ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ',
    zyb: 'bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m',
    kin: 'ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ',
    zul: 'nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez',
    swe: 'ar |er |tt |ch |och| oc|ing|ätt|ill|rät|en | ti|til|för|ll | rä|nde| fö|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|ör |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| är|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| må|nge|n s|vis|lan|må |ati|nat| åt|an |nna| li| al|t f|ans|nsk|sni|gru|äll|tio|ad | me|isk|kli|s f|t i|stä|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|är |kap|a i|a r|änd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|äns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|män|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| hä|ets|häl|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|rän| pe|ilk|t l|ern|på | på|täl|d e|dom|ege|g e|tni|r a|lit|ras| så|lln|kil|ski|enn|i o|a d|erä|n a|ara| ge|äro|a m| ar|t d|ilj|els|yck| ve|g o|frå|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|öra',
    lin: 'na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|’te| ’t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son',
    som: ' ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood',
    hms: 'ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun',
    hnj: 'it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro',
    ilo: 'ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw '
  },
  Cyrillic: {
    rus: ' пр| и |рав| на|пра|ств|го |ени|во |ове| ка|на |ть | по|ия |о н| об|ет | в |сво| св|аво|ани|ост|ого|ый |ажд|лов|т п| им|ния| че| со|ело|име| не|льн|ли |чел|каж|ест|век|ать|ова|или| ра|ек |й ч|дый|жды| до|ие |еет|мее|но | ил|ии |ся |его|обо|и п|ние|к и| бы|и с|и и|ми |бод|воб|ван| за|ой |ых |ом |лен|аци|енн|о с|о п|ьно|тва|тво|при|ног|аль|ако|ва |и н|сти|ных|то |бра|олж|дол|сто|и в|ным|ое | ег|нов|их |ель|тел|ти |нос|не |пол|раз| вс|и о| ли|и р|ыть|быт|вле|ред|ию |тор| ос|ься|тьс|оди|щес|я и|как|про|жен|ым |пре|а с|сно|е д|нно|о и|ий | ко|о в| ни| де|сту|лжн|сов|е в|ном|оль|ран|оже|иче|ей |аст|нны| от|туп|м и|одн|зов|рес| мо|осу|ля |осн|а о|вен| то|о б|шен|тве|общ|а и|е м|ьны|обр|вер|чен|я н|жно|чес|ак |лич|нии|е и|все|бще|ват|есп|мож|й и|ное|о д|бес| во|я в|ду | ст|дно|она|нац|ден|ежд|х и| бе|и д|ны |дос|для| дл| та|льс|ате|ции|я п|ую |ите|е о|ной|под|ото|стр|ста| ме|ели| ре|я к|тоя|ами|ен |ь в|ю и|азо|гос|м п|ь п|т б|жет|уча|суд|ьст|дст|щит|ащи|защ|кон|нию|ам |оду|ере|гра|печ|о о|оро|кот|и к|тра|ник|уще|циа|оци|соц|нал|еск|о р|ког|дру| др|ни |ава|нст|ем |авн|ыми|едс|дин|дов| го| вы|в к|ые |обе|му |я е|слу|уда|так|кой|ту |иту|зак|ход|вол|раб|кто|икт|ичн|нич|от |ина| к |тер|род|нар',
    ukr: 'на | пр|пра| і |рав| на| по|ня |ння| за|ого|ти |во |го | ко|аво| ма|люд|о н| не| лю|юди|ожн|кож|льн|жна|дин|ати|ає |их |ина|пов|сво| св|анн|є п|має|або|а л| бу|не |енн|бо | аб|а м|ови|ні | ви| ос|аці|вин| та|без|обо| ві| як|ере| до|і п|ува|о п|аль|них|ом |ми |іль|ног|та |ий |при|ою |ть |ста| об|ван|инн|ті |ост| у |ся |ват|бут|ист| мо|езп|ути|нов|пер|ії |и п|бод|воб|ств| в |о в|від| бе|ако|під|тис|кон|но |ва |нні|і с|а п|сті| сп|ний|ду |ьно|она| ін|дно|ним|ій |а з|ну |мож|її | її|ля |соб|му |ої |яко| пе| ра|ід | де|і в|и і|чин|вно|ому|ном|у п|і н|а с| су|а о|нен|ися|ово|нан|одн|у в|і д|ава|ідн|рів| рі|і р|ими|віл|им |ції|о д|а в|сту|оду|буд|ова| пі| ні|я н|е п|нац|и с|нна| од| ро|нос|ьни|ють|и з|ки |і з|а б|спр|чен|же |оже|е м|овн|рим|е б|то |ніх|осо|удь|ві | ре| ст|рац|до | со|роз|лен|вни|івн|род| вс|спі|ков|зпе|ів |для| дл|ї о|хис|ахи|зах|‐як|ь‐я|дь‐|я і|так|зна|заб|сть|ту |ною|а н|тор|сно|о с|жен|ціа|оці|соц|інш|і м|кла|и в|тер| ді|іст|ові|у с|я в|аро|сі |віт|сві|осв|роб|піл|рес|за |печ|абе|ку |лив|ерж|дер|в і|авн|тав|ав |ами|ком|вле|о б|ь п| що|їх |тво|хто|іхт|ког| кр|ано|тан|іал|нал|нь |х п|жно|леж|але|про|тва|рат|о о|х в|нар|льс|цій|кор|час|ржа|ї с|ину|дст|о з|раз|мін|а р|зак',
    bos: ' пр| и |рав|на |ма |пра| на|има| св|а с|да |а п|во |је |ко |ако|о и| по|аво|е с|а и|ти | им| да| у |сва|но | за|о н|ва |и п|или|вак|ли | ко|не | ил|кој| не| др|ост| сл|ња |им |и с|у с|и и|ава|ије|а у| би|ств|се |вањ|а д|ом |јед|бод|обо|лоб|сло| се| ра|их |сти|а н|ње | об| је|при|дру|у и|ју |о д|ити|вој|раз|ање|ова|дје| ос|е и|ло |е п|ања|ује|и д|бра|тре| тр| су|у з|а к|ог |у п|оје|циј|реб|а о|а б| ње|и у|миј|ни |нос|ба |едн|сво|њег| из|про|е д|жав|бит| ни|и о|ста|а з|авн|вје| ка|бил|ово|а ј|ају|ист|и н|них|јел|ту |ред|гов| од|е о|оји| см|ја |о к|ило|аци|е у|пре|о п|еба|у о|су |вим|ичн| са| дј|а т|ија|шти|чно|ржа|држ|сту|дна|одн|ени|за |ива|ном|ем |ду |ран|вно|сми|јер|е б|е н|де |пос|м и| до|у д|нак|а р|обр| мо|ним|его| кр|тит|кри|ве |ан |ико|ник|ну |и м|ног|ено|сно|е к|туп|руг|ка |ода|рив|вољ|алн|м с|иту|ашт|заш|ани|сам| ст|акв|ови|осн|род|аро| ми|ји |тва|дно|нст|ак |ите|љу |вич|рад|у н|у м| та|дст|тив|нац|рим|кон|ку |њу |оду|жив|амо|тво|тељ|под|ећу|г п|нов|ина|нар| вј|и б|ој | ов|аве|ву |анс|оја|зов|азо|уде|буд| бу|е т|и в|ења|еди|ниц|нап|мје| ис|слу|едс|о о|зак|и к|м п|тно|иво|ере|нич|как|ада|вни|уги| ро|мов|вен|о с|то |те | вр| бе|ара|кла| бр|у б|у у|и т|она| он|ави|јал|дни| ск',
    srp: ' пр| и |рав|на |пра| на|ма | св|има|да |а п|во |ко |ти |аво| по|а и|ако|а с| за| у |о и| им|и п|ва |сва|вак| да|о н|е с|ост| ко|ња |ли |или|не |ом | не|а н| сл| ил|је | др|и с|но |кој|у с|ава| ра|ог |сло|ју |им |сти|бод|обо|лоб|ити|а о|ств|и у|а д|ни |јед|у п|при|едн| би|и и|а к|о д|ста|их |дру|а у| је|ања| ос| ни|нос|про|ају|и о| де| су|у и|се |ње |ја |ова|и д|циј| об|ује|ред|жав|е и|е п|а ј|дна| се| од|ве | ка|ени|ржа|држ|а з|авн|ења|аци|вој|ово|у у|м и|оја|вањ| из|ија|у з|ање|ран|е о|род|и н|е б|раз|за | ње|гов|ичн| ст|нов|сно|осн|ду |пре| тр|су |ву |одн|а б|сво|њег|ним|них|ту |тит|шти|ку |ном|бит|е д|ме |ико|чно|оји|ло |вно|ник|ика|без|ара|де |у о|вим|нак| са|рив|аве|ан |вољ| кр|о п|сме|е к|ног|ји | ов|е у|тва|бра|руг|реб|тре|у д|ода| мо| вр|ављ|у н|его|дел|м с|кри|о к|ашт|заш|њу | см|ани| ли|дно|еђу|алн|ла |акв|ој |ком|сту|уги|ави|а р|ка |рад|оди|вич|тав|иту|уде|буд| бу|пот|оду|жив|ере|тво|ило|бил|аро|е н|ови|пор|ено|штв|нац|ове|м п|туп|пос|рем|дни|ба |нст|а т|оју|аст|ива|е м|вре|вља|ну |беђ|ист|ен |те |дст|рот|зак|ао |као|и к|јућ|о с|ст |сам|м н|тер|нар| ме|и м|кол|е р|ушт|руш|вер|как| бе|и б|кла|ада|еба|ена|она| он|тву|анс| до|рак|слу|и в|ниц|у к|мен|врш|еме|едс|иви|о о|јав',
    uzn: 'ан |лар|га |ир | би|ар | ва|да |ига| ҳу|ва |бир|уқу|қуқ|ҳуқ| ҳа|р б|ган|иш |ида| та|а э|ини|ади|нг |дир|иши|лик|лиш|ий |или|ари|уқи|ҳар|лан|инг|ши |дан|нин|инс|кин|сон|нсо| ин| му|қиг| ма|он |р и| бў|эга| эг| ўз|ни |бўл|гад|и б|ки |ила|ёки| ёк|а б|н б|ин |р ҳ|ала|эрк| эр|лга| қа|рки|ш ҳ|и ҳ|н м| бо| ба|ик |ара|иги|лиг|ри |қил|а т|бил| эт|ниш|нли|кла|и в|бош|эти|ани|им |и м|оли|қла|а ҳ|лаш|атл|тил|а қ| ол|оси|мас|қар|инл|лат| қи|таъ|ҳам|ги |иб |мла|ўз |н э|мум| да| бу|ат |ш в|ун |ати|мки|умк|тла|иро|ўли|бар|ири|риш|ият|али| бе| қо|а ш|аро| ке|и т|рла| те|ча |рча|арч|а ў| шу|тиш|н ҳ|тга| са|аси| ха|рак|лин|ола|имо|шқа|ли | ту|амл|лла|сид|н ў| ас|нид|а и| ки|н т|нда|к б|ера|ошқ|сиз|ор |а м|р в|енг|тен|мат|мда|амд|лим|й т|ят |и а|ино|илг| то|тни|ана|ас |эма| эм|а ё| ша|аш |а а|тар|кат|ака|ак | де|аза|илл|сий| си| со|уқл|н қ|ода|ъли|аъл|ник|ада| ни|тда|гин|уни|сит|ай |қон|н о| жа|ким|еч |ҳеч| ҳе|ўзи|лак|кер|икл|лли|ур |зар|шла|риг|ирл|дам|коҳ|ико|а д|ам |н в|рти|тиб|тал| иш|чун|учу| уч|сла|а у|рин|сос|асо| ун|на | ка|муҳ|диг|ч к|асл|лма|ра |бу |хал|ўлг|и к|екл|р д|қат|ага|и қ|оий|мил| ми|қа |и с|жин| жи|син|рор|а в|лад|а о|тли|мия|н и|аб |тир|з м|дав|рга|аги|а к|нла|ақт|вақ|арт|аёт|лаб',
    azj: ' вә|вә |әр |ир | һә| би| һү| ол|үгу|һүг|гуг|на |ин |лар|һәр|дә | шә|бир|ләр|лик|мал|р б|лма|р һ| тә|әхс|шәх|ән |дир|угу|уна|ан |али|а м| ма|икд|ини|р ш|дән|ар |илә|гун|аг |асы| ја|мәк|јәт| мә| мү|кди|әси|әк |илм|нин|ндә|олм|әти|ә ј|син|хс |нда|лмә|јјә|и в| га| аз|олу|ијј|ја |инд|зад|гла|үн |ни |лә |тин|н м|аза|ары|әт |н т|маг|лун|лыг|ә б|ун |нун|г в|н һ|дан|ын | ет|тмә|әрә| өз|да |ә в| он|ә а|ына|ыны|бил|а б|сы |ил |әми|ара|си | ди|ә м|әри|рлә| ва|ә һ|етм|ығы|ама|длы|адл|рин|бәр|рын|н и|мүд|нын| һе|мас|ик |н а|дил|алы|ирл|әлә|үда|сын|ынд|хси|ли |ә д|нә | бә|әја| ин|ә и|ләт| сә|ны | иш|аны|еч |һеч|г һ|ејн|ә е|дыр| да|аси|ры |иш |ифа|лығ|и с|фиә|афи|даф| ед|мәз|у в|кил| һа|ола|н в|әни|ыр |уг |унм| бу| ас|сиа|оси|сос|или|ыды|лыд|нма|ыг |инә|әра|сил|хил|ахи|дах|адә|ман|а һ|ә о|ону|а г|әз | ки|сеч| се|ы һ|мин|лан|әдә|бу |раг|лы |ылы|ал |ә г|р в|нла|һси|әһс|тәһ|өз |ист| ис|мәс| әс|ина|ә т|әтл|а в|иә |н б|тәр| та| ҹә|еди|ала|ким|гу |и т|улм|мәһ|н о|аја|ы о|иал| со|илл|сиј| дә|вар|инс|ми |ғы |ник|р и|агл|к һ|тәм|там|чүн|үчү| үч|ғын|сас|әса|з һ|әмә|зам| за|сти|рәф|н е|р а|илд|һәм|ыгл|јан|мај|н ә|мән|мил| ми|әги|дин|н д|түн| дө|миј|каһ|ика| ни|фад|тиф|л о|сәр|јни| еј|ана|лән|ам |рил|ајә|ашы',
    koi: 'ны |ӧн | бы|да | пр|лӧн|рав| мо|пра| да|быд| ве|орт|лӧ |ӧй |мор|ӧм |аво| не|во |ыд |ыс |нӧй|ын |м п|д м|ыны|тны| ас|тӧм|льн| эм|вер|сь |ьнӧ|эм |н э|тлӧ| кы|сӧ | по|ерм|сьӧ|ртл|аль| кӧ|эз | ӧт|ӧ в|то |ето|нет|ылӧ| ко|тшӧ| от| и |ы с|бы |ӧ б|ств|кӧр| вӧ|шӧм|кыт|та |на |з в| се| до|вол|ӧс | сы|ы а|ола|рмӧ|ас |оз | оз| сі|а с|тво|с о| вы|ліс|ӧ к|ытш|ӧ д|ис |ісь|ӧтн|ась| ол| на|аци| эт|а в|злӧ|сет| во| чу|лас|лан|мӧ |тыс|рты|ӧрт|ы п|ӧтл|о с|эта|дз |кӧт|ӧдн|вны| мы|н н|удж| уд|выл|ӧ м|рті|орй|ись| со|воэ|ыдӧ|й о|кол| го|с с|сси|сыл|ысл|йын|кин|олӧ|тӧн| сь|ана|ӧр |ция|а д|ӧмӧ| ви|з к| эз|ы б|тӧг|ӧт |мӧд|ест|ост|ӧны|тир|оти|укӧ|чук|н п|онд|пон|слӧ|кер| ке| об|сис|суд|а н|дор|кон|нек|н б|лӧт|с в|ті |ьӧр|тра| ст|нал|она|нац|н к|кӧд|ӧг |скӧ|ть |етӧ|дӧс|быт|рны|ӧ н|тсӧ|рре|а б|нда|с д|асс|ы к|асл| ло|ьны|сьн|ы м|еки|ы д| мӧ|ь м|ы н|ытӧ| ме|рйӧ|иал|й д|итӧ|а к|ӧсь|мӧс|овн|зын|а п|отс| ли|оля|ӧ а|осу|ӧя |нӧя|езл|рез|мед|с м| сэ|ь к|рйы|ако|зак| за|ьын|ннё|мӧл|умӧ| ум|ы у|н в|м д|н с| дз|н о|ран|стр|озь|поз|з п|о д|циа|оци|соц|ион|а м|еск|чес|нӧ |з д|тсь|бӧр| бӧ| ов|вес|кыд|ӧ с|воы|код|тко|ӧтк|оль|дбы|едб|сьы|чын|тчы|ӧтч|тла|мӧн|сла|йӧз| йӧ|т в|ы и|ез |о в|оны|йӧ |анн|ӧль| пы|ан |нӧс|нит| су|м с',
    bel: ' пр|пра| і |ава|на |рав| на| па|ны |ва |або|ць | аб|ае | ма|аве|анн|ацы|сва| св|е п|льн| ча|не |ння|ала|а н|ай |лав|чал| ко| ад| не|га |ожн|кож|век|ня | як|жны|ы ч|мае|а п|ага|бо |ек |а а|ца |цца| ў | за|ых |пав|а с|го |він|дна|бод|мі |ваб|ван|ам | вы| са| да|ста|аві|нне|асц|най|цыя|наг|ара|і н|к м|яго| яг|ьна|пры|аць|і п|одн|ств|ама|ных| бы|тва|дзе|аль| ра|ні |і с|і а|ыць|а б|енн|лен|ці |оўн|ым |рац|інн|іх | ас| та|то |нас|які| дз|чын|оль|і д|аво|ад | ні|сці|ымі|ным|быц|я п|ьны|ыя |аро|ана|іна|і і|рад| гр|ля |ўле|о п|а ў|рым|пад|ыі | ін|амі|дзя|рам|цыі|аба|а і|ду |жна|ўна|нал|нац|ры |эта|гэт| гэ|нен|да |ах |гра|кац|ука|а з|кі |адс|ў і|нст|энн|я а|нні|оду|а р|нна|ход|нан|пер|х п| у |адз|і р|мад|м п|е м|аду|дст|для| дл|оў |нае|і м|ако| ка|ы ў|бар|е а|ацц|ую |ыцц|сам|яўл|але|род|раб| пе|што| ўс|адн| су|роў| ро|дук|люб|ь с| шл|раз|нав|зна|вол|удз|ада|жыц|чна|ве |а т|асн|сац|ера| рэ|яко|кла|аны| шт|ь у|аюц|нар| ус|соб|асо|пам|я ў|авя|чэн|воў|так|ну |ю а|ь п|зак|кар|е і|ь а|бес|ія |кія|х і|заб|аса|ім |жав|і з|леж|тан|ахо|яль|ыял|о с|яна|кан|ака|інш|алі|вы | мо|нах|я я|м н|ога| бе|й д|о а| ст|ены|і ў|а д|есп|шлю|цця|ы і|ыст|рыс|люч|клю|тац|уль|ынс|ачы|спр| сп|аў |ыма|ары|кам|е ў|і к|кон',
    bul: ' на|на | пр|то | и |рав|да | да|пра|ств|ва |а с|а п|во |но |ите|та |о и|ени| за|не | не|а н| вс|ван|аво|ото|е н|о н|а и|ки |ие |те |ни |има| им|ли |или|ия | по|ове|ане|чов|ма | чо|и ч|а д|ние|и д|ест| ил|ани|век|все| об|ек |еки|сек|ава|тво|сво| св|вот|а в|и с|ост| ра|ова|а о|е и|ват|и н|е п|к и|а б| в |и п|лно|о д| се|раз|ето|ъде|бъд| бъ|при|ата| ко| тр| ос| съ|бод|обо|воб|ат |за |тел| е |аци|о с|де |о п|ен |бра|и в| от|се |ния|алн| де|его|нег| из|от |ран|ята|как|оди|е с|и и|ден|пре|бва|ябв|ряб|тря|нит| ка|ява|про|ст |а з|гов|вен|тве|о о|а р|акв|о в|и з|ред|нос|ият|е д|щес|нов| ни|ция| до|йст|о т|е т|ржа|ърж|дър|ено|пол| с |обр|тва|нот|рес|ейс|и о|е в|кой|общ|лен|она|нац|иче|ез |без| бе|ежд|ува|вит|ри |зак|и к| ли|а е|под|ели|ник|си |е о|а т|авн|и р|т с|ка |оет|елн|нен|ой |гра|жен|дру| ре|а к|сно|осн|лич|зи | та|са |нст|вни|чки|ичк|сич|вси|люч|клю|дно| мо|еме|а у|изв|тви|дей|я н|кри|ато|о р|й н|ико|ичн|жав| дъ| то|бще|иал| со|лит|т н| си|т и|одн|жда|зов|азо|уча| гр|кое|тъп|стъ|вол|лни|сре| ср|ква|кон|тно|ака|и у|ко |ган|ода|чен|лст|елс|стр| къ|ста|род|нар|и м|нал|руг| др|чес|въз|ди | са| те|сто|дос|раж|рез|чре|гат|еоб|а м|о е|ине|аст|ово|чно|аве|му | му|ано|ита|ими|ако|нак|лаг|ови',
    kaz: 'не | құ|ен |ұқы| ба| қа|құқ|ық |ға | жә|әне|жән| не| бо|де |дам|ада|а қ|тар|ына| ад|ылы| әр|ың |ан |ін |қыл|ар |еме|на |р а|лық|уға|ала|ықт| өз|мес|әр | жа|мен|ығы|лы | де|қта|ның|н қ|ған|іне|бас|ары| ме| қо|еке|ын |да |е қ|ды |асы|се |есе|ам |бол|анд|нем| бі|ара|ы б|ста|тан|нды|н б|ің |е б|ілі|тиі| ти|бар|ғы |нде|етт|иіс|қығ|іс |лар|ге |ы т|інд|ік |бір| бе| ке|алу|е а|алы|луы|а ж|ері|олы| те|қық|н к| та|н ж|ғын|тті|іні|тын| ер|нда|ім | са|е ж|аты| ар|рға|еті|ана|ы ә|уын|лға|өзі|ост|егі|тік|қа |сқа|рын|кін|луғ|ң қ|нің|уы |бос|асқ|қар|дық|нан|мыс|мны|амн|ы м|айд|ке | же|зін|рде|рін|е т|ген|ып |ры |ті |сын|қам|ден|і б|гіз|рал|е ө|лан|сы |ама|тта|тық|бер|ді |біл|ркі|өз |зде|кет|қор|дай|уге|ы е|ынд|нег|оны|ей |мет|аны|а т|жас|ауы|лге|аса|еге|дар|ру |ау |ерк|ы ж|рыл| то|н н|е н|тін|ір |сіз|тер|лма|і т|кім| ал|р м|лік| мү|е м|түр| тү|кел|лып|ең |тең|рлы|лім|рды|ард|атт|с б|ыры|сыз|ыс |елг|дал|йда|орғ|рқы|арқ| жү|тал|ылм|а б|ігі|лде|із |қты| еш|дей|ай |жағ|кті|ікт|гін| әл|тты|ұлт| ұл|е д|ыны|лін|р б|еле|кұқ| кұ|амд|м б| ет|оға|құр| кө|аға|тол|шін|айы| қы|қал|жек|і н|ес |ағы|е о|елі| ел|н е|зі |шкі|ешк|олу|ция|мас|ғда|ағд|лтт|імд|ным| да|а д|әсі|с ә|қат|ірі| со|ң б|аза|мда|айл| ас|ғам|қоғ'
  },
  Arabic: {
    arb: ' ال|ية |في | في|الح| أو|أو | وا|وال|حق |ة ا|لحق|الت|كل |الم|لكل| لك|لى |ق ف|ته |و ا|ة و|شخص|ة ل|ات |الأ|ي أ|ون | شخ|م ا|أي | أي|ان |أن |مة |ي ا|الا|لا |ها |اء | أن| عل|خص |ن ا| لل|د ا|من |فرد|ما |الع|ت ا|حري|على|ل ف|رد |ل ش| لا|رية| إل|ة أ|ا ا|ن ي| ول|ا ل|ا ي| فر| من|ة م|الق|جتم|ن أ|ق ا|الإ| حر|له |ه ل|اية|لك |ه ا| دو|دة |اً |ين |ه و|لة |ي ح| عن|ماع|ي ت|ذا | حق|قوق|حقو|، و|ن ت|مع |ص ا|ام |د أ| كا|هذا|الو| إن|مل |امة|ع ا|إلى|ة ع|ماي|حما|ن و|لتع| وي|ير |نون|ي و|اسي|الج| هذ|نسا|وق |ترا|عية|ه أ| له|سية| يج| با|دول|انو|قان|لقا|ة ب|ة ت|تما|الد|يات|ع ب|سان|إنس|هم |علي| مت|لمج|ذلك|عمل|لأس|وز |جوز|يجو|بال|غير|ك ا|كان|ساس|أسا|دم |لاد|اعي|الر|تمي|دون|تمت|لتم| يع|ليه|ساو|اجت|ي م|لعا|لجم|تعل|ر و|تمع|مجت| مع|يه |ى أ|فيه|ى ا| كل|لات|ملا|ود |انت|الف|يها|ي إ|تي |الب|لي |قدم|ال |اد |ل ا|يز |ييز|ميي| تم|لحر|تع |متع|ا ب|عام|ا و|ق و|رام|ل ل|لاج|را |الش| وإ|يم |ليم|شتر|ا ح|واج|لزو|ول |ا ف|ولة|لحم|أسر| ذل|ه ف|اته|مسا|لمس| تع|عن |ه ع|وله|يته|ن ل|رة | وس|اة |يد | تح| مس|ي ي|لتي|عة |ولي|لدو| أس| وف|ل و|أية|ني |الس|لان|لإع|ة ف|ريا|ل إ|م ب|امل|كرا|تسا|ميع|جمي| جم|أول|بية|عيش|تحق|ادة|س ا| مم|معي|جما|عات|اعا|ارس|مار|مما|م و|راك|اشت|الط|اج |زوا|الز| وم|حدة|تحد|لمت|مم |لأم|ده |بلا| بل|ار |يار|تيا|ختي|اخت|ن م| مر',
    urd: 'ور | او|اور|کے | کے| کی| کا|یں | حق|کی |کا | کو|ئے |ے ک|یا |سے |کو |شخص| شخ|نے | اس| ہے|میں|حق | ہو| می|خص |ے ا| جا|اس | سے| یا|ہر |ی ا| کر| ہر|ے۔ |سی |ہیں|ا ح|ص ک|وں |ے م| ان|ر ش|۔ ہ|ائے|زاد|آزا| آز|ام |ر ا|ق ہ|ادی|جائ|ں ک|ہے۔|م ک| کس|ا ج|ی ک|س ک|کسی| پر|ے گ|ہے |ار |ت ک|دی |پر |و ا| حا| جو| ہی|ان |ی ج|ری | نہ| مع|جو |ل ک|ی ت|ن ک|کرن|ئی |ل ہ|تی |ہو |ہ ا| ای|صل |اصل|حاص|رنے|ی ش|نہ |۔ ا|ں۔ |یں۔|ر ک|ر م| مل|وہ |معا|رے |ں ا|نہی|ے ہ|ے ب|ایس|ے ل| تع| گا|یت |ی ح|ا ا|ی م|اپن| اپ|کیا|می |ی س| جس|ہ ک|نی |اشر|عاش| دو|لئے| لئ|انہ|وق |قوق|حقو|مل | قا|کہ | گی|ر ب|ہ م| وہ| بن|ی ب|ملک|جس |ا۔ |ریق|ر ن|ے ج|اد |ات |گی |د ک|ے ح|دار|ر ہ|گا۔|قوم| قو|ے، |ا س|دوس|ر پ| و | شا|ی آ|ں م|ق ح| پو| با|خلا|انے|یم |لیم|و ت|ون | کہ|ی، |۔ ک|ا پ|ن ا|لک |علا|ا م|ق ک|ائی|وسر|ی ہ|وئی|یر |ا ہ|علی|و گ|وری|دگی|ندگ|و ک|یسے| من|ائد|رائ| مر|پور| طر|ومی|ے خ|سب |نون|انو|قان| سک|وام|ین | رک|تعل|لاق|غیر|دان|، ا| بی| مس|یوں|نا | بھ| بر|رتی|ادا|امل|یہ | یہ|ہ و| عا|ی پ| بچ|اف |لاف| خل|ی۔ |گی۔| دی|ھی |بھی|دہ |جا |پنی|قوا|اقو|رکھ|ے ی| عل|کوئ|، م| چا|ے س|ر ع| پی|برا|ر س|ر ح|سان|م ا|کام|شرت| را|شام|من |زند| زن|ب ک|ت م|اہ |اری|س م|ر ج| مح|ورا|ے پ|طری|ہوں|ال |ں س|ی ن|کرے| مق|ت س|تحف| تح|و۔ |ہو۔|بند| اق|د ہ| ام|امی|الا|لت |شرے|ے ع|ا ک|فری',
    pes: ' و | حق| با|ند |رد |دار| دا|که |هر | در| که|در | هر|ر ک|حق |د ه|از |یت | از|یا |کس |ود |ارد| یا| کس|ای |د و| بر| خو|ق د|باش|شد |د ک|ار |د ب| را|ه ب|ان |آزا| آز|را |اشد|ی و|ه ا|ین |ید |زاد|س ح|خود|ی ب| اس|ده |دی |ور |اید|ه د|ری |و ا|تما|ات | نم|ی ک|ادی|نه |رای|د ا| آن|است|ر ا|ر م| اج|مای|ون |قوق|حقو|و م| ان|انه| هم|وق |ایت| شو|ی ا| مو| بی|با | تا|ورد|انو|ست |وان|برا|ام |شود|آن |جتم|ی ی| کن|ر ب|کند| مر|ت م|های|ت ا| مس|ی، |ماع|اجت|توا|یگر|و ب|دان|ت و|ا م| بد|عی |کار| من|مور| مق|ی د| زن|ی م|ن ب|ر خ|اه |ا ب|اری|د آ|مل | به|اعی|د، |دیگ|ت ب|بای|این| می|ن و|ق م| عم| کا|ن ا|و آ| حم|نون|ه و|و د|د ش| ای|شور|کشو| کش|لی |نی |ه م|بعی|ر ش|یه | مل|میت|ی ر|رند| شر|می |وی |ساو|قان| قا|مقا|او | او|د م|گی |نمی| اح| مح|مین|ئی |ادا| آم|خوا|گرد| گر|مند| شد|ائی| دی|ز ح|هیچ| هی|اده| مت|نما|ت ک|ران| بم|ن ح|ر ت|حما|ارن|مسا|دگی|ومی|ن ت|ملل|بر |هد |واه|بهر| اع|‌ها|ق و|، ا|عیت|یتو|ا ر|ن م| عق|همه|ا ه|زش |وزش|موز|آمو|انت|تی |جام|موم|عمو|تخا| فر|طور|د د|ه ح|ردا|اوی|نوا|انی|رار| مج|ی ن|حدی|احد|ندگ|زند|شخص| شخ|‌من|ه‌م|ره‌|هره|شده|ع ا|و ه|اسی|هٔ |یده|عقی|ا ا|مه | بش|اد |دیه|ا د|دوا|ی ح|ابع|ی ت|خاب|نتخ|رور|و ر|شرا| خا|ٔمی|أم|تأ|اً |امل|له |د ر|اسا|خور|بل |ابل|قاب|یک |سان|قرا|ا ن|خصی| ام| بو|یر |الم|بین|اهد|تبع| تب',
    zlm: ' دا|ان |دان| بر| او|ن س|رڠ |دال| ڤر|له |كن | كڤ|ن ا|ن ك|ن د|يڠ | يڠ|ڤد |حق |ورڠ|تيا|ياڤ|ارا|كڤد|اور|رحق|برح|اله|أن |ولي| ات|اتا|ڠن |تاو|اڤ |ستي|ليه|او | ست|ڤ ا|يه |را |ه ب|ه د|عدا| عد|ن ڤ|ن ب|ين | تر|ق ك|ن ي|يبس|بيب| تي| سو| كب| سا|ن م|ن ت|لم |الم|د س|ڠ ع| من|چار|د ڤ|رن |سام| ما|ڽ س|ن، | بو| اي|ندق| حق|ڬار|نڬا|بول|سبا| سب|اتو|ا س|قله| ڤم| مم|وان|سچا| سچ| كس|ا ب|سن | سم|ڤرل|اون|نڽ |تن | با|هن |سيا|ا ڤ|ارڠ|بار|ڤا |بسن|كبي|ام |يند|ي د|اڬي|ڠ ب|باڬ|ي ا|مان| لا| د |دقل|هند| هن|ت د|ادي|وين|يكن| نڬ|، ك|ن٢ | ڤو|بڠس|ق٢ |ات |اول|اكن|اڽ | سس|ون |اد | كو|اين|دڠن| دڠ|ائن|تو |تي |ن ه|ڬي |سي |ق م|وڠن|دوڠ|ندو|لين|رلي|نتو|ڤون|وات|ياد|تيك|ڠسا|ڤمب|ترم|٢ د|حق٢|وا |لوا|ماس|وق |ه م|ل د| مل|وند| ڤڠ|ا، |، ت|لائ|اي |مڤو|يك |ي ك|رات|مرا| بي|سمو|و ك|، د|سوا|ڠ م|ڠ س|ڠ٢ |ڤري|يري|دير|ا ا|اسا|ڤ٢ |تا |سوس|، س|جوا|ڠ ت|رأن| ان|سأن|ريك|يأن|ري | در|امر|كرج| ڤل|ا د|جرن|اجر|ارك|لاج|د ك|وار|برس|ونت|منو|سال|ينڠ|دڠ٢|ندڠ| مڠ|اڤا|سسي|ساس|نن |ڤول|اڬا| بڠ| سڤ|مبي| اڤ|ڠ ا|ارأ|ڤرا|ي س|بس | دل|ا م|موا|ڤلا|ملا|ڤرك|كور|وبو| كأ|وكن|أنڽ|كسا|ڠڬو|ادڤ|هاد|رها|تره|كوم|توق|م س|ڠ د|دي | دي|٢ س|ندي|اس |ادا|بوا| دب|ڠ ڤ|ڽ، |اڤ٢|رتا|ال |يال|وسي| كت|أن،|نڤا|تنڤ| تن|م ڤ|رسا|ممڤ| مر|ن ح| كم|نسي|جأن|ؤي |لؤي|الؤ|لال|كڤر|كت |ركت|شار|مشا| مش|جاد|رڬا',
    skr: 'تے |اں |دی |دے | ۔ |وں | تے| دا| کو|کوں| حق|دا | دی|یاں| دے|یں |ے ا|شخص| شخ|ہر |ے ۔|اصل| حا|حق |خص | ہر|صل |حاص|ہے | ہے|ال |ق ح|ل ہ| نا| کی| وچ|۔ ہ|یا |سی |ے م| او|وچ |اتے|کیت|ا ح|ادی|نال|ص ک| ات|ر ش|ہیں| یا|ں د| ای|یسی| مل|وند|کہی| کہ|ی ت|زاد|ازا| از|ندے|ں ک|ار | وی|ے ک|ئے | ان|ڻ د|نہ | کر|اون|ے و|دیا|ی د|ں ا|ے ب|ویس|وڻ |ی ن| ہو|تی |ی ۔| نہ|ی ا|یند|و ڄ|آپڻ| آپ|ا و|ے ج| کن|ے ن|ندی|ت د|ے ح|ی ک|ئی |ملک|یتے|ن ۔|تھی| تھ|ون |ں م| بچ|۔ ا|نوں|کنو|ڻے |اری|ا ا|ے ہ|ل ت| ڄئ|وق |قوق|حقو|ل ک|خلا| جی|لک |دار|یت |کرڻ|انہ|کو |ہکو| ہک|ن ا|مل | وس|ں و|پڻے| تع|ی م|اف |ے خ|نون|قنو| قن| لو|۔ ک|ری |لے |تا |یتا| قو| چا|ہاں|ڄئے|ق ت|ایہ|رڻ |ے د|ر ک| و |لاف| خل| جو|ی و|او |ہو |ئو |چئو|بچئ|یر |ہوو|ا م|ی ج|الا|ین | جا|می |نہا|ان |ات |سڱد| سڱ|یب |سیب|وسی| شا|ب د|یوڻ|ام |اوڻ|ے ت|ڻ ک| مط|ں ت| ون| کم|ن د|رکھ| رک|ڻی |ں آ|ریا|ی ہ|اد |یاد|علا|ر ہ|ں س|ی ح|جھی|ائد|ہی |لوک| ڋو| سم| سا| من| مع|بق |ابق|طاب|مطا|ھیو|ں ف|ہن | ہن|جو |و ک|ں ش|ر ت|کار|م د|ھیا| ٻا|غیر|و ل|وئی|جیا|وام|قوا|ی س| جھ|ل ا|قوم| سی|ذہب|مذہ| مذ|اے | اے|دن |ا ت|سان|نسا|انس|رے |لیم|علی|تعل|امل|ہ د|ے ر|د ا|کم |یہو|فائ|چ ا| کھ|م ت|را |ورا|پور|ں ب|ق د|ے ق|وکو|کھی|ا ک|و د|ے ذ|پڻی|بند| فر|کوئ|امی|ی ی|ائی|لاق|ایں|ہ ا| نظ|سما|ومی|ی، |ے س|ت و|ھین|ے ع|یم |سہو| سہ',
    pbu: ' د | او|او |په | په|ي۔ | حق|چې | چې|ره |ي ا|ې د| هر|نه |هر |حق | څو|وک |څوک|و ا|ه د|ه ا|۔ ه|ه و| شي| لر|ي چ|و د|ري |لري|ق ل| کښ|وي |ښې |کښې|ه ک|غه |لو |ر څ|سره| سر|ه پ| ټو|و پ|له |يت |ټول|يا |کړي| کو|خه |ي، |دي | له| از|د م| هي| وا| يا| څخ|ازا|د ا|ولو|ه ت|څخه| کړ|ول |هغه|ه ش|ي د| هغ|کول|زاد|نو | وي|و ي|ه ب|شي۔|دې |يو | دي|ته |خپل| پر|اد |د د|ک ح| تو|ه م|ګه |ه ه|قوق|حقو|و م|ه ح|د ه| تر| مس|شي | نه|ړي۔|ني |د پ|واد|ې پ|ادي|ولن| يو|د ت|ونو|وګه|ي و|لي | دا|يد | با|تون| خپ|ي پ|توګ|ار |اند|يوا|ې و|دان| بر|ړي | عم|انه| ده|يڅ |هيڅ|امي|لني|بعي|ډول| ډو|ه ل|ايد|باي|اتو|ه ګ| تا|پل | مل|ايت|وم |ون | لا|هيو| شو| دغ|م د|ده |ې ا|ان | ته|کار|تو |مي |اره|اوي|ساو|مسا|نون|دهغ|و ت|ي ش|انو| مح|ين |اخل| ګټ|شوي|دغه|و ح|وي،|نيز|سي |اسي|وند|قو |وقو|و ک|ونه|ومي| وک|ي ت| ان|قان|ندې|و ر|ک د|ه ي|مين|پر |ټه |لام|غو |هغو|د ټ|و ه|ل ت|لے |ولے|وون|کي |رو |ن ک|موم|وکړ|پار|ن ش|من | نو| وړ| قا|ې چ| وس|څ څ|شخص| شخ|ژون| ژو|تر |ګټه|و څ|هم |عقي|رته| ور|بل | بل|و ب|ه س|ښوو| ښو| کا|ې ک|و س|اده|ونک| غو|دو |و ن|ت ک|مل |عمو|ل ه| پي|وسي|ړان|وړا|يز |خصي|ي م|ا ب|ادا|ه ن|خلي|واخ|ديو|، د|د ق| هم|ا د| بي|تبع| تب|ه چ| عق|پلو|و ل| را|د ب|راي| دخ|نې |نکي|ت د|ابع| مق|د خ|وره|شرا| شر|ر م|رسر|تام|ه ټ| من|طه |سطه|اسط|واس|لې | اس|۔ د|برخ|ې ن'
  },
  Devanagari: {
    hin: 'के |प्र| प्| का| के| । |और | और|का | को|कार|ार |ति |या |को |ने |ों |िका|्रत| है| कि|ं क|है |धिक|व्य|अधि| अध|्ति| सम|्यक|ि क|क्त|ा अ|की |ा क| व्|ें | हो|यक्|सी |से |े क| या| की|में|न्त| मे|त्य|ै ।|ता |रत्|क्ष|ेक |येक|्ये|िक |र ह|भी |किस| जा| स्|क व|ा ज|िसी|मान| वि|र स|त्र|ी स|। प| कर|्रा|गा |ित | अप| पर|स्व|ी क| से|ा स|्य | अन|्त्|िया|ा ह| सा|ना |्त |प्त|समा|ान |र क|ाप्|तन्| भी| उस|राप|वतन|्वत|रों|वार|े स|था |हो |े अ|ा ।|न क| न |देश| रा|षा |अन्|त ह|्षा|्वा|जाए|ी प|करन|ा प|अपन|ष्ट| सं|े व|होग|िवा|ट्र|्ट्|ाष्|राष|सके| मा|ओं |ाओं|री |क स|े प| नि|ीय |रक्|ो स|ाएग|रने| इस|व क|पर |रता|र अ| सभ|तथा| तथ| ऐस|रा |पने|्री|िक्|किय|ा व|माज|ं औ|र उ|द्ध|सभी|श्य| जि|ाने|ार्|ारा|द्व| द्|एगा|सम्|ेश |िए |ाव |र प| दे|्तर|ा औ|ारो|यों|परा|पूर|चित|्ध |रूप| रू| सु| लि|त क|ो प|ं स|े ल|शिक| शि|वाह|े औ|जो |राध|जिस|ूर्|ी भ|ूप |ोगा|स्थ|रीय|तिक|्र |। इ|इस | उन|ले |े म|लिए|म क|कता|े य| जो|न म|अपर| पू|ो क|ा उ|ाह |नून|ानू|गी |दी |ारी|ं म|। क|तर्|ी र|श क|परि|स्त|ोई |कोई|र्य|ी अ|हित|भाव| भा|ताओ|ास |साम|विक|विव|म्म| सक|कर |ाना|ध क|निक|य क|उसक|कृत| क़ा|न स|जीव|्या|रका|्रक|ाज |न्य|्म |र्ण|क़ ह|हक़ | हक़|ी म|जिक|ाजि|ामा|क औ|मिल|ेने|लेन| ले|ये |ो अ|े ज|रिव|मय |समय|वश्|आवश| आव|ऐसी|ाध |र द|र्व|सार|प स|बन्| सह|िधा|विध|ी न|ून |क़ान',
    mar: '्या|या |त्य|याच|चा |ण्य|ाचा| व |कार|प्र| प्|िका|धिक|ार | अध|अधि|च्य|आहे| आह|ा अ|हे |ा क|ास |वा |्ये|्रत| स्|ता |ा स| अस| कर|स्व| का|ल्य|रत्|ाहि|कोण| को|िक |येक|्वा|ा व| त्|र आ|्य |त्र|ेका|क्ष|ा न| सं|ामा|ाच्|ंवा|िंव|किं| कि|ात |ष्ट|कास| या|यां|ांच|र्य|मिळ| मि| सा|व्य|ोणत|ने |े प|काम| सम|ंत्|ये | रा|समा|तंत|करण|ा आ|े क|हि |े स|ना |िळण|ून |ा प|ट्र|्ट्|ाष्|राष|ीय |व स|क्त|मान|र्व| आप|ळण्|्र्|ातं|वात|चे | वि|्षण|रण्| दे| व्|आपल|ही |ार्|नये| नय|मा |यास| जा|लेल| नि|े अ| पा|ा म|ले |ाही|बंध|े व|्यक| मा|शिक| शि|देश|ा द|माज|्री|ली |ान |ांन|पल्| हो|ा ह|षण |जे |िजे|हिज|पाह|ारा|यात|सर्| सर|रां|असल|ंबं|संब|िक्|ी प|ंच्|रक्|णत्| आण|ला |स्थ|रीय|ीत |ंना|त व|्व |क व|णे |ाचे|न क|त क|रता|्रा|याह|्त |ची |य क|द्ध|्वत|यक्|णि |आणि|स स|ंधा|क स|च्छ|य अ|त स|ीने|ोणा|करत|त्व|ील |ी अ|सार|र व|भाव|व त|थवा|अथव| अथ|े त|े ज|याय|ंचा|ेल्|ाने|ेण्|क आ|क्क|हक्| हक|ण म|ंरक|संर|न्य|ायद|ा त|त आ| उप|वस्|िवा|ेशा|साम|े य|े आ|ी व|व म|तीन|व आ|ध्य| अश|धात|कृत|्क |द्य|ित |सले|ेश |तो |ेल |ती |्ती|असे|इतर| इत|स्त|र्ण|ा ब|ेले| के|हीर|जाह|ा ज|ेत |ूर्|पूर|ेच | वा|ाजा|ी स|शा |य व| न्|याव|द्द|्ध |रून|यद्|काय|ा श|गण्|क क|राध| शा|यत्|ल अ|्यव|ी क|ाव |ा य|त्त|जिक|ाजि|रणा| धर|ा ध|भेद| बा|रका|्रक|केल|ि व|िष्|तील|योग|साध|ांत|विव|श्र| धे| मु|वतः',
    mai: 'ाक |प्र|कार| प्|ार |िका|्यक|धिक|क अ|्रत|्ति|व्य| अध|ेँ |अधि|िक | व्|आʼ | आʼ|क्त|यक्|तिक|केँ|क व|बाक|क स|छैक| छै|त्य|मे |ेक | सम|क्ष|हि |रत्|र छ|येक|्ये|न्त|वा |िके|क। |ैक।|। प| अप| स्| वि| जा|ित |सँ | हो|कोन| को|त्र|स्व| वा|क आ|ष्ट| कर|अपन|मान| का| अन|ति |्त्|नो |नहि| पर|ट्र|्य | एह|ि क|्ट्|ाष्|राष| रा|समा|ोनो|ल ज| नह|ताक|ार्|पन |तन्|वतन|्वत|्षा| कए| सा|्री| नि|ा आ|िवा| सं| दे|जाए|ीय |करब|था |एबा|ा प|ना |्वा|देश|त। |रक |क ह|ँ अ| सभ| आ |त क|चित|्त |वार|ता |ारक|माज|ा स|रीय|न्य|रता|ान |्रा|्या|रक्|ारण|परि|एल |कएल|अन्|रबा|क प|ओर |आओर| आओ|अछि| अछ|िर्|ान्|नक |होए|कर |धार|स्थ|ा अ|िमे|र आ|एहि| एक|े स|तथा| तथ| मा|िक्|शिक| शि|प्त|र्व|निर|च्छ|र्य|ँ स|क क|हो |ाहि|एत।|र प|ामा|साम|षा |ʼ स|ँ ए|ैक |द्ध|र अ|क ज|स्त|ाप्|ँ क| सक|यक |कान|हन |एहन|ेल |ोएत|त आ|ा व|। क|्तर|ाएत|्रक|हु |क उ|पूर|विव|ʼ अ|छि | ले|न प|ास |राप|धक |पएब| पए|रा |यता|रूप|न व| के|षाक|य प|त ह|जाह| ओ |भाव|पर |थवा|अथव| अथ|सम्|जिक|ाजि|ूर्|रति| दो|सभक|। स| जन|सभ |बाध|अनु|िसँ| सह|ँ व|ए स|रिव|तु |ेतु|हेत| हे|ाध |ेबा|न स|िष्|राध| अव|ित्|वास|चार| उच|ारा|न क|वक |ा क|नून|ानू|एत |री |ेओ |केओ|रण |्रस|ि द|ओ व| भे|नहु|ोनह|्थि|पत्|म्प|राज| भा|हिम| हक|ामे|्ण |र्ण|हार|ि स|क द|न अ|त अ|लेब| अभ|िश्|जक |ाजक|न आ|वाह|काज|श्य|वस्|ओहि| ओह|योग|। ए|कए |े ओ|अपर',
    bho: ' के|के |े क|ार |कार|िका|धिक|अधि| अध|ओर |आओर| आओ|े अ|े स|ा क| सं|िक |र ह|ा स| हो|र स|ें |में| मे| कर| से|नो |क्ष|से | का|। स|खे |ा। |रा | सम| सब|्रा| सक|र क|न क|वे |ौनो|कौन| कौ|चाह| चा| बा|प्र| प्|था |ि क|ति | जा| सा|े आ|पन |करे|ता |होख|त क|े। |े ब|तथा| तथ| आप|केल|सके| स्|रे |सबह|कर |आपन|े ओ|जा | पर|ष्ट| रा|ना |हवे| हव|ला |ेला|बहि| ओक|ोखे|र ब|ह। | ह।|न स|ाष्|राष|्त | और|े च|। क|संग|र आ|ट्र|्ट्|षा |मान|ा आ|ं क|ा प|्षा|रक्|हे |ाहे|ाति|ावे| जे|ही |ओकर|मिल|ित |ो स|ल ज|इखे|नइख| नइ|त्र|माज| बि|वे।|े ज|क स|िं |हिं|करा|और |े म|समा|हु | ओ |पर |े न|स्थ|रीय|्री|ला।|ाज |ान |कान|े त|िर |तिर|खात| खा|े उ|नून|ानू|ाम | सु| दे|ी क| मा|र म|प्त|िया|ाही|बा।|योग|ी स|ल ह|ून |व्य|ु क|ए क|े व|ंत्|स्व|केह|ीय |खल |साम|यता|तिक|े ह|ाप्|राप|र प|र अ| लो| सह|जे |ोग |म क|ले | नि|ेकर|ा ह|पूर|र न|ेहु|्य |या | या|देश|दी |ा म|ाव | दो|े द| पा|हि |िक्|शिक| शि|बा |िल | उप|्रत| वि| ही| ले|रो |े ख|ठन |गठन|ंगठ| मि|षण |्षण|ंरक|संर| आद| एक|ने | अप|तंत|वतं|्वत|्तर|्या|ेश |ादी|्ति|जिक|ाजि|क आ|्म |चार| उच| शा|री |ाह |याह|बिय|चित|क्त|पयो|उपय|रता|र व|न म|लोग|ह क|न प|काम| पू| इ |आदि|ईल | कई| व्|मी |ुरक|सुर| जी|धार|य स|तर्|भे |सभे| सभ|भाव|्थि|ामा|सर |र्म| को| बे|ोसर|दोस|ण क|ास |े प|जाद|आजा| आज|उचि|ग क|ारी| जर|गे |ज क|ी ब|सन |हो |ा त',
    npi: 'को |ने | र |ार |क्त|कार|प्र| प्|्यक|व्य| गर|िका| व्|्रत|धिक|्ति|यक्|अधि| अध|ाई |मा |लाई|त्य|िक | । | सम|वा | वा|क व|्ने|र्न|गर्|न्त|छ ।|तिल|रत्|त्र|ेक |येक|्ये|िला|र स|ो स| स्|मान|क्ष| वि|हुन|ा स| हु| छ |र छ|्त्|समा|स्व|। प| सं|नेछ|ुने|हरु|तन्|वतन|े अ|िने|ो अ|्वत| का|े छ|गरि| रा|्र |ति |ाको| कु|ष्ट|ना |स्त|क स|ुनै|कुन|ट्र|ले | नि|ान |छैन| छै|्ट्|ाष्|राष|तिक|छ। |ार्|ता |ित |नै |ा अ| सा|ा व|रु | मा| अन|ा र|रता|र र|हरू|ेछ |ा प|रक्|्त | पर|था | ला|परि|देश|सको| यस|माज|ामा|्रा|िवा|ाहर|ो प|्य |वार|न स|। क|नि |्षा| त्|द्ध|र ह|तथा| तथ|यस्|्यस|री |र व|पनि|रिन|ंरक|संर|भाव|ै व|सबै| सब| शि| सह|ताक|े र|त र|लाग| सु|्षण|द्द| अप|ैन |ो व|िक्|ाव |धार|्या|्रि|ा भ|एको|र म|न अ|ो ल| उस|शिक|ात्|स्थ|वाह|ूर्|श्य|ित्|रको|ारक|ुद्|तो |्तो|ाउन|कान|िएक|ा न| पन|न। |ैन।|का |ेछ।| भे|र्य|सम्|त्प|साम|रिय|चार|निज|ुन |गि |ागि|उसक| मत| अभ|पूर|र त| सक|सार|राध|परा|अपर|ुक्|जको| उप|रा |ारा|्वा|विध|्न |ा त|न ग|णको| पा| दि|क र|र प|अन्|भेद|ारम|ो आ| अर|जिक|ाजि|िय |षा |ाट |बाट| बा|ि र| छ।|त्व|त स|रू |छ र|रका|विक|र उ|ोग |्दे|रिव|सकि|ै प|रति|अनु| आव|युक|ा ग|नमा|योग|ग ग|क अ|द्व|्ध |रुद| बि|। स|उने|ान्|ा म|िको|र्द|ारी|्तर|ो ह|हित| दे|रिक|ा क| आध|राज|र्म|्ण |र्ण|ि व|्यव|विच|बै |सहि|रोज|र्स|ई उ|्प |रात|निक|मिक|च्छ|्था|विव|कता|अभि|्धा',
    mag: ' के|के |ार | हई|कार|ई। |हई।|िका|े अ|धिक|अधि| अध|र ह|े क|और | और|ा क|े स|सब | सब| कर|ें |था |में| मे|तथा| तथ|िक | हो| सम|क्ष|ना |ब क|र स| सं|ा स|कर | भी|। स| सा| से| का| अप|्रा|प्र| प्|से |भी | को|त क| पर|रा |क ह|पन |अपन| सक|या |ति |र क|ी क| या|करे| जा|रे | ओक|्त |सक |नो |ान |मान|ओकर|ा प|न क|ेल | ना|। क|रक्| स्|ही |होए| एक|पर |दी |ट्र|ता |व्य|हई | शा|े उ| दे|त्र|ादी| रा| ही|कान|ित |म क|ल ज|ाम |ी स|े भ|न स|माज|ष्ट|षा | ले|क स|बे |वे |ावे|मिल|र म|्य |ा ह|ला |प्त|नून|ानू|जा |ेकर|्षा|्रत|ंत्|र औ|ोई |कोई|्ट्|ाष्|राष| मा|रो | जे|करा|ोए |ाप्|राप|समा|ून |ो स|स्व|्ति|साम|ोनो|कोन| व्|र अ|्म | वि| सह|े म|क्त|योग|र व|काम|ल ह| नि|देश|पूर|वार| इ |ंरक|संर|ए क|र प| सु|तंत|वतं|्वत|ा म|व क|े व|ाथ |साथ| दो|होब| पा|ो क|े ब|ोग | उप|स्त|परि|न प|े त|्तर|लेल|े ओ|चाह| चा|य क|वा |ेश |य स|न ह|षण |ा ब|। त|एक |एल |ीय |केक|े ह|र आ|ि क|स्थ|जिक|ाजि|ामा|रीय|्री|तिक|ाति| बि|चार|े आ|ास | उच|ा त|यक्|्यक|िल |मय |समय|शाद|पयो|उपय|े ख|रिव| पू|े ल|े च|ौनो|कौन| कौ|ं क|संग|न द|ं स|ण प|्षण|र न|े न|ो भ|करो|ा औ|रता|ाव |भाव|क औ|र्म|ोसर|दोस|ण क|े प|न औ|ब ह|िक्|शिक| शि|ाबे|निय|चित|उचि|ित्|ग क|े। |त स|ी श|ं श|एकर|। ए|तन | ओ |री |्र |जे |क क| सी|सन |िवा| अन|ूरा| बच|ए। | बे|त ह| तक| मि|धार|थवा|अथव| अथ|िला|्वा|ि म| आद|ने |कएल| कए|्या'
  }
}


/***/ }),

/***/ "./node_modules/franc-min/expressions.js":
/*!***********************************************!*\
  !*** ./node_modules/franc-min/expressions.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expressions: () => (/* binding */ expressions)
/* harmony export */ });
// This file is generated by `build.js`.
/** @type {Record<string, RegExp>} */
const expressions = {
  cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,
  Latin:
    /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,
  Cyrillic:
    /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,
  Arabic:
    /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
  ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
  Devanagari:
    /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,
  jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[\u3400-\u4DB5\u4E00-\u9FAF]/g,
  jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,
  kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
  tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
  tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
  guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
  kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,
  mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
  mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
  pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
  amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,
  tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
  sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
  ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g
}


/***/ }),

/***/ "./node_modules/franc-min/index.js":
/*!*****************************************!*\
  !*** ./node_modules/franc-min/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   franc: () => (/* binding */ franc),
/* harmony export */   francAll: () => (/* binding */ francAll)
/* harmony export */ });
/* harmony import */ var trigram_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! trigram-utils */ "./node_modules/trigram-utils/index.js");
/* harmony import */ var _expressions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressions.js */ "./node_modules/franc-min/expressions.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./node_modules/franc-min/data.js");
// This file is generated by `build.js`
/**
 * @typedef {import('trigram-utils').TrigramTuple} TrigramTuple
 *
 * @typedef Options
 * @property {Array<string>} [only]
 *   Languages to allow.
 * @property {Array<string>} [ignore]
 *   Languages to ignore.
 * @property {number} [minLength=10]
 *   Minimum length to accept.
 */

/* Load `trigram-utils`. */

/* Load `expressions` (regular expressions matching
 * scripts). */

/* Load `data` (trigram information per language,
 * per script). */


/* Maximum sample length. */
const MAX_LENGTH = 2048

/* Minimum sample length. */
const MIN_LENGTH = 10

/* The maximum distance to add when a given trigram does
 * not exist in a trigram dictionary. */
const MAX_DIFFERENCE = 300

const own = {}.hasOwnProperty

/* Construct trigram dictionaries. */

/** @type {string} */
let script

/** @type {Record<string, Record<string, Record<string, number>>>} */
const numericData = {}

for (script in _data_js__WEBPACK_IMPORTED_MODULE_0__.data) {
  if (own.call(_data_js__WEBPACK_IMPORTED_MODULE_0__.data, script)) {
    const languages = _data_js__WEBPACK_IMPORTED_MODULE_0__.data[script]
    /** @type {string} */
    let name

    numericData[script] = {}

    for (name in languages) {
      if (own.call(languages, name)) {
        const model = languages[name].split('|')
        /** @type {Record<string, number>} */
        const trigrams = {}
        let weight = model.length

        while (weight--) {
          trigrams[model[weight]] = weight
        }

        numericData[script][name] = trigrams
      }
    }
  }
}

/**
 * Get the most probable language for the given value.
 *
 * @param {string} [value]
 *   The value to test.
 * @param {Options} [options]
 *   Configuration.
 * @return {string}
 *  The most probable language.
 */
function franc(value, options) {
  return francAll(value, options)[0][0]
}

/**
 * Get a list of probable languages the given value is
 * written in.
 *
 * @param {string} [value]
 *   The value to test.
 * @param {Options} [options]
 *   Configuration.
 * @return {Array<TrigramTuple>}
 *   An array containing language—distance tuples.
 */
function francAll(value, options = {}) {
  /** @type {Array<string>} */
  // @ts-expect-error: `whitelist` is from long ago.
  const only = [...(options.whitelist || []), ...(options.only || [])]
  /** @type {Array<string>} */
  // @ts-expect-error: `blacklist` is from long ago.
  const ignore = [...(options.blacklist || []), ...(options.ignore || [])]
  const minLength =
    options.minLength !== null && options.minLength !== undefined
      ? options.minLength
      : MIN_LENGTH

  if (!value || value.length < minLength) {
    return und()
  }

  value = value.slice(0, MAX_LENGTH)

  /* Get the script which characters occur the most
   * in `value`. */
  const script = getTopScript(value, _expressions_js__WEBPACK_IMPORTED_MODULE_1__.expressions)

  /* One languages exists for the most-used script. */
  if (!script[0] || !(script[0] in numericData)) {
    /* If no matches occured, such as a digit only string,
     * or because the language is ignored, exit with `und`. */
    if (!script[0] || script[1] === 0 || !allow(script[0], only, ignore)) {
      return und()
    }

    return singleLanguageTuples(script[0])
  }

  /* Get all distances for a given script, and
   * normalize the distance values. */
  return normalize(
    value,
    getDistances((0,trigram_utils__WEBPACK_IMPORTED_MODULE_2__.asTuples)(value), numericData[script[0]], only, ignore)
  )
}

/**
 * Normalize the difference for each tuple in
 * `distances`.
 *
 * @param {string} value
 *   Value to normalize.
 * @param {Array<TrigramTuple>} distances
 *   List of distances.
 * @return {Array<TrigramTuple>}
 *   Normalized distances.
 */
function normalize(value, distances) {
  const min = distances[0][1]
  const max = value.length * MAX_DIFFERENCE - min
  let index = -1

  while (++index < distances.length) {
    distances[index][1] = 1 - (distances[index][1] - min) / max || 0
  }

  return distances
}

/**
 * From `scripts`, get the most occurring expression for
 * `value`.
 *
 * @param {string} value
 *   Value to check.
 * @param {Record<string, RegExp>} scripts
 *   Top-Scripts.
 * @return {[string|undefined, number]}
 *   Top script and its occurrence percentage.
 */
function getTopScript(value, scripts) {
  let topCount = -1
  /** @type {string|undefined} */
  let topScript
  /** @type {string} */
  let script

  for (script in scripts) {
    if (own.call(scripts, script)) {
      const count = getOccurrence(value, scripts[script])

      if (count > topCount) {
        topCount = count
        topScript = script
      }
    }
  }

  return [topScript, topCount]
}

/**
 * Get the occurrence ratio of `expression` for `value`.
 *
 * @param {string} value
 *   Value to check.
 * @param {RegExp} expression
 *   Code-point expression.
 * @return {number}
 *   Float between 0 and 1.
 */
function getOccurrence(value, expression) {
  const count = value.match(expression)

  return (count ? count.length : 0) / value.length || 0
}

/**
 * Get the distance between an array of trigram—count
 * tuples, and multiple trigram dictionaries.
 *
 * @param {Array<TrigramTuple>} trigrams
 *   An array containing trigram—count tuples.
 * @param {Record<string, Record<string, number>>} languages
 *   Multiple trigrams to test against.
 * @param {Array<string>} only
 *   Allowed languages; if non-empty, only included languages are kept.
 * @param {Array<string>} ignore
 *   Disallowed languages; included languages are ignored.
 * @return {Array<TrigramTuple>} An array
 *   containing language—distance tuples.
 */
function getDistances(trigrams, languages, only, ignore) {
  languages = filterLanguages(languages, only, ignore)

  /** @type {Array<TrigramTuple>} */
  const distances = []
  /** @type {string} */
  let language

  if (languages) {
    for (language in languages) {
      if (own.call(languages, language)) {
        distances.push([language, getDistance(trigrams, languages[language])])
      }
    }
  }

  return distances.length === 0 ? und() : distances.sort(sort)
}

/**
 * Get the distance between an array of trigram—count
 * tuples, and a language dictionary.
 *
 * @param {Array<TrigramTuple>} trigrams
 *   An array containing trigram—count tuples.
 * @param {Record<string, number>} model
 *   Object containing weighted trigrams.
 * @return {number}
 *   The distance between the two.
 */
function getDistance(trigrams, model) {
  let distance = 0
  let index = -1

  while (++index < trigrams.length) {
    const trigram = trigrams[index]
    let difference = MAX_DIFFERENCE

    if (trigram[0] in model) {
      difference = trigram[1] - model[trigram[0]] - 1

      if (difference < 0) {
        difference = -difference
      }
    }

    distance += difference
  }

  return distance
}

/**
 * Filter `languages` by removing languages in
 * `ignore`, or including languages in `only`.
 *
 * @param {Record<string, Record<string, number>>} languages
 *   Languages to filter
 * @param {Array<string>} only
 *   Allowed languages; if non-empty, only included languages are kept.
 * @param {Array<string>} ignore
 *   Disallowed languages; included languages are ignored.
 * @return {Record<string, Record<string, number>>}
 *   Filtered array of languages.
 */
function filterLanguages(languages, only, ignore) {
  if (only.length === 0 && ignore.length === 0) {
    return languages
  }

  /** @type {Record<string, Record<string, number>>} */
  const filteredLanguages = {}
  /** @type {string} */
  let language

  for (language in languages) {
    if (allow(language, only, ignore)) {
      filteredLanguages[language] = languages[language]
    }
  }

  return filteredLanguages
}

/**
 * Check if `language` can match according to settings.
 *
 * @param {string} language
 *   Languages to filter
 * @param {Array<string>} only
 *   Allowed languages; if non-empty, only included languages are kept.
 * @param {Array<string>} ignore
 *   Disallowed languages; included languages are ignored.
 * @return {boolean}
 *   Whether `language` can match
 */
function allow(language, only, ignore) {
  if (only.length === 0 && ignore.length === 0) {
    return true
  }

  return (
    (only.length === 0 || only.includes(language)) && !ignore.includes(language)
  )
}

/**
 * Create a single `und` tuple.
 */
function und() {
  return singleLanguageTuples('und')
}

/**
 * Create a single tuple as a list of tuples from a given language code.
 *
 * @param {string} language
 * @returns {Array<TrigramTuple>}
 */
function singleLanguageTuples(language) {
  return [[language, 1]]
}

/**
 * Deep regular sort on the number at `1` in both objects.
 *
 * @param {TrigramTuple} a
 * @param {TrigramTuple} b
 */
function sort(a, b) {
  return a[1] - b[1]
}


/***/ }),

/***/ "./node_modules/n-gram/index.js":
/*!**************************************!*\
  !*** ./node_modules/n-gram/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bigram: () => (/* binding */ bigram),
/* harmony export */   nGram: () => (/* binding */ nGram),
/* harmony export */   trigram: () => (/* binding */ trigram)
/* harmony export */ });
const bigram = nGram(2)
const trigram = nGram(3)

/**
 * Factory returning a function that converts a value string to n-grams.
 *
 * @param {number} n
 */
function nGram(n) {
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 1 ||
    n === Number.POSITIVE_INFINITY
  ) {
    throw new Error('`' + n + '` is not a valid argument for `n-gram`')
  }

  return grams

  /**
   * Create n-grams from a given value.
   *
   * @template {string|Array<unknown>} T
   * @param {T} [value]
   * @returns {T extends any[] ? T : Array<string>}
   */
  function grams(value) {
    /** @type {T extends any[] ? T : Array<string>} */
    // @ts-expect-error: pretty sure this is fine.
    const nGrams = []

    if (value === null || value === undefined) {
      return nGrams
    }

    const source = typeof value.slice === 'function' ? value : String(value)
    let index = source.length - n + 1

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = source.slice(index, index + n)
    }

    return nGrams
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/trigram-utils/index.js":
/*!*********************************************!*\
  !*** ./node_modules/trigram-utils/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asDictionary: () => (/* binding */ asDictionary),
/* harmony export */   asTuples: () => (/* binding */ asTuples),
/* harmony export */   clean: () => (/* binding */ clean),
/* harmony export */   trigrams: () => (/* binding */ trigrams),
/* harmony export */   tuplesAsDictionary: () => (/* binding */ tuplesAsDictionary)
/* harmony export */ });
/* harmony import */ var n_gram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! n-gram */ "./node_modules/n-gram/index.js");
/* harmony import */ var collapse_white_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! collapse-white-space */ "./node_modules/collapse-white-space/index.js");
/**
 * @typedef {[string, number]} TrigramTuple
 * @typedef {TrigramTuple[]} TrigramTuples
 * @typedef {Record<string, number>} TrigramDictionary
 */




const own = {}.hasOwnProperty

/**
 * Clean `value`.
 * Removed general non-important (as in, for language detection) punctuation
 * marks, symbols, and digits.
 *
 * @param {string|null} [value]
 * @returns {string}
 */
function clean(value) {
  if (value === null || value === undefined) {
    return ''
  }

  return (0,collapse_white_space__WEBPACK_IMPORTED_MODULE_0__.collapseWhiteSpace)(String(value).replace(/[\u0021-\u0040]+/g, ' '))
    .trim()
    .toLowerCase()
}

/**
 * Get clean, padded, trigrams.
 *
 * @param {string} [value]
 * @returns {string[]}
 */
function trigrams(value) {
  return (0,n_gram__WEBPACK_IMPORTED_MODULE_1__.trigram)(' ' + clean(value) + ' ')
}

/**
 * Get an `Object` with trigrams as its attributes, and their occurence count as
 * their values.
 *
 * @param {string} value
 * @returns {TrigramDictionary}
 */
function asDictionary(value) {
  const values = trigrams(value)
  /** @type {TrigramDictionary} */
  const dictionary = {}
  let index = -1

  while (++index < values.length) {
    if (own.call(dictionary, values[index])) {
      dictionary[values[index]]++
    } else {
      dictionary[values[index]] = 1
    }
  }

  return dictionary
}

/**
 * Get an `Array` containing trigram--count tuples from a given value.
 *
 * @param {string} value
 * @returns {TrigramTuples}
 */
function asTuples(value) {
  const dictionary = asDictionary(value)
  /** @type {TrigramTuples} */
  const tuples = []
  /** @type {string} */
  let trigram

  for (trigram in dictionary) {
    if (own.call(dictionary, trigram)) {
      tuples.push([trigram, dictionary[trigram]])
    }
  }

  tuples.sort(sort)

  return tuples
}

/**
 * Get an `Array` containing trigram--count tuples from a given value.
 *
 * @param {TrigramTuples} tuples
 * @returns {TrigramDictionary}
 */
function tuplesAsDictionary(tuples) {
  /** @type {TrigramDictionary} */
  const dictionary = {}
  let index = -1

  while (++index < tuples.length) {
    dictionary[tuples[index][0]] = tuples[index][1]
  }

  return dictionary
}

/**
 * Deep regular sort on item at `1` in both `Object`s.
 *
 * @param {TrigramTuple} a
 * @param {TrigramTuple} b
 * @returns {number}
 */
function sort(a, b) {
  return a[1] - b[1]
}


/***/ }),

/***/ "./src/Pokemon Solid.ttf":
/*!*******************************!*\
  !*** ./src/Pokemon Solid.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d60be1f7ff5fcc21fc1.ttf";

/***/ }),

/***/ "./src/pokedex.js":
/*!************************!*\
  !*** ./src/pokedex.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pokemons: () => (/* binding */ pokemons)
/* harmony export */ });
const pokemons = {
	bulbasaur: 1,
	ivysaur: 2,
	venusaur: 3,
	charmander: 4,
	charmeleon: 5,
	charizard: 6,
	squirtle: 7,
	wartortle: 8,
	blastoise: 9,
	caterpie: 10,
	metapod: 11,
	butterfree: 12,
	weedle: 13,
	kakuna: 14,
	beedrill: 15,
	pidgey: 16,
	pidgeotto: 17,
	pidgeot: 18,
	rattata: 19,
	raticate: 20,
	spearow: 21,
	fearow: 22,
	ekans: 23,
	arbok: 24,
	pikachu: 25,
	raichu: 26,
	sandshrew: 27,
	sandslash: 28,
	nidoran_f: 29,
	nidorina: 30,
	nidoqueen: 31,
	nidoran_m: 32,
	nidorino: 33,
	nidoking: 34,
	clefairy: 35,
	clefable: 36,
	vulpix: 37,
	ninetales: 38,
	jigglypuff: 39,
	wigglytuff: 40,
	zubat: 41,
	golbat: 42,
	oddish: 43,
	gloom: 44,
	vileplume: 45,
	paras: 46,
	parasect: 47,
	venonat: 48,
	venomoth: 49,
	diglett: 50,
	dugtrio: 51,
	meowth: 52,
	persian: 53,
	psyduck: 54,
	golduck: 55,
	mankey: 56,
	primeape: 57,
	growlithe: 58,
	arcanine: 59,
	poliwag: 60,
	poliwhirl: 61,
	poliwrath: 62,
	abra: 63,
	kadabra: 64,
	alakazam: 65,
	machop: 66,
	machoke: 67,
	machamp: 68,
	bellsprout: 69,
	weepinbell: 70,
	victreebel: 71,
	tentacool: 72,
	tentacruel: 73,
	geodude: 74,
	graveler: 75,
	golem: 76,
	ponyta: 77,
	rapidash: 78,
	slowpoke: 79,
	slowbro: 80,
	magnemite: 81,
	magneton: 82,
	farfetchd: 83,
	doduo: 84,
	dodrio: 85,
	seel: 86,
	dewgong: 87,
	grimer: 88,
	muk: 89,
	shellder: 90,
	cloyster: 91,
	gastly: 92,
	haunter: 93,
	gengar: 94,
	onix: 95,
	drowzee: 96,
	hypno: 97,
	krabby: 98,
	kingler: 99,
	voltorb: 100,
	electrode: 101,
	exeggcute: 102,
	exeggutor: 103,
	cubone: 104,
	marowak: 105,
	hitmonlee: 106,
	hitmonchan: 107,
	lickitung: 108,
	koffing: 109,
	weezing: 110,
	rhyhorn: 111,
	rhydon: 112,
	chansey: 113,
	tangela: 114,
	kangaskhan: 115,
	horsea: 116,
	seadra: 117,
	goldeen: 118,
	seaking: 119,
	staryu: 120,
	starmie: 121,
	mr_mime: 122,
	scyther: 123,
	jynx: 124,
	electabuzz: 125,
	magmar: 126,
	pinsir: 127,
	tauros: 128,
	magikarp: 129,
	gyarados: 130,
	lapras: 131,
	ditto: 132,
	eevee: 133,
	vaporeon: 134,
	jolteon: 135,
	flareon: 136,
	porygon: 137,
	omanyte: 138,
	omastar: 139,
	kabuto: 140,
	kabutops: 141,
	aerodactyl: 142,
	snorlax: 143,
	articuno: 144,
	zapdos: 145,
	moltres: 146,
	dratini: 147,
	dragonair: 148,
	dragonite: 149,
	mewtwo: 150,
	mew: 151,
	chikorita: 152,
	bayleef: 153,
	meganium: 154,
	cyndaquil: 155,
	quilava: 156,
	typhlosion: 157,
	totodile: 158,
	croconaw: 159,
	feraligatr: 160,
	sentret: 161,
	furret: 162,
	hoothoot: 163,
	noctowl: 164,
	ledyba: 165,
	ledian: 166,
	spinarak: 167,
	ariados: 168,
	crobat: 169,
	chinchou: 170,
	lanturn: 171,
	pichu: 172,
	cleffa: 173,
	igglybuff: 174,
	togepi: 175,
	togetic: 176,
	natu: 177,
	xatu: 178,
	mareep: 179,
	flaaffy: 180,
	ampharos: 181,
	bellossom: 182,
	marill: 183,
	azumarill: 184,
	sudowoodo: 185,
	politoed: 186,
	hoppip: 187,
	skiploom: 188,
	jumpluff: 189,
	aipom: 190,
	sunkern: 191,
	sunflora: 192,
	yanma: 193,
	wooper: 194,
	quagsire: 195,
	espeon: 196,
	umbreon: 197,
	murkrow: 198,
	slowking: 199,
	misdreavus: 200,
	unown: 201,
	wobbuffet: 202,
	girafarig: 203,
	pineco: 204,
	forretress: 205,
	dunsparce: 206,
	gligar: 207,
	steelix: 208,
	snubbull: 209,
	granbull: 210,
	qwilfish: 211,
	scizor: 212,
	shuckle: 213,
	heracross: 214,
	sneasel: 215,
	teddiursa: 216,
	ursaring: 217,
	slugma: 218,
	magcargo: 219,
	swinub: 220,
	piloswine: 221,
	corsola: 222,
	remoraid: 223,
	octillery: 224,
	delibird: 225,
	mantine: 226,
	skarmory: 227,
	houndour: 228,
	houndoom: 229,
	kingdra: 230,
	phanpy: 231,
	donphan: 232,
	porygon2: 233,
	stantler: 234,
	smeargle: 235,
	tyrogue: 236,
	hitmontop: 237,
	smoochum: 238,
	elekid: 239,
	magby: 240,
	miltank: 241,
	blissey: 242,
	raikou: 243,
	entei: 244,
	suicune: 245,
	larvitar: 246,
	pupitar: 247,
	tyranitar: 248,
	lugia: 249,
	"ho-oh": 250,
	celebi: 251,
	treecko: 252,
	grovyle: 253,
	sceptile: 254,
	torchic: 255,
	combusken: 256,
	blaziken: 257,
	mudkip: 258,
	marshtomp: 259,
	swampert: 260,
	poochyena: 261,
	mightyena: 262,
	zigzagoon: 263,
	linoone: 264,
	wurmple: 265,
	silcoon: 266,
	beautifly: 267,
	cascoon: 268,
	dustox: 269,
	lotad: 270,
	lombre: 271,
	ludicolo: 272,
	seedot: 273,
	nuzleaf: 274,
	shiftry: 275,
	taillow: 276,
	swellow: 277,
	wingull: 278,
	pelipper: 279,
	ralts: 280,
	kirlia: 281,
	gardevoir: 282,
	surskit: 283,
	masquerain: 284,
	shroomish: 285,
	breloom: 286,
	slakoth: 287,
	vigoroth: 288,
	slaking: 289,
	nincada: 290,
	ninjask: 291,
	shedinja: 292,
	whismur: 293,
	loudred: 294,
	exploud: 295,
	makuhita: 296,
	hariyama: 297,
	azurill: 298,
	nosepass: 299,
	skitty: 300,
	delcatty: 301,
	sableye: 302,
	mawile: 303,
	aron: 304,
	lairon: 305,
	aggron: 306,
	meditite: 307,
	medicham: 308,
	electrike: 309,
	manectric: 310,
	plusle: 311,
	minun: 312,
	volbeat: 313,
	illumise: 314,
	roselia: 315,
	gulpin: 316,
	swalot: 317,
	carvanha: 318,
	sharpedo: 319,
	wailmer: 320,
	wailord: 321,
	numel: 322,
	camerupt: 323,
	torkoal: 324,
	spoink: 325,
	grumpig: 326,
	spinda: 327,
	trapinch: 328,
	vibrava: 329,
	flygon: 330,
	cacnea: 331,
	cacturne: 332,
	swablu: 333,
	altaria: 334,
	zangoose: 335,
	seviper: 336,
	lunatone: 337,
	solrock: 338,
	barboach: 339,
	whiscash: 340,
	corphish: 341,
	crawdaunt: 342,
	baltoy: 343,
	claydol: 344,
	lileep: 345,
	cradily: 346,
	anorith: 347,
	armaldo: 348,
	feebas: 349,
	milotic: 350,
	castform: 351,
	kecleon: 352,
	shuppet: 353,
	banette: 354,
	duskull: 355,
	dusclops: 356,
	tropius: 357,
	chimecho: 358,
	absol: 359,
	wynaut: 360,
	snorunt: 361,
	glalie: 362,
	spheal: 363,
	sealeo: 364,
	walrein: 365,
	clamperl: 366,
	huntail: 367,
	gorebyss: 368,
	relicanth: 369,
	luvdisc: 370,
	bagon: 371,
	shelgon: 372,
	salamence: 373,
	beldum: 374,
	metang: 375,
	metagross: 376,
	regirock: 377,
	regice: 378,
	registeel: 379,
	latias: 380,
	latios: 381,
	kyogre: 382,
	groudon: 383,
	rayquaza: 384,
	jirachi: 385,
	deoxys: 386,
	turtwig: 387,
	grotle: 388,
	torterra: 389,
	chimchar: 390,
	monferno: 391,
	infernape: 392,
	piplup: 393,
	prinplup: 394,
	empoleon: 395,
	starly: 396,
	staravia: 397,
	staraptor: 398,
	bidoof: 399,
	bibarel: 400,
	kricketot: 401,
	kricketune: 402,
	shinx: 403,
	luxio: 404,
	luxray: 405,
	budew: 406,
	roserade: 407,
	cranidos: 408,
	rampardos: 409,
	shieldon: 410,
	bastiodon: 411,
	burmy: 412,
	wormadam: 413,
	mothim: 414,
	combee: 415,
	vespiquen: 416,
	pachirisu: 417,
	buizel: 418,
	floatzel: 419,
	cherubi: 420,
	cherrim: 421,
	shellos: 422,
	gastrodon: 423,
	ambipom: 424,
	drifloon: 425,
	drifblim: 426,
	buneary: 427,
	lopunny: 428,
	mismagius: 429,
	honchkrow: 430,
	glameow: 431,
	purugly: 432,
	chingling: 433,
	stunky: 434,
	skuntank: 435,
	bronzor: 436,
	bronzong: 437,
	bonsly: 438,
	mimejr: 439,
	happiny: 440,
	chatot: 441,
	spiritomb: 442,
	gible: 443,
	gabite: 444,
	garchomp: 445,
	munchlax: 446,
	riolu: 447,
	lucario: 448,
	hippopotas: 449,
	hippowdon: 450,
	skorupi: 451,
	drapion: 452,
	croagunk: 453,
	toxicroak: 454,
	carnivine: 455,
	finneon: 456,
	lumineon: 457,
	mantyke: 458,
	snover: 459,
	abomasnow: 460,
	weavile: 461,
	magnezone: 462,
	lickilicky: 463,
	rhyperior: 464,
	tangrowth: 465,
	electivire: 466,
	magmortar: 467,
	togekiss: 468,
	yanmega: 469,
	leafeon: 470,
	glaceon: 471,
	gliscor: 472,
	mamoswine: 473,
	porygonZ: 474,
	gallade: 475,
	probopass: 476,
	dusknoir: 477,
	froslass: 478,
	rotom: 479,
	uxie: 480,
	mesprit: 481,
	azelf: 482,
	dialga: 483,
	palkia: 484,
	heatran: 485,
	regigigas: 486,
	giratina: 487,
	cresselia: 488,
	phione: 489,
	manaphy: 490,
	darkrai: 491,
	shaymin: 492,
	arceus: 493,
	victini: 494,
	snivy: 495,
	servine: 496,
	serperior: 497,
	tepig: 498,
	pignite: 499,
	emboar: 500,
	oshawott: 501,
	dewott: 502,
	samurott: 503,
	patrat: 504,
	watchog: 505,
	lillipup: 506,
	herdier: 507,
	stoutland: 508,
	purrloin: 509,
	liepard: 510,
	pansage: 511,
	simisage: 512,
	pansear: 513,
	simisear: 514,
	panpour: 515,
	simipour: 516,
	munna: 517,
	musharna: 518,
	pidove: 519,
	tranquill: 520,
	unfezant: 521,
	blitzle: 522,
	zebstrika: 523,
	roggenrola: 524,
	boldore: 525,
	gigalith: 526,
	woobat: 527,
	swoobat: 528,
	drilbur: 529,
	excadrill: 530,
	audino: 531,
	timburr: 532,
	gurdurr: 533,
	conkeldurr: 534,
	tympole: 535,
	palpitoad: 536,
	seismitoad: 537,
	throh: 538,
	sawk: 539,
	sewaddle: 540,
	swadloon: 541,
	leavanny: 542,
	venipede: 543,
	whirlipede: 544,
	scolipede: 545,
	cottonee: 546,
	whimsicott: 547,
	petilil: 548,
	lilligant: 549,
	basculin: 550,
	sandile: 551,
	krokorok: 552,
	krookodile: 553,
	darumaka: 554,
	darmanitan: 555,
	maractus: 556,
	dwebble: 557,
	crustle: 558,
	scraggy: 559,
	scrafty: 560,
	sigilyph: 561,
	yamask: 562,
	cofagrigus: 563,
	tirtouga: 564,
	carracosta: 565,
	archen: 566,
	archeops: 567,
	trubbish: 568,
	garbodor: 569,
	zorua: 570,
	zoroark: 571,
	minccino: 572,
	cinccino: 573,
	gothita: 574,
	gothorita: 575,
	gothitelle: 576,
	solosis: 577,
	duosion: 578,
	reuniclus: 579,
	ducklett: 580,
	swanna: 581,
	vanillite: 582,
	vanillish: 583,
	vanilluxe: 584,
	deerling: 585,
	sawsbuck: 586,
	emolga: 587,
	karrablast: 588,
	escavalier: 589,
	foongus: 590,
	amoonguss: 591,
	frillish: 592,
	jellicent: 593,
	alomomola: 594,
	joltik: 595,
	galvantula: 596,
	ferroseed: 597,
	ferrothorn: 598,
	klink: 599,
	klang: 600,
	klinklang: 601,
	tynamo: 602,
	eelektrik: 603,
	eelektross: 604,
	elgyem: 605,
	beheeyem: 606,
	litwick: 607,
	lampent: 6058,
	chandelure: 609,
	axew: 610,
	fraxure: 611,
	haxorus: 612,
	cubchoo: 613,
	beartic: 614,
	cryogonal: 615,
	shelmet: 616,
	accelgor: 617,
	stunfisk: 618,
	mienfoo: 619,
	mienshao: 620,
	druddigon: 621,
	golett: 622,
	golurk: 623,
	pawniard: 624,
	bisharp: 625,
	bouffalant: 626,
	rufflet: 627,
	braviary: 628,
	vullaby: 629,
	mandibuzz: 630,
	heatmor: 631,
	durant: 632,
	deino: 633,
	zweilous: 634,
	hydreigon: 635,
	larvesta: 636,
	volcarona: 637,
	cobalion: 638,
	terrakion: 639,
	virizion: 640,
	tornadus: 641,
	thundurus: 642,
	reshiram: 643,
	zekrom: 644,
	landorus: 645,
	kyurem: 646,
	keldeo: 647,
	meloetta: 648,
	genesect: 649,
	chespin: 650,
	quilladin: 651,
	chesnaught: 652,
	fennekin: 653,
	braixen: 654,
	delphox: 655,
	froakie: 656,
	frogadier: 657,
	greninja: 658,
	bunnelby: 659,
	diggersby: 660,
	fletchling: 661,
	fletchinder: 662,
	talonflame: 663,
	scatterbug: 664,
	spewpa: 665,
	vivillon: 666,
	litleo: 667,
	pyroar: 668,
	flabebe: 669,
	floette: 670,
	florges: 671,
	skiddo: 672,
	gogoat: 673,
	pancham: 674,
	pangoro: 675,
	furfrou: 676,
	espurr: 677,
	meowstic: 678,
	honedge: 679,
	doublade: 680,
	aegislash: 681,
	spritzee: 682,
	aromatisse: 683,
	swirlix: 684,
	slurpuff: 685,
	inkay: 686,
	malamar: 687,
	binacle: 688,
	barbaracle: 689,
	skrelp: 690,
	dragalge: 691,
	clauncher: 692,
	clawitzer: 693,
	helioptile: 694,
	heliolisk: 695,
	tyrunt: 696,
	tyrantrum: 697,
	amaura: 698,
	aurorus: 699,
	sylveon: 700,
	hawlucha: 701,
	dedenne: 702,
	carbink: 703,
	goomy: 704,
	sliggoo: 705,
	goodra: 706,
	klefki: 707,
	phantump: 708,
	trevenant: 709,
	pumpkaboo: 710,
	gourgeist: 711,
	bergmite: 712,
	avalugg: 713,
	noibat: 714,
	noivern: 715,
	xerneas: 716,
	yveltal: 717,
	zygarde: 718,
	diancie: 719,
	hoopa: 720,
	volcanion: 721,
	rowlet: 722,
	dartrix: 723,
	decidueye: 724,
	litten: 725,
	torracat: 726,
	incineroar: 727,
	popplio: 728,
	brionne: 729,
	primarina: 730,
	pikipek: 731,
	trumbeak: 732,
	toucannon: 733,
	yungoos: 734,
	gumshoos: 735,
	grubbin: 736,
	charjabug: 737,
	vikavolt: 738,
	crabrawler: 739,
	crabominable: 740,
	oricorio: 741,
	cutiefly: 742,
	ribombee: 743,
	rockruff: 744,
	lycanroc: 745,
	wishiwashi: 746,
	mareanie: 747,
	toxapex: 748,
	mudbray: 749,
	mudsdale: 750,
	dewpider: 751,
	araquanid: 752,
	fomantis: 753,
	lurantis: 754,
	morelull: 755,
	shiinotic: 756,
	salandit: 757,
	salazzle: 758,
	stufful: 759,
	bewear: 760,
	bounsweet: 761,
	steenee: 762,
	tsareena: 763,
	comfey: 764,
	oranguru: 765,
	passimian: 766,
	wimpod: 767,
	golisopod: 768,
	sandygast: 769,
	palossand: 770,
	pyukumuku: 771,
	typeNull: 772,
	silvally: 773,
	minior: 774,
	komala: 775,
	turtonator: 776,
	togedemaru: 777,
	mimikyu: 778,
	bruxish: 779,
	drampa: 780,
	dhelmise: 781,
	jangmoO: 782,
	hakamoO: 783,
	kommoO: 784,
	tapuKoko: 785,
	tapuLele: 786,
	tapuBulu: 787,
	tapuFini: 788,
	cosmog: 789,
	cosmoem: 790,
	solgaleo: 791,
	lunala: 792,
	nihilego: 793,
	buzzwole: 794,
	pheromosa: 795,
	xurkitree: 796,
	celesteela: 797,
	kartana: 798,
	guzzlord: 799,
	necrozma: 800,
	magearna: 801,
	marshadow: 802,
	poipole: 803,
	naganadel: 804,
	stakataka: 805,
	blacephalon: 806,
	zeraora: 807,
	meltan: 808,
	melmetal: 809,
	grookey: 810,
	thwackey: 811,
	rillaboom: 812,
	scorbunny: 813,
	raboot: 814,
	cinderace: 815,
	sobble: 816,
	drizzile: 817,
	inteleon: 818,
	skwovet: 819,
	greedent: 820,
	rookidee: 821,
	corvisquire: 822,
	corviknight: 823,
	blipbug: 824,
	dottler: 825,
	orbeetle: 826,
	nickit: 827,
	thievul: 828,
	gossifleur: 829,
	eldegoss: 830,
	wooloo: 831,
	dubwool: 832,
	chewtle: 833,
	drednaw: 834,
	yamper: 835,
	boltund: 836,
	rolycoly: 837,
	carkol: 838,
	coalossal: 839,
	applin: 840,
	flapple: 841,
	appletun: 842,
	silicobra: 843,
	sandaconda: 844,
	cramorant: 845,
	arrokuda: 846,
	barraskewda: 847,
	toxel: 848,
	toxtricity: 849,
	sizzlipede: 850,
	centiskorch: 851,
	clobbopus: 852,
	grapploct: 853,
	sinistea: 854,
	polteageist: 855,
	hatenna: 856,
	hattrem: 857,
	hatterene: 858,
	impidimp: 859,
	morgrem: 860,
	grimmsnarl: 861,
	obstagoon: 862,
	perrserker: 863,
	cursola: 864,
	sirfetchd: 865,
	mrRime: 866,
	runerigus: 867,
	milcery: 868,
	alcremie: 869,
	falinks: 870,
	pincurchin: 871,
	snom: 872,
	frosmoth: 873,
	stonjourner: 874,
	eiscue: 875,
	indeedee: 876,
	morpeko: 877,
	cufant: 878,
	copperajah: 879,
	dracozolt: 880,
	arctozolt: 881,
	dracovish: 882,
	arctovish: 883,
	duraludon: 884,
	dreepy: 885,
	drakloak: 886,
	dragapult: 887,
	zacian: 888,
	zamazenta: 889,
	eternatus: 890,
	kubfu: 891,
	urshifu: 892,
	zarude: 893,
	regieleki: 894,
	regidrago: 895,
	glastrier: 896,
	spectrier: 897,
	calyrex: 898,
	wyrdeer: 899,
	kleavor: 900,
	ursaluna: 901,
	basculegion: 902,
	senasler: 903,
	overqwill: 904,
	enamorus: 905,
	sprigatito: 906,
	floragato: 907,
	meowscarada: 908,
	fuecoco: 909,
	crocalor: 910,
	skeledirge: 911,
	quaxly: 912,
	quaxwell: 913,
	quaquaval: 914,
	lechonk: 915,
	oinkologne: 916,
	tarountula: 917,
	spidops: 918,
	nymble: 919,
	lokix: 920,
	pawmi: 921,
	pawmo: 922,
	pawmot: 923,
	tandemaus: 924,
	maushold: 925,
	fidough: 926,
	dachsbun: 927,
	smoliv: 928,
	dolliv: 929,
	arboliva: 930,
	squawkabilly: 931,
	nacli: 932,
	naclstack: 933,
	garganacl: 934,
	charcadet: 935,
	armarouge: 936,
	ceruledge: 937,
	tadbulb: 938,
	bellibolt: 939,
	wattrel: 940,
	kilowattrel: 941,
	maschiff: 942,
	mabosstiff: 943,
	shroodle: 944,
	grafaiai: 945,
	bramblin: 946,
	brambleghast: 947,
	toedscool: 948,
	toedscruel: 949,
	klawf: 950,
	capsakid: 951,
	scovillain: 952,
	rellor: 953,
	rabsca: 954,
	flittle: 955,
	espathra: 956,
	tinkatink: 957,
	tinkatuff: 958,
	tinkaton: 959,
	wiglett: 960,
	wugtrio: 961,
	bombirdier: 962,
	finizen: 963,
	palafin: 964,
	varoom: 965,
	revavroom: 966,
	cyclizar: 967,
	orthworm: 968,
	glimmet: 969,
	glimmora: 970,
	greavard: 971,
	houndstone: 972,
	flamigo: 973,
	cetoddle: 974,
	cetitan: 975,
	veluza: 976,
	dondozo: 977,
	tatsugiri: 978,
	annihilape: 979,
	clodsire: 980,
	farigiraf: 981,
	dudunsparce: 982,
	kingambit: 983,
	greatTusk: 984,
	screamTail: 985,
	bruteBonnet: 986,
	flutterMane: 987,
	slitherWing: 988,
	sandyShocks: 989,
	ironTreads: 990,
	ironBundle: 991,
	ironHands: 992,
	ironJugulis: 993,
	ironMoth: 994,
	ironThorns: 995,
	frigaribax: 996,
	arctibax: 997,
	baxcalibur: 998,
	gimmighoul: 999,
	gholdengo: 1000,
	woChien: 1001,
	chienPao: 1002,
	tingLu: 1003,
	chiYu: 1004,
	roaringMoon: 1005,
	ironValiant: 1006,
	koraidon: 1007,
	miraidon: 1008,
	walkingWake: 1009,
	ironLeaves: 1010,
	dipplin: 1011,
	poltchageist: 1012,
	sinistcha: 1013,
	okidogi: 1014,
	munkidori: 1015,
	fezandipiti: 1016,
	ogerpon: 1017,
	archaludon: 1018,
	hydreigon: 1019,
	gougingFire: 1020,
	ragingBolt: 1021,
	ironBoulder: 1022,
	ironCrown: 1023,
	terapagos: 1024,
	pecharunt: 1025,
};


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var franc_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! franc-min */ "./node_modules/franc-min/index.js");
/* harmony import */ var _pokedex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokedex.js */ "./src/pokedex.js");




function isEnglish(text) {
	return (0,franc_min__WEBPACK_IMPORTED_MODULE_2__.franc)(text) === "eng";
}

function checkEnglish(array) {
	for (let i = 0; i < array.length; i++) {
		let newarray = [];
		if (array[i].language.name === "en") {
			englisharray.push(array[i]);
		}
	}
	console.log(englisharray);
}
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let poke = "";
let flavor_text = "";
let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");
let data = document.getElementById("data");
let name = "";
let typing1 = "";
let typing2 = "";
let text_info = [];
let pokedexnum = "";
let englisharray = [];

plus.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name || name == "pecharunt") {
		console.log("yee");
		getPokemon(`bulbasaur`);
		search.value = "bulbasaur";
		return;
	} else {
		let pokevalue = _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[search.value];
		console.log(pokevalue);
		let next = pokevalue + 1;
		let keyFound = Object.keys(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons).find((key) => _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[key] === next);
		search.value = keyFound;

		getPokemon(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[keyFound]);
	}
});
minus.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name || name === "bulbasaur") {
		console.log("yee");
		getPokemon(`pecharunt`);
		search.value = "pecharunt";
	} else {
		let pokevalue = _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[search.value];
		console.log(pokevalue);
		let next = pokevalue - 1;
		let keyFound = Object.keys(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons).find((key) => _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[key] === next);
		search.value = keyFound;
		getPokemon(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[keyFound]);
	}
});

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(search.value);
});

//uploads the image and plays the cry sound from the first API fetch request
function addImage(poke) {
	let screen = document.getElementById("screen");
	screen.innerHTML = "";
	let sprite = document.createElement("img");
	pokedexnum = poke.id;
	sprite.src = poke.sprites.front_default;
	name = poke.name;
	typing1 = poke.types[0].type.name;
	if (!poke.types[1]) {
		typing2 = "";
	} else {
		typing2 = poke.types[1].type.name;
	}

	screen.append(sprite);
	console.log(poke);
	let cry = "";
	if (!poke.cries.legacy) {
		console.log("empty");
		cry = new Audio(poke.cries.latest);
	} else {
		cry = new Audio(poke.cries.legacy);
	}
	cry.play();
	return name;
}

//gets the pokedex info from the second API fetch request and puts it on the screen
function addFlavor(flavor) {
	data.innerHTML = "";
	englisharray = [];
	let englishcheck = checkEnglish(flavor.flavor_text_entries);
	let numz = (() => {
		return Math.floor(Math.random() * englisharray.length);
	})();
	let base = englisharray[numz];
	let description = base.flavor_text;
	let version = base.version.name;
	let region = flavor.pokedex_numbers[1].pokedex.name;
	let namediv = document.createElement("div");
	if (flavor.evolves_from_species.name) {
		let evolvesfrom = flavor.evolves_from_species.name;
	} else {
		let evolvesfrom = "none";
	}

	console.log(evolvesfrom);

	namediv.innerHTML =
		"Name: " +
		name +
		"<br>" +
		`Pokedex version:` +
		" " +
		version +
		`<br> ` +
		`National Dex#:${pokedexnum} <br>  Type:${typing1} 
		 <br> Region:${region}  <br> Evolves from: ${evolvesfrom} <br> <br>
		${description}`;
	namediv.setAttribute("id", "namediv");
	data.append(namediv);
}

async function getPokemon(pokemon) {
	try {
		const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
			mode: "cors",
		})
			.then((poke) => poke.json())
			.then((poke) => {
				addImage(poke);
				console.log(poke);
				return poke;
			});

		const flavor = await fetch(
			`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`,
			{
				mode: "cors",
			}
		)
			.then((flavor) => flavor.json())
			.then((flavor) => {
				console.log(flavor);
				addFlavor(flavor);
				return flavor;
			});
	} catch {
		alert("Sorry, this pokemon isn't found.  Try again");
		if (!name) {
			getPokemon("bulbasaur");
			search.value = "bulbasaur";
		} else {
			getPokemon(name);
			search.value = name;
		}
	}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1DQUFtQztBQUMvQyxRQUFRLG1DQUFtQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsYUFBYSxNQUFNLFFBQVEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsc0NBQXNDLGlDQUFpQyxpSEFBaUgsMEJBQTBCLHlCQUF5QixHQUFHLFVBQVUsOEJBQThCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGNBQWMsa0JBQWtCLHdCQUF3QixpQkFBaUIsdUJBQXVCLGFBQWEsZ0NBQWdDLGdCQUFnQixlQUFlLGdDQUFnQyxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsMEJBQTBCLGlCQUFpQixrQkFBa0Isb0NBQW9DLDJCQUEyQix1REFBdUQsZUFBZSxHQUFHLGlCQUFpQix1QkFBdUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLGlCQUFpQixnQkFBZ0IsMEJBQTBCLHFDQUFxQyxHQUFHLFdBQVcsZ0JBQWdCLGVBQWUsdUJBQXVCLHdDQUF3Qyw0QkFBNEIsZUFBZSw0Q0FBNEMsR0FBRyxrQkFBa0Isd0JBQXdCLDhCQUE4QixrQkFBa0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsZUFBZSxhQUFhLEdBQUcsWUFBWSxnQkFBZ0IsZUFBZSx1QkFBdUIsbUNBQW1DLHlDQUF5QyxHQUFHLGFBQWEsdUJBQXVCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLCtCQUErQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixlQUFlLGlCQUFpQix1Q0FBdUMsa0NBQWtDLHVCQUF1QixHQUFHLFdBQVcsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZUFBZSx1Q0FBdUMsaUNBQWlDLHVDQUF1QyxvQkFBb0IsdUJBQXVCLEdBQUcsVUFBVSwwQkFBMEIsa0NBQWtDLG9CQUFvQixxQkFBcUIsdUJBQXVCLG9DQUFvQyxrQkFBa0IsZUFBZSwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsZUFBZSxnQ0FBZ0MsMENBQTBDLHVCQUF1QixHQUFHLGVBQWUsNEJBQTRCLEdBQUcsaUJBQWlCLGVBQWUsa0JBQWtCLHdCQUF3QixtQ0FBbUMsZUFBZSxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLG9CQUFvQixvQkFBb0IscUJBQXFCLGdCQUFnQixtQ0FBbUMsR0FBRyxjQUFjLG9CQUFvQix3QkFBd0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsZUFBZSxnQ0FBZ0MsMENBQTBDLEdBQUcsZ0JBQWdCLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUNBQWlDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1QiwyQkFBMkIsaUNBQWlDLEdBQUcscUJBQXFCO0FBQ3gxSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBLFdBQVcsd0NBQXdDO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQSxXQUFXLHdCQUF3QjtBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSxhQUFhLHNDQUFzQztBQUNuRDtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDc0M7QUFDdEM7QUFDQTtBQUM0QztBQUM1QztBQUNBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUEsV0FBVyxRQUFRO0FBQ25COztBQUVBLFdBQVcsd0RBQXdEO0FBQ25FOztBQUVBLGVBQWUsMENBQUk7QUFDbkIsZUFBZSwwQ0FBSTtBQUNuQixzQkFBc0IsMENBQUk7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ08scUNBQXFDO0FBQzVDLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyx3REFBVzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBUTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsd0NBQXdDO0FBQ25EO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLHdCQUF3QjtBQUN4QixXQUFXLGVBQWU7QUFDMUIsMkJBQTJCO0FBQzNCLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3Q0FBd0M7QUFDbkQ7QUFDQSxXQUFXLGVBQWU7QUFDMUIsd0JBQXdCO0FBQ3hCLFdBQVcsZUFBZTtBQUMxQiwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHdDQUF3QztBQUNyRDtBQUNBLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLHdCQUF3QjtBQUN4QixXQUFXLGVBQWU7QUFDMUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Vk87QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QyxhQUFhLEdBQUc7QUFDaEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQixhQUFhLGdCQUFnQjtBQUM3QixhQUFhLHdCQUF3QjtBQUNyQzs7QUFFOEI7QUFDeUI7O0FBRXZELGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHdFQUFrQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1AsU0FBUywrQ0FBTztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQSxhQUFhLFFBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDTztBQUNQLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamdDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7O1VDeEI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ007O0FBRXhDO0FBQ0EsUUFBUSxnREFBSztBQUNiOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsaURBQVE7QUFDMUI7QUFDQTtBQUNBLDZCQUE2QixpREFBUSxnQkFBZ0IsaURBQVE7QUFDN0Q7O0FBRUEsYUFBYSxpREFBUTtBQUNyQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLGlEQUFRO0FBQzFCO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVEsZ0JBQWdCLGlEQUFRO0FBQzdEO0FBQ0EsYUFBYSxpREFBUTtBQUNyQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksYUFBYTtBQUM1QyxpQkFBaUIsU0FBUyxxQkFBcUIsYUFBYTtBQUM1RCxJQUFJLFlBQVk7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0UsUUFBUTtBQUN4RTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2NvbGxhcHNlLXdoaXRlLXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZnJhbmMtbWluL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZnJhbmMtbWluL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ZyYW5jLW1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uLWdyYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy90cmlncmFtLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3Bva2VkZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHsnaHRtbCd8J2pzJ30gU3R5bGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge1N0eWxlfSBbc3R5bGU9J2pzJ11cbiAqICAgU3R5bGUgb2Ygd2hpdGUgc3BhY2UgdG8gc3VwcG9ydC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3ByZXNlcnZlTGluZUVuZGluZ3M9ZmFsc2VdXG4gKiAgIFdoZXRoZXIgdG8gY29sbGFwc2Ugd2hpdGUgc3BhY2UgY29udGFpbmluZyBhIGxpbmUgZW5kaW5nIHRvIHRoYXQgbGluZVxuICogICBlbmRpbmcuXG4gKiAgIFRoZSBkZWZhdWx0IGlzIHRvIGNvbGxhcHNlIHRvIGEgc2luZ2xlIHNwYWNlLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbdHJpbT1mYWxzZV1cbiAqICAgV2hldGhlciB0byBkcm9wIHdoaXRlIHNwYWNlIGF0IHRoZSBzdGFydCBhbmQgZW5kIG9mIGB2YWx1ZWAuXG4gKiAgIFRoZSBkZWZhdWx0IGlzIHRvIGtlZXAgaXQuXG4gKi9cblxuY29uc3QganMgPSAvXFxzKy9nXG5jb25zdCBodG1sID0gL1tcXHRcXG5cXHZcXGZcXHIgXSsvZ1xuXG4vKipcbiAqIENvbGxhcHNlIHdoaXRlIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBjb2xsYXBzZSB3aGl0ZSBzcGFjZSBpbi5cbiAqIEBwYXJhbSB7U3R5bGV8T3B0aW9uc30gW29wdGlvbnM9J2pzJ11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFZhbHVlIHdpdGggY29sbGFwc2VkIHdoaXRlIHNwYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VXaGl0ZVNwYWNlKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7c3R5bGU6IG9wdGlvbnN9XG4gIH1cblxuICBjb25zdCByZXBsYWNlID0gb3B0aW9ucy5wcmVzZXJ2ZUxpbmVFbmRpbmdzID8gcmVwbGFjZUxpbmVFbmRpbmcgOiByZXBsYWNlU3BhY2VcblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKFxuICAgIG9wdGlvbnMuc3R5bGUgPT09ICdodG1sJyA/IGh0bWwgOiBqcyxcbiAgICBvcHRpb25zLnRyaW0gPyB0cmltRmFjdG9yeShyZXBsYWNlKSA6IHJlcGxhY2VcbiAgKVxufVxuXG4vKipcbiAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBhIGxpbmUgZW5kaW5nIGFzIHRoYXQgbGluZSBlbmRpbmcgYW5kIG90aGVyd2lzZSBhXG4gKiBzcGFjZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VMaW5lRW5kaW5nKHZhbHVlKSB7XG4gIGNvbnN0IG1hdGNoID0gL1xccj9cXG58XFxyLy5leGVjKHZhbHVlKVxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6ICcgJ1xufVxuXG4vKipcbiAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBhIHNwYWNlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VTcGFjZSgpIHtcbiAgcmV0dXJuICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZ30gcmVwbGFjZVxuICovXG5mdW5jdGlvbiB0cmltRmFjdG9yeShyZXBsYWNlKSB7XG4gIHJldHVybiBkcm9wT3JSZXBsYWNlXG5cbiAgLyoqXG4gICAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBub3RoaW5nIGlmIGl0IHN0YXJ0cyBvciBlbmRzIHRoZSBzdHJpbmcuXG4gICAqIENhbGxzIGByZXBsYWNlYCBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZHJvcE9yUmVwbGFjZSh2YWx1ZSwgaW5kZXgsIGFsbCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMCB8fCBpbmRleCArIHZhbHVlLmxlbmd0aCA9PT0gYWxsLmxlbmd0aFxuICAgICAgPyAnJ1xuICAgICAgOiByZXBsYWNlKHZhbHVlKVxuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb2tlbW9uIFNvbGlkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSxcblx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcblxuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLnBva2VkZXgge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IGF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0aGVpZ2h0OiA4MCU7XG5cdHdpZHRoOiA2MCU7XG5cdGJvcmRlcjogMjBweCBncm9vdmUgZGFya3JlZDtcbn1cblxuaW1nIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5sZWZ0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDQ1JSA0NSU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci1yaWdodDogMjBweCBncm9vdmUgcmdiYSgxNTUsIDExLCAxMSwgMC42OTEpO1xuXHR3aWR0aDogNTUlO1xufVxuXG4jbGlnaHRzbGVmdCB7XG5cdGdyaWQtYXJlYTogMS8xLzIvMjtcblx0ZGlzcGxheTogRmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XG5cdGJvcmRlci1ib3R0b206IDZweCBzb2xpZCBkYXJrcmVkO1xufVxuI2NpcmNsZSB7XG5cdGhlaWdodDogNjAlO1xuXHR3aWR0aDogMTAlO1xuXHRib3JkZXItcmFkaXVzOiA3NSU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTQzLCAyMzIpO1xuXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcblx0bWFyZ2luOiAyJTtcblx0Ym94LXNoYWRvdzogMnB4IC0ycHggLTJweCAycHggbGlnaHRibHVlO1xufVxuXG4jbGlnaHRzcmlnaHQge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyJTtcblx0ZmxleC1kaXJlY3Rpb246IFJvdztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMjUlO1xuXHRnYXA6IDEwJTtcbn1cbi5jaXJjbGUyIHtcblx0aGVpZ2h0OiA2MCU7XG5cdHdpZHRoOiAxMCU7XG5cdGJvcmRlci1yYWRpdXM6IDc1JTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xuXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjExLCAyMTEsIDIxMSk7XG59XG5cbiNzY3JlZW4ge1xuXHRncmlkLWFyZWE6IDIvMS8zLzI7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogNDhweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDcwJTtcblx0d2lkdGg6IDgwJTtcblx0bWFyZ2luOiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xuXHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcblx0cGFkZGluZy1ib3R0b206IDQlO1xufVxuXG4jZGF0YSB7XG5cdGdyaWQtYXJlYTogMy8xLzQvMjtcblx0bWFyZ2luOiBhdXRvO1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDkwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcblx0Zm9udC1mYW1pbHk6IFwicG9rZWRleGZvbnRcIjtcblx0Ym9yZGVyOiA2cHggZ3Jvb3ZlIHJnYig3NywgNzUsIDc1KTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG59XG4ucmlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3Jvb3ZlO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdHRleHQtYWxpZ246IENlbnRlcjtcblx0Ym9yZGVyLWxlZnQ6IDRweCBncm9vdmUgZGFya3JlZDtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDQ1JTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjBweDtcbn1cbi5ibHVlZ3JpZCB7XG5cdG1hcmdpbi10b3A6IC00MCU7XG5cdGRpc3BsYXk6IEdyaWQ7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cdGhlaWdodDogMTAlO1xuXHR3aWR0aDogODAlO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdG1hcmdpbi1ib3R0b206IDMwJTtcbn1cbi5ncmlkc3F1YXJlIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5taWRkbGVhcmVhIHtcblx0d2lkdGg6IDk1JTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRtYXJnaW46IDMlO1xuXHRwYWRkaW5nOiAzJTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2hzdHVmZiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBDb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWludXMsXG4ucGx1cyB7XG5cdGZvbnQtc2l6ZTogNjhweDtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Y29sb3I6IGdvbGQ7XG5cdC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCBibGFjaztcbn1cbi5ibGFja2dyaWQge1xuXHRtYXJnaW4tdG9wOiAyMCU7XG5cdG1hcmdpbi1ib3R0b206IC00MCU7XG5cdGRpc3BsYXk6IEdyaWQ7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG5cdGhlaWdodDogMTAlO1xuXHR3aWR0aDogODAlO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG4uYmxhY2tzcXVhcmUge1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbmJ1dHRvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJwb2tlZGV4Zm9udFwiO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGhlaWdodDogNDVweDtcblx0d2lkdGg6IDE1MHB4O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJvcmRlcjogNnB4IHNvbGlkIGdyYXk7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQywwQkFBMEI7O0NBRTFCO3dEQUMyQzs7Q0FFM0MsbUJBQW1COztDQUVuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLDJCQUEyQjtDQUMzQixXQUFXO0NBQ1gsVUFBVTtDQUNWLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osYUFBYTtDQUNiLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsa0RBQWtEO0NBQ2xELFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtQ0FBbUM7Q0FDbkMsdUJBQXVCO0NBQ3ZCLFVBQVU7Q0FDVix1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixVQUFVO0NBQ1YsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsWUFBWTtDQUNaLGtDQUFrQztDQUNsQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsVUFBVTtDQUNWLGtDQUFrQztDQUNsQywwQkFBMEI7Q0FDMUIsa0NBQWtDO0NBQ2xDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsVUFBVTtDQUNWLDJCQUEyQjtDQUMzQixxQ0FBcUM7Q0FDckMsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsVUFBVTtDQUNWLDJCQUEyQjtDQUMzQixxQ0FBcUM7QUFDdEM7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixzQkFBc0I7O0NBRXRCLDBCQUEwQjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcInBva2VkZXhmb250XFxcIjtcXG5cXG5cXHRzcmM6IHVybChcXFwiLi9Qb2tlbW9uXFxcXCBTb2xpZC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG5cXHRcXHR1cmwoXFxcIi4vUG9rZW1vblxcXFwgU29saWQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuXFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLnBva2VkZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogNjAlO1xcblxcdGJvcmRlcjogMjBweCBncm9vdmUgZGFya3JlZDtcXG59XFxuXFxuaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5sZWZ0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgNDUlIDQ1JTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlci1yaWdodDogMjBweCBncm9vdmUgcmdiYSgxNTUsIDExLCAxMSwgMC42OTEpO1xcblxcdHdpZHRoOiA1NSU7XFxufVxcblxcbiNsaWdodHNsZWZ0IHtcXG5cXHRncmlkLWFyZWE6IDEvMS8yLzI7XFxuXFx0ZGlzcGxheTogRmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIGRhcmtyZWQ7XFxufVxcbiNjaXJjbGUge1xcblxcdGhlaWdodDogNjAlO1xcblxcdHdpZHRoOiAxMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNzUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTQzLCAyMzIpO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcblxcdG1hcmdpbjogMiU7XFxuXFx0Ym94LXNoYWRvdzogMnB4IC0ycHggLTJweCAycHggbGlnaHRibHVlO1xcbn1cXG5cXG4jbGlnaHRzcmlnaHQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBSb3c7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAyNSU7XFxuXFx0Z2FwOiAxMCU7XFxufVxcbi5jaXJjbGUyIHtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNywgNyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDIxMSwgMjExLCAyMTEpO1xcbn1cXG5cXG4jc2NyZWVuIHtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJwb2tlZGV4Zm9udFxcXCI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDQ4cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDcwJTtcXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xcblxcdGJvcmRlcjogMTRweCBncm9vdmUgbGlnaHRncmF5O1xcblxcdHBhZGRpbmctYm90dG9tOiA0JTtcXG59XFxuXFxuI2RhdGEge1xcblxcdGdyaWQtYXJlYTogMy8xLzQvMjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcdGJvcmRlcjogNnB4IGdyb292ZSByZ2IoNzcsIDc1LCA3NSk7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuLnJpZ2h0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncm9vdmU7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogQ2VudGVyO1xcblxcdGJvcmRlci1sZWZ0OiA0cHggZ3Jvb3ZlIGRhcmtyZWQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNDUlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcbi5ibHVlZ3JpZCB7XFxuXFx0bWFyZ2luLXRvcDogLTQwJTtcXG5cXHRkaXNwbGF5OiBHcmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFx0aGVpZ2h0OiAxMCU7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMCU7XFxufVxcbi5ncmlkc3F1YXJlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1pZGRsZWFyZWEge1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDMlO1xcblxcdHBhZGRpbmc6IDMlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWFyY2hzdHVmZiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5taW51cyxcXG4ucGx1cyB7XFxuXFx0Zm9udC1zaXplOiA2OHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Y29sb3I6IGdvbGQ7XFxuXFx0LXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IGJsYWNrO1xcbn1cXG4uYmxhY2tncmlkIHtcXG5cXHRtYXJnaW4tdG9wOiAyMCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogLTQwJTtcXG5cXHRkaXNwbGF5OiBHcmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuXFx0aGVpZ2h0OiAxMCU7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuLmJsYWNrc3F1YXJlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJwb2tlZGV4Zm9udFxcXCI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGhlaWdodDogNDVweDtcXG5cXHR3aWR0aDogMTUwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcblxcdGJvcmRlcjogNnB4IHNvbGlkIGdyYXk7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj59ICovXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgTGF0aW46IHtcbiAgICBzcGE6ICcgZGV8ZGUgfG9zIHwgbGF8IGEgfGxhIHwgeSB8w7NuIHxpw7NufGVzIHxlcmV8cmVjfGllbnxvIGF8ZGVyfGNpw7N8Y2hvfGVjaHxlbiB8YSBwfGVudHxhIGx8YWNpfGVsIHxuYSB8b25hfGUgZHwgY298YXMgfGRhIHwgdG98YWwgfGVuZXwgZW58dG9kfCBwZXxlIGx8IGVsfGhvIHxudGV8IHN1fHBlcnxhIHR8YWQgfCB0aXxlcnN8dGllfCBzZXxyc298c29ufGUgc3wgcHJ8byBkfG9kYXx0ZSB8Y2lhfG4gZHwgZXN8ZGFkfGlkYXwgaW58bmUgfGVzdHxpb258Y2lvfHMgZHxjb258YSBlfCBwb3xtZW58IGxpfG4gZXxuY2l8cmVzfHN1IHx0byB8dHJhfCByZXwgbG98dGFkfCBuYXxsb3N8YSBzfCBvIHxpYSB8cXVlfCBwYXxyw6EgfHByb3wgdW58cyB5fHVhbHxzIGV8bGlifG5hY3xkbyB8cmEgfGVyIHxhIGR8dWUgfCBxdXxlIGV8c3RhfG5hbHxhciB8bmVzfGljYXxhIGN8c2VyfG9yIHx0ZXJ8c2UgfHBvcnxjY2l8aW8gfGRlbHxsIGR8ZGVzfGFkb3xsZXN8b25lfGEgYXxuZGl8IHNvfCBjdXxzIHB8YWxlfHMgbnxhbWV8cGFyfGljaXxvY2l8dW5hfGJlcnxzIHR8cnRhfGNvbXwgZGl8ZG9zfGUgYXxpbWl8byBzfGUgY3xlcnR8bGFzfG8gcHxhbnR8ZGljfG50b3wgYWx8YXJhfGliZXxlbmN8byBlfHMgbHxjYXN8IGFzfGUgcHx0ZW58YWxpfG8gdHxzb2N8eSBsfG4gY3xudGF8c28gfHRvc3x5IGF8cmlhfG4gdHxkaWV8YSB1fCBmdXxubyB8bCBwfGlhbHxxdWl8ZGlzfHMgb3xob3N8Z3VhfGlndXwgaWd8IGNhfHNhcnxsIHR8IG1hfGwgZXxwcmV8IGFjfHRpdnxzIGF8cmUgfG5hZHx2aWR8ZXJhfCB0cnxpZXJ8Y3VhfG4gcHx0YSB8Y2xhfGFkZXxicmV8cyBzfGVzYXxudHJ8ZWNjfGEgaXwgbGV8bGlkfGRhc3xkIGR8aWRvfGFyaXxpbmR8YWRhfG5kYXxmdW58bWllfGNhIHx0aWN8ZWxpfHkgZHxuaWR8ZSBpfG9kb3xpb3N8byB5fGVzcHxpdmF8eSBlfG1hdHxibGl8ciBhfGRyw6F8dHJpfGN0aXx0YWx8cmltfG9udHxlcsOhfHVzIHxzdXN8ZW5kfHBlbnx0b3J8aXRvfG9uZHxvcml8dWllfGxpZ3xuIGF8aXN0fHJhY3xsYXJ8cnNlfHRhcnxtbyB8b21vfGlicnxuIGx8ZWRpfG1lZHwgbWV8bmlvfGEgeXxlZGF8aXNmfGxvIHxhc298bCBtfGlhc3xpY298bGljfHBsZXxzdGV8YWN0fHRlY3xvdGV8cm90fGVsZXx1cmF8IG5pfGllIHxhZGl8dSBwfHNlZ3xzIGl8dW4gfHVuZHxhIG58bHF1fGFscXxvIGl8aW5jfHN0aXwgc2l8biBzfGVybicsXG4gICAgZW5nOiAndGhlfCB0aHwgYW58aGUgfG5kIHxpb258YW5kfCB0b3x0byB8dGlvfCBvZnxvbiB8b2YgfCBpbnxhbCB8YXRpfG9yIHxnaHR8aWdofHJpZ3wgcml8bmUgfGVudHxvbmV8bGwgfGlzIHxhcyB8dmVyfGVkIHwgYmV8ZSByfGluIHx0IHR8YWxsfGV2ZXxodCB8IG9yfGVyeXxzIHR8dHkgfCBldnxlIGh8eW9ufCBoYXxyeW98ZSBhfGJlIHxoaXN8IGZyfG5nIHxkIHR8aGFzfCBzaHxpbmd8IGhpfHNoYXwgcHJ8IGNvfCByZXxoYWx8bmFsfHkgYXxzIGF8biB0fGNlIHxtZW58cmVlfGZyZXxlIHN8bCBifG5hdHxmb3J8dHMgfG50IHxuIGF8aXR5fHJ5IHxoZXJ8bmNlfGVjdHxkIGl8IHBlfHByb3xuIG98Y3RpfCBmb3xlIGV8bHkgfGVzIHwgbm98b25hfG55IHxhbnl8ZXIgfHJlIHxmIHR8ZSBvfCBkZXxzIG98IHdpfHRlcnxudGV8ZSBpfG9uc3wgZW58IGFyfHJlc3xlcnN8eSB0fHBlcnxkIGZ8IGEgfCBvbnxpdGh8bCBhfGUgdHxvY2l8c29jfGxpdHwgYXN8IHNlfGRvbXxlZG98ZWVkfG50aXxzIGV8dCBvfG90aHx3aXR8IGRpfGVxdXx0IGF8dGVkfHN0IHx5IG98aW50fGUgcHwgbWF8IHNvfCBuYXxsIG98ZSBjfGNoIHxkIGF8ZW5jfHRoIHxhcmV8bnMgfGljIHwgdW58IGZ1fHRhdHxpYWx8Y2lhfCBhY3xodHN8bml0fHF1YXwgZXF8IGFsfG9tIHxlIHd8ZCBvfGYgaHxhbGl8b3RlfG4gZXwgd2h8ciB0fHN0YXxnZSB8dGhpfG8gYXx0aXR8dWFsfGFuIHx0ZSB8ZXNzfCBjaHxsZSB8YXJ5fGUgZnxieSB8IGJ5fHkgaXx0ZWN8dW5pfG8gdHxvIG98IGxpfG5vIHwgbGF8cyByfCBzdXxpbmN8bGVkfHJvdHxjb258IHB1fCBoZXxlcmV8aW1pfHIgYXxudHJ8IHN0fCBvdHxlbGl8YWdlfGRpc3xzIGR8dGxlfGl0bHxob3V8c29ufGR1Y3xlZHV8IHdvfGF0ZXxibGV8Y2VzfGF0IHwgYXR8IGZhfGNvbXxpdmV8byBzfGVtZXxvIGV8YXcgfGxhd3x0cmF8dW5kfHBlbnxuZGV8dW50fG91bnxuIHN8cyBmfGYgYXx0aG98bXMgfCBpc3xhY3R8Y2llfGNhdHx1Y2F8IGVkfGFuY3x3b3J8cmFsfHQgaXwgbWV8byBmfGlseXxwcml8cmVufG9zZXxzIGN8ZW4gfGQgbnxsIGN8ZnVsfHJhcnxudGF8bnN0fCBhZ3xsIHB8bWlufGRpbnxzZWN8eSBlfCB0cnxyc298aWNofGhpY3x3aGl8Y291fGVybnx1cml8ciBvfHRpY3xpdGl8aWdpfGxpZ3xyYXR8cnRofHQgZnxvbXN8cml0fGQgcnxlZSB8ZSBifGVyYXxyb3V8c2UgfGF5IHxycyB8IGhvfGFibHxlIHUnLFxuICAgIHBvcjogJ2RlIHwgZGV8IHNlfMOjbyB8b3MgfHRvIHxlbSB8IGUgfGRvIHxvIGR8IGRpfGVyIHxpdG98ZWl0fHNlcnxlbnR8w6fDo298IGEgfGRpcnxpcmV8cmVpfG8gc3xhZGV8ZGFkfHVtYXxhcyB8bm8gfGUgZHwgdG98bnRlfCBjb3xvIHR8dG9kfCBvdXxtZW58cXVlfHMgZXxtYW58IHByfCBpbnwgcXV8ZXMgfCB0ZXxodW18b2RvfGUgYXxkYSB8IGh1fGFub3x0ZSB8YWwgfHRlbXxvIGV8cyBkfGlkYXxtIGR8IHBlfCByZXxvIGF8b3UgfHIgaHxlIHN8Y2lhfGEgZXwgbGl8byBwfCBlc3xyZXN8IGRvfCBkYXwgw6AgfHVhbHwgZW18IHN1fGHDp8OjfGRvc3xhIHB8dHJhfGVzdHxpYSB8Y29ufHByb3xhciB8ZSBwfGlzIHwgbmF8csOhIHxxdWF8YSBkfCBwYXxjb218YWlzfG8gY3xhbWV8ZXLDoXwgcG98dWVyfHN0YXxiZXJ8dGVyfCBvIHxlc3N8cmEgfGUgZXxkYXN8byDDoHxudG98bmFsfG8gb3xhIGN8aWRvfHJkYXxlcmR8IGFzfG5jaXxzdWF8b25hfGRlc3xpYmV8bGlifGUgdHxhZG98cyBufHVhIHxzIHR8dWUgfCBzb3xpY2F8bWEgfGxxdXxhbHF8dG9zfG0gc3xhIGx8cGVyfGFkYXxvY2l8c29jfGNpb3xhIG58cGFyfGFjaXxzIGF8cHJlfG9udHxtIG98dXJhfGEgc3wgdW18aW9ufGUgb3xvciB8ZSByfHBlbHxudGF8bnRyfGEgaXxpbyB8bmFjfMOqbmN8c3RyfGFsaXxyaWF8bnN0fCB0cnxhIHF8aW50fG8gbnxhIG98Y2EgfGVsYXx1w6fDo3xsaWR8ZSBsfCBhdHxzZW58ZXNlfHIgZHxzIHB8ZWd1fHNlZ3x2aWR8cHJpfHNzb3zDqW0gfGltZXx0aWN8ZGlzfHJhw6d8ZWNpfGFyYXwgY2F8bmlkfHRydXzDtWVzfGFzc3xzZXV8cG9yfGEgYXxtIHB8IGV4fHNvIHxyIGl8ZcOnw6N8dGXDp3xvdGV8cm90fCBsZXwgbWF8aW5nfGEgdHxyYW58ZXJhfHJpb3xsIGR8ZWxpfMOnYSB8c3RpfCBuZXxjaWR8ZXJufHV0cnxvdXR8ciBlfGUgY3x0YWR8Z3VhfGlndXwgaWd8IG9zfHMgb3xydcOnfGluc3zDp8O1ZXxpb3N8IGZhfGUgbnxzc2V8IG5vfHJlIHxhcnR8ciBwfHJhcnx1IHB8aW5jfGxlaXxjYXN8aWNvfHXDqW18Z3XDqXxuZ3V8bmlufCBuaXxndXJ8bGEgfHBlbnxuw6dhfG5hIHxpw6fDo3xpw6NvfGNpZXxpc3R8c2VtfHRhIHxlbGV8ZSBmfG9tIHx0cm98IGFvfHJlbHxtIGF8cyBzfHRhcnxlZGF8aWVkfHVuaXxlIG18cyBpfGEgZnxpYXN8IGN1fCBhY3xyIGF8w6EgYXxyZW18ZWkgfG9tb3xyZWN8Zm9yfHMgZnxlc2N8YW50fMOgIHN8IHZpfG8gcXx2ZXJ8YSB1fG5kYXx1bmR8ZnVuJyxcbiAgICBpbmQ6ICdhbiB8YW5nfG5nIHwgZGF8YWsgfCBwZXxhdGF8IHNlfCBrZXwgbWV8ZGFufCBkaXwgYmV8YmVyfGthbnxyYW58aGFrfHBlcnx5YW58IHlhfG5nYXxueWF8Z2FufCBhdHxhcmF8IGhhfGVuZ3xhc2F8b3JhfG1lbnxuIHB8biBrfGVyaHxyaGF8biBkfHlhIHxhcCB8YXQgfGFzIHx0YW58biBifGFsYXxhIGR8IG9yfGEgc3xzYW58dGFzfGV0aXx1ayB8cGVufGcgYnxzZXR8bnR1fG4geXx0aWF8aWFwfGsgbXxlYmF8YWFufCB1bnxuIHN8dHVrfGsgYXxwIG98YW0gfGxhbXwgbWF8dW50fCBkZXx0ZXJ8YmFzfGJlYnxkYWt8ZW5kfGkgZHxwdW58bWVtfHRhdXxkYWx8YW1hfGtlYnxha2F8aWthfG4gbXwgYmF8ZGkgfG1hIHwgc2F8ZGVufGF1IHxuZGF8biBofGVyaXwgdGl8ZWxhfGsgZHx1biB8biBhfGViZXxhbmF8YWggfHJhIHxpZGF8dWthfCB0ZXxhbCB8YWRhfHJpIHxvbGV8dGlkfG5nZ3xsYWt8bGVofGRhcHxhIHB8ZGlsfGcgZHxlbmF8ZWggfGdhcnxuYSB8ZXJ0fGFwYXx1bSB8dHUgfGF0dXxhIG18c2FtfGlsYXxoYXJ8biB0fGFzaXxiYW58ZXJsfHQgZHxiYXR8dWF0fHRhIHxsYW58YWRpfGggZHxuZWd8IG5lfGt1bXxtYXN8bmFufHBhdHxhaGF8IGlufGwgZHxlbXB8c2VtfHJ1c3xzdWF8c2VyfHVhbnxlcmF8YXJpfGVyYnxrYXR8bWFufGEgYnxnIHN8cnRhfGFpIHxubnl8biB1fHVuZ3xuZGl8aGFufHVrdXxodWt8IGh1fHNhIHxlcnN8aW4gfCBsYXxrYSB8IHN1fGFubnxjYXJ8a2VzfGFrdXxkaXB8aSBzfGEgYXxlcmt8biBpfGxhaXxyZ2F8YXJ1fGsgaHxpIG18cmthfGEgdXx1cyB8bmFrfGVtYnxnZ2F8bnRhfGliYXwgcHV8aW5kfHMgcHxlbnR8bWVsfGluYXxtaW58aWFufGRhcnxuaSB8cm1hfGx1YXxyaWt8bmR1fGxpbnxzaWF8cmJ1fGcgcHxrIHN8ZGEgfGF5YXxlc2V8dSBkfGVnYXxuYXN8YXIgfGlwZXx5YXJ8c3lhfGlrIHxhZ2F8IHRhfGFpbnx1YSB8YXJnfHVhcnxpbnl8cGVtfHV0IHxzaSB8ZHVufGVvcnxzZW98cmFrfG5nc3xhbWl8a2VsfGluaXxnIHR8ZGlrfG1lcnxlbXV8YWtzfHJhdHx1cnV8ZXdhfGlsIHxlbnV8YW55fGtlcHxwZWx8YXN1fHJsaXxpYSB8ZGlyfGphbXxtYmF8bWF0fHBhbnxnIG18c2VzfHNhcnxkYXN8a3VrfGJvbHxpbGl8dSBrfGdzYXx1IHB8YSBrfGVybnxhbnR8cmFhfHQgcHxlbWF8bXVhfGlkaXxkaWR8dCBzfGkga3xyaW58ZXJtfGVzdXxnZXJ8ZWx1fG5qYXxlbmp8Z2EgfGRpdCcsXG4gICAgZnJhOiAnIGRlfGVzIHxkZSB8aW9ufG50IHx0aW98ZXQgfG5lIHxvbiB8IGV0fGVudHxsZSB8b2l0fGUgZHwgbGF8ZSBwfGxhIHxpdCB8IMOgIHx0IGR8cm9pfGRyb3wgZHJ8IGxlfHTDqSB8ZSBzfGF0aXx0ZSB8cmUgfCB0b3xzIGR8bWVufHRvdXxlIGx8bnMgfCBwZXwgY298c29ufHF1ZXwgYXV8IHNvfGUgYXxvbm58b3V0fCB1bnwgcXV8IHNhfCBwcnx1dGV8ZW1lfCBs4oCZfHQgw6B8IGEgfGUgZXxjb258ZGVzfCBwYXx1ZSB8ZXJzfGUgY3wgbGl8YSBkfHBlcnxvbnR8cyBlfHQgbHxsZXN8dHMgfHRyZXxzIGx8YW50fCBvdXxjdGl8cnNvfG91IHxjZSB8dXggfMOgIGx8bm5lfG9uc3xpdMOpfGVuIHx1biB8IGVufGVyIHx1bmV8biBkfHNhIHxsbGV8IGlufG50ZXxlIHR8IHNlfGxpYnxyZXN8YSBsfGlyZXwgZOKAmXwgcmV8w6kgZHxuYXR8aXF1fHVyIHxyIGx8dCBhfHMgc3xhdXh8cGFyfG5hbHxhIHB8YW5zfGRhbnxxdWl8dCBwfCBkw6l8cHJvfHMgcHxhaXJ8IG5lfCBmb3xlcnR8cyBhfG5jZXxhdSB8dWkgfGVjdHxkdSB8b25kfGFsZXxsaXR8IHBvfHNhbnwgY2h8w6lzIHwgbmF8dXMgfGNvbXxvdXJ8YWxpfHRyYXwgY2V8YWwgfGUgb3xlIG58cnTDqXxiZXJ8aWJlfHRlc3xyIGR8ZSByfGl0c3wgZGl8w6p0cnxwb3V8w6l0w6l8cyBjfMOgIHV8ZWxsfGludHxmb258b2NpfHNvY3x1dCB8dGVyfCBkYXxhdXR8aWVufHJhaXwgZG98aXNzfHMgbnwgbWF8YmxpfGdlIHxlc3R8cyBvfCBkdXxvbmF8biBwfHByaXxycyB8w6lnYXwgw6p0fG91c3xlbnN8YXIgfGFnZXxzIHR8IHN1fGNpYXx1IGR8Y3VufHJhdHwgZXN8aXIgfG4gY3xlIG18IMOpdHx0IMOqfGEgY3wgYWN8b3RlfG4gdHxlaW58IHRyfGEgc3xuZGl8ZSBxfHN1cnzDqWUgfHNlcnxsIG58IHBsfGFuY3xsaWd8dCBzfG4gZXxzIGl8dCBlfCDDqWd8YWlufG9tbXxhY3R8bnRyfHRlY3xnYWx8dWwgfCBudXwgdml8bWUgfG5kYXxpbmR8c29pfHN0IHwgdGV8cGF5fHRhdHxlcmF8aWwgfHJlbHxuIGF8ZGlzfG4gc3xwcsOpfHBldXxyaXR8w6kgZXx0IMOpfGJyZXxzZW58aWxsfGzigJlhfGTigJlhfCBtb3xhc3N8bGljfGFydHwgcHV8YWJsfG50YXx0IGN8cm90fCBvbnwgbG98dXJlfGzigJllfGF2YXx0ZW58bnVsfGl2aXx0IGl8ZXNzfHlzIHxheXN8IGZhfGluZXxldXJ8csOpc3xjbGF8dMOpc3xvaXJ8ZXV0fGUgZnx1dHJ8ZG9pfGlicnxhaXN8aW5zfMOpcmF84oCZZW58acOpdHxsIGV8cyDDqXxudMOpfCByw6l8c3NpfCBhc3xuc2V8Y2VzfMOpIGEnLFxuICAgIGRldTogJ2VuIHxlciB8ZGVyfGVpbnwgdW58bmQgfHVuZHx1bmd8Y2h0fGljaHwgZGV8c2NofG5nIHwgZ2V8aW5lfGVjaHxnZW58cmVjfGNoZXxpZSB8IHJlfGVpdHwgYXV8aHQgfGRpZXwgZGl8IGhhfGNoIHwgZGF8dmVyfCB6dXxsaWN8dCBkfGluIHxhdWZ8IGVpfCBpbnwgYmV8aGVufG5kZXxuIGR8dWYgfGVkZXwgdmV8aXQgfHRlbnxuIHN8c2VpfGF0IHxqZWR8IGplfCBzZXxhbmR8cmVpfHMgcnxkZW58dGVyfG5lIHxoYXR8dCBhfHIgaHx6dSB8ZGFzfG9kZXwgb2R8YXMgfGVzIHwgYW58ZnJlfG5nZXwgd2V8biB1fHJ1bnwgZnJ8ZXJlfGUgdXxsbGV8bmVyfG50ZXxoZWl8ZXNlfCBzb3xyZGV8d2VyfGlnZXwgYWx8ZXJzfG4gZ3xodGV8ZCBkfCBzdHxuIGp8bGVpfGFsbHxuIGF8bmVufGVnZXxlbnR8YmVpfGcgZHxlcmR8dCB1fHJlbnxuc2N8Y2h1fCBncnxrZWl8ZW5zfGxlIHxiZW58YWZ0fGhhZnxjaGF8dGxpfGdlc3xlIHN8IHNpfG1lbnwgdm98bHVufGVtIHxyIHN8aW9ufHRlIHxsZW58Z3J1fGd1bnx0aWd8dW50fHVjaHxzcHJ8biBlfGZ0IHxlaSB8ZSBmfCB3aXwgc2N8ciBkfG4gbnxnZWh8ciBnfGRhcnxzdGF8ZXJrfCBlcnxyIGV8c2VufGVpY3xnbGV8IGdsfGxpZXxlIGV8dHogfGZlbnxuIGl8bmllfGYgZ3x0IHd8ZGVzfGNobHxpdGV8aWhlfGVpaHxpZXN8cnVjfHN0IHxpc3R8biB3fGggYXxuIHp8ZSBhfCBuaXxhbmd8cmYgfGFyZnxnZW18YWxlfGF0aXxvbiB8aGUgfHQgc3xhY2h8IG5hfGVuZHxuIG98cHJ1fGFuc3xzc2V8ZXJufGFhdHx0YWF8ZWhlfGUgZHxobGl8aHJlfGludHx0aW98aGVyfG5zcHxkZSB8bWVpfCBhcnxyIGF8ZmZlfGUgYnx3aWV8ZXJmfGFiZXxoYWJ8bmRsfG4gdnxzaWN8dCBpfGhhbnxlbWF8bmF0fGJlcnxpZWR8Z2VnfGQgc3xudW58ZCBmfGluZHwgbWV8Z2tlfGlna3xpZcOffCBmYXxpZ3V8aHVsfHIgdnxkaWd8cmNofHVyY3xkdXJ8IGR1fHV0enxodXR8dHJhfGF1c3xhbHR8YmVzfHN0cnxlbGx8c3RlfGdlcnxyIG98ZXNjfGUgZ3xyYmV8YXJifG9obnxyIGJ8bWl0fGQgZ3xyIHd8bnRsfHNvd3xuIGh8bm5lfGV0enxyYWZ8ZGx1fCBpaHxsdGV8bWFufGllbXxlcmh8ZXJ1fCBpc3xkZW18bGFufHJ0IHxzb258aXNjfGVsaXxyZWx8biByfGUgaXxybGl8ciBpfCBtaXxlIG18aWxkfGJpbHwgYml8ZW1lfCBlbnxpbnN8ZsO8cnwgZsO8fGdlbHzDtmZmfCDDtmZ8b3dpfGlsbHx3aWx8ZSB2fHJpY3xmIGUnLFxuICAgIGphdjogJ25nIHxhbiB8IGthfGFuZ3xpbmd8a2FufCBzYXxhayB8bGFufCBsYXxoYWt8IHBhfCBoYXxhcmF8bmUgfGFiZXwgaW58biBrfG5nZ3xvbmd8YW5lfG5nYXxhbnR8d29ufHV3b3wgYW58IHV3fG5pbnxhdGF8biB1fGVuIHxyYSB8dGFufCBkYXxyYW58YW5hfCBtYXxudGh8YWtlfGJlbnxiZWJ8aGkgfGtlIHxzYWJ8bmRhfCBuZ3xhZGl8dGhpfG5hbnxhIGt8IGJhfHNhbnxhc2F8bmkgfGUgaHxlIGt8ZyBrfCB1dHxwYW58YXdhfCBiZXxlYmF8Z2FufGcgcHxkYW58IHdhfGJhc3xha2F8ZGhhfHlhbnxzYSB8YXJifG1hbnwgZGl8d2EgfGcgZHwgbmF8ZyBufGJhbnwgdHV8biBzfHVuZ3x3ZW58ZyBzfHJiZXxkYXJ8ZGFrfGRpIHxnIHV8b3JhfGF5YXxiZSB8YWggfGEgc3xlbml8IG9yfGhhbnxhcyB8IHByfGEgbnxuYSB8aXlhfGEgYXxrYXJ8YXQgfGEgbHxtYXJ8dXdlfGR1d3x1dGF8dW5kfG4gcHxhc2l8cGEgfCBzaXxhbGF8biBufCB1bnxrYWJ8b25pfHlhIHxpIGh8Z2FyfGcgYnx5YXR8dHVtfHRhIHxuIG18aSBrfGFwYXx0YXd8IGxpfGFuaXwga2V8YWwgfGthIHxrYWx8bmdrfGVnYXwgbmV8bmFsfG4gaXxnIGF8Z2dvfGluYXx3ZSB8ZW5hfGRhZHxpYmF8YXdpfGFnYXxhIHB8IHRhfHNhcnxhZGh8YXdlfGFuZHx1anV8aW5kfG1pbnxzaW58bmR1fHV3YXxnZ2V8biBsfGdndXxuZ3N8biBifGEgYnxwcmF8aWppfG4gYXxoYSB8IGJpfGthdHxnbyB8IGt1fGUgcHxyb258a2FrfG5ndXxhIHV8Z3NhfHdhcnxueWF8ZyB0fHBhZHxiaXN8ayBifGkgd3xhZSB8d2FlfCBuZHxhbGl8YSBtfGVyIHxzYWt8ZSBzfGt1IHxsaXl8YW1hfGkgbHxlaCB8aXNhfGFyZ3xuIHR8YSBkfGthcHxpIHN8YXlvfGdheXwgcGV8bmRofGJhZHxwcml8bmVnfHRvd3x1dG98ZWRhfGJlZHxpbCB8aWggfCBpa3x1ciB8ayBrfHJ0YXxhcnR8aSBwfHJnYXxsYWt8YW1pfHJvIHxhcm98eW9tfHIga3xlIGR8YSB3fGtvbnxyaWJ8ZW5nfGdlcnxnIGx8cmFzfGRpbHwgdGl8ayBsfHJhcHxtcmF8dW1hfCBwaXxrIGh8biBkfGdhd3x3YXR8Z2EgfGsgbnxhciB8cGVyfCB3ZXxvbWF8ayBwfGpyb3xhanJ8c2FqfGFzZXxpbml8a2VufHNhd3xvbmF8bmFzfGthc3xoIGt8aSB0fCB1bXx0aW58d28gfCBtZXxhYmF8cmFrfHBhZ3x5YXJ8c3lhfHQga3wgdGV8IG11fG5nbHwgbml8aSBifG1lbnxhdGV8YSBpfGFrdXxlYnV8YSB0fCBkdXxnIG18b3dvfG1hdHwgbHV8YW1wJyxcbiAgICB2aWU6ICduZyB8zKNjIHzMgWMgfCBxdXxhzIAgfCB0aHxuaCB8IG5nfMyjaSB8zIBuIHx2YcyAfCB2YXwgbmh8dXnDqnwgcGh8cXV5fCBjYXzDqsyAbnx5w6rMgHzMgG5ofMyAaSB8zKN0IHwgY2h8b8yBIHwgdHJ8bmfGsHxpIG58IGdpfGfGsMahfMahzIBpfMawxqHMgHzMgXQgfCBjb3zGsMahzKN8IGN1fGHMgWN8xrDMoyB8xqHMo2N8IGtofCDEkcawfMSRxrDGoXwgdMawfGNvzIF8IGhhfMO0bmd8YyB0fCDEkcOqfG4gdHxpIMSRfGnMgG58zIB1IHxjYcyBfGdpYXzMgWkgfG/Mo2l8bW/Mo3wgbW98w6rMgHV8acOqzKN8xJHDqsyAfHUgY3xuaMawfHBoYXwgYmF8IGJpfMOizIF0fMyJYSB8dcyJYXxjdcyJfGjDtG58IMSRw7R8ZyB0fMyBIHF8zINuZ3wgdGl8dMawzKN8dCBjfMyjbiB8IGxhfG4gxJF8biBjfG4gbnxoacOqfGNoIHxheSB8aGF5fCB2aXzDom4gfCDEkWl8IG5hfGJhzIl8IGhvfGRvIHwgZG98IHTDtHwgaGl8w7TMo2l8aGHMgXxpzKMgfG5hzIB8zIAgdHzGocyBaXxow6JufCBtw7R8zIFwIHxhzIBufMyjIGR8zIFjaHzMo3AgfMyAbyB8YcyAb3xraMO0fMyBbiB8w7TMo3R8bcO0zKN8IGjDtHxpYSB8w7TMgWN8YyBofGjGsMyDfGkgdnxnIG58zIFuZ3x1w7TMgXxxdcO0fGggdHzDtG4gfMOqbiB8biB2fG5ow6J8zKMgdHwgYsOifGkgY3xnIHZ8zIluZ3xpw6rMgXxjIGN8w6LMo3R8dGjGsHxoxrAgfMawxqHMgXzMiW4gfCB2xqF8IGPDtHxjIMSRfCDEkW98IHPGsHx0IHR8w7TMo2N8xrDMg258dsahzIF8IHbDqnxhzIkgfMyjbmd8ZyDEkXzMiW8gfGHMiW98dcOizKN8IMSRYXxiacyjfGxhzIB8c8awzKN8YsOizIF8aGHMgHxow7TMo3xpIHR8YcyJbnxoxrDGoXzMgG5nfHRyb3zMiW0gfG8gdnwgbWl8w6rMiSB8dcyjY3xpIGh8xrDMgWN8YcyBcHxnIGN8zIMgaHxpYcyBfG4gYnzMiWkgfGEgbXxoIGN8Y8O0bnzDqsyjbnzGocyBY3xoYcyjfMSRw7TMo3wgZHV8IGPGsHxhIGN8biBofHRoYXxhzIMgfCB4YXzMgW8gfGHMgW98acyBbnzMgHkgfGcgYnwgaMawfGcgaHxvbmd8cm9ufMyAIGN8Y2hvfMyAIG58bWnMgHzGsMyjY3xoIHZ8YyBifCBsdXxpIGJ8w6rMoyB8YWkgfMOqzIEgfMyjIGN8eGHMg3xraGF8YyBxfGnDqsyJfHTDtMyjfMO0zIFpfMSRw7TMgXxhzIEgfGhvYXxvIGh8aCDEkXxjYcyJfG4gbHxob8yjfHRpw6p8eSB0fMyJIGN8YcyjaXxhzIFufMyAIMSRfG9hzIB8eSDEkXxjaGl8zIkgbnxwaMOifMOqzIAgfHRodXxpw6pufGR1zKN8byBjfGkgbXxsdcOifGMgcHzDtMyBbnxjIGx8zIEgY3x1zINufGN1zIN8YyBnfGMgbnxxdWF8biBnfGMgbXxvIG58YcyJaXxoYcyJfMyBIHR8aG8gfHbDqsyAfCB0w6J8IGjGoXxvIHR8xqHMiSB8aMawzIF8aGnMgHx2acOqfMyAbSB8zIkgdHzEkW/MgXx0aMO0fMawzIEgfGPGsMyBfGhpzIF8zIFuaHxhzIB5fMahzIlufMawxqHMiXwgYsSDfHRyaXwgdGF8bSB2fGMgdnzGocyjcHxoxqHMo3xoIG18IG7GsHzDqsyBdHx0aGl8xIPMo2N8bmdofHV5ICcsXG4gICAgaXRhOiAnIGRpfHRvIHwgaW58aW9ufGxhIHwgZGV8ZGkgfHJlIHxlIGR8bmUgfCBlIHx6aW98cml0fGEgZHxvbmV8byBkfG5pIHxsZSB8bGxhfGl0dHxlc3N8IGFsfGlyaXxkaXJ8dHRvfGVudHxlbGx8aSBpfGRlbHxuZGl8ZXJlfGluZHxvIGF8IGNvfHRlIHx0w6AgfHRpIHxhIHN8dW8gfGUgZXxnbml8YXppfCBwcnxpZHV8aXZpfGR1b3x2aWR8ZGl2fG9nbnwgb2d8IGVzfGkgZXwgaGF8YWxsfGFsZXxudGV8ZSBhfG1lbnxzZXJ8IHN1fCBuZXxlIGx8emEgfGkgZHxwZXJ8YSBwfGhhIHwgcGV8IHVufGNvbnxubyB8c3NlfGxpIHxlIGl8IG8gfCBzb3wgbGl8IGxhfHByb3xpYSB8byBpfGUgcHxvIHN8aSBzfGluIHxhdG98byBofG5hIHxlIHN8YSBsfGUgb3xuemF8YWxpfHR0aXxvIHB8dGEgfHNvIHxiZXJ8aWJlfGxpYnxvIGV8dW4gfCBhIHwgcml8dWEgfGlsIHwgaWx8bnRvfHByaXxlbCB8IHBvfHVuYXxhcmV8YW1lfCBxdXxhIGN8cm8gfG9uaXxuZWx8ZSBufCBhZHx1YWx8Z2xpfHN1YXxvbmR8IHJlfGEgYXxpIGN8cmkgfG8gb3xzdGF8aXRhfGkgb3wgbGV8YWQgfGkgYXxlcnN8ZW56fHNzaXzDoCBlfGl0w6B8Z3VhfGkgcHxlIGN8aW8gfCBwYXx0ZXJ8c29jfG5hbHxvbmF8bmF6fGlzdHxjaWF8cnNvfHZlcnxhIGV8aSByfHRhdHxsbGV8c2lhfCBzaXxyaW98dHJhfGNoZXwgc2V8cnTDoHxlcnR8YW56fGVyaXx0dXR8w6AgZHxoZSB8IGRhfGFsIHxhbnR8cXVhfG9uIHxhcml8byBjfCBzdHxvY2l8ZXIgfGRpc3x0cml8c2kgfGVkIHwgZWR8b25vfCB0dXxlaSB8ZGVpfHV6aXxjb218YXR0fGEgbnxvcHJ8cm9wfHBhcnxuZXN8aSBsfHp6YXxlc2V8cmVzfGllbnxzb258IGVnfG4gY3xvbnR8bnRpfHBvc3xpbnR8aWNvfHLDoCB8c3VufGlhbHxsaXR8c2VufHByZXx0dGF8ZGV2fG5pdHxlcmF8ZXZlfGxsIHxsIGl8IGwgfG5kYXxpbmF8bm9ufCBub3xvIG58cmlhfHN0cnxkIGF8YXJ0fHNlIHxzc3V8aWNhfHJhenxldHR8c2NpfGdpb3xhdGl8ZWd1fCBuYXxpIHV8dXR0fHZlIHwgbWF8ZG8gfGUgcnxzc2F8c2EgfGEgZnxuIHB8Zm9ufCBjaHxkIHV8cmltfCBmb3xhIHR8IHNjfHRyw6B8b3RyfHBvdHxuIGl8IGN1fGwgcHxyYSB8ZXp6fGEgb3xpbml8c3NvfGRpY3xsdHJ8dW5pfGNpZXwgcmF8aSBufHJ1enx0cnV8c3RlfCBpc3xkZXJ8bCBtfGEgcnxwaWV8bGlhfGVzdHxkYWx8bnRhfCBhdHx0YWx8bnRyfCBwdXxubm98YW5ufHRlbnx2aXR8YSB2JyxcbiAgICB0dXI6ICcgdmV8IGhhfHZlIHxpciB8bGVyfGhha3wgaGV8aGVyfGluIHxsYXJ8ciBofGJpcnx5YSB8ZXIgfGFrIHxra8SxfGFra3xldGl8IGthfCBiaXxleWF8YW4gfGVyaXxpeWV8eWV0fGFyYXxlayB8IG9sfGRlIHx2ZXl8xLFuIHzEsXIgfG5kYXxhcsSxfGVzaXzEsW7EsXxkxLFyfCB0YXx0bGV8ZSBofGFzxLF8ZXRsfGUga3wgdmF8xLEgdnxzxLFufGlsZXxuZSB8cmtlfGVya3xhcmR8aW5lfCBzYXzEsW5kfGluaXxrIGh8a8SxbnxhbWF8bGUgfHRpbnxyZMSxfHZhcnxhIHZ8IG1lfGUgbXxuYSB8c2lufGVyZXxrIHZ8IMWfYXwgYnV8bGFufGtlc3xkaXJ8cmlufGRhbnwgbWF8a8SxIHxtYWt8xZ9haHxkYSB8IHRlfG1la3wgZ2V8bsSxIHwgaGl8bmlufGVuIHxuIGh8IHNlfGxpa3xybGV8YW5hfGxtYXxlIGF8xLEgaHxyIMWffGlsbHxzaSB8IGRlfGF5YXx6ZGl8aXpkfGFpenxoYWl8cmV0fGhpw6d8xLFuYXwgacWffGUgYnwgYmF8a2xhfGV0IHwgaMO8fHLEsW58biBrfG9sYXxubWF8ZSB0fCB5YXxlbWV8cml5fG4gdnxlIGl8YSBofGxpIHxtaWx8ZWxpfGtldHxpayB8a2FyfGlybHxow7xyfGltIHxldmx8bWVzfGUgZHxhaHN8bWEgfHJha3xhbGF8bGV0fGxsZXx1biB8IGVkfHJyaXzDvHJyfGJ1IHwgbWl8aSB2fGRpbHwgaWx8IGXFn3xuIGl8bGEgfGVsIHxtYWx8IG3DvHwga298ZSBnfHNlIHwga2l8bWFzfGxla3xtbGV8bWVtfG4gYnxpbGl8ZSBlfHNlcnwgacOnfG4gc3xkaW58IGRpfGVzIHxtZWx8ZWtlfHRpcnzFn2l0fGXFn2l8ciBifGFrbHx5bGF8biBtfGxlbnwga2V8ZWRpfG9ydXxuZGV8cmUgfGVsZXxuaSB8dMO8cnxhIGt8ZXllfMSxayB8a2VufHXEn3V8IHV5fGVtbHxlcmR8ZWRlfGFtZXwgZ8O2fGUgc3xpIG18dGltfGkgYnxyZGV8csWfxLF8YXLFn3xhIHN8aXQgfHQgdnxzaXl8YXIgfHJtZXxlc3R8YmVzfHJiZXxlcmJ8dGUgfGFsxLF8IGFufG5kaXxlbmR8aHPEsXx1bm18csSxIHxrb3J8bsSxbnwgY2V8bWF6fG1zZXxpbXN8a2ltfGnDpyB8IGF5fGEgbXxsYW18cmkgfHPEsXp8YSBifGFkZXxuIHR8bmFtfGxtZXxpbG18ayBnfGlsIHx0bWV8ZXRtfHIgdnxlIHZ8biBlfMSfcmV8w7bEn3J8IMO2xJ98YWwgfMSxeWx8b2xtfHZsZXzFn21hfGkgc3xnZXJ8bWUgfCBkYXxpbmR8bGVtfGkgb3xtYXl8Y2FrfMOnaW58acOnaXxudW58a2FufHllIHxlIHl8ciB0fGF6IHzDpyBrfGVjZXxzxLEgfGVuaXwgbXV8dWx1fHVuZHxkZW58bHVufCBmYXzFn8SxIHxhaGl8bCB2fHIgYXxzYW58a2F0fCBzb3xlbm18IGV2fGnFnyAnLFxuICAgIHBvbDogJyBwcnxuaWV8cHJhfCBpIHxuaWF8aWUgfGdvIHxhbml8cmF3fGlhIHwgcG98ZWdvfCBkb3x3aWV8aWVrfGF3b3wgbml8b3dpfGNoIHxlayB8ZG8gfCBtYXx3byB8YSBwfMWbY2l8Y2kgfGVqIHwgY3p8IHphfCB3IHx5Y2h8b8WbY3xyemV8cHJ6fCBrYXx3YSB8ZW5pfCBuYXwgamV8YcW8ZHxrYcW8fG1hIHx6xYJvfGN6xYJ8bm/Fm3xvIGR8xYJvd3x5IGN8ZHkgfMW8ZHl8aSBwfHdvbHwgbHV8bnkgfG9sbnwgd3l8c3R3fCB3b3x1YiB8bHVifGxub3xyb2R8ayBtfHR3YXxkeml8bmEgfCBzd3xyenl8YWrEhXxlY3p8Y3pufHN0YXwgc3B8b3dhfG8gcHxzcG98aSB3fGtpZXxhIHd8enlzfG9ib3xlc3R8bmVnfGHEhyB8bWkgfGN6ZXxlIHd8bnljfG5pY3xqYWt8IGphfHdzenwgeiB8amVnfHdhbnzFhHN0fG8gc3xhIGl8YXdhfGUgcHx5c3R8cG9zfHBvd3wgcsOzfG8gb3xqxIVjfG9ueXxuZWp8b3dvfGRvd3zDs3cgfCBrb3xrb2x8YWtpfGJlenxyYWN8c3plfGllanwgaW58emVufHBvZHxpIGl8bmkgfCByb3xjeSB8byB3fHphbnxlxYRzfG5vIHx6bmV8YSBzfGx3aXxvbHd8ZXogfG9kbnxyw7N3fG9kenxvIHV8bmUgfGkgbnxpIGt8Y3p5fCBiZXxhY2p8d29ifGlubnwgb2J8w7N3bnx6aWV8IHdzfGFsbnxvcnp8bmlrfG8gbnxpY3p8enlufMWCZWN8b8WCZXxwb8WCfGFyb3xuYXJ8YSBqfGkgenx0xJlwfHN0xJl8aWVufGN6YXxvIHp8eW0gfHplY3xyb258aSBsfGFtaXwgb3N8a3JhfCBrcnxvd2V8IG9kfGppIHxjaml8bWllfGEgenxib2R8c3dvfGRuaXx6ZXN8ZcWCbnxwZcWCfGl1IHxlZG58aWtvfGEgbnxyYWp8IHN0fG9kb3x6bmF8d3ljfGVtIHxsbml8c3p5fHdpYXxueW18xIUgcHxqxIUgfHplxYR8aWVjfHBpZXxzdCB8amVzfCB0b3xzb2J8a3TDs3xhbGV8eSB3fGllZ3xvY2h8ZHUgfGluaXx3YXJ8emF3fG5ueXxyb3p8aSBvfHdlanxpxJkgfHNpxJl8IHNpfG5hdXwgb3J8byByfGtvcnxlIHN8cG9wfHphc3xuaXV8eiBwfG93eXx3IGt8eXdhfCB0YXx5bWl8aHJvfGNocnwgb2N8amVkfGtpIHxvIHR8b2dvfG9ieXxyYW58YW55fG9zb3xhIG98dMOzcnwga3R8dyB6fGRuZXx0byB8dGFufGggaXxuYW58ZWpzfGFkYXxhIGt8aWVtfGF3IHxoIHB8d25pfHVjenxvcmF8YSBkfCB3xYJ8aWFufCBkenwgbW98ZSBtfGF3aXzEhyBzfGdhbnx6ZXp8bXUgfHRhd3xkc3R8d2nEhXx3IGN8eSBwfGtvd3xvIGp8aSBtfHkgc3xib3d8a29nfGJ5IHxqIG98aWVyfG1vd3xzemF8YiBvfGp1IHx5bmEnLFxuICAgIHN3aDogJ2Ega3wgeWF8bmEgfHdhIHx5YSB8IGt1fGEgbXwgbmF8IGhhfGkgeXwgd2F8YSBofGEgbnxhbmF8YWtpfGtpIHxsYSB8aGFrfCBrYXxrd2F8dHUgfCBrd3wgbWF8bGkgfGEgYXxpbGF8aSBrfCBraXxuaSB8YSB3fGFsaXxhIHV8IGFufCBtdHxrZSB8bXR1fGEgeXxha2V8YXRpfGtpbHxrYSB8aWthfGthdHxpbGl8dGUgfG90ZXx3ZSB8YSBzfGUga3xpYSB8emkgfHUgYXx6YSB8YXppfGlmYXxtYSB8eWFrfHlvIHxpIG58YW1hfCB5b3xhdSB8IGF1fGUgYXxrdXR8YW1ifG8geXxoYSB8YXNpfGZhIHx1IHd8aGFsfGFyYXxzaGF8aXNofGF0YXxheW98IGFzfHRpa3x1IGt8IHphfGkgenxpbmF8dSBufG1iYXx1aHV8aGkgfGh1cnxjaGF8eW90fHJ1IHx1cnV8d2F0fCBjaHxlcml8bmdpfGUgeXx1IHl8aSBhfGFpZnx0YWl8IHNofG5heXxjaGl8cmEgfGFuaXwgYml8IHVofHNhIHwgaGl8aSBofGF3YXxpd2F8YSBqfHRpIHxtdSB8byBrfGphIHxrYW58dWxpfGl3ZXxhbnl8aSB3fCBhbXxlIG58ZW5kfGF0dXxrYXp8byBofHJpYXxoZXJ8c2hlfHNoaXxuY2h8IG5jfHV0YXx5ZSB8d2FrfGlpIHxlbGV8YW1pfGFkaHxlemF8IHdvfGlraXxvamF8bW9qfGphbXwgamF8YWthfGJ1IHxrYW18a3VsfG1hdHxmYW58YSBsfGFndXxpbmR8bmUgfGlyaXxsaW18d2VufGRhIHxrdXB8dXRvfGkgbXxhIGJ8aW5pfHdhbnxiaWx8IHRhfHN0YXxkaGF8IHNhfCBuaXxhbyB8IGh1fGUgd3x3b3R8IHppfHJpa3xrdWZ8YWppfHRhIHx3ZXp8bnlhfGhhcnwgeWV8ZSBtfHNpIHxsaW58IHV0fGluZXxnaW58aW5nfCBsYXxhIHR8emltfGltdXxpbWF8dGFrfGUgYnx1bml8aWJ1fGF6b3xrb3N8eWFufG55ZXx1YmF8YXJpfGFoaXxuZGV8YXNhfHJpIHxoYW18ZGhpfGVsaXxoaXJ8dXNofHBhdHwgbmR8a3VzfG1hYXxkaSB8bmRhfG9hIHxiYXJ8Ym8gfG1ib3xva2F8dG9rfG5kd3xhbGF8d2FsfCBzaXx1eml8aGlpfHRhaHxpIHN8byBufGxpd3wgZWx8dXBhfHppbnxoYWd8YSBjfG5kaXxhaXN8bWFpfGVueXxtd2V8YWEgfGV3ZXwgYWx8bmRvfGUgaHxsbyB8dW1pfGt1aHxqaWJ8b3NhfG1hbXxhIHp8dWZ1fGR3YXx1IGl8IGlufGl5b3xueWl8IG55fHUgbXxzaWx8YW5nfG8gd3xndXp8endhfHV3YXxrdXd8aGlsfHNhd3x1Y2h8dWZhfGxhenx1bmR8YWhhfHVhIHwgbXd8YmFsfCBsb3xvIGx8YSBpfGRlbHxudW58YW51fG5qaXwgYmF8bGlrfGxlIHx1a3V8aSBpJyxcbiAgICBzdW46ICdhbiB8bmEgfGV1bnxuZyB8IGthfGFuYXwgc2F8IGRpfGFuZ3x1bmd8dW4gfG5nYXxhayB8IGhhfGtldXwgYmF8YSBifCBhbnxudSB8aGFrfCBib3xhbnV8YXRhfG5hbnxhIGh8aW5hfCBqZXxhaGF8Z2EgfGFoIHxhd2F8amV1fCBuYXxhcmF8aW5nfG9nYXxib2d8Z2FufCBuZ3xhc2F8a2FufGEgc3xoYSB8YWUgfGJhZXxuIGt8YSBrfCBwYXxhIHB8c2FofGcgc3xzYXJ8IHNpfHNpbnxhIG58ZGlufG4gc3xtYSB8IGF0fGFnYXxhIGF8dGFufCBrdXwgbWF8biBhfHNhbnxtYW58d2EgfGxhaHxwYW58dGF3fHUgZHxyYSB8YXJpfGV1IHwgcGl8Z2FyfCBwZXxrYXR8IHRlfG4gcHxzYSB8cGVyfGEgZHxhIG18ZSBifGFhbnxiYW58cmFufGFsYXxpa2V8biBufGt1bXwgdGl8YW1hfGEganxwaWt8aW1hfG4gZHxhbCB8YXQgfCBqYXxpbGF8dGEgfG5kYXxiYXN8cmltfHRldXxuIGJ8ZWJhfGJlYnx1ZHV8YXlhfGlrYXxuZ2d8bmFnfGthYnxydGF8YXJ0fCBtZXxvbGF8ayBufHVtYXxhdHV8YWJhfGcga3xhZGl8YWNhfCBwb3xuZ3R8bmFyfHVuYXxhdGV8b2ggfGJvaHxhd2V8ZGkgfHRpbnxhc2l8dWt1fG4gaHxkYW58YWthfGliYXxjYXJ8c2FjfGdhd3xhcmV8ZW50fHVtIHxqZW58YWJlfHUgc3xkaWx8cG9sfGFyIHxrdSB8a3VkfHUgbXx1cGF8aGFufCBodXxha2V8YmFyfHVyIHxobmF8YXJ1fGggc3xhIHR8c2FrfHdhdHxrYXd8IHNvfG4gdHxwYSB8bXBhfGR1IHxuZ2t8ZyBkfGVuYXxodWt8IG1pfG1hc3xuZ3N8dGkgfG4ganxrYSB8YWt1fHJlbnxuIG18IHRhfGxhd3xpc2F8IHR1fHVuZHxhIHV8aCBhfHRheXx1bGF8YWphfGFsaXxudGV8Z3NhfGVuIHxnYW18IHdhfGlldXxlcmV8ayBofGphbHxoIGJ8aWwgfGRpdHxuZ3V8bGFufGFzdXx5dW58YXl1fGd0YXxrIGR8YSByfGcgbnxtYWh8dWRhfGRpcHxrYXN8cnVwfGdldXwgYmV8dGVyfHNlanxtaW58cmkgfGVybnx1IHB8ayBrfGFtcHx1cmF8a2FsfGUgYXxrIGF8dXQgfGcgYnxuYWt8YmlzfCBiaXxrIHB8dGVzfGVuZHx3ZSB8aCBrfHR1bnx1YW58IHVufCBkZXx1IG58aCB0fGtzYXx1IGt8aWFufHdpbHx1IGJ8b25hfG5hc3x1a2F8cmFrfGVqZXwgc2V8YW1pfCBrZXx3YXJ8IHJhfCBpZXxrIGp8ZWggfHlhIHxsbWF8YWxtfHBlbnx0dXJ8d2FufGxha3xoIGp8ZyBhfGVhbnx1cCB8cmdhfGFyZ3xyIGt8dSB0fCBuZXxkZXV8Z2FsfGdrZXxlIHR8aCBwfCBnZXxnIHR8IGRhfGkgbicsXG4gICAgcm9uOiAnIGRlfHJlIHwgw65ufMiZaSB8YXJlfGRlIHwgyJlpfHRlIHx1bCB8IHNhfHJlcHxlIGR8ZWEgfGVwdHxkcmV8dHVsfGUgYXwgZHJ8aWUgfMOubiB8cHR1fGxlIHxhdGV8bGEgfGUgcHwgbGF8IHBlfG9yaXwgcHJ8Y2UgfGUgc3wgb3J8YXUgfHRhdHwgYXJ8aWNlfGlpIHxvciB8YSBzfCBmaXwgYSB8cmljfGFsZXxwZXJ8IGNvfG7EgyB8xIMgYXxyZWF8ZXJzfGkgc3wgbGl8c2F1fCBjYXxyc298ZW50fGxvcnxhyJtpfGFsIHxhIGR8ZSBvfG1lbnxsIGx8ZWkgfGUgY3xwcml8YW7Eg3wgYWN8IHJlfHVyaXxiZXJ8aWJlfGxpYnxhIHB8b2FufHNvYXwgaW58aSBsfHRlcnwgYWx8IHPEg3x0ZWF8bMSDIHxjYXJ8dMSDyJt8c8SDIHx0dXJ8aSBhfGkgZHxuYWx8IG5pfHJpIHxpdGF8ZSDDrnxlIMiZfHNlIHxpbG98aW4gfGlhIHzIm2llfHByZXxmaWV8yJtpaXzEg8ibaXxjb258ZXJlfGUgZnxhIG98ZW5pfG50ZXwgbnV8IHNlfGFjZXxpcmV8aWNpfCBjdXxpIMOufGEgY3xpIG58YSBsfHBlbnx1aSB8bnUgfMSDcml8YWzEg3xvbmF8bCBkfHLEgyB8ZXJ0fHJpbHwgc3V8bnRyfG4gY3xyaW58IGFzfG5pIHxpIG98ZXJpfHTEgyB8Y8SDIHxpbGV8xIMgZHxpIGN8ZSBufGVsZXxzYSB8IG1vfGkgcHxmaSB8c2FsfHRvcnx2YSB8b2NpfHNvY3xuaWN8cHJvfCB1bnwgdHJ8ZXN0fGluyJt8YSDDrnx1bml8biBtfGEgYXwgZGl8ZWN1fGx1aXxzdGF8bGl0fCBwb3x0cmV8Z2FsfGVnYXxvYXR8cmEgfGFjdHzEgyDDrnxsZWd8dSBkfGUgbHxuZGV8aW50fGEgZnxuIGF8IHNvfG5hyJt8YXJhfGkgZnx1aWV8aXVufCB0b3x0YXJ8c3RlfGNlc3xyYXJ8YXQgfCBjZXxlbWV8aSDImXxyZWN8ZGVwfCBjxIN8IG8gfCDDrm18YnVpfGVidXxyZWJ8IGVnfCBuYXxtw6JufG50dXxpbGl8dsSDyJt8w6JuZHxpZWl8ciDImXxiaWx8cGxpfG9kIHxtb2R8cmVzfGRpbnxlIGV8Y8ibaXwgYXV8YWxpfMSDIHB8xIMgZnzDrm1wfGlhbHxjaWF8aW9ufMSDIGN8ZGVjfG50YXwgb218aXTEg3wgZmF8yJvEgyB8Y3UgfHRyYXzEg8ibxIN8bnbEg3zDrm52fMOidCB8aXRlfGkgaXxsaWN8IHB1fCBleHxyaXZ8dHJpfHJvdHzIm2EgfMibaSB8bCBjfHJ0YXxpbWl8dWx1fMibaW98aWPEg3xsaWd8cmVsfHRhIHxjbGF8dCDDrnxudCB8bml0fGUgbXzDom50fMSDbcOifMibxINtfGdlcnxuyJthfHJ1IHx0cnV8Z3VyfHUgY3xibGl8YWJpfGF0xIN8YXJ0fHBhcnxhciB8cmltfGl2YXxsIMiZfCBzY3xpbWV8bmltfGVyYXxzdXB8aW5kfHUgYXxkaWN8aWMgfCBzdHwgdmF8aW5pfGlnaXxlIHInLFxuICAgIGhhdTogJ2RhIHwgZGF8aW4gfGEga3x5YSB8YSBkfCB5YXxhbiB8YSBhfCBrb3wgd2F8bmEgfCBhIHxzYSB8IGhhfGtpbnx3YW58dGEgfCBiYXxhIHN8IHRhfGEgeXxhIGh8d2EgfGtvIHwgbmF8biBkfGEgdHxiYSB8bWEgfG4gYXwgbWF8aXlhfGhha3xhc2F8IHNhfGFyIHxhdGF8eWFufCB6YXxha2t8YSB3fGFtYXwga2F8aSBkfGlraXxhIG18b3dhfGEgYnwgY2l8IG11fCBzaHxhbmN8bmNpfGtvd3xhIHp8YWkgfG5zYXxhIGN8c2hpfCDGmWF8Y2lrfG5lIHxhbmF8aSBrfGNpIHxra2l8ZSBkfGEgxpl8IGt1fHN1IHxuIHl8dW1hfGthIHx1d2F8a3VtfGhpIHxhIG58dXR1fCB5aXxhbml8IGdhfCByYXxha2F8YWxpfG11dHzigJh5YXx0YXJ8IGRvfMmXYW58YXJzfCDigJh5fHNhbXzGmWFzfG5kYXxhbmV8bWFufHR1bXxpIGF8eWkgfG5pIHwgZHV8YWRhfCBzdXxhbmR8YSBnfGNpbnwgYWR8YSBpfGtlIHwgyZdhfG4ga3x5aW58dW0gfGUgbXwgYWJ8aW5zfG5hbnxraSB8bWkgfGFtaXx5YXJ8bWlufG9rYXxyZSB8aSBifGthbXxtYXN8aSB5fG1hdHx6YSB8YW5ufGVuIHxhyZdhfCBqYXxtIG58bGkgfGR1a3xkYWl8ZSBzfG4gc3xyYSB8biB3fG4gaHxhaWt8IGFpfGlkYXxnYSB8c2FufHJzYXxhYmF8c2FyfGNlIHxuaW58IGxhfG8gbnxiYW58bm5hfGthbnxhYml8dW5hfGRhbXxtZSB8YXJhfGkgbXxoYWx8YSByfGFkZHxhcmV8biBqfGFidXwgbmV8emFpfGEgyZd8d2F0fGFyaXwgxpl1fG9uIHxhbnN8d2HJl3xhbWV8YWtlfGthcnxkaW58emFtfCBmYXxhIGx8xpl1bnxidXd8ciBkfCBodXxva2l8a29rfGEg4oCYfHUgZHxuIHR8YWJifGF1cnwgaWR8cmlufHlha3xkb2t8a2l5fHJheXxqYW18biBifHVidXxidWJ8biBtfGkgc3wgYW58YW0gfGlsaXxiYmF8b21pfGRhbnxnYW18YXl1fGFzaHxuY2V8dHNhfGF5aXxoYXJ8eXlhfGlrYXxiaW58aGFufGtrb3xyc3V8YWlmfGltaXxmYSB8IGFtfGkgaXxkb218IGtpfHl1d3xkdW58byBhfGZhbnxuIMaZfGF5YXxmaSB8biByfHNoZXx1bml8YmF5fHJpeXxuIOKAmHxzYWJ8IGl5fGJhdHx0YWJ8YWdhfCBpcnxtYXJ8byB3fGkgd3xzaGF8YXdhfCBha3x1bnN8dW5jfHR1bnx1IGt8IGlsfMmXaW58bWZhfGFtZnxhY2l8ZXdhfGthc3xsaW58biBufGRvbnxuIGl8dXJlfGlmaXxsYWl8ZGRhfCB0c3xpcml8YXllfHVuIHx0YW58d2FkfGd3YXxhZml8IGF5fGFjZXxtYmF8YW1ifGFpZHxudGF8YW50fHdhcnxsaW18a3lhfCBhbHxhyZdpJyxcbiAgICBmdXY6ICdkZSB8IGUgfGUgbnwgaGF8bmRlfGxhIHwgd2F8aW5hfCBrYXxha2t8IG5kfMmXbyB8bmEgfCBpbnxlIGV8aGFrfGFsIHxkaSB8aSBofGtrZXxpaSB8dW0gfGtvIHxhbGF8bmRpfCBtdXwgbmV8bGxhfCBqb3x3YWx8ZcmXyZd8bmXJl3xhbGx8bXVtfCBmb3xrYWx8am9nfGtlIHxhYXd8dGFhfCBrb3xlZWR8yZfJl298YWEgfCBsZXxqaSB8YWRlfGFhZHxsYWF8byBrfCBuZ3xlIGh8IHRhfHJlIHxvZ2l8YSBqfGUgd3xlIG18bm5kfGdpaXxlIGx8bGV5fGF3YXxhYWd8ZWRlfHdhYXxlIGt8Z3UgfGUgZHwgZ298Z2FsfMmTZSB8dGkgfGZvdHxhYW58ZXlkfHlkaXzJl2UgfGVlIHwgcmV8b2wgfG90b3xpIGV8b3RpfG0gZXx0YXd8bmdhfGEgaXxrZWV8dG8gfGFubnxlaml8YW0gfG5pIHwgd298ZWVufGdvb3xlZWp8ZSBmfCBoZXxlbm58Z29sfGFndXxwb3R8IHBvfGRlZXxheSB8IGZhfGthIHxhIGt8b25kfG9vdHwgZGV8YSBmfG8gZnxhIG58d2EgfG1hYXxvdGF8bGUgfGhheXxpIGt8byBufG5nb3xlIGp8byB0fCBqYXzDsWFhfGhlZXxua2F8aSB3fGF3aXxhIHd8bmd1fGRlcnwgdG98ZSB0fGRpbXxpIG58Zm9mfGkgZnxlIGd8dGVlfG5hYXxhYWt8IGRvfHRvb3xhIGV8bmRvfHJlbnxkaWl8b29yfGVyIHxvIGV8aSBtfG9mIHwgc2F8IHNvfGdhYXxhbml8a2FtfCBtYXwgw7FhfG8gd3xpIGx8dSBtfGthYXxpbWF8ZGlyfCBiYXxpZ2d8bGlnfCBsaXxhYXJ8IMmTZXxvIGl8ZSBzfCBvIHxlIHJ8c28gfG9vanwgbmp8IGxhfHdvbnxhd298ZG93fHdvb3xmYXd8YW5kfGUgaXxvcmV8bmdlfG5hbnxhcmV8YSB0fHRpbnxhYW18IG1vfMmXZWV8aXRhfGlyYXxhYcmXfGUgcHxubmd8bWEgfGFua3x5YW58bmRhfG9vIHxlIMmTfG5qb3x1ZGV8bmVlfGUgeXxlIGF8amUgfCB5YXxlbiB8aW5lfGlpbnwgZGl8cmFsfCBuYXzJl2kgfHVuZHwgaHV8aW5ufMWLZGV8YcWLZHxqYcWLfGEgZHxkZW58IGZlfCB0ZXxnbyB8IHN1fGEgaHxoYWF8dGFsfGXJl2V8ZSBifHkgZ3xiYWF8dGRlfCB5aXzJl8mXYXxvIGh8aWnJl3xvdyB8IGRhfGRvIHxsIG58YWx0fCBob3xsIGV8YWdhfG1paXwgYWF8YSBhfGFtYXxubmF8bSB0fCBrZXxlZGR8b2dhfG0gd3xsIG18byBqfGHJl2V8cmVlfG9qZXx5ZWV8IG5vfGVsZXxuZSB8YWdvfCBwYXwgYWx8Z3V1fHdpIHxnZSB8YWHJk3xkYWF8aW5kfGRld3xpIGp8amV5fCBqZXxlbnR8dGFufG8gyZd8Z2XJl3wgZ2V8w7FlZXxhIGx8IMmXdXxra298bWFrfGEgc3wgZ2EnLFxuICAgIGJvczogJyBwcnwgaSB8amUgfHJhdnxuYSB8bWEgfHByYXwgbmF8aW1hfCBzdnxhIHN8ZGEgfGEgcHx2byB8bmplfGtvIHxha298YW5qfG8gaXwgcG98YXZvfGphIHxlIHN8YSBpfHRpIHwgaW18IGRhfCB1IHxzdmF8bm8gfGp1IHwgemF8byBufHZhIHxpIHB8aWxpfHZha3xsaSB8IGtvfG5lIHwgaWx8a29qfCBuZXxuamF8IGRyfG9zdHwgc2x8dmFufGltIHxpIHN8dSBzfGkgaXxhIG58YXZhfGlqZXxhIHV8IGJpfHN0dnxzZSB8YSBkfG9tIHxqZWR8Ym9kfG9ib3xsb2J8c2xvfCBzZXwgcmF8aWggfHN0aXwgb2J8IGplfHByaXxlbmp8ZHJ1fHUgaXxvIGR8aXRpfHZvanxyYXp8b3ZhfGRqZXwgb3N8ZSBpfGxvIHxlIHB8IG5qfHVqZXxpIGR8YnJhfHRyZXwgdHJ8IHN1fGplZ3xpIG58dSB6fGEga3xvZyB8dSBwfG9qZXxjaWp8cmVifGEgb3xhIGJ8bGp1fGkgdXxyYW58bWlqfG5pIHxub3N8amVufGJhIHxlZG58c3ZvfCBpenxqZWx8cHJvfGUgZHzFvmF2fGJpdHwgbml8aSBvfHN0YXxhIHp8YXZufHZqZXwga2F8YmlsfG92b3xhIGp8YWp1fGlzdHxuaWh8dHUgfHJlZHxnb3Z8IG9kfGUgb3xvaml8IHNtfGxqZXxvIGt8aWxvfGppIHxhY2l8ZSB1fGUgbnxwcmV8byBwfGViYXx1IG98c3UgfHZpbXxpxI1ufCBzYXx1IG58IGRqfGEgdHxpamF8xI1ub3xqZW18csW+YXxkcsW+fGVsanxzdHV8ZG5hfG9kbnxlbml8emEgfGl2YXxvbGp8xaF0aXxub218ZW0gfGR1IHx2bm98c21pfGplcnxlIGJ8ZGUgfHBvc3xtIGl8IGRvfHUgZHxuYWt8YSByfG9icnwgbW98bGphfG5pbXxlZ298IGtyfHRpdHxrcml8dmUgfG5qdXxhbiB8aWtvfG5pa3xudSB8aSBtfG5vZ3xlbm98c25vfCBzdHxlIGt8dHVwfHJ1Z3xrYSB8b2RhfHJpdnx2b2x8YWxufG0gc3xpdHV8YcWhdHx6YcWhfGFuaXxzYW18YWt2fG92aXxvc258cm9kfGFyb3wgbWl8dHZhfGRub3xuc3R8amFufGFrIHxpdGV8dmnEjXxyYWR8dSBtfCB0YXxkc3R8dGl2fG5hY3xyaW18a29ufGt1IHxvZHV8xb5pdnxhbW98dHZvfHRlbHxwb2R8ZyBwfG5vdnxpbmF8bmFyfCB2anxvIHN8aSBifG9qIHwgb3Z8YXZlfHZ1IHxhbnN8b2phfHpvdnxhem98dWRlfGJ1ZHwgYnV8ZSB0fGkgdnxkaW58ZWRpfG5pY3x0YW58bmFwfG1qZXwgaXN8amFsfHNsdXxwdW58ZWRzfG8gb3x6YWt8amF2fGkga3xtIHB8dG5vfGl2b3xlcmV8bmnEjXxtIG58amltfGtha3xhZGF8dm5pfHVnaXwgcm98bW92fHZlbnxwb2x8dG8gfHRlIHwgdnInLFxuICAgIGhydjogJyBwcnwgaSB8bWEgfHJhdnxpbWF8cHJhfGplIHxuYSB8IHN2fHRpIHwgbmF8YSBwfHZvIHx2YXR8a28gfGEgc3xuamV8IHBvfGFuanxhdm98byBpfHRrb3wgaW18YSBpfHN2YXxubyB8aSBwfGUgc3xqYSB8byBufCB6YXxqdSB8aWxpfCB1IHx2YSB8bGkgfCBiaXxuZSB8aSBzfGF0a3wgaWx8aXRpfGRhIHwgbmV8IGtvfCBkcnwgc2x8dmFufG5qYXxrb2p8aWplfCByYXxvdmF8IG9zfHUgc3xpIGl8b3N0fGJvZHxvYm98bG9ifHNsb3xwcml8YSBufG9tIHxqZWR8YXRpfGloIHxpbSB8dm9qfGF2YXwgb2J8c3R2fHNlIHwgbW98aSB1fGJpdHxkcnV8IGplfCBzZXxkamV8aSBvfGVuanwga2F8aSBufHN0aXxsbyB8dSBpfHN2b3xtaWp8bmkgfGUgaXxyYXp8YSBvfGUgbnxicmF8byBwfCBzdXxhIGJ8dSBwfHJhbnxhIGt8b2cgfGkgZHxiaWx8YWtvfGUgcHxhIGR8ZWRufGFqdXxtb3J8ZW5pfCBuanxpdmF8amVsfMW+YXZ8IG5pfGEgenxhdm58b3ZpfGVub3xyYSB8b2plfGEganwgZGF8YSB1fG9yYXxqZWd8IGl6fG5paHxyxb5hfGRyxb58b2ppfHNub3xuaXR8amVufHZqZXxpbG98Y2lqfG9kYXxuaW18IGRqfHByb3x0aXR8dSB6fGUgZHxyZWR8bm9tfGplbXwgb2R8bm9zfHN0YXxub3Z8b3NufCBzbXxsamV8byBzfGppIHxvdm98c3R1fHBvc3x2aW18IGRvfG9kbnxyYWR8aXN0fCBzYXxlIG98dHUgfG5qdXxlbSB8Z292fG8gZHxyb2R8aSBtfGplcnxhY2l8b2ogfHByZXxtIGl8bmFrfGRuYXxhIHJ8bGp1fHVqZXxlIG18b2JyfHphIHxvbGp8dmUgfG8gb3xtIHN8YW4gfG51IHxkdSB8YXJvfHZub3xzbWl8YWxufGUga3xvIGt8aSBifGUgdXx0dmF8dSB1fHR1cHxydWd8ZG5vfHUgb3xzdSB8dSBkfGthIHx2b2x8IHRhfGlqYXxpdHV8xaF0aXxhxaF0fHphxaF8aXRrfMW+aXZ8YW5pfHNhbXxlbGp8IHN0fHNvYnxvc298bmFyfGFrdnxhZGF8IG1pfHRlIHxvbmF8bnN0fGphbnxsamF8aSB2fGl0ZXxlZ298ZWxvfHJpbXxrdSB8b2R1fGFtb3x0dm98dGVsfGppbXxwb2R8bm9nfHZpIHxpbmF8IHZqfHRvIHxlIGJ8YW5zfHpvdnxhem98YWsgfCBza3xlZGl8dGFufG9qdXxwdW58cG90fG90aXxrb258emFrfGkga3xtIHB8dG5vfGl2b3xlcmV8bmnEjXxrYWt8dm5pfHVnaXwgcm98bW92fHZlbnzFoXR2fCBiZXxhcmF8a2xhfGF2ZXx1IGJ8YXZpfG9qYXxqYWx8dSBtfGRuaXxtamV8cmFrfGRpbnzEh2kgfGp1xI18a2xqfG5pY3x1IGt8bmFwfG9iaXxhdG4nLFxuICAgIG5sZDogJ2VuIHxhbiB8ZGUgfCBkZXwgaGV8aW5nfGNodHwgZW58ZGVyfHZhbnwgdmF8bmcgfGVlbnxldCB8ZWNofCBnZXwgZWV8biBlfHJlY3wgcmV8biB2fG4gZHxuZGV8dmVyfCBiZXxlciB8ZWRlfGRlbnwgb3B8aGV0fG4gaXwgdGV8bGlqfGdlbnx6aWp8IHppfGh0IHxpamt8ZWxpfCBpbnx0IG98IHZlfG9wIHxhbmR8dGVufGtlIHxpam58ZSB2fGpuIHxpZWR8IG9ufGVmdHwgaWV8c2NofG4genxuIG98YWFufGZ0IHxlaWR8dGUgfG9vcnwgd2V8b25kfGVlZnxlcmV8aGVlfGlkIHxpbiB8cmRlfG4gd3x0IHJ8YWFyfHJpanxvcmR8d29yfGVuc3xvZiB8IG9mfGhlaXxuIGd8IHZyfCB2b3wgYWF8ciBofGh0ZXwgd298biBofGFsIHxuZCB8dnJpfGUgb3xyZW58bGUgfG9yIHxuIGF8amtlfGxsZXxlbml8biBifGlqIHxlIGV8ZyB2fCBzdHxpZ2V8ZGllfGUgZ3xtZW58bmdlfHQgaHxlIGJ8IHphfGUgc3xvbSB8dCBlfGF0aXx3ZWx8ZXJrfHN0YXxlcnN8IGFsfCBvbXxuIHR8emFsfGRpZ3wgbWV8c3RlfHZvb3x0ZXJ8Z2lufHJlIHxlZ2V8Z2UgfGcgZXxiZXN8bmF0fCBuYXxla2V8Y2hlfGlnIHxnZWx8bmllfG5zdHxlIGF8bmlnfGVzdHxlIHd8ZXJ3fHIgZHxlbmR8b25hfGQgdnxqaGV8aWpofGQgZXxlbGV8IGRpfGllIHwgZG98ZGVsfG4gbnxhdCB8aXQgfCBkYXx0aWV8ZSByfGVsa3xpY2h8amsgfHZvbHxpamR8dGVsfG1pbnxsZW58c3RyfGxpbnxuIHN8cGVyfHQgZHxoYW58IHpvfGhhcHxjaGF8d2V0fCB0b3x2ZW58IG5pfGFhdHxpb258dGlvfHRhYXxsa2V8ZXplfG1ldHxhcmR8d2FhfHVpdHxzdGl8ZSBufGRvb3xwZW58ZXZlfGVsIHx0b2V8YWxlfGllbnxhY2h8c3QgfG5zIHwgd2F8ZW1lfG5pbnxlIGR8YmlqfCBncnxuIG18cCB2fGVzY3x0IHd8b250fGl0ZXxtYW58ZW1hfCBtYXxuYWx8ZyBvfHJpbnxoZWR8dCBhfHQgdnxiZWd8YWxsfGlqc3x3aWp8cndpfGUgaHwgYml8Z3JvfHAgZHxybWl8ZXJtfGhlcnxvb258IHBlfGVpdHxraW58dCB6fGlldHxpZW18ZSBpfGdlbXxpZ2l8IGFufGQgb3xyIGV8ZXRlfGUgbXxqcyB8IGh1fG9lcHxnIHp8ZWRpfGFyYnx6ZW58dGlufHJvbnxkYWF8dGVnfGcgdHxyYWZ8dHJhfGVyaXxzb298bnNjfHQgYnwgZXJ8bGFufCBsYXxlcm58YXIgfGxpdHx6b258ZCB6fHplIHxkZXp8ZWhvfGQgbXx0aWd8bG9vfG1lZXxnZXJ8YWxpfGdldnxpamV8ZXppfGdlenxubGl8bCB2fHRpanxlZXJ8IGFyJyxcbiAgICBzcnA6ICcgcHJ8IGkgfHJhdnxuYSB8cHJhfCBuYXxtYSB8IHN2fGltYXxkYSB8amEgfGEgcHx2byB8amUgfGtvIHx0aSB8YXZvfCBwb3xhIGl8YWtvfGEgc3wgemF8IHUgfGp1IHxvIGl8IGltfG5qZXxpIHB8dmEgfHN2YXxhbmp8dmFrfCBkYXxvIG58bmphfGUgc3xvc3R8IGtvfGEgbnxsaSB8aWxpfG5lIHxvbSB8IG5lfGkgc3wgc2x8IGlsfCBkcnxubyB8a29qfHUgc3xhdmF8IHJhfG9nIHxzbG98aW0gfGVuanxzdGl8Ym9kfG9ib3xsb2J8aXRpfGEgb3xzdHZ8aSB1fGEgZHxuaSB8amVkfHUgcHxwcml8ZWRufCBiaXxpIGl8YSBrfG8gZHxzdGF8aWggfGRydXxhIHV8IGplfCBvc3wgbml8bm9zfHByb3xhanV8aSBvfHJhbnwgZGV8IHN1fHUgaXxzZSB8dmFufG92YXxpIGR8Y2lqfCBvYnx1amV8cmVkfMW+YXZ8ZSBpfGkgbnx2b2p8ZSBwfGEganxkbmF8IHNlfCBvZHx2ZSB8IGthfGVuaXxyxb5hfGRyxb58YSB6fGF2bnxhY2l8b3ZvfHUgdXxtIGl8b2phfCBpenxsamF8IG5qfGlqYXx1IHp8ZSBvfHJvZHxqZW58bGplfGUgYnxyYXp8amFufGxqdXxzdm98emEgfGdvdnxpxI1ufCBzdHxub3Z8c25vfG9zbnxkdSB8amkgfHByZXwgdHJ8c3UgfHZ1IHxvZG58YSBifGplZ3xuaW18bmlofHR1IHx0aXR8xaF0aXxrdSB8bm9tfGJpdHxlIGR8bWUgfGlrb3zEjW5vfG9qaXxsbyB8dm5vfG5pa3xlIG58xJFlbnxpa2F8YmV6fGFyYXxkZSB8dSBvfHZpbXxuYWt8IHNhfHUgbnxyaXZ8YXZlfGFuIHxvbGp8dm9sfCBrcnxvIHB8c21lfGUga3xub2d8IG92fGUgdXx0dmF8YnJhfHJ1Z3xyZWJ8dHJlfHUgZHxvZGF8IG1vfCB2cnx2bGp8YXZsfGVnb3xqYXZ8ZGVsfG0gc3xrcml8byBrfGHFoXR8emHFoXxuanV8IHNtfGFuaXwgbGl8ZG5vfGXEkXV8YWxufGxhIHxha3Z8b2ogfMWhZW58a29tfHN0dXx1Z2l8YXZpfGEgcnxrYSB8cmFkfG9qdXx0YW58b2RpfHZpxI18dGF2fGl0dXx1ZGV8YnVkfCBidXxwb3R8b2R1fMW+aXZ8ZXJlfG0gbnx0dm98aWxvfGJpbHxhcm98b3ZpfHBvcnxlbm98xaF0dnxuYWN8b3ZlfG0gcHx0dXB8cG9zfHJlbXxkbml8YmEgfG5zdHxhIHR8YXN0fGl2YXxlIG18dnJlfG51IHxiZcSRfGlzdHxwdW58ZW4gfHRlIHxkc3R8cm90fHpha3xhbyB8a2FvfGkga3xqdcSHfG8gc3xzdCB8c2FtfHRlcnxuYXJ8IG1lfGkgbXxrb2x8ZSByfHXFoXR8cnXFoXx2ZXJ8a2FrfCBiZXxpIGJ8a2xhfGFkYXxlYmF8ZW5hfG9uYXwgb258dHZ1fGFuc3wgZG98cmFrfHNsdScsXG4gICAgY2tiOiAnIGhlfCDDuyB8w6puIHwgYml8IG1hfG5hIHxpbiB8bWFmfCBkaXxhbiB8eHdlfCB4d3xrdSB8IGt1fGtlc3wgZGV8IGppfGhlcnxraXJ8aXlhfHlhIHxyaW58aXJpfGppIHxiaSB8ZXMgfCBuZXx5ZSB8ecOqbnxlIGJ8ZXIgfGFmw6p8dGlufGtlIHwgYW58aXnDqnxleWV8cmtlfGVya3x3ZSB8IGJlfGUgaHxkZSB8IHdlfGhleXxmw6ogfGkgYnx5w6ogfGluYXwgYsOqfCBsaXxkaXl8YmVyfGxpIHxyZSB8w64gw7t8bsOqIHzDqiBkfCBzZXwgY2l8ZWtlfGRpIHx3w64gfCBuYXzDriB5fGFmIHxldGV8aGVtfCB3w658c3RpfCBraXxyw64gfGvDriB8w64gYXx5ZWt8biBkfGthcnwgdGV8bmUgfHnDriB8aSBofGUga3x0w64gfHTDqiB8YSB3fGUgZHzDriBifHMgbXxhc3R8biBifGJlIHx5YW58c2VyfHRld3xuZXR8IHR1fCBld3xoZXZ8YXphfGFyYXzDuyBifG4ga3xhZGl8ZXYgfHphZHwgYXp8cmFzfGVzdHxhbsOqfCB5YXxuIGh8biDDu3x3ZWR8IHTDqnx3ZWt8YmF0fGJvIHwgYm98IHnDqnxzdCB8biBufMOqIGt8ZGFufMOqIGh8ZW1hfMOqIGJ8aXllfMOuIGh8ZGlufGLDu258ciBrfGVrw658IG1lfHBhcnzDu25hfHRhIHx3bGV8ZXdsfMOuIG18IGtlfG5hdnxld2V8bWFufMOqIHR8ZMOuIHzDuyBtfG3DuyB8ZW3Du3xhIG18aWthfGUgw7t8biB3fGEgeHzDqiBtfGUgbnwgdGF8ZWxhfG4ganxlecOqfG4geHxjaXZ8d2V5fGFuYXwgcmV8a2hlfGVraHxiaWt8a8OqIHxqw64gfGYgaHxlcsOufCBwYXzDrm5hfGJpbnxlcmJ8dmFrfGl2YXxhIHN8IG5pfGNpaHx2w6ogfGUganxhcml8IHDDqnzDriBkfG7Dqm58aWtlfGUgdHxhIGt8w6ogeHwgeWV8biBhfGV5w658biBlfGFtYXxiw6ogfGFyIHxld2F8YXTDqnxiZXN8cmJlfGF2IHxpYmV8aXN0fG3DriB8dGVtfGF3YXxhcmV8aMOuIHxnZWh8bmdlfGluZ3xuZWt8bsO7bnxhbsO7fHFhbnwgcWF8dsOuIHxydGl8dWtlfHR1a3wgxZ9lfGV6YXwgZGF8dSBkfMO7IGF8ZiDDu3xlZGl8IHJhfHR1IHx0aXl8dMOqbnwgbWl8eGVifCBnZXxow65ufCBow658ZXTDqnzDriBqfHN0w658bWFsfGJpYnxyYSB8aSBkfGUgbXxtYW18aSBhfG5pa3xpIG18w64ga3wgd2l8w7tuIHwga298YSDFn3zDqiBqfHJpeXxsYXR8d2VsfGUgZXxpbmV8YW5lfMO7IGh8w65uIHxhIGR8c2l5fGVuZHxheWV8IHphfGlqYXxhIG58w64gbnxlayB8dGVrfHlldHxtYmV8ZW1ifMO7IGR8cm92fGlyb3xtaXJ8ZWJhfCB4ZXxtw6pufCDDqm58IGh1fG7Drm58YW7Drnx0IMO7fHRlbnxuIG18ZGVtfMOqIMO7fGVuw6p8dGUgfGFydHxpIHJ8IGrDrnx1IGp8ZWvDqnxkZXcnLFxuICAgIHlvcjogJyBuw618dGkgfOG7jcyBIHxuw60gfCBsw6F8IOG6ucyAfMOgbiB84bq5zIEgfGthbnx0w60gfCB0w618YW4gfOG6ucyAIHx04buNzIF84buNzIAgfCDhurlufOG7jW4gfHfhu41ufMOtIOG6uXxiw60gfMOhdGl8bMOhdHzMgHThu4184bq5zIB0fCBnYnwgw6B0fCDDoHd8biBsfMOgdGl8IGEgfGzhurnMgHzhurluw6x8IMOzIHxr4buNzIB8IGzDs3zDrCBrfHPDrSB84buNzIBrfCBr4buNfHJhIHxuaSB8w6Biw618dMOgYnwgdMOgfG7DrCB8IHPDrXzMgGthfOG7jcyA4buNfG4g4bq5fMOgd+G7jXxuIHR8w7MgbnzMgOG7jcyAfMOtbOG6uXxvcsOtfGzDsyB8IHfhu418dMOzIHxkw6ggfMOsecOgfMO6biB8IHTDs3wgb3J8w60gw6x8w6hkw6h8a8OyIHzigJDDqGR8zIDigJDDqHzhurnMgOKAkHxyw61sfMOtIMOzfHLhurnMgHzDrSDDoHwgc8OsfHnDoG58Z2JvfOG5o2UgfCBrw7J8w60gYXwgcuG6uXwgauG6uXxzw6wgfCBiw6F8csOgbnwg4bmjZXx34buNzIF8bsOseXxmw7pufCBmw7p8biDDoHxiYSB8biBufGdiw6B8Z2Lhu418auG6ucyBfHVuIHzDrMOtIHwga8OtfGdiYXzDqG7DrHwgw6hufGLDoSB8zIEgbHxhIGt8IGthfGThu43MgHxrw60gfCDDsm18aW4gfCBmaXxiw7IgfGZpIHxi4bq5zIF84buNZOG7jXxi4buNZHzMgSBzfGh1bnxuw7ogfG7DrW58d8OgIHxpcmF8bmlyfMOybcOsfMOsZ2J8IMOsZ3zMgSB0fOG6uW5pfMOtbsO6fGkgbHzDrG5pfG3DrG58YsOgIHzDocOgIHxpIMOsfG9odXwgb2h8w60gaXxhcmF8IHRpfGJvIHzDsiBsfCBww6l8csO6IHzDrXLDoHwg4buNzIB8w60gw7J8b2difGvhu43MgXxw4buNzIB8w7MgYnzDoCB0fGkgbnxs4buNzIF84bq5zIFufCDDrGJ8ecOsw618Z2LDqXxn4bq5zIF8Ym9nfMOzw7IgfHnDs8OyfCB5w7N8biBrfHDDqSB8ZMOhIHzMgXfhu4184buNzIF3fMOgIGx8w60ga3wgd8OgfG4gb3xq4buNIHwgaXJ84buNzIByfMO6IMOsfMyBIMOgfMOzIHN8aSB0fOG5o+G6ucyBfMyAa+G7jXzDrSB0fHnDqSB8bMOoIHwgbMOofGZpbnzDoGLDsnwgbOG7jXzDoCBufMO5auG7jXx3w7lqfGlyw7p8w7MganwgYXJ8w60gd3xhIHd8IMOsbXzDuiDDoHzMgCB0fMOyZml8IMOyZnwgw6DDoHxm4bq5zIF8w6B3w7l8zIFuaXx3w7kgfMOsw61yfG3DrMOtfCBtw6x8bMOhw6x8IHnDrHzDrSBnfOG7jcyBbnxuIHN8aSDhurl84bq5zIBrfMOgZ2J8w61nYnxuw61nfGEgbnwga8O6fGzDocOgfMOtIG98bsOhw6B8IG7DoXxr4bq5zIF8w61wYXxuw61wfMOsbiB8IMOsa3xiw6kgfGkgZ3zhu41t4buNfCDhu41tfGkgw6B8aeG5o+G6uXzMgCDDoHzDrG3hu418biBhfG4gZnxq4bq5IHx5w60gfMyBIOG7jXzDsyBkfMyBIMOyfCBkw6F8IG3DunzDoMOgYnzDoWLhurl8bMOhYnzDrGLDoXzDsiBnfGrDuiB8aSBvfGzDuiB8IMOodHzMgCDhurl8dOG7jcyAfGRlIHzMgCBufGkgw7J8IMOseXxrw6BufMyBbiB8IGLDrXwgaeG5o3xt4buNzIB8ZSDhurl8zIAgbHwgZsOgfMOoecOtfCDDqHl8IMOsZHxt4buNzIF8ZMOpIHzMgCBrfMyBIHB8w7IgdHxtw7ogfCBm4bq5fCDDrGp8csOtIHzDrGvhurl8bsOsa3zDrG7DrXxuIMOsfG4gw6h8c8OsbnzDqCDhurl8IGkgfHLhu43MgHwgw6BufMyBIGJ8w7luIHzMgWdifOG7jcyBZ3xk4buNzIF8IGThu418w60gbnxyaW58zIAgaicsXG4gICAgdXpuOiAnaXNofGFuIHxsYXJ8Z2EgfGlyIHwgYml8YXIgfCB2YXxkYSB8aWdhfCBodXx2YSB8YmlyfHNoIHx1cXV8cXVxfGh1cXwgaGF8c2hpfCBib3xyIGJ8Z2FufGEgZXxpZGF8IHRhfGluaXxsaXN8YWRpfG5nIHxkaXJ8bGlrfGl5IHxpbGl8b8q7bHxoYXJ8YXJpfCBvyrt8dXFpfGluc3xsYW58aGkgfGluZ3xkYW58bmlufGtpbnwgeW98c29ufG5zb3wgaW58IG11fG9uIHxxaWd8IG1hfGVnYXxyIGl8Ym/Ku3wgZWd8b8q7enxuaSB8Z2FkfGFzaHxpIGJ8a2kgfG9raXxpbGF8eW9rfGEgYnxuIGJ8b3NofGFsYXxhdCB8aW4gfHIgaHxlcmt8IGVyfGxnYXwgcWF8cmtpfGggaHwgc2h8aSBofGFyYXxuIG18IGJhfG5pc3xpayB8aWdpfGxpZ3xib3N8cmkgfHFpbHxhIHR8YmlsfGxhc3xldGl8IGV0fG4gb3xhbml8bmxpfGtsYXxpIHZ8YSBxfGEgaHxhIG98eWF0fCBxb3xpbSB8YSBzfGkgbXxpeWF8YXRsfG9saXxvc2l8c2l5fHFsYXxjaGF8dGlsfCBvbHxhdGl8YSB5fG1hc3xxYXJ8aW5sfGxhdHwgcWl8dGHKvHxoYW18Z2kgfGliIHzKu2xpfG1sYXxoIHZ8yrt6IHxodW58biBlfG11bXwgZGF8IGJ1fCB0b3x1biB8bWtpfHVta3xzaGF8dGxhfHJpc3xpcm98aGEgfHJjaHxiYXJ8aXJpfG95YXxhbGl8IGJlfGkgb3xhc2l8YXJvfCBrZXxpIHR8cmxhfCB0ZXxhcmN8aGRhfHNodXx0aXN8biBofHRnYXwgc2F8IHhhfHJha3xsaW58YWRhfG9sYXxpbW98aHFhfHNocXxsaSB8IHR1fGFtbHxsbGF8c2lkfCBhc3xuaWR8YSBpfCBraXxjaCB8biB0fG5kYXxrIGJ8ZXJhfHNpenxvciB8aGxhfGEgbXxyIHZ8ZW5nfHRlbnxtYXR8bWRhfGFtZHxsaW18bWl5fHkgdHxheW98aSBhfGlub3xpbGd8dG5pfCBpc3xhbmF8YXMgfGVtYXwgZW18ZWNofGEgYXx0YXJ8a2F0fGFrYXxhayB8cmF0fCBkZXxhemF8aWxsfCBzaXwgc298Z8q7aXx1cWx8biBxfG9kYXzKvGxpfGHKvGx8bmlrfCBuaXx0ZGF8dWNofGdpbnxhIHV8aGltfHVuaXxzaXR8YXkgfHFvbnwgamF8YXRufGtpbXxoIGt8aGVjfCBoZXzKu3ppfGxha3xrZXJ8aWtsfCBjaHxsaXl8bGxpfGNoaXx1ciB8emFyfHNobHxyaWd8aXJsfGRhbXxrb2h8aWtvfGEgZHxhbSB8biB2fHJ0aXx0aWJ8eW90fHRhbHxjaHV8IHVjfHNsYXxyaW58c29zfGFzb3wgdW58bmEgfCBrYXxtdWh8ZGlnfGFzbHxsbWF8cmEgfGJ1IHx1c2h8eGFsfMq7bGd8aSBrfGVrbHxyIGR8cWF0fGFnYXxpIHF8b2l5fG1pbHwgbWl8cWEgfGkgc3xqaW4nLFxuICAgIHpsbTogJ2FuIHxhbmd8IGtlfG5nIHwgc2V8IGRhfGFkYXxhcmF8ZGFufCBwZXxyYW58IGJlfGFrIHxiZXJ8aGFrfGF0YXxhbGF8YSBzfGFoIHxueWF8IG1lfGRhIHxwZXJ8biBzfHlhIHwgZGl8a2FufGxhaHxuIGt8YWFufGdhbnxkYWx8cGFkfGtlcHxhIHB8biBkfGVyaHxlYmF8bmdhfHlhbnxyaGF8IHlhfG5kYXxvcmF8dGlhfGFzYXwgaGF8YW1hfGVwYXwgb3J8aWFwfGFwIHxhIGJ8IGF0fCBtYXxldGl8cmEgfHRhdXxuIGF8c2V0fGF1IHwgYmF8cGEgfCBhZHxuIHB8dGFufHAgb3xlbmd8YSBkfG1lbnxhcGF8aCBifGggZHxkYWt8bWFufGEgYXx0ZXJ8IHRlfGsga3wgc2F8biBifGFuYXxnIGF8ZW5kfGxlaHxvbGV8YSBrfGFtIHxuIHl8YWthfGVoIHxsYW18YmFzfGJlYnxuIG18IHVufHBlbnxzYSB8a2VifHNhbXxuIHR8IHRpfGVsYXxzYW58Y2FyfHVhbnxtYSB8ZGkgfGhhbnxlZ2F8YmFufGVyaXxhdCB8c2lhfGEgbXxpa2F8a2VzfGlhbnxnYXJ8c2VifHRhIHxtYXN8dW5kfG5lZ3xuYW58bmdzfGkgZHxlcmx8bmEgfGVwZXxlbWJ8YmFyfCBsYXxhdHV8a2xhfHBlbXxtZW18ZW11fGVjYXxzZWN8bmdnfG5ueXxhbnl8Ym9sfGFsIHxhaGF8Z3NhfGViZXxpbmR8YWtsfG4gaHxlcmt8dW5nfGVuYXwgYm98YSB0fCBhcHxlcnN8IGRlfGluIHx0dSB8cHVufGFzIHxhZ2l8YW5ufGcgYnxiYWd8IG5lfGFpbnxoZW58IGhlfGVyYXxyYXR8c2VtfCBzdXxhZGl8bGFufGcgc3xkaWF8bWF0fHNlc3xpYWR8IHRhfGloYXxnIHR8dGlufGsgbXxrIGh8aSBrfGdpIHxpIHN8aW5nfHVrYXxlbnV8ZGVufGxhaXxrIGR8ZXJ0fHRpIHxya2F8YWphfHJnYXxsdWF8a2VyfG1lbHxkdW58bmR1fGxpbnxybGl8bmFrfG50dXxlc2l8YXlhfHVuIHx1YXR8anVhfCBpbnxybWF8ZXJtfGFpIHxlbXB8a2VtfHJpIHxkaWx8dWEgfHVrIHxoIG18bCBkfGcgbXxtYmF8a2F0fGVzZXx0aWt8bmkgfGluaXwgYW58bXB1fGthIHxkYXJ8bWFyfHJqYXxlcmp8YXJnfHUga3xzdWF8IG9sfGVzYXxkYXB8YXIgfGcgdXxzaSB8ZW50fGcgZHwgcHV8YXdhfGlyaXxkaXJ8c2FsfGdhbXxtYmV8biBpfGhhcnxhIGh8cmFhfGVtYXx0YXJ8aSBhfHNhYXxpcmF8YXJpfHBlbHxqYXJ8bGFqfHVqdXx0dWp8cmFrfHVyYXx1YXJ8ZWx1fHQgZHx1bnR8aWwgfHdlbnxhc2l8Z2dhfGlwYXxrc2F8dHVrfHVsYXxzZWt8c2FzfGlidXxydGF8c2VwfHJzYXxudGF8YXRpfGlsYXxtdWF8eWFyJyxcbiAgICBpYm86ICdhIG58ZSBufGtlIHwgbmF8IOG7jSB8bmEgfCBi4bulfOG7jSBifG53ZXxueWV8ZXJlfHJlIHwgbiB8eWEgfGxhIHwgbmt8eWUgfCBud3wgbWF8ZSDhu418IHlhfCBpa3xhIG98YSDhu418bWEgfOG7pWxhfGLhu6VsfGlrZXwgb258bmtlfGUgaXxhIG18b255fOG7pSBufGtpa3xpa2l8YuG7pSB8IGEgfGthIHx3ZXJ8dGEgfGkgbnxkbyB8ZGkgfCBuZHwgZ2F8YSBhfGUgYXxhIGl8aGUgfGt3YXwgb2t8IG9ifGUgb3xoaSB8YW55fGdh4oCQfGhhIHxk4bulIHwgbW18bmRpfOG7jSBufHdhIHxy4bulIHxlIG18Y2hlfGEgZXxva2V8d3UgfGFrYXxpdGV8byBufGEgZ3xvZG98Ym9kfG9ib3wgZOG7i3wgZXp8YXJhfHdlIHwgaWh8YeKAkGV8aOG7iyB8cmkgfG4gb3x6aSB8bW1hfGNoaXxk4buLIHxnaGl84buldGF8aXJpfGloZXwgYW58IG9ofGEgeXxnYmF84bulIOG7jXwg4buNenwgYWt8IGl3fG55YXx0ZSB8aXd1fCBudHxybyB8b3JvfGUg4buLfHrhu40gfGV6aXxtZSB8ZSBlfHUgbnxoZXJ8b2hlfCBzaXxh4oCQYXxpIG18YWxhfOG7pSBpfCBrYXxha3d8IGlufGdo4buLfGtwZXxuIGV8cOG7pXR8IGUgfGkgaXxpIG98aWRlfGlud3zhu6Ugb3xo4bulIHxhaOG7pXx3ZWd8cmEgfG8gaXxrcGF8YWThu6V8bWFkfHNpIHxzaXR8YSBzfCBtZXxzb3J8aSDhu418Z2lkfGVkb3x1IG98ZSB5fG4gYXwgZW58dGFyfG96dXx0b3p8YmkgfGJlIHzhu6UgbXzhu6Vy4bulfOG7jXLhu6V8IOG7jXJ8bWFrfHVzb3xhbWF8ZGUgfOG7iyBvfCDhu41ufOG7jXrhu418Y2jhu4t8ZWdofGVud3xhcOG7pXxydSB8IHRvfGkgYXxhIOG7pXxvc2l8cuG7iyB8d2V0fGhlZHxuY2h8IG5jfCBlYnwgYWx8buG7jWR84buNbuG7jXx1cnV8c2lyfCBrd3x5ZXJ8amkgfGVueXwgbWt84buLcuG7i3xldGF8IHVzfHR1IHzhu40gZHx1IOG7jXwgbyB8YmEgfCBtYnzhu41k4bulfOG7i2NofCBjaHxhIGR8cGEgfCBhZ3xrd2V8IGhhfGEgdXxlIHN8bWtwfG4gdXxudGF8ZWJlfG4g4buNfG8gbXxrd3V8bmt3fG53YXxvYml8IOG7i2t8ZXNpfGkgZXxuaGF8IG5ofGxlIHxpbGV8bmlsfCBuaXxlbWV8IG9nfGUga3xuIGl8Y2jhu418byB5fGFz4buLfG90dXwgb3R8cmFtfHUgbXzhu4tnaHxk4buLZ3x6dSB8buG7jSB8bWJhfCBnYnxlIGd84buLIG184buNY2h8aWNofHBlIHxhZ2J8aSDhu4t8dWNofHrhu6V6fHVueXx3dW584buNcuG7jXwgbm58bmHigJB8IGRpfGdlIHxvZ2V8aWppfCBpanzhu41oYXwg4buNaHxpa3B8ZWdpfG1lZ3xvIG984bulaOG7pXxo4bulaHxtYWh8biDhu6V84buNIGd84buNdGF8ZWvhu4184buLIG58a3fhu6V8YWdofOG7pW3hu6V8YmFufGtwdXxva3B8IGFofOG7i2twfGEga3xpbWV8IGltfHrhu6UgfOG7pXrhu6V84buNeuG7pXwg4bulenxsaXR8YWxpfG5hdCcsXG4gICAgY2ViOiAnc2EgfCBzYXxuZyB8YW5nfCBrYXwgcGF8YW4gfGdhIHxuZ2F8IG1hfHBhZ3wgbmd8b24gfGEgcHxvZCB8a2F0fGF5IHwgYW58ZyBtfGEga3x1ZyB8YW5hfCB1Z3x1bmd8YXRhfG5nb3xhdHV8biBzfGFsYXxzYW58ZCBzfHR1bnxhZyB8YSBtfGdvZHxnIHN8YSBhfGEgc3xnIGt8ZyBwfHlvbnxuIHV8b25nfHRhZ3x1c2F8cGFufGluZ3x1bmF8bWF0fGcgdXxtZ2F8IG1nfHkga3wgdXN8YWxpfHN5b3wgbyB8YWdhfHRhbnxpeWF8a2lufGR1bnxuYXl8bWFufG5hbnxhIGl8IG5hfGluYXxuc2F8aXNhfGJpc3xhIGJ8YWR1fCBhZHxuIG58IGJpfGFzeXxhc2F8bGF5fGF3YXxsYW58bm9ufGEgbnxuYXN8byBzfGFsIHxhZ3B8bGlufG5hbHx3YWx8IHdhfGlsaXx3YXN8Z2F3fGhhbnwgaXl8IGtpfG5haHxiYW58bmFnfHlhbnxhaGl8biBrfGdhbnwgZ2l8aGltfCBkaXxhIHV8IGJhfCB1bnxpbml8YW1hfHlhIHxrYXN8YXN1fG4gYXxnIGF8Z2thfGFna3xrYW58YWdzfGFndHxsIG58YSBnfGthZ3wgdGF8aW1vfHVuc3xzYW18IHN1fGcgbnxuIG98Z2FsfGthbHxvZyB8dGF3fGFob3x1a2F8Z3BhfGlwb3xpa2F8byBwfGEgdHwgb2d8IHNpfGdzYXxnIHR8YWJhfGFub3xnbGF8eSBzfG8gYXxha2l8aGF0fGthdXxzdWR8Z3BpfGEgd3xnIGl8YWhhfG90IHxyYW58aSBzfG4gbXxiYWx8bGlwfGdvbnx1ZCB8IGdhfGxpIHx1YmF8aWcgfGFyYXxnIGR8bmEgfGthYnxha2F8Z2JhfG5nbHxheW98IGxhfCBodXxhIGh8YXRpfGQgYXxkIG58IHB1fCBpbnx1Z2F8b2sgfGloaXxkIHV8bWEgfG1heXxhd298YWdifGFtaXxzYXl8YXBhfHBvZHx1aGF8dCBufGFnaHxidWh8aW5zfGFkIHwgdWJ8IGJ1fGF0IHxpaW58YSBkfGlwIHx1dGF8c2FsfGhvbnx3byB8aG8gfHRyYXxsYWt8aWtvfGFzIHxhb2R8YmFofG1vIHxhdWd8b25hfGRpbHxnaWt8c29zfGxpaHxwaW58IHBpfGsgc3xuaW58b29ufGFidXxsYSB8cmFifGh1bnwgdGl8bWFofHRhcnx0IHN8bmdifHVtYXxoaW58YmF0fGxhb3xtYWt8aXQgfCBhdHxzIHN8c25vfGFzbnxuaSB8YWFufGFodXwgaGl8YWdpfG4gcHxpbnV8dWxvfHkgcHwgbml8aWhhfG1hZ3xvIG58ZHVrfGVkdXwgZWR8YSBlfHRpbHx1cmF8dGlufGtpcHxhZ2x8Z2F5fGcgaHxnIGJ8YXRvfGdoaXxuYWJ8a29ufGluIHx0ZXJ8byB1fG8gb3x5YWx8c3lhfG9zeXwgc298dGlrfCByZXwgdHJ8aGlnfGEgb3xoYSB8YnV0fHBha3xheWEnLFxuICAgIHRnbDogJ25nIHxhbmd8IHBhfGFuIHxzYSB8IGthfCBzYXxhdCB8IG1hfCBuZ3xhcGF8YWxhfGF0YXxnIHB8cGFufHBhZ3xheSB8IGFufCBuYXxhcmF8IGF0fHRhbnxhIHB8cGF0fG4gYXwgYmF8Z2EgfGF3YXxyYXB8a2FyfGcga3xheWF8bGFufGcgbXxuIG58ZyBifG5nYXxtZ2F8IG1nfGEga3xuYSB8YW1hfG4gc3xhIGF8Z2FufHlhbnxna2F8IHRhfG1heXx0YW98YWdrfGFzYXxtYW58YWthfGFvIHx5IG18YW5hfGcgYXxuYW58YWhhfGthbnx5IGt8YmF3fGthbHxhIG18ZyBufGluZ3x3YXR8IHkgfHQgdHxwYW18YSBufG8geXxiYW58IGxhfGFsaXxzYW58d2FsfG1hZ3wgbyB8ZyBpfGFnYXxsYXl8YW55fGcgc3xpbiB8bnlhfHlvbnxrYXN8YSBzfGlzYXx1bmF8b25nfGFhbnxrYXR8dCBwfCB3YXxpbmF8dGF5fHlhIHxvbiB8byBtfGlsYXxhZyB8bnRhfHQgbnxhYmF8aWxpfCBheXxvIGF8IGdhfG5vIHxhIGl8Z2FsfGFudHxoYW58dCBzfGthcHxrYWt8bGFofGFyaXxhZ3R8YWdwfHJhbnxnIGx8bGlufGFzIHxsYWx8Z2F3fGFuc3x0byB8aXRvfCBpdHxoYXl8d2EgfHQgbXwgaXN8cGFwfG1hbXxuc2F8YWhpfG5hZ3xiYXR8bGlwfGd0YXwgZGl8Z2F5fGdwYXxwaW58IHNpfG5na3x1bmd8YWtpfHkgbnxpdGl8dGF0fGFub3x5YWF8eSBzfG1hbHxoYXR8a2FpfHNhbHxoaW58dW1hfG1ha3xkaSB8YWdpfHB1bnxpaGl8YSBsfGkgYXxpcmF8Z2dhfG5haHxzIG58YXAgfCBoYXx1c2F8bmlufG8gcHxnaW58aXB1fGlrYXxuZ2l8aSBufGxhZ3xsYSB8eSBwfGluaXxnIHR8dWthfG5hcHwgdHV8YSBnfHRhc3xhcnV8aXBhfCBpcHxsaSB8YWwgfG4gb3xhIG98dCBrfGFsb3wgcGl8c2lufHN5b3xhc3l8aXRhfGFob3xuYXJ8cGFyfG8gc3xwYWt8dCBhfHVoYXxzYXN8Z3NhfGFnc3xraW58YSBofGliYXxsaXR8dWxhfG8gbnxuYWt8YSB0fCBidXxkdWt8a2FifHNhbXxnIGV8YWlufGFtaXxtYXN8bGFifGFuaXxraWx8aXQgfCBhbHxhZ2J8YnVofGEgYnxnIGd8YmEgfCBpYnxpeW98cmkgfHlhZ3xhZCB8IGRhfGVkdXwgZWR8YW5sfG1hIHxhaXN8aWdhfG1iYXx0dW58aXBpfCBraXxvZCB8YXl1fCBsaXxsaWh8c2FyfGdpIHxnIHd8cGFofHdpcnxvb2J8bG9vfGFnZ3xubGl8YmF5fG1hcHxnaXR8bWlsfG9rIHxob258bmdnfHNhaHxpeWF8cGFzfGcgaHxhZ2x8dGFyfG5ndXxhbWJ8dWt1fGF5b3xzIGF8cCBufG4gbXxydXN8aSBtfGwgYXxhYnV8IGFhJyxcbiAgICBodW46ICdlbiB8IHN6fCB2YXwgYSB8w6lzIHxtaW58ZWsgfCDDqXN8IG1pfGpvZ3wgam98YW4gfGluZHxuZWt8c3plfHPDoWd8bmRlfGEgdnxkZW58b2dhfHN6YXx2YWx8Z2EgfG3DqWx8YWxhfGVtw6l8Z3kgfG4gYXx2YW58emVtfGVsZXwgbWV8ZWd5fMOpbHl8IGVnfHphYnx0w6FzfCBhenxuIHN8YmFkfGFiYXxuaSB8YXogfGd5ZXwgZWx8YWsgfCBzZXxtZWd8c2VufMOpbnl8c8OpZ3xrIGp8eW5lfGx5bnwgbmV8YmVufGxhbXx0dCB8dCBhfGV0IHxhZ3l8b3ogfGhvenx2YWd8emV0fCB0ZXxuIG18ZXogfG5ha3xpbnR8cmUgfGV0w6l8dGV0fG1lbHx0ZWx8cyBhfGVtIHxlbHl8bGV0fGhlenwgYWx8cyBzfCBraXxldGV8YXTDoXx6IGF8IGxlfHllbnxlcyB8cmEgfHTDqXN8ZWxsfG50IHxzZW18dCBzfGxlbnxuZW18YSBzfGVzZXxua2l8ZW5rfGEgbXzDoXPDoXxpIG18YmFufGtpbnxrIG18c3p0fCDDoWx8YW1lfGvDtnp8ayBhfGRzw6F8YWRzfGzDsyB8IGvDtnzDoXMgfGx5IHxvbiB8w6liZXx0YXR8YSB0fG4gdnzDoWxsfG3DqW58IHbDqXxueWV8a8O8bHxsxZEgfGEgbnwgY3N8aSDDqXxvayB8w6lzenzDqXJ0fGxsYXxsYXB8w6Fnb3xnb2t8bnlpfHRla3wga2V8bmQgfMOpdGV8YW1pfHrDqXN8eWVzfHN6b3x0IG18YSBhfGhldHxmZWx8bGF0fGxlbXxsbGV8ZWwgfHogZXxzIGV8ayDDqXxtYmV8ZW1ifGVsw6l8b3QgfGxpc3x2ZXR8a29yfMOhZyB8b2xnfCBhbXxzesOhfGVoZXxsZWh8b2dvfG90dHzDvGwgfG50ZXzDqWxlfGkgdnxvZ3l8aG9nfCBob3xrZWx8biBrfHRlc3xubMWRfGVubHxzc8OhfMOhemF8aMOhenzDqWcgfHZlbHzDoWJhfGxla3zDqWdlfCBoYXxhIGh8csOpc3wgZmV8w6FueXxkZWx8ZWzFkXzDoXQgfGFsw6F8YXJ0fHRhcnx6dG98esOhc3x0xZEgfHlpbHxrb3p8dGtvfGFsw7N8cyBrfGkgZXzDoXJzfHTDoXJ8bXplfGVtenwgbnl8bcOhc3xldHR8bnkgfGZlanxhc3N8emFzfCBow6F8ZCBhfHQgw6l8aXMgfMOpc8OpfGV6w6l8dMOpYnwgbXV8w6Fzb3xzw610fGx5ZXxlbG18w6lkZXx2w6lkfGluZXx0IGt8b3MgfGl0IHxpenR8Yml6fCBiaXx5IGF8bSBsfHRvdHxhIGp8YXRrfG7DqWx8dCBufHRpIHwgbcOhfGFpIHxsw6FzfGV2ZXxuZXZ8enRlfCBiw6F8c2VsfGxsIHxhbCB8ZXJlfG4gZXx1bmt8bXVufHQgZXwgYWt8aWZlfGtpZnxha298cyDDqXwgw6lyfMOhbmF8IGVzfHMgdHxnb3R8c8O8bHwgYmV8dsOhbHxjc2F8c2UgfMOpc2V8YWQgfGdlc3x0b3N8amEgfCBneXxhc3p8dGVufGxtw6l8IHTDoXxlemV8w6FybXxiw6FyfGVzc3xsIHN8w7xsZScsXG4gICAgYXpqOiAnIHbJmXx2yZkgfMmZciB8aXIgfCBoyZl8IGJpfCBow7x8IG9sfMO8cXV8aMO8cXxxdXF8bmEgfGluIHxsYXJ8aMmZcnxkyZkgfCDFn8mZfGJpcnxsyZlyfGxpa3xtYWx8ciBifGxtYXxyIGh8IHTJmXzJmXhzfMWfyZl4fMmZbiB8ZGlyfHVxdXx1bmF8YW4gfGFsaXxhIG18IG1hfGlrZHxpbml8ciDFn3xkyZlufGFyIHxpbMmZfHF1bnxhcSB8YXPEsXwgeWF8bcmZa3x5yZl0fCBtyZl8IG3DvHxrZGl8yZlzaXzJmWsgfGlsbXxuaW58bmTJmXxvbG18yZl0aXzJmSB5fHNpbnx4cyB8bmRhfGxtyZl8eXnJmXxpIHZ8IHFhfCBhenxvbHV8aXl5fHlhIHxpbmR8emFkfHFsYXzDvG4gfG5pIHxsyZkgfHRpbnxuIG18YXphfGFyxLF8yZl0IHxuIHR8bWFxfGx1bnxsxLFxfMmZIGJ8dW4gfG51bnxxIHZ8biBofGRhbnzEsW4gfCBldHx0bcmZfMmZcsmZfCDDtnp8ZGEgfMmZIHZ8IG9ufMmZIGF8xLFuYXzEsW7EsXxiaWx8YSBifHPEsSB8aWwgfMmZbWl8YXJhfHNpIHwgZGl8yZkgbXzJmXJpfHJsyZl8IHZhfMmZIGh8ZXRtfMSxxJ/EsXxhbWF8ZGzEsXxhZGx8cmlufGLJmXJ8csSxbnxuIGl8bcO8ZHxuxLFufCBoZXxtYXN8aWsgfG4gYXxkaWx8YWzEsXxpcmx8yZlsyZl8w7xkYXxzxLFufMSxbmR8eHNpfGxpIHzJmSBkfG7JmSB8IGLJmXzJmXlhfCBpbnzJmSBpfGzJmXR8IHPJmXxuxLEgfCBpxZ98YW7EsXxlw6cgfGhlw6d8cSBofGV5bnzJmSBlfGTEsXJ8IGRhfGFzaXxyxLEgfGnFnyB8aWZhfGzEscSffGkgc3xmacmZfGFmaXxkYWZ8IGVkfG3JmXp8dSB2fGtpbHwgaGF8b2xhfG4gdnzJmW5pfMSxciB8dXEgfHVubXwgYnV8IGFzfHNpYXxvc2l8c29zfGlsaXzEsWTEsXxsxLFkfG5tYXzEsXEgfGluyZl8yZlyYXxzaWx8eGlsfGF4aXxkYXh8YWTJmXxtYW58YSBofMmZIG98b251fGEgcXzJmXogfCBraXxzZcOnfCBzZXzEsSBofG1pbnxsYW58yZlkyZl8YnUgfHJhcXxsxLEgfMSxbMSxfGFsIHzJmSBxfHIgdnxubGF8aHNpfMmZaHN8dMmZaHzDtnogfGlzdHwgaXN8bcmZc3wgyZlzfGluYXzJmSB0fMmZdGx8YSB2fGnJmSB8biBifHTJmXJ8IHRhfCBjyZl8ZWRpfGFsYXxraW18cXUgfGkgdHx1bG18bcmZaHxuIG98YXlhfMSxIG98aWFsfCBzb3xpbGx8c2l5fCBkyZl8dmFyfGluc3xtaSB8xJ/EsSB8bmlrfHIgaXxhcWx8ayBofHTJmW18dGFtfMOnw7xufMO8w6fDvHwgw7zDp3zEn8SxbnxzYXN8yZlzYXx6IGh8yZltyZl8emFtfCB6YXxzdGl8csmZZnxuIGV8ciBhfGlsZHxoyZltfMSxcWx8eWFufG1heXxuIMmZfG3JmW58bWlsfCBtaXzJmXFpfGRpbnxuIGR8dMO8bnwgZMO2fG1peXxrYWh8aWthfCBuaXxmYWR8dGlmfGwgb3xzyZlyfHluaXwgZXl8YW5hfGzJmW58YW0gfHJpbHxhecmZfGHFn8SxJyxcbiAgICBjZXM6ICcgcHJ8bsOtIHwgYSB8IG5lfHByw6F8csOhdnxuYSB8b3N0fCBwb3xobyB8IHN2fG8gbnwgbmF8dm8gfG5lYnzDoXZvfGJvIHxlYm98bm9zfG3DoSB8IG3DoXxhxb5kfGthxb58IGthfCByb3xjaCB8ZMO9IHzFvmTDvXx0aSB8b3UgfGEgc3wgcMWZfCB6YXzDoW7DrXzDoSBwfCBqZXwgdiB8c3ZvfMOpaG98IHN0fMO9IG18c3RpfG7EmyB8IGJ5fG9ib3x2b2J8dGVyfHByb3xlbsOtfGJvZHwgesOhfCBzcHzDrSBhfHJvZHxrdGV8YnkgfG11IHx1IHB8byBwfCBuw6F8dsOhbnxqYWt8IGphfGEgcHxvIHZ8w60gbnxvdsOhfG9saXx2w60gfHNwb3xyb3p8IGt0fG1pIHzDrSBwfG55IHwgbWF8w61tIHxpIGF8ZG8gfCBzb3xvZG58w6Fyb3xuw6FyfGxpIHxuw6kgfHR2w618YXQgfMO9Y2h8YSB6fCB2eXxieWx8dm9sfGVuIHzDvXQgfGLDvXR8IGLDvXx0IHN8dG7DrXxzdG58byBzfMOtIGJ8dG8gfCBkb3xzdsOpfHbDqSB8cmFufGVqbnx6w6FrfGVob3xqZWh8bmVzfHDFmcOtfG3DrSB8xI1pbnxrb2x8YWrDrXxzb3V8IHbFoXzDrWNofGl0IHxuw71tfMO9bSB8bnUgfGhyYXxub3V8dSBzfMOpbXV8IGsgfGR1IHzFvmVufHBvZHwgemV8a2xhfGEgdnxzdHZ8cG9sfGRuw618ZXLDqXxtIHB8c3TDoXxqZSB8Y2kgfGXEjW58IG5pfG7DqWh8YSBufGFrw6l8w6F2YXxtYWp8ZW0gfHJvdnzDrSBtfGvDqSB8b2xlfG7DvWN8b3ZhfCB2ZXxha298IHRhfGkga3xjaHJ8b2NofCBvY3xrb258aSBwfMOtIHZ8c23DrXxlc218a2RvfHN0IHxpIG58byB6fGF2ZXxvZHV8YmV6fCB0b3xzdGF8ZWNofGrDrSB8byBkfHNvYnxzZSB8IHNlfMOtIHN8w71taXxpIHN8IGkgfGkgdnwgdnp8bsOtbXxwcmF8bG7Em3xwxZlpfHTDoXR8c3RlfGEganxhYnl8IGFifCBzIHxvbG58YSBvfG0gbnzEjWVufHNsdXzFmcOtc3wgb3N8emVtfG1lenwgxI1pfGxuw618w6FsbnxvY2l8amlufCBqaXx5IGJ8w60genx5IHN8dmEgfHbFoWV8dCB2fG92bnxjaG58ZMSbbHxuw61jfGxlxI18IHBsfHZhdHwgdm98dmlufHJhdnx2b3V8bGFkfGlubnzDqSB2fGFudXx0ZWp8dSBrfHN0dXxlc3R8IHRyfGt5IHxpa2R8bmlrfGl2b3xuaXR8emVufHUgb3xuw6ltfG5lenxpw6FsfMOtaG98bGVufGVuc3xvxb5lfG9rb3xrw6lofHJhY3x2ZW58w60ga3xlIHN8bMOhbnzEm2zDoXx6ZMSbfHZ6ZHx0IGt8ZGlufG9kaXx0w60gfCBvZHxyw6kgfHR1cHxwb3Z8cGxufMWhdMSbfMOha2x8bm5vfHRha3xlcsOhfMWZZWR8byBhfGEgdHxyZXN8asOtY3wgbXV8dSB6fHJva3wgb2J8xI1ub3x1IGF8eSBrfGkganzDqSBufGx1xaF8w61zbHxvc298Y2nDoXxzb2N8bsOtaHxvIGp8Y2vDqScsXG4gICAgcnVuOiAncmEgfHdlIHx3YSB8ZSBhfCBtdXxhIGt8c2UgfCBuIHwgdW18IGt1fGlyYXxhc2h8dHUgfG50dXxhIGl8bXUgfHVtdXxtdW58dW50fGVyZXx6d2F8ZWdlfHllIHxvcmF8dGVnfGEgbnxhIGF8aW5nfGtvIHwgYml8c2hvfGlyaXwgYXJ8IHdlfHNoaXxhYmF8ZSBufGVzZXxnbyB8YSBtfG8gYXxndSB8dWJhfG5nb3xuZ2F8aGlyfCBjYXx1Z3V8b2JvfGhvYnx6YSB8bmRpfGlzaHxnaWh8IGF0fGFyYXx3ZXN8IGt3fGdlcnxhdGV8YSBifCBiYXwgZ3V8ZSBrfGNhbnxhbWF8dW5nfGJvcnx1IHd8bXdlfGRpIHwgYWJ8bmtlfGtlIHxrd2l8a2EgfGFua3x5byB8ZXp3fG4gdXxuYSB8aXdlfGUgbXxyZXp8cmkgfGEgZ3xnaXJ8IGFtfGlnaXxlIGl8cm8gfGEgdXxuZ2l8ZSBifGJhbnwgYWt8IGlufGFyaXxuIGl8aHVnfGlodXxlIHV8cml6fGFuZ3xudGF8IHZ5fGF0YXwgdWJ8YW5kfGFrYXxyd2F8IG50fGt1cnx0YSB8aWtpfGthbnxpemF8dSBifHJhbnxzaGF8byBufGkgbnwgaWd8aXZ5fCBpdnxhaGl8YmFofHUgbnxhbmF8IGJ1fCBhc3xha3V8Z2EgfHVrb3xvIHV8aG8gfCBrYXxvc2V8dWJ1fGFrb3xndWt8aXRlfG8geXxiYSB8aSBifGFueXxraXJ8byBrfGFob3xpeWV8a3VifGFtd3xueWV8YWhhfCBuZ3xvIG18bnlhfCBpdHxyZSB8IGltfG8gYnxpend8a3VufGhpbnxlIGN8dnlvfG8gaXx2eWl8bmd1fHVyaXxpbWl8aW13fGdpbnxlbmV8dSBtfHppIHxoYSB8a3VnfGJ1cnx1cnV8andlfCB6aXx1IGd8ZXJhfGFnYXxyb258YWJpfCB5IHxlIHl8IHVrfGdla3xhbml8IGdpfGV5ZXxpbmR8d28gfHUgYXxpIGF8IGlifGkgaXxyYXN8YmF0fGdhbnxhbWJ8biBhfG9ua3xyaWt8bmUgfGloZXxhZ2l8a29yfCBpY3x6ZSB8dHVufGliaXx3dWJ8bmdlfG8genx0c2V8bmthfGhlIHxyZWt8dHdhfGdlbnxla298bWF0fGJlcnwgYWh8bmkgfHVzaHx1bXd8IGJ3fG1ha3xiaWt8dXJ5fHlpd3xid298IG5rfG1hIHxubyB8a2l6fHVyb3xnaXN8YXJvfGlrYXwgeWF8Z3VzfHkgaXx3aXJ8dWdpfHVraXwga2l8YSBjfHJ5b3xiaXJ8IG1hfCB5aXxpcm98YndhfG11cnxlbmd8dWt3fGhhdHx0YW58dXR1fHdpdHx3IGl8IG13fHkgYXxtYmV8IGhhfHV6YXxoYW18cmFofCBpc3xpcnd8byB2fHVtdnx1cmF8ZW55fGhpbXxla2F8YmFrfGJ1bnwgbnl8Ym8gfHlpZ3xrdXZ8d2FifGtleXxla2V8eWVyfHZ5ZXxpIHl8aXRhfHlhIHxhIHJ8IGtvfGt3YXxvIGMnLFxuICAgIHBsdDogJ255IHxuYSB8YW5hfCBueXxhIG58c3kgfHkgZnxhIGF8YWhhfHJhIHwgbWF8bmFufG4gbnxhbnl8eSBufGEgbXx5IG18eSBhfCBmaXxhbiB8dHJhfGhhbnxhcmF8IGZhfCBhbXxrYSB8IHRzfCBuYXxpbiB8YW1pfCBtaXxhIHR8b2xvfG1pbnxtYW58aXphfGxvbnwgaXp8ZmFufCBvbHwgaGF8IHN5fGFrYXxhIGl8cmVofGF5IHxpYW58dHN5fGluYXwgYXJ8b24gfG8gYXxldHJ8aGV0fG9uYXx5IG98byBofHphbnx5IHR8YSBofGFsYXwgaGl8YSBmfHkgaHxlaGV8aXJhfGEgc3x6byB8eSBpfG5kcnxqbyB8IGpvfG4ganwgYW58IGF6fHJhbnxkaWF8IGRyfHkgc3xmYWh8ZW5hfGlyZXx0YW58ZHJlfCB6b3xtYmF8IGthfG0gcHxhZmF8IGRpfG4gZHxhbmR8YXpvfHp5IHxhbXB8aWEgfHJlbnxpbnl8cmFofHkgenxyeSB8aWthfG9hbnxhbyB8YW1ifGxhbHxobyB8IGhvfGlzeXxvbnl8dHNhfGFzYXxhIGR8aGEgfGZpYXxtaXN8YXZhfHJheXwgcGl8YW0gfGRyYXwgdG98cmlufCB0YXxhbnR8ZW8gfHpheXxyYWl8dHNpfGl0cnxzYSB8IGZvfCByYXx2YW58b3ZhfG5lbnxhenl8IHZvfG1waXxhcml8byBmfHRva3xhIGt8IGlyfGthbnxvdG98bWFofGx5IHxzaWF8IGxhfG4gaXx2b2F8aGFmfGEgcnxpdG98eSBrfG9rYXx5IHJ8eSBsfGFub3xpdGF8ZW5lfGl0c3xpYWx8em9ufGF6YXxhaW58IHJlfCBhc3xmb3R8YXJvfGZpdHxuYXR8bmlufGFseXxoYXJ8IGtvfGhhbXwgbm98ZmEgfGFyeXxhdHJ8aWxhfGF0YXxpaGF8bmFtfGtvbnxva298IHNhfGVsb3xuamF8YW5qfGl2ZXxpc2F8b2EgfGR5IHx5IGR8byBtfG50b3xhbmt8byBufG90cnxwYW58ZmlyfGFpcnxzaXJ8dHkgfGEgdnxzYW18byBzfHRvdnxtaXR8cmFrfHJlb3xvIHR8cGlhfHRhb3wgYW98bm8gfHkgdnxpYXJ8YSBlfGEgenxoaXR8aG9hfCBpdHx0byB8emEgfHRvbnxlaGF8ZW5kfHZ5IHxpZGl8dGlufGF0aXxhZGl8bG5hfGFsbnxyb3Z8YmFufCB6YXxuZ2F8aGFofG9uaXxvc2l8c29zfHZhaHxpbm98aXR5fCBhdHxoaWF8cGlyfGlmYXxvbWJ8YW1lfGVyYXx2ZWx8a2FyfHZhIHx0c298amFrfGZpZHxpZml8YWlzfG8gaXxpZHl8bGEgfGFtYXxiYSB8IHBhfHRvdHxhbml8cmFyfG1wYXxoYXp8a2FtfCBlb3wgaWx8aXZhfGFob3xuYW98biBrfGF0b3xsYWh8b3Z5fCB0ZXxkcm98bGFufGVsYXwgbW98IHNpfGZpbnxtaXZ8c2FufGtvYXwgaGV8YXNvfCBtYnxzYWt8a2F2JyxcbiAgICBxdWc6ICd0YSB8IGthfGthIHxuYSB8dW5hfGNoYXxhc2h8YXJpfGEga3xhbmF8cGFrfGlzaHxhY2h8aGthfHNoa3xtaSB8a3RhfGhheXxtYW58IGNofGFwYXxhayB8cmlufGF0YXxrdW58aGFyfGFrdHxpdGF8IGhhfGFtaXxsbGF8IHBhfGFtYXxwYXN8c2hwfCBtYXx0YWt8YXnDsXx5w7FpfGluIHxzaCB8aW5hfHVrdXxua2F8Y2hpfGFrYXxhIGN8eXRhfGt1eXxhbGx8dGFwfGEgaHxrYW58IHR1fMOxaXR8dHVrfCBydXxydW58Y2h1fGFuIHxwYXl8YXl0fHJpc3wga2l8YWt1fGhwYXxhbmt8YSBwfGthbXwgc2h8bmFtfGEgc3x1eSB8aSBrfGF5cHxuYWt8cGkgfG50YXxhIG18IGxpfGF5IHxsaWF8aGlufGthd3xuYXB8YW50fHRhbXxhIHR8aXJpfG5hdHwgd2F8eSByfGtheXxhd3N8IHlhfG4gdHx5cGF8d3NhfHBhIHxsYWt8c2hpfGEgYXxsbGl8aWt1fGh1IHxuIGt8aWFrfHlheXxraXN8IGFsfHNodXxhIHd8aXBhfCBzYXwgaWx8YXBpfGthc3x5a3V8eWFjfGthdHxhIHJ8aHVrfGkgY3x3YW58aGlrfGEgaXxpbGx8dXNofCB0aXxheWt8aHBpfCBrdXxrYWN8c2F5fGh1bnx1eWF8aWxhfGlrYXx5dXl8cGlyfGljaHxtYWN8aW1hfGEgeXx5bGx8YXlsfGkgcHxraW58YSBsfCB3aXxrdXN8IHl1fGxhbnx0YW58bGx1fGtwaXwgdGF8IHBpfGF5YXxsYSB8eWFufGF3YXwgbml8a2FrfGxhdHxyaWt8d2FyfHVsbHxrbGx8bGkgfGlua3xuY2h8dW4gfGFrcHxuIHN8bWF5fCBheXx1Y2h8aSBzfG5hY3xzaGF8aWtpfGtpa3xoIG18dWt0fHBpcHx0aW58biBwfGl5YXxuYWx8YWtpfCByaXx1cmF8dGlrfG1ha3x5cGl8aSBtfGkgd3xuIG18aGlzfGsgaXxyaXl8aXdhfHkgaHwgaHV8aGFufGFrbHxrIHR8bWFzfHBpa3xrYXB8IMOxYXx1IHR8bm1pfG5pc3xrIGF8aSB5fGsgbHxrYXJ8IGltfGkgaXx3aWx8eW1hfGF5bXxrc2l8aWtzfHVtYXwgc3V8aCBrfGhhc3wgYWt8dW5rfGh1Y3xraXJ8YW5jfGsgbXxwYWx8ayBrfGlrIHxpw7FpfCBpw7F8bWEgfG4geXxtdW58IG11fG1hbXx0YWN8YSBufGkgdHxrIHJ8c2FtfGlhbnxhc2l8ayBofHdhc3x5d2F8aXl0fGxscHxzYW58c3VtfHJheXxzaSB8cGFufG5raXx0YXJ8IGlpfHUga3zDsWlrfHVrIHxpw7FhfGt1a3x3cGF8YXdwfGFra3xhIHV8d2F0fHVyaXwgbWl8eWFyfHV5a3xheXd8aCBjfGhhIHx0YXl8cm1pfGFybXx1dGF8bGFzfHlrYXxsbGt8a3VsfHdpw7F8YXRpfHNrYXwgbGx8a2l0fG4gaHx1dGl8a2ljfG1hdCcsXG4gICAgbWFkOiAnYW4gfGVuZ3xuZyB8YmFufCBzYXwga2F8ZGhhfHJlbnwgc2V8IGJhfGFrIHwgaGF8YWRofGhha3wgZGh8YW5nfHNlIHwgcGF8YWJhfGEgc3xuYSB8YWdhfGhhIHwgb3J8biBzfG9yZXxhcmF8IGFnfGdhZHxhcmV8YW5hfG4gb3xuZ2d8YWxlfGdhbnxhIGt8YWxhfGRodXx0YWJ8c2FyfG90YXxhc2F8ZWJhfCBvdHwga2V8c2FifGJhIHx3aSB8dXdpfGFiYnxpIGh8aHV3fGFhbnxuIGt8YSBifGJiYXwgdGF8IG1hfHBhbnxoYWx8YmFzfGFrb3xkaGl8cmEgfGthYnxlbSB8YmVifGthIHxsYWt8Z2kgfGxlbXxnIGF8ZWthfG4gYnxhbWF8bmdhfHNhbnxhdCB8b25nfHJhbnxuZ2V8YSBvfGdndXxzYSB8YSBkfGFuZXxuIHB8a2VufHBhcnxhamF8bWFufGdhcnxhdGF8bmVrfGFwYXwgbmF8YWdpfGFiZXwgZ2F8ZSBlfHNhbHxhIGF8dGFufGcgc3xhbCB8a2FsfGdlbnx0YSB8aSBzfGFrYXxlIGF8YSBwfGEgZXwgbGF8IHBlfG5hbnwgYW58ZXJhfGUgZHwgZSB8IGJlfG4gYXwgYWx8ZW5hfHV5IHxndXl8biBufGF0ZXwgYml8bWFzfGUga3xrYXR8dWFufG9hbnxrb258ayBrfGEgbXxpIGR8ZyBlfG4gdHxnIGt8YWRhfGtvYXxsYW58ZWxhfCBkYXxiYWR8bWEgfG5lIHxhcyB8bGFifGVnYXwgbW98YXIgfGNhcnxvbmV8aSBwfGJpIHxrYWF8YmF0fHJpIHxvbiB8cG9ufCBzb3xlIGJ8bGUgfGFoIHxhYml8YXNlfGFkaXxlcGF8IGVwfGsgaHxhbmR8cGFtfHRlIHxvayB8c3RlfGFvbnxvbSB8b2tvfGFoYXxhcml8b25hfGFzaXx0ZXJ8IGRpfGRpIHxwYWR8ZSBzfHNhZHx5YXJ8bmVnfHRvbnxzZXR8cmdhfG9zdHxtb3N8Z2FwfG5kYXxhIGx8aGFyfGkga3xpbmF8IGEgfCBuZ3xrb218aXNhfHNpIHxhIHR8YSBofCBrbHxqYW58ZGFqfGlnYXxoaWd8aWRofGhpZHxuZGh8biBtfG5nc3x0dG98ZXR0fGFyZ3xsYSB8ayBifGxlcnxrIGR8bm5hfCB0b3xuYW98biBkfG1hdHwgY2F8dGFkfGJpc3xheWF8ZXBvfGFlbnwgcG98YmlufG55YXxrYXN8ayBzfG4gaHxzeWF8bnRhfGdzYXxlbiB8YW50fG4gZ3xrYXJ8aSBlfGRhc3xlIHR8ZSBwfGliYXwgcHJ8ZyBwfCBob3wgZWx8aSBhfGhpIHxvcyB8c2FvfHV3YXx0ZXN8IGphfG5hZ3xuYXN8bGFlfHNpYXx0IHN8ayBvfG50b3xpbnR8eWF0fGFybnxtIHB8ZHV3fGFkdXxldGF8IGtvfGkgYnxuaSB8ZyBufGtsYXxyYWt8YW1lfG1wb3xqdWF8c29rfGFzb3xnZ2l8ZWphfHBlbHxqYW18ZWxlfCBldHxkaWwnLFxuICAgIG55YTogJ2FsaXxuZGl8YSBtfGEga3wgbmR8d2EgfG5hIHwgYWx8eWVufCBrdXxudGh8cmEgfGRpIHxzZSB8bnNlfCBtdXxhIG58dGh1fGh1IHxuZ2F8IHdhfGxhIHxtdW58dSBhfHVudHxpeWV8IGthfGNlIHxhY2V8IGxvfGEgbHxhbmd8ZSBhfCBsYXwgcGF8bGl5fGEgdXxlbnN8IG1hfGlkd3xvbnN8ZHdhfGUgbXxpIG58YWxhfGtoYXxsbyB8bGkgfGlyYXxlcmF8ZW5lfGdhIHxhbmF8emEgfG8gbXwgbW98eW8gfG8gd3wgY2l8d2UgfGR6aXxrbyB8byBsfGFuZHxkYW58aGFsfHppa3xjaGl8b3lvfHBhIHxuZXJ8dWx1fGVuYXxtb3l8IHVtfGEgcHwgZGF8YXBlfGthcHxrYSB8aWtvfCBhbnxwZW58YSBjfHRvIHxpdG98aGl0fG5jaHwgbmN8aXJpfGxpcnx3YWN8dW1vfGUga3xsdSB8YSBhfGF5ZXwgZHp8a3VrfGEgenxkd2V8dGhhfG1hbHwgemF8aW5nfHVmdXxtdSB8cm8gfGZ1bHwgdWZ8byBjfGkgZHxsaW58ZSBsfHpvIHxlZHd8IHpvfG8gYXxtd2F8dSB3fGlyb3xvIG58bGFufGFtdXxlcmV8IG13fG56aXxkemF8YWxvfHJpIHwgbGl8ZnVufGxpZHxnYW58c28gfCBjYXxrdWx8b2Z1fG5zb3xvIHp8dWxvfHVuenxvIGt8bXVsfGxhbXxpIGN8c2FufGEgYnxrd2F8IG5hfGEgZHwgYSB8dW5hfHUga3xpIGx8bmtofGFudHxha3V8Y2EgfGNpdHxvbGl8aXBvfGRpcHxhbWF8bGFjfHdpcnxoYW58eWFufG9zYXx1bGl8dHNhfGkgbXxwb258a3VwfHUgZHx0aSB8Z3dpfHVraHx1bmd8aHVufGxvbnxhbmt8bmRhfGlraXxpbmF8IGtvfGFvIHxkaXp8cGh1fGF0aXxvbWF8aSBhfHRzaXxwYXR8aXlhfHNpeXxrdXR8IHlhfHppZHxlemV8bWEgfGkga3xtZXJ8b21lfG1vbHx1IG58dSBvfGFwaHxvZ3d8aXpvfG1iYXxzaWR8a3UgfHNhbXxhd2l8YWR6fCBhZHxpeml8dWxhfHNheXxlIG58a2h1fCBraHxyZXp8dm9tfGJ2b3xva2h8bG9rfHdpbnxha2h8byBvfCBhbXwgb258emlyfG1hcHwgeml8ZXphfGphIHxnbyB8bmdvfGlrYXxpdHN8YXRzfG9zaXxnd2V8IGNvfGlzYXx5YSB8aGF3fGFuaXxvIHB8emkgfG5kdXxraG98ZXpvfGtpcnx1bml8aSB1fCBheXxsYWx8Z2FsfHNhIHxib218IGJvfG9sYXxhbWJ8d2FrfGhhIHxiYSB8bmphfGFuanxiYW58IGJhfGl6YXwgYnV8dWR6fG5nd3xidW58b3llfG8gZHxuYWx8a3VzfGkgcHxpIG98aSB5fHdpIHwgbnR8ZSBwfCBzaXxha2F8bmUgfG1lbnxqaXJ8bmppfHNlZHxldHN8ZW5kfGVrYXx1bWF8ZHUgJyxcbiAgICB6eWI6ICdib3V8aXogfGFldXxlbnp8ZW5nfHV6IHwgYm98aWggfG91eHxueiB8IGRpfGluZ3x6IGd8dXggfHVxIHxkaWh8bmdofCBjYXxuZyB8Z2VufHVuZ3x6IGN8IG1pfG1penxpaiB8Y2FlfHogZHwgZ2l8IGRlfCBnZXxldXF8eW91fCBjaXxuZ3p8b3VqfGFlbnx1aiB8IHlpfGllbnxneWF8IGd1fG5nanxtYm98IG1ifHpsaXxkYWV8Z2lqfGNpbnxhbmd8aiBkfG5hZXwgc2V8IGJhfHogeXxldXp8IGN1fGRlIHx4IG18b3ogfGogZ3xvdXp8eCBifGxpIHx6IGJ8aCBnfCBkYXwgeW98bmogfHhuYXxveG58cm94fCByb3xoIGN8bnpsfHZlaXx5YXV8d3ogfHogbXxpeCB8IHNpfGkgY3xpcSB8Z2ggfGogYnwgY3d8bmRhfHlpbnwgaGl8IG5kfGRhbnx2dW58aW5ofCBnYXxjYW58ZWkgfGN1bnx5aWV8cSBnfGhvenxiYXV8IGxpfCBneXx3eW98Y3d5fHogaHxndWV8Z3ogfGd1bnxmYXp8dW56fHllbnx1aCB8ZGVufGNpenwgZ298cSBjfGdqIHwgYml8ZWogfGFlanwgZmF8aGlufHpjaXwgd258aiBufGdvenxnYWl8YXUgfHogc3xxIGR8IHZ1fGggbXxndmF8aHUgfGF1anxvdXF8YXogfGggZHx5YSB8dWVrfGNpIHxuaCB8dSBkfG91IHxzb3V8anNvfGdqc3xkaW58YXd6fGVuanwgZG98aCBzfGV2ZXxzZXZ8eiByfG5xIHxzaW58bmh5fGcgZ3xnIGJ8bGl6fGtneXxla2d8c2VufGVpeHx3bmd8bGlqfG5ncXxiaW58aSBkfGdoY3wgaGF8YmFlfGhpeHxoIHl8aiBjfGdoZ3xpIGJ8b3VofGVuIHxuIGR8aCBmfGogc3x6IHZ8aiB5fGxhd3xoY2l8YW5ofGluenxxIHl8bmVpfGFuanxvemN8ZXogfGVuaHxxIHN8YWlxfHVlbnx6c2l8emRhfGh5ZXx1amN8ZSBjfHNpenxlaXp8YW56fGcgeXxpIGd8cSBufGJpZXwgbmV8IGFlfGdpenx1IGN8aGd5fGcgZHxnZGF8bmdkfGNvdXwgbGF8eiBsfGF1eXxhaSB8aW4gfGl1enx6ZGl8amh1fHVqaHx5dXp8IGR1fGogbXwgZnV8Y3V6fGVpcXxnIGN8Z3pkfCBjb3x1eXV8Y296fHpiaXxiaXV8IGR3fGkgc3xpIG58YXcgfGR1bnx5dW58aXp5fGRhd3wgaGV8bmhvfCBob3xlbnF8eCBsfGNpZXxxIGJ8Y2lqfHV6bHx4IGR8aXVqfGF3anwgeWF8ZWlqfGRlaXxuZGV8c2FlfGl6Y3x3bnF8d25ofHNlaXxoIGJ8YWlofGd6c3xid258YSBkfHUgZ3xuZ2d8amNhfGUgYnxyYW58IHJhfGhjdXwgbWV8aWV0fHZhbnwgYnV8Z3VofGhlbnxzaSB8d25qfCB2ZXx1IGJ8YXpsfGluanxnYWt8Z2FufG96Z3xzaXV8eWF3fGkgbScsXG4gICAga2luOiAncmEgfCBrdXxzZSB8IG11fGEga3xudHV8dHUgfG5nYXx1bXV8eWUgfCB1bXx1bnR8bXVufGUgbnwgZ3V8d2UgfGlyYXxhIG58IG4gfHdhIHxlcmV8bXUgfGtvIHxnb218YSBifGUgYXwgYWJ8bGkgfGUga3xtYmF8YSBhfGUgYnxhYmF8Z2EgfGUgdXxiYSB8b21ifG8ga3wgYmF8YSB1fG9zZXx1IGJ8byBhfCBjeXxhc2h8ZW5nfCBhZ3xrd2l8IGJ1fHphIHxnaWh8cmVufG5kaXwgdWJ8YW5nfHlvIHxha2F8Z3UgfGlnaXwgaWJ8YSBnfGEgbXwgbnR8dWxpfG8gYnxhbWF8aWh1fGUgaXxudGF8IGFrfGFnb3xybyB8b3JhfCBrYXx1Z3V8aHVnfGRpIHxpeWV8YmFufCBhbXxjeWF8a3UgfHRhIHwgYnd8YW5kfHNoYXxyZSB8IGlnfGdhbnx1YnV8bmEgfCBrd3xvYm98IGJ5fCBiaXxhIGl8eWFufGthIHxzaG98a3VifGVyYXxlc2V8IHdlfGthbnxhZ2F8aG9ifGJvcnxhbmF8YnlvfHVyYXx1cnV8aWJpfHJ3YXx3ZXN8dSB3fG5vIHx1a298aSBtfG1vIHx1IGF8dXJlfGlsaXx1YmF8byBufHVoYXx1Z2F8biBhfCBpbXxpc2h8YndhfGJ3b3x3aXl8YWxpfGJlcnx6ZSB8bmUgfHVzaHxhcmV8byBpfHUgbXxnZXJ8YnVyfHJhbnwga2l8IG5vfGFuZXxieWV8IHkgfGVnZXx0ZWd8Z3VofCB1a3xuIGl8cmFnfGkgYXx5YSB8dSBnfGUgbXxhbnp8Ym8gfGFib3xnYXJ8d28gfHkgaXxobyB8YWdlfGluZHxvIG18ZWtlfGEgc3xhcmF8emlyfGl0ZXxrdWd8a2ltfGFjaXwgYXN8dSBufGFuaXxraXJ8bWJlfCBnaXx5b3N8a3VyfHVnb3xnaXJ8ZSBjfGl6YXxhaG98aSBifHR1cnxhdGF8byB1fCBzZXx1IHV8em8gfGkgaXxhaGF8bmdlfG13ZXxpcm98YWt3fGFueXxlemF8dWtpfGltaXxvIHl8YXRlfHUga3xpa2l8YXR1fGJhdHwgaW58Z28gfHRhbnxuIHV8Ym9zfCBib3wgbmF8aGFrfGlieXwgYXR8aWhlfHVuZ3xoYSB8YnVsfGthcnxleWV8ZWtvfGdla3xueWF8byBnfHNoeXxlIHl8YXdlfG5nb3xiaXR8bXVsfG56aXxyZXJ8YmFnfGdlIHxpbXd8YmFofGNpcnxnYWN8YmFrfGplIHxnZXp8aW11fGV6ZXx0c2V8ZXRzfG1hdHwgcnV8aXJ3fGhlIHwgbml8IHVyfCB5aXxha298bmdpfCBuZ3xpIG58cmV6fHViaXxndXN8Zml0fGFmaXx1Z2l8dWthfGFtYnxvIGN8dXR1fHVmYXxydWt8bXVnfGJhc3xiaXN8dWt1fGhpbnxlIGd8aWdlfGFtb3xpbmd8IGFmfHllbXxuaSB8IHJ5fGEgcnxnYXp8dGUgfGVyd3xid2V8dWJ3fGh3YXxpa298IGFsfGFudHx6aSAnLFxuICAgIHp1bDogJ25nZXxva3V8IG5nfGEgbnxsbyB8dW5nfG5nYXxsYSB8bGUgfCBub3xlbG98bHVufCB1bXxlIG58d2EgfHdlIHxnZWx8ZSB1fGVsZXxuZWx8dGhpfGtlIHxub218ZXppfG1hIHxudHV8b21hfGhpIHxvIG58bmdvfHR1IHxua2V8b25rfG8gbHx1dGh8bmkgfGEgdXxsZWt8dW50fCB3b3xvIGV8IGxvfG11bnx1bXV8cGhhfCBrdXxhbmd8aG8gfGt3ZXx1bHV8IG5lfHdvbnx1bmV8bHVsfGVsdXwgdW58YSBpfGdva3xrdWx8YXRofGhsYXxsb2t8a2hlfGVuaXx0aG98ZWxhfHp3ZXxha2h8a2VsfGEga3xlbnp8YW5hfGJhbnxha2F8dSB1fGluZ3x1bGV8ZWx3fGtob3x1a3V8YWxhfGx3YXxnZW58IHVrfHdlbnxhbWF8bmEgfGUga3xrbyB8Z2FufGEgZXxoZSB8emlufGVua3xvIHl8IGV6fGthdHwga3d8bGFufGV0aHxoZXR8byBvfCBva3xva3d8aSBufG56aXxhYmF8ZSBhfGhha3xsZWx8bHdlfGVrb3xhbmV8a2EgfHNvIHx5byB8YXlvfG8gYXx1aGx8bmt1fG55ZXwgbmF8dGh1fG1waHxkbyB8YmVufGlzZXxrdXR8aWtlfGt1bnwgaXN8IGltfGhvbHxvYnV8ZmFufGkga3xlIHd8bmhsfG5va3xpbml8YW5kfGt1aHx1a2h8a3VrfCBha3xlIGl8aXNpfGFwaHx6aSB8aWxlfGVraXxla2h8IGJhfGVrYXx0aGV8YSBhfCBsZXwgeWV8a3dhfGUgZXxmdXR8IGZ1fHphIHxtYWx8IGFifGViZXxpc2F8IGVtfG8gd3xrdWJ8bXRofGkgd3xuZGx8ZW1wfGFueXxvbG98Z2EgfCBrb3xuZW58bmlzfGFsdXxpdGh8ZWxpfG5kb3xzZWJ8bmRhfCB5YXxpIGl8ZWtlfHZpa3xha2V8dWJhfGFiZXxlend8eW9rfGJhIHxhbGV8em8gfG9sdXx1bWV8eWUgfGVzaXxraWx8a2h1fHllbnxlbWl8bmV6fGhsb3xhIGx8YXNlfHVsYXxrZWt8YSBvfGlwaHxvIHV8bm8gfGF6d3xrYW58bWVsfHVueXxuZSB8dWZhfGFobHxsaW58aHVsfGFudHx1bmR8c2EgfGVuaHxrdXN8a3V2fGxha3wgaW58byBpfGRpbnxrb218YW1ifHppc3xpbmR8b2xhfHVwaHx3ZXp8ZW5nfHllenxwaGV8cGhpfG1iYXxueWF8aGFufGt1ZnxuZW18aXN3fGFuaXxpeW98IGl5fGZ1bnwgeW98dXZpfGkgYXxlbmV8aXppfCBlbHxjYWx8aSBlfGV6ZXxhbm98bmF5fGh3ZXxrdXB8bGFsfHV5b3x1YnV8a29sfG9rb3x1bG98IGxhfGUgbHx0aGF8bmFufG1mdXxob258bnphfGhpbnwgZXl8b21wfGRhIHxibyB8aWx1fHdha3xsb258aXNvfGt1Z3xua2F8aW5rfGkgbHxzZWt8ZWt1fCBla3x0aHd8Z2V6JyxcbiAgICBzd2U6ICdhciB8ZXIgfHR0IHxjaCB8b2NofCBvY3xpbmd8w6R0dHxpbGx8csOkdHxlbiB8IHRpfHRpbHxmw7ZyfGxsIHwgcsOkfG5kZXwgZsO2fHZhcnxldCB8YW5kfCBlbnxlbGx8IGhhfG9tIHxoZXR8bGxlfGxpZ3xkZSB8bmlufCBkZXxuZyB8IGlufCBmcnxhcyB8bGVyfCBlbHxnZW58bnZhfHVuZHxhdHR8ZW52fHIgaHwgaSB8ciByfHNrYXxmcml8IHNvfGhhcnxkZXJ8IGF0fMO2ciB8dGVyfGFsbHx0IHR8IHV0fGRlbnxrYSB8bGxhfHNvbXxhdiB8c2FtfGdoZXxnYSB8IHNrfCB2aXwgYXZ8ZXRlfGxhIHxlbnN8dCBhfCBzaXxyIHN8aWdhfGlnaHx0aWd8IHZhfGlnIHxhIHN8IHN0fGlvbnxyYSB8dHRpfGEgb3wgw6RyfHRlbnxucyB8dCBlfG5hIHwgYmV8aGFufCB1bnwgYW58IHNhfGEgZnwgbGF8IGdyfCBtw6V8bmdlfG4gc3x2aXN8bGFufG3DpSB8YXRpfG5hdHwgw6V0fGFuIHxubmF8IGxpfCBhbHx0IGZ8YW5zfG5za3xzbml8Z3J1fMOkbGx8dGlvfGFkIHwgbWV8aXNrfGtsaXxzIGZ8dCBpfHN0w6R8dCBzfHJpIHxtZWR8c3RhfGggcnxsaWt8ZGEgfGRpZ3x0YSB8ciBvfHJ1bnxvbiB8IHJlfGxhZ3x0dGF8w6RyIHxrYXB8YSBpfGEgcnzDpG5kfGVydnxuIGV8a3RlfG4gZnxydml8bm9tfGl0dHxpZCB8IG1vfHNreXxyIGV8dmVyfMOkbnN8dmlsfGd0IHxpZ3R8IG5hfHRhbnx1dGF8ZHJhfHQgb3xybyB8aXNufCBmYXxrYWx8aWhlfHJpaHxlcmt8ciB1fGUgc3xwZXJ8bCB2fHZpZHxvbmV8cmVsfGJlcnxyYW58b3QgfG1vdHxuZGx8ZCBmfGVkIHxpa2F8bcOkbnxsIHN8YmV0fHQgYnxkZCB8eWRkfGt5ZHxuIG98cyBzfHN0cnxuIG18dGV0fHNpbnxyIGZ8IG9tfHJuYXxpbnR8ciBpfGVuZHxuYWR8bCBhfGFwIHxlcnN8bmRhfHQgdnxlbnR8cmJlfGFyYnwgaMOkfGV0c3xow6RsfGFtaHxja2x8Z2FyfG5nYXxyIG18amUgfHJqZXxhcmp8biBpfHMgZXxsaW58ciB0fGkgc3xyw6RufCBwZXxpbGt8dCBsfGVybnxww6UgfCBww6V8dMOkbHxkIGV8ZG9tfGVnZXxnIGV8dG5pfHIgYXxsaXR8cmFzfCBzw6V8bGxufGtpbHxza2l8ZW5ufGkgb3xhIGR8ZXLDpHxuIGF8YXJhfCBnZXzDpHJvfGEgbXwgYXJ8dCBkfGlsanxlbHN8eWNrfCB2ZXxnIG98ZnLDpXxuYXN8dHJhfGVzc3xkZWx8bSBzfGxpdnxsIGx8aW4gfHYgc3xnIGF8YXN0fGUgZXx2YWx8c29ufHJzb3xlIHR8YWdlfG5kIHwgZWd8aWFsfGNpYXxvY2l8c29jfHVwcHxpZ2l8ZWxpfGcgc3xya2x8Z2FkfG5kcnxudGV8w7ZyYScsXG4gICAgbGluOiAnbmEgfCBuYXwgeWF8eWEgfGEgbXwgbW98dG8gfCBrb3xsaSB8YSBifCBsaXxvIG58IGJvfGkgbnxhIHl8YSBufGtpIHxhIGx8a29rfGxhIHwgbWF8emFsfGkgeXxva2l8IHBlfG5nb3xhbGl8cGUgfHNvIHxuc298b3RvfG9uc3wgYmF8YWxhfG1vdHxhIGt8ZW5nfG55b3xla298byBlfG5nZXx5b258IG55fGtvbHxsaWt8aWtvfGEgZXxvIHl8YW5nfHllIHwgeWV8b2tvfG1hIHxvIGF8Z28gfCBla3xrbyB8ZSBtfGF6YXx0ZSB8b2xvfHNhbHxhbWF8c2kgfCBhenxtYWt8ZSBifGxvIHwgdGV8dGEgfGlzYXxha298YW1ifHNlbnxvbmd8ZSBufGVsYXxveW98aSBrfGFuaXwgZXN8byBtfG5pIHxvc2F8IHRvfGJhbnxiYXR8YSB0fG1iYXxpbmd8eW8gfCBveXxlbGl8YSBwfG1ib3xvIHB8bWkgfCBtaXwgbmR8YmEgfGkgbXxib2t8aSBwfGlzaXxtb2t8bGlzfG5nYXxnZSB8bmRlfGtvenxibyB8Z2VsfGF0b3xvIHR8bW9zfGFrYXxvYmF8ZXNlfGxhbXxrb3B8IGV6fGxvbnxkZW58b21ifG8gYnxvdGF8c2EgfGdhIHxlIGF8ZSB5fGV6YXxrb3N8bGlufGVzYXxlIGV8a29ifGUga3xzYW18a290fGthbnxib3R8aWthfG5naXxrYW18a2EgfCBwb3xnb218b2xpfG9wZXx5YW58ZWxvfCBsb3xhdGF8IGVsfGJvbnxva2F8cG8gfGJpa3xhdGV8IGJpfGEgc3xpIHR8aSBifG9taXxwZXN8d2EgfCBzZXxvemF8bG9rfGJvbXxva2V8c29tfHp3YXxtaXN8aSBlfGJla3xpa2l8IGF0fG9sYXx0aSB8b3p3fGxpYnxvIGx8b3N1fG9zb3xlIHR8bmRhfGFzZXxlbGV8a2VsfG9tb3xib3N8c3UgfHVzdXxzdXN8YmFsfGkgbHxhbWl8byBvfGJha3wgbnp8cG9ufHRlbHxtb2J8bXUgfCBlcHxuemF8YXNpfG1iaXxhdGl8a2F0fGxlIHxnaSB8YW5hfG90aXxuZGl8dGFufGEgb3x3YW58b2JlfGt1bXxueWF8bWFifGJpc3xuaXN8b3BvfHRhbHxtYXR8IGthfGJvbHxhbmR8YXllfGJhenx1IHl8ZXRhfCB0YXxuZSB8ZW5lfGVtYnxzZW18ZSBsfGdpc3xiZW58IGFrfCBlbnxtYWx8b2JvfGdvYnxpa2V8c2UgfGlib3zigJl0ZXwg4oCZdHx1bWJ8IHNvfG1pa3xva3V8YmUgfG1iZXxiaSB8aSBhfGVuaXxpIG98IG1ifHRleXxzYW58IGV0fGFib3xlYmV8Z2VifGViYXx5ZWJ8YnUgfCBhc3xvdGV8c2lrfGVtYXxleWF8aWJlfG1pYnxhaSB8cGFpfG13YXxrZXN8ZGEgfG1heXxib3p8YW11fGEgYXxrb218bWVsfG9uYXxlYml8aWEgfGluYXx0aW58IHRpfGJ3YXxzb2x8c29uJyxcbiAgICBzb206ICcga2F8a2EgfGF5IHx1dSB8YW4gfHlvIHxvbyB8YWFufGFoYXwgd2F8ZGEgfCBxb3wgaW58IHUgfHNoYXwgeGF8YSBpfGFkYXxpeW98IGl5fG1hIHxhbWF8IGFofCBsYXxxb2Z8YWEgfGhheXxnYSB8YSBhfGEgd3xhaCB8IGRofGEgc3wgZGF8aW4gfHhhcXwgb298YSBkfGFhZHx5YWh8ZWV5fCBsZXxpc2F8bGVlfHUgbHxxIHV8YXEgfCBzaXx0YWF8ZXlhfGFzdHxsYSB8b2YgfGl5YXxzYSB8eSBpfHUgeHxzdGF8a2FzfHh1dXx1eHV8d3V4fCB3dXxpaXN8bnV1fGludXxybyB8IGFtfCBtYXxhIHF8d2F4fGRoYXxhbGF8a2FsfG5heXxmIGt8YSBrfGxlIHxrdSB8IGt1fCBzaHxvIGl8YSBsfHRhIHxtYWF8YSB1fGRpaXxsb298IGxvfG8gYXxhbGV8YXJhfGFuYXxpZ2F8byBkfCB1dXxoYSB8bG8gfG8gbXxvIHh8ZG9vfGFyb3xrYXJ8eWFhfGd1IHxzaSB8aW1hfG5hIHwgeG98IGZhfGFka3xkbyB8YSB4fGFkIHxhYXN8IHFhfCBzb3xhIG98IGJhfGxhZ3wgYWF8IGhlfGRrYXxhZGl8c29vfG8ga3xhcWF8IGlzfGFzaHx1IGR8aGFkfCBnYXxlZWR8c2FufHUga3xhIG18aWlufGkga3wgY2F8dSBzfG4gbHx5YWR8cmthfGF4YXxlbG98aGVsfGFnYXxoaWl8byBofG8gcXwgaGF8aWQgfG4ga3wgbWl8YmFhfCB4dXxoYXJ8eG9yfGFhcnxheCB8bWFkfGFkZHxudGF8bWlkfGFhbHx3YWF8aGFhfGluYXxxYWF8ZGFhfGFndXxhcmt8byB3fG5rYXx1IGh8ZGFkfGloaXwgYnV8IGhvfG5hYXxuIGF8YXlzfGhhcXxhIGh8byBsfCBndXxvIHN8YXlhfHNhYXxsa2F8IGVlfCBzYXxkZGF8YWIgfG5pbXxxdXV8Z2dhfGFua3xraWl8cmNpfGFyY3xuIHN8YSBnfCBqaXxnZWx8IGdlfGVsaXx5c2F8YSBmfHNpeXxpbnR8bGFhfHV1cXx1cXV8eHVxfCBtdXxpIGF8dXVyfG1hcnxyYSB8aXJpfG8gdXwgY2l8cml5fHlhIHxhZG98YWxrfGRhbHxlZSB8YWwgfHJyaXxheW58YXNhfCBkaXxvb2N8YWFtfG9ma3xvb258dG8gfGF5b3xkYXJ8IHhpfGRoaXxqZWV8YSBjfCBheXx5aWh8YSBqfGJhbnxjYWF8bGFkfHNob3xkIGt8aWRhfHVxZHxhZ2d8c2FnfHJhc3xiYXJ8YXIgfCBrb3wgcmF8byBmfGdhYXxnYWx8ZmFsfHUgYXwgZGV8IHlhfG8gY3xpaSB8eGF5fGVlbHxhYWJ8c2lnfGFiYXxvcnJ8aG9vfHUgcXx5IGR8ZWQgfGhvIHxzYWR8cWRhfGggcXxma2F8biBpfHhhZ3xuIHh8cWF5fGxzaHx1bHN8YnVsfHUgd3xqaW58IGRvfHJhYXwgdWd8aWRvfG9vZCcsXG4gICAgaG1zOiAnYW5nfGdkIHxuZ2R8aWIgfCBuYXxuYW58ZXggfCBqaXxlYiB8aWQgfGQgbnxiIG58dWQgfCBsaXxubCB8YWQgfCBsZXxqaWR8bGVifGwgbHwgZ2F8b3QgfCBtZXx4IG58YW5sfGFvdHxtZXh8ZCBnfGIgbHxkIGR8b2IgfGdzIHxuZ3N8amFufCBuZXx1bCB8IG5pfG5qYXwgbmp8bGlifG9uZ3xuZCB8IHpofGpleHwgamV8YiBqfCBzaHxuZ2J8IGdofGdiIHwgZ3V8Z2FvfGwgbnxoYW58IGFkfGdhbnwgZGF8dCBufCB3dXxpbCB8eCBnfG5iIHxiIG18IG5ofHNoZXxpcyB8bCBqfGQgbHxuaGF8bCBnfGQganxiIGd8ZWwgfGVuZHx3dWR8bmV4fGdob3xkIHN8ZCB6fG91bHxob2J8dWIgfG5pc3wgY2h8IHlhfGl0IHxiIHl8ZWlifCBnaXxzIGd8bGllfCB5b3wgeml8b3VkfHMganxkIGJ8bnggfCBkZXxlcyB8ZCB5fCBodXx1ZWx8Z3VlfGllc3xhb2J8eW91fCBiYXxkIG18Y2h1fGdpYXxkYW98YiBkfHMgbnx6aWJ8IGdvfHpoYXxlaXR8aGVpfGFsIHxodWR8IGRvfG50IHxvbCB8IGZhfHQgZ3xoZW58dXQgfGd4IHxuZ3h8YWIgfGZhbHx4IGp8YiB6fGlhbnxkIGh8ZG9ufGIgd3x0IGp8aWFkfG5lbnwgeGl8Z291fGQgY3xiIGh8aGFvfHggenxuaWJ8YW54fGFudHxndWF8IG1pfHMgenxkYW58b3ggfGlubHxoaWJ8bGlsfHVhbnxhbmR8IHhhfGIgeHwgc2V8eCBtfHVpYnxodWl8ZCB4fGFuYnxlbmx8IHdlfG9kIHxlbmJ8IGR1fGF0IHxpeCB8cyBtfGJhb3wgaG98aHVifCBuZ3x6aGl8amlsfGwgc3x5YWR8dCBtfHQgbHx5YW58IHplfCBqdXxoZWJ8aGFkfG9zIHxhb3N8dCBofGwgZHxuZ2F8IGhlfGIgYXx4YW58YiBzfHNlbnx4aW58ZHVkfGp1bHxkIGF8bG91fCBsb3xkZWl8ZCB3fCBiaXxiIGN8IGRpfHpoZXxndCB8bmd0fHggbHxiYWR8eCBifCBqYXxob258emhvfGJsb3wgYmx8ZCBrfCBtYXxkZWJ8bCB6fHdlaXwgeWl8IHFpfGIgYnx4IGR8ZCBwfGV1ZHwgZ2V8eCBhfGNhbnwgY2F8dCB3fGxvbHwgc2l8aG9sfHMgd3xhb2R8cGFvfCBwYXxyZW58IHJlfHggc3xldXR8cHVkfCBwdXxhb3h8bWlzfGdsIHxuZ2x8eCB3fHplaXxnb258ZW54fGdoYXxzIGF8YiBmfGwgeXxvdWJ8ZWFifGhlYXwgdG98ZGlkfCBrb3x1bmJ8Z2h1fHQgcHx4IGN8Z2V1fHQgc3x4IHh8amFvfGVkIHx0IGN8bCBtfGwgaHxqaWJ8YXggfGwgY3xkIGZ8bmlhfCBwaXxldWx8ZCByfCBub3xtaW58bCB0fGhldXx1eCB8dG91fG5zIHxzIHl8aWVsfHMgbHxodW4nLFxuICAgIGhuajogJ2l0IHwgemh8IG5pfGFiIHxhdCB8YW5nfCBzaHxuaXR8IGRvfHVhdHxvcyB8YXggfG94IHxvbCB8bnggfG9iIHwgbmR8dCBkfHpoaXxuZiB8eCBufGlmIHx1YXh8IG11fGQgbnx0YWJ8IHRhfCBjdXxtdWF8Y3VhfGFzIHxhZCB8ZWYgfHVmIHxpZCB8ZG9zfGdkIHxuZ2R8aGl0fGliIHx1cyB8ZW54fGYgbnxzaGV8cyBkfHQgbHxuYiB8dXggfHggenxlZCB8aW5mfGIgbnxsIG58dCBufGFvYnxiIHp8IGxvfG9uZ3xpeCB8ZG9sfCBnb3x6aGV8ZiBnfCBob3wgeWl8dCB6fGQgenxiIGR8IGxlfGV1ZnxkIHN8dXQgfHlhb3wgeW98IHppfGdiIHxuZ2J8bmRvfGVuYnxsZW58IGRyfHpoYXx1YWJ8ZHJvfGhveHwgZ2V8bmVufCBuZXxoYW58IGphfGRhc3x4IGR8eCBjfHgganxmIHp8c2hpfGYgaHxpbCB8IGRhfG91eHxuZGF8cyBufG5kIHxzIHp8YiBnfCBueXxoZXV8IGRlfGdmIHxuZ2Z8IGR1fG9kIHxnb3h8IG5hfHVhZHwgZ3V8aW54fGIgY3wgeWF8dWVmfCB4YXwgaml8b3VzfCB1YXwgaHV8eGFufGhlbnx6aHV8bmlsfGphaXxyb3V8dCBnfGYgZHwgbGF8ZW5mfGdlZHxpayB8IGJ1fG55YXx5b3V8ZiB5fGxvYnxhZiB8YnVhfHVrIHxpcyB8eWlufG91dHxvZiB8bCBtfHVkIHxodWF8IHFpfG90IHx0IHN8IGJhfGFpdHwga2h8cyBzfG5hZHwgZGl8YWlifHggbHxsb2x8IGlkfGRvdXxleCB8YW9kfGJhb3wgcmV8IGdhfGQgZHxiIHl8bGFzfGhlZHxiIGh8YiBzfGYgYnx0IHl8anVhfCBqdXwgZGx8eCBzfGh1ZXxiIGx8IHhpfHppZnxkdXN8YiBifHggZ3xoaWZ8eCB5fGhhaXwgbnp8c2hhfCBsaXx4IHR8IGJlfGQganx1bmR8aHVufHJlbnxkIHl8aGVmfHhpbnwgaWJ8YiB0fGwgZHxhb3N8cyBsfCBoYXxnYWl8bnpofGd4IHxuZ3h8IGFvfHMgYnxzIHh8ZWwgfGd0IHxuZ3R8aGlrfGFpZHxzIHR8eCBtfGYgbHxmIHR8IHBpfGFvZnx0IHJ8ZWIgfCBnaHxzIHl8ZCBsfGd1YXwgYml8IHphfCBmdXx0IGh8IHp1fGhvdXxkZXV8bGIgfCBsYnxkIGd8IG1vfGIga3wgYm98aWFvfHJvc3xnb258ZXV0fHggaHxhbCB8dWFmfGhhYnx0IHR8ayBufGYgeHxoaXh8cGlufHl1YXwgbm98dCBifGFrIHwgem98cyBtfCBuYnwgd2V8ZCBifGdoYXxmIHN8bW9sfGV1a3xkYXh8bCBifG5vZnwga298bG91fGd1a3xlbmR8dWFzfHQga3xkaXN8ZGFufHlvbHx1YW58ZCB0fHggYnxsYW58dCBtfCBjaHxqaXh8eCB4fCBobHxhb3h8emlzfHggaXxldCB8IHJvJyxcbiAgICBpbG86ICd0aSB8aXRpfGFuIHxuZ2F8Z2EgfCBuZ3wgaXR8IHBhfGVuIHwgbWF8IGthfCBhIHwga2V8IHRpfGFuYXxwYW58a2VufGFuZ3xhIG58YWdpfGEga3xuIGF8Z2FufGEgbXxhIGF8bGlufGFsaXxheWF8bWFufGludHx0ZWd8biB0fGkgcHxudGV8IG5hfGF3YXxhIHB8bmEgfGthbHxuZyB8ZGFnfGdpdHxlZ2F8c2EgfGRhIHxhZGR8d2F5fG4gaXxuIG58bm8gfHlzYXxhbCB8ZGRhfG4ga3xhZGF8YWJhfG5hZ3xubmF8bmdnfGV5c3wgbWV8YSBpfGkgYXxtZXl8YW5ufHBhZ3x3ZW58aSBrfGdhbHxnZ2F8IHR1fGVubnwgZGF8IHNhfG5ub3wgd2V8dW5nfCBhZHx0dW58bWFpfCBiYXxsIG18IGFnfHlhIHxpIHN8aSBufHlhbnxuYW58YXRhfG5ha3wgc2l8YWthfGthZHxhYW58a2FzfGFzYXx3YW58YW1pfGFraXxheSB8bGkgfGkgbXxhcGF8eWF3fGEgdHxtYWt8IGFufGkgdHxnIGt8YSBzfGluYXxlbmd8YWxhfGlrYXxhbWF8b25nfGFyYXxpbGl8ZGFkfCBhd3xncGF8bmFpfGV0IHx5b258YW5pfGFpa3xvbiB8YXQgfG9tYXxzaW58YmFsfGlwYXxuIGR8dW1hfGcgaXxrZXR8YWcgfGluIHxhZW58biBwfHJhbXxzYWJ8YWdhfG5vbXxpbm98bHlhfGlseXxzeW98aSBifCBraXxuaWF8YWdwfGdpbXxrYWJ8YXNpfGtpbnxpYW18YWdzfGJhYnxveSB8dG95fG4gbXxhZ3R8IHRhfGJhZ3xzaWF8ZyBhfGdpbHxtaWx8IHVtfG8gcHxuZ2l8biB3fGkgaXxwYWR8cGFwfGRhYXxpd2F8bmFhfGVnIHxpYXN8ZWQgfG5hdHxiYWV8byBrfHNhYXxzYW58cGFtfGdzYXx0YSB8a2l0fG1hIHxkdW18eXRvfHRhbnxpIGV8dCBufHVrYXx0IGt8YXB1fGxhbnxzdGF8c2FsfCBsaXxhIGJ8YXJpfGcgbnxkZW58bWlkfGFkIHxvIGl8eSBhfGlkYXxhciB8YWFyfHkgbnxkZXl8IGRlfCB3YXxhIGR8YWsgfGJpYXxhbyB8dGFvfG1pbnxhc3l8bW9ufGltb3wgZ2l8bWFhfHNhcHxhYml8aSB1fGFpYnxrbml8aSBsfGdpbnxnZWR8byBhfCBhcnxrYXB8cHVsfGV5dHxhYnN8aWJpfCBhbXxha258aSBnfGtpcHxpc3V8ZyB0fGJhc3xuYXl8aW5nfGkgZHxrYXJ8YmFufGliYXxuaWJ8dCBpfGFzIHxkIG58eSBpfHVyYXxhIHd8bmFsfGFhZHxpIHd8bGFrfGFkdXxrYWl8YnNhfGR1a3xlZHV8IGVkfG1heXxhZ2J8YWdrfHRyYXxnZ2V8c29sfGFzb3xhZ3J8bmdzfGlhbnxpbGF8ZGRlfGVkZHx0YWx8YWlwfGt1YXx1bWl8cGF5fHNhc3xpdGF8cGFrfGcgZHx1bG98aW5ufGF3ICdcbiAgfSxcbiAgQ3lyaWxsaWM6IHtcbiAgICBydXM6ICcg0L/RgHwg0LggfNGA0LDQsnwg0L3QsHzQv9GA0LB80YHRgtCyfNCz0L4gfNC10L3QuHzQstC+IHzQvtCy0LV8INC60LB80L3QsCB80YLRjCB8INC/0L580LjRjyB80L4g0L18INC+0LF80LXRgiB8INCyIHzRgdCy0L58INGB0LJ80LDQstC+fNCw0L3QuHzQvtGB0YJ80L7Qs9C+fNGL0LkgfNCw0LbQtHzQu9C+0LJ80YIg0L98INC40Lx80L3QuNGPfCDRh9C1fCDRgdC+fNC10LvQvnzQuNC80LV8INC90LV80LvRjNC9fNC70LggfNGH0LXQu3zQutCw0LZ80LXRgdGCfNCy0LXQunzQsNGC0Yx80L7QstCwfNC40LvQuHwg0YDQsHzQtdC6IHzQuSDRh3zQtNGL0Ll80LbQtNGLfCDQtNC+fNC40LUgfNC10LXRgnzQvNC10LV80L3QviB8INC40Lt80LjQuCB80YHRjyB80LXQs9C+fNC+0LHQvnzQuCDQv3zQvdC40LV80Log0Lh8INCx0Yt80Lgg0YF80Lgg0Lh80LzQuCB80LHQvtC0fNCy0L7QsXzQstCw0L18INC30LB80L7QuSB80YvRhSB80L7QvCB80LvQtdC9fNCw0YbQuHzQtdC90L180L4g0YF80L4g0L980YzQvdC+fNGC0LLQsHzRgtCy0L580L/RgNC4fNC90L7Qs3zQsNC70Yx80LDQutC+fNCy0LAgfNC4INC9fNGB0YLQuHzQvdGL0YV80YLQviB80LHRgNCwfNC+0LvQtnzQtNC+0Lt80YHRgtC+fNC4INCyfNC90YvQvHzQvtC1IHwg0LXQs3zQvdC+0LJ80LjRhSB80LXQu9GMfNGC0LXQu3zRgtC4IHzQvdC+0YF80L3QtSB80L/QvtC7fNGA0LDQt3wg0LLRgXzQuCDQvnwg0LvQuHzQuCDRgHzRi9GC0Yx80LHRi9GCfNCy0LvQtXzRgNC10LR80LjRjiB80YLQvtGAfCDQvtGBfNGM0YHRj3zRgtGM0YF80L7QtNC4fNGJ0LXRgXzRjyDQuHzQutCw0Lp80L/RgNC+fNC20LXQvXzRi9C8IHzQv9GA0LV80LAg0YF80YHQvdC+fNC1INC0fNC90L3QvnzQviDQuHzQuNC5IHwg0LrQvnzQviDQsnwg0L3QuHwg0LTQtXzRgdGC0YN80LvQttC9fNGB0L7QsnzQtSDQsnzQvdC+0Lx80L7Qu9GMfNGA0LDQvXzQvtC20LV80LjRh9C1fNC10LkgfNCw0YHRgnzQvdC90Yt8INC+0YJ80YLRg9C/fNC8INC4fNC+0LTQvXzQt9C+0LJ80YDQtdGBfCDQvNC+fNC+0YHRg3zQu9GPIHzQvtGB0L180LAg0L580LLQtdC9fCDRgtC+fNC+INCxfNGI0LXQvXzRgtCy0LV80L7QsdGJfNCwINC4fNC1INC8fNGM0L3Ri3zQvtCx0YB80LLQtdGAfNGH0LXQvXzRjyDQvXzQttC90L580YfQtdGBfNCw0LogfNC70LjRh3zQvdC40Lh80LUg0Lh80LLRgdC1fNCx0YnQtXzQstCw0YJ80LXRgdC/fNC80L7QtnzQuSDQuHzQvdC+0LV80L4g0LR80LHQtdGBfCDQstC+fNGPINCyfNC00YMgfCDRgdGCfNC00L3QvnzQvtC90LB80L3QsNGGfNC00LXQvXzQtdC20LR80YUg0Lh8INCx0LV80Lgg0LR80L3RiyB80LTQvtGBfNC00LvRj3wg0LTQu3wg0YLQsHzQu9GM0YF80LDRgtC1fNGG0LjQuHzRjyDQv3zRg9GOIHzQuNGC0LV80LUg0L580L3QvtC5fNC/0L7QtHzQvtGC0L580YHRgtGAfNGB0YLQsHwg0LzQtXzQtdC70Lh8INGA0LV80Y8g0Lp80YLQvtGPfNCw0LzQuHzQtdC9IHzRjCDQsnzRjiDQuHzQsNC30L580LPQvtGBfNC8INC/fNGMINC/fNGCINCxfNC20LXRgnzRg9GH0LB80YHRg9C0fNGM0YHRgnzQtNGB0YJ80YnQuNGCfNCw0YnQuHzQt9Cw0Yl80LrQvtC9fNC90LjRjnzQsNC8IHzQvtC00YN80LXRgNC1fNCz0YDQsHzQv9C10Yd80L4g0L580L7RgNC+fNC60L7RgnzQuCDQunzRgtGA0LB80L3QuNC6fNGD0YnQtXzRhtC40LB80L7RhtC4fNGB0L7RhnzQvdCw0Lt80LXRgdC6fNC+INGAfNC60L7Qs3zQtNGA0YN8INC00YB80L3QuCB80LDQstCwfNC90YHRgnzQtdC8IHzQsNCy0L180YvQvNC4fNC10LTRgXzQtNC40L180LTQvtCyfCDQs9C+fCDQstGLfNCyINC6fNGL0LUgfNC+0LHQtXzQvNGDIHzRjyDQtXzRgdC70YN80YPQtNCwfNGC0LDQunzQutC+0Ll80YLRgyB80LjRgtGDfNC30LDQunzRhdC+0LR80LLQvtC7fNGA0LDQsXzQutGC0L580LjQutGCfNC40YfQvXzQvdC40Yd80L7RgiB80LjQvdCwfCDQuiB80YLQtdGAfNGA0L7QtHzQvdCw0YAnLFxuICAgIHVrcjogJ9C90LAgfCDQv9GAfNC/0YDQsHwg0ZYgfNGA0LDQsnwg0L3QsHwg0L/QvnzQvdGPIHzQvdC90Y98INC30LB80L7Qs9C+fNGC0LggfNCy0L4gfNCz0L4gfCDQutC+fNCw0LLQvnwg0LzQsHzQu9GO0LR80L4g0L18INC90LV8INC70Y580Y7QtNC4fNC+0LbQvXzQutC+0LZ80LvRjNC9fNC20L3QsHzQtNC40L180LDRgtC4fNCw0ZQgfNC40YUgfNC40L3QsHzQv9C+0LJ80YHQstC+fCDRgdCyfNCw0L3QvXzRlCDQv3zQvNCw0ZR80LDQsdC+fNCwINC7fCDQsdGDfNC90LUgfNC10L3QvXzQsdC+IHwg0LDQsXzQsCDQvHzQvtCy0Lh80L3RliB8INCy0Lh8INC+0YF80LDRhtGWfNCy0LjQvXwg0YLQsHzQsdC10Ld80L7QsdC+fCDQstGWfCDRj9C6fNC10YDQtXwg0LTQvnzRliDQv3zRg9Cy0LB80L4g0L980LDQu9GMfNC90LjRhXzQvtC8IHzQvNC4IHzRltC70Yx80L3QvtCzfNGC0LAgfNC40LkgfNC/0YDQuHzQvtGOIHzRgtGMIHzRgdGC0LB8INC+0LF80LLQsNC9fNC40L3QvXzRgtGWIHzQvtGB0YJ8INGDIHzRgdGPIHzQstCw0YJ80LHRg9GCfNC40YHRgnwg0LzQvnzQtdC30L980YPRgtC4fNC90L7QsnzQv9C10YB80ZbRlyB80Lgg0L980LHQvtC0fNCy0L7QsXzRgdGC0LJ8INCyIHzQviDQsnzQstGW0LR8INCx0LV80LDQutC+fNC/0ZbQtHzRgtC40YF80LrQvtC9fNC90L4gfNCy0LAgfNC90L3RlnzRliDRgXzQsCDQv3zRgdGC0ZZ8INGB0L980L3QuNC5fNC00YMgfNGM0L3QvnzQvtC90LB8INGW0L180LTQvdC+fNC90LjQvHzRltC5IHzQsCDQt3zQvdGDIHzQvNC+0LZ80ZfRlyB8INGX0Zd80LvRjyB80YHQvtCxfNC80YMgfNC+0ZcgfNGP0LrQvnwg0L/QtXwg0YDQsHzRltC0IHwg0LTQtXzRliDQsnzQuCDRlnzRh9C40L180LLQvdC+fNC+0LzRg3zQvdC+0Lx80YMg0L980ZYg0L180LAg0YF8INGB0YN80LAg0L580L3QtdC9fNC40YHRj3zQvtCy0L580L3QsNC9fNC+0LTQvXzRgyDQsnzRliDQtHzQsNCy0LB80ZbQtNC9fNGA0ZbQsnwg0YDRlnzRliDRgHzQuNC80Lh80LLRltC7fNC40LwgfNGG0ZbRl3zQviDQtHzQsCDQsnzRgdGC0YN80L7QtNGDfNCx0YPQtHzQvtCy0LB8INC/0ZZ8INC90ZZ80Y8g0L180LUg0L980L3QsNGGfNC4INGBfNC90L3QsHwg0L7QtHwg0YDQvnzQvdC+0YF80YzQvdC4fNGO0YLRjHzQuCDQt3zQutC4IHzRliDQt3zQsCDQsXzRgdC/0YB80YfQtdC9fNC20LUgfNC+0LbQtXzQtSDQvHzQvtCy0L180YDQuNC8fNC1INCxfNGC0L4gfNC90ZbRhXzQvtGB0L580YPQtNGMfNCy0ZYgfCDRgNC1fCDRgdGCfNGA0LDRhnzQtNC+IHwg0YHQvnzRgNC+0Ld80LvQtdC9fNCy0L3QuHzRltCy0L180YDQvtC0fCDQstGBfNGB0L/RlnzQutC+0LJ80LfQv9C1fNGW0LIgfNC00LvRj3wg0LTQu3zRlyDQvnzRhdC40YF80LDRhdC4fNC30LDRhXzigJDRj9C6fNGM4oCQ0Y980LTRjOKAkHzRjyDRlnzRgtCw0Lp80LfQvdCwfNC30LDQsXzRgdGC0Yx80YLRgyB80L3QvtGOfNCwINC9fNGC0L7RgHzRgdC90L580L4g0YF80LbQtdC9fNGG0ZbQsHzQvtGG0ZZ80YHQvtGGfNGW0L3RiHzRliDQvHzQutC70LB80Lgg0LJ80YLQtdGAfCDQtNGWfNGW0YHRgnzQvtCy0ZZ80YMg0YF80Y8g0LJ80LDRgNC+fNGB0ZYgfNCy0ZbRgnzRgdCy0ZZ80L7RgdCyfNGA0L7QsXzQv9GW0Lt80YDQtdGBfNC30LAgfNC/0LXRh3zQsNCx0LV80LrRgyB80LvQuNCyfNC10YDQtnzQtNC10YB80LIg0ZZ80LDQstC9fNGC0LDQsnzQsNCyIHzQsNC80Lh80LrQvtC8fNCy0LvQtXzQviDQsXzRjCDQv3wg0YnQvnzRl9GFIHzRgtCy0L580YXRgtC+fNGW0YXRgnzQutC+0LN8INC60YB80LDQvdC+fNGC0LDQvXzRltCw0Lt80L3QsNC7fNC90YwgfNGFINC/fNC20L3QvnzQu9C10LZ80LDQu9C1fNC/0YDQvnzRgtCy0LB80YDQsNGCfNC+INC+fNGFINCyfNC90LDRgHzQu9GM0YF80YbRltC5fNC60L7RgHzRh9Cw0YF80YDQttCwfNGXINGBfNC40L3Rg3zQtNGB0YJ80L4g0Ld80YDQsNC3fNC80ZbQvXzQsCDRgHzQt9Cw0LonLFxuICAgIGJvczogJyDQv9GAfCDQuCB80YDQsNCyfNC90LAgfNC80LAgfNC/0YDQsHwg0L3QsHzQuNC80LB8INGB0LJ80LAg0YF80LTQsCB80LAg0L980LLQviB80ZjQtSB80LrQviB80LDQutC+fNC+INC4fCDQv9C+fNCw0LLQvnzQtSDRgXzQsCDQuHzRgtC4IHwg0LjQvHwg0LTQsHwg0YMgfNGB0LLQsHzQvdC+IHwg0LfQsHzQviDQvXzQstCwIHzQuCDQv3zQuNC70Lh80LLQsNC6fNC70LggfCDQutC+fNC90LUgfCDQuNC7fNC60L7RmHwg0L3QtXwg0LTRgHzQvtGB0YJ8INGB0Lt80ZrQsCB80LjQvCB80Lgg0YF80YMg0YF80Lgg0Lh80LDQstCwfNC40ZjQtXzQsCDRg3wg0LHQuHzRgdGC0LJ80YHQtSB80LLQsNGafNCwINC0fNC+0LwgfNGY0LXQtHzQsdC+0LR80L7QsdC+fNC70L7QsXzRgdC70L58INGB0LV8INGA0LB80LjRhSB80YHRgtC4fNCwINC9fNGa0LUgfCDQvtCxfCDRmNC1fNC/0YDQuHzQtNGA0YN80YMg0Lh80ZjRgyB80L4g0LR80LjRgtC4fNCy0L7RmHzRgNCw0Ld80LDRmtC1fNC+0LLQsHzQtNGY0LV8INC+0YF80LUg0Lh80LvQviB80LUg0L980LDRmtCwfNGD0ZjQtXzQuCDQtHzQsdGA0LB80YLRgNC1fCDRgtGAfCDRgdGDfNGDINC3fNCwINC6fNC+0LMgfNGDINC/fNC+0ZjQtXzRhtC40Zh80YDQtdCxfNCwINC+fNCwINCxfCDRmtC1fNC4INGDfNC80LjRmHzQvdC4IHzQvdC+0YF80LHQsCB80LXQtNC9fNGB0LLQvnzRmtC10LN8INC40Ld80L/RgNC+fNC1INC0fNC20LDQsnzQsdC40YJ8INC90Lh80Lgg0L580YHRgtCwfNCwINC3fNCw0LLQvXzQstGY0LV8INC60LB80LHQuNC7fNC+0LLQvnzQsCDRmHzQsNGY0YN80LjRgdGCfNC4INC9fNC90LjRhXzRmNC10Lt80YLRgyB80YDQtdC0fNCz0L7Qsnwg0L7QtHzQtSDQvnzQvtGY0Lh8INGB0Lx80ZjQsCB80L4g0Lp80LjQu9C+fNCw0YbQuHzQtSDRg3zQv9GA0LV80L4g0L980LXQsdCwfNGDINC+fNGB0YMgfNCy0LjQvHzQuNGH0L18INGB0LB8INC00Zh80LAg0YJ80LjRmNCwfNGI0YLQuHzRh9C90L580YDQttCwfNC00YDQtnzRgdGC0YN80LTQvdCwfNC+0LTQvXzQtdC90Lh80LfQsCB80LjQstCwfNC90L7QvHzQtdC8IHzQtNGDIHzRgNCw0L180LLQvdC+fNGB0LzQuHzRmNC10YB80LUg0LF80LUg0L180LTQtSB80L/QvtGBfNC8INC4fCDQtNC+fNGDINC0fNC90LDQunzQsCDRgHzQvtCx0YB8INC80L580L3QuNC8fNC10LPQvnwg0LrRgHzRgtC40YJ80LrRgNC4fNCy0LUgfNCw0L0gfNC40LrQvnzQvdC40Lp80L3RgyB80Lgg0Lx80L3QvtCzfNC10L3QvnzRgdC90L580LUg0Lp80YLRg9C/fNGA0YPQs3zQutCwIHzQvtC00LB80YDQuNCyfNCy0L7RmXzQsNC70L180Lwg0YF80LjRgtGDfNCw0YjRgnzQt9Cw0Yh80LDQvdC4fNGB0LDQvHwg0YHRgnzQsNC60LJ80L7QstC4fNC+0YHQvXzRgNC+0LR80LDRgNC+fCDQvNC4fNGY0LggfNGC0LLQsHzQtNC90L580L3RgdGCfNCw0LogfNC40YLQtXzRmdGDIHzQstC40Yd80YDQsNC0fNGDINC9fNGDINC8fCDRgtCwfNC00YHRgnzRgtC40LJ80L3QsNGGfNGA0LjQvHzQutC+0L180LrRgyB80ZrRgyB80L7QtNGDfNC20LjQsnzQsNC80L580YLQstC+fNGC0LXRmXzQv9C+0LR80LXRm9GDfNCzINC/fNC90L7QsnzQuNC90LB80L3QsNGAfCDQstGYfNC4INCxfNC+0ZggfCDQvtCyfNCw0LLQtXzQstGDIHzQsNC90YF80L7RmNCwfNC30L7QsnzQsNC30L580YPQtNC1fNCx0YPQtHwg0LHRg3zQtSDRgnzQuCDQsnzQtdGa0LB80LXQtNC4fNC90LjRhnzQvdCw0L980LzRmNC1fCDQuNGBfNGB0LvRg3zQtdC00YF80L4g0L580LfQsNC6fNC4INC6fNC8INC/fNGC0L3QvnzQuNCy0L580LXRgNC1fNC90LjRh3zQutCw0Lp80LDQtNCwfNCy0L3QuHzRg9Cz0Lh8INGA0L580LzQvtCyfNCy0LXQvXzQviDRgXzRgtC+IHzRgtC1IHwg0LLRgHwg0LHQtXzQsNGA0LB80LrQu9CwfCDQsdGAfNGDINCxfNGDINGDfNC4INGCfNC+0L3QsHwg0L7QvXzQsNCy0Lh80ZjQsNC7fNC00L3QuHwg0YHQuicsXG4gICAgc3JwOiAnINC/0YB8INC4IHzRgNCw0LJ80L3QsCB80L/RgNCwfCDQvdCwfNC80LAgfCDRgdCyfNC40LzQsHzQtNCwIHzQsCDQv3zQstC+IHzQutC+IHzRgtC4IHzQsNCy0L58INC/0L580LAg0Lh80LDQutC+fNCwINGBfCDQt9CwfCDRgyB80L4g0Lh8INC40Lx80Lgg0L980LLQsCB80YHQstCwfNCy0LDQunwg0LTQsHzQviDQvXzQtSDRgXzQvtGB0YJ8INC60L580ZrQsCB80LvQuCB80LjQu9C4fNC90LUgfNC+0LwgfCDQvdC1fNCwINC9fCDRgdC7fCDQuNC7fNGY0LUgfCDQtNGAfNC4INGBfNC90L4gfNC60L7RmHzRgyDRgXzQsNCy0LB8INGA0LB80L7QsyB80YHQu9C+fNGY0YMgfNC40LwgfNGB0YLQuHzQsdC+0LR80L7QsdC+fNC70L7QsXzQuNGC0Lh80LAg0L580YHRgtCyfNC4INGDfNCwINC0fNC90LggfNGY0LXQtHzRgyDQv3zQv9GA0Lh80LXQtNC9fCDQsdC4fNC4INC4fNCwINC6fNC+INC0fNGB0YLQsHzQuNGFIHzQtNGA0YN80LAg0YN8INGY0LV80LDRmtCwfCDQvtGBfCDQvdC4fNC90L7RgXzQv9GA0L580LDRmNGDfNC4INC+fCDQtNC1fCDRgdGDfNGDINC4fNGB0LUgfNGa0LUgfNGY0LAgfNC+0LLQsHzQuCDQtHzRhtC40Zh8INC+0LF80YPRmNC1fNGA0LXQtHzQttCw0LJ80LUg0Lh80LUg0L980LAg0Zh80LTQvdCwfCDRgdC1fCDQvtC0fNCy0LUgfCDQutCwfNC10L3QuHzRgNC20LB80LTRgNC2fNCwINC3fNCw0LLQvXzQtdGa0LB80LDRhtC4fNCy0L7RmHzQvtCy0L580YMg0YN80Lwg0Lh80L7RmNCwfNCy0LDRmnwg0LjQt3zQuNGY0LB80YMg0Ld80LDRmtC1fNGA0LDQvXzQtSDQvnzRgNC+0LR80Lgg0L180LUg0LF80YDQsNC3fNC30LAgfCDRmtC1fNCz0L7QsnzQuNGH0L18INGB0YJ80L3QvtCyfNGB0L3QvnzQvtGB0L180LTRgyB80L/RgNC1fCDRgtGAfNGB0YMgfNCy0YMgfNC+0LTQvXzQsCDQsXzRgdCy0L580ZrQtdCzfNC90LjQvHzQvdC40YV80YLRgyB80YLQuNGCfNGI0YLQuHzQutGDIHzQvdC+0Lx80LHQuNGCfNC1INC0fNC80LUgfNC40LrQvnzRh9C90L580L7RmNC4fNC70L4gfNCy0L3QvnzQvdC40Lp80LjQutCwfNCx0LXQt3zQsNGA0LB80LTQtSB80YMg0L580LLQuNC8fNC90LDQunwg0YHQsHzRgNC40LJ80LDQstC1fNCw0L0gfNCy0L7RmXwg0LrRgHzQviDQv3zRgdC80LV80LUg0Lp80L3QvtCzfNGY0LggfCDQvtCyfNC1INGDfNGC0LLQsHzQsdGA0LB80YDRg9CzfNGA0LXQsXzRgtGA0LV80YMg0LR80L7QtNCwfCDQvNC+fCDQstGAfNCw0LLRmXzRgyDQvXzQtdCz0L580LTQtdC7fNC8INGBfNC60YDQuHzQviDQunzQsNGI0YJ80LfQsNGIfNGa0YMgfCDRgdC8fNCw0L3QuHwg0LvQuHzQtNC90L580LXRktGDfNCw0LvQvXzQu9CwIHzQsNC60LJ80L7RmCB80LrQvtC8fNGB0YLRg3zRg9Cz0Lh80LDQstC4fNCwINGAfNC60LAgfNGA0LDQtHzQvtC00Lh80LLQuNGHfNGC0LDQsnzQuNGC0YN80YPQtNC1fNCx0YPQtHwg0LHRg3zQv9C+0YJ80L7QtNGDfNC20LjQsnzQtdGA0LV80YLQstC+fNC40LvQvnzQsdC40Lt80LDRgNC+fNC1INC9fNC+0LLQuHzQv9C+0YB80LXQvdC+fNGI0YLQsnzQvdCw0YZ80L7QstC1fNC8INC/fNGC0YPQv3zQv9C+0YF80YDQtdC8fNC00L3QuHzQsdCwIHzQvdGB0YJ80LAg0YJ80L7RmNGDfNCw0YHRgnzQuNCy0LB80LUg0Lx80LLRgNC1fNCy0ZnQsHzQvdGDIHzQsdC10ZJ80LjRgdGCfNC10L0gfNGC0LUgfNC00YHRgnzRgNC+0YJ80LfQsNC6fNCw0L4gfNC60LDQvnzQuCDQunzRmNGD0Zt80L4g0YF80YHRgiB80YHQsNC8fNC8INC9fNGC0LXRgHzQvdCw0YB8INC80LV80Lgg0Lx80LrQvtC7fNC1INGAfNGD0YjRgnzRgNGD0Yh80LLQtdGAfNC60LDQunwg0LHQtXzQuCDQsXzQutC70LB80LDQtNCwfNC10LHQsHzQtdC90LB80L7QvdCwfCDQvtC9fNGC0LLRg3zQsNC90YF8INC00L580YDQsNC6fNGB0LvRg3zQuCDQsnzQvdC40YZ80YMg0Lp80LzQtdC9fNCy0YDRiHzQtdC80LV80LXQtNGBfNC40LLQuHzQviDQvnzRmNCw0LInLFxuICAgIHV6bjogJ9Cw0L0gfNC70LDRgHzQs9CwIHzQuNGAIHwg0LHQuHzQsNGAIHwg0LLQsHzQtNCwIHzQuNCz0LB8INKz0YN80LLQsCB80LHQuNGAfNGD0pvRg3zSm9GD0pt80rPRg9KbfCDSs9CwfNGAINCxfNCz0LDQvXzQuNGIIHzQuNC00LB8INGC0LB80LAg0Y180LjQvdC4fNCw0LTQuHzQvdCzIHzQtNC40YB80LjRiNC4fNC70LjQunzQu9C40Yh80LjQuSB80LjQu9C4fNCw0YDQuHzRg9Kb0Lh80rPQsNGAfNC70LDQvXzQuNC90LN80YjQuCB80LTQsNC9fNC90LjQvXzQuNC90YF80LrQuNC9fNGB0L7QvXzQvdGB0L58INC40L18INC80YN80pvQuNCzfCDQvNCwfNC+0L0gfNGAINC4fCDQsdGefNGN0LPQsHwg0Y3Qs3wg0Z7Qt3zQvdC4IHzQsdGe0Lt80LPQsNC0fNC4INCxfNC60LggfNC40LvQsHzRkdC60Lh8INGR0Lp80LAg0LF80L0g0LF80LjQvSB80YAg0rN80LDQu9CwfNGN0YDQunwg0Y3RgHzQu9Cz0LB8INKb0LB80YDQutC4fNGIINKzfNC4INKzfNC9INC8fCDQsdC+fCDQsdCwfNC40LogfNCw0YDQsHzQuNCz0Lh80LvQuNCzfNGA0LggfNKb0LjQu3zQsCDRgnzQsdC40Lt8INGN0YJ80L3QuNGIfNC90LvQuHzQutC70LB80Lgg0LJ80LHQvtGIfNGN0YLQuHzQsNC90Lh80LjQvCB80Lgg0Lx80L7Qu9C4fNKb0LvQsHzQsCDSs3zQu9Cw0Yh80LDRgtC7fNGC0LjQu3zQsCDSm3wg0L7Qu3zQvtGB0Lh80LzQsNGBfNKb0LDRgHzQuNC90Lt80LvQsNGCfCDSm9C4fNGC0LDRinzSs9Cw0Lx80LPQuCB80LjQsSB80LzQu9CwfNGe0LcgfNC9INGNfNC80YPQvHwg0LTQsHwg0LHRg3zQsNGCIHzRiCDQsnzRg9C9IHzQsNGC0Lh80LzQutC4fNGD0LzQunzRgtC70LB80LjRgNC+fNGe0LvQuHzQsdCw0YB80LjRgNC4fNGA0LjRiHzQuNGP0YJ80LDQu9C4fCDQsdC1fCDSm9C+fNCwINGIfNCw0YDQvnwg0LrQtXzQuCDRgnzRgNC70LB8INGC0LV80YfQsCB80YDRh9CwfNCw0YDRh3zQsCDRnnwg0YjRg3zRgtC40Yh80L0g0rN80YLQs9CwfCDRgdCwfNCw0YHQuHwg0YXQsHzRgNCw0Lp80LvQuNC9fNC+0LvQsHzQuNC80L580YjSm9CwfNC70LggfCDRgtGDfNCw0LzQu3zQu9C70LB80YHQuNC0fNC9INGefCDQsNGBfNC90LjQtHzQsCDQuHwg0LrQuHzQvSDRgnzQvdC00LB80Log0LF80LXRgNCwfNC+0YjSm3zRgdC40Ld80L7RgCB80LAg0Lx80YAg0LJ80LXQvdCzfNGC0LXQvXzQvNCw0YJ80LzQtNCwfNCw0LzQtHzQu9C40Lx80Lkg0YJ80Y/RgiB80Lgg0LB80LjQvdC+fNC40LvQs3wg0YLQvnzRgtC90Lh80LDQvdCwfNCw0YEgfNGN0LzQsHwg0Y3QvHzQsCDRkXwg0YjQsHzQsNGIIHzQsCDQsHzRgtCw0YB80LrQsNGCfNCw0LrQsHzQsNC6IHwg0LTQtXzQsNC30LB80LjQu9C7fNGB0LjQuXwg0YHQuHwg0YHQvnzRg9Kb0Lt80L0g0pt80L7QtNCwfNGK0LvQuHzQsNGK0Lt80L3QuNC6fNCw0LTQsHwg0L3QuHzRgtC00LB80LPQuNC9fNGD0L3QuHzRgdC40YJ80LDQuSB80pvQvtC9fNC9INC+fCDQttCwfNC60LjQvHzQtdGHIHzSs9C10Yd8INKz0LV80Z7Qt9C4fNC70LDQunzQutC10YB80LjQutC7fNC70LvQuHzRg9GAIHzQt9Cw0YB80YjQu9CwfNGA0LjQs3zQuNGA0Lt80LTQsNC8fNC60L7Ss3zQuNC60L580LAg0LR80LDQvCB80L0g0LJ80YDRgtC4fNGC0LjQsXzRgtCw0Lt8INC40Yh80YfRg9C9fNGD0YfRg3wg0YPRh3zRgdC70LB80LAg0YN80YDQuNC9fNGB0L7RgXzQsNGB0L58INGD0L180L3QsCB8INC60LB80LzRg9KzfNC00LjQs3zRhyDQunzQsNGB0Lt80LvQvNCwfNGA0LAgfNCx0YMgfNGF0LDQu3zRntC70LN80Lgg0Lp80LXQutC7fNGAINC0fNKb0LDRgnzQsNCz0LB80Lgg0pt80L7QuNC5fNC80LjQu3wg0LzQuHzSm9CwIHzQuCDRgXzQttC40L18INC20Lh80YHQuNC9fNGA0L7RgHzQsCDQsnzQu9Cw0LR80LAg0L580YLQu9C4fNC80LjRj3zQvSDQuHzQsNCxIHzRgtC40YB80Lcg0Lx80LTQsNCyfNGA0LPQsHzQsNCz0Lh80LAg0Lp80L3Qu9CwfNCw0pvRgnzQstCw0pt80LDRgNGCfNCw0ZHRgnzQu9Cw0LEnLFxuICAgIGF6ajogJyDQstOZfNCy05kgfNOZ0YAgfNC40YAgfCDSu9OZfCDQsdC4fCDSu9KvfCDQvtC7fNKv0LPRg3zSu9Kv0LN80LPRg9CzfNC90LAgfNC40L0gfNC70LDRgHzSu9OZ0YB80LTTmSB8INGI05l80LHQuNGAfNC705nRgHzQu9C40Lp80LzQsNC7fNGAINCxfNC70LzQsHzRgCDSu3wg0YLTmXzTmdGF0YF80YjTmdGFfNOZ0L0gfNC00LjRgHzRg9Cz0YN80YPQvdCwfNCw0L0gfNCw0LvQuHzQsCDQvHwg0LzQsHzQuNC60LR80LjQvdC4fNGAINGIfNC005nQvXzQsNGAIHzQuNC705l80LPRg9C9fNCw0LMgfNCw0YHRi3wg0ZjQsHzQvNOZ0Lp80ZjTmdGCfCDQvNOZfCDQvNKvfNC60LTQuHzTmdGB0Lh805nQuiB80LjQu9C8fNC90LjQvXzQvdC005l80L7Qu9C8fNOZ0YLQuHzTmSDRmHzRgdC40L180YXRgSB80L3QtNCwfNC70LzTmXzRmNGY05l80Lgg0LJ8INCz0LB8INCw0Ld80L7Qu9GDfNC40ZjRmHzRmNCwIHzQuNC90LR80LfQsNC0fNCz0LvQsHzSr9C9IHzQvdC4IHzQu9OZIHzRgtC40L180L0g0Lx80LDQt9CwfNCw0YDRi3zTmdGCIHzQvSDRgnzQvNCw0LN80LvRg9C9fNC70YvQs3zTmSDQsXzRg9C9IHzQvdGD0L180LMg0LJ80L0g0rt80LTQsNC9fNGL0L0gfCDQtdGCfNGC0LzTmXzTmdGA05l8INOp0Ld80LTQsCB805kg0LJ8INC+0L1805kg0LB80YvQvdCwfNGL0L3Ri3zQsdC40Lt80LAg0LF80YHRiyB80LjQuyB805nQvNC4fNCw0YDQsHzRgdC4IHwg0LTQuHzTmSDQvHzTmdGA0Lh80YDQu9OZfCDQstCwfNOZINK7fNC10YLQvHzRi9KT0Yt80LDQvNCwfNC00LvRi3zQsNC00Lt80YDQuNC9fNCx05nRgHzRgNGL0L180L0g0Lh80LzSr9C0fNC90YvQvXwg0rvQtXzQvNCw0YF80LjQuiB80L0g0LB80LTQuNC7fNCw0LvRi3zQuNGA0Lt805nQu9OZfNKv0LTQsHzRgdGL0L180YvQvdC0fNGF0YHQuHzQu9C4IHzTmSDQtHzQvdOZIHwg0LHTmXzTmdGY0LB8INC40L1805kg0Lh80LvTmdGCfCDRgdOZfNC90YsgfCDQuNGIfNCw0L3Ri3zQtdGHIHzSu9C10Yd80LMg0rt80LXRmNC9fNOZINC1fNC00YvRgHwg0LTQsHzQsNGB0Lh80YDRiyB80LjRiCB80LjRhNCwfNC70YvSk3zQuCDRgXzRhNC405l80LDRhNC4fNC00LDRhHwg0LXQtHzQvNOZ0Ld80YMg0LJ80LrQuNC7fCDSu9CwfNC+0LvQsHzQvSDQsnzTmdC90Lh80YvRgCB80YPQsyB80YPQvdC8fCDQsdGDfCDQsNGBfNGB0LjQsHzQvtGB0Lh80YHQvtGBfNC40LvQuHzRi9C00Yt80LvRi9C0fNC90LzQsHzRi9CzIHzQuNC905l805nRgNCwfNGB0LjQu3zRhdC40Lt80LDRhdC4fNC00LDRhXzQsNC005l80LzQsNC9fNCwINK7fNOZINC+fNC+0L3Rg3zQsCDQs3zTmdC3IHwg0LrQuHzRgdC10Yd8INGB0LV80Ysg0rt80LzQuNC9fNC70LDQvXzTmdC005l80LHRgyB80YDQsNCzfNC70YsgfNGL0LvRi3zQsNC7IHzTmSDQs3zRgCDQsnzQvdC70LB80rvRgdC4fNOZ0rvRgXzRgtOZ0rt806nQtyB80LjRgdGCfCDQuNGBfNC805nRgXwg05nRgXzQuNC90LB805kg0YJ805nRgtC7fNCwINCyfNC405kgfNC9INCxfNGC05nRgHwg0YLQsHwg0rnTmXzQtdC00Lh80LDQu9CwfNC60LjQvHzQs9GDIHzQuCDRgnzRg9C70Lx80LzTmdK7fNC9INC+fNCw0ZjQsHzRiyDQvnzQuNCw0Lt8INGB0L580LjQu9C7fNGB0LjRmHwg0LTTmXzQstCw0YB80LjQvdGBfNC80LggfNKT0YsgfNC90LjQunzRgCDQuHzQsNCz0Lt80Log0rt80YLTmdC8fNGC0LDQvHzRh9Kv0L180q/Rh9KvfCDSr9GHfNKT0YvQvXzRgdCw0YF805nRgdCwfNC3INK7fNOZ0LzTmXzQt9Cw0Lx8INC30LB80YHRgtC4fNGA05nRhHzQvSDQtXzRgCDQsHzQuNC70LR80rvTmdC8fNGL0LPQu3zRmNCw0L180LzQsNGYfNC9INOZfNC805nQvXzQvNC40Lt8INC80Lh805nQs9C4fNC00LjQvXzQvSDQtHzRgtKv0L18INC006l80LzQuNGYfNC60LDSu3zQuNC60LB8INC90Lh80YTQsNC0fNGC0LjRhHzQuyDQvnzRgdOZ0YB80ZjQvdC4fCDQtdGYfNCw0L3QsHzQu9OZ0L180LDQvCB80YDQuNC7fNCw0ZjTmXzQsNGI0YsnLFxuICAgIGtvaTogJ9C90YsgfNOn0L0gfCDQsdGLfNC00LAgfCDQv9GAfNC706fQvXzRgNCw0LJ8INC80L580L/RgNCwfCDQtNCwfNCx0YvQtHwg0LLQtXzQvtGA0YJ80LvTpyB806fQuSB80LzQvtGAfNOn0LwgfNCw0LLQvnwg0L3QtXzQstC+IHzRi9C0IHzRi9GBIHzQvdOn0Ll80YvQvSB80Lwg0L980LQg0Lx80YvQvdGLfNGC0L3Ri3wg0LDRgXzRgtOn0Lx80LvRjNC9fCDRjdC8fNCy0LXRgHzRgdGMIHzRjNC906d80Y3QvCB80L0g0Y180YLQu9OnfCDQutGLfNGB06cgfCDQv9C+fNC10YDQvHzRgdGM06d80YDRgtC7fNCw0LvRjHwg0LrTp3zRjdC3IHwg06fRgnzTpyDQsnzRgtC+IHzQtdGC0L580L3QtdGCfNGL0LvTp3wg0LrQvnzRgtGI06d8INC+0YJ8INC4IHzRiyDRgXzQsdGLIHzTpyDQsXzRgdGC0LJ80LrTp9GAfCDQstOnfNGI06fQvHzQutGL0YJ80YLQsCB80L3QsCB80Lcg0LJ8INGB0LV8INC00L580LLQvtC7fNOn0YEgfCDRgdGLfNGLINCwfNC+0LvQsHzRgNC806d80LDRgSB80L7QtyB8INC+0Ld8INGB0ZZ80LAg0YF80YLQstC+fNGBINC+fCDQstGLfNC70ZbRgXzTpyDQunzRi9GC0Yh806cg0LR80LjRgSB80ZbRgdGMfNOn0YLQvXzQsNGB0Yx8INC+0Lt8INC90LB80LDRhtC4fCDRjdGCfNCwINCyfNC30LvTp3zRgdC10YJ8INCy0L58INGH0YN80LvQsNGBfNC70LDQvXzQvNOnIHzRgtGL0YF80YDRgtGLfNOn0YDRgnzRiyDQv3zTp9GC0Lt80L4g0YF80Y3RgtCwfNC00LcgfNC606fRgnzTp9C00L180LLQvdGLfCDQvNGLfNC9INC9fNGD0LTQtnwg0YPQtHzQstGL0Lt806cg0Lx80YDRgtGWfNC+0YDQuXzQuNGB0Yx8INGB0L580LLQvtGNfNGL0LTTp3zQuSDQvnzQutC+0Lt8INCz0L580YEg0YF80YHRgdC4fNGB0YvQu3zRi9GB0Lt80LnRi9C9fNC60LjQvXzQvtC706d80YLTp9C9fCDRgdGMfNCw0L3QsHzTp9GAIHzRhtC40Y980LAg0LR806fQvNOnfCDQstC4fNC3INC6fCDRjdC3fNGLINCxfNGC06fQs3zTp9GCIHzQvNOn0LR80LXRgdGCfNC+0YHRgnzTp9C90Yt80YLQuNGAfNC+0YLQuHzRg9C606d80YfRg9C6fNC9INC/fNC+0L3QtHzQv9C+0L180YHQu9OnfNC60LXRgHwg0LrQtXwg0L7QsXzRgdC40YF80YHRg9C0fNCwINC9fNC00L7RgHzQutC+0L180L3QtdC6fNC9INCxfNC706fRgnzRgSDQsnzRgtGWIHzRjNOn0YB80YLRgNCwfCDRgdGCfNC90LDQu3zQvtC90LB80L3QsNGGfNC9INC6fNC606fQtHzTp9CzIHzRgdC606d80YLRjCB80LXRgtOnfNC006fRgXzQsdGL0YJ80YDQvdGLfNOnINC9fNGC0YHTp3zRgNGA0LV80LAg0LF80L3QtNCwfNGBINC0fNCw0YHRgXzRiyDQunzQsNGB0Lt8INC70L580YzQvdGLfNGB0YzQvXzRiyDQvHzQtdC60Lh80Ysg0LR8INC806d80Ywg0Lx80Ysg0L180YvRgtOnfCDQvNC1fNGA0LnTp3zQuNCw0Lt80Lkg0LR80LjRgtOnfNCwINC6fNOn0YHRjHzQvNOn0YF80L7QstC9fNC30YvQvXzQsCDQv3zQvtGC0YF8INC70Lh80L7Qu9GPfNOnINCwfNC+0YHRg3zTp9GPIHzQvdOn0Y980LXQt9C7fNGA0LXQt3zQvNC10LR80YEg0Lx8INGB0Y180Ywg0Lp80YDQudGLfNCw0LrQvnzQt9Cw0Lp8INC30LB80YzRi9C9fNC90L3RkXzQvNOn0Lt80YPQvNOnfCDRg9C8fNGLINGDfNC9INCyfNC8INC0fNC9INGBfCDQtNC3fNC9INC+fNGA0LDQvXzRgdGC0YB80L7Qt9GMfNC/0L7Qt3zQtyDQv3zQviDQtHzRhtC40LB80L7RhtC4fNGB0L7RhnzQuNC+0L180LAg0Lx80LXRgdC6fNGH0LXRgXzQvdOnIHzQtyDQtHzRgtGB0Yx80LHTp9GAfCDQsdOnfCDQvtCyfNCy0LXRgXzQutGL0LR806cg0YF80LLQvtGLfNC60L7QtHzRgtC60L5806fRgtC6fNC+0LvRjHzQtNCx0Yt80LXQtNCxfNGB0YzRi3zRh9GL0L180YLRh9GLfNOn0YLRh3zRgtC70LB80LzTp9C9fNGB0LvQsHzQudOn0Ld8INC506d80YIg0LJ80Ysg0Lh80LXQtyB80L4g0LJ80L7QvdGLfNC506cgfNCw0L3QvXzTp9C70Yx8INC/0Yt80LDQvSB80L3Tp9GBfNC90LjRgnwg0YHRg3zQvCDRgScsXG4gICAgYmVsOiAnINC/0YB80L/RgNCwfCDRliB80LDQstCwfNC90LAgfNGA0LDQsnwg0L3QsHwg0L/QsHzQvdGLIHzQstCwIHzQsNCx0L580YbRjCB8INCw0LF80LDQtSB8INC80LB80LDQstC1fNCw0L3QvXzQsNGG0Yt80YHQstCwfCDRgdCyfNC1INC/fNC70YzQvXwg0YfQsHzQvdC1IHzQvdC90Y980LDQu9CwfNCwINC9fNCw0LkgfNC70LDQsnzRh9Cw0Lt8INC60L58INCw0LR8INC90LV80LPQsCB80L7QttC9fNC60L7QtnzQstC10Lp80L3RjyB8INGP0Lp80LbQvdGLfNGLINGHfNC80LDQtXzQsCDQv3zQsNCz0LB80LHQviB80LXQuiB80LAg0LB80YbQsCB80YbRhtCwfCDRniB8INC30LB80YvRhSB80L/QsNCyfNCwINGBfNCz0L4gfNCy0ZbQvXzQtNC90LB80LHQvtC0fNC80ZYgfNCy0LDQsXzQstCw0L180LDQvCB8INCy0Yt8INGB0LB8INC00LB80YHRgtCwfNCw0LLRlnzQvdC90LV80LDRgdGGfNC90LDQuXzRhtGL0Y980L3QsNCzfNCw0YDQsHzRliDQvXzQuiDQvHzRj9Cz0L58INGP0LN80YzQvdCwfNC/0YDRi3zQsNGG0Yx80ZYg0L980L7QtNC9fNGB0YLQsnzQsNC80LB80L3Ri9GFfCDQsdGLfNGC0LLQsHzQtNC30LV80LDQu9GMfCDRgNCwfNC90ZYgfNGWINGBfNGWINCwfNGL0YbRjHzQsCDQsXzQtdC90L180LvQtdC9fNGG0ZYgfNC+0Z7QvXzRi9C8IHzRgNCw0YZ80ZbQvdC9fNGW0YUgfCDQsNGBfCDRgtCwfNGC0L4gfNC90LDRgXzRj9C60ZZ8INC00Ld80YfRi9C9fNC+0LvRjHzRliDQtHzQsNCy0L580LDQtCB8INC90ZZ80YHRhtGWfNGL0LzRlnzQvdGL0Lx80LHRi9GGfNGPINC/fNGM0L3Ri3zRi9GPIHzQsNGA0L580LDQvdCwfNGW0L3QsHzRliDRlnzRgNCw0LR8INCz0YB80LvRjyB80Z7Qu9C1fNC+INC/fNCwINGefNGA0YvQvHzQv9Cw0LR80YvRliB8INGW0L180LDQvNGWfNC00LfRj3zRgNCw0Lx80YbRi9GWfNCw0LHQsHzQsCDRlnzQtNGDIHzQttC90LB80Z7QvdCwfNC90LDQu3zQvdCw0YZ80YDRiyB80Y3RgtCwfNCz0Y3Rgnwg0LPRjXzQvdC10L180LTQsCB80LDRhSB80LPRgNCwfNC60LDRhnzRg9C60LB80LAg0Ld80LrRliB80LDQtNGBfNGeINGWfNC90YHRgnzRjdC90L180Y8g0LB80L3QvdGWfNC+0LTRg3zQsCDRgHzQvdC90LB80YXQvtC0fNC90LDQvXzQv9C10YB80YUg0L98INGDIHzQsNC00Ld80ZYg0YB80LzQsNC0fNC8INC/fNC1INC8fNCw0LTRg3zQtNGB0YJ80LTQu9GPfCDQtNC7fNC+0Z4gfNC90LDQtXzRliDQvHzQsNC60L58INC60LB80Ysg0Z580LHQsNGAfNC1INCwfNCw0YbRhnzRg9GOIHzRi9GG0YZ80YHQsNC8fNGP0Z7Qu3zQsNC70LV80YDQvtC0fNGA0LDQsXwg0L/QtXzRiNGC0L58INGe0YF80LDQtNC9fCDRgdGDfNGA0L7Rnnwg0YDQvnzQtNGD0Lp80LvRjtCxfNGMINGBfCDRiNC7fNGA0LDQt3zQvdCw0LJ80LfQvdCwfNCy0L7Qu3zRg9C00Ld80LDQtNCwfNC20YvRhnzRh9C90LB80LLQtSB80LAg0YJ80LDRgdC9fNGB0LDRhnzQtdGA0LB8INGA0Y180Y/QutC+fNC60LvQsHzQsNC90Yt8INGI0YJ80Ywg0YN80LDRjtGGfNC90LDRgHwg0YPRgXzRgdC+0LF80LDRgdC+fNC/0LDQvHzRjyDRnnzQsNCy0Y980YfRjdC9fNCy0L7RnnzRgtCw0Lp80L3RgyB80Y4g0LB80Ywg0L980LfQsNC6fNC60LDRgHzQtSDRlnzRjCDQsHzQsdC10YF80ZbRjyB80LrRltGPfNGFINGWfNC30LDQsXzQsNGB0LB80ZbQvCB80LbQsNCyfNGWINC3fNC70LXQtnzRgtCw0L180LDRhdC+fNGP0LvRjHzRi9GP0Lt80L4g0YF80Y/QvdCwfNC60LDQvXzQsNC60LB80ZbQvdGIfNCw0LvRlnzQstGLIHwg0LzQvnzQvdCw0YV80Y8g0Y980Lwg0L180L7Qs9CwfCDQsdC1fNC5INC0fNC+INCwfCDRgdGCfNC10L3Ri3zRliDRnnzQsCDQtHzQtdGB0L980YjQu9GOfNGG0YbRj3zRiyDRlnzRi9GB0YJ80YDRi9GBfNC70Y7Rh3zQutC70Y580YLQsNGGfNGD0LvRjHzRi9C90YF80LDRh9GLfNGB0L/RgHwg0YHQv3zQsNGeIHzRi9C80LB80LDRgNGLfNC60LDQvHzQtSDRnnzRliDQunzQutC+0L0nLFxuICAgIGJ1bDogJyDQvdCwfNC90LAgfCDQv9GAfNGC0L4gfCDQuCB80YDQsNCyfNC00LAgfCDQtNCwfNC/0YDQsHzRgdGC0LJ80LLQsCB80LAg0YF80LAg0L980LLQviB80L3QviB80LjRgtC1fNGC0LAgfNC+INC4fNC10L3QuHwg0LfQsHzQvdC1IHwg0L3QtXzQsCDQvXwg0LLRgXzQstCw0L180LDQstC+fNC+0YLQvnzQtSDQvXzQviDQvXzQsCDQuHzQutC4IHzQuNC1IHzRgtC1IHzQvdC4IHzQuNC80LB8INC40Lx80LvQuCB80LjQu9C4fNC40Y8gfCDQv9C+fNC+0LLQtXzQsNC90LV80YfQvtCyfNC80LAgfCDRh9C+fNC4INGHfNCwINC0fNC90LjQtXzQuCDQtHzQtdGB0YJ8INC40Lt80LDQvdC4fNCy0LXQunzQstGB0LV8INC+0LF80LXQuiB80LXQutC4fNGB0LXQunzQsNCy0LB80YLQstC+fNGB0LLQvnwg0YHQsnzQstC+0YJ80LAg0LJ80Lgg0YF80L7RgdGCfCDRgNCwfNC+0LLQsHzQsCDQvnzQtSDQuHzQstCw0YJ80Lgg0L180LUg0L980Log0Lh80LAg0LF8INCyIHzQuCDQv3zQu9C90L580L4g0LR8INGB0LV80YDQsNC3fNC10YLQvnzRitC00LV80LHRitC0fCDQsdGKfNC/0YDQuHzQsNGC0LB8INC60L58INGC0YB8INC+0YF8INGB0Yp80LHQvtC0fNC+0LHQvnzQstC+0LF80LDRgiB80LfQsCB80YLQtdC7fCDQtSB80LDRhtC4fNC+INGBfNC00LUgfNC+INC/fNC10L0gfNCx0YDQsHzQuCDQsnwg0L7RgnzRgdC1IHzQvdC40Y980LDQu9C9fCDQtNC1fNC10LPQvnzQvdC10LN8INC40Ld80L7RgiB80YDQsNC9fNGP0YLQsHzQutCw0Lp80L7QtNC4fNC1INGBfNC4INC4fNC00LXQvXzQv9GA0LV80LHQstCwfNGP0LHQsnzRgNGP0LF80YLRgNGPfNC90LjRgnwg0LrQsHzRj9Cy0LB80L/RgNC+fNGB0YIgfNCwINC3fNCz0L7QsnzQstC10L180YLQstC1fNC+INC+fNCwINGAfNCw0LrQsnzQviDQsnzQuCDQt3zRgNC10LR80L3QvtGBfNC40Y/RgnzQtSDQtHzRidC10YF80L3QvtCyfCDQvdC4fNGG0LjRj3wg0LTQvnzQudGB0YJ80L4g0YJ80LUg0YJ80YDQttCwfNGK0YDQtnzQtNGK0YB80LXQvdC+fNC/0L7Qu3wg0YEgfNC+0LHRgHzRgtCy0LB80L3QvtGCfNGA0LXRgXzQtdC50YF80Lgg0L580LUg0LJ80LrQvtC5fNC+0LHRiXzQu9C10L180L7QvdCwfNC90LDRhnzQuNGH0LV80LXQtyB80LHQtdC3fCDQsdC1fNC10LbQtHzRg9Cy0LB80LLQuNGCfNGA0LggfNC30LDQunzQuCDQunwg0LvQuHzQsCDQtXzQv9C+0LR80LXQu9C4fNC90LjQunzRgdC4IHzQtSDQvnzQsCDRgnzQsNCy0L180Lgg0YB80YIg0YF80LrQsCB80L7QtdGCfNC10LvQvXzQvdC10L180L7QuSB80LPRgNCwfNC20LXQvXzQtNGA0YN8INGA0LV80LAg0Lp80YHQvdC+fNC+0YHQvXzQu9C40Yd80LfQuCB8INGC0LB80YHQsCB80L3RgdGCfNCy0L3QuHzRh9C60Lh80LjRh9C6fNGB0LjRh3zQstGB0Lh80LvRjtGHfNC60LvRjnzQtNC90L58INC80L580LXQvNC1fNCwINGDfNC40LfQsnzRgtCy0Lh80LTQtdC5fNGPINC9fNC60YDQuHzQsNGC0L580L4g0YB80Lkg0L180LjQutC+fNC40YfQvXzQttCw0LJ8INC00Yp8INGC0L580LHRidC1fNC40LDQu3wg0YHQvnzQu9C40YJ80YIg0L18INGB0Lh80YIg0Lh80L7QtNC9fNC20LTQsHzQt9C+0LJ80LDQt9C+fNGD0YfQsHwg0LPRgHzQutC+0LV80YLRitC/fNGB0YLRinzQstC+0Lt80LvQvdC4fNGB0YDQtXwg0YHRgHzQutCy0LB80LrQvtC9fNGC0L3QvnzQsNC60LB80Lgg0YN80LrQviB80LPQsNC9fNC+0LTQsHzRh9C10L180LvRgdGCfNC10LvRgXzRgdGC0YB8INC60Yp80YHRgtCwfNGA0L7QtHzQvdCw0YB80Lgg0Lx80L3QsNC7fNGA0YPQs3wg0LTRgHzRh9C10YF80LLRitC3fNC00LggfCDRgdCwfCDRgtC1fNGB0YLQvnzQtNC+0YF80YDQsNC2fNGA0LXQt3zRh9GA0LV80LPQsNGCfNC10L7QsXzQsCDQvHzQviDQtXzQuNC90LV80LDRgdGCfNC+0LLQvnzRh9C90L580LDQstC1fNC80YMgfCDQvNGDfNCw0L3QvnzQuNGC0LB80LjQvNC4fNCw0LrQvnzQvdCw0Lp80LvQsNCzfNC+0LLQuCcsXG4gICAga2F6OiAn0L3QtSB8INKb0rF80LXQvSB80rHSm9GLfCDQsdCwfCDSm9CwfNKb0rHSm3zRi9KbIHzSk9CwIHwg0LbTmXzTmdC90LV80LbTmdC9fCDQvdC1fCDQsdC+fNC00LUgfNC00LDQvHzQsNC00LB80LAg0pt80YLQsNGAfNGL0L3QsHwg0LDQtHzRi9C70Yt8INOZ0YB80YvSoyB80LDQvSB80ZbQvSB80pvRi9C7fNCw0YAgfNC10LzQtXzQvdCwIHzRgCDQsHzQu9GL0pt80YPSk9CwfNCw0LvQsHzRi9Kb0YJ8INOp0Ld80LzQtdGBfNOZ0YAgfCDQttCwfNC80LXQvXzRi9KT0Yt80LvRiyB8INC00LV80pvRgtCwfNC90YvSo3zQvSDSm3zSk9Cw0L180ZbQvdC1fNCx0LDRgXzQsNGA0Yt8INC80LV8INKb0L580LXQutC1fNGL0L0gfNC00LAgfNC1INKbfNC00YsgfNCw0YHRi3zRgdC1IHzQtdGB0LV80LDQvCB80LHQvtC7fNCw0L3QtHzQvdC10Lx8INCx0ZZ80LDRgNCwfNGLINCxfNGB0YLQsHzRgtCw0L180L3QtNGLfNC9INCxfNGW0qMgfNC1INCxfNGW0LvRlnzRgtC40ZZ8INGC0Lh80LHQsNGAfNKT0YsgfNC90LTQtXzQtdGC0YJ80LjRltGBfNKb0YvSk3zRltGBIHzQu9Cw0YB80LPQtSB80Ysg0YJ80ZbQvdC0fNGW0LogfNCx0ZbRgHwg0LHQtXwg0LrQtXzQsNC70YN80LUg0LB80LDQu9GLfNC70YPRi3zQsCDQtnzQtdGA0ZZ80L7Qu9GLfCDRgtC1fNKb0YvSm3zQvSDQunwg0YLQsHzQvSDQtnzSk9GL0L180YLRgtGWfNGW0L3RlnzRgtGL0L18INC10YB80L3QtNCwfNGW0LwgfCDRgdCwfNC1INC2fNCw0YLRi3wg0LDRgHzRgNKT0LB80LXRgtGWfNCw0L3QsHzRiyDTmXzRg9GL0L180LvSk9CwfNOp0LfRlnzQvtGB0YJ80LXQs9GWfNGC0ZbQunzSm9CwIHzRgdKb0LB80YDRi9C9fNC60ZbQvXzQu9GD0pN80qMg0pt80L3RltKjfNGD0YsgfNCx0L7RgXzQsNGB0pt80pvQsNGAfNC00YvSm3zQvdCw0L180LzRi9GBfNC80L3Ri3zQsNC80L180Ysg0Lx80LDQudC0fNC60LUgfCDQttC1fNC30ZbQvXzRgNC00LV80YDRltC9fNC1INGCfNCz0LXQvXzRi9C/IHzRgNGLIHzRgtGWIHzRgdGL0L180pvQsNC8fNC00LXQvXzRliDQsXzQs9GW0Ld80YDQsNC7fNC1INOpfNC70LDQvXzRgdGLIHzQsNC80LB80YLRgtCwfNGC0YvSm3zQsdC10YB80LTRliB80LHRltC7fNGA0LrRlnzTqdC3IHzQt9C00LV80LrQtdGCfNKb0L7RgHzQtNCw0Ll80YPQs9C1fNGLINC1fNGL0L3QtHzQvdC10LN80L7QvdGLfNC10LkgfNC80LXRgnzQsNC90Yt80LAg0YJ80LbQsNGBfNCw0YPRi3zQu9Cz0LV80LDRgdCwfNC10LPQtXzQtNCw0YB80YDRgyB80LDRgyB80LXRgNC6fNGLINC2fNGA0YvQu3wg0YLQvnzQvSDQvXzQtSDQvXzRgtGW0L180ZbRgCB80YHRltC3fNGC0LXRgHzQu9C80LB80ZYg0YJ80LrRltC8fCDQsNC7fNGAINC8fNC70ZbQunwg0LzSr3zQtSDQvHzRgtKv0YB8INGC0q980LrQtdC7fNC70YvQv3zQtdKjIHzRgtC10qN80YDQu9GLfNC70ZbQvHzRgNC00Yt80LDRgNC0fNCw0YLRgnzRgSDQsXzRi9GA0Yt80YHRi9C3fNGL0YEgfNC10LvQs3zQtNCw0Lt80LnQtNCwfNC+0YDSk3zRgNKb0Yt80LDRgNKbfCDQttKvfNGC0LDQu3zRi9C70Lx80LAg0LF80ZbQs9GWfNC70LTQtXzRltC3IHzSm9GC0Yt8INC10Yh80LTQtdC5fNCw0LkgfNC20LDSk3zQutGC0ZZ80ZbQutGCfNCz0ZbQvXwg05nQu3zRgtGC0Yt80rHQu9GCfCDSsdC7fNC1INC0fNGL0L3Ri3zQu9GW0L180YAg0LF80LXQu9C1fNC60rHSm3wg0LrSsXzQsNC80LR80Lwg0LF8INC10YJ80L7Sk9CwfNKb0rHRgHwg0LrTqXzQsNKT0LB80YLQvtC7fNGI0ZbQvXzQsNC50Yt8INKb0Yt80pvQsNC7fNC20LXQunzRliDQvXzQtdGBIHzQsNKT0Yt80LUg0L580LXQu9GWfCDQtdC7fNC9INC1fNC30ZYgfNGI0LrRlnzQtdGI0Lp80L7Qu9GDfNGG0LjRj3zQvNCw0YF80pPQtNCwfNCw0pPQtHzQu9GC0YJ80ZbQvNC0fNC90YvQvHwg0LTQsHzQsCDQtHzTmdGB0ZZ80YEg05l80pvQsNGCfNGW0YDRlnwg0YHQvnzSoyDQsXzQsNC30LB80LzQtNCwfNCw0LnQu3wg0LDRgXzSk9Cw0Lx80pvQvtKTJ1xuICB9LFxuICBBcmFiaWM6IHtcbiAgICBhcmI6ICcg2KfZhHzZitipIHzZgdmKIHwg2YHZinzYp9mE2K18INij2Yh82KPZiCB8INmI2Kd82YjYp9mEfNit2YIgfNipINinfNmE2K3ZgnzYp9mE2Kp82YPZhCB82KfZhNmFfNmE2YPZhHwg2YTZg3zZhNmJIHzZgiDZgXzYqtmHIHzZiCDYp3zYqSDZiHzYtNiu2LV82Kkg2YR82KfYqiB82KfZhNijfNmKINijfNmI2YYgfCDYtNiufNmFINinfNij2YogfCDYo9mKfNin2YYgfNij2YYgfNmF2KkgfNmKINinfNin2YTYp3zZhNinIHzZh9inIHzYp9ihIHwg2KPZhnwg2LnZhHzYrti1IHzZhiDYp3wg2YTZhHzYryDYp3zZhdmGIHzZgdix2K982YXYpyB82KfZhNi5fNiqINinfNit2LHZinzYudmE2Yl82YQg2YF82LHYryB82YQg2LR8INmE2Kd82LHZitipfCDYpdmEfNipINijfNinINinfNmGINmKfCDZiNmEfNinINmEfNinINmKfCDZgdixfCDZhdmGfNipINmFfNin2YTZgnzYrNiq2YV82YYg2KN82YIg2Kd82KfZhNilfCDYrdixfNmE2YcgfNmHINmEfNin2YrYqXzZhNmDIHzZhyDYp3wg2K/ZiHzYr9ipIHzYp9mLIHzZitmGIHzZhyDZiHzZhNipIHzZiiDYrXwg2LnZhnzZhdin2Ll82Yog2Kp82LDYpyB8INit2YJ82YLZiNmCfNit2YLZiHzYjCDZiHzZhiDYqnzZhdi5IHzYtSDYp3zYp9mFIHzYryDYo3wg2YPYp3zZh9iw2Kd82KfZhNmIfCDYpdmGfNmF2YQgfNin2YXYqXzYuSDYp3zYpdmE2Yl82Kkg2Ll82YXYp9mKfNit2YXYp3zZhiDZiHzZhNiq2Ll8INmI2Yp82YrYsSB82YbZiNmGfNmKINmIfNin2LPZinzYp9mE2Kx8INmH2LB82YbYs9infNmI2YIgfNiq2LHYp3zYudmK2Kl82Ycg2KN8INmE2Yd82LPZitipfCDZitisfCDYqNinfNiv2YjZhHzYp9mG2Yh82YLYp9mGfNmE2YLYp3zYqSDYqHzYqSDYqnzYqtmF2Kd82KfZhNivfNmK2KfYqnzYuSDYqHzYs9in2YZ82KXZhtizfNmH2YUgfNi52YTZinwg2YXYqnzZhNmF2Kx82LDZhNmDfNi52YXZhHzZhNij2LN82YjYsiB82KzZiNiyfNmK2KzZiHzYqNin2YR82LrZitixfNmDINinfNmD2KfZhnzYs9in2LN82KPYs9infNiv2YUgfNmE2KfYr3zYp9i52Yp82KfZhNixfNiq2YXZinzYr9mI2YZ82KrZhdiqfNmE2KrZhXwg2YrYuXzZhNmK2Yd82LPYp9mIfNin2KzYqnzZiiDZhXzZhNi52Kd82YTYrNmFfNiq2LnZhHzYsSDZiHzYqtmF2Ll82YXYrNiqfCDZhdi5fNmK2YcgfNmJINijfNmB2YrZh3zZiSDYp3wg2YPZhHzZhNin2Kp82YXZhNinfNmI2K8gfNin2YbYqnzYp9mE2YF82YrZh9infNmKINilfNiq2YogfNin2YTYqHzZhNmKIHzZgtiv2YV82KfZhCB82KfYryB82YQg2Kd82YrYsiB82YrZitiyfNmF2YrZinwg2KrZhXzZhNit2LF82KrYuSB82YXYqti5fNinINiofNi52KfZhXzYpyDZiHzZgiDZiHzYsdin2YV82YQg2YR82YTYp9isfNix2KcgfNin2YTYtHwg2YjYpXzZitmFIHzZhNmK2YV82LTYqtixfNinINitfNmI2KfYrHzZhNiy2Yh82YjZhCB82Kcg2YF82YjZhNipfNmE2K3ZhXzYo9iz2LF8INiw2YR82Ycg2YF82KfYqtmHfNmF2LPYp3zZhNmF2LN8INiq2Ll82LnZhiB82Ycg2Ll82YjZhNmHfNmK2KrZh3zZhiDZhHzYsdipIHwg2YjYs3zYp9ipIHzZitivIHwg2KrYrXwg2YXYs3zZiiDZinzZhNiq2Yp82LnYqSB82YjZhNmKfNmE2K/ZiHwg2KPYs3wg2YjZgXzZhCDZiHzYo9mK2Kl82YbZiiB82KfZhNizfNmE2KfZhnzZhNil2Ll82Kkg2YF82LHZitinfNmEINilfNmFINiofNin2YXZhHzZg9ix2Kd82KrYs9infNmF2YrYuXzYrNmF2Yp8INis2YV82KPZiNmEfNio2YrYqXzYudmK2LR82KrYrdmCfNin2K/YqXzYsyDYp3wg2YXZhXzZhdi52Yp82KzZhdinfNi52KfYqnzYp9i52Kd82KfYsdizfNmF2KfYsXzZhdmF2Kd82YUg2Yh82LHYp9mDfNin2LTYqnzYp9mE2Ld82KfYrCB82LLZiNinfNin2YTYsnwg2YjZhXzYrdiv2Kl82KrYrdivfNmE2YXYqnzZhdmFIHzZhNij2YV82K/ZhyB82KjZhNinfCDYqNmEfNin2LEgfNmK2KfYsXzYqtmK2Kd82K7YqtmKfNin2K7YqnzZhiDZhXwg2YXYsScsXG4gICAgdXJkOiAn2YjYsSB8INin2Yh82KfZiNixfNqp25IgfCDaqduSfCDaqduMfCDaqdinfNuM2rogfCDYrdmCfNqp24wgfNqp2KcgfCDaqdmIfNim25IgfNuSINqpfNuM2KcgfNiz25IgfNqp2YggfNi02K7YtXwg2LTYrnzZhtuSIHwg2KfYs3wg24HbknzZhduM2rp82K3ZgiB8INuB2Yh8INmF24x82K7YtSB825Ig2Kd8INis2Kd82KfYsyB8INiz25J8INuM2Kd824HYsSB824wg2Kd8INqp2LF8INuB2LF825LblCB82LPbjCB824HbjNq6fNinINitfNi1INqpfNmI2rogfNuSINmFfCDYp9mGfNixINi0fNuUINuBfNin2KbbknzYstin2K982KLYstinfCDYotiyfNin2YUgfNixINinfNmCINuBfNin2K/bjHzYrNin2KZ82rog2ql824HbktuUfNmFINqpfCDaqdizfNinINisfNuMINqpfNizINqpfNqp2LPbjHwg2b7YsXzbkiDar3zbgduSIHzYp9ixIHzYqiDaqXzYr9uMIHzZvtixIHzZiCDYp3wg2K3Yp3wg2KzZiHwg24HbjHzYp9mGIHzbjCDYrHzYsduMIHwg2YbbgXwg2YXYuXzYrNmIIHzZhCDaqXzbjCDYqnzZhiDaqXzaqdix2YZ82KbbjCB82YQg24F82KrbjCB824HZiCB824Eg2Kd8INin24x82LXZhCB82KfYtdmEfNit2KfYtXzYsdmG25J824wg2LR82YbbgSB825Qg2Kd82rrblCB824zautuUfNixINqpfNixINmFfCDZhdmEfNmI24EgfNmF2LnYp3zYsduSIHzauiDYp3zZhtuB24x825Ig24F825Ig2Kh82KfbjNizfNuSINmEfCDYqti5fCDar9infNuM2KogfNuMINitfNinINinfNuMINmFfNin2b7Zhnwg2KfZvnzaqduM2Kd82YXbjCB824wg2LN8INis2LN824Eg2ql82YbbjCB82KfYtNixfNi52KfYtHwg2K/ZiHzZhNim25J8INmE2KZ82KfZhtuBfNmI2YIgfNmC2YjZgnzYrdmC2Yh82YXZhCB8INmC2Kd82qnbgSB8INqv24x82LEg2Kh824Eg2YV8INmI24F8INio2YZ824wg2Kh82YXZhNqpfNis2LMgfNin25QgfNix24zZgnzYsSDZhnzbkiDYrHzYp9ivIHzYp9iqIHzar9uMIHzYryDaqXzbkiDYrXzYr9in2LF82LEg24F82q/Yp9uUfNmC2YjZhXwg2YLZiHzbktiMIHzYpyDYs3zYr9mI2LN82LEg2b58INmIIHwg2LTYp3zbjCDYonzauiDZhXzZgiDYrXwg2b7ZiHwg2KjYp3zYrtmE2Kd82KfZhtuSfNuM2YUgfNmE24zZhXzZiCDYqnzZiNmGIHwg2qnbgXzbjNiMIHzblCDaqXzYpyDZvnzZhiDYp3zZhNqpIHzYudmE2Kd82Kcg2YV82YIg2ql82KfYptuMfNmI2LPYsXzbjCDbgXzZiNim24x824zYsSB82Kcg24F82LnZhNuMfNmIINqvfNmI2LHbjHzYr9qv24x82YbYr9qvfNmIINqpfNuM2LPbknwg2YXZhnzYp9im2K982LHYp9imfCDZhdixfNm+2YjYsXwg2LfYsXzZiNmF24x825Ig2K582LPYqCB82YbZiNmGfNin2YbZiHzZgtin2YZ8INiz2ql82YjYp9mFfNuM2YYgfCDYsdqpfNiq2LnZhHzZhNin2YJ82LrbjNixfNiv2KfZhnzYjCDYp3wg2KjbjHwg2YXYs3zbjNmI2rp82YbYpyB8INio2r58INio2LF82LHYqtuMfNin2K/Yp3zYp9mF2YR824zbgSB8INuM24F824Eg2Yh8INi52Kd824wg2b58INio2oZ82KfZgSB82YTYp9mBfCDYrtmEfNuM25QgfNqv24zblHwg2K/bjHzavtuMIHzYqNq+24x82K/bgSB82KzYpyB82b7ZhtuMfNmC2YjYp3zYp9mC2Yh82LHaqdq+fNuSINuMfCDYudmEfNqp2YjYpnzYjCDZhXwg2obYp3zbkiDYs3zYsSDYuXwg2b7bjHzYqNix2Kd82LEg2LN82LEg2K182LPYp9mGfNmFINinfNqp2KfZhXzYtNix2Kp8INix2Kd82LTYp9mFfNmF2YYgfNiy2YbYr3wg2LLZhnzYqCDaqXzYqiDZhXzYp9uBIHzYp9ix24x82LMg2YV82LEg2Kx8INmF2K182YjYsdinfNuSINm+fNi32LHbjHzbgdmI2rp82KfZhCB82rog2LN824wg2YZ82qnYsduSfCDZhdmCfNiqINizfNiq2K3ZgXwg2KrYrXzZiNuUIHzbgdmI25R82KjZhtivfCDYp9mCfNivINuBfCDYp9mFfNin2YXbjHzYp9mE2Kd82YTYqiB82LTYsduSfNuSINi5fNinINqpfNmB2LHbjCcsXG4gICAgcGVzOiAnINmIIHwg2K3Zgnwg2KjYp3zZhtivIHzYsdivIHzYr9in2LF8INiv2Kd82qnZhyB82YfYsSB8INiv2LF8INqp2Yd82K/YsSB8INmH2LF82LEg2ql82K3ZgiB82K8g2Yd82KfYsiB824zYqiB8INin2LJ824zYpyB82qnYsyB82YjYryB82KfYsdivfCDbjNinfCDaqdizfNin24wgfNivINmIfCDYqNixfCDYrtmIfNmCINivfNio2KfYtHzYtNivIHzYryDaqXzYp9ixIHzYryDYqHwg2LHYp3zZhyDYqHzYp9mGIHzYotiy2Kd8INii2LJ82LHYpyB82KfYtNivfNuMINmIfNmHINinfNuM2YYgfNuM2K8gfNiy2KfYr3zYsyDYrXzYrtmI2K9824wg2Kh8INin2LN82K/ZhyB82K/bjCB82YjYsSB82KfbjNivfNmHINivfNix24wgfNmIINinfNiq2YXYp3zYp9iqIHwg2YbZhXzbjCDaqXzYp9iv24x82YbZhyB82LHYp9uMfNivINinfCDYotmGfNin2LPYqnzYsSDYp3zYsSDZhXwg2KfYrHzZhdin24x82YjZhiB82YLZiNmCfNit2YLZiHzZiCDZhXwg2KfZhnzYp9mG2Yd8INmH2YV82YjZgiB82KfbjNiqfCDYtNmIfNuMINinfCDZhdmIfCDYqNuMfNio2KcgfCDYqtinfNmI2LHYr3zYp9mG2Yh82LPYqiB82YjYp9mGfNio2LHYp3zYp9mFIHzYtNmI2K982KLZhiB82KzYqtmFfNuMINuMfCDaqdmGfNixINiofNqp2YbYr3wg2YXYsXzYqiDZhXzZh9in24x82Kog2Kd8INmF2LN824zYjCB82YXYp9i5fNin2KzYqnzYqtmI2Kd824zar9ixfNmIINiofNiv2KfZhnzYqiDZiHzYpyDZhXwg2KjYr3zYuduMIHzaqdin2LF8INmF2YZ82YXZiNixfCDZhdmCfNuMINivfCDYstmGfNuMINmFfNmGINiofNixINiufNin2YcgfNinINiofNin2LHbjHzYryDYonzZhdmEIHwg2KjZh3zYp9i524x82K/YjCB82K/bjNqvfNiqINiofNio2KfbjHzYp9uM2YZ8INmF24x82YYg2Yh82YIg2YV8INi52YV8INqp2Kd82YYg2Kd82Ygg2KJ8INit2YV82YbZiNmGfNmHINmIfNmIINivfNivINi0fCDYp9uMfNi02YjYsXzaqdi02Yh8INqp2LR82YTbjCB82YbbjCB82Ycg2YV82KjYuduMfNixINi0fNuM2YcgfCDZhdmEfNmF24zYqnzbjCDYsXzYsdmG2K98INi02LF82YXbjCB82YjbjCB82LPYp9mIfNmC2KfZhnwg2YLYp3zZhdmC2Kd82KfZiCB8INin2Yh82K8g2YV82q/bjCB82YbZhduMfCDYp9itfCDZhditfNmF24zZhnzYptuMIHzYp9iv2Kd8INii2YV82K7ZiNinfNqv2LHYr3wg2q/YsXzZhdmG2K98INi02K982KfYptuMfCDYr9uMfNiyINitfNmH24zahnwg2YfbjHzYp9iv2Yd8INmF2Kp82YbZhdinfNiqINqpfNix2KfZhnwg2KjZhXzZhiDYrXzYsSDYqnzYrdmF2Kd82KfYsdmGfNmF2LPYp3zYr9qv24x82YjZhduMfNmGINiqfNmF2YTZhHzYqNixIHzZh9ivIHzZiNin2Yd82KjZh9ixfCDYp9i5fOKAjNmH2Kd82YIg2Yh82Iwg2Kd82LnbjNiqfNuM2KrZiHzYpyDYsXzZhiDZhXwg2LnZgnzZh9mF2Yd82Kcg2Yd82LLYtCB82YjYsti0fNmF2YjYsnzYotmF2Yh82KfZhtiqfNiq24wgfNis2KfZhXzZhdmI2YV82LnZhdmIfNiq2K7Yp3wg2YHYsXzYt9mI2LF82K8g2K982Ycg2K182LHYr9infNin2YjbjHzZhtmI2Kd82KfZhtuMfNix2KfYsXwg2YXYrHzbjCDZhnzYrdiv24x82KfYrdivfNmG2K/ar3zYstmG2K982LTYrti1fCDYtNiufOKAjNmF2YZ82YfigIzZhXzYsdmH4oCMfNmH2LHZh3zYtNiv2Yd82Lkg2Kd82Ygg2Yd82KfYs9uMfNmH2ZQgfNuM2K/Zh3zYudmC24x82Kcg2Kd82YXZhyB8INio2LR82KfYryB82K/bjNmHfNinINivfNiv2YjYp3zbjCDYrXzYp9io2Ll824wg2Kp82K7Yp9iofNmG2KrYrnzYsdmI2LF82Ygg2LF82LTYsdinfCDYrtinfNmU2YXbjHzYp9mU2YV82KrYp9mUfNin2YsgfNin2YXZhHzZhNmHIHzYryDYsXzYp9iz2Kd82K7ZiNixfNio2YQgfNin2KjZhHzZgtin2Kh824zaqSB82LPYp9mGfNmC2LHYp3zYpyDZhnzYrti124x8INin2YV8INio2Yh824zYsSB82KfZhNmFfNio24zZhnzYp9mH2K982KrYqNi5fCDYqtioJyxcbiAgICB6bG06ICcg2K/Yp3zYp9mGIHzYr9in2YZ8INio2LF8INin2Yh82YYg2LN82LHaoCB82K/Yp9mEfCDapNixfNmE2YcgfNmD2YYgfCDZg9qkfNmGINinfNmGINmDfNmGINivfNmK2qAgfCDZitqgfNqk2K8gfNit2YIgfNmI2LHaoHzYqtmK2Kd82YrYp9qkfNin2LHYp3zZg9qk2K982KfZiNixfNix2K3ZgnzYqNix2K182KfZhNmHfNij2YYgfNmI2YTZinwg2KfYqnzYp9iq2Kd82qDZhiB82KrYp9mIfNin2qQgfNiz2KrZinzZhNmK2Yd82KfZiCB8INiz2Kp82qQg2Kd82YrZhyB82LHYpyB82Ycg2Kh82Ycg2K982LnYr9infCDYudivfNmGINqkfNmGINiofNmK2YYgfCDYqtixfNmCINmDfNmGINmKfNmK2KjYs3zYqNmK2Kh8INiq2Yp8INiz2Yh8INmD2Kh8INiz2Kd82YYg2YV82YYg2Kp82YTZhSB82KfZhNmFfNivINizfNqgINi5fCDZhdmGfNqG2KfYsXzYryDapHzYsdmGIHzYs9in2YV8INmF2Kd82r0g2LN82YbYjCB8INio2Yh8INin2Yp82YbYr9mCfCDYrdmCfNqs2KfYsXzZhtqs2Kd82KjZiNmEfNiz2KjYp3wg2LPYqHzYp9iq2Yh82Kcg2LN82YLZhNmHfCDapNmFfCDZhdmFfNmI2KfZhnzYs9qG2Kd8INiz2oZ8INmD2LN82Kcg2Kh82LPZhiB8INiz2YV82qTYsdmEfNin2YjZhnzZhtq9IHzYqtmGIHwg2KjYp3zZh9mGIHzYs9mK2Kd82Kcg2qR82KfYsdqgfNio2KfYsXzapNinIHzYqNiz2YZ82YPYqNmKfNin2YUgfNmK2YbYr3zZiiDYr3zYp9qs2Yp82qAg2Kh82KjYp9qsfNmKINinfNmF2KfZhnwg2YTYp3wg2K8gfNiv2YLZhHzZh9mG2K98INmH2YZ82Kog2K982KfYr9mKfNmI2YrZhnzZitmD2YZ8INmG2qx82Iwg2YN82YbZoiB8INqk2Yh82KjaoNizfNmC2aIgfNin2KogfNin2YjZhHzYp9mD2YZ82KfavSB8INiz2LN82YjZhiB82KfYryB8INmD2Yh82KfZitmGfNiv2qDZhnwg2K/aoHzYp9im2YZ82KrZiCB82KrZiiB82YYg2Yd82qzZiiB82LPZiiB82YIg2YV82YjaoNmGfNiv2YjaoHzZhtiv2Yh82YTZitmGfNix2YTZinzZhtiq2Yh82qTZiNmGfNmI2KfYqnzZitin2K982KrZitmDfNqg2LPYp3zapNmF2Kh82KrYsdmFfNmiINivfNit2YLZonzZiNinIHzZhNmI2Kd82YXYp9izfNmI2YIgfNmHINmFfNmEINivfCDZhdmEfNmI2YbYr3wg2qTaoHzYp9iMIHzYjCDYqnzZhNin2KZ82KfZiiB82YXapNmIfNmK2YMgfNmKINmDfNix2KfYqnzZhdix2Kd8INio2Yp82LPZhdmIfNmIINmDfNiMINivfNiz2YjYp3zaoCDZhXzaoCDYs3zaoNmiIHzapNix2Yp82YrYsdmKfNiv2YrYsXzYpyDYp3zYp9iz2Kd82qTZoiB82KrYpyB82LPZiNizfNiMINizfNis2YjYp3zaoCDYqnzYsdij2YZ8INin2YZ82LPYo9mGfNix2YrZg3zZitij2YZ82LHZiiB8INiv2LF82KfZhdixfNmD2LHYrHwg2qTZhHzYpyDYr3zYrNix2YZ82KfYrNixfNin2LHZg3zZhNin2Kx82K8g2YN82YjYp9ixfNio2LHYs3zZiNmG2Kp82YXZhtmIfNiz2KfZhHzZitmG2qB82K/aoNmifNmG2K/aoHwg2YXaoHzYp9qk2Kd82LPYs9mKfNiz2KfYs3zZhtmGIHzapNmI2YR82KfarNinfCDYqNqgfCDYs9qkfNmF2KjZinwg2KfapHzaoCDYp3zYp9ix2KN82qTYsdinfNmKINizfNio2LMgfCDYr9mEfNinINmFfNmF2YjYp3zapNmE2Kd82YXZhNinfNqk2LHZg3zZg9mI2LF82YjYqNmIfCDZg9ijfNmI2YPZhnzYo9mG2r182YPYs9infNqg2qzZiHzYp9iv2qR82YfYp9ivfNix2YfYp3zYqtix2Yd82YPZiNmFfNiq2YjZgnzZhSDYs3zaoCDYr3zYr9mKIHwg2K/ZinzZoiDYs3zZhtiv2Yp82KfYsyB82KfYr9infNio2YjYp3wg2K/YqHzaoCDapHzavdiMIHzYp9qk2aJ82LHYqtinfNin2YQgfNmK2KfZhHzZiNiz2Yp8INmD2Kp82KPZhtiMfNmG2qTYp3zYqtmG2qR8INiq2YZ82YUg2qR82LHYs9infNmF2YXapHwg2YXYsXzZhiDYrXwg2YPZhXzZhtiz2Yp82KzYo9mGfNik2YogfNmE2KTZinzYp9mE2KR82YTYp9mEfNmD2qTYsXzZg9iqIHzYsdmD2Kp82LTYp9ixfNmF2LTYp3wg2YXYtHzYrNin2K982LHarNinJyxcbiAgICBza3I6ICfYqtuSIHzYp9q6IHzYr9uMIHzYr9uSIHwg25QgfNmI2rogfCDYqtuSfCDYr9infCDaqdmIfNqp2Yjaunwg2K3ZgnzYr9inIHwg2K/bjHzbjNin2rp8INiv25J824zauiB825Ig2Kd82LTYrti1fCDYtNiufNuB2LEgfNuSINuUfNin2LXZhHwg2K3Yp3zYrdmCIHzYrti1IHwg24HYsXzYtdmEIHzYrdin2LV824HbkiB8INuB25J82KfZhCB82YIg2K182YQg24F8INmG2Kd8INqp24x8INmI2oZ825Qg24F824zYpyB82LPbjCB825Ig2YV8INin2Yh82YjahiB82KfYqtuSfNqp24zYqnzYpyDYrXzYp9iv24x82YbYp9mEfNi1INqpfCDYp9iqfNixINi0fNuB24zaunwg24zYp3zauiDYr3wg2KfbjHzbjNiz24x8INmF2YR82YjZhtivfNqp24HbjHwg2qnbgXzbjCDYqnzYstin2K982KfYstinfCDYp9iyfNmG2K/bknzauiDaqXzYp9ixIHwg2YjbjHzbkiDaqXzYptuSIHwg2KfZhnzauyDYr3zZhtuBIHwg2qnYsXzYp9mI2YZ825Ig2Yh82K/bjNinfNuMINivfNq6INinfNuSINiofNmI24zYs3zZiNq7IHzbjCDZhnwg24HZiHzYqtuMIHzbjCDblHwg2YbbgXzbjCDYp3zbjNmG2K982Ygg2oR82KLZvtq7fCDYotm+fNinINmIfNuSINisfCDaqdmGfNuSINmGfNmG2K/bjHzYqiDYr3zbkiDYrXzbjCDaqXzYptuMIHzZhdmE2ql824zYqtuSfNmGINuUfNiq2r7bjHwg2KravnzZiNmGIHzauiDZhXwg2KjahnzblCDYp3zZhtmI2rp82qnZhtmIfNq725IgfNin2LHbjHzYpyDYp3zbkiDbgXzZhCDYqnwg2oTYpnzZiNmCIHzZgtmI2YJ82K3ZgtmIfNmEINqpfNiu2YTYp3wg2KzbjHzZhNqpIHzYr9in2LF824zYqiB82qnYsdq7fNin2YbbgXzaqdmIIHzbgdqp2Yh8INuB2ql82YYg2Kd82YXZhCB8INmI2LN82rog2Yh82b7au9uSfCDYqti5fNuMINmFfNin2YEgfNuSINiufNmG2YjZhnzZgtmG2Yh8INmC2YZ8INmE2Yh825Qg2ql82LHbjCB82YTbkiB82KrYpyB824zYqtinfCDZgtmIfCDahtinfNuB2KfaunzahNim25J82YIg2Kp82KfbjNuBfNix2rsgfNuSINivfNixINqpfCDZiCB82YTYp9mBfCDYrtmEfCDYrNmIfNuMINmIfNin2YggfNuB2YggfNim2YggfNqG2KbZiHzYqNqG2KZ824zYsSB824HZiNmIfNinINmFfNuMINisfNin2YTYp3zbjNmGIHwg2KzYp3zZhduMIHzZhtuB2Kd82KfZhiB82KfYqiB82LPasdivfCDYs9qxfNuM2KggfNiz24zYqHzZiNiz24x8INi02Kd82Kgg2K9824zZiNq7fNin2YUgfNin2Yjau3zbkiDYqnzauyDaqXwg2YXYt3zauiDYqnwg2YjZhnwg2qnZhXzZhiDYr3zYsdqp2r58INix2ql82rvbjCB82rog2KJ82LHbjNinfNuMINuBfNin2K8gfNuM2KfYr3zYudmE2Kd82LEg24F82rog2LN824wg2K182KzavtuMfNin2KbYr3zbgduMIHzZhNmI2ql8INqL2Yh8INiz2YV8INiz2Kd8INmF2YZ8INmF2Ll82KjZgiB82KfYqNmCfNi32KfYqHzZhdi32Kd82r7bjNmIfNq6INmBfNuB2YYgfCDbgdmGfNis2YggfNmIINqpfNq6INi0fNixINiqfNqp2KfYsXzZhSDYr3zavtuM2Kd8INm72Kd82LrbjNixfNmIINmEfNmI2KbbjHzYrNuM2Kd82YjYp9mFfNmC2YjYp3zbjCDYs3wg2KzavnzZhCDYp3zZgtmI2YV8INiz24x82LDbgdiofNmF2LDbgXwg2YXYsHzYp9uSIHwg2KfbknzYr9mGIHzYpyDYqnzYs9in2YZ82YbYs9infNin2YbYs3zYsduSIHzZhNuM2YV82LnZhNuMfNiq2LnZhHzYp9mF2YR824Eg2K9825Ig2LF82K8g2Kd82qnZhSB824zbgdmIfNmB2KfYpnzahiDYp3wg2qnavnzZhSDYqnzYsdinIHzZiNix2Kd82b7ZiNixfNq6INiofNmCINivfNuSINmCfNmI2qnZiHzaqdq+24x82Kcg2ql82Ygg2K9825Ig2LB82b7au9uMfNio2YbYr3wg2YHYsXzaqdmI2KZ82KfZhduMfNuMINuMfNin2KbbjHzZhNin2YJ82KfbjNq6fNuBINinfCDZhti4fNiz2YXYp3zZiNmF24x824zYjCB825Ig2LN82Kog2Yh82r7bjNmGfNuSINi5fNuM2YUgfNiz24HZiHwg2LPbgScsXG4gICAgcGJ1OiAnINivIHwg2KfZiHzYp9mIIHzZvtmHIHwg2b7Zh3zZituUIHwg2K3ZgnzahtuQIHwg2obbkHzYsdmHIHzZiiDYp3zbkCDYr3wg2YfYsXzZhtmHIHzZh9ixIHzYrdmCIHwg2oXZiHzZiNqpIHzahdmI2ql82Ygg2Kd82Ycg2K982Ycg2Kd825Qg2Yd82Ycg2Yh8INi02Yp8INmE2LF82Yog2oZ82Ygg2K982LHZiiB82YTYsdmKfNmCINmEfCDaqdqafNmI2YogfNqa25AgfNqp2prbkHzZhyDaqXzYutmHIHzZhNmIIHzYsSDahXzYs9ix2Yd8INiz2LF82Ycg2b58INm82Yh82Ygg2b582YTZhyB82YrYqiB82bzZiNmEfNmK2KcgfNqp2pPZinwg2qnZiHzYrtmHIHzZitiMIHzYr9mKIHwg2YTZh3wg2KfYsnzYryDZhXwg2YfZinwg2YjYp3wg2YrYp3wg2oXYrnzYp9iy2Kd82K8g2Kd82YjZhNmIfNmHINiqfNqF2K7Zh3wg2qnak3zZiNmEIHzZh9i62Yd82Ycg2LR82Yog2K98INmH2Lp82qnZiNmEfNiy2KfYr3zZhtmIIHwg2YjZinzZiCDZinzZhyDYqHzYtNmK25R82K/bkCB82YrZiCB8INiv2Yp82KrZhyB82K7ZvtmEfCDZvtixfNin2K8gfNivINivfNqpINitfCDYqtmIfNmHINmFfNqr2YcgfNmHINmHfNmC2YjZgnzYrdmC2Yh82Ygg2YV82Ycg2K182K8g2Yd8INiq2LF8INmF2LN82LTZiiB8INmG2Yd82pPZituUfNmG2YogfNivINm+fNmI2KfYr3zbkCDZvnzYp9iv2Yp82YjZhNmGfCDZitmIfNivINiqfNmI2YbZiHzZiNqr2Yd82Yog2Yh82YTZiiB8INiv2Kd82YrYryB8INio2Kd82KrZiNmGfCDYrtm+fNmKINm+fNiq2Yjaq3zYp9ixIHzYp9mG2K982YrZiNinfNuQINmIfNiv2KfZhnwg2KjYsXzak9mKIHwg2LnZhXzYp9mG2Yd8INiv2Yd82YrahSB82YfZitqFfNin2YXZinzZhNmG2Yp82KjYudmKfNqJ2YjZhHwg2onZiHzZhyDZhHzYp9mK2K982KjYp9mKfNin2KrZiHzZhyDaq3wg2KrYp3zZvtmEIHwg2YXZhHzYp9mK2Kp82YjZhSB82YjZhiB8INmE2Kd82YfZitmIfCDYtNmIfCDYr9i6fNmFINivfNiv2YcgfNuQINinfNin2YYgfCDYqtmHfNqp2KfYsXzYqtmIIHzZhdmKIHzYp9ix2Yd82KfZiNmKfNiz2KfZiHzZhdiz2Kd82YbZiNmGfNiv2YfYunzZiCDYqnzZiiDYtHzYp9mG2Yh8INmF2K182YrZhiB82KfYrtmEfCDaq9m8fNi02YjZinzYr9i62Yd82Ygg2K182YjZitiMfNmG2YrYsnzYs9mKIHzYp9iz2Yp82YjZhtivfNmC2YggfNmI2YLZiHzZiCDaqXzZiNmG2Yd82YjZhdmKfCDZiNqpfNmKINiqfCDYp9mGfNmC2KfZhnzZhtiv25B82Ygg2LF82qkg2K982Ycg2Yp82YXZitmGfNm+2LEgfNm82YcgfNmE2KfZhXzYutmIIHzZh9i62Yh82K8g2bx82Ygg2Yd82YQg2Kp82YTbkiB82YjZhNuSfNmI2YjZhnzaqdmKIHzYsdmIIHzZhiDaqXzZhdmI2YV82YjaqdqTfNm+2KfYsXzZhiDYtHzZhdmGIHwg2YbZiHwg2Yjak3wg2YLYp3zbkCDahnwg2YjYs3zahSDahXzYtNiu2LV8INi02K582pjZiNmGfCDamNmIfNiq2LEgfNqr2bzZh3zZiCDahXzZh9mFIHzYudmC2Yp82LHYqtmHfCDZiNixfNio2YQgfCDYqNmEfNmIINiofNmHINizfNqa2YjZiHwg2prZiHwg2qnYp3zbkCDaqXzZiCDYs3zYp9iv2Yd82YjZhtqpfCDYutmIfNiv2YggfNmIINmGfNiqINqpfNmF2YQgfNi52YXZiHzZhCDZh3wg2b7ZinzZiNiz2Yp82pPYp9mGfNmI2pPYp3zZitiyIHzYrti12Yp82Yog2YV82Kcg2Kh82KfYr9infNmHINmGfNiu2YTZinzZiNin2K582K/ZitmIfNiMINivfNivINmCfCDZh9mFfNinINivfCDYqNmKfNiq2KjYuXwg2KrYqHzZhyDahnwg2LnZgnzZvtmE2Yh82Ygg2YR8INix2Kd82K8g2Kh82LHYp9mKfCDYr9iufNmG25AgfNmG2qnZinzYqiDYr3zYp9io2Ll8INmF2YJ82K8g2K582YjYsdmHfNi02LHYp3wg2LTYsXzYsSDZhXzYsdiz2LF82KrYp9mFfNmHINm8fCDZhdmGfNi32YcgfNiz2LfZh3zYp9iz2Ld82YjYp9izfNmE25AgfCDYp9izfNuUINivfNio2LHYrnzbkCDZhidcbiAgfSxcbiAgRGV2YW5hZ2FyaToge1xuICAgIGhpbjogJ+CkleClhyB84KSq4KWN4KSwfCDgpKrgpY18IOCkleCkvnwg4KSV4KWHfCDgpaQgfOCklOCksCB8IOCklOCksHzgpJXgpL4gfCDgpJXgpYt84KSV4KS+4KSwfOCkvuCksCB84KSk4KS/IHzgpK/gpL4gfOCkleCliyB84KSo4KWHIHzgpYvgpIIgfOCkv+CkleCkvnzgpY3gpLDgpKR8IOCkueCliHwg4KSV4KS/fOCkgiDgpJV84KS54KWIIHzgpKfgpL/gpJV84KS14KWN4KSvfOCkheCkp+Ckv3wg4KSF4KSnfOCljeCkpOCkv3wg4KS44KSufOCljeCkr+CklXzgpL8g4KSVfOCkleCljeCkpHzgpL4g4KSFfOCkleClgCB84KS+IOCklXwg4KS14KWNfOClh+CkgiB8IOCkueCli3zgpK/gpJXgpY184KS44KWAIHzgpLjgpYcgfOClhyDgpJV8IOCkr+Ckvnwg4KSV4KWAfOCkruClh+CkgnzgpKjgpY3gpKR8IOCkruClh3zgpKTgpY3gpK984KWIIOClpHzgpKTgpL4gfOCksOCkpOCljXzgpJXgpY3gpLd84KWH4KSVIHzgpK/gpYfgpJV84KWN4KSv4KWHfOCkv+CklSB84KSwIOCkuXzgpK3gpYAgfOCkleCkv+CkuHwg4KSc4KS+fCDgpLjgpY184KSVIOCktXzgpL4g4KScfOCkv+CkuOClgHzgpK7gpL7gpKh8IOCkteCkv3zgpLAg4KS4fOCkpOCljeCksHzgpYAg4KS4fOClpCDgpKp8IOCkleCksHzgpY3gpLDgpL584KSX4KS+IHzgpL/gpKQgfCDgpIXgpKp8IOCkquCksHzgpLjgpY3gpLV84KWAIOCklXwg4KS44KWHfOCkviDgpLh84KWN4KSvIHwg4KSF4KSofOCljeCkpOCljXzgpL/gpK/gpL584KS+IOCkuXwg4KS44KS+fOCkqOCkviB84KWN4KSkIHzgpKrgpY3gpKR84KS44KSu4KS+fOCkvuCkqCB84KSwIOCklXzgpL7gpKrgpY184KSk4KSo4KWNfCDgpK3gpYB8IOCkieCkuHzgpLDgpL7gpKp84KS14KSk4KSofOCljeCkteCkpHzgpLDgpYvgpIJ84KS14KS+4KSwfOClhyDgpLh84KSl4KS+IHzgpLngpYsgfOClhyDgpIV84KS+IOClpHzgpKgg4KSVfCDgpKggfOCkpuClh+Cktnwg4KSw4KS+fOCkt+CkviB84KSF4KSo4KWNfOCkpCDgpLl84KWN4KS34KS+fOCljeCkteCkvnzgpJzgpL7gpI984KWAIOCkqnzgpJXgpLDgpKh84KS+IOCkqnzgpIXgpKrgpKh84KS34KWN4KSffCDgpLjgpIJ84KWHIOCktXzgpLngpYvgpJd84KS/4KS14KS+fOCkn+CljeCksHzgpY3gpJ/gpY184KS+4KS34KWNfOCksOCkvuCkt3zgpLjgpJXgpYd8IOCkruCkvnzgpJPgpIIgfOCkvuCkk+CkgnzgpLDgpYAgfOCklSDgpLh84KWHIOCkqnwg4KSo4KS/fOClgOCkryB84KSw4KSV4KWNfOCliyDgpLh84KS+4KSP4KSXfOCksOCkqOClh3wg4KSH4KS4fOCktSDgpJV84KSq4KSwIHzgpLDgpKTgpL584KSwIOCkhXwg4KS44KStfOCkpOCkpeCkvnwg4KSk4KSlfCDgpJDgpLh84KSw4KS+IHzgpKrgpKjgpYd84KWN4KSw4KWAfOCkv+CkleCljXzgpJXgpL/gpK984KS+IOCktXzgpK7gpL7gpJx84KSCIOCklHzgpLAg4KSJfOCkpuCljeCkp3zgpLjgpK3gpYB84KS24KWN4KSvfCDgpJzgpL984KS+4KSo4KWHfOCkvuCksOCljXzgpL7gpLDgpL584KSm4KWN4KS1fCDgpKbgpY184KSP4KSX4KS+fOCkuOCkruCljXzgpYfgpLYgfOCkv+CkjyB84KS+4KS1IHzgpLAg4KSqfCDgpKbgpYd84KWN4KSk4KSwfOCkviDgpJR84KS+4KSw4KWLfOCkr+Cli+CkgnzgpKrgpLDgpL584KSq4KWC4KSwfOCkmuCkv+CkpHzgpY3gpKcgfOCksOClguCkqnwg4KSw4KWCfCDgpLjgpYF8IOCksuCkv3zgpKQg4KSVfOCliyDgpKp84KSCIOCkuHzgpYcg4KSyfOCktuCkv+CklXwg4KS24KS/fOCkteCkvuCkuXzgpYcg4KSUfOCknOCliyB84KSw4KS+4KSnfOCknOCkv+CkuHzgpYLgpLDgpY184KWAIOCkrXzgpYLgpKogfOCli+Ckl+CkvnzgpLjgpY3gpKV84KSw4KWA4KSvfOCkpOCkv+CklXzgpY3gpLAgfOClpCDgpId84KSH4KS4IHwg4KSJ4KSofOCksuClhyB84KWHIOCkrnzgpLLgpL/gpI984KSuIOCklXzgpJXgpKTgpL584KWHIOCkr3wg4KSc4KWLfOCkqCDgpK584KSF4KSq4KSwfCDgpKrgpYJ84KWLIOCklXzgpL4g4KSJfOCkvuCkuSB84KSo4KWC4KSofOCkvuCkqOClgnzgpJfgpYAgfOCkpuClgCB84KS+4KSw4KWAfOCkgiDgpK584KWkIOCklXzgpKTgpLDgpY184KWAIOCksHzgpLYg4KSVfOCkquCksOCkv3zgpLjgpY3gpKR84KWL4KSIIHzgpJXgpYvgpIh84KSw4KWN4KSvfOClgCDgpIV84KS54KS/4KSkfOCkreCkvuCktXwg4KSt4KS+fOCkpOCkvuCkk3zgpL7gpLggfOCkuOCkvuCkrnzgpLXgpL/gpJV84KS14KS/4KS1fOCkruCljeCkrnwg4KS44KSVfOCkleCksCB84KS+4KSo4KS+fOCkpyDgpJV84KSo4KS/4KSVfOCkryDgpJV84KSJ4KS44KSVfOCkleClg+CkpHwg4KWY4KS+fOCkqCDgpLh84KSc4KWA4KS1fOCljeCkr+CkvnzgpLDgpJXgpL584KWN4KSw4KSVfOCkvuCknCB84KSo4KWN4KSvfOCljeCkriB84KSw4KWN4KSjfOClmCDgpLl84KS54KWYIHwg4KS54KWYfOClgCDgpK584KSc4KS/4KSVfOCkvuCknOCkv3zgpL7gpK7gpL584KSVIOCklHzgpK7gpL/gpLJ84KWH4KSo4KWHfOCksuClh+CkqHwg4KSy4KWHfOCkr+ClhyB84KWLIOCkhXzgpYcg4KScfOCksOCkv+CktXzgpK7gpK8gfOCkuOCkruCkr3zgpLXgpLbgpY184KSG4KS14KS2fCDgpIbgpLV84KSQ4KS44KWAfOCkvuCkpyB84KSwIOCkpnzgpLDgpY3gpLV84KS44KS+4KSwfOCkqiDgpLh84KSs4KSo4KWNfCDgpLjgpLl84KS/4KSn4KS+fOCkteCkv+Ckp3zgpYAg4KSofOClguCkqCB84KWY4KS+4KSoJyxcbiAgICBtYXI6ICfgpY3gpK/gpL584KSv4KS+IHzgpKTgpY3gpK984KSv4KS+4KSafOCkmuCkviB84KSj4KWN4KSvfOCkvuCkmuCkvnwg4KS1IHzgpJXgpL7gpLB84KSq4KWN4KSwfCDgpKrgpY184KS/4KSV4KS+fOCkp+Ckv+CklXzgpL7gpLAgfCDgpIXgpKd84KSF4KSn4KS/fOCkmuCljeCkr3zgpIbgpLngpYd8IOCkhuCkuXzgpL4g4KSFfOCkueClhyB84KS+IOCklXzgpL7gpLggfOCkteCkviB84KWN4KSv4KWHfOCljeCksOCkpHwg4KS44KWNfOCkpOCkviB84KS+IOCkuHwg4KSF4KS4fCDgpJXgpLB84KS44KWN4KS1fCDgpJXgpL584KSy4KWN4KSvfOCksOCkpOCljXzgpL7gpLngpL984KSV4KWL4KSjfCDgpJXgpYt84KS/4KSVIHzgpK/gpYfgpJV84KWN4KS14KS+fOCkviDgpLV8IOCkpOCljXzgpLAg4KSGfOCljeCkryB84KSk4KWN4KSwfOClh+CkleCkvnzgpJXgpY3gpLd84KS+IOCkqHwg4KS44KSCfOCkvuCkruCkvnzgpL7gpJrgpY184KSC4KS14KS+fOCkv+CkguCktXzgpJXgpL/gpIJ8IOCkleCkv3zgpL7gpKQgfOCkt+CljeCkn3zgpJXgpL7gpLh8IOCkr+CkvnzgpK/gpL7gpIJ84KS+4KSC4KSafOCksOCljeCkr3zgpK7gpL/gpLN8IOCkruCkv3wg4KS44KS+fOCkteCljeCkr3zgpYvgpKPgpKR84KSo4KWHIHzgpYcg4KSqfOCkleCkvuCkrnwg4KS44KSufOCkguCkpOCljXzgpK/gpYcgfCDgpLDgpL584KS44KSu4KS+fOCkpOCkguCkpHzgpJXgpLDgpKN84KS+IOCkhnzgpYcg4KSVfOCkueCkvyB84KWHIOCkuHzgpKjgpL4gfOCkv+Cks+Cko3zgpYLgpKggfOCkviDgpKp84KSf4KWN4KSwfOCljeCkn+CljXzgpL7gpLfgpY184KSw4KS+4KS3fOClgOCkryB84KS1IOCkuHzgpJXgpY3gpKR84KSu4KS+4KSofOCksOCljeCktXwg4KSG4KSqfOCks+Cko+CljXzgpY3gpLDgpY184KS+4KSk4KSCfOCkteCkvuCkpHzgpJrgpYcgfCDgpLXgpL984KWN4KS34KSjfOCksOCko+CljXwg4KSm4KWHfCDgpLXgpY184KSG4KSq4KSyfOCkueClgCB84KS+4KSw4KWNfOCkqOCkr+Clh3wg4KSo4KSvfOCkruCkviB84KSv4KS+4KS4fCDgpJzgpL584KSy4KWH4KSyfCDgpKjgpL984KWHIOCkhXwg4KSq4KS+fOCkviDgpK584KSy4KWHIHzgpL7gpLngpYB84KSs4KSC4KSnfOClhyDgpLV84KWN4KSv4KSVfCDgpK7gpL584KS24KS/4KSVfCDgpLbgpL984KSm4KWH4KS2fOCkviDgpKZ84KSu4KS+4KScfOCljeCksOClgHzgpLLgpYAgfOCkvuCkqCB84KS+4KSC4KSofOCkquCksuCljXwg4KS54KWLfOCkviDgpLl84KS34KSjIHzgpJzgpYcgfOCkv+CknOClh3zgpLngpL/gpJx84KSq4KS+4KS5fOCkvuCksOCkvnzgpK/gpL7gpKR84KS44KSw4KWNfCDgpLjgpLB84KSw4KS+4KSCfOCkheCkuOCksnzgpILgpKzgpIJ84KS44KSC4KSsfOCkv+CkleCljXzgpYAg4KSqfOCkguCkmuCljXzgpLDgpJXgpY184KSj4KSk4KWNfCDgpIbgpKN84KSy4KS+IHzgpLjgpY3gpKV84KSw4KWA4KSvfOClgOCkpCB84KSC4KSo4KS+fOCkpCDgpLV84KWN4KS1IHzgpJUg4KS1fOCko+ClhyB84KS+4KSa4KWHfOCkqCDgpJV84KSkIOCklXzgpLDgpKTgpL584KWN4KSw4KS+fOCkr+CkvuCkuXzgpY3gpKQgfOCkmuClgCB84KSvIOCklXzgpKbgpY3gpKd84KWN4KS14KSkfOCkr+CkleCljXzgpKPgpL8gfOCkhuCko+Ckv3zgpLgg4KS4fOCkguCkp+CkvnzgpJUg4KS4fOCkmuCljeCkm3zgpK8g4KSFfOCkpCDgpLh84KWA4KSo4KWHfOCli+Cko+CkvnzgpJXgpLDgpKR84KSk4KWN4KS1fOClgOCksiB84KWAIOCkhXzgpLjgpL7gpLB84KSwIOCktXzgpK3gpL7gpLV84KS1IOCkpHzgpKXgpLXgpL584KSF4KSl4KS1fCDgpIXgpKV84KWHIOCkpHzgpYcg4KScfOCkr+CkvuCkr3zgpILgpJrgpL584KWH4KSy4KWNfOCkvuCkqOClh3zgpYfgpKPgpY184KSVIOCkhnzgpJXgpY3gpJV84KS54KSV4KWNfCDgpLngpJV84KSjIOCkrnzgpILgpLDgpJV84KS44KSC4KSwfOCkqOCljeCkr3zgpL7gpK/gpKZ84KS+IOCkpHzgpKQg4KSGfCDgpIngpKp84KS14KS44KWNfOCkv+CkteCkvnzgpYfgpLbgpL584KS44KS+4KSufOClhyDgpK984KWHIOCkhnzgpYAg4KS1fOCktSDgpK584KSk4KWA4KSofOCktSDgpIZ84KSn4KWN4KSvfCDgpIXgpLZ84KSn4KS+4KSkfOCkleClg+CkpHzgpY3gpJUgfOCkpuCljeCkr3zgpL/gpKQgfOCkuOCksuClh3zgpYfgpLYgfOCkpOCliyB84KWH4KSyIHzgpKTgpYAgfOCljeCkpOClgHzgpIXgpLjgpYd84KSH4KSk4KSwfCDgpIfgpKR84KS44KWN4KSkfOCksOCljeCko3zgpL4g4KSsfOClh+CksuClh3wg4KSV4KWHfOCkueClgOCksHzgpJzgpL7gpLl84KS+IOCknHzgpYfgpKQgfOClguCksOCljXzgpKrgpYLgpLB84KWH4KSaIHwg4KS14KS+fOCkvuCknOCkvnzgpYAg4KS4fOCktuCkviB84KSvIOCktXwg4KSo4KWNfOCkr+CkvuCktXzgpKbgpY3gpKZ84KWN4KSnIHzgpLDgpYLgpKh84KSv4KSm4KWNfOCkleCkvuCkr3zgpL4g4KS2fOCkl+Cko+CljXzgpJUg4KSVfOCksOCkvuCkp3wg4KS24KS+fOCkr+CkpOCljXzgpLIg4KSFfOCljeCkr+CktXzgpYAg4KSVfOCkvuCktSB84KS+IOCkr3zgpKTgpY3gpKR84KSc4KS/4KSVfOCkvuCknOCkv3zgpLDgpKPgpL58IOCkp+CksHzgpL4g4KSnfOCkreClh+Ckpnwg4KSs4KS+fOCksOCkleCkvnzgpY3gpLDgpJV84KSV4KWH4KSyfOCkvyDgpLV84KS/4KS34KWNfOCkpOClgOCksnzgpK/gpYvgpJd84KS44KS+4KSnfOCkvuCkguCkpHzgpLXgpL/gpLV84KS24KWN4KSwfCDgpKfgpYd8IOCkruClgXzgpLXgpKTgpIMnLFxuICAgIG1haTogJ+CkvuCklSB84KSq4KWN4KSwfOCkleCkvuCksHwg4KSq4KWNfOCkvuCksCB84KS/4KSV4KS+fOCljeCkr+CklXzgpKfgpL/gpJV84KSVIOCkhXzgpY3gpLDgpKR84KWN4KSk4KS/fOCkteCljeCkr3wg4KSF4KSnfOClh+CkgSB84KSF4KSn4KS/fOCkv+CklSB8IOCkteCljXzgpIbKvCB8IOCkhsq8fOCkleCljeCkpHzgpK/gpJXgpY184KSk4KS/4KSVfOCkleClh+CkgXzgpJUg4KS1fOCkrOCkvuCklXzgpJUg4KS4fOCkm+CliOCklXwg4KSb4KWIfOCkpOCljeCkr3zgpK7gpYcgfOClh+CklSB8IOCkuOCkrnzgpJXgpY3gpLd84KS54KS/IHzgpLDgpKTgpY184KSwIOCkm3zgpK/gpYfgpJV84KWN4KSv4KWHfOCkqOCljeCkpHzgpLXgpL4gfOCkv+CkleClh3zgpJXgpaQgfOCliOCkleClpHzgpaQg4KSqfCDgpIXgpKp8IOCkuOCljXwg4KS14KS/fCDgpJzgpL584KS/4KSkIHzgpLjgpIEgfCDgpLngpYt84KSV4KWL4KSofCDgpJXgpYt84KSk4KWN4KSwfOCkuOCljeCktXwg4KS14KS+fOCklSDgpIZ84KS34KWN4KSffCDgpJXgpLB84KSF4KSq4KSofOCkruCkvuCkqHwg4KSV4KS+fCDgpIXgpKh84KSk4KS/IHzgpY3gpKTgpY184KSo4KWLIHzgpKjgpLngpL98IOCkquCksHzgpJ/gpY3gpLB84KWN4KSvIHwg4KSP4KS5fOCkvyDgpJV84KWN4KSf4KWNfOCkvuCkt+CljXzgpLDgpL7gpLd8IOCksOCkvnzgpLjgpK7gpL584KWL4KSo4KWLfOCksiDgpJx8IOCkqOCkuXzgpKTgpL7gpJV84KS+4KSw4KWNfOCkquCkqCB84KSk4KSo4KWNfOCkteCkpOCkqHzgpY3gpLXgpKR84KWN4KS34KS+fCDgpJXgpI98IOCkuOCkvnzgpY3gpLDgpYB8IOCkqOCkv3zgpL4g4KSGfOCkv+CkteCkvnwg4KS44KSCfCDgpKbgpYd84KSc4KS+4KSPfOClgOCkryB84KSV4KSw4KSsfOCkpeCkviB84KSP4KSs4KS+fOCkviDgpKp84KSo4KS+IHzgpY3gpLXgpL584KSm4KWH4KS2fOCkpOClpCB84KSw4KSVIHzgpJUg4KS5fOCkgSDgpIV8IOCkuOCkrXwg4KSGIHzgpKQg4KSVfOCkmuCkv+CkpHzgpY3gpKQgfOCkteCkvuCksHzgpKTgpL4gfOCkvuCksOCklXzgpK7gpL7gpJx84KS+IOCkuHzgpLDgpYDgpK984KSo4KWN4KSvfOCksOCkpOCkvnzgpL7gpKggfOCljeCksOCkvnzgpY3gpK/gpL584KSw4KSV4KWNfOCkvuCksOCko3zgpKrgpLDgpL984KSP4KSyIHzgpJXgpI/gpLJ84KSF4KSo4KWNfOCksOCkrOCkvnzgpJUg4KSqfOCkk+CksCB84KSG4KST4KSwfCDgpIbgpJN84KSF4KSb4KS/fCDgpIXgpJt84KS/4KSw4KWNfOCkvuCkqOCljXzgpKjgpJUgfOCkueCli+Ckj3zgpJXgpLAgfOCkp+CkvuCksHzgpLjgpY3gpKV84KS+IOCkhXzgpL/gpK7gpYd84KSwIOCkhnzgpI/gpLngpL98IOCkj+CklXzgpYcg4KS4fOCkpOCkpeCkvnwg4KSk4KSlfCDgpK7gpL584KS/4KSV4KWNfOCktuCkv+CklXwg4KS24KS/fOCkquCljeCkpHzgpLDgpY3gpLV84KSo4KS/4KSwfOCkmuCljeCkm3zgpLDgpY3gpK984KSBIOCkuHzgpJUg4KSVfOCkueCliyB84KS+4KS54KS/fOCkj+CkpOClpHzgpLAg4KSqfOCkvuCkruCkvnzgpLjgpL7gpK584KS34KS+IHzKvCDgpLh84KSBIOCkj3zgpYjgpJUgfOCkpuCljeCkp3zgpLAg4KSFfOCklSDgpJx84KS44KWN4KSkfOCkvuCkquCljXzgpIEg4KSVfCDgpLjgpJV84KSv4KSVIHzgpJXgpL7gpKh84KS54KSoIHzgpI/gpLngpKh84KWH4KSyIHzgpYvgpI/gpKR84KSkIOCkhnzgpL4g4KS1fOClpCDgpJV84KWN4KSk4KSwfOCkvuCkj+CkpHzgpY3gpLDgpJV84KS54KWBIHzgpJUg4KSJfOCkquClguCksHzgpLXgpL/gpLV8yrwg4KSFfOCkm+CkvyB8IOCksuClh3zgpKgg4KSqfOCkvuCkuCB84KSw4KS+4KSqfOCkp+CklSB84KSq4KSP4KSsfCDgpKrgpI984KSw4KS+IHzgpK/gpKTgpL584KSw4KWC4KSqfOCkqCDgpLV8IOCkleClh3zgpLfgpL7gpJV84KSvIOCkqnzgpKQg4KS5fOCknOCkvuCkuXwg4KSTIHzgpK3gpL7gpLV84KSq4KSwIHzgpKXgpLXgpL584KSF4KSl4KS1fCDgpIXgpKV84KS44KSu4KWNfOCknOCkv+CklXzgpL7gpJzgpL984KWC4KSw4KWNfOCksOCkpOCkv3wg4KSm4KWLfOCkuOCkreCklXzgpaQg4KS4fCDgpJzgpKh84KS44KStIHzgpKzgpL7gpKd84KSF4KSo4KWBfOCkv+CkuOCkgXwg4KS44KS5fOCkgSDgpLV84KSPIOCkuHzgpLDgpL/gpLV84KSk4KWBIHzgpYfgpKTgpYF84KS54KWH4KSkfCDgpLngpYd84KS+4KSnIHzgpYfgpKzgpL584KSoIOCkuHzgpL/gpLfgpY184KSw4KS+4KSnfCDgpIXgpLV84KS/4KSk4KWNfOCkteCkvuCkuHzgpJrgpL7gpLB8IOCkieCkmnzgpL7gpLDgpL584KSoIOCklXzgpLXgpJUgfOCkviDgpJV84KSo4KWC4KSofOCkvuCkqOClgnzgpI/gpKQgfOCksOClgCB84KWH4KSTIHzgpJXgpYfgpJN84KSw4KSjIHzgpY3gpLDgpLh84KS/IOCkpnzgpJMg4KS1fCDgpK3gpYd84KSo4KS54KWBfOCli+CkqOCkuXzgpY3gpKXgpL984KSq4KSk4KWNfOCkruCljeCkqnzgpLDgpL7gpJx8IOCkreCkvnzgpLngpL/gpK58IOCkueCklXzgpL7gpK7gpYd84KWN4KSjIHzgpLDgpY3gpKN84KS54KS+4KSwfOCkvyDgpLh84KSVIOCkpnzgpKgg4KSFfOCkpCDgpIV84KSy4KWH4KSsfCDgpIXgpK184KS/4KS24KWNfOCknOCklSB84KS+4KSc4KSVfOCkqCDgpIZ84KS14KS+4KS5fOCkleCkvuCknHzgpLbgpY3gpK984KS14KS44KWNfOCkk+CkueCkv3wg4KST4KS5fOCkr+Cli+Ckl3zgpaQg4KSPfOCkleCkjyB84KWHIOCkk3zgpIXgpKrgpLAnLFxuICAgIGJobzogJyDgpJXgpYd84KSV4KWHIHzgpYcg4KSVfOCkvuCksCB84KSV4KS+4KSwfOCkv+CkleCkvnzgpKfgpL/gpJV84KSF4KSn4KS/fCDgpIXgpKd84KST4KSwIHzgpIbgpJPgpLB8IOCkhuCkk3zgpYcg4KSFfOClhyDgpLh84KS+IOCklXwg4KS44KSCfOCkv+CklSB84KSwIOCkuXzgpL4g4KS4fCDgpLngpYt84KSwIOCkuHzgpYfgpIIgfOCkruClh+Ckgnwg4KSu4KWHfCDgpJXgpLB8IOCkuOClh3zgpKjgpYsgfOCkleCljeCkt3zgpLjgpYcgfCDgpJXgpL584KWkIOCkuHzgpJbgpYcgfOCkvuClpCB84KSw4KS+IHwg4KS44KSufCDgpLjgpKx84KWN4KSw4KS+fCDgpLjgpJV84KSwIOCklXzgpKgg4KSVfOCkteClhyB84KWM4KSo4KWLfOCkleCljOCkqHwg4KSV4KWMfOCkmuCkvuCkuXwg4KSa4KS+fCDgpKzgpL584KSq4KWN4KSwfCDgpKrgpY184KSl4KS+IHzgpL8g4KSVfOCkpOCkvyB8IOCknOCkvnwg4KS44KS+fOClhyDgpIZ84KSq4KSoIHzgpJXgpLDgpYd84KSk4KS+IHzgpLngpYvgpJZ84KSkIOCklXzgpYfgpaQgfOClhyDgpKx84KSk4KSl4KS+fCDgpKTgpKV8IOCkhuCkqnzgpJXgpYfgpLJ84KS44KSV4KWHfCDgpLjgpY184KSw4KWHIHzgpLjgpKzgpLl84KSV4KSwIHzgpIbgpKrgpKh84KWHIOCkk3zgpJzgpL4gfCDgpKrgpLB84KS34KWN4KSffCDgpLDgpL584KSo4KS+IHzgpLngpLXgpYd8IOCkueCktXzgpLLgpL4gfOClh+CksuCkvnzgpKzgpLngpL98IOCkk+CklXzgpYvgpJbgpYd84KSwIOCkrHzgpLngpaQgfCDgpLngpaR84KSoIOCkuHzgpL7gpLfgpY184KSw4KS+4KS3fOCljeCkpCB8IOCklOCksHzgpYcg4KSafOClpCDgpJV84KS44KSC4KSXfOCksCDgpIZ84KSf4KWN4KSwfOCljeCkn+CljXzgpLfgpL4gfOCkruCkvuCkqHzgpL4g4KSGfOCkgiDgpJV84KS+IOCkqnzgpY3gpLfgpL584KSw4KSV4KWNfOCkueClhyB84KS+4KS54KWHfOCkvuCkpOCkv3zgpL7gpLXgpYd8IOCknOClh3zgpLngpYAgfOCkk+CkleCksHzgpK7gpL/gpLJ84KS/4KSkIHzgpYsg4KS4fOCksiDgpJx84KSH4KSW4KWHfOCkqOCkh+Cklnwg4KSo4KSHfOCkpOCljeCksHzgpK7gpL7gpJx8IOCkrOCkv3zgpLXgpYfgpaR84KWHIOCknHzgpJUg4KS4fOCkv+CkgiB84KS54KS/4KSCfOCkleCksOCkvnzgpJTgpLAgfOClhyDgpK584KS44KSu4KS+fOCkueClgSB8IOCkkyB84KSq4KSwIHzgpYcg4KSofOCkuOCljeCkpXzgpLDgpYDgpK984KWN4KSw4KWAfOCksuCkvuClpHzgpL7gpJwgfOCkvuCkqCB84KSV4KS+4KSofOClhyDgpKR84KS/4KSwIHzgpKTgpL/gpLB84KSW4KS+4KSkfCDgpJbgpL584KWHIOCkiXzgpKjgpYLgpKh84KS+4KSo4KWCfOCkvuCkriB8IOCkuOClgXwg4KSm4KWHfOClgCDgpJV8IOCkruCkvnzgpLAg4KSufOCkquCljeCkpHzgpL/gpK/gpL584KS+4KS54KWAfOCkrOCkvuClpHzgpK/gpYvgpJd84KWAIOCkuHzgpLIg4KS5fOClguCkqCB84KS14KWN4KSvfOClgSDgpJV84KSPIOCklXzgpYcg4KS1fOCkguCkpOCljXzgpLjgpY3gpLV84KSV4KWH4KS5fOClgOCkryB84KSW4KSyIHzgpLjgpL7gpK584KSv4KSk4KS+fOCkpOCkv+CklXzgpYcg4KS5fOCkvuCkquCljXzgpLDgpL7gpKp84KSwIOCkqnzgpLAg4KSFfCDgpLLgpYt8IOCkuOCkuXzgpJzgpYcgfOCli+CklyB84KSuIOCklXzgpLLgpYcgfCDgpKjgpL984KWH4KSV4KSwfOCkviDgpLl84KSq4KWC4KSwfOCksCDgpKh84KWH4KS54KWBfOCljeCkryB84KSv4KS+IHwg4KSv4KS+fOCkpuClh+CktnzgpKbgpYAgfOCkviDgpK584KS+4KS1IHwg4KSm4KWLfOClhyDgpKZ8IOCkquCkvnzgpLngpL8gfOCkv+CkleCljXzgpLbgpL/gpJV8IOCktuCkv3zgpKzgpL4gfOCkv+CksiB8IOCkieCkqnzgpY3gpLDgpKR8IOCkteCkv3wg4KS54KWAfCDgpLLgpYd84KSw4KWLIHzgpYcg4KSWfOCkoOCkqCB84KSX4KSg4KSofOCkguCkl+CkoHwg4KSu4KS/fOCkt+CkoyB84KWN4KS34KSjfOCkguCksOCklXzgpLjgpILgpLB8IOCkhuCkpnwg4KSP4KSVfOCkqOClhyB8IOCkheCkqnzgpKTgpILgpKR84KS14KSk4KSCfOCljeCkteCkpHzgpY3gpKTgpLB84KWN4KSv4KS+fOClh+CktiB84KS+4KSm4KWAfOCljeCkpOCkv3zgpJzgpL/gpJV84KS+4KSc4KS/fOCklSDgpIZ84KWN4KSuIHzgpJrgpL7gpLB8IOCkieCkmnwg4KS24KS+fOCksOClgCB84KS+4KS5IHzgpK/gpL7gpLl84KSs4KS/4KSvfOCkmuCkv+CkpHzgpJXgpY3gpKR84KSq4KSv4KWLfOCkieCkquCkr3zgpLDgpKTgpL584KSwIOCktXzgpKgg4KSufOCksuCli+Ckl3zgpLkg4KSVfOCkqCDgpKp84KSV4KS+4KSufCDgpKrgpYJ8IOCkhyB84KSG4KSm4KS/fOCkiOCksiB8IOCkleCkiHwg4KS14KWNfOCkruClgCB84KWB4KSw4KSVfOCkuOClgeCksHwg4KSc4KWAfOCkp+CkvuCksHzgpK8g4KS4fOCkpOCksOCljXzgpK3gpYcgfOCkuOCkreClh3wg4KS44KStfOCkreCkvuCktXzgpY3gpKXgpL984KS+4KSu4KS+fOCkuOCksCB84KSw4KWN4KSufCDgpJXgpYt8IOCkrOClh3zgpYvgpLjgpLB84KSm4KWL4KS4fOCkoyDgpJV84KS+4KS4IHzgpYcg4KSqfOCknOCkvuCkpnzgpIbgpJzgpL58IOCkhuCknHzgpIngpJrgpL984KSXIOCklXzgpL7gpLDgpYB8IOCknOCksHzgpJfgpYcgfOCknCDgpJV84KWAIOCkrHzgpLjgpKggfOCkueCliyB84KS+IOCkpCcsXG4gICAgbnBpOiAn4KSV4KWLIHzgpKjgpYcgfCDgpLAgfOCkvuCksCB84KSV4KWN4KSkfOCkleCkvuCksHzgpKrgpY3gpLB8IOCkquCljXzgpY3gpK/gpJV84KS14KWN4KSvfCDgpJfgpLB84KS/4KSV4KS+fCDgpLXgpY184KWN4KSw4KSkfOCkp+Ckv+CklXzgpY3gpKTgpL984KSv4KSV4KWNfOCkheCkp+Ckv3wg4KSF4KSnfOCkvuCkiCB84KSu4KS+IHzgpLLgpL7gpIh84KSk4KWN4KSvfOCkv+CklSB8IOClpCB8IOCkuOCkrnzgpLXgpL4gfCDgpLXgpL584KSVIOCktXzgpY3gpKjgpYd84KSw4KWN4KSofOCkl+CksOCljXzgpKjgpY3gpKR84KSbIOClpHzgpKTgpL/gpLJ84KSw4KSk4KWNfOCkpOCljeCksHzgpYfgpJUgfOCkr+Clh+CklXzgpY3gpK/gpYd84KS/4KSy4KS+fOCksCDgpLh84KWLIOCkuHwg4KS44KWNfOCkruCkvuCkqHzgpJXgpY3gpLd8IOCkteCkv3zgpLngpYHgpKh84KS+IOCkuHwg4KS54KWBfCDgpJsgfOCksCDgpJt84KWN4KSk4KWNfOCkuOCkruCkvnzgpLjgpY3gpLV84KWkIOCkqnwg4KS44KSCfOCkqOClh+Ckm3zgpYHgpKjgpYd84KS54KSw4KWBfOCkpOCkqOCljXzgpLXgpKTgpKh84KWHIOCkhXzgpL/gpKjgpYd84KWLIOCkhXzgpY3gpLXgpKR8IOCkleCkvnzgpYcg4KSbfOCkl+CksOCkv3wg4KSw4KS+fOCljeCksCB84KSk4KS/IHzgpL7gpJXgpYt8IOCkleClgXzgpLfgpY3gpJ984KSo4KS+IHzgpLjgpY3gpKR84KSVIOCkuHzgpYHgpKjgpYh84KSV4KWB4KSofOCkn+CljeCksHzgpLLgpYcgfCDgpKjgpL984KS+4KSoIHzgpJvgpYjgpKh8IOCkm+CliHzgpY3gpJ/gpY184KS+4KS34KWNfOCksOCkvuCkt3zgpKTgpL/gpJV84KSb4KWkIHzgpL7gpLDgpY184KSk4KS+IHzgpL/gpKQgfOCkqOCliCB84KS+IOCkhXwg4KS44KS+fOCkviDgpLV84KSw4KWBIHwg4KSu4KS+fCDgpIXgpKh84KS+IOCksHzgpLDgpKTgpL584KSwIOCksHzgpLngpLDgpYJ84KWH4KSbIHzgpL4g4KSqfOCksOCkleCljXzgpY3gpKQgfCDgpKrgpLB84KSl4KS+IHwg4KSy4KS+fOCkquCksOCkv3zgpKbgpYfgpLZ84KS44KSV4KWLfCDgpK/gpLh84KSu4KS+4KScfOCkvuCkruCkvnzgpY3gpLDgpL584KS/4KS14KS+fOCkvuCkueCksHzgpYsg4KSqfOCljeCkryB84KS14KS+4KSwfOCkqCDgpLh84KWkIOCklXzgpKjgpL8gfOCljeCkt+Ckvnwg4KSk4KWNfOCkpuCljeCkp3zgpLAg4KS5fOCkpOCkpeCkvnwg4KSk4KSlfOCkr+CkuOCljXzgpY3gpK/gpLh84KSw4KWAIHzgpLAg4KS1fOCkquCkqOCkv3zgpLDgpL/gpKh84KSC4KSw4KSVfOCkuOCkguCksHzgpK3gpL7gpLV84KWIIOCktXzgpLjgpKzgpYh8IOCkuOCkrHwg4KS24KS/fCDgpLjgpLl84KSk4KS+4KSVfOClhyDgpLB84KSkIOCksHzgpLLgpL7gpJd8IOCkuOClgXzgpY3gpLfgpKN84KSm4KWN4KSmfCDgpIXgpKp84KWI4KSoIHzgpYsg4KS1fOCkv+CkleCljXzgpL7gpLUgfOCkp+CkvuCksHzgpY3gpK/gpL584KWN4KSw4KS/fOCkviDgpK184KSP4KSV4KWLfOCksCDgpK584KSoIOCkhXzgpYsg4KSyfCDgpIngpLh84KS24KS/4KSVfOCkvuCkpOCljXzgpLjgpY3gpKV84KS14KS+4KS5fOClguCksOCljXzgpLbgpY3gpK984KS/4KSk4KWNfOCksOCkleCli3zgpL7gpLDgpJV84KWB4KSm4KWNfOCkpOCliyB84KWN4KSk4KWLfOCkvuCkieCkqHzgpJXgpL7gpKh84KS/4KSP4KSVfOCkviDgpKh8IOCkquCkqHzgpKjgpaQgfOCliOCkqOClpHzgpJXgpL4gfOClh+Ckm+ClpHwg4KSt4KWHfOCksOCljeCkr3zgpLjgpK7gpY184KSk4KWN4KSqfOCkuOCkvuCkrnzgpLDgpL/gpK984KSa4KS+4KSwfOCkqOCkv+CknHzgpYHgpKggfOCkl+CkvyB84KS+4KSX4KS/fOCkieCkuOCklXwg4KSu4KSkfCDgpIXgpK184KSq4KWC4KSwfOCksCDgpKR8IOCkuOCklXzgpLjgpL7gpLB84KSw4KS+4KSnfOCkquCksOCkvnzgpIXgpKrgpLB84KWB4KSV4KWNfOCknOCkleCli3wg4KSJ4KSqfOCksOCkviB84KS+4KSw4KS+fOCljeCkteCkvnzgpLXgpL/gpKd84KWN4KSoIHzgpL4g4KSkfOCkqCDgpJd84KSj4KSV4KWLfCDgpKrgpL58IOCkpuCkv3zgpJUg4KSwfOCksCDgpKp84KSF4KSo4KWNfOCkreClh+CkpnzgpL7gpLDgpK584KWLIOCkhnwg4KSF4KSwfOCknOCkv+CklXzgpL7gpJzgpL984KS/4KSvIHzgpLfgpL4gfOCkvuCknyB84KSs4KS+4KSffCDgpKzgpL584KS/IOCksHwg4KSb4KWkfOCkpOCljeCktXzgpKQg4KS4fOCksOClgiB84KSbIOCksHzgpLDgpJXgpL584KS14KS/4KSVfOCksCDgpIl84KWL4KSXIHzgpY3gpKbgpYd84KSw4KS/4KS1fOCkuOCkleCkv3zgpYgg4KSqfOCksOCkpOCkv3zgpIXgpKjgpYF8IOCkhuCktXzgpK/gpYHgpJV84KS+IOCkl3zgpKjgpK7gpL584KSv4KWL4KSXfOCklyDgpJd84KSVIOCkhXzgpKbgpY3gpLV84KWN4KSnIHzgpLDgpYHgpKZ8IOCkrOCkv3zgpaQg4KS4fOCkieCkqOClh3zgpL7gpKjgpY184KS+IOCkrnzgpL/gpJXgpYt84KSw4KWN4KSmfOCkvuCksOClgHzgpY3gpKTgpLB84KWLIOCkuXzgpLngpL/gpKR8IOCkpuClh3zgpLDgpL/gpJV84KS+IOCklXwg4KSG4KSnfOCksOCkvuCknHzgpLDgpY3gpK584KWN4KSjIHzgpLDgpY3gpKN84KS/IOCktXzgpY3gpK/gpLV84KS14KS/4KSafOCkrOCliCB84KS44KS54KS/fOCksOCli+CknHzgpLDgpY3gpLh84KSIIOCkiXzgpY3gpKogfOCksOCkvuCkpHzgpKjgpL/gpJV84KSu4KS/4KSVfOCkmuCljeCkm3zgpY3gpKXgpL584KS14KS/4KS1fOCkleCkpOCkvnzgpIXgpK3gpL984KWN4KSn4KS+JyxcbiAgICBtYWc6ICcg4KSV4KWHfOCkleClhyB84KS+4KSwIHwg4KS54KSIfOCkleCkvuCksHzgpIjgpaQgfOCkueCkiOClpHzgpL/gpJXgpL584KWHIOCkhXzgpKfgpL/gpJV84KSF4KSn4KS/fCDgpIXgpKd84KSwIOCkuXzgpYcg4KSVfOCklOCksCB8IOCklOCksHzgpL4g4KSVfOClhyDgpLh84KS44KSsIHwg4KS44KSsfCDgpJXgpLB84KWH4KSCIHzgpKXgpL4gfOCkruClh+Ckgnwg4KSu4KWHfOCkpOCkpeCkvnwg4KSk4KSlfOCkv+CklSB8IOCkueCli3wg4KS44KSufOCkleCljeCkt3zgpKjgpL4gfOCkrCDgpJV84KSwIOCkuHwg4KS44KSCfOCkviDgpLh84KSV4KSwIHwg4KSt4KWAfOClpCDgpLh8IOCkuOCkvnwg4KS44KWHfCDgpJXgpL58IOCkheCkqnzgpY3gpLDgpL584KSq4KWN4KSwfCDgpKrgpY184KS44KWHIHzgpK3gpYAgfCDgpJXgpYt84KSkIOCklXwg4KSq4KSwfOCksOCkviB84KSVIOCkuXzgpKrgpKggfOCkheCkquCkqHwg4KS44KSVfOCkr+CkviB84KSk4KS/IHzgpLAg4KSVfOClgCDgpJV8IOCkr+CkvnzgpJXgpLDgpYd8IOCknOCkvnzgpLDgpYcgfCDgpJPgpJV84KWN4KSkIHzgpLjgpJUgfOCkqOCliyB84KS+4KSoIHzgpK7gpL7gpKh84KST4KSV4KSwfOCkviDgpKp84KSoIOCklXzgpYfgpLIgfCDgpKjgpL584KWkIOCklXzgpLDgpJXgpY18IOCkuOCljXzgpLngpYAgfOCkueCli+Ckj3wg4KSP4KSVfOCkquCksCB84KSm4KWAIHzgpJ/gpY3gpLB84KSk4KS+IHzgpLXgpY3gpK984KS54KSIIHwg4KS24KS+fOClhyDgpIl8IOCkpuClh3zgpKTgpY3gpLB84KS+4KSm4KWAfCDgpLDgpL58IOCkueClgHzgpJXgpL7gpKh84KS/4KSkIHzgpK4g4KSVfOCksiDgpJx84KS+4KSuIHzgpYAg4KS4fOClhyDgpK184KSoIOCkuHzgpK7gpL7gpJx84KS34KWN4KSffOCkt+CkviB8IOCksuClh3zgpJUg4KS4fOCkrOClhyB84KS14KWHIHzgpL7gpLXgpYd84KSu4KS/4KSyfOCksCDgpK584KWN4KSvIHzgpL4g4KS5fOCksuCkviB84KSq4KWN4KSkfOCkqOClguCkqHzgpL7gpKjgpYJ84KSc4KS+IHzgpYfgpJXgpLB84KWN4KS34KS+fOCljeCksOCkpHzgpILgpKTgpY184KSwIOCklHzgpYvgpIggfOCkleCli+CkiHzgpY3gpJ/gpY184KS+4KS34KWNfOCksOCkvuCkt3wg4KSu4KS+fOCksOCliyB8IOCknOClh3zgpJXgpLDgpL584KWL4KSPIHzgpL7gpKrgpY184KSw4KS+4KSqfOCkuOCkruCkvnzgpYLgpKggfOCliyDgpLh84KS44KWN4KS1fOCljeCkpOCkv3zgpLjgpL7gpK584KWL4KSo4KWLfOCkleCli+CkqHwg4KS14KWNfOCksCDgpIV84KWN4KSuIHwg4KS14KS/fCDgpLjgpLl84KWHIOCkrnzgpJXgpY3gpKR84KSv4KWL4KSXfOCksCDgpLV84KSV4KS+4KSufOCksiDgpLl8IOCkqOCkv3zgpKbgpYfgpLZ84KSq4KWC4KSwfOCkteCkvuCksHwg4KSHIHzgpILgpLDgpJV84KS44KSC4KSwfOCkjyDgpJV84KSwIOCkqnwg4KS44KWBfOCkpOCkguCkpHzgpLXgpKTgpIJ84KWN4KS14KSkfOCkviDgpK584KS1IOCklXzgpYcg4KS1fOCkvuCkpSB84KS44KS+4KSlfCDgpKbgpYt84KS54KWL4KSsfCDgpKrgpL584KWLIOCklXzgpYcg4KSsfOCli+CklyB8IOCkieCkqnzgpLjgpY3gpKR84KSq4KSw4KS/fOCkqCDgpKp84KWHIOCkpHzgpY3gpKTgpLB84KSy4KWH4KSyfOClhyDgpJN84KSa4KS+4KS5fCDgpJrgpL584KSvIOCklXzgpLXgpL4gfOClh+CktiB84KSvIOCkuHzgpKgg4KS5fOCkt+CkoyB84KS+IOCkrHzgpaQg4KSkfOCkj+CklSB84KSP4KSyIHzgpYDgpK8gfOCkleClh+CklXzgpYcg4KS5fOCksCDgpIZ84KS/IOCklXzgpLjgpY3gpKV84KSc4KS/4KSVfOCkvuCknOCkv3zgpL7gpK7gpL584KSw4KWA4KSvfOCljeCksOClgHzgpKTgpL/gpJV84KS+4KSk4KS/fCDgpKzgpL984KSa4KS+4KSwfOClhyDgpIZ84KS+4KS4IHwg4KSJ4KSafOCkviDgpKR84KSv4KSV4KWNfOCljeCkr+CklXzgpL/gpLIgfOCkruCkryB84KS44KSu4KSvfOCktuCkvuCkpnzgpKrgpK/gpYt84KSJ4KSq4KSvfOClhyDgpJZ84KSw4KS/4KS1fCDgpKrgpYJ84KWHIOCksnzgpYcg4KSafOCljOCkqOCli3zgpJXgpYzgpKh8IOCkleCljHzgpIIg4KSVfOCkuOCkguCkl3zgpKgg4KSmfOCkgiDgpLh84KSjIOCkqnzgpY3gpLfgpKN84KSwIOCkqHzgpYcg4KSofOCliyDgpK184KSV4KSw4KWLfOCkviDgpJR84KSw4KSk4KS+fOCkvuCktSB84KSt4KS+4KS1fOCklSDgpJR84KSw4KWN4KSufOCli+CkuOCksHzgpKbgpYvgpLh84KSjIOCklXzgpYcg4KSqfOCkqCDgpJR84KSsIOCkuXzgpL/gpJXgpY184KS24KS/4KSVfCDgpLbgpL984KS+4KSs4KWHfOCkqOCkv+Ckr3zgpJrgpL/gpKR84KSJ4KSa4KS/fOCkv+CkpOCljXzgpJcg4KSVfOClh+ClpCB84KSkIOCkuHzgpYAg4KS2fOCkgiDgpLZ84KSP4KSV4KSwfOClpCDgpI984KSk4KSoIHwg4KSTIHzgpLDgpYAgfOCljeCksCB84KSc4KWHIHzgpJUg4KSVfCDgpLjgpYB84KS44KSoIHzgpL/gpLXgpL58IOCkheCkqHzgpYLgpLDgpL58IOCkrOCkmnzgpI/gpaQgfCDgpKzgpYd84KSkIOCkuXwg4KSk4KSVfCDgpK7gpL984KSn4KS+4KSwfOCkpeCkteCkvnzgpIXgpKXgpLV8IOCkheCkpXzgpL/gpLLgpL584KWN4KS14KS+fOCkvyDgpK58IOCkhuCkpnzgpKjgpYcgfOCkleCkj+Cksnwg4KSV4KSPfOCljeCkr+CkvidcbiAgfVxufVxuIiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBgYnVpbGQuanNgLlxuLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBSZWdFeHA+fSAqL1xuZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25zID0ge1xuICBjbW46IC9bXFx1MkU4MC1cXHUyRTk5XFx1MkU5Qi1cXHUyRUYzXFx1MkYwMC1cXHUyRkQ1XFx1MzAwNVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDM4LVxcdTMwM0JcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGRkZcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDldfFxcdUQ4MUJbXFx1REZFMlxcdURGRTNcXHVERkYwXFx1REZGMV18W1xcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q1xcdUQ4NkYtXFx1RDg3MlxcdUQ4NzQtXFx1RDg3OVxcdUQ4ODAtXFx1RDg4M1xcdUQ4ODUtXFx1RDg4N11bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVERlxcdURGMDAtXFx1REZGRl18XFx1RDg2RFtcXHVEQzAwLVxcdURGMzlcXHVERjQwLVxcdURGRkZdfFxcdUQ4NkVbXFx1REMwMC1cXHVEQzFEXFx1REMyMC1cXHVERkZGXXxcXHVEODczW1xcdURDMDAtXFx1REVBMVxcdURFQjAtXFx1REZGRl18XFx1RDg3QVtcXHVEQzAwLVxcdURGRTBdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEODg0W1xcdURDMDAtXFx1REY0QVxcdURGNTAtXFx1REZGRl18XFx1RDg4OFtcXHVEQzAwLVxcdURGQUZdL2csXG4gIExhdGluOlxuICAgIC9bQS1aYS16XFx1MDBBQVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQjhcXHUwMkUwLVxcdTAyRTRcXHUxRDAwLVxcdTFEMjVcXHUxRDJDLVxcdTFENUNcXHUxRDYyLVxcdTFENjVcXHUxRDZCLVxcdTFENzdcXHUxRDc5LVxcdTFEQkVcXHUxRTAwLVxcdTFFRkZcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMkFcXHUyMTJCXFx1MjEzMlxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyQzYwLVxcdTJDN0ZcXHVBNzIyLVxcdUE3ODdcXHVBNzhCLVxcdUE3Q0FcXHVBN0QwXFx1QTdEMVxcdUE3RDNcXHVBN0Q1LVxcdUE3RDlcXHVBN0YyLVxcdUE3RkZcXHVBQjMwLVxcdUFCNUFcXHVBQjVDLVxcdUFCNjRcXHVBQjY2LVxcdUFCNjlcXHVGQjAwLVxcdUZCMDZcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFdfFxcdUQ4MDFbXFx1REY4MC1cXHVERjg1XFx1REY4Ny1cXHVERkIwXFx1REZCMi1cXHVERkJBXXxcXHVEODM3W1xcdURGMDAtXFx1REYxRVxcdURGMjUtXFx1REYyQV0vZyxcbiAgQ3lyaWxsaWM6XG4gICAgL1tcXHUwNDAwLVxcdTA0ODRcXHUwNDg3LVxcdTA1MkZcXHUxQzgwLVxcdTFDODhcXHUxRDJCXFx1MUQ3OFxcdTJERTAtXFx1MkRGRlxcdUE2NDAtXFx1QTY5RlxcdUZFMkVcXHVGRTJGXXxcXHVEODM4W1xcdURDMzAtXFx1REM2RFxcdURDOEZdL2csXG4gIEFyYWJpYzpcbiAgICAvW1xcdTA2MDAtXFx1MDYwNFxcdTA2MDYtXFx1MDYwQlxcdTA2MEQtXFx1MDYxQVxcdTA2MUMtXFx1MDYxRVxcdTA2MjAtXFx1MDYzRlxcdTA2NDEtXFx1MDY0QVxcdTA2NTYtXFx1MDY2RlxcdTA2NzEtXFx1MDZEQ1xcdTA2REUtXFx1MDZGRlxcdTA3NTAtXFx1MDc3RlxcdTA4NzAtXFx1MDg4RVxcdTA4OTBcXHUwODkxXFx1MDg5OC1cXHUwOEUxXFx1MDhFMy1cXHUwOEZGXFx1RkI1MC1cXHVGQkMyXFx1RkJEMy1cXHVGRDNEXFx1RkQ0MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRDRlxcdUZERjAtXFx1RkRGRlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ118XFx1RDgwM1tcXHVERTYwLVxcdURFN0VcXHVERUZELVxcdURFRkZdfFxcdUQ4M0JbXFx1REUwMC1cXHVERTAzXFx1REUwNS1cXHVERTFGXFx1REUyMVxcdURFMjJcXHVERTI0XFx1REUyN1xcdURFMjktXFx1REUzMlxcdURFMzQtXFx1REUzN1xcdURFMzlcXHVERTNCXFx1REU0MlxcdURFNDdcXHVERTQ5XFx1REU0QlxcdURFNEQtXFx1REU0RlxcdURFNTFcXHVERTUyXFx1REU1NFxcdURFNTdcXHVERTU5XFx1REU1QlxcdURFNURcXHVERTVGXFx1REU2MVxcdURFNjJcXHVERTY0XFx1REU2Ny1cXHVERTZBXFx1REU2Qy1cXHVERTcyXFx1REU3NC1cXHVERTc3XFx1REU3OS1cXHVERTdDXFx1REU3RVxcdURFODAtXFx1REU4OVxcdURFOEItXFx1REU5QlxcdURFQTEtXFx1REVBM1xcdURFQTUtXFx1REVBOVxcdURFQUItXFx1REVCQlxcdURFRjBcXHVERUYxXS9nLFxuICBiZW46IC9bXFx1MDk4MC1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RkVdL2csXG4gIERldmFuYWdhcmk6XG4gICAgL1tcXHUwOTAwLVxcdTA5NTBcXHUwOTU1LVxcdTA5NjNcXHUwOTY2LVxcdTA5N0ZcXHVBOEUwLVxcdUE4RkZdfFxcdUQ4MDZbXFx1REYwMC1cXHVERjA5XS9nLFxuICBqcG46IC9bXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXXxcXHVEODJDW1xcdURDMDEtXFx1REQxRlxcdUREMzJcXHVERDUwLVxcdURENTJdfFxcdUQ4M0NcXHVERTAwfFtcXHUzMEExLVxcdTMwRkFcXHUzMEZELVxcdTMwRkZcXHUzMUYwLVxcdTMxRkZcXHUzMkQwLVxcdTMyRkVcXHUzMzAwLVxcdTMzNTdcXHVGRjY2LVxcdUZGNkZcXHVGRjcxLVxcdUZGOURdfFxcdUQ4MkJbXFx1REZGMC1cXHVERkYzXFx1REZGNS1cXHVERkZCXFx1REZGRFxcdURGRkVdfFxcdUQ4MkNbXFx1REMwMFxcdUREMjAtXFx1REQyMlxcdURENTVcXHVERDY0LVxcdURENjddfFtcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQUZdL2csXG4gIGphdjogL1tcXHVBOTgwLVxcdUE5Q0RcXHVBOUQwLVxcdUE5RDlcXHVBOURFXFx1QTlERl0vZyxcbiAga29yOiAvW1xcdTExMDAtXFx1MTFGRlxcdTMwMkVcXHUzMDJGXFx1MzEzMS1cXHUzMThFXFx1MzIwMC1cXHUzMjFFXFx1MzI2MC1cXHUzMjdFXFx1QTk2MC1cXHVBOTdDXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RkZBMC1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXS9nLFxuICB0ZWw6IC9bXFx1MEMwMC1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzM5XFx1MEMzQy1cXHUwQzQ0XFx1MEM0Ni1cXHUwQzQ4XFx1MEM0QS1cXHUwQzREXFx1MEM1NVxcdTBDNTZcXHUwQzU4LVxcdTBDNUFcXHUwQzVEXFx1MEM2MC1cXHUwQzYzXFx1MEM2Ni1cXHUwQzZGXFx1MEM3Ny1cXHUwQzdGXS9nLFxuICB0YW06IC9bXFx1MEI4MlxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEMFxcdTBCRDdcXHUwQkU2LVxcdTBCRkFdfFxcdUQ4MDdbXFx1REZDMC1cXHVERkYxXFx1REZGRl0vZyxcbiAgZ3VqOiAvW1xcdTBBODEtXFx1MEE4M1xcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCQy1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFEMFxcdTBBRTAtXFx1MEFFM1xcdTBBRTYtXFx1MEFGMVxcdTBBRjktXFx1MEFGRl0vZyxcbiAga2FuOiAvW1xcdTBDODAtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkMtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENERFxcdTBDREVcXHUwQ0UwLVxcdTBDRTNcXHUwQ0U2LVxcdTBDRUZcXHUwQ0YxLVxcdTBDRjNdL2csXG4gIG1hbDogL1tcXHUwRDAwLVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBENDRcXHUwRDQ2LVxcdTBENDhcXHUwRDRBLVxcdTBENEZcXHUwRDU0LVxcdTBENjNcXHUwRDY2LVxcdTBEN0ZdL2csXG4gIG15YTogL1tcXHUxMDAwLVxcdTEwOUZcXHVBOUUwLVxcdUE5RkVcXHVBQTYwLVxcdUFBN0ZdL2csXG4gIHBhbjogL1tcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE2Ni1cXHUwQTc2XS9nLFxuICBhbWg6IC9bXFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzVELVxcdTEzN0NcXHUxMzgwLVxcdTEzOTlcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVdfFxcdUQ4MzlbXFx1REZFMC1cXHVERkU2XFx1REZFOC1cXHVERkVCXFx1REZFRFxcdURGRUVcXHVERkYwLVxcdURGRkVdL2csXG4gIHRoYTogL1tcXHUwRTAxLVxcdTBFM0FcXHUwRTQwLVxcdTBFNUJdL2csXG4gIHNpbjogL1tcXHUwRDgxLVxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREU2LVxcdTBERUZcXHUwREYyLVxcdTBERjRdfFxcdUQ4MDRbXFx1RERFMS1cXHVEREY0XS9nLFxuICBlbGw6IC9bXFx1MDM3MC1cXHUwMzczXFx1MDM3NS1cXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM3RlxcdTAzODRcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNFMVxcdTAzRjAtXFx1MDNGRlxcdTFEMjYtXFx1MUQyQVxcdTFENUQtXFx1MUQ2MVxcdTFENjYtXFx1MUQ2QVxcdTFEQkZcXHUxRjAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQzRcXHUxRkM2LVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkRELVxcdTFGRUZcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkVcXHUyMTI2XFx1QUI2NV18XFx1RDgwMFtcXHVERDQwLVxcdUREOEVcXHVEREEwXXxcXHVEODM0W1xcdURFMDAtXFx1REU0NV0vZ1xufVxuIiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBgYnVpbGQuanNgXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3RyaWdyYW0tdXRpbHMnKS5UcmlncmFtVHVwbGV9IFRyaWdyYW1UdXBsZVxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gW29ubHldXG4gKiAgIExhbmd1YWdlcyB0byBhbGxvdy5cbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gW2lnbm9yZV1cbiAqICAgTGFuZ3VhZ2VzIHRvIGlnbm9yZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluTGVuZ3RoPTEwXVxuICogICBNaW5pbXVtIGxlbmd0aCB0byBhY2NlcHQuXG4gKi9cblxuLyogTG9hZCBgdHJpZ3JhbS11dGlsc2AuICovXG5pbXBvcnQge2FzVHVwbGVzfSBmcm9tICd0cmlncmFtLXV0aWxzJ1xuLyogTG9hZCBgZXhwcmVzc2lvbnNgIChyZWd1bGFyIGV4cHJlc3Npb25zIG1hdGNoaW5nXG4gKiBzY3JpcHRzKS4gKi9cbmltcG9ydCB7ZXhwcmVzc2lvbnN9IGZyb20gJy4vZXhwcmVzc2lvbnMuanMnXG4vKiBMb2FkIGBkYXRhYCAodHJpZ3JhbSBpbmZvcm1hdGlvbiBwZXIgbGFuZ3VhZ2UsXG4gKiBwZXIgc2NyaXB0KS4gKi9cbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhLmpzJ1xuXG4vKiBNYXhpbXVtIHNhbXBsZSBsZW5ndGguICovXG5jb25zdCBNQVhfTEVOR1RIID0gMjA0OFxuXG4vKiBNaW5pbXVtIHNhbXBsZSBsZW5ndGguICovXG5jb25zdCBNSU5fTEVOR1RIID0gMTBcblxuLyogVGhlIG1heGltdW0gZGlzdGFuY2UgdG8gYWRkIHdoZW4gYSBnaXZlbiB0cmlncmFtIGRvZXNcbiAqIG5vdCBleGlzdCBpbiBhIHRyaWdyYW0gZGljdGlvbmFyeS4gKi9cbmNvbnN0IE1BWF9ESUZGRVJFTkNFID0gMzAwXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qIENvbnN0cnVjdCB0cmlncmFtIGRpY3Rpb25hcmllcy4gKi9cblxuLyoqIEB0eXBlIHtzdHJpbmd9ICovXG5sZXQgc2NyaXB0XG5cbi8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj4+fSAqL1xuY29uc3QgbnVtZXJpY0RhdGEgPSB7fVxuXG5mb3IgKHNjcmlwdCBpbiBkYXRhKSB7XG4gIGlmIChvd24uY2FsbChkYXRhLCBzY3JpcHQpKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gZGF0YVtzY3JpcHRdXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IG5hbWVcblxuICAgIG51bWVyaWNEYXRhW3NjcmlwdF0gPSB7fVxuXG4gICAgZm9yIChuYW1lIGluIGxhbmd1YWdlcykge1xuICAgICAgaWYgKG93bi5jYWxsKGxhbmd1YWdlcywgbmFtZSkpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBsYW5ndWFnZXNbbmFtZV0uc3BsaXQoJ3wnKVxuICAgICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIG51bWJlcj59ICovXG4gICAgICAgIGNvbnN0IHRyaWdyYW1zID0ge31cbiAgICAgICAgbGV0IHdlaWdodCA9IG1vZGVsLmxlbmd0aFxuXG4gICAgICAgIHdoaWxlICh3ZWlnaHQtLSkge1xuICAgICAgICAgIHRyaWdyYW1zW21vZGVsW3dlaWdodF1dID0gd2VpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBudW1lcmljRGF0YVtzY3JpcHRdW25hbWVdID0gdHJpZ3JhbXNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1vc3QgcHJvYmFibGUgbGFuZ3VhZ2UgZm9yIHRoZSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxuICogICBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgVGhlIG1vc3QgcHJvYmFibGUgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmFuYyh2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZnJhbmNBbGwodmFsdWUsIG9wdGlvbnMpWzBdWzBdXG59XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBwcm9iYWJsZSBsYW5ndWFnZXMgdGhlIGdpdmVuIHZhbHVlIGlzXG4gKiB3cml0dGVuIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiAgIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5PFRyaWdyYW1UdXBsZT59XG4gKiAgIEFuIGFycmF5IGNvbnRhaW5pbmcgbGFuZ3VhZ2XigJRkaXN0YW5jZSB0dXBsZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmFuY0FsbCh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYHdoaXRlbGlzdGAgaXMgZnJvbSBsb25nIGFnby5cbiAgY29uc3Qgb25seSA9IFsuLi4ob3B0aW9ucy53aGl0ZWxpc3QgfHwgW10pLCAuLi4ob3B0aW9ucy5vbmx5IHx8IFtdKV1cbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgYmxhY2tsaXN0YCBpcyBmcm9tIGxvbmcgYWdvLlxuICBjb25zdCBpZ25vcmUgPSBbLi4uKG9wdGlvbnMuYmxhY2tsaXN0IHx8IFtdKSwgLi4uKG9wdGlvbnMuaWdub3JlIHx8IFtdKV1cbiAgY29uc3QgbWluTGVuZ3RoID1cbiAgICBvcHRpb25zLm1pbkxlbmd0aCAhPT0gbnVsbCAmJiBvcHRpb25zLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IG9wdGlvbnMubWluTGVuZ3RoXG4gICAgICA6IE1JTl9MRU5HVEhcblxuICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgIHJldHVybiB1bmQoKVxuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBNQVhfTEVOR1RIKVxuXG4gIC8qIEdldCB0aGUgc2NyaXB0IHdoaWNoIGNoYXJhY3RlcnMgb2NjdXIgdGhlIG1vc3RcbiAgICogaW4gYHZhbHVlYC4gKi9cbiAgY29uc3Qgc2NyaXB0ID0gZ2V0VG9wU2NyaXB0KHZhbHVlLCBleHByZXNzaW9ucylcblxuICAvKiBPbmUgbGFuZ3VhZ2VzIGV4aXN0cyBmb3IgdGhlIG1vc3QtdXNlZCBzY3JpcHQuICovXG4gIGlmICghc2NyaXB0WzBdIHx8ICEoc2NyaXB0WzBdIGluIG51bWVyaWNEYXRhKSkge1xuICAgIC8qIElmIG5vIG1hdGNoZXMgb2NjdXJlZCwgc3VjaCBhcyBhIGRpZ2l0IG9ubHkgc3RyaW5nLFxuICAgICAqIG9yIGJlY2F1c2UgdGhlIGxhbmd1YWdlIGlzIGlnbm9yZWQsIGV4aXQgd2l0aCBgdW5kYC4gKi9cbiAgICBpZiAoIXNjcmlwdFswXSB8fCBzY3JpcHRbMV0gPT09IDAgfHwgIWFsbG93KHNjcmlwdFswXSwgb25seSwgaWdub3JlKSkge1xuICAgICAgcmV0dXJuIHVuZCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmdsZUxhbmd1YWdlVHVwbGVzKHNjcmlwdFswXSlcbiAgfVxuXG4gIC8qIEdldCBhbGwgZGlzdGFuY2VzIGZvciBhIGdpdmVuIHNjcmlwdCwgYW5kXG4gICAqIG5vcm1hbGl6ZSB0aGUgZGlzdGFuY2UgdmFsdWVzLiAqL1xuICByZXR1cm4gbm9ybWFsaXplKFxuICAgIHZhbHVlLFxuICAgIGdldERpc3RhbmNlcyhhc1R1cGxlcyh2YWx1ZSksIG51bWVyaWNEYXRhW3NjcmlwdFswXV0sIG9ubHksIGlnbm9yZSlcbiAgKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZGlmZmVyZW5jZSBmb3IgZWFjaCB0dXBsZSBpblxuICogYGRpc3RhbmNlc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAqIEBwYXJhbSB7QXJyYXk8VHJpZ3JhbVR1cGxlPn0gZGlzdGFuY2VzXG4gKiAgIExpc3Qgb2YgZGlzdGFuY2VzLlxuICogQHJldHVybiB7QXJyYXk8VHJpZ3JhbVR1cGxlPn1cbiAqICAgTm9ybWFsaXplZCBkaXN0YW5jZXMuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgZGlzdGFuY2VzKSB7XG4gIGNvbnN0IG1pbiA9IGRpc3RhbmNlc1swXVsxXVxuICBjb25zdCBtYXggPSB2YWx1ZS5sZW5ndGggKiBNQVhfRElGRkVSRU5DRSAtIG1pblxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZGlzdGFuY2VzLmxlbmd0aCkge1xuICAgIGRpc3RhbmNlc1tpbmRleF1bMV0gPSAxIC0gKGRpc3RhbmNlc1tpbmRleF1bMV0gLSBtaW4pIC8gbWF4IHx8IDBcbiAgfVxuXG4gIHJldHVybiBkaXN0YW5jZXNcbn1cblxuLyoqXG4gKiBGcm9tIGBzY3JpcHRzYCwgZ2V0IHRoZSBtb3N0IG9jY3VycmluZyBleHByZXNzaW9uIGZvclxuICogYHZhbHVlYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFJlZ0V4cD59IHNjcmlwdHNcbiAqICAgVG9wLVNjcmlwdHMuXG4gKiBAcmV0dXJuIHtbc3RyaW5nfHVuZGVmaW5lZCwgbnVtYmVyXX1cbiAqICAgVG9wIHNjcmlwdCBhbmQgaXRzIG9jY3VycmVuY2UgcGVyY2VudGFnZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VG9wU2NyaXB0KHZhbHVlLCBzY3JpcHRzKSB7XG4gIGxldCB0b3BDb3VudCA9IC0xXG4gIC8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgbGV0IHRvcFNjcmlwdFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IHNjcmlwdFxuXG4gIGZvciAoc2NyaXB0IGluIHNjcmlwdHMpIHtcbiAgICBpZiAob3duLmNhbGwoc2NyaXB0cywgc2NyaXB0KSkge1xuICAgICAgY29uc3QgY291bnQgPSBnZXRPY2N1cnJlbmNlKHZhbHVlLCBzY3JpcHRzW3NjcmlwdF0pXG5cbiAgICAgIGlmIChjb3VudCA+IHRvcENvdW50KSB7XG4gICAgICAgIHRvcENvdW50ID0gY291bnRcbiAgICAgICAgdG9wU2NyaXB0ID0gc2NyaXB0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0b3BTY3JpcHQsIHRvcENvdW50XVxufVxuXG4vKipcbiAqIEdldCB0aGUgb2NjdXJyZW5jZSByYXRpbyBvZiBgZXhwcmVzc2lvbmAgZm9yIGB2YWx1ZWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtSZWdFeHB9IGV4cHJlc3Npb25cbiAqICAgQ29kZS1wb2ludCBleHByZXNzaW9uLlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICBGbG9hdCBiZXR3ZWVuIDAgYW5kIDEuXG4gKi9cbmZ1bmN0aW9uIGdldE9jY3VycmVuY2UodmFsdWUsIGV4cHJlc3Npb24pIHtcbiAgY29uc3QgY291bnQgPSB2YWx1ZS5tYXRjaChleHByZXNzaW9uKVxuXG4gIHJldHVybiAoY291bnQgPyBjb3VudC5sZW5ndGggOiAwKSAvIHZhbHVlLmxlbmd0aCB8fCAwXG59XG5cbi8qKlxuICogR2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGFuIGFycmF5IG9mIHRyaWdyYW3igJRjb3VudFxuICogdHVwbGVzLCBhbmQgbXVsdGlwbGUgdHJpZ3JhbSBkaWN0aW9uYXJpZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxUcmlncmFtVHVwbGU+fSB0cmlncmFtc1xuICogICBBbiBhcnJheSBjb250YWluaW5nIHRyaWdyYW3igJRjb3VudCB0dXBsZXMuXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIG51bWJlcj4+fSBsYW5ndWFnZXNcbiAqICAgTXVsdGlwbGUgdHJpZ3JhbXMgdG8gdGVzdCBhZ2FpbnN0LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvbmx5XG4gKiAgIEFsbG93ZWQgbGFuZ3VhZ2VzOyBpZiBub24tZW1wdHksIG9ubHkgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBrZXB0LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVcbiAqICAgRGlzYWxsb3dlZCBsYW5ndWFnZXM7IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUgaWdub3JlZC5cbiAqIEByZXR1cm4ge0FycmF5PFRyaWdyYW1UdXBsZT59IEFuIGFycmF5XG4gKiAgIGNvbnRhaW5pbmcgbGFuZ3VhZ2XigJRkaXN0YW5jZSB0dXBsZXMuXG4gKi9cbmZ1bmN0aW9uIGdldERpc3RhbmNlcyh0cmlncmFtcywgbGFuZ3VhZ2VzLCBvbmx5LCBpZ25vcmUpIHtcbiAgbGFuZ3VhZ2VzID0gZmlsdGVyTGFuZ3VhZ2VzKGxhbmd1YWdlcywgb25seSwgaWdub3JlKVxuXG4gIC8qKiBAdHlwZSB7QXJyYXk8VHJpZ3JhbVR1cGxlPn0gKi9cbiAgY29uc3QgZGlzdGFuY2VzID0gW11cbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCBsYW5ndWFnZVxuXG4gIGlmIChsYW5ndWFnZXMpIHtcbiAgICBmb3IgKGxhbmd1YWdlIGluIGxhbmd1YWdlcykge1xuICAgICAgaWYgKG93bi5jYWxsKGxhbmd1YWdlcywgbGFuZ3VhZ2UpKSB7XG4gICAgICAgIGRpc3RhbmNlcy5wdXNoKFtsYW5ndWFnZSwgZ2V0RGlzdGFuY2UodHJpZ3JhbXMsIGxhbmd1YWdlc1tsYW5ndWFnZV0pXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzdGFuY2VzLmxlbmd0aCA9PT0gMCA/IHVuZCgpIDogZGlzdGFuY2VzLnNvcnQoc29ydClcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gYW4gYXJyYXkgb2YgdHJpZ3JhbeKAlGNvdW50XG4gKiB0dXBsZXMsIGFuZCBhIGxhbmd1YWdlIGRpY3Rpb25hcnkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxUcmlncmFtVHVwbGU+fSB0cmlncmFtc1xuICogICBBbiBhcnJheSBjb250YWluaW5nIHRyaWdyYW3igJRjb3VudCB0dXBsZXMuXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIG51bWJlcj59IG1vZGVsXG4gKiAgIE9iamVjdCBjb250YWluaW5nIHdlaWdodGVkIHRyaWdyYW1zLlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICovXG5mdW5jdGlvbiBnZXREaXN0YW5jZSh0cmlncmFtcywgbW9kZWwpIHtcbiAgbGV0IGRpc3RhbmNlID0gMFxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdHJpZ3JhbXMubGVuZ3RoKSB7XG4gICAgY29uc3QgdHJpZ3JhbSA9IHRyaWdyYW1zW2luZGV4XVxuICAgIGxldCBkaWZmZXJlbmNlID0gTUFYX0RJRkZFUkVOQ0VcblxuICAgIGlmICh0cmlncmFtWzBdIGluIG1vZGVsKSB7XG4gICAgICBkaWZmZXJlbmNlID0gdHJpZ3JhbVsxXSAtIG1vZGVsW3RyaWdyYW1bMF1dIC0gMVxuXG4gICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIHtcbiAgICAgICAgZGlmZmVyZW5jZSA9IC1kaWZmZXJlbmNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzdGFuY2UgKz0gZGlmZmVyZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRpc3RhbmNlXG59XG5cbi8qKlxuICogRmlsdGVyIGBsYW5ndWFnZXNgIGJ5IHJlbW92aW5nIGxhbmd1YWdlcyBpblxuICogYGlnbm9yZWAsIG9yIGluY2x1ZGluZyBsYW5ndWFnZXMgaW4gYG9ubHlgLlxuICpcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj59IGxhbmd1YWdlc1xuICogICBMYW5ndWFnZXMgdG8gZmlsdGVyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9ubHlcbiAqICAgQWxsb3dlZCBsYW5ndWFnZXM7IGlmIG5vbi1lbXB0eSwgb25seSBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGtlcHQuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVxuICogICBEaXNhbGxvd2VkIGxhbmd1YWdlczsgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBpZ25vcmVkLlxuICogQHJldHVybiB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj59XG4gKiAgIEZpbHRlcmVkIGFycmF5IG9mIGxhbmd1YWdlcy5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyTGFuZ3VhZ2VzKGxhbmd1YWdlcywgb25seSwgaWdub3JlKSB7XG4gIGlmIChvbmx5Lmxlbmd0aCA9PT0gMCAmJiBpZ25vcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxhbmd1YWdlc1xuICB9XG5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pn0gKi9cbiAgY29uc3QgZmlsdGVyZWRMYW5ndWFnZXMgPSB7fVxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IGxhbmd1YWdlXG5cbiAgZm9yIChsYW5ndWFnZSBpbiBsYW5ndWFnZXMpIHtcbiAgICBpZiAoYWxsb3cobGFuZ3VhZ2UsIG9ubHksIGlnbm9yZSkpIHtcbiAgICAgIGZpbHRlcmVkTGFuZ3VhZ2VzW2xhbmd1YWdlXSA9IGxhbmd1YWdlc1tsYW5ndWFnZV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRMYW5ndWFnZXNcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgbGFuZ3VhZ2VgIGNhbiBtYXRjaCBhY2NvcmRpbmcgdG8gc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gKiAgIExhbmd1YWdlcyB0byBmaWx0ZXJcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb25seVxuICogICBBbGxvd2VkIGxhbmd1YWdlczsgaWYgbm9uLWVtcHR5LCBvbmx5IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUga2VwdC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlXG4gKiAgIERpc2FsbG93ZWQgbGFuZ3VhZ2VzOyBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICBXaGV0aGVyIGBsYW5ndWFnZWAgY2FuIG1hdGNoXG4gKi9cbmZ1bmN0aW9uIGFsbG93KGxhbmd1YWdlLCBvbmx5LCBpZ25vcmUpIHtcbiAgaWYgKG9ubHkubGVuZ3RoID09PSAwICYmIGlnbm9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAob25seS5sZW5ndGggPT09IDAgfHwgb25seS5pbmNsdWRlcyhsYW5ndWFnZSkpICYmICFpZ25vcmUuaW5jbHVkZXMobGFuZ3VhZ2UpXG4gIClcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzaW5nbGUgYHVuZGAgdHVwbGUuXG4gKi9cbmZ1bmN0aW9uIHVuZCgpIHtcbiAgcmV0dXJuIHNpbmdsZUxhbmd1YWdlVHVwbGVzKCd1bmQnKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNpbmdsZSB0dXBsZSBhcyBhIGxpc3Qgb2YgdHVwbGVzIGZyb20gYSBnaXZlbiBsYW5ndWFnZSBjb2RlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICogQHJldHVybnMge0FycmF5PFRyaWdyYW1UdXBsZT59XG4gKi9cbmZ1bmN0aW9uIHNpbmdsZUxhbmd1YWdlVHVwbGVzKGxhbmd1YWdlKSB7XG4gIHJldHVybiBbW2xhbmd1YWdlLCAxXV1cbn1cblxuLyoqXG4gKiBEZWVwIHJlZ3VsYXIgc29ydCBvbiB0aGUgbnVtYmVyIGF0IGAxYCBpbiBib3RoIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtUcmlncmFtVHVwbGV9IGFcbiAqIEBwYXJhbSB7VHJpZ3JhbVR1cGxlfSBiXG4gKi9cbmZ1bmN0aW9uIHNvcnQoYSwgYikge1xuICByZXR1cm4gYVsxXSAtIGJbMV1cbn1cbiIsImV4cG9ydCBjb25zdCBiaWdyYW0gPSBuR3JhbSgyKVxuZXhwb3J0IGNvbnN0IHRyaWdyYW0gPSBuR3JhbSgzKVxuXG4vKipcbiAqIEZhY3RvcnkgcmV0dXJuaW5nIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIHZhbHVlIHN0cmluZyB0byBuLWdyYW1zLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuR3JhbShuKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgbiAhPT0gJ251bWJlcicgfHxcbiAgICBOdW1iZXIuaXNOYU4obikgfHxcbiAgICBuIDwgMSB8fFxuICAgIG4gPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgbiArICdgIGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciBgbi1ncmFtYCcpXG4gIH1cblxuICByZXR1cm4gZ3JhbXNcblxuICAvKipcbiAgICogQ3JlYXRlIG4tZ3JhbXMgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICAgKlxuICAgKiBAdGVtcGxhdGUge3N0cmluZ3xBcnJheTx1bmtub3duPn0gVFxuICAgKiBAcGFyYW0ge1R9IFt2YWx1ZV1cbiAgICogQHJldHVybnMge1QgZXh0ZW5kcyBhbnlbXSA/IFQgOiBBcnJheTxzdHJpbmc+fVxuICAgKi9cbiAgZnVuY3Rpb24gZ3JhbXModmFsdWUpIHtcbiAgICAvKiogQHR5cGUge1QgZXh0ZW5kcyBhbnlbXSA/IFQgOiBBcnJheTxzdHJpbmc+fSAqL1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHByZXR0eSBzdXJlIHRoaXMgaXMgZmluZS5cbiAgICBjb25zdCBuR3JhbXMgPSBbXVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuR3JhbXNcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2UgPSB0eXBlb2YgdmFsdWUuc2xpY2UgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSlcbiAgICBsZXQgaW5kZXggPSBzb3VyY2UubGVuZ3RoIC0gbiArIDFcblxuICAgIGlmIChpbmRleCA8IDEpIHtcbiAgICAgIHJldHVybiBuR3JhbXNcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgbkdyYW1zW2luZGV4XSA9IHNvdXJjZS5zbGljZShpbmRleCwgaW5kZXggKyBuKVxuICAgIH1cblxuICAgIHJldHVybiBuR3JhbXNcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIEB0eXBlZGVmIHtbc3RyaW5nLCBudW1iZXJdfSBUcmlncmFtVHVwbGVcbiAqIEB0eXBlZGVmIHtUcmlncmFtVHVwbGVbXX0gVHJpZ3JhbVR1cGxlc1xuICogQHR5cGVkZWYge1JlY29yZDxzdHJpbmcsIG51bWJlcj59IFRyaWdyYW1EaWN0aW9uYXJ5XG4gKi9cblxuaW1wb3J0IHt0cmlncmFtfSBmcm9tICduLWdyYW0nXG5pbXBvcnQge2NvbGxhcHNlV2hpdGVTcGFjZX0gZnJvbSAnY29sbGFwc2Utd2hpdGUtc3BhY2UnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQ2xlYW4gYHZhbHVlYC5cbiAqIFJlbW92ZWQgZ2VuZXJhbCBub24taW1wb3J0YW50IChhcyBpbiwgZm9yIGxhbmd1YWdlIGRldGVjdGlvbikgcHVuY3R1YXRpb25cbiAqIG1hcmtzLCBzeW1ib2xzLCBhbmQgZGlnaXRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmV0dXJuIGNvbGxhcHNlV2hpdGVTcGFjZShTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1tcXHUwMDIxLVxcdTAwNDBdKy9nLCAnICcpKVxuICAgIC50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIEdldCBjbGVhbiwgcGFkZGVkLCB0cmlncmFtcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpZ3JhbXModmFsdWUpIHtcbiAgcmV0dXJuIHRyaWdyYW0oJyAnICsgY2xlYW4odmFsdWUpICsgJyAnKVxufVxuXG4vKipcbiAqIEdldCBhbiBgT2JqZWN0YCB3aXRoIHRyaWdyYW1zIGFzIGl0cyBhdHRyaWJ1dGVzLCBhbmQgdGhlaXIgb2NjdXJlbmNlIGNvdW50IGFzXG4gKiB0aGVpciB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7VHJpZ3JhbURpY3Rpb25hcnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc0RpY3Rpb25hcnkodmFsdWUpIHtcbiAgY29uc3QgdmFsdWVzID0gdHJpZ3JhbXModmFsdWUpXG4gIC8qKiBAdHlwZSB7VHJpZ3JhbURpY3Rpb25hcnl9ICovXG4gIGNvbnN0IGRpY3Rpb25hcnkgPSB7fVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgIGlmIChvd24uY2FsbChkaWN0aW9uYXJ5LCB2YWx1ZXNbaW5kZXhdKSkge1xuICAgICAgZGljdGlvbmFyeVt2YWx1ZXNbaW5kZXhdXSsrXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpY3Rpb25hcnlbdmFsdWVzW2luZGV4XV0gPSAxXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpY3Rpb25hcnlcbn1cblxuLyoqXG4gKiBHZXQgYW4gYEFycmF5YCBjb250YWluaW5nIHRyaWdyYW0tLWNvdW50IHR1cGxlcyBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7VHJpZ3JhbVR1cGxlc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzVHVwbGVzKHZhbHVlKSB7XG4gIGNvbnN0IGRpY3Rpb25hcnkgPSBhc0RpY3Rpb25hcnkodmFsdWUpXG4gIC8qKiBAdHlwZSB7VHJpZ3JhbVR1cGxlc30gKi9cbiAgY29uc3QgdHVwbGVzID0gW11cbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCB0cmlncmFtXG5cbiAgZm9yICh0cmlncmFtIGluIGRpY3Rpb25hcnkpIHtcbiAgICBpZiAob3duLmNhbGwoZGljdGlvbmFyeSwgdHJpZ3JhbSkpIHtcbiAgICAgIHR1cGxlcy5wdXNoKFt0cmlncmFtLCBkaWN0aW9uYXJ5W3RyaWdyYW1dXSlcbiAgICB9XG4gIH1cblxuICB0dXBsZXMuc29ydChzb3J0KVxuXG4gIHJldHVybiB0dXBsZXNcbn1cblxuLyoqXG4gKiBHZXQgYW4gYEFycmF5YCBjb250YWluaW5nIHRyaWdyYW0tLWNvdW50IHR1cGxlcyBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtUcmlncmFtVHVwbGVzfSB0dXBsZXNcbiAqIEByZXR1cm5zIHtUcmlncmFtRGljdGlvbmFyeX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR1cGxlc0FzRGljdGlvbmFyeSh0dXBsZXMpIHtcbiAgLyoqIEB0eXBlIHtUcmlncmFtRGljdGlvbmFyeX0gKi9cbiAgY29uc3QgZGljdGlvbmFyeSA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0dXBsZXMubGVuZ3RoKSB7XG4gICAgZGljdGlvbmFyeVt0dXBsZXNbaW5kZXhdWzBdXSA9IHR1cGxlc1tpbmRleF1bMV1cbiAgfVxuXG4gIHJldHVybiBkaWN0aW9uYXJ5XG59XG5cbi8qKlxuICogRGVlcCByZWd1bGFyIHNvcnQgb24gaXRlbSBhdCBgMWAgaW4gYm90aCBgT2JqZWN0YHMuXG4gKlxuICogQHBhcmFtIHtUcmlncmFtVHVwbGV9IGFcbiAqIEBwYXJhbSB7VHJpZ3JhbVR1cGxlfSBiXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBzb3J0KGEsIGIpIHtcbiAgcmV0dXJuIGFbMV0gLSBiWzFdXG59XG4iLCJleHBvcnQgY29uc3QgcG9rZW1vbnMgPSB7XG5cdGJ1bGJhc2F1cjogMSxcblx0aXZ5c2F1cjogMixcblx0dmVudXNhdXI6IDMsXG5cdGNoYXJtYW5kZXI6IDQsXG5cdGNoYXJtZWxlb246IDUsXG5cdGNoYXJpemFyZDogNixcblx0c3F1aXJ0bGU6IDcsXG5cdHdhcnRvcnRsZTogOCxcblx0Ymxhc3RvaXNlOiA5LFxuXHRjYXRlcnBpZTogMTAsXG5cdG1ldGFwb2Q6IDExLFxuXHRidXR0ZXJmcmVlOiAxMixcblx0d2VlZGxlOiAxMyxcblx0a2FrdW5hOiAxNCxcblx0YmVlZHJpbGw6IDE1LFxuXHRwaWRnZXk6IDE2LFxuXHRwaWRnZW90dG86IDE3LFxuXHRwaWRnZW90OiAxOCxcblx0cmF0dGF0YTogMTksXG5cdHJhdGljYXRlOiAyMCxcblx0c3BlYXJvdzogMjEsXG5cdGZlYXJvdzogMjIsXG5cdGVrYW5zOiAyMyxcblx0YXJib2s6IDI0LFxuXHRwaWthY2h1OiAyNSxcblx0cmFpY2h1OiAyNixcblx0c2FuZHNocmV3OiAyNyxcblx0c2FuZHNsYXNoOiAyOCxcblx0bmlkb3Jhbl9mOiAyOSxcblx0bmlkb3JpbmE6IDMwLFxuXHRuaWRvcXVlZW46IDMxLFxuXHRuaWRvcmFuX206IDMyLFxuXHRuaWRvcmlubzogMzMsXG5cdG5pZG9raW5nOiAzNCxcblx0Y2xlZmFpcnk6IDM1LFxuXHRjbGVmYWJsZTogMzYsXG5cdHZ1bHBpeDogMzcsXG5cdG5pbmV0YWxlczogMzgsXG5cdGppZ2dseXB1ZmY6IDM5LFxuXHR3aWdnbHl0dWZmOiA0MCxcblx0enViYXQ6IDQxLFxuXHRnb2xiYXQ6IDQyLFxuXHRvZGRpc2g6IDQzLFxuXHRnbG9vbTogNDQsXG5cdHZpbGVwbHVtZTogNDUsXG5cdHBhcmFzOiA0Nixcblx0cGFyYXNlY3Q6IDQ3LFxuXHR2ZW5vbmF0OiA0OCxcblx0dmVub21vdGg6IDQ5LFxuXHRkaWdsZXR0OiA1MCxcblx0ZHVndHJpbzogNTEsXG5cdG1lb3d0aDogNTIsXG5cdHBlcnNpYW46IDUzLFxuXHRwc3lkdWNrOiA1NCxcblx0Z29sZHVjazogNTUsXG5cdG1hbmtleTogNTYsXG5cdHByaW1lYXBlOiA1Nyxcblx0Z3Jvd2xpdGhlOiA1OCxcblx0YXJjYW5pbmU6IDU5LFxuXHRwb2xpd2FnOiA2MCxcblx0cG9saXdoaXJsOiA2MSxcblx0cG9saXdyYXRoOiA2Mixcblx0YWJyYTogNjMsXG5cdGthZGFicmE6IDY0LFxuXHRhbGFrYXphbTogNjUsXG5cdG1hY2hvcDogNjYsXG5cdG1hY2hva2U6IDY3LFxuXHRtYWNoYW1wOiA2OCxcblx0YmVsbHNwcm91dDogNjksXG5cdHdlZXBpbmJlbGw6IDcwLFxuXHR2aWN0cmVlYmVsOiA3MSxcblx0dGVudGFjb29sOiA3Mixcblx0dGVudGFjcnVlbDogNzMsXG5cdGdlb2R1ZGU6IDc0LFxuXHRncmF2ZWxlcjogNzUsXG5cdGdvbGVtOiA3Nixcblx0cG9ueXRhOiA3Nyxcblx0cmFwaWRhc2g6IDc4LFxuXHRzbG93cG9rZTogNzksXG5cdHNsb3dicm86IDgwLFxuXHRtYWduZW1pdGU6IDgxLFxuXHRtYWduZXRvbjogODIsXG5cdGZhcmZldGNoZDogODMsXG5cdGRvZHVvOiA4NCxcblx0ZG9kcmlvOiA4NSxcblx0c2VlbDogODYsXG5cdGRld2dvbmc6IDg3LFxuXHRncmltZXI6IDg4LFxuXHRtdWs6IDg5LFxuXHRzaGVsbGRlcjogOTAsXG5cdGNsb3lzdGVyOiA5MSxcblx0Z2FzdGx5OiA5Mixcblx0aGF1bnRlcjogOTMsXG5cdGdlbmdhcjogOTQsXG5cdG9uaXg6IDk1LFxuXHRkcm93emVlOiA5Nixcblx0aHlwbm86IDk3LFxuXHRrcmFiYnk6IDk4LFxuXHRraW5nbGVyOiA5OSxcblx0dm9sdG9yYjogMTAwLFxuXHRlbGVjdHJvZGU6IDEwMSxcblx0ZXhlZ2djdXRlOiAxMDIsXG5cdGV4ZWdndXRvcjogMTAzLFxuXHRjdWJvbmU6IDEwNCxcblx0bWFyb3dhazogMTA1LFxuXHRoaXRtb25sZWU6IDEwNixcblx0aGl0bW9uY2hhbjogMTA3LFxuXHRsaWNraXR1bmc6IDEwOCxcblx0a29mZmluZzogMTA5LFxuXHR3ZWV6aW5nOiAxMTAsXG5cdHJoeWhvcm46IDExMSxcblx0cmh5ZG9uOiAxMTIsXG5cdGNoYW5zZXk6IDExMyxcblx0dGFuZ2VsYTogMTE0LFxuXHRrYW5nYXNraGFuOiAxMTUsXG5cdGhvcnNlYTogMTE2LFxuXHRzZWFkcmE6IDExNyxcblx0Z29sZGVlbjogMTE4LFxuXHRzZWFraW5nOiAxMTksXG5cdHN0YXJ5dTogMTIwLFxuXHRzdGFybWllOiAxMjEsXG5cdG1yX21pbWU6IDEyMixcblx0c2N5dGhlcjogMTIzLFxuXHRqeW54OiAxMjQsXG5cdGVsZWN0YWJ1eno6IDEyNSxcblx0bWFnbWFyOiAxMjYsXG5cdHBpbnNpcjogMTI3LFxuXHR0YXVyb3M6IDEyOCxcblx0bWFnaWthcnA6IDEyOSxcblx0Z3lhcmFkb3M6IDEzMCxcblx0bGFwcmFzOiAxMzEsXG5cdGRpdHRvOiAxMzIsXG5cdGVldmVlOiAxMzMsXG5cdHZhcG9yZW9uOiAxMzQsXG5cdGpvbHRlb246IDEzNSxcblx0ZmxhcmVvbjogMTM2LFxuXHRwb3J5Z29uOiAxMzcsXG5cdG9tYW55dGU6IDEzOCxcblx0b21hc3RhcjogMTM5LFxuXHRrYWJ1dG86IDE0MCxcblx0a2FidXRvcHM6IDE0MSxcblx0YWVyb2RhY3R5bDogMTQyLFxuXHRzbm9ybGF4OiAxNDMsXG5cdGFydGljdW5vOiAxNDQsXG5cdHphcGRvczogMTQ1LFxuXHRtb2x0cmVzOiAxNDYsXG5cdGRyYXRpbmk6IDE0Nyxcblx0ZHJhZ29uYWlyOiAxNDgsXG5cdGRyYWdvbml0ZTogMTQ5LFxuXHRtZXd0d286IDE1MCxcblx0bWV3OiAxNTEsXG5cdGNoaWtvcml0YTogMTUyLFxuXHRiYXlsZWVmOiAxNTMsXG5cdG1lZ2FuaXVtOiAxNTQsXG5cdGN5bmRhcXVpbDogMTU1LFxuXHRxdWlsYXZhOiAxNTYsXG5cdHR5cGhsb3Npb246IDE1Nyxcblx0dG90b2RpbGU6IDE1OCxcblx0Y3JvY29uYXc6IDE1OSxcblx0ZmVyYWxpZ2F0cjogMTYwLFxuXHRzZW50cmV0OiAxNjEsXG5cdGZ1cnJldDogMTYyLFxuXHRob290aG9vdDogMTYzLFxuXHRub2N0b3dsOiAxNjQsXG5cdGxlZHliYTogMTY1LFxuXHRsZWRpYW46IDE2Nixcblx0c3BpbmFyYWs6IDE2Nyxcblx0YXJpYWRvczogMTY4LFxuXHRjcm9iYXQ6IDE2OSxcblx0Y2hpbmNob3U6IDE3MCxcblx0bGFudHVybjogMTcxLFxuXHRwaWNodTogMTcyLFxuXHRjbGVmZmE6IDE3Myxcblx0aWdnbHlidWZmOiAxNzQsXG5cdHRvZ2VwaTogMTc1LFxuXHR0b2dldGljOiAxNzYsXG5cdG5hdHU6IDE3Nyxcblx0eGF0dTogMTc4LFxuXHRtYXJlZXA6IDE3OSxcblx0ZmxhYWZmeTogMTgwLFxuXHRhbXBoYXJvczogMTgxLFxuXHRiZWxsb3Nzb206IDE4Mixcblx0bWFyaWxsOiAxODMsXG5cdGF6dW1hcmlsbDogMTg0LFxuXHRzdWRvd29vZG86IDE4NSxcblx0cG9saXRvZWQ6IDE4Nixcblx0aG9wcGlwOiAxODcsXG5cdHNraXBsb29tOiAxODgsXG5cdGp1bXBsdWZmOiAxODksXG5cdGFpcG9tOiAxOTAsXG5cdHN1bmtlcm46IDE5MSxcblx0c3VuZmxvcmE6IDE5Mixcblx0eWFubWE6IDE5Myxcblx0d29vcGVyOiAxOTQsXG5cdHF1YWdzaXJlOiAxOTUsXG5cdGVzcGVvbjogMTk2LFxuXHR1bWJyZW9uOiAxOTcsXG5cdG11cmtyb3c6IDE5OCxcblx0c2xvd2tpbmc6IDE5OSxcblx0bWlzZHJlYXZ1czogMjAwLFxuXHR1bm93bjogMjAxLFxuXHR3b2JidWZmZXQ6IDIwMixcblx0Z2lyYWZhcmlnOiAyMDMsXG5cdHBpbmVjbzogMjA0LFxuXHRmb3JyZXRyZXNzOiAyMDUsXG5cdGR1bnNwYXJjZTogMjA2LFxuXHRnbGlnYXI6IDIwNyxcblx0c3RlZWxpeDogMjA4LFxuXHRzbnViYnVsbDogMjA5LFxuXHRncmFuYnVsbDogMjEwLFxuXHRxd2lsZmlzaDogMjExLFxuXHRzY2l6b3I6IDIxMixcblx0c2h1Y2tsZTogMjEzLFxuXHRoZXJhY3Jvc3M6IDIxNCxcblx0c25lYXNlbDogMjE1LFxuXHR0ZWRkaXVyc2E6IDIxNixcblx0dXJzYXJpbmc6IDIxNyxcblx0c2x1Z21hOiAyMTgsXG5cdG1hZ2NhcmdvOiAyMTksXG5cdHN3aW51YjogMjIwLFxuXHRwaWxvc3dpbmU6IDIyMSxcblx0Y29yc29sYTogMjIyLFxuXHRyZW1vcmFpZDogMjIzLFxuXHRvY3RpbGxlcnk6IDIyNCxcblx0ZGVsaWJpcmQ6IDIyNSxcblx0bWFudGluZTogMjI2LFxuXHRza2FybW9yeTogMjI3LFxuXHRob3VuZG91cjogMjI4LFxuXHRob3VuZG9vbTogMjI5LFxuXHRraW5nZHJhOiAyMzAsXG5cdHBoYW5weTogMjMxLFxuXHRkb25waGFuOiAyMzIsXG5cdHBvcnlnb24yOiAyMzMsXG5cdHN0YW50bGVyOiAyMzQsXG5cdHNtZWFyZ2xlOiAyMzUsXG5cdHR5cm9ndWU6IDIzNixcblx0aGl0bW9udG9wOiAyMzcsXG5cdHNtb29jaHVtOiAyMzgsXG5cdGVsZWtpZDogMjM5LFxuXHRtYWdieTogMjQwLFxuXHRtaWx0YW5rOiAyNDEsXG5cdGJsaXNzZXk6IDI0Mixcblx0cmFpa291OiAyNDMsXG5cdGVudGVpOiAyNDQsXG5cdHN1aWN1bmU6IDI0NSxcblx0bGFydml0YXI6IDI0Nixcblx0cHVwaXRhcjogMjQ3LFxuXHR0eXJhbml0YXI6IDI0OCxcblx0bHVnaWE6IDI0OSxcblx0XCJoby1vaFwiOiAyNTAsXG5cdGNlbGViaTogMjUxLFxuXHR0cmVlY2tvOiAyNTIsXG5cdGdyb3Z5bGU6IDI1Myxcblx0c2NlcHRpbGU6IDI1NCxcblx0dG9yY2hpYzogMjU1LFxuXHRjb21idXNrZW46IDI1Nixcblx0YmxhemlrZW46IDI1Nyxcblx0bXVka2lwOiAyNTgsXG5cdG1hcnNodG9tcDogMjU5LFxuXHRzd2FtcGVydDogMjYwLFxuXHRwb29jaHllbmE6IDI2MSxcblx0bWlnaHR5ZW5hOiAyNjIsXG5cdHppZ3phZ29vbjogMjYzLFxuXHRsaW5vb25lOiAyNjQsXG5cdHd1cm1wbGU6IDI2NSxcblx0c2lsY29vbjogMjY2LFxuXHRiZWF1dGlmbHk6IDI2Nyxcblx0Y2FzY29vbjogMjY4LFxuXHRkdXN0b3g6IDI2OSxcblx0bG90YWQ6IDI3MCxcblx0bG9tYnJlOiAyNzEsXG5cdGx1ZGljb2xvOiAyNzIsXG5cdHNlZWRvdDogMjczLFxuXHRudXpsZWFmOiAyNzQsXG5cdHNoaWZ0cnk6IDI3NSxcblx0dGFpbGxvdzogMjc2LFxuXHRzd2VsbG93OiAyNzcsXG5cdHdpbmd1bGw6IDI3OCxcblx0cGVsaXBwZXI6IDI3OSxcblx0cmFsdHM6IDI4MCxcblx0a2lybGlhOiAyODEsXG5cdGdhcmRldm9pcjogMjgyLFxuXHRzdXJza2l0OiAyODMsXG5cdG1hc3F1ZXJhaW46IDI4NCxcblx0c2hyb29taXNoOiAyODUsXG5cdGJyZWxvb206IDI4Nixcblx0c2xha290aDogMjg3LFxuXHR2aWdvcm90aDogMjg4LFxuXHRzbGFraW5nOiAyODksXG5cdG5pbmNhZGE6IDI5MCxcblx0bmluamFzazogMjkxLFxuXHRzaGVkaW5qYTogMjkyLFxuXHR3aGlzbXVyOiAyOTMsXG5cdGxvdWRyZWQ6IDI5NCxcblx0ZXhwbG91ZDogMjk1LFxuXHRtYWt1aGl0YTogMjk2LFxuXHRoYXJpeWFtYTogMjk3LFxuXHRhenVyaWxsOiAyOTgsXG5cdG5vc2VwYXNzOiAyOTksXG5cdHNraXR0eTogMzAwLFxuXHRkZWxjYXR0eTogMzAxLFxuXHRzYWJsZXllOiAzMDIsXG5cdG1hd2lsZTogMzAzLFxuXHRhcm9uOiAzMDQsXG5cdGxhaXJvbjogMzA1LFxuXHRhZ2dyb246IDMwNixcblx0bWVkaXRpdGU6IDMwNyxcblx0bWVkaWNoYW06IDMwOCxcblx0ZWxlY3RyaWtlOiAzMDksXG5cdG1hbmVjdHJpYzogMzEwLFxuXHRwbHVzbGU6IDMxMSxcblx0bWludW46IDMxMixcblx0dm9sYmVhdDogMzEzLFxuXHRpbGx1bWlzZTogMzE0LFxuXHRyb3NlbGlhOiAzMTUsXG5cdGd1bHBpbjogMzE2LFxuXHRzd2Fsb3Q6IDMxNyxcblx0Y2FydmFuaGE6IDMxOCxcblx0c2hhcnBlZG86IDMxOSxcblx0d2FpbG1lcjogMzIwLFxuXHR3YWlsb3JkOiAzMjEsXG5cdG51bWVsOiAzMjIsXG5cdGNhbWVydXB0OiAzMjMsXG5cdHRvcmtvYWw6IDMyNCxcblx0c3BvaW5rOiAzMjUsXG5cdGdydW1waWc6IDMyNixcblx0c3BpbmRhOiAzMjcsXG5cdHRyYXBpbmNoOiAzMjgsXG5cdHZpYnJhdmE6IDMyOSxcblx0Zmx5Z29uOiAzMzAsXG5cdGNhY25lYTogMzMxLFxuXHRjYWN0dXJuZTogMzMyLFxuXHRzd2FibHU6IDMzMyxcblx0YWx0YXJpYTogMzM0LFxuXHR6YW5nb29zZTogMzM1LFxuXHRzZXZpcGVyOiAzMzYsXG5cdGx1bmF0b25lOiAzMzcsXG5cdHNvbHJvY2s6IDMzOCxcblx0YmFyYm9hY2g6IDMzOSxcblx0d2hpc2Nhc2g6IDM0MCxcblx0Y29ycGhpc2g6IDM0MSxcblx0Y3Jhd2RhdW50OiAzNDIsXG5cdGJhbHRveTogMzQzLFxuXHRjbGF5ZG9sOiAzNDQsXG5cdGxpbGVlcDogMzQ1LFxuXHRjcmFkaWx5OiAzNDYsXG5cdGFub3JpdGg6IDM0Nyxcblx0YXJtYWxkbzogMzQ4LFxuXHRmZWViYXM6IDM0OSxcblx0bWlsb3RpYzogMzUwLFxuXHRjYXN0Zm9ybTogMzUxLFxuXHRrZWNsZW9uOiAzNTIsXG5cdHNodXBwZXQ6IDM1Myxcblx0YmFuZXR0ZTogMzU0LFxuXHRkdXNrdWxsOiAzNTUsXG5cdGR1c2Nsb3BzOiAzNTYsXG5cdHRyb3BpdXM6IDM1Nyxcblx0Y2hpbWVjaG86IDM1OCxcblx0YWJzb2w6IDM1OSxcblx0d3luYXV0OiAzNjAsXG5cdHNub3J1bnQ6IDM2MSxcblx0Z2xhbGllOiAzNjIsXG5cdHNwaGVhbDogMzYzLFxuXHRzZWFsZW86IDM2NCxcblx0d2FscmVpbjogMzY1LFxuXHRjbGFtcGVybDogMzY2LFxuXHRodW50YWlsOiAzNjcsXG5cdGdvcmVieXNzOiAzNjgsXG5cdHJlbGljYW50aDogMzY5LFxuXHRsdXZkaXNjOiAzNzAsXG5cdGJhZ29uOiAzNzEsXG5cdHNoZWxnb246IDM3Mixcblx0c2FsYW1lbmNlOiAzNzMsXG5cdGJlbGR1bTogMzc0LFxuXHRtZXRhbmc6IDM3NSxcblx0bWV0YWdyb3NzOiAzNzYsXG5cdHJlZ2lyb2NrOiAzNzcsXG5cdHJlZ2ljZTogMzc4LFxuXHRyZWdpc3RlZWw6IDM3OSxcblx0bGF0aWFzOiAzODAsXG5cdGxhdGlvczogMzgxLFxuXHRreW9ncmU6IDM4Mixcblx0Z3JvdWRvbjogMzgzLFxuXHRyYXlxdWF6YTogMzg0LFxuXHRqaXJhY2hpOiAzODUsXG5cdGRlb3h5czogMzg2LFxuXHR0dXJ0d2lnOiAzODcsXG5cdGdyb3RsZTogMzg4LFxuXHR0b3J0ZXJyYTogMzg5LFxuXHRjaGltY2hhcjogMzkwLFxuXHRtb25mZXJubzogMzkxLFxuXHRpbmZlcm5hcGU6IDM5Mixcblx0cGlwbHVwOiAzOTMsXG5cdHByaW5wbHVwOiAzOTQsXG5cdGVtcG9sZW9uOiAzOTUsXG5cdHN0YXJseTogMzk2LFxuXHRzdGFyYXZpYTogMzk3LFxuXHRzdGFyYXB0b3I6IDM5OCxcblx0Ymlkb29mOiAzOTksXG5cdGJpYmFyZWw6IDQwMCxcblx0a3JpY2tldG90OiA0MDEsXG5cdGtyaWNrZXR1bmU6IDQwMixcblx0c2hpbng6IDQwMyxcblx0bHV4aW86IDQwNCxcblx0bHV4cmF5OiA0MDUsXG5cdGJ1ZGV3OiA0MDYsXG5cdHJvc2VyYWRlOiA0MDcsXG5cdGNyYW5pZG9zOiA0MDgsXG5cdHJhbXBhcmRvczogNDA5LFxuXHRzaGllbGRvbjogNDEwLFxuXHRiYXN0aW9kb246IDQxMSxcblx0YnVybXk6IDQxMixcblx0d29ybWFkYW06IDQxMyxcblx0bW90aGltOiA0MTQsXG5cdGNvbWJlZTogNDE1LFxuXHR2ZXNwaXF1ZW46IDQxNixcblx0cGFjaGlyaXN1OiA0MTcsXG5cdGJ1aXplbDogNDE4LFxuXHRmbG9hdHplbDogNDE5LFxuXHRjaGVydWJpOiA0MjAsXG5cdGNoZXJyaW06IDQyMSxcblx0c2hlbGxvczogNDIyLFxuXHRnYXN0cm9kb246IDQyMyxcblx0YW1iaXBvbTogNDI0LFxuXHRkcmlmbG9vbjogNDI1LFxuXHRkcmlmYmxpbTogNDI2LFxuXHRidW5lYXJ5OiA0MjcsXG5cdGxvcHVubnk6IDQyOCxcblx0bWlzbWFnaXVzOiA0MjksXG5cdGhvbmNoa3JvdzogNDMwLFxuXHRnbGFtZW93OiA0MzEsXG5cdHB1cnVnbHk6IDQzMixcblx0Y2hpbmdsaW5nOiA0MzMsXG5cdHN0dW5reTogNDM0LFxuXHRza3VudGFuazogNDM1LFxuXHRicm9uem9yOiA0MzYsXG5cdGJyb256b25nOiA0MzcsXG5cdGJvbnNseTogNDM4LFxuXHRtaW1lanI6IDQzOSxcblx0aGFwcGlueTogNDQwLFxuXHRjaGF0b3Q6IDQ0MSxcblx0c3Bpcml0b21iOiA0NDIsXG5cdGdpYmxlOiA0NDMsXG5cdGdhYml0ZTogNDQ0LFxuXHRnYXJjaG9tcDogNDQ1LFxuXHRtdW5jaGxheDogNDQ2LFxuXHRyaW9sdTogNDQ3LFxuXHRsdWNhcmlvOiA0NDgsXG5cdGhpcHBvcG90YXM6IDQ0OSxcblx0aGlwcG93ZG9uOiA0NTAsXG5cdHNrb3J1cGk6IDQ1MSxcblx0ZHJhcGlvbjogNDUyLFxuXHRjcm9hZ3VuazogNDUzLFxuXHR0b3hpY3JvYWs6IDQ1NCxcblx0Y2Fybml2aW5lOiA0NTUsXG5cdGZpbm5lb246IDQ1Nixcblx0bHVtaW5lb246IDQ1Nyxcblx0bWFudHlrZTogNDU4LFxuXHRzbm92ZXI6IDQ1OSxcblx0YWJvbWFzbm93OiA0NjAsXG5cdHdlYXZpbGU6IDQ2MSxcblx0bWFnbmV6b25lOiA0NjIsXG5cdGxpY2tpbGlja3k6IDQ2Myxcblx0cmh5cGVyaW9yOiA0NjQsXG5cdHRhbmdyb3d0aDogNDY1LFxuXHRlbGVjdGl2aXJlOiA0NjYsXG5cdG1hZ21vcnRhcjogNDY3LFxuXHR0b2dla2lzczogNDY4LFxuXHR5YW5tZWdhOiA0NjksXG5cdGxlYWZlb246IDQ3MCxcblx0Z2xhY2VvbjogNDcxLFxuXHRnbGlzY29yOiA0NzIsXG5cdG1hbW9zd2luZTogNDczLFxuXHRwb3J5Z29uWjogNDc0LFxuXHRnYWxsYWRlOiA0NzUsXG5cdHByb2JvcGFzczogNDc2LFxuXHRkdXNrbm9pcjogNDc3LFxuXHRmcm9zbGFzczogNDc4LFxuXHRyb3RvbTogNDc5LFxuXHR1eGllOiA0ODAsXG5cdG1lc3ByaXQ6IDQ4MSxcblx0YXplbGY6IDQ4Mixcblx0ZGlhbGdhOiA0ODMsXG5cdHBhbGtpYTogNDg0LFxuXHRoZWF0cmFuOiA0ODUsXG5cdHJlZ2lnaWdhczogNDg2LFxuXHRnaXJhdGluYTogNDg3LFxuXHRjcmVzc2VsaWE6IDQ4OCxcblx0cGhpb25lOiA0ODksXG5cdG1hbmFwaHk6IDQ5MCxcblx0ZGFya3JhaTogNDkxLFxuXHRzaGF5bWluOiA0OTIsXG5cdGFyY2V1czogNDkzLFxuXHR2aWN0aW5pOiA0OTQsXG5cdHNuaXZ5OiA0OTUsXG5cdHNlcnZpbmU6IDQ5Nixcblx0c2VycGVyaW9yOiA0OTcsXG5cdHRlcGlnOiA0OTgsXG5cdHBpZ25pdGU6IDQ5OSxcblx0ZW1ib2FyOiA1MDAsXG5cdG9zaGF3b3R0OiA1MDEsXG5cdGRld290dDogNTAyLFxuXHRzYW11cm90dDogNTAzLFxuXHRwYXRyYXQ6IDUwNCxcblx0d2F0Y2hvZzogNTA1LFxuXHRsaWxsaXB1cDogNTA2LFxuXHRoZXJkaWVyOiA1MDcsXG5cdHN0b3V0bGFuZDogNTA4LFxuXHRwdXJybG9pbjogNTA5LFxuXHRsaWVwYXJkOiA1MTAsXG5cdHBhbnNhZ2U6IDUxMSxcblx0c2ltaXNhZ2U6IDUxMixcblx0cGFuc2VhcjogNTEzLFxuXHRzaW1pc2VhcjogNTE0LFxuXHRwYW5wb3VyOiA1MTUsXG5cdHNpbWlwb3VyOiA1MTYsXG5cdG11bm5hOiA1MTcsXG5cdG11c2hhcm5hOiA1MTgsXG5cdHBpZG92ZTogNTE5LFxuXHR0cmFucXVpbGw6IDUyMCxcblx0dW5mZXphbnQ6IDUyMSxcblx0YmxpdHpsZTogNTIyLFxuXHR6ZWJzdHJpa2E6IDUyMyxcblx0cm9nZ2Vucm9sYTogNTI0LFxuXHRib2xkb3JlOiA1MjUsXG5cdGdpZ2FsaXRoOiA1MjYsXG5cdHdvb2JhdDogNTI3LFxuXHRzd29vYmF0OiA1MjgsXG5cdGRyaWxidXI6IDUyOSxcblx0ZXhjYWRyaWxsOiA1MzAsXG5cdGF1ZGlubzogNTMxLFxuXHR0aW1idXJyOiA1MzIsXG5cdGd1cmR1cnI6IDUzMyxcblx0Y29ua2VsZHVycjogNTM0LFxuXHR0eW1wb2xlOiA1MzUsXG5cdHBhbHBpdG9hZDogNTM2LFxuXHRzZWlzbWl0b2FkOiA1MzcsXG5cdHRocm9oOiA1MzgsXG5cdHNhd2s6IDUzOSxcblx0c2V3YWRkbGU6IDU0MCxcblx0c3dhZGxvb246IDU0MSxcblx0bGVhdmFubnk6IDU0Mixcblx0dmVuaXBlZGU6IDU0Myxcblx0d2hpcmxpcGVkZTogNTQ0LFxuXHRzY29saXBlZGU6IDU0NSxcblx0Y290dG9uZWU6IDU0Nixcblx0d2hpbXNpY290dDogNTQ3LFxuXHRwZXRpbGlsOiA1NDgsXG5cdGxpbGxpZ2FudDogNTQ5LFxuXHRiYXNjdWxpbjogNTUwLFxuXHRzYW5kaWxlOiA1NTEsXG5cdGtyb2tvcm9rOiA1NTIsXG5cdGtyb29rb2RpbGU6IDU1Myxcblx0ZGFydW1ha2E6IDU1NCxcblx0ZGFybWFuaXRhbjogNTU1LFxuXHRtYXJhY3R1czogNTU2LFxuXHRkd2ViYmxlOiA1NTcsXG5cdGNydXN0bGU6IDU1OCxcblx0c2NyYWdneTogNTU5LFxuXHRzY3JhZnR5OiA1NjAsXG5cdHNpZ2lseXBoOiA1NjEsXG5cdHlhbWFzazogNTYyLFxuXHRjb2ZhZ3JpZ3VzOiA1NjMsXG5cdHRpcnRvdWdhOiA1NjQsXG5cdGNhcnJhY29zdGE6IDU2NSxcblx0YXJjaGVuOiA1NjYsXG5cdGFyY2hlb3BzOiA1NjcsXG5cdHRydWJiaXNoOiA1NjgsXG5cdGdhcmJvZG9yOiA1NjksXG5cdHpvcnVhOiA1NzAsXG5cdHpvcm9hcms6IDU3MSxcblx0bWluY2Npbm86IDU3Mixcblx0Y2luY2Npbm86IDU3Myxcblx0Z290aGl0YTogNTc0LFxuXHRnb3Rob3JpdGE6IDU3NSxcblx0Z290aGl0ZWxsZTogNTc2LFxuXHRzb2xvc2lzOiA1NzcsXG5cdGR1b3Npb246IDU3OCxcblx0cmV1bmljbHVzOiA1NzksXG5cdGR1Y2tsZXR0OiA1ODAsXG5cdHN3YW5uYTogNTgxLFxuXHR2YW5pbGxpdGU6IDU4Mixcblx0dmFuaWxsaXNoOiA1ODMsXG5cdHZhbmlsbHV4ZTogNTg0LFxuXHRkZWVybGluZzogNTg1LFxuXHRzYXdzYnVjazogNTg2LFxuXHRlbW9sZ2E6IDU4Nyxcblx0a2FycmFibGFzdDogNTg4LFxuXHRlc2NhdmFsaWVyOiA1ODksXG5cdGZvb25ndXM6IDU5MCxcblx0YW1vb25ndXNzOiA1OTEsXG5cdGZyaWxsaXNoOiA1OTIsXG5cdGplbGxpY2VudDogNTkzLFxuXHRhbG9tb21vbGE6IDU5NCxcblx0am9sdGlrOiA1OTUsXG5cdGdhbHZhbnR1bGE6IDU5Nixcblx0ZmVycm9zZWVkOiA1OTcsXG5cdGZlcnJvdGhvcm46IDU5OCxcblx0a2xpbms6IDU5OSxcblx0a2xhbmc6IDYwMCxcblx0a2xpbmtsYW5nOiA2MDEsXG5cdHR5bmFtbzogNjAyLFxuXHRlZWxla3RyaWs6IDYwMyxcblx0ZWVsZWt0cm9zczogNjA0LFxuXHRlbGd5ZW06IDYwNSxcblx0YmVoZWV5ZW06IDYwNixcblx0bGl0d2ljazogNjA3LFxuXHRsYW1wZW50OiA2MDU4LFxuXHRjaGFuZGVsdXJlOiA2MDksXG5cdGF4ZXc6IDYxMCxcblx0ZnJheHVyZTogNjExLFxuXHRoYXhvcnVzOiA2MTIsXG5cdGN1YmNob286IDYxMyxcblx0YmVhcnRpYzogNjE0LFxuXHRjcnlvZ29uYWw6IDYxNSxcblx0c2hlbG1ldDogNjE2LFxuXHRhY2NlbGdvcjogNjE3LFxuXHRzdHVuZmlzazogNjE4LFxuXHRtaWVuZm9vOiA2MTksXG5cdG1pZW5zaGFvOiA2MjAsXG5cdGRydWRkaWdvbjogNjIxLFxuXHRnb2xldHQ6IDYyMixcblx0Z29sdXJrOiA2MjMsXG5cdHBhd25pYXJkOiA2MjQsXG5cdGJpc2hhcnA6IDYyNSxcblx0Ym91ZmZhbGFudDogNjI2LFxuXHRydWZmbGV0OiA2MjcsXG5cdGJyYXZpYXJ5OiA2MjgsXG5cdHZ1bGxhYnk6IDYyOSxcblx0bWFuZGlidXp6OiA2MzAsXG5cdGhlYXRtb3I6IDYzMSxcblx0ZHVyYW50OiA2MzIsXG5cdGRlaW5vOiA2MzMsXG5cdHp3ZWlsb3VzOiA2MzQsXG5cdGh5ZHJlaWdvbjogNjM1LFxuXHRsYXJ2ZXN0YTogNjM2LFxuXHR2b2xjYXJvbmE6IDYzNyxcblx0Y29iYWxpb246IDYzOCxcblx0dGVycmFraW9uOiA2MzksXG5cdHZpcml6aW9uOiA2NDAsXG5cdHRvcm5hZHVzOiA2NDEsXG5cdHRodW5kdXJ1czogNjQyLFxuXHRyZXNoaXJhbTogNjQzLFxuXHR6ZWtyb206IDY0NCxcblx0bGFuZG9ydXM6IDY0NSxcblx0a3l1cmVtOiA2NDYsXG5cdGtlbGRlbzogNjQ3LFxuXHRtZWxvZXR0YTogNjQ4LFxuXHRnZW5lc2VjdDogNjQ5LFxuXHRjaGVzcGluOiA2NTAsXG5cdHF1aWxsYWRpbjogNjUxLFxuXHRjaGVzbmF1Z2h0OiA2NTIsXG5cdGZlbm5la2luOiA2NTMsXG5cdGJyYWl4ZW46IDY1NCxcblx0ZGVscGhveDogNjU1LFxuXHRmcm9ha2llOiA2NTYsXG5cdGZyb2dhZGllcjogNjU3LFxuXHRncmVuaW5qYTogNjU4LFxuXHRidW5uZWxieTogNjU5LFxuXHRkaWdnZXJzYnk6IDY2MCxcblx0ZmxldGNobGluZzogNjYxLFxuXHRmbGV0Y2hpbmRlcjogNjYyLFxuXHR0YWxvbmZsYW1lOiA2NjMsXG5cdHNjYXR0ZXJidWc6IDY2NCxcblx0c3Bld3BhOiA2NjUsXG5cdHZpdmlsbG9uOiA2NjYsXG5cdGxpdGxlbzogNjY3LFxuXHRweXJvYXI6IDY2OCxcblx0ZmxhYmViZTogNjY5LFxuXHRmbG9ldHRlOiA2NzAsXG5cdGZsb3JnZXM6IDY3MSxcblx0c2tpZGRvOiA2NzIsXG5cdGdvZ29hdDogNjczLFxuXHRwYW5jaGFtOiA2NzQsXG5cdHBhbmdvcm86IDY3NSxcblx0ZnVyZnJvdTogNjc2LFxuXHRlc3B1cnI6IDY3Nyxcblx0bWVvd3N0aWM6IDY3OCxcblx0aG9uZWRnZTogNjc5LFxuXHRkb3VibGFkZTogNjgwLFxuXHRhZWdpc2xhc2g6IDY4MSxcblx0c3ByaXR6ZWU6IDY4Mixcblx0YXJvbWF0aXNzZTogNjgzLFxuXHRzd2lybGl4OiA2ODQsXG5cdHNsdXJwdWZmOiA2ODUsXG5cdGlua2F5OiA2ODYsXG5cdG1hbGFtYXI6IDY4Nyxcblx0YmluYWNsZTogNjg4LFxuXHRiYXJiYXJhY2xlOiA2ODksXG5cdHNrcmVscDogNjkwLFxuXHRkcmFnYWxnZTogNjkxLFxuXHRjbGF1bmNoZXI6IDY5Mixcblx0Y2xhd2l0emVyOiA2OTMsXG5cdGhlbGlvcHRpbGU6IDY5NCxcblx0aGVsaW9saXNrOiA2OTUsXG5cdHR5cnVudDogNjk2LFxuXHR0eXJhbnRydW06IDY5Nyxcblx0YW1hdXJhOiA2OTgsXG5cdGF1cm9ydXM6IDY5OSxcblx0c3lsdmVvbjogNzAwLFxuXHRoYXdsdWNoYTogNzAxLFxuXHRkZWRlbm5lOiA3MDIsXG5cdGNhcmJpbms6IDcwMyxcblx0Z29vbXk6IDcwNCxcblx0c2xpZ2dvbzogNzA1LFxuXHRnb29kcmE6IDcwNixcblx0a2xlZmtpOiA3MDcsXG5cdHBoYW50dW1wOiA3MDgsXG5cdHRyZXZlbmFudDogNzA5LFxuXHRwdW1wa2Fib286IDcxMCxcblx0Z291cmdlaXN0OiA3MTEsXG5cdGJlcmdtaXRlOiA3MTIsXG5cdGF2YWx1Z2c6IDcxMyxcblx0bm9pYmF0OiA3MTQsXG5cdG5vaXZlcm46IDcxNSxcblx0eGVybmVhczogNzE2LFxuXHR5dmVsdGFsOiA3MTcsXG5cdHp5Z2FyZGU6IDcxOCxcblx0ZGlhbmNpZTogNzE5LFxuXHRob29wYTogNzIwLFxuXHR2b2xjYW5pb246IDcyMSxcblx0cm93bGV0OiA3MjIsXG5cdGRhcnRyaXg6IDcyMyxcblx0ZGVjaWR1ZXllOiA3MjQsXG5cdGxpdHRlbjogNzI1LFxuXHR0b3JyYWNhdDogNzI2LFxuXHRpbmNpbmVyb2FyOiA3MjcsXG5cdHBvcHBsaW86IDcyOCxcblx0YnJpb25uZTogNzI5LFxuXHRwcmltYXJpbmE6IDczMCxcblx0cGlraXBlazogNzMxLFxuXHR0cnVtYmVhazogNzMyLFxuXHR0b3VjYW5ub246IDczMyxcblx0eXVuZ29vczogNzM0LFxuXHRndW1zaG9vczogNzM1LFxuXHRncnViYmluOiA3MzYsXG5cdGNoYXJqYWJ1ZzogNzM3LFxuXHR2aWthdm9sdDogNzM4LFxuXHRjcmFicmF3bGVyOiA3MzksXG5cdGNyYWJvbWluYWJsZTogNzQwLFxuXHRvcmljb3JpbzogNzQxLFxuXHRjdXRpZWZseTogNzQyLFxuXHRyaWJvbWJlZTogNzQzLFxuXHRyb2NrcnVmZjogNzQ0LFxuXHRseWNhbnJvYzogNzQ1LFxuXHR3aXNoaXdhc2hpOiA3NDYsXG5cdG1hcmVhbmllOiA3NDcsXG5cdHRveGFwZXg6IDc0OCxcblx0bXVkYnJheTogNzQ5LFxuXHRtdWRzZGFsZTogNzUwLFxuXHRkZXdwaWRlcjogNzUxLFxuXHRhcmFxdWFuaWQ6IDc1Mixcblx0Zm9tYW50aXM6IDc1Myxcblx0bHVyYW50aXM6IDc1NCxcblx0bW9yZWx1bGw6IDc1NSxcblx0c2hpaW5vdGljOiA3NTYsXG5cdHNhbGFuZGl0OiA3NTcsXG5cdHNhbGF6emxlOiA3NTgsXG5cdHN0dWZmdWw6IDc1OSxcblx0YmV3ZWFyOiA3NjAsXG5cdGJvdW5zd2VldDogNzYxLFxuXHRzdGVlbmVlOiA3NjIsXG5cdHRzYXJlZW5hOiA3NjMsXG5cdGNvbWZleTogNzY0LFxuXHRvcmFuZ3VydTogNzY1LFxuXHRwYXNzaW1pYW46IDc2Nixcblx0d2ltcG9kOiA3NjcsXG5cdGdvbGlzb3BvZDogNzY4LFxuXHRzYW5keWdhc3Q6IDc2OSxcblx0cGFsb3NzYW5kOiA3NzAsXG5cdHB5dWt1bXVrdTogNzcxLFxuXHR0eXBlTnVsbDogNzcyLFxuXHRzaWx2YWxseTogNzczLFxuXHRtaW5pb3I6IDc3NCxcblx0a29tYWxhOiA3NzUsXG5cdHR1cnRvbmF0b3I6IDc3Nixcblx0dG9nZWRlbWFydTogNzc3LFxuXHRtaW1pa3l1OiA3NzgsXG5cdGJydXhpc2g6IDc3OSxcblx0ZHJhbXBhOiA3ODAsXG5cdGRoZWxtaXNlOiA3ODEsXG5cdGphbmdtb086IDc4Mixcblx0aGFrYW1vTzogNzgzLFxuXHRrb21tb086IDc4NCxcblx0dGFwdUtva286IDc4NSxcblx0dGFwdUxlbGU6IDc4Nixcblx0dGFwdUJ1bHU6IDc4Nyxcblx0dGFwdUZpbmk6IDc4OCxcblx0Y29zbW9nOiA3ODksXG5cdGNvc21vZW06IDc5MCxcblx0c29sZ2FsZW86IDc5MSxcblx0bHVuYWxhOiA3OTIsXG5cdG5paGlsZWdvOiA3OTMsXG5cdGJ1enp3b2xlOiA3OTQsXG5cdHBoZXJvbW9zYTogNzk1LFxuXHR4dXJraXRyZWU6IDc5Nixcblx0Y2VsZXN0ZWVsYTogNzk3LFxuXHRrYXJ0YW5hOiA3OTgsXG5cdGd1enpsb3JkOiA3OTksXG5cdG5lY3Jvem1hOiA4MDAsXG5cdG1hZ2Vhcm5hOiA4MDEsXG5cdG1hcnNoYWRvdzogODAyLFxuXHRwb2lwb2xlOiA4MDMsXG5cdG5hZ2FuYWRlbDogODA0LFxuXHRzdGFrYXRha2E6IDgwNSxcblx0YmxhY2VwaGFsb246IDgwNixcblx0emVyYW9yYTogODA3LFxuXHRtZWx0YW46IDgwOCxcblx0bWVsbWV0YWw6IDgwOSxcblx0Z3Jvb2tleTogODEwLFxuXHR0aHdhY2tleTogODExLFxuXHRyaWxsYWJvb206IDgxMixcblx0c2NvcmJ1bm55OiA4MTMsXG5cdHJhYm9vdDogODE0LFxuXHRjaW5kZXJhY2U6IDgxNSxcblx0c29iYmxlOiA4MTYsXG5cdGRyaXp6aWxlOiA4MTcsXG5cdGludGVsZW9uOiA4MTgsXG5cdHNrd292ZXQ6IDgxOSxcblx0Z3JlZWRlbnQ6IDgyMCxcblx0cm9va2lkZWU6IDgyMSxcblx0Y29ydmlzcXVpcmU6IDgyMixcblx0Y29ydmlrbmlnaHQ6IDgyMyxcblx0YmxpcGJ1ZzogODI0LFxuXHRkb3R0bGVyOiA4MjUsXG5cdG9yYmVldGxlOiA4MjYsXG5cdG5pY2tpdDogODI3LFxuXHR0aGlldnVsOiA4MjgsXG5cdGdvc3NpZmxldXI6IDgyOSxcblx0ZWxkZWdvc3M6IDgzMCxcblx0d29vbG9vOiA4MzEsXG5cdGR1Yndvb2w6IDgzMixcblx0Y2hld3RsZTogODMzLFxuXHRkcmVkbmF3OiA4MzQsXG5cdHlhbXBlcjogODM1LFxuXHRib2x0dW5kOiA4MzYsXG5cdHJvbHljb2x5OiA4MzcsXG5cdGNhcmtvbDogODM4LFxuXHRjb2Fsb3NzYWw6IDgzOSxcblx0YXBwbGluOiA4NDAsXG5cdGZsYXBwbGU6IDg0MSxcblx0YXBwbGV0dW46IDg0Mixcblx0c2lsaWNvYnJhOiA4NDMsXG5cdHNhbmRhY29uZGE6IDg0NCxcblx0Y3JhbW9yYW50OiA4NDUsXG5cdGFycm9rdWRhOiA4NDYsXG5cdGJhcnJhc2tld2RhOiA4NDcsXG5cdHRveGVsOiA4NDgsXG5cdHRveHRyaWNpdHk6IDg0OSxcblx0c2l6emxpcGVkZTogODUwLFxuXHRjZW50aXNrb3JjaDogODUxLFxuXHRjbG9iYm9wdXM6IDg1Mixcblx0Z3JhcHBsb2N0OiA4NTMsXG5cdHNpbmlzdGVhOiA4NTQsXG5cdHBvbHRlYWdlaXN0OiA4NTUsXG5cdGhhdGVubmE6IDg1Nixcblx0aGF0dHJlbTogODU3LFxuXHRoYXR0ZXJlbmU6IDg1OCxcblx0aW1waWRpbXA6IDg1OSxcblx0bW9yZ3JlbTogODYwLFxuXHRncmltbXNuYXJsOiA4NjEsXG5cdG9ic3RhZ29vbjogODYyLFxuXHRwZXJyc2Vya2VyOiA4NjMsXG5cdGN1cnNvbGE6IDg2NCxcblx0c2lyZmV0Y2hkOiA4NjUsXG5cdG1yUmltZTogODY2LFxuXHRydW5lcmlndXM6IDg2Nyxcblx0bWlsY2VyeTogODY4LFxuXHRhbGNyZW1pZTogODY5LFxuXHRmYWxpbmtzOiA4NzAsXG5cdHBpbmN1cmNoaW46IDg3MSxcblx0c25vbTogODcyLFxuXHRmcm9zbW90aDogODczLFxuXHRzdG9uam91cm5lcjogODc0LFxuXHRlaXNjdWU6IDg3NSxcblx0aW5kZWVkZWU6IDg3Nixcblx0bW9ycGVrbzogODc3LFxuXHRjdWZhbnQ6IDg3OCxcblx0Y29wcGVyYWphaDogODc5LFxuXHRkcmFjb3pvbHQ6IDg4MCxcblx0YXJjdG96b2x0OiA4ODEsXG5cdGRyYWNvdmlzaDogODgyLFxuXHRhcmN0b3Zpc2g6IDg4Myxcblx0ZHVyYWx1ZG9uOiA4ODQsXG5cdGRyZWVweTogODg1LFxuXHRkcmFrbG9hazogODg2LFxuXHRkcmFnYXB1bHQ6IDg4Nyxcblx0emFjaWFuOiA4ODgsXG5cdHphbWF6ZW50YTogODg5LFxuXHRldGVybmF0dXM6IDg5MCxcblx0a3ViZnU6IDg5MSxcblx0dXJzaGlmdTogODkyLFxuXHR6YXJ1ZGU6IDg5Myxcblx0cmVnaWVsZWtpOiA4OTQsXG5cdHJlZ2lkcmFnbzogODk1LFxuXHRnbGFzdHJpZXI6IDg5Nixcblx0c3BlY3RyaWVyOiA4OTcsXG5cdGNhbHlyZXg6IDg5OCxcblx0d3lyZGVlcjogODk5LFxuXHRrbGVhdm9yOiA5MDAsXG5cdHVyc2FsdW5hOiA5MDEsXG5cdGJhc2N1bGVnaW9uOiA5MDIsXG5cdHNlbmFzbGVyOiA5MDMsXG5cdG92ZXJxd2lsbDogOTA0LFxuXHRlbmFtb3J1czogOTA1LFxuXHRzcHJpZ2F0aXRvOiA5MDYsXG5cdGZsb3JhZ2F0bzogOTA3LFxuXHRtZW93c2NhcmFkYTogOTA4LFxuXHRmdWVjb2NvOiA5MDksXG5cdGNyb2NhbG9yOiA5MTAsXG5cdHNrZWxlZGlyZ2U6IDkxMSxcblx0cXVheGx5OiA5MTIsXG5cdHF1YXh3ZWxsOiA5MTMsXG5cdHF1YXF1YXZhbDogOTE0LFxuXHRsZWNob25rOiA5MTUsXG5cdG9pbmtvbG9nbmU6IDkxNixcblx0dGFyb3VudHVsYTogOTE3LFxuXHRzcGlkb3BzOiA5MTgsXG5cdG55bWJsZTogOTE5LFxuXHRsb2tpeDogOTIwLFxuXHRwYXdtaTogOTIxLFxuXHRwYXdtbzogOTIyLFxuXHRwYXdtb3Q6IDkyMyxcblx0dGFuZGVtYXVzOiA5MjQsXG5cdG1hdXNob2xkOiA5MjUsXG5cdGZpZG91Z2g6IDkyNixcblx0ZGFjaHNidW46IDkyNyxcblx0c21vbGl2OiA5MjgsXG5cdGRvbGxpdjogOTI5LFxuXHRhcmJvbGl2YTogOTMwLFxuXHRzcXVhd2thYmlsbHk6IDkzMSxcblx0bmFjbGk6IDkzMixcblx0bmFjbHN0YWNrOiA5MzMsXG5cdGdhcmdhbmFjbDogOTM0LFxuXHRjaGFyY2FkZXQ6IDkzNSxcblx0YXJtYXJvdWdlOiA5MzYsXG5cdGNlcnVsZWRnZTogOTM3LFxuXHR0YWRidWxiOiA5MzgsXG5cdGJlbGxpYm9sdDogOTM5LFxuXHR3YXR0cmVsOiA5NDAsXG5cdGtpbG93YXR0cmVsOiA5NDEsXG5cdG1hc2NoaWZmOiA5NDIsXG5cdG1hYm9zc3RpZmY6IDk0Myxcblx0c2hyb29kbGU6IDk0NCxcblx0Z3JhZmFpYWk6IDk0NSxcblx0YnJhbWJsaW46IDk0Nixcblx0YnJhbWJsZWdoYXN0OiA5NDcsXG5cdHRvZWRzY29vbDogOTQ4LFxuXHR0b2Vkc2NydWVsOiA5NDksXG5cdGtsYXdmOiA5NTAsXG5cdGNhcHNha2lkOiA5NTEsXG5cdHNjb3ZpbGxhaW46IDk1Mixcblx0cmVsbG9yOiA5NTMsXG5cdHJhYnNjYTogOTU0LFxuXHRmbGl0dGxlOiA5NTUsXG5cdGVzcGF0aHJhOiA5NTYsXG5cdHRpbmthdGluazogOTU3LFxuXHR0aW5rYXR1ZmY6IDk1OCxcblx0dGlua2F0b246IDk1OSxcblx0d2lnbGV0dDogOTYwLFxuXHR3dWd0cmlvOiA5NjEsXG5cdGJvbWJpcmRpZXI6IDk2Mixcblx0ZmluaXplbjogOTYzLFxuXHRwYWxhZmluOiA5NjQsXG5cdHZhcm9vbTogOTY1LFxuXHRyZXZhdnJvb206IDk2Nixcblx0Y3ljbGl6YXI6IDk2Nyxcblx0b3J0aHdvcm06IDk2OCxcblx0Z2xpbW1ldDogOTY5LFxuXHRnbGltbW9yYTogOTcwLFxuXHRncmVhdmFyZDogOTcxLFxuXHRob3VuZHN0b25lOiA5NzIsXG5cdGZsYW1pZ286IDk3Myxcblx0Y2V0b2RkbGU6IDk3NCxcblx0Y2V0aXRhbjogOTc1LFxuXHR2ZWx1emE6IDk3Nixcblx0ZG9uZG96bzogOTc3LFxuXHR0YXRzdWdpcmk6IDk3OCxcblx0YW5uaWhpbGFwZTogOTc5LFxuXHRjbG9kc2lyZTogOTgwLFxuXHRmYXJpZ2lyYWY6IDk4MSxcblx0ZHVkdW5zcGFyY2U6IDk4Mixcblx0a2luZ2FtYml0OiA5ODMsXG5cdGdyZWF0VHVzazogOTg0LFxuXHRzY3JlYW1UYWlsOiA5ODUsXG5cdGJydXRlQm9ubmV0OiA5ODYsXG5cdGZsdXR0ZXJNYW5lOiA5ODcsXG5cdHNsaXRoZXJXaW5nOiA5ODgsXG5cdHNhbmR5U2hvY2tzOiA5ODksXG5cdGlyb25UcmVhZHM6IDk5MCxcblx0aXJvbkJ1bmRsZTogOTkxLFxuXHRpcm9uSGFuZHM6IDk5Mixcblx0aXJvbkp1Z3VsaXM6IDk5Myxcblx0aXJvbk1vdGg6IDk5NCxcblx0aXJvblRob3JuczogOTk1LFxuXHRmcmlnYXJpYmF4OiA5OTYsXG5cdGFyY3RpYmF4OiA5OTcsXG5cdGJheGNhbGlidXI6IDk5OCxcblx0Z2ltbWlnaG91bDogOTk5LFxuXHRnaG9sZGVuZ286IDEwMDAsXG5cdHdvQ2hpZW46IDEwMDEsXG5cdGNoaWVuUGFvOiAxMDAyLFxuXHR0aW5nTHU6IDEwMDMsXG5cdGNoaVl1OiAxMDA0LFxuXHRyb2FyaW5nTW9vbjogMTAwNSxcblx0aXJvblZhbGlhbnQ6IDEwMDYsXG5cdGtvcmFpZG9uOiAxMDA3LFxuXHRtaXJhaWRvbjogMTAwOCxcblx0d2Fsa2luZ1dha2U6IDEwMDksXG5cdGlyb25MZWF2ZXM6IDEwMTAsXG5cdGRpcHBsaW46IDEwMTEsXG5cdHBvbHRjaGFnZWlzdDogMTAxMixcblx0c2luaXN0Y2hhOiAxMDEzLFxuXHRva2lkb2dpOiAxMDE0LFxuXHRtdW5raWRvcmk6IDEwMTUsXG5cdGZlemFuZGlwaXRpOiAxMDE2LFxuXHRvZ2VycG9uOiAxMDE3LFxuXHRhcmNoYWx1ZG9uOiAxMDE4LFxuXHRoeWRyZWlnb246IDEwMTksXG5cdGdvdWdpbmdGaXJlOiAxMDIwLFxuXHRyYWdpbmdCb2x0OiAxMDIxLFxuXHRpcm9uQm91bGRlcjogMTAyMixcblx0aXJvbkNyb3duOiAxMDIzLFxuXHR0ZXJhcGFnb3M6IDEwMjQsXG5cdHBlY2hhcnVudDogMTAyNSxcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZnJhbmMgfSBmcm9tIFwiZnJhbmMtbWluXCI7XG5pbXBvcnQgeyBwb2tlbW9ucyB9IGZyb20gXCIuL3Bva2VkZXguanNcIjtcblxuZnVuY3Rpb24gaXNFbmdsaXNoKHRleHQpIHtcblx0cmV0dXJuIGZyYW5jKHRleHQpID09PSBcImVuZ1wiO1xufVxuXG5mdW5jdGlvbiBjaGVja0VuZ2xpc2goYXJyYXkpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBuZXdhcnJheSA9IFtdO1xuXHRcdGlmIChhcnJheVtpXS5sYW5ndWFnZS5uYW1lID09PSBcImVuXCIpIHtcblx0XHRcdGVuZ2xpc2hhcnJheS5wdXNoKGFycmF5W2ldKTtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coZW5nbGlzaGFycmF5KTtcbn1cbmxldCBwbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzXCIpO1xubGV0IG1pbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51c1wiKTtcbmxldCBwb2tlID0gXCJcIjtcbmxldCBmbGF2b3JfdGV4dCA9IFwiXCI7XG5sZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xubGV0IG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpO1xubGV0IGxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIik7XG5sZXQgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YVwiKTtcbmxldCBuYW1lID0gXCJcIjtcbmxldCB0eXBpbmcxID0gXCJcIjtcbmxldCB0eXBpbmcyID0gXCJcIjtcbmxldCB0ZXh0X2luZm8gPSBbXTtcbmxldCBwb2tlZGV4bnVtID0gXCJcIjtcbmxldCBlbmdsaXNoYXJyYXkgPSBbXTtcblxucGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRpZiAoIW5hbWUgfHwgbmFtZSA9PSBcInBlY2hhcnVudFwiKSB7XG5cdFx0Y29uc29sZS5sb2coXCJ5ZWVcIik7XG5cdFx0Z2V0UG9rZW1vbihgYnVsYmFzYXVyYCk7XG5cdFx0c2VhcmNoLnZhbHVlID0gXCJidWxiYXNhdXJcIjtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSB7XG5cdFx0bGV0IHBva2V2YWx1ZSA9IHBva2Vtb25zW3NlYXJjaC52YWx1ZV07XG5cdFx0Y29uc29sZS5sb2cocG9rZXZhbHVlKTtcblx0XHRsZXQgbmV4dCA9IHBva2V2YWx1ZSArIDE7XG5cdFx0bGV0IGtleUZvdW5kID0gT2JqZWN0LmtleXMocG9rZW1vbnMpLmZpbmQoKGtleSkgPT4gcG9rZW1vbnNba2V5XSA9PT0gbmV4dCk7XG5cdFx0c2VhcmNoLnZhbHVlID0ga2V5Rm91bmQ7XG5cblx0XHRnZXRQb2tlbW9uKHBva2Vtb25zW2tleUZvdW5kXSk7XG5cdH1cbn0pO1xubWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0aWYgKCFuYW1lIHx8IG5hbWUgPT09IFwiYnVsYmFzYXVyXCIpIHtcblx0XHRjb25zb2xlLmxvZyhcInllZVwiKTtcblx0XHRnZXRQb2tlbW9uKGBwZWNoYXJ1bnRgKTtcblx0XHRzZWFyY2gudmFsdWUgPSBcInBlY2hhcnVudFwiO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBwb2tldmFsdWUgPSBwb2tlbW9uc1tzZWFyY2gudmFsdWVdO1xuXHRcdGNvbnNvbGUubG9nKHBva2V2YWx1ZSk7XG5cdFx0bGV0IG5leHQgPSBwb2tldmFsdWUgLSAxO1xuXHRcdGxldCBrZXlGb3VuZCA9IE9iamVjdC5rZXlzKHBva2Vtb25zKS5maW5kKChrZXkpID0+IHBva2Vtb25zW2tleV0gPT09IG5leHQpO1xuXHRcdHNlYXJjaC52YWx1ZSA9IGtleUZvdW5kO1xuXHRcdGdldFBva2Vtb24ocG9rZW1vbnNba2V5Rm91bmRdKTtcblx0fVxufSk7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRnZXRQb2tlbW9uKHNlYXJjaC52YWx1ZSk7XG59KTtcblxuLy91cGxvYWRzIHRoZSBpbWFnZSBhbmQgcGxheXMgdGhlIGNyeSBzb3VuZCBmcm9tIHRoZSBmaXJzdCBBUEkgZmV0Y2ggcmVxdWVzdFxuZnVuY3Rpb24gYWRkSW1hZ2UocG9rZSkge1xuXHRsZXQgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JlZW5cIik7XG5cdHNjcmVlbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRsZXQgc3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cG9rZWRleG51bSA9IHBva2UuaWQ7XG5cdHNwcml0ZS5zcmMgPSBwb2tlLnNwcml0ZXMuZnJvbnRfZGVmYXVsdDtcblx0bmFtZSA9IHBva2UubmFtZTtcblx0dHlwaW5nMSA9IHBva2UudHlwZXNbMF0udHlwZS5uYW1lO1xuXHRpZiAoIXBva2UudHlwZXNbMV0pIHtcblx0XHR0eXBpbmcyID0gXCJcIjtcblx0fSBlbHNlIHtcblx0XHR0eXBpbmcyID0gcG9rZS50eXBlc1sxXS50eXBlLm5hbWU7XG5cdH1cblxuXHRzY3JlZW4uYXBwZW5kKHNwcml0ZSk7XG5cdGNvbnNvbGUubG9nKHBva2UpO1xuXHRsZXQgY3J5ID0gXCJcIjtcblx0aWYgKCFwb2tlLmNyaWVzLmxlZ2FjeSkge1xuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG5cdFx0Y3J5ID0gbmV3IEF1ZGlvKHBva2UuY3JpZXMubGF0ZXN0KTtcblx0fSBlbHNlIHtcblx0XHRjcnkgPSBuZXcgQXVkaW8ocG9rZS5jcmllcy5sZWdhY3kpO1xuXHR9XG5cdGNyeS5wbGF5KCk7XG5cdHJldHVybiBuYW1lO1xufVxuXG4vL2dldHMgdGhlIHBva2VkZXggaW5mbyBmcm9tIHRoZSBzZWNvbmQgQVBJIGZldGNoIHJlcXVlc3QgYW5kIHB1dHMgaXQgb24gdGhlIHNjcmVlblxuZnVuY3Rpb24gYWRkRmxhdm9yKGZsYXZvcikge1xuXHRkYXRhLmlubmVySFRNTCA9IFwiXCI7XG5cdGVuZ2xpc2hhcnJheSA9IFtdO1xuXHRsZXQgZW5nbGlzaGNoZWNrID0gY2hlY2tFbmdsaXNoKGZsYXZvci5mbGF2b3JfdGV4dF9lbnRyaWVzKTtcblx0bGV0IG51bXogPSAoKCkgPT4ge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmdsaXNoYXJyYXkubGVuZ3RoKTtcblx0fSkoKTtcblx0bGV0IGJhc2UgPSBlbmdsaXNoYXJyYXlbbnVtel07XG5cdGxldCBkZXNjcmlwdGlvbiA9IGJhc2UuZmxhdm9yX3RleHQ7XG5cdGxldCB2ZXJzaW9uID0gYmFzZS52ZXJzaW9uLm5hbWU7XG5cdGxldCByZWdpb24gPSBmbGF2b3IucG9rZWRleF9udW1iZXJzWzFdLnBva2VkZXgubmFtZTtcblx0bGV0IG5hbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpZiAoZmxhdm9yLmV2b2x2ZXNfZnJvbV9zcGVjaWVzLm5hbWUpIHtcblx0XHRsZXQgZXZvbHZlc2Zyb20gPSBmbGF2b3IuZXZvbHZlc19mcm9tX3NwZWNpZXMubmFtZTtcblx0fSBlbHNlIHtcblx0XHRsZXQgZXZvbHZlc2Zyb20gPSBcIm5vbmVcIjtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGV2b2x2ZXNmcm9tKTtcblxuXHRuYW1lZGl2LmlubmVySFRNTCA9XG5cdFx0XCJOYW1lOiBcIiArXG5cdFx0bmFtZSArXG5cdFx0XCI8YnI+XCIgK1xuXHRcdGBQb2tlZGV4IHZlcnNpb246YCArXG5cdFx0XCIgXCIgK1xuXHRcdHZlcnNpb24gK1xuXHRcdGA8YnI+IGAgK1xuXHRcdGBOYXRpb25hbCBEZXgjOiR7cG9rZWRleG51bX0gPGJyPiAgVHlwZToke3R5cGluZzF9IFxuXHRcdCA8YnI+IFJlZ2lvbjoke3JlZ2lvbn0gIDxicj4gRXZvbHZlcyBmcm9tOiAke2V2b2x2ZXNmcm9tfSA8YnI+IDxicj5cblx0XHQke2Rlc2NyaXB0aW9ufWA7XG5cdG5hbWVkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lZGl2XCIpO1xuXHRkYXRhLmFwcGVuZChuYW1lZGl2KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihwb2tlbW9uKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcG9rZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwb2tlbW9ufWAsIHtcblx0XHRcdG1vZGU6IFwiY29yc1wiLFxuXHRcdH0pXG5cdFx0XHQudGhlbigocG9rZSkgPT4gcG9rZS5qc29uKCkpXG5cdFx0XHQudGhlbigocG9rZSkgPT4ge1xuXHRcdFx0XHRhZGRJbWFnZShwb2tlKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocG9rZSk7XG5cdFx0XHRcdHJldHVybiBwb2tlO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCBmbGF2b3IgPSBhd2FpdCBmZXRjaChcblx0XHRcdGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy8ke3Bva2Vtb259YCxcblx0XHRcdHtcblx0XHRcdFx0bW9kZTogXCJjb3JzXCIsXG5cdFx0XHR9XG5cdFx0KVxuXHRcdFx0LnRoZW4oKGZsYXZvcikgPT4gZmxhdm9yLmpzb24oKSlcblx0XHRcdC50aGVuKChmbGF2b3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZmxhdm9yKTtcblx0XHRcdFx0YWRkRmxhdm9yKGZsYXZvcik7XG5cdFx0XHRcdHJldHVybiBmbGF2b3I7XG5cdFx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0YWxlcnQoXCJTb3JyeSwgdGhpcyBwb2tlbW9uIGlzbid0IGZvdW5kLiAgVHJ5IGFnYWluXCIpO1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0Z2V0UG9rZW1vbihcImJ1bGJhc2F1clwiKTtcblx0XHRcdHNlYXJjaC52YWx1ZSA9IFwiYnVsYmFzYXVyXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldFBva2Vtb24obmFtZSk7XG5cdFx0XHRzZWFyY2gudmFsdWUgPSBuYW1lO1xuXHRcdH1cblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9