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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,0BAA0B;;CAE1B;wDAC2C;;CAE3C,mBAAmB;;CAEnB,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,QAAQ;CACR,2BAA2B;CAC3B,WAAW;CACX,UAAU;CACV,2BAA2B;AAC5B;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,qBAAqB;CACrB,YAAY;CACZ,aAAa;CACb,+BAA+B;CAC/B,sBAAsB;CACtB,kDAAkD;CAClD,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;CACnB,YAAY;CACZ,WAAW;CACX,qBAAqB;CACrB,gCAAgC;AACjC;AACA;CACC,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,mCAAmC;CACnC,uBAAuB;CACvB,UAAU;CACV,uCAAuC;AACxC;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,aAAa;CACb,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,UAAU;CACV,QAAQ;AACT;AACA;CACC,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,8BAA8B;CAC9B,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,aAAa;CACb,eAAe;CACf,0BAA0B;CAC1B,uBAAuB;CACvB,mBAAmB;CACnB,WAAW;CACX,UAAU;CACV,YAAY;CACZ,kCAAkC;CAClC,6BAA6B;CAC7B,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,UAAU;CACV,kCAAkC;CAClC,0BAA0B;CAC1B,kCAAkC;CAClC,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,qBAAqB;CACrB,6BAA6B;CAC7B,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,+BAA+B;CAC/B,aAAa;CACb,UAAU;CACV,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;AACA;CACC,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,2BAA2B;CAC3B,qCAAqC;CACrC,kBAAkB;AACnB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,eAAe;CACf,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,2BAA2B;CAC3B,qCAAqC;AACtC;AACA;CACC,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,0BAA0B;CAC1B,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,sBAAsB;;CAEtB,0BAA0B;AAC3B","sourcesContent":["@font-face {\n\tfont-family: \"pokedexfont\";\n\n\tsrc: url(\"./Pokemon\\ Solid.ttf\") format(\"woff\"),\n\t\turl(\"./Pokemon\\ Solid.ttf\") format(\"woff\");\n\n\tfont-weight: normal;\n\n\tfont-style: normal;\n}\n\nbody {\n\tbackground-color: skyblue;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.pokedex {\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin: auto;\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\theight: 80%;\n\twidth: 60%;\n\tborder: 20px groove darkred;\n}\n\nimg {\n\theight: 100%;\n\twidth: 100%;\n}\n.left {\n\tbackground-color: red;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 10% 45% 45%;\n\tbox-sizing: border-box;\n\tborder-right: 20px groove rgba(155, 11, 11, 0.691);\n\twidth: 55%;\n}\n\n#lightsleft {\n\tgrid-area: 1/1/2/2;\n\tdisplay: Flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-direction: row;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: Red;\n\tborder-bottom: 6px solid darkred;\n}\n#circle {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: rgb(54, 143, 232);\n\tborder: 4px solid white;\n\tmargin: 2%;\n\tbox-shadow: 2px -2px -2px 2px lightblue;\n}\n\n#lightsright {\n\talign-items: center;\n\tjustify-content: flex-end;\n\tdisplay: flex;\n\tpadding-right: 2%;\n\tflex-direction: Row;\n\theight: 100%;\n\twidth: 25%;\n\tgap: 10%;\n}\n.circle2 {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: rgb(7, 7, 7);\n\tborder: 2px solid rgb(211, 211, 211);\n}\n\n#screen {\n\tgrid-area: 2/1/3/2;\n\tfont-family: \"pokedexfont\";\n\tdisplay: flex;\n\tfont-size: 48px;\n\ttext-decoration: underline;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 70%;\n\twidth: 80%;\n\tmargin: auto;\n\tbackground-color: rgb(88, 129, 88);\n\tborder: 14px groove lightgray;\n\tpadding-bottom: 4%;\n}\n\n#data {\n\tgrid-area: 3/1/4/2;\n\tmargin: auto;\n\theight: 90%;\n\twidth: 90%;\n\tbackground-color: rgb(88, 129, 88);\n\tfont-family: \"pokedexfont\";\n\tborder: 6px groove rgb(77, 75, 75);\n\tfont-size: 16px;\n\toverflow-x: scroll;\n}\n.right {\n\tbackground-color: red;\n\tborder-left: 6px solid groove;\n\tfont-size: 22px;\n\tfont-weight: 700;\n\ttext-align: Center;\n\tborder-left: 4px groove darkred;\n\tdisplay: flex;\n\twidth: 45%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n}\n.bluegrid {\n\tmargin-top: -40%;\n\tdisplay: Grid;\n\tbackground-color: blue;\n\theight: 10%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n\tmargin-bottom: 30%;\n}\n.gridsquare {\n\tborder: 2px solid black;\n}\n.blackgrid {\n\tmargin-top: 20%;\n\tmargin-bottom: -40%;\n\tdisplay: Grid;\n\tbackground-color: gray;\n\theight: 10%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n}\n.blacksquare {\n\tborder: 2px solid black;\n}\nbutton {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"pokedexfont\";\n\tfont-size: 20px;\n\theight: 45px;\n\twidth: 150px;\n\tborder-radius: 8px;\n\tborder: 6px solid gray;\n\n\tbackground-color: darkgray;\n}\n"],"sourceRoot":""}]);
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
let bottom = document.getElementById("blackgrid");
let poke = "";
let flavor_text = "";
let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");
let top = document.getElementById("bluegridid");
let data = document.getElementById("data");
let name = "";
let typing1 = "";
let typing2 = "";
let text_info = [];
let pokedexnum = "";
let englisharray = [];

top.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name) {
		console.log("yee");
		getPokemon(`bulbasaur`);
		search.value = "bulbasaur";
	} else {
		let pokevalue = _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[search.value];
		console.log(pokevalue);
		let next = pokevalue + 1;
		let keyFound = Object.keys(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons).find((key) => _pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[key] === next);
		search.value = keyFound;

		getPokemon(_pokedex_js__WEBPACK_IMPORTED_MODULE_1__.pokemons[keyFound]);
	}
});
bottom.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name) {
		console.log("yee");
		getPokemon(`mew`);
		search.value = "mew";
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
	let namediv = document.createElement("div");

	namediv.innerHTML =
		"Name: " +
		name +
		"<br>" +
		`Pokedex version:` +
		" " +
		version +
		`<br> ` +
		`National Dex#:${pokedexnum} <br>  Type:${typing1} 
		 <br> Region: Kanto <br> Weight: <br> <br>
		${description}`;
	namediv.setAttribute("id", "namediv");
	data.append(namediv);
}

async function getPokemon(pokemon) {
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1DQUFtQztBQUMvQyxRQUFRLG1DQUFtQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixhQUFhLE1BQU0sUUFBUSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxzQ0FBc0MsaUNBQWlDLGlIQUFpSCwwQkFBMEIseUJBQXlCLEdBQUcsVUFBVSw4QkFBOEIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLGlCQUFpQix1QkFBdUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLGVBQWUsZ0NBQWdDLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLEdBQUcsU0FBUywwQkFBMEIsaUJBQWlCLGtCQUFrQixvQ0FBb0MsMkJBQTJCLHVEQUF1RCxlQUFlLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsaUJBQWlCLGdCQUFnQiwwQkFBMEIscUNBQXFDLEdBQUcsV0FBVyxnQkFBZ0IsZUFBZSx1QkFBdUIsd0NBQXdDLDRCQUE0QixlQUFlLDRDQUE0QyxHQUFHLGtCQUFrQix3QkFBd0IsOEJBQThCLGtCQUFrQixzQkFBc0Isd0JBQXdCLGlCQUFpQixlQUFlLGFBQWEsR0FBRyxZQUFZLGdCQUFnQixlQUFlLHVCQUF1QixtQ0FBbUMseUNBQXlDLEdBQUcsYUFBYSx1QkFBdUIsaUNBQWlDLGtCQUFrQixvQkFBb0IsK0JBQStCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGVBQWUsaUJBQWlCLHVDQUF1QyxrQ0FBa0MsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsaUJBQWlCLGdCQUFnQixlQUFlLHVDQUF1QyxpQ0FBaUMsdUNBQXVDLG9CQUFvQix1QkFBdUIsR0FBRyxVQUFVLDBCQUEwQixrQ0FBa0Msb0JBQW9CLHFCQUFxQix1QkFBdUIsb0NBQW9DLGtCQUFrQixlQUFlLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxhQUFhLHFCQUFxQixrQkFBa0IsMkJBQTJCLGdCQUFnQixlQUFlLGdDQUFnQywwQ0FBMEMsdUJBQXVCLEdBQUcsZUFBZSw0QkFBNEIsR0FBRyxjQUFjLG9CQUFvQix3QkFBd0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsZUFBZSxnQ0FBZ0MsMENBQTBDLEdBQUcsZ0JBQWdCLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUNBQWlDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1QiwyQkFBMkIsaUNBQWlDLEdBQUcscUJBQXFCO0FBQzN2SjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdLMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBLFdBQVcsd0NBQXdDO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQSxXQUFXLHdCQUF3QjtBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQSxhQUFhLHNDQUFzQztBQUNuRDtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDc0M7QUFDdEM7QUFDQTtBQUM0QztBQUM1QztBQUNBO0FBQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUEsV0FBVyxRQUFRO0FBQ25COztBQUVBLFdBQVcsd0RBQXdEO0FBQ25FOztBQUVBLGVBQWUsMENBQUk7QUFDbkIsZUFBZSwwQ0FBSTtBQUNuQixzQkFBc0IsMENBQUk7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ08scUNBQXFDO0FBQzVDLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyx3REFBVzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBUTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsd0NBQXdDO0FBQ25EO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLHdCQUF3QjtBQUN4QixXQUFXLGVBQWU7QUFDMUIsMkJBQTJCO0FBQzNCLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3Q0FBd0M7QUFDbkQ7QUFDQSxXQUFXLGVBQWU7QUFDMUIsd0JBQXdCO0FBQ3hCLFdBQVcsZUFBZTtBQUMxQiwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHdDQUF3QztBQUNyRDtBQUNBLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLHdCQUF3QjtBQUN4QixXQUFXLGVBQWU7QUFDMUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Vk87QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QyxhQUFhLEdBQUc7QUFDaEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQixhQUFhLGdCQUFnQjtBQUM3QixhQUFhLHdCQUF3QjtBQUNyQzs7QUFFOEI7QUFDeUI7O0FBRXZELGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHdFQUFrQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1AsU0FBUywrQ0FBTztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQSxhQUFhLFFBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDTztBQUNQLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7O1VDeEI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ007O0FBRXhDO0FBQ0EsUUFBUSxnREFBSztBQUNiOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLGlEQUFRO0FBQzFCO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVEsZ0JBQWdCLGlEQUFRO0FBQzdEOztBQUVBLGFBQWEsaURBQVE7QUFDckI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQixpREFBUTtBQUMxQjtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFRLGdCQUFnQixpREFBUTtBQUM3RDs7QUFFQSxhQUFhLGlEQUFRO0FBQ3JCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksYUFBYTtBQUM1QztBQUNBLElBQUksWUFBWTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsUUFBUTtBQUN2RTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2NvbGxhcHNlLXdoaXRlLXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZnJhbmMtbWluL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZnJhbmMtbWluL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ZyYW5jLW1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uLWdyYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy90cmlncmFtLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3Bva2VkZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHsnaHRtbCd8J2pzJ30gU3R5bGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge1N0eWxlfSBbc3R5bGU9J2pzJ11cbiAqICAgU3R5bGUgb2Ygd2hpdGUgc3BhY2UgdG8gc3VwcG9ydC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3ByZXNlcnZlTGluZUVuZGluZ3M9ZmFsc2VdXG4gKiAgIFdoZXRoZXIgdG8gY29sbGFwc2Ugd2hpdGUgc3BhY2UgY29udGFpbmluZyBhIGxpbmUgZW5kaW5nIHRvIHRoYXQgbGluZVxuICogICBlbmRpbmcuXG4gKiAgIFRoZSBkZWZhdWx0IGlzIHRvIGNvbGxhcHNlIHRvIGEgc2luZ2xlIHNwYWNlLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbdHJpbT1mYWxzZV1cbiAqICAgV2hldGhlciB0byBkcm9wIHdoaXRlIHNwYWNlIGF0IHRoZSBzdGFydCBhbmQgZW5kIG9mIGB2YWx1ZWAuXG4gKiAgIFRoZSBkZWZhdWx0IGlzIHRvIGtlZXAgaXQuXG4gKi9cblxuY29uc3QganMgPSAvXFxzKy9nXG5jb25zdCBodG1sID0gL1tcXHRcXG5cXHZcXGZcXHIgXSsvZ1xuXG4vKipcbiAqIENvbGxhcHNlIHdoaXRlIHNwYWNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBjb2xsYXBzZSB3aGl0ZSBzcGFjZSBpbi5cbiAqIEBwYXJhbSB7U3R5bGV8T3B0aW9uc30gW29wdGlvbnM9J2pzJ11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFZhbHVlIHdpdGggY29sbGFwc2VkIHdoaXRlIHNwYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VXaGl0ZVNwYWNlKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7c3R5bGU6IG9wdGlvbnN9XG4gIH1cblxuICBjb25zdCByZXBsYWNlID0gb3B0aW9ucy5wcmVzZXJ2ZUxpbmVFbmRpbmdzID8gcmVwbGFjZUxpbmVFbmRpbmcgOiByZXBsYWNlU3BhY2VcblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKFxuICAgIG9wdGlvbnMuc3R5bGUgPT09ICdodG1sJyA/IGh0bWwgOiBqcyxcbiAgICBvcHRpb25zLnRyaW0gPyB0cmltRmFjdG9yeShyZXBsYWNlKSA6IHJlcGxhY2VcbiAgKVxufVxuXG4vKipcbiAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBhIGxpbmUgZW5kaW5nIGFzIHRoYXQgbGluZSBlbmRpbmcgYW5kIG90aGVyd2lzZSBhXG4gKiBzcGFjZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VMaW5lRW5kaW5nKHZhbHVlKSB7XG4gIGNvbnN0IG1hdGNoID0gL1xccj9cXG58XFxyLy5leGVjKHZhbHVlKVxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6ICcgJ1xufVxuXG4vKipcbiAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBhIHNwYWNlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VTcGFjZSgpIHtcbiAgcmV0dXJuICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZ30gcmVwbGFjZVxuICovXG5mdW5jdGlvbiB0cmltRmFjdG9yeShyZXBsYWNlKSB7XG4gIHJldHVybiBkcm9wT3JSZXBsYWNlXG5cbiAgLyoqXG4gICAqIFJlcGxhY2Ugd2hpdGUgc3BhY2Ugd2l0aCBub3RoaW5nIGlmIGl0IHN0YXJ0cyBvciBlbmRzIHRoZSBzdHJpbmcuXG4gICAqIENhbGxzIGByZXBsYWNlYCBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZHJvcE9yUmVwbGFjZSh2YWx1ZSwgaW5kZXgsIGFsbCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMCB8fCBpbmRleCArIHZhbHVlLmxlbmd0aCA9PT0gYWxsLmxlbmd0aFxuICAgICAgPyAnJ1xuICAgICAgOiByZXBsYWNlKHZhbHVlKVxuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb2tlbW9uIFNvbGlkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSxcblx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcblxuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMjBweDtcbn1cblxuLnBva2VkZXgge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IGF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0aGVpZ2h0OiA4MCU7XG5cdHdpZHRoOiA2MCU7XG5cdGJvcmRlcjogMjBweCBncm9vdmUgZGFya3JlZDtcbn1cblxuaW1nIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5sZWZ0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDQ1JSA0NSU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci1yaWdodDogMjBweCBncm9vdmUgcmdiYSgxNTUsIDExLCAxMSwgMC42OTEpO1xuXHR3aWR0aDogNTUlO1xufVxuXG4jbGlnaHRzbGVmdCB7XG5cdGdyaWQtYXJlYTogMS8xLzIvMjtcblx0ZGlzcGxheTogRmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XG5cdGJvcmRlci1ib3R0b206IDZweCBzb2xpZCBkYXJrcmVkO1xufVxuI2NpcmNsZSB7XG5cdGhlaWdodDogNjAlO1xuXHR3aWR0aDogMTAlO1xuXHRib3JkZXItcmFkaXVzOiA3NSU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMTQzLCAyMzIpO1xuXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcblx0bWFyZ2luOiAyJTtcblx0Ym94LXNoYWRvdzogMnB4IC0ycHggLTJweCAycHggbGlnaHRibHVlO1xufVxuXG4jbGlnaHRzcmlnaHQge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyJTtcblx0ZmxleC1kaXJlY3Rpb246IFJvdztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMjUlO1xuXHRnYXA6IDEwJTtcbn1cbi5jaXJjbGUyIHtcblx0aGVpZ2h0OiA2MCU7XG5cdHdpZHRoOiAxMCU7XG5cdGJvcmRlci1yYWRpdXM6IDc1JTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xuXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjExLCAyMTEsIDIxMSk7XG59XG5cbiNzY3JlZW4ge1xuXHRncmlkLWFyZWE6IDIvMS8zLzI7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogNDhweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDcwJTtcblx0d2lkdGg6IDgwJTtcblx0bWFyZ2luOiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xuXHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcblx0cGFkZGluZy1ib3R0b206IDQlO1xufVxuXG4jZGF0YSB7XG5cdGdyaWQtYXJlYTogMy8xLzQvMjtcblx0bWFyZ2luOiBhdXRvO1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDkwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcblx0Zm9udC1mYW1pbHk6IFwicG9rZWRleGZvbnRcIjtcblx0Ym9yZGVyOiA2cHggZ3Jvb3ZlIHJnYig3NywgNzUsIDc1KTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG59XG4ucmlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3Jvb3ZlO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdHRleHQtYWxpZ246IENlbnRlcjtcblx0Ym9yZGVyLWxlZnQ6IDRweCBncm9vdmUgZGFya3JlZDtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDQ1JTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjBweDtcbn1cbi5ibHVlZ3JpZCB7XG5cdG1hcmdpbi10b3A6IC00MCU7XG5cdGRpc3BsYXk6IEdyaWQ7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cdGhlaWdodDogMTAlO1xuXHR3aWR0aDogODAlO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdG1hcmdpbi1ib3R0b206IDMwJTtcbn1cbi5ncmlkc3F1YXJlIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4uYmxhY2tncmlkIHtcblx0bWFyZ2luLXRvcDogMjAlO1xuXHRtYXJnaW4tYm90dG9tOiAtNDAlO1xuXHRkaXNwbGF5OiBHcmlkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuXHRoZWlnaHQ6IDEwJTtcblx0d2lkdGg6IDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuLmJsYWNrc3F1YXJlIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5idXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwicG9rZWRleGZvbnRcIjtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdHdpZHRoOiAxNTBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3JkZXI6IDZweCBzb2xpZCBncmF5O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsMEJBQTBCOztDQUUxQjt3REFDMkM7O0NBRTNDLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUiwyQkFBMkI7Q0FDM0IsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0Isc0JBQXNCO0NBQ3RCLGtEQUFrRDtDQUNsRCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUNBQW1DO0NBQ25DLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1YsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osVUFBVTtDQUNWLFFBQVE7QUFDVDtBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsVUFBVTtDQUNWLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsNkJBQTZCO0NBQzdCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLFVBQVU7Q0FDVixrQ0FBa0M7Q0FDbEMsMEJBQTBCO0NBQzFCLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixhQUFhO0NBQ2IsVUFBVTtDQUNWLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IscUNBQXFDO0NBQ3JDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IscUNBQXFDO0FBQ3RDO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsc0JBQXNCOztDQUV0QiwwQkFBMEI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJwb2tlZGV4Zm9udFxcXCI7XFxuXFxuXFx0c3JjOiB1cmwoXFxcIi4vUG9rZW1vblxcXFwgU29saWQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuXFx0XFx0dXJsKFxcXCIuL1Bva2Vtb25cXFxcIFNvbGlkLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcblxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbi5wb2tlZGV4IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0d2lkdGg6IDYwJTtcXG5cXHRib3JkZXI6IDIwcHggZ3Jvb3ZlIGRhcmtyZWQ7XFxufVxcblxcbmltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4ubGVmdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDQ1JSA0NSU7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXItcmlnaHQ6IDIwcHggZ3Jvb3ZlIHJnYmEoMTU1LCAxMSwgMTEsIDAuNjkxKTtcXG5cXHR3aWR0aDogNTUlO1xcbn1cXG5cXG4jbGlnaHRzbGVmdCB7XFxuXFx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xcblxcdGRpc3BsYXk6IEZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogUmVkO1xcblxcdGJvcmRlci1ib3R0b206IDZweCBzb2xpZCBkYXJrcmVkO1xcbn1cXG4jY2lyY2xlIHtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDE0MywgMjMyKTtcXG5cXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG5cXHRtYXJnaW46IDIlO1xcblxcdGJveC1zaGFkb3c6IDJweCAtMnB4IC0ycHggMnB4IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2xpZ2h0c3JpZ2h0IHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyJTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogUm93O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMjUlO1xcblxcdGdhcDogMTAlO1xcbn1cXG4uY2lyY2xlMiB7XFxuXFx0aGVpZ2h0OiA2MCU7XFxuXFx0d2lkdGg6IDEwJTtcXG5cXHRib3JkZXItcmFkaXVzOiA3NSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcXG59XFxuXFxuI3NjcmVlbiB7XFxuXFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1zaXplOiA0OHB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcXG5cXHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNCU7XFxufVxcblxcbiNkYXRhIHtcXG5cXHRncmlkLWFyZWE6IDMvMS80LzI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGhlaWdodDogOTAlO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcXG5cXHRmb250LWZhbWlseTogXFxcInBva2VkZXhmb250XFxcIjtcXG5cXHRib3JkZXI6IDZweCBncm9vdmUgcmdiKDc3LCA3NSwgNzUpO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbi5yaWdodCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3Jvb3ZlO1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdHRleHQtYWxpZ246IENlbnRlcjtcXG5cXHRib3JkZXItbGVmdDogNHB4IGdyb292ZSBkYXJrcmVkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDQ1JTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG4uYmx1ZWdyaWQge1xcblxcdG1hcmdpbi10b3A6IC00MCU7XFxuXFx0ZGlzcGxheTogR3JpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcdGhlaWdodDogMTAlO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzAlO1xcbn1cXG4uZ3JpZHNxdWFyZSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5ibGFja2dyaWQge1xcblxcdG1hcmdpbi10b3A6IDIwJTtcXG5cXHRtYXJnaW4tYm90dG9tOiAtNDAlO1xcblxcdGRpc3BsYXk6IEdyaWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG5cXHRoZWlnaHQ6IDEwJTtcXG5cXHR3aWR0aDogODAlO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG4uYmxhY2tzcXVhcmUge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcInBva2VkZXhmb250XFxcIjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0aGVpZ2h0OiA0NXB4O1xcblxcdHdpZHRoOiAxNTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0Ym9yZGVyOiA2cHggc29saWQgZ3JheTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pn0gKi9cbmV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBMYXRpbjoge1xuICAgIHNwYTogJyBkZXxkZSB8b3MgfCBsYXwgYSB8bGEgfCB5IHzDs24gfGnDs258ZXMgfGVyZXxyZWN8aWVufG8gYXxkZXJ8Y2nDs3xjaG98ZWNofGVuIHxhIHB8ZW50fGEgbHxhY2l8ZWwgfG5hIHxvbmF8ZSBkfCBjb3xhcyB8ZGEgfCB0b3xhbCB8ZW5lfCBlbnx0b2R8IHBlfGUgbHwgZWx8aG8gfG50ZXwgc3V8cGVyfGEgdHxhZCB8IHRpfGVyc3x0aWV8IHNlfHJzb3xzb258ZSBzfCBwcnxvIGR8b2RhfHRlIHxjaWF8biBkfCBlc3xkYWR8aWRhfCBpbnxuZSB8ZXN0fGlvbnxjaW98cyBkfGNvbnxhIGV8IHBvfG1lbnwgbGl8biBlfG5jaXxyZXN8c3UgfHRvIHx0cmF8IHJlfCBsb3x0YWR8IG5hfGxvc3xhIHN8IG8gfGlhIHxxdWV8IHBhfHLDoSB8cHJvfCB1bnxzIHl8dWFsfHMgZXxsaWJ8bmFjfGRvIHxyYSB8ZXIgfGEgZHx1ZSB8IHF1fGUgZXxzdGF8bmFsfGFyIHxuZXN8aWNhfGEgY3xzZXJ8b3IgfHRlcnxzZSB8cG9yfGNjaXxpbyB8ZGVsfGwgZHxkZXN8YWRvfGxlc3xvbmV8YSBhfG5kaXwgc298IGN1fHMgcHxhbGV8cyBufGFtZXxwYXJ8aWNpfG9jaXx1bmF8YmVyfHMgdHxydGF8Y29tfCBkaXxkb3N8ZSBhfGltaXxvIHN8ZSBjfGVydHxsYXN8byBwfGFudHxkaWN8bnRvfCBhbHxhcmF8aWJlfGVuY3xvIGV8cyBsfGNhc3wgYXN8ZSBwfHRlbnxhbGl8byB0fHNvY3x5IGx8biBjfG50YXxzbyB8dG9zfHkgYXxyaWF8biB0fGRpZXxhIHV8IGZ1fG5vIHxsIHB8aWFsfHF1aXxkaXN8cyBvfGhvc3xndWF8aWd1fCBpZ3wgY2F8c2FyfGwgdHwgbWF8bCBlfHByZXwgYWN8dGl2fHMgYXxyZSB8bmFkfHZpZHxlcmF8IHRyfGllcnxjdWF8biBwfHRhIHxjbGF8YWRlfGJyZXxzIHN8ZXNhfG50cnxlY2N8YSBpfCBsZXxsaWR8ZGFzfGQgZHxpZG98YXJpfGluZHxhZGF8bmRhfGZ1bnxtaWV8Y2EgfHRpY3xlbGl8eSBkfG5pZHxlIGl8b2RvfGlvc3xvIHl8ZXNwfGl2YXx5IGV8bWF0fGJsaXxyIGF8ZHLDoXx0cml8Y3RpfHRhbHxyaW18b250fGVyw6F8dXMgfHN1c3xlbmR8cGVufHRvcnxpdG98b25kfG9yaXx1aWV8bGlnfG4gYXxpc3R8cmFjfGxhcnxyc2V8dGFyfG1vIHxvbW98aWJyfG4gbHxlZGl8bWVkfCBtZXxuaW98YSB5fGVkYXxpc2Z8bG8gfGFzb3xsIG18aWFzfGljb3xsaWN8cGxlfHN0ZXxhY3R8dGVjfG90ZXxyb3R8ZWxlfHVyYXwgbml8aWUgfGFkaXx1IHB8c2VnfHMgaXx1biB8dW5kfGEgbnxscXV8YWxxfG8gaXxpbmN8c3RpfCBzaXxuIHN8ZXJuJyxcbiAgICBlbmc6ICd0aGV8IHRofCBhbnxoZSB8bmQgfGlvbnxhbmR8IHRvfHRvIHx0aW98IG9mfG9uIHxvZiB8IGlufGFsIHxhdGl8b3IgfGdodHxpZ2h8cmlnfCByaXxuZSB8ZW50fG9uZXxsbCB8aXMgfGFzIHx2ZXJ8ZWQgfCBiZXxlIHJ8aW4gfHQgdHxhbGx8ZXZlfGh0IHwgb3J8ZXJ5fHMgdHx0eSB8IGV2fGUgaHx5b258IGhhfHJ5b3xlIGF8YmUgfGhpc3wgZnJ8bmcgfGQgdHxoYXN8IHNofGluZ3wgaGl8c2hhfCBwcnwgY298IHJlfGhhbHxuYWx8eSBhfHMgYXxuIHR8Y2UgfG1lbnxyZWV8ZnJlfGUgc3xsIGJ8bmF0fGZvcnx0cyB8bnQgfG4gYXxpdHl8cnkgfGhlcnxuY2V8ZWN0fGQgaXwgcGV8cHJvfG4gb3xjdGl8IGZvfGUgZXxseSB8ZXMgfCBub3xvbmF8bnkgfGFueXxlciB8cmUgfGYgdHxlIG98IGRlfHMgb3wgd2l8dGVyfG50ZXxlIGl8b25zfCBlbnwgYXJ8cmVzfGVyc3x5IHR8cGVyfGQgZnwgYSB8IG9ufGl0aHxsIGF8ZSB0fG9jaXxzb2N8bGl0fCBhc3wgc2V8ZG9tfGVkb3xlZWR8bnRpfHMgZXx0IG98b3RofHdpdHwgZGl8ZXF1fHQgYXx0ZWR8c3QgfHkgb3xpbnR8ZSBwfCBtYXwgc298IG5hfGwgb3xlIGN8Y2ggfGQgYXxlbmN8dGggfGFyZXxucyB8aWMgfCB1bnwgZnV8dGF0fGlhbHxjaWF8IGFjfGh0c3xuaXR8cXVhfCBlcXwgYWx8b20gfGUgd3xkIG98ZiBofGFsaXxvdGV8biBlfCB3aHxyIHR8c3RhfGdlIHx0aGl8byBhfHRpdHx1YWx8YW4gfHRlIHxlc3N8IGNofGxlIHxhcnl8ZSBmfGJ5IHwgYnl8eSBpfHRlY3x1bml8byB0fG8gb3wgbGl8bm8gfCBsYXxzIHJ8IHN1fGluY3xsZWR8cm90fGNvbnwgcHV8IGhlfGVyZXxpbWl8ciBhfG50cnwgc3R8IG90fGVsaXxhZ2V8ZGlzfHMgZHx0bGV8aXRsfGhvdXxzb258ZHVjfGVkdXwgd298YXRlfGJsZXxjZXN8YXQgfCBhdHwgZmF8Y29tfGl2ZXxvIHN8ZW1lfG8gZXxhdyB8bGF3fHRyYXx1bmR8cGVufG5kZXx1bnR8b3VufG4gc3xzIGZ8ZiBhfHRob3xtcyB8IGlzfGFjdHxjaWV8Y2F0fHVjYXwgZWR8YW5jfHdvcnxyYWx8dCBpfCBtZXxvIGZ8aWx5fHByaXxyZW58b3NlfHMgY3xlbiB8ZCBufGwgY3xmdWx8cmFyfG50YXxuc3R8IGFnfGwgcHxtaW58ZGlufHNlY3x5IGV8IHRyfHJzb3xpY2h8aGljfHdoaXxjb3V8ZXJufHVyaXxyIG98dGljfGl0aXxpZ2l8bGlnfHJhdHxydGh8dCBmfG9tc3xyaXR8ZCByfGVlIHxlIGJ8ZXJhfHJvdXxzZSB8YXkgfHJzIHwgaG98YWJsfGUgdScsXG4gICAgcG9yOiAnZGUgfCBkZXwgc2V8w6NvIHxvcyB8dG8gfGVtIHwgZSB8ZG8gfG8gZHwgZGl8ZXIgfGl0b3xlaXR8c2VyfGVudHzDp8Ojb3wgYSB8ZGlyfGlyZXxyZWl8byBzfGFkZXxkYWR8dW1hfGFzIHxubyB8ZSBkfCB0b3xudGV8IGNvfG8gdHx0b2R8IG91fG1lbnxxdWV8cyBlfG1hbnwgcHJ8IGlufCBxdXxlcyB8IHRlfGh1bXxvZG98ZSBhfGRhIHwgaHV8YW5vfHRlIHxhbCB8dGVtfG8gZXxzIGR8aWRhfG0gZHwgcGV8IHJlfG8gYXxvdSB8ciBofGUgc3xjaWF8YSBlfCBsaXxvIHB8IGVzfHJlc3wgZG98IGRhfCDDoCB8dWFsfCBlbXwgc3V8YcOnw6N8ZG9zfGEgcHx0cmF8ZXN0fGlhIHxjb258cHJvfGFyIHxlIHB8aXMgfCBuYXxyw6EgfHF1YXxhIGR8IHBhfGNvbXxhaXN8byBjfGFtZXxlcsOhfCBwb3x1ZXJ8c3RhfGJlcnx0ZXJ8IG8gfGVzc3xyYSB8ZSBlfGRhc3xvIMOgfG50b3xuYWx8byBvfGEgY3xpZG98cmRhfGVyZHwgYXN8bmNpfHN1YXxvbmF8ZGVzfGliZXxsaWJ8ZSB0fGFkb3xzIG58dWEgfHMgdHx1ZSB8IHNvfGljYXxtYSB8bHF1fGFscXx0b3N8bSBzfGEgbHxwZXJ8YWRhfG9jaXxzb2N8Y2lvfGEgbnxwYXJ8YWNpfHMgYXxwcmV8b250fG0gb3x1cmF8YSBzfCB1bXxpb258ZSBvfG9yIHxlIHJ8cGVsfG50YXxudHJ8YSBpfGlvIHxuYWN8w6puY3xzdHJ8YWxpfHJpYXxuc3R8IHRyfGEgcXxpbnR8byBufGEgb3xjYSB8ZWxhfHXDp8OjfGxpZHxlIGx8IGF0fHNlbnxlc2V8ciBkfHMgcHxlZ3V8c2VnfHZpZHxwcml8c3NvfMOpbSB8aW1lfHRpY3xkaXN8cmHDp3xlY2l8YXJhfCBjYXxuaWR8dHJ1fMO1ZXN8YXNzfHNldXxwb3J8YSBhfG0gcHwgZXh8c28gfHIgaXxlw6fDo3x0ZcOnfG90ZXxyb3R8IGxlfCBtYXxpbmd8YSB0fHJhbnxlcmF8cmlvfGwgZHxlbGl8w6dhIHxzdGl8IG5lfGNpZHxlcm58dXRyfG91dHxyIGV8ZSBjfHRhZHxndWF8aWd1fCBpZ3wgb3N8cyBvfHJ1w6d8aW5zfMOnw7VlfGlvc3wgZmF8ZSBufHNzZXwgbm98cmUgfGFydHxyIHB8cmFyfHUgcHxpbmN8bGVpfGNhc3xpY298dcOpbXxndcOpfG5ndXxuaW58IG5pfGd1cnxsYSB8cGVufG7Dp2F8bmEgfGnDp8OjfGnDo298Y2llfGlzdHxzZW18dGEgfGVsZXxlIGZ8b20gfHRyb3wgYW98cmVsfG0gYXxzIHN8dGFyfGVkYXxpZWR8dW5pfGUgbXxzIGl8YSBmfGlhc3wgY3V8IGFjfHIgYXzDoSBhfHJlbXxlaSB8b21vfHJlY3xmb3J8cyBmfGVzY3xhbnR8w6Agc3wgdml8byBxfHZlcnxhIHV8bmRhfHVuZHxmdW4nLFxuICAgIGluZDogJ2FuIHxhbmd8bmcgfCBkYXxhayB8IHBlfGF0YXwgc2V8IGtlfCBtZXxkYW58IGRpfCBiZXxiZXJ8a2FufHJhbnxoYWt8cGVyfHlhbnwgeWF8bmdhfG55YXxnYW58IGF0fGFyYXwgaGF8ZW5nfGFzYXxvcmF8bWVufG4gcHxuIGt8ZXJofHJoYXxuIGR8eWEgfGFwIHxhdCB8YXMgfHRhbnxuIGJ8YWxhfGEgZHwgb3J8YSBzfHNhbnx0YXN8ZXRpfHVrIHxwZW58ZyBifHNldHxudHV8biB5fHRpYXxpYXB8ayBtfGViYXxhYW58IHVufG4gc3x0dWt8ayBhfHAgb3xhbSB8bGFtfCBtYXx1bnR8IGRlfHRlcnxiYXN8YmVifGRha3xlbmR8aSBkfHB1bnxtZW18dGF1fGRhbHxhbWF8a2VifGFrYXxpa2F8biBtfCBiYXxkaSB8bWEgfCBzYXxkZW58YXUgfG5kYXxuIGh8ZXJpfCB0aXxlbGF8ayBkfHVuIHxuIGF8ZWJlfGFuYXxhaCB8cmEgfGlkYXx1a2F8IHRlfGFsIHxhZGF8cmkgfG9sZXx0aWR8bmdnfGxha3xsZWh8ZGFwfGEgcHxkaWx8ZyBkfGVuYXxlaCB8Z2FyfG5hIHxlcnR8YXBhfHVtIHx0dSB8YXR1fGEgbXxzYW18aWxhfGhhcnxuIHR8YXNpfGJhbnxlcmx8dCBkfGJhdHx1YXR8dGEgfGxhbnxhZGl8aCBkfG5lZ3wgbmV8a3VtfG1hc3xuYW58cGF0fGFoYXwgaW58bCBkfGVtcHxzZW18cnVzfHN1YXxzZXJ8dWFufGVyYXxhcml8ZXJifGthdHxtYW58YSBifGcgc3xydGF8YWkgfG5ueXxuIHV8dW5nfG5kaXxoYW58dWt1fGh1a3wgaHV8c2EgfGVyc3xpbiB8IGxhfGthIHwgc3V8YW5ufGNhcnxrZXN8YWt1fGRpcHxpIHN8YSBhfGVya3xuIGl8bGFpfHJnYXxhcnV8ayBofGkgbXxya2F8YSB1fHVzIHxuYWt8ZW1ifGdnYXxudGF8aWJhfCBwdXxpbmR8cyBwfGVudHxtZWx8aW5hfG1pbnxpYW58ZGFyfG5pIHxybWF8bHVhfHJpa3xuZHV8bGlufHNpYXxyYnV8ZyBwfGsgc3xkYSB8YXlhfGVzZXx1IGR8ZWdhfG5hc3xhciB8aXBlfHlhcnxzeWF8aWsgfGFnYXwgdGF8YWlufHVhIHxhcmd8dWFyfGlueXxwZW18dXQgfHNpIHxkdW58ZW9yfHNlb3xyYWt8bmdzfGFtaXxrZWx8aW5pfGcgdHxkaWt8bWVyfGVtdXxha3N8cmF0fHVydXxld2F8aWwgfGVudXxhbnl8a2VwfHBlbHxhc3V8cmxpfGlhIHxkaXJ8amFtfG1iYXxtYXR8cGFufGcgbXxzZXN8c2FyfGRhc3xrdWt8Ym9sfGlsaXx1IGt8Z3NhfHUgcHxhIGt8ZXJufGFudHxyYWF8dCBwfGVtYXxtdWF8aWRpfGRpZHx0IHN8aSBrfHJpbnxlcm18ZXN1fGdlcnxlbHV8bmphfGVuanxnYSB8ZGl0JyxcbiAgICBmcmE6ICcgZGV8ZXMgfGRlIHxpb258bnQgfHRpb3xldCB8bmUgfG9uIHwgZXR8ZW50fGxlIHxvaXR8ZSBkfCBsYXxlIHB8bGEgfGl0IHwgw6AgfHQgZHxyb2l8ZHJvfCBkcnwgbGV8dMOpIHxlIHN8YXRpfHRlIHxyZSB8IHRvfHMgZHxtZW58dG91fGUgbHxucyB8IHBlfCBjb3xzb258cXVlfCBhdXwgc298ZSBhfG9ubnxvdXR8IHVufCBxdXwgc2F8IHByfHV0ZXxlbWV8IGzigJl8dCDDoHwgYSB8ZSBlfGNvbnxkZXN8IHBhfHVlIHxlcnN8ZSBjfCBsaXxhIGR8cGVyfG9udHxzIGV8dCBsfGxlc3x0cyB8dHJlfHMgbHxhbnR8IG91fGN0aXxyc298b3UgfGNlIHx1eCB8w6AgbHxubmV8b25zfGl0w6l8ZW4gfHVuIHwgZW58ZXIgfHVuZXxuIGR8c2EgfGxsZXwgaW58bnRlfGUgdHwgc2V8bGlifHJlc3xhIGx8aXJlfCBk4oCZfCByZXzDqSBkfG5hdHxpcXV8dXIgfHIgbHx0IGF8cyBzfGF1eHxwYXJ8bmFsfGEgcHxhbnN8ZGFufHF1aXx0IHB8IGTDqXxwcm98cyBwfGFpcnwgbmV8IGZvfGVydHxzIGF8bmNlfGF1IHx1aSB8ZWN0fGR1IHxvbmR8YWxlfGxpdHwgcG98c2FufCBjaHzDqXMgfCBuYXx1cyB8Y29tfG91cnxhbGl8dHJhfCBjZXxhbCB8ZSBvfGUgbnxydMOpfGJlcnxpYmV8dGVzfHIgZHxlIHJ8aXRzfCBkaXzDqnRyfHBvdXzDqXTDqXxzIGN8w6AgdXxlbGx8aW50fGZvbnxvY2l8c29jfHV0IHx0ZXJ8IGRhfGF1dHxpZW58cmFpfCBkb3xpc3N8cyBufCBtYXxibGl8Z2UgfGVzdHxzIG98IGR1fG9uYXxuIHB8cHJpfHJzIHzDqWdhfCDDqnR8b3VzfGVuc3xhciB8YWdlfHMgdHwgc3V8Y2lhfHUgZHxjdW58cmF0fCBlc3xpciB8biBjfGUgbXwgw6l0fHQgw6p8YSBjfCBhY3xvdGV8biB0fGVpbnwgdHJ8YSBzfG5kaXxlIHF8c3VyfMOpZSB8c2VyfGwgbnwgcGx8YW5jfGxpZ3x0IHN8biBlfHMgaXx0IGV8IMOpZ3xhaW58b21tfGFjdHxudHJ8dGVjfGdhbHx1bCB8IG51fCB2aXxtZSB8bmRhfGluZHxzb2l8c3QgfCB0ZXxwYXl8dGF0fGVyYXxpbCB8cmVsfG4gYXxkaXN8biBzfHByw6l8cGV1fHJpdHzDqSBlfHQgw6l8YnJlfHNlbnxpbGx8bOKAmWF8ZOKAmWF8IG1vfGFzc3xsaWN8YXJ0fCBwdXxhYmx8bnRhfHQgY3xyb3R8IG9ufCBsb3x1cmV8bOKAmWV8YXZhfHRlbnxudWx8aXZpfHQgaXxlc3N8eXMgfGF5c3wgZmF8aW5lfGV1cnxyw6lzfGNsYXx0w6lzfG9pcnxldXR8ZSBmfHV0cnxkb2l8aWJyfGFpc3xpbnN8w6lyYXzigJllbnxpw6l0fGwgZXxzIMOpfG50w6l8IHLDqXxzc2l8IGFzfG5zZXxjZXN8w6kgYScsXG4gICAgZGV1OiAnZW4gfGVyIHxkZXJ8ZWlufCB1bnxuZCB8dW5kfHVuZ3xjaHR8aWNofCBkZXxzY2h8bmcgfCBnZXxpbmV8ZWNofGdlbnxyZWN8Y2hlfGllIHwgcmV8ZWl0fCBhdXxodCB8ZGllfCBkaXwgaGF8Y2ggfCBkYXx2ZXJ8IHp1fGxpY3x0IGR8aW4gfGF1ZnwgZWl8IGlufCBiZXxoZW58bmRlfG4gZHx1ZiB8ZWRlfCB2ZXxpdCB8dGVufG4gc3xzZWl8YXQgfGplZHwgamV8IHNlfGFuZHxyZWl8cyByfGRlbnx0ZXJ8bmUgfGhhdHx0IGF8ciBofHp1IHxkYXN8b2RlfCBvZHxhcyB8ZXMgfCBhbnxmcmV8bmdlfCB3ZXxuIHV8cnVufCBmcnxlcmV8ZSB1fGxsZXxuZXJ8bnRlfGhlaXxlc2V8IHNvfHJkZXx3ZXJ8aWdlfCBhbHxlcnN8biBnfGh0ZXxkIGR8IHN0fG4ganxsZWl8YWxsfG4gYXxuZW58ZWdlfGVudHxiZWl8ZyBkfGVyZHx0IHV8cmVufG5zY3xjaHV8IGdyfGtlaXxlbnN8bGUgfGJlbnxhZnR8aGFmfGNoYXx0bGl8Z2VzfGUgc3wgc2l8bWVufCB2b3xsdW58ZW0gfHIgc3xpb258dGUgfGxlbnxncnV8Z3VufHRpZ3x1bnR8dWNofHNwcnxuIGV8ZnQgfGVpIHxlIGZ8IHdpfCBzY3xyIGR8biBufGdlaHxyIGd8ZGFyfHN0YXxlcmt8IGVyfHIgZXxzZW58ZWljfGdsZXwgZ2x8bGllfGUgZXx0eiB8ZmVufG4gaXxuaWV8ZiBnfHQgd3xkZXN8Y2hsfGl0ZXxpaGV8ZWlofGllc3xydWN8c3QgfGlzdHxuIHd8aCBhfG4genxlIGF8IG5pfGFuZ3xyZiB8YXJmfGdlbXxhbGV8YXRpfG9uIHxoZSB8dCBzfGFjaHwgbmF8ZW5kfG4gb3xwcnV8YW5zfHNzZXxlcm58YWF0fHRhYXxlaGV8ZSBkfGhsaXxocmV8aW50fHRpb3xoZXJ8bnNwfGRlIHxtZWl8IGFyfHIgYXxmZmV8ZSBifHdpZXxlcmZ8YWJlfGhhYnxuZGx8biB2fHNpY3x0IGl8aGFufGVtYXxuYXR8YmVyfGllZHxnZWd8ZCBzfG51bnxkIGZ8aW5kfCBtZXxna2V8aWdrfGllw598IGZhfGlndXxodWx8ciB2fGRpZ3xyY2h8dXJjfGR1cnwgZHV8dXR6fGh1dHx0cmF8YXVzfGFsdHxiZXN8c3RyfGVsbHxzdGV8Z2VyfHIgb3xlc2N8ZSBnfHJiZXxhcmJ8b2hufHIgYnxtaXR8ZCBnfHIgd3xudGx8c293fG4gaHxubmV8ZXR6fHJhZnxkbHV8IGlofGx0ZXxtYW58aWVtfGVyaHxlcnV8IGlzfGRlbXxsYW58cnQgfHNvbnxpc2N8ZWxpfHJlbHxuIHJ8ZSBpfHJsaXxyIGl8IG1pfGUgbXxpbGR8YmlsfCBiaXxlbWV8IGVufGluc3xmw7xyfCBmw7x8Z2VsfMO2ZmZ8IMO2Znxvd2l8aWxsfHdpbHxlIHZ8cmljfGYgZScsXG4gICAgamF2OiAnbmcgfGFuIHwga2F8YW5nfGluZ3xrYW58IHNhfGFrIHxsYW58IGxhfGhha3wgcGF8IGhhfGFyYXxuZSB8YWJlfCBpbnxuIGt8bmdnfG9uZ3xhbmV8bmdhfGFudHx3b258dXdvfCBhbnwgdXd8bmlufGF0YXxuIHV8ZW4gfHJhIHx0YW58IGRhfHJhbnxhbmF8IG1hfG50aHxha2V8YmVufGJlYnxoaSB8a2UgfHNhYnxuZGF8IG5nfGFkaXx0aGl8bmFufGEga3wgYmF8c2FufGFzYXxuaSB8ZSBofGUga3xnIGt8IHV0fHBhbnxhd2F8IGJlfGViYXxnYW58ZyBwfGRhbnwgd2F8YmFzfGFrYXxkaGF8eWFufHNhIHxhcmJ8bWFufCBkaXx3YSB8ZyBkfCBuYXxnIG58YmFufCB0dXxuIHN8dW5nfHdlbnxnIHN8cmJlfGRhcnxkYWt8ZGkgfGcgdXxvcmF8YXlhfGJlIHxhaCB8YSBzfGVuaXwgb3J8aGFufGFzIHwgcHJ8YSBufG5hIHxpeWF8YSBhfGthcnxhdCB8YSBsfG1hcnx1d2V8ZHV3fHV0YXx1bmR8biBwfGFzaXxwYSB8IHNpfGFsYXxuIG58IHVufGthYnxvbml8eWEgfGkgaHxnYXJ8ZyBifHlhdHx0dW18dGEgfG4gbXxpIGt8YXBhfHRhd3wgbGl8YW5pfCBrZXxhbCB8a2EgfGthbHxuZ2t8ZWdhfCBuZXxuYWx8biBpfGcgYXxnZ298aW5hfHdlIHxlbmF8ZGFkfGliYXxhd2l8YWdhfGEgcHwgdGF8c2FyfGFkaHxhd2V8YW5kfHVqdXxpbmR8bWlufHNpbnxuZHV8dXdhfGdnZXxuIGx8Z2d1fG5nc3xuIGJ8YSBifHByYXxpaml8biBhfGhhIHwgYml8a2F0fGdvIHwga3V8ZSBwfHJvbnxrYWt8bmd1fGEgdXxnc2F8d2FyfG55YXxnIHR8cGFkfGJpc3xrIGJ8aSB3fGFlIHx3YWV8IG5kfGFsaXxhIG18ZXIgfHNha3xlIHN8a3UgfGxpeXxhbWF8aSBsfGVoIHxpc2F8YXJnfG4gdHxhIGR8a2FwfGkgc3xheW98Z2F5fCBwZXxuZGh8YmFkfHByaXxuZWd8dG93fHV0b3xlZGF8YmVkfGlsIHxpaCB8IGlrfHVyIHxrIGt8cnRhfGFydHxpIHB8cmdhfGxha3xhbWl8cm8gfGFyb3x5b218ciBrfGUgZHxhIHd8a29ufHJpYnxlbmd8Z2VyfGcgbHxyYXN8ZGlsfCB0aXxrIGx8cmFwfG1yYXx1bWF8IHBpfGsgaHxuIGR8Z2F3fHdhdHxnYSB8ayBufGFyIHxwZXJ8IHdlfG9tYXxrIHB8anJvfGFqcnxzYWp8YXNlfGluaXxrZW58c2F3fG9uYXxuYXN8a2FzfGgga3xpIHR8IHVtfHRpbnx3byB8IG1lfGFiYXxyYWt8cGFnfHlhcnxzeWF8dCBrfCB0ZXwgbXV8bmdsfCBuaXxpIGJ8bWVufGF0ZXxhIGl8YWt1fGVidXxhIHR8IGR1fGcgbXxvd298bWF0fCBsdXxhbXAnLFxuICAgIHZpZTogJ25nIHzMo2MgfMyBYyB8IHF1fGHMgCB8IHRofG5oIHwgbmd8zKNpIHzMgG4gfHZhzIB8IHZhfCBuaHx1ecOqfCBwaHxxdXl8IGNhfMOqzIBufHnDqsyAfMyAbmh8zIBpIHzMo3QgfCBjaHxvzIEgfCB0cnxuZ8awfGkgbnwgZ2l8Z8awxqF8xqHMgGl8xrDGocyAfMyBdCB8IGNvfMawxqHMo3wgY3V8YcyBY3zGsMyjIHzGocyjY3wga2h8IMSRxrB8xJHGsMahfCB0xrB8Y2/MgXwgaGF8w7RuZ3xjIHR8IMSRw6p8biB0fGkgxJF8acyAbnzMgHUgfGNhzIF8Z2lhfMyBaSB8b8yjaXxtb8yjfCBtb3zDqsyAdXxpw6rMo3zEkcOqzIB8dSBjfG5oxrB8cGhhfCBiYXwgYml8w6LMgXR8zIlhIHx1zIlhfGN1zIl8aMO0bnwgxJHDtHxnIHR8zIEgcXzMg25nfCB0aXx0xrDMo3x0IGN8zKNuIHwgbGF8biDEkXxuIGN8biBufGhpw6p8Y2ggfGF5IHxoYXl8IHZpfMOibiB8IMSRaXwgbmF8YmHMiXwgaG98ZG8gfCBkb3wgdMO0fCBoaXzDtMyjaXxoYcyBfGnMoyB8bmHMgHzMgCB0fMahzIFpfGjDom58IG3DtHzMgXAgfGHMgG58zKMgZHzMgWNofMyjcCB8zIBvIHxhzIBvfGtow7R8zIFuIHzDtMyjdHxtw7TMo3wgaMO0fGlhIHzDtMyBY3xjIGh8aMawzIN8aSB2fGcgbnzMgW5nfHXDtMyBfHF1w7R8aCB0fMO0biB8w6puIHxuIHZ8bmjDonzMoyB0fCBiw6J8aSBjfGcgdnzMiW5nfGnDqsyBfGMgY3zDosyjdHx0aMawfGjGsCB8xrDGocyBfMyJbiB8IHbGoXwgY8O0fGMgxJF8IMSRb3wgc8awfHQgdHzDtMyjY3zGsMyDbnx2xqHMgXwgdsOqfGHMiSB8zKNuZ3xnIMSRfMyJbyB8YcyJb3x1w6LMo3wgxJFhfGJpzKN8bGHMgHxzxrDMo3xiw6LMgXxoYcyAfGjDtMyjfGkgdHxhzIlufGjGsMahfMyAbmd8dHJvfMyJbSB8byB2fCBtaXzDqsyJIHx1zKNjfGkgaHzGsMyBY3xhzIFwfGcgY3zMgyBofGlhzIF8biBifMyJaSB8YSBtfGggY3xjw7RufMOqzKNufMahzIFjfGhhzKN8xJHDtMyjfCBkdXwgY8awfGEgY3xuIGh8dGhhfGHMgyB8IHhhfMyBbyB8YcyBb3xpzIFufMyAeSB8ZyBifCBoxrB8ZyBofG9uZ3xyb258zIAgY3xjaG98zIAgbnxtacyAfMawzKNjfGggdnxjIGJ8IGx1fGkgYnzDqsyjIHxhaSB8w6rMgSB8zKMgY3x4YcyDfGtoYXxjIHF8acOqzIl8dMO0zKN8w7TMgWl8xJHDtMyBfGHMgSB8aG9hfG8gaHxoIMSRfGNhzIl8biBsfGhvzKN8dGnDqnx5IHR8zIkgY3xhzKNpfGHMgW58zIAgxJF8b2HMgHx5IMSRfGNoaXzMiSBufHBow6J8w6rMgCB8dGh1fGnDqm58ZHXMo3xvIGN8aSBtfGx1w6J8YyBwfMO0zIFufGMgbHzMgSBjfHXMg258Y3XMg3xjIGd8YyBufHF1YXxuIGd8YyBtfG8gbnxhzIlpfGhhzIl8zIEgdHxobyB8dsOqzIB8IHTDonwgaMahfG8gdHzGocyJIHxoxrDMgXxoacyAfHZpw6p8zIBtIHzMiSB0fMSRb8yBfHRow7R8xrDMgSB8Y8awzIF8aGnMgXzMgW5ofGHMgHl8xqHMiW58xrDGocyJfCBixIN8dHJpfCB0YXxtIHZ8YyB2fMahzKNwfGjGocyjfGggbXwgbsawfMOqzIF0fHRoaXzEg8yjY3xuZ2h8dXkgJyxcbiAgICBpdGE6ICcgZGl8dG8gfCBpbnxpb258bGEgfCBkZXxkaSB8cmUgfGUgZHxuZSB8IGUgfHppb3xyaXR8YSBkfG9uZXxvIGR8bmkgfGxlIHxsbGF8aXR0fGVzc3wgYWx8aXJpfGRpcnx0dG98ZW50fGVsbHxpIGl8ZGVsfG5kaXxlcmV8aW5kfG8gYXwgY298dGUgfHTDoCB8dGkgfGEgc3x1byB8ZSBlfGduaXxheml8IHByfGlkdXxpdml8ZHVvfHZpZHxkaXZ8b2dufCBvZ3wgZXN8aSBlfCBoYXxhbGx8YWxlfG50ZXxlIGF8bWVufHNlcnwgc3V8IG5lfGUgbHx6YSB8aSBkfHBlcnxhIHB8aGEgfCBwZXwgdW58Y29ufG5vIHxzc2V8bGkgfGUgaXwgbyB8IHNvfCBsaXwgbGF8cHJvfGlhIHxvIGl8ZSBwfG8gc3xpIHN8aW4gfGF0b3xvIGh8bmEgfGUgc3xhIGx8ZSBvfG56YXxhbGl8dHRpfG8gcHx0YSB8c28gfGJlcnxpYmV8bGlifG8gZXx1biB8IGEgfCByaXx1YSB8aWwgfCBpbHxudG98cHJpfGVsIHwgcG98dW5hfGFyZXxhbWV8IHF1fGEgY3xybyB8b25pfG5lbHxlIG58IGFkfHVhbHxnbGl8c3VhfG9uZHwgcmV8YSBhfGkgY3xyaSB8byBvfHN0YXxpdGF8aSBvfCBsZXxhZCB8aSBhfGVyc3xlbnp8c3NpfMOgIGV8aXTDoHxndWF8aSBwfGUgY3xpbyB8IHBhfHRlcnxzb2N8bmFsfG9uYXxuYXp8aXN0fGNpYXxyc298dmVyfGEgZXxpIHJ8dGF0fGxsZXxzaWF8IHNpfHJpb3x0cmF8Y2hlfCBzZXxydMOgfGVydHxhbnp8ZXJpfHR1dHzDoCBkfGhlIHwgZGF8YWwgfGFudHxxdWF8b24gfGFyaXxvIGN8IHN0fG9jaXxlciB8ZGlzfHRyaXxzaSB8ZWQgfCBlZHxvbm98IHR1fGVpIHxkZWl8dXppfGNvbXxhdHR8YSBufG9wcnxyb3B8cGFyfG5lc3xpIGx8enphfGVzZXxyZXN8aWVufHNvbnwgZWd8biBjfG9udHxudGl8cG9zfGludHxpY298csOgIHxzdW58aWFsfGxpdHxzZW58cHJlfHR0YXxkZXZ8bml0fGVyYXxldmV8bGwgfGwgaXwgbCB8bmRhfGluYXxub258IG5vfG8gbnxyaWF8c3RyfGQgYXxhcnR8c2UgfHNzdXxpY2F8cmF6fGV0dHxzY2l8Z2lvfGF0aXxlZ3V8IG5hfGkgdXx1dHR8dmUgfCBtYXxkbyB8ZSByfHNzYXxzYSB8YSBmfG4gcHxmb258IGNofGQgdXxyaW18IGZvfGEgdHwgc2N8dHLDoHxvdHJ8cG90fG4gaXwgY3V8bCBwfHJhIHxlenp8YSBvfGluaXxzc298ZGljfGx0cnx1bml8Y2llfCByYXxpIG58cnV6fHRydXxzdGV8IGlzfGRlcnxsIG18YSByfHBpZXxsaWF8ZXN0fGRhbHxudGF8IGF0fHRhbHxudHJ8IHB1fG5ub3xhbm58dGVufHZpdHxhIHYnLFxuICAgIHR1cjogJyB2ZXwgaGF8dmUgfGlyIHxsZXJ8aGFrfCBoZXxoZXJ8aW4gfGxhcnxyIGh8YmlyfHlhIHxlciB8YWsgfGtrxLF8YWtrfGV0aXwga2F8IGJpfGV5YXxhbiB8ZXJpfGl5ZXx5ZXR8YXJhfGVrIHwgb2x8ZGUgfHZleXzEsW4gfMSxciB8bmRhfGFyxLF8ZXNpfMSxbsSxfGTEsXJ8IHRhfHRsZXxlIGh8YXPEsXxldGx8ZSBrfCB2YXzEsSB2fHPEsW58aWxlfG5lIHxya2V8ZXJrfGFyZHxpbmV8IHNhfMSxbmR8aW5pfGsgaHxrxLFufGFtYXxsZSB8dGlufHJkxLF8dmFyfGEgdnwgbWV8ZSBtfG5hIHxzaW58ZXJlfGsgdnwgxZ9hfCBidXxsYW58a2VzfGRpcnxyaW58ZGFufCBtYXxrxLEgfG1ha3zFn2FofGRhIHwgdGV8bWVrfCBnZXxuxLEgfCBoaXxuaW58ZW4gfG4gaHwgc2V8bGlrfHJsZXxhbmF8bG1hfGUgYXzEsSBofHIgxZ98aWxsfHNpIHwgZGV8YXlhfHpkaXxpemR8YWl6fGhhaXxyZXR8aGnDp3zEsW5hfCBpxZ98ZSBifCBiYXxrbGF8ZXQgfCBow7x8csSxbnxuIGt8b2xhfG5tYXxlIHR8IHlhfGVtZXxyaXl8biB2fGUgaXxhIGh8bGkgfG1pbHxlbGl8a2V0fGlrIHxrYXJ8aXJsfGjDvHJ8aW0gfGV2bHxtZXN8ZSBkfGFoc3xtYSB8cmFrfGFsYXxsZXR8bGxlfHVuIHwgZWR8cnJpfMO8cnJ8YnUgfCBtaXxpIHZ8ZGlsfCBpbHwgZcWffG4gaXxsYSB8ZWwgfG1hbHwgbcO8fCBrb3xlIGd8c2UgfCBraXxtYXN8bGVrfG1sZXxtZW18biBifGlsaXxlIGV8c2VyfCBpw6d8biBzfGRpbnwgZGl8ZXMgfG1lbHxla2V8dGlyfMWfaXR8ZcWfaXxyIGJ8YWtsfHlsYXxuIG18bGVufCBrZXxlZGl8b3J1fG5kZXxyZSB8ZWxlfG5pIHx0w7xyfGEga3xleWV8xLFrIHxrZW58dcSfdXwgdXl8ZW1sfGVyZHxlZGV8YW1lfCBnw7Z8ZSBzfGkgbXx0aW18aSBifHJkZXxyxZ/EsXxhcsWffGEgc3xpdCB8dCB2fHNpeXxhciB8cm1lfGVzdHxiZXN8cmJlfGVyYnx0ZSB8YWzEsXwgYW58bmRpfGVuZHxoc8SxfHVubXxyxLEgfGtvcnxuxLFufCBjZXxtYXp8bXNlfGltc3xraW18acOnIHwgYXl8YSBtfGxhbXxyaSB8c8SxenxhIGJ8YWRlfG4gdHxuYW18bG1lfGlsbXxrIGd8aWwgfHRtZXxldG18ciB2fGUgdnxuIGV8xJ9yZXzDtsSfcnwgw7bEn3xhbCB8xLF5bHxvbG18dmxlfMWfbWF8aSBzfGdlcnxtZSB8IGRhfGluZHxsZW18aSBvfG1heXxjYWt8w6dpbnxpw6dpfG51bnxrYW58eWUgfGUgeXxyIHR8YXogfMOnIGt8ZWNlfHPEsSB8ZW5pfCBtdXx1bHV8dW5kfGRlbnxsdW58IGZhfMWfxLEgfGFoaXxsIHZ8ciBhfHNhbnxrYXR8IHNvfGVubXwgZXZ8acWfICcsXG4gICAgcG9sOiAnIHByfG5pZXxwcmF8IGkgfG5pYXxpZSB8Z28gfGFuaXxyYXd8aWEgfCBwb3xlZ298IGRvfHdpZXxpZWt8YXdvfCBuaXxvd2l8Y2ggfGVrIHxkbyB8IG1hfHdvIHxhIHB8xZtjaXxjaSB8ZWogfCBjenwgemF8IHcgfHljaHxvxZtjfHJ6ZXxwcnp8IGthfHdhIHxlbml8IG5hfCBqZXxhxbxkfGthxbx8bWEgfHrFgm98Y3rFgnxub8WbfG8gZHzFgm93fHkgY3xkeSB8xbxkeXxpIHB8d29sfCBsdXxueSB8b2xufCB3eXxzdHd8IHdvfHViIHxsdWJ8bG5vfHJvZHxrIG18dHdhfGR6aXxuYSB8IHN3fHJ6eXxhasSFfGVjenxjem58c3RhfCBzcHxvd2F8byBwfHNwb3xpIHd8a2llfGEgd3x6eXN8b2JvfGVzdHxuZWd8YcSHIHxtaSB8Y3plfGUgd3xueWN8bmljfGpha3wgamF8d3N6fCB6IHxqZWd8d2FufMWEc3R8byBzfGEgaXxhd2F8ZSBwfHlzdHxwb3N8cG93fCByw7N8byBvfGrEhWN8b255fG5lanxvd298ZG93fMOzdyB8IGtvfGtvbHxha2l8YmV6fHJhY3xzemV8aWVqfCBpbnx6ZW58cG9kfGkgaXxuaSB8IHJvfGN5IHxvIHd8emFufGXFhHN8bm8gfHpuZXxhIHN8bHdpfG9sd3xleiB8b2RufHLDs3d8b2R6fG8gdXxuZSB8aSBufGkga3xjenl8IGJlfGFjanx3b2J8aW5ufCBvYnzDs3dufHppZXwgd3N8YWxufG9yenxuaWt8byBufGljenx6eW58xYJlY3xvxYJlfHBvxYJ8YXJvfG5hcnxhIGp8aSB6fHTEmXB8c3TEmXxpZW58Y3phfG8genx5bSB8emVjfHJvbnxpIGx8YW1pfCBvc3xrcmF8IGtyfG93ZXwgb2R8amkgfGNqaXxtaWV8YSB6fGJvZHxzd298ZG5pfHplc3xlxYJufHBlxYJ8aXUgfGVkbnxpa298YSBufHJhanwgc3R8b2RvfHpuYXx3eWN8ZW0gfGxuaXxzenl8d2lhfG55bXzEhSBwfGrEhSB8emXFhHxpZWN8cGllfHN0IHxqZXN8IHRvfHNvYnxrdMOzfGFsZXx5IHd8aWVnfG9jaHxkdSB8aW5pfHdhcnx6YXd8bm55fHJvenxpIG98d2VqfGnEmSB8c2nEmXwgc2l8bmF1fCBvcnxvIHJ8a29yfGUgc3xwb3B8emFzfG5pdXx6IHB8b3d5fHcga3x5d2F8IHRhfHltaXxocm98Y2hyfCBvY3xqZWR8a2kgfG8gdHxvZ298b2J5fHJhbnxhbnl8b3NvfGEgb3x0w7NyfCBrdHx3IHp8ZG5lfHRvIHx0YW58aCBpfG5hbnxlanN8YWRhfGEga3xpZW18YXcgfGggcHx3bml8dWN6fG9yYXxhIGR8IHfFgnxpYW58IGR6fCBtb3xlIG18YXdpfMSHIHN8Z2FufHplenxtdSB8dGF3fGRzdHx3acSFfHcgY3x5IHB8a293fG8ganxpIG18eSBzfGJvd3xrb2d8YnkgfGogb3xpZXJ8bW93fHN6YXxiIG98anUgfHluYScsXG4gICAgc3doOiAnYSBrfCB5YXxuYSB8d2EgfHlhIHwga3V8YSBtfCBuYXwgaGF8aSB5fCB3YXxhIGh8YSBufGFuYXxha2l8a2kgfGxhIHxoYWt8IGthfGt3YXx0dSB8IGt3fCBtYXxsaSB8YSBhfGlsYXxpIGt8IGtpfG5pIHxhIHd8YWxpfGEgdXwgYW58IG10fGtlIHxtdHV8YSB5fGFrZXxhdGl8a2lsfGthIHxpa2F8a2F0fGlsaXx0ZSB8b3RlfHdlIHxhIHN8ZSBrfGlhIHx6aSB8dSBhfHphIHxheml8aWZhfG1hIHx5YWt8eW8gfGkgbnxhbWF8IHlvfGF1IHwgYXV8ZSBhfGt1dHxhbWJ8byB5fGhhIHxhc2l8ZmEgfHUgd3xoYWx8YXJhfHNoYXxpc2h8YXRhfGF5b3wgYXN8dGlrfHUga3wgemF8aSB6fGluYXx1IG58bWJhfHVodXxoaSB8aHVyfGNoYXx5b3R8cnUgfHVydXx3YXR8IGNofGVyaXxuZ2l8ZSB5fHUgeXxpIGF8YWlmfHRhaXwgc2h8bmF5fGNoaXxyYSB8YW5pfCBiaXwgdWh8c2EgfCBoaXxpIGh8YXdhfGl3YXxhIGp8dGkgfG11IHxvIGt8amEgfGthbnx1bGl8aXdlfGFueXxpIHd8IGFtfGUgbnxlbmR8YXR1fGthenxvIGh8cmlhfGhlcnxzaGV8c2hpfG5jaHwgbmN8dXRhfHllIHx3YWt8aWkgfGVsZXxhbWl8YWRofGV6YXwgd298aWtpfG9qYXxtb2p8amFtfCBqYXxha2F8YnUgfGthbXxrdWx8bWF0fGZhbnxhIGx8YWd1fGluZHxuZSB8aXJpfGxpbXx3ZW58ZGEgfGt1cHx1dG98aSBtfGEgYnxpbml8d2FufGJpbHwgdGF8c3RhfGRoYXwgc2F8IG5pfGFvIHwgaHV8ZSB3fHdvdHwgeml8cmlrfGt1Znxhaml8dGEgfHdlenxueWF8aGFyfCB5ZXxlIG18c2kgfGxpbnwgdXR8aW5lfGdpbnxpbmd8IGxhfGEgdHx6aW18aW11fGltYXx0YWt8ZSBifHVuaXxpYnV8YXpvfGtvc3x5YW58bnllfHViYXxhcml8YWhpfG5kZXxhc2F8cmkgfGhhbXxkaGl8ZWxpfGhpcnx1c2h8cGF0fCBuZHxrdXN8bWFhfGRpIHxuZGF8b2EgfGJhcnxibyB8bWJvfG9rYXx0b2t8bmR3fGFsYXx3YWx8IHNpfHV6aXxoaWl8dGFofGkgc3xvIG58bGl3fCBlbHx1cGF8emlufGhhZ3xhIGN8bmRpfGFpc3xtYWl8ZW55fG13ZXxhYSB8ZXdlfCBhbHxuZG98ZSBofGxvIHx1bWl8a3VofGppYnxvc2F8bWFtfGEgenx1ZnV8ZHdhfHUgaXwgaW58aXlvfG55aXwgbnl8dSBtfHNpbHxhbmd8byB3fGd1enx6d2F8dXdhfGt1d3xoaWx8c2F3fHVjaHx1ZmF8bGF6fHVuZHxhaGF8dWEgfCBtd3xiYWx8IGxvfG8gbHxhIGl8ZGVsfG51bnxhbnV8bmppfCBiYXxsaWt8bGUgfHVrdXxpIGknLFxuICAgIHN1bjogJ2FuIHxuYSB8ZXVufG5nIHwga2F8YW5hfCBzYXwgZGl8YW5nfHVuZ3x1biB8bmdhfGFrIHwgaGF8a2V1fCBiYXxhIGJ8IGFufG51IHxoYWt8IGJvfGFudXxhdGF8bmFufGEgaHxpbmF8IGplfGFoYXxnYSB8YWggfGF3YXxqZXV8IG5hfGFyYXxpbmd8b2dhfGJvZ3xnYW58IG5nfGFzYXxrYW58YSBzfGhhIHxhZSB8YmFlfG4ga3xhIGt8IHBhfGEgcHxzYWh8ZyBzfHNhcnwgc2l8c2lufGEgbnxkaW58biBzfG1hIHwgYXR8YWdhfGEgYXx0YW58IGt1fCBtYXxuIGF8c2FufG1hbnx3YSB8bGFofHBhbnx0YXd8dSBkfHJhIHxhcml8ZXUgfCBwaXxnYXJ8IHBlfGthdHwgdGV8biBwfHNhIHxwZXJ8YSBkfGEgbXxlIGJ8YWFufGJhbnxyYW58YWxhfGlrZXxuIG58a3VtfCB0aXxhbWF8YSBqfHBpa3xpbWF8biBkfGFsIHxhdCB8IGphfGlsYXx0YSB8bmRhfGJhc3xyaW18dGV1fG4gYnxlYmF8YmVifHVkdXxheWF8aWthfG5nZ3xuYWd8a2FifHJ0YXxhcnR8IG1lfG9sYXxrIG58dW1hfGF0dXxhYmF8ZyBrfGFkaXxhY2F8IHBvfG5ndHxuYXJ8dW5hfGF0ZXxvaCB8Ym9ofGF3ZXxkaSB8dGlufGFzaXx1a3V8biBofGRhbnxha2F8aWJhfGNhcnxzYWN8Z2F3fGFyZXxlbnR8dW0gfGplbnxhYmV8dSBzfGRpbHxwb2x8YXIgfGt1IHxrdWR8dSBtfHVwYXxoYW58IGh1fGFrZXxiYXJ8dXIgfGhuYXxhcnV8aCBzfGEgdHxzYWt8d2F0fGthd3wgc298biB0fHBhIHxtcGF8ZHUgfG5na3xnIGR8ZW5hfGh1a3wgbWl8bWFzfG5nc3x0aSB8biBqfGthIHxha3V8cmVufG4gbXwgdGF8bGF3fGlzYXwgdHV8dW5kfGEgdXxoIGF8dGF5fHVsYXxhamF8YWxpfG50ZXxnc2F8ZW4gfGdhbXwgd2F8aWV1fGVyZXxrIGh8amFsfGggYnxpbCB8ZGl0fG5ndXxsYW58YXN1fHl1bnxheXV8Z3RhfGsgZHxhIHJ8ZyBufG1haHx1ZGF8ZGlwfGthc3xydXB8Z2V1fCBiZXx0ZXJ8c2VqfG1pbnxyaSB8ZXJufHUgcHxrIGt8YW1wfHVyYXxrYWx8ZSBhfGsgYXx1dCB8ZyBifG5ha3xiaXN8IGJpfGsgcHx0ZXN8ZW5kfHdlIHxoIGt8dHVufHVhbnwgdW58IGRlfHUgbnxoIHR8a3NhfHUga3xpYW58d2lsfHUgYnxvbmF8bmFzfHVrYXxyYWt8ZWplfCBzZXxhbWl8IGtlfHdhcnwgcmF8IGllfGsganxlaCB8eWEgfGxtYXxhbG18cGVufHR1cnx3YW58bGFrfGgganxnIGF8ZWFufHVwIHxyZ2F8YXJnfHIga3x1IHR8IG5lfGRldXxnYWx8Z2tlfGUgdHxoIHB8IGdlfGcgdHwgZGF8aSBuJyxcbiAgICByb246ICcgZGV8cmUgfCDDrm58yJlpIHxhcmV8ZGUgfCDImWl8dGUgfHVsIHwgc2F8cmVwfGUgZHxlYSB8ZXB0fGRyZXx0dWx8ZSBhfCBkcnxpZSB8w65uIHxwdHV8bGUgfGF0ZXxsYSB8ZSBwfCBsYXwgcGV8b3JpfCBwcnxjZSB8ZSBzfCBvcnxhdSB8dGF0fCBhcnxpY2V8aWkgfG9yIHxhIHN8IGZpfCBhIHxyaWN8YWxlfHBlcnwgY298bsSDIHzEgyBhfHJlYXxlcnN8aSBzfCBsaXxzYXV8IGNhfHJzb3xlbnR8bG9yfGHIm2l8YWwgfGEgZHxlIG98bWVufGwgbHxlaSB8ZSBjfHByaXxhbsSDfCBhY3wgcmV8dXJpfGJlcnxpYmV8bGlifGEgcHxvYW58c29hfCBpbnxpIGx8dGVyfCBhbHwgc8SDfHRlYXxsxIMgfGNhcnx0xIPIm3xzxIMgfHR1cnxpIGF8aSBkfG5hbHwgbml8cmkgfGl0YXxlIMOufGUgyJl8c2UgfGlsb3xpbiB8aWEgfMibaWV8cHJlfGZpZXzIm2lpfMSDyJtpfGNvbnxlcmV8ZSBmfGEgb3xlbml8bnRlfCBudXwgc2V8YWNlfGlyZXxpY2l8IGN1fGkgw658YSBjfGkgbnxhIGx8cGVufHVpIHxudSB8xINyaXxhbMSDfG9uYXxsIGR8csSDIHxlcnR8cmlsfCBzdXxudHJ8biBjfHJpbnwgYXN8bmkgfGkgb3xlcml8dMSDIHxjxIMgfGlsZXzEgyBkfGkgY3xlIG58ZWxlfHNhIHwgbW98aSBwfGZpIHxzYWx8dG9yfHZhIHxvY2l8c29jfG5pY3xwcm98IHVufCB0cnxlc3R8aW7Im3xhIMOufHVuaXxuIG18YSBhfCBkaXxlY3V8bHVpfHN0YXxsaXR8IHBvfHRyZXxnYWx8ZWdhfG9hdHxyYSB8YWN0fMSDIMOufGxlZ3x1IGR8ZSBsfG5kZXxpbnR8YSBmfG4gYXwgc298bmHIm3xhcmF8aSBmfHVpZXxpdW58IHRvfHRhcnxzdGV8Y2VzfHJhcnxhdCB8IGNlfGVtZXxpIMiZfHJlY3xkZXB8IGPEg3wgbyB8IMOubXxidWl8ZWJ1fHJlYnwgZWd8IG5hfG3Dom58bnR1fGlsaXx2xIPIm3zDom5kfGllaXxyIMiZfGJpbHxwbGl8b2QgfG1vZHxyZXN8ZGlufGUgZXxjyJtpfCBhdXxhbGl8xIMgcHzEgyBmfMOubXB8aWFsfGNpYXxpb258xIMgY3xkZWN8bnRhfCBvbXxpdMSDfCBmYXzIm8SDIHxjdSB8dHJhfMSDyJvEg3xudsSDfMOubnZ8w6J0IHxpdGV8aSBpfGxpY3wgcHV8IGV4fHJpdnx0cml8cm90fMibYSB8yJtpIHxsIGN8cnRhfGltaXx1bHV8yJtpb3xpY8SDfGxpZ3xyZWx8dGEgfGNsYXx0IMOufG50IHxuaXR8ZSBtfMOibnR8xINtw6J8yJvEg218Z2VyfG7Im2F8cnUgfHRydXxndXJ8dSBjfGJsaXxhYml8YXTEg3xhcnR8cGFyfGFyIHxyaW18aXZhfGwgyJl8IHNjfGltZXxuaW18ZXJhfHN1cHxpbmR8dSBhfGRpY3xpYyB8IHN0fCB2YXxpbml8aWdpfGUgcicsXG4gICAgaGF1OiAnZGEgfCBkYXxpbiB8YSBrfHlhIHxhIGR8IHlhfGFuIHxhIGF8IGtvfCB3YXxuYSB8IGEgfHNhIHwgaGF8a2lufHdhbnx0YSB8IGJhfGEgc3wgdGF8YSB5fGEgaHx3YSB8a28gfCBuYXxuIGR8YSB0fGJhIHxtYSB8biBhfCBtYXxpeWF8aGFrfGFzYXwgc2F8YXIgfGF0YXx5YW58IHphfGFra3xhIHd8YW1hfCBrYXxpIGR8aWtpfGEgbXxvd2F8YSBifCBjaXwgbXV8IHNofGFuY3xuY2l8a293fGEgenxhaSB8bnNhfGEgY3xzaGl8IMaZYXxjaWt8bmUgfGFuYXxpIGt8Y2kgfGtraXxlIGR8YSDGmXwga3V8c3UgfG4geXx1bWF8a2EgfHV3YXxrdW18aGkgfGEgbnx1dHV8IHlpfGFuaXwgZ2F8IHJhfGFrYXxhbGl8bXV0fOKAmHlhfHRhcnwgZG98yZdhbnxhcnN8IOKAmHl8c2FtfMaZYXN8bmRhfGFuZXxtYW58dHVtfGkgYXx5aSB8bmkgfCBkdXxhZGF8IHN1fGFuZHxhIGd8Y2lufCBhZHxhIGl8a2UgfCDJl2F8biBrfHlpbnx1bSB8ZSBtfCBhYnxpbnN8bmFufGtpIHxtaSB8YW1pfHlhcnxtaW58b2thfHJlIHxpIGJ8a2FtfG1hc3xpIHl8bWF0fHphIHxhbm58ZW4gfGHJl2F8IGphfG0gbnxsaSB8ZHVrfGRhaXxlIHN8biBzfHJhIHxuIHd8biBofGFpa3wgYWl8aWRhfGdhIHxzYW58cnNhfGFiYXxzYXJ8Y2UgfG5pbnwgbGF8byBufGJhbnxubmF8a2FufGFiaXx1bmF8ZGFtfG1lIHxhcmF8aSBtfGhhbHxhIHJ8YWRkfGFyZXxuIGp8YWJ1fCBuZXx6YWl8YSDJl3x3YXR8YXJpfCDGmXV8b24gfGFuc3x3YcmXfGFtZXxha2V8a2FyfGRpbnx6YW18IGZhfGEgbHzGmXVufGJ1d3xyIGR8IGh1fG9raXxrb2t8YSDigJh8dSBkfG4gdHxhYmJ8YXVyfCBpZHxyaW58eWFrfGRva3xraXl8cmF5fGphbXxuIGJ8dWJ1fGJ1YnxuIG18aSBzfCBhbnxhbSB8aWxpfGJiYXxvbWl8ZGFufGdhbXxheXV8YXNofG5jZXx0c2F8YXlpfGhhcnx5eWF8aWthfGJpbnxoYW58a2tvfHJzdXxhaWZ8aW1pfGZhIHwgYW18aSBpfGRvbXwga2l8eXV3fGR1bnxvIGF8ZmFufG4gxpl8YXlhfGZpIHxuIHJ8c2hlfHVuaXxiYXl8cml5fG4g4oCYfHNhYnwgaXl8YmF0fHRhYnxhZ2F8IGlyfG1hcnxvIHd8aSB3fHNoYXxhd2F8IGFrfHVuc3x1bmN8dHVufHUga3wgaWx8yZdpbnxtZmF8YW1mfGFjaXxld2F8a2FzfGxpbnxuIG58ZG9ufG4gaXx1cmV8aWZpfGxhaXxkZGF8IHRzfGlyaXxheWV8dW4gfHRhbnx3YWR8Z3dhfGFmaXwgYXl8YWNlfG1iYXxhbWJ8YWlkfG50YXxhbnR8d2FyfGxpbXxreWF8IGFsfGHJl2knLFxuICAgIGZ1djogJ2RlIHwgZSB8ZSBufCBoYXxuZGV8bGEgfCB3YXxpbmF8IGthfGFra3wgbmR8yZdvIHxuYSB8IGlufGUgZXxoYWt8YWwgfGRpIHxpIGh8a2tlfGlpIHx1bSB8a28gfGFsYXxuZGl8IG11fCBuZXxsbGF8IGpvfHdhbHxlyZfJl3xuZcmXfGFsbHxtdW18IGZvfGthbHxqb2d8a2UgfGFhd3x0YWF8IGtvfGVlZHzJl8mXb3xhYSB8IGxlfGppIHxhZGV8YWFkfGxhYXxvIGt8IG5nfGUgaHwgdGF8cmUgfG9naXxhIGp8ZSB3fGUgbXxubmR8Z2lpfGUgbHxsZXl8YXdhfGFhZ3xlZGV8d2FhfGUga3xndSB8ZSBkfCBnb3xnYWx8yZNlIHx0aSB8Zm90fGFhbnxleWR8eWRpfMmXZSB8ZWUgfCByZXxvbCB8b3RvfGkgZXxvdGl8bSBlfHRhd3xuZ2F8YSBpfGtlZXx0byB8YW5ufGVqaXxhbSB8bmkgfCB3b3xlZW58Z29vfGVlanxlIGZ8IGhlfGVubnxnb2x8YWd1fHBvdHwgcG98ZGVlfGF5IHwgZmF8a2EgfGEga3xvbmR8b290fCBkZXxhIGZ8byBmfGEgbnx3YSB8bWFhfG90YXxsZSB8aGF5fGkga3xvIG58bmdvfGUganxvIHR8IGphfMOxYWF8aGVlfG5rYXxpIHd8YXdpfGEgd3xuZ3V8ZGVyfCB0b3xlIHR8ZGltfGkgbnxmb2Z8aSBmfGUgZ3x0ZWV8bmFhfGFha3wgZG98dG9vfGEgZXxuZG98cmVufGRpaXxvb3J8ZXIgfG8gZXxpIG18b2YgfCBzYXwgc298Z2FhfGFuaXxrYW18IG1hfCDDsWF8byB3fGkgbHx1IG18a2FhfGltYXxkaXJ8IGJhfGlnZ3xsaWd8IGxpfGFhcnwgyZNlfG8gaXxlIHN8IG8gfGUgcnxzbyB8b29qfCBuanwgbGF8d29ufGF3b3xkb3d8d29vfGZhd3xhbmR8ZSBpfG9yZXxuZ2V8bmFufGFyZXxhIHR8dGlufGFhbXwgbW98yZdlZXxpdGF8aXJhfGFhyZd8ZSBwfG5uZ3xtYSB8YW5rfHlhbnxuZGF8b28gfGUgyZN8bmpvfHVkZXxuZWV8ZSB5fGUgYXxqZSB8IHlhfGVuIHxpbmV8aWlufCBkaXxyYWx8IG5hfMmXaSB8dW5kfCBodXxpbm58xYtkZXxhxYtkfGphxYt8YSBkfGRlbnwgZmV8IHRlfGdvIHwgc3V8YSBofGhhYXx0YWx8ZcmXZXxlIGJ8eSBnfGJhYXx0ZGV8IHlpfMmXyZdhfG8gaHxpacmXfG93IHwgZGF8ZG8gfGwgbnxhbHR8IGhvfGwgZXxhZ2F8bWlpfCBhYXxhIGF8YW1hfG5uYXxtIHR8IGtlfGVkZHxvZ2F8bSB3fGwgbXxvIGp8YcmXZXxyZWV8b2plfHllZXwgbm98ZWxlfG5lIHxhZ298IHBhfCBhbHxndXV8d2kgfGdlIHxhYcmTfGRhYXxpbmR8ZGV3fGkganxqZXl8IGplfGVudHx0YW58byDJl3xnZcmXfCBnZXzDsWVlfGEgbHwgyZd1fGtrb3xtYWt8YSBzfCBnYScsXG4gICAgYm9zOiAnIHByfCBpIHxqZSB8cmF2fG5hIHxtYSB8cHJhfCBuYXxpbWF8IHN2fGEgc3xkYSB8YSBwfHZvIHxuamV8a28gfGFrb3xhbmp8byBpfCBwb3xhdm98amEgfGUgc3xhIGl8dGkgfCBpbXwgZGF8IHUgfHN2YXxubyB8anUgfCB6YXxvIG58dmEgfGkgcHxpbGl8dmFrfGxpIHwga298bmUgfCBpbHxrb2p8IG5lfG5qYXwgZHJ8b3N0fCBzbHx2YW58aW0gfGkgc3x1IHN8aSBpfGEgbnxhdmF8aWplfGEgdXwgYml8c3R2fHNlIHxhIGR8b20gfGplZHxib2R8b2JvfGxvYnxzbG98IHNlfCByYXxpaCB8c3RpfCBvYnwgamV8cHJpfGVuanxkcnV8dSBpfG8gZHxpdGl8dm9qfHJhenxvdmF8ZGplfCBvc3xlIGl8bG8gfGUgcHwgbmp8dWplfGkgZHxicmF8dHJlfCB0cnwgc3V8amVnfGkgbnx1IHp8YSBrfG9nIHx1IHB8b2plfGNpanxyZWJ8YSBvfGEgYnxsanV8aSB1fHJhbnxtaWp8bmkgfG5vc3xqZW58YmEgfGVkbnxzdm98IGl6fGplbHxwcm98ZSBkfMW+YXZ8Yml0fCBuaXxpIG98c3RhfGEgenxhdm58dmplfCBrYXxiaWx8b3ZvfGEganxhanV8aXN0fG5paHx0dSB8cmVkfGdvdnwgb2R8ZSBvfG9qaXwgc218bGplfG8ga3xpbG98amkgfGFjaXxlIHV8ZSBufHByZXxvIHB8ZWJhfHUgb3xzdSB8dmltfGnEjW58IHNhfHUgbnwgZGp8YSB0fGlqYXzEjW5vfGplbXxyxb5hfGRyxb58ZWxqfHN0dXxkbmF8b2RufGVuaXx6YSB8aXZhfG9sanzFoXRpfG5vbXxlbSB8ZHUgfHZub3xzbWl8amVyfGUgYnxkZSB8cG9zfG0gaXwgZG98dSBkfG5ha3xhIHJ8b2JyfCBtb3xsamF8bmltfGVnb3wga3J8dGl0fGtyaXx2ZSB8bmp1fGFuIHxpa298bmlrfG51IHxpIG18bm9nfGVub3xzbm98IHN0fGUga3x0dXB8cnVnfGthIHxvZGF8cml2fHZvbHxhbG58bSBzfGl0dXxhxaF0fHphxaF8YW5pfHNhbXxha3Z8b3ZpfG9zbnxyb2R8YXJvfCBtaXx0dmF8ZG5vfG5zdHxqYW58YWsgfGl0ZXx2acSNfHJhZHx1IG18IHRhfGRzdHx0aXZ8bmFjfHJpbXxrb258a3UgfG9kdXzFvml2fGFtb3x0dm98dGVsfHBvZHxnIHB8bm92fGluYXxuYXJ8IHZqfG8gc3xpIGJ8b2ogfCBvdnxhdmV8dnUgfGFuc3xvamF8em92fGF6b3x1ZGV8YnVkfCBidXxlIHR8aSB2fGRpbnxlZGl8bmljfHRhbnxuYXB8bWplfCBpc3xqYWx8c2x1fHB1bnxlZHN8byBvfHpha3xqYXZ8aSBrfG0gcHx0bm98aXZvfGVyZXxuacSNfG0gbnxqaW18a2FrfGFkYXx2bml8dWdpfCByb3xtb3Z8dmVufHBvbHx0byB8dGUgfCB2cicsXG4gICAgaHJ2OiAnIHByfCBpIHxtYSB8cmF2fGltYXxwcmF8amUgfG5hIHwgc3Z8dGkgfCBuYXxhIHB8dm8gfHZhdHxrbyB8YSBzfG5qZXwgcG98YW5qfGF2b3xvIGl8dGtvfCBpbXxhIGl8c3ZhfG5vIHxpIHB8ZSBzfGphIHxvIG58IHphfGp1IHxpbGl8IHUgfHZhIHxsaSB8IGJpfG5lIHxpIHN8YXRrfCBpbHxpdGl8ZGEgfCBuZXwga298IGRyfCBzbHx2YW58bmphfGtvanxpamV8IHJhfG92YXwgb3N8dSBzfGkgaXxvc3R8Ym9kfG9ib3xsb2J8c2xvfHByaXxhIG58b20gfGplZHxhdGl8aWggfGltIHx2b2p8YXZhfCBvYnxzdHZ8c2UgfCBtb3xpIHV8Yml0fGRydXwgamV8IHNlfGRqZXxpIG98ZW5qfCBrYXxpIG58c3RpfGxvIHx1IGl8c3ZvfG1panxuaSB8ZSBpfHJhenxhIG98ZSBufGJyYXxvIHB8IHN1fGEgYnx1IHB8cmFufGEga3xvZyB8aSBkfGJpbHxha298ZSBwfGEgZHxlZG58YWp1fG1vcnxlbml8IG5qfGl2YXxqZWx8xb5hdnwgbml8YSB6fGF2bnxvdml8ZW5vfHJhIHxvamV8YSBqfCBkYXxhIHV8b3JhfGplZ3wgaXp8bmlofHLFvmF8ZHLFvnxvaml8c25vfG5pdHxqZW58dmplfGlsb3xjaWp8b2RhfG5pbXwgZGp8cHJvfHRpdHx1IHp8ZSBkfHJlZHxub218amVtfCBvZHxub3N8c3RhfG5vdnxvc258IHNtfGxqZXxvIHN8amkgfG92b3xzdHV8cG9zfHZpbXwgZG98b2RufHJhZHxpc3R8IHNhfGUgb3x0dSB8bmp1fGVtIHxnb3Z8byBkfHJvZHxpIG18amVyfGFjaXxvaiB8cHJlfG0gaXxuYWt8ZG5hfGEgcnxsanV8dWplfGUgbXxvYnJ8emEgfG9sanx2ZSB8byBvfG0gc3xhbiB8bnUgfGR1IHxhcm98dm5vfHNtaXxhbG58ZSBrfG8ga3xpIGJ8ZSB1fHR2YXx1IHV8dHVwfHJ1Z3xkbm98dSBvfHN1IHx1IGR8a2EgfHZvbHwgdGF8aWphfGl0dXzFoXRpfGHFoXR8emHFoXxpdGt8xb5pdnxhbml8c2FtfGVsanwgc3R8c29ifG9zb3xuYXJ8YWt2fGFkYXwgbWl8dGUgfG9uYXxuc3R8amFufGxqYXxpIHZ8aXRlfGVnb3xlbG98cmltfGt1IHxvZHV8YW1vfHR2b3x0ZWx8amltfHBvZHxub2d8dmkgfGluYXwgdmp8dG8gfGUgYnxhbnN8em92fGF6b3xhayB8IHNrfGVkaXx0YW58b2p1fHB1bnxwb3R8b3RpfGtvbnx6YWt8aSBrfG0gcHx0bm98aXZvfGVyZXxuacSNfGtha3x2bml8dWdpfCByb3xtb3Z8dmVufMWhdHZ8IGJlfGFyYXxrbGF8YXZlfHUgYnxhdml8b2phfGphbHx1IG18ZG5pfG1qZXxyYWt8ZGlufMSHaSB8anXEjXxrbGp8bmljfHUga3xuYXB8b2JpfGF0bicsXG4gICAgbmxkOiAnZW4gfGFuIHxkZSB8IGRlfCBoZXxpbmd8Y2h0fCBlbnxkZXJ8dmFufCB2YXxuZyB8ZWVufGV0IHxlY2h8IGdlfCBlZXxuIGV8cmVjfCByZXxuIHZ8biBkfG5kZXx2ZXJ8IGJlfGVyIHxlZGV8ZGVufCBvcHxoZXR8biBpfCB0ZXxsaWp8Z2VufHppanwgeml8aHQgfGlqa3xlbGl8IGlufHQgb3wgdmV8b3AgfGFuZHx0ZW58a2UgfGlqbnxlIHZ8am4gfGllZHwgb258ZWZ0fCBpZXxzY2h8biB6fG4gb3xhYW58ZnQgfGVpZHx0ZSB8b29yfCB3ZXxvbmR8ZWVmfGVyZXxoZWV8aWQgfGluIHxyZGV8biB3fHQgcnxhYXJ8cmlqfG9yZHx3b3J8ZW5zfG9mIHwgb2Z8aGVpfG4gZ3wgdnJ8IHZvfCBhYXxyIGh8aHRlfCB3b3xuIGh8YWwgfG5kIHx2cml8ZSBvfHJlbnxsZSB8b3IgfG4gYXxqa2V8bGxlfGVuaXxuIGJ8aWogfGUgZXxnIHZ8IHN0fGlnZXxkaWV8ZSBnfG1lbnxuZ2V8dCBofGUgYnwgemF8ZSBzfG9tIHx0IGV8YXRpfHdlbHxlcmt8c3RhfGVyc3wgYWx8IG9tfG4gdHx6YWx8ZGlnfCBtZXxzdGV8dm9vfHRlcnxnaW58cmUgfGVnZXxnZSB8ZyBlfGJlc3xuYXR8IG5hfGVrZXxjaGV8aWcgfGdlbHxuaWV8bnN0fGUgYXxuaWd8ZXN0fGUgd3xlcnd8ciBkfGVuZHxvbmF8ZCB2fGpoZXxpamh8ZCBlfGVsZXwgZGl8aWUgfCBkb3xkZWx8biBufGF0IHxpdCB8IGRhfHRpZXxlIHJ8ZWxrfGljaHxqayB8dm9sfGlqZHx0ZWx8bWlufGxlbnxzdHJ8bGlufG4gc3xwZXJ8dCBkfGhhbnwgem98aGFwfGNoYXx3ZXR8IHRvfHZlbnwgbml8YWF0fGlvbnx0aW98dGFhfGxrZXxlemV8bWV0fGFyZHx3YWF8dWl0fHN0aXxlIG58ZG9vfHBlbnxldmV8ZWwgfHRvZXxhbGV8aWVufGFjaHxzdCB8bnMgfCB3YXxlbWV8bmlufGUgZHxiaWp8IGdyfG4gbXxwIHZ8ZXNjfHQgd3xvbnR8aXRlfG1hbnxlbWF8IG1hfG5hbHxnIG98cmlufGhlZHx0IGF8dCB2fGJlZ3xhbGx8aWpzfHdpanxyd2l8ZSBofCBiaXxncm98cCBkfHJtaXxlcm18aGVyfG9vbnwgcGV8ZWl0fGtpbnx0IHp8aWV0fGllbXxlIGl8Z2VtfGlnaXwgYW58ZCBvfHIgZXxldGV8ZSBtfGpzIHwgaHV8b2VwfGcgenxlZGl8YXJifHplbnx0aW58cm9ufGRhYXx0ZWd8ZyB0fHJhZnx0cmF8ZXJpfHNvb3xuc2N8dCBifCBlcnxsYW58IGxhfGVybnxhciB8bGl0fHpvbnxkIHp8emUgfGRlenxlaG98ZCBtfHRpZ3xsb298bWVlfGdlcnxhbGl8Z2V2fGlqZXxleml8Z2V6fG5saXxsIHZ8dGlqfGVlcnwgYXInLFxuICAgIHNycDogJyBwcnwgaSB8cmF2fG5hIHxwcmF8IG5hfG1hIHwgc3Z8aW1hfGRhIHxqYSB8YSBwfHZvIHxqZSB8a28gfHRpIHxhdm98IHBvfGEgaXxha298YSBzfCB6YXwgdSB8anUgfG8gaXwgaW18bmplfGkgcHx2YSB8c3ZhfGFuanx2YWt8IGRhfG8gbnxuamF8ZSBzfG9zdHwga298YSBufGxpIHxpbGl8bmUgfG9tIHwgbmV8aSBzfCBzbHwgaWx8IGRyfG5vIHxrb2p8dSBzfGF2YXwgcmF8b2cgfHNsb3xpbSB8ZW5qfHN0aXxib2R8b2JvfGxvYnxpdGl8YSBvfHN0dnxpIHV8YSBkfG5pIHxqZWR8dSBwfHByaXxlZG58IGJpfGkgaXxhIGt8byBkfHN0YXxpaCB8ZHJ1fGEgdXwgamV8IG9zfCBuaXxub3N8cHJvfGFqdXxpIG98cmFufCBkZXwgc3V8dSBpfHNlIHx2YW58b3ZhfGkgZHxjaWp8IG9ifHVqZXxyZWR8xb5hdnxlIGl8aSBufHZvanxlIHB8YSBqfGRuYXwgc2V8IG9kfHZlIHwga2F8ZW5pfHLFvmF8ZHLFvnxhIHp8YXZufGFjaXxvdm98dSB1fG0gaXxvamF8IGl6fGxqYXwgbmp8aWphfHUgenxlIG98cm9kfGplbnxsamV8ZSBifHJhenxqYW58bGp1fHN2b3x6YSB8Z292fGnEjW58IHN0fG5vdnxzbm98b3NufGR1IHxqaSB8cHJlfCB0cnxzdSB8dnUgfG9kbnxhIGJ8amVnfG5pbXxuaWh8dHUgfHRpdHzFoXRpfGt1IHxub218Yml0fGUgZHxtZSB8aWtvfMSNbm98b2ppfGxvIHx2bm98bmlrfGUgbnzEkWVufGlrYXxiZXp8YXJhfGRlIHx1IG98dmltfG5ha3wgc2F8dSBufHJpdnxhdmV8YW4gfG9sanx2b2x8IGtyfG8gcHxzbWV8ZSBrfG5vZ3wgb3Z8ZSB1fHR2YXxicmF8cnVnfHJlYnx0cmV8dSBkfG9kYXwgbW98IHZyfHZsanxhdmx8ZWdvfGphdnxkZWx8bSBzfGtyaXxvIGt8YcWhdHx6YcWhfG5qdXwgc218YW5pfCBsaXxkbm98ZcSRdXxhbG58bGEgfGFrdnxvaiB8xaFlbnxrb218c3R1fHVnaXxhdml8YSByfGthIHxyYWR8b2p1fHRhbnxvZGl8dmnEjXx0YXZ8aXR1fHVkZXxidWR8IGJ1fHBvdHxvZHV8xb5pdnxlcmV8bSBufHR2b3xpbG98YmlsfGFyb3xvdml8cG9yfGVub3zFoXR2fG5hY3xvdmV8bSBwfHR1cHxwb3N8cmVtfGRuaXxiYSB8bnN0fGEgdHxhc3R8aXZhfGUgbXx2cmV8bnUgfGJlxJF8aXN0fHB1bnxlbiB8dGUgfGRzdHxyb3R8emFrfGFvIHxrYW98aSBrfGp1xId8byBzfHN0IHxzYW18dGVyfG5hcnwgbWV8aSBtfGtvbHxlIHJ8dcWhdHxydcWhfHZlcnxrYWt8IGJlfGkgYnxrbGF8YWRhfGViYXxlbmF8b25hfCBvbnx0dnV8YW5zfCBkb3xyYWt8c2x1JyxcbiAgICBja2I6ICcgaGV8IMO7IHzDqm4gfCBiaXwgbWF8bmEgfGluIHxtYWZ8IGRpfGFuIHx4d2V8IHh3fGt1IHwga3V8a2VzfCBkZXwgaml8aGVyfGtpcnxpeWF8eWEgfHJpbnxpcml8amkgfGJpIHxlcyB8IG5lfHllIHx5w6pufGUgYnxlciB8YWbDqnx0aW58a2UgfCBhbnxpecOqfGV5ZXxya2V8ZXJrfHdlIHwgYmV8ZSBofGRlIHwgd2V8aGV5fGbDqiB8aSBifHnDqiB8aW5hfCBiw6p8IGxpfGRpeXxiZXJ8bGkgfHJlIHzDriDDu3xuw6ogfMOqIGR8IHNlfCBjaXxla2V8ZGkgfHfDriB8IG5hfMOuIHl8YWYgfGV0ZXxoZW18IHfDrnxzdGl8IGtpfHLDriB8a8OuIHzDriBhfHlla3xuIGR8a2FyfCB0ZXxuZSB8ecOuIHxpIGh8ZSBrfHTDriB8dMOqIHxhIHd8ZSBkfMOuIGJ8cyBtfGFzdHxuIGJ8YmUgfHlhbnxzZXJ8dGV3fG5ldHwgdHV8IGV3fGhldnxhemF8YXJhfMO7IGJ8biBrfGFkaXxldiB8emFkfCBhenxyYXN8ZXN0fGFuw6p8IHlhfG4gaHxuIMO7fHdlZHwgdMOqfHdla3xiYXR8Ym8gfCBib3wgecOqfHN0IHxuIG58w6oga3xkYW58w6ogaHxlbWF8w6ogYnxpeWV8w64gaHxkaW58YsO7bnxyIGt8ZWvDrnwgbWV8cGFyfMO7bmF8dGEgfHdsZXxld2x8w64gbXwga2V8bmF2fGV3ZXxtYW58w6ogdHxkw64gfMO7IG18bcO7IHxlbcO7fGEgbXxpa2F8ZSDDu3xuIHd8YSB4fMOqIG18ZSBufCB0YXxlbGF8biBqfGV5w6p8biB4fGNpdnx3ZXl8YW5hfCByZXxraGV8ZWtofGJpa3xrw6ogfGrDriB8ZiBofGVyw658IHBhfMOubmF8YmlufGVyYnx2YWt8aXZhfGEgc3wgbml8Y2lofHbDqiB8ZSBqfGFyaXwgcMOqfMOuIGR8bsOqbnxpa2V8ZSB0fGEga3zDqiB4fCB5ZXxuIGF8ZXnDrnxuIGV8YW1hfGLDqiB8YXIgfGV3YXxhdMOqfGJlc3xyYmV8YXYgfGliZXxpc3R8bcOuIHx0ZW18YXdhfGFyZXxow64gfGdlaHxuZ2V8aW5nfG5la3xuw7tufGFuw7t8cWFufCBxYXx2w64gfHJ0aXx1a2V8dHVrfCDFn2V8ZXphfCBkYXx1IGR8w7sgYXxmIMO7fGVkaXwgcmF8dHUgfHRpeXx0w6pufCBtaXx4ZWJ8IGdlfGjDrm58IGjDrnxldMOqfMOuIGp8c3TDrnxtYWx8YmlifHJhIHxpIGR8ZSBtfG1hbXxpIGF8bmlrfGkgbXzDriBrfCB3aXzDu24gfCBrb3xhIMWffMOqIGp8cml5fGxhdHx3ZWx8ZSBlfGluZXxhbmV8w7sgaHzDrm4gfGEgZHxzaXl8ZW5kfGF5ZXwgemF8aWphfGEgbnzDriBufGVrIHx0ZWt8eWV0fG1iZXxlbWJ8w7sgZHxyb3Z8aXJvfG1pcnxlYmF8IHhlfG3Dqm58IMOqbnwgaHV8bsOubnxhbsOufHQgw7t8dGVufG4gbXxkZW18w6ogw7t8ZW7Dqnx0ZSB8YXJ0fGkgcnwgasOufHUganxla8OqfGRldycsXG4gICAgeW9yOiAnIG7DrXx0aSB84buNzIEgfG7DrSB8IGzDoXwg4bq5zIB8w6BuIHzhurnMgSB8a2FufHTDrSB8IHTDrXxhbiB84bq5zIAgfHThu43MgXzhu43MgCB8IOG6uW584buNbiB8d+G7jW58w60g4bq5fGLDrSB8w6F0aXxsw6F0fMyAdOG7jXzhurnMgHR8IGdifCDDoHR8IMOgd3xuIGx8w6B0aXwgYSB8bOG6ucyAfOG6uW7DrHwgw7MgfGvhu43MgHwgbMOzfMOsIGt8c8OtIHzhu43MgGt8IGvhu418cmEgfG5pIHzDoGLDrXx0w6BifCB0w6B8bsOsIHwgc8OtfMyAa2F84buNzIDhu418biDhurl8w6B34buNfG4gdHzDsyBufMyA4buNzIB8w61s4bq5fG9yw618bMOzIHwgd+G7jXx0w7MgfGTDqCB8w6x5w6B8w7puIHwgdMOzfCBvcnzDrSDDrHzDqGTDqHxrw7IgfOKAkMOoZHzMgOKAkMOofOG6ucyA4oCQfHLDrWx8w60gw7N8cuG6ucyAfMOtIMOgfCBzw6x8ecOgbnxnYm984bmjZSB8IGvDsnzDrSBhfCBy4bq5fCBq4bq5fHPDrCB8IGLDoXxyw6BufCDhuaNlfHfhu43MgXxuw6x5fGbDum58IGbDunxuIMOgfGJhIHxuIG58Z2LDoHxnYuG7jXxq4bq5zIF8dW4gfMOsw60gfCBrw618Z2JhfMOobsOsfCDDqG58YsOhIHzMgSBsfGEga3wga2F8ZOG7jcyAfGvDrSB8IMOybXxpbiB8IGZpfGLDsiB8ZmkgfGLhurnMgXzhu41k4buNfGLhu41kfMyBIHN8aHVufG7DuiB8bsOtbnx3w6AgfGlyYXxuaXJ8w7Jtw6x8w6xnYnwgw6xnfMyBIHR84bq5bml8w61uw7p8aSBsfMOsbml8bcOsbnxiw6AgfMOhw6AgfGkgw6x8b2h1fCBvaHzDrSBpfGFyYXwgdGl8Ym8gfMOyIGx8IHDDqXxyw7ogfMOtcsOgfCDhu43MgHzDrSDDsnxvZ2J8a+G7jcyBfHDhu43MgHzDsyBifMOgIHR8aSBufGzhu43MgXzhurnMgW58IMOsYnx5w6zDrXxnYsOpfGfhurnMgXxib2d8w7PDsiB8ecOzw7J8IHnDs3xuIGt8cMOpIHxkw6EgfMyBd+G7jXzhu43MgXd8w6AgbHzDrSBrfCB3w6B8biBvfGrhu40gfCBpcnzhu43MgHJ8w7ogw6x8zIEgw6B8w7Mgc3xpIHR84bmj4bq5zIF8zIBr4buNfMOtIHR8ecOpIHxsw6ggfCBsw6h8ZmlufMOgYsOyfCBs4buNfMOgIG58w7lq4buNfHfDuWp8aXLDunzDsyBqfCBhcnzDrSB3fGEgd3wgw6xtfMO6IMOgfMyAIHR8w7JmaXwgw7JmfCDDoMOgfGbhurnMgXzDoHfDuXzMgW5pfHfDuSB8w6zDrXJ8bcOsw618IG3DrHxsw6HDrHwgecOsfMOtIGd84buNzIFufG4gc3xpIOG6uXzhurnMgGt8w6BnYnzDrWdifG7DrWd8YSBufCBrw7p8bMOhw6B8w60gb3xuw6HDoHwgbsOhfGvhurnMgXzDrXBhfG7DrXB8w6xuIHwgw6xrfGLDqSB8aSBnfOG7jW3hu418IOG7jW18aSDDoHxp4bmj4bq5fMyAIMOgfMOsbeG7jXxuIGF8biBmfGrhurkgfHnDrSB8zIEg4buNfMOzIGR8zIEgw7J8IGTDoXwgbcO6fMOgw6BifMOhYuG6uXxsw6FifMOsYsOhfMOyIGd8asO6IHxpIG98bMO6IHwgw6h0fMyAIOG6uXx04buNzIB8ZGUgfMyAIG58aSDDsnwgw6x5fGvDoG58zIFuIHwgYsOtfCBp4bmjfG3hu43MgHxlIOG6uXzMgCBsfCBmw6B8w6h5w618IMOoeXwgw6xkfG3hu43MgXxkw6kgfMyAIGt8zIEgcHzDsiB0fG3DuiB8IGbhurl8IMOsanxyw60gfMOsa+G6uXxuw6xrfMOsbsOtfG4gw6x8biDDqHxzw6xufMOoIOG6uXwgaSB8cuG7jcyAfCDDoG58zIEgYnzDuW4gfMyBZ2J84buNzIFnfGThu43MgXwgZOG7jXzDrSBufHJpbnzMgCBqJyxcbiAgICB1em46ICdpc2h8YW4gfGxhcnxnYSB8aXIgfCBiaXxhciB8IHZhfGRhIHxpZ2F8IGh1fHZhIHxiaXJ8c2ggfHVxdXxxdXF8aHVxfCBoYXxzaGl8IGJvfHIgYnxnYW58YSBlfGlkYXwgdGF8aW5pfGxpc3xhZGl8bmcgfGRpcnxsaWt8aXkgfGlsaXxvyrtsfGhhcnxhcml8IG/Ku3x1cWl8aW5zfGxhbnxoaSB8aW5nfGRhbnxuaW58a2lufCB5b3xzb258bnNvfCBpbnwgbXV8b24gfHFpZ3wgbWF8ZWdhfHIgaXxib8q7fCBlZ3xvyrt6fG5pIHxnYWR8YXNofGkgYnxraSB8b2tpfGlsYXx5b2t8YSBifG4gYnxvc2h8YWxhfGF0IHxpbiB8ciBofGVya3wgZXJ8bGdhfCBxYXxya2l8aCBofCBzaHxpIGh8YXJhfG4gbXwgYmF8bmlzfGlrIHxpZ2l8bGlnfGJvc3xyaSB8cWlsfGEgdHxiaWx8bGFzfGV0aXwgZXR8biBvfGFuaXxubGl8a2xhfGkgdnxhIHF8YSBofGEgb3x5YXR8IHFvfGltIHxhIHN8aSBtfGl5YXxhdGx8b2xpfG9zaXxzaXl8cWxhfGNoYXx0aWx8IG9sfGF0aXxhIHl8bWFzfHFhcnxpbmx8bGF0fCBxaXx0Ycq8fGhhbXxnaSB8aWIgfMq7bGl8bWxhfGggdnzKu3ogfGh1bnxuIGV8bXVtfCBkYXwgYnV8IHRvfHVuIHxta2l8dW1rfHNoYXx0bGF8cmlzfGlyb3xoYSB8cmNofGJhcnxpcml8b3lhfGFsaXwgYmV8aSBvfGFzaXxhcm98IGtlfGkgdHxybGF8IHRlfGFyY3xoZGF8c2h1fHRpc3xuIGh8dGdhfCBzYXwgeGF8cmFrfGxpbnxhZGF8b2xhfGltb3xocWF8c2hxfGxpIHwgdHV8YW1sfGxsYXxzaWR8IGFzfG5pZHxhIGl8IGtpfGNoIHxuIHR8bmRhfGsgYnxlcmF8c2l6fG9yIHxobGF8YSBtfHIgdnxlbmd8dGVufG1hdHxtZGF8YW1kfGxpbXxtaXl8eSB0fGF5b3xpIGF8aW5vfGlsZ3x0bml8IGlzfGFuYXxhcyB8ZW1hfCBlbXxlY2h8YSBhfHRhcnxrYXR8YWthfGFrIHxyYXR8IGRlfGF6YXxpbGx8IHNpfCBzb3xnyrtpfHVxbHxuIHF8b2RhfMq8bGl8Ycq8bHxuaWt8IG5pfHRkYXx1Y2h8Z2lufGEgdXxoaW18dW5pfHNpdHxheSB8cW9ufCBqYXxhdG58a2ltfGgga3xoZWN8IGhlfMq7eml8bGFrfGtlcnxpa2x8IGNofGxpeXxsbGl8Y2hpfHVyIHx6YXJ8c2hsfHJpZ3xpcmx8ZGFtfGtvaHxpa298YSBkfGFtIHxuIHZ8cnRpfHRpYnx5b3R8dGFsfGNodXwgdWN8c2xhfHJpbnxzb3N8YXNvfCB1bnxuYSB8IGthfG11aHxkaWd8YXNsfGxtYXxyYSB8YnUgfHVzaHx4YWx8yrtsZ3xpIGt8ZWtsfHIgZHxxYXR8YWdhfGkgcXxvaXl8bWlsfCBtaXxxYSB8aSBzfGppbicsXG4gICAgemxtOiAnYW4gfGFuZ3wga2V8bmcgfCBzZXwgZGF8YWRhfGFyYXxkYW58IHBlfHJhbnwgYmV8YWsgfGJlcnxoYWt8YXRhfGFsYXxhIHN8YWggfG55YXwgbWV8ZGEgfHBlcnxuIHN8eWEgfCBkaXxrYW58bGFofG4ga3xhYW58Z2FufGRhbHxwYWR8a2VwfGEgcHxuIGR8ZXJofGViYXxuZ2F8eWFufHJoYXwgeWF8bmRhfG9yYXx0aWF8YXNhfCBoYXxhbWF8ZXBhfCBvcnxpYXB8YXAgfGEgYnwgYXR8IG1hfGV0aXxyYSB8dGF1fG4gYXxzZXR8YXUgfCBiYXxwYSB8IGFkfG4gcHx0YW58cCBvfGVuZ3xhIGR8bWVufGFwYXxoIGJ8aCBkfGRha3xtYW58YSBhfHRlcnwgdGV8ayBrfCBzYXxuIGJ8YW5hfGcgYXxlbmR8bGVofG9sZXxhIGt8YW0gfG4geXxha2F8ZWggfGxhbXxiYXN8YmVifG4gbXwgdW58cGVufHNhIHxrZWJ8c2FtfG4gdHwgdGl8ZWxhfHNhbnxjYXJ8dWFufG1hIHxkaSB8aGFufGVnYXxiYW58ZXJpfGF0IHxzaWF8YSBtfGlrYXxrZXN8aWFufGdhcnxzZWJ8dGEgfG1hc3x1bmR8bmVnfG5hbnxuZ3N8aSBkfGVybHxuYSB8ZXBlfGVtYnxiYXJ8IGxhfGF0dXxrbGF8cGVtfG1lbXxlbXV8ZWNhfHNlY3xuZ2d8bm55fGFueXxib2x8YWwgfGFoYXxnc2F8ZWJlfGluZHxha2x8biBofGVya3x1bmd8ZW5hfCBib3xhIHR8IGFwfGVyc3wgZGV8aW4gfHR1IHxwdW58YXMgfGFnaXxhbm58ZyBifGJhZ3wgbmV8YWlufGhlbnwgaGV8ZXJhfHJhdHxzZW18IHN1fGFkaXxsYW58ZyBzfGRpYXxtYXR8c2VzfGlhZHwgdGF8aWhhfGcgdHx0aW58ayBtfGsgaHxpIGt8Z2kgfGkgc3xpbmd8dWthfGVudXxkZW58bGFpfGsgZHxlcnR8dGkgfHJrYXxhamF8cmdhfGx1YXxrZXJ8bWVsfGR1bnxuZHV8bGlufHJsaXxuYWt8bnR1fGVzaXxheWF8dW4gfHVhdHxqdWF8IGlufHJtYXxlcm18YWkgfGVtcHxrZW18cmkgfGRpbHx1YSB8dWsgfGggbXxsIGR8ZyBtfG1iYXxrYXR8ZXNlfHRpa3xuaSB8aW5pfCBhbnxtcHV8a2EgfGRhcnxtYXJ8cmphfGVyanxhcmd8dSBrfHN1YXwgb2x8ZXNhfGRhcHxhciB8ZyB1fHNpIHxlbnR8ZyBkfCBwdXxhd2F8aXJpfGRpcnxzYWx8Z2FtfG1iZXxuIGl8aGFyfGEgaHxyYWF8ZW1hfHRhcnxpIGF8c2FhfGlyYXxhcml8cGVsfGphcnxsYWp8dWp1fHR1anxyYWt8dXJhfHVhcnxlbHV8dCBkfHVudHxpbCB8d2VufGFzaXxnZ2F8aXBhfGtzYXx0dWt8dWxhfHNla3xzYXN8aWJ1fHJ0YXxzZXB8cnNhfG50YXxhdGl8aWxhfG11YXx5YXInLFxuICAgIGlibzogJ2EgbnxlIG58a2UgfCBuYXwg4buNIHxuYSB8IGLhu6V84buNIGJ8bndlfG55ZXxlcmV8cmUgfCBuIHx5YSB8bGEgfCBua3x5ZSB8IG53fCBtYXxlIOG7jXwgeWF8IGlrfGEgb3xhIOG7jXxtYSB84bulbGF8YuG7pWx8aWtlfCBvbnxua2V8ZSBpfGEgbXxvbnl84bulIG58a2lrfGlraXxi4bulIHwgYSB8a2EgfHdlcnx0YSB8aSBufGRvIHxkaSB8IG5kfCBnYXxhIGF8ZSBhfGEgaXxoZSB8a3dhfCBva3wgb2J8ZSBvfGhpIHxhbnl8Z2HigJB8aGEgfGThu6UgfCBtbXxuZGl84buNIG58d2EgfHLhu6UgfGUgbXxjaGV8YSBlfG9rZXx3dSB8YWthfGl0ZXxvIG58YSBnfG9kb3xib2R8b2JvfCBk4buLfCBlenxhcmF8d2UgfCBpaHxh4oCQZXxo4buLIHxyaSB8biBvfHppIHxtbWF8Y2hpfGThu4sgfGdoaXzhu6V0YXxpcml8aWhlfCBhbnwgb2h8YSB5fGdiYXzhu6Ug4buNfCDhu416fCBha3wgaXd8bnlhfHRlIHxpd3V8IG50fHJvIHxvcm98ZSDhu4t8euG7jSB8ZXppfG1lIHxlIGV8dSBufGhlcnxvaGV8IHNpfGHigJBhfGkgbXxhbGF84bulIGl8IGthfGFrd3wgaW58Z2jhu4t8a3BlfG4gZXxw4buldHwgZSB8aSBpfGkgb3xpZGV8aW53fOG7pSBvfGjhu6UgfGFo4bulfHdlZ3xyYSB8byBpfGtwYXxhZOG7pXxtYWR8c2kgfHNpdHxhIHN8IG1lfHNvcnxpIOG7jXxnaWR8ZWRvfHUgb3xlIHl8biBhfCBlbnx0YXJ8b3p1fHRvenxiaSB8YmUgfOG7pSBtfOG7pXLhu6V84buNcuG7pXwg4buNcnxtYWt8dXNvfGFtYXxkZSB84buLIG98IOG7jW584buNeuG7jXxjaOG7i3xlZ2h8ZW53fGFw4bulfHJ1IHwgdG98aSBhfGEg4bulfG9zaXxy4buLIHx3ZXR8aGVkfG5jaHwgbmN8IGVifCBhbHxu4buNZHzhu41u4buNfHVydXxzaXJ8IGt3fHllcnxqaSB8ZW55fCBta3zhu4ty4buLfGV0YXwgdXN8dHUgfOG7jSBkfHUg4buNfCBvIHxiYSB8IG1ifOG7jWThu6V84buLY2h8IGNofGEgZHxwYSB8IGFnfGt3ZXwgaGF8YSB1fGUgc3xta3B8biB1fG50YXxlYmV8biDhu418byBtfGt3dXxua3d8bndhfG9iaXwg4buLa3xlc2l8aSBlfG5oYXwgbmh8bGUgfGlsZXxuaWx8IG5pfGVtZXwgb2d8ZSBrfG4gaXxjaOG7jXxvIHl8YXPhu4t8b3R1fCBvdHxyYW18dSBtfOG7i2dofGThu4tnfHp1IHxu4buNIHxtYmF8IGdifGUgZ3zhu4sgbXzhu41jaHxpY2h8cGUgfGFnYnxpIOG7i3x1Y2h8euG7pXp8dW55fHd1bnzhu41y4buNfCBubnxuYeKAkHwgZGl8Z2UgfG9nZXxpaml8IGlqfOG7jWhhfCDhu41ofGlrcHxlZ2l8bWVnfG8gb3zhu6Vo4bulfGjhu6VofG1haHxuIOG7pXzhu40gZ3zhu410YXxla+G7jXzhu4sgbnxrd+G7pXxhZ2h84bulbeG7pXxiYW58a3B1fG9rcHwgYWh84buLa3B8YSBrfGltZXwgaW18euG7pSB84buleuG7pXzhu4164bulfCDhu6V6fGxpdHxhbGl8bmF0JyxcbiAgICBjZWI6ICdzYSB8IHNhfG5nIHxhbmd8IGthfCBwYXxhbiB8Z2EgfG5nYXwgbWF8cGFnfCBuZ3xvbiB8YSBwfG9kIHxrYXR8YXkgfCBhbnxnIG18YSBrfHVnIHxhbmF8IHVnfHVuZ3xhdGF8bmdvfGF0dXxuIHN8YWxhfHNhbnxkIHN8dHVufGFnIHxhIG18Z29kfGcgc3xhIGF8YSBzfGcga3xnIHB8eW9ufG4gdXxvbmd8dGFnfHVzYXxwYW58aW5nfHVuYXxtYXR8ZyB1fG1nYXwgbWd8eSBrfCB1c3xhbGl8c3lvfCBvIHxhZ2F8dGFufGl5YXxraW58ZHVufG5heXxtYW58bmFufGEgaXwgbmF8aW5hfG5zYXxpc2F8YmlzfGEgYnxhZHV8IGFkfG4gbnwgYml8YXN5fGFzYXxsYXl8YXdhfGxhbnxub258YSBufG5hc3xvIHN8YWwgfGFncHxsaW58bmFsfHdhbHwgd2F8aWxpfHdhc3xnYXd8aGFufCBpeXwga2l8bmFofGJhbnxuYWd8eWFufGFoaXxuIGt8Z2FufCBnaXxoaW18IGRpfGEgdXwgYmF8IHVufGluaXxhbWF8eWEgfGthc3xhc3V8biBhfGcgYXxna2F8YWdrfGthbnxhZ3N8YWd0fGwgbnxhIGd8a2FnfCB0YXxpbW98dW5zfHNhbXwgc3V8ZyBufG4gb3xnYWx8a2FsfG9nIHx0YXd8YWhvfHVrYXxncGF8aXBvfGlrYXxvIHB8YSB0fCBvZ3wgc2l8Z3NhfGcgdHxhYmF8YW5vfGdsYXx5IHN8byBhfGFraXxoYXR8a2F1fHN1ZHxncGl8YSB3fGcgaXxhaGF8b3QgfHJhbnxpIHN8biBtfGJhbHxsaXB8Z29ufHVkIHwgZ2F8bGkgfHViYXxpZyB8YXJhfGcgZHxuYSB8a2FifGFrYXxnYmF8bmdsfGF5b3wgbGF8IGh1fGEgaHxhdGl8ZCBhfGQgbnwgcHV8IGlufHVnYXxvayB8aWhpfGQgdXxtYSB8bWF5fGF3b3xhZ2J8YW1pfHNheXxhcGF8cG9kfHVoYXx0IG58YWdofGJ1aHxpbnN8YWQgfCB1YnwgYnV8YXQgfGlpbnxhIGR8aXAgfHV0YXxzYWx8aG9ufHdvIHxobyB8dHJhfGxha3xpa298YXMgfGFvZHxiYWh8bW8gfGF1Z3xvbmF8ZGlsfGdpa3xzb3N8bGlofHBpbnwgcGl8ayBzfG5pbnxvb258YWJ1fGxhIHxyYWJ8aHVufCB0aXxtYWh8dGFyfHQgc3xuZ2J8dW1hfGhpbnxiYXR8bGFvfG1ha3xpdCB8IGF0fHMgc3xzbm98YXNufG5pIHxhYW58YWh1fCBoaXxhZ2l8biBwfGludXx1bG98eSBwfCBuaXxpaGF8bWFnfG8gbnxkdWt8ZWR1fCBlZHxhIGV8dGlsfHVyYXx0aW58a2lwfGFnbHxnYXl8ZyBofGcgYnxhdG98Z2hpfG5hYnxrb258aW4gfHRlcnxvIHV8byBvfHlhbHxzeWF8b3N5fCBzb3x0aWt8IHJlfCB0cnxoaWd8YSBvfGhhIHxidXR8cGFrfGF5YScsXG4gICAgdGdsOiAnbmcgfGFuZ3wgcGF8YW4gfHNhIHwga2F8IHNhfGF0IHwgbWF8IG5nfGFwYXxhbGF8YXRhfGcgcHxwYW58cGFnfGF5IHwgYW58IG5hfGFyYXwgYXR8dGFufGEgcHxwYXR8biBhfCBiYXxnYSB8YXdhfHJhcHxrYXJ8ZyBrfGF5YXxsYW58ZyBtfG4gbnxnIGJ8bmdhfG1nYXwgbWd8YSBrfG5hIHxhbWF8biBzfGEgYXxnYW58eWFufGdrYXwgdGF8bWF5fHRhb3xhZ2t8YXNhfG1hbnxha2F8YW8gfHkgbXxhbmF8ZyBhfG5hbnxhaGF8a2FufHkga3xiYXd8a2FsfGEgbXxnIG58aW5nfHdhdHwgeSB8dCB0fHBhbXxhIG58byB5fGJhbnwgbGF8YWxpfHNhbnx3YWx8bWFnfCBvIHxnIGl8YWdhfGxheXxhbnl8ZyBzfGluIHxueWF8eW9ufGthc3xhIHN8aXNhfHVuYXxvbmd8YWFufGthdHx0IHB8IHdhfGluYXx0YXl8eWEgfG9uIHxvIG18aWxhfGFnIHxudGF8dCBufGFiYXxpbGl8IGF5fG8gYXwgZ2F8bm8gfGEgaXxnYWx8YW50fGhhbnx0IHN8a2FwfGtha3xsYWh8YXJpfGFndHxhZ3B8cmFufGcgbHxsaW58YXMgfGxhbHxnYXd8YW5zfHRvIHxpdG98IGl0fGhheXx3YSB8dCBtfCBpc3xwYXB8bWFtfG5zYXxhaGl8bmFnfGJhdHxsaXB8Z3RhfCBkaXxnYXl8Z3BhfHBpbnwgc2l8bmdrfHVuZ3xha2l8eSBufGl0aXx0YXR8YW5vfHlhYXx5IHN8bWFsfGhhdHxrYWl8c2FsfGhpbnx1bWF8bWFrfGRpIHxhZ2l8cHVufGloaXxhIGx8aSBhfGlyYXxnZ2F8bmFofHMgbnxhcCB8IGhhfHVzYXxuaW58byBwfGdpbnxpcHV8aWthfG5naXxpIG58bGFnfGxhIHx5IHB8aW5pfGcgdHx1a2F8bmFwfCB0dXxhIGd8dGFzfGFydXxpcGF8IGlwfGxpIHxhbCB8biBvfGEgb3x0IGt8YWxvfCBwaXxzaW58c3lvfGFzeXxpdGF8YWhvfG5hcnxwYXJ8byBzfHBha3x0IGF8dWhhfHNhc3xnc2F8YWdzfGtpbnxhIGh8aWJhfGxpdHx1bGF8byBufG5ha3xhIHR8IGJ1fGR1a3xrYWJ8c2FtfGcgZXxhaW58YW1pfG1hc3xsYWJ8YW5pfGtpbHxpdCB8IGFsfGFnYnxidWh8YSBifGcgZ3xiYSB8IGlifGl5b3xyaSB8eWFnfGFkIHwgZGF8ZWR1fCBlZHxhbmx8bWEgfGFpc3xpZ2F8bWJhfHR1bnxpcGl8IGtpfG9kIHxheXV8IGxpfGxpaHxzYXJ8Z2kgfGcgd3xwYWh8d2lyfG9vYnxsb298YWdnfG5saXxiYXl8bWFwfGdpdHxtaWx8b2sgfGhvbnxuZ2d8c2FofGl5YXxwYXN8ZyBofGFnbHx0YXJ8bmd1fGFtYnx1a3V8YXlvfHMgYXxwIG58biBtfHJ1c3xpIG18bCBhfGFidXwgYWEnLFxuICAgIGh1bjogJ2VuIHwgc3p8IHZhfCBhIHzDqXMgfG1pbnxlayB8IMOpc3wgbWl8am9nfCBqb3xhbiB8aW5kfG5la3xzemV8c8OhZ3xuZGV8YSB2fGRlbnxvZ2F8c3phfHZhbHxnYSB8bcOpbHxhbGF8ZW3DqXxneSB8biBhfHZhbnx6ZW18ZWxlfCBtZXxlZ3l8w6lseXwgZWd8emFifHTDoXN8IGF6fG4gc3xiYWR8YWJhfG5pIHxheiB8Z3llfCBlbHxhayB8IHNlfG1lZ3xzZW58w6lueXxzw6lnfGsganx5bmV8bHlufCBuZXxiZW58bGFtfHR0IHx0IGF8ZXQgfGFneXxveiB8aG96fHZhZ3x6ZXR8IHRlfG4gbXxleiB8bmFrfGludHxyZSB8ZXTDqXx0ZXR8bWVsfHRlbHxzIGF8ZW0gfGVseXxsZXR8aGV6fCBhbHxzIHN8IGtpfGV0ZXxhdMOhfHogYXwgbGV8eWVufGVzIHxyYSB8dMOpc3xlbGx8bnQgfHNlbXx0IHN8bGVufG5lbXxhIHN8ZXNlfG5raXxlbmt8YSBtfMOhc8OhfGkgbXxiYW58a2lufGsgbXxzenR8IMOhbHxhbWV8a8O2enxrIGF8ZHPDoXxhZHN8bMOzIHwga8O2fMOhcyB8bHkgfG9uIHzDqWJlfHRhdHxhIHR8biB2fMOhbGx8bcOpbnwgdsOpfG55ZXxrw7xsfGzFkSB8YSBufCBjc3xpIMOpfG9rIHzDqXN6fMOpcnR8bGxhfGxhcHzDoWdvfGdva3xueWl8dGVrfCBrZXxuZCB8w6l0ZXxhbWl8esOpc3x5ZXN8c3pvfHQgbXxhIGF8aGV0fGZlbHxsYXR8bGVtfGxsZXxlbCB8eiBlfHMgZXxrIMOpfG1iZXxlbWJ8ZWzDqXxvdCB8bGlzfHZldHxrb3J8w6FnIHxvbGd8IGFtfHN6w6F8ZWhlfGxlaHxvZ298b3R0fMO8bCB8bnRlfMOpbGV8aSB2fG9neXxob2d8IGhvfGtlbHxuIGt8dGVzfG5sxZF8ZW5sfHNzw6F8w6F6YXxow6F6fMOpZyB8dmVsfMOhYmF8bGVrfMOpZ2V8IGhhfGEgaHxyw6lzfCBmZXzDoW55fGRlbHxlbMWRfMOhdCB8YWzDoXxhcnR8dGFyfHp0b3x6w6FzfHTFkSB8eWlsfGtvenx0a298YWzDs3xzIGt8aSBlfMOhcnN8dMOhcnxtemV8ZW16fCBueXxtw6FzfGV0dHxueSB8ZmVqfGFzc3x6YXN8IGjDoXxkIGF8dCDDqXxpcyB8w6lzw6l8ZXrDqXx0w6lifCBtdXzDoXNvfHPDrXR8bHllfGVsbXzDqWRlfHbDqWR8aW5lfHQga3xvcyB8aXQgfGl6dHxiaXp8IGJpfHkgYXxtIGx8dG90fGEganxhdGt8bsOpbHx0IG58dGkgfCBtw6F8YWkgfGzDoXN8ZXZlfG5ldnx6dGV8IGLDoXxzZWx8bGwgfGFsIHxlcmV8biBlfHVua3xtdW58dCBlfCBha3xpZmV8a2lmfGFrb3xzIMOpfCDDqXJ8w6FuYXwgZXN8cyB0fGdvdHxzw7xsfCBiZXx2w6FsfGNzYXxzZSB8w6lzZXxhZCB8Z2VzfHRvc3xqYSB8IGd5fGFzenx0ZW58bG3DqXwgdMOhfGV6ZXzDoXJtfGLDoXJ8ZXNzfGwgc3zDvGxlJyxcbiAgICBhemo6ICcgdsmZfHbJmSB8yZlyIHxpciB8IGjJmXwgYml8IGjDvHwgb2x8w7xxdXxow7xxfHF1cXxuYSB8aW4gfGxhcnxoyZlyfGTJmSB8IMWfyZl8YmlyfGzJmXJ8bGlrfG1hbHxyIGJ8bG1hfHIgaHwgdMmZfMmZeHN8xZ/JmXh8yZluIHxkaXJ8dXF1fHVuYXxhbiB8YWxpfGEgbXwgbWF8aWtkfGluaXxyIMWffGTJmW58YXIgfGlsyZl8cXVufGFxIHxhc8SxfCB5YXxtyZlrfHnJmXR8IG3JmXwgbcO8fGtkaXzJmXNpfMmZayB8aWxtfG5pbnxuZMmZfG9sbXzJmXRpfMmZIHl8c2lufHhzIHxuZGF8bG3JmXx5ecmZfGkgdnwgcWF8IGF6fG9sdXxpeXl8eWEgfGluZHx6YWR8cWxhfMO8biB8bmkgfGzJmSB8dGlufG4gbXxhemF8YXLEsXzJmXQgfG4gdHxtYXF8bHVufGzEsXF8yZkgYnx1biB8bnVufHEgdnxuIGh8ZGFufMSxbiB8IGV0fHRtyZl8yZlyyZl8IMO2enxkYSB8yZkgdnwgb258yZkgYXzEsW5hfMSxbsSxfGJpbHxhIGJ8c8SxIHxpbCB8yZltaXxhcmF8c2kgfCBkaXzJmSBtfMmZcml8cmzJmXwgdmF8yZkgaHxldG18xLHEn8SxfGFtYXxkbMSxfGFkbHxyaW58YsmZcnxyxLFufG4gaXxtw7xkfG7EsW58IGhlfG1hc3xpayB8biBhfGRpbHxhbMSxfGlybHzJmWzJmXzDvGRhfHPEsW58xLFuZHx4c2l8bGkgfMmZIGR8bsmZIHwgYsmZfMmZeWF8IGlufMmZIGl8bMmZdHwgc8mZfG7EsSB8IGnFn3xhbsSxfGXDpyB8aGXDp3xxIGh8ZXlufMmZIGV8ZMSxcnwgZGF8YXNpfHLEsSB8acWfIHxpZmF8bMSxxJ98aSBzfGZpyZl8YWZpfGRhZnwgZWR8bcmZenx1IHZ8a2lsfCBoYXxvbGF8biB2fMmZbml8xLFyIHx1cSB8dW5tfCBidXwgYXN8c2lhfG9zaXxzb3N8aWxpfMSxZMSxfGzEsWR8bm1hfMSxcSB8aW7JmXzJmXJhfHNpbHx4aWx8YXhpfGRheHxhZMmZfG1hbnxhIGh8yZkgb3xvbnV8YSBxfMmZeiB8IGtpfHNlw6d8IHNlfMSxIGh8bWlufGxhbnzJmWTJmXxidSB8cmFxfGzEsSB8xLFsxLF8YWwgfMmZIHF8ciB2fG5sYXxoc2l8yZloc3x0yZlofMO2eiB8aXN0fCBpc3xtyZlzfCDJmXN8aW5hfMmZIHR8yZl0bHxhIHZ8acmZIHxuIGJ8dMmZcnwgdGF8IGPJmXxlZGl8YWxhfGtpbXxxdSB8aSB0fHVsbXxtyZlofG4gb3xheWF8xLEgb3xpYWx8IHNvfGlsbHxzaXl8IGTJmXx2YXJ8aW5zfG1pIHzEn8SxIHxuaWt8ciBpfGFxbHxrIGh8dMmZbXx0YW18w6fDvG58w7zDp8O8fCDDvMOnfMSfxLFufHNhc3zJmXNhfHogaHzJmW3JmXx6YW18IHphfHN0aXxyyZlmfG4gZXxyIGF8aWxkfGjJmW18xLFxbHx5YW58bWF5fG4gyZl8bcmZbnxtaWx8IG1pfMmZcWl8ZGlufG4gZHx0w7xufCBkw7Z8bWl5fGthaHxpa2F8IG5pfGZhZHx0aWZ8bCBvfHPJmXJ8eW5pfCBleXxhbmF8bMmZbnxhbSB8cmlsfGF5yZl8YcWfxLEnLFxuICAgIGNlczogJyBwcnxuw60gfCBhIHwgbmV8cHLDoXxyw6F2fG5hIHxvc3R8IHBvfGhvIHwgc3Z8byBufCBuYXx2byB8bmVifMOhdm98Ym8gfGVib3xub3N8bcOhIHwgbcOhfGHFvmR8a2HFvnwga2F8IHJvfGNoIHxkw70gfMW+ZMO9fHRpIHxvdSB8YSBzfCBwxZl8IHphfMOhbsOtfMOhIHB8IGplfCB2IHxzdm98w6lob3wgc3R8w70gbXxzdGl8bsSbIHwgYnl8b2JvfHZvYnx0ZXJ8cHJvfGVuw618Ym9kfCB6w6F8IHNwfMOtIGF8cm9kfGt0ZXxieSB8bXUgfHUgcHxvIHB8IG7DoXx2w6FufGpha3wgamF8YSBwfG8gdnzDrSBufG92w6F8b2xpfHbDrSB8c3BvfHJvenwga3R8bWkgfMOtIHB8bnkgfCBtYXzDrW0gfGkgYXxkbyB8IHNvfG9kbnzDoXJvfG7DoXJ8bGkgfG7DqSB8dHbDrXxhdCB8w71jaHxhIHp8IHZ5fGJ5bHx2b2x8ZW4gfMO9dCB8YsO9dHwgYsO9fHQgc3x0bsOtfHN0bnxvIHN8w60gYnx0byB8IGRvfHN2w6l8dsOpIHxyYW58ZWpufHrDoWt8ZWhvfGplaHxuZXN8cMWZw618bcOtIHzEjWlufGtvbHxhasOtfHNvdXwgdsWhfMOtY2h8aXQgfG7DvW18w71tIHxudSB8aHJhfG5vdXx1IHN8w6ltdXwgayB8ZHUgfMW+ZW58cG9kfCB6ZXxrbGF8YSB2fHN0dnxwb2x8ZG7DrXxlcsOpfG0gcHxzdMOhfGplIHxjaSB8ZcSNbnwgbml8bsOpaHxhIG58YWvDqXzDoXZhfG1hanxlbSB8cm92fMOtIG18a8OpIHxvbGV8bsO9Y3xvdmF8IHZlfGFrb3wgdGF8aSBrfGNocnxvY2h8IG9jfGtvbnxpIHB8w60gdnxzbcOtfGVzbXxrZG98c3QgfGkgbnxvIHp8YXZlfG9kdXxiZXp8IHRvfHN0YXxlY2h8asOtIHxvIGR8c29ifHNlIHwgc2V8w60gc3zDvW1pfGkgc3wgaSB8aSB2fCB2enxuw61tfHByYXxsbsSbfHDFmWl8dMOhdHxzdGV8YSBqfGFieXwgYWJ8IHMgfG9sbnxhIG98bSBufMSNZW58c2x1fMWZw61zfCBvc3x6ZW18bWV6fCDEjWl8bG7DrXzDoWxufG9jaXxqaW58IGppfHkgYnzDrSB6fHkgc3x2YSB8dsWhZXx0IHZ8b3ZufGNobnxkxJtsfG7DrWN8bGXEjXwgcGx8dmF0fCB2b3x2aW58cmF2fHZvdXxsYWR8aW5ufMOpIHZ8YW51fHRlanx1IGt8c3R1fGVzdHwgdHJ8a3kgfGlrZHxuaWt8aXZvfG5pdHx6ZW58dSBvfG7DqW18bmV6fGnDoWx8w61ob3xsZW58ZW5zfG/FvmV8b2tvfGvDqWh8cmFjfHZlbnzDrSBrfGUgc3xsw6FufMSbbMOhfHpkxJt8dnpkfHQga3xkaW58b2RpfHTDrSB8IG9kfHLDqSB8dHVwfHBvdnxwbG58xaF0xJt8w6FrbHxubm98dGFrfGVyw6F8xZllZHxvIGF8YSB0fHJlc3xqw61jfCBtdXx1IHp8cm9rfCBvYnzEjW5vfHUgYXx5IGt8aSBqfMOpIG58bHXFoXzDrXNsfG9zb3xjacOhfHNvY3xuw61ofG8ganxja8OpJyxcbiAgICBydW46ICdyYSB8d2UgfHdhIHxlIGF8IG11fGEga3xzZSB8IG4gfCB1bXwga3V8aXJhfGFzaHx0dSB8bnR1fGEgaXxtdSB8dW11fG11bnx1bnR8ZXJlfHp3YXxlZ2V8eWUgfG9yYXx0ZWd8YSBufGEgYXxpbmd8a28gfCBiaXxzaG98aXJpfCBhcnwgd2V8c2hpfGFiYXxlIG58ZXNlfGdvIHxhIG18byBhfGd1IHx1YmF8bmdvfG5nYXxoaXJ8IGNhfHVndXxvYm98aG9ifHphIHxuZGl8aXNofGdpaHwgYXR8YXJhfHdlc3wga3d8Z2VyfGF0ZXxhIGJ8IGJhfCBndXxlIGt8Y2FufGFtYXx1bmd8Ym9yfHUgd3xtd2V8ZGkgfCBhYnxua2V8a2UgfGt3aXxrYSB8YW5rfHlvIHxlend8biB1fG5hIHxpd2V8ZSBtfHJlenxyaSB8YSBnfGdpcnwgYW18aWdpfGUgaXxybyB8YSB1fG5naXxlIGJ8YmFufCBha3wgaW58YXJpfG4gaXxodWd8aWh1fGUgdXxyaXp8YW5nfG50YXwgdnl8YXRhfCB1YnxhbmR8YWthfHJ3YXwgbnR8a3VyfHRhIHxpa2l8a2FufGl6YXx1IGJ8cmFufHNoYXxvIG58aSBufCBpZ3xpdnl8IGl2fGFoaXxiYWh8dSBufGFuYXwgYnV8IGFzfGFrdXxnYSB8dWtvfG8gdXxobyB8IGthfG9zZXx1YnV8YWtvfGd1a3xpdGV8byB5fGJhIHxpIGJ8YW55fGtpcnxvIGt8YWhvfGl5ZXxrdWJ8YW13fG55ZXxhaGF8IG5nfG8gbXxueWF8IGl0fHJlIHwgaW18byBifGl6d3xrdW58aGlufGUgY3x2eW98byBpfHZ5aXxuZ3V8dXJpfGltaXxpbXd8Z2lufGVuZXx1IG18emkgfGhhIHxrdWd8YnVyfHVydXxqd2V8IHppfHUgZ3xlcmF8YWdhfHJvbnxhYml8IHkgfGUgeXwgdWt8Z2VrfGFuaXwgZ2l8ZXllfGluZHx3byB8dSBhfGkgYXwgaWJ8aSBpfHJhc3xiYXR8Z2FufGFtYnxuIGF8b25rfHJpa3xuZSB8aWhlfGFnaXxrb3J8IGljfHplIHx0dW58aWJpfHd1YnxuZ2V8byB6fHRzZXxua2F8aGUgfHJla3x0d2F8Z2VufGVrb3xtYXR8YmVyfCBhaHxuaSB8dXNofHVtd3wgYnd8bWFrfGJpa3x1cnl8eWl3fGJ3b3wgbmt8bWEgfG5vIHxraXp8dXJvfGdpc3xhcm98aWthfCB5YXxndXN8eSBpfHdpcnx1Z2l8dWtpfCBraXxhIGN8cnlvfGJpcnwgbWF8IHlpfGlyb3xid2F8bXVyfGVuZ3x1a3d8aGF0fHRhbnx1dHV8d2l0fHcgaXwgbXd8eSBhfG1iZXwgaGF8dXphfGhhbXxyYWh8IGlzfGlyd3xvIHZ8dW12fHVyYXxlbnl8aGltfGVrYXxiYWt8YnVufCBueXxibyB8eWlnfGt1dnx3YWJ8a2V5fGVrZXx5ZXJ8dnllfGkgeXxpdGF8eWEgfGEgcnwga298a3dhfG8gYycsXG4gICAgcGx0OiAnbnkgfG5hIHxhbmF8IG55fGEgbnxzeSB8eSBmfGEgYXxhaGF8cmEgfCBtYXxuYW58biBufGFueXx5IG58YSBtfHkgbXx5IGF8IGZpfGFuIHx0cmF8aGFufGFyYXwgZmF8IGFtfGthIHwgdHN8IG5hfGluIHxhbWl8IG1pfGEgdHxvbG98bWlufG1hbnxpemF8bG9ufCBpenxmYW58IG9sfCBoYXwgc3l8YWthfGEgaXxyZWh8YXkgfGlhbnx0c3l8aW5hfCBhcnxvbiB8byBhfGV0cnxoZXR8b25hfHkgb3xvIGh8emFufHkgdHxhIGh8YWxhfCBoaXxhIGZ8eSBofGVoZXxpcmF8YSBzfHpvIHx5IGl8bmRyfGpvIHwgam98biBqfCBhbnwgYXp8cmFufGRpYXwgZHJ8eSBzfGZhaHxlbmF8aXJlfHRhbnxkcmV8IHpvfG1iYXwga2F8bSBwfGFmYXwgZGl8biBkfGFuZHxhem98enkgfGFtcHxpYSB8cmVufGlueXxyYWh8eSB6fHJ5IHxpa2F8b2FufGFvIHxhbWJ8bGFsfGhvIHwgaG98aXN5fG9ueXx0c2F8YXNhfGEgZHxoYSB8ZmlhfG1pc3xhdmF8cmF5fCBwaXxhbSB8ZHJhfCB0b3xyaW58IHRhfGFudHxlbyB8emF5fHJhaXx0c2l8aXRyfHNhIHwgZm98IHJhfHZhbnxvdmF8bmVufGF6eXwgdm98bXBpfGFyaXxvIGZ8dG9rfGEga3wgaXJ8a2FufG90b3xtYWh8bHkgfHNpYXwgbGF8biBpfHZvYXxoYWZ8YSByfGl0b3x5IGt8b2thfHkgcnx5IGx8YW5vfGl0YXxlbmV8aXRzfGlhbHx6b258YXphfGFpbnwgcmV8IGFzfGZvdHxhcm98Zml0fG5hdHxuaW58YWx5fGhhcnwga298aGFtfCBub3xmYSB8YXJ5fGF0cnxpbGF8YXRhfGloYXxuYW18a29ufG9rb3wgc2F8ZWxvfG5qYXxhbmp8aXZlfGlzYXxvYSB8ZHkgfHkgZHxvIG18bnRvfGFua3xvIG58b3RyfHBhbnxmaXJ8YWlyfHNpcnx0eSB8YSB2fHNhbXxvIHN8dG92fG1pdHxyYWt8cmVvfG8gdHxwaWF8dGFvfCBhb3xubyB8eSB2fGlhcnxhIGV8YSB6fGhpdHxob2F8IGl0fHRvIHx6YSB8dG9ufGVoYXxlbmR8dnkgfGlkaXx0aW58YXRpfGFkaXxsbmF8YWxufHJvdnxiYW58IHphfG5nYXxoYWh8b25pfG9zaXxzb3N8dmFofGlub3xpdHl8IGF0fGhpYXxwaXJ8aWZhfG9tYnxhbWV8ZXJhfHZlbHxrYXJ8dmEgfHRzb3xqYWt8ZmlkfGlmaXxhaXN8byBpfGlkeXxsYSB8YW1hfGJhIHwgcGF8dG90fGFuaXxyYXJ8bXBhfGhhenxrYW18IGVvfCBpbHxpdmF8YWhvfG5hb3xuIGt8YXRvfGxhaHxvdnl8IHRlfGRyb3xsYW58ZWxhfCBtb3wgc2l8ZmlufG1pdnxzYW58a29hfCBoZXxhc298IG1ifHNha3xrYXYnLFxuICAgIHF1ZzogJ3RhIHwga2F8a2EgfG5hIHx1bmF8Y2hhfGFzaHxhcml8YSBrfGFuYXxwYWt8aXNofGFjaHxoa2F8c2hrfG1pIHxrdGF8aGF5fG1hbnwgY2h8YXBhfGFrIHxyaW58YXRhfGt1bnxoYXJ8YWt0fGl0YXwgaGF8YW1pfGxsYXwgcGF8YW1hfHBhc3xzaHB8IG1hfHRha3xhecOxfHnDsWl8aW4gfHNoIHxpbmF8dWt1fG5rYXxjaGl8YWthfGEgY3x5dGF8a3V5fGFsbHx0YXB8YSBofGthbnwgdHV8w7FpdHx0dWt8IHJ1fHJ1bnxjaHV8YW4gfHBheXxheXR8cmlzfCBraXxha3V8aHBhfGFua3xhIHB8a2FtfCBzaHxuYW18YSBzfHV5IHxpIGt8YXlwfG5ha3xwaSB8bnRhfGEgbXwgbGl8YXkgfGxpYXxoaW58a2F3fG5hcHxhbnR8dGFtfGEgdHxpcml8bmF0fCB3YXx5IHJ8a2F5fGF3c3wgeWF8biB0fHlwYXx3c2F8cGEgfGxha3xzaGl8YSBhfGxsaXxpa3V8aHUgfG4ga3xpYWt8eWF5fGtpc3wgYWx8c2h1fGEgd3xpcGF8IHNhfCBpbHxhcGl8a2FzfHlrdXx5YWN8a2F0fGEgcnxodWt8aSBjfHdhbnxoaWt8YSBpfGlsbHx1c2h8IHRpfGF5a3xocGl8IGt1fGthY3xzYXl8aHVufHV5YXxpbGF8aWthfHl1eXxwaXJ8aWNofG1hY3xpbWF8YSB5fHlsbHxheWx8aSBwfGtpbnxhIGx8IHdpfGt1c3wgeXV8bGFufHRhbnxsbHV8a3BpfCB0YXwgcGl8YXlhfGxhIHx5YW58YXdhfCBuaXxrYWt8bGF0fHJpa3x3YXJ8dWxsfGtsbHxsaSB8aW5rfG5jaHx1biB8YWtwfG4gc3xtYXl8IGF5fHVjaHxpIHN8bmFjfHNoYXxpa2l8a2lrfGggbXx1a3R8cGlwfHRpbnxuIHB8aXlhfG5hbHxha2l8IHJpfHVyYXx0aWt8bWFrfHlwaXxpIG18aSB3fG4gbXxoaXN8ayBpfHJpeXxpd2F8eSBofCBodXxoYW58YWtsfGsgdHxtYXN8cGlrfGthcHwgw7FhfHUgdHxubWl8bmlzfGsgYXxpIHl8ayBsfGthcnwgaW18aSBpfHdpbHx5bWF8YXltfGtzaXxpa3N8dW1hfCBzdXxoIGt8aGFzfCBha3x1bmt8aHVjfGtpcnxhbmN8ayBtfHBhbHxrIGt8aWsgfGnDsWl8IGnDsXxtYSB8biB5fG11bnwgbXV8bWFtfHRhY3xhIG58aSB0fGsgcnxzYW18aWFufGFzaXxrIGh8d2FzfHl3YXxpeXR8bGxwfHNhbnxzdW18cmF5fHNpIHxwYW58bmtpfHRhcnwgaWl8dSBrfMOxaWt8dWsgfGnDsWF8a3VrfHdwYXxhd3B8YWtrfGEgdXx3YXR8dXJpfCBtaXx5YXJ8dXlrfGF5d3xoIGN8aGEgfHRheXxybWl8YXJtfHV0YXxsYXN8eWthfGxsa3xrdWx8d2nDsXxhdGl8c2thfCBsbHxraXR8biBofHV0aXxraWN8bWF0JyxcbiAgICBtYWQ6ICdhbiB8ZW5nfG5nIHxiYW58IHNhfCBrYXxkaGF8cmVufCBzZXwgYmF8YWsgfCBoYXxhZGh8aGFrfCBkaHxhbmd8c2UgfCBwYXxhYmF8YSBzfG5hIHxhZ2F8aGEgfCBvcnxuIHN8b3JlfGFyYXwgYWd8Z2FkfGFyZXxhbmF8biBvfG5nZ3xhbGV8Z2FufGEga3xhbGF8ZGh1fHRhYnxzYXJ8b3RhfGFzYXxlYmF8IG90fCBrZXxzYWJ8YmEgfHdpIHx1d2l8YWJifGkgaHxodXd8YWFufG4ga3xhIGJ8YmJhfCB0YXwgbWF8cGFufGhhbHxiYXN8YWtvfGRoaXxyYSB8a2FifGVtIHxiZWJ8a2EgfGxha3xnaSB8bGVtfGcgYXxla2F8biBifGFtYXxuZ2F8c2FufGF0IHxvbmd8cmFufG5nZXxhIG98Z2d1fHNhIHxhIGR8YW5lfG4gcHxrZW58cGFyfGFqYXxtYW58Z2FyfGF0YXxuZWt8YXBhfCBuYXxhZ2l8YWJlfCBnYXxlIGV8c2FsfGEgYXx0YW58ZyBzfGFsIHxrYWx8Z2VufHRhIHxpIHN8YWthfGUgYXxhIHB8YSBlfCBsYXwgcGV8bmFufCBhbnxlcmF8ZSBkfCBlIHwgYmV8biBhfCBhbHxlbmF8dXkgfGd1eXxuIG58YXRlfCBiaXxtYXN8ZSBrfGthdHx1YW58b2FufGtvbnxrIGt8YSBtfGkgZHxnIGV8biB0fGcga3xhZGF8a29hfGxhbnxlbGF8IGRhfGJhZHxtYSB8bmUgfGFzIHxsYWJ8ZWdhfCBtb3xhciB8Y2FyfG9uZXxpIHB8YmkgfGthYXxiYXR8cmkgfG9uIHxwb258IHNvfGUgYnxsZSB8YWggfGFiaXxhc2V8YWRpfGVwYXwgZXB8ayBofGFuZHxwYW18dGUgfG9rIHxzdGV8YW9ufG9tIHxva298YWhhfGFyaXxvbmF8YXNpfHRlcnwgZGl8ZGkgfHBhZHxlIHN8c2FkfHlhcnxuZWd8dG9ufHNldHxyZ2F8b3N0fG1vc3xnYXB8bmRhfGEgbHxoYXJ8aSBrfGluYXwgYSB8IG5nfGtvbXxpc2F8c2kgfGEgdHxhIGh8IGtsfGphbnxkYWp8aWdhfGhpZ3xpZGh8aGlkfG5kaHxuIG18bmdzfHR0b3xldHR8YXJnfGxhIHxrIGJ8bGVyfGsgZHxubmF8IHRvfG5hb3xuIGR8bWF0fCBjYXx0YWR8YmlzfGF5YXxlcG98YWVufCBwb3xiaW58bnlhfGthc3xrIHN8biBofHN5YXxudGF8Z3NhfGVuIHxhbnR8biBnfGthcnxpIGV8ZGFzfGUgdHxlIHB8aWJhfCBwcnxnIHB8IGhvfCBlbHxpIGF8aGkgfG9zIHxzYW98dXdhfHRlc3wgamF8bmFnfG5hc3xsYWV8c2lhfHQgc3xrIG98bnRvfGludHx5YXR8YXJufG0gcHxkdXd8YWR1fGV0YXwga298aSBifG5pIHxnIG58a2xhfHJha3xhbWV8bXBvfGp1YXxzb2t8YXNvfGdnaXxlamF8cGVsfGphbXxlbGV8IGV0fGRpbCcsXG4gICAgbnlhOiAnYWxpfG5kaXxhIG18YSBrfCBuZHx3YSB8bmEgfCBhbHx5ZW58IGt1fG50aHxyYSB8ZGkgfHNlIHxuc2V8IG11fGEgbnx0aHV8aHUgfG5nYXwgd2F8bGEgfG11bnx1IGF8dW50fGl5ZXwga2F8Y2UgfGFjZXwgbG98YSBsfGFuZ3xlIGF8IGxhfCBwYXxsaXl8YSB1fGVuc3wgbWF8aWR3fG9uc3xkd2F8ZSBtfGkgbnxhbGF8a2hhfGxvIHxsaSB8aXJhfGVyYXxlbmV8Z2EgfGFuYXx6YSB8byBtfCBtb3x5byB8byB3fCBjaXx3ZSB8ZHppfGtvIHxvIGx8YW5kfGRhbnxoYWx8emlrfGNoaXxveW98cGEgfG5lcnx1bHV8ZW5hfG1veXwgdW18YSBwfCBkYXxhcGV8a2FwfGthIHxpa298IGFufHBlbnxhIGN8dG8gfGl0b3xoaXR8bmNofCBuY3xpcml8bGlyfHdhY3x1bW98ZSBrfGx1IHxhIGF8YXllfCBkenxrdWt8YSB6fGR3ZXx0aGF8bWFsfCB6YXxpbmd8dWZ1fG11IHxybyB8ZnVsfCB1ZnxvIGN8aSBkfGxpbnxlIGx8em8gfGVkd3wgem98byBhfG13YXx1IHd8aXJvfG8gbnxsYW58YW11fGVyZXwgbXd8bnppfGR6YXxhbG98cmkgfCBsaXxmdW58bGlkfGdhbnxzbyB8IGNhfGt1bHxvZnV8bnNvfG8genx1bG98dW56fG8ga3xtdWx8bGFtfGkgY3xzYW58YSBifGt3YXwgbmF8YSBkfCBhIHx1bmF8dSBrfGkgbHxua2h8YW50fGFrdXxjYSB8Y2l0fG9saXxpcG98ZGlwfGFtYXxsYWN8d2lyfGhhbnx5YW58b3NhfHVsaXx0c2F8aSBtfHBvbnxrdXB8dSBkfHRpIHxnd2l8dWtofHVuZ3xodW58bG9ufGFua3xuZGF8aWtpfGluYXwga298YW8gfGRpenxwaHV8YXRpfG9tYXxpIGF8dHNpfHBhdHxpeWF8c2l5fGt1dHwgeWF8emlkfGV6ZXxtYSB8aSBrfG1lcnxvbWV8bW9sfHUgbnx1IG98YXBofG9nd3xpem98bWJhfHNpZHxrdSB8c2FtfGF3aXxhZHp8IGFkfGl6aXx1bGF8c2F5fGUgbnxraHV8IGtofHJlenx2b218YnZvfG9raHxsb2t8d2lufGFraHxvIG98IGFtfCBvbnx6aXJ8bWFwfCB6aXxlemF8amEgfGdvIHxuZ298aWthfGl0c3xhdHN8b3NpfGd3ZXwgY298aXNhfHlhIHxoYXd8YW5pfG8gcHx6aSB8bmR1fGtob3xlem98a2lyfHVuaXxpIHV8IGF5fGxhbHxnYWx8c2EgfGJvbXwgYm98b2xhfGFtYnx3YWt8aGEgfGJhIHxuamF8YW5qfGJhbnwgYmF8aXphfCBidXx1ZHp8bmd3fGJ1bnxveWV8byBkfG5hbHxrdXN8aSBwfGkgb3xpIHl8d2kgfCBudHxlIHB8IHNpfGFrYXxuZSB8bWVufGppcnxuaml8c2VkfGV0c3xlbmR8ZWthfHVtYXxkdSAnLFxuICAgIHp5YjogJ2JvdXxpeiB8YWV1fGVuenxlbmd8dXogfCBib3xpaCB8b3V4fG56IHwgZGl8aW5nfHogZ3x1eCB8dXEgfGRpaHxuZ2h8IGNhfG5nIHxnZW58dW5nfHogY3wgbWl8bWl6fGlqIHxjYWV8eiBkfCBnaXwgZGV8IGdlfGV1cXx5b3V8IGNpfG5nenxvdWp8YWVufHVqIHwgeWl8aWVufGd5YXwgZ3V8bmdqfG1ib3wgbWJ8emxpfGRhZXxnaWp8Y2lufGFuZ3xqIGR8bmFlfCBzZXwgYmF8eiB5fGV1enwgY3V8ZGUgfHggbXxveiB8aiBnfG91enx4IGJ8bGkgfHogYnxoIGd8IGRhfCB5b3xuaiB8eG5hfG94bnxyb3h8IHJvfGggY3xuemx8dmVpfHlhdXx3eiB8eiBtfGl4IHwgc2l8aSBjfGlxIHxnaCB8aiBifCBjd3xuZGF8eWlufCBoaXwgbmR8ZGFufHZ1bnxpbmh8IGdhfGNhbnxlaSB8Y3VufHlpZXxxIGd8aG96fGJhdXwgbGl8IGd5fHd5b3xjd3l8eiBofGd1ZXxneiB8Z3VufGZhenx1bnp8eWVufHVoIHxkZW58Y2l6fCBnb3xxIGN8Z2ogfCBiaXxlaiB8YWVqfCBmYXxoaW58emNpfCB3bnxqIG58Z296fGdhaXxhdSB8eiBzfHEgZHwgdnV8aCBtfGd2YXxodSB8YXVqfG91cXxheiB8aCBkfHlhIHx1ZWt8Y2kgfG5oIHx1IGR8b3UgfHNvdXxqc298Z2pzfGRpbnxhd3p8ZW5qfCBkb3xoIHN8ZXZlfHNldnx6IHJ8bnEgfHNpbnxuaHl8ZyBnfGcgYnxsaXp8a2d5fGVrZ3xzZW58ZWl4fHduZ3xsaWp8bmdxfGJpbnxpIGR8Z2hjfCBoYXxiYWV8aGl4fGggeXxqIGN8Z2hnfGkgYnxvdWh8ZW4gfG4gZHxoIGZ8aiBzfHogdnxqIHl8bGF3fGhjaXxhbmh8aW56fHEgeXxuZWl8YW5qfG96Y3xleiB8ZW5ofHEgc3xhaXF8dWVufHpzaXx6ZGF8aHllfHVqY3xlIGN8c2l6fGVpenxhbnp8ZyB5fGkgZ3xxIG58YmllfCBuZXwgYWV8Z2l6fHUgY3xoZ3l8ZyBkfGdkYXxuZ2R8Y291fCBsYXx6IGx8YXV5fGFpIHxpbiB8aXV6fHpkaXxqaHV8dWpofHl1enwgZHV8aiBtfCBmdXxjdXp8ZWlxfGcgY3xnemR8IGNvfHV5dXxjb3p8emJpfGJpdXwgZHd8aSBzfGkgbnxhdyB8ZHVufHl1bnxpenl8ZGF3fCBoZXxuaG98IGhvfGVucXx4IGx8Y2llfHEgYnxjaWp8dXpsfHggZHxpdWp8YXdqfCB5YXxlaWp8ZGVpfG5kZXxzYWV8aXpjfHducXx3bmh8c2VpfGggYnxhaWh8Z3pzfGJ3bnxhIGR8dSBnfG5nZ3xqY2F8ZSBifHJhbnwgcmF8aGN1fCBtZXxpZXR8dmFufCBidXxndWh8aGVufHNpIHx3bmp8IHZlfHUgYnxhemx8aW5qfGdha3xnYW58b3pnfHNpdXx5YXd8aSBtJyxcbiAgICBraW46ICdyYSB8IGt1fHNlIHwgbXV8YSBrfG50dXx0dSB8bmdhfHVtdXx5ZSB8IHVtfHVudHxtdW58ZSBufCBndXx3ZSB8aXJhfGEgbnwgbiB8d2EgfGVyZXxtdSB8a28gfGdvbXxhIGJ8ZSBhfCBhYnxsaSB8ZSBrfG1iYXxhIGF8ZSBifGFiYXxnYSB8ZSB1fGJhIHxvbWJ8byBrfCBiYXxhIHV8b3NlfHUgYnxvIGF8IGN5fGFzaHxlbmd8IGFnfGt3aXwgYnV8emEgfGdpaHxyZW58bmRpfCB1Ynxhbmd8eW8gfGFrYXxndSB8aWdpfCBpYnxhIGd8YSBtfCBudHx1bGl8byBifGFtYXxpaHV8ZSBpfG50YXwgYWt8YWdvfHJvIHxvcmF8IGthfHVndXxodWd8ZGkgfGl5ZXxiYW58IGFtfGN5YXxrdSB8dGEgfCBid3xhbmR8c2hhfHJlIHwgaWd8Z2FufHVidXxuYSB8IGt3fG9ib3wgYnl8IGJpfGEgaXx5YW58a2EgfHNob3xrdWJ8ZXJhfGVzZXwgd2V8a2FufGFnYXxob2J8Ym9yfGFuYXxieW98dXJhfHVydXxpYml8cndhfHdlc3x1IHd8bm8gfHVrb3xpIG18bW8gfHUgYXx1cmV8aWxpfHViYXxvIG58dWhhfHVnYXxuIGF8IGltfGlzaHxid2F8YndvfHdpeXxhbGl8YmVyfHplIHxuZSB8dXNofGFyZXxvIGl8dSBtfGdlcnxidXJ8cmFufCBraXwgbm98YW5lfGJ5ZXwgeSB8ZWdlfHRlZ3xndWh8IHVrfG4gaXxyYWd8aSBhfHlhIHx1IGd8ZSBtfGFuenxibyB8YWJvfGdhcnx3byB8eSBpfGhvIHxhZ2V8aW5kfG8gbXxla2V8YSBzfGFyYXx6aXJ8aXRlfGt1Z3xraW18YWNpfCBhc3x1IG58YW5pfGtpcnxtYmV8IGdpfHlvc3xrdXJ8dWdvfGdpcnxlIGN8aXphfGFob3xpIGJ8dHVyfGF0YXxvIHV8IHNlfHUgdXx6byB8aSBpfGFoYXxuZ2V8bXdlfGlyb3xha3d8YW55fGV6YXx1a2l8aW1pfG8geXxhdGV8dSBrfGlraXxhdHV8YmF0fCBpbnxnbyB8dGFufG4gdXxib3N8IGJvfCBuYXxoYWt8aWJ5fCBhdHxpaGV8dW5nfGhhIHxidWx8a2FyfGV5ZXxla298Z2VrfG55YXxvIGd8c2h5fGUgeXxhd2V8bmdvfGJpdHxtdWx8bnppfHJlcnxiYWd8Z2UgfGltd3xiYWh8Y2lyfGdhY3xiYWt8amUgfGdlenxpbXV8ZXplfHRzZXxldHN8bWF0fCBydXxpcnd8aGUgfCBuaXwgdXJ8IHlpfGFrb3xuZ2l8IG5nfGkgbnxyZXp8dWJpfGd1c3xmaXR8YWZpfHVnaXx1a2F8YW1ifG8gY3x1dHV8dWZhfHJ1a3xtdWd8YmFzfGJpc3x1a3V8aGlufGUgZ3xpZ2V8YW1vfGluZ3wgYWZ8eWVtfG5pIHwgcnl8YSByfGdhenx0ZSB8ZXJ3fGJ3ZXx1Ynd8aHdhfGlrb3wgYWx8YW50fHppICcsXG4gICAgenVsOiAnbmdlfG9rdXwgbmd8YSBufGxvIHx1bmd8bmdhfGxhIHxsZSB8IG5vfGVsb3xsdW58IHVtfGUgbnx3YSB8d2UgfGdlbHxlIHV8ZWxlfG5lbHx0aGl8a2UgfG5vbXxleml8bWEgfG50dXxvbWF8aGkgfG8gbnxuZ298dHUgfG5rZXxvbmt8byBsfHV0aHxuaSB8YSB1fGxla3x1bnR8IHdvfG8gZXwgbG98bXVufHVtdXxwaGF8IGt1fGFuZ3xobyB8a3dlfHVsdXwgbmV8d29ufHVuZXxsdWx8ZWx1fCB1bnxhIGl8Z29rfGt1bHxhdGh8aGxhfGxva3xraGV8ZW5pfHRob3xlbGF8endlfGFraHxrZWx8YSBrfGVuenxhbmF8YmFufGFrYXx1IHV8aW5nfHVsZXxlbHd8a2hvfHVrdXxhbGF8bHdhfGdlbnwgdWt8d2VufGFtYXxuYSB8ZSBrfGtvIHxnYW58YSBlfGhlIHx6aW58ZW5rfG8geXwgZXp8a2F0fCBrd3xsYW58ZXRofGhldHxvIG98IG9rfG9rd3xpIG58bnppfGFiYXxlIGF8aGFrfGxlbHxsd2V8ZWtvfGFuZXxrYSB8c28gfHlvIHxheW98byBhfHVobHxua3V8bnllfCBuYXx0aHV8bXBofGRvIHxiZW58aXNlfGt1dHxpa2V8a3VufCBpc3wgaW18aG9sfG9idXxmYW58aSBrfGUgd3xuaGx8bm9rfGluaXxhbmR8a3VofHVraHxrdWt8IGFrfGUgaXxpc2l8YXBofHppIHxpbGV8ZWtpfGVraHwgYmF8ZWthfHRoZXxhIGF8IGxlfCB5ZXxrd2F8ZSBlfGZ1dHwgZnV8emEgfG1hbHwgYWJ8ZWJlfGlzYXwgZW18byB3fGt1YnxtdGh8aSB3fG5kbHxlbXB8YW55fG9sb3xnYSB8IGtvfG5lbnxuaXN8YWx1fGl0aHxlbGl8bmRvfHNlYnxuZGF8IHlhfGkgaXxla2V8dmlrfGFrZXx1YmF8YWJlfGV6d3x5b2t8YmEgfGFsZXx6byB8b2x1fHVtZXx5ZSB8ZXNpfGtpbHxraHV8eWVufGVtaXxuZXp8aGxvfGEgbHxhc2V8dWxhfGtla3xhIG98aXBofG8gdXxubyB8YXp3fGthbnxtZWx8dW55fG5lIHx1ZmF8YWhsfGxpbnxodWx8YW50fHVuZHxzYSB8ZW5ofGt1c3xrdXZ8bGFrfCBpbnxvIGl8ZGlufGtvbXxhbWJ8emlzfGluZHxvbGF8dXBofHdlenxlbmd8eWV6fHBoZXxwaGl8bWJhfG55YXxoYW58a3VmfG5lbXxpc3d8YW5pfGl5b3wgaXl8ZnVufCB5b3x1dml8aSBhfGVuZXxpeml8IGVsfGNhbHxpIGV8ZXplfGFub3xuYXl8aHdlfGt1cHxsYWx8dXlvfHVidXxrb2x8b2tvfHVsb3wgbGF8ZSBsfHRoYXxuYW58bWZ1fGhvbnxuemF8aGlufCBleXxvbXB8ZGEgfGJvIHxpbHV8d2FrfGxvbnxpc298a3VnfG5rYXxpbmt8aSBsfHNla3xla3V8IGVrfHRod3xnZXonLFxuICAgIHN3ZTogJ2FyIHxlciB8dHQgfGNoIHxvY2h8IG9jfGluZ3zDpHR0fGlsbHxyw6R0fGVuIHwgdGl8dGlsfGbDtnJ8bGwgfCByw6R8bmRlfCBmw7Z8dmFyfGV0IHxhbmR8IGVufGVsbHwgaGF8b20gfGhldHxsbGV8bGlnfGRlIHxuaW58IGRlfG5nIHwgaW58IGZyfGFzIHxsZXJ8IGVsfGdlbnxudmF8dW5kfGF0dHxlbnZ8ciBofCBpIHxyIHJ8c2thfGZyaXwgc298aGFyfGRlcnwgYXR8w7ZyIHx0ZXJ8YWxsfHQgdHwgdXR8ZGVufGthIHxsbGF8c29tfGF2IHxzYW18Z2hlfGdhIHwgc2t8IHZpfCBhdnxldGV8bGEgfGVuc3x0IGF8IHNpfHIgc3xpZ2F8aWdofHRpZ3wgdmF8aWcgfGEgc3wgc3R8aW9ufHJhIHx0dGl8YSBvfCDDpHJ8dGVufG5zIHx0IGV8bmEgfCBiZXxoYW58IHVufCBhbnwgc2F8YSBmfCBsYXwgZ3J8IG3DpXxuZ2V8biBzfHZpc3xsYW58bcOlIHxhdGl8bmF0fCDDpXR8YW4gfG5uYXwgbGl8IGFsfHQgZnxhbnN8bnNrfHNuaXxncnV8w6RsbHx0aW98YWQgfCBtZXxpc2t8a2xpfHMgZnx0IGl8c3TDpHx0IHN8cmkgfG1lZHxzdGF8aCByfGxpa3xkYSB8ZGlnfHRhIHxyIG98cnVufG9uIHwgcmV8bGFnfHR0YXzDpHIgfGthcHxhIGl8YSByfMOkbmR8ZXJ2fG4gZXxrdGV8biBmfHJ2aXxub218aXR0fGlkIHwgbW98c2t5fHIgZXx2ZXJ8w6Ruc3x2aWx8Z3QgfGlndHwgbmF8dGFufHV0YXxkcmF8dCBvfHJvIHxpc258IGZhfGthbHxpaGV8cmlofGVya3xyIHV8ZSBzfHBlcnxsIHZ8dmlkfG9uZXxyZWx8YmVyfHJhbnxvdCB8bW90fG5kbHxkIGZ8ZWQgfGlrYXxtw6RufGwgc3xiZXR8dCBifGRkIHx5ZGR8a3lkfG4gb3xzIHN8c3RyfG4gbXx0ZXR8c2lufHIgZnwgb218cm5hfGludHxyIGl8ZW5kfG5hZHxsIGF8YXAgfGVyc3xuZGF8dCB2fGVudHxyYmV8YXJifCBow6R8ZXRzfGjDpGx8YW1ofGNrbHxnYXJ8bmdhfHIgbXxqZSB8cmplfGFyanxuIGl8cyBlfGxpbnxyIHR8aSBzfHLDpG58IHBlfGlsa3x0IGx8ZXJufHDDpSB8IHDDpXx0w6RsfGQgZXxkb218ZWdlfGcgZXx0bml8ciBhfGxpdHxyYXN8IHPDpXxsbG58a2lsfHNraXxlbm58aSBvfGEgZHxlcsOkfG4gYXxhcmF8IGdlfMOkcm98YSBtfCBhcnx0IGR8aWxqfGVsc3x5Y2t8IHZlfGcgb3xmcsOlfG5hc3x0cmF8ZXNzfGRlbHxtIHN8bGl2fGwgbHxpbiB8diBzfGcgYXxhc3R8ZSBlfHZhbHxzb258cnNvfGUgdHxhZ2V8bmQgfCBlZ3xpYWx8Y2lhfG9jaXxzb2N8dXBwfGlnaXxlbGl8ZyBzfHJrbHxnYWR8bmRyfG50ZXzDtnJhJyxcbiAgICBsaW46ICduYSB8IG5hfCB5YXx5YSB8YSBtfCBtb3x0byB8IGtvfGxpIHxhIGJ8IGxpfG8gbnwgYm98aSBufGEgeXxhIG58a2kgfGEgbHxrb2t8bGEgfCBtYXx6YWx8aSB5fG9raXwgcGV8bmdvfGFsaXxwZSB8c28gfG5zb3xvdG98b25zfCBiYXxhbGF8bW90fGEga3xlbmd8bnlvfGVrb3xvIGV8bmdlfHlvbnwgbnl8a29sfGxpa3xpa298YSBlfG8geXxhbmd8eWUgfCB5ZXxva298bWEgfG8gYXxnbyB8IGVrfGtvIHxlIG18YXphfHRlIHxvbG98c2FsfGFtYXxzaSB8IGF6fG1ha3xlIGJ8bG8gfCB0ZXx0YSB8aXNhfGFrb3xhbWJ8c2VufG9uZ3xlIG58ZWxhfG95b3xpIGt8YW5pfCBlc3xvIG18bmkgfG9zYXwgdG98YmFufGJhdHxhIHR8bWJhfGluZ3x5byB8IG95fGVsaXxhIHB8bWJvfG8gcHxtaSB8IG1pfCBuZHxiYSB8aSBtfGJva3xpIHB8aXNpfG1va3xsaXN8bmdhfGdlIHxuZGV8a296fGJvIHxnZWx8YXRvfG8gdHxtb3N8YWthfG9iYXxlc2V8bGFtfGtvcHwgZXp8bG9ufGRlbnxvbWJ8byBifG90YXxzYSB8Z2EgfGUgYXxlIHl8ZXphfGtvc3xsaW58ZXNhfGUgZXxrb2J8ZSBrfHNhbXxrb3R8a2FufGJvdHxpa2F8bmdpfGthbXxrYSB8IHBvfGdvbXxvbGl8b3BlfHlhbnxlbG98IGxvfGF0YXwgZWx8Ym9ufG9rYXxwbyB8YmlrfGF0ZXwgYml8YSBzfGkgdHxpIGJ8b21pfHBlc3x3YSB8IHNlfG96YXxsb2t8Ym9tfG9rZXxzb218endhfG1pc3xpIGV8YmVrfGlraXwgYXR8b2xhfHRpIHxvend8bGlifG8gbHxvc3V8b3NvfGUgdHxuZGF8YXNlfGVsZXxrZWx8b21vfGJvc3xzdSB8dXN1fHN1c3xiYWx8aSBsfGFtaXxvIG98YmFrfCBuenxwb258dGVsfG1vYnxtdSB8IGVwfG56YXxhc2l8bWJpfGF0aXxrYXR8bGUgfGdpIHxhbmF8b3RpfG5kaXx0YW58YSBvfHdhbnxvYmV8a3VtfG55YXxtYWJ8YmlzfG5pc3xvcG98dGFsfG1hdHwga2F8Ym9sfGFuZHxheWV8YmF6fHUgeXxldGF8IHRhfG5lIHxlbmV8ZW1ifHNlbXxlIGx8Z2lzfGJlbnwgYWt8IGVufG1hbHxvYm98Z29ifGlrZXxzZSB8aWJvfOKAmXRlfCDigJl0fHVtYnwgc298bWlrfG9rdXxiZSB8bWJlfGJpIHxpIGF8ZW5pfGkgb3wgbWJ8dGV5fHNhbnwgZXR8YWJvfGViZXxnZWJ8ZWJhfHllYnxidSB8IGFzfG90ZXxzaWt8ZW1hfGV5YXxpYmV8bWlifGFpIHxwYWl8bXdhfGtlc3xkYSB8bWF5fGJvenxhbXV8YSBhfGtvbXxtZWx8b25hfGViaXxpYSB8aW5hfHRpbnwgdGl8YndhfHNvbHxzb24nLFxuICAgIHNvbTogJyBrYXxrYSB8YXkgfHV1IHxhbiB8eW8gfG9vIHxhYW58YWhhfCB3YXxkYSB8IHFvfCBpbnwgdSB8c2hhfCB4YXxhIGl8YWRhfGl5b3wgaXl8bWEgfGFtYXwgYWh8IGxhfHFvZnxhYSB8aGF5fGdhIHxhIGF8YSB3fGFoIHwgZGh8YSBzfCBkYXxpbiB8eGFxfCBvb3xhIGR8YWFkfHlhaHxlZXl8IGxlfGlzYXxsZWV8dSBsfHEgdXxhcSB8IHNpfHRhYXxleWF8YXN0fGxhIHxvZiB8aXlhfHNhIHx5IGl8dSB4fHN0YXxrYXN8eHV1fHV4dXx3dXh8IHd1fGlpc3xudXV8aW51fHJvIHwgYW18IG1hfGEgcXx3YXh8ZGhhfGFsYXxrYWx8bmF5fGYga3xhIGt8bGUgfGt1IHwga3V8IHNofG8gaXxhIGx8dGEgfG1hYXxhIHV8ZGlpfGxvb3wgbG98byBhfGFsZXxhcmF8YW5hfGlnYXxvIGR8IHV1fGhhIHxsbyB8byBtfG8geHxkb298YXJvfGthcnx5YWF8Z3UgfHNpIHxpbWF8bmEgfCB4b3wgZmF8YWRrfGRvIHxhIHh8YWQgfGFhc3wgcWF8IHNvfGEgb3wgYmF8bGFnfCBhYXwgaGV8ZGthfGFkaXxzb298byBrfGFxYXwgaXN8YXNofHUgZHxoYWR8IGdhfGVlZHxzYW58dSBrfGEgbXxpaW58aSBrfCBjYXx1IHN8biBsfHlhZHxya2F8YXhhfGVsb3xoZWx8YWdhfGhpaXxvIGh8byBxfCBoYXxpZCB8biBrfCBtaXxiYWF8IHh1fGhhcnx4b3J8YWFyfGF4IHxtYWR8YWRkfG50YXxtaWR8YWFsfHdhYXxoYWF8aW5hfHFhYXxkYWF8YWd1fGFya3xvIHd8bmthfHUgaHxkYWR8aWhpfCBidXwgaG98bmFhfG4gYXxheXN8aGFxfGEgaHxvIGx8IGd1fG8gc3xheWF8c2FhfGxrYXwgZWV8IHNhfGRkYXxhYiB8bmltfHF1dXxnZ2F8YW5rfGtpaXxyY2l8YXJjfG4gc3xhIGd8IGppfGdlbHwgZ2V8ZWxpfHlzYXxhIGZ8c2l5fGludHxsYWF8dXVxfHVxdXx4dXF8IG11fGkgYXx1dXJ8bWFyfHJhIHxpcml8byB1fCBjaXxyaXl8eWEgfGFkb3xhbGt8ZGFsfGVlIHxhbCB8cnJpfGF5bnxhc2F8IGRpfG9vY3xhYW18b2ZrfG9vbnx0byB8YXlvfGRhcnwgeGl8ZGhpfGplZXxhIGN8IGF5fHlpaHxhIGp8YmFufGNhYXxsYWR8c2hvfGQga3xpZGF8dXFkfGFnZ3xzYWd8cmFzfGJhcnxhciB8IGtvfCByYXxvIGZ8Z2FhfGdhbHxmYWx8dSBhfCBkZXwgeWF8byBjfGlpIHx4YXl8ZWVsfGFhYnxzaWd8YWJhfG9ycnxob298dSBxfHkgZHxlZCB8aG8gfHNhZHxxZGF8aCBxfGZrYXxuIGl8eGFnfG4geHxxYXl8bHNofHVsc3xidWx8dSB3fGppbnwgZG98cmFhfCB1Z3xpZG98b29kJyxcbiAgICBobXM6ICdhbmd8Z2QgfG5nZHxpYiB8IG5hfG5hbnxleCB8IGppfGViIHxpZCB8ZCBufGIgbnx1ZCB8IGxpfG5sIHxhZCB8IGxlfGppZHxsZWJ8bCBsfCBnYXxvdCB8IG1lfHggbnxhbmx8YW90fG1leHxkIGd8YiBsfGQgZHxvYiB8Z3MgfG5nc3xqYW58IG5lfHVsIHwgbml8bmphfCBuanxsaWJ8b25nfG5kIHwgemh8amV4fCBqZXxiIGp8IHNofG5nYnwgZ2h8Z2IgfCBndXxnYW98bCBufGhhbnwgYWR8Z2FufCBkYXx0IG58IHd1fGlsIHx4IGd8bmIgfGIgbXwgbmh8c2hlfGlzIHxsIGp8ZCBsfG5oYXxsIGd8ZCBqfGIgZ3xlbCB8ZW5kfHd1ZHxuZXh8Z2hvfGQgc3xkIHp8b3VsfGhvYnx1YiB8bmlzfCBjaHwgeWF8aXQgfGIgeXxlaWJ8IGdpfHMgZ3xsaWV8IHlvfCB6aXxvdWR8cyBqfGQgYnxueCB8IGRlfGVzIHxkIHl8IGh1fHVlbHxndWV8aWVzfGFvYnx5b3V8IGJhfGQgbXxjaHV8Z2lhfGRhb3xiIGR8cyBufHppYnwgZ298emhhfGVpdHxoZWl8YWwgfGh1ZHwgZG98bnQgfG9sIHwgZmF8dCBnfGhlbnx1dCB8Z3ggfG5neHxhYiB8ZmFsfHgganxiIHp8aWFufGQgaHxkb258YiB3fHQganxpYWR8bmVufCB4aXxnb3V8ZCBjfGIgaHxoYW98eCB6fG5pYnxhbnh8YW50fGd1YXwgbWl8cyB6fGRhbnxveCB8aW5sfGhpYnxsaWx8dWFufGFuZHwgeGF8YiB4fCBzZXx4IG18dWlifGh1aXxkIHh8YW5ifGVubHwgd2V8b2QgfGVuYnwgZHV8YXQgfGl4IHxzIG18YmFvfCBob3xodWJ8IG5nfHpoaXxqaWx8bCBzfHlhZHx0IG18dCBsfHlhbnwgemV8IGp1fGhlYnxoYWR8b3MgfGFvc3x0IGh8bCBkfG5nYXwgaGV8YiBhfHhhbnxiIHN8c2VufHhpbnxkdWR8anVsfGQgYXxsb3V8IGxvfGRlaXxkIHd8IGJpfGIgY3wgZGl8emhlfGd0IHxuZ3R8eCBsfGJhZHx4IGJ8IGphfGhvbnx6aG98YmxvfCBibHxkIGt8IG1hfGRlYnxsIHp8d2VpfCB5aXwgcWl8YiBifHggZHxkIHB8ZXVkfCBnZXx4IGF8Y2FufCBjYXx0IHd8bG9sfCBzaXxob2x8cyB3fGFvZHxwYW98IHBhfHJlbnwgcmV8eCBzfGV1dHxwdWR8IHB1fGFveHxtaXN8Z2wgfG5nbHx4IHd8emVpfGdvbnxlbnh8Z2hhfHMgYXxiIGZ8bCB5fG91YnxlYWJ8aGVhfCB0b3xkaWR8IGtvfHVuYnxnaHV8dCBwfHggY3xnZXV8dCBzfHggeHxqYW98ZWQgfHQgY3xsIG18bCBofGppYnxheCB8bCBjfGQgZnxuaWF8IHBpfGV1bHxkIHJ8IG5vfG1pbnxsIHR8aGV1fHV4IHx0b3V8bnMgfHMgeXxpZWx8cyBsfGh1bicsXG4gICAgaG5qOiAnaXQgfCB6aHwgbml8YWIgfGF0IHxhbmd8IHNofG5pdHwgZG98dWF0fG9zIHxheCB8b3ggfG9sIHxueCB8b2IgfCBuZHx0IGR8emhpfG5mIHx4IG58aWYgfHVheHwgbXV8ZCBufHRhYnwgdGF8IGN1fG11YXxjdWF8YXMgfGFkIHxlZiB8dWYgfGlkIHxkb3N8Z2QgfG5nZHxoaXR8aWIgfHVzIHxlbnh8ZiBufHNoZXxzIGR8dCBsfG5iIHx1eCB8eCB6fGVkIHxpbmZ8YiBufGwgbnx0IG58YW9ifGIgenwgbG98b25nfGl4IHxkb2x8IGdvfHpoZXxmIGd8IGhvfCB5aXx0IHp8ZCB6fGIgZHwgbGV8ZXVmfGQgc3x1dCB8eWFvfCB5b3wgeml8Z2IgfG5nYnxuZG98ZW5ifGxlbnwgZHJ8emhhfHVhYnxkcm98aG94fCBnZXxuZW58IG5lfGhhbnwgamF8ZGFzfHggZHx4IGN8eCBqfGYgenxzaGl8ZiBofGlsIHwgZGF8b3V4fG5kYXxzIG58bmQgfHMgenxiIGd8IG55fGhldXwgZGV8Z2YgfG5nZnwgZHV8b2QgfGdveHwgbmF8dWFkfCBndXxpbnh8YiBjfCB5YXx1ZWZ8IHhhfCBqaXxvdXN8IHVhfCBodXx4YW58aGVufHpodXxuaWx8amFpfHJvdXx0IGd8ZiBkfCBsYXxlbmZ8Z2VkfGlrIHwgYnV8bnlhfHlvdXxmIHl8bG9ifGFmIHxidWF8dWsgfGlzIHx5aW58b3V0fG9mIHxsIG18dWQgfGh1YXwgcWl8b3QgfHQgc3wgYmF8YWl0fCBraHxzIHN8bmFkfCBkaXxhaWJ8eCBsfGxvbHwgaWR8ZG91fGV4IHxhb2R8YmFvfCByZXwgZ2F8ZCBkfGIgeXxsYXN8aGVkfGIgaHxiIHN8ZiBifHQgeXxqdWF8IGp1fCBkbHx4IHN8aHVlfGIgbHwgeGl8emlmfGR1c3xiIGJ8eCBnfGhpZnx4IHl8aGFpfCBuenxzaGF8IGxpfHggdHwgYmV8ZCBqfHVuZHxodW58cmVufGQgeXxoZWZ8eGlufCBpYnxiIHR8bCBkfGFvc3xzIGx8IGhhfGdhaXxuemh8Z3ggfG5neHwgYW98cyBifHMgeHxlbCB8Z3QgfG5ndHxoaWt8YWlkfHMgdHx4IG18ZiBsfGYgdHwgcGl8YW9mfHQgcnxlYiB8IGdofHMgeXxkIGx8Z3VhfCBiaXwgemF8IGZ1fHQgaHwgenV8aG91fGRldXxsYiB8IGxifGQgZ3wgbW98YiBrfCBib3xpYW98cm9zfGdvbnxldXR8eCBofGFsIHx1YWZ8aGFifHQgdHxrIG58ZiB4fGhpeHxwaW58eXVhfCBub3x0IGJ8YWsgfCB6b3xzIG18IG5ifCB3ZXxkIGJ8Z2hhfGYgc3xtb2x8ZXVrfGRheHxsIGJ8bm9mfCBrb3xsb3V8Z3VrfGVuZHx1YXN8dCBrfGRpc3xkYW58eW9sfHVhbnxkIHR8eCBifGxhbnx0IG18IGNofGppeHx4IHh8IGhsfGFveHx6aXN8eCBpfGV0IHwgcm8nLFxuICAgIGlsbzogJ3RpIHxpdGl8YW4gfG5nYXxnYSB8IG5nfCBpdHwgcGF8ZW4gfCBtYXwga2F8IGEgfCBrZXwgdGl8YW5hfHBhbnxrZW58YW5nfGEgbnxhZ2l8YSBrfG4gYXxnYW58YSBtfGEgYXxsaW58YWxpfGF5YXxtYW58aW50fHRlZ3xuIHR8aSBwfG50ZXwgbmF8YXdhfGEgcHxuYSB8a2FsfG5nIHxkYWd8Z2l0fGVnYXxzYSB8ZGEgfGFkZHx3YXl8biBpfG4gbnxubyB8eXNhfGFsIHxkZGF8biBrfGFkYXxhYmF8bmFnfG5uYXxuZ2d8ZXlzfCBtZXxhIGl8aSBhfG1leXxhbm58cGFnfHdlbnxpIGt8Z2FsfGdnYXwgdHV8ZW5ufCBkYXwgc2F8bm5vfCB3ZXx1bmd8IGFkfHR1bnxtYWl8IGJhfGwgbXwgYWd8eWEgfGkgc3xpIG58eWFufG5hbnxhdGF8bmFrfCBzaXxha2F8a2FkfGFhbnxrYXN8YXNhfHdhbnxhbWl8YWtpfGF5IHxsaSB8aSBtfGFwYXx5YXd8YSB0fG1ha3wgYW58aSB0fGcga3xhIHN8aW5hfGVuZ3xhbGF8aWthfGFtYXxvbmd8YXJhfGlsaXxkYWR8IGF3fGdwYXxuYWl8ZXQgfHlvbnxhbml8YWlrfG9uIHxhdCB8b21hfHNpbnxiYWx8aXBhfG4gZHx1bWF8ZyBpfGtldHxhZyB8aW4gfGFlbnxuIHB8cmFtfHNhYnxhZ2F8bm9tfGlub3xseWF8aWx5fHN5b3xpIGJ8IGtpfG5pYXxhZ3B8Z2ltfGthYnxhc2l8a2lufGlhbXxhZ3N8YmFifG95IHx0b3l8biBtfGFndHwgdGF8YmFnfHNpYXxnIGF8Z2lsfG1pbHwgdW18byBwfG5naXxuIHd8aSBpfHBhZHxwYXB8ZGFhfGl3YXxuYWF8ZWcgfGlhc3xlZCB8bmF0fGJhZXxvIGt8c2FhfHNhbnxwYW18Z3NhfHRhIHxraXR8bWEgfGR1bXx5dG98dGFufGkgZXx0IG58dWthfHQga3xhcHV8bGFufHN0YXxzYWx8IGxpfGEgYnxhcml8ZyBufGRlbnxtaWR8YWQgfG8gaXx5IGF8aWRhfGFyIHxhYXJ8eSBufGRleXwgZGV8IHdhfGEgZHxhayB8YmlhfGFvIHx0YW98bWlufGFzeXxtb258aW1vfCBnaXxtYWF8c2FwfGFiaXxpIHV8YWlifGtuaXxpIGx8Z2lufGdlZHxvIGF8IGFyfGthcHxwdWx8ZXl0fGFic3xpYml8IGFtfGFrbnxpIGd8a2lwfGlzdXxnIHR8YmFzfG5heXxpbmd8aSBkfGthcnxiYW58aWJhfG5pYnx0IGl8YXMgfGQgbnx5IGl8dXJhfGEgd3xuYWx8YWFkfGkgd3xsYWt8YWR1fGthaXxic2F8ZHVrfGVkdXwgZWR8bWF5fGFnYnxhZ2t8dHJhfGdnZXxzb2x8YXNvfGFncnxuZ3N8aWFufGlsYXxkZGV8ZWRkfHRhbHxhaXB8a3VhfHVtaXxwYXl8c2FzfGl0YXxwYWt8ZyBkfHVsb3xpbm58YXcgJ1xuICB9LFxuICBDeXJpbGxpYzoge1xuICAgIHJ1czogJyDQv9GAfCDQuCB80YDQsNCyfCDQvdCwfNC/0YDQsHzRgdGC0LJ80LPQviB80LXQvdC4fNCy0L4gfNC+0LLQtXwg0LrQsHzQvdCwIHzRgtGMIHwg0L/QvnzQuNGPIHzQviDQvXwg0L7QsXzQtdGCIHwg0LIgfNGB0LLQvnwg0YHQsnzQsNCy0L580LDQvdC4fNC+0YHRgnzQvtCz0L580YvQuSB80LDQttC0fNC70L7QsnzRgiDQv3wg0LjQvHzQvdC40Y98INGH0LV8INGB0L580LXQu9C+fNC40LzQtXwg0L3QtXzQu9GM0L180LvQuCB80YfQtdC7fNC60LDQtnzQtdGB0YJ80LLQtdC6fNCw0YLRjHzQvtCy0LB80LjQu9C4fCDRgNCwfNC10LogfNC5INGHfNC00YvQuXzQttC00Yt8INC00L580LjQtSB80LXQtdGCfNC80LXQtXzQvdC+IHwg0LjQu3zQuNC4IHzRgdGPIHzQtdCz0L580L7QsdC+fNC4INC/fNC90LjQtXzQuiDQuHwg0LHRi3zQuCDRgXzQuCDQuHzQvNC4IHzQsdC+0LR80LLQvtCxfNCy0LDQvXwg0LfQsHzQvtC5IHzRi9GFIHzQvtC8IHzQu9C10L180LDRhtC4fNC10L3QvXzQviDRgXzQviDQv3zRjNC90L580YLQstCwfNGC0LLQvnzQv9GA0Lh80L3QvtCzfNCw0LvRjHzQsNC60L580LLQsCB80Lgg0L180YHRgtC4fNC90YvRhXzRgtC+IHzQsdGA0LB80L7Qu9C2fNC00L7Qu3zRgdGC0L580Lgg0LJ80L3Ri9C8fNC+0LUgfCDQtdCzfNC90L7QsnzQuNGFIHzQtdC70Yx80YLQtdC7fNGC0LggfNC90L7RgXzQvdC1IHzQv9C+0Lt80YDQsNC3fCDQstGBfNC4INC+fCDQu9C4fNC4INGAfNGL0YLRjHzQsdGL0YJ80LLQu9C1fNGA0LXQtHzQuNGOIHzRgtC+0YB8INC+0YF80YzRgdGPfNGC0YzRgXzQvtC00Lh80YnQtdGBfNGPINC4fNC60LDQunzQv9GA0L580LbQtdC9fNGL0LwgfNC/0YDQtXzQsCDRgXzRgdC90L580LUg0LR80L3QvdC+fNC+INC4fNC40LkgfCDQutC+fNC+INCyfCDQvdC4fCDQtNC1fNGB0YLRg3zQu9C20L180YHQvtCyfNC1INCyfNC90L7QvHzQvtC70Yx80YDQsNC9fNC+0LbQtXzQuNGH0LV80LXQuSB80LDRgdGCfNC90L3Ri3wg0L7RgnzRgtGD0L980Lwg0Lh80L7QtNC9fNC30L7QsnzRgNC10YF8INC80L580L7RgdGDfNC70Y8gfNC+0YHQvXzQsCDQvnzQstC10L18INGC0L580L4g0LF80YjQtdC9fNGC0LLQtXzQvtCx0Yl80LAg0Lh80LUg0Lx80YzQvdGLfNC+0LHRgHzQstC10YB80YfQtdC9fNGPINC9fNC20L3QvnzRh9C10YF80LDQuiB80LvQuNGHfNC90LjQuHzQtSDQuHzQstGB0LV80LHRidC1fNCy0LDRgnzQtdGB0L980LzQvtC2fNC5INC4fNC90L7QtXzQviDQtHzQsdC10YF8INCy0L580Y8g0LJ80LTRgyB8INGB0YJ80LTQvdC+fNC+0L3QsHzQvdCw0YZ80LTQtdC9fNC10LbQtHzRhSDQuHwg0LHQtXzQuCDQtHzQvdGLIHzQtNC+0YF80LTQu9GPfCDQtNC7fCDRgtCwfNC70YzRgXzQsNGC0LV80YbQuNC4fNGPINC/fNGD0Y4gfNC40YLQtXzQtSDQvnzQvdC+0Ll80L/QvtC0fNC+0YLQvnzRgdGC0YB80YHRgtCwfCDQvNC1fNC10LvQuHwg0YDQtXzRjyDQunzRgtC+0Y980LDQvNC4fNC10L0gfNGMINCyfNGOINC4fNCw0LfQvnzQs9C+0YF80Lwg0L980Ywg0L980YIg0LF80LbQtdGCfNGD0YfQsHzRgdGD0LR80YzRgdGCfNC00YHRgnzRidC40YJ80LDRidC4fNC30LDRiXzQutC+0L180L3QuNGOfNCw0LwgfNC+0LTRg3zQtdGA0LV80LPRgNCwfNC/0LXRh3zQviDQvnzQvtGA0L580LrQvtGCfNC4INC6fNGC0YDQsHzQvdC40Lp80YPRidC1fNGG0LjQsHzQvtGG0Lh80YHQvtGGfNC90LDQu3zQtdGB0Lp80L4g0YB80LrQvtCzfNC00YDRg3wg0LTRgHzQvdC4IHzQsNCy0LB80L3RgdGCfNC10LwgfNCw0LLQvXzRi9C80Lh80LXQtNGBfNC00LjQvXzQtNC+0LJ8INCz0L58INCy0Yt80LIg0Lp80YvQtSB80L7QsdC1fNC80YMgfNGPINC1fNGB0LvRg3zRg9C00LB80YLQsNC6fNC60L7QuXzRgtGDIHzQuNGC0YN80LfQsNC6fNGF0L7QtHzQstC+0Lt80YDQsNCxfNC60YLQvnzQuNC60YJ80LjRh9C9fNC90LjRh3zQvtGCIHzQuNC90LB8INC6IHzRgtC10YB80YDQvtC0fNC90LDRgCcsXG4gICAgdWtyOiAn0L3QsCB8INC/0YB80L/RgNCwfCDRliB80YDQsNCyfCDQvdCwfCDQv9C+fNC90Y8gfNC90L3Rj3wg0LfQsHzQvtCz0L580YLQuCB80LLQviB80LPQviB8INC60L580LDQstC+fCDQvNCwfNC70Y7QtHzQviDQvXwg0L3QtXwg0LvRjnzRjtC00Lh80L7QttC9fNC60L7QtnzQu9GM0L180LbQvdCwfNC00LjQvXzQsNGC0Lh80LDRlCB80LjRhSB80LjQvdCwfNC/0L7QsnzRgdCy0L58INGB0LJ80LDQvdC9fNGUINC/fNC80LDRlHzQsNCx0L580LAg0Lt8INCx0YN80L3QtSB80LXQvdC9fNCx0L4gfCDQsNCxfNCwINC8fNC+0LLQuHzQvdGWIHwg0LLQuHwg0L7RgXzQsNGG0ZZ80LLQuNC9fCDRgtCwfNCx0LXQt3zQvtCx0L58INCy0ZZ8INGP0Lp80LXRgNC1fCDQtNC+fNGWINC/fNGD0LLQsHzQviDQv3zQsNC70Yx80L3QuNGFfNC+0LwgfNC80LggfNGW0LvRjHzQvdC+0LN80YLQsCB80LjQuSB80L/RgNC4fNC+0Y4gfNGC0YwgfNGB0YLQsHwg0L7QsXzQstCw0L180LjQvdC9fNGC0ZYgfNC+0YHRgnwg0YMgfNGB0Y8gfNCy0LDRgnzQsdGD0YJ80LjRgdGCfCDQvNC+fNC10LfQv3zRg9GC0Lh80L3QvtCyfNC/0LXRgHzRltGXIHzQuCDQv3zQsdC+0LR80LLQvtCxfNGB0YLQsnwg0LIgfNC+INCyfNCy0ZbQtHwg0LHQtXzQsNC60L580L/RltC0fNGC0LjRgXzQutC+0L180L3QviB80LLQsCB80L3QvdGWfNGWINGBfNCwINC/fNGB0YLRlnwg0YHQv3zQvdC40Ll80LTRgyB80YzQvdC+fNC+0L3QsHwg0ZbQvXzQtNC90L580L3QuNC8fNGW0LkgfNCwINC3fNC90YMgfNC80L7QtnzRl9GXIHwg0ZfRl3zQu9GPIHzRgdC+0LF80LzRgyB80L7RlyB80Y/QutC+fCDQv9C1fCDRgNCwfNGW0LQgfCDQtNC1fNGWINCyfNC4INGWfNGH0LjQvXzQstC90L580L7QvNGDfNC90L7QvHzRgyDQv3zRliDQvXzQsCDRgXwg0YHRg3zQsCDQvnzQvdC10L180LjRgdGPfNC+0LLQvnzQvdCw0L180L7QtNC9fNGDINCyfNGWINC0fNCw0LLQsHzRltC00L180YDRltCyfCDRgNGWfNGWINGAfNC40LzQuHzQstGW0Lt80LjQvCB80YbRltGXfNC+INC0fNCwINCyfNGB0YLRg3zQvtC00YN80LHRg9C0fNC+0LLQsHwg0L/Rlnwg0L3RlnzRjyDQvXzQtSDQv3zQvdCw0YZ80Lgg0YF80L3QvdCwfCDQvtC0fCDRgNC+fNC90L7RgXzRjNC90Lh80Y7RgtGMfNC4INC3fNC60LggfNGWINC3fNCwINCxfNGB0L/RgHzRh9C10L180LbQtSB80L7QttC1fNC1INC8fNC+0LLQvXzRgNC40Lx80LUg0LF80YLQviB80L3RltGFfNC+0YHQvnzRg9C00Yx80LLRliB8INGA0LV8INGB0YJ80YDQsNGGfNC00L4gfCDRgdC+fNGA0L7Qt3zQu9C10L180LLQvdC4fNGW0LLQvXzRgNC+0LR8INCy0YF80YHQv9GWfNC60L7QsnzQt9C/0LV80ZbQsiB80LTQu9GPfCDQtNC7fNGXINC+fNGF0LjRgXzQsNGF0Lh80LfQsNGFfOKAkNGP0Lp80YzigJDRj3zQtNGM4oCQfNGPINGWfNGC0LDQunzQt9C90LB80LfQsNCxfNGB0YLRjHzRgtGDIHzQvdC+0Y580LAg0L180YLQvtGAfNGB0L3QvnzQviDRgXzQttC10L180YbRltCwfNC+0YbRlnzRgdC+0YZ80ZbQvdGIfNGWINC8fNC60LvQsHzQuCDQsnzRgtC10YB8INC00ZZ80ZbRgdGCfNC+0LLRlnzRgyDRgXzRjyDQsnzQsNGA0L580YHRliB80LLRltGCfNGB0LLRlnzQvtGB0LJ80YDQvtCxfNC/0ZbQu3zRgNC10YF80LfQsCB80L/QtdGHfNCw0LHQtXzQutGDIHzQu9C40LJ80LXRgNC2fNC00LXRgHzQsiDRlnzQsNCy0L180YLQsNCyfNCw0LIgfNCw0LzQuHzQutC+0Lx80LLQu9C1fNC+INCxfNGMINC/fCDRidC+fNGX0YUgfNGC0LLQvnzRhdGC0L580ZbRhdGCfNC60L7Qs3wg0LrRgHzQsNC90L580YLQsNC9fNGW0LDQu3zQvdCw0Lt80L3RjCB80YUg0L980LbQvdC+fNC70LXQtnzQsNC70LV80L/RgNC+fNGC0LLQsHzRgNCw0YJ80L4g0L580YUg0LJ80L3QsNGAfNC70YzRgXzRhtGW0Ll80LrQvtGAfNGH0LDRgXzRgNC20LB80Zcg0YF80LjQvdGDfNC00YHRgnzQviDQt3zRgNCw0Ld80LzRltC9fNCwINGAfNC30LDQuicsXG4gICAgYm9zOiAnINC/0YB8INC4IHzRgNCw0LJ80L3QsCB80LzQsCB80L/RgNCwfCDQvdCwfNC40LzQsHwg0YHQsnzQsCDRgXzQtNCwIHzQsCDQv3zQstC+IHzRmNC1IHzQutC+IHzQsNC60L580L4g0Lh8INC/0L580LDQstC+fNC1INGBfNCwINC4fNGC0LggfCDQuNC8fCDQtNCwfCDRgyB80YHQstCwfNC90L4gfCDQt9CwfNC+INC9fNCy0LAgfNC4INC/fNC40LvQuHzQstCw0Lp80LvQuCB8INC60L580L3QtSB8INC40Lt80LrQvtGYfCDQvdC1fCDQtNGAfNC+0YHRgnwg0YHQu3zRmtCwIHzQuNC8IHzQuCDRgXzRgyDRgXzQuCDQuHzQsNCy0LB80LjRmNC1fNCwINGDfCDQsdC4fNGB0YLQsnzRgdC1IHzQstCw0Zp80LAg0LR80L7QvCB80ZjQtdC0fNCx0L7QtHzQvtCx0L580LvQvtCxfNGB0LvQvnwg0YHQtXwg0YDQsHzQuNGFIHzRgdGC0Lh80LAg0L180ZrQtSB8INC+0LF8INGY0LV80L/RgNC4fNC00YDRg3zRgyDQuHzRmNGDIHzQviDQtHzQuNGC0Lh80LLQvtGYfNGA0LDQt3zQsNGa0LV80L7QstCwfNC00ZjQtXwg0L7RgXzQtSDQuHzQu9C+IHzQtSDQv3zQsNGa0LB80YPRmNC1fNC4INC0fNCx0YDQsHzRgtGA0LV8INGC0YB8INGB0YN80YMg0Ld80LAg0Lp80L7QsyB80YMg0L980L7RmNC1fNGG0LjRmHzRgNC10LF80LAg0L580LAg0LF8INGa0LV80Lgg0YN80LzQuNGYfNC90LggfNC90L7RgXzQsdCwIHzQtdC00L180YHQstC+fNGa0LXQs3wg0LjQt3zQv9GA0L580LUg0LR80LbQsNCyfNCx0LjRgnwg0L3QuHzQuCDQvnzRgdGC0LB80LAg0Ld80LDQstC9fNCy0ZjQtXwg0LrQsHzQsdC40Lt80L7QstC+fNCwINGYfNCw0ZjRg3zQuNGB0YJ80Lgg0L180L3QuNGFfNGY0LXQu3zRgtGDIHzRgNC10LR80LPQvtCyfCDQvtC0fNC1INC+fNC+0ZjQuHwg0YHQvHzRmNCwIHzQviDQunzQuNC70L580LDRhtC4fNC1INGDfNC/0YDQtXzQviDQv3zQtdCx0LB80YMg0L580YHRgyB80LLQuNC8fNC40YfQvXwg0YHQsHwg0LTRmHzQsCDRgnzQuNGY0LB80YjRgtC4fNGH0L3QvnzRgNC20LB80LTRgNC2fNGB0YLRg3zQtNC90LB80L7QtNC9fNC10L3QuHzQt9CwIHzQuNCy0LB80L3QvtC8fNC10LwgfNC00YMgfNGA0LDQvXzQstC90L580YHQvNC4fNGY0LXRgHzQtSDQsXzQtSDQvXzQtNC1IHzQv9C+0YF80Lwg0Lh8INC00L580YMg0LR80L3QsNC6fNCwINGAfNC+0LHRgHwg0LzQvnzQvdC40Lx80LXQs9C+fCDQutGAfNGC0LjRgnzQutGA0Lh80LLQtSB80LDQvSB80LjQutC+fNC90LjQunzQvdGDIHzQuCDQvHzQvdC+0LN80LXQvdC+fNGB0L3QvnzQtSDQunzRgtGD0L980YDRg9CzfNC60LAgfNC+0LTQsHzRgNC40LJ80LLQvtGZfNCw0LvQvXzQvCDRgXzQuNGC0YN80LDRiNGCfNC30LDRiHzQsNC90Lh80YHQsNC8fCDRgdGCfNCw0LrQsnzQvtCy0Lh80L7RgdC9fNGA0L7QtHzQsNGA0L58INC80Lh80ZjQuCB80YLQstCwfNC00L3QvnzQvdGB0YJ80LDQuiB80LjRgtC1fNGZ0YMgfNCy0LjRh3zRgNCw0LR80YMg0L180YMg0Lx8INGC0LB80LTRgdGCfNGC0LjQsnzQvdCw0YZ80YDQuNC8fNC60L7QvXzQutGDIHzRmtGDIHzQvtC00YN80LbQuNCyfNCw0LzQvnzRgtCy0L580YLQtdGZfNC/0L7QtHzQtdGb0YN80LMg0L980L3QvtCyfNC40L3QsHzQvdCw0YB8INCy0Zh80Lgg0LF80L7RmCB8INC+0LJ80LDQstC1fNCy0YMgfNCw0L3RgXzQvtGY0LB80LfQvtCyfNCw0LfQvnzRg9C00LV80LHRg9C0fCDQsdGDfNC1INGCfNC4INCyfNC10ZrQsHzQtdC00Lh80L3QuNGGfNC90LDQv3zQvNGY0LV8INC40YF80YHQu9GDfNC10LTRgXzQviDQvnzQt9Cw0Lp80Lgg0Lp80Lwg0L980YLQvdC+fNC40LLQvnzQtdGA0LV80L3QuNGHfNC60LDQunzQsNC00LB80LLQvdC4fNGD0LPQuHwg0YDQvnzQvNC+0LJ80LLQtdC9fNC+INGBfNGC0L4gfNGC0LUgfCDQstGAfCDQsdC1fNCw0YDQsHzQutC70LB8INCx0YB80YMg0LF80YMg0YN80Lgg0YJ80L7QvdCwfCDQvtC9fNCw0LLQuHzRmNCw0Lt80LTQvdC4fCDRgdC6JyxcbiAgICBzcnA6ICcg0L/RgHwg0LggfNGA0LDQsnzQvdCwIHzQv9GA0LB8INC90LB80LzQsCB8INGB0LJ80LjQvNCwfNC00LAgfNCwINC/fNCy0L4gfNC60L4gfNGC0LggfNCw0LLQvnwg0L/QvnzQsCDQuHzQsNC60L580LAg0YF8INC30LB8INGDIHzQviDQuHwg0LjQvHzQuCDQv3zQstCwIHzRgdCy0LB80LLQsNC6fCDQtNCwfNC+INC9fNC1INGBfNC+0YHRgnwg0LrQvnzRmtCwIHzQu9C4IHzQuNC70Lh80L3QtSB80L7QvCB8INC90LV80LAg0L18INGB0Lt8INC40Lt80ZjQtSB8INC00YB80Lgg0YF80L3QviB80LrQvtGYfNGDINGBfNCw0LLQsHwg0YDQsHzQvtCzIHzRgdC70L580ZjRgyB80LjQvCB80YHRgtC4fNCx0L7QtHzQvtCx0L580LvQvtCxfNC40YLQuHzQsCDQvnzRgdGC0LJ80Lgg0YN80LAg0LR80L3QuCB80ZjQtdC0fNGDINC/fNC/0YDQuHzQtdC00L18INCx0Lh80Lgg0Lh80LAg0Lp80L4g0LR80YHRgtCwfNC40YUgfNC00YDRg3zQsCDRg3wg0ZjQtXzQsNGa0LB8INC+0YF8INC90Lh80L3QvtGBfNC/0YDQvnzQsNGY0YN80Lgg0L58INC00LV8INGB0YN80YMg0Lh80YHQtSB80ZrQtSB80ZjQsCB80L7QstCwfNC4INC0fNGG0LjRmHwg0L7QsXzRg9GY0LV80YDQtdC0fNC20LDQsnzQtSDQuHzQtSDQv3zQsCDRmHzQtNC90LB8INGB0LV8INC+0LR80LLQtSB8INC60LB80LXQvdC4fNGA0LbQsHzQtNGA0LZ80LAg0Ld80LDQstC9fNC10ZrQsHzQsNGG0Lh80LLQvtGYfNC+0LLQvnzRgyDRg3zQvCDQuHzQvtGY0LB80LLQsNGafCDQuNC3fNC40ZjQsHzRgyDQt3zQsNGa0LV80YDQsNC9fNC1INC+fNGA0L7QtHzQuCDQvXzQtSDQsXzRgNCw0Ld80LfQsCB8INGa0LV80LPQvtCyfNC40YfQvXwg0YHRgnzQvdC+0LJ80YHQvdC+fNC+0YHQvXzQtNGDIHzQv9GA0LV8INGC0YB80YHRgyB80LLRgyB80L7QtNC9fNCwINCxfNGB0LLQvnzRmtC10LN80L3QuNC8fNC90LjRhXzRgtGDIHzRgtC40YJ80YjRgtC4fNC60YMgfNC90L7QvHzQsdC40YJ80LUg0LR80LzQtSB80LjQutC+fNGH0L3QvnzQvtGY0Lh80LvQviB80LLQvdC+fNC90LjQunzQuNC60LB80LHQtdC3fNCw0YDQsHzQtNC1IHzRgyDQvnzQstC40Lx80L3QsNC6fCDRgdCwfNGA0LjQsnzQsNCy0LV80LDQvSB80LLQvtGZfCDQutGAfNC+INC/fNGB0LzQtXzQtSDQunzQvdC+0LN80ZjQuCB8INC+0LJ80LUg0YN80YLQstCwfNCx0YDQsHzRgNGD0LN80YDQtdCxfNGC0YDQtXzRgyDQtHzQvtC00LB8INC80L58INCy0YB80LDQstGZfNGDINC9fNC10LPQvnzQtNC10Lt80Lwg0YF80LrRgNC4fNC+INC6fNCw0YjRgnzQt9Cw0Yh80ZrRgyB8INGB0Lx80LDQvdC4fCDQu9C4fNC00L3QvnzQtdGS0YN80LDQu9C9fNC70LAgfNCw0LrQsnzQvtGYIHzQutC+0Lx80YHRgtGDfNGD0LPQuHzQsNCy0Lh80LAg0YB80LrQsCB80YDQsNC0fNC+0LTQuHzQstC40Yd80YLQsNCyfNC40YLRg3zRg9C00LV80LHRg9C0fCDQsdGDfNC/0L7RgnzQvtC00YN80LbQuNCyfNC10YDQtXzRgtCy0L580LjQu9C+fNCx0LjQu3zQsNGA0L580LUg0L180L7QstC4fNC/0L7RgHzQtdC90L580YjRgtCyfNC90LDRhnzQvtCy0LV80Lwg0L980YLRg9C/fNC/0L7RgXzRgNC10Lx80LTQvdC4fNCx0LAgfNC90YHRgnzQsCDRgnzQvtGY0YN80LDRgdGCfNC40LLQsHzQtSDQvHzQstGA0LV80LLRmdCwfNC90YMgfNCx0LXRknzQuNGB0YJ80LXQvSB80YLQtSB80LTRgdGCfNGA0L7RgnzQt9Cw0Lp80LDQviB80LrQsNC+fNC4INC6fNGY0YPRm3zQviDRgXzRgdGCIHzRgdCw0Lx80Lwg0L180YLQtdGAfNC90LDRgHwg0LzQtXzQuCDQvHzQutC+0Lt80LUg0YB80YPRiNGCfNGA0YPRiHzQstC10YB80LrQsNC6fCDQsdC1fNC4INCxfNC60LvQsHzQsNC00LB80LXQsdCwfNC10L3QsHzQvtC90LB8INC+0L180YLQstGDfNCw0L3RgXwg0LTQvnzRgNCw0Lp80YHQu9GDfNC4INCyfNC90LjRhnzRgyDQunzQvNC10L180LLRgNGIfNC10LzQtXzQtdC00YF80LjQstC4fNC+INC+fNGY0LDQsicsXG4gICAgdXpuOiAn0LDQvSB80LvQsNGAfNCz0LAgfNC40YAgfCDQsdC4fNCw0YAgfCDQstCwfNC00LAgfNC40LPQsHwg0rPRg3zQstCwIHzQsdC40YB80YPSm9GDfNKb0YPSm3zSs9GD0pt8INKz0LB80YAg0LF80LPQsNC9fNC40YggfNC40LTQsHwg0YLQsHzQsCDRjXzQuNC90Lh80LDQtNC4fNC90LMgfNC00LjRgHzQuNGI0Lh80LvQuNC6fNC70LjRiHzQuNC5IHzQuNC70Lh80LDRgNC4fNGD0pvQuHzSs9Cw0YB80LvQsNC9fNC40L3Qs3zRiNC4IHzQtNCw0L180L3QuNC9fNC40L3RgXzQutC40L180YHQvtC9fNC90YHQvnwg0LjQvXwg0LzRg3zSm9C40LN8INC80LB80L7QvSB80YAg0Lh8INCx0Z580Y3Qs9CwfCDRjdCzfCDRntC3fNC90LggfNCx0Z7Qu3zQs9Cw0LR80Lgg0LF80LrQuCB80LjQu9CwfNGR0LrQuHwg0ZHQunzQsCDQsXzQvSDQsXzQuNC9IHzRgCDSs3zQsNC70LB80Y3RgNC6fCDRjdGAfNC70LPQsHwg0pvQsHzRgNC60Lh80Ygg0rN80Lgg0rN80L0g0Lx8INCx0L58INCx0LB80LjQuiB80LDRgNCwfNC40LPQuHzQu9C40LN80YDQuCB80pvQuNC7fNCwINGCfNCx0LjQu3wg0Y3RgnzQvdC40Yh80L3Qu9C4fNC60LvQsHzQuCDQsnzQsdC+0Yh80Y3RgtC4fNCw0L3QuHzQuNC8IHzQuCDQvHzQvtC70Lh80pvQu9CwfNCwINKzfNC70LDRiHzQsNGC0Lt80YLQuNC7fNCwINKbfCDQvtC7fNC+0YHQuHzQvNCw0YF80pvQsNGAfNC40L3Qu3zQu9Cw0YJ8INKb0Lh80YLQsNGKfNKz0LDQvHzQs9C4IHzQuNCxIHzQvNC70LB80Z7QtyB80L0g0Y180LzRg9C8fCDQtNCwfCDQsdGDfNCw0YIgfNGIINCyfNGD0L0gfNCw0YLQuHzQvNC60Lh80YPQvNC6fNGC0LvQsHzQuNGA0L580Z7Qu9C4fNCx0LDRgHzQuNGA0Lh80YDQuNGIfNC40Y/RgnzQsNC70Lh8INCx0LV8INKb0L580LAg0Yh80LDRgNC+fCDQutC1fNC4INGCfNGA0LvQsHwg0YLQtXzRh9CwIHzRgNGH0LB80LDRgNGHfNCwINGefCDRiNGDfNGC0LjRiHzQvSDSs3zRgtCz0LB8INGB0LB80LDRgdC4fCDRhdCwfNGA0LDQunzQu9C40L180L7Qu9CwfNC40LzQvnzRiNKb0LB80LvQuCB8INGC0YN80LDQvNC7fNC70LvQsHzRgdC40LR80L0g0Z58INCw0YF80L3QuNC0fNCwINC4fCDQutC4fNC9INGCfNC90LTQsHzQuiDQsXzQtdGA0LB80L7RiNKbfNGB0LjQt3zQvtGAIHzQsCDQvHzRgCDQsnzQtdC90LN80YLQtdC9fNC80LDRgnzQvNC00LB80LDQvNC0fNC70LjQvHzQuSDRgnzRj9GCIHzQuCDQsHzQuNC90L580LjQu9CzfCDRgtC+fNGC0L3QuHzQsNC90LB80LDRgSB80Y3QvNCwfCDRjdC8fNCwINGRfCDRiNCwfNCw0YggfNCwINCwfNGC0LDRgHzQutCw0YJ80LDQutCwfNCw0LogfCDQtNC1fNCw0LfQsHzQuNC70Lt80YHQuNC5fCDRgdC4fCDRgdC+fNGD0pvQu3zQvSDSm3zQvtC00LB80YrQu9C4fNCw0YrQu3zQvdC40Lp80LDQtNCwfCDQvdC4fNGC0LTQsHzQs9C40L180YPQvdC4fNGB0LjRgnzQsNC5IHzSm9C+0L180L0g0L58INC20LB80LrQuNC8fNC10YcgfNKz0LXRh3wg0rPQtXzRntC30Lh80LvQsNC6fNC60LXRgHzQuNC60Lt80LvQu9C4fNGD0YAgfNC30LDRgHzRiNC70LB80YDQuNCzfNC40YDQu3zQtNCw0Lx80LrQvtKzfNC40LrQvnzQsCDQtHzQsNC8IHzQvSDQsnzRgNGC0Lh80YLQuNCxfNGC0LDQu3wg0LjRiHzRh9GD0L180YPRh9GDfCDRg9GHfNGB0LvQsHzQsCDRg3zRgNC40L180YHQvtGBfNCw0YHQvnwg0YPQvXzQvdCwIHwg0LrQsHzQvNGD0rN80LTQuNCzfNGHINC6fNCw0YHQu3zQu9C80LB80YDQsCB80LHRgyB80YXQsNC7fNGe0LvQs3zQuCDQunzQtdC60Lt80YAg0LR80pvQsNGCfNCw0LPQsHzQuCDSm3zQvtC40Ll80LzQuNC7fCDQvNC4fNKb0LAgfNC4INGBfNC20LjQvXwg0LbQuHzRgdC40L180YDQvtGAfNCwINCyfNC70LDQtHzQsCDQvnzRgtC70Lh80LzQuNGPfNC9INC4fNCw0LEgfNGC0LjRgHzQtyDQvHzQtNCw0LJ80YDQs9CwfNCw0LPQuHzQsCDQunzQvdC70LB80LDSm9GCfNCy0LDSm3zQsNGA0YJ80LDRkdGCfNC70LDQsScsXG4gICAgYXpqOiAnINCy05l80LLTmSB805nRgCB80LjRgCB8INK705l8INCx0Lh8INK70q98INC+0Lt80q/Qs9GDfNK70q/Qs3zQs9GD0LN80L3QsCB80LjQvSB80LvQsNGAfNK705nRgHzQtNOZIHwg0YjTmXzQsdC40YB80LvTmdGAfNC70LjQunzQvNCw0Lt80YAg0LF80LvQvNCwfNGAINK7fCDRgtOZfNOZ0YXRgXzRiNOZ0YV805nQvSB80LTQuNGAfNGD0LPRg3zRg9C90LB80LDQvSB80LDQu9C4fNCwINC8fCDQvNCwfNC40LrQtHzQuNC90Lh80YAg0Yh80LTTmdC9fNCw0YAgfNC40LvTmXzQs9GD0L180LDQsyB80LDRgdGLfCDRmNCwfNC805nQunzRmNOZ0YJ8INC805l8INC80q980LrQtNC4fNOZ0YHQuHzTmdC6IHzQuNC70Lx80L3QuNC9fNC90LTTmXzQvtC70Lx805nRgtC4fNOZINGYfNGB0LjQvXzRhdGBIHzQvdC00LB80LvQvNOZfNGY0ZjTmXzQuCDQsnwg0LPQsHwg0LDQt3zQvtC70YN80LjRmNGYfNGY0LAgfNC40L3QtHzQt9Cw0LR80LPQu9CwfNKv0L0gfNC90LggfNC705kgfNGC0LjQvXzQvSDQvHzQsNC30LB80LDRgNGLfNOZ0YIgfNC9INGCfNC80LDQs3zQu9GD0L180LvRi9CzfNOZINCxfNGD0L0gfNC90YPQvXzQsyDQsnzQvSDSu3zQtNCw0L180YvQvSB8INC10YJ80YLQvNOZfNOZ0YDTmXwg06nQt3zQtNCwIHzTmSDQsnwg0L7QvXzTmSDQsHzRi9C90LB80YvQvdGLfNCx0LjQu3zQsCDQsXzRgdGLIHzQuNC7IHzTmdC80Lh80LDRgNCwfNGB0LggfCDQtNC4fNOZINC8fNOZ0YDQuHzRgNC705l8INCy0LB805kg0rt80LXRgtC8fNGL0pPRi3zQsNC80LB80LTQu9GLfNCw0LTQu3zRgNC40L180LHTmdGAfNGA0YvQvXzQvSDQuHzQvNKv0LR80L3Ri9C9fCDSu9C1fNC80LDRgXzQuNC6IHzQvSDQsHzQtNC40Lt80LDQu9GLfNC40YDQu3zTmdC705l80q/QtNCwfNGB0YvQvXzRi9C90LR80YXRgdC4fNC70LggfNOZINC0fNC905kgfCDQsdOZfNOZ0ZjQsHwg0LjQvXzTmSDQuHzQu9OZ0YJ8INGB05l80L3RiyB8INC40Yh80LDQvdGLfNC10YcgfNK70LXRh3zQsyDSu3zQtdGY0L1805kg0LV80LTRi9GAfCDQtNCwfNCw0YHQuHzRgNGLIHzQuNGIIHzQuNGE0LB80LvRi9KTfNC4INGBfNGE0LjTmXzQsNGE0Lh80LTQsNGEfCDQtdC0fNC805nQt3zRgyDQsnzQutC40Lt8INK70LB80L7Qu9CwfNC9INCyfNOZ0L3QuHzRi9GAIHzRg9CzIHzRg9C90Lx8INCx0YN8INCw0YF80YHQuNCwfNC+0YHQuHzRgdC+0YF80LjQu9C4fNGL0LTRi3zQu9GL0LR80L3QvNCwfNGL0LMgfNC40L3TmXzTmdGA0LB80YHQuNC7fNGF0LjQu3zQsNGF0Lh80LTQsNGFfNCw0LTTmXzQvNCw0L180LAg0rt805kg0L580L7QvdGDfNCwINCzfNOZ0LcgfCDQutC4fNGB0LXRh3wg0YHQtXzRiyDSu3zQvNC40L180LvQsNC9fNOZ0LTTmXzQsdGDIHzRgNCw0LN80LvRiyB80YvQu9GLfNCw0LsgfNOZINCzfNGAINCyfNC90LvQsHzSu9GB0Lh805nSu9GBfNGC05nSu3zTqdC3IHzQuNGB0YJ8INC40YF80LzTmdGBfCDTmdGBfNC40L3QsHzTmSDRgnzTmdGC0Lt80LAg0LJ80LjTmSB80L0g0LF80YLTmdGAfCDRgtCwfCDSudOZfNC10LTQuHzQsNC70LB80LrQuNC8fNCz0YMgfNC4INGCfNGD0LvQvHzQvNOZ0rt80L0g0L580LDRmNCwfNGLINC+fNC40LDQu3wg0YHQvnzQuNC70Lt80YHQuNGYfCDQtNOZfNCy0LDRgHzQuNC90YF80LzQuCB80pPRiyB80L3QuNC6fNGAINC4fNCw0LPQu3zQuiDSu3zRgtOZ0Lx80YLQsNC8fNGH0q/QvXzSr9GH0q98INKv0Yd80pPRi9C9fNGB0LDRgXzTmdGB0LB80Lcg0rt805nQvNOZfNC30LDQvHwg0LfQsHzRgdGC0Lh80YDTmdGEfNC9INC1fNGAINCwfNC40LvQtHzSu9OZ0Lx80YvQs9C7fNGY0LDQvXzQvNCw0Zh80L0g05l80LzTmdC9fNC80LjQu3wg0LzQuHzTmdCz0Lh80LTQuNC9fNC9INC0fNGC0q/QvXwg0LTTqXzQvNC40Zh80LrQsNK7fNC40LrQsHwg0L3QuHzRhNCw0LR80YLQuNGEfNC7INC+fNGB05nRgHzRmNC90Lh8INC10Zh80LDQvdCwfNC705nQvXzQsNC8IHzRgNC40Lt80LDRmNOZfNCw0YjRiycsXG4gICAga29pOiAn0L3RiyB806fQvSB8INCx0Yt80LTQsCB8INC/0YB80LvTp9C9fNGA0LDQsnwg0LzQvnzQv9GA0LB8INC00LB80LHRi9C0fCDQstC1fNC+0YDRgnzQu9OnIHzTp9C5IHzQvNC+0YB806fQvCB80LDQstC+fCDQvdC1fNCy0L4gfNGL0LQgfNGL0YEgfNC906fQuXzRi9C9IHzQvCDQv3zQtCDQvHzRi9C90Yt80YLQvdGLfCDQsNGBfNGC06fQvHzQu9GM0L18INGN0Lx80LLQtdGAfNGB0YwgfNGM0L3Tp3zRjdC8IHzQvSDRjXzRgtC706d8INC60Yt80YHTpyB8INC/0L580LXRgNC8fNGB0YzTp3zRgNGC0Lt80LDQu9GMfCDQutOnfNGN0LcgfCDTp9GCfNOnINCyfNGC0L4gfNC10YLQvnzQvdC10YJ80YvQu9OnfCDQutC+fNGC0YjTp3wg0L7Rgnwg0LggfNGLINGBfNCx0YsgfNOnINCxfNGB0YLQsnzQutOn0YB8INCy06d80YjTp9C8fNC60YvRgnzRgtCwIHzQvdCwIHzQtyDQsnwg0YHQtXwg0LTQvnzQstC+0Lt806fRgSB8INGB0Yt80Ysg0LB80L7Qu9CwfNGA0LzTp3zQsNGBIHzQvtC3IHwg0L7Qt3wg0YHRlnzQsCDRgXzRgtCy0L580YEg0L58INCy0Yt80LvRltGBfNOnINC6fNGL0YLRiHzTpyDQtHzQuNGBIHzRltGB0Yx806fRgtC9fNCw0YHRjHwg0L7Qu3wg0L3QsHzQsNGG0Lh8INGN0YJ80LAg0LJ80LfQu9OnfNGB0LXRgnwg0LLQvnwg0YfRg3zQu9Cw0YF80LvQsNC9fNC806cgfNGC0YvRgXzRgNGC0Yt806fRgNGCfNGLINC/fNOn0YLQu3zQviDRgXzRjdGC0LB80LTQtyB80LrTp9GCfNOn0LTQvXzQstC90Yt8INC80Yt80L0g0L180YPQtNC2fCDRg9C0fNCy0YvQu3zTpyDQvHzRgNGC0ZZ80L7RgNC5fNC40YHRjHwg0YHQvnzQstC+0Y180YvQtNOnfNC5INC+fNC60L7Qu3wg0LPQvnzRgSDRgXzRgdGB0Lh80YHRi9C7fNGL0YHQu3zQudGL0L180LrQuNC9fNC+0LvTp3zRgtOn0L18INGB0Yx80LDQvdCwfNOn0YAgfNGG0LjRj3zQsCDQtHzTp9C806d8INCy0Lh80Lcg0Lp8INGN0Ld80Ysg0LF80YLTp9CzfNOn0YIgfNC806fQtHzQtdGB0YJ80L7RgdGCfNOn0L3Ri3zRgtC40YB80L7RgtC4fNGD0LrTp3zRh9GD0Lp80L0g0L980L7QvdC0fNC/0L7QvXzRgdC706d80LrQtdGAfCDQutC1fCDQvtCxfNGB0LjRgXzRgdGD0LR80LAg0L180LTQvtGAfNC60L7QvXzQvdC10Lp80L0g0LF80LvTp9GCfNGBINCyfNGC0ZYgfNGM06fRgHzRgtGA0LB8INGB0YJ80L3QsNC7fNC+0L3QsHzQvdCw0YZ80L0g0Lp80LrTp9C0fNOn0LMgfNGB0LrTp3zRgtGMIHzQtdGC06d80LTTp9GBfNCx0YvRgnzRgNC90Yt806cg0L180YLRgdOnfNGA0YDQtXzQsCDQsXzQvdC00LB80YEg0LR80LDRgdGBfNGLINC6fNCw0YHQu3wg0LvQvnzRjNC90Yt80YHRjNC9fNGLINC8fNC10LrQuHzRiyDQtHwg0LzTp3zRjCDQvHzRiyDQvXzRi9GC06d8INC80LV80YDQudOnfNC40LDQu3zQuSDQtHzQuNGC06d80LAg0Lp806fRgdGMfNC806fRgXzQvtCy0L180LfRi9C9fNCwINC/fNC+0YLRgXwg0LvQuHzQvtC70Y9806cg0LB80L7RgdGDfNOn0Y8gfNC906fRj3zQtdC30Lt80YDQtdC3fNC80LXQtHzRgSDQvHwg0YHRjXzRjCDQunzRgNC50Yt80LDQutC+fNC30LDQunwg0LfQsHzRjNGL0L180L3QvdGRfNC806fQu3zRg9C806d8INGD0Lx80Ysg0YN80L0g0LJ80Lwg0LR80L0g0YF8INC00Ld80L0g0L580YDQsNC9fNGB0YLRgHzQvtC30Yx80L/QvtC3fNC3INC/fNC+INC0fNGG0LjQsHzQvtGG0Lh80YHQvtGGfNC40L7QvXzQsCDQvHzQtdGB0Lp80YfQtdGBfNC906cgfNC3INC0fNGC0YHRjHzQsdOn0YB8INCx06d8INC+0LJ80LLQtdGBfNC60YvQtHzTpyDRgXzQstC+0Yt80LrQvtC0fNGC0LrQvnzTp9GC0Lp80L7Qu9GMfNC00LHRi3zQtdC00LF80YHRjNGLfNGH0YvQvXzRgtGH0Yt806fRgtGHfNGC0LvQsHzQvNOn0L180YHQu9CwfNC506fQt3wg0LnTp3zRgiDQsnzRiyDQuHzQtdC3IHzQviDQsnzQvtC90Yt80LnTpyB80LDQvdC9fNOn0LvRjHwg0L/Ri3zQsNC9IHzQvdOn0YF80L3QuNGCfCDRgdGDfNC8INGBJyxcbiAgICBiZWw6ICcg0L/RgHzQv9GA0LB8INGWIHzQsNCy0LB80L3QsCB80YDQsNCyfCDQvdCwfCDQv9CwfNC90YsgfNCy0LAgfNCw0LHQvnzRhtGMIHwg0LDQsXzQsNC1IHwg0LzQsHzQsNCy0LV80LDQvdC9fNCw0YbRi3zRgdCy0LB8INGB0LJ80LUg0L980LvRjNC9fCDRh9CwfNC90LUgfNC90L3Rj3zQsNC70LB80LAg0L180LDQuSB80LvQsNCyfNGH0LDQu3wg0LrQvnwg0LDQtHwg0L3QtXzQs9CwIHzQvtC20L180LrQvtC2fNCy0LXQunzQvdGPIHwg0Y/QunzQttC90Yt80Ysg0Yd80LzQsNC1fNCwINC/fNCw0LPQsHzQsdC+IHzQtdC6IHzQsCDQsHzRhtCwIHzRhtGG0LB8INGeIHwg0LfQsHzRi9GFIHzQv9Cw0LJ80LAg0YF80LPQviB80LLRltC9fNC00L3QsHzQsdC+0LR80LzRliB80LLQsNCxfNCy0LDQvXzQsNC8IHwg0LLRi3wg0YHQsHwg0LTQsHzRgdGC0LB80LDQstGWfNC90L3QtXzQsNGB0YZ80L3QsNC5fNGG0YvRj3zQvdCw0LN80LDRgNCwfNGWINC9fNC6INC8fNGP0LPQvnwg0Y/Qs3zRjNC90LB80L/RgNGLfNCw0YbRjHzRliDQv3zQvtC00L180YHRgtCyfNCw0LzQsHzQvdGL0YV8INCx0Yt80YLQstCwfNC00LfQtXzQsNC70Yx8INGA0LB80L3RliB80ZYg0YF80ZYg0LB80YvRhtGMfNCwINCxfNC10L3QvXzQu9C10L180YbRliB80L7RntC9fNGL0LwgfNGA0LDRhnzRltC90L180ZbRhSB8INCw0YF8INGC0LB80YLQviB80L3QsNGBfNGP0LrRlnwg0LTQt3zRh9GL0L180L7Qu9GMfNGWINC0fNCw0LLQvnzQsNC0IHwg0L3RlnzRgdGG0ZZ80YvQvNGWfNC90YvQvHzQsdGL0YZ80Y8g0L980YzQvdGLfNGL0Y8gfNCw0YDQvnzQsNC90LB80ZbQvdCwfNGWINGWfNGA0LDQtHwg0LPRgHzQu9GPIHzRntC70LV80L4g0L980LAg0Z580YDRi9C8fNC/0LDQtHzRi9GWIHwg0ZbQvXzQsNC80ZZ80LTQt9GPfNGA0LDQvHzRhtGL0ZZ80LDQsdCwfNCwINGWfNC00YMgfNC20L3QsHzRntC90LB80L3QsNC7fNC90LDRhnzRgNGLIHzRjdGC0LB80LPRjdGCfCDQs9GNfNC90LXQvXzQtNCwIHzQsNGFIHzQs9GA0LB80LrQsNGGfNGD0LrQsHzQsCDQt3zQutGWIHzQsNC00YF80Z4g0ZZ80L3RgdGCfNGN0L3QvXzRjyDQsHzQvdC90ZZ80L7QtNGDfNCwINGAfNC90L3QsHzRhdC+0LR80L3QsNC9fNC/0LXRgHzRhSDQv3wg0YMgfNCw0LTQt3zRliDRgHzQvNCw0LR80Lwg0L980LUg0Lx80LDQtNGDfNC00YHRgnzQtNC70Y98INC00Lt80L7RniB80L3QsNC1fNGWINC8fNCw0LrQvnwg0LrQsHzRiyDRnnzQsdCw0YB80LUg0LB80LDRhtGGfNGD0Y4gfNGL0YbRhnzRgdCw0Lx80Y/RntC7fNCw0LvQtXzRgNC+0LR80YDQsNCxfCDQv9C1fNGI0YLQvnwg0Z7RgXzQsNC00L18INGB0YN80YDQvtGefCDRgNC+fNC00YPQunzQu9GO0LF80Ywg0YF8INGI0Lt80YDQsNC3fNC90LDQsnzQt9C90LB80LLQvtC7fNGD0LTQt3zQsNC00LB80LbRi9GGfNGH0L3QsHzQstC1IHzQsCDRgnzQsNGB0L180YHQsNGGfNC10YDQsHwg0YDRjXzRj9C60L580LrQu9CwfNCw0L3Ri3wg0YjRgnzRjCDRg3zQsNGO0YZ80L3QsNGAfCDRg9GBfNGB0L7QsXzQsNGB0L580L/QsNC8fNGPINGefNCw0LLRj3zRh9GN0L180LLQvtGefNGC0LDQunzQvdGDIHzRjiDQsHzRjCDQv3zQt9Cw0Lp80LrQsNGAfNC1INGWfNGMINCwfNCx0LXRgXzRltGPIHzQutGW0Y980YUg0ZZ80LfQsNCxfNCw0YHQsHzRltC8IHzQttCw0LJ80ZYg0Ld80LvQtdC2fNGC0LDQvXzQsNGF0L580Y/Qu9GMfNGL0Y/Qu3zQviDRgXzRj9C90LB80LrQsNC9fNCw0LrQsHzRltC90Yh80LDQu9GWfNCy0YsgfCDQvNC+fNC90LDRhXzRjyDRj3zQvCDQvXzQvtCz0LB8INCx0LV80Lkg0LR80L4g0LB8INGB0YJ80LXQvdGLfNGWINGefNCwINC0fNC10YHQv3zRiNC70Y580YbRhtGPfNGLINGWfNGL0YHRgnzRgNGL0YF80LvRjtGHfNC60LvRjnzRgtCw0YZ80YPQu9GMfNGL0L3RgXzQsNGH0Yt80YHQv9GAfCDRgdC/fNCw0Z4gfNGL0LzQsHzQsNGA0Yt80LrQsNC8fNC1INGefNGWINC6fNC60L7QvScsXG4gICAgYnVsOiAnINC90LB80L3QsCB8INC/0YB80YLQviB8INC4IHzRgNCw0LJ80LTQsCB8INC00LB80L/RgNCwfNGB0YLQsnzQstCwIHzQsCDRgXzQsCDQv3zQstC+IHzQvdC+IHzQuNGC0LV80YLQsCB80L4g0Lh80LXQvdC4fCDQt9CwfNC90LUgfCDQvdC1fNCwINC9fCDQstGBfNCy0LDQvXzQsNCy0L580L7RgtC+fNC1INC9fNC+INC9fNCwINC4fNC60LggfNC40LUgfNGC0LUgfNC90LggfNC40LzQsHwg0LjQvHzQu9C4IHzQuNC70Lh80LjRjyB8INC/0L580L7QstC1fNCw0L3QtXzRh9C+0LJ80LzQsCB8INGH0L580Lgg0Yd80LAg0LR80L3QuNC1fNC4INC0fNC10YHRgnwg0LjQu3zQsNC90Lh80LLQtdC6fNCy0YHQtXwg0L7QsXzQtdC6IHzQtdC60Lh80YHQtdC6fNCw0LLQsHzRgtCy0L580YHQstC+fCDRgdCyfNCy0L7RgnzQsCDQsnzQuCDRgXzQvtGB0YJ8INGA0LB80L7QstCwfNCwINC+fNC1INC4fNCy0LDRgnzQuCDQvXzQtSDQv3zQuiDQuHzQsCDQsXwg0LIgfNC4INC/fNC70L3QvnzQviDQtHwg0YHQtXzRgNCw0Ld80LXRgtC+fNGK0LTQtXzQsdGK0LR8INCx0Yp80L/RgNC4fNCw0YLQsHwg0LrQvnwg0YLRgHwg0L7RgXwg0YHRinzQsdC+0LR80L7QsdC+fNCy0L7QsXzQsNGCIHzQt9CwIHzRgtC10Lt8INC1IHzQsNGG0Lh80L4g0YF80LTQtSB80L4g0L980LXQvSB80LHRgNCwfNC4INCyfCDQvtGCfNGB0LUgfNC90LjRj3zQsNC70L18INC00LV80LXQs9C+fNC90LXQs3wg0LjQt3zQvtGCIHzRgNCw0L180Y/RgtCwfNC60LDQunzQvtC00Lh80LUg0YF80Lgg0Lh80LTQtdC9fNC/0YDQtXzQsdCy0LB80Y/QsdCyfNGA0Y/QsXzRgtGA0Y980L3QuNGCfCDQutCwfNGP0LLQsHzQv9GA0L580YHRgiB80LAg0Ld80LPQvtCyfNCy0LXQvXzRgtCy0LV80L4g0L580LAg0YB80LDQutCyfNC+INCyfNC4INC3fNGA0LXQtHzQvdC+0YF80LjRj9GCfNC1INC0fNGJ0LXRgXzQvdC+0LJ8INC90Lh80YbQuNGPfCDQtNC+fNC50YHRgnzQviDRgnzQtSDRgnzRgNC20LB80YrRgNC2fNC00YrRgHzQtdC90L580L/QvtC7fCDRgSB80L7QsdGAfNGC0LLQsHzQvdC+0YJ80YDQtdGBfNC10LnRgXzQuCDQvnzQtSDQsnzQutC+0Ll80L7QsdGJfNC70LXQvXzQvtC90LB80L3QsNGGfNC40YfQtXzQtdC3IHzQsdC10Ld8INCx0LV80LXQttC0fNGD0LLQsHzQstC40YJ80YDQuCB80LfQsNC6fNC4INC6fCDQu9C4fNCwINC1fNC/0L7QtHzQtdC70Lh80L3QuNC6fNGB0LggfNC1INC+fNCwINGCfNCw0LLQvXzQuCDRgHzRgiDRgXzQutCwIHzQvtC10YJ80LXQu9C9fNC90LXQvXzQvtC5IHzQs9GA0LB80LbQtdC9fNC00YDRg3wg0YDQtXzQsCDQunzRgdC90L580L7RgdC9fNC70LjRh3zQt9C4IHwg0YLQsHzRgdCwIHzQvdGB0YJ80LLQvdC4fNGH0LrQuHzQuNGH0Lp80YHQuNGHfNCy0YHQuHzQu9GO0Yd80LrQu9GOfNC00L3Qvnwg0LzQvnzQtdC80LV80LAg0YN80LjQt9CyfNGC0LLQuHzQtNC10Ll80Y8g0L180LrRgNC4fNCw0YLQvnzQviDRgHzQuSDQvXzQuNC60L580LjRh9C9fNC20LDQsnwg0LTRinwg0YLQvnzQsdGJ0LV80LjQsNC7fCDRgdC+fNC70LjRgnzRgiDQvXwg0YHQuHzRgiDQuHzQvtC00L180LbQtNCwfNC30L7QsnzQsNC30L580YPRh9CwfCDQs9GAfNC60L7QtXzRgtGK0L980YHRgtGKfNCy0L7Qu3zQu9C90Lh80YHRgNC1fCDRgdGAfNC60LLQsHzQutC+0L180YLQvdC+fNCw0LrQsHzQuCDRg3zQutC+IHzQs9Cw0L180L7QtNCwfNGH0LXQvXzQu9GB0YJ80LXQu9GBfNGB0YLRgHwg0LrRinzRgdGC0LB80YDQvtC0fNC90LDRgHzQuCDQvHzQvdCw0Lt80YDRg9CzfCDQtNGAfNGH0LXRgXzQstGK0Ld80LTQuCB8INGB0LB8INGC0LV80YHRgtC+fNC00L7RgXzRgNCw0LZ80YDQtdC3fNGH0YDQtXzQs9Cw0YJ80LXQvtCxfNCwINC8fNC+INC1fNC40L3QtXzQsNGB0YJ80L7QstC+fNGH0L3QvnzQsNCy0LV80LzRgyB8INC80YN80LDQvdC+fNC40YLQsHzQuNC80Lh80LDQutC+fNC90LDQunzQu9Cw0LN80L7QstC4JyxcbiAgICBrYXo6ICfQvdC1IHwg0pvSsXzQtdC9IHzSsdKb0Yt8INCx0LB8INKb0LB80pvSsdKbfNGL0psgfNKT0LAgfCDQttOZfNOZ0L3QtXzQttOZ0L18INC90LV8INCx0L580LTQtSB80LTQsNC8fNCw0LTQsHzQsCDSm3zRgtCw0YB80YvQvdCwfCDQsNC0fNGL0LvRi3wg05nRgHzRi9KjIHzQsNC9IHzRltC9IHzSm9GL0Lt80LDRgCB80LXQvNC1fNC90LAgfNGAINCwfNC70YvSm3zRg9KT0LB80LDQu9CwfNGL0pvRgnwg06nQt3zQvNC10YF805nRgCB8INC20LB80LzQtdC9fNGL0pPRi3zQu9GLIHwg0LTQtXzSm9GC0LB80L3Ri9KjfNC9INKbfNKT0LDQvXzRltC90LV80LHQsNGBfNCw0YDRi3wg0LzQtXwg0pvQvnzQtdC60LV80YvQvSB80LTQsCB80LUg0pt80LTRiyB80LDRgdGLfNGB0LUgfNC10YHQtXzQsNC8IHzQsdC+0Lt80LDQvdC0fNC90LXQvHwg0LHRlnzQsNGA0LB80Ysg0LF80YHRgtCwfNGC0LDQvXzQvdC00Yt80L0g0LF80ZbSoyB80LUg0LF80ZbQu9GWfNGC0LjRlnwg0YLQuHzQsdCw0YB80pPRiyB80L3QtNC1fNC10YLRgnzQuNGW0YF80pvRi9KTfNGW0YEgfNC70LDRgHzQs9C1IHzRiyDRgnzRltC90LR80ZbQuiB80LHRltGAfCDQsdC1fCDQutC1fNCw0LvRg3zQtSDQsHzQsNC70Yt80LvRg9GLfNCwINC2fNC10YDRlnzQvtC70Yt8INGC0LV80pvRi9KbfNC9INC6fCDRgtCwfNC9INC2fNKT0YvQvXzRgtGC0ZZ80ZbQvdGWfNGC0YvQvXwg0LXRgHzQvdC00LB80ZbQvCB8INGB0LB80LUg0LZ80LDRgtGLfCDQsNGAfNGA0pPQsHzQtdGC0ZZ80LDQvdCwfNGLINOZfNGD0YvQvXzQu9KT0LB806nQt9GWfNC+0YHRgnzQtdCz0ZZ80YLRltC6fNKb0LAgfNGB0pvQsHzRgNGL0L180LrRltC9fNC70YPSk3zSoyDSm3zQvdGW0qN80YPRiyB80LHQvtGBfNCw0YHSm3zSm9Cw0YB80LTRi9KbfNC90LDQvXzQvNGL0YF80LzQvdGLfNCw0LzQvXzRiyDQvHzQsNC50LR80LrQtSB8INC20LV80LfRltC9fNGA0LTQtXzRgNGW0L180LUg0YJ80LPQtdC9fNGL0L8gfNGA0YsgfNGC0ZYgfNGB0YvQvXzSm9Cw0Lx80LTQtdC9fNGWINCxfNCz0ZbQt3zRgNCw0Lt80LUg06l80LvQsNC9fNGB0YsgfNCw0LzQsHzRgtGC0LB80YLRi9KbfNCx0LXRgHzQtNGWIHzQsdGW0Lt80YDQutGWfNOp0LcgfNC30LTQtXzQutC10YJ80pvQvtGAfNC00LDQuXzRg9Cz0LV80Ysg0LV80YvQvdC0fNC90LXQs3zQvtC90Yt80LXQuSB80LzQtdGCfNCw0L3Ri3zQsCDRgnzQttCw0YF80LDRg9GLfNC70LPQtXzQsNGB0LB80LXQs9C1fNC00LDRgHzRgNGDIHzQsNGDIHzQtdGA0Lp80Ysg0LZ80YDRi9C7fCDRgtC+fNC9INC9fNC1INC9fNGC0ZbQvXzRltGAIHzRgdGW0Ld80YLQtdGAfNC70LzQsHzRliDRgnzQutGW0Lx8INCw0Lt80YAg0Lx80LvRltC6fCDQvNKvfNC1INC8fNGC0q/RgHwg0YLSr3zQutC10Lt80LvRi9C/fNC10qMgfNGC0LXSo3zRgNC70Yt80LvRltC8fNGA0LTRi3zQsNGA0LR80LDRgtGCfNGBINCxfNGL0YDRi3zRgdGL0Ld80YvRgSB80LXQu9CzfNC00LDQu3zQudC00LB80L7RgNKTfNGA0pvRi3zQsNGA0pt8INC20q980YLQsNC7fNGL0LvQvHzQsCDQsXzRltCz0ZZ80LvQtNC1fNGW0LcgfNKb0YLRi3wg0LXRiHzQtNC10Ll80LDQuSB80LbQsNKTfNC60YLRlnzRltC60YJ80LPRltC9fCDTmdC7fNGC0YLRi3zSsdC70YJ8INKx0Lt80LUg0LR80YvQvdGLfNC70ZbQvXzRgCDQsXzQtdC70LV80LrSsdKbfCDQutKxfNCw0LzQtHzQvCDQsXwg0LXRgnzQvtKT0LB80pvSsdGAfCDQutOpfNCw0pPQsHzRgtC+0Lt80YjRltC9fNCw0LnRi3wg0pvRi3zSm9Cw0Lt80LbQtdC6fNGWINC9fNC10YEgfNCw0pPRi3zQtSDQvnzQtdC70ZZ8INC10Lt80L0g0LV80LfRliB80YjQutGWfNC10YjQunzQvtC70YN80YbQuNGPfNC80LDRgXzSk9C00LB80LDSk9C0fNC70YLRgnzRltC80LR80L3Ri9C8fCDQtNCwfNCwINC0fNOZ0YHRlnzRgSDTmXzSm9Cw0YJ80ZbRgNGWfCDRgdC+fNKjINCxfNCw0LfQsHzQvNC00LB80LDQudC7fCDQsNGBfNKT0LDQvHzSm9C+0pMnXG4gIH0sXG4gIEFyYWJpYzoge1xuICAgIGFyYjogJyDYp9mEfNmK2KkgfNmB2YogfCDZgdmKfNin2YTYrXwg2KPZiHzYo9mIIHwg2YjYp3zZiNin2YR82K3ZgiB82Kkg2Kd82YTYrdmCfNin2YTYqnzZg9mEIHzYp9mE2YV82YTZg9mEfCDZhNmDfNmE2YkgfNmCINmBfNiq2YcgfNmIINinfNipINmIfNi02K7YtXzYqSDZhHzYp9iqIHzYp9mE2KN82Yog2KN82YjZhiB8INi02K582YUg2Kd82KPZiiB8INij2Yp82KfZhiB82KPZhiB82YXYqSB82Yog2Kd82KfZhNinfNmE2KcgfNmH2KcgfNin2KEgfCDYo9mGfCDYudmEfNiu2LUgfNmGINinfCDZhNmEfNivINinfNmF2YYgfNmB2LHYr3zZhdinIHzYp9mE2Ll82Kog2Kd82K3YsdmKfNi52YTZiXzZhCDZgXzYsdivIHzZhCDYtHwg2YTYp3zYsdmK2Kl8INil2YR82Kkg2KN82Kcg2Kd82YYg2Yp8INmI2YR82Kcg2YR82Kcg2Yp8INmB2LF8INmF2YZ82Kkg2YV82KfZhNmCfNis2KrZhXzZhiDYo3zZgiDYp3zYp9mE2KV8INit2LF82YTZhyB82Ycg2YR82KfZitipfNmE2YMgfNmHINinfCDYr9mIfNiv2KkgfNin2YsgfNmK2YYgfNmHINmIfNmE2KkgfNmKINitfCDYudmGfNmF2KfYuXzZiiDYqnzYsNinIHwg2K3ZgnzZgtmI2YJ82K3ZgtmIfNiMINmIfNmGINiqfNmF2LkgfNi1INinfNin2YUgfNivINijfCDZg9infNmH2LDYp3zYp9mE2Yh8INil2YZ82YXZhCB82KfZhdipfNi5INinfNil2YTZiXzYqSDYuXzZhdin2Yp82K3ZhdinfNmGINmIfNmE2KrYuXwg2YjZinzZitixIHzZhtmI2YZ82Yog2Yh82KfYs9mKfNin2YTYrHwg2YfYsHzZhtiz2Kd82YjZgiB82KrYsdinfNi52YrYqXzZhyDYo3wg2YTZh3zYs9mK2Kl8INmK2Kx8INio2Kd82K/ZiNmEfNin2YbZiHzZgtin2YZ82YTZgtinfNipINiofNipINiqfNiq2YXYp3zYp9mE2K982YrYp9iqfNi5INiofNiz2KfZhnzYpdmG2LN82YfZhSB82LnZhNmKfCDZhdiqfNmE2YXYrHzYsNmE2YN82LnZhdmEfNmE2KPYs3zZiNiyIHzYrNmI2LJ82YrYrNmIfNio2KfZhHzYutmK2LF82YMg2Kd82YPYp9mGfNiz2KfYs3zYo9iz2Kd82K/ZhSB82YTYp9ivfNin2LnZinzYp9mE2LF82KrZhdmKfNiv2YjZhnzYqtmF2Kp82YTYqtmFfCDZiti5fNmE2YrZh3zYs9in2Yh82KfYrNiqfNmKINmFfNmE2LnYp3zZhNis2YV82KrYudmEfNixINmIfNiq2YXYuXzZhdis2Kp8INmF2Ll82YrZhyB82Ykg2KN82YHZitmHfNmJINinfCDZg9mEfNmE2KfYqnzZhdmE2Kd82YjYryB82KfZhtiqfNin2YTZgXzZitmH2Kd82Yog2KV82KrZiiB82KfZhNiofNmE2YogfNmC2K/ZhXzYp9mEIHzYp9ivIHzZhCDYp3zZitiyIHzZitmK2LJ82YXZitmKfCDYqtmFfNmE2K3YsXzYqti5IHzZhdiq2Ll82Kcg2Kh82LnYp9mFfNinINmIfNmCINmIfNix2KfZhXzZhCDZhHzZhNin2Kx82LHYpyB82KfZhNi0fCDZiNilfNmK2YUgfNmE2YrZhXzYtNiq2LF82Kcg2K182YjYp9isfNmE2LLZiHzZiNmEIHzYpyDZgXzZiNmE2Kl82YTYrdmFfNij2LPYsXwg2LDZhHzZhyDZgXzYp9iq2Yd82YXYs9infNmE2YXYs3wg2KrYuXzYudmGIHzZhyDYuXzZiNmE2Yd82YrYqtmHfNmGINmEfNix2KkgfCDZiNizfNin2KkgfNmK2K8gfCDYqtitfCDZhdizfNmKINmKfNmE2KrZinzYudipIHzZiNmE2Yp82YTYr9mIfCDYo9izfCDZiNmBfNmEINmIfNij2YrYqXzZhtmKIHzYp9mE2LN82YTYp9mGfNmE2KXYuXzYqSDZgXzYsdmK2Kd82YQg2KV82YUg2Kh82KfZhdmEfNmD2LHYp3zYqtiz2Kd82YXZiti5fNis2YXZinwg2KzZhXzYo9mI2YR82KjZitipfNi52YrYtHzYqtit2YJ82KfYr9ipfNizINinfCDZhdmFfNmF2LnZinzYrNmF2Kd82LnYp9iqfNin2LnYp3zYp9ix2LN82YXYp9ixfNmF2YXYp3zZhSDZiHzYsdin2YN82KfYtNiqfNin2YTYt3zYp9isIHzYstmI2Kd82KfZhNiyfCDZiNmFfNit2K/YqXzYqtit2K982YTZhdiqfNmF2YUgfNmE2KPZhXzYr9mHIHzYqNmE2Kd8INio2YR82KfYsSB82YrYp9ixfNiq2YrYp3zYrtiq2Yp82KfYrtiqfNmGINmFfCDZhdixJyxcbiAgICB1cmQ6ICfZiNixIHwg2KfZiHzYp9mI2LF82qnbkiB8INqp25J8INqp24x8INqp2Kd824zauiB8INit2YJ82qnbjCB82qnYpyB8INqp2Yh82KbbkiB825Ig2ql824zYpyB82LPbkiB82qnZiCB82LTYrti1fCDYtNiufNmG25IgfCDYp9izfCDbgduSfNmF24zaunzYrdmCIHwg24HZiHwg2YXbjHzYrti1IHzbkiDYp3wg2KzYp3zYp9izIHwg2LPbknwg24zYp3zbgdixIHzbjCDYp3wg2qnYsXwg24HYsXzbktuUIHzYs9uMIHzbgduM2rp82Kcg2K182LUg2ql82YjauiB825Ig2YV8INin2YZ82LEg2LR825Qg24F82KfYptuSfNiy2KfYr3zYotiy2Kd8INii2LJ82KfZhSB82LEg2Kd82YIg24F82KfYr9uMfNis2KfYpnzauiDaqXzbgduS25R82YUg2ql8INqp2LN82Kcg2Kx824wg2ql82LMg2ql82qnYs9uMfCDZvtixfNuSINqvfNuB25IgfNin2LEgfNiqINqpfNiv24wgfNm+2LEgfNmIINinfCDYrdinfCDYrNmIfCDbgduMfNin2YYgfNuMINisfNix24wgfCDZhtuBfCDZhdi5fNis2YggfNmEINqpfNuMINiqfNmGINqpfNqp2LHZhnzYptuMIHzZhCDbgXzYqtuMIHzbgdmIIHzbgSDYp3wg2KfbjHzYtdmEIHzYp9i12YR82K3Yp9i1fNix2YbbknzbjCDYtHzZhtuBIHzblCDYp3zautuUIHzbjNq625R82LEg2ql82LEg2YV8INmF2YR82YjbgSB82YXYudinfNix25IgfNq6INinfNmG24HbjHzbkiDbgXzbkiDYqHzYp9uM2LN825Ig2YR8INiq2Ll8INqv2Kd824zYqiB824wg2K182Kcg2Kd824wg2YV82KfZvtmGfCDYp9m+fNqp24zYp3zZhduMIHzbjCDYs3wg2KzYs3zbgSDaqXzZhtuMIHzYp9i02LF82LnYp9i0fCDYr9mIfNmE2Kbbknwg2YTYpnzYp9mG24F82YjZgiB82YLZiNmCfNit2YLZiHzZhdmEIHwg2YLYp3zaqduBIHwg2q/bjHzYsSDYqHzbgSDZhXwg2YjbgXwg2KjZhnzbjCDYqHzZhdmE2ql82KzYsyB82KfblCB82LHbjNmCfNixINmGfNuSINisfNin2K8gfNin2KogfNqv24wgfNivINqpfNuSINitfNiv2KfYsXzYsSDbgXzar9in25R82YLZiNmFfCDZgtmIfNuS2IwgfNinINizfNiv2YjYs3zYsSDZvnwg2YggfCDYtNinfNuMINiifNq6INmFfNmCINitfCDZvtmIfCDYqNinfNiu2YTYp3zYp9mG25J824zZhSB82YTbjNmFfNmIINiqfNmI2YYgfCDaqduBfNuM2IwgfNuUINqpfNinINm+fNmGINinfNmE2qkgfNi52YTYp3zYpyDZhXzZgiDaqXzYp9im24x82YjYs9ixfNuMINuBfNmI2KbbjHzbjNixIHzYpyDbgXzYudmE24x82Ygg2q982YjYsduMfNiv2q/bjHzZhtiv2q982Ygg2ql824zYs9uSfCDZhdmGfNin2KbYr3zYsdin2KZ8INmF2LF82b7ZiNixfCDYt9ixfNmI2YXbjHzbkiDYrnzYs9ioIHzZhtmI2YZ82KfZhtmIfNmC2KfZhnwg2LPaqXzZiNin2YV824zZhiB8INix2ql82KrYudmEfNmE2KfZgnzYutuM2LF82K/Yp9mGfNiMINinfCDYqNuMfCDZhdizfNuM2YjaunzZhtinIHwg2Kjavnwg2KjYsXzYsdiq24x82KfYr9infNin2YXZhHzbjNuBIHwg24zbgXzbgSDZiHwg2LnYp3zbjCDZvnwg2KjahnzYp9mBIHzZhNin2YF8INiu2YR824zblCB82q/bjNuUfCDYr9uMfNq+24wgfNio2r7bjHzYr9uBIHzYrNinIHzZvtmG24x82YLZiNinfNin2YLZiHzYsdqp2r5825Ig24x8INi52YR82qnZiNimfNiMINmFfCDahtinfNuSINizfNixINi5fCDZvtuMfNio2LHYp3zYsSDYs3zYsSDYrXzYs9in2YZ82YUg2Kd82qnYp9mFfNi02LHYqnwg2LHYp3zYtNin2YV82YXZhiB82LLZhtivfCDYstmGfNioINqpfNiqINmFfNin24EgfNin2LHbjHzYsyDZhXzYsSDYrHwg2YXYrXzZiNix2Kd825Ig2b582LfYsduMfNuB2YjaunzYp9mEIHzauiDYs3zbjCDZhnzaqdix25J8INmF2YJ82Kog2LN82KrYrdmBfCDYqtitfNmI25QgfNuB2YjblHzYqNmG2K98INin2YJ82K8g24F8INin2YV82KfZhduMfNin2YTYp3zZhNiqIHzYtNix25J825Ig2Ll82Kcg2ql82YHYsduMJyxcbiAgICBwZXM6ICcg2YggfCDYrdmCfCDYqNinfNmG2K8gfNix2K8gfNiv2KfYsXwg2K/Yp3zaqdmHIHzZh9ixIHwg2K/YsXwg2qnZh3zYr9ixIHwg2YfYsXzYsSDaqXzYrdmCIHzYryDZh3zYp9iyIHzbjNiqIHwg2KfYsnzbjNinIHzaqdizIHzZiNivIHzYp9ix2K98INuM2Kd8INqp2LN82KfbjCB82K8g2Yh8INio2LF8INiu2Yh82YIg2K982KjYp9i0fNi02K8gfNivINqpfNin2LEgfNivINiofCDYsdinfNmHINiofNin2YYgfNii2LLYp3wg2KLYsnzYsdinIHzYp9i02K9824wg2Yh82Ycg2Kd824zZhiB824zYryB82LLYp9ivfNizINitfNiu2YjYr3zbjCDYqHwg2KfYs3zYr9mHIHzYr9uMIHzZiNixIHzYp9uM2K982Ycg2K982LHbjCB82Ygg2Kd82KrZhdinfNin2KogfCDZhtmFfNuMINqpfNin2K/bjHzZhtmHIHzYsdin24x82K8g2Kd8INii2YZ82KfYs9iqfNixINinfNixINmFfCDYp9isfNmF2KfbjHzZiNmGIHzZgtmI2YJ82K3ZgtmIfNmIINmFfCDYp9mGfNin2YbZh3wg2YfZhXzZiNmCIHzYp9uM2Kp8INi02Yh824wg2Kd8INmF2Yh8INio24x82KjYpyB8INiq2Kd82YjYsdivfNin2YbZiHzYs9iqIHzZiNin2YZ82KjYsdinfNin2YUgfNi02YjYr3zYotmGIHzYrNiq2YV824wg24x8INqp2YZ82LEg2Kh82qnZhtivfCDZhdixfNiqINmFfNmH2KfbjHzYqiDYp3wg2YXYs3zbjNiMIHzZhdin2Ll82KfYrNiqfNiq2YjYp3zbjNqv2LF82Ygg2Kh82K/Yp9mGfNiqINmIfNinINmFfCDYqNivfNi524wgfNqp2KfYsXwg2YXZhnzZhdmI2LF8INmF2YJ824wg2K98INiy2YZ824wg2YV82YYg2Kh82LEg2K582KfZhyB82Kcg2Kh82KfYsduMfNivINiifNmF2YQgfCDYqNmHfNin2LnbjHzYr9iMIHzYr9uM2q982Kog2Kh82KjYp9uMfNin24zZhnwg2YXbjHzZhiDZiHzZgiDZhXwg2LnZhXwg2qnYp3zZhiDYp3zZiCDYonwg2K3ZhXzZhtmI2YZ82Ycg2Yh82Ygg2K982K8g2LR8INin24x82LTZiNixfNqp2LTZiHwg2qnYtHzZhNuMIHzZhtuMIHzZhyDZhXzYqNi524x82LEg2LR824zZhyB8INmF2YR82YXbjNiqfNuMINixfNix2YbYr3wg2LTYsXzZhduMIHzZiNuMIHzYs9in2Yh82YLYp9mGfCDZgtinfNmF2YLYp3zYp9mIIHwg2KfZiHzYryDZhXzar9uMIHzZhtmF24x8INin2K18INmF2K182YXbjNmGfNim24wgfNin2K/Yp3wg2KLZhXzYrtmI2Kd82q/YsdivfCDar9ixfNmF2YbYr3wg2LTYr3zYp9im24x8INiv24x82LIg2K182YfbjNqGfCDZh9uMfNin2K/Zh3wg2YXYqnzZhtmF2Kd82Kog2ql82LHYp9mGfCDYqNmFfNmGINitfNixINiqfNit2YXYp3zYp9ix2YZ82YXYs9infNiv2q/bjHzZiNmF24x82YYg2Kp82YXZhNmEfNio2LEgfNmH2K8gfNmI2KfZh3zYqNmH2LF8INin2Ll84oCM2YfYp3zZgiDZiHzYjCDYp3zYuduM2Kp824zYqtmIfNinINixfNmGINmFfCDYudmCfNmH2YXZh3zYpyDZh3zYsti0IHzZiNiy2LR82YXZiNiyfNii2YXZiHzYp9mG2Kp82KrbjCB82KzYp9mFfNmF2YjZhXzYudmF2Yh82KrYrtinfCDZgdixfNi32YjYsXzYryDYr3zZhyDYrXzYsdiv2Kd82KfZiNuMfNmG2YjYp3zYp9mG24x82LHYp9ixfCDZhdisfNuMINmGfNit2K/bjHzYp9it2K982YbYr9qvfNiy2YbYr3zYtNiu2LV8INi02K584oCM2YXZhnzZh+KAjNmFfNix2YfigIx82YfYsdmHfNi02K/Zh3zYuSDYp3zZiCDZh3zYp9iz24x82YfZlCB824zYr9mHfNi52YLbjHzYpyDYp3zZhdmHIHwg2KjYtHzYp9ivIHzYr9uM2Yd82Kcg2K982K/ZiNinfNuMINitfNin2KjYuXzbjCDYqnzYrtin2Kh82YbYqtiufNix2YjYsXzZiCDYsXzYtNix2Kd8INiu2Kd82ZTZhduMfNin2ZTZhXzYqtin2ZR82KfZiyB82KfZhdmEfNmE2YcgfNivINixfNin2LPYp3zYrtmI2LF82KjZhCB82KfYqNmEfNmC2KfYqHzbjNqpIHzYs9in2YZ82YLYsdinfNinINmGfNiu2LXbjHwg2KfZhXwg2KjZiHzbjNixIHzYp9mE2YV82KjbjNmGfNin2YfYr3zYqtio2Ll8INiq2KgnLFxuICAgIHpsbTogJyDYr9infNin2YYgfNiv2KfZhnwg2KjYsXwg2KfZiHzZhiDYs3zYsdqgIHzYr9in2YR8INqk2LF82YTZhyB82YPZhiB8INmD2qR82YYg2Kd82YYg2YN82YYg2K982YraoCB8INmK2qB82qTYryB82K3ZgiB82YjYsdqgfNiq2YrYp3zZitin2qR82KfYsdinfNmD2qTYr3zYp9mI2LF82LHYrdmCfNio2LHYrXzYp9mE2Yd82KPZhiB82YjZhNmKfCDYp9iqfNin2KrYp3zaoNmGIHzYqtin2Yh82KfapCB82LPYqtmKfNmE2YrZh3zYp9mIIHwg2LPYqnzapCDYp3zZitmHIHzYsdinIHzZhyDYqHzZhyDYr3zYudiv2Kd8INi52K982YYg2qR82YYg2Kh82YrZhiB8INiq2LF82YIg2YN82YYg2Yp82YrYqNizfNio2YrYqHwg2KrZinwg2LPZiHwg2YPYqHwg2LPYp3zZhiDZhXzZhiDYqnzZhNmFIHzYp9mE2YV82K8g2LN82qAg2Ll8INmF2YZ82obYp9ixfNivINqkfNix2YYgfNiz2KfZhXwg2YXYp3zavSDYs3zZhtiMIHwg2KjZiHwg2KfZinzZhtiv2YJ8INit2YJ82qzYp9ixfNmG2qzYp3zYqNmI2YR82LPYqNinfCDYs9iofNin2KrZiHzYpyDYs3zZgtmE2Yd8INqk2YV8INmF2YV82YjYp9mGfNiz2obYp3wg2LPahnwg2YPYs3zYpyDYqHzYs9mGIHwg2LPZhXzapNix2YR82KfZiNmGfNmG2r0gfNiq2YYgfCDYqNinfNmH2YYgfNiz2YrYp3zYpyDapHzYp9ix2qB82KjYp9ixfNqk2KcgfNio2LPZhnzZg9io2Yp82KfZhSB82YrZhtivfNmKINivfNin2qzZinzaoCDYqHzYqNin2qx82Yog2Kd82YXYp9mGfCDZhNinfCDYryB82K/ZgtmEfNmH2YbYr3wg2YfZhnzYqiDYr3zYp9iv2Yp82YjZitmGfNmK2YPZhnwg2YbarHzYjCDZg3zZhtmiIHwg2qTZiHzYqNqg2LN82YLZoiB82KfYqiB82KfZiNmEfNin2YPZhnzYp9q9IHwg2LPYs3zZiNmGIHzYp9ivIHwg2YPZiHzYp9mK2YZ82K/aoNmGfCDYr9qgfNin2KbZhnzYqtmIIHzYqtmKIHzZhiDZh3zarNmKIHzYs9mKIHzZgiDZhXzZiNqg2YZ82K/ZiNqgfNmG2K/ZiHzZhNmK2YZ82LHZhNmKfNmG2KrZiHzapNmI2YZ82YjYp9iqfNmK2KfYr3zYqtmK2YN82qDYs9infNqk2YXYqHzYqtix2YV82aIg2K982K3ZgtmifNmI2KcgfNmE2YjYp3zZhdin2LN82YjZgiB82Ycg2YV82YQg2K98INmF2YR82YjZhtivfCDapNqgfNin2IwgfNiMINiqfNmE2KfYpnzYp9mKIHzZhdqk2Yh82YrZgyB82Yog2YN82LHYp9iqfNmF2LHYp3wg2KjZinzYs9mF2Yh82Ygg2YN82Iwg2K982LPZiNinfNqgINmFfNqgINizfNqg2aIgfNqk2LHZinzZitix2Yp82K/ZitixfNinINinfNin2LPYp3zapNmiIHzYqtinIHzYs9mI2LN82Iwg2LN82KzZiNinfNqgINiqfNix2KPZhnwg2KfZhnzYs9ij2YZ82LHZitmDfNmK2KPZhnzYsdmKIHwg2K/YsXzYp9mF2LF82YPYsdisfCDapNmEfNinINivfNis2LHZhnzYp9is2LF82KfYsdmDfNmE2KfYrHzYryDZg3zZiNin2LF82KjYsdizfNmI2YbYqnzZhdmG2Yh82LPYp9mEfNmK2YbaoHzYr9qg2aJ82YbYr9qgfCDZhdqgfNin2qTYp3zYs9iz2Yp82LPYp9izfNmG2YYgfNqk2YjZhHzYp9qs2Kd8INio2qB8INiz2qR82YXYqNmKfCDYp9qkfNqgINinfNin2LHYo3zapNix2Kd82Yog2LN82KjYsyB8INiv2YR82Kcg2YV82YXZiNinfNqk2YTYp3zZhdmE2Kd82qTYsdmDfNmD2YjYsXzZiNio2Yh8INmD2KN82YjZg9mGfNij2YbavXzZg9iz2Kd82qDarNmIfNin2K/apHzZh9in2K982LHZh9infNiq2LHZh3zZg9mI2YV82KrZiNmCfNmFINizfNqgINivfNiv2YogfCDYr9mKfNmiINizfNmG2K/ZinzYp9izIHzYp9iv2Kd82KjZiNinfCDYr9iofNqgINqkfNq92IwgfNin2qTZonzYsdiq2Kd82KfZhCB82YrYp9mEfNmI2LPZinwg2YPYqnzYo9mG2Ix82YbapNinfNiq2YbapHwg2KrZhnzZhSDapHzYsdiz2Kd82YXZhdqkfCDZhdixfNmGINitfCDZg9mFfNmG2LPZinzYrNij2YZ82KTZiiB82YTYpNmKfNin2YTYpHzZhNin2YR82YPapNixfNmD2KogfNix2YPYqnzYtNin2LF82YXYtNinfCDZhdi0fNis2KfYr3zYsdqs2KcnLFxuICAgIHNrcjogJ9iq25IgfNin2rogfNiv24wgfNiv25IgfCDblCB82YjauiB8INiq25J8INiv2Kd8INqp2Yh82qnZiNq6fCDYrdmCfNiv2KcgfCDYr9uMfNuM2Kfaunwg2K/bknzbjNq6IHzbkiDYp3zYtNiu2LV8INi02K5824HYsSB825Ig25R82KfYtdmEfCDYrdinfNit2YIgfNiu2LUgfCDbgdixfNi12YQgfNit2KfYtXzbgduSIHwg24HbknzYp9mEIHzZgiDYrXzZhCDbgXwg2YbYp3wg2qnbjHwg2YjahnzblCDbgXzbjNinIHzYs9uMIHzbkiDZhXwg2KfZiHzZiNqGIHzYp9iq25J82qnbjNiqfNinINitfNin2K/bjHzZhtin2YR82LUg2ql8INin2Kp82LEg2LR824HbjNq6fCDbjNinfNq6INivfCDYp9uMfNuM2LPbjHwg2YXZhHzZiNmG2K982qnbgduMfCDaqduBfNuMINiqfNiy2KfYr3zYp9iy2Kd8INin2LJ82YbYr9uSfNq6INqpfNin2LEgfCDZiNuMfNuSINqpfNim25IgfCDYp9mGfNq7INivfNmG24EgfCDaqdixfNin2YjZhnzbkiDZiHzYr9uM2Kd824wg2K982rog2Kd825Ig2Kh82YjbjNizfNmI2rsgfNuMINmGfCDbgdmIfNiq24wgfNuMINuUfCDZhtuBfNuMINinfNuM2YbYr3zZiCDahHzYotm+2rt8INii2b582Kcg2Yh825Ig2Kx8INqp2YZ825Ig2YZ82YbYr9uMfNiqINivfNuSINitfNuMINqpfNim24wgfNmF2YTaqXzbjNiq25J82YYg25R82KravtuMfCDYqtq+fNmI2YYgfNq6INmFfCDYqNqGfNuUINinfNmG2YjaunzaqdmG2Yh82rvbkiB82KfYsduMfNinINinfNuSINuBfNmEINiqfCDahNimfNmI2YIgfNmC2YjZgnzYrdmC2Yh82YQg2ql82K7ZhNinfCDYrNuMfNmE2qkgfNiv2KfYsXzbjNiqIHzaqdix2rt82KfZhtuBfNqp2YggfNuB2qnZiHwg24HaqXzZhiDYp3zZhdmEIHwg2YjYs3zauiDZiHzZvtq725J8INiq2Ll824wg2YV82KfZgSB825Ig2K582YbZiNmGfNmC2YbZiHwg2YLZhnwg2YTZiHzblCDaqXzYsduMIHzZhNuSIHzYqtinIHzbjNiq2Kd8INmC2Yh8INqG2Kd824HYp9q6fNqE2KbbknzZgiDYqnzYp9uM24F82LHauyB825Ig2K982LEg2ql8INmIIHzZhNin2YF8INiu2YR8INis2Yh824wg2Yh82KfZiCB824HZiCB82KbZiCB82obYptmIfNio2obYpnzbjNixIHzbgdmI2Yh82Kcg2YV824wg2Kx82KfZhNinfNuM2YYgfCDYrNinfNmF24wgfNmG24HYp3zYp9mGIHzYp9iqIHzYs9qx2K98INiz2rF824zYqCB82LPbjNiofNmI2LPbjHwg2LTYp3zYqCDYr3zbjNmI2rt82KfZhSB82KfZiNq7fNuSINiqfNq7INqpfCDZhdi3fNq6INiqfCDZiNmGfCDaqdmFfNmGINivfNix2qnavnwg2LHaqXzau9uMIHzauiDYonzYsduM2Kd824wg24F82KfYryB824zYp9ivfNi52YTYp3zYsSDbgXzauiDYs3zbjCDYrXzYrNq+24x82KfYptivfNuB24wgfNmE2YjaqXwg2ovZiHwg2LPZhXwg2LPYp3wg2YXZhnwg2YXYuXzYqNmCIHzYp9io2YJ82LfYp9iofNmF2LfYp3zavtuM2Yh82rog2YF824HZhiB8INuB2YZ82KzZiCB82Ygg2ql82rog2LR82LEg2Kp82qnYp9ixfNmFINivfNq+24zYp3wg2bvYp3zYutuM2LF82Ygg2YR82YjYptuMfNis24zYp3zZiNin2YV82YLZiNinfNuMINizfCDYrNq+fNmEINinfNmC2YjZhXwg2LPbjHzYsNuB2Kh82YXYsNuBfCDZhdiwfNin25IgfCDYp9uSfNiv2YYgfNinINiqfNiz2KfZhnzZhtiz2Kd82KfZhtizfNix25IgfNmE24zZhXzYudmE24x82KrYudmEfNin2YXZhHzbgSDYr3zbkiDYsXzYryDYp3zaqdmFIHzbjNuB2Yh82YHYp9imfNqGINinfCDaqdq+fNmFINiqfNix2KcgfNmI2LHYp3zZvtmI2LF82rog2Kh82YIg2K9825Ig2YJ82YjaqdmIfNqp2r7bjHzYpyDaqXzZiCDYr3zbkiDYsHzZvtq724x82KjZhtivfCDZgdixfNqp2YjYpnzYp9mF24x824wg24x82KfYptuMfNmE2KfZgnzYp9uM2rp824Eg2Kd8INmG2Lh82LPZhdinfNmI2YXbjHzbjNiMIHzbkiDYs3zYqiDZiHzavtuM2YZ825Ig2Ll824zZhSB82LPbgdmIfCDYs9uBJyxcbiAgICBwYnU6ICcg2K8gfCDYp9mIfNin2YggfNm+2YcgfCDZvtmHfNmK25QgfCDYrdmCfNqG25AgfCDahtuQfNix2YcgfNmKINinfNuQINivfCDZh9ixfNmG2YcgfNmH2LEgfNit2YIgfCDahdmIfNmI2qkgfNqF2YjaqXzZiCDYp3zZhyDYr3zZhyDYp3zblCDZh3zZhyDZiHwg2LTZinwg2YTYsXzZiiDahnzZiCDYr3zYsdmKIHzZhNix2Yp82YIg2YR8INqp2pp82YjZiiB82prbkCB82qnamtuQfNmHINqpfNi62YcgfNmE2YggfNixINqFfNiz2LHZh3wg2LPYsXzZhyDZvnwg2bzZiHzZiCDZvnzZhNmHIHzZitiqIHzZvNmI2YR82YrYpyB82qnak9mKfCDaqdmIfNiu2YcgfNmK2IwgfNiv2YogfCDZhNmHfCDYp9iyfNivINmFfCDZh9mKfCDZiNinfCDZitinfCDahdiufNin2LLYp3zYryDYp3zZiNmE2Yh82Ycg2Kp82oXYrtmHfCDaqdqTfNmI2YQgfNmH2LrZh3zZhyDYtHzZiiDYr3wg2YfYunzaqdmI2YR82LLYp9ivfNmG2YggfCDZiNmKfNmIINmKfNmHINiofNi02YrblHzYr9uQIHzZitmIIHwg2K/ZinzYqtmHIHzYrtm+2YR8INm+2LF82KfYryB82K8g2K982qkg2K18INiq2Yh82Ycg2YV82qvZhyB82Ycg2Yd82YLZiNmCfNit2YLZiHzZiCDZhXzZhyDYrXzYryDZh3wg2KrYsXwg2YXYs3zYtNmKIHwg2YbZh3zak9mK25R82YbZiiB82K8g2b582YjYp9ivfNuQINm+fNin2K/ZinzZiNmE2YZ8INmK2Yh82K8g2Kp82YjZhtmIfNmI2qvZh3zZiiDZiHzZhNmKIHwg2K/Yp3zZitivIHwg2KjYp3zYqtmI2YZ8INiu2b582Yog2b582KrZiNqrfNin2LEgfNin2YbYr3zZitmI2Kd825Ag2Yh82K/Yp9mGfCDYqNixfNqT2YogfCDYudmFfNin2YbZh3wg2K/Zh3zZitqFIHzZh9mK2oV82KfZhdmKfNmE2YbZinzYqNi52Yp82onZiNmEfCDaidmIfNmHINmEfNin2YrYr3zYqNin2Yp82KfYqtmIfNmHINqrfCDYqtinfNm+2YQgfCDZhdmEfNin2YrYqnzZiNmFIHzZiNmGIHwg2YTYp3zZh9mK2Yh8INi02Yh8INiv2Lp82YUg2K982K/ZhyB825Ag2Kd82KfZhiB8INiq2Yd82qnYp9ixfNiq2YggfNmF2YogfNin2LHZh3zYp9mI2Yp82LPYp9mIfNmF2LPYp3zZhtmI2YZ82K/Zh9i6fNmIINiqfNmKINi0fNin2YbZiHwg2YXYrXzZitmGIHzYp9iu2YR8INqr2bx82LTZiNmKfNiv2LrZh3zZiCDYrXzZiNmK2Ix82YbZitiyfNiz2YogfNin2LPZinzZiNmG2K982YLZiCB82YjZgtmIfNmIINqpfNmI2YbZh3zZiNmF2Yp8INmI2ql82Yog2Kp8INin2YZ82YLYp9mGfNmG2K/bkHzZiCDYsXzaqSDYr3zZhyDZinzZhdmK2YZ82b7YsSB82bzZhyB82YTYp9mFfNi62YggfNmH2LrZiHzYryDZvHzZiCDZh3zZhCDYqnzZhNuSIHzZiNmE25J82YjZiNmGfNqp2YogfNix2YggfNmGINqpfNmF2YjZhXzZiNqp2pN82b7Yp9ixfNmGINi0fNmF2YYgfCDZhtmIfCDZiNqTfCDZgtinfNuQINqGfCDZiNizfNqFINqFfNi02K7YtXwg2LTYrnzamNmI2YZ8INqY2Yh82KrYsSB82qvZvNmHfNmIINqFfNmH2YUgfNi52YLZinzYsdiq2Yd8INmI2LF82KjZhCB8INio2YR82Ygg2Kh82Ycg2LN82prZiNmIfCDamtmIfCDaqdinfNuQINqpfNmIINizfNin2K/Zh3zZiNmG2ql8INi62Yh82K/ZiCB82Ygg2YZ82Kog2ql82YXZhCB82LnZhdmIfNmEINmHfCDZvtmKfNmI2LPZinzak9in2YZ82Yjak9infNmK2LIgfNiu2LXZinzZiiDZhXzYpyDYqHzYp9iv2Kd82Ycg2YZ82K7ZhNmKfNmI2KfYrnzYr9mK2Yh82Iwg2K982K8g2YJ8INmH2YV82Kcg2K98INio2Yp82KrYqNi5fCDYqtiofNmHINqGfCDYudmCfNm+2YTZiHzZiCDZhHwg2LHYp3zYryDYqHzYsdin2Yp8INiv2K582YbbkCB82YbaqdmKfNiqINivfNin2KjYuXwg2YXZgnzYryDYrnzZiNix2Yd82LTYsdinfCDYtNixfNixINmFfNix2LPYsXzYqtin2YV82Ycg2bx8INmF2YZ82LfZhyB82LPYt9mHfNin2LPYt3zZiNin2LN82YTbkCB8INin2LN825Qg2K982KjYsdiufNuQINmGJ1xuICB9LFxuICBEZXZhbmFnYXJpOiB7XG4gICAgaGluOiAn4KSV4KWHIHzgpKrgpY3gpLB8IOCkquCljXwg4KSV4KS+fCDgpJXgpYd8IOClpCB84KSU4KSwIHwg4KSU4KSwfOCkleCkviB8IOCkleCli3zgpJXgpL7gpLB84KS+4KSwIHzgpKTgpL8gfOCkr+CkviB84KSV4KWLIHzgpKjgpYcgfOCli+CkgiB84KS/4KSV4KS+fOCljeCksOCkpHwg4KS54KWIfCDgpJXgpL984KSCIOCklXzgpLngpYggfOCkp+Ckv+CklXzgpLXgpY3gpK984KSF4KSn4KS/fCDgpIXgpKd84KWN4KSk4KS/fCDgpLjgpK584KWN4KSv4KSVfOCkvyDgpJV84KSV4KWN4KSkfOCkviDgpIV84KSV4KWAIHzgpL4g4KSVfCDgpLXgpY184KWH4KSCIHwg4KS54KWLfOCkr+CkleCljXzgpLjgpYAgfOCkuOClhyB84KWHIOCklXwg4KSv4KS+fCDgpJXgpYB84KSu4KWH4KSCfOCkqOCljeCkpHwg4KSu4KWHfOCkpOCljeCkr3zgpYgg4KWkfOCkpOCkviB84KSw4KSk4KWNfOCkleCljeCkt3zgpYfgpJUgfOCkr+Clh+CklXzgpY3gpK/gpYd84KS/4KSVIHzgpLAg4KS5fOCkreClgCB84KSV4KS/4KS4fCDgpJzgpL58IOCkuOCljXzgpJUg4KS1fOCkviDgpJx84KS/4KS44KWAfOCkruCkvuCkqHwg4KS14KS/fOCksCDgpLh84KSk4KWN4KSwfOClgCDgpLh84KWkIOCkqnwg4KSV4KSwfOCljeCksOCkvnzgpJfgpL4gfOCkv+CkpCB8IOCkheCkqnwg4KSq4KSwfOCkuOCljeCktXzgpYAg4KSVfCDgpLjgpYd84KS+IOCkuHzgpY3gpK8gfCDgpIXgpKh84KWN4KSk4KWNfOCkv+Ckr+CkvnzgpL4g4KS5fCDgpLjgpL584KSo4KS+IHzgpY3gpKQgfOCkquCljeCkpHzgpLjgpK7gpL584KS+4KSoIHzgpLAg4KSVfOCkvuCkquCljXzgpKTgpKjgpY18IOCkreClgHwg4KSJ4KS4fOCksOCkvuCkqnzgpLXgpKTgpKh84KWN4KS14KSkfOCksOCli+CkgnzgpLXgpL7gpLB84KWHIOCkuHzgpKXgpL4gfOCkueCliyB84KWHIOCkhXzgpL4g4KWkfOCkqCDgpJV8IOCkqCB84KSm4KWH4KS2fCDgpLDgpL584KS34KS+IHzgpIXgpKjgpY184KSkIOCkuXzgpY3gpLfgpL584KWN4KS14KS+fOCknOCkvuCkj3zgpYAg4KSqfOCkleCksOCkqHzgpL4g4KSqfOCkheCkquCkqHzgpLfgpY3gpJ98IOCkuOCkgnzgpYcg4KS1fOCkueCli+Ckl3zgpL/gpLXgpL584KSf4KWN4KSwfOCljeCkn+CljXzgpL7gpLfgpY184KSw4KS+4KS3fOCkuOCkleClh3wg4KSu4KS+fOCkk+CkgiB84KS+4KST4KSCfOCksOClgCB84KSVIOCkuHzgpYcg4KSqfCDgpKjgpL984KWA4KSvIHzgpLDgpJXgpY184KWLIOCkuHzgpL7gpI/gpJd84KSw4KSo4KWHfCDgpIfgpLh84KS1IOCklXzgpKrgpLAgfOCksOCkpOCkvnzgpLAg4KSFfCDgpLjgpK184KSk4KSl4KS+fCDgpKTgpKV8IOCkkOCkuHzgpLDgpL4gfOCkquCkqOClh3zgpY3gpLDgpYB84KS/4KSV4KWNfOCkleCkv+Ckr3zgpL4g4KS1fOCkruCkvuCknHzgpIIg4KSUfOCksCDgpIl84KSm4KWN4KSnfOCkuOCkreClgHzgpLbgpY3gpK98IOCknOCkv3zgpL7gpKjgpYd84KS+4KSw4KWNfOCkvuCksOCkvnzgpKbgpY3gpLV8IOCkpuCljXzgpI/gpJfgpL584KS44KSu4KWNfOClh+CktiB84KS/4KSPIHzgpL7gpLUgfOCksCDgpKp8IOCkpuClh3zgpY3gpKTgpLB84KS+IOCklHzgpL7gpLDgpYt84KSv4KWL4KSCfOCkquCksOCkvnzgpKrgpYLgpLB84KSa4KS/4KSkfOCljeCkpyB84KSw4KWC4KSqfCDgpLDgpYJ8IOCkuOClgXwg4KSy4KS/fOCkpCDgpJV84KWLIOCkqnzgpIIg4KS4fOClhyDgpLJ84KS24KS/4KSVfCDgpLbgpL984KS14KS+4KS5fOClhyDgpJR84KSc4KWLIHzgpLDgpL7gpKd84KSc4KS/4KS4fOClguCksOCljXzgpYAg4KStfOClguCkqiB84KWL4KSX4KS+fOCkuOCljeCkpXzgpLDgpYDgpK984KSk4KS/4KSVfOCljeCksCB84KWkIOCkh3zgpIfgpLggfCDgpIngpKh84KSy4KWHIHzgpYcg4KSufOCksuCkv+Ckj3zgpK4g4KSVfOCkleCkpOCkvnzgpYcg4KSvfCDgpJzgpYt84KSoIOCkrnzgpIXgpKrgpLB8IOCkquClgnzgpYsg4KSVfOCkviDgpIl84KS+4KS5IHzgpKjgpYLgpKh84KS+4KSo4KWCfOCkl+ClgCB84KSm4KWAIHzgpL7gpLDgpYB84KSCIOCkrnzgpaQg4KSVfOCkpOCksOCljXzgpYAg4KSwfOCktiDgpJV84KSq4KSw4KS/fOCkuOCljeCkpHzgpYvgpIggfOCkleCli+CkiHzgpLDgpY3gpK984KWAIOCkhXzgpLngpL/gpKR84KSt4KS+4KS1fCDgpK3gpL584KSk4KS+4KSTfOCkvuCkuCB84KS44KS+4KSufOCkteCkv+CklXzgpLXgpL/gpLV84KSu4KWN4KSufCDgpLjgpJV84KSV4KSwIHzgpL7gpKjgpL584KSnIOCklXzgpKjgpL/gpJV84KSvIOCklXzgpIngpLjgpJV84KSV4KWD4KSkfCDgpZjgpL584KSoIOCkuHzgpJzgpYDgpLV84KWN4KSv4KS+fOCksOCkleCkvnzgpY3gpLDgpJV84KS+4KScIHzgpKjgpY3gpK984KWN4KSuIHzgpLDgpY3gpKN84KWYIOCkuXzgpLngpZggfCDgpLngpZh84KWAIOCkrnzgpJzgpL/gpJV84KS+4KSc4KS/fOCkvuCkruCkvnzgpJUg4KSUfOCkruCkv+CksnzgpYfgpKjgpYd84KSy4KWH4KSofCDgpLLgpYd84KSv4KWHIHzgpYsg4KSFfOClhyDgpJx84KSw4KS/4KS1fOCkruCkryB84KS44KSu4KSvfOCkteCktuCljXzgpIbgpLXgpLZ8IOCkhuCktXzgpJDgpLjgpYB84KS+4KSnIHzgpLAg4KSmfOCksOCljeCktXzgpLjgpL7gpLB84KSqIOCkuHzgpKzgpKjgpY18IOCkuOCkuXzgpL/gpKfgpL584KS14KS/4KSnfOClgCDgpKh84KWC4KSoIHzgpZjgpL7gpKgnLFxuICAgIG1hcjogJ+CljeCkr+CkvnzgpK/gpL4gfOCkpOCljeCkr3zgpK/gpL7gpJp84KSa4KS+IHzgpKPgpY3gpK984KS+4KSa4KS+fCDgpLUgfOCkleCkvuCksHzgpKrgpY3gpLB8IOCkquCljXzgpL/gpJXgpL584KSn4KS/4KSVfOCkvuCksCB8IOCkheCkp3zgpIXgpKfgpL984KSa4KWN4KSvfOCkhuCkueClh3wg4KSG4KS5fOCkviDgpIV84KS54KWHIHzgpL4g4KSVfOCkvuCkuCB84KS14KS+IHzgpY3gpK/gpYd84KWN4KSw4KSkfCDgpLjgpY184KSk4KS+IHzgpL4g4KS4fCDgpIXgpLh8IOCkleCksHzgpLjgpY3gpLV8IOCkleCkvnzgpLLgpY3gpK984KSw4KSk4KWNfOCkvuCkueCkv3zgpJXgpYvgpKN8IOCkleCli3zgpL/gpJUgfOCkr+Clh+CklXzgpY3gpLXgpL584KS+IOCktXwg4KSk4KWNfOCksCDgpIZ84KWN4KSvIHzgpKTgpY3gpLB84KWH4KSV4KS+fOCkleCljeCkt3zgpL4g4KSofCDgpLjgpIJ84KS+4KSu4KS+fOCkvuCkmuCljXzgpILgpLXgpL584KS/4KSC4KS1fOCkleCkv+Ckgnwg4KSV4KS/fOCkvuCkpCB84KS34KWN4KSffOCkleCkvuCkuHwg4KSv4KS+fOCkr+CkvuCkgnzgpL7gpILgpJp84KSw4KWN4KSvfOCkruCkv+Cks3wg4KSu4KS/fCDgpLjgpL584KS14KWN4KSvfOCli+Cko+CkpHzgpKjgpYcgfOClhyDgpKp84KSV4KS+4KSufCDgpLjgpK584KSC4KSk4KWNfOCkr+ClhyB8IOCksOCkvnzgpLjgpK7gpL584KSk4KSC4KSkfOCkleCksOCko3zgpL4g4KSGfOClhyDgpJV84KS54KS/IHzgpYcg4KS4fOCkqOCkviB84KS/4KSz4KSjfOClguCkqCB84KS+IOCkqnzgpJ/gpY3gpLB84KWN4KSf4KWNfOCkvuCkt+CljXzgpLDgpL7gpLd84KWA4KSvIHzgpLUg4KS4fOCkleCljeCkpHzgpK7gpL7gpKh84KSw4KWN4KS1fCDgpIbgpKp84KSz4KSj4KWNfOCljeCksOCljXzgpL7gpKTgpIJ84KS14KS+4KSkfOCkmuClhyB8IOCkteCkv3zgpY3gpLfgpKN84KSw4KSj4KWNfCDgpKbgpYd8IOCkteCljXzgpIbgpKrgpLJ84KS54KWAIHzgpL7gpLDgpY184KSo4KSv4KWHfCDgpKjgpK984KSu4KS+IHzgpK/gpL7gpLh8IOCknOCkvnzgpLLgpYfgpLJ8IOCkqOCkv3zgpYcg4KSFfCDgpKrgpL584KS+IOCkrnzgpLLgpYcgfOCkvuCkueClgHzgpKzgpILgpKd84KWHIOCktXzgpY3gpK/gpJV8IOCkruCkvnzgpLbgpL/gpJV8IOCktuCkv3zgpKbgpYfgpLZ84KS+IOCkpnzgpK7gpL7gpJx84KWN4KSw4KWAfOCksuClgCB84KS+4KSoIHzgpL7gpILgpKh84KSq4KSy4KWNfCDgpLngpYt84KS+IOCkuXzgpLfgpKMgfOCknOClhyB84KS/4KSc4KWHfOCkueCkv+CknHzgpKrgpL7gpLl84KS+4KSw4KS+fOCkr+CkvuCkpHzgpLjgpLDgpY18IOCkuOCksHzgpLDgpL7gpIJ84KSF4KS44KSyfOCkguCkrOCkgnzgpLjgpILgpKx84KS/4KSV4KWNfOClgCDgpKp84KSC4KSa4KWNfOCksOCkleCljXzgpKPgpKTgpY18IOCkhuCko3zgpLLgpL4gfOCkuOCljeCkpXzgpLDgpYDgpK984KWA4KSkIHzgpILgpKjgpL584KSkIOCktXzgpY3gpLUgfOCklSDgpLV84KSj4KWHIHzgpL7gpJrgpYd84KSoIOCklXzgpKQg4KSVfOCksOCkpOCkvnzgpY3gpLDgpL584KSv4KS+4KS5fOCljeCkpCB84KSa4KWAIHzgpK8g4KSVfOCkpuCljeCkp3zgpY3gpLXgpKR84KSv4KSV4KWNfOCko+CkvyB84KSG4KSj4KS/fOCkuCDgpLh84KSC4KSn4KS+fOCklSDgpLh84KSa4KWN4KSbfOCkryDgpIV84KSkIOCkuHzgpYDgpKjgpYd84KWL4KSj4KS+fOCkleCksOCkpHzgpKTgpY3gpLV84KWA4KSyIHzgpYAg4KSFfOCkuOCkvuCksHzgpLAg4KS1fOCkreCkvuCktXzgpLUg4KSkfOCkpeCkteCkvnzgpIXgpKXgpLV8IOCkheCkpXzgpYcg4KSkfOClhyDgpJx84KSv4KS+4KSvfOCkguCkmuCkvnzgpYfgpLLgpY184KS+4KSo4KWHfOClh+Cko+CljXzgpJUg4KSGfOCkleCljeCklXzgpLngpJXgpY18IOCkueCklXzgpKMg4KSufOCkguCksOCklXzgpLjgpILgpLB84KSo4KWN4KSvfOCkvuCkr+CkpnzgpL4g4KSkfOCkpCDgpIZ8IOCkieCkqnzgpLXgpLjgpY184KS/4KS14KS+fOClh+CktuCkvnzgpLjgpL7gpK584KWHIOCkr3zgpYcg4KSGfOClgCDgpLV84KS1IOCkrnzgpKTgpYDgpKh84KS1IOCkhnzgpKfgpY3gpK98IOCkheCktnzgpKfgpL7gpKR84KSV4KWD4KSkfOCljeCklSB84KSm4KWN4KSvfOCkv+CkpCB84KS44KSy4KWHfOClh+CktiB84KSk4KWLIHzgpYfgpLIgfOCkpOClgCB84KWN4KSk4KWAfOCkheCkuOClh3zgpIfgpKTgpLB8IOCkh+CkpHzgpLjgpY3gpKR84KSw4KWN4KSjfOCkviDgpKx84KWH4KSy4KWHfCDgpJXgpYd84KS54KWA4KSwfOCknOCkvuCkuXzgpL4g4KScfOClh+CkpCB84KWC4KSw4KWNfOCkquClguCksHzgpYfgpJogfCDgpLXgpL584KS+4KSc4KS+fOClgCDgpLh84KS24KS+IHzgpK8g4KS1fCDgpKjgpY184KSv4KS+4KS1fOCkpuCljeCkpnzgpY3gpKcgfOCksOClguCkqHzgpK/gpKbgpY184KSV4KS+4KSvfOCkviDgpLZ84KSX4KSj4KWNfOCklSDgpJV84KSw4KS+4KSnfCDgpLbgpL584KSv4KSk4KWNfOCksiDgpIV84KWN4KSv4KS1fOClgCDgpJV84KS+4KS1IHzgpL4g4KSvfOCkpOCljeCkpHzgpJzgpL/gpJV84KS+4KSc4KS/fOCksOCko+Ckvnwg4KSn4KSwfOCkviDgpKd84KSt4KWH4KSmfCDgpKzgpL584KSw4KSV4KS+fOCljeCksOCklXzgpJXgpYfgpLJ84KS/IOCktXzgpL/gpLfgpY184KSk4KWA4KSyfOCkr+Cli+Ckl3zgpLjgpL7gpKd84KS+4KSC4KSkfOCkteCkv+CktXzgpLbgpY3gpLB8IOCkp+Clh3wg4KSu4KWBfOCkteCkpOCkgycsXG4gICAgbWFpOiAn4KS+4KSVIHzgpKrgpY3gpLB84KSV4KS+4KSwfCDgpKrgpY184KS+4KSwIHzgpL/gpJXgpL584KWN4KSv4KSVfOCkp+Ckv+CklXzgpJUg4KSFfOCljeCksOCkpHzgpY3gpKTgpL984KS14KWN4KSvfCDgpIXgpKd84KWH4KSBIHzgpIXgpKfgpL984KS/4KSVIHwg4KS14KWNfOCkhsq8IHwg4KSGyrx84KSV4KWN4KSkfOCkr+CkleCljXzgpKTgpL/gpJV84KSV4KWH4KSBfOCklSDgpLV84KSs4KS+4KSVfOCklSDgpLh84KSb4KWI4KSVfCDgpJvgpYh84KSk4KWN4KSvfOCkruClhyB84KWH4KSVIHwg4KS44KSufOCkleCljeCkt3zgpLngpL8gfOCksOCkpOCljXzgpLAg4KSbfOCkr+Clh+CklXzgpY3gpK/gpYd84KSo4KWN4KSkfOCkteCkviB84KS/4KSV4KWHfOCkleClpCB84KWI4KSV4KWkfOClpCDgpKp8IOCkheCkqnwg4KS44KWNfCDgpLXgpL98IOCknOCkvnzgpL/gpKQgfOCkuOCkgSB8IOCkueCli3zgpJXgpYvgpKh8IOCkleCli3zgpKTgpY3gpLB84KS44KWN4KS1fCDgpLXgpL584KSVIOCkhnzgpLfgpY3gpJ98IOCkleCksHzgpIXgpKrgpKh84KSu4KS+4KSofCDgpJXgpL58IOCkheCkqHzgpKTgpL8gfOCljeCkpOCljXzgpKjgpYsgfOCkqOCkueCkv3wg4KSq4KSwfOCkn+CljeCksHzgpY3gpK8gfCDgpI/gpLl84KS/IOCklXzgpY3gpJ/gpY184KS+4KS34KWNfOCksOCkvuCkt3wg4KSw4KS+fOCkuOCkruCkvnzgpYvgpKjgpYt84KSyIOCknHwg4KSo4KS5fOCkpOCkvuCklXzgpL7gpLDgpY184KSq4KSoIHzgpKTgpKjgpY184KS14KSk4KSofOCljeCkteCkpHzgpY3gpLfgpL58IOCkleCkj3wg4KS44KS+fOCljeCksOClgHwg4KSo4KS/fOCkviDgpIZ84KS/4KS14KS+fCDgpLjgpIJ8IOCkpuClh3zgpJzgpL7gpI984KWA4KSvIHzgpJXgpLDgpKx84KSl4KS+IHzgpI/gpKzgpL584KS+IOCkqnzgpKjgpL4gfOCljeCkteCkvnzgpKbgpYfgpLZ84KSk4KWkIHzgpLDgpJUgfOCklSDgpLl84KSBIOCkhXwg4KS44KStfCDgpIYgfOCkpCDgpJV84KSa4KS/4KSkfOCljeCkpCB84KS14KS+4KSwfOCkpOCkviB84KS+4KSw4KSVfOCkruCkvuCknHzgpL4g4KS4fOCksOClgOCkr3zgpKjgpY3gpK984KSw4KSk4KS+fOCkvuCkqCB84KWN4KSw4KS+fOCljeCkr+CkvnzgpLDgpJXgpY184KS+4KSw4KSjfOCkquCksOCkv3zgpI/gpLIgfOCkleCkj+CksnzgpIXgpKjgpY184KSw4KSs4KS+fOCklSDgpKp84KST4KSwIHzgpIbgpJPgpLB8IOCkhuCkk3zgpIXgpJvgpL98IOCkheCkm3zgpL/gpLDgpY184KS+4KSo4KWNfOCkqOCklSB84KS54KWL4KSPfOCkleCksCB84KSn4KS+4KSwfOCkuOCljeCkpXzgpL4g4KSFfOCkv+CkruClh3zgpLAg4KSGfOCkj+CkueCkv3wg4KSP4KSVfOClhyDgpLh84KSk4KSl4KS+fCDgpKTgpKV8IOCkruCkvnzgpL/gpJXgpY184KS24KS/4KSVfCDgpLbgpL984KSq4KWN4KSkfOCksOCljeCktXzgpKjgpL/gpLB84KSa4KWN4KSbfOCksOCljeCkr3zgpIEg4KS4fOCklSDgpJV84KS54KWLIHzgpL7gpLngpL984KSP4KSk4KWkfOCksCDgpKp84KS+4KSu4KS+fOCkuOCkvuCkrnzgpLfgpL4gfMq8IOCkuHzgpIEg4KSPfOCliOCklSB84KSm4KWN4KSnfOCksCDgpIV84KSVIOCknHzgpLjgpY3gpKR84KS+4KSq4KWNfOCkgSDgpJV8IOCkuOCklXzgpK/gpJUgfOCkleCkvuCkqHzgpLngpKggfOCkj+CkueCkqHzgpYfgpLIgfOCli+Ckj+CkpHzgpKQg4KSGfOCkviDgpLV84KWkIOCklXzgpY3gpKTgpLB84KS+4KSP4KSkfOCljeCksOCklXzgpLngpYEgfOCklSDgpIl84KSq4KWC4KSwfOCkteCkv+CktXzKvCDgpIV84KSb4KS/IHwg4KSy4KWHfOCkqCDgpKp84KS+4KS4IHzgpLDgpL7gpKp84KSn4KSVIHzgpKrgpI/gpKx8IOCkquCkj3zgpLDgpL4gfOCkr+CkpOCkvnzgpLDgpYLgpKp84KSoIOCktXwg4KSV4KWHfOCkt+CkvuCklXzgpK8g4KSqfOCkpCDgpLl84KSc4KS+4KS5fCDgpJMgfOCkreCkvuCktXzgpKrgpLAgfOCkpeCkteCkvnzgpIXgpKXgpLV8IOCkheCkpXzgpLjgpK7gpY184KSc4KS/4KSVfOCkvuCknOCkv3zgpYLgpLDgpY184KSw4KSk4KS/fCDgpKbgpYt84KS44KSt4KSVfOClpCDgpLh8IOCknOCkqHzgpLjgpK0gfOCkrOCkvuCkp3zgpIXgpKjgpYF84KS/4KS44KSBfCDgpLjgpLl84KSBIOCktXzgpI8g4KS4fOCksOCkv+CktXzgpKTgpYEgfOClh+CkpOClgXzgpLngpYfgpKR8IOCkueClh3zgpL7gpKcgfOClh+CkrOCkvnzgpKgg4KS4fOCkv+Ckt+CljXzgpLDgpL7gpKd8IOCkheCktXzgpL/gpKTgpY184KS14KS+4KS4fOCkmuCkvuCksHwg4KSJ4KSafOCkvuCksOCkvnzgpKgg4KSVfOCkteCklSB84KS+IOCklXzgpKjgpYLgpKh84KS+4KSo4KWCfOCkj+CkpCB84KSw4KWAIHzgpYfgpJMgfOCkleClh+Ckk3zgpLDgpKMgfOCljeCksOCkuHzgpL8g4KSmfOCkkyDgpLV8IOCkreClh3zgpKjgpLngpYF84KWL4KSo4KS5fOCljeCkpeCkv3zgpKrgpKTgpY184KSu4KWN4KSqfOCksOCkvuCknHwg4KSt4KS+fOCkueCkv+Ckrnwg4KS54KSVfOCkvuCkruClh3zgpY3gpKMgfOCksOCljeCko3zgpLngpL7gpLB84KS/IOCkuHzgpJUg4KSmfOCkqCDgpIV84KSkIOCkhXzgpLLgpYfgpKx8IOCkheCkrXzgpL/gpLbgpY184KSc4KSVIHzgpL7gpJzgpJV84KSoIOCkhnzgpLXgpL7gpLl84KSV4KS+4KScfOCktuCljeCkr3zgpLXgpLjgpY184KST4KS54KS/fCDgpJPgpLl84KSv4KWL4KSXfOClpCDgpI984KSV4KSPIHzgpYcg4KSTfOCkheCkquCksCcsXG4gICAgYmhvOiAnIOCkleClh3zgpJXgpYcgfOClhyDgpJV84KS+4KSwIHzgpJXgpL7gpLB84KS/4KSV4KS+fOCkp+Ckv+CklXzgpIXgpKfgpL98IOCkheCkp3zgpJPgpLAgfOCkhuCkk+CksHwg4KSG4KSTfOClhyDgpIV84KWHIOCkuHzgpL4g4KSVfCDgpLjgpIJ84KS/4KSVIHzgpLAg4KS5fOCkviDgpLh8IOCkueCli3zgpLAg4KS4fOClh+CkgiB84KSu4KWH4KSCfCDgpK7gpYd8IOCkleCksHwg4KS44KWHfOCkqOCliyB84KSV4KWN4KS3fOCkuOClhyB8IOCkleCkvnzgpaQg4KS4fOCkluClhyB84KS+4KWkIHzgpLDgpL4gfCDgpLjgpK58IOCkuOCkrHzgpY3gpLDgpL58IOCkuOCklXzgpLAg4KSVfOCkqCDgpJV84KS14KWHIHzgpYzgpKjgpYt84KSV4KWM4KSofCDgpJXgpYx84KSa4KS+4KS5fCDgpJrgpL58IOCkrOCkvnzgpKrgpY3gpLB8IOCkquCljXzgpKXgpL4gfOCkvyDgpJV84KSk4KS/IHwg4KSc4KS+fCDgpLjgpL584KWHIOCkhnzgpKrgpKggfOCkleCksOClh3zgpKTgpL4gfOCkueCli+CklnzgpKQg4KSVfOClh+ClpCB84KWHIOCkrHzgpKTgpKXgpL58IOCkpOCkpXwg4KSG4KSqfOCkleClh+CksnzgpLjgpJXgpYd8IOCkuOCljXzgpLDgpYcgfOCkuOCkrOCkuXzgpJXgpLAgfOCkhuCkquCkqHzgpYcg4KSTfOCknOCkviB8IOCkquCksHzgpLfgpY3gpJ98IOCksOCkvnzgpKjgpL4gfOCkueCkteClh3wg4KS54KS1fOCksuCkviB84KWH4KSy4KS+fOCkrOCkueCkv3wg4KST4KSVfOCli+CkluClh3zgpLAg4KSsfOCkueClpCB8IOCkueClpHzgpKgg4KS4fOCkvuCkt+CljXzgpLDgpL7gpLd84KWN4KSkIHwg4KSU4KSwfOClhyDgpJp84KWkIOCklXzgpLjgpILgpJd84KSwIOCkhnzgpJ/gpY3gpLB84KWN4KSf4KWNfOCkt+CkviB84KSu4KS+4KSofOCkviDgpIZ84KSCIOCklXzgpL4g4KSqfOCljeCkt+CkvnzgpLDgpJXgpY184KS54KWHIHzgpL7gpLngpYd84KS+4KSk4KS/fOCkvuCkteClh3wg4KSc4KWHfOCkueClgCB84KST4KSV4KSwfOCkruCkv+CksnzgpL/gpKQgfOCliyDgpLh84KSyIOCknHzgpIfgpJbgpYd84KSo4KSH4KSWfCDgpKjgpId84KSk4KWN4KSwfOCkruCkvuCknHwg4KSs4KS/fOCkteClh+ClpHzgpYcg4KScfOCklSDgpLh84KS/4KSCIHzgpLngpL/gpIJ84KSV4KSw4KS+fOCklOCksCB84KWHIOCkrnzgpLjgpK7gpL584KS54KWBIHwg4KSTIHzgpKrgpLAgfOClhyDgpKh84KS44KWN4KSlfOCksOClgOCkr3zgpY3gpLDgpYB84KSy4KS+4KWkfOCkvuCknCB84KS+4KSoIHzgpJXgpL7gpKh84KWHIOCkpHzgpL/gpLAgfOCkpOCkv+CksHzgpJbgpL7gpKR8IOCkluCkvnzgpYcg4KSJfOCkqOClguCkqHzgpL7gpKjgpYJ84KS+4KSuIHwg4KS44KWBfCDgpKbgpYd84KWAIOCklXwg4KSu4KS+fOCksCDgpK584KSq4KWN4KSkfOCkv+Ckr+CkvnzgpL7gpLngpYB84KSs4KS+4KWkfOCkr+Cli+Ckl3zgpYAg4KS4fOCksiDgpLl84KWC4KSoIHzgpLXgpY3gpK984KWBIOCklXzgpI8g4KSVfOClhyDgpLV84KSC4KSk4KWNfOCkuOCljeCktXzgpJXgpYfgpLl84KWA4KSvIHzgpJbgpLIgfOCkuOCkvuCkrnzgpK/gpKTgpL584KSk4KS/4KSVfOClhyDgpLl84KS+4KSq4KWNfOCksOCkvuCkqnzgpLAg4KSqfOCksCDgpIV8IOCksuCli3wg4KS44KS5fOCknOClhyB84KWL4KSXIHzgpK4g4KSVfOCksuClhyB8IOCkqOCkv3zgpYfgpJXgpLB84KS+IOCkuXzgpKrgpYLgpLB84KSwIOCkqHzgpYfgpLngpYF84KWN4KSvIHzgpK/gpL4gfCDgpK/gpL584KSm4KWH4KS2fOCkpuClgCB84KS+IOCkrnzgpL7gpLUgfCDgpKbgpYt84KWHIOCkpnwg4KSq4KS+fOCkueCkvyB84KS/4KSV4KWNfOCktuCkv+CklXwg4KS24KS/fOCkrOCkviB84KS/4KSyIHwg4KSJ4KSqfOCljeCksOCkpHwg4KS14KS/fCDgpLngpYB8IOCksuClh3zgpLDgpYsgfOClhyDgpJZ84KSg4KSoIHzgpJfgpKDgpKh84KSC4KSX4KSgfCDgpK7gpL984KS34KSjIHzgpY3gpLfgpKN84KSC4KSw4KSVfOCkuOCkguCksHwg4KSG4KSmfCDgpI/gpJV84KSo4KWHIHwg4KSF4KSqfOCkpOCkguCkpHzgpLXgpKTgpIJ84KWN4KS14KSkfOCljeCkpOCksHzgpY3gpK/gpL584KWH4KS2IHzgpL7gpKbgpYB84KWN4KSk4KS/fOCknOCkv+CklXzgpL7gpJzgpL984KSVIOCkhnzgpY3gpK4gfOCkmuCkvuCksHwg4KSJ4KSafCDgpLbgpL584KSw4KWAIHzgpL7gpLkgfOCkr+CkvuCkuXzgpKzgpL/gpK984KSa4KS/4KSkfOCkleCljeCkpHzgpKrgpK/gpYt84KSJ4KSq4KSvfOCksOCkpOCkvnzgpLAg4KS1fOCkqCDgpK584KSy4KWL4KSXfOCkuSDgpJV84KSoIOCkqnzgpJXgpL7gpK58IOCkquClgnwg4KSHIHzgpIbgpKbgpL984KSI4KSyIHwg4KSV4KSIfCDgpLXgpY184KSu4KWAIHzgpYHgpLDgpJV84KS44KWB4KSwfCDgpJzgpYB84KSn4KS+4KSwfOCkryDgpLh84KSk4KSw4KWNfOCkreClhyB84KS44KSt4KWHfCDgpLjgpK184KSt4KS+4KS1fOCljeCkpeCkv3zgpL7gpK7gpL584KS44KSwIHzgpLDgpY3gpK58IOCkleCli3wg4KSs4KWHfOCli+CkuOCksHzgpKbgpYvgpLh84KSjIOCklXzgpL7gpLggfOClhyDgpKp84KSc4KS+4KSmfOCkhuCknOCkvnwg4KSG4KScfOCkieCkmuCkv3zgpJcg4KSVfOCkvuCksOClgHwg4KSc4KSwfOCkl+ClhyB84KScIOCklXzgpYAg4KSsfOCkuOCkqCB84KS54KWLIHzgpL4g4KSkJyxcbiAgICBucGk6ICfgpJXgpYsgfOCkqOClhyB8IOCksCB84KS+4KSwIHzgpJXgpY3gpKR84KSV4KS+4KSwfOCkquCljeCksHwg4KSq4KWNfOCljeCkr+CklXzgpLXgpY3gpK98IOCkl+CksHzgpL/gpJXgpL58IOCkteCljXzgpY3gpLDgpKR84KSn4KS/4KSVfOCljeCkpOCkv3zgpK/gpJXgpY184KSF4KSn4KS/fCDgpIXgpKd84KS+4KSIIHzgpK7gpL4gfOCksuCkvuCkiHzgpKTgpY3gpK984KS/4KSVIHwg4KWkIHwg4KS44KSufOCkteCkviB8IOCkteCkvnzgpJUg4KS1fOCljeCkqOClh3zgpLDgpY3gpKh84KSX4KSw4KWNfOCkqOCljeCkpHzgpJsg4KWkfOCkpOCkv+CksnzgpLDgpKTgpY184KSk4KWN4KSwfOClh+CklSB84KSv4KWH4KSVfOCljeCkr+Clh3zgpL/gpLLgpL584KSwIOCkuHzgpYsg4KS4fCDgpLjgpY184KSu4KS+4KSofOCkleCljeCkt3wg4KS14KS/fOCkueClgeCkqHzgpL4g4KS4fCDgpLngpYF8IOCkmyB84KSwIOCkm3zgpY3gpKTgpY184KS44KSu4KS+fOCkuOCljeCktXzgpaQg4KSqfCDgpLjgpIJ84KSo4KWH4KSbfOClgeCkqOClh3zgpLngpLDgpYF84KSk4KSo4KWNfOCkteCkpOCkqHzgpYcg4KSFfOCkv+CkqOClh3zgpYsg4KSFfOCljeCkteCkpHwg4KSV4KS+fOClhyDgpJt84KSX4KSw4KS/fCDgpLDgpL584KWN4KSwIHzgpKTgpL8gfOCkvuCkleCli3wg4KSV4KWBfOCkt+CljeCkn3zgpKjgpL4gfOCkuOCljeCkpHzgpJUg4KS4fOClgeCkqOCliHzgpJXgpYHgpKh84KSf4KWN4KSwfOCksuClhyB8IOCkqOCkv3zgpL7gpKggfOCkm+CliOCkqHwg4KSb4KWIfOCljeCkn+CljXzgpL7gpLfgpY184KSw4KS+4KS3fOCkpOCkv+CklXzgpJvgpaQgfOCkvuCksOCljXzgpKTgpL4gfOCkv+CkpCB84KSo4KWIIHzgpL4g4KSFfCDgpLjgpL584KS+IOCktXzgpLDgpYEgfCDgpK7gpL58IOCkheCkqHzgpL4g4KSwfOCksOCkpOCkvnzgpLAg4KSwfOCkueCksOClgnzgpYfgpJsgfOCkviDgpKp84KSw4KSV4KWNfOCljeCkpCB8IOCkquCksHzgpKXgpL4gfCDgpLLgpL584KSq4KSw4KS/fOCkpuClh+CktnzgpLjgpJXgpYt8IOCkr+CkuHzgpK7gpL7gpJx84KS+4KSu4KS+fOCljeCksOCkvnzgpL/gpLXgpL584KS+4KS54KSwfOCliyDgpKp84KWN4KSvIHzgpLXgpL7gpLB84KSoIOCkuHzgpaQg4KSVfOCkqOCkvyB84KWN4KS34KS+fCDgpKTgpY184KSm4KWN4KSnfOCksCDgpLl84KSk4KSl4KS+fCDgpKTgpKV84KSv4KS44KWNfOCljeCkr+CkuHzgpLDgpYAgfOCksCDgpLV84KSq4KSo4KS/fOCksOCkv+CkqHzgpILgpLDgpJV84KS44KSC4KSwfOCkreCkvuCktXzgpYgg4KS1fOCkuOCkrOCliHwg4KS44KSsfCDgpLbgpL98IOCkuOCkuXzgpKTgpL7gpJV84KWHIOCksHzgpKQg4KSwfOCksuCkvuCkl3wg4KS44KWBfOCljeCkt+Cko3zgpKbgpY3gpKZ8IOCkheCkqnzgpYjgpKggfOCliyDgpLV84KS/4KSV4KWNfOCkvuCktSB84KSn4KS+4KSwfOCljeCkr+CkvnzgpY3gpLDgpL984KS+IOCkrXzgpI/gpJXgpYt84KSwIOCkrnzgpKgg4KSFfOCliyDgpLJ8IOCkieCkuHzgpLbgpL/gpJV84KS+4KSk4KWNfOCkuOCljeCkpXzgpLXgpL7gpLl84KWC4KSw4KWNfOCktuCljeCkr3zgpL/gpKTgpY184KSw4KSV4KWLfOCkvuCksOCklXzgpYHgpKbgpY184KSk4KWLIHzgpY3gpKTgpYt84KS+4KSJ4KSofOCkleCkvuCkqHzgpL/gpI/gpJV84KS+IOCkqHwg4KSq4KSofOCkqOClpCB84KWI4KSo4KWkfOCkleCkviB84KWH4KSb4KWkfCDgpK3gpYd84KSw4KWN4KSvfOCkuOCkruCljXzgpKTgpY3gpKp84KS44KS+4KSufOCksOCkv+Ckr3zgpJrgpL7gpLB84KSo4KS/4KScfOClgeCkqCB84KSX4KS/IHzgpL7gpJfgpL984KSJ4KS44KSVfCDgpK7gpKR8IOCkheCkrXzgpKrgpYLgpLB84KSwIOCkpHwg4KS44KSVfOCkuOCkvuCksHzgpLDgpL7gpKd84KSq4KSw4KS+fOCkheCkquCksHzgpYHgpJXgpY184KSc4KSV4KWLfCDgpIngpKp84KSw4KS+IHzgpL7gpLDgpL584KWN4KS14KS+fOCkteCkv+Ckp3zgpY3gpKggfOCkviDgpKR84KSoIOCkl3zgpKPgpJXgpYt8IOCkquCkvnwg4KSm4KS/fOCklSDgpLB84KSwIOCkqnzgpIXgpKjgpY184KSt4KWH4KSmfOCkvuCksOCkrnzgpYsg4KSGfCDgpIXgpLB84KSc4KS/4KSVfOCkvuCknOCkv3zgpL/gpK8gfOCkt+CkviB84KS+4KSfIHzgpKzgpL7gpJ98IOCkrOCkvnzgpL8g4KSwfCDgpJvgpaR84KSk4KWN4KS1fOCkpCDgpLh84KSw4KWCIHzgpJsg4KSwfOCksOCkleCkvnzgpLXgpL/gpJV84KSwIOCkiXzgpYvgpJcgfOCljeCkpuClh3zgpLDgpL/gpLV84KS44KSV4KS/fOCliCDgpKp84KSw4KSk4KS/fOCkheCkqOClgXwg4KSG4KS1fOCkr+ClgeCklXzgpL4g4KSXfOCkqOCkruCkvnzgpK/gpYvgpJd84KSXIOCkl3zgpJUg4KSFfOCkpuCljeCktXzgpY3gpKcgfOCksOClgeCkpnwg4KSs4KS/fOClpCDgpLh84KSJ4KSo4KWHfOCkvuCkqOCljXzgpL4g4KSufOCkv+CkleCli3zgpLDgpY3gpKZ84KS+4KSw4KWAfOCljeCkpOCksHzgpYsg4KS5fOCkueCkv+CkpHwg4KSm4KWHfOCksOCkv+CklXzgpL4g4KSVfCDgpIbgpKd84KSw4KS+4KScfOCksOCljeCkrnzgpY3gpKMgfOCksOCljeCko3zgpL8g4KS1fOCljeCkr+CktXzgpLXgpL/gpJp84KSs4KWIIHzgpLjgpLngpL984KSw4KWL4KScfOCksOCljeCkuHzgpIgg4KSJfOCljeCkqiB84KSw4KS+4KSkfOCkqOCkv+CklXzgpK7gpL/gpJV84KSa4KWN4KSbfOCljeCkpeCkvnzgpLXgpL/gpLV84KSV4KSk4KS+fOCkheCkreCkv3zgpY3gpKfgpL4nLFxuICAgIG1hZzogJyDgpJXgpYd84KSV4KWHIHzgpL7gpLAgfCDgpLngpIh84KSV4KS+4KSwfOCkiOClpCB84KS54KSI4KWkfOCkv+CkleCkvnzgpYcg4KSFfOCkp+Ckv+CklXzgpIXgpKfgpL98IOCkheCkp3zgpLAg4KS5fOClhyDgpJV84KSU4KSwIHwg4KSU4KSwfOCkviDgpJV84KWHIOCkuHzgpLjgpKwgfCDgpLjgpKx8IOCkleCksHzgpYfgpIIgfOCkpeCkviB84KSu4KWH4KSCfCDgpK7gpYd84KSk4KSl4KS+fCDgpKTgpKV84KS/4KSVIHwg4KS54KWLfCDgpLjgpK584KSV4KWN4KS3fOCkqOCkviB84KSsIOCklXzgpLAg4KS4fCDgpLjgpIJ84KS+IOCkuHzgpJXgpLAgfCDgpK3gpYB84KWkIOCkuHwg4KS44KS+fCDgpLjgpYd8IOCkleCkvnwg4KSF4KSqfOCljeCksOCkvnzgpKrgpY3gpLB8IOCkquCljXzgpLjgpYcgfOCkreClgCB8IOCkleCli3zgpKQg4KSVfCDgpKrgpLB84KSw4KS+IHzgpJUg4KS5fOCkquCkqCB84KSF4KSq4KSofCDgpLjgpJV84KSv4KS+IHzgpKTgpL8gfOCksCDgpJV84KWAIOCklXwg4KSv4KS+fOCkleCksOClh3wg4KSc4KS+fOCksOClhyB8IOCkk+CklXzgpY3gpKQgfOCkuOCklSB84KSo4KWLIHzgpL7gpKggfOCkruCkvuCkqHzgpJPgpJXgpLB84KS+IOCkqnzgpKgg4KSVfOClh+CksiB8IOCkqOCkvnzgpaQg4KSVfOCksOCkleCljXwg4KS44KWNfOCkueClgCB84KS54KWL4KSPfCDgpI/gpJV84KSq4KSwIHzgpKbgpYAgfOCkn+CljeCksHzgpKTgpL4gfOCkteCljeCkr3zgpLngpIggfCDgpLbgpL584KWHIOCkiXwg4KSm4KWHfOCkpOCljeCksHzgpL7gpKbgpYB8IOCksOCkvnwg4KS54KWAfOCkleCkvuCkqHzgpL/gpKQgfOCkriDgpJV84KSyIOCknHzgpL7gpK4gfOClgCDgpLh84KWHIOCkrXzgpKgg4KS4fOCkruCkvuCknHzgpLfgpY3gpJ984KS34KS+IHwg4KSy4KWHfOCklSDgpLh84KSs4KWHIHzgpLXgpYcgfOCkvuCkteClh3zgpK7gpL/gpLJ84KSwIOCkrnzgpY3gpK8gfOCkviDgpLl84KSy4KS+IHzgpKrgpY3gpKR84KSo4KWC4KSofOCkvuCkqOClgnzgpJzgpL4gfOClh+CkleCksHzgpY3gpLfgpL584KWN4KSw4KSkfOCkguCkpOCljXzgpLAg4KSUfOCli+CkiCB84KSV4KWL4KSIfOCljeCkn+CljXzgpL7gpLfgpY184KSw4KS+4KS3fCDgpK7gpL584KSw4KWLIHwg4KSc4KWHfOCkleCksOCkvnzgpYvgpI8gfOCkvuCkquCljXzgpLDgpL7gpKp84KS44KSu4KS+fOClguCkqCB84KWLIOCkuHzgpLjgpY3gpLV84KWN4KSk4KS/fOCkuOCkvuCkrnzgpYvgpKjgpYt84KSV4KWL4KSofCDgpLXgpY184KSwIOCkhXzgpY3gpK4gfCDgpLXgpL98IOCkuOCkuXzgpYcg4KSufOCkleCljeCkpHzgpK/gpYvgpJd84KSwIOCktXzgpJXgpL7gpK584KSyIOCkuXwg4KSo4KS/fOCkpuClh+CktnzgpKrgpYLgpLB84KS14KS+4KSwfCDgpIcgfOCkguCksOCklXzgpLjgpILgpLB84KSPIOCklXzgpLAg4KSqfCDgpLjgpYF84KSk4KSC4KSkfOCkteCkpOCkgnzgpY3gpLXgpKR84KS+IOCkrnzgpLUg4KSVfOClhyDgpLV84KS+4KSlIHzgpLjgpL7gpKV8IOCkpuCli3zgpLngpYvgpKx8IOCkquCkvnzgpYsg4KSVfOClhyDgpKx84KWL4KSXIHwg4KSJ4KSqfOCkuOCljeCkpHzgpKrgpLDgpL984KSoIOCkqnzgpYcg4KSkfOCljeCkpOCksHzgpLLgpYfgpLJ84KWHIOCkk3zgpJrgpL7gpLl8IOCkmuCkvnzgpK8g4KSVfOCkteCkviB84KWH4KS2IHzgpK8g4KS4fOCkqCDgpLl84KS34KSjIHzgpL4g4KSsfOClpCDgpKR84KSP4KSVIHzgpI/gpLIgfOClgOCkryB84KSV4KWH4KSVfOClhyDgpLl84KSwIOCkhnzgpL8g4KSVfOCkuOCljeCkpXzgpJzgpL/gpJV84KS+4KSc4KS/fOCkvuCkruCkvnzgpLDgpYDgpK984KWN4KSw4KWAfOCkpOCkv+CklXzgpL7gpKTgpL98IOCkrOCkv3zgpJrgpL7gpLB84KWHIOCkhnzgpL7gpLggfCDgpIngpJp84KS+IOCkpHzgpK/gpJXgpY184KWN4KSv4KSVfOCkv+CksiB84KSu4KSvIHzgpLjgpK7gpK984KS24KS+4KSmfOCkquCkr+Cli3zgpIngpKrgpK984KWHIOCklnzgpLDgpL/gpLV8IOCkquClgnzgpYcg4KSyfOClhyDgpJp84KWM4KSo4KWLfOCkleCljOCkqHwg4KSV4KWMfOCkgiDgpJV84KS44KSC4KSXfOCkqCDgpKZ84KSCIOCkuHzgpKMg4KSqfOCljeCkt+Cko3zgpLAg4KSofOClhyDgpKh84KWLIOCkrXzgpJXgpLDgpYt84KS+IOCklHzgpLDgpKTgpL584KS+4KS1IHzgpK3gpL7gpLV84KSVIOCklHzgpLDgpY3gpK584KWL4KS44KSwfOCkpuCli+CkuHzgpKMg4KSVfOClhyDgpKp84KSoIOCklHzgpKwg4KS5fOCkv+CkleCljXzgpLbgpL/gpJV8IOCktuCkv3zgpL7gpKzgpYd84KSo4KS/4KSvfOCkmuCkv+CkpHzgpIngpJrgpL984KS/4KSk4KWNfOCklyDgpJV84KWH4KWkIHzgpKQg4KS4fOClgCDgpLZ84KSCIOCktnzgpI/gpJXgpLB84KWkIOCkj3zgpKTgpKggfCDgpJMgfOCksOClgCB84KWN4KSwIHzgpJzgpYcgfOCklSDgpJV8IOCkuOClgHzgpLjgpKggfOCkv+CkteCkvnwg4KSF4KSofOClguCksOCkvnwg4KSs4KSafOCkj+ClpCB8IOCkrOClh3zgpKQg4KS5fCDgpKTgpJV8IOCkruCkv3zgpKfgpL7gpLB84KSl4KS14KS+fOCkheCkpeCktXwg4KSF4KSlfOCkv+CksuCkvnzgpY3gpLXgpL584KS/IOCkrnwg4KSG4KSmfOCkqOClhyB84KSV4KSP4KSyfCDgpJXgpI984KWN4KSv4KS+J1xuICB9XG59XG4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IGBidWlsZC5qc2AuXG4vKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFJlZ0V4cD59ICovXG5leHBvcnQgY29uc3QgZXhwcmVzc2lvbnMgPSB7XG4gIGNtbjogL1tcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCRlxcdTRFMDAtXFx1OUZGRlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18XFx1RDgxQltcXHVERkUyXFx1REZFM1xcdURGRjBcXHVERkYxXXxbXFx1RDg0MC1cXHVEODY4XFx1RDg2QS1cXHVEODZDXFx1RDg2Ri1cXHVEODcyXFx1RDg3NC1cXHVEODc5XFx1RDg4MC1cXHVEODgzXFx1RDg4NS1cXHVEODg3XVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NjlbXFx1REMwMC1cXHVERURGXFx1REYwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzOVxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURcXHVEQzIwLVxcdURGRkZdfFxcdUQ4NzNbXFx1REMwMC1cXHVERUExXFx1REVCMC1cXHVERkZGXXxcXHVEODdBW1xcdURDMDAtXFx1REZFMF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdfFxcdUQ4ODRbXFx1REMwMC1cXHVERjRBXFx1REY1MC1cXHVERkZGXXxcXHVEODg4W1xcdURDMDAtXFx1REZBRl0vZyxcbiAgTGF0aW46XG4gICAgL1tBLVphLXpcXHUwMEFBXFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJCOFxcdTAyRTAtXFx1MDJFNFxcdTFEMDAtXFx1MUQyNVxcdTFEMkMtXFx1MUQ1Q1xcdTFENjItXFx1MUQ2NVxcdTFENkItXFx1MUQ3N1xcdTFENzktXFx1MURCRVxcdTFFMDAtXFx1MUVGRlxcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEyQVxcdTIxMkJcXHUyMTMyXFx1MjE0RVxcdTIxNjAtXFx1MjE4OFxcdTJDNjAtXFx1MkM3RlxcdUE3MjItXFx1QTc4N1xcdUE3OEItXFx1QTdDQVxcdUE3RDBcXHVBN0QxXFx1QTdEM1xcdUE3RDUtXFx1QTdEOVxcdUE3RjItXFx1QTdGRlxcdUFCMzAtXFx1QUI1QVxcdUFCNUMtXFx1QUI2NFxcdUFCNjYtXFx1QUI2OVxcdUZCMDAtXFx1RkIwNlxcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QV18XFx1RDgwMVtcXHVERjgwLVxcdURGODVcXHVERjg3LVxcdURGQjBcXHVERkIyLVxcdURGQkFdfFxcdUQ4MzdbXFx1REYwMC1cXHVERjFFXFx1REYyNS1cXHVERjJBXS9nLFxuICBDeXJpbGxpYzpcbiAgICAvW1xcdTA0MDAtXFx1MDQ4NFxcdTA0ODctXFx1MDUyRlxcdTFDODAtXFx1MUM4OFxcdTFEMkJcXHUxRDc4XFx1MkRFMC1cXHUyREZGXFx1QTY0MC1cXHVBNjlGXFx1RkUyRVxcdUZFMkZdfFxcdUQ4MzhbXFx1REMzMC1cXHVEQzZEXFx1REM4Rl0vZyxcbiAgQXJhYmljOlxuICAgIC9bXFx1MDYwMC1cXHUwNjA0XFx1MDYwNi1cXHUwNjBCXFx1MDYwRC1cXHUwNjFBXFx1MDYxQy1cXHUwNjFFXFx1MDYyMC1cXHUwNjNGXFx1MDY0MS1cXHUwNjRBXFx1MDY1Ni1cXHUwNjZGXFx1MDY3MS1cXHUwNkRDXFx1MDZERS1cXHUwNkZGXFx1MDc1MC1cXHUwNzdGXFx1MDg3MC1cXHUwODhFXFx1MDg5MFxcdTA4OTFcXHUwODk4LVxcdTA4RTFcXHUwOEUzLVxcdTA4RkZcXHVGQjUwLVxcdUZCQzJcXHVGQkQzLVxcdUZEM0RcXHVGRDQwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGRENGXFx1RkRGMC1cXHVGREZGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXXxcXHVEODAzW1xcdURFNjAtXFx1REU3RVxcdURFRkQtXFx1REVGRl18XFx1RDgzQltcXHVERTAwLVxcdURFMDNcXHVERTA1LVxcdURFMUZcXHVERTIxXFx1REUyMlxcdURFMjRcXHVERTI3XFx1REUyOS1cXHVERTMyXFx1REUzNC1cXHVERTM3XFx1REUzOVxcdURFM0JcXHVERTQyXFx1REU0N1xcdURFNDlcXHVERTRCXFx1REU0RC1cXHVERTRGXFx1REU1MVxcdURFNTJcXHVERTU0XFx1REU1N1xcdURFNTlcXHVERTVCXFx1REU1RFxcdURFNUZcXHVERTYxXFx1REU2MlxcdURFNjRcXHVERTY3LVxcdURFNkFcXHVERTZDLVxcdURFNzJcXHVERTc0LVxcdURFNzdcXHVERTc5LVxcdURFN0NcXHVERTdFXFx1REU4MC1cXHVERTg5XFx1REU4Qi1cXHVERTlCXFx1REVBMS1cXHVERUEzXFx1REVBNS1cXHVERUE5XFx1REVBQi1cXHVERUJCXFx1REVGMFxcdURFRjFdL2csXG4gIGJlbjogL1tcXHUwOTgwLVxcdTA5ODNcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJDLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRVxcdTA5RDdcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFM1xcdTA5RTYtXFx1MDlGRV0vZyxcbiAgRGV2YW5hZ2FyaTpcbiAgICAvW1xcdTA5MDAtXFx1MDk1MFxcdTA5NTUtXFx1MDk2M1xcdTA5NjYtXFx1MDk3RlxcdUE4RTAtXFx1QThGRl18XFx1RDgwNltcXHVERjAwLVxcdURGMDldL2csXG4gIGpwbjogL1tcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZdfFxcdUQ4MkNbXFx1REMwMS1cXHVERDFGXFx1REQzMlxcdURENTAtXFx1REQ1Ml18XFx1RDgzQ1xcdURFMDB8W1xcdTMwQTEtXFx1MzBGQVxcdTMwRkQtXFx1MzBGRlxcdTMxRjAtXFx1MzFGRlxcdTMyRDAtXFx1MzJGRVxcdTMzMDAtXFx1MzM1N1xcdUZGNjYtXFx1RkY2RlxcdUZGNzEtXFx1RkY5RF18XFx1RDgyQltcXHVERkYwLVxcdURGRjNcXHVERkY1LVxcdURGRkJcXHVERkZEXFx1REZGRV18XFx1RDgyQ1tcXHVEQzAwXFx1REQyMC1cXHVERDIyXFx1REQ1NVxcdURENjQtXFx1REQ2N118W1xcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZBRl0vZyxcbiAgamF2OiAvW1xcdUE5ODAtXFx1QTlDRFxcdUE5RDAtXFx1QTlEOVxcdUE5REVcXHVBOURGXS9nLFxuICBrb3I6IC9bXFx1MTEwMC1cXHUxMUZGXFx1MzAyRVxcdTMwMkZcXHUzMTMxLVxcdTMxOEVcXHUzMjAwLVxcdTMyMUVcXHUzMjYwLVxcdTMyN0VcXHVBOTYwLVxcdUE5N0NcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGRkEwLVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdL2csXG4gIHRlbDogL1tcXHUwQzAwLVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzlcXHUwQzNDLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNTgtXFx1MEM1QVxcdTBDNURcXHUwQzYwLVxcdTBDNjNcXHUwQzY2LVxcdTBDNkZcXHUwQzc3LVxcdTBDN0ZdL2csXG4gIHRhbTogL1tcXHUwQjgyXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkJFLVxcdTBCQzJcXHUwQkM2LVxcdTBCQzhcXHUwQkNBLVxcdTBCQ0RcXHUwQkQwXFx1MEJEN1xcdTBCRTYtXFx1MEJGQV18XFx1RDgwN1tcXHVERkMwLVxcdURGRjFcXHVERkZGXS9nLFxuICBndWo6IC9bXFx1MEE4MS1cXHUwQTgzXFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJDLVxcdTBBQzVcXHUwQUM3LVxcdTBBQzlcXHUwQUNCLVxcdTBBQ0RcXHUwQUQwXFx1MEFFMC1cXHUwQUUzXFx1MEFFNi1cXHUwQUYxXFx1MEFGOS1cXHUwQUZGXS9nLFxuICBrYW46IC9bXFx1MEM4MC1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCQy1cXHUwQ0M0XFx1MENDNi1cXHUwQ0M4XFx1MENDQS1cXHUwQ0NEXFx1MENENVxcdTBDRDZcXHUwQ0REXFx1MENERVxcdTBDRTAtXFx1MENFM1xcdTBDRTYtXFx1MENFRlxcdTBDRjEtXFx1MENGM10vZyxcbiAgbWFsOiAvW1xcdTBEMDAtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQ0NFxcdTBENDYtXFx1MEQ0OFxcdTBENEEtXFx1MEQ0RlxcdTBENTQtXFx1MEQ2M1xcdTBENjYtXFx1MEQ3Rl0vZyxcbiAgbXlhOiAvW1xcdTEwMDAtXFx1MTA5RlxcdUE5RTAtXFx1QTlGRVxcdUFBNjAtXFx1QUE3Rl0vZyxcbiAgcGFuOiAvW1xcdTBBMDEtXFx1MEEwM1xcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEEzQ1xcdTBBM0UtXFx1MEE0MlxcdTBBNDdcXHUwQTQ4XFx1MEE0Qi1cXHUwQTREXFx1MEE1MVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzZdL2csXG4gIGFtaDogL1tcXHUxMjAwLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzNUQtXFx1MTM3Q1xcdTEzODAtXFx1MTM5OVxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRV18XFx1RDgzOVtcXHVERkUwLVxcdURGRTZcXHVERkU4LVxcdURGRUJcXHVERkVEXFx1REZFRVxcdURGRjAtXFx1REZGRV0vZyxcbiAgdGhhOiAvW1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU1Ql0vZyxcbiAgc2luOiAvW1xcdTBEODEtXFx1MEQ4M1xcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRENBXFx1MERDRi1cXHUwREQ0XFx1MERENlxcdTBERDgtXFx1MERERlxcdTBERTYtXFx1MERFRlxcdTBERjItXFx1MERGNF18XFx1RDgwNFtcXHVEREUxLVxcdURERjRdL2csXG4gIGVsbDogL1tcXHUwMzcwLVxcdTAzNzNcXHUwMzc1LVxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NFxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0UxXFx1MDNGMC1cXHUwM0ZGXFx1MUQyNi1cXHUxRDJBXFx1MUQ1RC1cXHUxRDYxXFx1MUQ2Ni1cXHUxRDZBXFx1MURCRlxcdTFGMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZDNFxcdTFGQzYtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGREQtXFx1MUZFRlxcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGRVxcdTIxMjZcXHVBQjY1XXxcXHVEODAwW1xcdURENDAtXFx1REQ4RVxcdUREQTBdfFxcdUQ4MzRbXFx1REUwMC1cXHVERTQ1XS9nXG59XG4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IGBidWlsZC5qc2Bcbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndHJpZ3JhbS11dGlscycpLlRyaWdyYW1UdXBsZX0gVHJpZ3JhbVR1cGxlXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbb25seV1cbiAqICAgTGFuZ3VhZ2VzIHRvIGFsbG93LlxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBbaWdub3JlXVxuICogICBMYW5ndWFnZXMgdG8gaWdub3JlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5MZW5ndGg9MTBdXG4gKiAgIE1pbmltdW0gbGVuZ3RoIHRvIGFjY2VwdC5cbiAqL1xuXG4vKiBMb2FkIGB0cmlncmFtLXV0aWxzYC4gKi9cbmltcG9ydCB7YXNUdXBsZXN9IGZyb20gJ3RyaWdyYW0tdXRpbHMnXG4vKiBMb2FkIGBleHByZXNzaW9uc2AgKHJlZ3VsYXIgZXhwcmVzc2lvbnMgbWF0Y2hpbmdcbiAqIHNjcmlwdHMpLiAqL1xuaW1wb3J0IHtleHByZXNzaW9uc30gZnJvbSAnLi9leHByZXNzaW9ucy5qcydcbi8qIExvYWQgYGRhdGFgICh0cmlncmFtIGluZm9ybWF0aW9uIHBlciBsYW5ndWFnZSxcbiAqIHBlciBzY3JpcHQpLiAqL1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEuanMnXG5cbi8qIE1heGltdW0gc2FtcGxlIGxlbmd0aC4gKi9cbmNvbnN0IE1BWF9MRU5HVEggPSAyMDQ4XG5cbi8qIE1pbmltdW0gc2FtcGxlIGxlbmd0aC4gKi9cbmNvbnN0IE1JTl9MRU5HVEggPSAxMFxuXG4vKiBUaGUgbWF4aW11bSBkaXN0YW5jZSB0byBhZGQgd2hlbiBhIGdpdmVuIHRyaWdyYW0gZG9lc1xuICogbm90IGV4aXN0IGluIGEgdHJpZ3JhbSBkaWN0aW9uYXJ5LiAqL1xuY29uc3QgTUFYX0RJRkZFUkVOQ0UgPSAzMDBcblxuY29uc3Qgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLyogQ29uc3RydWN0IHRyaWdyYW0gZGljdGlvbmFyaWVzLiAqL1xuXG4vKiogQHR5cGUge3N0cmluZ30gKi9cbmxldCBzY3JpcHRcblxuLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pj59ICovXG5jb25zdCBudW1lcmljRGF0YSA9IHt9XG5cbmZvciAoc2NyaXB0IGluIGRhdGEpIHtcbiAgaWYgKG93bi5jYWxsKGRhdGEsIHNjcmlwdCkpIHtcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBkYXRhW3NjcmlwdF1cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICBsZXQgbmFtZVxuXG4gICAgbnVtZXJpY0RhdGFbc2NyaXB0XSA9IHt9XG5cbiAgICBmb3IgKG5hbWUgaW4gbGFuZ3VhZ2VzKSB7XG4gICAgICBpZiAob3duLmNhbGwobGFuZ3VhZ2VzLCBuYW1lKSkge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGxhbmd1YWdlc1tuYW1lXS5zcGxpdCgnfCcpXG4gICAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gKi9cbiAgICAgICAgY29uc3QgdHJpZ3JhbXMgPSB7fVxuICAgICAgICBsZXQgd2VpZ2h0ID0gbW9kZWwubGVuZ3RoXG5cbiAgICAgICAgd2hpbGUgKHdlaWdodC0tKSB7XG4gICAgICAgICAgdHJpZ3JhbXNbbW9kZWxbd2VpZ2h0XV0gPSB3ZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG51bWVyaWNEYXRhW3NjcmlwdF1bbmFtZV0gPSB0cmlncmFtc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgbW9zdCBwcm9iYWJsZSBsYW5ndWFnZSBmb3IgdGhlIGdpdmVuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiAgIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICBUaGUgbW9zdCBwcm9iYWJsZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYW5jKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmcmFuY0FsbCh2YWx1ZSwgb3B0aW9ucylbMF1bMF1cbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHByb2JhYmxlIGxhbmd1YWdlcyB0aGUgZ2l2ZW4gdmFsdWUgaXNcbiAqIHdyaXR0ZW4gaW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqICAgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8VHJpZ3JhbVR1cGxlPn1cbiAqICAgQW4gYXJyYXkgY29udGFpbmluZyBsYW5ndWFnZeKAlGRpc3RhbmNlIHR1cGxlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYW5jQWxsKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgd2hpdGVsaXN0YCBpcyBmcm9tIGxvbmcgYWdvLlxuICBjb25zdCBvbmx5ID0gWy4uLihvcHRpb25zLndoaXRlbGlzdCB8fCBbXSksIC4uLihvcHRpb25zLm9ubHkgfHwgW10pXVxuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGBibGFja2xpc3RgIGlzIGZyb20gbG9uZyBhZ28uXG4gIGNvbnN0IGlnbm9yZSA9IFsuLi4ob3B0aW9ucy5ibGFja2xpc3QgfHwgW10pLCAuLi4ob3B0aW9ucy5pZ25vcmUgfHwgW10pXVxuICBjb25zdCBtaW5MZW5ndGggPVxuICAgIG9wdGlvbnMubWluTGVuZ3RoICE9PSBudWxsICYmIG9wdGlvbnMubWluTGVuZ3RoICE9PSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5taW5MZW5ndGhcbiAgICAgIDogTUlOX0xFTkdUSFxuXG4gIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZCgpXG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIE1BWF9MRU5HVEgpXG5cbiAgLyogR2V0IHRoZSBzY3JpcHQgd2hpY2ggY2hhcmFjdGVycyBvY2N1ciB0aGUgbW9zdFxuICAgKiBpbiBgdmFsdWVgLiAqL1xuICBjb25zdCBzY3JpcHQgPSBnZXRUb3BTY3JpcHQodmFsdWUsIGV4cHJlc3Npb25zKVxuXG4gIC8qIE9uZSBsYW5ndWFnZXMgZXhpc3RzIGZvciB0aGUgbW9zdC11c2VkIHNjcmlwdC4gKi9cbiAgaWYgKCFzY3JpcHRbMF0gfHwgIShzY3JpcHRbMF0gaW4gbnVtZXJpY0RhdGEpKSB7XG4gICAgLyogSWYgbm8gbWF0Y2hlcyBvY2N1cmVkLCBzdWNoIGFzIGEgZGlnaXQgb25seSBzdHJpbmcsXG4gICAgICogb3IgYmVjYXVzZSB0aGUgbGFuZ3VhZ2UgaXMgaWdub3JlZCwgZXhpdCB3aXRoIGB1bmRgLiAqL1xuICAgIGlmICghc2NyaXB0WzBdIHx8IHNjcmlwdFsxXSA9PT0gMCB8fCAhYWxsb3coc2NyaXB0WzBdLCBvbmx5LCBpZ25vcmUpKSB7XG4gICAgICByZXR1cm4gdW5kKClcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ2xlTGFuZ3VhZ2VUdXBsZXMoc2NyaXB0WzBdKVxuICB9XG5cbiAgLyogR2V0IGFsbCBkaXN0YW5jZXMgZm9yIGEgZ2l2ZW4gc2NyaXB0LCBhbmRcbiAgICogbm9ybWFsaXplIHRoZSBkaXN0YW5jZSB2YWx1ZXMuICovXG4gIHJldHVybiBub3JtYWxpemUoXG4gICAgdmFsdWUsXG4gICAgZ2V0RGlzdGFuY2VzKGFzVHVwbGVzKHZhbHVlKSwgbnVtZXJpY0RhdGFbc2NyaXB0WzBdXSwgb25seSwgaWdub3JlKVxuICApXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBkaWZmZXJlbmNlIGZvciBlYWNoIHR1cGxlIGluXG4gKiBgZGlzdGFuY2VzYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gbm9ybWFsaXplLlxuICogQHBhcmFtIHtBcnJheTxUcmlncmFtVHVwbGU+fSBkaXN0YW5jZXNcbiAqICAgTGlzdCBvZiBkaXN0YW5jZXMuXG4gKiBAcmV0dXJuIHtBcnJheTxUcmlncmFtVHVwbGU+fVxuICogICBOb3JtYWxpemVkIGRpc3RhbmNlcy5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBkaXN0YW5jZXMpIHtcbiAgY29uc3QgbWluID0gZGlzdGFuY2VzWzBdWzFdXG4gIGNvbnN0IG1heCA9IHZhbHVlLmxlbmd0aCAqIE1BWF9ESUZGRVJFTkNFIC0gbWluXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBkaXN0YW5jZXMubGVuZ3RoKSB7XG4gICAgZGlzdGFuY2VzW2luZGV4XVsxXSA9IDEgLSAoZGlzdGFuY2VzW2luZGV4XVsxXSAtIG1pbikgLyBtYXggfHwgMFxuICB9XG5cbiAgcmV0dXJuIGRpc3RhbmNlc1xufVxuXG4vKipcbiAqIEZyb20gYHNjcmlwdHNgLCBnZXQgdGhlIG1vc3Qgb2NjdXJyaW5nIGV4cHJlc3Npb24gZm9yXG4gKiBgdmFsdWVgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgUmVnRXhwPn0gc2NyaXB0c1xuICogICBUb3AtU2NyaXB0cy5cbiAqIEByZXR1cm4ge1tzdHJpbmd8dW5kZWZpbmVkLCBudW1iZXJdfVxuICogICBUb3Agc2NyaXB0IGFuZCBpdHMgb2NjdXJyZW5jZSBwZXJjZW50YWdlLlxuICovXG5mdW5jdGlvbiBnZXRUb3BTY3JpcHQodmFsdWUsIHNjcmlwdHMpIHtcbiAgbGV0IHRvcENvdW50ID0gLTFcbiAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xuICBsZXQgdG9wU2NyaXB0XG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQgc2NyaXB0XG5cbiAgZm9yIChzY3JpcHQgaW4gc2NyaXB0cykge1xuICAgIGlmIChvd24uY2FsbChzY3JpcHRzLCBzY3JpcHQpKSB7XG4gICAgICBjb25zdCBjb3VudCA9IGdldE9jY3VycmVuY2UodmFsdWUsIHNjcmlwdHNbc2NyaXB0XSlcblxuICAgICAgaWYgKGNvdW50ID4gdG9wQ291bnQpIHtcbiAgICAgICAgdG9wQ291bnQgPSBjb3VudFxuICAgICAgICB0b3BTY3JpcHQgPSBzY3JpcHRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3RvcFNjcmlwdCwgdG9wQ291bnRdXG59XG5cbi8qKlxuICogR2V0IHRoZSBvY2N1cnJlbmNlIHJhdGlvIG9mIGBleHByZXNzaW9uYCBmb3IgYHZhbHVlYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge1JlZ0V4cH0gZXhwcmVzc2lvblxuICogICBDb2RlLXBvaW50IGV4cHJlc3Npb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgIEZsb2F0IGJldHdlZW4gMCBhbmQgMS5cbiAqL1xuZnVuY3Rpb24gZ2V0T2NjdXJyZW5jZSh2YWx1ZSwgZXhwcmVzc2lvbikge1xuICBjb25zdCBjb3VudCA9IHZhbHVlLm1hdGNoKGV4cHJlc3Npb24pXG5cbiAgcmV0dXJuIChjb3VudCA/IGNvdW50Lmxlbmd0aCA6IDApIC8gdmFsdWUubGVuZ3RoIHx8IDBcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRpc3RhbmNlIGJldHdlZW4gYW4gYXJyYXkgb2YgdHJpZ3JhbeKAlGNvdW50XG4gKiB0dXBsZXMsIGFuZCBtdWx0aXBsZSB0cmlncmFtIGRpY3Rpb25hcmllcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PFRyaWdyYW1UdXBsZT59IHRyaWdyYW1zXG4gKiAgIEFuIGFycmF5IGNvbnRhaW5pbmcgdHJpZ3JhbeKAlGNvdW50IHR1cGxlcy5cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj59IGxhbmd1YWdlc1xuICogICBNdWx0aXBsZSB0cmlncmFtcyB0byB0ZXN0IGFnYWluc3QuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9ubHlcbiAqICAgQWxsb3dlZCBsYW5ndWFnZXM7IGlmIG5vbi1lbXB0eSwgb25seSBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGtlcHQuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVxuICogICBEaXNhbGxvd2VkIGxhbmd1YWdlczsgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBpZ25vcmVkLlxuICogQHJldHVybiB7QXJyYXk8VHJpZ3JhbVR1cGxlPn0gQW4gYXJyYXlcbiAqICAgY29udGFpbmluZyBsYW5ndWFnZeKAlGRpc3RhbmNlIHR1cGxlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RGlzdGFuY2VzKHRyaWdyYW1zLCBsYW5ndWFnZXMsIG9ubHksIGlnbm9yZSkge1xuICBsYW5ndWFnZXMgPSBmaWx0ZXJMYW5ndWFnZXMobGFuZ3VhZ2VzLCBvbmx5LCBpZ25vcmUpXG5cbiAgLyoqIEB0eXBlIHtBcnJheTxUcmlncmFtVHVwbGU+fSAqL1xuICBjb25zdCBkaXN0YW5jZXMgPSBbXVxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IGxhbmd1YWdlXG5cbiAgaWYgKGxhbmd1YWdlcykge1xuICAgIGZvciAobGFuZ3VhZ2UgaW4gbGFuZ3VhZ2VzKSB7XG4gICAgICBpZiAob3duLmNhbGwobGFuZ3VhZ2VzLCBsYW5ndWFnZSkpIHtcbiAgICAgICAgZGlzdGFuY2VzLnB1c2goW2xhbmd1YWdlLCBnZXREaXN0YW5jZSh0cmlncmFtcywgbGFuZ3VhZ2VzW2xhbmd1YWdlXSldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXN0YW5jZXMubGVuZ3RoID09PSAwID8gdW5kKCkgOiBkaXN0YW5jZXMuc29ydChzb3J0KVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhbiBhcnJheSBvZiB0cmlncmFt4oCUY291bnRcbiAqIHR1cGxlcywgYW5kIGEgbGFuZ3VhZ2UgZGljdGlvbmFyeS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PFRyaWdyYW1UdXBsZT59IHRyaWdyYW1zXG4gKiAgIEFuIGFycmF5IGNvbnRhaW5pbmcgdHJpZ3JhbeKAlGNvdW50IHR1cGxlcy5cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gbW9kZWxcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgd2VpZ2h0ZWQgdHJpZ3JhbXMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKi9cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHRyaWdyYW1zLCBtb2RlbCkge1xuICBsZXQgZGlzdGFuY2UgPSAwXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0cmlncmFtcy5sZW5ndGgpIHtcbiAgICBjb25zdCB0cmlncmFtID0gdHJpZ3JhbXNbaW5kZXhdXG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNQVhfRElGRkVSRU5DRVxuXG4gICAgaWYgKHRyaWdyYW1bMF0gaW4gbW9kZWwpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSB0cmlncmFtWzFdIC0gbW9kZWxbdHJpZ3JhbVswXV0gLSAxXG5cbiAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICBkaWZmZXJlbmNlID0gLWRpZmZlcmVuY2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXN0YW5jZSArPSBkaWZmZXJlbmNlXG4gIH1cblxuICByZXR1cm4gZGlzdGFuY2Vcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYGxhbmd1YWdlc2AgYnkgcmVtb3ZpbmcgbGFuZ3VhZ2VzIGluXG4gKiBgaWdub3JlYCwgb3IgaW5jbHVkaW5nIGxhbmd1YWdlcyBpbiBgb25seWAuXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pn0gbGFuZ3VhZ2VzXG4gKiAgIExhbmd1YWdlcyB0byBmaWx0ZXJcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb25seVxuICogICBBbGxvd2VkIGxhbmd1YWdlczsgaWYgbm9uLWVtcHR5LCBvbmx5IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUga2VwdC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlXG4gKiAgIERpc2FsbG93ZWQgbGFuZ3VhZ2VzOyBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pn1cbiAqICAgRmlsdGVyZWQgYXJyYXkgb2YgbGFuZ3VhZ2VzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJMYW5ndWFnZXMobGFuZ3VhZ2VzLCBvbmx5LCBpZ25vcmUpIHtcbiAgaWYgKG9ubHkubGVuZ3RoID09PSAwICYmIGlnbm9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbGFuZ3VhZ2VzXG4gIH1cblxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIG51bWJlcj4+fSAqL1xuICBjb25zdCBmaWx0ZXJlZExhbmd1YWdlcyA9IHt9XG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQgbGFuZ3VhZ2VcblxuICBmb3IgKGxhbmd1YWdlIGluIGxhbmd1YWdlcykge1xuICAgIGlmIChhbGxvdyhsYW5ndWFnZSwgb25seSwgaWdub3JlKSkge1xuICAgICAgZmlsdGVyZWRMYW5ndWFnZXNbbGFuZ3VhZ2VdID0gbGFuZ3VhZ2VzW2xhbmd1YWdlXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZExhbmd1YWdlc1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBsYW5ndWFnZWAgY2FuIG1hdGNoIGFjY29yZGluZyB0byBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqICAgTGFuZ3VhZ2VzIHRvIGZpbHRlclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvbmx5XG4gKiAgIEFsbG93ZWQgbGFuZ3VhZ2VzOyBpZiBub24tZW1wdHksIG9ubHkgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBrZXB0LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVcbiAqICAgRGlzYWxsb3dlZCBsYW5ndWFnZXM7IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUgaWdub3JlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYGxhbmd1YWdlYCBjYW4gbWF0Y2hcbiAqL1xuZnVuY3Rpb24gYWxsb3cobGFuZ3VhZ2UsIG9ubHksIGlnbm9yZSkge1xuICBpZiAob25seS5sZW5ndGggPT09IDAgJiYgaWdub3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIChvbmx5Lmxlbmd0aCA9PT0gMCB8fCBvbmx5LmluY2x1ZGVzKGxhbmd1YWdlKSkgJiYgIWlnbm9yZS5pbmNsdWRlcyhsYW5ndWFnZSlcbiAgKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHNpbmdsZSBgdW5kYCB0dXBsZS5cbiAqL1xuZnVuY3Rpb24gdW5kKCkge1xuICByZXR1cm4gc2luZ2xlTGFuZ3VhZ2VUdXBsZXMoJ3VuZCcpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc2luZ2xlIHR1cGxlIGFzIGEgbGlzdCBvZiB0dXBsZXMgZnJvbSBhIGdpdmVuIGxhbmd1YWdlIGNvZGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gKiBAcmV0dXJucyB7QXJyYXk8VHJpZ3JhbVR1cGxlPn1cbiAqL1xuZnVuY3Rpb24gc2luZ2xlTGFuZ3VhZ2VUdXBsZXMobGFuZ3VhZ2UpIHtcbiAgcmV0dXJuIFtbbGFuZ3VhZ2UsIDFdXVxufVxuXG4vKipcbiAqIERlZXAgcmVndWxhciBzb3J0IG9uIHRoZSBudW1iZXIgYXQgYDFgIGluIGJvdGggb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge1RyaWdyYW1UdXBsZX0gYVxuICogQHBhcmFtIHtUcmlncmFtVHVwbGV9IGJcbiAqL1xuZnVuY3Rpb24gc29ydChhLCBiKSB7XG4gIHJldHVybiBhWzFdIC0gYlsxXVxufVxuIiwiZXhwb3J0IGNvbnN0IGJpZ3JhbSA9IG5HcmFtKDIpXG5leHBvcnQgY29uc3QgdHJpZ3JhbSA9IG5HcmFtKDMpXG5cbi8qKlxuICogRmFjdG9yeSByZXR1cm5pbmcgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgdmFsdWUgc3RyaW5nIHRvIG4tZ3JhbXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5HcmFtKG4pIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fFxuICAgIE51bWJlci5pc05hTihuKSB8fFxuICAgIG4gPCAxIHx8XG4gICAgbiA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuICsgJ2AgaXMgbm90IGEgdmFsaWQgYXJndW1lbnQgZm9yIGBuLWdyYW1gJylcbiAgfVxuXG4gIHJldHVybiBncmFtc1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgbi1ncmFtcyBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSB7c3RyaW5nfEFycmF5PHVua25vd24+fSBUXG4gICAqIEBwYXJhbSB7VH0gW3ZhbHVlXVxuICAgKiBAcmV0dXJucyB7VCBleHRlbmRzIGFueVtdID8gVCA6IEFycmF5PHN0cmluZz59XG4gICAqL1xuICBmdW5jdGlvbiBncmFtcyh2YWx1ZSkge1xuICAgIC8qKiBAdHlwZSB7VCBleHRlbmRzIGFueVtdID8gVCA6IEFycmF5PHN0cmluZz59ICovXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogcHJldHR5IHN1cmUgdGhpcyBpcyBmaW5lLlxuICAgIGNvbnN0IG5HcmFtcyA9IFtdXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5HcmFtc1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IHR5cGVvZiB2YWx1ZS5zbGljZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKVxuICAgIGxldCBpbmRleCA9IHNvdXJjZS5sZW5ndGggLSBuICsgMVxuXG4gICAgaWYgKGluZGV4IDwgMSkge1xuICAgICAgcmV0dXJuIG5HcmFtc1xuICAgIH1cblxuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICBuR3JhbXNbaW5kZXhdID0gc291cmNlLnNsaWNlKGluZGV4LCBpbmRleCArIG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQHR5cGVkZWYge1tzdHJpbmcsIG51bWJlcl19IFRyaWdyYW1UdXBsZVxuICogQHR5cGVkZWYge1RyaWdyYW1UdXBsZVtdfSBUcmlncmFtVHVwbGVzXG4gKiBAdHlwZWRlZiB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn0gVHJpZ3JhbURpY3Rpb25hcnlcbiAqL1xuXG5pbXBvcnQge3RyaWdyYW19IGZyb20gJ24tZ3JhbSdcbmltcG9ydCB7Y29sbGFwc2VXaGl0ZVNwYWNlfSBmcm9tICdjb2xsYXBzZS13aGl0ZS1zcGFjZSdcblxuY29uc3Qgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBDbGVhbiBgdmFsdWVgLlxuICogUmVtb3ZlZCBnZW5lcmFsIG5vbi1pbXBvcnRhbnQgKGFzIGluLCBmb3IgbGFuZ3VhZ2UgZGV0ZWN0aW9uKSBwdW5jdHVhdGlvblxuICogbWFya3MsIHN5bWJvbHMsIGFuZCBkaWdpdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gW3ZhbHVlXVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICByZXR1cm4gY29sbGFwc2VXaGl0ZVNwYWNlKFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW1xcdTAwMjEtXFx1MDA0MF0rL2csICcgJykpXG4gICAgLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogR2V0IGNsZWFuLCBwYWRkZWQsIHRyaWdyYW1zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmlncmFtcyh2YWx1ZSkge1xuICByZXR1cm4gdHJpZ3JhbSgnICcgKyBjbGVhbih2YWx1ZSkgKyAnICcpXG59XG5cbi8qKlxuICogR2V0IGFuIGBPYmplY3RgIHdpdGggdHJpZ3JhbXMgYXMgaXRzIGF0dHJpYnV0ZXMsIGFuZCB0aGVpciBvY2N1cmVuY2UgY291bnQgYXNcbiAqIHRoZWlyIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtUcmlncmFtRGljdGlvbmFyeX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzRGljdGlvbmFyeSh2YWx1ZSkge1xuICBjb25zdCB2YWx1ZXMgPSB0cmlncmFtcyh2YWx1ZSlcbiAgLyoqIEB0eXBlIHtUcmlncmFtRGljdGlvbmFyeX0gKi9cbiAgY29uc3QgZGljdGlvbmFyeSA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgaWYgKG93bi5jYWxsKGRpY3Rpb25hcnksIHZhbHVlc1tpbmRleF0pKSB7XG4gICAgICBkaWN0aW9uYXJ5W3ZhbHVlc1tpbmRleF1dKytcbiAgICB9IGVsc2Uge1xuICAgICAgZGljdGlvbmFyeVt2YWx1ZXNbaW5kZXhdXSA9IDFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGljdGlvbmFyeVxufVxuXG4vKipcbiAqIEdldCBhbiBgQXJyYXlgIGNvbnRhaW5pbmcgdHJpZ3JhbS0tY291bnQgdHVwbGVzIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtUcmlncmFtVHVwbGVzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNUdXBsZXModmFsdWUpIHtcbiAgY29uc3QgZGljdGlvbmFyeSA9IGFzRGljdGlvbmFyeSh2YWx1ZSlcbiAgLyoqIEB0eXBlIHtUcmlncmFtVHVwbGVzfSAqL1xuICBjb25zdCB0dXBsZXMgPSBbXVxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IHRyaWdyYW1cblxuICBmb3IgKHRyaWdyYW0gaW4gZGljdGlvbmFyeSkge1xuICAgIGlmIChvd24uY2FsbChkaWN0aW9uYXJ5LCB0cmlncmFtKSkge1xuICAgICAgdHVwbGVzLnB1c2goW3RyaWdyYW0sIGRpY3Rpb25hcnlbdHJpZ3JhbV1dKVxuICAgIH1cbiAgfVxuXG4gIHR1cGxlcy5zb3J0KHNvcnQpXG5cbiAgcmV0dXJuIHR1cGxlc1xufVxuXG4vKipcbiAqIEdldCBhbiBgQXJyYXlgIGNvbnRhaW5pbmcgdHJpZ3JhbS0tY291bnQgdHVwbGVzIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1RyaWdyYW1UdXBsZXN9IHR1cGxlc1xuICogQHJldHVybnMge1RyaWdyYW1EaWN0aW9uYXJ5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHVwbGVzQXNEaWN0aW9uYXJ5KHR1cGxlcykge1xuICAvKiogQHR5cGUge1RyaWdyYW1EaWN0aW9uYXJ5fSAqL1xuICBjb25zdCBkaWN0aW9uYXJ5ID0ge31cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHR1cGxlcy5sZW5ndGgpIHtcbiAgICBkaWN0aW9uYXJ5W3R1cGxlc1tpbmRleF1bMF1dID0gdHVwbGVzW2luZGV4XVsxXVxuICB9XG5cbiAgcmV0dXJuIGRpY3Rpb25hcnlcbn1cblxuLyoqXG4gKiBEZWVwIHJlZ3VsYXIgc29ydCBvbiBpdGVtIGF0IGAxYCBpbiBib3RoIGBPYmplY3Rgcy5cbiAqXG4gKiBAcGFyYW0ge1RyaWdyYW1UdXBsZX0gYVxuICogQHBhcmFtIHtUcmlncmFtVHVwbGV9IGJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHNvcnQoYSwgYikge1xuICByZXR1cm4gYVsxXSAtIGJbMV1cbn1cbiIsImV4cG9ydCBjb25zdCBwb2tlbW9ucyA9IHtcblx0YnVsYmFzYXVyOiAxLFxuXHRpdnlzYXVyOiAyLFxuXHR2ZW51c2F1cjogMyxcblx0Y2hhcm1hbmRlcjogNCxcblx0Y2hhcm1lbGVvbjogNSxcblx0Y2hhcml6YXJkOiA2LFxuXHRzcXVpcnRsZTogNyxcblx0d2FydG9ydGxlOiA4LFxuXHRibGFzdG9pc2U6IDksXG5cdGNhdGVycGllOiAxMCxcblx0bWV0YXBvZDogMTEsXG5cdGJ1dHRlcmZyZWU6IDEyLFxuXHR3ZWVkbGU6IDEzLFxuXHRrYWt1bmE6IDE0LFxuXHRiZWVkcmlsbDogMTUsXG5cdHBpZGdleTogMTYsXG5cdHBpZGdlb3R0bzogMTcsXG5cdHBpZGdlb3Q6IDE4LFxuXHRyYXR0YXRhOiAxOSxcblx0cmF0aWNhdGU6IDIwLFxuXHRzcGVhcm93OiAyMSxcblx0ZmVhcm93OiAyMixcblx0ZWthbnM6IDIzLFxuXHRhcmJvazogMjQsXG5cdHBpa2FjaHU6IDI1LFxuXHRyYWljaHU6IDI2LFxuXHRzYW5kc2hyZXc6IDI3LFxuXHRzYW5kc2xhc2g6IDI4LFxuXHRuaWRvcmFuX2Y6IDI5LFxuXHRuaWRvcmluYTogMzAsXG5cdG5pZG9xdWVlbjogMzEsXG5cdG5pZG9yYW5fbTogMzIsXG5cdG5pZG9yaW5vOiAzMyxcblx0bmlkb2tpbmc6IDM0LFxuXHRjbGVmYWlyeTogMzUsXG5cdGNsZWZhYmxlOiAzNixcblx0dnVscGl4OiAzNyxcblx0bmluZXRhbGVzOiAzOCxcblx0amlnZ2x5cHVmZjogMzksXG5cdHdpZ2dseXR1ZmY6IDQwLFxuXHR6dWJhdDogNDEsXG5cdGdvbGJhdDogNDIsXG5cdG9kZGlzaDogNDMsXG5cdGdsb29tOiA0NCxcblx0dmlsZXBsdW1lOiA0NSxcblx0cGFyYXM6IDQ2LFxuXHRwYXJhc2VjdDogNDcsXG5cdHZlbm9uYXQ6IDQ4LFxuXHR2ZW5vbW90aDogNDksXG5cdGRpZ2xldHQ6IDUwLFxuXHRkdWd0cmlvOiA1MSxcblx0bWVvd3RoOiA1Mixcblx0cGVyc2lhbjogNTMsXG5cdHBzeWR1Y2s6IDU0LFxuXHRnb2xkdWNrOiA1NSxcblx0bWFua2V5OiA1Nixcblx0cHJpbWVhcGU6IDU3LFxuXHRncm93bGl0aGU6IDU4LFxuXHRhcmNhbmluZTogNTksXG5cdHBvbGl3YWc6IDYwLFxuXHRwb2xpd2hpcmw6IDYxLFxuXHRwb2xpd3JhdGg6IDYyLFxuXHRhYnJhOiA2Myxcblx0a2FkYWJyYTogNjQsXG5cdGFsYWthemFtOiA2NSxcblx0bWFjaG9wOiA2Nixcblx0bWFjaG9rZTogNjcsXG5cdG1hY2hhbXA6IDY4LFxuXHRiZWxsc3Byb3V0OiA2OSxcblx0d2VlcGluYmVsbDogNzAsXG5cdHZpY3RyZWViZWw6IDcxLFxuXHR0ZW50YWNvb2w6IDcyLFxuXHR0ZW50YWNydWVsOiA3Myxcblx0Z2VvZHVkZTogNzQsXG5cdGdyYXZlbGVyOiA3NSxcblx0Z29sZW06IDc2LFxuXHRwb255dGE6IDc3LFxuXHRyYXBpZGFzaDogNzgsXG5cdHNsb3dwb2tlOiA3OSxcblx0c2xvd2JybzogODAsXG5cdG1hZ25lbWl0ZTogODEsXG5cdG1hZ25ldG9uOiA4Mixcblx0ZmFyZmV0Y2hkOiA4Myxcblx0ZG9kdW86IDg0LFxuXHRkb2RyaW86IDg1LFxuXHRzZWVsOiA4Nixcblx0ZGV3Z29uZzogODcsXG5cdGdyaW1lcjogODgsXG5cdG11azogODksXG5cdHNoZWxsZGVyOiA5MCxcblx0Y2xveXN0ZXI6IDkxLFxuXHRnYXN0bHk6IDkyLFxuXHRoYXVudGVyOiA5Myxcblx0Z2VuZ2FyOiA5NCxcblx0b25peDogOTUsXG5cdGRyb3d6ZWU6IDk2LFxuXHRoeXBubzogOTcsXG5cdGtyYWJieTogOTgsXG5cdGtpbmdsZXI6IDk5LFxuXHR2b2x0b3JiOiAxMDAsXG5cdGVsZWN0cm9kZTogMTAxLFxuXHRleGVnZ2N1dGU6IDEwMixcblx0ZXhlZ2d1dG9yOiAxMDMsXG5cdGN1Ym9uZTogMTA0LFxuXHRtYXJvd2FrOiAxMDUsXG5cdGhpdG1vbmxlZTogMTA2LFxuXHRoaXRtb25jaGFuOiAxMDcsXG5cdGxpY2tpdHVuZzogMTA4LFxuXHRrb2ZmaW5nOiAxMDksXG5cdHdlZXppbmc6IDExMCxcblx0cmh5aG9ybjogMTExLFxuXHRyaHlkb246IDExMixcblx0Y2hhbnNleTogMTEzLFxuXHR0YW5nZWxhOiAxMTQsXG5cdGthbmdhc2toYW46IDExNSxcblx0aG9yc2VhOiAxMTYsXG5cdHNlYWRyYTogMTE3LFxuXHRnb2xkZWVuOiAxMTgsXG5cdHNlYWtpbmc6IDExOSxcblx0c3Rhcnl1OiAxMjAsXG5cdHN0YXJtaWU6IDEyMSxcblx0bXJfbWltZTogMTIyLFxuXHRzY3l0aGVyOiAxMjMsXG5cdGp5bng6IDEyNCxcblx0ZWxlY3RhYnV6ejogMTI1LFxuXHRtYWdtYXI6IDEyNixcblx0cGluc2lyOiAxMjcsXG5cdHRhdXJvczogMTI4LFxuXHRtYWdpa2FycDogMTI5LFxuXHRneWFyYWRvczogMTMwLFxuXHRsYXByYXM6IDEzMSxcblx0ZGl0dG86IDEzMixcblx0ZWV2ZWU6IDEzMyxcblx0dmFwb3Jlb246IDEzNCxcblx0am9sdGVvbjogMTM1LFxuXHRmbGFyZW9uOiAxMzYsXG5cdHBvcnlnb246IDEzNyxcblx0b21hbnl0ZTogMTM4LFxuXHRvbWFzdGFyOiAxMzksXG5cdGthYnV0bzogMTQwLFxuXHRrYWJ1dG9wczogMTQxLFxuXHRhZXJvZGFjdHlsOiAxNDIsXG5cdHNub3JsYXg6IDE0Myxcblx0YXJ0aWN1bm86IDE0NCxcblx0emFwZG9zOiAxNDUsXG5cdG1vbHRyZXM6IDE0Nixcblx0ZHJhdGluaTogMTQ3LFxuXHRkcmFnb25haXI6IDE0OCxcblx0ZHJhZ29uaXRlOiAxNDksXG5cdG1ld3R3bzogMTUwLFxuXHRtZXc6IDE1MSxcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZnJhbmMgfSBmcm9tIFwiZnJhbmMtbWluXCI7XG5pbXBvcnQgeyBwb2tlbW9ucyB9IGZyb20gXCIuL3Bva2VkZXguanNcIjtcblxuZnVuY3Rpb24gaXNFbmdsaXNoKHRleHQpIHtcblx0cmV0dXJuIGZyYW5jKHRleHQpID09PSBcImVuZ1wiO1xufVxuXG5mdW5jdGlvbiBjaGVja0VuZ2xpc2goYXJyYXkpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBuZXdhcnJheSA9IFtdO1xuXHRcdGlmIChhcnJheVtpXS5sYW5ndWFnZS5uYW1lID09PSBcImVuXCIpIHtcblx0XHRcdGVuZ2xpc2hhcnJheS5wdXNoKGFycmF5W2ldKTtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coZW5nbGlzaGFycmF5KTtcbn1cbmxldCBib3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsYWNrZ3JpZFwiKTtcbmxldCBwb2tlID0gXCJcIjtcbmxldCBmbGF2b3JfdGV4dCA9IFwiXCI7XG5sZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xubGV0IG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpO1xubGV0IGxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIik7XG5sZXQgdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibHVlZ3JpZGlkXCIpO1xubGV0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFcIik7XG5sZXQgbmFtZSA9IFwiXCI7XG5sZXQgdHlwaW5nMSA9IFwiXCI7XG5sZXQgdHlwaW5nMiA9IFwiXCI7XG5sZXQgdGV4dF9pbmZvID0gW107XG5sZXQgcG9rZWRleG51bSA9IFwiXCI7XG5sZXQgZW5nbGlzaGFycmF5ID0gW107XG5cbnRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRpZiAoIW5hbWUpIHtcblx0XHRjb25zb2xlLmxvZyhcInllZVwiKTtcblx0XHRnZXRQb2tlbW9uKGBidWxiYXNhdXJgKTtcblx0XHRzZWFyY2gudmFsdWUgPSBcImJ1bGJhc2F1clwiO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBwb2tldmFsdWUgPSBwb2tlbW9uc1tzZWFyY2gudmFsdWVdO1xuXHRcdGNvbnNvbGUubG9nKHBva2V2YWx1ZSk7XG5cdFx0bGV0IG5leHQgPSBwb2tldmFsdWUgKyAxO1xuXHRcdGxldCBrZXlGb3VuZCA9IE9iamVjdC5rZXlzKHBva2Vtb25zKS5maW5kKChrZXkpID0+IHBva2Vtb25zW2tleV0gPT09IG5leHQpO1xuXHRcdHNlYXJjaC52YWx1ZSA9IGtleUZvdW5kO1xuXG5cdFx0Z2V0UG9rZW1vbihwb2tlbW9uc1trZXlGb3VuZF0pO1xuXHR9XG59KTtcbmJvdHRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRpZiAoIW5hbWUpIHtcblx0XHRjb25zb2xlLmxvZyhcInllZVwiKTtcblx0XHRnZXRQb2tlbW9uKGBtZXdgKTtcblx0XHRzZWFyY2gudmFsdWUgPSBcIm1ld1wiO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBwb2tldmFsdWUgPSBwb2tlbW9uc1tzZWFyY2gudmFsdWVdO1xuXHRcdGNvbnNvbGUubG9nKHBva2V2YWx1ZSk7XG5cdFx0bGV0IG5leHQgPSBwb2tldmFsdWUgLSAxO1xuXHRcdGxldCBrZXlGb3VuZCA9IE9iamVjdC5rZXlzKHBva2Vtb25zKS5maW5kKChrZXkpID0+IHBva2Vtb25zW2tleV0gPT09IG5leHQpO1xuXHRcdHNlYXJjaC52YWx1ZSA9IGtleUZvdW5kO1xuXG5cdFx0Z2V0UG9rZW1vbihwb2tlbW9uc1trZXlGb3VuZF0pO1xuXHR9XG59KTtcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGdldFBva2Vtb24oc2VhcmNoLnZhbHVlKTtcbn0pO1xuXG4vL3VwbG9hZHMgdGhlIGltYWdlIGFuZCBwbGF5cyB0aGUgY3J5IHNvdW5kIGZyb20gdGhlIGZpcnN0IEFQSSBmZXRjaCByZXF1ZXN0XG5mdW5jdGlvbiBhZGRJbWFnZShwb2tlKSB7XG5cdGxldCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlblwiKTtcblx0c2NyZWVuLmlubmVySFRNTCA9IFwiXCI7XG5cdGxldCBzcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwb2tlZGV4bnVtID0gcG9rZS5pZDtcblx0c3ByaXRlLnNyYyA9IHBva2Uuc3ByaXRlcy5mcm9udF9kZWZhdWx0O1xuXHRuYW1lID0gcG9rZS5uYW1lO1xuXHR0eXBpbmcxID0gcG9rZS50eXBlc1swXS50eXBlLm5hbWU7XG5cdGlmICghcG9rZS50eXBlc1sxXSkge1xuXHRcdHR5cGluZzIgPSBcIlwiO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGluZzIgPSBwb2tlLnR5cGVzWzFdLnR5cGUubmFtZTtcblx0fVxuXG5cdHNjcmVlbi5hcHBlbmQoc3ByaXRlKTtcblx0Y29uc29sZS5sb2cocG9rZSk7XG5cdGxldCBjcnkgPSBcIlwiO1xuXHRpZiAoIXBva2UuY3JpZXMubGVnYWN5KSB7XG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eVwiKTtcblx0XHRjcnkgPSBuZXcgQXVkaW8ocG9rZS5jcmllcy5sYXRlc3QpO1xuXHR9IGVsc2Uge1xuXHRcdGNyeSA9IG5ldyBBdWRpbyhwb2tlLmNyaWVzLmxlZ2FjeSk7XG5cdH1cblx0Y3J5LnBsYXkoKTtcblx0cmV0dXJuIG5hbWU7XG59XG5cbi8vZ2V0cyB0aGUgcG9rZWRleCBpbmZvIGZyb20gdGhlIHNlY29uZCBBUEkgZmV0Y2ggcmVxdWVzdCBhbmQgcHV0cyBpdCBvbiB0aGUgc2NyZWVuXG5mdW5jdGlvbiBhZGRGbGF2b3IoZmxhdm9yKSB7XG5cdGRhdGEuaW5uZXJIVE1MID0gXCJcIjtcblx0ZW5nbGlzaGFycmF5ID0gW107XG5cdGxldCBlbmdsaXNoY2hlY2sgPSBjaGVja0VuZ2xpc2goZmxhdm9yLmZsYXZvcl90ZXh0X2VudHJpZXMpO1xuXHRsZXQgbnVteiA9ICgoKSA9PiB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZ2xpc2hhcnJheS5sZW5ndGgpO1xuXHR9KSgpO1xuXHRsZXQgYmFzZSA9IGVuZ2xpc2hhcnJheVtudW16XTtcblx0bGV0IGRlc2NyaXB0aW9uID0gYmFzZS5mbGF2b3JfdGV4dDtcblx0bGV0IHZlcnNpb24gPSBiYXNlLnZlcnNpb24ubmFtZTtcblx0bGV0IG5hbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdG5hbWVkaXYuaW5uZXJIVE1MID1cblx0XHRcIk5hbWU6IFwiICtcblx0XHRuYW1lICtcblx0XHRcIjxicj5cIiArXG5cdFx0YFBva2VkZXggdmVyc2lvbjpgICtcblx0XHRcIiBcIiArXG5cdFx0dmVyc2lvbiArXG5cdFx0YDxicj4gYCArXG5cdFx0YE5hdGlvbmFsIERleCM6JHtwb2tlZGV4bnVtfSA8YnI+ICBUeXBlOiR7dHlwaW5nMX0gXG5cdFx0IDxicj4gUmVnaW9uOiBLYW50byA8YnI+IFdlaWdodDogPGJyPiA8YnI+XG5cdFx0JHtkZXNjcmlwdGlvbn1gO1xuXHRuYW1lZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZWRpdlwiKTtcblx0ZGF0YS5hcHBlbmQobmFtZWRpdik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBva2Vtb24ocG9rZW1vbikge1xuXHRjb25zdCBwb2tlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3Bva2Vtb259YCwge1xuXHRcdG1vZGU6IFwiY29yc1wiLFxuXHR9KVxuXHRcdC50aGVuKChwb2tlKSA9PiBwb2tlLmpzb24oKSlcblx0XHQudGhlbigocG9rZSkgPT4ge1xuXHRcdFx0YWRkSW1hZ2UocG9rZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhwb2tlKTtcblx0XHRcdHJldHVybiBwb2tlO1xuXHRcdH0pO1xuXG5cdGNvbnN0IGZsYXZvciA9IGF3YWl0IGZldGNoKFxuXHRcdGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy8ke3Bva2Vtb259YCxcblx0XHR7XG5cdFx0XHRtb2RlOiBcImNvcnNcIixcblx0XHR9XG5cdClcblx0XHQudGhlbigoZmxhdm9yKSA9PiBmbGF2b3IuanNvbigpKVxuXHRcdC50aGVuKChmbGF2b3IpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGZsYXZvcik7XG5cdFx0XHRhZGRGbGF2b3IoZmxhdm9yKTtcblx0XHRcdHJldHVybiBmbGF2b3I7XG5cdFx0fSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=