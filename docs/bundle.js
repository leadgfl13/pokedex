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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./pokemon-nature-pikachu-charmander-wallpaper-preview.jpg */ "./src/pokemon-nature-pikachu-charmander-wallpaper-preview.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 640px) {
	@font-face {
		font-family: "pokedexfont";

		src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
			url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
	}

	body {
		background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
		background-repeat: no-repeat;
		background-size: cover;
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
		align-self: center;
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
		background-color: blue;
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
		font-weight: lighter;
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
		display: Grid;
		background-color: blue;
		height: 20%;
		width: 80%;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: repeat(4, 1fr);

		margin-top: 20%;
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
		gap: 20px;
		justify-content: center;
	}
	#submit {
		display: flex;
		justify-content: center;
		align-items: Center;
		background-color: rgb(29, 170, 216);
		border: 2px solid darkblue;
	}
	#submit:active {
		background-color: green;
	}
	#info {
		color: black;
		font-weight: 500;
		font-size: 20px;
		border-radius: 5px;
		background-color: rgb(88, 129, 88);
	}
	::placeholder {
		color: black;
	}
	.minus,
	.plus {
		font-size: 140px;
		font-weight: 800;
		color: gold;
		-webkit-text-stroke: 2px black;
	}

	.minus:active {
		color: green;
		background: 4px solid blackl;
	}

	.plus:active {
		color: green;
		background: 4px solid blackl;
	}

	.blackgrid {
		margin-bottom: 20%;
		display: Grid;
		background-color: gray;
		height: 20%;
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
}
@font-face {
	font-family: "pokedexfont";

	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
		url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
}

body {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-repeat: no-repeat;
	background-size: cover;
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
	align-self: center;
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
	background-color: blue;
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
	font-weight: lighter;
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
	display: Grid;
	background-color: blue;
	height: 20%;
	width: 80%;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(4, 1fr);

	margin-top: 20%;
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
	gap: 20px;
	justify-content: center;
}
#submit {
	display: flex;
	justify-content: center;
	align-items: Center;
	background-color: rgb(29, 170, 216);
	border: 2px solid darkblue;
}
#submit:active {
	background-color: green;
}
#info {
	color: black;
	font-weight: 500;
	font-size: 20px;
	border-radius: 5px;
	background-color: rgb(88, 129, 88);
}
::placeholder {
	color: black;
}
.minus,
.plus {
	font-size: 140px;
	font-weight: 800;
	color: gold;
	-webkit-text-stroke: 2px black;
}

.minus:active {
	color: green;
	background: 4px solid blackl;
}

.plus:active {
	color: green;
	background: 4px solid blackl;
}

.blackgrid {
	margin-bottom: 20%;
	display: Grid;
	background-color: gray;
	height: 20%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@media (max-width: 640px) {\n\t@font-face {\n\t\tfont-family: \"pokedexfont\";\n\n\t\tsrc: url(\"./Pokemon\\ Solid.ttf\") format(\"woff\"),\n\t\t\turl(\"./Pokemon\\ Solid.ttf\") format(\"woff\");\n\t}\n\n\tbody {\n\t\tbackground-image: url(\"./pokemon-nature-pikachu-charmander-wallpaper-preview.jpg\");\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t}\n\n\t.pokedex {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tmargin: auto;\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\theight: 80%;\n\t\twidth: 60%;\n\t\tborder: 20px groove darkred;\n\t}\n\n\timg {\n\t\talign-self: center;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n\t.left {\n\t\tbackground-color: red;\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 10% 45% 45%;\n\t\tbox-sizing: border-box;\n\t\tborder-right: 20px groove rgba(155, 11, 11, 0.691);\n\t\twidth: 55%;\n\t}\n\n\t#lightsleft {\n\t\tgrid-area: 1/1/2/2;\n\t\tdisplay: Flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tflex-direction: row;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tbackground-color: Red;\n\t\tborder-bottom: 6px solid darkred;\n\t}\n\t#circle {\n\t\theight: 60%;\n\t\twidth: 10%;\n\t\tborder-radius: 75%;\n\t\tbackground-color: blue;\n\t\tborder: 4px solid white;\n\t\tmargin: 2%;\n\t\tbox-shadow: 2px -2px -2px 2px lightblue;\n\t}\n\n\t#lightsright {\n\t\talign-items: center;\n\t\tjustify-content: flex-end;\n\t\tdisplay: flex;\n\t\tpadding-right: 2%;\n\t\tflex-direction: Row;\n\t\theight: 100%;\n\t\twidth: 25%;\n\t\tgap: 10%;\n\t}\n\t.circle2 {\n\t\theight: 60%;\n\t\twidth: 10%;\n\t\tborder-radius: 75%;\n\t\tbackground-color: rgb(7, 7, 7);\n\t\tborder: 2px solid rgb(211, 211, 211);\n\t}\n\n\t#screen {\n\t\tgrid-area: 2/1/3/2;\n\t\tfont-family: \"pokedexfont\";\n\t\tdisplay: flex;\n\t\tfont-size: 48px;\n\t\ttext-decoration: underline;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\theight: 70%;\n\t\twidth: 80%;\n\t\tmargin: auto;\n\t\tbackground-color: rgb(88, 129, 88);\n\t\tborder: 14px groove lightgray;\n\t}\n\n\t#data {\n\t\tgrid-area: 3/1/4/2;\n\t\tmargin: auto;\n\t\theight: 90%;\n\t\twidth: 90%;\n\t\tbackground-color: rgb(88, 129, 88);\n\t\tfont-family: \"pokedexfont\";\n\t\tborder: 6px groove rgb(77, 75, 75);\n\t\tfont-size: 16px;\n\t\toverflow-x: scroll;\n\t\tfont-weight: lighter;\n\t}\n\t.right {\n\t\tbackground-color: red;\n\t\tborder-left: 6px solid groove;\n\t\tfont-size: 22px;\n\t\tfont-weight: 700;\n\t\ttext-align: Center;\n\t\tborder-left: 4px groove darkred;\n\t\tdisplay: flex;\n\t\twidth: 45%;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tgap: 20px;\n\t}\n\t.bluegrid {\n\t\tdisplay: Grid;\n\t\tbackground-color: blue;\n\t\theight: 20%;\n\t\twidth: 80%;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\n\t\tmargin-top: 20%;\n\t}\n\t.gridsquare {\n\t\tborder: 2px solid black;\n\t}\n\n\t.middlearea {\n\t\twidth: 95%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tmargin: 3%;\n\t\tpadding: 3%;\n\t\talign-items: center;\n\t}\n\t.searchstuff {\n\t\tdisplay: flex;\n\t\tflex-direction: Column;\n\t\talign-items: center;\n\t\tgap: 20px;\n\t\tjustify-content: center;\n\t}\n\t#submit {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: Center;\n\t\tbackground-color: rgb(29, 170, 216);\n\t\tborder: 2px solid darkblue;\n\t}\n\t#submit:active {\n\t\tbackground-color: green;\n\t}\n\t#info {\n\t\tcolor: black;\n\t\tfont-weight: 500;\n\t\tfont-size: 20px;\n\t\tborder-radius: 5px;\n\t\tbackground-color: rgb(88, 129, 88);\n\t}\n\t::placeholder {\n\t\tcolor: black;\n\t}\n\t.minus,\n\t.plus {\n\t\tfont-size: 140px;\n\t\tfont-weight: 800;\n\t\tcolor: gold;\n\t\t-webkit-text-stroke: 2px black;\n\t}\n\n\t.minus:active {\n\t\tcolor: green;\n\t\tbackground: 4px solid blackl;\n\t}\n\n\t.plus:active {\n\t\tcolor: green;\n\t\tbackground: 4px solid blackl;\n\t}\n\n\t.blackgrid {\n\t\tmargin-bottom: 20%;\n\t\tdisplay: Grid;\n\t\tbackground-color: gray;\n\t\theight: 20%;\n\t\twidth: 80%;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\t.blacksquare {\n\t\tborder: 2px solid black;\n\t}\n\tbutton {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-family: \"pokedexfont\";\n\t\tfont-size: 20px;\n\t\theight: 45px;\n\t\twidth: 150px;\n\t\tborder-radius: 8px;\n\t\tborder: 6px solid gray;\n\n\t\tbackground-color: darkgray;\n\t}\n}\n@font-face {\n\tfont-family: \"pokedexfont\";\n\n\tsrc: url(\"./Pokemon\\ Solid.ttf\") format(\"woff\"),\n\t\turl(\"./Pokemon\\ Solid.ttf\") format(\"woff\");\n}\n\nbody {\n\tbackground-image: url(\"./pokemon-nature-pikachu-charmander-wallpaper-preview.jpg\");\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.pokedex {\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin: auto;\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\theight: 80%;\n\twidth: 60%;\n\tborder: 20px groove darkred;\n}\n\nimg {\n\talign-self: center;\n\theight: 100%;\n\twidth: 100%;\n}\n.left {\n\tbackground-color: red;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 10% 45% 45%;\n\tbox-sizing: border-box;\n\tborder-right: 20px groove rgba(155, 11, 11, 0.691);\n\twidth: 55%;\n}\n\n#lightsleft {\n\tgrid-area: 1/1/2/2;\n\tdisplay: Flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-direction: row;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: Red;\n\tborder-bottom: 6px solid darkred;\n}\n#circle {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: blue;\n\tborder: 4px solid white;\n\tmargin: 2%;\n\tbox-shadow: 2px -2px -2px 2px lightblue;\n}\n\n#lightsright {\n\talign-items: center;\n\tjustify-content: flex-end;\n\tdisplay: flex;\n\tpadding-right: 2%;\n\tflex-direction: Row;\n\theight: 100%;\n\twidth: 25%;\n\tgap: 10%;\n}\n.circle2 {\n\theight: 60%;\n\twidth: 10%;\n\tborder-radius: 75%;\n\tbackground-color: rgb(7, 7, 7);\n\tborder: 2px solid rgb(211, 211, 211);\n}\n\n#screen {\n\tgrid-area: 2/1/3/2;\n\tfont-family: \"pokedexfont\";\n\tdisplay: flex;\n\tfont-size: 48px;\n\ttext-decoration: underline;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 70%;\n\twidth: 80%;\n\tmargin: auto;\n\tbackground-color: rgb(88, 129, 88);\n\tborder: 14px groove lightgray;\n}\n\n#data {\n\tgrid-area: 3/1/4/2;\n\tmargin: auto;\n\theight: 90%;\n\twidth: 90%;\n\tbackground-color: rgb(88, 129, 88);\n\tfont-family: \"pokedexfont\";\n\tborder: 6px groove rgb(77, 75, 75);\n\tfont-size: 16px;\n\toverflow-x: scroll;\n\tfont-weight: lighter;\n}\n.right {\n\tbackground-color: red;\n\tborder-left: 6px solid groove;\n\tfont-size: 22px;\n\tfont-weight: 700;\n\ttext-align: Center;\n\tborder-left: 4px groove darkred;\n\tdisplay: flex;\n\twidth: 45%;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n}\n.bluegrid {\n\tdisplay: Grid;\n\tbackground-color: blue;\n\theight: 20%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n\n\tmargin-top: 20%;\n}\n.gridsquare {\n\tborder: 2px solid black;\n}\n\n.middlearea {\n\twidth: 95%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tmargin: 3%;\n\tpadding: 3%;\n\talign-items: center;\n}\n.searchstuff {\n\tdisplay: flex;\n\tflex-direction: Column;\n\talign-items: center;\n\tgap: 20px;\n\tjustify-content: center;\n}\n#submit {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: Center;\n\tbackground-color: rgb(29, 170, 216);\n\tborder: 2px solid darkblue;\n}\n#submit:active {\n\tbackground-color: green;\n}\n#info {\n\tcolor: black;\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tborder-radius: 5px;\n\tbackground-color: rgb(88, 129, 88);\n}\n::placeholder {\n\tcolor: black;\n}\n.minus,\n.plus {\n\tfont-size: 140px;\n\tfont-weight: 800;\n\tcolor: gold;\n\t-webkit-text-stroke: 2px black;\n}\n\n.minus:active {\n\tcolor: green;\n\tbackground: 4px solid blackl;\n}\n\n.plus:active {\n\tcolor: green;\n\tbackground: 4px solid blackl;\n}\n\n.blackgrid {\n\tmargin-bottom: 20%;\n\tdisplay: Grid;\n\tbackground-color: gray;\n\theight: 20%;\n\twidth: 80%;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: repeat(4, 1fr);\n}\n.blacksquare {\n\tborder: 2px solid black;\n}\nbutton {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: \"pokedexfont\";\n\tfont-size: 20px;\n\theight: 45px;\n\twidth: 150px;\n\tborder-radius: 8px;\n\tborder: 6px solid gray;\n\n\tbackground-color: darkgray;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/pokemon-nature-pikachu-charmander-wallpaper-preview.jpg":
/*!*********************************************************************!*\
  !*** ./src/pokemon-nature-pikachu-charmander-wallpaper-preview.jpg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7888ddea221a88b61c2d.jpg";

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
let stats = "";
console.log(stats);
let name = "";
let typing1 = "";
let typing2 = "";
let text_info = [];
let pokedexnum = "";
let englisharray = [];
let sprites = [];

//checks to if it's the last pokemon, if so it goes back to the first
//otherwise go to next pokemon
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

//checks to see if its the first pokemon, or there is no pokemon
//and then goes to the last pokemon
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

//submits the pokemon and calls the getPokemon function with the search value
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
	let sprites = [
		poke.sprites.back_default,
		poke.sprites_front_default,
		poke.sprites.front_shiny,
	];
	let random = Math.floor(Math.random() * sprites.length);

	screen.addEventListener("click", () => {
		sprite.src = poke.sprites.front_shiny;
	});
	name = poke.name;
	stats = poke.stats;
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
	let hp = stats[0].stat.name + ": " + stats[0].base_stat;
	let attack = stats[1].stat.name + ": " + stats[1].base_stat;
	let defense = stats[2].stat.name + ": " + stats[2].base_stat;
	let special_attack = stats[3].stat.name + ": " + stats[3].base_stat;
	let special_defense = stats[4].stat.name + ": " + stats[4].base_stat;
	let speed = stats[5].stat.name + ": " + stats[5].base_stat;
	//let stamina = stats[6].stat.name + ":" + stats[6].base_stat;
	let allstats = [hp, attack, defense, special_attack, special_defense, speed];
	console.log(allstats);
	let preevolve = flavor.evolves_from_species;
	if (preevolve === null) {
		preevolve = "none";
	} else {
		preevolve = preevolve.name;
	}

	namediv.innerHTML =
		"Name: " +
		name +
		"<br>" +
		`Pokedex version:` +
		" " +
		version +
		`<br> ` +
		`National Dex#:${pokedexnum} <br>  Type:${typing1} 
		 <br> Region:${region}  <br> Evolves from:${preevolve} <br> <br>
		${description}<br> <br>` +
		hp +
		`<br> ` +
		attack +
		"<br>" +
		defense +
		`<br> ` +
		special_attack +
		"<br>" +
		special_defense +
		`<br> ` +
		speed +
		"<br>";
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

				return { poke };
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
		if (name === "") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsNENBQTRDLCtMQUE0RTtBQUN4SCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1DQUFtQztBQUNoRCxTQUFTLG1DQUFtQztBQUM1Qzs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksbUNBQW1DO0FBQy9DLFFBQVEsbUNBQW1DO0FBQzNDOztBQUVBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixLQUFLLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsTUFBTSxLQUFLLEtBQUssYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFB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Y0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pnQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIs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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLElBQUk7O0FBRUo7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jb2xsYXBzZS13aGl0ZS1zcGFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ZyYW5jLW1pbi9kYXRhLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2ZyYW5jLW1pbi9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9mcmFuYy1taW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbi1ncmFtL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdHJpZ3JhbS11dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wb2tlZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7J2h0bWwnfCdqcyd9IFN0eWxlXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtTdHlsZX0gW3N0eWxlPSdqcyddXG4gKiAgIFN0eWxlIG9mIHdoaXRlIHNwYWNlIHRvIHN1cHBvcnQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtwcmVzZXJ2ZUxpbmVFbmRpbmdzPWZhbHNlXVxuICogICBXaGV0aGVyIHRvIGNvbGxhcHNlIHdoaXRlIHNwYWNlIGNvbnRhaW5pbmcgYSBsaW5lIGVuZGluZyB0byB0aGF0IGxpbmVcbiAqICAgZW5kaW5nLlxuICogICBUaGUgZGVmYXVsdCBpcyB0byBjb2xsYXBzZSB0byBhIHNpbmdsZSBzcGFjZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3RyaW09ZmFsc2VdXG4gKiAgIFdoZXRoZXIgdG8gZHJvcCB3aGl0ZSBzcGFjZSBhdCB0aGUgc3RhcnQgYW5kIGVuZCBvZiBgdmFsdWVgLlxuICogICBUaGUgZGVmYXVsdCBpcyB0byBrZWVwIGl0LlxuICovXG5cbmNvbnN0IGpzID0gL1xccysvZ1xuY29uc3QgaHRtbCA9IC9bXFx0XFxuXFx2XFxmXFxyIF0rL2dcblxuLyoqXG4gKiBDb2xsYXBzZSB3aGl0ZSBzcGFjZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gY29sbGFwc2Ugd2hpdGUgc3BhY2UgaW4uXG4gKiBAcGFyYW0ge1N0eWxlfE9wdGlvbnN9IFtvcHRpb25zPSdqcyddXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBWYWx1ZSB3aXRoIGNvbGxhcHNlZCB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlV2hpdGVTcGFjZSh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0ge3N0eWxlOiBvcHRpb25zfVxuICB9XG5cbiAgY29uc3QgcmVwbGFjZSA9IG9wdGlvbnMucHJlc2VydmVMaW5lRW5kaW5ncyA/IHJlcGxhY2VMaW5lRW5kaW5nIDogcmVwbGFjZVNwYWNlXG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZShcbiAgICBvcHRpb25zLnN0eWxlID09PSAnaHRtbCcgPyBodG1sIDoganMsXG4gICAgb3B0aW9ucy50cmltID8gdHJpbUZhY3RvcnkocmVwbGFjZSkgOiByZXBsYWNlXG4gIClcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHdoaXRlIHNwYWNlIHdpdGggYSBsaW5lIGVuZGluZyBhcyB0aGF0IGxpbmUgZW5kaW5nIGFuZCBvdGhlcndpc2UgYVxuICogc3BhY2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlTGluZUVuZGluZyh2YWx1ZSkge1xuICBjb25zdCBtYXRjaCA9IC9cXHI/XFxufFxcci8uZXhlYyh2YWx1ZSlcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMF0gOiAnICdcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHdoaXRlIHNwYWNlIHdpdGggYSBzcGFjZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlU3BhY2UoKSB7XG4gIHJldHVybiAnICdcbn1cblxuLyoqXG4gKiBAcGFyYW0geyh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmd9IHJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbUZhY3RvcnkocmVwbGFjZSkge1xuICByZXR1cm4gZHJvcE9yUmVwbGFjZVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHdoaXRlIHNwYWNlIHdpdGggbm90aGluZyBpZiBpdCBzdGFydHMgb3IgZW5kcyB0aGUgc3RyaW5nLlxuICAgKiBDYWxscyBgcmVwbGFjZWAgb3RoZXJ3aXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGxcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGRyb3BPclJlcGxhY2UodmFsdWUsIGluZGV4LCBhbGwpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDAgfHwgaW5kZXggKyB2YWx1ZS5sZW5ndGggPT09IGFsbC5sZW5ndGhcbiAgICAgID8gJydcbiAgICAgIDogcmVwbGFjZSh2YWx1ZSlcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUG9rZW1vbiBTb2xpZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3Bva2Vtb24tbmF0dXJlLXBpa2FjaHUtY2hhcm1hbmRlci13YWxscGFwZXItcHJldmlldy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcblx0QGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6IFwicG9rZWRleGZvbnRcIjtcblxuXHRcdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIiksXG5cdFx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcblx0fVxuXG5cdGJvZHkge1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGdhcDogMjBweDtcblx0fVxuXG5cdC5wb2tlZGV4IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0aGVpZ2h0OiA4MCU7XG5cdFx0d2lkdGg6IDYwJTtcblx0XHRib3JkZXI6IDIwcHggZ3Jvb3ZlIGRhcmtyZWQ7XG5cdH1cblxuXHRpbWcge1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmxlZnQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA0NSUgNDUlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAyMHB4IGdyb292ZSByZ2JhKDE1NSwgMTEsIDExLCAwLjY5MSk7XG5cdFx0d2lkdGg6IDU1JTtcblx0fVxuXG5cdCNsaWdodHNsZWZ0IHtcblx0XHRncmlkLWFyZWE6IDEvMS8yLzI7XG5cdFx0ZGlzcGxheTogRmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIGRhcmtyZWQ7XG5cdH1cblx0I2NpcmNsZSB7XG5cdFx0aGVpZ2h0OiA2MCU7XG5cdFx0d2lkdGg6IDEwJTtcblx0XHRib3JkZXItcmFkaXVzOiA3NSU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcblx0XHRtYXJnaW46IDIlO1xuXHRcdGJveC1zaGFkb3c6IDJweCAtMnB4IC0ycHggMnB4IGxpZ2h0Ymx1ZTtcblx0fVxuXG5cdCNsaWdodHNyaWdodCB7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0cGFkZGluZy1yaWdodDogMiU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IFJvdztcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDI1JTtcblx0XHRnYXA6IDEwJTtcblx0fVxuXHQuY2lyY2xlMiB7XG5cdFx0aGVpZ2h0OiA2MCU7XG5cdFx0d2lkdGg6IDEwJTtcblx0XHRib3JkZXItcmFkaXVzOiA3NSU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcblx0fVxuXG5cdCNzY3JlZW4ge1xuXHRcdGdyaWQtYXJlYTogMi8xLzMvMjtcblx0XHRmb250LWZhbWlseTogXCJwb2tlZGV4Zm9udFwiO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiA3MCU7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcblx0XHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcblx0fVxuXG5cdCNkYXRhIHtcblx0XHRncmlkLWFyZWE6IDMvMS80LzI7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGhlaWdodDogOTAlO1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcblx0XHRmb250LWZhbWlseTogXCJwb2tlZGV4Zm9udFwiO1xuXHRcdGJvcmRlcjogNnB4IGdyb292ZSByZ2IoNzcsIDc1LCA3NSk7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdG92ZXJmbG93LXg6IHNjcm9sbDtcblx0XHRmb250LXdlaWdodDogbGlnaHRlcjtcblx0fVxuXHQucmlnaHQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0XHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyb292ZTtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHR0ZXh0LWFsaWduOiBDZW50ZXI7XG5cdFx0Ym9yZGVyLWxlZnQ6IDRweCBncm9vdmUgZGFya3JlZDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHdpZHRoOiA0NSU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogMjBweDtcblx0fVxuXHQuYmx1ZWdyaWQge1xuXHRcdGRpc3BsYXk6IEdyaWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblx0XHRoZWlnaHQ6IDIwJTtcblx0XHR3aWR0aDogODAlO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuXG5cdFx0bWFyZ2luLXRvcDogMjAlO1xuXHR9XG5cdC5ncmlkc3F1YXJlIHtcblx0XHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0fVxuXG5cdC5taWRkbGVhcmVhIHtcblx0XHR3aWR0aDogOTUlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luOiAzJTtcblx0XHRwYWRkaW5nOiAzJTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5zZWFyY2hzdHVmZiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAyMHB4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5cdCNzdWJtaXQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IENlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE3MCwgMjE2KTtcblx0XHRib3JkZXI6IDJweCBzb2xpZCBkYXJrYmx1ZTtcblx0fVxuXHQjc3VibWl0OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdH1cblx0I2luZm8ge1xuXHRcdGNvbG9yOiBibGFjaztcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcblx0fVxuXHQ6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogYmxhY2s7XG5cdH1cblx0Lm1pbnVzLFxuXHQucGx1cyB7XG5cdFx0Zm9udC1zaXplOiAxNDBweDtcblx0XHRmb250LXdlaWdodDogODAwO1xuXHRcdGNvbG9yOiBnb2xkO1xuXHRcdC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCBibGFjaztcblx0fVxuXG5cdC5taW51czphY3RpdmUge1xuXHRcdGNvbG9yOiBncmVlbjtcblx0XHRiYWNrZ3JvdW5kOiA0cHggc29saWQgYmxhY2tsO1xuXHR9XG5cblx0LnBsdXM6YWN0aXZlIHtcblx0XHRjb2xvcjogZ3JlZW47XG5cdFx0YmFja2dyb3VuZDogNHB4IHNvbGlkIGJsYWNrbDtcblx0fVxuXG5cdC5ibGFja2dyaWQge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwJTtcblx0XHRkaXNwbGF5OiBHcmlkO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG5cdFx0aGVpZ2h0OiAyMCU7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblx0fVxuXHQuYmxhY2tzcXVhcmUge1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHR9XG5cdGJ1dHRvbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGhlaWdodDogNDVweDtcblx0XHR3aWR0aDogMTUwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGJvcmRlcjogNnB4IHNvbGlkIGdyYXk7XG5cblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcblx0fVxufVxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSxcblx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAyMHB4O1xufVxuXG4ucG9rZWRleCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbjogYXV0bztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRoZWlnaHQ6IDgwJTtcblx0d2lkdGg6IDYwJTtcblx0Ym9yZGVyOiAyMHB4IGdyb292ZSBkYXJrcmVkO1xufVxuXG5pbWcge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG59XG4ubGVmdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA0NSUgNDUlO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRib3JkZXItcmlnaHQ6IDIwcHggZ3Jvb3ZlIHJnYmEoMTU1LCAxMSwgMTEsIDAuNjkxKTtcblx0d2lkdGg6IDU1JTtcbn1cblxuI2xpZ2h0c2xlZnQge1xuXHRncmlkLWFyZWE6IDEvMS8yLzI7XG5cdGRpc3BsYXk6IEZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogUmVkO1xuXHRib3JkZXItYm90dG9tOiA2cHggc29saWQgZGFya3JlZDtcbn1cbiNjaXJjbGUge1xuXHRoZWlnaHQ6IDYwJTtcblx0d2lkdGg6IDEwJTtcblx0Ym9yZGVyLXJhZGl1czogNzUlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcblx0bWFyZ2luOiAyJTtcblx0Ym94LXNoYWRvdzogMnB4IC0ycHggLTJweCAycHggbGlnaHRibHVlO1xufVxuXG4jbGlnaHRzcmlnaHQge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyJTtcblx0ZmxleC1kaXJlY3Rpb246IFJvdztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMjUlO1xuXHRnYXA6IDEwJTtcbn1cbi5jaXJjbGUyIHtcblx0aGVpZ2h0OiA2MCU7XG5cdHdpZHRoOiAxMCU7XG5cdGJvcmRlci1yYWRpdXM6IDc1JTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xuXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjExLCAyMTEsIDIxMSk7XG59XG5cbiNzY3JlZW4ge1xuXHRncmlkLWFyZWE6IDIvMS8zLzI7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogNDhweDtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDcwJTtcblx0d2lkdGg6IDgwJTtcblx0bWFyZ2luOiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xuXHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcbn1cblxuI2RhdGEge1xuXHRncmlkLWFyZWE6IDMvMS80LzI7XG5cdG1hcmdpbjogYXV0bztcblx0aGVpZ2h0OiA5MCU7XG5cdHdpZHRoOiA5MCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMTI5LCA4OCk7XG5cdGZvbnQtZmFtaWx5OiBcInBva2VkZXhmb250XCI7XG5cdGJvcmRlcjogNnB4IGdyb292ZSByZ2IoNzcsIDc1LCA3NSk7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5yaWdodCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0Ym9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncm9vdmU7XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0dGV4dC1hbGlnbjogQ2VudGVyO1xuXHRib3JkZXItbGVmdDogNHB4IGdyb292ZSBkYXJrcmVkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3aWR0aDogNDUlO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xufVxuLmJsdWVncmlkIHtcblx0ZGlzcGxheTogR3JpZDtcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblx0aGVpZ2h0OiAyMCU7XG5cdHdpZHRoOiA4MCU7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblxuXHRtYXJnaW4tdG9wOiAyMCU7XG59XG4uZ3JpZHNxdWFyZSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubWlkZGxlYXJlYSB7XG5cdHdpZHRoOiA5NSU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0bWFyZ2luOiAzJTtcblx0cGFkZGluZzogMyU7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoc3R1ZmYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3N1Ym1pdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogQ2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE3MCwgMjE2KTtcblx0Ym9yZGVyOiAycHggc29saWQgZGFya2JsdWU7XG59XG4jc3VibWl0OmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuI2luZm8ge1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xufVxuOjpwbGFjZWhvbGRlciB7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5taW51cyxcbi5wbHVzIHtcblx0Zm9udC1zaXplOiAxNDBweDtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Y29sb3I6IGdvbGQ7XG5cdC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCBibGFjaztcbn1cblxuLm1pbnVzOmFjdGl2ZSB7XG5cdGNvbG9yOiBncmVlbjtcblx0YmFja2dyb3VuZDogNHB4IHNvbGlkIGJsYWNrbDtcbn1cblxuLnBsdXM6YWN0aXZlIHtcblx0Y29sb3I6IGdyZWVuO1xuXHRiYWNrZ3JvdW5kOiA0cHggc29saWQgYmxhY2tsO1xufVxuXG4uYmxhY2tncmlkIHtcblx0bWFyZ2luLWJvdHRvbTogMjAlO1xuXHRkaXNwbGF5OiBHcmlkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuXHRoZWlnaHQ6IDIwJTtcblx0d2lkdGg6IDgwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuLmJsYWNrc3F1YXJlIHtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5idXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwicG9rZWRleGZvbnRcIjtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdHdpZHRoOiAxNTBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3JkZXI6IDZweCBzb2xpZCBncmF5O1xuXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0M7RUFDQywwQkFBMEI7O0VBRTFCO3lEQUMyQztDQUM1Qzs7Q0FFQTtFQUNDLHlEQUFrRjtFQUNsRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztDQUNWOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFVBQVU7RUFDViwyQkFBMkI7Q0FDNUI7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7Q0FDWjtDQUNBO0VBQ0MscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixrREFBa0Q7RUFDbEQsVUFBVTtDQUNYOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQ0FBZ0M7Q0FDakM7Q0FDQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHVDQUF1QztDQUN4Qzs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0NBQ1Q7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VTtDQUNWLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUNuQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtDQUFrQztBQUNuQztBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsWUFBWTtDQUNaLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsVUFBVTtDQUNWLDJCQUEyQjtDQUMzQixxQ0FBcUM7QUFDdEM7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixzQkFBc0I7O0NBRXRCLDBCQUEwQjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXG5cXHRAZm9udC1mYWNlIHtcXG5cXHRcXHRmb250LWZhbWlseTogXFxcInBva2VkZXhmb250XFxcIjtcXG5cXG5cXHRcXHRzcmM6IHVybChcXFwiLi9Qb2tlbW9uXFxcXCBTb2xpZC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG5cXHRcXHRcXHR1cmwoXFxcIi4vUG9rZW1vblxcXFwgU29saWQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuXFx0fVxcblxcblxcdGJvZHkge1xcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9wb2tlbW9uLW5hdHVyZS1waWthY2h1LWNoYXJtYW5kZXItd2FsbHBhcGVyLXByZXZpZXcuanBnXFxcIik7XFxuXFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IDIwcHg7XFxuXFx0fVxcblxcblxcdC5wb2tlZGV4IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR0b3A6IDUwJTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0XFx0aGVpZ2h0OiA4MCU7XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHRib3JkZXI6IDIwcHggZ3Jvb3ZlIGRhcmtyZWQ7XFxuXFx0fVxcblxcblxcdGltZyB7XFxuXFx0XFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0LmxlZnQge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA0NSUgNDUlO1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAyMHB4IGdyb292ZSByZ2JhKDE1NSwgMTEsIDExLCAwLjY5MSk7XFxuXFx0XFx0d2lkdGg6IDU1JTtcXG5cXHR9XFxuXFxuXFx0I2xpZ2h0c2xlZnQge1xcblxcdFxcdGdyaWQtYXJlYTogMS8xLzIvMjtcXG5cXHRcXHRkaXNwbGF5OiBGbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IFJlZDtcXG5cXHRcXHRib3JkZXItYm90dG9tOiA2cHggc29saWQgZGFya3JlZDtcXG5cXHR9XFxuXFx0I2NpcmNsZSB7XFxuXFx0XFx0aGVpZ2h0OiA2MCU7XFxuXFx0XFx0d2lkdGg6IDEwJTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA3NSU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXHRcXHRib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG5cXHRcXHRtYXJnaW46IDIlO1xcblxcdFxcdGJveC1zaGFkb3c6IDJweCAtMnB4IC0ycHggMnB4IGxpZ2h0Ymx1ZTtcXG5cXHR9XFxuXFxuXFx0I2xpZ2h0c3JpZ2h0IHtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAyJTtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogUm93O1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcdFxcdGdhcDogMTAlO1xcblxcdH1cXG5cXHQuY2lyY2xlMiB7XFxuXFx0XFx0aGVpZ2h0OiA2MCU7XFxuXFx0XFx0d2lkdGg6IDEwJTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA3NSU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcXG5cXHR9XFxuXFxuXFx0I3NjcmVlbiB7XFxuXFx0XFx0Z3JpZC1hcmVhOiAyLzEvMy8yO1xcblxcdFxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0Zm9udC1zaXplOiA0OHB4O1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0aGVpZ2h0OiA3MCU7XFxuXFx0XFx0d2lkdGg6IDgwJTtcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcXG5cXHRcXHRib3JkZXI6IDE0cHggZ3Jvb3ZlIGxpZ2h0Z3JheTtcXG5cXHR9XFxuXFxuXFx0I2RhdGEge1xcblxcdFxcdGdyaWQtYXJlYTogMy8xLzQvMjtcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0aGVpZ2h0OiA5MCU7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xcblxcdFxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcdFxcdGJvcmRlcjogNnB4IGdyb292ZSByZ2IoNzcsIDc1LCA3NSk7XFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdFxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXHRcXHRmb250LXdlaWdodDogbGlnaHRlcjtcXG5cXHR9XFxuXFx0LnJpZ2h0IHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncm9vdmU7XFxuXFx0XFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0dGV4dC1hbGlnbjogQ2VudGVyO1xcblxcdFxcdGJvcmRlci1sZWZ0OiA0cHggZ3Jvb3ZlIGRhcmtyZWQ7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHR3aWR0aDogNDUlO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDIwcHg7XFxuXFx0fVxcblxcdC5ibHVlZ3JpZCB7XFxuXFx0XFx0ZGlzcGxheTogR3JpZDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcdFxcdGhlaWdodDogMjAlO1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFxuXFx0XFx0bWFyZ2luLXRvcDogMjAlO1xcblxcdH1cXG5cXHQuZ3JpZHNxdWFyZSB7XFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0fVxcblxcblxcdC5taWRkbGVhcmVhIHtcXG5cXHRcXHR3aWR0aDogOTUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0bWFyZ2luOiAzJTtcXG5cXHRcXHRwYWRkaW5nOiAzJTtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdH1cXG5cXHQuc2VhcmNoc3R1ZmYge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IENvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogMjBweDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFx0I3N1Ym1pdCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogQ2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTcwLCAyMTYpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGRhcmtibHVlO1xcblxcdH1cXG5cXHQjc3VibWl0OmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0fVxcblxcdCNpbmZvIHtcXG5cXHRcXHRjb2xvcjogYmxhY2s7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMTI5LCA4OCk7XFxuXFx0fVxcblxcdDo6cGxhY2Vob2xkZXIge1xcblxcdFxcdGNvbG9yOiBibGFjaztcXG5cXHR9XFxuXFx0Lm1pbnVzLFxcblxcdC5wbHVzIHtcXG5cXHRcXHRmb250LXNpemU6IDE0MHB4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0XFx0Y29sb3I6IGdvbGQ7XFxuXFx0XFx0LXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IGJsYWNrO1xcblxcdH1cXG5cXG5cXHQubWludXM6YWN0aXZlIHtcXG5cXHRcXHRjb2xvcjogZ3JlZW47XFxuXFx0XFx0YmFja2dyb3VuZDogNHB4IHNvbGlkIGJsYWNrbDtcXG5cXHR9XFxuXFxuXFx0LnBsdXM6YWN0aXZlIHtcXG5cXHRcXHRjb2xvcjogZ3JlZW47XFxuXFx0XFx0YmFja2dyb3VuZDogNHB4IHNvbGlkIGJsYWNrbDtcXG5cXHR9XFxuXFxuXFx0LmJsYWNrZ3JpZCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjAlO1xcblxcdFxcdGRpc3BsYXk6IEdyaWQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG5cXHRcXHRoZWlnaHQ6IDIwJTtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdH1cXG5cXHQuYmxhY2tzcXVhcmUge1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdH1cXG5cXHRidXR0b24ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmb250LWZhbWlseTogXFxcInBva2VkZXhmb250XFxcIjtcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0aGVpZ2h0OiA0NXB4O1xcblxcdFxcdHdpZHRoOiAxNTBweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4cHg7XFxuXFx0XFx0Ym9yZGVyOiA2cHggc29saWQgZ3JheTtcXG5cXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG5cXHR9XFxufVxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcblxcdHNyYzogdXJsKFxcXCIuL1Bva2Vtb25cXFxcIFNvbGlkLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcblxcdFxcdHVybChcXFwiLi9Qb2tlbW9uXFxcXCBTb2xpZC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3Bva2Vtb24tbmF0dXJlLXBpa2FjaHUtY2hhcm1hbmRlci13YWxscGFwZXItcHJldmlldy5qcGdcXFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuLnBva2VkZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogNjAlO1xcblxcdGJvcmRlcjogMjBweCBncm9vdmUgZGFya3JlZDtcXG59XFxuXFxuaW1nIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4ubGVmdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDQ1JSA0NSU7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXItcmlnaHQ6IDIwcHggZ3Jvb3ZlIHJnYmEoMTU1LCAxMSwgMTEsIDAuNjkxKTtcXG5cXHR3aWR0aDogNTUlO1xcbn1cXG5cXG4jbGlnaHRzbGVmdCB7XFxuXFx0Z3JpZC1hcmVhOiAxLzEvMi8yO1xcblxcdGRpc3BsYXk6IEZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogUmVkO1xcblxcdGJvcmRlci1ib3R0b206IDZweCBzb2xpZCBkYXJrcmVkO1xcbn1cXG4jY2lyY2xlIHtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcblxcdG1hcmdpbjogMiU7XFxuXFx0Ym94LXNoYWRvdzogMnB4IC0ycHggLTJweCAycHggbGlnaHRibHVlO1xcbn1cXG5cXG4jbGlnaHRzcmlnaHQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBSb3c7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAyNSU7XFxuXFx0Z2FwOiAxMCU7XFxufVxcbi5jaXJjbGUyIHtcXG5cXHRoZWlnaHQ6IDYwJTtcXG5cXHR3aWR0aDogMTAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNywgNyk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDIxMSwgMjExLCAyMTEpO1xcbn1cXG5cXG4jc2NyZWVuIHtcXG5cXHRncmlkLWFyZWE6IDIvMS8zLzI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJwb2tlZGV4Zm9udFxcXCI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDQ4cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDcwJTtcXG5cXHR3aWR0aDogODAlO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDEyOSwgODgpO1xcblxcdGJvcmRlcjogMTRweCBncm9vdmUgbGlnaHRncmF5O1xcbn1cXG5cXG4jZGF0YSB7XFxuXFx0Z3JpZC1hcmVhOiAzLzEvNC8yO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogOTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMTI5LCA4OCk7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJwb2tlZGV4Zm9udFxcXCI7XFxuXFx0Ym9yZGVyOiA2cHggZ3Jvb3ZlIHJnYig3NywgNzUsIDc1KTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4ucmlnaHQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyb292ZTtcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0ZXh0LWFsaWduOiBDZW50ZXI7XFxuXFx0Ym9yZGVyLWxlZnQ6IDRweCBncm9vdmUgZGFya3JlZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiA0NSU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG59XFxuLmJsdWVncmlkIHtcXG5cXHRkaXNwbGF5OiBHcmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFx0aGVpZ2h0OiAyMCU7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXG5cXHRtYXJnaW4tdG9wOiAyMCU7XFxufVxcbi5ncmlkc3F1YXJlIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1pZGRsZWFyZWEge1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDMlO1xcblxcdHBhZGRpbmc6IDMlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWFyY2hzdHVmZiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogQ29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jc3VibWl0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBDZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxNzAsIDIxNik7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgZGFya2JsdWU7XFxufVxcbiNzdWJtaXQ6YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuI2luZm8ge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxMjksIDg4KTtcXG59XFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG4ubWludXMsXFxuLnBsdXMge1xcblxcdGZvbnQtc2l6ZTogMTQwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogZ29sZDtcXG5cXHQtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7XFxufVxcblxcbi5taW51czphY3RpdmUge1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRiYWNrZ3JvdW5kOiA0cHggc29saWQgYmxhY2tsO1xcbn1cXG5cXG4ucGx1czphY3RpdmUge1xcblxcdGNvbG9yOiBncmVlbjtcXG5cXHRiYWNrZ3JvdW5kOiA0cHggc29saWQgYmxhY2tsO1xcbn1cXG5cXG4uYmxhY2tncmlkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMCU7XFxuXFx0ZGlzcGxheTogR3JpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcblxcdGhlaWdodDogMjAlO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcbi5ibGFja3NxdWFyZSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbmJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwicG9rZWRleGZvbnRcXFwiO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0d2lkdGg6IDE1MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRib3JkZXI6IDZweCBzb2xpZCBncmF5O1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+fSAqL1xuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIExhdGluOiB7XG4gICAgc3BhOiAnIGRlfGRlIHxvcyB8IGxhfCBhIHxsYSB8IHkgfMOzbiB8acOzbnxlcyB8ZXJlfHJlY3xpZW58byBhfGRlcnxjacOzfGNob3xlY2h8ZW4gfGEgcHxlbnR8YSBsfGFjaXxlbCB8bmEgfG9uYXxlIGR8IGNvfGFzIHxkYSB8IHRvfGFsIHxlbmV8IGVufHRvZHwgcGV8ZSBsfCBlbHxobyB8bnRlfCBzdXxwZXJ8YSB0fGFkIHwgdGl8ZXJzfHRpZXwgc2V8cnNvfHNvbnxlIHN8IHByfG8gZHxvZGF8dGUgfGNpYXxuIGR8IGVzfGRhZHxpZGF8IGlufG5lIHxlc3R8aW9ufGNpb3xzIGR8Y29ufGEgZXwgcG98bWVufCBsaXxuIGV8bmNpfHJlc3xzdSB8dG8gfHRyYXwgcmV8IGxvfHRhZHwgbmF8bG9zfGEgc3wgbyB8aWEgfHF1ZXwgcGF8csOhIHxwcm98IHVufHMgeXx1YWx8cyBlfGxpYnxuYWN8ZG8gfHJhIHxlciB8YSBkfHVlIHwgcXV8ZSBlfHN0YXxuYWx8YXIgfG5lc3xpY2F8YSBjfHNlcnxvciB8dGVyfHNlIHxwb3J8Y2NpfGlvIHxkZWx8bCBkfGRlc3xhZG98bGVzfG9uZXxhIGF8bmRpfCBzb3wgY3V8cyBwfGFsZXxzIG58YW1lfHBhcnxpY2l8b2NpfHVuYXxiZXJ8cyB0fHJ0YXxjb218IGRpfGRvc3xlIGF8aW1pfG8gc3xlIGN8ZXJ0fGxhc3xvIHB8YW50fGRpY3xudG98IGFsfGFyYXxpYmV8ZW5jfG8gZXxzIGx8Y2FzfCBhc3xlIHB8dGVufGFsaXxvIHR8c29jfHkgbHxuIGN8bnRhfHNvIHx0b3N8eSBhfHJpYXxuIHR8ZGllfGEgdXwgZnV8bm8gfGwgcHxpYWx8cXVpfGRpc3xzIG98aG9zfGd1YXxpZ3V8IGlnfCBjYXxzYXJ8bCB0fCBtYXxsIGV8cHJlfCBhY3x0aXZ8cyBhfHJlIHxuYWR8dmlkfGVyYXwgdHJ8aWVyfGN1YXxuIHB8dGEgfGNsYXxhZGV8YnJlfHMgc3xlc2F8bnRyfGVjY3xhIGl8IGxlfGxpZHxkYXN8ZCBkfGlkb3xhcml8aW5kfGFkYXxuZGF8ZnVufG1pZXxjYSB8dGljfGVsaXx5IGR8bmlkfGUgaXxvZG98aW9zfG8geXxlc3B8aXZhfHkgZXxtYXR8YmxpfHIgYXxkcsOhfHRyaXxjdGl8dGFsfHJpbXxvbnR8ZXLDoXx1cyB8c3VzfGVuZHxwZW58dG9yfGl0b3xvbmR8b3JpfHVpZXxsaWd8biBhfGlzdHxyYWN8bGFyfHJzZXx0YXJ8bW8gfG9tb3xpYnJ8biBsfGVkaXxtZWR8IG1lfG5pb3xhIHl8ZWRhfGlzZnxsbyB8YXNvfGwgbXxpYXN8aWNvfGxpY3xwbGV8c3RlfGFjdHx0ZWN8b3RlfHJvdHxlbGV8dXJhfCBuaXxpZSB8YWRpfHUgcHxzZWd8cyBpfHVuIHx1bmR8YSBufGxxdXxhbHF8byBpfGluY3xzdGl8IHNpfG4gc3xlcm4nLFxuICAgIGVuZzogJ3RoZXwgdGh8IGFufGhlIHxuZCB8aW9ufGFuZHwgdG98dG8gfHRpb3wgb2Z8b24gfG9mIHwgaW58YWwgfGF0aXxvciB8Z2h0fGlnaHxyaWd8IHJpfG5lIHxlbnR8b25lfGxsIHxpcyB8YXMgfHZlcnxlZCB8IGJlfGUgcnxpbiB8dCB0fGFsbHxldmV8aHQgfCBvcnxlcnl8cyB0fHR5IHwgZXZ8ZSBofHlvbnwgaGF8cnlvfGUgYXxiZSB8aGlzfCBmcnxuZyB8ZCB0fGhhc3wgc2h8aW5nfCBoaXxzaGF8IHByfCBjb3wgcmV8aGFsfG5hbHx5IGF8cyBhfG4gdHxjZSB8bWVufHJlZXxmcmV8ZSBzfGwgYnxuYXR8Zm9yfHRzIHxudCB8biBhfGl0eXxyeSB8aGVyfG5jZXxlY3R8ZCBpfCBwZXxwcm98biBvfGN0aXwgZm98ZSBlfGx5IHxlcyB8IG5vfG9uYXxueSB8YW55fGVyIHxyZSB8ZiB0fGUgb3wgZGV8cyBvfCB3aXx0ZXJ8bnRlfGUgaXxvbnN8IGVufCBhcnxyZXN8ZXJzfHkgdHxwZXJ8ZCBmfCBhIHwgb258aXRofGwgYXxlIHR8b2NpfHNvY3xsaXR8IGFzfCBzZXxkb218ZWRvfGVlZHxudGl8cyBlfHQgb3xvdGh8d2l0fCBkaXxlcXV8dCBhfHRlZHxzdCB8eSBvfGludHxlIHB8IG1hfCBzb3wgbmF8bCBvfGUgY3xjaCB8ZCBhfGVuY3x0aCB8YXJlfG5zIHxpYyB8IHVufCBmdXx0YXR8aWFsfGNpYXwgYWN8aHRzfG5pdHxxdWF8IGVxfCBhbHxvbSB8ZSB3fGQgb3xmIGh8YWxpfG90ZXxuIGV8IHdofHIgdHxzdGF8Z2UgfHRoaXxvIGF8dGl0fHVhbHxhbiB8dGUgfGVzc3wgY2h8bGUgfGFyeXxlIGZ8YnkgfCBieXx5IGl8dGVjfHVuaXxvIHR8byBvfCBsaXxubyB8IGxhfHMgcnwgc3V8aW5jfGxlZHxyb3R8Y29ufCBwdXwgaGV8ZXJlfGltaXxyIGF8bnRyfCBzdHwgb3R8ZWxpfGFnZXxkaXN8cyBkfHRsZXxpdGx8aG91fHNvbnxkdWN8ZWR1fCB3b3xhdGV8YmxlfGNlc3xhdCB8IGF0fCBmYXxjb218aXZlfG8gc3xlbWV8byBlfGF3IHxsYXd8dHJhfHVuZHxwZW58bmRlfHVudHxvdW58biBzfHMgZnxmIGF8dGhvfG1zIHwgaXN8YWN0fGNpZXxjYXR8dWNhfCBlZHxhbmN8d29yfHJhbHx0IGl8IG1lfG8gZnxpbHl8cHJpfHJlbnxvc2V8cyBjfGVuIHxkIG58bCBjfGZ1bHxyYXJ8bnRhfG5zdHwgYWd8bCBwfG1pbnxkaW58c2VjfHkgZXwgdHJ8cnNvfGljaHxoaWN8d2hpfGNvdXxlcm58dXJpfHIgb3x0aWN8aXRpfGlnaXxsaWd8cmF0fHJ0aHx0IGZ8b21zfHJpdHxkIHJ8ZWUgfGUgYnxlcmF8cm91fHNlIHxheSB8cnMgfCBob3xhYmx8ZSB1JyxcbiAgICBwb3I6ICdkZSB8IGRlfCBzZXzDo28gfG9zIHx0byB8ZW0gfCBlIHxkbyB8byBkfCBkaXxlciB8aXRvfGVpdHxzZXJ8ZW50fMOnw6NvfCBhIHxkaXJ8aXJlfHJlaXxvIHN8YWRlfGRhZHx1bWF8YXMgfG5vIHxlIGR8IHRvfG50ZXwgY298byB0fHRvZHwgb3V8bWVufHF1ZXxzIGV8bWFufCBwcnwgaW58IHF1fGVzIHwgdGV8aHVtfG9kb3xlIGF8ZGEgfCBodXxhbm98dGUgfGFsIHx0ZW18byBlfHMgZHxpZGF8bSBkfCBwZXwgcmV8byBhfG91IHxyIGh8ZSBzfGNpYXxhIGV8IGxpfG8gcHwgZXN8cmVzfCBkb3wgZGF8IMOgIHx1YWx8IGVtfCBzdXxhw6fDo3xkb3N8YSBwfHRyYXxlc3R8aWEgfGNvbnxwcm98YXIgfGUgcHxpcyB8IG5hfHLDoSB8cXVhfGEgZHwgcGF8Y29tfGFpc3xvIGN8YW1lfGVyw6F8IHBvfHVlcnxzdGF8YmVyfHRlcnwgbyB8ZXNzfHJhIHxlIGV8ZGFzfG8gw6B8bnRvfG5hbHxvIG98YSBjfGlkb3xyZGF8ZXJkfCBhc3xuY2l8c3VhfG9uYXxkZXN8aWJlfGxpYnxlIHR8YWRvfHMgbnx1YSB8cyB0fHVlIHwgc298aWNhfG1hIHxscXV8YWxxfHRvc3xtIHN8YSBsfHBlcnxhZGF8b2NpfHNvY3xjaW98YSBufHBhcnxhY2l8cyBhfHByZXxvbnR8bSBvfHVyYXxhIHN8IHVtfGlvbnxlIG98b3IgfGUgcnxwZWx8bnRhfG50cnxhIGl8aW8gfG5hY3zDqm5jfHN0cnxhbGl8cmlhfG5zdHwgdHJ8YSBxfGludHxvIG58YSBvfGNhIHxlbGF8dcOnw6N8bGlkfGUgbHwgYXR8c2VufGVzZXxyIGR8cyBwfGVndXxzZWd8dmlkfHByaXxzc298w6ltIHxpbWV8dGljfGRpc3xyYcOnfGVjaXxhcmF8IGNhfG5pZHx0cnV8w7Vlc3xhc3N8c2V1fHBvcnxhIGF8bSBwfCBleHxzbyB8ciBpfGXDp8OjfHRlw6d8b3RlfHJvdHwgbGV8IG1hfGluZ3xhIHR8cmFufGVyYXxyaW98bCBkfGVsaXzDp2EgfHN0aXwgbmV8Y2lkfGVybnx1dHJ8b3V0fHIgZXxlIGN8dGFkfGd1YXxpZ3V8IGlnfCBvc3xzIG98cnXDp3xpbnN8w6fDtWV8aW9zfCBmYXxlIG58c3NlfCBub3xyZSB8YXJ0fHIgcHxyYXJ8dSBwfGluY3xsZWl8Y2FzfGljb3x1w6ltfGd1w6l8bmd1fG5pbnwgbml8Z3VyfGxhIHxwZW58bsOnYXxuYSB8acOnw6N8acOjb3xjaWV8aXN0fHNlbXx0YSB8ZWxlfGUgZnxvbSB8dHJvfCBhb3xyZWx8bSBhfHMgc3x0YXJ8ZWRhfGllZHx1bml8ZSBtfHMgaXxhIGZ8aWFzfCBjdXwgYWN8ciBhfMOhIGF8cmVtfGVpIHxvbW98cmVjfGZvcnxzIGZ8ZXNjfGFudHzDoCBzfCB2aXxvIHF8dmVyfGEgdXxuZGF8dW5kfGZ1bicsXG4gICAgaW5kOiAnYW4gfGFuZ3xuZyB8IGRhfGFrIHwgcGV8YXRhfCBzZXwga2V8IG1lfGRhbnwgZGl8IGJlfGJlcnxrYW58cmFufGhha3xwZXJ8eWFufCB5YXxuZ2F8bnlhfGdhbnwgYXR8YXJhfCBoYXxlbmd8YXNhfG9yYXxtZW58biBwfG4ga3xlcmh8cmhhfG4gZHx5YSB8YXAgfGF0IHxhcyB8dGFufG4gYnxhbGF8YSBkfCBvcnxhIHN8c2FufHRhc3xldGl8dWsgfHBlbnxnIGJ8c2V0fG50dXxuIHl8dGlhfGlhcHxrIG18ZWJhfGFhbnwgdW58biBzfHR1a3xrIGF8cCBvfGFtIHxsYW18IG1hfHVudHwgZGV8dGVyfGJhc3xiZWJ8ZGFrfGVuZHxpIGR8cHVufG1lbXx0YXV8ZGFsfGFtYXxrZWJ8YWthfGlrYXxuIG18IGJhfGRpIHxtYSB8IHNhfGRlbnxhdSB8bmRhfG4gaHxlcml8IHRpfGVsYXxrIGR8dW4gfG4gYXxlYmV8YW5hfGFoIHxyYSB8aWRhfHVrYXwgdGV8YWwgfGFkYXxyaSB8b2xlfHRpZHxuZ2d8bGFrfGxlaHxkYXB8YSBwfGRpbHxnIGR8ZW5hfGVoIHxnYXJ8bmEgfGVydHxhcGF8dW0gfHR1IHxhdHV8YSBtfHNhbXxpbGF8aGFyfG4gdHxhc2l8YmFufGVybHx0IGR8YmF0fHVhdHx0YSB8bGFufGFkaXxoIGR8bmVnfCBuZXxrdW18bWFzfG5hbnxwYXR8YWhhfCBpbnxsIGR8ZW1wfHNlbXxydXN8c3VhfHNlcnx1YW58ZXJhfGFyaXxlcmJ8a2F0fG1hbnxhIGJ8ZyBzfHJ0YXxhaSB8bm55fG4gdXx1bmd8bmRpfGhhbnx1a3V8aHVrfCBodXxzYSB8ZXJzfGluIHwgbGF8a2EgfCBzdXxhbm58Y2FyfGtlc3xha3V8ZGlwfGkgc3xhIGF8ZXJrfG4gaXxsYWl8cmdhfGFydXxrIGh8aSBtfHJrYXxhIHV8dXMgfG5ha3xlbWJ8Z2dhfG50YXxpYmF8IHB1fGluZHxzIHB8ZW50fG1lbHxpbmF8bWlufGlhbnxkYXJ8bmkgfHJtYXxsdWF8cmlrfG5kdXxsaW58c2lhfHJidXxnIHB8ayBzfGRhIHxheWF8ZXNlfHUgZHxlZ2F8bmFzfGFyIHxpcGV8eWFyfHN5YXxpayB8YWdhfCB0YXxhaW58dWEgfGFyZ3x1YXJ8aW55fHBlbXx1dCB8c2kgfGR1bnxlb3J8c2VvfHJha3xuZ3N8YW1pfGtlbHxpbml8ZyB0fGRpa3xtZXJ8ZW11fGFrc3xyYXR8dXJ1fGV3YXxpbCB8ZW51fGFueXxrZXB8cGVsfGFzdXxybGl8aWEgfGRpcnxqYW18bWJhfG1hdHxwYW58ZyBtfHNlc3xzYXJ8ZGFzfGt1a3xib2x8aWxpfHUga3xnc2F8dSBwfGEga3xlcm58YW50fHJhYXx0IHB8ZW1hfG11YXxpZGl8ZGlkfHQgc3xpIGt8cmlufGVybXxlc3V8Z2VyfGVsdXxuamF8ZW5qfGdhIHxkaXQnLFxuICAgIGZyYTogJyBkZXxlcyB8ZGUgfGlvbnxudCB8dGlvfGV0IHxuZSB8b24gfCBldHxlbnR8bGUgfG9pdHxlIGR8IGxhfGUgcHxsYSB8aXQgfCDDoCB8dCBkfHJvaXxkcm98IGRyfCBsZXx0w6kgfGUgc3xhdGl8dGUgfHJlIHwgdG98cyBkfG1lbnx0b3V8ZSBsfG5zIHwgcGV8IGNvfHNvbnxxdWV8IGF1fCBzb3xlIGF8b25ufG91dHwgdW58IHF1fCBzYXwgcHJ8dXRlfGVtZXwgbOKAmXx0IMOgfCBhIHxlIGV8Y29ufGRlc3wgcGF8dWUgfGVyc3xlIGN8IGxpfGEgZHxwZXJ8b250fHMgZXx0IGx8bGVzfHRzIHx0cmV8cyBsfGFudHwgb3V8Y3RpfHJzb3xvdSB8Y2UgfHV4IHzDoCBsfG5uZXxvbnN8aXTDqXxlbiB8dW4gfCBlbnxlciB8dW5lfG4gZHxzYSB8bGxlfCBpbnxudGV8ZSB0fCBzZXxsaWJ8cmVzfGEgbHxpcmV8IGTigJl8IHJlfMOpIGR8bmF0fGlxdXx1ciB8ciBsfHQgYXxzIHN8YXV4fHBhcnxuYWx8YSBwfGFuc3xkYW58cXVpfHQgcHwgZMOpfHByb3xzIHB8YWlyfCBuZXwgZm98ZXJ0fHMgYXxuY2V8YXUgfHVpIHxlY3R8ZHUgfG9uZHxhbGV8bGl0fCBwb3xzYW58IGNofMOpcyB8IG5hfHVzIHxjb218b3VyfGFsaXx0cmF8IGNlfGFsIHxlIG98ZSBufHJ0w6l8YmVyfGliZXx0ZXN8ciBkfGUgcnxpdHN8IGRpfMOqdHJ8cG91fMOpdMOpfHMgY3zDoCB1fGVsbHxpbnR8Zm9ufG9jaXxzb2N8dXQgfHRlcnwgZGF8YXV0fGllbnxyYWl8IGRvfGlzc3xzIG58IG1hfGJsaXxnZSB8ZXN0fHMgb3wgZHV8b25hfG4gcHxwcml8cnMgfMOpZ2F8IMOqdHxvdXN8ZW5zfGFyIHxhZ2V8cyB0fCBzdXxjaWF8dSBkfGN1bnxyYXR8IGVzfGlyIHxuIGN8ZSBtfCDDqXR8dCDDqnxhIGN8IGFjfG90ZXxuIHR8ZWlufCB0cnxhIHN8bmRpfGUgcXxzdXJ8w6llIHxzZXJ8bCBufCBwbHxhbmN8bGlnfHQgc3xuIGV8cyBpfHQgZXwgw6lnfGFpbnxvbW18YWN0fG50cnx0ZWN8Z2FsfHVsIHwgbnV8IHZpfG1lIHxuZGF8aW5kfHNvaXxzdCB8IHRlfHBheXx0YXR8ZXJhfGlsIHxyZWx8biBhfGRpc3xuIHN8cHLDqXxwZXV8cml0fMOpIGV8dCDDqXxicmV8c2VufGlsbHxs4oCZYXxk4oCZYXwgbW98YXNzfGxpY3xhcnR8IHB1fGFibHxudGF8dCBjfHJvdHwgb258IGxvfHVyZXxs4oCZZXxhdmF8dGVufG51bHxpdml8dCBpfGVzc3x5cyB8YXlzfCBmYXxpbmV8ZXVyfHLDqXN8Y2xhfHTDqXN8b2lyfGV1dHxlIGZ8dXRyfGRvaXxpYnJ8YWlzfGluc3zDqXJhfOKAmWVufGnDqXR8bCBlfHMgw6l8bnTDqXwgcsOpfHNzaXwgYXN8bnNlfGNlc3zDqSBhJyxcbiAgICBkZXU6ICdlbiB8ZXIgfGRlcnxlaW58IHVufG5kIHx1bmR8dW5nfGNodHxpY2h8IGRlfHNjaHxuZyB8IGdlfGluZXxlY2h8Z2VufHJlY3xjaGV8aWUgfCByZXxlaXR8IGF1fGh0IHxkaWV8IGRpfCBoYXxjaCB8IGRhfHZlcnwgenV8bGljfHQgZHxpbiB8YXVmfCBlaXwgaW58IGJlfGhlbnxuZGV8biBkfHVmIHxlZGV8IHZlfGl0IHx0ZW58biBzfHNlaXxhdCB8amVkfCBqZXwgc2V8YW5kfHJlaXxzIHJ8ZGVufHRlcnxuZSB8aGF0fHQgYXxyIGh8enUgfGRhc3xvZGV8IG9kfGFzIHxlcyB8IGFufGZyZXxuZ2V8IHdlfG4gdXxydW58IGZyfGVyZXxlIHV8bGxlfG5lcnxudGV8aGVpfGVzZXwgc298cmRlfHdlcnxpZ2V8IGFsfGVyc3xuIGd8aHRlfGQgZHwgc3R8biBqfGxlaXxhbGx8biBhfG5lbnxlZ2V8ZW50fGJlaXxnIGR8ZXJkfHQgdXxyZW58bnNjfGNodXwgZ3J8a2VpfGVuc3xsZSB8YmVufGFmdHxoYWZ8Y2hhfHRsaXxnZXN8ZSBzfCBzaXxtZW58IHZvfGx1bnxlbSB8ciBzfGlvbnx0ZSB8bGVufGdydXxndW58dGlnfHVudHx1Y2h8c3ByfG4gZXxmdCB8ZWkgfGUgZnwgd2l8IHNjfHIgZHxuIG58Z2VofHIgZ3xkYXJ8c3RhfGVya3wgZXJ8ciBlfHNlbnxlaWN8Z2xlfCBnbHxsaWV8ZSBlfHR6IHxmZW58biBpfG5pZXxmIGd8dCB3fGRlc3xjaGx8aXRlfGloZXxlaWh8aWVzfHJ1Y3xzdCB8aXN0fG4gd3xoIGF8biB6fGUgYXwgbml8YW5nfHJmIHxhcmZ8Z2VtfGFsZXxhdGl8b24gfGhlIHx0IHN8YWNofCBuYXxlbmR8biBvfHBydXxhbnN8c3NlfGVybnxhYXR8dGFhfGVoZXxlIGR8aGxpfGhyZXxpbnR8dGlvfGhlcnxuc3B8ZGUgfG1laXwgYXJ8ciBhfGZmZXxlIGJ8d2llfGVyZnxhYmV8aGFifG5kbHxuIHZ8c2ljfHQgaXxoYW58ZW1hfG5hdHxiZXJ8aWVkfGdlZ3xkIHN8bnVufGQgZnxpbmR8IG1lfGdrZXxpZ2t8aWXDn3wgZmF8aWd1fGh1bHxyIHZ8ZGlnfHJjaHx1cmN8ZHVyfCBkdXx1dHp8aHV0fHRyYXxhdXN8YWx0fGJlc3xzdHJ8ZWxsfHN0ZXxnZXJ8ciBvfGVzY3xlIGd8cmJlfGFyYnxvaG58ciBifG1pdHxkIGd8ciB3fG50bHxzb3d8biBofG5uZXxldHp8cmFmfGRsdXwgaWh8bHRlfG1hbnxpZW18ZXJofGVydXwgaXN8ZGVtfGxhbnxydCB8c29ufGlzY3xlbGl8cmVsfG4gcnxlIGl8cmxpfHIgaXwgbWl8ZSBtfGlsZHxiaWx8IGJpfGVtZXwgZW58aW5zfGbDvHJ8IGbDvHxnZWx8w7ZmZnwgw7ZmfG93aXxpbGx8d2lsfGUgdnxyaWN8ZiBlJyxcbiAgICBqYXY6ICduZyB8YW4gfCBrYXxhbmd8aW5nfGthbnwgc2F8YWsgfGxhbnwgbGF8aGFrfCBwYXwgaGF8YXJhfG5lIHxhYmV8IGlufG4ga3xuZ2d8b25nfGFuZXxuZ2F8YW50fHdvbnx1d298IGFufCB1d3xuaW58YXRhfG4gdXxlbiB8cmEgfHRhbnwgZGF8cmFufGFuYXwgbWF8bnRofGFrZXxiZW58YmVifGhpIHxrZSB8c2FifG5kYXwgbmd8YWRpfHRoaXxuYW58YSBrfCBiYXxzYW58YXNhfG5pIHxlIGh8ZSBrfGcga3wgdXR8cGFufGF3YXwgYmV8ZWJhfGdhbnxnIHB8ZGFufCB3YXxiYXN8YWthfGRoYXx5YW58c2EgfGFyYnxtYW58IGRpfHdhIHxnIGR8IG5hfGcgbnxiYW58IHR1fG4gc3x1bmd8d2VufGcgc3xyYmV8ZGFyfGRha3xkaSB8ZyB1fG9yYXxheWF8YmUgfGFoIHxhIHN8ZW5pfCBvcnxoYW58YXMgfCBwcnxhIG58bmEgfGl5YXxhIGF8a2FyfGF0IHxhIGx8bWFyfHV3ZXxkdXd8dXRhfHVuZHxuIHB8YXNpfHBhIHwgc2l8YWxhfG4gbnwgdW58a2FifG9uaXx5YSB8aSBofGdhcnxnIGJ8eWF0fHR1bXx0YSB8biBtfGkga3xhcGF8dGF3fCBsaXxhbml8IGtlfGFsIHxrYSB8a2FsfG5na3xlZ2F8IG5lfG5hbHxuIGl8ZyBhfGdnb3xpbmF8d2UgfGVuYXxkYWR8aWJhfGF3aXxhZ2F8YSBwfCB0YXxzYXJ8YWRofGF3ZXxhbmR8dWp1fGluZHxtaW58c2lufG5kdXx1d2F8Z2dlfG4gbHxnZ3V8bmdzfG4gYnxhIGJ8cHJhfGlqaXxuIGF8aGEgfCBiaXxrYXR8Z28gfCBrdXxlIHB8cm9ufGtha3xuZ3V8YSB1fGdzYXx3YXJ8bnlhfGcgdHxwYWR8YmlzfGsgYnxpIHd8YWUgfHdhZXwgbmR8YWxpfGEgbXxlciB8c2FrfGUgc3xrdSB8bGl5fGFtYXxpIGx8ZWggfGlzYXxhcmd8biB0fGEgZHxrYXB8aSBzfGF5b3xnYXl8IHBlfG5kaHxiYWR8cHJpfG5lZ3x0b3d8dXRvfGVkYXxiZWR8aWwgfGloIHwgaWt8dXIgfGsga3xydGF8YXJ0fGkgcHxyZ2F8bGFrfGFtaXxybyB8YXJvfHlvbXxyIGt8ZSBkfGEgd3xrb258cmlifGVuZ3xnZXJ8ZyBsfHJhc3xkaWx8IHRpfGsgbHxyYXB8bXJhfHVtYXwgcGl8ayBofG4gZHxnYXd8d2F0fGdhIHxrIG58YXIgfHBlcnwgd2V8b21hfGsgcHxqcm98YWpyfHNhanxhc2V8aW5pfGtlbnxzYXd8b25hfG5hc3xrYXN8aCBrfGkgdHwgdW18dGlufHdvIHwgbWV8YWJhfHJha3xwYWd8eWFyfHN5YXx0IGt8IHRlfCBtdXxuZ2x8IG5pfGkgYnxtZW58YXRlfGEgaXxha3V8ZWJ1fGEgdHwgZHV8ZyBtfG93b3xtYXR8IGx1fGFtcCcsXG4gICAgdmllOiAnbmcgfMyjYyB8zIFjIHwgcXV8YcyAIHwgdGh8bmggfCBuZ3zMo2kgfMyAbiB8dmHMgHwgdmF8IG5ofHV5w6p8IHBofHF1eXwgY2F8w6rMgG58ecOqzIB8zIBuaHzMgGkgfMyjdCB8IGNofG/MgSB8IHRyfG5nxrB8aSBufCBnaXxnxrDGoXzGocyAaXzGsMahzIB8zIF0IHwgY298xrDGocyjfCBjdXxhzIFjfMawzKMgfMahzKNjfCBraHwgxJHGsHzEkcawxqF8IHTGsHxjb8yBfCBoYXzDtG5nfGMgdHwgxJHDqnxuIHR8aSDEkXxpzIBufMyAdSB8Y2HMgXxnaWF8zIFpIHxvzKNpfG1vzKN8IG1vfMOqzIB1fGnDqsyjfMSRw6rMgHx1IGN8bmjGsHxwaGF8IGJhfCBiaXzDosyBdHzMiWEgfHXMiWF8Y3XMiXxow7RufCDEkcO0fGcgdHzMgSBxfMyDbmd8IHRpfHTGsMyjfHQgY3zMo24gfCBsYXxuIMSRfG4gY3xuIG58aGnDqnxjaCB8YXkgfGhheXwgdml8w6JuIHwgxJFpfCBuYXxiYcyJfCBob3xkbyB8IGRvfCB0w7R8IGhpfMO0zKNpfGhhzIF8acyjIHxuYcyAfMyAIHR8xqHMgWl8aMOibnwgbcO0fMyBcCB8YcyAbnzMoyBkfMyBY2h8zKNwIHzMgG8gfGHMgG98a2jDtHzMgW4gfMO0zKN0fG3DtMyjfCBow7R8aWEgfMO0zIFjfGMgaHxoxrDMg3xpIHZ8ZyBufMyBbmd8dcO0zIF8cXXDtHxoIHR8w7RuIHzDqm4gfG4gdnxuaMOifMyjIHR8IGLDonxpIGN8ZyB2fMyJbmd8acOqzIF8YyBjfMOizKN0fHRoxrB8aMawIHzGsMahzIF8zIluIHwgdsahfCBjw7R8YyDEkXwgxJFvfCBzxrB8dCB0fMO0zKNjfMawzINufHbGocyBfCB2w6p8YcyJIHzMo25nfGcgxJF8zIlvIHxhzIlvfHXDosyjfCDEkWF8YmnMo3xsYcyAfHPGsMyjfGLDosyBfGhhzIB8aMO0zKN8aSB0fGHMiW58aMawxqF8zIBuZ3x0cm98zIltIHxvIHZ8IG1pfMOqzIkgfHXMo2N8aSBofMawzIFjfGHMgXB8ZyBjfMyDIGh8aWHMgXxuIGJ8zIlpIHxhIG18aCBjfGPDtG58w6rMo258xqHMgWN8aGHMo3zEkcO0zKN8IGR1fCBjxrB8YSBjfG4gaHx0aGF8YcyDIHwgeGF8zIFvIHxhzIFvfGnMgW58zIB5IHxnIGJ8IGjGsHxnIGh8b25nfHJvbnzMgCBjfGNob3zMgCBufG1pzIB8xrDMo2N8aCB2fGMgYnwgbHV8aSBifMOqzKMgfGFpIHzDqsyBIHzMoyBjfHhhzIN8a2hhfGMgcXxpw6rMiXx0w7TMo3zDtMyBaXzEkcO0zIF8YcyBIHxob2F8byBofGggxJF8Y2HMiXxuIGx8aG/Mo3x0acOqfHkgdHzMiSBjfGHMo2l8YcyBbnzMgCDEkXxvYcyAfHkgxJF8Y2hpfMyJIG58cGjDonzDqsyAIHx0aHV8acOqbnxkdcyjfG8gY3xpIG18bHXDonxjIHB8w7TMgW58YyBsfMyBIGN8dcyDbnxjdcyDfGMgZ3xjIG58cXVhfG4gZ3xjIG18byBufGHMiWl8aGHMiXzMgSB0fGhvIHx2w6rMgHwgdMOifCBoxqF8byB0fMahzIkgfGjGsMyBfGhpzIB8dmnDqnzMgG0gfMyJIHR8xJFvzIF8dGjDtHzGsMyBIHxjxrDMgXxoacyBfMyBbmh8YcyAeXzGocyJbnzGsMahzIl8IGLEg3x0cml8IHRhfG0gdnxjIHZ8xqHMo3B8aMahzKN8aCBtfCBuxrB8w6rMgXR8dGhpfMSDzKNjfG5naHx1eSAnLFxuICAgIGl0YTogJyBkaXx0byB8IGlufGlvbnxsYSB8IGRlfGRpIHxyZSB8ZSBkfG5lIHwgZSB8emlvfHJpdHxhIGR8b25lfG8gZHxuaSB8bGUgfGxsYXxpdHR8ZXNzfCBhbHxpcml8ZGlyfHR0b3xlbnR8ZWxsfGkgaXxkZWx8bmRpfGVyZXxpbmR8byBhfCBjb3x0ZSB8dMOgIHx0aSB8YSBzfHVvIHxlIGV8Z25pfGF6aXwgcHJ8aWR1fGl2aXxkdW98dmlkfGRpdnxvZ258IG9nfCBlc3xpIGV8IGhhfGFsbHxhbGV8bnRlfGUgYXxtZW58c2VyfCBzdXwgbmV8ZSBsfHphIHxpIGR8cGVyfGEgcHxoYSB8IHBlfCB1bnxjb258bm8gfHNzZXxsaSB8ZSBpfCBvIHwgc298IGxpfCBsYXxwcm98aWEgfG8gaXxlIHB8byBzfGkgc3xpbiB8YXRvfG8gaHxuYSB8ZSBzfGEgbHxlIG98bnphfGFsaXx0dGl8byBwfHRhIHxzbyB8YmVyfGliZXxsaWJ8byBlfHVuIHwgYSB8IHJpfHVhIHxpbCB8IGlsfG50b3xwcml8ZWwgfCBwb3x1bmF8YXJlfGFtZXwgcXV8YSBjfHJvIHxvbml8bmVsfGUgbnwgYWR8dWFsfGdsaXxzdWF8b25kfCByZXxhIGF8aSBjfHJpIHxvIG98c3RhfGl0YXxpIG98IGxlfGFkIHxpIGF8ZXJzfGVuenxzc2l8w6AgZXxpdMOgfGd1YXxpIHB8ZSBjfGlvIHwgcGF8dGVyfHNvY3xuYWx8b25hfG5henxpc3R8Y2lhfHJzb3x2ZXJ8YSBlfGkgcnx0YXR8bGxlfHNpYXwgc2l8cmlvfHRyYXxjaGV8IHNlfHJ0w6B8ZXJ0fGFuenxlcml8dHV0fMOgIGR8aGUgfCBkYXxhbCB8YW50fHF1YXxvbiB8YXJpfG8gY3wgc3R8b2NpfGVyIHxkaXN8dHJpfHNpIHxlZCB8IGVkfG9ub3wgdHV8ZWkgfGRlaXx1eml8Y29tfGF0dHxhIG58b3ByfHJvcHxwYXJ8bmVzfGkgbHx6emF8ZXNlfHJlc3xpZW58c29ufCBlZ3xuIGN8b250fG50aXxwb3N8aW50fGljb3xyw6AgfHN1bnxpYWx8bGl0fHNlbnxwcmV8dHRhfGRldnxuaXR8ZXJhfGV2ZXxsbCB8bCBpfCBsIHxuZGF8aW5hfG5vbnwgbm98byBufHJpYXxzdHJ8ZCBhfGFydHxzZSB8c3N1fGljYXxyYXp8ZXR0fHNjaXxnaW98YXRpfGVndXwgbmF8aSB1fHV0dHx2ZSB8IG1hfGRvIHxlIHJ8c3NhfHNhIHxhIGZ8biBwfGZvbnwgY2h8ZCB1fHJpbXwgZm98YSB0fCBzY3x0csOgfG90cnxwb3R8biBpfCBjdXxsIHB8cmEgfGV6enxhIG98aW5pfHNzb3xkaWN8bHRyfHVuaXxjaWV8IHJhfGkgbnxydXp8dHJ1fHN0ZXwgaXN8ZGVyfGwgbXxhIHJ8cGllfGxpYXxlc3R8ZGFsfG50YXwgYXR8dGFsfG50cnwgcHV8bm5vfGFubnx0ZW58dml0fGEgdicsXG4gICAgdHVyOiAnIHZlfCBoYXx2ZSB8aXIgfGxlcnxoYWt8IGhlfGhlcnxpbiB8bGFyfHIgaHxiaXJ8eWEgfGVyIHxhayB8a2vEsXxha2t8ZXRpfCBrYXwgYml8ZXlhfGFuIHxlcml8aXllfHlldHxhcmF8ZWsgfCBvbHxkZSB8dmV5fMSxbiB8xLFyIHxuZGF8YXLEsXxlc2l8xLFuxLF8ZMSxcnwgdGF8dGxlfGUgaHxhc8SxfGV0bHxlIGt8IHZhfMSxIHZ8c8SxbnxpbGV8bmUgfHJrZXxlcmt8YXJkfGluZXwgc2F8xLFuZHxpbml8ayBofGvEsW58YW1hfGxlIHx0aW58cmTEsXx2YXJ8YSB2fCBtZXxlIG18bmEgfHNpbnxlcmV8ayB2fCDFn2F8IGJ1fGxhbnxrZXN8ZGlyfHJpbnxkYW58IG1hfGvEsSB8bWFrfMWfYWh8ZGEgfCB0ZXxtZWt8IGdlfG7EsSB8IGhpfG5pbnxlbiB8biBofCBzZXxsaWt8cmxlfGFuYXxsbWF8ZSBhfMSxIGh8ciDFn3xpbGx8c2kgfCBkZXxheWF8emRpfGl6ZHxhaXp8aGFpfHJldHxoacOnfMSxbmF8IGnFn3xlIGJ8IGJhfGtsYXxldCB8IGjDvHxyxLFufG4ga3xvbGF8bm1hfGUgdHwgeWF8ZW1lfHJpeXxuIHZ8ZSBpfGEgaHxsaSB8bWlsfGVsaXxrZXR8aWsgfGthcnxpcmx8aMO8cnxpbSB8ZXZsfG1lc3xlIGR8YWhzfG1hIHxyYWt8YWxhfGxldHxsbGV8dW4gfCBlZHxycml8w7xycnxidSB8IG1pfGkgdnxkaWx8IGlsfCBlxZ98biBpfGxhIHxlbCB8bWFsfCBtw7x8IGtvfGUgZ3xzZSB8IGtpfG1hc3xsZWt8bWxlfG1lbXxuIGJ8aWxpfGUgZXxzZXJ8IGnDp3xuIHN8ZGlufCBkaXxlcyB8bWVsfGVrZXx0aXJ8xZ9pdHxlxZ9pfHIgYnxha2x8eWxhfG4gbXxsZW58IGtlfGVkaXxvcnV8bmRlfHJlIHxlbGV8bmkgfHTDvHJ8YSBrfGV5ZXzEsWsgfGtlbnx1xJ91fCB1eXxlbWx8ZXJkfGVkZXxhbWV8IGfDtnxlIHN8aSBtfHRpbXxpIGJ8cmRlfHLFn8SxfGFyxZ98YSBzfGl0IHx0IHZ8c2l5fGFyIHxybWV8ZXN0fGJlc3xyYmV8ZXJifHRlIHxhbMSxfCBhbnxuZGl8ZW5kfGhzxLF8dW5tfHLEsSB8a29yfG7EsW58IGNlfG1henxtc2V8aW1zfGtpbXxpw6cgfCBheXxhIG18bGFtfHJpIHxzxLF6fGEgYnxhZGV8biB0fG5hbXxsbWV8aWxtfGsgZ3xpbCB8dG1lfGV0bXxyIHZ8ZSB2fG4gZXzEn3JlfMO2xJ9yfCDDtsSffGFsIHzEsXlsfG9sbXx2bGV8xZ9tYXxpIHN8Z2VyfG1lIHwgZGF8aW5kfGxlbXxpIG98bWF5fGNha3zDp2lufGnDp2l8bnVufGthbnx5ZSB8ZSB5fHIgdHxheiB8w6cga3xlY2V8c8SxIHxlbml8IG11fHVsdXx1bmR8ZGVufGx1bnwgZmF8xZ/EsSB8YWhpfGwgdnxyIGF8c2FufGthdHwgc298ZW5tfCBldnxpxZ8gJyxcbiAgICBwb2w6ICcgcHJ8bmllfHByYXwgaSB8bmlhfGllIHxnbyB8YW5pfHJhd3xpYSB8IHBvfGVnb3wgZG98d2llfGlla3xhd298IG5pfG93aXxjaCB8ZWsgfGRvIHwgbWF8d28gfGEgcHzFm2NpfGNpIHxlaiB8IGN6fCB6YXwgdyB8eWNofG/Fm2N8cnplfHByenwga2F8d2EgfGVuaXwgbmF8IGplfGHFvGR8a2HFvHxtYSB8esWCb3xjesWCfG5vxZt8byBkfMWCb3d8eSBjfGR5IHzFvGR5fGkgcHx3b2x8IGx1fG55IHxvbG58IHd5fHN0d3wgd298dWIgfGx1Ynxsbm98cm9kfGsgbXx0d2F8ZHppfG5hIHwgc3d8cnp5fGFqxIV8ZWN6fGN6bnxzdGF8IHNwfG93YXxvIHB8c3BvfGkgd3xraWV8YSB3fHp5c3xvYm98ZXN0fG5lZ3xhxIcgfG1pIHxjemV8ZSB3fG55Y3xuaWN8amFrfCBqYXx3c3p8IHogfGplZ3x3YW58xYRzdHxvIHN8YSBpfGF3YXxlIHB8eXN0fHBvc3xwb3d8IHLDs3xvIG98asSFY3xvbnl8bmVqfG93b3xkb3d8w7N3IHwga298a29sfGFraXxiZXp8cmFjfHN6ZXxpZWp8IGlufHplbnxwb2R8aSBpfG5pIHwgcm98Y3kgfG8gd3x6YW58ZcWEc3xubyB8em5lfGEgc3xsd2l8b2x3fGV6IHxvZG58csOzd3xvZHp8byB1fG5lIHxpIG58aSBrfGN6eXwgYmV8YWNqfHdvYnxpbm58IG9ifMOzd258emllfCB3c3xhbG58b3J6fG5pa3xvIG58aWN6fHp5bnzFgmVjfG/FgmV8cG/Fgnxhcm98bmFyfGEganxpIHp8dMSZcHxzdMSZfGllbnxjemF8byB6fHltIHx6ZWN8cm9ufGkgbHxhbWl8IG9zfGtyYXwga3J8b3dlfCBvZHxqaSB8Y2ppfG1pZXxhIHp8Ym9kfHN3b3xkbml8emVzfGXFgm58cGXFgnxpdSB8ZWRufGlrb3xhIG58cmFqfCBzdHxvZG98em5hfHd5Y3xlbSB8bG5pfHN6eXx3aWF8bnltfMSFIHB8asSFIHx6ZcWEfGllY3xwaWV8c3QgfGplc3wgdG98c29ifGt0w7N8YWxlfHkgd3xpZWd8b2NofGR1IHxpbml8d2FyfHphd3xubnl8cm96fGkgb3x3ZWp8acSZIHxzacSZfCBzaXxuYXV8IG9yfG8gcnxrb3J8ZSBzfHBvcHx6YXN8bml1fHogcHxvd3l8dyBrfHl3YXwgdGF8eW1pfGhyb3xjaHJ8IG9jfGplZHxraSB8byB0fG9nb3xvYnl8cmFufGFueXxvc298YSBvfHTDs3J8IGt0fHcgenxkbmV8dG8gfHRhbnxoIGl8bmFufGVqc3xhZGF8YSBrfGllbXxhdyB8aCBwfHduaXx1Y3p8b3JhfGEgZHwgd8WCfGlhbnwgZHp8IG1vfGUgbXxhd2l8xIcgc3xnYW58emV6fG11IHx0YXd8ZHN0fHdpxIV8dyBjfHkgcHxrb3d8byBqfGkgbXx5IHN8Ym93fGtvZ3xieSB8aiBvfGllcnxtb3d8c3phfGIgb3xqdSB8eW5hJyxcbiAgICBzd2g6ICdhIGt8IHlhfG5hIHx3YSB8eWEgfCBrdXxhIG18IG5hfCBoYXxpIHl8IHdhfGEgaHxhIG58YW5hfGFraXxraSB8bGEgfGhha3wga2F8a3dhfHR1IHwga3d8IG1hfGxpIHxhIGF8aWxhfGkga3wga2l8bmkgfGEgd3xhbGl8YSB1fCBhbnwgbXR8a2UgfG10dXxhIHl8YWtlfGF0aXxraWx8a2EgfGlrYXxrYXR8aWxpfHRlIHxvdGV8d2UgfGEgc3xlIGt8aWEgfHppIHx1IGF8emEgfGF6aXxpZmF8bWEgfHlha3x5byB8aSBufGFtYXwgeW98YXUgfCBhdXxlIGF8a3V0fGFtYnxvIHl8aGEgfGFzaXxmYSB8dSB3fGhhbHxhcmF8c2hhfGlzaHxhdGF8YXlvfCBhc3x0aWt8dSBrfCB6YXxpIHp8aW5hfHUgbnxtYmF8dWh1fGhpIHxodXJ8Y2hhfHlvdHxydSB8dXJ1fHdhdHwgY2h8ZXJpfG5naXxlIHl8dSB5fGkgYXxhaWZ8dGFpfCBzaHxuYXl8Y2hpfHJhIHxhbml8IGJpfCB1aHxzYSB8IGhpfGkgaHxhd2F8aXdhfGEganx0aSB8bXUgfG8ga3xqYSB8a2FufHVsaXxpd2V8YW55fGkgd3wgYW18ZSBufGVuZHxhdHV8a2F6fG8gaHxyaWF8aGVyfHNoZXxzaGl8bmNofCBuY3x1dGF8eWUgfHdha3xpaSB8ZWxlfGFtaXxhZGh8ZXphfCB3b3xpa2l8b2phfG1vanxqYW18IGphfGFrYXxidSB8a2FtfGt1bHxtYXR8ZmFufGEgbHxhZ3V8aW5kfG5lIHxpcml8bGltfHdlbnxkYSB8a3VwfHV0b3xpIG18YSBifGluaXx3YW58YmlsfCB0YXxzdGF8ZGhhfCBzYXwgbml8YW8gfCBodXxlIHd8d290fCB6aXxyaWt8a3VmfGFqaXx0YSB8d2V6fG55YXxoYXJ8IHllfGUgbXxzaSB8bGlufCB1dHxpbmV8Z2lufGluZ3wgbGF8YSB0fHppbXxpbXV8aW1hfHRha3xlIGJ8dW5pfGlidXxhem98a29zfHlhbnxueWV8dWJhfGFyaXxhaGl8bmRlfGFzYXxyaSB8aGFtfGRoaXxlbGl8aGlyfHVzaHxwYXR8IG5kfGt1c3xtYWF8ZGkgfG5kYXxvYSB8YmFyfGJvIHxtYm98b2thfHRva3xuZHd8YWxhfHdhbHwgc2l8dXppfGhpaXx0YWh8aSBzfG8gbnxsaXd8IGVsfHVwYXx6aW58aGFnfGEgY3xuZGl8YWlzfG1haXxlbnl8bXdlfGFhIHxld2V8IGFsfG5kb3xlIGh8bG8gfHVtaXxrdWh8amlifG9zYXxtYW18YSB6fHVmdXxkd2F8dSBpfCBpbnxpeW98bnlpfCBueXx1IG18c2lsfGFuZ3xvIHd8Z3V6fHp3YXx1d2F8a3V3fGhpbHxzYXd8dWNofHVmYXxsYXp8dW5kfGFoYXx1YSB8IG13fGJhbHwgbG98byBsfGEgaXxkZWx8bnVufGFudXxuaml8IGJhfGxpa3xsZSB8dWt1fGkgaScsXG4gICAgc3VuOiAnYW4gfG5hIHxldW58bmcgfCBrYXxhbmF8IHNhfCBkaXxhbmd8dW5nfHVuIHxuZ2F8YWsgfCBoYXxrZXV8IGJhfGEgYnwgYW58bnUgfGhha3wgYm98YW51fGF0YXxuYW58YSBofGluYXwgamV8YWhhfGdhIHxhaCB8YXdhfGpldXwgbmF8YXJhfGluZ3xvZ2F8Ym9nfGdhbnwgbmd8YXNhfGthbnxhIHN8aGEgfGFlIHxiYWV8biBrfGEga3wgcGF8YSBwfHNhaHxnIHN8c2FyfCBzaXxzaW58YSBufGRpbnxuIHN8bWEgfCBhdHxhZ2F8YSBhfHRhbnwga3V8IG1hfG4gYXxzYW58bWFufHdhIHxsYWh8cGFufHRhd3x1IGR8cmEgfGFyaXxldSB8IHBpfGdhcnwgcGV8a2F0fCB0ZXxuIHB8c2EgfHBlcnxhIGR8YSBtfGUgYnxhYW58YmFufHJhbnxhbGF8aWtlfG4gbnxrdW18IHRpfGFtYXxhIGp8cGlrfGltYXxuIGR8YWwgfGF0IHwgamF8aWxhfHRhIHxuZGF8YmFzfHJpbXx0ZXV8biBifGViYXxiZWJ8dWR1fGF5YXxpa2F8bmdnfG5hZ3xrYWJ8cnRhfGFydHwgbWV8b2xhfGsgbnx1bWF8YXR1fGFiYXxnIGt8YWRpfGFjYXwgcG98bmd0fG5hcnx1bmF8YXRlfG9oIHxib2h8YXdlfGRpIHx0aW58YXNpfHVrdXxuIGh8ZGFufGFrYXxpYmF8Y2FyfHNhY3xnYXd8YXJlfGVudHx1bSB8amVufGFiZXx1IHN8ZGlsfHBvbHxhciB8a3UgfGt1ZHx1IG18dXBhfGhhbnwgaHV8YWtlfGJhcnx1ciB8aG5hfGFydXxoIHN8YSB0fHNha3x3YXR8a2F3fCBzb3xuIHR8cGEgfG1wYXxkdSB8bmdrfGcgZHxlbmF8aHVrfCBtaXxtYXN8bmdzfHRpIHxuIGp8a2EgfGFrdXxyZW58biBtfCB0YXxsYXd8aXNhfCB0dXx1bmR8YSB1fGggYXx0YXl8dWxhfGFqYXxhbGl8bnRlfGdzYXxlbiB8Z2FtfCB3YXxpZXV8ZXJlfGsgaHxqYWx8aCBifGlsIHxkaXR8bmd1fGxhbnxhc3V8eXVufGF5dXxndGF8ayBkfGEgcnxnIG58bWFofHVkYXxkaXB8a2FzfHJ1cHxnZXV8IGJlfHRlcnxzZWp8bWlufHJpIHxlcm58dSBwfGsga3xhbXB8dXJhfGthbHxlIGF8ayBhfHV0IHxnIGJ8bmFrfGJpc3wgYml8ayBwfHRlc3xlbmR8d2UgfGgga3x0dW58dWFufCB1bnwgZGV8dSBufGggdHxrc2F8dSBrfGlhbnx3aWx8dSBifG9uYXxuYXN8dWthfHJha3xlamV8IHNlfGFtaXwga2V8d2FyfCByYXwgaWV8ayBqfGVoIHx5YSB8bG1hfGFsbXxwZW58dHVyfHdhbnxsYWt8aCBqfGcgYXxlYW58dXAgfHJnYXxhcmd8ciBrfHUgdHwgbmV8ZGV1fGdhbHxna2V8ZSB0fGggcHwgZ2V8ZyB0fCBkYXxpIG4nLFxuICAgIHJvbjogJyBkZXxyZSB8IMOubnzImWkgfGFyZXxkZSB8IMiZaXx0ZSB8dWwgfCBzYXxyZXB8ZSBkfGVhIHxlcHR8ZHJlfHR1bHxlIGF8IGRyfGllIHzDrm4gfHB0dXxsZSB8YXRlfGxhIHxlIHB8IGxhfCBwZXxvcml8IHByfGNlIHxlIHN8IG9yfGF1IHx0YXR8IGFyfGljZXxpaSB8b3IgfGEgc3wgZml8IGEgfHJpY3xhbGV8cGVyfCBjb3xuxIMgfMSDIGF8cmVhfGVyc3xpIHN8IGxpfHNhdXwgY2F8cnNvfGVudHxsb3J8YcibaXxhbCB8YSBkfGUgb3xtZW58bCBsfGVpIHxlIGN8cHJpfGFuxIN8IGFjfCByZXx1cml8YmVyfGliZXxsaWJ8YSBwfG9hbnxzb2F8IGlufGkgbHx0ZXJ8IGFsfCBzxIN8dGVhfGzEgyB8Y2FyfHTEg8ibfHPEgyB8dHVyfGkgYXxpIGR8bmFsfCBuaXxyaSB8aXRhfGUgw658ZSDImXxzZSB8aWxvfGluIHxpYSB8yJtpZXxwcmV8ZmllfMibaWl8xIPIm2l8Y29ufGVyZXxlIGZ8YSBvfGVuaXxudGV8IG51fCBzZXxhY2V8aXJlfGljaXwgY3V8aSDDrnxhIGN8aSBufGEgbHxwZW58dWkgfG51IHzEg3JpfGFsxIN8b25hfGwgZHxyxIMgfGVydHxyaWx8IHN1fG50cnxuIGN8cmlufCBhc3xuaSB8aSBvfGVyaXx0xIMgfGPEgyB8aWxlfMSDIGR8aSBjfGUgbnxlbGV8c2EgfCBtb3xpIHB8ZmkgfHNhbHx0b3J8dmEgfG9jaXxzb2N8bmljfHByb3wgdW58IHRyfGVzdHxpbsibfGEgw658dW5pfG4gbXxhIGF8IGRpfGVjdXxsdWl8c3RhfGxpdHwgcG98dHJlfGdhbHxlZ2F8b2F0fHJhIHxhY3R8xIMgw658bGVnfHUgZHxlIGx8bmRlfGludHxhIGZ8biBhfCBzb3xuYcibfGFyYXxpIGZ8dWllfGl1bnwgdG98dGFyfHN0ZXxjZXN8cmFyfGF0IHwgY2V8ZW1lfGkgyJl8cmVjfGRlcHwgY8SDfCBvIHwgw65tfGJ1aXxlYnV8cmVifCBlZ3wgbmF8bcOibnxudHV8aWxpfHbEg8ibfMOibmR8aWVpfHIgyJl8YmlsfHBsaXxvZCB8bW9kfHJlc3xkaW58ZSBlfGPIm2l8IGF1fGFsaXzEgyBwfMSDIGZ8w65tcHxpYWx8Y2lhfGlvbnzEgyBjfGRlY3xudGF8IG9tfGl0xIN8IGZhfMibxIMgfGN1IHx0cmF8xIPIm8SDfG52xIN8w65udnzDonQgfGl0ZXxpIGl8bGljfCBwdXwgZXh8cml2fHRyaXxyb3R8yJthIHzIm2kgfGwgY3xydGF8aW1pfHVsdXzIm2lvfGljxIN8bGlnfHJlbHx0YSB8Y2xhfHQgw658bnQgfG5pdHxlIG18w6JudHzEg23DonzIm8SDbXxnZXJ8bsibYXxydSB8dHJ1fGd1cnx1IGN8YmxpfGFiaXxhdMSDfGFydHxwYXJ8YXIgfHJpbXxpdmF8bCDImXwgc2N8aW1lfG5pbXxlcmF8c3VwfGluZHx1IGF8ZGljfGljIHwgc3R8IHZhfGluaXxpZ2l8ZSByJyxcbiAgICBoYXU6ICdkYSB8IGRhfGluIHxhIGt8eWEgfGEgZHwgeWF8YW4gfGEgYXwga298IHdhfG5hIHwgYSB8c2EgfCBoYXxraW58d2FufHRhIHwgYmF8YSBzfCB0YXxhIHl8YSBofHdhIHxrbyB8IG5hfG4gZHxhIHR8YmEgfG1hIHxuIGF8IG1hfGl5YXxoYWt8YXNhfCBzYXxhciB8YXRhfHlhbnwgemF8YWtrfGEgd3xhbWF8IGthfGkgZHxpa2l8YSBtfG93YXxhIGJ8IGNpfCBtdXwgc2h8YW5jfG5jaXxrb3d8YSB6fGFpIHxuc2F8YSBjfHNoaXwgxplhfGNpa3xuZSB8YW5hfGkga3xjaSB8a2tpfGUgZHxhIMaZfCBrdXxzdSB8biB5fHVtYXxrYSB8dXdhfGt1bXxoaSB8YSBufHV0dXwgeWl8YW5pfCBnYXwgcmF8YWthfGFsaXxtdXR84oCYeWF8dGFyfCBkb3zJl2FufGFyc3wg4oCYeXxzYW18xplhc3xuZGF8YW5lfG1hbnx0dW18aSBhfHlpIHxuaSB8IGR1fGFkYXwgc3V8YW5kfGEgZ3xjaW58IGFkfGEgaXxrZSB8IMmXYXxuIGt8eWlufHVtIHxlIG18IGFifGluc3xuYW58a2kgfG1pIHxhbWl8eWFyfG1pbnxva2F8cmUgfGkgYnxrYW18bWFzfGkgeXxtYXR8emEgfGFubnxlbiB8YcmXYXwgamF8bSBufGxpIHxkdWt8ZGFpfGUgc3xuIHN8cmEgfG4gd3xuIGh8YWlrfCBhaXxpZGF8Z2EgfHNhbnxyc2F8YWJhfHNhcnxjZSB8bmlufCBsYXxvIG58YmFufG5uYXxrYW58YWJpfHVuYXxkYW18bWUgfGFyYXxpIG18aGFsfGEgcnxhZGR8YXJlfG4ganxhYnV8IG5lfHphaXxhIMmXfHdhdHxhcml8IMaZdXxvbiB8YW5zfHdhyZd8YW1lfGFrZXxrYXJ8ZGlufHphbXwgZmF8YSBsfMaZdW58YnV3fHIgZHwgaHV8b2tpfGtva3xhIOKAmHx1IGR8biB0fGFiYnxhdXJ8IGlkfHJpbnx5YWt8ZG9rfGtpeXxyYXl8amFtfG4gYnx1YnV8YnVifG4gbXxpIHN8IGFufGFtIHxpbGl8YmJhfG9taXxkYW58Z2FtfGF5dXxhc2h8bmNlfHRzYXxheWl8aGFyfHl5YXxpa2F8YmlufGhhbnxra298cnN1fGFpZnxpbWl8ZmEgfCBhbXxpIGl8ZG9tfCBraXx5dXd8ZHVufG8gYXxmYW58biDGmXxheWF8ZmkgfG4gcnxzaGV8dW5pfGJheXxyaXl8biDigJh8c2FifCBpeXxiYXR8dGFifGFnYXwgaXJ8bWFyfG8gd3xpIHd8c2hhfGF3YXwgYWt8dW5zfHVuY3x0dW58dSBrfCBpbHzJl2lufG1mYXxhbWZ8YWNpfGV3YXxrYXN8bGlufG4gbnxkb258biBpfHVyZXxpZml8bGFpfGRkYXwgdHN8aXJpfGF5ZXx1biB8dGFufHdhZHxnd2F8YWZpfCBheXxhY2V8bWJhfGFtYnxhaWR8bnRhfGFudHx3YXJ8bGltfGt5YXwgYWx8YcmXaScsXG4gICAgZnV2OiAnZGUgfCBlIHxlIG58IGhhfG5kZXxsYSB8IHdhfGluYXwga2F8YWtrfCBuZHzJl28gfG5hIHwgaW58ZSBlfGhha3xhbCB8ZGkgfGkgaHxra2V8aWkgfHVtIHxrbyB8YWxhfG5kaXwgbXV8IG5lfGxsYXwgam98d2FsfGXJl8mXfG5lyZd8YWxsfG11bXwgZm98a2FsfGpvZ3xrZSB8YWF3fHRhYXwga298ZWVkfMmXyZdvfGFhIHwgbGV8amkgfGFkZXxhYWR8bGFhfG8ga3wgbmd8ZSBofCB0YXxyZSB8b2dpfGEganxlIHd8ZSBtfG5uZHxnaWl8ZSBsfGxleXxhd2F8YWFnfGVkZXx3YWF8ZSBrfGd1IHxlIGR8IGdvfGdhbHzJk2UgfHRpIHxmb3R8YWFufGV5ZHx5ZGl8yZdlIHxlZSB8IHJlfG9sIHxvdG98aSBlfG90aXxtIGV8dGF3fG5nYXxhIGl8a2VlfHRvIHxhbm58ZWppfGFtIHxuaSB8IHdvfGVlbnxnb298ZWVqfGUgZnwgaGV8ZW5ufGdvbHxhZ3V8cG90fCBwb3xkZWV8YXkgfCBmYXxrYSB8YSBrfG9uZHxvb3R8IGRlfGEgZnxvIGZ8YSBufHdhIHxtYWF8b3RhfGxlIHxoYXl8aSBrfG8gbnxuZ298ZSBqfG8gdHwgamF8w7FhYXxoZWV8bmthfGkgd3xhd2l8YSB3fG5ndXxkZXJ8IHRvfGUgdHxkaW18aSBufGZvZnxpIGZ8ZSBnfHRlZXxuYWF8YWFrfCBkb3x0b298YSBlfG5kb3xyZW58ZGlpfG9vcnxlciB8byBlfGkgbXxvZiB8IHNhfCBzb3xnYWF8YW5pfGthbXwgbWF8IMOxYXxvIHd8aSBsfHUgbXxrYWF8aW1hfGRpcnwgYmF8aWdnfGxpZ3wgbGl8YWFyfCDJk2V8byBpfGUgc3wgbyB8ZSByfHNvIHxvb2p8IG5qfCBsYXx3b258YXdvfGRvd3x3b298ZmF3fGFuZHxlIGl8b3JlfG5nZXxuYW58YXJlfGEgdHx0aW58YWFtfCBtb3zJl2VlfGl0YXxpcmF8YWHJl3xlIHB8bm5nfG1hIHxhbmt8eWFufG5kYXxvbyB8ZSDJk3xuam98dWRlfG5lZXxlIHl8ZSBhfGplIHwgeWF8ZW4gfGluZXxpaW58IGRpfHJhbHwgbmF8yZdpIHx1bmR8IGh1fGlubnzFi2RlfGHFi2R8amHFi3xhIGR8ZGVufCBmZXwgdGV8Z28gfCBzdXxhIGh8aGFhfHRhbHxlyZdlfGUgYnx5IGd8YmFhfHRkZXwgeWl8yZfJl2F8byBofGlpyZd8b3cgfCBkYXxkbyB8bCBufGFsdHwgaG98bCBlfGFnYXxtaWl8IGFhfGEgYXxhbWF8bm5hfG0gdHwga2V8ZWRkfG9nYXxtIHd8bCBtfG8ganxhyZdlfHJlZXxvamV8eWVlfCBub3xlbGV8bmUgfGFnb3wgcGF8IGFsfGd1dXx3aSB8Z2UgfGFhyZN8ZGFhfGluZHxkZXd8aSBqfGpleXwgamV8ZW50fHRhbnxvIMmXfGdlyZd8IGdlfMOxZWV8YSBsfCDJl3V8a2tvfG1ha3xhIHN8IGdhJyxcbiAgICBib3M6ICcgcHJ8IGkgfGplIHxyYXZ8bmEgfG1hIHxwcmF8IG5hfGltYXwgc3Z8YSBzfGRhIHxhIHB8dm8gfG5qZXxrbyB8YWtvfGFuanxvIGl8IHBvfGF2b3xqYSB8ZSBzfGEgaXx0aSB8IGltfCBkYXwgdSB8c3ZhfG5vIHxqdSB8IHphfG8gbnx2YSB8aSBwfGlsaXx2YWt8bGkgfCBrb3xuZSB8IGlsfGtvanwgbmV8bmphfCBkcnxvc3R8IHNsfHZhbnxpbSB8aSBzfHUgc3xpIGl8YSBufGF2YXxpamV8YSB1fCBiaXxzdHZ8c2UgfGEgZHxvbSB8amVkfGJvZHxvYm98bG9ifHNsb3wgc2V8IHJhfGloIHxzdGl8IG9ifCBqZXxwcml8ZW5qfGRydXx1IGl8byBkfGl0aXx2b2p8cmF6fG92YXxkamV8IG9zfGUgaXxsbyB8ZSBwfCBuanx1amV8aSBkfGJyYXx0cmV8IHRyfCBzdXxqZWd8aSBufHUgenxhIGt8b2cgfHUgcHxvamV8Y2lqfHJlYnxhIG98YSBifGxqdXxpIHV8cmFufG1panxuaSB8bm9zfGplbnxiYSB8ZWRufHN2b3wgaXp8amVsfHByb3xlIGR8xb5hdnxiaXR8IG5pfGkgb3xzdGF8YSB6fGF2bnx2amV8IGthfGJpbHxvdm98YSBqfGFqdXxpc3R8bmlofHR1IHxyZWR8Z292fCBvZHxlIG98b2ppfCBzbXxsamV8byBrfGlsb3xqaSB8YWNpfGUgdXxlIG58cHJlfG8gcHxlYmF8dSBvfHN1IHx2aW18acSNbnwgc2F8dSBufCBkanxhIHR8aWphfMSNbm98amVtfHLFvmF8ZHLFvnxlbGp8c3R1fGRuYXxvZG58ZW5pfHphIHxpdmF8b2xqfMWhdGl8bm9tfGVtIHxkdSB8dm5vfHNtaXxqZXJ8ZSBifGRlIHxwb3N8bSBpfCBkb3x1IGR8bmFrfGEgcnxvYnJ8IG1vfGxqYXxuaW18ZWdvfCBrcnx0aXR8a3JpfHZlIHxuanV8YW4gfGlrb3xuaWt8bnUgfGkgbXxub2d8ZW5vfHNub3wgc3R8ZSBrfHR1cHxydWd8a2EgfG9kYXxyaXZ8dm9sfGFsbnxtIHN8aXR1fGHFoXR8emHFoXxhbml8c2FtfGFrdnxvdml8b3NufHJvZHxhcm98IG1pfHR2YXxkbm98bnN0fGphbnxhayB8aXRlfHZpxI18cmFkfHUgbXwgdGF8ZHN0fHRpdnxuYWN8cmltfGtvbnxrdSB8b2R1fMW+aXZ8YW1vfHR2b3x0ZWx8cG9kfGcgcHxub3Z8aW5hfG5hcnwgdmp8byBzfGkgYnxvaiB8IG92fGF2ZXx2dSB8YW5zfG9qYXx6b3Z8YXpvfHVkZXxidWR8IGJ1fGUgdHxpIHZ8ZGlufGVkaXxuaWN8dGFufG5hcHxtamV8IGlzfGphbHxzbHV8cHVufGVkc3xvIG98emFrfGphdnxpIGt8bSBwfHRub3xpdm98ZXJlfG5pxI18bSBufGppbXxrYWt8YWRhfHZuaXx1Z2l8IHJvfG1vdnx2ZW58cG9sfHRvIHx0ZSB8IHZyJyxcbiAgICBocnY6ICcgcHJ8IGkgfG1hIHxyYXZ8aW1hfHByYXxqZSB8bmEgfCBzdnx0aSB8IG5hfGEgcHx2byB8dmF0fGtvIHxhIHN8bmplfCBwb3xhbmp8YXZvfG8gaXx0a298IGltfGEgaXxzdmF8bm8gfGkgcHxlIHN8amEgfG8gbnwgemF8anUgfGlsaXwgdSB8dmEgfGxpIHwgYml8bmUgfGkgc3xhdGt8IGlsfGl0aXxkYSB8IG5lfCBrb3wgZHJ8IHNsfHZhbnxuamF8a29qfGlqZXwgcmF8b3ZhfCBvc3x1IHN8aSBpfG9zdHxib2R8b2JvfGxvYnxzbG98cHJpfGEgbnxvbSB8amVkfGF0aXxpaCB8aW0gfHZvanxhdmF8IG9ifHN0dnxzZSB8IG1vfGkgdXxiaXR8ZHJ1fCBqZXwgc2V8ZGplfGkgb3xlbmp8IGthfGkgbnxzdGl8bG8gfHUgaXxzdm98bWlqfG5pIHxlIGl8cmF6fGEgb3xlIG58YnJhfG8gcHwgc3V8YSBifHUgcHxyYW58YSBrfG9nIHxpIGR8YmlsfGFrb3xlIHB8YSBkfGVkbnxhanV8bW9yfGVuaXwgbmp8aXZhfGplbHzFvmF2fCBuaXxhIHp8YXZufG92aXxlbm98cmEgfG9qZXxhIGp8IGRhfGEgdXxvcmF8amVnfCBpenxuaWh8csW+YXxkcsW+fG9qaXxzbm98bml0fGplbnx2amV8aWxvfGNpanxvZGF8bmltfCBkanxwcm98dGl0fHUgenxlIGR8cmVkfG5vbXxqZW18IG9kfG5vc3xzdGF8bm92fG9zbnwgc218bGplfG8gc3xqaSB8b3ZvfHN0dXxwb3N8dmltfCBkb3xvZG58cmFkfGlzdHwgc2F8ZSBvfHR1IHxuanV8ZW0gfGdvdnxvIGR8cm9kfGkgbXxqZXJ8YWNpfG9qIHxwcmV8bSBpfG5ha3xkbmF8YSByfGxqdXx1amV8ZSBtfG9icnx6YSB8b2xqfHZlIHxvIG98bSBzfGFuIHxudSB8ZHUgfGFyb3x2bm98c21pfGFsbnxlIGt8byBrfGkgYnxlIHV8dHZhfHUgdXx0dXB8cnVnfGRub3x1IG98c3UgfHUgZHxrYSB8dm9sfCB0YXxpamF8aXR1fMWhdGl8YcWhdHx6YcWhfGl0a3zFvml2fGFuaXxzYW18ZWxqfCBzdHxzb2J8b3NvfG5hcnxha3Z8YWRhfCBtaXx0ZSB8b25hfG5zdHxqYW58bGphfGkgdnxpdGV8ZWdvfGVsb3xyaW18a3UgfG9kdXxhbW98dHZvfHRlbHxqaW18cG9kfG5vZ3x2aSB8aW5hfCB2anx0byB8ZSBifGFuc3x6b3Z8YXpvfGFrIHwgc2t8ZWRpfHRhbnxvanV8cHVufHBvdHxvdGl8a29ufHpha3xpIGt8bSBwfHRub3xpdm98ZXJlfG5pxI18a2FrfHZuaXx1Z2l8IHJvfG1vdnx2ZW58xaF0dnwgYmV8YXJhfGtsYXxhdmV8dSBifGF2aXxvamF8amFsfHUgbXxkbml8bWplfHJha3xkaW58xIdpIHxqdcSNfGtsanxuaWN8dSBrfG5hcHxvYml8YXRuJyxcbiAgICBubGQ6ICdlbiB8YW4gfGRlIHwgZGV8IGhlfGluZ3xjaHR8IGVufGRlcnx2YW58IHZhfG5nIHxlZW58ZXQgfGVjaHwgZ2V8IGVlfG4gZXxyZWN8IHJlfG4gdnxuIGR8bmRlfHZlcnwgYmV8ZXIgfGVkZXxkZW58IG9wfGhldHxuIGl8IHRlfGxpanxnZW58emlqfCB6aXxodCB8aWprfGVsaXwgaW58dCBvfCB2ZXxvcCB8YW5kfHRlbnxrZSB8aWpufGUgdnxqbiB8aWVkfCBvbnxlZnR8IGllfHNjaHxuIHp8biBvfGFhbnxmdCB8ZWlkfHRlIHxvb3J8IHdlfG9uZHxlZWZ8ZXJlfGhlZXxpZCB8aW4gfHJkZXxuIHd8dCByfGFhcnxyaWp8b3JkfHdvcnxlbnN8b2YgfCBvZnxoZWl8biBnfCB2cnwgdm98IGFhfHIgaHxodGV8IHdvfG4gaHxhbCB8bmQgfHZyaXxlIG98cmVufGxlIHxvciB8biBhfGprZXxsbGV8ZW5pfG4gYnxpaiB8ZSBlfGcgdnwgc3R8aWdlfGRpZXxlIGd8bWVufG5nZXx0IGh8ZSBifCB6YXxlIHN8b20gfHQgZXxhdGl8d2VsfGVya3xzdGF8ZXJzfCBhbHwgb218biB0fHphbHxkaWd8IG1lfHN0ZXx2b298dGVyfGdpbnxyZSB8ZWdlfGdlIHxnIGV8YmVzfG5hdHwgbmF8ZWtlfGNoZXxpZyB8Z2VsfG5pZXxuc3R8ZSBhfG5pZ3xlc3R8ZSB3fGVyd3xyIGR8ZW5kfG9uYXxkIHZ8amhlfGlqaHxkIGV8ZWxlfCBkaXxpZSB8IGRvfGRlbHxuIG58YXQgfGl0IHwgZGF8dGllfGUgcnxlbGt8aWNofGprIHx2b2x8aWpkfHRlbHxtaW58bGVufHN0cnxsaW58biBzfHBlcnx0IGR8aGFufCB6b3xoYXB8Y2hhfHdldHwgdG98dmVufCBuaXxhYXR8aW9ufHRpb3x0YWF8bGtlfGV6ZXxtZXR8YXJkfHdhYXx1aXR8c3RpfGUgbnxkb298cGVufGV2ZXxlbCB8dG9lfGFsZXxpZW58YWNofHN0IHxucyB8IHdhfGVtZXxuaW58ZSBkfGJpanwgZ3J8biBtfHAgdnxlc2N8dCB3fG9udHxpdGV8bWFufGVtYXwgbWF8bmFsfGcgb3xyaW58aGVkfHQgYXx0IHZ8YmVnfGFsbHxpanN8d2lqfHJ3aXxlIGh8IGJpfGdyb3xwIGR8cm1pfGVybXxoZXJ8b29ufCBwZXxlaXR8a2lufHQgenxpZXR8aWVtfGUgaXxnZW18aWdpfCBhbnxkIG98ciBlfGV0ZXxlIG18anMgfCBodXxvZXB8ZyB6fGVkaXxhcmJ8emVufHRpbnxyb258ZGFhfHRlZ3xnIHR8cmFmfHRyYXxlcml8c29vfG5zY3x0IGJ8IGVyfGxhbnwgbGF8ZXJufGFyIHxsaXR8em9ufGQgenx6ZSB8ZGV6fGVob3xkIG18dGlnfGxvb3xtZWV8Z2VyfGFsaXxnZXZ8aWplfGV6aXxnZXp8bmxpfGwgdnx0aWp8ZWVyfCBhcicsXG4gICAgc3JwOiAnIHByfCBpIHxyYXZ8bmEgfHByYXwgbmF8bWEgfCBzdnxpbWF8ZGEgfGphIHxhIHB8dm8gfGplIHxrbyB8dGkgfGF2b3wgcG98YSBpfGFrb3xhIHN8IHphfCB1IHxqdSB8byBpfCBpbXxuamV8aSBwfHZhIHxzdmF8YW5qfHZha3wgZGF8byBufG5qYXxlIHN8b3N0fCBrb3xhIG58bGkgfGlsaXxuZSB8b20gfCBuZXxpIHN8IHNsfCBpbHwgZHJ8bm8gfGtvanx1IHN8YXZhfCByYXxvZyB8c2xvfGltIHxlbmp8c3RpfGJvZHxvYm98bG9ifGl0aXxhIG98c3R2fGkgdXxhIGR8bmkgfGplZHx1IHB8cHJpfGVkbnwgYml8aSBpfGEga3xvIGR8c3RhfGloIHxkcnV8YSB1fCBqZXwgb3N8IG5pfG5vc3xwcm98YWp1fGkgb3xyYW58IGRlfCBzdXx1IGl8c2UgfHZhbnxvdmF8aSBkfGNpanwgb2J8dWplfHJlZHzFvmF2fGUgaXxpIG58dm9qfGUgcHxhIGp8ZG5hfCBzZXwgb2R8dmUgfCBrYXxlbml8csW+YXxkcsW+fGEgenxhdm58YWNpfG92b3x1IHV8bSBpfG9qYXwgaXp8bGphfCBuanxpamF8dSB6fGUgb3xyb2R8amVufGxqZXxlIGJ8cmF6fGphbnxsanV8c3ZvfHphIHxnb3Z8acSNbnwgc3R8bm92fHNub3xvc258ZHUgfGppIHxwcmV8IHRyfHN1IHx2dSB8b2RufGEgYnxqZWd8bmltfG5paHx0dSB8dGl0fMWhdGl8a3UgfG5vbXxiaXR8ZSBkfG1lIHxpa298xI1ub3xvaml8bG8gfHZub3xuaWt8ZSBufMSRZW58aWthfGJlenxhcmF8ZGUgfHUgb3x2aW18bmFrfCBzYXx1IG58cml2fGF2ZXxhbiB8b2xqfHZvbHwga3J8byBwfHNtZXxlIGt8bm9nfCBvdnxlIHV8dHZhfGJyYXxydWd8cmVifHRyZXx1IGR8b2RhfCBtb3wgdnJ8dmxqfGF2bHxlZ298amF2fGRlbHxtIHN8a3JpfG8ga3xhxaF0fHphxaF8bmp1fCBzbXxhbml8IGxpfGRub3xlxJF1fGFsbnxsYSB8YWt2fG9qIHzFoWVufGtvbXxzdHV8dWdpfGF2aXxhIHJ8a2EgfHJhZHxvanV8dGFufG9kaXx2acSNfHRhdnxpdHV8dWRlfGJ1ZHwgYnV8cG90fG9kdXzFvml2fGVyZXxtIG58dHZvfGlsb3xiaWx8YXJvfG92aXxwb3J8ZW5vfMWhdHZ8bmFjfG92ZXxtIHB8dHVwfHBvc3xyZW18ZG5pfGJhIHxuc3R8YSB0fGFzdHxpdmF8ZSBtfHZyZXxudSB8YmXEkXxpc3R8cHVufGVuIHx0ZSB8ZHN0fHJvdHx6YWt8YW8gfGthb3xpIGt8anXEh3xvIHN8c3QgfHNhbXx0ZXJ8bmFyfCBtZXxpIG18a29sfGUgcnx1xaF0fHJ1xaF8dmVyfGtha3wgYmV8aSBifGtsYXxhZGF8ZWJhfGVuYXxvbmF8IG9ufHR2dXxhbnN8IGRvfHJha3xzbHUnLFxuICAgIGNrYjogJyBoZXwgw7sgfMOqbiB8IGJpfCBtYXxuYSB8aW4gfG1hZnwgZGl8YW4gfHh3ZXwgeHd8a3UgfCBrdXxrZXN8IGRlfCBqaXxoZXJ8a2lyfGl5YXx5YSB8cmlufGlyaXxqaSB8YmkgfGVzIHwgbmV8eWUgfHnDqm58ZSBifGVyIHxhZsOqfHRpbnxrZSB8IGFufGl5w6p8ZXllfHJrZXxlcmt8d2UgfCBiZXxlIGh8ZGUgfCB3ZXxoZXl8ZsOqIHxpIGJ8ecOqIHxpbmF8IGLDqnwgbGl8ZGl5fGJlcnxsaSB8cmUgfMOuIMO7fG7DqiB8w6ogZHwgc2V8IGNpfGVrZXxkaSB8d8OuIHwgbmF8w64geXxhZiB8ZXRlfGhlbXwgd8OufHN0aXwga2l8csOuIHxrw64gfMOuIGF8eWVrfG4gZHxrYXJ8IHRlfG5lIHx5w64gfGkgaHxlIGt8dMOuIHx0w6ogfGEgd3xlIGR8w64gYnxzIG18YXN0fG4gYnxiZSB8eWFufHNlcnx0ZXd8bmV0fCB0dXwgZXd8aGV2fGF6YXxhcmF8w7sgYnxuIGt8YWRpfGV2IHx6YWR8IGF6fHJhc3xlc3R8YW7DqnwgeWF8biBofG4gw7t8d2VkfCB0w6p8d2VrfGJhdHxibyB8IGJvfCB5w6p8c3QgfG4gbnzDqiBrfGRhbnzDqiBofGVtYXzDqiBifGl5ZXzDriBofGRpbnxiw7tufHIga3xla8OufCBtZXxwYXJ8w7tuYXx0YSB8d2xlfGV3bHzDriBtfCBrZXxuYXZ8ZXdlfG1hbnzDqiB0fGTDriB8w7sgbXxtw7sgfGVtw7t8YSBtfGlrYXxlIMO7fG4gd3xhIHh8w6ogbXxlIG58IHRhfGVsYXxuIGp8ZXnDqnxuIHh8Y2l2fHdleXxhbmF8IHJlfGtoZXxla2h8YmlrfGvDqiB8asOuIHxmIGh8ZXLDrnwgcGF8w65uYXxiaW58ZXJifHZha3xpdmF8YSBzfCBuaXxjaWh8dsOqIHxlIGp8YXJpfCBww6p8w64gZHxuw6pufGlrZXxlIHR8YSBrfMOqIHh8IHllfG4gYXxlecOufG4gZXxhbWF8YsOqIHxhciB8ZXdhfGF0w6p8YmVzfHJiZXxhdiB8aWJlfGlzdHxtw64gfHRlbXxhd2F8YXJlfGjDriB8Z2VofG5nZXxpbmd8bmVrfG7Du258YW7Du3xxYW58IHFhfHbDriB8cnRpfHVrZXx0dWt8IMWfZXxlemF8IGRhfHUgZHzDuyBhfGYgw7t8ZWRpfCByYXx0dSB8dGl5fHTDqm58IG1pfHhlYnwgZ2V8aMOubnwgaMOufGV0w6p8w64ganxzdMOufG1hbHxiaWJ8cmEgfGkgZHxlIG18bWFtfGkgYXxuaWt8aSBtfMOuIGt8IHdpfMO7biB8IGtvfGEgxZ98w6oganxyaXl8bGF0fHdlbHxlIGV8aW5lfGFuZXzDuyBofMOubiB8YSBkfHNpeXxlbmR8YXllfCB6YXxpamF8YSBufMOuIG58ZWsgfHRla3x5ZXR8bWJlfGVtYnzDuyBkfHJvdnxpcm98bWlyfGViYXwgeGV8bcOqbnwgw6pufCBodXxuw65ufGFuw658dCDDu3x0ZW58biBtfGRlbXzDqiDDu3xlbsOqfHRlIHxhcnR8aSByfCBqw658dSBqfGVrw6p8ZGV3JyxcbiAgICB5b3I6ICcgbsOtfHRpIHzhu43MgSB8bsOtIHwgbMOhfCDhurnMgHzDoG4gfOG6ucyBIHxrYW58dMOtIHwgdMOtfGFuIHzhurnMgCB8dOG7jcyBfOG7jcyAIHwg4bq5bnzhu41uIHx34buNbnzDrSDhurl8YsOtIHzDoXRpfGzDoXR8zIB04buNfOG6ucyAdHwgZ2J8IMOgdHwgw6B3fG4gbHzDoHRpfCBhIHxs4bq5zIB84bq5bsOsfCDDsyB8a+G7jcyAfCBsw7N8w6wga3xzw60gfOG7jcyAa3wga+G7jXxyYSB8bmkgfMOgYsOtfHTDoGJ8IHTDoHxuw6wgfCBzw618zIBrYXzhu43MgOG7jXxuIOG6uXzDoHfhu418biB0fMOzIG58zIDhu43MgHzDrWzhurl8b3LDrXxsw7MgfCB34buNfHTDsyB8ZMOoIHzDrHnDoHzDum4gfCB0w7N8IG9yfMOtIMOsfMOoZMOofGvDsiB84oCQw6hkfMyA4oCQw6h84bq5zIDigJB8csOtbHzDrSDDs3xy4bq5zIB8w60gw6B8IHPDrHx5w6BufGdib3zhuaNlIHwga8OyfMOtIGF8IHLhurl8IGrhurl8c8OsIHwgYsOhfHLDoG58IOG5o2V8d+G7jcyBfG7DrHl8ZsO6bnwgZsO6fG4gw6B8YmEgfG4gbnxnYsOgfGdi4buNfGrhurnMgXx1biB8w6zDrSB8IGvDrXxnYmF8w6huw6x8IMOobnxiw6EgfMyBIGx8YSBrfCBrYXxk4buNzIB8a8OtIHwgw7JtfGluIHwgZml8YsOyIHxmaSB8YuG6ucyBfOG7jWThu418YuG7jWR8zIEgc3xodW58bsO6IHxuw61ufHfDoCB8aXJhfG5pcnzDsm3DrHzDrGdifCDDrGd8zIEgdHzhurluaXzDrW7DunxpIGx8w6xuaXxtw6xufGLDoCB8w6HDoCB8aSDDrHxvaHV8IG9ofMOtIGl8YXJhfCB0aXxibyB8w7IgbHwgcMOpfHLDuiB8w61yw6B8IOG7jcyAfMOtIMOyfG9nYnxr4buNzIF8cOG7jcyAfMOzIGJ8w6AgdHxpIG58bOG7jcyBfOG6ucyBbnwgw6xifHnDrMOtfGdiw6l8Z+G6ucyBfGJvZ3zDs8OyIHx5w7PDsnwgecOzfG4ga3xww6kgfGTDoSB8zIF34buNfOG7jcyBd3zDoCBsfMOtIGt8IHfDoHxuIG98auG7jSB8IGlyfOG7jcyAcnzDuiDDrHzMgSDDoHzDsyBzfGkgdHzhuaPhurnMgXzMgGvhu418w60gdHx5w6kgfGzDqCB8IGzDqHxmaW58w6Biw7J8IGzhu418w6AgbnzDuWrhu418d8O5anxpcsO6fMOzIGp8IGFyfMOtIHd8YSB3fCDDrG18w7ogw6B8zIAgdHzDsmZpfCDDsmZ8IMOgw6B8ZuG6ucyBfMOgd8O5fMyBbml8d8O5IHzDrMOtcnxtw6zDrXwgbcOsfGzDocOsfCB5w6x8w60gZ3zhu43MgW58biBzfGkg4bq5fOG6ucyAa3zDoGdifMOtZ2J8bsOtZ3xhIG58IGvDunxsw6HDoHzDrSBvfG7DocOgfCBuw6F8a+G6ucyBfMOtcGF8bsOtcHzDrG4gfCDDrGt8YsOpIHxpIGd84buNbeG7jXwg4buNbXxpIMOgfGnhuaPhurl8zIAgw6B8w6xt4buNfG4gYXxuIGZ8auG6uSB8ecOtIHzMgSDhu418w7MgZHzMgSDDsnwgZMOhfCBtw7p8w6DDoGJ8w6Fi4bq5fGzDoWJ8w6xiw6F8w7IgZ3xqw7ogfGkgb3xsw7ogfCDDqHR8zIAg4bq5fHThu43MgHxkZSB8zIAgbnxpIMOyfCDDrHl8a8OgbnzMgW4gfCBiw618IGnhuaN8beG7jcyAfGUg4bq5fMyAIGx8IGbDoHzDqHnDrXwgw6h5fCDDrGR8beG7jcyBfGTDqSB8zIAga3zMgSBwfMOyIHR8bcO6IHwgZuG6uXwgw6xqfHLDrSB8w6xr4bq5fG7DrGt8w6xuw618biDDrHxuIMOofHPDrG58w6gg4bq5fCBpIHxy4buNzIB8IMOgbnzMgSBifMO5biB8zIFnYnzhu43MgWd8ZOG7jcyBfCBk4buNfMOtIG58cmlufMyAIGonLFxuICAgIHV6bjogJ2lzaHxhbiB8bGFyfGdhIHxpciB8IGJpfGFyIHwgdmF8ZGEgfGlnYXwgaHV8dmEgfGJpcnxzaCB8dXF1fHF1cXxodXF8IGhhfHNoaXwgYm98ciBifGdhbnxhIGV8aWRhfCB0YXxpbml8bGlzfGFkaXxuZyB8ZGlyfGxpa3xpeSB8aWxpfG/Ku2x8aGFyfGFyaXwgb8q7fHVxaXxpbnN8bGFufGhpIHxpbmd8ZGFufG5pbnxraW58IHlvfHNvbnxuc298IGlufCBtdXxvbiB8cWlnfCBtYXxlZ2F8ciBpfGJvyrt8IGVnfG/Ku3p8bmkgfGdhZHxhc2h8aSBifGtpIHxva2l8aWxhfHlva3xhIGJ8biBifG9zaHxhbGF8YXQgfGluIHxyIGh8ZXJrfCBlcnxsZ2F8IHFhfHJraXxoIGh8IHNofGkgaHxhcmF8biBtfCBiYXxuaXN8aWsgfGlnaXxsaWd8Ym9zfHJpIHxxaWx8YSB0fGJpbHxsYXN8ZXRpfCBldHxuIG98YW5pfG5saXxrbGF8aSB2fGEgcXxhIGh8YSBvfHlhdHwgcW98aW0gfGEgc3xpIG18aXlhfGF0bHxvbGl8b3NpfHNpeXxxbGF8Y2hhfHRpbHwgb2x8YXRpfGEgeXxtYXN8cWFyfGlubHxsYXR8IHFpfHRhyrx8aGFtfGdpIHxpYiB8yrtsaXxtbGF8aCB2fMq7eiB8aHVufG4gZXxtdW18IGRhfCBidXwgdG98dW4gfG1raXx1bWt8c2hhfHRsYXxyaXN8aXJvfGhhIHxyY2h8YmFyfGlyaXxveWF8YWxpfCBiZXxpIG98YXNpfGFyb3wga2V8aSB0fHJsYXwgdGV8YXJjfGhkYXxzaHV8dGlzfG4gaHx0Z2F8IHNhfCB4YXxyYWt8bGlufGFkYXxvbGF8aW1vfGhxYXxzaHF8bGkgfCB0dXxhbWx8bGxhfHNpZHwgYXN8bmlkfGEgaXwga2l8Y2ggfG4gdHxuZGF8ayBifGVyYXxzaXp8b3IgfGhsYXxhIG18ciB2fGVuZ3x0ZW58bWF0fG1kYXxhbWR8bGltfG1peXx5IHR8YXlvfGkgYXxpbm98aWxnfHRuaXwgaXN8YW5hfGFzIHxlbWF8IGVtfGVjaHxhIGF8dGFyfGthdHxha2F8YWsgfHJhdHwgZGV8YXphfGlsbHwgc2l8IHNvfGfKu2l8dXFsfG4gcXxvZGF8yrxsaXxhyrxsfG5pa3wgbml8dGRhfHVjaHxnaW58YSB1fGhpbXx1bml8c2l0fGF5IHxxb258IGphfGF0bnxraW18aCBrfGhlY3wgaGV8yrt6aXxsYWt8a2VyfGlrbHwgY2h8bGl5fGxsaXxjaGl8dXIgfHphcnxzaGx8cmlnfGlybHxkYW18a29ofGlrb3xhIGR8YW0gfG4gdnxydGl8dGlifHlvdHx0YWx8Y2h1fCB1Y3xzbGF8cmlufHNvc3xhc298IHVufG5hIHwga2F8bXVofGRpZ3xhc2x8bG1hfHJhIHxidSB8dXNofHhhbHzKu2xnfGkga3xla2x8ciBkfHFhdHxhZ2F8aSBxfG9peXxtaWx8IG1pfHFhIHxpIHN8amluJyxcbiAgICB6bG06ICdhbiB8YW5nfCBrZXxuZyB8IHNlfCBkYXxhZGF8YXJhfGRhbnwgcGV8cmFufCBiZXxhayB8YmVyfGhha3xhdGF8YWxhfGEgc3xhaCB8bnlhfCBtZXxkYSB8cGVyfG4gc3x5YSB8IGRpfGthbnxsYWh8biBrfGFhbnxnYW58ZGFsfHBhZHxrZXB8YSBwfG4gZHxlcmh8ZWJhfG5nYXx5YW58cmhhfCB5YXxuZGF8b3JhfHRpYXxhc2F8IGhhfGFtYXxlcGF8IG9yfGlhcHxhcCB8YSBifCBhdHwgbWF8ZXRpfHJhIHx0YXV8biBhfHNldHxhdSB8IGJhfHBhIHwgYWR8biBwfHRhbnxwIG98ZW5nfGEgZHxtZW58YXBhfGggYnxoIGR8ZGFrfG1hbnxhIGF8dGVyfCB0ZXxrIGt8IHNhfG4gYnxhbmF8ZyBhfGVuZHxsZWh8b2xlfGEga3xhbSB8biB5fGFrYXxlaCB8bGFtfGJhc3xiZWJ8biBtfCB1bnxwZW58c2EgfGtlYnxzYW18biB0fCB0aXxlbGF8c2FufGNhcnx1YW58bWEgfGRpIHxoYW58ZWdhfGJhbnxlcml8YXQgfHNpYXxhIG18aWthfGtlc3xpYW58Z2FyfHNlYnx0YSB8bWFzfHVuZHxuZWd8bmFufG5nc3xpIGR8ZXJsfG5hIHxlcGV8ZW1ifGJhcnwgbGF8YXR1fGtsYXxwZW18bWVtfGVtdXxlY2F8c2VjfG5nZ3xubnl8YW55fGJvbHxhbCB8YWhhfGdzYXxlYmV8aW5kfGFrbHxuIGh8ZXJrfHVuZ3xlbmF8IGJvfGEgdHwgYXB8ZXJzfCBkZXxpbiB8dHUgfHB1bnxhcyB8YWdpfGFubnxnIGJ8YmFnfCBuZXxhaW58aGVufCBoZXxlcmF8cmF0fHNlbXwgc3V8YWRpfGxhbnxnIHN8ZGlhfG1hdHxzZXN8aWFkfCB0YXxpaGF8ZyB0fHRpbnxrIG18ayBofGkga3xnaSB8aSBzfGluZ3x1a2F8ZW51fGRlbnxsYWl8ayBkfGVydHx0aSB8cmthfGFqYXxyZ2F8bHVhfGtlcnxtZWx8ZHVufG5kdXxsaW58cmxpfG5ha3xudHV8ZXNpfGF5YXx1biB8dWF0fGp1YXwgaW58cm1hfGVybXxhaSB8ZW1wfGtlbXxyaSB8ZGlsfHVhIHx1ayB8aCBtfGwgZHxnIG18bWJhfGthdHxlc2V8dGlrfG5pIHxpbml8IGFufG1wdXxrYSB8ZGFyfG1hcnxyamF8ZXJqfGFyZ3x1IGt8c3VhfCBvbHxlc2F8ZGFwfGFyIHxnIHV8c2kgfGVudHxnIGR8IHB1fGF3YXxpcml8ZGlyfHNhbHxnYW18bWJlfG4gaXxoYXJ8YSBofHJhYXxlbWF8dGFyfGkgYXxzYWF8aXJhfGFyaXxwZWx8amFyfGxhanx1anV8dHVqfHJha3x1cmF8dWFyfGVsdXx0IGR8dW50fGlsIHx3ZW58YXNpfGdnYXxpcGF8a3NhfHR1a3x1bGF8c2VrfHNhc3xpYnV8cnRhfHNlcHxyc2F8bnRhfGF0aXxpbGF8bXVhfHlhcicsXG4gICAgaWJvOiAnYSBufGUgbnxrZSB8IG5hfCDhu40gfG5hIHwgYuG7pXzhu40gYnxud2V8bnllfGVyZXxyZSB8IG4gfHlhIHxsYSB8IG5rfHllIHwgbnd8IG1hfGUg4buNfCB5YXwgaWt8YSBvfGEg4buNfG1hIHzhu6VsYXxi4bulbHxpa2V8IG9ufG5rZXxlIGl8YSBtfG9ueXzhu6UgbnxraWt8aWtpfGLhu6UgfCBhIHxrYSB8d2VyfHRhIHxpIG58ZG8gfGRpIHwgbmR8IGdhfGEgYXxlIGF8YSBpfGhlIHxrd2F8IG9rfCBvYnxlIG98aGkgfGFueXxnYeKAkHxoYSB8ZOG7pSB8IG1tfG5kaXzhu40gbnx3YSB8cuG7pSB8ZSBtfGNoZXxhIGV8b2tlfHd1IHxha2F8aXRlfG8gbnxhIGd8b2RvfGJvZHxvYm98IGThu4t8IGV6fGFyYXx3ZSB8IGlofGHigJBlfGjhu4sgfHJpIHxuIG98emkgfG1tYXxjaGl8ZOG7iyB8Z2hpfOG7pXRhfGlyaXxpaGV8IGFufCBvaHxhIHl8Z2JhfOG7pSDhu418IOG7jXp8IGFrfCBpd3xueWF8dGUgfGl3dXwgbnR8cm8gfG9yb3xlIOG7i3x64buNIHxleml8bWUgfGUgZXx1IG58aGVyfG9oZXwgc2l8YeKAkGF8aSBtfGFsYXzhu6UgaXwga2F8YWt3fCBpbnxnaOG7i3xrcGV8biBlfHDhu6V0fCBlIHxpIGl8aSBvfGlkZXxpbnd84bulIG98aOG7pSB8YWjhu6V8d2VnfHJhIHxvIGl8a3BhfGFk4bulfG1hZHxzaSB8c2l0fGEgc3wgbWV8c29yfGkg4buNfGdpZHxlZG98dSBvfGUgeXxuIGF8IGVufHRhcnxvenV8dG96fGJpIHxiZSB84bulIG184bulcuG7pXzhu41y4bulfCDhu41yfG1ha3x1c298YW1hfGRlIHzhu4sgb3wg4buNbnzhu4164buNfGNo4buLfGVnaHxlbnd8YXDhu6V8cnUgfCB0b3xpIGF8YSDhu6V8b3NpfHLhu4sgfHdldHxoZWR8bmNofCBuY3wgZWJ8IGFsfG7hu41kfOG7jW7hu418dXJ1fHNpcnwga3d8eWVyfGppIHxlbnl8IG1rfOG7i3Lhu4t8ZXRhfCB1c3x0dSB84buNIGR8dSDhu418IG8gfGJhIHwgbWJ84buNZOG7pXzhu4tjaHwgY2h8YSBkfHBhIHwgYWd8a3dlfCBoYXxhIHV8ZSBzfG1rcHxuIHV8bnRhfGViZXxuIOG7jXxvIG18a3d1fG5rd3xud2F8b2JpfCDhu4trfGVzaXxpIGV8bmhhfCBuaHxsZSB8aWxlfG5pbHwgbml8ZW1lfCBvZ3xlIGt8biBpfGNo4buNfG8geXxhc+G7i3xvdHV8IG90fHJhbXx1IG184buLZ2h8ZOG7i2d8enUgfG7hu40gfG1iYXwgZ2J8ZSBnfOG7iyBtfOG7jWNofGljaHxwZSB8YWdifGkg4buLfHVjaHx64bulenx1bnl8d3VufOG7jXLhu418IG5ufG5h4oCQfCBkaXxnZSB8b2dlfGlqaXwgaWp84buNaGF8IOG7jWh8aWtwfGVnaXxtZWd8byBvfOG7pWjhu6V8aOG7pWh8bWFofG4g4bulfOG7jSBnfOG7jXRhfGVr4buNfOG7iyBufGt34bulfGFnaHzhu6Vt4bulfGJhbnxrcHV8b2twfCBhaHzhu4trcHxhIGt8aW1lfCBpbXx64bulIHzhu6V64bulfOG7jXrhu6V8IOG7pXp8bGl0fGFsaXxuYXQnLFxuICAgIGNlYjogJ3NhIHwgc2F8bmcgfGFuZ3wga2F8IHBhfGFuIHxnYSB8bmdhfCBtYXxwYWd8IG5nfG9uIHxhIHB8b2QgfGthdHxheSB8IGFufGcgbXxhIGt8dWcgfGFuYXwgdWd8dW5nfGF0YXxuZ298YXR1fG4gc3xhbGF8c2FufGQgc3x0dW58YWcgfGEgbXxnb2R8ZyBzfGEgYXxhIHN8ZyBrfGcgcHx5b258biB1fG9uZ3x0YWd8dXNhfHBhbnxpbmd8dW5hfG1hdHxnIHV8bWdhfCBtZ3x5IGt8IHVzfGFsaXxzeW98IG8gfGFnYXx0YW58aXlhfGtpbnxkdW58bmF5fG1hbnxuYW58YSBpfCBuYXxpbmF8bnNhfGlzYXxiaXN8YSBifGFkdXwgYWR8biBufCBiaXxhc3l8YXNhfGxheXxhd2F8bGFufG5vbnxhIG58bmFzfG8gc3xhbCB8YWdwfGxpbnxuYWx8d2FsfCB3YXxpbGl8d2FzfGdhd3xoYW58IGl5fCBraXxuYWh8YmFufG5hZ3x5YW58YWhpfG4ga3xnYW58IGdpfGhpbXwgZGl8YSB1fCBiYXwgdW58aW5pfGFtYXx5YSB8a2FzfGFzdXxuIGF8ZyBhfGdrYXxhZ2t8a2FufGFnc3xhZ3R8bCBufGEgZ3xrYWd8IHRhfGltb3x1bnN8c2FtfCBzdXxnIG58biBvfGdhbHxrYWx8b2cgfHRhd3xhaG98dWthfGdwYXxpcG98aWthfG8gcHxhIHR8IG9nfCBzaXxnc2F8ZyB0fGFiYXxhbm98Z2xhfHkgc3xvIGF8YWtpfGhhdHxrYXV8c3VkfGdwaXxhIHd8ZyBpfGFoYXxvdCB8cmFufGkgc3xuIG18YmFsfGxpcHxnb258dWQgfCBnYXxsaSB8dWJhfGlnIHxhcmF8ZyBkfG5hIHxrYWJ8YWthfGdiYXxuZ2x8YXlvfCBsYXwgaHV8YSBofGF0aXxkIGF8ZCBufCBwdXwgaW58dWdhfG9rIHxpaGl8ZCB1fG1hIHxtYXl8YXdvfGFnYnxhbWl8c2F5fGFwYXxwb2R8dWhhfHQgbnxhZ2h8YnVofGluc3xhZCB8IHVifCBidXxhdCB8aWlufGEgZHxpcCB8dXRhfHNhbHxob258d28gfGhvIHx0cmF8bGFrfGlrb3xhcyB8YW9kfGJhaHxtbyB8YXVnfG9uYXxkaWx8Z2lrfHNvc3xsaWh8cGlufCBwaXxrIHN8bmlufG9vbnxhYnV8bGEgfHJhYnxodW58IHRpfG1haHx0YXJ8dCBzfG5nYnx1bWF8aGlufGJhdHxsYW98bWFrfGl0IHwgYXR8cyBzfHNub3xhc258bmkgfGFhbnxhaHV8IGhpfGFnaXxuIHB8aW51fHVsb3x5IHB8IG5pfGloYXxtYWd8byBufGR1a3xlZHV8IGVkfGEgZXx0aWx8dXJhfHRpbnxraXB8YWdsfGdheXxnIGh8ZyBifGF0b3xnaGl8bmFifGtvbnxpbiB8dGVyfG8gdXxvIG98eWFsfHN5YXxvc3l8IHNvfHRpa3wgcmV8IHRyfGhpZ3xhIG98aGEgfGJ1dHxwYWt8YXlhJyxcbiAgICB0Z2w6ICduZyB8YW5nfCBwYXxhbiB8c2EgfCBrYXwgc2F8YXQgfCBtYXwgbmd8YXBhfGFsYXxhdGF8ZyBwfHBhbnxwYWd8YXkgfCBhbnwgbmF8YXJhfCBhdHx0YW58YSBwfHBhdHxuIGF8IGJhfGdhIHxhd2F8cmFwfGthcnxnIGt8YXlhfGxhbnxnIG18biBufGcgYnxuZ2F8bWdhfCBtZ3xhIGt8bmEgfGFtYXxuIHN8YSBhfGdhbnx5YW58Z2thfCB0YXxtYXl8dGFvfGFna3xhc2F8bWFufGFrYXxhbyB8eSBtfGFuYXxnIGF8bmFufGFoYXxrYW58eSBrfGJhd3xrYWx8YSBtfGcgbnxpbmd8d2F0fCB5IHx0IHR8cGFtfGEgbnxvIHl8YmFufCBsYXxhbGl8c2FufHdhbHxtYWd8IG8gfGcgaXxhZ2F8bGF5fGFueXxnIHN8aW4gfG55YXx5b258a2FzfGEgc3xpc2F8dW5hfG9uZ3xhYW58a2F0fHQgcHwgd2F8aW5hfHRheXx5YSB8b24gfG8gbXxpbGF8YWcgfG50YXx0IG58YWJhfGlsaXwgYXl8byBhfCBnYXxubyB8YSBpfGdhbHxhbnR8aGFufHQgc3xrYXB8a2FrfGxhaHxhcml8YWd0fGFncHxyYW58ZyBsfGxpbnxhcyB8bGFsfGdhd3xhbnN8dG8gfGl0b3wgaXR8aGF5fHdhIHx0IG18IGlzfHBhcHxtYW18bnNhfGFoaXxuYWd8YmF0fGxpcHxndGF8IGRpfGdheXxncGF8cGlufCBzaXxuZ2t8dW5nfGFraXx5IG58aXRpfHRhdHxhbm98eWFhfHkgc3xtYWx8aGF0fGthaXxzYWx8aGlufHVtYXxtYWt8ZGkgfGFnaXxwdW58aWhpfGEgbHxpIGF8aXJhfGdnYXxuYWh8cyBufGFwIHwgaGF8dXNhfG5pbnxvIHB8Z2lufGlwdXxpa2F8bmdpfGkgbnxsYWd8bGEgfHkgcHxpbml8ZyB0fHVrYXxuYXB8IHR1fGEgZ3x0YXN8YXJ1fGlwYXwgaXB8bGkgfGFsIHxuIG98YSBvfHQga3xhbG98IHBpfHNpbnxzeW98YXN5fGl0YXxhaG98bmFyfHBhcnxvIHN8cGFrfHQgYXx1aGF8c2FzfGdzYXxhZ3N8a2lufGEgaHxpYmF8bGl0fHVsYXxvIG58bmFrfGEgdHwgYnV8ZHVrfGthYnxzYW18ZyBlfGFpbnxhbWl8bWFzfGxhYnxhbml8a2lsfGl0IHwgYWx8YWdifGJ1aHxhIGJ8ZyBnfGJhIHwgaWJ8aXlvfHJpIHx5YWd8YWQgfCBkYXxlZHV8IGVkfGFubHxtYSB8YWlzfGlnYXxtYmF8dHVufGlwaXwga2l8b2QgfGF5dXwgbGl8bGlofHNhcnxnaSB8ZyB3fHBhaHx3aXJ8b29ifGxvb3xhZ2d8bmxpfGJheXxtYXB8Z2l0fG1pbHxvayB8aG9ufG5nZ3xzYWh8aXlhfHBhc3xnIGh8YWdsfHRhcnxuZ3V8YW1ifHVrdXxheW98cyBhfHAgbnxuIG18cnVzfGkgbXxsIGF8YWJ1fCBhYScsXG4gICAgaHVuOiAnZW4gfCBzenwgdmF8IGEgfMOpcyB8bWlufGVrIHwgw6lzfCBtaXxqb2d8IGpvfGFuIHxpbmR8bmVrfHN6ZXxzw6FnfG5kZXxhIHZ8ZGVufG9nYXxzemF8dmFsfGdhIHxtw6lsfGFsYXxlbcOpfGd5IHxuIGF8dmFufHplbXxlbGV8IG1lfGVneXzDqWx5fCBlZ3x6YWJ8dMOhc3wgYXp8biBzfGJhZHxhYmF8bmkgfGF6IHxneWV8IGVsfGFrIHwgc2V8bWVnfHNlbnzDqW55fHPDqWd8ayBqfHluZXxseW58IG5lfGJlbnxsYW18dHQgfHQgYXxldCB8YWd5fG96IHxob3p8dmFnfHpldHwgdGV8biBtfGV6IHxuYWt8aW50fHJlIHxldMOpfHRldHxtZWx8dGVsfHMgYXxlbSB8ZWx5fGxldHxoZXp8IGFsfHMgc3wga2l8ZXRlfGF0w6F8eiBhfCBsZXx5ZW58ZXMgfHJhIHx0w6lzfGVsbHxudCB8c2VtfHQgc3xsZW58bmVtfGEgc3xlc2V8bmtpfGVua3xhIG18w6Fzw6F8aSBtfGJhbnxraW58ayBtfHN6dHwgw6FsfGFtZXxrw7Z6fGsgYXxkc8OhfGFkc3xsw7MgfCBrw7Z8w6FzIHxseSB8b24gfMOpYmV8dGF0fGEgdHxuIHZ8w6FsbHxtw6lufCB2w6l8bnllfGvDvGx8bMWRIHxhIG58IGNzfGkgw6l8b2sgfMOpc3p8w6lydHxsbGF8bGFwfMOhZ298Z29rfG55aXx0ZWt8IGtlfG5kIHzDqXRlfGFtaXx6w6lzfHllc3xzem98dCBtfGEgYXxoZXR8ZmVsfGxhdHxsZW18bGxlfGVsIHx6IGV8cyBlfGsgw6l8bWJlfGVtYnxlbMOpfG90IHxsaXN8dmV0fGtvcnzDoWcgfG9sZ3wgYW18c3rDoXxlaGV8bGVofG9nb3xvdHR8w7xsIHxudGV8w6lsZXxpIHZ8b2d5fGhvZ3wgaG98a2VsfG4ga3x0ZXN8bmzFkXxlbmx8c3PDoXzDoXphfGjDoXp8w6lnIHx2ZWx8w6FiYXxsZWt8w6lnZXwgaGF8YSBofHLDqXN8IGZlfMOhbnl8ZGVsfGVsxZF8w6F0IHxhbMOhfGFydHx0YXJ8enRvfHrDoXN8dMWRIHx5aWx8a296fHRrb3xhbMOzfHMga3xpIGV8w6Fyc3x0w6FyfG16ZXxlbXp8IG55fG3DoXN8ZXR0fG55IHxmZWp8YXNzfHphc3wgaMOhfGQgYXx0IMOpfGlzIHzDqXPDqXxlesOpfHTDqWJ8IG11fMOhc298c8OtdHxseWV8ZWxtfMOpZGV8dsOpZHxpbmV8dCBrfG9zIHxpdCB8aXp0fGJpenwgYml8eSBhfG0gbHx0b3R8YSBqfGF0a3xuw6lsfHQgbnx0aSB8IG3DoXxhaSB8bMOhc3xldmV8bmV2fHp0ZXwgYsOhfHNlbHxsbCB8YWwgfGVyZXxuIGV8dW5rfG11bnx0IGV8IGFrfGlmZXxraWZ8YWtvfHMgw6l8IMOpcnzDoW5hfCBlc3xzIHR8Z290fHPDvGx8IGJlfHbDoWx8Y3NhfHNlIHzDqXNlfGFkIHxnZXN8dG9zfGphIHwgZ3l8YXN6fHRlbnxsbcOpfCB0w6F8ZXplfMOhcm18YsOhcnxlc3N8bCBzfMO8bGUnLFxuICAgIGF6ajogJyB2yZl8dsmZIHzJmXIgfGlyIHwgaMmZfCBiaXwgaMO8fCBvbHzDvHF1fGjDvHF8cXVxfG5hIHxpbiB8bGFyfGjJmXJ8ZMmZIHwgxZ/JmXxiaXJ8bMmZcnxsaWt8bWFsfHIgYnxsbWF8ciBofCB0yZl8yZl4c3zFn8mZeHzJmW4gfGRpcnx1cXV8dW5hfGFuIHxhbGl8YSBtfCBtYXxpa2R8aW5pfHIgxZ98ZMmZbnxhciB8aWzJmXxxdW58YXEgfGFzxLF8IHlhfG3JmWt8ecmZdHwgbcmZfCBtw7x8a2RpfMmZc2l8yZlrIHxpbG18bmlufG5kyZl8b2xtfMmZdGl8yZkgeXxzaW58eHMgfG5kYXxsbcmZfHl5yZl8aSB2fCBxYXwgYXp8b2x1fGl5eXx5YSB8aW5kfHphZHxxbGF8w7xuIHxuaSB8bMmZIHx0aW58biBtfGF6YXxhcsSxfMmZdCB8biB0fG1hcXxsdW58bMSxcXzJmSBifHVuIHxudW58cSB2fG4gaHxkYW58xLFuIHwgZXR8dG3JmXzJmXLJmXwgw7Z6fGRhIHzJmSB2fCBvbnzJmSBhfMSxbmF8xLFuxLF8YmlsfGEgYnxzxLEgfGlsIHzJmW1pfGFyYXxzaSB8IGRpfMmZIG18yZlyaXxybMmZfCB2YXzJmSBofGV0bXzEscSfxLF8YW1hfGRsxLF8YWRsfHJpbnxiyZlyfHLEsW58biBpfG3DvGR8bsSxbnwgaGV8bWFzfGlrIHxuIGF8ZGlsfGFsxLF8aXJsfMmZbMmZfMO8ZGF8c8SxbnzEsW5kfHhzaXxsaSB8yZkgZHxuyZkgfCBiyZl8yZl5YXwgaW58yZkgaXxsyZl0fCBzyZl8bsSxIHwgacWffGFuxLF8ZcOnIHxoZcOnfHEgaHxleW58yZkgZXxkxLFyfCBkYXxhc2l8csSxIHxpxZ8gfGlmYXxsxLHEn3xpIHN8ZmnJmXxhZml8ZGFmfCBlZHxtyZl6fHUgdnxraWx8IGhhfG9sYXxuIHZ8yZluaXzEsXIgfHVxIHx1bm18IGJ1fCBhc3xzaWF8b3NpfHNvc3xpbGl8xLFkxLF8bMSxZHxubWF8xLFxIHxpbsmZfMmZcmF8c2lsfHhpbHxheGl8ZGF4fGFkyZl8bWFufGEgaHzJmSBvfG9udXxhIHF8yZl6IHwga2l8c2XDp3wgc2V8xLEgaHxtaW58bGFufMmZZMmZfGJ1IHxyYXF8bMSxIHzEsWzEsXxhbCB8yZkgcXxyIHZ8bmxhfGhzaXzJmWhzfHTJmWh8w7Z6IHxpc3R8IGlzfG3JmXN8IMmZc3xpbmF8yZkgdHzJmXRsfGEgdnxpyZkgfG4gYnx0yZlyfCB0YXwgY8mZfGVkaXxhbGF8a2ltfHF1IHxpIHR8dWxtfG3JmWh8biBvfGF5YXzEsSBvfGlhbHwgc298aWxsfHNpeXwgZMmZfHZhcnxpbnN8bWkgfMSfxLEgfG5pa3xyIGl8YXFsfGsgaHx0yZltfHRhbXzDp8O8bnzDvMOnw7x8IMO8w6d8xJ/EsW58c2FzfMmZc2F8eiBofMmZbcmZfHphbXwgemF8c3RpfHLJmWZ8biBlfHIgYXxpbGR8aMmZbXzEsXFsfHlhbnxtYXl8biDJmXxtyZlufG1pbHwgbWl8yZlxaXxkaW58biBkfHTDvG58IGTDtnxtaXl8a2FofGlrYXwgbml8ZmFkfHRpZnxsIG98c8mZcnx5bml8IGV5fGFuYXxsyZlufGFtIHxyaWx8YXnJmXxhxZ/EsScsXG4gICAgY2VzOiAnIHByfG7DrSB8IGEgfCBuZXxwcsOhfHLDoXZ8bmEgfG9zdHwgcG98aG8gfCBzdnxvIG58IG5hfHZvIHxuZWJ8w6F2b3xibyB8ZWJvfG5vc3xtw6EgfCBtw6F8YcW+ZHxrYcW+fCBrYXwgcm98Y2ggfGTDvSB8xb5kw718dGkgfG91IHxhIHN8IHDFmXwgemF8w6Fuw618w6EgcHwgamV8IHYgfHN2b3zDqWhvfCBzdHzDvSBtfHN0aXxuxJsgfCBieXxvYm98dm9ifHRlcnxwcm98ZW7DrXxib2R8IHrDoXwgc3B8w60gYXxyb2R8a3RlfGJ5IHxtdSB8dSBwfG8gcHwgbsOhfHbDoW58amFrfCBqYXxhIHB8byB2fMOtIG58b3bDoXxvbGl8dsOtIHxzcG98cm96fCBrdHxtaSB8w60gcHxueSB8IG1hfMOtbSB8aSBhfGRvIHwgc298b2RufMOhcm98bsOhcnxsaSB8bsOpIHx0dsOtfGF0IHzDvWNofGEgenwgdnl8YnlsfHZvbHxlbiB8w710IHxiw710fCBiw718dCBzfHRuw618c3RufG8gc3zDrSBifHRvIHwgZG98c3bDqXx2w6kgfHJhbnxlam58esOha3xlaG98amVofG5lc3xwxZnDrXxtw60gfMSNaW58a29sfGFqw618c291fCB2xaF8w61jaHxpdCB8bsO9bXzDvW0gfG51IHxocmF8bm91fHUgc3zDqW11fCBrIHxkdSB8xb5lbnxwb2R8IHplfGtsYXxhIHZ8c3R2fHBvbHxkbsOtfGVyw6l8bSBwfHN0w6F8amUgfGNpIHxlxI1ufCBuaXxuw6lofGEgbnxha8OpfMOhdmF8bWFqfGVtIHxyb3Z8w60gbXxrw6kgfG9sZXxuw71jfG92YXwgdmV8YWtvfCB0YXxpIGt8Y2hyfG9jaHwgb2N8a29ufGkgcHzDrSB2fHNtw618ZXNtfGtkb3xzdCB8aSBufG8genxhdmV8b2R1fGJlenwgdG98c3RhfGVjaHxqw60gfG8gZHxzb2J8c2UgfCBzZXzDrSBzfMO9bWl8aSBzfCBpIHxpIHZ8IHZ6fG7DrW18cHJhfGxuxJt8cMWZaXx0w6F0fHN0ZXxhIGp8YWJ5fCBhYnwgcyB8b2xufGEgb3xtIG58xI1lbnxzbHV8xZnDrXN8IG9zfHplbXxtZXp8IMSNaXxsbsOtfMOhbG58b2NpfGppbnwgaml8eSBifMOtIHp8eSBzfHZhIHx2xaFlfHQgdnxvdm58Y2hufGTEm2x8bsOtY3xsZcSNfCBwbHx2YXR8IHZvfHZpbnxyYXZ8dm91fGxhZHxpbm58w6kgdnxhbnV8dGVqfHUga3xzdHV8ZXN0fCB0cnxreSB8aWtkfG5pa3xpdm98bml0fHplbnx1IG98bsOpbXxuZXp8acOhbHzDrWhvfGxlbnxlbnN8b8W+ZXxva298a8OpaHxyYWN8dmVufMOtIGt8ZSBzfGzDoW58xJtsw6F8emTEm3x2emR8dCBrfGRpbnxvZGl8dMOtIHwgb2R8csOpIHx0dXB8cG92fHBsbnzFoXTEm3zDoWtsfG5ub3x0YWt8ZXLDoXzFmWVkfG8gYXxhIHR8cmVzfGrDrWN8IG11fHUgenxyb2t8IG9ifMSNbm98dSBhfHkga3xpIGp8w6kgbnxsdcWhfMOtc2x8b3NvfGNpw6F8c29jfG7DrWh8byBqfGNrw6knLFxuICAgIHJ1bjogJ3JhIHx3ZSB8d2EgfGUgYXwgbXV8YSBrfHNlIHwgbiB8IHVtfCBrdXxpcmF8YXNofHR1IHxudHV8YSBpfG11IHx1bXV8bXVufHVudHxlcmV8endhfGVnZXx5ZSB8b3JhfHRlZ3xhIG58YSBhfGluZ3xrbyB8IGJpfHNob3xpcml8IGFyfCB3ZXxzaGl8YWJhfGUgbnxlc2V8Z28gfGEgbXxvIGF8Z3UgfHViYXxuZ298bmdhfGhpcnwgY2F8dWd1fG9ib3xob2J8emEgfG5kaXxpc2h8Z2lofCBhdHxhcmF8d2VzfCBrd3xnZXJ8YXRlfGEgYnwgYmF8IGd1fGUga3xjYW58YW1hfHVuZ3xib3J8dSB3fG13ZXxkaSB8IGFifG5rZXxrZSB8a3dpfGthIHxhbmt8eW8gfGV6d3xuIHV8bmEgfGl3ZXxlIG18cmV6fHJpIHxhIGd8Z2lyfCBhbXxpZ2l8ZSBpfHJvIHxhIHV8bmdpfGUgYnxiYW58IGFrfCBpbnxhcml8biBpfGh1Z3xpaHV8ZSB1fHJpenxhbmd8bnRhfCB2eXxhdGF8IHVifGFuZHxha2F8cndhfCBudHxrdXJ8dGEgfGlraXxrYW58aXphfHUgYnxyYW58c2hhfG8gbnxpIG58IGlnfGl2eXwgaXZ8YWhpfGJhaHx1IG58YW5hfCBidXwgYXN8YWt1fGdhIHx1a298byB1fGhvIHwga2F8b3NlfHVidXxha298Z3VrfGl0ZXxvIHl8YmEgfGkgYnxhbnl8a2lyfG8ga3xhaG98aXllfGt1YnxhbXd8bnllfGFoYXwgbmd8byBtfG55YXwgaXR8cmUgfCBpbXxvIGJ8aXp3fGt1bnxoaW58ZSBjfHZ5b3xvIGl8dnlpfG5ndXx1cml8aW1pfGltd3xnaW58ZW5lfHUgbXx6aSB8aGEgfGt1Z3xidXJ8dXJ1fGp3ZXwgeml8dSBnfGVyYXxhZ2F8cm9ufGFiaXwgeSB8ZSB5fCB1a3xnZWt8YW5pfCBnaXxleWV8aW5kfHdvIHx1IGF8aSBhfCBpYnxpIGl8cmFzfGJhdHxnYW58YW1ifG4gYXxvbmt8cmlrfG5lIHxpaGV8YWdpfGtvcnwgaWN8emUgfHR1bnxpYml8d3VifG5nZXxvIHp8dHNlfG5rYXxoZSB8cmVrfHR3YXxnZW58ZWtvfG1hdHxiZXJ8IGFofG5pIHx1c2h8dW13fCBid3xtYWt8YmlrfHVyeXx5aXd8YndvfCBua3xtYSB8bm8gfGtpenx1cm98Z2lzfGFyb3xpa2F8IHlhfGd1c3x5IGl8d2lyfHVnaXx1a2l8IGtpfGEgY3xyeW98YmlyfCBtYXwgeWl8aXJvfGJ3YXxtdXJ8ZW5nfHVrd3xoYXR8dGFufHV0dXx3aXR8dyBpfCBtd3x5IGF8bWJlfCBoYXx1emF8aGFtfHJhaHwgaXN8aXJ3fG8gdnx1bXZ8dXJhfGVueXxoaW18ZWthfGJha3xidW58IG55fGJvIHx5aWd8a3V2fHdhYnxrZXl8ZWtlfHllcnx2eWV8aSB5fGl0YXx5YSB8YSByfCBrb3xrd2F8byBjJyxcbiAgICBwbHQ6ICdueSB8bmEgfGFuYXwgbnl8YSBufHN5IHx5IGZ8YSBhfGFoYXxyYSB8IG1hfG5hbnxuIG58YW55fHkgbnxhIG18eSBtfHkgYXwgZml8YW4gfHRyYXxoYW58YXJhfCBmYXwgYW18a2EgfCB0c3wgbmF8aW4gfGFtaXwgbWl8YSB0fG9sb3xtaW58bWFufGl6YXxsb258IGl6fGZhbnwgb2x8IGhhfCBzeXxha2F8YSBpfHJlaHxheSB8aWFufHRzeXxpbmF8IGFyfG9uIHxvIGF8ZXRyfGhldHxvbmF8eSBvfG8gaHx6YW58eSB0fGEgaHxhbGF8IGhpfGEgZnx5IGh8ZWhlfGlyYXxhIHN8em8gfHkgaXxuZHJ8am8gfCBqb3xuIGp8IGFufCBhenxyYW58ZGlhfCBkcnx5IHN8ZmFofGVuYXxpcmV8dGFufGRyZXwgem98bWJhfCBrYXxtIHB8YWZhfCBkaXxuIGR8YW5kfGF6b3x6eSB8YW1wfGlhIHxyZW58aW55fHJhaHx5IHp8cnkgfGlrYXxvYW58YW8gfGFtYnxsYWx8aG8gfCBob3xpc3l8b255fHRzYXxhc2F8YSBkfGhhIHxmaWF8bWlzfGF2YXxyYXl8IHBpfGFtIHxkcmF8IHRvfHJpbnwgdGF8YW50fGVvIHx6YXl8cmFpfHRzaXxpdHJ8c2EgfCBmb3wgcmF8dmFufG92YXxuZW58YXp5fCB2b3xtcGl8YXJpfG8gZnx0b2t8YSBrfCBpcnxrYW58b3RvfG1haHxseSB8c2lhfCBsYXxuIGl8dm9hfGhhZnxhIHJ8aXRvfHkga3xva2F8eSByfHkgbHxhbm98aXRhfGVuZXxpdHN8aWFsfHpvbnxhemF8YWlufCByZXwgYXN8Zm90fGFyb3xmaXR8bmF0fG5pbnxhbHl8aGFyfCBrb3xoYW18IG5vfGZhIHxhcnl8YXRyfGlsYXxhdGF8aWhhfG5hbXxrb258b2tvfCBzYXxlbG98bmphfGFuanxpdmV8aXNhfG9hIHxkeSB8eSBkfG8gbXxudG98YW5rfG8gbnxvdHJ8cGFufGZpcnxhaXJ8c2lyfHR5IHxhIHZ8c2FtfG8gc3x0b3Z8bWl0fHJha3xyZW98byB0fHBpYXx0YW98IGFvfG5vIHx5IHZ8aWFyfGEgZXxhIHp8aGl0fGhvYXwgaXR8dG8gfHphIHx0b258ZWhhfGVuZHx2eSB8aWRpfHRpbnxhdGl8YWRpfGxuYXxhbG58cm92fGJhbnwgemF8bmdhfGhhaHxvbml8b3NpfHNvc3x2YWh8aW5vfGl0eXwgYXR8aGlhfHBpcnxpZmF8b21ifGFtZXxlcmF8dmVsfGthcnx2YSB8dHNvfGpha3xmaWR8aWZpfGFpc3xvIGl8aWR5fGxhIHxhbWF8YmEgfCBwYXx0b3R8YW5pfHJhcnxtcGF8aGF6fGthbXwgZW98IGlsfGl2YXxhaG98bmFvfG4ga3xhdG98bGFofG92eXwgdGV8ZHJvfGxhbnxlbGF8IG1vfCBzaXxmaW58bWl2fHNhbnxrb2F8IGhlfGFzb3wgbWJ8c2FrfGthdicsXG4gICAgcXVnOiAndGEgfCBrYXxrYSB8bmEgfHVuYXxjaGF8YXNofGFyaXxhIGt8YW5hfHBha3xpc2h8YWNofGhrYXxzaGt8bWkgfGt0YXxoYXl8bWFufCBjaHxhcGF8YWsgfHJpbnxhdGF8a3VufGhhcnxha3R8aXRhfCBoYXxhbWl8bGxhfCBwYXxhbWF8cGFzfHNocHwgbWF8dGFrfGF5w7F8ecOxaXxpbiB8c2ggfGluYXx1a3V8bmthfGNoaXxha2F8YSBjfHl0YXxrdXl8YWxsfHRhcHxhIGh8a2FufCB0dXzDsWl0fHR1a3wgcnV8cnVufGNodXxhbiB8cGF5fGF5dHxyaXN8IGtpfGFrdXxocGF8YW5rfGEgcHxrYW18IHNofG5hbXxhIHN8dXkgfGkga3xheXB8bmFrfHBpIHxudGF8YSBtfCBsaXxheSB8bGlhfGhpbnxrYXd8bmFwfGFudHx0YW18YSB0fGlyaXxuYXR8IHdhfHkgcnxrYXl8YXdzfCB5YXxuIHR8eXBhfHdzYXxwYSB8bGFrfHNoaXxhIGF8bGxpfGlrdXxodSB8biBrfGlha3x5YXl8a2lzfCBhbHxzaHV8YSB3fGlwYXwgc2F8IGlsfGFwaXxrYXN8eWt1fHlhY3xrYXR8YSByfGh1a3xpIGN8d2FufGhpa3xhIGl8aWxsfHVzaHwgdGl8YXlrfGhwaXwga3V8a2FjfHNheXxodW58dXlhfGlsYXxpa2F8eXV5fHBpcnxpY2h8bWFjfGltYXxhIHl8eWxsfGF5bHxpIHB8a2lufGEgbHwgd2l8a3VzfCB5dXxsYW58dGFufGxsdXxrcGl8IHRhfCBwaXxheWF8bGEgfHlhbnxhd2F8IG5pfGtha3xsYXR8cmlrfHdhcnx1bGx8a2xsfGxpIHxpbmt8bmNofHVuIHxha3B8biBzfG1heXwgYXl8dWNofGkgc3xuYWN8c2hhfGlraXxraWt8aCBtfHVrdHxwaXB8dGlufG4gcHxpeWF8bmFsfGFraXwgcml8dXJhfHRpa3xtYWt8eXBpfGkgbXxpIHd8biBtfGhpc3xrIGl8cml5fGl3YXx5IGh8IGh1fGhhbnxha2x8ayB0fG1hc3xwaWt8a2FwfCDDsWF8dSB0fG5taXxuaXN8ayBhfGkgeXxrIGx8a2FyfCBpbXxpIGl8d2lsfHltYXxheW18a3NpfGlrc3x1bWF8IHN1fGgga3xoYXN8IGFrfHVua3xodWN8a2lyfGFuY3xrIG18cGFsfGsga3xpayB8acOxaXwgacOxfG1hIHxuIHl8bXVufCBtdXxtYW18dGFjfGEgbnxpIHR8ayByfHNhbXxpYW58YXNpfGsgaHx3YXN8eXdhfGl5dHxsbHB8c2FufHN1bXxyYXl8c2kgfHBhbnxua2l8dGFyfCBpaXx1IGt8w7Fpa3x1ayB8acOxYXxrdWt8d3BhfGF3cHxha2t8YSB1fHdhdHx1cml8IG1pfHlhcnx1eWt8YXl3fGggY3xoYSB8dGF5fHJtaXxhcm18dXRhfGxhc3x5a2F8bGxrfGt1bHx3acOxfGF0aXxza2F8IGxsfGtpdHxuIGh8dXRpfGtpY3xtYXQnLFxuICAgIG1hZDogJ2FuIHxlbmd8bmcgfGJhbnwgc2F8IGthfGRoYXxyZW58IHNlfCBiYXxhayB8IGhhfGFkaHxoYWt8IGRofGFuZ3xzZSB8IHBhfGFiYXxhIHN8bmEgfGFnYXxoYSB8IG9yfG4gc3xvcmV8YXJhfCBhZ3xnYWR8YXJlfGFuYXxuIG98bmdnfGFsZXxnYW58YSBrfGFsYXxkaHV8dGFifHNhcnxvdGF8YXNhfGViYXwgb3R8IGtlfHNhYnxiYSB8d2kgfHV3aXxhYmJ8aSBofGh1d3xhYW58biBrfGEgYnxiYmF8IHRhfCBtYXxwYW58aGFsfGJhc3xha298ZGhpfHJhIHxrYWJ8ZW0gfGJlYnxrYSB8bGFrfGdpIHxsZW18ZyBhfGVrYXxuIGJ8YW1hfG5nYXxzYW58YXQgfG9uZ3xyYW58bmdlfGEgb3xnZ3V8c2EgfGEgZHxhbmV8biBwfGtlbnxwYXJ8YWphfG1hbnxnYXJ8YXRhfG5la3xhcGF8IG5hfGFnaXxhYmV8IGdhfGUgZXxzYWx8YSBhfHRhbnxnIHN8YWwgfGthbHxnZW58dGEgfGkgc3xha2F8ZSBhfGEgcHxhIGV8IGxhfCBwZXxuYW58IGFufGVyYXxlIGR8IGUgfCBiZXxuIGF8IGFsfGVuYXx1eSB8Z3V5fG4gbnxhdGV8IGJpfG1hc3xlIGt8a2F0fHVhbnxvYW58a29ufGsga3xhIG18aSBkfGcgZXxuIHR8ZyBrfGFkYXxrb2F8bGFufGVsYXwgZGF8YmFkfG1hIHxuZSB8YXMgfGxhYnxlZ2F8IG1vfGFyIHxjYXJ8b25lfGkgcHxiaSB8a2FhfGJhdHxyaSB8b24gfHBvbnwgc298ZSBifGxlIHxhaCB8YWJpfGFzZXxhZGl8ZXBhfCBlcHxrIGh8YW5kfHBhbXx0ZSB8b2sgfHN0ZXxhb258b20gfG9rb3xhaGF8YXJpfG9uYXxhc2l8dGVyfCBkaXxkaSB8cGFkfGUgc3xzYWR8eWFyfG5lZ3x0b258c2V0fHJnYXxvc3R8bW9zfGdhcHxuZGF8YSBsfGhhcnxpIGt8aW5hfCBhIHwgbmd8a29tfGlzYXxzaSB8YSB0fGEgaHwga2x8amFufGRhanxpZ2F8aGlnfGlkaHxoaWR8bmRofG4gbXxuZ3N8dHRvfGV0dHxhcmd8bGEgfGsgYnxsZXJ8ayBkfG5uYXwgdG98bmFvfG4gZHxtYXR8IGNhfHRhZHxiaXN8YXlhfGVwb3xhZW58IHBvfGJpbnxueWF8a2FzfGsgc3xuIGh8c3lhfG50YXxnc2F8ZW4gfGFudHxuIGd8a2FyfGkgZXxkYXN8ZSB0fGUgcHxpYmF8IHByfGcgcHwgaG98IGVsfGkgYXxoaSB8b3MgfHNhb3x1d2F8dGVzfCBqYXxuYWd8bmFzfGxhZXxzaWF8dCBzfGsgb3xudG98aW50fHlhdHxhcm58bSBwfGR1d3xhZHV8ZXRhfCBrb3xpIGJ8bmkgfGcgbnxrbGF8cmFrfGFtZXxtcG98anVhfHNva3xhc298Z2dpfGVqYXxwZWx8amFtfGVsZXwgZXR8ZGlsJyxcbiAgICBueWE6ICdhbGl8bmRpfGEgbXxhIGt8IG5kfHdhIHxuYSB8IGFsfHllbnwga3V8bnRofHJhIHxkaSB8c2UgfG5zZXwgbXV8YSBufHRodXxodSB8bmdhfCB3YXxsYSB8bXVufHUgYXx1bnR8aXllfCBrYXxjZSB8YWNlfCBsb3xhIGx8YW5nfGUgYXwgbGF8IHBhfGxpeXxhIHV8ZW5zfCBtYXxpZHd8b25zfGR3YXxlIG18aSBufGFsYXxraGF8bG8gfGxpIHxpcmF8ZXJhfGVuZXxnYSB8YW5hfHphIHxvIG18IG1vfHlvIHxvIHd8IGNpfHdlIHxkeml8a28gfG8gbHxhbmR8ZGFufGhhbHx6aWt8Y2hpfG95b3xwYSB8bmVyfHVsdXxlbmF8bW95fCB1bXxhIHB8IGRhfGFwZXxrYXB8a2EgfGlrb3wgYW58cGVufGEgY3x0byB8aXRvfGhpdHxuY2h8IG5jfGlyaXxsaXJ8d2FjfHVtb3xlIGt8bHUgfGEgYXxheWV8IGR6fGt1a3xhIHp8ZHdlfHRoYXxtYWx8IHphfGluZ3x1ZnV8bXUgfHJvIHxmdWx8IHVmfG8gY3xpIGR8bGlufGUgbHx6byB8ZWR3fCB6b3xvIGF8bXdhfHUgd3xpcm98byBufGxhbnxhbXV8ZXJlfCBtd3xueml8ZHphfGFsb3xyaSB8IGxpfGZ1bnxsaWR8Z2FufHNvIHwgY2F8a3VsfG9mdXxuc298byB6fHVsb3x1bnp8byBrfG11bHxsYW18aSBjfHNhbnxhIGJ8a3dhfCBuYXxhIGR8IGEgfHVuYXx1IGt8aSBsfG5raHxhbnR8YWt1fGNhIHxjaXR8b2xpfGlwb3xkaXB8YW1hfGxhY3x3aXJ8aGFufHlhbnxvc2F8dWxpfHRzYXxpIG18cG9ufGt1cHx1IGR8dGkgfGd3aXx1a2h8dW5nfGh1bnxsb258YW5rfG5kYXxpa2l8aW5hfCBrb3xhbyB8ZGl6fHBodXxhdGl8b21hfGkgYXx0c2l8cGF0fGl5YXxzaXl8a3V0fCB5YXx6aWR8ZXplfG1hIHxpIGt8bWVyfG9tZXxtb2x8dSBufHUgb3xhcGh8b2d3fGl6b3xtYmF8c2lkfGt1IHxzYW18YXdpfGFkenwgYWR8aXppfHVsYXxzYXl8ZSBufGtodXwga2h8cmV6fHZvbXxidm98b2tofGxva3x3aW58YWtofG8gb3wgYW18IG9ufHppcnxtYXB8IHppfGV6YXxqYSB8Z28gfG5nb3xpa2F8aXRzfGF0c3xvc2l8Z3dlfCBjb3xpc2F8eWEgfGhhd3xhbml8byBwfHppIHxuZHV8a2hvfGV6b3xraXJ8dW5pfGkgdXwgYXl8bGFsfGdhbHxzYSB8Ym9tfCBib3xvbGF8YW1ifHdha3xoYSB8YmEgfG5qYXxhbmp8YmFufCBiYXxpemF8IGJ1fHVkenxuZ3d8YnVufG95ZXxvIGR8bmFsfGt1c3xpIHB8aSBvfGkgeXx3aSB8IG50fGUgcHwgc2l8YWthfG5lIHxtZW58amlyfG5qaXxzZWR8ZXRzfGVuZHxla2F8dW1hfGR1ICcsXG4gICAgenliOiAnYm91fGl6IHxhZXV8ZW56fGVuZ3x1eiB8IGJvfGloIHxvdXh8bnogfCBkaXxpbmd8eiBnfHV4IHx1cSB8ZGlofG5naHwgY2F8bmcgfGdlbnx1bmd8eiBjfCBtaXxtaXp8aWogfGNhZXx6IGR8IGdpfCBkZXwgZ2V8ZXVxfHlvdXwgY2l8bmd6fG91anxhZW58dWogfCB5aXxpZW58Z3lhfCBndXxuZ2p8bWJvfCBtYnx6bGl8ZGFlfGdpanxjaW58YW5nfGogZHxuYWV8IHNlfCBiYXx6IHl8ZXV6fCBjdXxkZSB8eCBtfG96IHxqIGd8b3V6fHggYnxsaSB8eiBifGggZ3wgZGF8IHlvfG5qIHx4bmF8b3hufHJveHwgcm98aCBjfG56bHx2ZWl8eWF1fHd6IHx6IG18aXggfCBzaXxpIGN8aXEgfGdoIHxqIGJ8IGN3fG5kYXx5aW58IGhpfCBuZHxkYW58dnVufGluaHwgZ2F8Y2FufGVpIHxjdW58eWllfHEgZ3xob3p8YmF1fCBsaXwgZ3l8d3lvfGN3eXx6IGh8Z3VlfGd6IHxndW58ZmF6fHVuenx5ZW58dWggfGRlbnxjaXp8IGdvfHEgY3xnaiB8IGJpfGVqIHxhZWp8IGZhfGhpbnx6Y2l8IHdufGogbnxnb3p8Z2FpfGF1IHx6IHN8cSBkfCB2dXxoIG18Z3ZhfGh1IHxhdWp8b3VxfGF6IHxoIGR8eWEgfHVla3xjaSB8bmggfHUgZHxvdSB8c291fGpzb3xnanN8ZGlufGF3enxlbmp8IGRvfGggc3xldmV8c2V2fHogcnxucSB8c2lufG5oeXxnIGd8ZyBifGxpenxrZ3l8ZWtnfHNlbnxlaXh8d25nfGxpanxuZ3F8YmlufGkgZHxnaGN8IGhhfGJhZXxoaXh8aCB5fGogY3xnaGd8aSBifG91aHxlbiB8biBkfGggZnxqIHN8eiB2fGogeXxsYXd8aGNpfGFuaHxpbnp8cSB5fG5laXxhbmp8b3pjfGV6IHxlbmh8cSBzfGFpcXx1ZW58enNpfHpkYXxoeWV8dWpjfGUgY3xzaXp8ZWl6fGFuenxnIHl8aSBnfHEgbnxiaWV8IG5lfCBhZXxnaXp8dSBjfGhneXxnIGR8Z2RhfG5nZHxjb3V8IGxhfHogbHxhdXl8YWkgfGluIHxpdXp8emRpfGpodXx1amh8eXV6fCBkdXxqIG18IGZ1fGN1enxlaXF8ZyBjfGd6ZHwgY298dXl1fGNvenx6Yml8Yml1fCBkd3xpIHN8aSBufGF3IHxkdW58eXVufGl6eXxkYXd8IGhlfG5ob3wgaG98ZW5xfHggbHxjaWV8cSBifGNpanx1emx8eCBkfGl1anxhd2p8IHlhfGVpanxkZWl8bmRlfHNhZXxpemN8d25xfHduaHxzZWl8aCBifGFpaHxnenN8YndufGEgZHx1IGd8bmdnfGpjYXxlIGJ8cmFufCByYXxoY3V8IG1lfGlldHx2YW58IGJ1fGd1aHxoZW58c2kgfHduanwgdmV8dSBifGF6bHxpbmp8Z2FrfGdhbnxvemd8c2l1fHlhd3xpIG0nLFxuICAgIGtpbjogJ3JhIHwga3V8c2UgfCBtdXxhIGt8bnR1fHR1IHxuZ2F8dW11fHllIHwgdW18dW50fG11bnxlIG58IGd1fHdlIHxpcmF8YSBufCBuIHx3YSB8ZXJlfG11IHxrbyB8Z29tfGEgYnxlIGF8IGFifGxpIHxlIGt8bWJhfGEgYXxlIGJ8YWJhfGdhIHxlIHV8YmEgfG9tYnxvIGt8IGJhfGEgdXxvc2V8dSBifG8gYXwgY3l8YXNofGVuZ3wgYWd8a3dpfCBidXx6YSB8Z2lofHJlbnxuZGl8IHVifGFuZ3x5byB8YWthfGd1IHxpZ2l8IGlifGEgZ3xhIG18IG50fHVsaXxvIGJ8YW1hfGlodXxlIGl8bnRhfCBha3xhZ298cm8gfG9yYXwga2F8dWd1fGh1Z3xkaSB8aXllfGJhbnwgYW18Y3lhfGt1IHx0YSB8IGJ3fGFuZHxzaGF8cmUgfCBpZ3xnYW58dWJ1fG5hIHwga3d8b2JvfCBieXwgYml8YSBpfHlhbnxrYSB8c2hvfGt1YnxlcmF8ZXNlfCB3ZXxrYW58YWdhfGhvYnxib3J8YW5hfGJ5b3x1cmF8dXJ1fGliaXxyd2F8d2VzfHUgd3xubyB8dWtvfGkgbXxtbyB8dSBhfHVyZXxpbGl8dWJhfG8gbnx1aGF8dWdhfG4gYXwgaW18aXNofGJ3YXxid298d2l5fGFsaXxiZXJ8emUgfG5lIHx1c2h8YXJlfG8gaXx1IG18Z2VyfGJ1cnxyYW58IGtpfCBub3xhbmV8YnllfCB5IHxlZ2V8dGVnfGd1aHwgdWt8biBpfHJhZ3xpIGF8eWEgfHUgZ3xlIG18YW56fGJvIHxhYm98Z2FyfHdvIHx5IGl8aG8gfGFnZXxpbmR8byBtfGVrZXxhIHN8YXJhfHppcnxpdGV8a3VnfGtpbXxhY2l8IGFzfHUgbnxhbml8a2lyfG1iZXwgZ2l8eW9zfGt1cnx1Z298Z2lyfGUgY3xpemF8YWhvfGkgYnx0dXJ8YXRhfG8gdXwgc2V8dSB1fHpvIHxpIGl8YWhhfG5nZXxtd2V8aXJvfGFrd3xhbnl8ZXphfHVraXxpbWl8byB5fGF0ZXx1IGt8aWtpfGF0dXxiYXR8IGlufGdvIHx0YW58biB1fGJvc3wgYm98IG5hfGhha3xpYnl8IGF0fGloZXx1bmd8aGEgfGJ1bHxrYXJ8ZXllfGVrb3xnZWt8bnlhfG8gZ3xzaHl8ZSB5fGF3ZXxuZ298Yml0fG11bHxueml8cmVyfGJhZ3xnZSB8aW13fGJhaHxjaXJ8Z2FjfGJha3xqZSB8Z2V6fGltdXxlemV8dHNlfGV0c3xtYXR8IHJ1fGlyd3xoZSB8IG5pfCB1cnwgeWl8YWtvfG5naXwgbmd8aSBufHJlenx1Yml8Z3VzfGZpdHxhZml8dWdpfHVrYXxhbWJ8byBjfHV0dXx1ZmF8cnVrfG11Z3xiYXN8YmlzfHVrdXxoaW58ZSBnfGlnZXxhbW98aW5nfCBhZnx5ZW18bmkgfCByeXxhIHJ8Z2F6fHRlIHxlcnd8YndlfHVid3xod2F8aWtvfCBhbHxhbnR8emkgJyxcbiAgICB6dWw6ICduZ2V8b2t1fCBuZ3xhIG58bG8gfHVuZ3xuZ2F8bGEgfGxlIHwgbm98ZWxvfGx1bnwgdW18ZSBufHdhIHx3ZSB8Z2VsfGUgdXxlbGV8bmVsfHRoaXxrZSB8bm9tfGV6aXxtYSB8bnR1fG9tYXxoaSB8byBufG5nb3x0dSB8bmtlfG9ua3xvIGx8dXRofG5pIHxhIHV8bGVrfHVudHwgd298byBlfCBsb3xtdW58dW11fHBoYXwga3V8YW5nfGhvIHxrd2V8dWx1fCBuZXx3b258dW5lfGx1bHxlbHV8IHVufGEgaXxnb2t8a3VsfGF0aHxobGF8bG9rfGtoZXxlbml8dGhvfGVsYXx6d2V8YWtofGtlbHxhIGt8ZW56fGFuYXxiYW58YWthfHUgdXxpbmd8dWxlfGVsd3xraG98dWt1fGFsYXxsd2F8Z2VufCB1a3x3ZW58YW1hfG5hIHxlIGt8a28gfGdhbnxhIGV8aGUgfHppbnxlbmt8byB5fCBlenxrYXR8IGt3fGxhbnxldGh8aGV0fG8gb3wgb2t8b2t3fGkgbnxueml8YWJhfGUgYXxoYWt8bGVsfGx3ZXxla298YW5lfGthIHxzbyB8eW8gfGF5b3xvIGF8dWhsfG5rdXxueWV8IG5hfHRodXxtcGh8ZG8gfGJlbnxpc2V8a3V0fGlrZXxrdW58IGlzfCBpbXxob2x8b2J1fGZhbnxpIGt8ZSB3fG5obHxub2t8aW5pfGFuZHxrdWh8dWtofGt1a3wgYWt8ZSBpfGlzaXxhcGh8emkgfGlsZXxla2l8ZWtofCBiYXxla2F8dGhlfGEgYXwgbGV8IHllfGt3YXxlIGV8ZnV0fCBmdXx6YSB8bWFsfCBhYnxlYmV8aXNhfCBlbXxvIHd8a3VifG10aHxpIHd8bmRsfGVtcHxhbnl8b2xvfGdhIHwga298bmVufG5pc3xhbHV8aXRofGVsaXxuZG98c2VifG5kYXwgeWF8aSBpfGVrZXx2aWt8YWtlfHViYXxhYmV8ZXp3fHlva3xiYSB8YWxlfHpvIHxvbHV8dW1lfHllIHxlc2l8a2lsfGtodXx5ZW58ZW1pfG5lenxobG98YSBsfGFzZXx1bGF8a2VrfGEgb3xpcGh8byB1fG5vIHxhend8a2FufG1lbHx1bnl8bmUgfHVmYXxhaGx8bGlufGh1bHxhbnR8dW5kfHNhIHxlbmh8a3VzfGt1dnxsYWt8IGlufG8gaXxkaW58a29tfGFtYnx6aXN8aW5kfG9sYXx1cGh8d2V6fGVuZ3x5ZXp8cGhlfHBoaXxtYmF8bnlhfGhhbnxrdWZ8bmVtfGlzd3xhbml8aXlvfCBpeXxmdW58IHlvfHV2aXxpIGF8ZW5lfGl6aXwgZWx8Y2FsfGkgZXxlemV8YW5vfG5heXxod2V8a3VwfGxhbHx1eW98dWJ1fGtvbHxva298dWxvfCBsYXxlIGx8dGhhfG5hbnxtZnV8aG9ufG56YXxoaW58IGV5fG9tcHxkYSB8Ym8gfGlsdXx3YWt8bG9ufGlzb3xrdWd8bmthfGlua3xpIGx8c2VrfGVrdXwgZWt8dGh3fGdleicsXG4gICAgc3dlOiAnYXIgfGVyIHx0dCB8Y2ggfG9jaHwgb2N8aW5nfMOkdHR8aWxsfHLDpHR8ZW4gfCB0aXx0aWx8ZsO2cnxsbCB8IHLDpHxuZGV8IGbDtnx2YXJ8ZXQgfGFuZHwgZW58ZWxsfCBoYXxvbSB8aGV0fGxsZXxsaWd8ZGUgfG5pbnwgZGV8bmcgfCBpbnwgZnJ8YXMgfGxlcnwgZWx8Z2VufG52YXx1bmR8YXR0fGVudnxyIGh8IGkgfHIgcnxza2F8ZnJpfCBzb3xoYXJ8ZGVyfCBhdHzDtnIgfHRlcnxhbGx8dCB0fCB1dHxkZW58a2EgfGxsYXxzb218YXYgfHNhbXxnaGV8Z2EgfCBza3wgdml8IGF2fGV0ZXxsYSB8ZW5zfHQgYXwgc2l8ciBzfGlnYXxpZ2h8dGlnfCB2YXxpZyB8YSBzfCBzdHxpb258cmEgfHR0aXxhIG98IMOkcnx0ZW58bnMgfHQgZXxuYSB8IGJlfGhhbnwgdW58IGFufCBzYXxhIGZ8IGxhfCBncnwgbcOlfG5nZXxuIHN8dmlzfGxhbnxtw6UgfGF0aXxuYXR8IMOldHxhbiB8bm5hfCBsaXwgYWx8dCBmfGFuc3xuc2t8c25pfGdydXzDpGxsfHRpb3xhZCB8IG1lfGlza3xrbGl8cyBmfHQgaXxzdMOkfHQgc3xyaSB8bWVkfHN0YXxoIHJ8bGlrfGRhIHxkaWd8dGEgfHIgb3xydW58b24gfCByZXxsYWd8dHRhfMOkciB8a2FwfGEgaXxhIHJ8w6RuZHxlcnZ8biBlfGt0ZXxuIGZ8cnZpfG5vbXxpdHR8aWQgfCBtb3xza3l8ciBlfHZlcnzDpG5zfHZpbHxndCB8aWd0fCBuYXx0YW58dXRhfGRyYXx0IG98cm8gfGlzbnwgZmF8a2FsfGloZXxyaWh8ZXJrfHIgdXxlIHN8cGVyfGwgdnx2aWR8b25lfHJlbHxiZXJ8cmFufG90IHxtb3R8bmRsfGQgZnxlZCB8aWthfG3DpG58bCBzfGJldHx0IGJ8ZGQgfHlkZHxreWR8biBvfHMgc3xzdHJ8biBtfHRldHxzaW58ciBmfCBvbXxybmF8aW50fHIgaXxlbmR8bmFkfGwgYXxhcCB8ZXJzfG5kYXx0IHZ8ZW50fHJiZXxhcmJ8IGjDpHxldHN8aMOkbHxhbWh8Y2tsfGdhcnxuZ2F8ciBtfGplIHxyamV8YXJqfG4gaXxzIGV8bGlufHIgdHxpIHN8csOkbnwgcGV8aWxrfHQgbHxlcm58cMOlIHwgcMOlfHTDpGx8ZCBlfGRvbXxlZ2V8ZyBlfHRuaXxyIGF8bGl0fHJhc3wgc8OlfGxsbnxraWx8c2tpfGVubnxpIG98YSBkfGVyw6R8biBhfGFyYXwgZ2V8w6Ryb3xhIG18IGFyfHQgZHxpbGp8ZWxzfHlja3wgdmV8ZyBvfGZyw6V8bmFzfHRyYXxlc3N8ZGVsfG0gc3xsaXZ8bCBsfGluIHx2IHN8ZyBhfGFzdHxlIGV8dmFsfHNvbnxyc298ZSB0fGFnZXxuZCB8IGVnfGlhbHxjaWF8b2NpfHNvY3x1cHB8aWdpfGVsaXxnIHN8cmtsfGdhZHxuZHJ8bnRlfMO2cmEnLFxuICAgIGxpbjogJ25hIHwgbmF8IHlhfHlhIHxhIG18IG1vfHRvIHwga298bGkgfGEgYnwgbGl8byBufCBib3xpIG58YSB5fGEgbnxraSB8YSBsfGtva3xsYSB8IG1hfHphbHxpIHl8b2tpfCBwZXxuZ298YWxpfHBlIHxzbyB8bnNvfG90b3xvbnN8IGJhfGFsYXxtb3R8YSBrfGVuZ3xueW98ZWtvfG8gZXxuZ2V8eW9ufCBueXxrb2x8bGlrfGlrb3xhIGV8byB5fGFuZ3x5ZSB8IHllfG9rb3xtYSB8byBhfGdvIHwgZWt8a28gfGUgbXxhemF8dGUgfG9sb3xzYWx8YW1hfHNpIHwgYXp8bWFrfGUgYnxsbyB8IHRlfHRhIHxpc2F8YWtvfGFtYnxzZW58b25nfGUgbnxlbGF8b3lvfGkga3xhbml8IGVzfG8gbXxuaSB8b3NhfCB0b3xiYW58YmF0fGEgdHxtYmF8aW5nfHlvIHwgb3l8ZWxpfGEgcHxtYm98byBwfG1pIHwgbWl8IG5kfGJhIHxpIG18Ym9rfGkgcHxpc2l8bW9rfGxpc3xuZ2F8Z2UgfG5kZXxrb3p8Ym8gfGdlbHxhdG98byB0fG1vc3xha2F8b2JhfGVzZXxsYW18a29wfCBlenxsb258ZGVufG9tYnxvIGJ8b3RhfHNhIHxnYSB8ZSBhfGUgeXxlemF8a29zfGxpbnxlc2F8ZSBlfGtvYnxlIGt8c2FtfGtvdHxrYW58Ym90fGlrYXxuZ2l8a2FtfGthIHwgcG98Z29tfG9saXxvcGV8eWFufGVsb3wgbG98YXRhfCBlbHxib258b2thfHBvIHxiaWt8YXRlfCBiaXxhIHN8aSB0fGkgYnxvbWl8cGVzfHdhIHwgc2V8b3phfGxva3xib218b2tlfHNvbXx6d2F8bWlzfGkgZXxiZWt8aWtpfCBhdHxvbGF8dGkgfG96d3xsaWJ8byBsfG9zdXxvc298ZSB0fG5kYXxhc2V8ZWxlfGtlbHxvbW98Ym9zfHN1IHx1c3V8c3VzfGJhbHxpIGx8YW1pfG8gb3xiYWt8IG56fHBvbnx0ZWx8bW9ifG11IHwgZXB8bnphfGFzaXxtYml8YXRpfGthdHxsZSB8Z2kgfGFuYXxvdGl8bmRpfHRhbnxhIG98d2FufG9iZXxrdW18bnlhfG1hYnxiaXN8bmlzfG9wb3x0YWx8bWF0fCBrYXxib2x8YW5kfGF5ZXxiYXp8dSB5fGV0YXwgdGF8bmUgfGVuZXxlbWJ8c2VtfGUgbHxnaXN8YmVufCBha3wgZW58bWFsfG9ib3xnb2J8aWtlfHNlIHxpYm984oCZdGV8IOKAmXR8dW1ifCBzb3xtaWt8b2t1fGJlIHxtYmV8YmkgfGkgYXxlbml8aSBvfCBtYnx0ZXl8c2FufCBldHxhYm98ZWJlfGdlYnxlYmF8eWVifGJ1IHwgYXN8b3RlfHNpa3xlbWF8ZXlhfGliZXxtaWJ8YWkgfHBhaXxtd2F8a2VzfGRhIHxtYXl8Ym96fGFtdXxhIGF8a29tfG1lbHxvbmF8ZWJpfGlhIHxpbmF8dGlufCB0aXxid2F8c29sfHNvbicsXG4gICAgc29tOiAnIGthfGthIHxheSB8dXUgfGFuIHx5byB8b28gfGFhbnxhaGF8IHdhfGRhIHwgcW98IGlufCB1IHxzaGF8IHhhfGEgaXxhZGF8aXlvfCBpeXxtYSB8YW1hfCBhaHwgbGF8cW9mfGFhIHxoYXl8Z2EgfGEgYXxhIHd8YWggfCBkaHxhIHN8IGRhfGluIHx4YXF8IG9vfGEgZHxhYWR8eWFofGVleXwgbGV8aXNhfGxlZXx1IGx8cSB1fGFxIHwgc2l8dGFhfGV5YXxhc3R8bGEgfG9mIHxpeWF8c2EgfHkgaXx1IHh8c3RhfGthc3x4dXV8dXh1fHd1eHwgd3V8aWlzfG51dXxpbnV8cm8gfCBhbXwgbWF8YSBxfHdheHxkaGF8YWxhfGthbHxuYXl8ZiBrfGEga3xsZSB8a3UgfCBrdXwgc2h8byBpfGEgbHx0YSB8bWFhfGEgdXxkaWl8bG9vfCBsb3xvIGF8YWxlfGFyYXxhbmF8aWdhfG8gZHwgdXV8aGEgfGxvIHxvIG18byB4fGRvb3xhcm98a2FyfHlhYXxndSB8c2kgfGltYXxuYSB8IHhvfCBmYXxhZGt8ZG8gfGEgeHxhZCB8YWFzfCBxYXwgc298YSBvfCBiYXxsYWd8IGFhfCBoZXxka2F8YWRpfHNvb3xvIGt8YXFhfCBpc3xhc2h8dSBkfGhhZHwgZ2F8ZWVkfHNhbnx1IGt8YSBtfGlpbnxpIGt8IGNhfHUgc3xuIGx8eWFkfHJrYXxheGF8ZWxvfGhlbHxhZ2F8aGlpfG8gaHxvIHF8IGhhfGlkIHxuIGt8IG1pfGJhYXwgeHV8aGFyfHhvcnxhYXJ8YXggfG1hZHxhZGR8bnRhfG1pZHxhYWx8d2FhfGhhYXxpbmF8cWFhfGRhYXxhZ3V8YXJrfG8gd3xua2F8dSBofGRhZHxpaGl8IGJ1fCBob3xuYWF8biBhfGF5c3xoYXF8YSBofG8gbHwgZ3V8byBzfGF5YXxzYWF8bGthfCBlZXwgc2F8ZGRhfGFiIHxuaW18cXV1fGdnYXxhbmt8a2lpfHJjaXxhcmN8biBzfGEgZ3wgaml8Z2VsfCBnZXxlbGl8eXNhfGEgZnxzaXl8aW50fGxhYXx1dXF8dXF1fHh1cXwgbXV8aSBhfHV1cnxtYXJ8cmEgfGlyaXxvIHV8IGNpfHJpeXx5YSB8YWRvfGFsa3xkYWx8ZWUgfGFsIHxycml8YXlufGFzYXwgZGl8b29jfGFhbXxvZmt8b29ufHRvIHxheW98ZGFyfCB4aXxkaGl8amVlfGEgY3wgYXl8eWlofGEganxiYW58Y2FhfGxhZHxzaG98ZCBrfGlkYXx1cWR8YWdnfHNhZ3xyYXN8YmFyfGFyIHwga298IHJhfG8gZnxnYWF8Z2FsfGZhbHx1IGF8IGRlfCB5YXxvIGN8aWkgfHhheXxlZWx8YWFifHNpZ3xhYmF8b3JyfGhvb3x1IHF8eSBkfGVkIHxobyB8c2FkfHFkYXxoIHF8ZmthfG4gaXx4YWd8biB4fHFheXxsc2h8dWxzfGJ1bHx1IHd8amlufCBkb3xyYWF8IHVnfGlkb3xvb2QnLFxuICAgIGhtczogJ2FuZ3xnZCB8bmdkfGliIHwgbmF8bmFufGV4IHwgaml8ZWIgfGlkIHxkIG58YiBufHVkIHwgbGl8bmwgfGFkIHwgbGV8amlkfGxlYnxsIGx8IGdhfG90IHwgbWV8eCBufGFubHxhb3R8bWV4fGQgZ3xiIGx8ZCBkfG9iIHxncyB8bmdzfGphbnwgbmV8dWwgfCBuaXxuamF8IG5qfGxpYnxvbmd8bmQgfCB6aHxqZXh8IGplfGIganwgc2h8bmdifCBnaHxnYiB8IGd1fGdhb3xsIG58aGFufCBhZHxnYW58IGRhfHQgbnwgd3V8aWwgfHggZ3xuYiB8YiBtfCBuaHxzaGV8aXMgfGwganxkIGx8bmhhfGwgZ3xkIGp8YiBnfGVsIHxlbmR8d3VkfG5leHxnaG98ZCBzfGQgenxvdWx8aG9ifHViIHxuaXN8IGNofCB5YXxpdCB8YiB5fGVpYnwgZ2l8cyBnfGxpZXwgeW98IHppfG91ZHxzIGp8ZCBifG54IHwgZGV8ZXMgfGQgeXwgaHV8dWVsfGd1ZXxpZXN8YW9ifHlvdXwgYmF8ZCBtfGNodXxnaWF8ZGFvfGIgZHxzIG58emlifCBnb3x6aGF8ZWl0fGhlaXxhbCB8aHVkfCBkb3xudCB8b2wgfCBmYXx0IGd8aGVufHV0IHxneCB8bmd4fGFiIHxmYWx8eCBqfGIgenxpYW58ZCBofGRvbnxiIHd8dCBqfGlhZHxuZW58IHhpfGdvdXxkIGN8YiBofGhhb3x4IHp8bmlifGFueHxhbnR8Z3VhfCBtaXxzIHp8ZGFufG94IHxpbmx8aGlifGxpbHx1YW58YW5kfCB4YXxiIHh8IHNlfHggbXx1aWJ8aHVpfGQgeHxhbmJ8ZW5sfCB3ZXxvZCB8ZW5ifCBkdXxhdCB8aXggfHMgbXxiYW98IGhvfGh1Ynwgbmd8emhpfGppbHxsIHN8eWFkfHQgbXx0IGx8eWFufCB6ZXwganV8aGVifGhhZHxvcyB8YW9zfHQgaHxsIGR8bmdhfCBoZXxiIGF8eGFufGIgc3xzZW58eGlufGR1ZHxqdWx8ZCBhfGxvdXwgbG98ZGVpfGQgd3wgYml8YiBjfCBkaXx6aGV8Z3QgfG5ndHx4IGx8YmFkfHggYnwgamF8aG9ufHpob3xibG98IGJsfGQga3wgbWF8ZGVifGwgenx3ZWl8IHlpfCBxaXxiIGJ8eCBkfGQgcHxldWR8IGdlfHggYXxjYW58IGNhfHQgd3xsb2x8IHNpfGhvbHxzIHd8YW9kfHBhb3wgcGF8cmVufCByZXx4IHN8ZXV0fHB1ZHwgcHV8YW94fG1pc3xnbCB8bmdsfHggd3x6ZWl8Z29ufGVueHxnaGF8cyBhfGIgZnxsIHl8b3VifGVhYnxoZWF8IHRvfGRpZHwga298dW5ifGdodXx0IHB8eCBjfGdldXx0IHN8eCB4fGphb3xlZCB8dCBjfGwgbXxsIGh8amlifGF4IHxsIGN8ZCBmfG5pYXwgcGl8ZXVsfGQgcnwgbm98bWlufGwgdHxoZXV8dXggfHRvdXxucyB8cyB5fGllbHxzIGx8aHVuJyxcbiAgICBobmo6ICdpdCB8IHpofCBuaXxhYiB8YXQgfGFuZ3wgc2h8bml0fCBkb3x1YXR8b3MgfGF4IHxveCB8b2wgfG54IHxvYiB8IG5kfHQgZHx6aGl8bmYgfHggbnxpZiB8dWF4fCBtdXxkIG58dGFifCB0YXwgY3V8bXVhfGN1YXxhcyB8YWQgfGVmIHx1ZiB8aWQgfGRvc3xnZCB8bmdkfGhpdHxpYiB8dXMgfGVueHxmIG58c2hlfHMgZHx0IGx8bmIgfHV4IHx4IHp8ZWQgfGluZnxiIG58bCBufHQgbnxhb2J8YiB6fCBsb3xvbmd8aXggfGRvbHwgZ298emhlfGYgZ3wgaG98IHlpfHQgenxkIHp8YiBkfCBsZXxldWZ8ZCBzfHV0IHx5YW98IHlvfCB6aXxnYiB8bmdifG5kb3xlbmJ8bGVufCBkcnx6aGF8dWFifGRyb3xob3h8IGdlfG5lbnwgbmV8aGFufCBqYXxkYXN8eCBkfHggY3x4IGp8ZiB6fHNoaXxmIGh8aWwgfCBkYXxvdXh8bmRhfHMgbnxuZCB8cyB6fGIgZ3wgbnl8aGV1fCBkZXxnZiB8bmdmfCBkdXxvZCB8Z294fCBuYXx1YWR8IGd1fGlueHxiIGN8IHlhfHVlZnwgeGF8IGppfG91c3wgdWF8IGh1fHhhbnxoZW58emh1fG5pbHxqYWl8cm91fHQgZ3xmIGR8IGxhfGVuZnxnZWR8aWsgfCBidXxueWF8eW91fGYgeXxsb2J8YWYgfGJ1YXx1ayB8aXMgfHlpbnxvdXR8b2YgfGwgbXx1ZCB8aHVhfCBxaXxvdCB8dCBzfCBiYXxhaXR8IGtofHMgc3xuYWR8IGRpfGFpYnx4IGx8bG9sfCBpZHxkb3V8ZXggfGFvZHxiYW98IHJlfCBnYXxkIGR8YiB5fGxhc3xoZWR8YiBofGIgc3xmIGJ8dCB5fGp1YXwganV8IGRsfHggc3xodWV8YiBsfCB4aXx6aWZ8ZHVzfGIgYnx4IGd8aGlmfHggeXxoYWl8IG56fHNoYXwgbGl8eCB0fCBiZXxkIGp8dW5kfGh1bnxyZW58ZCB5fGhlZnx4aW58IGlifGIgdHxsIGR8YW9zfHMgbHwgaGF8Z2FpfG56aHxneCB8bmd4fCBhb3xzIGJ8cyB4fGVsIHxndCB8bmd0fGhpa3xhaWR8cyB0fHggbXxmIGx8ZiB0fCBwaXxhb2Z8dCByfGViIHwgZ2h8cyB5fGQgbHxndWF8IGJpfCB6YXwgZnV8dCBofCB6dXxob3V8ZGV1fGxiIHwgbGJ8ZCBnfCBtb3xiIGt8IGJvfGlhb3xyb3N8Z29ufGV1dHx4IGh8YWwgfHVhZnxoYWJ8dCB0fGsgbnxmIHh8aGl4fHBpbnx5dWF8IG5vfHQgYnxhayB8IHpvfHMgbXwgbmJ8IHdlfGQgYnxnaGF8ZiBzfG1vbHxldWt8ZGF4fGwgYnxub2Z8IGtvfGxvdXxndWt8ZW5kfHVhc3x0IGt8ZGlzfGRhbnx5b2x8dWFufGQgdHx4IGJ8bGFufHQgbXwgY2h8aml4fHggeHwgaGx8YW94fHppc3x4IGl8ZXQgfCBybycsXG4gICAgaWxvOiAndGkgfGl0aXxhbiB8bmdhfGdhIHwgbmd8IGl0fCBwYXxlbiB8IG1hfCBrYXwgYSB8IGtlfCB0aXxhbmF8cGFufGtlbnxhbmd8YSBufGFnaXxhIGt8biBhfGdhbnxhIG18YSBhfGxpbnxhbGl8YXlhfG1hbnxpbnR8dGVnfG4gdHxpIHB8bnRlfCBuYXxhd2F8YSBwfG5hIHxrYWx8bmcgfGRhZ3xnaXR8ZWdhfHNhIHxkYSB8YWRkfHdheXxuIGl8biBufG5vIHx5c2F8YWwgfGRkYXxuIGt8YWRhfGFiYXxuYWd8bm5hfG5nZ3xleXN8IG1lfGEgaXxpIGF8bWV5fGFubnxwYWd8d2VufGkga3xnYWx8Z2dhfCB0dXxlbm58IGRhfCBzYXxubm98IHdlfHVuZ3wgYWR8dHVufG1haXwgYmF8bCBtfCBhZ3x5YSB8aSBzfGkgbnx5YW58bmFufGF0YXxuYWt8IHNpfGFrYXxrYWR8YWFufGthc3xhc2F8d2FufGFtaXxha2l8YXkgfGxpIHxpIG18YXBhfHlhd3xhIHR8bWFrfCBhbnxpIHR8ZyBrfGEgc3xpbmF8ZW5nfGFsYXxpa2F8YW1hfG9uZ3xhcmF8aWxpfGRhZHwgYXd8Z3BhfG5haXxldCB8eW9ufGFuaXxhaWt8b24gfGF0IHxvbWF8c2lufGJhbHxpcGF8biBkfHVtYXxnIGl8a2V0fGFnIHxpbiB8YWVufG4gcHxyYW18c2FifGFnYXxub218aW5vfGx5YXxpbHl8c3lvfGkgYnwga2l8bmlhfGFncHxnaW18a2FifGFzaXxraW58aWFtfGFnc3xiYWJ8b3kgfHRveXxuIG18YWd0fCB0YXxiYWd8c2lhfGcgYXxnaWx8bWlsfCB1bXxvIHB8bmdpfG4gd3xpIGl8cGFkfHBhcHxkYWF8aXdhfG5hYXxlZyB8aWFzfGVkIHxuYXR8YmFlfG8ga3xzYWF8c2FufHBhbXxnc2F8dGEgfGtpdHxtYSB8ZHVtfHl0b3x0YW58aSBlfHQgbnx1a2F8dCBrfGFwdXxsYW58c3RhfHNhbHwgbGl8YSBifGFyaXxnIG58ZGVufG1pZHxhZCB8byBpfHkgYXxpZGF8YXIgfGFhcnx5IG58ZGV5fCBkZXwgd2F8YSBkfGFrIHxiaWF8YW8gfHRhb3xtaW58YXN5fG1vbnxpbW98IGdpfG1hYXxzYXB8YWJpfGkgdXxhaWJ8a25pfGkgbHxnaW58Z2VkfG8gYXwgYXJ8a2FwfHB1bHxleXR8YWJzfGliaXwgYW18YWtufGkgZ3xraXB8aXN1fGcgdHxiYXN8bmF5fGluZ3xpIGR8a2FyfGJhbnxpYmF8bmlifHQgaXxhcyB8ZCBufHkgaXx1cmF8YSB3fG5hbHxhYWR8aSB3fGxha3xhZHV8a2FpfGJzYXxkdWt8ZWR1fCBlZHxtYXl8YWdifGFna3x0cmF8Z2dlfHNvbHxhc298YWdyfG5nc3xpYW58aWxhfGRkZXxlZGR8dGFsfGFpcHxrdWF8dW1pfHBheXxzYXN8aXRhfHBha3xnIGR8dWxvfGlubnxhdyAnXG4gIH0sXG4gIEN5cmlsbGljOiB7XG4gICAgcnVzOiAnINC/0YB8INC4IHzRgNCw0LJ8INC90LB80L/RgNCwfNGB0YLQsnzQs9C+IHzQtdC90Lh80LLQviB80L7QstC1fCDQutCwfNC90LAgfNGC0YwgfCDQv9C+fNC40Y8gfNC+INC9fCDQvtCxfNC10YIgfCDQsiB80YHQstC+fCDRgdCyfNCw0LLQvnzQsNC90Lh80L7RgdGCfNC+0LPQvnzRi9C5IHzQsNC20LR80LvQvtCyfNGCINC/fCDQuNC8fNC90LjRj3wg0YfQtXwg0YHQvnzQtdC70L580LjQvNC1fCDQvdC1fNC70YzQvXzQu9C4IHzRh9C10Lt80LrQsNC2fNC10YHRgnzQstC10Lp80LDRgtGMfNC+0LLQsHzQuNC70Lh8INGA0LB80LXQuiB80Lkg0Yd80LTRi9C5fNC20LTRi3wg0LTQvnzQuNC1IHzQtdC10YJ80LzQtdC1fNC90L4gfCDQuNC7fNC40LggfNGB0Y8gfNC10LPQvnzQvtCx0L580Lgg0L980L3QuNC1fNC6INC4fCDQsdGLfNC4INGBfNC4INC4fNC80LggfNCx0L7QtHzQstC+0LF80LLQsNC9fCDQt9CwfNC+0LkgfNGL0YUgfNC+0LwgfNC70LXQvXzQsNGG0Lh80LXQvdC9fNC+INGBfNC+INC/fNGM0L3QvnzRgtCy0LB80YLQstC+fNC/0YDQuHzQvdC+0LN80LDQu9GMfNCw0LrQvnzQstCwIHzQuCDQvXzRgdGC0Lh80L3Ri9GFfNGC0L4gfNCx0YDQsHzQvtC70LZ80LTQvtC7fNGB0YLQvnzQuCDQsnzQvdGL0Lx80L7QtSB8INC10LN80L3QvtCyfNC40YUgfNC10LvRjHzRgtC10Lt80YLQuCB80L3QvtGBfNC90LUgfNC/0L7Qu3zRgNCw0Ld8INCy0YF80Lgg0L58INC70Lh80Lgg0YB80YvRgtGMfNCx0YvRgnzQstC70LV80YDQtdC0fNC40Y4gfNGC0L7RgHwg0L7RgXzRjNGB0Y980YLRjNGBfNC+0LTQuHzRidC10YF80Y8g0Lh80LrQsNC6fNC/0YDQvnzQttC10L180YvQvCB80L/RgNC1fNCwINGBfNGB0L3QvnzQtSDQtHzQvdC90L580L4g0Lh80LjQuSB8INC60L580L4g0LJ8INC90Lh8INC00LV80YHRgtGDfNC70LbQvXzRgdC+0LJ80LUg0LJ80L3QvtC8fNC+0LvRjHzRgNCw0L180L7QttC1fNC40YfQtXzQtdC5IHzQsNGB0YJ80L3QvdGLfCDQvtGCfNGC0YPQv3zQvCDQuHzQvtC00L180LfQvtCyfNGA0LXRgXwg0LzQvnzQvtGB0YN80LvRjyB80L7RgdC9fNCwINC+fNCy0LXQvXwg0YLQvnzQviDQsXzRiNC10L180YLQstC1fNC+0LHRiXzQsCDQuHzQtSDQvHzRjNC90Yt80L7QsdGAfNCy0LXRgHzRh9C10L180Y8g0L180LbQvdC+fNGH0LXRgXzQsNC6IHzQu9C40Yd80L3QuNC4fNC1INC4fNCy0YHQtXzQsdGJ0LV80LLQsNGCfNC10YHQv3zQvNC+0LZ80Lkg0Lh80L3QvtC1fNC+INC0fNCx0LXRgXwg0LLQvnzRjyDQsnzQtNGDIHwg0YHRgnzQtNC90L580L7QvdCwfNC90LDRhnzQtNC10L180LXQttC0fNGFINC4fCDQsdC1fNC4INC0fNC90YsgfNC00L7RgXzQtNC70Y98INC00Lt8INGC0LB80LvRjNGBfNCw0YLQtXzRhtC40Lh80Y8g0L980YPRjiB80LjRgtC1fNC1INC+fNC90L7QuXzQv9C+0LR80L7RgtC+fNGB0YLRgHzRgdGC0LB8INC80LV80LXQu9C4fCDRgNC1fNGPINC6fNGC0L7Rj3zQsNC80Lh80LXQvSB80Ywg0LJ80Y4g0Lh80LDQt9C+fNCz0L7RgXzQvCDQv3zRjCDQv3zRgiDQsXzQttC10YJ80YPRh9CwfNGB0YPQtHzRjNGB0YJ80LTRgdGCfNGJ0LjRgnzQsNGJ0Lh80LfQsNGJfNC60L7QvXzQvdC40Y580LDQvCB80L7QtNGDfNC10YDQtXzQs9GA0LB80L/QtdGHfNC+INC+fNC+0YDQvnzQutC+0YJ80Lgg0Lp80YLRgNCwfNC90LjQunzRg9GJ0LV80YbQuNCwfNC+0YbQuHzRgdC+0YZ80L3QsNC7fNC10YHQunzQviDRgHzQutC+0LN80LTRgNGDfCDQtNGAfNC90LggfNCw0LLQsHzQvdGB0YJ80LXQvCB80LDQstC9fNGL0LzQuHzQtdC00YF80LTQuNC9fNC00L7Qsnwg0LPQvnwg0LLRi3zQsiDQunzRi9C1IHzQvtCx0LV80LzRgyB80Y8g0LV80YHQu9GDfNGD0LTQsHzRgtCw0Lp80LrQvtC5fNGC0YMgfNC40YLRg3zQt9Cw0Lp80YXQvtC0fNCy0L7Qu3zRgNCw0LF80LrRgtC+fNC40LrRgnzQuNGH0L180L3QuNGHfNC+0YIgfNC40L3QsHwg0LogfNGC0LXRgHzRgNC+0LR80L3QsNGAJyxcbiAgICB1a3I6ICfQvdCwIHwg0L/RgHzQv9GA0LB8INGWIHzRgNCw0LJ8INC90LB8INC/0L580L3RjyB80L3QvdGPfCDQt9CwfNC+0LPQvnzRgtC4IHzQstC+IHzQs9C+IHwg0LrQvnzQsNCy0L58INC80LB80LvRjtC0fNC+INC9fCDQvdC1fCDQu9GOfNGO0LTQuHzQvtC20L180LrQvtC2fNC70YzQvXzQttC90LB80LTQuNC9fNCw0YLQuHzQsNGUIHzQuNGFIHzQuNC90LB80L/QvtCyfNGB0LLQvnwg0YHQsnzQsNC90L180ZQg0L980LzQsNGUfNCw0LHQvnzQsCDQu3wg0LHRg3zQvdC1IHzQtdC90L180LHQviB8INCw0LF80LAg0Lx80L7QstC4fNC90ZYgfCDQstC4fCDQvtGBfNCw0YbRlnzQstC40L18INGC0LB80LHQtdC3fNC+0LHQvnwg0LLRlnwg0Y/QunzQtdGA0LV8INC00L580ZYg0L980YPQstCwfNC+INC/fNCw0LvRjHzQvdC40YV80L7QvCB80LzQuCB80ZbQu9GMfNC90L7Qs3zRgtCwIHzQuNC5IHzQv9GA0Lh80L7RjiB80YLRjCB80YHRgtCwfCDQvtCxfNCy0LDQvXzQuNC90L180YLRliB80L7RgdGCfCDRgyB80YHRjyB80LLQsNGCfNCx0YPRgnzQuNGB0YJ8INC80L580LXQt9C/fNGD0YLQuHzQvdC+0LJ80L/QtdGAfNGW0ZcgfNC4INC/fNCx0L7QtHzQstC+0LF80YHRgtCyfCDQsiB80L4g0LJ80LLRltC0fCDQsdC1fNCw0LrQvnzQv9GW0LR80YLQuNGBfNC60L7QvXzQvdC+IHzQstCwIHzQvdC90ZZ80ZYg0YF80LAg0L980YHRgtGWfCDRgdC/fNC90LjQuXzQtNGDIHzRjNC90L580L7QvdCwfCDRltC9fNC00L3QvnzQvdC40Lx80ZbQuSB80LAg0Ld80L3RgyB80LzQvtC2fNGX0ZcgfCDRl9GXfNC70Y8gfNGB0L7QsXzQvNGDIHzQvtGXIHzRj9C60L58INC/0LV8INGA0LB80ZbQtCB8INC00LV80ZYg0LJ80Lgg0ZZ80YfQuNC9fNCy0L3QvnzQvtC80YN80L3QvtC8fNGDINC/fNGWINC9fNCwINGBfCDRgdGDfNCwINC+fNC90LXQvXzQuNGB0Y980L7QstC+fNC90LDQvXzQvtC00L180YMg0LJ80ZYg0LR80LDQstCwfNGW0LTQvXzRgNGW0LJ8INGA0ZZ80ZYg0YB80LjQvNC4fNCy0ZbQu3zQuNC8IHzRhtGW0Zd80L4g0LR80LAg0LJ80YHRgtGDfNC+0LTRg3zQsdGD0LR80L7QstCwfCDQv9GWfCDQvdGWfNGPINC9fNC1INC/fNC90LDRhnzQuCDRgXzQvdC90LB8INC+0LR8INGA0L580L3QvtGBfNGM0L3QuHzRjtGC0Yx80Lgg0Ld80LrQuCB80ZYg0Ld80LAg0LF80YHQv9GAfNGH0LXQvXzQttC1IHzQvtC20LV80LUg0Lx80L7QstC9fNGA0LjQvHzQtSDQsXzRgtC+IHzQvdGW0YV80L7RgdC+fNGD0LTRjHzQstGWIHwg0YDQtXwg0YHRgnzRgNCw0YZ80LTQviB8INGB0L580YDQvtC3fNC70LXQvXzQstC90Lh80ZbQstC9fNGA0L7QtHwg0LLRgXzRgdC/0ZZ80LrQvtCyfNC30L/QtXzRltCyIHzQtNC70Y98INC00Lt80Zcg0L580YXQuNGBfNCw0YXQuHzQt9Cw0YV84oCQ0Y/QunzRjOKAkNGPfNC00YzigJB80Y8g0ZZ80YLQsNC6fNC30L3QsHzQt9Cw0LF80YHRgtGMfNGC0YMgfNC90L7RjnzQsCDQvXzRgtC+0YB80YHQvdC+fNC+INGBfNC20LXQvXzRhtGW0LB80L7RhtGWfNGB0L7RhnzRltC90Yh80ZYg0Lx80LrQu9CwfNC4INCyfNGC0LXRgHwg0LTRlnzRltGB0YJ80L7QstGWfNGDINGBfNGPINCyfNCw0YDQvnzRgdGWIHzQstGW0YJ80YHQstGWfNC+0YHQsnzRgNC+0LF80L/RltC7fNGA0LXRgXzQt9CwIHzQv9C10Yd80LDQsdC1fNC60YMgfNC70LjQsnzQtdGA0LZ80LTQtdGAfNCyINGWfNCw0LLQvXzRgtCw0LJ80LDQsiB80LDQvNC4fNC60L7QvHzQstC70LV80L4g0LF80Ywg0L98INGJ0L580ZfRhSB80YLQstC+fNGF0YLQvnzRltGF0YJ80LrQvtCzfCDQutGAfNCw0L3QvnzRgtCw0L180ZbQsNC7fNC90LDQu3zQvdGMIHzRhSDQv3zQttC90L580LvQtdC2fNCw0LvQtXzQv9GA0L580YLQstCwfNGA0LDRgnzQviDQvnzRhSDQsnzQvdCw0YB80LvRjNGBfNGG0ZbQuXzQutC+0YB80YfQsNGBfNGA0LbQsHzRlyDRgXzQuNC90YN80LTRgdGCfNC+INC3fNGA0LDQt3zQvNGW0L180LAg0YB80LfQsNC6JyxcbiAgICBib3M6ICcg0L/RgHwg0LggfNGA0LDQsnzQvdCwIHzQvNCwIHzQv9GA0LB8INC90LB80LjQvNCwfCDRgdCyfNCwINGBfNC00LAgfNCwINC/fNCy0L4gfNGY0LUgfNC60L4gfNCw0LrQvnzQviDQuHwg0L/QvnzQsNCy0L580LUg0YF80LAg0Lh80YLQuCB8INC40Lx8INC00LB8INGDIHzRgdCy0LB80L3QviB8INC30LB80L4g0L180LLQsCB80Lgg0L980LjQu9C4fNCy0LDQunzQu9C4IHwg0LrQvnzQvdC1IHwg0LjQu3zQutC+0Zh8INC90LV8INC00YB80L7RgdGCfCDRgdC7fNGa0LAgfNC40LwgfNC4INGBfNGDINGBfNC4INC4fNCw0LLQsHzQuNGY0LV80LAg0YN8INCx0Lh80YHRgtCyfNGB0LUgfNCy0LDRmnzQsCDQtHzQvtC8IHzRmNC10LR80LHQvtC0fNC+0LHQvnzQu9C+0LF80YHQu9C+fCDRgdC1fCDRgNCwfNC40YUgfNGB0YLQuHzQsCDQvXzRmtC1IHwg0L7QsXwg0ZjQtXzQv9GA0Lh80LTRgNGDfNGDINC4fNGY0YMgfNC+INC0fNC40YLQuHzQstC+0Zh80YDQsNC3fNCw0ZrQtXzQvtCy0LB80LTRmNC1fCDQvtGBfNC1INC4fNC70L4gfNC1INC/fNCw0ZrQsHzRg9GY0LV80Lgg0LR80LHRgNCwfNGC0YDQtXwg0YLRgHwg0YHRg3zRgyDQt3zQsCDQunzQvtCzIHzRgyDQv3zQvtGY0LV80YbQuNGYfNGA0LXQsXzQsCDQvnzQsCDQsXwg0ZrQtXzQuCDRg3zQvNC40Zh80L3QuCB80L3QvtGBfNCx0LAgfNC10LTQvXzRgdCy0L580ZrQtdCzfCDQuNC3fNC/0YDQvnzQtSDQtHzQttCw0LJ80LHQuNGCfCDQvdC4fNC4INC+fNGB0YLQsHzQsCDQt3zQsNCy0L180LLRmNC1fCDQutCwfNCx0LjQu3zQvtCy0L580LAg0Zh80LDRmNGDfNC40YHRgnzQuCDQvXzQvdC40YV80ZjQtdC7fNGC0YMgfNGA0LXQtHzQs9C+0LJ8INC+0LR80LUg0L580L7RmNC4fCDRgdC8fNGY0LAgfNC+INC6fNC40LvQvnzQsNGG0Lh80LUg0YN80L/RgNC1fNC+INC/fNC10LHQsHzRgyDQvnzRgdGDIHzQstC40Lx80LjRh9C9fCDRgdCwfCDQtNGYfNCwINGCfNC40ZjQsHzRiNGC0Lh80YfQvdC+fNGA0LbQsHzQtNGA0LZ80YHRgtGDfNC00L3QsHzQvtC00L180LXQvdC4fNC30LAgfNC40LLQsHzQvdC+0Lx80LXQvCB80LTRgyB80YDQsNC9fNCy0L3QvnzRgdC80Lh80ZjQtdGAfNC1INCxfNC1INC9fNC00LUgfNC/0L7RgXzQvCDQuHwg0LTQvnzRgyDQtHzQvdCw0Lp80LAg0YB80L7QsdGAfCDQvNC+fNC90LjQvHzQtdCz0L58INC60YB80YLQuNGCfNC60YDQuHzQstC1IHzQsNC9IHzQuNC60L580L3QuNC6fNC90YMgfNC4INC8fNC90L7Qs3zQtdC90L580YHQvdC+fNC1INC6fNGC0YPQv3zRgNGD0LN80LrQsCB80L7QtNCwfNGA0LjQsnzQstC+0Zl80LDQu9C9fNC8INGBfNC40YLRg3zQsNGI0YJ80LfQsNGIfNCw0L3QuHzRgdCw0Lx8INGB0YJ80LDQutCyfNC+0LLQuHzQvtGB0L180YDQvtC0fNCw0YDQvnwg0LzQuHzRmNC4IHzRgtCy0LB80LTQvdC+fNC90YHRgnzQsNC6IHzQuNGC0LV80ZnRgyB80LLQuNGHfNGA0LDQtHzRgyDQvXzRgyDQvHwg0YLQsHzQtNGB0YJ80YLQuNCyfNC90LDRhnzRgNC40Lx80LrQvtC9fNC60YMgfNGa0YMgfNC+0LTRg3zQttC40LJ80LDQvNC+fNGC0LLQvnzRgtC10Zl80L/QvtC0fNC10ZvRg3zQsyDQv3zQvdC+0LJ80LjQvdCwfNC90LDRgHwg0LLRmHzQuCDQsXzQvtGYIHwg0L7QsnzQsNCy0LV80LLRgyB80LDQvdGBfNC+0ZjQsHzQt9C+0LJ80LDQt9C+fNGD0LTQtXzQsdGD0LR8INCx0YN80LUg0YJ80Lgg0LJ80LXRmtCwfNC10LTQuHzQvdC40YZ80L3QsNC/fNC80ZjQtXwg0LjRgXzRgdC70YN80LXQtNGBfNC+INC+fNC30LDQunzQuCDQunzQvCDQv3zRgtC90L580LjQstC+fNC10YDQtXzQvdC40Yd80LrQsNC6fNCw0LTQsHzQstC90Lh80YPQs9C4fCDRgNC+fNC80L7QsnzQstC10L180L4g0YF80YLQviB80YLQtSB8INCy0YB8INCx0LV80LDRgNCwfNC60LvQsHwg0LHRgHzRgyDQsXzRgyDRg3zQuCDRgnzQvtC90LB8INC+0L180LDQstC4fNGY0LDQu3zQtNC90Lh8INGB0LonLFxuICAgIHNycDogJyDQv9GAfCDQuCB80YDQsNCyfNC90LAgfNC/0YDQsHwg0L3QsHzQvNCwIHwg0YHQsnzQuNC80LB80LTQsCB80LAg0L980LLQviB80LrQviB80YLQuCB80LDQstC+fCDQv9C+fNCwINC4fNCw0LrQvnzQsCDRgXwg0LfQsHwg0YMgfNC+INC4fCDQuNC8fNC4INC/fNCy0LAgfNGB0LLQsHzQstCw0Lp8INC00LB80L4g0L180LUg0YF80L7RgdGCfCDQutC+fNGa0LAgfNC70LggfNC40LvQuHzQvdC1IHzQvtC8IHwg0L3QtXzQsCDQvXwg0YHQu3wg0LjQu3zRmNC1IHwg0LTRgHzQuCDRgXzQvdC+IHzQutC+0Zh80YMg0YF80LDQstCwfCDRgNCwfNC+0LMgfNGB0LvQvnzRmNGDIHzQuNC8IHzRgdGC0Lh80LHQvtC0fNC+0LHQvnzQu9C+0LF80LjRgtC4fNCwINC+fNGB0YLQsnzQuCDRg3zQsCDQtHzQvdC4IHzRmNC10LR80YMg0L980L/RgNC4fNC10LTQvXwg0LHQuHzQuCDQuHzQsCDQunzQviDQtHzRgdGC0LB80LjRhSB80LTRgNGDfNCwINGDfCDRmNC1fNCw0ZrQsHwg0L7RgXwg0L3QuHzQvdC+0YF80L/RgNC+fNCw0ZjRg3zQuCDQvnwg0LTQtXwg0YHRg3zRgyDQuHzRgdC1IHzRmtC1IHzRmNCwIHzQvtCy0LB80Lgg0LR80YbQuNGYfCDQvtCxfNGD0ZjQtXzRgNC10LR80LbQsNCyfNC1INC4fNC1INC/fNCwINGYfNC00L3QsHwg0YHQtXwg0L7QtHzQstC1IHwg0LrQsHzQtdC90Lh80YDQttCwfNC00YDQtnzQsCDQt3zQsNCy0L180LXRmtCwfNCw0YbQuHzQstC+0Zh80L7QstC+fNGDINGDfNC8INC4fNC+0ZjQsHzQstCw0Zp8INC40Ld80LjRmNCwfNGDINC3fNCw0ZrQtXzRgNCw0L180LUg0L580YDQvtC0fNC4INC9fNC1INCxfNGA0LDQt3zQt9CwIHwg0ZrQtXzQs9C+0LJ80LjRh9C9fCDRgdGCfNC90L7QsnzRgdC90L580L7RgdC9fNC00YMgfNC/0YDQtXwg0YLRgHzRgdGDIHzQstGDIHzQvtC00L180LAg0LF80YHQstC+fNGa0LXQs3zQvdC40Lx80L3QuNGFfNGC0YMgfNGC0LjRgnzRiNGC0Lh80LrRgyB80L3QvtC8fNCx0LjRgnzQtSDQtHzQvNC1IHzQuNC60L580YfQvdC+fNC+0ZjQuHzQu9C+IHzQstC90L580L3QuNC6fNC40LrQsHzQsdC10Ld80LDRgNCwfNC00LUgfNGDINC+fNCy0LjQvHzQvdCw0Lp8INGB0LB80YDQuNCyfNCw0LLQtXzQsNC9IHzQstC+0Zl8INC60YB80L4g0L980YHQvNC1fNC1INC6fNC90L7Qs3zRmNC4IHwg0L7QsnzQtSDRg3zRgtCy0LB80LHRgNCwfNGA0YPQs3zRgNC10LF80YLRgNC1fNGDINC0fNC+0LTQsHwg0LzQvnwg0LLRgHzQsNCy0Zl80YMg0L180LXQs9C+fNC00LXQu3zQvCDRgXzQutGA0Lh80L4g0Lp80LDRiNGCfNC30LDRiHzRmtGDIHwg0YHQvHzQsNC90Lh8INC70Lh80LTQvdC+fNC10ZLRg3zQsNC70L180LvQsCB80LDQutCyfNC+0ZggfNC60L7QvHzRgdGC0YN80YPQs9C4fNCw0LLQuHzQsCDRgHzQutCwIHzRgNCw0LR80L7QtNC4fNCy0LjRh3zRgtCw0LJ80LjRgtGDfNGD0LTQtXzQsdGD0LR8INCx0YN80L/QvtGCfNC+0LTRg3zQttC40LJ80LXRgNC1fNGC0LLQvnzQuNC70L580LHQuNC7fNCw0YDQvnzQtSDQvXzQvtCy0Lh80L/QvtGAfNC10L3QvnzRiNGC0LJ80L3QsNGGfNC+0LLQtXzQvCDQv3zRgtGD0L980L/QvtGBfNGA0LXQvHzQtNC90Lh80LHQsCB80L3RgdGCfNCwINGCfNC+0ZjRg3zQsNGB0YJ80LjQstCwfNC1INC8fNCy0YDQtXzQstGZ0LB80L3RgyB80LHQtdGSfNC40YHRgnzQtdC9IHzRgtC1IHzQtNGB0YJ80YDQvtGCfNC30LDQunzQsNC+IHzQutCw0L580Lgg0Lp80ZjRg9GbfNC+INGBfNGB0YIgfNGB0LDQvHzQvCDQvXzRgtC10YB80L3QsNGAfCDQvNC1fNC4INC8fNC60L7Qu3zQtSDRgHzRg9GI0YJ80YDRg9GIfNCy0LXRgHzQutCw0Lp8INCx0LV80Lgg0LF80LrQu9CwfNCw0LTQsHzQtdCx0LB80LXQvdCwfNC+0L3QsHwg0L7QvXzRgtCy0YN80LDQvdGBfCDQtNC+fNGA0LDQunzRgdC70YN80Lgg0LJ80L3QuNGGfNGDINC6fNC80LXQvXzQstGA0Yh80LXQvNC1fNC10LTRgXzQuNCy0Lh80L4g0L580ZjQsNCyJyxcbiAgICB1em46ICfQsNC9IHzQu9Cw0YB80LPQsCB80LjRgCB8INCx0Lh80LDRgCB8INCy0LB80LTQsCB80LjQs9CwfCDSs9GDfNCy0LAgfNCx0LjRgHzRg9Kb0YN80pvRg9KbfNKz0YPSm3wg0rPQsHzRgCDQsXzQs9Cw0L180LjRiCB80LjQtNCwfCDRgtCwfNCwINGNfNC40L3QuHzQsNC00Lh80L3QsyB80LTQuNGAfNC40YjQuHzQu9C40Lp80LvQuNGIfNC40LkgfNC40LvQuHzQsNGA0Lh80YPSm9C4fNKz0LDRgHzQu9Cw0L180LjQvdCzfNGI0LggfNC00LDQvXzQvdC40L180LjQvdGBfNC60LjQvXzRgdC+0L180L3RgdC+fCDQuNC9fCDQvNGDfNKb0LjQs3wg0LzQsHzQvtC9IHzRgCDQuHwg0LHRnnzRjdCz0LB8INGN0LN8INGe0Ld80L3QuCB80LHRntC7fNCz0LDQtHzQuCDQsXzQutC4IHzQuNC70LB80ZHQutC4fCDRkdC6fNCwINCxfNC9INCxfNC40L0gfNGAINKzfNCw0LvQsHzRjdGA0Lp8INGN0YB80LvQs9CwfCDSm9CwfNGA0LrQuHzRiCDSs3zQuCDSs3zQvSDQvHwg0LHQvnwg0LHQsHzQuNC6IHzQsNGA0LB80LjQs9C4fNC70LjQs3zRgNC4IHzSm9C40Lt80LAg0YJ80LHQuNC7fCDRjdGCfNC90LjRiHzQvdC70Lh80LrQu9CwfNC4INCyfNCx0L7RiHzRjdGC0Lh80LDQvdC4fNC40LwgfNC4INC8fNC+0LvQuHzSm9C70LB80LAg0rN80LvQsNGIfNCw0YLQu3zRgtC40Lt80LAg0pt8INC+0Lt80L7RgdC4fNC80LDRgXzSm9Cw0YB80LjQvdC7fNC70LDRgnwg0pvQuHzRgtCw0Yp80rPQsNC8fNCz0LggfNC40LEgfNC80LvQsHzRntC3IHzQvSDRjXzQvNGD0Lx8INC00LB8INCx0YN80LDRgiB80Ygg0LJ80YPQvSB80LDRgtC4fNC80LrQuHzRg9C80Lp80YLQu9CwfNC40YDQvnzRntC70Lh80LHQsNGAfNC40YDQuHzRgNC40Yh80LjRj9GCfNCw0LvQuHwg0LHQtXwg0pvQvnzQsCDRiHzQsNGA0L58INC60LV80Lgg0YJ80YDQu9CwfCDRgtC1fNGH0LAgfNGA0YfQsHzQsNGA0Yd80LAg0Z58INGI0YN80YLQuNGIfNC9INKzfNGC0LPQsHwg0YHQsHzQsNGB0Lh8INGF0LB80YDQsNC6fNC70LjQvXzQvtC70LB80LjQvNC+fNGI0pvQsHzQu9C4IHwg0YLRg3zQsNC80Lt80LvQu9CwfNGB0LjQtHzQvSDRnnwg0LDRgXzQvdC40LR80LAg0Lh8INC60Lh80L0g0YJ80L3QtNCwfNC6INCxfNC10YDQsHzQvtGI0pt80YHQuNC3fNC+0YAgfNCwINC8fNGAINCyfNC10L3Qs3zRgtC10L180LzQsNGCfNC80LTQsHzQsNC80LR80LvQuNC8fNC5INGCfNGP0YIgfNC4INCwfNC40L3QvnzQuNC70LN8INGC0L580YLQvdC4fNCw0L3QsHzQsNGBIHzRjdC80LB8INGN0Lx80LAg0ZF8INGI0LB80LDRiCB80LAg0LB80YLQsNGAfNC60LDRgnzQsNC60LB80LDQuiB8INC00LV80LDQt9CwfNC40LvQu3zRgdC40Ll8INGB0Lh8INGB0L580YPSm9C7fNC9INKbfNC+0LTQsHzRitC70Lh80LDRitC7fNC90LjQunzQsNC00LB8INC90Lh80YLQtNCwfNCz0LjQvXzRg9C90Lh80YHQuNGCfNCw0LkgfNKb0L7QvXzQvSDQvnwg0LbQsHzQutC40Lx80LXRhyB80rPQtdGHfCDSs9C1fNGe0LfQuHzQu9Cw0Lp80LrQtdGAfNC40LrQu3zQu9C70Lh80YPRgCB80LfQsNGAfNGI0LvQsHzRgNC40LN80LjRgNC7fNC00LDQvHzQutC+0rN80LjQutC+fNCwINC0fNCw0LwgfNC9INCyfNGA0YLQuHzRgtC40LF80YLQsNC7fCDQuNGIfNGH0YPQvXzRg9GH0YN8INGD0Yd80YHQu9CwfNCwINGDfNGA0LjQvXzRgdC+0YF80LDRgdC+fCDRg9C9fNC90LAgfCDQutCwfNC80YPSs3zQtNC40LN80Ycg0Lp80LDRgdC7fNC70LzQsHzRgNCwIHzQsdGDIHzRhdCw0Lt80Z7Qu9CzfNC4INC6fNC10LrQu3zRgCDQtHzSm9Cw0YJ80LDQs9CwfNC4INKbfNC+0LjQuXzQvNC40Lt8INC80Lh80pvQsCB80Lgg0YF80LbQuNC9fCDQttC4fNGB0LjQvXzRgNC+0YB80LAg0LJ80LvQsNC0fNCwINC+fNGC0LvQuHzQvNC40Y980L0g0Lh80LDQsSB80YLQuNGAfNC3INC8fNC00LDQsnzRgNCz0LB80LDQs9C4fNCwINC6fNC90LvQsHzQsNKb0YJ80LLQsNKbfNCw0YDRgnzQsNGR0YJ80LvQsNCxJyxcbiAgICBhemo6ICcg0LLTmXzQstOZIHzTmdGAIHzQuNGAIHwg0rvTmXwg0LHQuHwg0rvSr3wg0L7Qu3zSr9Cz0YN80rvSr9CzfNCz0YPQs3zQvdCwIHzQuNC9IHzQu9Cw0YB80rvTmdGAfNC005kgfCDRiNOZfNCx0LjRgHzQu9OZ0YB80LvQuNC6fNC80LDQu3zRgCDQsXzQu9C80LB80YAg0rt8INGC05l805nRhdGBfNGI05nRhXzTmdC9IHzQtNC40YB80YPQs9GDfNGD0L3QsHzQsNC9IHzQsNC70Lh80LAg0Lx8INC80LB80LjQutC0fNC40L3QuHzRgCDRiHzQtNOZ0L180LDRgCB80LjQu9OZfNCz0YPQvXzQsNCzIHzQsNGB0Yt8INGY0LB80LzTmdC6fNGY05nRgnwg0LzTmXwg0LzSr3zQutC00Lh805nRgdC4fNOZ0LogfNC40LvQvHzQvdC40L180L3QtNOZfNC+0LvQvHzTmdGC0Lh805kg0Zh80YHQuNC9fNGF0YEgfNC90LTQsHzQu9C805l80ZjRmNOZfNC4INCyfCDQs9CwfCDQsNC3fNC+0LvRg3zQuNGY0Zh80ZjQsCB80LjQvdC0fNC30LDQtHzQs9C70LB80q/QvSB80L3QuCB80LvTmSB80YLQuNC9fNC9INC8fNCw0LfQsHzQsNGA0Yt805nRgiB80L0g0YJ80LzQsNCzfNC70YPQvXzQu9GL0LN805kg0LF80YPQvSB80L3Rg9C9fNCzINCyfNC9INK7fNC00LDQvXzRi9C9IHwg0LXRgnzRgtC805l805nRgNOZfCDTqdC3fNC00LAgfNOZINCyfCDQvtC9fNOZINCwfNGL0L3QsHzRi9C90Yt80LHQuNC7fNCwINCxfNGB0YsgfNC40LsgfNOZ0LzQuHzQsNGA0LB80YHQuCB8INC00Lh805kg0Lx805nRgNC4fNGA0LvTmXwg0LLQsHzTmSDSu3zQtdGC0Lx80YvSk9GLfNCw0LzQsHzQtNC70Yt80LDQtNC7fNGA0LjQvXzQsdOZ0YB80YDRi9C9fNC9INC4fNC80q/QtHzQvdGL0L18INK70LV80LzQsNGBfNC40LogfNC9INCwfNC00LjQu3zQsNC70Yt80LjRgNC7fNOZ0LvTmXzSr9C00LB80YHRi9C9fNGL0L3QtHzRhdGB0Lh80LvQuCB805kg0LR80L3TmSB8INCx05l805nRmNCwfCDQuNC9fNOZINC4fNC705nRgnwg0YHTmXzQvdGLIHwg0LjRiHzQsNC90Yt80LXRhyB80rvQtdGHfNCzINK7fNC10ZjQvXzTmSDQtXzQtNGL0YB8INC00LB80LDRgdC4fNGA0YsgfNC40YggfNC40YTQsHzQu9GL0pN80Lgg0YF80YTQuNOZfNCw0YTQuHzQtNCw0YR8INC10LR80LzTmdC3fNGDINCyfNC60LjQu3wg0rvQsHzQvtC70LB80L0g0LJ805nQvdC4fNGL0YAgfNGD0LMgfNGD0L3QvHwg0LHRg3wg0LDRgXzRgdC40LB80L7RgdC4fNGB0L7RgXzQuNC70Lh80YvQtNGLfNC70YvQtHzQvdC80LB80YvQsyB80LjQvdOZfNOZ0YDQsHzRgdC40Lt80YXQuNC7fNCw0YXQuHzQtNCw0YV80LDQtNOZfNC80LDQvXzQsCDSu3zTmSDQvnzQvtC90YN80LAg0LN805nQtyB8INC60Lh80YHQtdGHfCDRgdC1fNGLINK7fNC80LjQvXzQu9Cw0L1805nQtNOZfNCx0YMgfNGA0LDQs3zQu9GLIHzRi9C70Yt80LDQuyB805kg0LN80YAg0LJ80L3Qu9CwfNK70YHQuHzTmdK70YF80YLTmdK7fNOp0LcgfNC40YHRgnwg0LjRgXzQvNOZ0YF8INOZ0YF80LjQvdCwfNOZINGCfNOZ0YLQu3zQsCDQsnzQuNOZIHzQvSDQsXzRgtOZ0YB8INGC0LB8INK505l80LXQtNC4fNCw0LvQsHzQutC40Lx80LPRgyB80Lgg0YJ80YPQu9C8fNC805nSu3zQvSDQvnzQsNGY0LB80Ysg0L580LjQsNC7fCDRgdC+fNC40LvQu3zRgdC40Zh8INC005l80LLQsNGAfNC40L3RgXzQvNC4IHzSk9GLIHzQvdC40Lp80YAg0Lh80LDQs9C7fNC6INK7fNGC05nQvHzRgtCw0Lx80YfSr9C9fNKv0YfSr3wg0q/Rh3zSk9GL0L180YHQsNGBfNOZ0YHQsHzQtyDSu3zTmdC805l80LfQsNC8fCDQt9CwfNGB0YLQuHzRgNOZ0YR80L0g0LV80YAg0LB80LjQu9C0fNK705nQvHzRi9Cz0Lt80ZjQsNC9fNC80LDRmHzQvSDTmXzQvNOZ0L180LzQuNC7fCDQvNC4fNOZ0LPQuHzQtNC40L180L0g0LR80YLSr9C9fCDQtNOpfNC80LjRmHzQutCw0rt80LjQutCwfCDQvdC4fNGE0LDQtHzRgtC40YR80Lsg0L580YHTmdGAfNGY0L3QuHwg0LXRmHzQsNC90LB80LvTmdC9fNCw0LwgfNGA0LjQu3zQsNGY05l80LDRiNGLJyxcbiAgICBrb2k6ICfQvdGLIHzTp9C9IHwg0LHRi3zQtNCwIHwg0L/RgHzQu9On0L180YDQsNCyfCDQvNC+fNC/0YDQsHwg0LTQsHzQsdGL0LR8INCy0LV80L7RgNGCfNC706cgfNOn0LkgfNC80L7RgHzTp9C8IHzQsNCy0L58INC90LV80LLQviB80YvQtCB80YvRgSB80L3Tp9C5fNGL0L0gfNC8INC/fNC0INC8fNGL0L3Ri3zRgtC90Yt8INCw0YF80YLTp9C8fNC70YzQvXwg0Y3QvHzQstC10YB80YHRjCB80YzQvdOnfNGN0LwgfNC9INGNfNGC0LvTp3wg0LrRi3zRgdOnIHwg0L/QvnzQtdGA0Lx80YHRjNOnfNGA0YLQu3zQsNC70Yx8INC606d80Y3QtyB8INOn0YJ806cg0LJ80YLQviB80LXRgtC+fNC90LXRgnzRi9C706d8INC60L580YLRiNOnfCDQvtGCfCDQuCB80Ysg0YF80LHRiyB806cg0LF80YHRgtCyfNC606fRgHwg0LLTp3zRiNOn0Lx80LrRi9GCfNGC0LAgfNC90LAgfNC3INCyfCDRgdC1fCDQtNC+fNCy0L7Qu3zTp9GBIHwg0YHRi3zRiyDQsHzQvtC70LB80YDQvNOnfNCw0YEgfNC+0LcgfCDQvtC3fCDRgdGWfNCwINGBfNGC0LLQvnzRgSDQvnwg0LLRi3zQu9GW0YF806cg0Lp80YvRgtGIfNOnINC0fNC40YEgfNGW0YHRjHzTp9GC0L180LDRgdGMfCDQvtC7fCDQvdCwfNCw0YbQuHwg0Y3RgnzQsCDQsnzQt9C706d80YHQtdGCfCDQstC+fCDRh9GDfNC70LDRgXzQu9Cw0L180LzTpyB80YLRi9GBfNGA0YLRi3zTp9GA0YJ80Ysg0L9806fRgtC7fNC+INGBfNGN0YLQsHzQtNC3IHzQutOn0YJ806fQtNC9fNCy0L3Ri3wg0LzRi3zQvSDQvXzRg9C00LZ8INGD0LR80LLRi9C7fNOnINC8fNGA0YLRlnzQvtGA0Ll80LjRgdGMfCDRgdC+fNCy0L7RjXzRi9C006d80Lkg0L580LrQvtC7fCDQs9C+fNGBINGBfNGB0YHQuHzRgdGL0Lt80YvRgdC7fNC50YvQvXzQutC40L180L7Qu9OnfNGC06fQvXwg0YHRjHzQsNC90LB806fRgCB80YbQuNGPfNCwINC0fNOn0LzTp3wg0LLQuHzQtyDQunwg0Y3Qt3zRiyDQsXzRgtOn0LN806fRgiB80LzTp9C0fNC10YHRgnzQvtGB0YJ806fQvdGLfNGC0LjRgHzQvtGC0Lh80YPQutOnfNGH0YPQunzQvSDQv3zQvtC90LR80L/QvtC9fNGB0LvTp3zQutC10YB8INC60LV8INC+0LF80YHQuNGBfNGB0YPQtHzQsCDQvXzQtNC+0YB80LrQvtC9fNC90LXQunzQvSDQsXzQu9On0YJ80YEg0LJ80YLRliB80YzTp9GAfNGC0YDQsHwg0YHRgnzQvdCw0Lt80L7QvdCwfNC90LDRhnzQvSDQunzQutOn0LR806fQsyB80YHQutOnfNGC0YwgfNC10YLTp3zQtNOn0YF80LHRi9GCfNGA0L3Ri3zTpyDQvXzRgtGB06d80YDRgNC1fNCwINCxfNC90LTQsHzRgSDQtHzQsNGB0YF80Ysg0Lp80LDRgdC7fCDQu9C+fNGM0L3Ri3zRgdGM0L180Ysg0Lx80LXQutC4fNGLINC0fCDQvNOnfNGMINC8fNGLINC9fNGL0YLTp3wg0LzQtXzRgNC506d80LjQsNC7fNC5INC0fNC40YLTp3zQsCDQunzTp9GB0Yx80LzTp9GBfNC+0LLQvXzQt9GL0L180LAg0L980L7RgtGBfCDQu9C4fNC+0LvRj3zTpyDQsHzQvtGB0YN806fRjyB80L3Tp9GPfNC10LfQu3zRgNC10Ld80LzQtdC0fNGBINC8fCDRgdGNfNGMINC6fNGA0LnRi3zQsNC60L580LfQsNC6fCDQt9CwfNGM0YvQvXzQvdC90ZF80LzTp9C7fNGD0LzTp3wg0YPQvHzRiyDRg3zQvSDQsnzQvCDQtHzQvSDRgXwg0LTQt3zQvSDQvnzRgNCw0L180YHRgtGAfNC+0LfRjHzQv9C+0Ld80Lcg0L980L4g0LR80YbQuNCwfNC+0YbQuHzRgdC+0YZ80LjQvtC9fNCwINC8fNC10YHQunzRh9C10YF80L3TpyB80Lcg0LR80YLRgdGMfNCx06fRgHwg0LHTp3wg0L7QsnzQstC10YF80LrRi9C0fNOnINGBfNCy0L7Ri3zQutC+0LR80YLQutC+fNOn0YLQunzQvtC70Yx80LTQsdGLfNC10LTQsXzRgdGM0Yt80YfRi9C9fNGC0YfRi3zTp9GC0Yd80YLQu9CwfNC806fQvXzRgdC70LB80LnTp9C3fCDQudOnfNGCINCyfNGLINC4fNC10LcgfNC+INCyfNC+0L3Ri3zQudOnIHzQsNC90L1806fQu9GMfCDQv9GLfNCw0L0gfNC906fRgXzQvdC40YJ8INGB0YN80Lwg0YEnLFxuICAgIGJlbDogJyDQv9GAfNC/0YDQsHwg0ZYgfNCw0LLQsHzQvdCwIHzRgNCw0LJ8INC90LB8INC/0LB80L3RiyB80LLQsCB80LDQsdC+fNGG0YwgfCDQsNCxfNCw0LUgfCDQvNCwfNCw0LLQtXzQsNC90L180LDRhtGLfNGB0LLQsHwg0YHQsnzQtSDQv3zQu9GM0L18INGH0LB80L3QtSB80L3QvdGPfNCw0LvQsHzQsCDQvXzQsNC5IHzQu9Cw0LJ80YfQsNC7fCDQutC+fCDQsNC0fCDQvdC1fNCz0LAgfNC+0LbQvXzQutC+0LZ80LLQtdC6fNC90Y8gfCDRj9C6fNC20L3Ri3zRiyDRh3zQvNCw0LV80LAg0L980LDQs9CwfNCx0L4gfNC10LogfNCwINCwfNGG0LAgfNGG0YbQsHwg0Z4gfCDQt9CwfNGL0YUgfNC/0LDQsnzQsCDRgXzQs9C+IHzQstGW0L180LTQvdCwfNCx0L7QtHzQvNGWIHzQstCw0LF80LLQsNC9fNCw0LwgfCDQstGLfCDRgdCwfCDQtNCwfNGB0YLQsHzQsNCy0ZZ80L3QvdC1fNCw0YHRhnzQvdCw0Ll80YbRi9GPfNC90LDQs3zQsNGA0LB80ZYg0L180Log0Lx80Y/Qs9C+fCDRj9CzfNGM0L3QsHzQv9GA0Yt80LDRhtGMfNGWINC/fNC+0LTQvXzRgdGC0LJ80LDQvNCwfNC90YvRhXwg0LHRi3zRgtCy0LB80LTQt9C1fNCw0LvRjHwg0YDQsHzQvdGWIHzRliDRgXzRliDQsHzRi9GG0Yx80LAg0LF80LXQvdC9fNC70LXQvXzRhtGWIHzQvtGe0L180YvQvCB80YDQsNGGfNGW0L3QvXzRltGFIHwg0LDRgXwg0YLQsHzRgtC+IHzQvdCw0YF80Y/QutGWfCDQtNC3fNGH0YvQvXzQvtC70Yx80ZYg0LR80LDQstC+fNCw0LQgfCDQvdGWfNGB0YbRlnzRi9C80ZZ80L3Ri9C8fNCx0YvRhnzRjyDQv3zRjNC90Yt80YvRjyB80LDRgNC+fNCw0L3QsHzRltC90LB80ZYg0ZZ80YDQsNC0fCDQs9GAfNC70Y8gfNGe0LvQtXzQviDQv3zQsCDRnnzRgNGL0Lx80L/QsNC0fNGL0ZYgfCDRltC9fNCw0LzRlnzQtNC30Y980YDQsNC8fNGG0YvRlnzQsNCx0LB80LAg0ZZ80LTRgyB80LbQvdCwfNGe0L3QsHzQvdCw0Lt80L3QsNGGfNGA0YsgfNGN0YLQsHzQs9GN0YJ8INCz0Y180L3QtdC9fNC00LAgfNCw0YUgfNCz0YDQsHzQutCw0YZ80YPQutCwfNCwINC3fNC60ZYgfNCw0LTRgXzRniDRlnzQvdGB0YJ80Y3QvdC9fNGPINCwfNC90L3RlnzQvtC00YN80LAg0YB80L3QvdCwfNGF0L7QtHzQvdCw0L180L/QtdGAfNGFINC/fCDRgyB80LDQtNC3fNGWINGAfNC80LDQtHzQvCDQv3zQtSDQvHzQsNC00YN80LTRgdGCfNC00LvRj3wg0LTQu3zQvtGeIHzQvdCw0LV80ZYg0Lx80LDQutC+fCDQutCwfNGLINGefNCx0LDRgHzQtSDQsHzQsNGG0YZ80YPRjiB80YvRhtGGfNGB0LDQvHzRj9Ge0Lt80LDQu9C1fNGA0L7QtHzRgNCw0LF8INC/0LV80YjRgtC+fCDRntGBfNCw0LTQvXwg0YHRg3zRgNC+0Z58INGA0L580LTRg9C6fNC70Y7QsXzRjCDRgXwg0YjQu3zRgNCw0Ld80L3QsNCyfNC30L3QsHzQstC+0Lt80YPQtNC3fNCw0LTQsHzQttGL0YZ80YfQvdCwfNCy0LUgfNCwINGCfNCw0YHQvXzRgdCw0YZ80LXRgNCwfCDRgNGNfNGP0LrQvnzQutC70LB80LDQvdGLfCDRiNGCfNGMINGDfNCw0Y7RhnzQvdCw0YB8INGD0YF80YHQvtCxfNCw0YHQvnzQv9Cw0Lx80Y8g0Z580LDQstGPfNGH0Y3QvXzQstC+0Z580YLQsNC6fNC90YMgfNGOINCwfNGMINC/fNC30LDQunzQutCw0YB80LUg0ZZ80Ywg0LB80LHQtdGBfNGW0Y8gfNC60ZbRj3zRhSDRlnzQt9Cw0LF80LDRgdCwfNGW0LwgfNC20LDQsnzRliDQt3zQu9C10LZ80YLQsNC9fNCw0YXQvnzRj9C70Yx80YvRj9C7fNC+INGBfNGP0L3QsHzQutCw0L180LDQutCwfNGW0L3RiHzQsNC70ZZ80LLRiyB8INC80L580L3QsNGFfNGPINGPfNC8INC9fNC+0LPQsHwg0LHQtXzQuSDQtHzQviDQsHwg0YHRgnzQtdC90Yt80ZYg0Z580LAg0LR80LXRgdC/fNGI0LvRjnzRhtGG0Y980Ysg0ZZ80YvRgdGCfNGA0YvRgXzQu9GO0Yd80LrQu9GOfNGC0LDRhnzRg9C70Yx80YvQvdGBfNCw0YfRi3zRgdC/0YB8INGB0L980LDRniB80YvQvNCwfNCw0YDRi3zQutCw0Lx80LUg0Z580ZYg0Lp80LrQvtC9JyxcbiAgICBidWw6ICcg0L3QsHzQvdCwIHwg0L/RgHzRgtC+IHwg0LggfNGA0LDQsnzQtNCwIHwg0LTQsHzQv9GA0LB80YHRgtCyfNCy0LAgfNCwINGBfNCwINC/fNCy0L4gfNC90L4gfNC40YLQtXzRgtCwIHzQviDQuHzQtdC90Lh8INC30LB80L3QtSB8INC90LV80LAg0L18INCy0YF80LLQsNC9fNCw0LLQvnzQvtGC0L580LUg0L180L4g0L180LAg0Lh80LrQuCB80LjQtSB80YLQtSB80L3QuCB80LjQvNCwfCDQuNC8fNC70LggfNC40LvQuHzQuNGPIHwg0L/QvnzQvtCy0LV80LDQvdC1fNGH0L7QsnzQvNCwIHwg0YfQvnzQuCDRh3zQsCDQtHzQvdC40LV80Lgg0LR80LXRgdGCfCDQuNC7fNCw0L3QuHzQstC10Lp80LLRgdC1fCDQvtCxfNC10LogfNC10LrQuHzRgdC10Lp80LDQstCwfNGC0LLQvnzRgdCy0L58INGB0LJ80LLQvtGCfNCwINCyfNC4INGBfNC+0YHRgnwg0YDQsHzQvtCy0LB80LAg0L580LUg0Lh80LLQsNGCfNC4INC9fNC1INC/fNC6INC4fNCwINCxfCDQsiB80Lgg0L980LvQvdC+fNC+INC0fCDRgdC1fNGA0LDQt3zQtdGC0L580YrQtNC1fNCx0YrQtHwg0LHRinzQv9GA0Lh80LDRgtCwfCDQutC+fCDRgtGAfCDQvtGBfCDRgdGKfNCx0L7QtHzQvtCx0L580LLQvtCxfNCw0YIgfNC30LAgfNGC0LXQu3wg0LUgfNCw0YbQuHzQviDRgXzQtNC1IHzQviDQv3zQtdC9IHzQsdGA0LB80Lgg0LJ8INC+0YJ80YHQtSB80L3QuNGPfNCw0LvQvXwg0LTQtXzQtdCz0L580L3QtdCzfCDQuNC3fNC+0YIgfNGA0LDQvXzRj9GC0LB80LrQsNC6fNC+0LTQuHzQtSDRgXzQuCDQuHzQtNC10L180L/RgNC1fNCx0LLQsHzRj9Cx0LJ80YDRj9CxfNGC0YDRj3zQvdC40YJ8INC60LB80Y/QstCwfNC/0YDQvnzRgdGCIHzQsCDQt3zQs9C+0LJ80LLQtdC9fNGC0LLQtXzQviDQvnzQsCDRgHzQsNC60LJ80L4g0LJ80Lgg0Ld80YDQtdC0fNC90L7RgXzQuNGP0YJ80LUg0LR80YnQtdGBfNC90L7Qsnwg0L3QuHzRhtC40Y98INC00L580LnRgdGCfNC+INGCfNC1INGCfNGA0LbQsHzRitGA0LZ80LTRitGAfNC10L3QvnzQv9C+0Lt8INGBIHzQvtCx0YB80YLQstCwfNC90L7RgnzRgNC10YF80LXQudGBfNC4INC+fNC1INCyfNC60L7QuXzQvtCx0Yl80LvQtdC9fNC+0L3QsHzQvdCw0YZ80LjRh9C1fNC10LcgfNCx0LXQt3wg0LHQtXzQtdC20LR80YPQstCwfNCy0LjRgnzRgNC4IHzQt9Cw0Lp80Lgg0Lp8INC70Lh80LAg0LV80L/QvtC0fNC10LvQuHzQvdC40Lp80YHQuCB80LUg0L580LAg0YJ80LDQstC9fNC4INGAfNGCINGBfNC60LAgfNC+0LXRgnzQtdC70L180L3QtdC9fNC+0LkgfNCz0YDQsHzQttC10L180LTRgNGDfCDRgNC1fNCwINC6fNGB0L3QvnzQvtGB0L180LvQuNGHfNC30LggfCDRgtCwfNGB0LAgfNC90YHRgnzQstC90Lh80YfQutC4fNC40YfQunzRgdC40Yd80LLRgdC4fNC70Y7Rh3zQutC70Y580LTQvdC+fCDQvNC+fNC10LzQtXzQsCDRg3zQuNC30LJ80YLQstC4fNC00LXQuXzRjyDQvXzQutGA0Lh80LDRgtC+fNC+INGAfNC5INC9fNC40LrQvnzQuNGH0L180LbQsNCyfCDQtNGKfCDRgtC+fNCx0YnQtXzQuNCw0Lt8INGB0L580LvQuNGCfNGCINC9fCDRgdC4fNGCINC4fNC+0LTQvXzQttC00LB80LfQvtCyfNCw0LfQvnzRg9GH0LB8INCz0YB80LrQvtC1fNGC0YrQv3zRgdGC0Yp80LLQvtC7fNC70L3QuHzRgdGA0LV8INGB0YB80LrQstCwfNC60L7QvXzRgtC90L580LDQutCwfNC4INGDfNC60L4gfNCz0LDQvXzQvtC00LB80YfQtdC9fNC70YHRgnzQtdC70YF80YHRgtGAfCDQutGKfNGB0YLQsHzRgNC+0LR80L3QsNGAfNC4INC8fNC90LDQu3zRgNGD0LN8INC00YB80YfQtdGBfNCy0YrQt3zQtNC4IHwg0YHQsHwg0YLQtXzRgdGC0L580LTQvtGBfNGA0LDQtnzRgNC10Ld80YfRgNC1fNCz0LDRgnzQtdC+0LF80LAg0Lx80L4g0LV80LjQvdC1fNCw0YHRgnzQvtCy0L580YfQvdC+fNCw0LLQtXzQvNGDIHwg0LzRg3zQsNC90L580LjRgtCwfNC40LzQuHzQsNC60L580L3QsNC6fNC70LDQs3zQvtCy0LgnLFxuICAgIGthejogJ9C90LUgfCDSm9KxfNC10L0gfNKx0pvRi3wg0LHQsHwg0pvQsHzSm9Kx0pt80YvSmyB80pPQsCB8INC205l805nQvdC1fNC205nQvXwg0L3QtXwg0LHQvnzQtNC1IHzQtNCw0Lx80LDQtNCwfNCwINKbfNGC0LDRgHzRi9C90LB8INCw0LR80YvQu9GLfCDTmdGAfNGL0qMgfNCw0L0gfNGW0L0gfNKb0YvQu3zQsNGAIHzQtdC80LV80L3QsCB80YAg0LB80LvRi9KbfNGD0pPQsHzQsNC70LB80YvSm9GCfCDTqdC3fNC80LXRgXzTmdGAIHwg0LbQsHzQvNC10L180YvSk9GLfNC70YsgfCDQtNC1fNKb0YLQsHzQvdGL0qN80L0g0pt80pPQsNC9fNGW0L3QtXzQsdCw0YF80LDRgNGLfCDQvNC1fCDSm9C+fNC10LrQtXzRi9C9IHzQtNCwIHzQtSDSm3zQtNGLIHzQsNGB0Yt80YHQtSB80LXRgdC1fNCw0LwgfNCx0L7Qu3zQsNC90LR80L3QtdC8fCDQsdGWfNCw0YDQsHzRiyDQsXzRgdGC0LB80YLQsNC9fNC90LTRi3zQvSDQsXzRltKjIHzQtSDQsXzRltC70ZZ80YLQuNGWfCDRgtC4fNCx0LDRgHzSk9GLIHzQvdC00LV80LXRgtGCfNC40ZbRgXzSm9GL0pN80ZbRgSB80LvQsNGAfNCz0LUgfNGLINGCfNGW0L3QtHzRltC6IHzQsdGW0YB8INCx0LV8INC60LV80LDQu9GDfNC1INCwfNCw0LvRi3zQu9GD0Yt80LAg0LZ80LXRgNGWfNC+0LvRi3wg0YLQtXzSm9GL0pt80L0g0Lp8INGC0LB80L0g0LZ80pPRi9C9fNGC0YLRlnzRltC90ZZ80YLRi9C9fCDQtdGAfNC90LTQsHzRltC8IHwg0YHQsHzQtSDQtnzQsNGC0Yt8INCw0YB80YDSk9CwfNC10YLRlnzQsNC90LB80Ysg05l80YPRi9C9fNC70pPQsHzTqdC30ZZ80L7RgdGCfNC10LPRlnzRgtGW0Lp80pvQsCB80YHSm9CwfNGA0YvQvXzQutGW0L180LvRg9KTfNKjINKbfNC90ZbSo3zRg9GLIHzQsdC+0YF80LDRgdKbfNKb0LDRgHzQtNGL0pt80L3QsNC9fNC80YvRgXzQvNC90Yt80LDQvNC9fNGLINC8fNCw0LnQtHzQutC1IHwg0LbQtXzQt9GW0L180YDQtNC1fNGA0ZbQvXzQtSDRgnzQs9C10L180YvQvyB80YDRiyB80YLRliB80YHRi9C9fNKb0LDQvHzQtNC10L180ZYg0LF80LPRltC3fNGA0LDQu3zQtSDTqXzQu9Cw0L180YHRiyB80LDQvNCwfNGC0YLQsHzRgtGL0pt80LHQtdGAfNC00ZYgfNCx0ZbQu3zRgNC60ZZ806nQtyB80LfQtNC1fNC60LXRgnzSm9C+0YB80LTQsNC5fNGD0LPQtXzRiyDQtXzRi9C90LR80L3QtdCzfNC+0L3Ri3zQtdC5IHzQvNC10YJ80LDQvdGLfNCwINGCfNC20LDRgXzQsNGD0Yt80LvQs9C1fNCw0YHQsHzQtdCz0LV80LTQsNGAfNGA0YMgfNCw0YMgfNC10YDQunzRiyDQtnzRgNGL0Lt8INGC0L580L0g0L180LUg0L180YLRltC9fNGW0YAgfNGB0ZbQt3zRgtC10YB80LvQvNCwfNGWINGCfNC60ZbQvHwg0LDQu3zRgCDQvHzQu9GW0Lp8INC80q980LUg0Lx80YLSr9GAfCDRgtKvfNC60LXQu3zQu9GL0L980LXSoyB80YLQtdKjfNGA0LvRi3zQu9GW0Lx80YDQtNGLfNCw0YDQtHzQsNGC0YJ80YEg0LF80YvRgNGLfNGB0YvQt3zRi9GBIHzQtdC70LN80LTQsNC7fNC50LTQsHzQvtGA0pN80YDSm9GLfNCw0YDSm3wg0LbSr3zRgtCw0Lt80YvQu9C8fNCwINCxfNGW0LPRlnzQu9C00LV80ZbQtyB80pvRgtGLfCDQtdGIfNC00LXQuXzQsNC5IHzQttCw0pN80LrRgtGWfNGW0LrRgnzQs9GW0L18INOZ0Lt80YLRgtGLfNKx0LvRgnwg0rHQu3zQtSDQtHzRi9C90Yt80LvRltC9fNGAINCxfNC10LvQtXzQutKx0pt8INC60rF80LDQvNC0fNC8INCxfCDQtdGCfNC+0pPQsHzSm9Kx0YB8INC606l80LDSk9CwfNGC0L7Qu3zRiNGW0L180LDQudGLfCDSm9GLfNKb0LDQu3zQttC10Lp80ZYg0L180LXRgSB80LDSk9GLfNC1INC+fNC10LvRlnwg0LXQu3zQvSDQtXzQt9GWIHzRiNC60ZZ80LXRiNC6fNC+0LvRg3zRhtC40Y980LzQsNGBfNKT0LTQsHzQsNKT0LR80LvRgtGCfNGW0LzQtHzQvdGL0Lx8INC00LB80LAg0LR805nRgdGWfNGBINOZfNKb0LDRgnzRltGA0ZZ8INGB0L580qMg0LF80LDQt9CwfNC80LTQsHzQsNC50Lt8INCw0YF80pPQsNC8fNKb0L7SkydcbiAgfSxcbiAgQXJhYmljOiB7XG4gICAgYXJiOiAnINin2YR82YrYqSB82YHZiiB8INmB2Yp82KfZhNitfCDYo9mIfNij2YggfCDZiNinfNmI2KfZhHzYrdmCIHzYqSDYp3zZhNit2YJ82KfZhNiqfNmD2YQgfNin2YTZhXzZhNmD2YR8INmE2YN82YTZiSB82YIg2YF82KrZhyB82Ygg2Kd82Kkg2Yh82LTYrti1fNipINmEfNin2KogfNin2YTYo3zZiiDYo3zZiNmGIHwg2LTYrnzZhSDYp3zYo9mKIHwg2KPZinzYp9mGIHzYo9mGIHzZhdipIHzZiiDYp3zYp9mE2Kd82YTYpyB82YfYpyB82KfYoSB8INij2YZ8INi52YR82K7YtSB82YYg2Kd8INmE2YR82K8g2Kd82YXZhiB82YHYsdivfNmF2KcgfNin2YTYuXzYqiDYp3zYrdix2Yp82LnZhNmJfNmEINmBfNix2K8gfNmEINi0fCDZhNinfNix2YrYqXwg2KXZhHzYqSDYo3zYpyDYp3zZhiDZinwg2YjZhHzYpyDZhHzYpyDZinwg2YHYsXwg2YXZhnzYqSDZhXzYp9mE2YJ82KzYqtmFfNmGINijfNmCINinfNin2YTYpXwg2K3YsXzZhNmHIHzZhyDZhHzYp9mK2Kl82YTZgyB82Ycg2Kd8INiv2Yh82K/YqSB82KfZiyB82YrZhiB82Ycg2Yh82YTYqSB82Yog2K18INi52YZ82YXYp9i5fNmKINiqfNiw2KcgfCDYrdmCfNmC2YjZgnzYrdmC2Yh82Iwg2Yh82YYg2Kp82YXYuSB82LUg2Kd82KfZhSB82K8g2KN8INmD2Kd82YfYsNinfNin2YTZiHwg2KXZhnzZhdmEIHzYp9mF2Kl82Lkg2Kd82KXZhNmJfNipINi5fNmF2KfZinzYrdmF2Kd82YYg2Yh82YTYqti5fCDZiNmKfNmK2LEgfNmG2YjZhnzZiiDZiHzYp9iz2Yp82KfZhNisfCDZh9iwfNmG2LPYp3zZiNmCIHzYqtix2Kd82LnZitipfNmHINijfCDZhNmHfNiz2YrYqXwg2YrYrHwg2KjYp3zYr9mI2YR82KfZhtmIfNmC2KfZhnzZhNmC2Kd82Kkg2Kh82Kkg2Kp82KrZhdinfNin2YTYr3zZitin2Kp82Lkg2Kh82LPYp9mGfNil2YbYs3zZh9mFIHzYudmE2Yp8INmF2Kp82YTZhdisfNiw2YTZg3zYudmF2YR82YTYo9izfNmI2LIgfNis2YjYsnzZitis2Yh82KjYp9mEfNi62YrYsXzZgyDYp3zZg9in2YZ82LPYp9izfNij2LPYp3zYr9mFIHzZhNin2K982KfYudmKfNin2YTYsXzYqtmF2Yp82K/ZiNmGfNiq2YXYqnzZhNiq2YV8INmK2Ll82YTZitmHfNiz2KfZiHzYp9is2Kp82Yog2YV82YTYudinfNmE2KzZhXzYqti52YR82LEg2Yh82KrZhdi5fNmF2KzYqnwg2YXYuXzZitmHIHzZiSDYo3zZgdmK2Yd82Ykg2Kd8INmD2YR82YTYp9iqfNmF2YTYp3zZiNivIHzYp9mG2Kp82KfZhNmBfNmK2YfYp3zZiiDYpXzYqtmKIHzYp9mE2Kh82YTZiiB82YLYr9mFfNin2YQgfNin2K8gfNmEINinfNmK2LIgfNmK2YrYsnzZhdmK2Yp8INiq2YV82YTYrdixfNiq2LkgfNmF2KrYuXzYpyDYqHzYudin2YV82Kcg2Yh82YIg2Yh82LHYp9mFfNmEINmEfNmE2KfYrHzYsdinIHzYp9mE2LR8INmI2KV82YrZhSB82YTZitmFfNi02KrYsXzYpyDYrXzZiNin2Kx82YTYstmIfNmI2YQgfNinINmBfNmI2YTYqXzZhNit2YV82KPYs9ixfCDYsNmEfNmHINmBfNin2KrZh3zZhdiz2Kd82YTZhdizfCDYqti5fNi52YYgfNmHINi5fNmI2YTZh3zZitiq2Yd82YYg2YR82LHYqSB8INmI2LN82KfYqSB82YrYryB8INiq2K18INmF2LN82Yog2Yp82YTYqtmKfNi52KkgfNmI2YTZinzZhNiv2Yh8INij2LN8INmI2YF82YQg2Yh82KPZitipfNmG2YogfNin2YTYs3zZhNin2YZ82YTYpdi5fNipINmBfNix2YrYp3zZhCDYpXzZhSDYqHzYp9mF2YR82YPYsdinfNiq2LPYp3zZhdmK2Ll82KzZhdmKfCDYrNmFfNij2YjZhHzYqNmK2Kl82LnZiti0fNiq2K3ZgnzYp9iv2Kl82LMg2Kd8INmF2YV82YXYudmKfNis2YXYp3zYudin2Kp82KfYudinfNin2LHYs3zZhdin2LF82YXZhdinfNmFINmIfNix2KfZg3zYp9i02Kp82KfZhNi3fNin2KwgfNiy2YjYp3zYp9mE2LJ8INmI2YV82K3Yr9ipfNiq2K3Yr3zZhNmF2Kp82YXZhSB82YTYo9mFfNiv2YcgfNio2YTYp3wg2KjZhHzYp9ixIHzZitin2LF82KrZitinfNiu2KrZinzYp9iu2Kp82YYg2YV8INmF2LEnLFxuICAgIHVyZDogJ9mI2LEgfCDYp9mIfNin2YjYsXzaqduSIHwg2qnbknwg2qnbjHwg2qnYp3zbjNq6IHwg2K3ZgnzaqduMIHzaqdinIHwg2qnZiHzYptuSIHzbkiDaqXzbjNinIHzYs9uSIHzaqdmIIHzYtNiu2LV8INi02K582YbbkiB8INin2LN8INuB25J82YXbjNq6fNit2YIgfCDbgdmIfCDZhduMfNiu2LUgfNuSINinfCDYrNinfNin2LMgfCDYs9uSfCDbjNinfNuB2LEgfNuMINinfCDaqdixfCDbgdixfNuS25QgfNiz24wgfNuB24zaunzYpyDYrXzYtSDaqXzZiNq6IHzbkiDZhXwg2KfZhnzYsSDYtHzblCDbgXzYp9im25J82LLYp9ivfNii2LLYp3wg2KLYsnzYp9mFIHzYsSDYp3zZgiDbgXzYp9iv24x82KzYp9imfNq6INqpfNuB25LblHzZhSDaqXwg2qnYs3zYpyDYrHzbjCDaqXzYsyDaqXzaqdiz24x8INm+2LF825Ig2q9824HbkiB82KfYsSB82Kog2ql82K/bjCB82b7YsSB82Ygg2Kd8INit2Kd8INis2Yh8INuB24x82KfZhiB824wg2Kx82LHbjCB8INmG24F8INmF2Ll82KzZiCB82YQg2ql824wg2Kp82YYg2ql82qnYsdmGfNim24wgfNmEINuBfNiq24wgfNuB2YggfNuBINinfCDYp9uMfNi12YQgfNin2LXZhHzYrdin2LV82LHZhtuSfNuMINi0fNmG24EgfNuUINinfNq625QgfNuM2rrblHzYsSDaqXzYsSDZhXwg2YXZhHzZiNuBIHzZhdi52Kd82LHbkiB82rog2Kd82YbbgduMfNuSINuBfNuSINiofNin24zYs3zbkiDZhHwg2KrYuXwg2q/Yp3zbjNiqIHzbjCDYrXzYpyDYp3zbjCDZhXzYp9m+2YZ8INin2b582qnbjNinfNmF24wgfNuMINizfCDYrNizfNuBINqpfNmG24wgfNin2LTYsXzYudin2LR8INiv2Yh82YTYptuSfCDZhNimfNin2YbbgXzZiNmCIHzZgtmI2YJ82K3ZgtmIfNmF2YQgfCDZgtinfNqp24EgfCDar9uMfNixINiofNuBINmFfCDZiNuBfCDYqNmGfNuMINiofNmF2YTaqXzYrNizIHzYp9uUIHzYsduM2YJ82LEg2YZ825Ig2Kx82KfYryB82KfYqiB82q/bjCB82K8g2ql825Ig2K182K/Yp9ixfNixINuBfNqv2KfblHzZgtmI2YV8INmC2Yh825LYjCB82Kcg2LN82K/ZiNizfNixINm+fCDZiCB8INi02Kd824wg2KJ82rog2YV82YIg2K18INm+2Yh8INio2Kd82K7ZhNinfNin2YbbknzbjNmFIHzZhNuM2YV82Ygg2Kp82YjZhiB8INqp24F824zYjCB825Qg2ql82Kcg2b582YYg2Kd82YTaqSB82LnZhNinfNinINmFfNmCINqpfNin2KbbjHzZiNiz2LF824wg24F82YjYptuMfNuM2LEgfNinINuBfNi52YTbjHzZiCDar3zZiNix24x82K/ar9uMfNmG2K/ar3zZiCDaqXzbjNiz25J8INmF2YZ82KfYptivfNix2KfYpnwg2YXYsXzZvtmI2LF8INi32LF82YjZhduMfNuSINiufNiz2KggfNmG2YjZhnzYp9mG2Yh82YLYp9mGfCDYs9qpfNmI2KfZhXzbjNmGIHwg2LHaqXzYqti52YR82YTYp9mCfNi624zYsXzYr9in2YZ82Iwg2Kd8INio24x8INmF2LN824zZiNq6fNmG2KcgfCDYqNq+fCDYqNixfNix2KrbjHzYp9iv2Kd82KfZhdmEfNuM24EgfCDbjNuBfNuBINmIfCDYudinfNuMINm+fCDYqNqGfNin2YEgfNmE2KfZgXwg2K7ZhHzbjNuUIHzar9uM25R8INiv24x82r7bjCB82KjavtuMfNiv24EgfNis2KcgfNm+2YbbjHzZgtmI2Kd82KfZgtmIfNix2qnavnzbkiDbjHwg2LnZhHzaqdmI2KZ82Iwg2YV8INqG2Kd825Ig2LN82LEg2Ll8INm+24x82KjYsdinfNixINizfNixINitfNiz2KfZhnzZhSDYp3zaqdin2YV82LTYsdiqfCDYsdinfNi02KfZhXzZhdmGIHzYstmG2K98INiy2YZ82Kgg2ql82Kog2YV82KfbgSB82KfYsduMfNizINmFfNixINisfCDZhditfNmI2LHYp3zbkiDZvnzYt9ix24x824HZiNq6fNin2YQgfNq6INizfNuMINmGfNqp2LHbknwg2YXZgnzYqiDYs3zYqtit2YF8INiq2K182YjblCB824HZiNuUfNio2YbYr3wg2KfZgnzYryDbgXwg2KfZhXzYp9mF24x82KfZhNinfNmE2KogfNi02LHbknzbkiDYuXzYpyDaqXzZgdix24wnLFxuICAgIHBlczogJyDZiCB8INit2YJ8INio2Kd82YbYryB82LHYryB82K/Yp9ixfCDYr9infNqp2YcgfNmH2LEgfCDYr9ixfCDaqdmHfNiv2LEgfCDZh9ixfNixINqpfNit2YIgfNivINmHfNin2LIgfNuM2KogfCDYp9iyfNuM2KcgfNqp2LMgfNmI2K8gfNin2LHYr3wg24zYp3wg2qnYs3zYp9uMIHzYryDZiHwg2KjYsXwg2K7ZiHzZgiDYr3zYqNin2LR82LTYryB82K8g2ql82KfYsSB82K8g2Kh8INix2Kd82Ycg2Kh82KfZhiB82KLYstinfCDYotiyfNix2KcgfNin2LTYr3zbjCDZiHzZhyDYp3zbjNmGIHzbjNivIHzYstin2K982LMg2K182K7ZiNivfNuMINiofCDYp9izfNiv2YcgfNiv24wgfNmI2LEgfNin24zYr3zZhyDYr3zYsduMIHzZiCDYp3zYqtmF2Kd82KfYqiB8INmG2YV824wg2ql82KfYr9uMfNmG2YcgfNix2KfbjHzYryDYp3wg2KLZhnzYp9iz2Kp82LEg2Kd82LEg2YV8INin2Kx82YXYp9uMfNmI2YYgfNmC2YjZgnzYrdmC2Yh82Ygg2YV8INin2YZ82KfZhtmHfCDZh9mFfNmI2YIgfNin24zYqnwg2LTZiHzbjCDYp3wg2YXZiHwg2KjbjHzYqNinIHwg2KrYp3zZiNix2K982KfZhtmIfNiz2KogfNmI2KfZhnzYqNix2Kd82KfZhSB82LTZiNivfNii2YYgfNis2KrZhXzbjCDbjHwg2qnZhnzYsSDYqHzaqdmG2K98INmF2LF82Kog2YV82YfYp9uMfNiqINinfCDZhdizfNuM2IwgfNmF2KfYuXzYp9is2Kp82KrZiNinfNuM2q/YsXzZiCDYqHzYr9in2YZ82Kog2Yh82Kcg2YV8INio2K982LnbjCB82qnYp9ixfCDZhdmGfNmF2YjYsXwg2YXZgnzbjCDYr3wg2LLZhnzbjCDZhXzZhiDYqHzYsSDYrnzYp9mHIHzYpyDYqHzYp9ix24x82K8g2KJ82YXZhCB8INio2Yd82KfYuduMfNiv2IwgfNiv24zar3zYqiDYqHzYqNin24x82KfbjNmGfCDZhduMfNmGINmIfNmCINmFfCDYudmFfCDaqdinfNmGINinfNmIINiifCDYrdmFfNmG2YjZhnzZhyDZiHzZiCDYr3zYryDYtHwg2KfbjHzYtNmI2LF82qnYtNmIfCDaqdi0fNmE24wgfNmG24wgfNmHINmFfNio2LnbjHzYsSDYtHzbjNmHIHwg2YXZhHzZhduM2Kp824wg2LF82LHZhtivfCDYtNixfNmF24wgfNmI24wgfNiz2KfZiHzZgtin2YZ8INmC2Kd82YXZgtinfNin2YggfCDYp9mIfNivINmFfNqv24wgfNmG2YXbjHwg2KfYrXwg2YXYrXzZhduM2YZ82KbbjCB82KfYr9infCDYotmFfNiu2YjYp3zar9ix2K98INqv2LF82YXZhtivfCDYtNivfNin2KbbjHwg2K/bjHzYsiDYrXzZh9uM2oZ8INmH24x82KfYr9mHfCDZhdiqfNmG2YXYp3zYqiDaqXzYsdin2YZ8INio2YV82YYg2K182LEg2Kp82K3ZhdinfNin2LHZhnzZhdiz2Kd82K/ar9uMfNmI2YXbjHzZhiDYqnzZhdmE2YR82KjYsSB82YfYryB82YjYp9mHfNio2YfYsXwg2KfYuXzigIzZh9infNmCINmIfNiMINinfNi524zYqnzbjNiq2Yh82Kcg2LF82YYg2YV8INi52YJ82YfZhdmHfNinINmHfNiy2LQgfNmI2LLYtHzZhdmI2LJ82KLZhdmIfNin2YbYqnzYqtuMIHzYrNin2YV82YXZiNmFfNi52YXZiHzYqtiu2Kd8INmB2LF82LfZiNixfNivINivfNmHINitfNix2K/Yp3zYp9mI24x82YbZiNinfNin2YbbjHzYsdin2LF8INmF2Kx824wg2YZ82K3Yr9uMfNin2K3Yr3zZhtiv2q982LLZhtivfNi02K7YtXwg2LTYrnzigIzZhdmGfNmH4oCM2YV82LHZh+KAjHzZh9ix2Yd82LTYr9mHfNi5INinfNmIINmHfNin2LPbjHzZh9mUIHzbjNiv2Yd82LnZgtuMfNinINinfNmF2YcgfCDYqNi0fNin2K8gfNiv24zZh3zYpyDYr3zYr9mI2Kd824wg2K182KfYqNi5fNuMINiqfNiu2KfYqHzZhtiq2K582LHZiNixfNmIINixfNi02LHYp3wg2K7Yp3zZlNmF24x82KfZlNmFfNiq2KfZlHzYp9mLIHzYp9mF2YR82YTZhyB82K8g2LF82KfYs9infNiu2YjYsXzYqNmEIHzYp9io2YR82YLYp9iofNuM2qkgfNiz2KfZhnzZgtix2Kd82Kcg2YZ82K7YtduMfCDYp9mFfCDYqNmIfNuM2LEgfNin2YTZhXzYqNuM2YZ82KfZh9ivfNiq2KjYuXwg2KrYqCcsXG4gICAgemxtOiAnINiv2Kd82KfZhiB82K/Yp9mGfCDYqNixfCDYp9mIfNmGINizfNix2qAgfNiv2KfZhHwg2qTYsXzZhNmHIHzZg9mGIHwg2YPapHzZhiDYp3zZhiDZg3zZhiDYr3zZitqgIHwg2YraoHzapNivIHzYrdmCIHzZiNix2qB82KrZitinfNmK2KfapHzYp9ix2Kd82YPapNivfNin2YjYsXzYsdit2YJ82KjYsditfNin2YTZh3zYo9mGIHzZiNmE2Yp8INin2Kp82KfYqtinfNqg2YYgfNiq2KfZiHzYp9qkIHzYs9iq2Yp82YTZitmHfNin2YggfCDYs9iqfNqkINinfNmK2YcgfNix2KcgfNmHINiofNmHINivfNi52K/Yp3wg2LnYr3zZhiDapHzZhiDYqHzZitmGIHwg2KrYsXzZgiDZg3zZhiDZinzZitio2LN82KjZitiofCDYqtmKfCDYs9mIfCDZg9iofCDYs9infNmGINmFfNmGINiqfNmE2YUgfNin2YTZhXzYryDYs3zaoCDYuXwg2YXZhnzahtin2LF82K8g2qR82LHZhiB82LPYp9mFfCDZhdinfNq9INizfNmG2IwgfCDYqNmIfCDYp9mKfNmG2K/Zgnwg2K3ZgnzarNin2LF82YbarNinfNio2YjZhHzYs9io2Kd8INiz2Kh82KfYqtmIfNinINizfNmC2YTZh3wg2qTZhXwg2YXZhXzZiNin2YZ82LPahtinfCDYs9qGfCDZg9izfNinINiofNiz2YYgfCDYs9mFfNqk2LHZhHzYp9mI2YZ82YbavSB82KrZhiB8INio2Kd82YfZhiB82LPZitinfNinINqkfNin2LHaoHzYqNin2LF82qTYpyB82KjYs9mGfNmD2KjZinzYp9mFIHzZitmG2K982Yog2K982KfarNmKfNqgINiofNio2KfarHzZiiDYp3zZhdin2YZ8INmE2Kd8INivIHzYr9mC2YR82YfZhtivfCDZh9mGfNiqINivfNin2K/ZinzZiNmK2YZ82YrZg9mGfCDZhtqsfNiMINmDfNmG2aIgfCDapNmIfNio2qDYs3zZgtmiIHzYp9iqIHzYp9mI2YR82KfZg9mGfNin2r0gfCDYs9izfNmI2YYgfNin2K8gfCDZg9mIfNin2YrZhnzYr9qg2YZ8INiv2qB82KfYptmGfNiq2YggfNiq2YogfNmGINmHfNqs2YogfNiz2YogfNmCINmFfNmI2qDZhnzYr9mI2qB82YbYr9mIfNmE2YrZhnzYsdmE2Yp82YbYqtmIfNqk2YjZhnzZiNin2Kp82YrYp9ivfNiq2YrZg3zaoNiz2Kd82qTZhdiofNiq2LHZhXzZoiDYr3zYrdmC2aJ82YjYpyB82YTZiNinfNmF2KfYs3zZiNmCIHzZhyDZhXzZhCDYr3wg2YXZhHzZiNmG2K98INqk2qB82KfYjCB82Iwg2Kp82YTYp9imfNin2YogfNmF2qTZiHzZitmDIHzZiiDZg3zYsdin2Kp82YXYsdinfCDYqNmKfNiz2YXZiHzZiCDZg3zYjCDYr3zYs9mI2Kd82qAg2YV82qAg2LN82qDZoiB82qTYsdmKfNmK2LHZinzYr9mK2LF82Kcg2Kd82KfYs9infNqk2aIgfNiq2KcgfNiz2YjYs3zYjCDYs3zYrNmI2Kd82qAg2Kp82LHYo9mGfCDYp9mGfNiz2KPZhnzYsdmK2YN82YrYo9mGfNix2YogfCDYr9ixfNin2YXYsXzZg9ix2Kx8INqk2YR82Kcg2K982KzYsdmGfNin2KzYsXzYp9ix2YN82YTYp9isfNivINmDfNmI2KfYsXzYqNix2LN82YjZhtiqfNmF2YbZiHzYs9in2YR82YrZhtqgfNiv2qDZonzZhtiv2qB8INmF2qB82KfapNinfNiz2LPZinzYs9in2LN82YbZhiB82qTZiNmEfNin2qzYp3wg2KjaoHwg2LPapHzZhdio2Yp8INin2qR82qAg2Kd82KfYsdijfNqk2LHYp3zZiiDYs3zYqNizIHwg2K/ZhHzYpyDZhXzZhdmI2Kd82qTZhNinfNmF2YTYp3zapNix2YN82YPZiNixfNmI2KjZiHwg2YPYo3zZiNmD2YZ82KPZhtq9fNmD2LPYp3zaoNqs2Yh82KfYr9qkfNmH2KfYr3zYsdmH2Kd82KrYsdmHfNmD2YjZhXzYqtmI2YJ82YUg2LN82qAg2K982K/ZiiB8INiv2Yp82aIg2LN82YbYr9mKfNin2LMgfNin2K/Yp3zYqNmI2Kd8INiv2Kh82qAg2qR82r3YjCB82KfapNmifNix2KrYp3zYp9mEIHzZitin2YR82YjYs9mKfCDZg9iqfNij2YbYjHzZhtqk2Kd82KrZhtqkfCDYqtmGfNmFINqkfNix2LPYp3zZhdmF2qR8INmF2LF82YYg2K18INmD2YV82YbYs9mKfNis2KPZhnzYpNmKIHzZhNik2Yp82KfZhNikfNmE2KfZhHzZg9qk2LF82YPYqiB82LHZg9iqfNi02KfYsXzZhdi02Kd8INmF2LR82KzYp9ivfNix2qzYpycsXG4gICAgc2tyOiAn2KrbkiB82KfauiB82K/bjCB82K/bkiB8INuUIHzZiNq6IHwg2Krbknwg2K/Yp3wg2qnZiHzaqdmI2rp8INit2YJ82K/YpyB8INiv24x824zYp9q6fCDYr9uSfNuM2rogfNuSINinfNi02K7YtXwg2LTYrnzbgdixIHzbkiDblHzYp9i12YR8INit2Kd82K3ZgiB82K7YtSB8INuB2LF82LXZhCB82K3Yp9i1fNuB25IgfCDbgduSfNin2YQgfNmCINitfNmEINuBfCDZhtinfCDaqduMfCDZiNqGfNuUINuBfNuM2KcgfNiz24wgfNuSINmFfCDYp9mIfNmI2oYgfNin2KrbknzaqduM2Kp82Kcg2K182KfYr9uMfNmG2KfZhHzYtSDaqXwg2KfYqnzYsSDYtHzbgduM2rp8INuM2Kd82rog2K98INin24x824zYs9uMfCDZhdmEfNmI2YbYr3zaqduB24x8INqp24F824wg2Kp82LLYp9ivfNin2LLYp3wg2KfYsnzZhtiv25J82rog2ql82KfYsSB8INmI24x825Ig2ql82KbbkiB8INin2YZ82rsg2K982YbbgSB8INqp2LF82KfZiNmGfNuSINmIfNiv24zYp3zbjCDYr3zauiDYp3zbkiDYqHzZiNuM2LN82YjauyB824wg2YZ8INuB2Yh82KrbjCB824wg25R8INmG24F824wg2Kd824zZhtivfNmIINqEfNii2b7au3wg2KLZvnzYpyDZiHzbkiDYrHwg2qnZhnzbkiDZhnzZhtiv24x82Kog2K9825Ig2K1824wg2ql82KbbjCB82YXZhNqpfNuM2KrbknzZhiDblHzYqtq+24x8INiq2r582YjZhiB82rog2YV8INio2oZ825Qg2Kd82YbZiNq6fNqp2YbZiHzau9uSIHzYp9ix24x82Kcg2Kd825Ig24F82YQg2Kp8INqE2KZ82YjZgiB82YLZiNmCfNit2YLZiHzZhCDaqXzYrtmE2Kd8INis24x82YTaqSB82K/Yp9ixfNuM2KogfNqp2LHau3zYp9mG24F82qnZiCB824HaqdmIfCDbgdqpfNmGINinfNmF2YQgfCDZiNizfNq6INmIfNm+2rvbknwg2KrYuXzbjCDZhXzYp9mBIHzbkiDYrnzZhtmI2YZ82YLZhtmIfCDZgtmGfCDZhNmIfNuUINqpfNix24wgfNmE25IgfNiq2KcgfNuM2KrYp3wg2YLZiHwg2obYp3zbgdin2rp82oTYptuSfNmCINiqfNin24zbgXzYsdq7IHzbkiDYr3zYsSDaqXwg2YggfNmE2KfZgXwg2K7ZhHwg2KzZiHzbjCDZiHzYp9mIIHzbgdmIIHzYptmIIHzahtim2Yh82KjahtimfNuM2LEgfNuB2YjZiHzYpyDZhXzbjCDYrHzYp9mE2Kd824zZhiB8INis2Kd82YXbjCB82YbbgdinfNin2YYgfNin2KogfNiz2rHYr3wg2LPasXzbjNioIHzYs9uM2Kh82YjYs9uMfCDYtNinfNioINivfNuM2Yjau3zYp9mFIHzYp9mI2rt825Ig2Kp82rsg2ql8INmF2Ld82rog2Kp8INmI2YZ8INqp2YV82YYg2K982LHaqdq+fCDYsdqpfNq724wgfNq6INiifNix24zYp3zbjCDbgXzYp9ivIHzbjNin2K982LnZhNinfNixINuBfNq6INizfNuMINitfNis2r7bjHzYp9im2K9824HbjCB82YTZiNqpfCDai9mIfCDYs9mFfCDYs9infCDZhdmGfCDZhdi5fNio2YIgfNin2KjZgnzYt9in2Kh82YXYt9infNq+24zZiHzauiDZgXzbgdmGIHwg24HZhnzYrNmIIHzZiCDaqXzauiDYtHzYsSDYqnzaqdin2LF82YUg2K982r7bjNinfCDZu9infNi624zYsXzZiCDZhHzZiNim24x82KzbjNinfNmI2KfZhXzZgtmI2Kd824wg2LN8INis2r582YQg2Kd82YLZiNmFfCDYs9uMfNiw24HYqHzZhdiw24F8INmF2LB82KfbkiB8INin25J82K/ZhiB82Kcg2Kp82LPYp9mGfNmG2LPYp3zYp9mG2LN82LHbkiB82YTbjNmFfNi52YTbjHzYqti52YR82KfZhdmEfNuBINivfNuSINixfNivINinfNqp2YUgfNuM24HZiHzZgdin2KZ82oYg2Kd8INqp2r582YUg2Kp82LHYpyB82YjYsdinfNm+2YjYsXzauiDYqHzZgiDYr3zbkiDZgnzZiNqp2Yh82qnavtuMfNinINqpfNmIINivfNuSINiwfNm+2rvbjHzYqNmG2K98INmB2LF82qnZiNimfNin2YXbjHzbjCDbjHzYp9im24x82YTYp9mCfNin24zaunzbgSDYp3wg2YbYuHzYs9mF2Kd82YjZhduMfNuM2IwgfNuSINizfNiqINmIfNq+24zZhnzbkiDYuXzbjNmFIHzYs9uB2Yh8INiz24EnLFxuICAgIHBidTogJyDYryB8INin2Yh82KfZiCB82b7ZhyB8INm+2Yd82YrblCB8INit2YJ82obbkCB8INqG25B82LHZhyB82Yog2Kd825Ag2K98INmH2LF82YbZhyB82YfYsSB82K3ZgiB8INqF2Yh82YjaqSB82oXZiNqpfNmIINinfNmHINivfNmHINinfNuUINmHfNmHINmIfCDYtNmKfCDZhNixfNmKINqGfNmIINivfNix2YogfNmE2LHZinzZgiDZhHwg2qnamnzZiNmKIHzamtuQIHzaqdqa25B82Ycg2ql82LrZhyB82YTZiCB82LEg2oV82LPYsdmHfCDYs9ixfNmHINm+fCDZvNmIfNmIINm+fNmE2YcgfNmK2KogfNm82YjZhHzZitinIHzaqdqT2Yp8INqp2Yh82K7ZhyB82YrYjCB82K/ZiiB8INmE2Yd8INin2LJ82K8g2YV8INmH2Yp8INmI2Kd8INmK2Kd8INqF2K582KfYstinfNivINinfNmI2YTZiHzZhyDYqnzahdiu2Yd8INqp2pN82YjZhCB82YfYutmHfNmHINi0fNmKINivfCDZh9i6fNqp2YjZhHzYstin2K982YbZiCB8INmI2Yp82Ygg2Yp82Ycg2Kh82LTZituUfNiv25AgfNmK2YggfCDYr9mKfNiq2YcgfNiu2b7ZhHwg2b7YsXzYp9ivIHzYryDYr3zaqSDYrXwg2KrZiHzZhyDZhXzaq9mHIHzZhyDZh3zZgtmI2YJ82K3ZgtmIfNmIINmFfNmHINitfNivINmHfCDYqtixfCDZhdizfNi02YogfCDZhtmHfNqT2YrblHzZhtmKIHzYryDZvnzZiNin2K9825Ag2b582KfYr9mKfNmI2YTZhnwg2YrZiHzYryDYqnzZiNmG2Yh82Yjaq9mHfNmKINmIfNmE2YogfCDYr9infNmK2K8gfCDYqNinfNiq2YjZhnwg2K7ZvnzZiiDZvnzYqtmI2qt82KfYsSB82KfZhtivfNmK2YjYp3zbkCDZiHzYr9in2YZ8INio2LF82pPZiiB8INi52YV82KfZhtmHfCDYr9mHfNmK2oUgfNmH2YrahXzYp9mF2Yp82YTZhtmKfNio2LnZinzaidmI2YR8INqJ2Yh82Ycg2YR82KfZitivfNio2KfZinzYp9iq2Yh82Ycg2qt8INiq2Kd82b7ZhCB8INmF2YR82KfZitiqfNmI2YUgfNmI2YYgfCDZhNinfNmH2YrZiHwg2LTZiHwg2K/YunzZhSDYr3zYr9mHIHzbkCDYp3zYp9mGIHwg2KrZh3zaqdin2LF82KrZiCB82YXZiiB82KfYsdmHfNin2YjZinzYs9in2Yh82YXYs9infNmG2YjZhnzYr9mH2Lp82Ygg2Kp82Yog2LR82KfZhtmIfCDZhditfNmK2YYgfNin2K7ZhHwg2qvZvHzYtNmI2Yp82K/YutmHfNmIINitfNmI2YrYjHzZhtmK2LJ82LPZiiB82KfYs9mKfNmI2YbYr3zZgtmIIHzZiNmC2Yh82Ygg2ql82YjZhtmHfNmI2YXZinwg2YjaqXzZiiDYqnwg2KfZhnzZgtin2YZ82YbYr9uQfNmIINixfNqpINivfNmHINmKfNmF2YrZhnzZvtixIHzZvNmHIHzZhNin2YV82LrZiCB82YfYutmIfNivINm8fNmIINmHfNmEINiqfNmE25IgfNmI2YTbknzZiNmI2YZ82qnZiiB82LHZiCB82YYg2ql82YXZiNmFfNmI2qnak3zZvtin2LF82YYg2LR82YXZhiB8INmG2Yh8INmI2pN8INmC2Kd825Ag2oZ8INmI2LN82oUg2oV82LTYrti1fCDYtNiufNqY2YjZhnwg2pjZiHzYqtixIHzaq9m82Yd82Ygg2oV82YfZhSB82LnZgtmKfNix2KrZh3wg2YjYsXzYqNmEIHwg2KjZhHzZiCDYqHzZhyDYs3zamtmI2Yh8INqa2Yh8INqp2Kd825Ag2ql82Ygg2LN82KfYr9mHfNmI2YbaqXwg2LrZiHzYr9mIIHzZiCDZhnzYqiDaqXzZhdmEIHzYudmF2Yh82YQg2Yd8INm+2Yp82YjYs9mKfNqT2KfZhnzZiNqT2Kd82YrYsiB82K7YtdmKfNmKINmFfNinINiofNin2K/Yp3zZhyDZhnzYrtmE2Yp82YjYp9iufNiv2YrZiHzYjCDYr3zYryDZgnwg2YfZhXzYpyDYr3wg2KjZinzYqtio2Ll8INiq2Kh82Ycg2oZ8INi52YJ82b7ZhNmIfNmIINmEfCDYsdinfNivINiofNix2KfZinwg2K/YrnzZhtuQIHzZhtqp2Yp82Kog2K982KfYqNi5fCDZhdmCfNivINiufNmI2LHZh3zYtNix2Kd8INi02LF82LEg2YV82LHYs9ixfNiq2KfZhXzZhyDZvHwg2YXZhnzYt9mHIHzYs9i32Yd82KfYs9i3fNmI2KfYs3zZhNuQIHwg2KfYs3zblCDYr3zYqNix2K5825Ag2YYnXG4gIH0sXG4gIERldmFuYWdhcmk6IHtcbiAgICBoaW46ICfgpJXgpYcgfOCkquCljeCksHwg4KSq4KWNfCDgpJXgpL58IOCkleClh3wg4KWkIHzgpJTgpLAgfCDgpJTgpLB84KSV4KS+IHwg4KSV4KWLfOCkleCkvuCksHzgpL7gpLAgfOCkpOCkvyB84KSv4KS+IHzgpJXgpYsgfOCkqOClhyB84KWL4KSCIHzgpL/gpJXgpL584KWN4KSw4KSkfCDgpLngpYh8IOCkleCkv3zgpIIg4KSVfOCkueCliCB84KSn4KS/4KSVfOCkteCljeCkr3zgpIXgpKfgpL98IOCkheCkp3zgpY3gpKTgpL98IOCkuOCkrnzgpY3gpK/gpJV84KS/IOCklXzgpJXgpY3gpKR84KS+IOCkhXzgpJXgpYAgfOCkviDgpJV8IOCkteCljXzgpYfgpIIgfCDgpLngpYt84KSv4KSV4KWNfOCkuOClgCB84KS44KWHIHzgpYcg4KSVfCDgpK/gpL58IOCkleClgHzgpK7gpYfgpIJ84KSo4KWN4KSkfCDgpK7gpYd84KSk4KWN4KSvfOCliCDgpaR84KSk4KS+IHzgpLDgpKTgpY184KSV4KWN4KS3fOClh+CklSB84KSv4KWH4KSVfOCljeCkr+Clh3zgpL/gpJUgfOCksCDgpLl84KSt4KWAIHzgpJXgpL/gpLh8IOCknOCkvnwg4KS44KWNfOCklSDgpLV84KS+IOCknHzgpL/gpLjgpYB84KSu4KS+4KSofCDgpLXgpL984KSwIOCkuHzgpKTgpY3gpLB84KWAIOCkuHzgpaQg4KSqfCDgpJXgpLB84KWN4KSw4KS+fOCkl+CkviB84KS/4KSkIHwg4KSF4KSqfCDgpKrgpLB84KS44KWN4KS1fOClgCDgpJV8IOCkuOClh3zgpL4g4KS4fOCljeCkryB8IOCkheCkqHzgpY3gpKTgpY184KS/4KSv4KS+fOCkviDgpLl8IOCkuOCkvnzgpKjgpL4gfOCljeCkpCB84KSq4KWN4KSkfOCkuOCkruCkvnzgpL7gpKggfOCksCDgpJV84KS+4KSq4KWNfOCkpOCkqOCljXwg4KSt4KWAfCDgpIngpLh84KSw4KS+4KSqfOCkteCkpOCkqHzgpY3gpLXgpKR84KSw4KWL4KSCfOCkteCkvuCksHzgpYcg4KS4fOCkpeCkviB84KS54KWLIHzgpYcg4KSFfOCkviDgpaR84KSoIOCklXwg4KSoIHzgpKbgpYfgpLZ8IOCksOCkvnzgpLfgpL4gfOCkheCkqOCljXzgpKQg4KS5fOCljeCkt+CkvnzgpY3gpLXgpL584KSc4KS+4KSPfOClgCDgpKp84KSV4KSw4KSofOCkviDgpKp84KSF4KSq4KSofOCkt+CljeCkn3wg4KS44KSCfOClhyDgpLV84KS54KWL4KSXfOCkv+CkteCkvnzgpJ/gpY3gpLB84KWN4KSf4KWNfOCkvuCkt+CljXzgpLDgpL7gpLd84KS44KSV4KWHfCDgpK7gpL584KST4KSCIHzgpL7gpJPgpIJ84KSw4KWAIHzgpJUg4KS4fOClhyDgpKp8IOCkqOCkv3zgpYDgpK8gfOCksOCkleCljXzgpYsg4KS4fOCkvuCkj+Ckl3zgpLDgpKjgpYd8IOCkh+CkuHzgpLUg4KSVfOCkquCksCB84KSw4KSk4KS+fOCksCDgpIV8IOCkuOCkrXzgpKTgpKXgpL58IOCkpOCkpXwg4KSQ4KS4fOCksOCkviB84KSq4KSo4KWHfOCljeCksOClgHzgpL/gpJXgpY184KSV4KS/4KSvfOCkviDgpLV84KSu4KS+4KScfOCkgiDgpJR84KSwIOCkiXzgpKbgpY3gpKd84KS44KSt4KWAfOCktuCljeCkr3wg4KSc4KS/fOCkvuCkqOClh3zgpL7gpLDgpY184KS+4KSw4KS+fOCkpuCljeCktXwg4KSm4KWNfOCkj+Ckl+CkvnzgpLjgpK7gpY184KWH4KS2IHzgpL/gpI8gfOCkvuCktSB84KSwIOCkqnwg4KSm4KWHfOCljeCkpOCksHzgpL4g4KSUfOCkvuCksOCli3zgpK/gpYvgpIJ84KSq4KSw4KS+fOCkquClguCksHzgpJrgpL/gpKR84KWN4KSnIHzgpLDgpYLgpKp8IOCksOClgnwg4KS44KWBfCDgpLLgpL984KSkIOCklXzgpYsg4KSqfOCkgiDgpLh84KWHIOCksnzgpLbgpL/gpJV8IOCktuCkv3zgpLXgpL7gpLl84KWHIOCklHzgpJzgpYsgfOCksOCkvuCkp3zgpJzgpL/gpLh84KWC4KSw4KWNfOClgCDgpK184KWC4KSqIHzgpYvgpJfgpL584KS44KWN4KSlfOCksOClgOCkr3zgpKTgpL/gpJV84KWN4KSwIHzgpaQg4KSHfOCkh+CkuCB8IOCkieCkqHzgpLLgpYcgfOClhyDgpK584KSy4KS/4KSPfOCkriDgpJV84KSV4KSk4KS+fOClhyDgpK98IOCknOCli3zgpKgg4KSufOCkheCkquCksHwg4KSq4KWCfOCliyDgpJV84KS+IOCkiXzgpL7gpLkgfOCkqOClguCkqHzgpL7gpKjgpYJ84KSX4KWAIHzgpKbgpYAgfOCkvuCksOClgHzgpIIg4KSufOClpCDgpJV84KSk4KSw4KWNfOClgCDgpLB84KS2IOCklXzgpKrgpLDgpL984KS44KWN4KSkfOCli+CkiCB84KSV4KWL4KSIfOCksOCljeCkr3zgpYAg4KSFfOCkueCkv+CkpHzgpK3gpL7gpLV8IOCkreCkvnzgpKTgpL7gpJN84KS+4KS4IHzgpLjgpL7gpK584KS14KS/4KSVfOCkteCkv+CktXzgpK7gpY3gpK58IOCkuOCklXzgpJXgpLAgfOCkvuCkqOCkvnzgpKcg4KSVfOCkqOCkv+CklXzgpK8g4KSVfOCkieCkuOCklXzgpJXgpYPgpKR8IOClmOCkvnzgpKgg4KS4fOCknOClgOCktXzgpY3gpK/gpL584KSw4KSV4KS+fOCljeCksOCklXzgpL7gpJwgfOCkqOCljeCkr3zgpY3gpK4gfOCksOCljeCko3zgpZgg4KS5fOCkueClmCB8IOCkueClmHzgpYAg4KSufOCknOCkv+CklXzgpL7gpJzgpL984KS+4KSu4KS+fOCklSDgpJR84KSu4KS/4KSyfOClh+CkqOClh3zgpLLgpYfgpKh8IOCksuClh3zgpK/gpYcgfOCliyDgpIV84KWHIOCknHzgpLDgpL/gpLV84KSu4KSvIHzgpLjgpK7gpK984KS14KS24KWNfOCkhuCkteCktnwg4KSG4KS1fOCkkOCkuOClgHzgpL7gpKcgfOCksCDgpKZ84KSw4KWN4KS1fOCkuOCkvuCksHzgpKog4KS4fOCkrOCkqOCljXwg4KS44KS5fOCkv+Ckp+CkvnzgpLXgpL/gpKd84KWAIOCkqHzgpYLgpKggfOClmOCkvuCkqCcsXG4gICAgbWFyOiAn4KWN4KSv4KS+fOCkr+CkviB84KSk4KWN4KSvfOCkr+CkvuCkmnzgpJrgpL4gfOCko+CljeCkr3zgpL7gpJrgpL58IOCktSB84KSV4KS+4KSwfOCkquCljeCksHwg4KSq4KWNfOCkv+CkleCkvnzgpKfgpL/gpJV84KS+4KSwIHwg4KSF4KSnfOCkheCkp+Ckv3zgpJrgpY3gpK984KSG4KS54KWHfCDgpIbgpLl84KS+IOCkhXzgpLngpYcgfOCkviDgpJV84KS+4KS4IHzgpLXgpL4gfOCljeCkr+Clh3zgpY3gpLDgpKR8IOCkuOCljXzgpKTgpL4gfOCkviDgpLh8IOCkheCkuHwg4KSV4KSwfOCkuOCljeCktXwg4KSV4KS+fOCksuCljeCkr3zgpLDgpKTgpY184KS+4KS54KS/fOCkleCli+Cko3wg4KSV4KWLfOCkv+CklSB84KSv4KWH4KSVfOCljeCkteCkvnzgpL4g4KS1fCDgpKTgpY184KSwIOCkhnzgpY3gpK8gfOCkpOCljeCksHzgpYfgpJXgpL584KSV4KWN4KS3fOCkviDgpKh8IOCkuOCkgnzgpL7gpK7gpL584KS+4KSa4KWNfOCkguCkteCkvnzgpL/gpILgpLV84KSV4KS/4KSCfCDgpJXgpL984KS+4KSkIHzgpLfgpY3gpJ984KSV4KS+4KS4fCDgpK/gpL584KSv4KS+4KSCfOCkvuCkguCkmnzgpLDgpY3gpK984KSu4KS/4KSzfCDgpK7gpL98IOCkuOCkvnzgpLXgpY3gpK984KWL4KSj4KSkfOCkqOClhyB84KWHIOCkqnzgpJXgpL7gpK58IOCkuOCkrnzgpILgpKTgpY184KSv4KWHIHwg4KSw4KS+fOCkuOCkruCkvnzgpKTgpILgpKR84KSV4KSw4KSjfOCkviDgpIZ84KWHIOCklXzgpLngpL8gfOClhyDgpLh84KSo4KS+IHzgpL/gpLPgpKN84KWC4KSoIHzgpL4g4KSqfOCkn+CljeCksHzgpY3gpJ/gpY184KS+4KS34KWNfOCksOCkvuCkt3zgpYDgpK8gfOCktSDgpLh84KSV4KWN4KSkfOCkruCkvuCkqHzgpLDgpY3gpLV8IOCkhuCkqnzgpLPgpKPgpY184KWN4KSw4KWNfOCkvuCkpOCkgnzgpLXgpL7gpKR84KSa4KWHIHwg4KS14KS/fOCljeCkt+Cko3zgpLDgpKPgpY18IOCkpuClh3wg4KS14KWNfOCkhuCkquCksnzgpLngpYAgfOCkvuCksOCljXzgpKjgpK/gpYd8IOCkqOCkr3zgpK7gpL4gfOCkr+CkvuCkuHwg4KSc4KS+fOCksuClh+Cksnwg4KSo4KS/fOClhyDgpIV8IOCkquCkvnzgpL4g4KSufOCksuClhyB84KS+4KS54KWAfOCkrOCkguCkp3zgpYcg4KS1fOCljeCkr+CklXwg4KSu4KS+fOCktuCkv+CklXwg4KS24KS/fOCkpuClh+CktnzgpL4g4KSmfOCkruCkvuCknHzgpY3gpLDgpYB84KSy4KWAIHzgpL7gpKggfOCkvuCkguCkqHzgpKrgpLLgpY18IOCkueCli3zgpL4g4KS5fOCkt+CkoyB84KSc4KWHIHzgpL/gpJzgpYd84KS54KS/4KScfOCkquCkvuCkuXzgpL7gpLDgpL584KSv4KS+4KSkfOCkuOCksOCljXwg4KS44KSwfOCksOCkvuCkgnzgpIXgpLjgpLJ84KSC4KSs4KSCfOCkuOCkguCkrHzgpL/gpJXgpY184KWAIOCkqnzgpILgpJrgpY184KSw4KSV4KWNfOCko+CkpOCljXwg4KSG4KSjfOCksuCkviB84KS44KWN4KSlfOCksOClgOCkr3zgpYDgpKQgfOCkguCkqOCkvnzgpKQg4KS1fOCljeCktSB84KSVIOCktXzgpKPgpYcgfOCkvuCkmuClh3zgpKgg4KSVfOCkpCDgpJV84KSw4KSk4KS+fOCljeCksOCkvnzgpK/gpL7gpLl84KWN4KSkIHzgpJrgpYAgfOCkryDgpJV84KSm4KWN4KSnfOCljeCkteCkpHzgpK/gpJXgpY184KSj4KS/IHzgpIbgpKPgpL984KS4IOCkuHzgpILgpKfgpL584KSVIOCkuHzgpJrgpY3gpJt84KSvIOCkhXzgpKQg4KS4fOClgOCkqOClh3zgpYvgpKPgpL584KSV4KSw4KSkfOCkpOCljeCktXzgpYDgpLIgfOClgCDgpIV84KS44KS+4KSwfOCksCDgpLV84KSt4KS+4KS1fOCktSDgpKR84KSl4KS14KS+fOCkheCkpeCktXwg4KSF4KSlfOClhyDgpKR84KWHIOCknHzgpK/gpL7gpK984KSC4KSa4KS+fOClh+CksuCljXzgpL7gpKjgpYd84KWH4KSj4KWNfOCklSDgpIZ84KSV4KWN4KSVfOCkueCkleCljXwg4KS54KSVfOCkoyDgpK584KSC4KSw4KSVfOCkuOCkguCksHzgpKjgpY3gpK984KS+4KSv4KSmfOCkviDgpKR84KSkIOCkhnwg4KSJ4KSqfOCkteCkuOCljXzgpL/gpLXgpL584KWH4KS24KS+fOCkuOCkvuCkrnzgpYcg4KSvfOClhyDgpIZ84KWAIOCktXzgpLUg4KSufOCkpOClgOCkqHzgpLUg4KSGfOCkp+CljeCkr3wg4KSF4KS2fOCkp+CkvuCkpHzgpJXgpYPgpKR84KWN4KSVIHzgpKbgpY3gpK984KS/4KSkIHzgpLjgpLLgpYd84KWH4KS2IHzgpKTgpYsgfOClh+CksiB84KSk4KWAIHzgpY3gpKTgpYB84KSF4KS44KWHfOCkh+CkpOCksHwg4KSH4KSkfOCkuOCljeCkpHzgpLDgpY3gpKN84KS+IOCkrHzgpYfgpLLgpYd8IOCkleClh3zgpLngpYDgpLB84KSc4KS+4KS5fOCkviDgpJx84KWH4KSkIHzgpYLgpLDgpY184KSq4KWC4KSwfOClh+CkmiB8IOCkteCkvnzgpL7gpJzgpL584KWAIOCkuHzgpLbgpL4gfOCkryDgpLV8IOCkqOCljXzgpK/gpL7gpLV84KSm4KWN4KSmfOCljeCkpyB84KSw4KWC4KSofOCkr+CkpuCljXzgpJXgpL7gpK984KS+IOCktnzgpJfgpKPgpY184KSVIOCklXzgpLDgpL7gpKd8IOCktuCkvnzgpK/gpKTgpY184KSyIOCkhXzgpY3gpK/gpLV84KWAIOCklXzgpL7gpLUgfOCkviDgpK984KSk4KWN4KSkfOCknOCkv+CklXzgpL7gpJzgpL984KSw4KSj4KS+fCDgpKfgpLB84KS+IOCkp3zgpK3gpYfgpKZ8IOCkrOCkvnzgpLDgpJXgpL584KWN4KSw4KSVfOCkleClh+CksnzgpL8g4KS1fOCkv+Ckt+CljXzgpKTgpYDgpLJ84KSv4KWL4KSXfOCkuOCkvuCkp3zgpL7gpILgpKR84KS14KS/4KS1fOCktuCljeCksHwg4KSn4KWHfCDgpK7gpYF84KS14KSk4KSDJyxcbiAgICBtYWk6ICfgpL7gpJUgfOCkquCljeCksHzgpJXgpL7gpLB8IOCkquCljXzgpL7gpLAgfOCkv+CkleCkvnzgpY3gpK/gpJV84KSn4KS/4KSVfOCklSDgpIV84KWN4KSw4KSkfOCljeCkpOCkv3zgpLXgpY3gpK98IOCkheCkp3zgpYfgpIEgfOCkheCkp+Ckv3zgpL/gpJUgfCDgpLXgpY184KSGyrwgfCDgpIbKvHzgpJXgpY3gpKR84KSv4KSV4KWNfOCkpOCkv+CklXzgpJXgpYfgpIF84KSVIOCktXzgpKzgpL7gpJV84KSVIOCkuHzgpJvgpYjgpJV8IOCkm+CliHzgpKTgpY3gpK984KSu4KWHIHzgpYfgpJUgfCDgpLjgpK584KSV4KWN4KS3fOCkueCkvyB84KSw4KSk4KWNfOCksCDgpJt84KSv4KWH4KSVfOCljeCkr+Clh3zgpKjgpY3gpKR84KS14KS+IHzgpL/gpJXgpYd84KSV4KWkIHzgpYjgpJXgpaR84KWkIOCkqnwg4KSF4KSqfCDgpLjgpY18IOCkteCkv3wg4KSc4KS+fOCkv+CkpCB84KS44KSBIHwg4KS54KWLfOCkleCli+CkqHwg4KSV4KWLfOCkpOCljeCksHzgpLjgpY3gpLV8IOCkteCkvnzgpJUg4KSGfOCkt+CljeCkn3wg4KSV4KSwfOCkheCkquCkqHzgpK7gpL7gpKh8IOCkleCkvnwg4KSF4KSofOCkpOCkvyB84KWN4KSk4KWNfOCkqOCliyB84KSo4KS54KS/fCDgpKrgpLB84KSf4KWN4KSwfOCljeCkryB8IOCkj+CkuXzgpL8g4KSVfOCljeCkn+CljXzgpL7gpLfgpY184KSw4KS+4KS3fCDgpLDgpL584KS44KSu4KS+fOCli+CkqOCli3zgpLIg4KScfCDgpKjgpLl84KSk4KS+4KSVfOCkvuCksOCljXzgpKrgpKggfOCkpOCkqOCljXzgpLXgpKTgpKh84KWN4KS14KSkfOCljeCkt+Ckvnwg4KSV4KSPfCDgpLjgpL584KWN4KSw4KWAfCDgpKjgpL984KS+IOCkhnzgpL/gpLXgpL58IOCkuOCkgnwg4KSm4KWHfOCknOCkvuCkj3zgpYDgpK8gfOCkleCksOCkrHzgpKXgpL4gfOCkj+CkrOCkvnzgpL4g4KSqfOCkqOCkviB84KWN4KS14KS+fOCkpuClh+CktnzgpKTgpaQgfOCksOCklSB84KSVIOCkuXzgpIEg4KSFfCDgpLjgpK18IOCkhiB84KSkIOCklXzgpJrgpL/gpKR84KWN4KSkIHzgpLXgpL7gpLB84KSk4KS+IHzgpL7gpLDgpJV84KSu4KS+4KScfOCkviDgpLh84KSw4KWA4KSvfOCkqOCljeCkr3zgpLDgpKTgpL584KS+4KSoIHzgpY3gpLDgpL584KWN4KSv4KS+fOCksOCkleCljXzgpL7gpLDgpKN84KSq4KSw4KS/fOCkj+CksiB84KSV4KSP4KSyfOCkheCkqOCljXzgpLDgpKzgpL584KSVIOCkqnzgpJPgpLAgfOCkhuCkk+CksHwg4KSG4KSTfOCkheCkm+Ckv3wg4KSF4KSbfOCkv+CksOCljXzgpL7gpKjgpY184KSo4KSVIHzgpLngpYvgpI984KSV4KSwIHzgpKfgpL7gpLB84KS44KWN4KSlfOCkviDgpIV84KS/4KSu4KWHfOCksCDgpIZ84KSP4KS54KS/fCDgpI/gpJV84KWHIOCkuHzgpKTgpKXgpL58IOCkpOCkpXwg4KSu4KS+fOCkv+CkleCljXzgpLbgpL/gpJV8IOCktuCkv3zgpKrgpY3gpKR84KSw4KWN4KS1fOCkqOCkv+CksHzgpJrgpY3gpJt84KSw4KWN4KSvfOCkgSDgpLh84KSVIOCklXzgpLngpYsgfOCkvuCkueCkv3zgpI/gpKTgpaR84KSwIOCkqnzgpL7gpK7gpL584KS44KS+4KSufOCkt+CkviB8yrwg4KS4fOCkgSDgpI984KWI4KSVIHzgpKbgpY3gpKd84KSwIOCkhXzgpJUg4KScfOCkuOCljeCkpHzgpL7gpKrgpY184KSBIOCklXwg4KS44KSVfOCkr+CklSB84KSV4KS+4KSofOCkueCkqCB84KSP4KS54KSofOClh+CksiB84KWL4KSP4KSkfOCkpCDgpIZ84KS+IOCktXzgpaQg4KSVfOCljeCkpOCksHzgpL7gpI/gpKR84KWN4KSw4KSVfOCkueClgSB84KSVIOCkiXzgpKrgpYLgpLB84KS14KS/4KS1fMq8IOCkhXzgpJvgpL8gfCDgpLLgpYd84KSoIOCkqnzgpL7gpLggfOCksOCkvuCkqnzgpKfgpJUgfOCkquCkj+CkrHwg4KSq4KSPfOCksOCkviB84KSv4KSk4KS+fOCksOClguCkqnzgpKgg4KS1fCDgpJXgpYd84KS34KS+4KSVfOCkryDgpKp84KSkIOCkuXzgpJzgpL7gpLl8IOCkkyB84KSt4KS+4KS1fOCkquCksCB84KSl4KS14KS+fOCkheCkpeCktXwg4KSF4KSlfOCkuOCkruCljXzgpJzgpL/gpJV84KS+4KSc4KS/fOClguCksOCljXzgpLDgpKTgpL98IOCkpuCli3zgpLjgpK3gpJV84KWkIOCkuHwg4KSc4KSofOCkuOCkrSB84KSs4KS+4KSnfOCkheCkqOClgXzgpL/gpLjgpIF8IOCkuOCkuXzgpIEg4KS1fOCkjyDgpLh84KSw4KS/4KS1fOCkpOClgSB84KWH4KSk4KWBfOCkueClh+CkpHwg4KS54KWHfOCkvuCkpyB84KWH4KSs4KS+fOCkqCDgpLh84KS/4KS34KWNfOCksOCkvuCkp3wg4KSF4KS1fOCkv+CkpOCljXzgpLXgpL7gpLh84KSa4KS+4KSwfCDgpIngpJp84KS+4KSw4KS+fOCkqCDgpJV84KS14KSVIHzgpL4g4KSVfOCkqOClguCkqHzgpL7gpKjgpYJ84KSP4KSkIHzgpLDgpYAgfOClh+CkkyB84KSV4KWH4KSTfOCksOCkoyB84KWN4KSw4KS4fOCkvyDgpKZ84KSTIOCktXwg4KSt4KWHfOCkqOCkueClgXzgpYvgpKjgpLl84KWN4KSl4KS/fOCkquCkpOCljXzgpK7gpY3gpKp84KSw4KS+4KScfCDgpK3gpL584KS54KS/4KSufCDgpLngpJV84KS+4KSu4KWHfOCljeCkoyB84KSw4KWN4KSjfOCkueCkvuCksHzgpL8g4KS4fOCklSDgpKZ84KSoIOCkhXzgpKQg4KSFfOCksuClh+CkrHwg4KSF4KStfOCkv+CktuCljXzgpJzgpJUgfOCkvuCknOCklXzgpKgg4KSGfOCkteCkvuCkuXzgpJXgpL7gpJx84KS24KWN4KSvfOCkteCkuOCljXzgpJPgpLngpL98IOCkk+CkuXzgpK/gpYvgpJd84KWkIOCkj3zgpJXgpI8gfOClhyDgpJN84KSF4KSq4KSwJyxcbiAgICBiaG86ICcg4KSV4KWHfOCkleClhyB84KWHIOCklXzgpL7gpLAgfOCkleCkvuCksHzgpL/gpJXgpL584KSn4KS/4KSVfOCkheCkp+Ckv3wg4KSF4KSnfOCkk+CksCB84KSG4KST4KSwfCDgpIbgpJN84KWHIOCkhXzgpYcg4KS4fOCkviDgpJV8IOCkuOCkgnzgpL/gpJUgfOCksCDgpLl84KS+IOCkuHwg4KS54KWLfOCksCDgpLh84KWH4KSCIHzgpK7gpYfgpIJ8IOCkruClh3wg4KSV4KSwfCDgpLjgpYd84KSo4KWLIHzgpJXgpY3gpLd84KS44KWHIHwg4KSV4KS+fOClpCDgpLh84KSW4KWHIHzgpL7gpaQgfOCksOCkviB8IOCkuOCkrnwg4KS44KSsfOCljeCksOCkvnwg4KS44KSVfOCksCDgpJV84KSoIOCklXzgpLXgpYcgfOCljOCkqOCli3zgpJXgpYzgpKh8IOCkleCljHzgpJrgpL7gpLl8IOCkmuCkvnwg4KSs4KS+fOCkquCljeCksHwg4KSq4KWNfOCkpeCkviB84KS/IOCklXzgpKTgpL8gfCDgpJzgpL58IOCkuOCkvnzgpYcg4KSGfOCkquCkqCB84KSV4KSw4KWHfOCkpOCkviB84KS54KWL4KSWfOCkpCDgpJV84KWH4KWkIHzgpYcg4KSsfOCkpOCkpeCkvnwg4KSk4KSlfCDgpIbgpKp84KSV4KWH4KSyfOCkuOCkleClh3wg4KS44KWNfOCksOClhyB84KS44KSs4KS5fOCkleCksCB84KSG4KSq4KSofOClhyDgpJN84KSc4KS+IHwg4KSq4KSwfOCkt+CljeCkn3wg4KSw4KS+fOCkqOCkviB84KS54KS14KWHfCDgpLngpLV84KSy4KS+IHzgpYfgpLLgpL584KSs4KS54KS/fCDgpJPgpJV84KWL4KSW4KWHfOCksCDgpKx84KS54KWkIHwg4KS54KWkfOCkqCDgpLh84KS+4KS34KWNfOCksOCkvuCkt3zgpY3gpKQgfCDgpJTgpLB84KWHIOCkmnzgpaQg4KSVfOCkuOCkguCkl3zgpLAg4KSGfOCkn+CljeCksHzgpY3gpJ/gpY184KS34KS+IHzgpK7gpL7gpKh84KS+IOCkhnzgpIIg4KSVfOCkviDgpKp84KWN4KS34KS+fOCksOCkleCljXzgpLngpYcgfOCkvuCkueClh3zgpL7gpKTgpL984KS+4KS14KWHfCDgpJzgpYd84KS54KWAIHzgpJPgpJXgpLB84KSu4KS/4KSyfOCkv+CkpCB84KWLIOCkuHzgpLIg4KScfOCkh+CkluClh3zgpKjgpIfgpJZ8IOCkqOCkh3zgpKTgpY3gpLB84KSu4KS+4KScfCDgpKzgpL984KS14KWH4KWkfOClhyDgpJx84KSVIOCkuHzgpL/gpIIgfOCkueCkv+CkgnzgpJXgpLDgpL584KSU4KSwIHzgpYcg4KSufOCkuOCkruCkvnzgpLngpYEgfCDgpJMgfOCkquCksCB84KWHIOCkqHzgpLjgpY3gpKV84KSw4KWA4KSvfOCljeCksOClgHzgpLLgpL7gpaR84KS+4KScIHzgpL7gpKggfOCkleCkvuCkqHzgpYcg4KSkfOCkv+CksCB84KSk4KS/4KSwfOCkluCkvuCkpHwg4KSW4KS+fOClhyDgpIl84KSo4KWC4KSofOCkvuCkqOClgnzgpL7gpK4gfCDgpLjgpYF8IOCkpuClh3zgpYAg4KSVfCDgpK7gpL584KSwIOCkrnzgpKrgpY3gpKR84KS/4KSv4KS+fOCkvuCkueClgHzgpKzgpL7gpaR84KSv4KWL4KSXfOClgCDgpLh84KSyIOCkuXzgpYLgpKggfOCkteCljeCkr3zgpYEg4KSVfOCkjyDgpJV84KWHIOCktXzgpILgpKTgpY184KS44KWN4KS1fOCkleClh+CkuXzgpYDgpK8gfOCkluCksiB84KS44KS+4KSufOCkr+CkpOCkvnzgpKTgpL/gpJV84KWHIOCkuXzgpL7gpKrgpY184KSw4KS+4KSqfOCksCDgpKp84KSwIOCkhXwg4KSy4KWLfCDgpLjgpLl84KSc4KWHIHzgpYvgpJcgfOCkriDgpJV84KSy4KWHIHwg4KSo4KS/fOClh+CkleCksHzgpL4g4KS5fOCkquClguCksHzgpLAg4KSofOClh+CkueClgXzgpY3gpK8gfOCkr+CkviB8IOCkr+CkvnzgpKbgpYfgpLZ84KSm4KWAIHzgpL4g4KSufOCkvuCktSB8IOCkpuCli3zgpYcg4KSmfCDgpKrgpL584KS54KS/IHzgpL/gpJXgpY184KS24KS/4KSVfCDgpLbgpL984KSs4KS+IHzgpL/gpLIgfCDgpIngpKp84KWN4KSw4KSkfCDgpLXgpL98IOCkueClgHwg4KSy4KWHfOCksOCliyB84KWHIOCklnzgpKDgpKggfOCkl+CkoOCkqHzgpILgpJfgpKB8IOCkruCkv3zgpLfgpKMgfOCljeCkt+Cko3zgpILgpLDgpJV84KS44KSC4KSwfCDgpIbgpKZ8IOCkj+CklXzgpKjgpYcgfCDgpIXgpKp84KSk4KSC4KSkfOCkteCkpOCkgnzgpY3gpLXgpKR84KWN4KSk4KSwfOCljeCkr+CkvnzgpYfgpLYgfOCkvuCkpuClgHzgpY3gpKTgpL984KSc4KS/4KSVfOCkvuCknOCkv3zgpJUg4KSGfOCljeCkriB84KSa4KS+4KSwfCDgpIngpJp8IOCktuCkvnzgpLDgpYAgfOCkvuCkuSB84KSv4KS+4KS5fOCkrOCkv+Ckr3zgpJrgpL/gpKR84KSV4KWN4KSkfOCkquCkr+Cli3zgpIngpKrgpK984KSw4KSk4KS+fOCksCDgpLV84KSoIOCkrnzgpLLgpYvgpJd84KS5IOCklXzgpKgg4KSqfOCkleCkvuCkrnwg4KSq4KWCfCDgpIcgfOCkhuCkpuCkv3zgpIjgpLIgfCDgpJXgpIh8IOCkteCljXzgpK7gpYAgfOClgeCksOCklXzgpLjgpYHgpLB8IOCknOClgHzgpKfgpL7gpLB84KSvIOCkuHzgpKTgpLDgpY184KSt4KWHIHzgpLjgpK3gpYd8IOCkuOCkrXzgpK3gpL7gpLV84KWN4KSl4KS/fOCkvuCkruCkvnzgpLjgpLAgfOCksOCljeCkrnwg4KSV4KWLfCDgpKzgpYd84KWL4KS44KSwfOCkpuCli+CkuHzgpKMg4KSVfOCkvuCkuCB84KWHIOCkqnzgpJzgpL7gpKZ84KSG4KSc4KS+fCDgpIbgpJx84KSJ4KSa4KS/fOCklyDgpJV84KS+4KSw4KWAfCDgpJzgpLB84KSX4KWHIHzgpJwg4KSVfOClgCDgpKx84KS44KSoIHzgpLngpYsgfOCkviDgpKQnLFxuICAgIG5waTogJ+CkleCliyB84KSo4KWHIHwg4KSwIHzgpL7gpLAgfOCkleCljeCkpHzgpJXgpL7gpLB84KSq4KWN4KSwfCDgpKrgpY184KWN4KSv4KSVfOCkteCljeCkr3wg4KSX4KSwfOCkv+CkleCkvnwg4KS14KWNfOCljeCksOCkpHzgpKfgpL/gpJV84KWN4KSk4KS/fOCkr+CkleCljXzgpIXgpKfgpL98IOCkheCkp3zgpL7gpIggfOCkruCkviB84KSy4KS+4KSIfOCkpOCljeCkr3zgpL/gpJUgfCDgpaQgfCDgpLjgpK584KS14KS+IHwg4KS14KS+fOCklSDgpLV84KWN4KSo4KWHfOCksOCljeCkqHzgpJfgpLDgpY184KSo4KWN4KSkfOCkmyDgpaR84KSk4KS/4KSyfOCksOCkpOCljXzgpKTgpY3gpLB84KWH4KSVIHzgpK/gpYfgpJV84KWN4KSv4KWHfOCkv+CksuCkvnzgpLAg4KS4fOCliyDgpLh8IOCkuOCljXzgpK7gpL7gpKh84KSV4KWN4KS3fCDgpLXgpL984KS54KWB4KSofOCkviDgpLh8IOCkueClgXwg4KSbIHzgpLAg4KSbfOCljeCkpOCljXzgpLjgpK7gpL584KS44KWN4KS1fOClpCDgpKp8IOCkuOCkgnzgpKjgpYfgpJt84KWB4KSo4KWHfOCkueCksOClgXzgpKTgpKjgpY184KS14KSk4KSofOClhyDgpIV84KS/4KSo4KWHfOCliyDgpIV84KWN4KS14KSkfCDgpJXgpL584KWHIOCkm3zgpJfgpLDgpL98IOCksOCkvnzgpY3gpLAgfOCkpOCkvyB84KS+4KSV4KWLfCDgpJXgpYF84KS34KWN4KSffOCkqOCkviB84KS44KWN4KSkfOCklSDgpLh84KWB4KSo4KWIfOCkleClgeCkqHzgpJ/gpY3gpLB84KSy4KWHIHwg4KSo4KS/fOCkvuCkqCB84KSb4KWI4KSofCDgpJvgpYh84KWN4KSf4KWNfOCkvuCkt+CljXzgpLDgpL7gpLd84KSk4KS/4KSVfOCkm+ClpCB84KS+4KSw4KWNfOCkpOCkviB84KS/4KSkIHzgpKjgpYggfOCkviDgpIV8IOCkuOCkvnzgpL4g4KS1fOCksOClgSB8IOCkruCkvnwg4KSF4KSofOCkviDgpLB84KSw4KSk4KS+fOCksCDgpLB84KS54KSw4KWCfOClh+CkmyB84KS+IOCkqnzgpLDgpJXgpY184KWN4KSkIHwg4KSq4KSwfOCkpeCkviB8IOCksuCkvnzgpKrgpLDgpL984KSm4KWH4KS2fOCkuOCkleCli3wg4KSv4KS4fOCkruCkvuCknHzgpL7gpK7gpL584KWN4KSw4KS+fOCkv+CkteCkvnzgpL7gpLngpLB84KWLIOCkqnzgpY3gpK8gfOCkteCkvuCksHzgpKgg4KS4fOClpCDgpJV84KSo4KS/IHzgpY3gpLfgpL58IOCkpOCljXzgpKbgpY3gpKd84KSwIOCkuXzgpKTgpKXgpL58IOCkpOCkpXzgpK/gpLjgpY184KWN4KSv4KS4fOCksOClgCB84KSwIOCktXzgpKrgpKjgpL984KSw4KS/4KSofOCkguCksOCklXzgpLjgpILgpLB84KSt4KS+4KS1fOCliCDgpLV84KS44KSs4KWIfCDgpLjgpKx8IOCktuCkv3wg4KS44KS5fOCkpOCkvuCklXzgpYcg4KSwfOCkpCDgpLB84KSy4KS+4KSXfCDgpLjgpYF84KWN4KS34KSjfOCkpuCljeCkpnwg4KSF4KSqfOCliOCkqCB84KWLIOCktXzgpL/gpJXgpY184KS+4KS1IHzgpKfgpL7gpLB84KWN4KSv4KS+fOCljeCksOCkv3zgpL4g4KStfOCkj+CkleCli3zgpLAg4KSufOCkqCDgpIV84KWLIOCksnwg4KSJ4KS4fOCktuCkv+CklXzgpL7gpKTgpY184KS44KWN4KSlfOCkteCkvuCkuXzgpYLgpLDgpY184KS24KWN4KSvfOCkv+CkpOCljXzgpLDgpJXgpYt84KS+4KSw4KSVfOClgeCkpuCljXzgpKTgpYsgfOCljeCkpOCli3zgpL7gpIngpKh84KSV4KS+4KSofOCkv+Ckj+CklXzgpL4g4KSofCDgpKrgpKh84KSo4KWkIHzgpYjgpKjgpaR84KSV4KS+IHzgpYfgpJvgpaR8IOCkreClh3zgpLDgpY3gpK984KS44KSu4KWNfOCkpOCljeCkqnzgpLjgpL7gpK584KSw4KS/4KSvfOCkmuCkvuCksHzgpKjgpL/gpJx84KWB4KSoIHzgpJfgpL8gfOCkvuCkl+Ckv3zgpIngpLjgpJV8IOCkruCkpHwg4KSF4KStfOCkquClguCksHzgpLAg4KSkfCDgpLjgpJV84KS44KS+4KSwfOCksOCkvuCkp3zgpKrgpLDgpL584KSF4KSq4KSwfOClgeCkleCljXzgpJzgpJXgpYt8IOCkieCkqnzgpLDgpL4gfOCkvuCksOCkvnzgpY3gpLXgpL584KS14KS/4KSnfOCljeCkqCB84KS+IOCkpHzgpKgg4KSXfOCko+CkleCli3wg4KSq4KS+fCDgpKbgpL984KSVIOCksHzgpLAg4KSqfOCkheCkqOCljXzgpK3gpYfgpKZ84KS+4KSw4KSufOCliyDgpIZ8IOCkheCksHzgpJzgpL/gpJV84KS+4KSc4KS/fOCkv+CkryB84KS34KS+IHzgpL7gpJ8gfOCkrOCkvuCkn3wg4KSs4KS+fOCkvyDgpLB8IOCkm+ClpHzgpKTgpY3gpLV84KSkIOCkuHzgpLDgpYIgfOCkmyDgpLB84KSw4KSV4KS+fOCkteCkv+CklXzgpLAg4KSJfOCli+CklyB84KWN4KSm4KWHfOCksOCkv+CktXzgpLjgpJXgpL984KWIIOCkqnzgpLDgpKTgpL984KSF4KSo4KWBfCDgpIbgpLV84KSv4KWB4KSVfOCkviDgpJd84KSo4KSu4KS+fOCkr+Cli+Ckl3zgpJcg4KSXfOCklSDgpIV84KSm4KWN4KS1fOCljeCkpyB84KSw4KWB4KSmfCDgpKzgpL984KWkIOCkuHzgpIngpKjgpYd84KS+4KSo4KWNfOCkviDgpK584KS/4KSV4KWLfOCksOCljeCkpnzgpL7gpLDgpYB84KWN4KSk4KSwfOCliyDgpLl84KS54KS/4KSkfCDgpKbgpYd84KSw4KS/4KSVfOCkviDgpJV8IOCkhuCkp3zgpLDgpL7gpJx84KSw4KWN4KSufOCljeCkoyB84KSw4KWN4KSjfOCkvyDgpLV84KWN4KSv4KS1fOCkteCkv+CkmnzgpKzgpYggfOCkuOCkueCkv3zgpLDgpYvgpJx84KSw4KWN4KS4fOCkiCDgpIl84KWN4KSqIHzgpLDgpL7gpKR84KSo4KS/4KSVfOCkruCkv+CklXzgpJrgpY3gpJt84KWN4KSl4KS+fOCkteCkv+CktXzgpJXgpKTgpL584KSF4KSt4KS/fOCljeCkp+CkvicsXG4gICAgbWFnOiAnIOCkleClh3zgpJXgpYcgfOCkvuCksCB8IOCkueCkiHzgpJXgpL7gpLB84KSI4KWkIHzgpLngpIjgpaR84KS/4KSV4KS+fOClhyDgpIV84KSn4KS/4KSVfOCkheCkp+Ckv3wg4KSF4KSnfOCksCDgpLl84KWHIOCklXzgpJTgpLAgfCDgpJTgpLB84KS+IOCklXzgpYcg4KS4fOCkuOCkrCB8IOCkuOCkrHwg4KSV4KSwfOClh+CkgiB84KSl4KS+IHzgpK7gpYfgpIJ8IOCkruClh3zgpKTgpKXgpL58IOCkpOCkpXzgpL/gpJUgfCDgpLngpYt8IOCkuOCkrnzgpJXgpY3gpLd84KSo4KS+IHzgpKwg4KSVfOCksCDgpLh8IOCkuOCkgnzgpL4g4KS4fOCkleCksCB8IOCkreClgHzgpaQg4KS4fCDgpLjgpL58IOCkuOClh3wg4KSV4KS+fCDgpIXgpKp84KWN4KSw4KS+fOCkquCljeCksHwg4KSq4KWNfOCkuOClhyB84KSt4KWAIHwg4KSV4KWLfOCkpCDgpJV8IOCkquCksHzgpLDgpL4gfOCklSDgpLl84KSq4KSoIHzgpIXgpKrgpKh8IOCkuOCklXzgpK/gpL4gfOCkpOCkvyB84KSwIOCklXzgpYAg4KSVfCDgpK/gpL584KSV4KSw4KWHfCDgpJzgpL584KSw4KWHIHwg4KST4KSVfOCljeCkpCB84KS44KSVIHzgpKjgpYsgfOCkvuCkqCB84KSu4KS+4KSofOCkk+CkleCksHzgpL4g4KSqfOCkqCDgpJV84KWH4KSyIHwg4KSo4KS+fOClpCDgpJV84KSw4KSV4KWNfCDgpLjgpY184KS54KWAIHzgpLngpYvgpI98IOCkj+CklXzgpKrgpLAgfOCkpuClgCB84KSf4KWN4KSwfOCkpOCkviB84KS14KWN4KSvfOCkueCkiCB8IOCktuCkvnzgpYcg4KSJfCDgpKbgpYd84KSk4KWN4KSwfOCkvuCkpuClgHwg4KSw4KS+fCDgpLngpYB84KSV4KS+4KSofOCkv+CkpCB84KSuIOCklXzgpLIg4KScfOCkvuCkriB84KWAIOCkuHzgpYcg4KStfOCkqCDgpLh84KSu4KS+4KScfOCkt+CljeCkn3zgpLfgpL4gfCDgpLLgpYd84KSVIOCkuHzgpKzgpYcgfOCkteClhyB84KS+4KS14KWHfOCkruCkv+CksnzgpLAg4KSufOCljeCkryB84KS+IOCkuXzgpLLgpL4gfOCkquCljeCkpHzgpKjgpYLgpKh84KS+4KSo4KWCfOCknOCkviB84KWH4KSV4KSwfOCljeCkt+CkvnzgpY3gpLDgpKR84KSC4KSk4KWNfOCksCDgpJR84KWL4KSIIHzgpJXgpYvgpIh84KWN4KSf4KWNfOCkvuCkt+CljXzgpLDgpL7gpLd8IOCkruCkvnzgpLDgpYsgfCDgpJzgpYd84KSV4KSw4KS+fOCli+CkjyB84KS+4KSq4KWNfOCksOCkvuCkqnzgpLjgpK7gpL584KWC4KSoIHzgpYsg4KS4fOCkuOCljeCktXzgpY3gpKTgpL984KS44KS+4KSufOCli+CkqOCli3zgpJXgpYvgpKh8IOCkteCljXzgpLAg4KSFfOCljeCkriB8IOCkteCkv3wg4KS44KS5fOClhyDgpK584KSV4KWN4KSkfOCkr+Cli+Ckl3zgpLAg4KS1fOCkleCkvuCkrnzgpLIg4KS5fCDgpKjgpL984KSm4KWH4KS2fOCkquClguCksHzgpLXgpL7gpLB8IOCkhyB84KSC4KSw4KSVfOCkuOCkguCksHzgpI8g4KSVfOCksCDgpKp8IOCkuOClgXzgpKTgpILgpKR84KS14KSk4KSCfOCljeCkteCkpHzgpL4g4KSufOCktSDgpJV84KWHIOCktXzgpL7gpKUgfOCkuOCkvuCkpXwg4KSm4KWLfOCkueCli+CkrHwg4KSq4KS+fOCliyDgpJV84KWHIOCkrHzgpYvgpJcgfCDgpIngpKp84KS44KWN4KSkfOCkquCksOCkv3zgpKgg4KSqfOClhyDgpKR84KWN4KSk4KSwfOCksuClh+CksnzgpYcg4KSTfOCkmuCkvuCkuXwg4KSa4KS+fOCkryDgpJV84KS14KS+IHzgpYfgpLYgfOCkryDgpLh84KSoIOCkuXzgpLfgpKMgfOCkviDgpKx84KWkIOCkpHzgpI/gpJUgfOCkj+CksiB84KWA4KSvIHzgpJXgpYfgpJV84KWHIOCkuXzgpLAg4KSGfOCkvyDgpJV84KS44KWN4KSlfOCknOCkv+CklXzgpL7gpJzgpL984KS+4KSu4KS+fOCksOClgOCkr3zgpY3gpLDgpYB84KSk4KS/4KSVfOCkvuCkpOCkv3wg4KSs4KS/fOCkmuCkvuCksHzgpYcg4KSGfOCkvuCkuCB8IOCkieCkmnzgpL4g4KSkfOCkr+CkleCljXzgpY3gpK/gpJV84KS/4KSyIHzgpK7gpK8gfOCkuOCkruCkr3zgpLbgpL7gpKZ84KSq4KSv4KWLfOCkieCkquCkr3zgpYcg4KSWfOCksOCkv+CktXwg4KSq4KWCfOClhyDgpLJ84KWHIOCkmnzgpYzgpKjgpYt84KSV4KWM4KSofCDgpJXgpYx84KSCIOCklXzgpLjgpILgpJd84KSoIOCkpnzgpIIg4KS4fOCkoyDgpKp84KWN4KS34KSjfOCksCDgpKh84KWHIOCkqHzgpYsg4KStfOCkleCksOCli3zgpL4g4KSUfOCksOCkpOCkvnzgpL7gpLUgfOCkreCkvuCktXzgpJUg4KSUfOCksOCljeCkrnzgpYvgpLjgpLB84KSm4KWL4KS4fOCkoyDgpJV84KWHIOCkqnzgpKgg4KSUfOCkrCDgpLl84KS/4KSV4KWNfOCktuCkv+CklXwg4KS24KS/fOCkvuCkrOClh3zgpKjgpL/gpK984KSa4KS/4KSkfOCkieCkmuCkv3zgpL/gpKTgpY184KSXIOCklXzgpYfgpaQgfOCkpCDgpLh84KWAIOCktnzgpIIg4KS2fOCkj+CkleCksHzgpaQg4KSPfOCkpOCkqCB8IOCkkyB84KSw4KWAIHzgpY3gpLAgfOCknOClhyB84KSVIOCklXwg4KS44KWAfOCkuOCkqCB84KS/4KS14KS+fCDgpIXgpKh84KWC4KSw4KS+fCDgpKzgpJp84KSP4KWkIHwg4KSs4KWHfOCkpCDgpLl8IOCkpOCklXwg4KSu4KS/fOCkp+CkvuCksHzgpKXgpLXgpL584KSF4KSl4KS1fCDgpIXgpKV84KS/4KSy4KS+fOCljeCkteCkvnzgpL8g4KSufCDgpIbgpKZ84KSo4KWHIHzgpJXgpI/gpLJ8IOCkleCkj3zgpY3gpK/gpL4nXG4gIH1cbn1cbiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgYGJ1aWxkLmpzYC5cbi8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUmVnRXhwPn0gKi9cbmV4cG9ydCBjb25zdCBleHByZXNzaW9ucyA9IHtcbiAgY21uOiAvW1xcdTJFODAtXFx1MkU5OVxcdTJFOUItXFx1MkVGM1xcdTJGMDAtXFx1MkZENVxcdTMwMDVcXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzOC1cXHUzMDNCXFx1MzQwMC1cXHU0REJGXFx1NEUwMC1cXHU5RkZGXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XXxcXHVEODFCW1xcdURGRTJcXHVERkUzXFx1REZGMFxcdURGRjFdfFtcXHVEODQwLVxcdUQ4NjhcXHVEODZBLVxcdUQ4NkNcXHVEODZGLVxcdUQ4NzJcXHVEODc0LVxcdUQ4NzlcXHVEODgwLVxcdUQ4ODNcXHVEODg1LVxcdUQ4ODddW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFREZcXHVERjAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM5XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRFxcdURDMjAtXFx1REZGRl18XFx1RDg3M1tcXHVEQzAwLVxcdURFQTFcXHVERUIwLVxcdURGRkZdfFxcdUQ4N0FbXFx1REMwMC1cXHVERkUwXXxcXHVEODdFW1xcdURDMDAtXFx1REUxRF18XFx1RDg4NFtcXHVEQzAwLVxcdURGNEFcXHVERjUwLVxcdURGRkZdfFxcdUQ4ODhbXFx1REMwMC1cXHVERkFGXS9nLFxuICBMYXRpbjpcbiAgICAvW0EtWmEtelxcdTAwQUFcXHUwMEJBXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkI4XFx1MDJFMC1cXHUwMkU0XFx1MUQwMC1cXHUxRDI1XFx1MUQyQy1cXHUxRDVDXFx1MUQ2Mi1cXHUxRDY1XFx1MUQ2Qi1cXHUxRDc3XFx1MUQ3OS1cXHUxREJFXFx1MUUwMC1cXHUxRUZGXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTJBXFx1MjEyQlxcdTIxMzJcXHUyMTRFXFx1MjE2MC1cXHUyMTg4XFx1MkM2MC1cXHUyQzdGXFx1QTcyMi1cXHVBNzg3XFx1QTc4Qi1cXHVBN0NBXFx1QTdEMFxcdUE3RDFcXHVBN0QzXFx1QTdENS1cXHVBN0Q5XFx1QTdGMi1cXHVBN0ZGXFx1QUIzMC1cXHVBQjVBXFx1QUI1Qy1cXHVBQjY0XFx1QUI2Ni1cXHVBQjY5XFx1RkIwMC1cXHVGQjA2XFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXXxcXHVEODAxW1xcdURGODAtXFx1REY4NVxcdURGODctXFx1REZCMFxcdURGQjItXFx1REZCQV18XFx1RDgzN1tcXHVERjAwLVxcdURGMUVcXHVERjI1LVxcdURGMkFdL2csXG4gIEN5cmlsbGljOlxuICAgIC9bXFx1MDQwMC1cXHUwNDg0XFx1MDQ4Ny1cXHUwNTJGXFx1MUM4MC1cXHUxQzg4XFx1MUQyQlxcdTFENzhcXHUyREUwLVxcdTJERkZcXHVBNjQwLVxcdUE2OUZcXHVGRTJFXFx1RkUyRl18XFx1RDgzOFtcXHVEQzMwLVxcdURDNkRcXHVEQzhGXS9nLFxuICBBcmFiaWM6XG4gICAgL1tcXHUwNjAwLVxcdTA2MDRcXHUwNjA2LVxcdTA2MEJcXHUwNjBELVxcdTA2MUFcXHUwNjFDLVxcdTA2MUVcXHUwNjIwLVxcdTA2M0ZcXHUwNjQxLVxcdTA2NEFcXHUwNjU2LVxcdTA2NkZcXHUwNjcxLVxcdTA2RENcXHUwNkRFLVxcdTA2RkZcXHUwNzUwLVxcdTA3N0ZcXHUwODcwLVxcdTA4OEVcXHUwODkwXFx1MDg5MVxcdTA4OTgtXFx1MDhFMVxcdTA4RTMtXFx1MDhGRlxcdUZCNTAtXFx1RkJDMlxcdUZCRDMtXFx1RkQzRFxcdUZENDAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZEQ0ZcXHVGREYwLVxcdUZERkZcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNdfFxcdUQ4MDNbXFx1REU2MC1cXHVERTdFXFx1REVGRC1cXHVERUZGXXxcXHVEODNCW1xcdURFMDAtXFx1REUwM1xcdURFMDUtXFx1REUxRlxcdURFMjFcXHVERTIyXFx1REUyNFxcdURFMjdcXHVERTI5LVxcdURFMzJcXHVERTM0LVxcdURFMzdcXHVERTM5XFx1REUzQlxcdURFNDJcXHVERTQ3XFx1REU0OVxcdURFNEJcXHVERTRELVxcdURFNEZcXHVERTUxXFx1REU1MlxcdURFNTRcXHVERTU3XFx1REU1OVxcdURFNUJcXHVERTVEXFx1REU1RlxcdURFNjFcXHVERTYyXFx1REU2NFxcdURFNjctXFx1REU2QVxcdURFNkMtXFx1REU3MlxcdURFNzQtXFx1REU3N1xcdURFNzktXFx1REU3Q1xcdURFN0VcXHVERTgwLVxcdURFODlcXHVERThCLVxcdURFOUJcXHVERUExLVxcdURFQTNcXHVERUE1LVxcdURFQTlcXHVERUFCLVxcdURFQkJcXHVERUYwXFx1REVGMV0vZyxcbiAgYmVuOiAvW1xcdTA5ODAtXFx1MDk4M1xcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkMtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNFXFx1MDlEN1xcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUzXFx1MDlFNi1cXHUwOUZFXS9nLFxuICBEZXZhbmFnYXJpOlxuICAgIC9bXFx1MDkwMC1cXHUwOTUwXFx1MDk1NS1cXHUwOTYzXFx1MDk2Ni1cXHUwOTdGXFx1QThFMC1cXHVBOEZGXXxcXHVEODA2W1xcdURGMDAtXFx1REYwOV0vZyxcbiAganBuOiAvW1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5Rl18XFx1RDgyQ1tcXHVEQzAxLVxcdUREMUZcXHVERDMyXFx1REQ1MC1cXHVERDUyXXxcXHVEODNDXFx1REUwMHxbXFx1MzBBMS1cXHUzMEZBXFx1MzBGRC1cXHUzMEZGXFx1MzFGMC1cXHUzMUZGXFx1MzJEMC1cXHUzMkZFXFx1MzMwMC1cXHUzMzU3XFx1RkY2Ni1cXHVGRjZGXFx1RkY3MS1cXHVGRjlEXXxcXHVEODJCW1xcdURGRjAtXFx1REZGM1xcdURGRjUtXFx1REZGQlxcdURGRkRcXHVERkZFXXxcXHVEODJDW1xcdURDMDBcXHVERDIwLVxcdUREMjJcXHVERDU1XFx1REQ2NC1cXHVERDY3XXxbXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkFGXS9nLFxuICBqYXY6IC9bXFx1QTk4MC1cXHVBOUNEXFx1QTlEMC1cXHVBOUQ5XFx1QTlERVxcdUE5REZdL2csXG4gIGtvcjogL1tcXHUxMTAwLVxcdTExRkZcXHUzMDJFXFx1MzAyRlxcdTMxMzEtXFx1MzE4RVxcdTMyMDAtXFx1MzIxRVxcdTMyNjAtXFx1MzI3RVxcdUE5NjAtXFx1QTk3Q1xcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUZGQTAtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vZyxcbiAgdGVsOiAvW1xcdTBDMDAtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzOVxcdTBDM0MtXFx1MEM0NFxcdTBDNDYtXFx1MEM0OFxcdTBDNEEtXFx1MEM0RFxcdTBDNTVcXHUwQzU2XFx1MEM1OC1cXHUwQzVBXFx1MEM1RFxcdTBDNjAtXFx1MEM2M1xcdTBDNjYtXFx1MEM2RlxcdTBDNzctXFx1MEM3Rl0vZyxcbiAgdGFtOiAvW1xcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDBcXHUwQkQ3XFx1MEJFNi1cXHUwQkZBXXxcXHVEODA3W1xcdURGQzAtXFx1REZGMVxcdURGRkZdL2csXG4gIGd1ajogL1tcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRjFcXHUwQUY5LVxcdTBBRkZdL2csXG4gIGthbjogL1tcXHUwQzgwLVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDRERcXHUwQ0RFXFx1MENFMC1cXHUwQ0UzXFx1MENFNi1cXHUwQ0VGXFx1MENGMS1cXHUwQ0YzXS9nLFxuICBtYWw6IC9bXFx1MEQwMC1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDQ0XFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDRGXFx1MEQ1NC1cXHUwRDYzXFx1MEQ2Ni1cXHUwRDdGXS9nLFxuICBteWE6IC9bXFx1MTAwMC1cXHUxMDlGXFx1QTlFMC1cXHVBOUZFXFx1QUE2MC1cXHVBQTdGXS9nLFxuICBwYW46IC9bXFx1MEEwMS1cXHUwQTAzXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTNDXFx1MEEzRS1cXHUwQTQyXFx1MEE0N1xcdTBBNDhcXHUwQTRCLVxcdTBBNERcXHUwQTUxXFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNjYtXFx1MEE3Nl0vZyxcbiAgYW1oOiAvW1xcdTEyMDAtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RC1cXHUxMzdDXFx1MTM4MC1cXHUxMzk5XFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXXxcXHVEODM5W1xcdURGRTAtXFx1REZFNlxcdURGRTgtXFx1REZFQlxcdURGRURcXHVERkVFXFx1REZGMC1cXHVERkZFXS9nLFxuICB0aGE6IC9bXFx1MEUwMS1cXHUwRTNBXFx1MEU0MC1cXHUwRTVCXS9nLFxuICBzaW46IC9bXFx1MEQ4MS1cXHUwRDgzXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBEQ0FcXHUwRENGLVxcdTBERDRcXHUwREQ2XFx1MEREOC1cXHUwRERGXFx1MERFNi1cXHUwREVGXFx1MERGMi1cXHUwREY0XXxcXHVEODA0W1xcdURERTEtXFx1RERGNF0vZyxcbiAgZWxsOiAvW1xcdTAzNzAtXFx1MDM3M1xcdTAzNzUtXFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzN0ZcXHUwMzg0XFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRTFcXHUwM0YwLVxcdTAzRkZcXHUxRDI2LVxcdTFEMkFcXHUxRDVELVxcdTFENjFcXHUxRDY2LVxcdTFENkFcXHUxREJGXFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkM0XFx1MUZDNi1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZERC1cXHUxRkVGXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZFXFx1MjEyNlxcdUFCNjVdfFxcdUQ4MDBbXFx1REQ0MC1cXHVERDhFXFx1RERBMF18XFx1RDgzNFtcXHVERTAwLVxcdURFNDVdL2dcbn1cbiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgYGJ1aWxkLmpzYFxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd0cmlncmFtLXV0aWxzJykuVHJpZ3JhbVR1cGxlfSBUcmlncmFtVHVwbGVcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IFtvbmx5XVxuICogICBMYW5ndWFnZXMgdG8gYWxsb3cuXG4gKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IFtpZ25vcmVdXG4gKiAgIExhbmd1YWdlcyB0byBpZ25vcmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21pbkxlbmd0aD0xMF1cbiAqICAgTWluaW11bSBsZW5ndGggdG8gYWNjZXB0LlxuICovXG5cbi8qIExvYWQgYHRyaWdyYW0tdXRpbHNgLiAqL1xuaW1wb3J0IHthc1R1cGxlc30gZnJvbSAndHJpZ3JhbS11dGlscydcbi8qIExvYWQgYGV4cHJlc3Npb25zYCAocmVndWxhciBleHByZXNzaW9ucyBtYXRjaGluZ1xuICogc2NyaXB0cykuICovXG5pbXBvcnQge2V4cHJlc3Npb25zfSBmcm9tICcuL2V4cHJlc3Npb25zLmpzJ1xuLyogTG9hZCBgZGF0YWAgKHRyaWdyYW0gaW5mb3JtYXRpb24gcGVyIGxhbmd1YWdlLFxuICogcGVyIHNjcmlwdCkuICovXG5pbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YS5qcydcblxuLyogTWF4aW11bSBzYW1wbGUgbGVuZ3RoLiAqL1xuY29uc3QgTUFYX0xFTkdUSCA9IDIwNDhcblxuLyogTWluaW11bSBzYW1wbGUgbGVuZ3RoLiAqL1xuY29uc3QgTUlOX0xFTkdUSCA9IDEwXG5cbi8qIFRoZSBtYXhpbXVtIGRpc3RhbmNlIHRvIGFkZCB3aGVuIGEgZ2l2ZW4gdHJpZ3JhbSBkb2VzXG4gKiBub3QgZXhpc3QgaW4gYSB0cmlncmFtIGRpY3Rpb25hcnkuICovXG5jb25zdCBNQVhfRElGRkVSRU5DRSA9IDMwMFxuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKiBDb25zdHJ1Y3QgdHJpZ3JhbSBkaWN0aW9uYXJpZXMuICovXG5cbi8qKiBAdHlwZSB7c3RyaW5nfSAqL1xubGV0IHNjcmlwdFxuXG4vKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIG51bWJlcj4+Pn0gKi9cbmNvbnN0IG51bWVyaWNEYXRhID0ge31cblxuZm9yIChzY3JpcHQgaW4gZGF0YSkge1xuICBpZiAob3duLmNhbGwoZGF0YSwgc2NyaXB0KSkge1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IGRhdGFbc2NyaXB0XVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBuYW1lXG5cbiAgICBudW1lcmljRGF0YVtzY3JpcHRdID0ge31cblxuICAgIGZvciAobmFtZSBpbiBsYW5ndWFnZXMpIHtcbiAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZXMsIG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gbGFuZ3VhZ2VzW25hbWVdLnNwbGl0KCd8JylcbiAgICAgICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSAqL1xuICAgICAgICBjb25zdCB0cmlncmFtcyA9IHt9XG4gICAgICAgIGxldCB3ZWlnaHQgPSBtb2RlbC5sZW5ndGhcblxuICAgICAgICB3aGlsZSAod2VpZ2h0LS0pIHtcbiAgICAgICAgICB0cmlncmFtc1ttb2RlbFt3ZWlnaHRdXSA9IHdlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgbnVtZXJpY0RhdGFbc2NyaXB0XVtuYW1lXSA9IHRyaWdyYW1zXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBtb3N0IHByb2JhYmxlIGxhbmd1YWdlIGZvciB0aGUgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqICAgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybiB7c3RyaW5nfVxuICogIFRoZSBtb3N0IHByb2JhYmxlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhbmModmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZyYW5jQWxsKHZhbHVlLCBvcHRpb25zKVswXVswXVxufVxuXG4vKipcbiAqIEdldCBhIGxpc3Qgb2YgcHJvYmFibGUgbGFuZ3VhZ2VzIHRoZSBnaXZlbiB2YWx1ZSBpc1xuICogd3JpdHRlbiBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxuICogICBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheTxUcmlncmFtVHVwbGU+fVxuICogICBBbiBhcnJheSBjb250YWluaW5nIGxhbmd1YWdl4oCUZGlzdGFuY2UgdHVwbGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhbmNBbGwodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGB3aGl0ZWxpc3RgIGlzIGZyb20gbG9uZyBhZ28uXG4gIGNvbnN0IG9ubHkgPSBbLi4uKG9wdGlvbnMud2hpdGVsaXN0IHx8IFtdKSwgLi4uKG9wdGlvbnMub25seSB8fCBbXSldXG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYGJsYWNrbGlzdGAgaXMgZnJvbSBsb25nIGFnby5cbiAgY29uc3QgaWdub3JlID0gWy4uLihvcHRpb25zLmJsYWNrbGlzdCB8fCBbXSksIC4uLihvcHRpb25zLmlnbm9yZSB8fCBbXSldXG4gIGNvbnN0IG1pbkxlbmd0aCA9XG4gICAgb3B0aW9ucy5taW5MZW5ndGggIT09IG51bGwgJiYgb3B0aW9ucy5taW5MZW5ndGggIT09IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLm1pbkxlbmd0aFxuICAgICAgOiBNSU5fTEVOR1RIXG5cbiAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kKClcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgTUFYX0xFTkdUSClcblxuICAvKiBHZXQgdGhlIHNjcmlwdCB3aGljaCBjaGFyYWN0ZXJzIG9jY3VyIHRoZSBtb3N0XG4gICAqIGluIGB2YWx1ZWAuICovXG4gIGNvbnN0IHNjcmlwdCA9IGdldFRvcFNjcmlwdCh2YWx1ZSwgZXhwcmVzc2lvbnMpXG5cbiAgLyogT25lIGxhbmd1YWdlcyBleGlzdHMgZm9yIHRoZSBtb3N0LXVzZWQgc2NyaXB0LiAqL1xuICBpZiAoIXNjcmlwdFswXSB8fCAhKHNjcmlwdFswXSBpbiBudW1lcmljRGF0YSkpIHtcbiAgICAvKiBJZiBubyBtYXRjaGVzIG9jY3VyZWQsIHN1Y2ggYXMgYSBkaWdpdCBvbmx5IHN0cmluZyxcbiAgICAgKiBvciBiZWNhdXNlIHRoZSBsYW5ndWFnZSBpcyBpZ25vcmVkLCBleGl0IHdpdGggYHVuZGAuICovXG4gICAgaWYgKCFzY3JpcHRbMF0gfHwgc2NyaXB0WzFdID09PSAwIHx8ICFhbGxvdyhzY3JpcHRbMF0sIG9ubHksIGlnbm9yZSkpIHtcbiAgICAgIHJldHVybiB1bmQoKVxuICAgIH1cblxuICAgIHJldHVybiBzaW5nbGVMYW5ndWFnZVR1cGxlcyhzY3JpcHRbMF0pXG4gIH1cblxuICAvKiBHZXQgYWxsIGRpc3RhbmNlcyBmb3IgYSBnaXZlbiBzY3JpcHQsIGFuZFxuICAgKiBub3JtYWxpemUgdGhlIGRpc3RhbmNlIHZhbHVlcy4gKi9cbiAgcmV0dXJuIG5vcm1hbGl6ZShcbiAgICB2YWx1ZSxcbiAgICBnZXREaXN0YW5jZXMoYXNUdXBsZXModmFsdWUpLCBudW1lcmljRGF0YVtzY3JpcHRbMF1dLCBvbmx5LCBpZ25vcmUpXG4gIClcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGRpZmZlcmVuY2UgZm9yIGVhY2ggdHVwbGUgaW5cbiAqIGBkaXN0YW5jZXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBub3JtYWxpemUuXG4gKiBAcGFyYW0ge0FycmF5PFRyaWdyYW1UdXBsZT59IGRpc3RhbmNlc1xuICogICBMaXN0IG9mIGRpc3RhbmNlcy5cbiAqIEByZXR1cm4ge0FycmF5PFRyaWdyYW1UdXBsZT59XG4gKiAgIE5vcm1hbGl6ZWQgZGlzdGFuY2VzLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIGRpc3RhbmNlcykge1xuICBjb25zdCBtaW4gPSBkaXN0YW5jZXNbMF1bMV1cbiAgY29uc3QgbWF4ID0gdmFsdWUubGVuZ3RoICogTUFYX0RJRkZFUkVOQ0UgLSBtaW5cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGRpc3RhbmNlcy5sZW5ndGgpIHtcbiAgICBkaXN0YW5jZXNbaW5kZXhdWzFdID0gMSAtIChkaXN0YW5jZXNbaW5kZXhdWzFdIC0gbWluKSAvIG1heCB8fCAwXG4gIH1cblxuICByZXR1cm4gZGlzdGFuY2VzXG59XG5cbi8qKlxuICogRnJvbSBgc2NyaXB0c2AsIGdldCB0aGUgbW9zdCBvY2N1cnJpbmcgZXhwcmVzc2lvbiBmb3JcbiAqIGB2YWx1ZWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBSZWdFeHA+fSBzY3JpcHRzXG4gKiAgIFRvcC1TY3JpcHRzLlxuICogQHJldHVybiB7W3N0cmluZ3x1bmRlZmluZWQsIG51bWJlcl19XG4gKiAgIFRvcCBzY3JpcHQgYW5kIGl0cyBvY2N1cnJlbmNlIHBlcmNlbnRhZ2UuXG4gKi9cbmZ1bmN0aW9uIGdldFRvcFNjcmlwdCh2YWx1ZSwgc2NyaXB0cykge1xuICBsZXQgdG9wQ291bnQgPSAtMVxuICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXG4gIGxldCB0b3BTY3JpcHRcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCBzY3JpcHRcblxuICBmb3IgKHNjcmlwdCBpbiBzY3JpcHRzKSB7XG4gICAgaWYgKG93bi5jYWxsKHNjcmlwdHMsIHNjcmlwdCkpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gZ2V0T2NjdXJyZW5jZSh2YWx1ZSwgc2NyaXB0c1tzY3JpcHRdKVxuXG4gICAgICBpZiAoY291bnQgPiB0b3BDb3VudCkge1xuICAgICAgICB0b3BDb3VudCA9IGNvdW50XG4gICAgICAgIHRvcFNjcmlwdCA9IHNjcmlwdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbdG9wU2NyaXB0LCB0b3BDb3VudF1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9jY3VycmVuY2UgcmF0aW8gb2YgYGV4cHJlc3Npb25gIGZvciBgdmFsdWVgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7UmVnRXhwfSBleHByZXNzaW9uXG4gKiAgIENvZGUtcG9pbnQgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgRmxvYXQgYmV0d2VlbiAwIGFuZCAxLlxuICovXG5mdW5jdGlvbiBnZXRPY2N1cnJlbmNlKHZhbHVlLCBleHByZXNzaW9uKSB7XG4gIGNvbnN0IGNvdW50ID0gdmFsdWUubWF0Y2goZXhwcmVzc2lvbilcblxuICByZXR1cm4gKGNvdW50ID8gY291bnQubGVuZ3RoIDogMCkgLyB2YWx1ZS5sZW5ndGggfHwgMFxufVxuXG4vKipcbiAqIEdldCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhbiBhcnJheSBvZiB0cmlncmFt4oCUY291bnRcbiAqIHR1cGxlcywgYW5kIG11bHRpcGxlIHRyaWdyYW0gZGljdGlvbmFyaWVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8VHJpZ3JhbVR1cGxlPn0gdHJpZ3JhbXNcbiAqICAgQW4gYXJyYXkgY29udGFpbmluZyB0cmlncmFt4oCUY291bnQgdHVwbGVzLlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pn0gbGFuZ3VhZ2VzXG4gKiAgIE11bHRpcGxlIHRyaWdyYW1zIHRvIHRlc3QgYWdhaW5zdC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb25seVxuICogICBBbGxvd2VkIGxhbmd1YWdlczsgaWYgbm9uLWVtcHR5LCBvbmx5IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUga2VwdC5cbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlXG4gKiAgIERpc2FsbG93ZWQgbGFuZ3VhZ2VzOyBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtBcnJheTxUcmlncmFtVHVwbGU+fSBBbiBhcnJheVxuICogICBjb250YWluaW5nIGxhbmd1YWdl4oCUZGlzdGFuY2UgdHVwbGVzLlxuICovXG5mdW5jdGlvbiBnZXREaXN0YW5jZXModHJpZ3JhbXMsIGxhbmd1YWdlcywgb25seSwgaWdub3JlKSB7XG4gIGxhbmd1YWdlcyA9IGZpbHRlckxhbmd1YWdlcyhsYW5ndWFnZXMsIG9ubHksIGlnbm9yZSlcblxuICAvKiogQHR5cGUge0FycmF5PFRyaWdyYW1UdXBsZT59ICovXG4gIGNvbnN0IGRpc3RhbmNlcyA9IFtdXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQgbGFuZ3VhZ2VcblxuICBpZiAobGFuZ3VhZ2VzKSB7XG4gICAgZm9yIChsYW5ndWFnZSBpbiBsYW5ndWFnZXMpIHtcbiAgICAgIGlmIChvd24uY2FsbChsYW5ndWFnZXMsIGxhbmd1YWdlKSkge1xuICAgICAgICBkaXN0YW5jZXMucHVzaChbbGFuZ3VhZ2UsIGdldERpc3RhbmNlKHRyaWdyYW1zLCBsYW5ndWFnZXNbbGFuZ3VhZ2VdKV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3RhbmNlcy5sZW5ndGggPT09IDAgPyB1bmQoKSA6IGRpc3RhbmNlcy5zb3J0KHNvcnQpXG59XG5cbi8qKlxuICogR2V0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGFuIGFycmF5IG9mIHRyaWdyYW3igJRjb3VudFxuICogdHVwbGVzLCBhbmQgYSBsYW5ndWFnZSBkaWN0aW9uYXJ5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8VHJpZ3JhbVR1cGxlPn0gdHJpZ3JhbXNcbiAqICAgQW4gYXJyYXkgY29udGFpbmluZyB0cmlncmFt4oCUY291bnQgdHVwbGVzLlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSBtb2RlbFxuICogICBPYmplY3QgY29udGFpbmluZyB3ZWlnaHRlZCB0cmlncmFtcy5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqL1xuZnVuY3Rpb24gZ2V0RGlzdGFuY2UodHJpZ3JhbXMsIG1vZGVsKSB7XG4gIGxldCBkaXN0YW5jZSA9IDBcbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRyaWdyYW1zLmxlbmd0aCkge1xuICAgIGNvbnN0IHRyaWdyYW0gPSB0cmlncmFtc1tpbmRleF1cbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1BWF9ESUZGRVJFTkNFXG5cbiAgICBpZiAodHJpZ3JhbVswXSBpbiBtb2RlbCkge1xuICAgICAgZGlmZmVyZW5jZSA9IHRyaWdyYW1bMV0gLSBtb2RlbFt0cmlncmFtWzBdXSAtIDFcblxuICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG4gICAgICAgIGRpZmZlcmVuY2UgPSAtZGlmZmVyZW5jZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3RhbmNlICs9IGRpZmZlcmVuY2VcbiAgfVxuXG4gIHJldHVybiBkaXN0YW5jZVxufVxuXG4vKipcbiAqIEZpbHRlciBgbGFuZ3VhZ2VzYCBieSByZW1vdmluZyBsYW5ndWFnZXMgaW5cbiAqIGBpZ25vcmVgLCBvciBpbmNsdWRpbmcgbGFuZ3VhZ2VzIGluIGBvbmx5YC5cbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIG51bWJlcj4+fSBsYW5ndWFnZXNcbiAqICAgTGFuZ3VhZ2VzIHRvIGZpbHRlclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvbmx5XG4gKiAgIEFsbG93ZWQgbGFuZ3VhZ2VzOyBpZiBub24tZW1wdHksIG9ubHkgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBrZXB0LlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVcbiAqICAgRGlzYWxsb3dlZCBsYW5ndWFnZXM7IGluY2x1ZGVkIGxhbmd1YWdlcyBhcmUgaWdub3JlZC5cbiAqIEByZXR1cm4ge1JlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIG51bWJlcj4+fVxuICogICBGaWx0ZXJlZCBhcnJheSBvZiBsYW5ndWFnZXMuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlckxhbmd1YWdlcyhsYW5ndWFnZXMsIG9ubHksIGlnbm9yZSkge1xuICBpZiAob25seS5sZW5ndGggPT09IDAgJiYgaWdub3JlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsYW5ndWFnZXNcbiAgfVxuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgbnVtYmVyPj59ICovXG4gIGNvbnN0IGZpbHRlcmVkTGFuZ3VhZ2VzID0ge31cbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCBsYW5ndWFnZVxuXG4gIGZvciAobGFuZ3VhZ2UgaW4gbGFuZ3VhZ2VzKSB7XG4gICAgaWYgKGFsbG93KGxhbmd1YWdlLCBvbmx5LCBpZ25vcmUpKSB7XG4gICAgICBmaWx0ZXJlZExhbmd1YWdlc1tsYW5ndWFnZV0gPSBsYW5ndWFnZXNbbGFuZ3VhZ2VdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkTGFuZ3VhZ2VzXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYGxhbmd1YWdlYCBjYW4gbWF0Y2ggYWNjb3JkaW5nIHRvIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICogICBMYW5ndWFnZXMgdG8gZmlsdGVyXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9ubHlcbiAqICAgQWxsb3dlZCBsYW5ndWFnZXM7IGlmIG5vbi1lbXB0eSwgb25seSBpbmNsdWRlZCBsYW5ndWFnZXMgYXJlIGtlcHQuXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVxuICogICBEaXNhbGxvd2VkIGxhbmd1YWdlczsgaW5jbHVkZWQgbGFuZ3VhZ2VzIGFyZSBpZ25vcmVkLlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgbGFuZ3VhZ2VgIGNhbiBtYXRjaFxuICovXG5mdW5jdGlvbiBhbGxvdyhsYW5ndWFnZSwgb25seSwgaWdub3JlKSB7XG4gIGlmIChvbmx5Lmxlbmd0aCA9PT0gMCAmJiBpZ25vcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgKG9ubHkubGVuZ3RoID09PSAwIHx8IG9ubHkuaW5jbHVkZXMobGFuZ3VhZ2UpKSAmJiAhaWdub3JlLmluY2x1ZGVzKGxhbmd1YWdlKVxuICApXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc2luZ2xlIGB1bmRgIHR1cGxlLlxuICovXG5mdW5jdGlvbiB1bmQoKSB7XG4gIHJldHVybiBzaW5nbGVMYW5ndWFnZVR1cGxlcygndW5kJylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzaW5nbGUgdHVwbGUgYXMgYSBsaXN0IG9mIHR1cGxlcyBmcm9tIGEgZ2l2ZW4gbGFuZ3VhZ2UgY29kZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqIEByZXR1cm5zIHtBcnJheTxUcmlncmFtVHVwbGU+fVxuICovXG5mdW5jdGlvbiBzaW5nbGVMYW5ndWFnZVR1cGxlcyhsYW5ndWFnZSkge1xuICByZXR1cm4gW1tsYW5ndWFnZSwgMV1dXG59XG5cbi8qKlxuICogRGVlcCByZWd1bGFyIHNvcnQgb24gdGhlIG51bWJlciBhdCBgMWAgaW4gYm90aCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7VHJpZ3JhbVR1cGxlfSBhXG4gKiBAcGFyYW0ge1RyaWdyYW1UdXBsZX0gYlxuICovXG5mdW5jdGlvbiBzb3J0KGEsIGIpIHtcbiAgcmV0dXJuIGFbMV0gLSBiWzFdXG59XG4iLCJleHBvcnQgY29uc3QgYmlncmFtID0gbkdyYW0oMilcbmV4cG9ydCBjb25zdCB0cmlncmFtID0gbkdyYW0oMylcblxuLyoqXG4gKiBGYWN0b3J5IHJldHVybmluZyBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSB2YWx1ZSBzdHJpbmcgdG8gbi1ncmFtcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICovXG5leHBvcnQgZnVuY3Rpb24gbkdyYW0obikge1xuICBpZiAoXG4gICAgdHlwZW9mIG4gIT09ICdudW1iZXInIHx8XG4gICAgTnVtYmVyLmlzTmFOKG4pIHx8XG4gICAgbiA8IDEgfHxcbiAgICBuID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG4gKyAnYCBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCBmb3IgYG4tZ3JhbWAnKVxuICB9XG5cbiAgcmV0dXJuIGdyYW1zXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuLWdyYW1zIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAgICpcbiAgICogQHRlbXBsYXRlIHtzdHJpbmd8QXJyYXk8dW5rbm93bj59IFRcbiAgICogQHBhcmFtIHtUfSBbdmFsdWVdXG4gICAqIEByZXR1cm5zIHtUIGV4dGVuZHMgYW55W10gPyBUIDogQXJyYXk8c3RyaW5nPn1cbiAgICovXG4gIGZ1bmN0aW9uIGdyYW1zKHZhbHVlKSB7XG4gICAgLyoqIEB0eXBlIHtUIGV4dGVuZHMgYW55W10gPyBUIDogQXJyYXk8c3RyaW5nPn0gKi9cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBwcmV0dHkgc3VyZSB0aGlzIGlzIGZpbmUuXG4gICAgY29uc3QgbkdyYW1zID0gW11cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbkdyYW1zXG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gdHlwZW9mIHZhbHVlLnNsaWNlID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpXG4gICAgbGV0IGluZGV4ID0gc291cmNlLmxlbmd0aCAtIG4gKyAxXG5cbiAgICBpZiAoaW5kZXggPCAxKSB7XG4gICAgICByZXR1cm4gbkdyYW1zXG4gICAgfVxuXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIG5HcmFtc1tpbmRleF0gPSBzb3VyY2Uuc2xpY2UoaW5kZXgsIGluZGV4ICsgbilcbiAgICB9XG5cbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiBAdHlwZWRlZiB7W3N0cmluZywgbnVtYmVyXX0gVHJpZ3JhbVR1cGxlXG4gKiBAdHlwZWRlZiB7VHJpZ3JhbVR1cGxlW119IFRyaWdyYW1UdXBsZXNcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fSBUcmlncmFtRGljdGlvbmFyeVxuICovXG5cbmltcG9ydCB7dHJpZ3JhbX0gZnJvbSAnbi1ncmFtJ1xuaW1wb3J0IHtjb2xsYXBzZVdoaXRlU3BhY2V9IGZyb20gJ2NvbGxhcHNlLXdoaXRlLXNwYWNlJ1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENsZWFuIGB2YWx1ZWAuXG4gKiBSZW1vdmVkIGdlbmVyYWwgbm9uLWltcG9ydGFudCAoYXMgaW4sIGZvciBsYW5ndWFnZSBkZXRlY3Rpb24pIHB1bmN0dWF0aW9uXG4gKiBtYXJrcywgc3ltYm9scywgYW5kIGRpZ2l0cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW4odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiBjb2xsYXBzZVdoaXRlU3BhY2UoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9bXFx1MDAyMS1cXHUwMDQwXSsvZywgJyAnKSlcbiAgICAudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBHZXQgY2xlYW4sIHBhZGRlZCwgdHJpZ3JhbXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaWdyYW1zKHZhbHVlKSB7XG4gIHJldHVybiB0cmlncmFtKCcgJyArIGNsZWFuKHZhbHVlKSArICcgJylcbn1cblxuLyoqXG4gKiBHZXQgYW4gYE9iamVjdGAgd2l0aCB0cmlncmFtcyBhcyBpdHMgYXR0cmlidXRlcywgYW5kIHRoZWlyIG9jY3VyZW5jZSBjb3VudCBhc1xuICogdGhlaXIgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1RyaWdyYW1EaWN0aW9uYXJ5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNEaWN0aW9uYXJ5KHZhbHVlKSB7XG4gIGNvbnN0IHZhbHVlcyA9IHRyaWdyYW1zKHZhbHVlKVxuICAvKiogQHR5cGUge1RyaWdyYW1EaWN0aW9uYXJ5fSAqL1xuICBjb25zdCBkaWN0aW9uYXJ5ID0ge31cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICBpZiAob3duLmNhbGwoZGljdGlvbmFyeSwgdmFsdWVzW2luZGV4XSkpIHtcbiAgICAgIGRpY3Rpb25hcnlbdmFsdWVzW2luZGV4XV0rK1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWN0aW9uYXJ5W3ZhbHVlc1tpbmRleF1dID0gMVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaWN0aW9uYXJ5XG59XG5cbi8qKlxuICogR2V0IGFuIGBBcnJheWAgY29udGFpbmluZyB0cmlncmFtLS1jb3VudCB0dXBsZXMgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1RyaWdyYW1UdXBsZXN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc1R1cGxlcyh2YWx1ZSkge1xuICBjb25zdCBkaWN0aW9uYXJ5ID0gYXNEaWN0aW9uYXJ5KHZhbHVlKVxuICAvKiogQHR5cGUge1RyaWdyYW1UdXBsZXN9ICovXG4gIGNvbnN0IHR1cGxlcyA9IFtdXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQgdHJpZ3JhbVxuXG4gIGZvciAodHJpZ3JhbSBpbiBkaWN0aW9uYXJ5KSB7XG4gICAgaWYgKG93bi5jYWxsKGRpY3Rpb25hcnksIHRyaWdyYW0pKSB7XG4gICAgICB0dXBsZXMucHVzaChbdHJpZ3JhbSwgZGljdGlvbmFyeVt0cmlncmFtXV0pXG4gICAgfVxuICB9XG5cbiAgdHVwbGVzLnNvcnQoc29ydClcblxuICByZXR1cm4gdHVwbGVzXG59XG5cbi8qKlxuICogR2V0IGFuIGBBcnJheWAgY29udGFpbmluZyB0cmlncmFtLS1jb3VudCB0dXBsZXMgZnJvbSBhIGdpdmVuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7VHJpZ3JhbVR1cGxlc30gdHVwbGVzXG4gKiBAcmV0dXJucyB7VHJpZ3JhbURpY3Rpb25hcnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0dXBsZXNBc0RpY3Rpb25hcnkodHVwbGVzKSB7XG4gIC8qKiBAdHlwZSB7VHJpZ3JhbURpY3Rpb25hcnl9ICovXG4gIGNvbnN0IGRpY3Rpb25hcnkgPSB7fVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdHVwbGVzLmxlbmd0aCkge1xuICAgIGRpY3Rpb25hcnlbdHVwbGVzW2luZGV4XVswXV0gPSB0dXBsZXNbaW5kZXhdWzFdXG4gIH1cblxuICByZXR1cm4gZGljdGlvbmFyeVxufVxuXG4vKipcbiAqIERlZXAgcmVndWxhciBzb3J0IG9uIGl0ZW0gYXQgYDFgIGluIGJvdGggYE9iamVjdGBzLlxuICpcbiAqIEBwYXJhbSB7VHJpZ3JhbVR1cGxlfSBhXG4gKiBAcGFyYW0ge1RyaWdyYW1UdXBsZX0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gc29ydChhLCBiKSB7XG4gIHJldHVybiBhWzFdIC0gYlsxXVxufVxuIiwiZXhwb3J0IGNvbnN0IHBva2Vtb25zID0ge1xuXHRidWxiYXNhdXI6IDEsXG5cdGl2eXNhdXI6IDIsXG5cdHZlbnVzYXVyOiAzLFxuXHRjaGFybWFuZGVyOiA0LFxuXHRjaGFybWVsZW9uOiA1LFxuXHRjaGFyaXphcmQ6IDYsXG5cdHNxdWlydGxlOiA3LFxuXHR3YXJ0b3J0bGU6IDgsXG5cdGJsYXN0b2lzZTogOSxcblx0Y2F0ZXJwaWU6IDEwLFxuXHRtZXRhcG9kOiAxMSxcblx0YnV0dGVyZnJlZTogMTIsXG5cdHdlZWRsZTogMTMsXG5cdGtha3VuYTogMTQsXG5cdGJlZWRyaWxsOiAxNSxcblx0cGlkZ2V5OiAxNixcblx0cGlkZ2VvdHRvOiAxNyxcblx0cGlkZ2VvdDogMTgsXG5cdHJhdHRhdGE6IDE5LFxuXHRyYXRpY2F0ZTogMjAsXG5cdHNwZWFyb3c6IDIxLFxuXHRmZWFyb3c6IDIyLFxuXHRla2FuczogMjMsXG5cdGFyYm9rOiAyNCxcblx0cGlrYWNodTogMjUsXG5cdHJhaWNodTogMjYsXG5cdHNhbmRzaHJldzogMjcsXG5cdHNhbmRzbGFzaDogMjgsXG5cdG5pZG9yYW5fZjogMjksXG5cdG5pZG9yaW5hOiAzMCxcblx0bmlkb3F1ZWVuOiAzMSxcblx0bmlkb3Jhbl9tOiAzMixcblx0bmlkb3Jpbm86IDMzLFxuXHRuaWRva2luZzogMzQsXG5cdGNsZWZhaXJ5OiAzNSxcblx0Y2xlZmFibGU6IDM2LFxuXHR2dWxwaXg6IDM3LFxuXHRuaW5ldGFsZXM6IDM4LFxuXHRqaWdnbHlwdWZmOiAzOSxcblx0d2lnZ2x5dHVmZjogNDAsXG5cdHp1YmF0OiA0MSxcblx0Z29sYmF0OiA0Mixcblx0b2RkaXNoOiA0Myxcblx0Z2xvb206IDQ0LFxuXHR2aWxlcGx1bWU6IDQ1LFxuXHRwYXJhczogNDYsXG5cdHBhcmFzZWN0OiA0Nyxcblx0dmVub25hdDogNDgsXG5cdHZlbm9tb3RoOiA0OSxcblx0ZGlnbGV0dDogNTAsXG5cdGR1Z3RyaW86IDUxLFxuXHRtZW93dGg6IDUyLFxuXHRwZXJzaWFuOiA1Myxcblx0cHN5ZHVjazogNTQsXG5cdGdvbGR1Y2s6IDU1LFxuXHRtYW5rZXk6IDU2LFxuXHRwcmltZWFwZTogNTcsXG5cdGdyb3dsaXRoZTogNTgsXG5cdGFyY2FuaW5lOiA1OSxcblx0cG9saXdhZzogNjAsXG5cdHBvbGl3aGlybDogNjEsXG5cdHBvbGl3cmF0aDogNjIsXG5cdGFicmE6IDYzLFxuXHRrYWRhYnJhOiA2NCxcblx0YWxha2F6YW06IDY1LFxuXHRtYWNob3A6IDY2LFxuXHRtYWNob2tlOiA2Nyxcblx0bWFjaGFtcDogNjgsXG5cdGJlbGxzcHJvdXQ6IDY5LFxuXHR3ZWVwaW5iZWxsOiA3MCxcblx0dmljdHJlZWJlbDogNzEsXG5cdHRlbnRhY29vbDogNzIsXG5cdHRlbnRhY3J1ZWw6IDczLFxuXHRnZW9kdWRlOiA3NCxcblx0Z3JhdmVsZXI6IDc1LFxuXHRnb2xlbTogNzYsXG5cdHBvbnl0YTogNzcsXG5cdHJhcGlkYXNoOiA3OCxcblx0c2xvd3Bva2U6IDc5LFxuXHRzbG93YnJvOiA4MCxcblx0bWFnbmVtaXRlOiA4MSxcblx0bWFnbmV0b246IDgyLFxuXHRmYXJmZXRjaGQ6IDgzLFxuXHRkb2R1bzogODQsXG5cdGRvZHJpbzogODUsXG5cdHNlZWw6IDg2LFxuXHRkZXdnb25nOiA4Nyxcblx0Z3JpbWVyOiA4OCxcblx0bXVrOiA4OSxcblx0c2hlbGxkZXI6IDkwLFxuXHRjbG95c3RlcjogOTEsXG5cdGdhc3RseTogOTIsXG5cdGhhdW50ZXI6IDkzLFxuXHRnZW5nYXI6IDk0LFxuXHRvbml4OiA5NSxcblx0ZHJvd3plZTogOTYsXG5cdGh5cG5vOiA5Nyxcblx0a3JhYmJ5OiA5OCxcblx0a2luZ2xlcjogOTksXG5cdHZvbHRvcmI6IDEwMCxcblx0ZWxlY3Ryb2RlOiAxMDEsXG5cdGV4ZWdnY3V0ZTogMTAyLFxuXHRleGVnZ3V0b3I6IDEwMyxcblx0Y3Vib25lOiAxMDQsXG5cdG1hcm93YWs6IDEwNSxcblx0aGl0bW9ubGVlOiAxMDYsXG5cdGhpdG1vbmNoYW46IDEwNyxcblx0bGlja2l0dW5nOiAxMDgsXG5cdGtvZmZpbmc6IDEwOSxcblx0d2VlemluZzogMTEwLFxuXHRyaHlob3JuOiAxMTEsXG5cdHJoeWRvbjogMTEyLFxuXHRjaGFuc2V5OiAxMTMsXG5cdHRhbmdlbGE6IDExNCxcblx0a2FuZ2Fza2hhbjogMTE1LFxuXHRob3JzZWE6IDExNixcblx0c2VhZHJhOiAxMTcsXG5cdGdvbGRlZW46IDExOCxcblx0c2Vha2luZzogMTE5LFxuXHRzdGFyeXU6IDEyMCxcblx0c3Rhcm1pZTogMTIxLFxuXHRtcl9taW1lOiAxMjIsXG5cdHNjeXRoZXI6IDEyMyxcblx0anlueDogMTI0LFxuXHRlbGVjdGFidXp6OiAxMjUsXG5cdG1hZ21hcjogMTI2LFxuXHRwaW5zaXI6IDEyNyxcblx0dGF1cm9zOiAxMjgsXG5cdG1hZ2lrYXJwOiAxMjksXG5cdGd5YXJhZG9zOiAxMzAsXG5cdGxhcHJhczogMTMxLFxuXHRkaXR0bzogMTMyLFxuXHRlZXZlZTogMTMzLFxuXHR2YXBvcmVvbjogMTM0LFxuXHRqb2x0ZW9uOiAxMzUsXG5cdGZsYXJlb246IDEzNixcblx0cG9yeWdvbjogMTM3LFxuXHRvbWFueXRlOiAxMzgsXG5cdG9tYXN0YXI6IDEzOSxcblx0a2FidXRvOiAxNDAsXG5cdGthYnV0b3BzOiAxNDEsXG5cdGFlcm9kYWN0eWw6IDE0Mixcblx0c25vcmxheDogMTQzLFxuXHRhcnRpY3VubzogMTQ0LFxuXHR6YXBkb3M6IDE0NSxcblx0bW9sdHJlczogMTQ2LFxuXHRkcmF0aW5pOiAxNDcsXG5cdGRyYWdvbmFpcjogMTQ4LFxuXHRkcmFnb25pdGU6IDE0OSxcblx0bWV3dHdvOiAxNTAsXG5cdG1ldzogMTUxLFxuXHRjaGlrb3JpdGE6IDE1Mixcblx0YmF5bGVlZjogMTUzLFxuXHRtZWdhbml1bTogMTU0LFxuXHRjeW5kYXF1aWw6IDE1NSxcblx0cXVpbGF2YTogMTU2LFxuXHR0eXBobG9zaW9uOiAxNTcsXG5cdHRvdG9kaWxlOiAxNTgsXG5cdGNyb2NvbmF3OiAxNTksXG5cdGZlcmFsaWdhdHI6IDE2MCxcblx0c2VudHJldDogMTYxLFxuXHRmdXJyZXQ6IDE2Mixcblx0aG9vdGhvb3Q6IDE2Myxcblx0bm9jdG93bDogMTY0LFxuXHRsZWR5YmE6IDE2NSxcblx0bGVkaWFuOiAxNjYsXG5cdHNwaW5hcmFrOiAxNjcsXG5cdGFyaWFkb3M6IDE2OCxcblx0Y3JvYmF0OiAxNjksXG5cdGNoaW5jaG91OiAxNzAsXG5cdGxhbnR1cm46IDE3MSxcblx0cGljaHU6IDE3Mixcblx0Y2xlZmZhOiAxNzMsXG5cdGlnZ2x5YnVmZjogMTc0LFxuXHR0b2dlcGk6IDE3NSxcblx0dG9nZXRpYzogMTc2LFxuXHRuYXR1OiAxNzcsXG5cdHhhdHU6IDE3OCxcblx0bWFyZWVwOiAxNzksXG5cdGZsYWFmZnk6IDE4MCxcblx0YW1waGFyb3M6IDE4MSxcblx0YmVsbG9zc29tOiAxODIsXG5cdG1hcmlsbDogMTgzLFxuXHRhenVtYXJpbGw6IDE4NCxcblx0c3Vkb3dvb2RvOiAxODUsXG5cdHBvbGl0b2VkOiAxODYsXG5cdGhvcHBpcDogMTg3LFxuXHRza2lwbG9vbTogMTg4LFxuXHRqdW1wbHVmZjogMTg5LFxuXHRhaXBvbTogMTkwLFxuXHRzdW5rZXJuOiAxOTEsXG5cdHN1bmZsb3JhOiAxOTIsXG5cdHlhbm1hOiAxOTMsXG5cdHdvb3BlcjogMTk0LFxuXHRxdWFnc2lyZTogMTk1LFxuXHRlc3Blb246IDE5Nixcblx0dW1icmVvbjogMTk3LFxuXHRtdXJrcm93OiAxOTgsXG5cdHNsb3draW5nOiAxOTksXG5cdG1pc2RyZWF2dXM6IDIwMCxcblx0dW5vd246IDIwMSxcblx0d29iYnVmZmV0OiAyMDIsXG5cdGdpcmFmYXJpZzogMjAzLFxuXHRwaW5lY286IDIwNCxcblx0Zm9ycmV0cmVzczogMjA1LFxuXHRkdW5zcGFyY2U6IDIwNixcblx0Z2xpZ2FyOiAyMDcsXG5cdHN0ZWVsaXg6IDIwOCxcblx0c251YmJ1bGw6IDIwOSxcblx0Z3JhbmJ1bGw6IDIxMCxcblx0cXdpbGZpc2g6IDIxMSxcblx0c2Npem9yOiAyMTIsXG5cdHNodWNrbGU6IDIxMyxcblx0aGVyYWNyb3NzOiAyMTQsXG5cdHNuZWFzZWw6IDIxNSxcblx0dGVkZGl1cnNhOiAyMTYsXG5cdHVyc2FyaW5nOiAyMTcsXG5cdHNsdWdtYTogMjE4LFxuXHRtYWdjYXJnbzogMjE5LFxuXHRzd2ludWI6IDIyMCxcblx0cGlsb3N3aW5lOiAyMjEsXG5cdGNvcnNvbGE6IDIyMixcblx0cmVtb3JhaWQ6IDIyMyxcblx0b2N0aWxsZXJ5OiAyMjQsXG5cdGRlbGliaXJkOiAyMjUsXG5cdG1hbnRpbmU6IDIyNixcblx0c2thcm1vcnk6IDIyNyxcblx0aG91bmRvdXI6IDIyOCxcblx0aG91bmRvb206IDIyOSxcblx0a2luZ2RyYTogMjMwLFxuXHRwaGFucHk6IDIzMSxcblx0ZG9ucGhhbjogMjMyLFxuXHRwb3J5Z29uMjogMjMzLFxuXHRzdGFudGxlcjogMjM0LFxuXHRzbWVhcmdsZTogMjM1LFxuXHR0eXJvZ3VlOiAyMzYsXG5cdGhpdG1vbnRvcDogMjM3LFxuXHRzbW9vY2h1bTogMjM4LFxuXHRlbGVraWQ6IDIzOSxcblx0bWFnYnk6IDI0MCxcblx0bWlsdGFuazogMjQxLFxuXHRibGlzc2V5OiAyNDIsXG5cdHJhaWtvdTogMjQzLFxuXHRlbnRlaTogMjQ0LFxuXHRzdWljdW5lOiAyNDUsXG5cdGxhcnZpdGFyOiAyNDYsXG5cdHB1cGl0YXI6IDI0Nyxcblx0dHlyYW5pdGFyOiAyNDgsXG5cdGx1Z2lhOiAyNDksXG5cdFwiaG8tb2hcIjogMjUwLFxuXHRjZWxlYmk6IDI1MSxcblx0dHJlZWNrbzogMjUyLFxuXHRncm92eWxlOiAyNTMsXG5cdHNjZXB0aWxlOiAyNTQsXG5cdHRvcmNoaWM6IDI1NSxcblx0Y29tYnVza2VuOiAyNTYsXG5cdGJsYXppa2VuOiAyNTcsXG5cdG11ZGtpcDogMjU4LFxuXHRtYXJzaHRvbXA6IDI1OSxcblx0c3dhbXBlcnQ6IDI2MCxcblx0cG9vY2h5ZW5hOiAyNjEsXG5cdG1pZ2h0eWVuYTogMjYyLFxuXHR6aWd6YWdvb246IDI2Myxcblx0bGlub29uZTogMjY0LFxuXHR3dXJtcGxlOiAyNjUsXG5cdHNpbGNvb246IDI2Nixcblx0YmVhdXRpZmx5OiAyNjcsXG5cdGNhc2Nvb246IDI2OCxcblx0ZHVzdG94OiAyNjksXG5cdGxvdGFkOiAyNzAsXG5cdGxvbWJyZTogMjcxLFxuXHRsdWRpY29sbzogMjcyLFxuXHRzZWVkb3Q6IDI3Myxcblx0bnV6bGVhZjogMjc0LFxuXHRzaGlmdHJ5OiAyNzUsXG5cdHRhaWxsb3c6IDI3Nixcblx0c3dlbGxvdzogMjc3LFxuXHR3aW5ndWxsOiAyNzgsXG5cdHBlbGlwcGVyOiAyNzksXG5cdHJhbHRzOiAyODAsXG5cdGtpcmxpYTogMjgxLFxuXHRnYXJkZXZvaXI6IDI4Mixcblx0c3Vyc2tpdDogMjgzLFxuXHRtYXNxdWVyYWluOiAyODQsXG5cdHNocm9vbWlzaDogMjg1LFxuXHRicmVsb29tOiAyODYsXG5cdHNsYWtvdGg6IDI4Nyxcblx0dmlnb3JvdGg6IDI4OCxcblx0c2xha2luZzogMjg5LFxuXHRuaW5jYWRhOiAyOTAsXG5cdG5pbmphc2s6IDI5MSxcblx0c2hlZGluamE6IDI5Mixcblx0d2hpc211cjogMjkzLFxuXHRsb3VkcmVkOiAyOTQsXG5cdGV4cGxvdWQ6IDI5NSxcblx0bWFrdWhpdGE6IDI5Nixcblx0aGFyaXlhbWE6IDI5Nyxcblx0YXp1cmlsbDogMjk4LFxuXHRub3NlcGFzczogMjk5LFxuXHRza2l0dHk6IDMwMCxcblx0ZGVsY2F0dHk6IDMwMSxcblx0c2FibGV5ZTogMzAyLFxuXHRtYXdpbGU6IDMwMyxcblx0YXJvbjogMzA0LFxuXHRsYWlyb246IDMwNSxcblx0YWdncm9uOiAzMDYsXG5cdG1lZGl0aXRlOiAzMDcsXG5cdG1lZGljaGFtOiAzMDgsXG5cdGVsZWN0cmlrZTogMzA5LFxuXHRtYW5lY3RyaWM6IDMxMCxcblx0cGx1c2xlOiAzMTEsXG5cdG1pbnVuOiAzMTIsXG5cdHZvbGJlYXQ6IDMxMyxcblx0aWxsdW1pc2U6IDMxNCxcblx0cm9zZWxpYTogMzE1LFxuXHRndWxwaW46IDMxNixcblx0c3dhbG90OiAzMTcsXG5cdGNhcnZhbmhhOiAzMTgsXG5cdHNoYXJwZWRvOiAzMTksXG5cdHdhaWxtZXI6IDMyMCxcblx0d2FpbG9yZDogMzIxLFxuXHRudW1lbDogMzIyLFxuXHRjYW1lcnVwdDogMzIzLFxuXHR0b3Jrb2FsOiAzMjQsXG5cdHNwb2luazogMzI1LFxuXHRncnVtcGlnOiAzMjYsXG5cdHNwaW5kYTogMzI3LFxuXHR0cmFwaW5jaDogMzI4LFxuXHR2aWJyYXZhOiAzMjksXG5cdGZseWdvbjogMzMwLFxuXHRjYWNuZWE6IDMzMSxcblx0Y2FjdHVybmU6IDMzMixcblx0c3dhYmx1OiAzMzMsXG5cdGFsdGFyaWE6IDMzNCxcblx0emFuZ29vc2U6IDMzNSxcblx0c2V2aXBlcjogMzM2LFxuXHRsdW5hdG9uZTogMzM3LFxuXHRzb2xyb2NrOiAzMzgsXG5cdGJhcmJvYWNoOiAzMzksXG5cdHdoaXNjYXNoOiAzNDAsXG5cdGNvcnBoaXNoOiAzNDEsXG5cdGNyYXdkYXVudDogMzQyLFxuXHRiYWx0b3k6IDM0Myxcblx0Y2xheWRvbDogMzQ0LFxuXHRsaWxlZXA6IDM0NSxcblx0Y3JhZGlseTogMzQ2LFxuXHRhbm9yaXRoOiAzNDcsXG5cdGFybWFsZG86IDM0OCxcblx0ZmVlYmFzOiAzNDksXG5cdG1pbG90aWM6IDM1MCxcblx0Y2FzdGZvcm06IDM1MSxcblx0a2VjbGVvbjogMzUyLFxuXHRzaHVwcGV0OiAzNTMsXG5cdGJhbmV0dGU6IDM1NCxcblx0ZHVza3VsbDogMzU1LFxuXHRkdXNjbG9wczogMzU2LFxuXHR0cm9waXVzOiAzNTcsXG5cdGNoaW1lY2hvOiAzNTgsXG5cdGFic29sOiAzNTksXG5cdHd5bmF1dDogMzYwLFxuXHRzbm9ydW50OiAzNjEsXG5cdGdsYWxpZTogMzYyLFxuXHRzcGhlYWw6IDM2Myxcblx0c2VhbGVvOiAzNjQsXG5cdHdhbHJlaW46IDM2NSxcblx0Y2xhbXBlcmw6IDM2Nixcblx0aHVudGFpbDogMzY3LFxuXHRnb3JlYnlzczogMzY4LFxuXHRyZWxpY2FudGg6IDM2OSxcblx0bHV2ZGlzYzogMzcwLFxuXHRiYWdvbjogMzcxLFxuXHRzaGVsZ29uOiAzNzIsXG5cdHNhbGFtZW5jZTogMzczLFxuXHRiZWxkdW06IDM3NCxcblx0bWV0YW5nOiAzNzUsXG5cdG1ldGFncm9zczogMzc2LFxuXHRyZWdpcm9jazogMzc3LFxuXHRyZWdpY2U6IDM3OCxcblx0cmVnaXN0ZWVsOiAzNzksXG5cdGxhdGlhczogMzgwLFxuXHRsYXRpb3M6IDM4MSxcblx0a3lvZ3JlOiAzODIsXG5cdGdyb3Vkb246IDM4Myxcblx0cmF5cXVhemE6IDM4NCxcblx0amlyYWNoaTogMzg1LFxuXHRkZW94eXM6IDM4Nixcblx0dHVydHdpZzogMzg3LFxuXHRncm90bGU6IDM4OCxcblx0dG9ydGVycmE6IDM4OSxcblx0Y2hpbWNoYXI6IDM5MCxcblx0bW9uZmVybm86IDM5MSxcblx0aW5mZXJuYXBlOiAzOTIsXG5cdHBpcGx1cDogMzkzLFxuXHRwcmlucGx1cDogMzk0LFxuXHRlbXBvbGVvbjogMzk1LFxuXHRzdGFybHk6IDM5Nixcblx0c3RhcmF2aWE6IDM5Nyxcblx0c3RhcmFwdG9yOiAzOTgsXG5cdGJpZG9vZjogMzk5LFxuXHRiaWJhcmVsOiA0MDAsXG5cdGtyaWNrZXRvdDogNDAxLFxuXHRrcmlja2V0dW5lOiA0MDIsXG5cdHNoaW54OiA0MDMsXG5cdGx1eGlvOiA0MDQsXG5cdGx1eHJheTogNDA1LFxuXHRidWRldzogNDA2LFxuXHRyb3NlcmFkZTogNDA3LFxuXHRjcmFuaWRvczogNDA4LFxuXHRyYW1wYXJkb3M6IDQwOSxcblx0c2hpZWxkb246IDQxMCxcblx0YmFzdGlvZG9uOiA0MTEsXG5cdGJ1cm15OiA0MTIsXG5cdHdvcm1hZGFtOiA0MTMsXG5cdG1vdGhpbTogNDE0LFxuXHRjb21iZWU6IDQxNSxcblx0dmVzcGlxdWVuOiA0MTYsXG5cdHBhY2hpcmlzdTogNDE3LFxuXHRidWl6ZWw6IDQxOCxcblx0ZmxvYXR6ZWw6IDQxOSxcblx0Y2hlcnViaTogNDIwLFxuXHRjaGVycmltOiA0MjEsXG5cdHNoZWxsb3M6IDQyMixcblx0Z2FzdHJvZG9uOiA0MjMsXG5cdGFtYmlwb206IDQyNCxcblx0ZHJpZmxvb246IDQyNSxcblx0ZHJpZmJsaW06IDQyNixcblx0YnVuZWFyeTogNDI3LFxuXHRsb3B1bm55OiA0MjgsXG5cdG1pc21hZ2l1czogNDI5LFxuXHRob25jaGtyb3c6IDQzMCxcblx0Z2xhbWVvdzogNDMxLFxuXHRwdXJ1Z2x5OiA0MzIsXG5cdGNoaW5nbGluZzogNDMzLFxuXHRzdHVua3k6IDQzNCxcblx0c2t1bnRhbms6IDQzNSxcblx0YnJvbnpvcjogNDM2LFxuXHRicm9uem9uZzogNDM3LFxuXHRib25zbHk6IDQzOCxcblx0bWltZWpyOiA0MzksXG5cdGhhcHBpbnk6IDQ0MCxcblx0Y2hhdG90OiA0NDEsXG5cdHNwaXJpdG9tYjogNDQyLFxuXHRnaWJsZTogNDQzLFxuXHRnYWJpdGU6IDQ0NCxcblx0Z2FyY2hvbXA6IDQ0NSxcblx0bXVuY2hsYXg6IDQ0Nixcblx0cmlvbHU6IDQ0Nyxcblx0bHVjYXJpbzogNDQ4LFxuXHRoaXBwb3BvdGFzOiA0NDksXG5cdGhpcHBvd2RvbjogNDUwLFxuXHRza29ydXBpOiA0NTEsXG5cdGRyYXBpb246IDQ1Mixcblx0Y3JvYWd1bms6IDQ1Myxcblx0dG94aWNyb2FrOiA0NTQsXG5cdGNhcm5pdmluZTogNDU1LFxuXHRmaW5uZW9uOiA0NTYsXG5cdGx1bWluZW9uOiA0NTcsXG5cdG1hbnR5a2U6IDQ1OCxcblx0c25vdmVyOiA0NTksXG5cdGFib21hc25vdzogNDYwLFxuXHR3ZWF2aWxlOiA0NjEsXG5cdG1hZ25lem9uZTogNDYyLFxuXHRsaWNraWxpY2t5OiA0NjMsXG5cdHJoeXBlcmlvcjogNDY0LFxuXHR0YW5ncm93dGg6IDQ2NSxcblx0ZWxlY3RpdmlyZTogNDY2LFxuXHRtYWdtb3J0YXI6IDQ2Nyxcblx0dG9nZWtpc3M6IDQ2OCxcblx0eWFubWVnYTogNDY5LFxuXHRsZWFmZW9uOiA0NzAsXG5cdGdsYWNlb246IDQ3MSxcblx0Z2xpc2NvcjogNDcyLFxuXHRtYW1vc3dpbmU6IDQ3Myxcblx0cG9yeWdvblo6IDQ3NCxcblx0Z2FsbGFkZTogNDc1LFxuXHRwcm9ib3Bhc3M6IDQ3Nixcblx0ZHVza25vaXI6IDQ3Nyxcblx0ZnJvc2xhc3M6IDQ3OCxcblx0cm90b206IDQ3OSxcblx0dXhpZTogNDgwLFxuXHRtZXNwcml0OiA0ODEsXG5cdGF6ZWxmOiA0ODIsXG5cdGRpYWxnYTogNDgzLFxuXHRwYWxraWE6IDQ4NCxcblx0aGVhdHJhbjogNDg1LFxuXHRyZWdpZ2lnYXM6IDQ4Nixcblx0Z2lyYXRpbmE6IDQ4Nyxcblx0Y3Jlc3NlbGlhOiA0ODgsXG5cdHBoaW9uZTogNDg5LFxuXHRtYW5hcGh5OiA0OTAsXG5cdGRhcmtyYWk6IDQ5MSxcblx0c2hheW1pbjogNDkyLFxuXHRhcmNldXM6IDQ5Myxcblx0dmljdGluaTogNDk0LFxuXHRzbml2eTogNDk1LFxuXHRzZXJ2aW5lOiA0OTYsXG5cdHNlcnBlcmlvcjogNDk3LFxuXHR0ZXBpZzogNDk4LFxuXHRwaWduaXRlOiA0OTksXG5cdGVtYm9hcjogNTAwLFxuXHRvc2hhd290dDogNTAxLFxuXHRkZXdvdHQ6IDUwMixcblx0c2FtdXJvdHQ6IDUwMyxcblx0cGF0cmF0OiA1MDQsXG5cdHdhdGNob2c6IDUwNSxcblx0bGlsbGlwdXA6IDUwNixcblx0aGVyZGllcjogNTA3LFxuXHRzdG91dGxhbmQ6IDUwOCxcblx0cHVycmxvaW46IDUwOSxcblx0bGllcGFyZDogNTEwLFxuXHRwYW5zYWdlOiA1MTEsXG5cdHNpbWlzYWdlOiA1MTIsXG5cdHBhbnNlYXI6IDUxMyxcblx0c2ltaXNlYXI6IDUxNCxcblx0cGFucG91cjogNTE1LFxuXHRzaW1pcG91cjogNTE2LFxuXHRtdW5uYTogNTE3LFxuXHRtdXNoYXJuYTogNTE4LFxuXHRwaWRvdmU6IDUxOSxcblx0dHJhbnF1aWxsOiA1MjAsXG5cdHVuZmV6YW50OiA1MjEsXG5cdGJsaXR6bGU6IDUyMixcblx0emVic3RyaWthOiA1MjMsXG5cdHJvZ2dlbnJvbGE6IDUyNCxcblx0Ym9sZG9yZTogNTI1LFxuXHRnaWdhbGl0aDogNTI2LFxuXHR3b29iYXQ6IDUyNyxcblx0c3dvb2JhdDogNTI4LFxuXHRkcmlsYnVyOiA1MjksXG5cdGV4Y2FkcmlsbDogNTMwLFxuXHRhdWRpbm86IDUzMSxcblx0dGltYnVycjogNTMyLFxuXHRndXJkdXJyOiA1MzMsXG5cdGNvbmtlbGR1cnI6IDUzNCxcblx0dHltcG9sZTogNTM1LFxuXHRwYWxwaXRvYWQ6IDUzNixcblx0c2Vpc21pdG9hZDogNTM3LFxuXHR0aHJvaDogNTM4LFxuXHRzYXdrOiA1MzksXG5cdHNld2FkZGxlOiA1NDAsXG5cdHN3YWRsb29uOiA1NDEsXG5cdGxlYXZhbm55OiA1NDIsXG5cdHZlbmlwZWRlOiA1NDMsXG5cdHdoaXJsaXBlZGU6IDU0NCxcblx0c2NvbGlwZWRlOiA1NDUsXG5cdGNvdHRvbmVlOiA1NDYsXG5cdHdoaW1zaWNvdHQ6IDU0Nyxcblx0cGV0aWxpbDogNTQ4LFxuXHRsaWxsaWdhbnQ6IDU0OSxcblx0YmFzY3VsaW46IDU1MCxcblx0c2FuZGlsZTogNTUxLFxuXHRrcm9rb3JvazogNTUyLFxuXHRrcm9va29kaWxlOiA1NTMsXG5cdGRhcnVtYWthOiA1NTQsXG5cdGRhcm1hbml0YW46IDU1NSxcblx0bWFyYWN0dXM6IDU1Nixcblx0ZHdlYmJsZTogNTU3LFxuXHRjcnVzdGxlOiA1NTgsXG5cdHNjcmFnZ3k6IDU1OSxcblx0c2NyYWZ0eTogNTYwLFxuXHRzaWdpbHlwaDogNTYxLFxuXHR5YW1hc2s6IDU2Mixcblx0Y29mYWdyaWd1czogNTYzLFxuXHR0aXJ0b3VnYTogNTY0LFxuXHRjYXJyYWNvc3RhOiA1NjUsXG5cdGFyY2hlbjogNTY2LFxuXHRhcmNoZW9wczogNTY3LFxuXHR0cnViYmlzaDogNTY4LFxuXHRnYXJib2RvcjogNTY5LFxuXHR6b3J1YTogNTcwLFxuXHR6b3JvYXJrOiA1NzEsXG5cdG1pbmNjaW5vOiA1NzIsXG5cdGNpbmNjaW5vOiA1NzMsXG5cdGdvdGhpdGE6IDU3NCxcblx0Z290aG9yaXRhOiA1NzUsXG5cdGdvdGhpdGVsbGU6IDU3Nixcblx0c29sb3NpczogNTc3LFxuXHRkdW9zaW9uOiA1NzgsXG5cdHJldW5pY2x1czogNTc5LFxuXHRkdWNrbGV0dDogNTgwLFxuXHRzd2FubmE6IDU4MSxcblx0dmFuaWxsaXRlOiA1ODIsXG5cdHZhbmlsbGlzaDogNTgzLFxuXHR2YW5pbGx1eGU6IDU4NCxcblx0ZGVlcmxpbmc6IDU4NSxcblx0c2F3c2J1Y2s6IDU4Nixcblx0ZW1vbGdhOiA1ODcsXG5cdGthcnJhYmxhc3Q6IDU4OCxcblx0ZXNjYXZhbGllcjogNTg5LFxuXHRmb29uZ3VzOiA1OTAsXG5cdGFtb29uZ3VzczogNTkxLFxuXHRmcmlsbGlzaDogNTkyLFxuXHRqZWxsaWNlbnQ6IDU5Myxcblx0YWxvbW9tb2xhOiA1OTQsXG5cdGpvbHRpazogNTk1LFxuXHRnYWx2YW50dWxhOiA1OTYsXG5cdGZlcnJvc2VlZDogNTk3LFxuXHRmZXJyb3Rob3JuOiA1OTgsXG5cdGtsaW5rOiA1OTksXG5cdGtsYW5nOiA2MDAsXG5cdGtsaW5rbGFuZzogNjAxLFxuXHR0eW5hbW86IDYwMixcblx0ZWVsZWt0cmlrOiA2MDMsXG5cdGVlbGVrdHJvc3M6IDYwNCxcblx0ZWxneWVtOiA2MDUsXG5cdGJlaGVleWVtOiA2MDYsXG5cdGxpdHdpY2s6IDYwNyxcblx0bGFtcGVudDogNjA1OCxcblx0Y2hhbmRlbHVyZTogNjA5LFxuXHRheGV3OiA2MTAsXG5cdGZyYXh1cmU6IDYxMSxcblx0aGF4b3J1czogNjEyLFxuXHRjdWJjaG9vOiA2MTMsXG5cdGJlYXJ0aWM6IDYxNCxcblx0Y3J5b2dvbmFsOiA2MTUsXG5cdHNoZWxtZXQ6IDYxNixcblx0YWNjZWxnb3I6IDYxNyxcblx0c3R1bmZpc2s6IDYxOCxcblx0bWllbmZvbzogNjE5LFxuXHRtaWVuc2hhbzogNjIwLFxuXHRkcnVkZGlnb246IDYyMSxcblx0Z29sZXR0OiA2MjIsXG5cdGdvbHVyazogNjIzLFxuXHRwYXduaWFyZDogNjI0LFxuXHRiaXNoYXJwOiA2MjUsXG5cdGJvdWZmYWxhbnQ6IDYyNixcblx0cnVmZmxldDogNjI3LFxuXHRicmF2aWFyeTogNjI4LFxuXHR2dWxsYWJ5OiA2MjksXG5cdG1hbmRpYnV6ejogNjMwLFxuXHRoZWF0bW9yOiA2MzEsXG5cdGR1cmFudDogNjMyLFxuXHRkZWlubzogNjMzLFxuXHR6d2VpbG91czogNjM0LFxuXHRoeWRyZWlnb246IDYzNSxcblx0bGFydmVzdGE6IDYzNixcblx0dm9sY2Fyb25hOiA2MzcsXG5cdGNvYmFsaW9uOiA2MzgsXG5cdHRlcnJha2lvbjogNjM5LFxuXHR2aXJpemlvbjogNjQwLFxuXHR0b3JuYWR1czogNjQxLFxuXHR0aHVuZHVydXM6IDY0Mixcblx0cmVzaGlyYW06IDY0Myxcblx0emVrcm9tOiA2NDQsXG5cdGxhbmRvcnVzOiA2NDUsXG5cdGt5dXJlbTogNjQ2LFxuXHRrZWxkZW86IDY0Nyxcblx0bWVsb2V0dGE6IDY0OCxcblx0Z2VuZXNlY3Q6IDY0OSxcblx0Y2hlc3BpbjogNjUwLFxuXHRxdWlsbGFkaW46IDY1MSxcblx0Y2hlc25hdWdodDogNjUyLFxuXHRmZW5uZWtpbjogNjUzLFxuXHRicmFpeGVuOiA2NTQsXG5cdGRlbHBob3g6IDY1NSxcblx0ZnJvYWtpZTogNjU2LFxuXHRmcm9nYWRpZXI6IDY1Nyxcblx0Z3JlbmluamE6IDY1OCxcblx0YnVubmVsYnk6IDY1OSxcblx0ZGlnZ2Vyc2J5OiA2NjAsXG5cdGZsZXRjaGxpbmc6IDY2MSxcblx0ZmxldGNoaW5kZXI6IDY2Mixcblx0dGFsb25mbGFtZTogNjYzLFxuXHRzY2F0dGVyYnVnOiA2NjQsXG5cdHNwZXdwYTogNjY1LFxuXHR2aXZpbGxvbjogNjY2LFxuXHRsaXRsZW86IDY2Nyxcblx0cHlyb2FyOiA2NjgsXG5cdGZsYWJlYmU6IDY2OSxcblx0ZmxvZXR0ZTogNjcwLFxuXHRmbG9yZ2VzOiA2NzEsXG5cdHNraWRkbzogNjcyLFxuXHRnb2dvYXQ6IDY3Myxcblx0cGFuY2hhbTogNjc0LFxuXHRwYW5nb3JvOiA2NzUsXG5cdGZ1cmZyb3U6IDY3Nixcblx0ZXNwdXJyOiA2NzcsXG5cdG1lb3dzdGljOiA2NzgsXG5cdGhvbmVkZ2U6IDY3OSxcblx0ZG91YmxhZGU6IDY4MCxcblx0YWVnaXNsYXNoOiA2ODEsXG5cdHNwcml0emVlOiA2ODIsXG5cdGFyb21hdGlzc2U6IDY4Myxcblx0c3dpcmxpeDogNjg0LFxuXHRzbHVycHVmZjogNjg1LFxuXHRpbmtheTogNjg2LFxuXHRtYWxhbWFyOiA2ODcsXG5cdGJpbmFjbGU6IDY4OCxcblx0YmFyYmFyYWNsZTogNjg5LFxuXHRza3JlbHA6IDY5MCxcblx0ZHJhZ2FsZ2U6IDY5MSxcblx0Y2xhdW5jaGVyOiA2OTIsXG5cdGNsYXdpdHplcjogNjkzLFxuXHRoZWxpb3B0aWxlOiA2OTQsXG5cdGhlbGlvbGlzazogNjk1LFxuXHR0eXJ1bnQ6IDY5Nixcblx0dHlyYW50cnVtOiA2OTcsXG5cdGFtYXVyYTogNjk4LFxuXHRhdXJvcnVzOiA2OTksXG5cdHN5bHZlb246IDcwMCxcblx0aGF3bHVjaGE6IDcwMSxcblx0ZGVkZW5uZTogNzAyLFxuXHRjYXJiaW5rOiA3MDMsXG5cdGdvb215OiA3MDQsXG5cdHNsaWdnb286IDcwNSxcblx0Z29vZHJhOiA3MDYsXG5cdGtsZWZraTogNzA3LFxuXHRwaGFudHVtcDogNzA4LFxuXHR0cmV2ZW5hbnQ6IDcwOSxcblx0cHVtcGthYm9vOiA3MTAsXG5cdGdvdXJnZWlzdDogNzExLFxuXHRiZXJnbWl0ZTogNzEyLFxuXHRhdmFsdWdnOiA3MTMsXG5cdG5vaWJhdDogNzE0LFxuXHRub2l2ZXJuOiA3MTUsXG5cdHhlcm5lYXM6IDcxNixcblx0eXZlbHRhbDogNzE3LFxuXHR6eWdhcmRlOiA3MTgsXG5cdGRpYW5jaWU6IDcxOSxcblx0aG9vcGE6IDcyMCxcblx0dm9sY2FuaW9uOiA3MjEsXG5cdHJvd2xldDogNzIyLFxuXHRkYXJ0cml4OiA3MjMsXG5cdGRlY2lkdWV5ZTogNzI0LFxuXHRsaXR0ZW46IDcyNSxcblx0dG9ycmFjYXQ6IDcyNixcblx0aW5jaW5lcm9hcjogNzI3LFxuXHRwb3BwbGlvOiA3MjgsXG5cdGJyaW9ubmU6IDcyOSxcblx0cHJpbWFyaW5hOiA3MzAsXG5cdHBpa2lwZWs6IDczMSxcblx0dHJ1bWJlYWs6IDczMixcblx0dG91Y2Fubm9uOiA3MzMsXG5cdHl1bmdvb3M6IDczNCxcblx0Z3Vtc2hvb3M6IDczNSxcblx0Z3J1YmJpbjogNzM2LFxuXHRjaGFyamFidWc6IDczNyxcblx0dmlrYXZvbHQ6IDczOCxcblx0Y3JhYnJhd2xlcjogNzM5LFxuXHRjcmFib21pbmFibGU6IDc0MCxcblx0b3JpY29yaW86IDc0MSxcblx0Y3V0aWVmbHk6IDc0Mixcblx0cmlib21iZWU6IDc0Myxcblx0cm9ja3J1ZmY6IDc0NCxcblx0bHljYW5yb2M6IDc0NSxcblx0d2lzaGl3YXNoaTogNzQ2LFxuXHRtYXJlYW5pZTogNzQ3LFxuXHR0b3hhcGV4OiA3NDgsXG5cdG11ZGJyYXk6IDc0OSxcblx0bXVkc2RhbGU6IDc1MCxcblx0ZGV3cGlkZXI6IDc1MSxcblx0YXJhcXVhbmlkOiA3NTIsXG5cdGZvbWFudGlzOiA3NTMsXG5cdGx1cmFudGlzOiA3NTQsXG5cdG1vcmVsdWxsOiA3NTUsXG5cdHNoaWlub3RpYzogNzU2LFxuXHRzYWxhbmRpdDogNzU3LFxuXHRzYWxhenpsZTogNzU4LFxuXHRzdHVmZnVsOiA3NTksXG5cdGJld2VhcjogNzYwLFxuXHRib3Vuc3dlZXQ6IDc2MSxcblx0c3RlZW5lZTogNzYyLFxuXHR0c2FyZWVuYTogNzYzLFxuXHRjb21mZXk6IDc2NCxcblx0b3Jhbmd1cnU6IDc2NSxcblx0cGFzc2ltaWFuOiA3NjYsXG5cdHdpbXBvZDogNzY3LFxuXHRnb2xpc29wb2Q6IDc2OCxcblx0c2FuZHlnYXN0OiA3NjksXG5cdHBhbG9zc2FuZDogNzcwLFxuXHRweXVrdW11a3U6IDc3MSxcblx0dHlwZU51bGw6IDc3Mixcblx0c2lsdmFsbHk6IDc3Myxcblx0bWluaW9yOiA3NzQsXG5cdGtvbWFsYTogNzc1LFxuXHR0dXJ0b25hdG9yOiA3NzYsXG5cdHRvZ2VkZW1hcnU6IDc3Nyxcblx0bWltaWt5dTogNzc4LFxuXHRicnV4aXNoOiA3NzksXG5cdGRyYW1wYTogNzgwLFxuXHRkaGVsbWlzZTogNzgxLFxuXHRqYW5nbW9POiA3ODIsXG5cdGhha2Ftb086IDc4Myxcblx0a29tbW9POiA3ODQsXG5cdHRhcHVLb2tvOiA3ODUsXG5cdHRhcHVMZWxlOiA3ODYsXG5cdHRhcHVCdWx1OiA3ODcsXG5cdHRhcHVGaW5pOiA3ODgsXG5cdGNvc21vZzogNzg5LFxuXHRjb3Ntb2VtOiA3OTAsXG5cdHNvbGdhbGVvOiA3OTEsXG5cdGx1bmFsYTogNzkyLFxuXHRuaWhpbGVnbzogNzkzLFxuXHRidXp6d29sZTogNzk0LFxuXHRwaGVyb21vc2E6IDc5NSxcblx0eHVya2l0cmVlOiA3OTYsXG5cdGNlbGVzdGVlbGE6IDc5Nyxcblx0a2FydGFuYTogNzk4LFxuXHRndXp6bG9yZDogNzk5LFxuXHRuZWNyb3ptYTogODAwLFxuXHRtYWdlYXJuYTogODAxLFxuXHRtYXJzaGFkb3c6IDgwMixcblx0cG9pcG9sZTogODAzLFxuXHRuYWdhbmFkZWw6IDgwNCxcblx0c3Rha2F0YWthOiA4MDUsXG5cdGJsYWNlcGhhbG9uOiA4MDYsXG5cdHplcmFvcmE6IDgwNyxcblx0bWVsdGFuOiA4MDgsXG5cdG1lbG1ldGFsOiA4MDksXG5cdGdyb29rZXk6IDgxMCxcblx0dGh3YWNrZXk6IDgxMSxcblx0cmlsbGFib29tOiA4MTIsXG5cdHNjb3JidW5ueTogODEzLFxuXHRyYWJvb3Q6IDgxNCxcblx0Y2luZGVyYWNlOiA4MTUsXG5cdHNvYmJsZTogODE2LFxuXHRkcml6emlsZTogODE3LFxuXHRpbnRlbGVvbjogODE4LFxuXHRza3dvdmV0OiA4MTksXG5cdGdyZWVkZW50OiA4MjAsXG5cdHJvb2tpZGVlOiA4MjEsXG5cdGNvcnZpc3F1aXJlOiA4MjIsXG5cdGNvcnZpa25pZ2h0OiA4MjMsXG5cdGJsaXBidWc6IDgyNCxcblx0ZG90dGxlcjogODI1LFxuXHRvcmJlZXRsZTogODI2LFxuXHRuaWNraXQ6IDgyNyxcblx0dGhpZXZ1bDogODI4LFxuXHRnb3NzaWZsZXVyOiA4MjksXG5cdGVsZGVnb3NzOiA4MzAsXG5cdHdvb2xvbzogODMxLFxuXHRkdWJ3b29sOiA4MzIsXG5cdGNoZXd0bGU6IDgzMyxcblx0ZHJlZG5hdzogODM0LFxuXHR5YW1wZXI6IDgzNSxcblx0Ym9sdHVuZDogODM2LFxuXHRyb2x5Y29seTogODM3LFxuXHRjYXJrb2w6IDgzOCxcblx0Y29hbG9zc2FsOiA4MzksXG5cdGFwcGxpbjogODQwLFxuXHRmbGFwcGxlOiA4NDEsXG5cdGFwcGxldHVuOiA4NDIsXG5cdHNpbGljb2JyYTogODQzLFxuXHRzYW5kYWNvbmRhOiA4NDQsXG5cdGNyYW1vcmFudDogODQ1LFxuXHRhcnJva3VkYTogODQ2LFxuXHRiYXJyYXNrZXdkYTogODQ3LFxuXHR0b3hlbDogODQ4LFxuXHR0b3h0cmljaXR5OiA4NDksXG5cdHNpenpsaXBlZGU6IDg1MCxcblx0Y2VudGlza29yY2g6IDg1MSxcblx0Y2xvYmJvcHVzOiA4NTIsXG5cdGdyYXBwbG9jdDogODUzLFxuXHRzaW5pc3RlYTogODU0LFxuXHRwb2x0ZWFnZWlzdDogODU1LFxuXHRoYXRlbm5hOiA4NTYsXG5cdGhhdHRyZW06IDg1Nyxcblx0aGF0dGVyZW5lOiA4NTgsXG5cdGltcGlkaW1wOiA4NTksXG5cdG1vcmdyZW06IDg2MCxcblx0Z3JpbW1zbmFybDogODYxLFxuXHRvYnN0YWdvb246IDg2Mixcblx0cGVycnNlcmtlcjogODYzLFxuXHRjdXJzb2xhOiA4NjQsXG5cdHNpcmZldGNoZDogODY1LFxuXHRtclJpbWU6IDg2Nixcblx0cnVuZXJpZ3VzOiA4NjcsXG5cdG1pbGNlcnk6IDg2OCxcblx0YWxjcmVtaWU6IDg2OSxcblx0ZmFsaW5rczogODcwLFxuXHRwaW5jdXJjaGluOiA4NzEsXG5cdHNub206IDg3Mixcblx0ZnJvc21vdGg6IDg3Myxcblx0c3RvbmpvdXJuZXI6IDg3NCxcblx0ZWlzY3VlOiA4NzUsXG5cdGluZGVlZGVlOiA4NzYsXG5cdG1vcnBla286IDg3Nyxcblx0Y3VmYW50OiA4NzgsXG5cdGNvcHBlcmFqYWg6IDg3OSxcblx0ZHJhY296b2x0OiA4ODAsXG5cdGFyY3Rvem9sdDogODgxLFxuXHRkcmFjb3Zpc2g6IDg4Mixcblx0YXJjdG92aXNoOiA4ODMsXG5cdGR1cmFsdWRvbjogODg0LFxuXHRkcmVlcHk6IDg4NSxcblx0ZHJha2xvYWs6IDg4Nixcblx0ZHJhZ2FwdWx0OiA4ODcsXG5cdHphY2lhbjogODg4LFxuXHR6YW1hemVudGE6IDg4OSxcblx0ZXRlcm5hdHVzOiA4OTAsXG5cdGt1YmZ1OiA4OTEsXG5cdHVyc2hpZnU6IDg5Mixcblx0emFydWRlOiA4OTMsXG5cdHJlZ2llbGVraTogODk0LFxuXHRyZWdpZHJhZ286IDg5NSxcblx0Z2xhc3RyaWVyOiA4OTYsXG5cdHNwZWN0cmllcjogODk3LFxuXHRjYWx5cmV4OiA4OTgsXG5cdHd5cmRlZXI6IDg5OSxcblx0a2xlYXZvcjogOTAwLFxuXHR1cnNhbHVuYTogOTAxLFxuXHRiYXNjdWxlZ2lvbjogOTAyLFxuXHRzZW5hc2xlcjogOTAzLFxuXHRvdmVycXdpbGw6IDkwNCxcblx0ZW5hbW9ydXM6IDkwNSxcblx0c3ByaWdhdGl0bzogOTA2LFxuXHRmbG9yYWdhdG86IDkwNyxcblx0bWVvd3NjYXJhZGE6IDkwOCxcblx0ZnVlY29jbzogOTA5LFxuXHRjcm9jYWxvcjogOTEwLFxuXHRza2VsZWRpcmdlOiA5MTEsXG5cdHF1YXhseTogOTEyLFxuXHRxdWF4d2VsbDogOTEzLFxuXHRxdWFxdWF2YWw6IDkxNCxcblx0bGVjaG9uazogOTE1LFxuXHRvaW5rb2xvZ25lOiA5MTYsXG5cdHRhcm91bnR1bGE6IDkxNyxcblx0c3BpZG9wczogOTE4LFxuXHRueW1ibGU6IDkxOSxcblx0bG9raXg6IDkyMCxcblx0cGF3bWk6IDkyMSxcblx0cGF3bW86IDkyMixcblx0cGF3bW90OiA5MjMsXG5cdHRhbmRlbWF1czogOTI0LFxuXHRtYXVzaG9sZDogOTI1LFxuXHRmaWRvdWdoOiA5MjYsXG5cdGRhY2hzYnVuOiA5MjcsXG5cdHNtb2xpdjogOTI4LFxuXHRkb2xsaXY6IDkyOSxcblx0YXJib2xpdmE6IDkzMCxcblx0c3F1YXdrYWJpbGx5OiA5MzEsXG5cdG5hY2xpOiA5MzIsXG5cdG5hY2xzdGFjazogOTMzLFxuXHRnYXJnYW5hY2w6IDkzNCxcblx0Y2hhcmNhZGV0OiA5MzUsXG5cdGFybWFyb3VnZTogOTM2LFxuXHRjZXJ1bGVkZ2U6IDkzNyxcblx0dGFkYnVsYjogOTM4LFxuXHRiZWxsaWJvbHQ6IDkzOSxcblx0d2F0dHJlbDogOTQwLFxuXHRraWxvd2F0dHJlbDogOTQxLFxuXHRtYXNjaGlmZjogOTQyLFxuXHRtYWJvc3N0aWZmOiA5NDMsXG5cdHNocm9vZGxlOiA5NDQsXG5cdGdyYWZhaWFpOiA5NDUsXG5cdGJyYW1ibGluOiA5NDYsXG5cdGJyYW1ibGVnaGFzdDogOTQ3LFxuXHR0b2Vkc2Nvb2w6IDk0OCxcblx0dG9lZHNjcnVlbDogOTQ5LFxuXHRrbGF3ZjogOTUwLFxuXHRjYXBzYWtpZDogOTUxLFxuXHRzY292aWxsYWluOiA5NTIsXG5cdHJlbGxvcjogOTUzLFxuXHRyYWJzY2E6IDk1NCxcblx0ZmxpdHRsZTogOTU1LFxuXHRlc3BhdGhyYTogOTU2LFxuXHR0aW5rYXRpbms6IDk1Nyxcblx0dGlua2F0dWZmOiA5NTgsXG5cdHRpbmthdG9uOiA5NTksXG5cdHdpZ2xldHQ6IDk2MCxcblx0d3VndHJpbzogOTYxLFxuXHRib21iaXJkaWVyOiA5NjIsXG5cdGZpbml6ZW46IDk2Myxcblx0cGFsYWZpbjogOTY0LFxuXHR2YXJvb206IDk2NSxcblx0cmV2YXZyb29tOiA5NjYsXG5cdGN5Y2xpemFyOiA5NjcsXG5cdG9ydGh3b3JtOiA5NjgsXG5cdGdsaW1tZXQ6IDk2OSxcblx0Z2xpbW1vcmE6IDk3MCxcblx0Z3JlYXZhcmQ6IDk3MSxcblx0aG91bmRzdG9uZTogOTcyLFxuXHRmbGFtaWdvOiA5NzMsXG5cdGNldG9kZGxlOiA5NzQsXG5cdGNldGl0YW46IDk3NSxcblx0dmVsdXphOiA5NzYsXG5cdGRvbmRvem86IDk3Nyxcblx0dGF0c3VnaXJpOiA5NzgsXG5cdGFubmloaWxhcGU6IDk3OSxcblx0Y2xvZHNpcmU6IDk4MCxcblx0ZmFyaWdpcmFmOiA5ODEsXG5cdGR1ZHVuc3BhcmNlOiA5ODIsXG5cdGtpbmdhbWJpdDogOTgzLFxuXHRncmVhdFR1c2s6IDk4NCxcblx0c2NyZWFtVGFpbDogOTg1LFxuXHRicnV0ZUJvbm5ldDogOTg2LFxuXHRmbHV0dGVyTWFuZTogOTg3LFxuXHRzbGl0aGVyV2luZzogOTg4LFxuXHRzYW5keVNob2NrczogOTg5LFxuXHRpcm9uVHJlYWRzOiA5OTAsXG5cdGlyb25CdW5kbGU6IDk5MSxcblx0aXJvbkhhbmRzOiA5OTIsXG5cdGlyb25KdWd1bGlzOiA5OTMsXG5cdGlyb25Nb3RoOiA5OTQsXG5cdGlyb25UaG9ybnM6IDk5NSxcblx0ZnJpZ2FyaWJheDogOTk2LFxuXHRhcmN0aWJheDogOTk3LFxuXHRiYXhjYWxpYnVyOiA5OTgsXG5cdGdpbW1pZ2hvdWw6IDk5OSxcblx0Z2hvbGRlbmdvOiAxMDAwLFxuXHR3b0NoaWVuOiAxMDAxLFxuXHRjaGllblBhbzogMTAwMixcblx0dGluZ0x1OiAxMDAzLFxuXHRjaGlZdTogMTAwNCxcblx0cm9hcmluZ01vb246IDEwMDUsXG5cdGlyb25WYWxpYW50OiAxMDA2LFxuXHRrb3JhaWRvbjogMTAwNyxcblx0bWlyYWlkb246IDEwMDgsXG5cdHdhbGtpbmdXYWtlOiAxMDA5LFxuXHRpcm9uTGVhdmVzOiAxMDEwLFxuXHRkaXBwbGluOiAxMDExLFxuXHRwb2x0Y2hhZ2Vpc3Q6IDEwMTIsXG5cdHNpbmlzdGNoYTogMTAxMyxcblx0b2tpZG9naTogMTAxNCxcblx0bXVua2lkb3JpOiAxMDE1LFxuXHRmZXphbmRpcGl0aTogMTAxNixcblx0b2dlcnBvbjogMTAxNyxcblx0YXJjaGFsdWRvbjogMTAxOCxcblx0aHlkcmVpZ29uOiAxMDE5LFxuXHRnb3VnaW5nRmlyZTogMTAyMCxcblx0cmFnaW5nQm9sdDogMTAyMSxcblx0aXJvbkJvdWxkZXI6IDEwMjIsXG5cdGlyb25Dcm93bjogMTAyMyxcblx0dGVyYXBhZ29zOiAxMDI0LFxuXHRwZWNoYXJ1bnQ6IDEwMjUsXG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGZyYW5jIH0gZnJvbSBcImZyYW5jLW1pblwiO1xuaW1wb3J0IHsgcG9rZW1vbnMgfSBmcm9tIFwiLi9wb2tlZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRW5nbGlzaCh0ZXh0KSB7XG5cdHJldHVybiBmcmFuYyh0ZXh0KSA9PT0gXCJlbmdcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tFbmdsaXNoKGFycmF5KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbmV3YXJyYXkgPSBbXTtcblx0XHRpZiAoYXJyYXlbaV0ubGFuZ3VhZ2UubmFtZSA9PT0gXCJlblwiKSB7XG5cdFx0XHRlbmdsaXNoYXJyYXkucHVzaChhcnJheVtpXSk7XG5cdFx0fVxuXHR9XG5cdGNvbnNvbGUubG9nKGVuZ2xpc2hhcnJheSk7XG59XG5sZXQgcGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c1wiKTtcbmxldCBtaW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXNcIik7XG5sZXQgcG9rZSA9IFwiXCI7XG5sZXQgZmxhdm9yX3RleHQgPSBcIlwiO1xubGV0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmxldCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiKTtcbmxldCBsZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpO1xubGV0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFcIik7XG5sZXQgc3RhdHMgPSBcIlwiO1xuY29uc29sZS5sb2coc3RhdHMpO1xubGV0IG5hbWUgPSBcIlwiO1xubGV0IHR5cGluZzEgPSBcIlwiO1xubGV0IHR5cGluZzIgPSBcIlwiO1xubGV0IHRleHRfaW5mbyA9IFtdO1xubGV0IHBva2VkZXhudW0gPSBcIlwiO1xubGV0IGVuZ2xpc2hhcnJheSA9IFtdO1xubGV0IHNwcml0ZXMgPSBbXTtcblxuLy9jaGVja3MgdG8gaWYgaXQncyB0aGUgbGFzdCBwb2tlbW9uLCBpZiBzbyBpdCBnb2VzIGJhY2sgdG8gdGhlIGZpcnN0XG4vL290aGVyd2lzZSBnbyB0byBuZXh0IHBva2Vtb25cbnBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0aWYgKCFuYW1lIHx8IG5hbWUgPT0gXCJwZWNoYXJ1bnRcIikge1xuXHRcdGNvbnNvbGUubG9nKFwieWVlXCIpO1xuXHRcdGdldFBva2Vtb24oYGJ1bGJhc2F1cmApO1xuXHRcdHNlYXJjaC52YWx1ZSA9IFwiYnVsYmFzYXVyXCI7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBwb2tldmFsdWUgPSBwb2tlbW9uc1tzZWFyY2gudmFsdWVdO1xuXHRcdGNvbnNvbGUubG9nKHBva2V2YWx1ZSk7XG5cdFx0bGV0IG5leHQgPSBwb2tldmFsdWUgKyAxO1xuXHRcdGxldCBrZXlGb3VuZCA9IE9iamVjdC5rZXlzKHBva2Vtb25zKS5maW5kKChrZXkpID0+IHBva2Vtb25zW2tleV0gPT09IG5leHQpO1xuXHRcdHNlYXJjaC52YWx1ZSA9IGtleUZvdW5kO1xuXG5cdFx0Z2V0UG9rZW1vbihwb2tlbW9uc1trZXlGb3VuZF0pO1xuXHR9XG59KTtcblxuLy9jaGVja3MgdG8gc2VlIGlmIGl0cyB0aGUgZmlyc3QgcG9rZW1vbiwgb3IgdGhlcmUgaXMgbm8gcG9rZW1vblxuLy9hbmQgdGhlbiBnb2VzIHRvIHRoZSBsYXN0IHBva2Vtb25cbm1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGlmICghbmFtZSB8fCBuYW1lID09PSBcImJ1bGJhc2F1clwiKSB7XG5cdFx0Y29uc29sZS5sb2coXCJ5ZWVcIik7XG5cdFx0Z2V0UG9rZW1vbihgcGVjaGFydW50YCk7XG5cdFx0c2VhcmNoLnZhbHVlID0gXCJwZWNoYXJ1bnRcIjtcblx0fSBlbHNlIHtcblx0XHRsZXQgcG9rZXZhbHVlID0gcG9rZW1vbnNbc2VhcmNoLnZhbHVlXTtcblx0XHRjb25zb2xlLmxvZyhwb2tldmFsdWUpO1xuXHRcdGxldCBuZXh0ID0gcG9rZXZhbHVlIC0gMTtcblx0XHRsZXQga2V5Rm91bmQgPSBPYmplY3Qua2V5cyhwb2tlbW9ucykuZmluZCgoa2V5KSA9PiBwb2tlbW9uc1trZXldID09PSBuZXh0KTtcblx0XHRzZWFyY2gudmFsdWUgPSBrZXlGb3VuZDtcblx0XHRnZXRQb2tlbW9uKHBva2Vtb25zW2tleUZvdW5kXSk7XG5cdH1cbn0pO1xuXG4vL3N1Ym1pdHMgdGhlIHBva2Vtb24gYW5kIGNhbGxzIHRoZSBnZXRQb2tlbW9uIGZ1bmN0aW9uIHdpdGggdGhlIHNlYXJjaCB2YWx1ZVxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGdldFBva2Vtb24oc2VhcmNoLnZhbHVlKTtcbn0pO1xuXG4vL3VwbG9hZHMgdGhlIGltYWdlIGFuZCBwbGF5cyB0aGUgY3J5IHNvdW5kIGZyb20gdGhlIGZpcnN0IEFQSSBmZXRjaCByZXF1ZXN0XG5mdW5jdGlvbiBhZGRJbWFnZShwb2tlKSB7XG5cdGxldCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlblwiKTtcblx0c2NyZWVuLmlubmVySFRNTCA9IFwiXCI7XG5cdGxldCBzcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwb2tlZGV4bnVtID0gcG9rZS5pZDtcblx0c3ByaXRlLnNyYyA9IHBva2Uuc3ByaXRlcy5mcm9udF9kZWZhdWx0O1xuXHRsZXQgc3ByaXRlcyA9IFtcblx0XHRwb2tlLnNwcml0ZXMuYmFja19kZWZhdWx0LFxuXHRcdHBva2Uuc3ByaXRlc19mcm9udF9kZWZhdWx0LFxuXHRcdHBva2Uuc3ByaXRlcy5mcm9udF9zaGlueSxcblx0XTtcblx0bGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwcml0ZXMubGVuZ3RoKTtcblxuXHRzY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRzcHJpdGUuc3JjID0gcG9rZS5zcHJpdGVzLmZyb250X3NoaW55O1xuXHR9KTtcblx0bmFtZSA9IHBva2UubmFtZTtcblx0c3RhdHMgPSBwb2tlLnN0YXRzO1xuXHR0eXBpbmcxID0gcG9rZS50eXBlc1swXS50eXBlLm5hbWU7XG5cdGlmICghcG9rZS50eXBlc1sxXSkge1xuXHRcdHR5cGluZzIgPSBcIlwiO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGluZzIgPSBwb2tlLnR5cGVzWzFdLnR5cGUubmFtZTtcblx0fVxuXHRzY3JlZW4uYXBwZW5kKHNwcml0ZSk7XG5cdGNvbnNvbGUubG9nKHBva2UpO1xuXHRsZXQgY3J5ID0gXCJcIjtcblx0aWYgKCFwb2tlLmNyaWVzLmxlZ2FjeSkge1xuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG5cdFx0Y3J5ID0gbmV3IEF1ZGlvKHBva2UuY3JpZXMubGF0ZXN0KTtcblx0fSBlbHNlIHtcblx0XHRjcnkgPSBuZXcgQXVkaW8ocG9rZS5jcmllcy5sZWdhY3kpO1xuXHR9XG5cdGNyeS5wbGF5KCk7XG5cdHJldHVybiBuYW1lO1xufVxuXG4vL2dldHMgdGhlIHBva2VkZXggaW5mbyBmcm9tIHRoZSBzZWNvbmQgQVBJIGZldGNoIHJlcXVlc3QgYW5kIHB1dHMgaXQgb24gdGhlIHNjcmVlblxuZnVuY3Rpb24gYWRkRmxhdm9yKGZsYXZvcikge1xuXHRkYXRhLmlubmVySFRNTCA9IFwiXCI7XG5cdGVuZ2xpc2hhcnJheSA9IFtdO1xuXHRsZXQgZW5nbGlzaGNoZWNrID0gY2hlY2tFbmdsaXNoKGZsYXZvci5mbGF2b3JfdGV4dF9lbnRyaWVzKTtcblx0bGV0IG51bXogPSAoKCkgPT4ge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmdsaXNoYXJyYXkubGVuZ3RoKTtcblx0fSkoKTtcblx0bGV0IGJhc2UgPSBlbmdsaXNoYXJyYXlbbnVtel07XG5cdGxldCBkZXNjcmlwdGlvbiA9IGJhc2UuZmxhdm9yX3RleHQ7XG5cdGxldCB2ZXJzaW9uID0gYmFzZS52ZXJzaW9uLm5hbWU7XG5cdGxldCByZWdpb24gPSBmbGF2b3IucG9rZWRleF9udW1iZXJzWzFdLnBva2VkZXgubmFtZTtcblx0bGV0IG5hbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsZXQgaHAgPSBzdGF0c1swXS5zdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0c1swXS5iYXNlX3N0YXQ7XG5cdGxldCBhdHRhY2sgPSBzdGF0c1sxXS5zdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0c1sxXS5iYXNlX3N0YXQ7XG5cdGxldCBkZWZlbnNlID0gc3RhdHNbMl0uc3RhdC5uYW1lICsgXCI6IFwiICsgc3RhdHNbMl0uYmFzZV9zdGF0O1xuXHRsZXQgc3BlY2lhbF9hdHRhY2sgPSBzdGF0c1szXS5zdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0c1szXS5iYXNlX3N0YXQ7XG5cdGxldCBzcGVjaWFsX2RlZmVuc2UgPSBzdGF0c1s0XS5zdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0c1s0XS5iYXNlX3N0YXQ7XG5cdGxldCBzcGVlZCA9IHN0YXRzWzVdLnN0YXQubmFtZSArIFwiOiBcIiArIHN0YXRzWzVdLmJhc2Vfc3RhdDtcblx0Ly9sZXQgc3RhbWluYSA9IHN0YXRzWzZdLnN0YXQubmFtZSArIFwiOlwiICsgc3RhdHNbNl0uYmFzZV9zdGF0O1xuXHRsZXQgYWxsc3RhdHMgPSBbaHAsIGF0dGFjaywgZGVmZW5zZSwgc3BlY2lhbF9hdHRhY2ssIHNwZWNpYWxfZGVmZW5zZSwgc3BlZWRdO1xuXHRjb25zb2xlLmxvZyhhbGxzdGF0cyk7XG5cdGxldCBwcmVldm9sdmUgPSBmbGF2b3IuZXZvbHZlc19mcm9tX3NwZWNpZXM7XG5cdGlmIChwcmVldm9sdmUgPT09IG51bGwpIHtcblx0XHRwcmVldm9sdmUgPSBcIm5vbmVcIjtcblx0fSBlbHNlIHtcblx0XHRwcmVldm9sdmUgPSBwcmVldm9sdmUubmFtZTtcblx0fVxuXG5cdG5hbWVkaXYuaW5uZXJIVE1MID1cblx0XHRcIk5hbWU6IFwiICtcblx0XHRuYW1lICtcblx0XHRcIjxicj5cIiArXG5cdFx0YFBva2VkZXggdmVyc2lvbjpgICtcblx0XHRcIiBcIiArXG5cdFx0dmVyc2lvbiArXG5cdFx0YDxicj4gYCArXG5cdFx0YE5hdGlvbmFsIERleCM6JHtwb2tlZGV4bnVtfSA8YnI+ICBUeXBlOiR7dHlwaW5nMX0gXG5cdFx0IDxicj4gUmVnaW9uOiR7cmVnaW9ufSAgPGJyPiBFdm9sdmVzIGZyb206JHtwcmVldm9sdmV9IDxicj4gPGJyPlxuXHRcdCR7ZGVzY3JpcHRpb259PGJyPiA8YnI+YCArXG5cdFx0aHAgK1xuXHRcdGA8YnI+IGAgK1xuXHRcdGF0dGFjayArXG5cdFx0XCI8YnI+XCIgK1xuXHRcdGRlZmVuc2UgK1xuXHRcdGA8YnI+IGAgK1xuXHRcdHNwZWNpYWxfYXR0YWNrICtcblx0XHRcIjxicj5cIiArXG5cdFx0c3BlY2lhbF9kZWZlbnNlICtcblx0XHRgPGJyPiBgICtcblx0XHRzcGVlZCArXG5cdFx0XCI8YnI+XCI7XG5cdG5hbWVkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lZGl2XCIpO1xuXHRkYXRhLmFwcGVuZChuYW1lZGl2KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihwb2tlbW9uKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcG9rZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwb2tlbW9ufWAsIHtcblx0XHRcdG1vZGU6IFwiY29yc1wiLFxuXHRcdH0pXG5cdFx0XHQudGhlbigocG9rZSkgPT4gcG9rZS5qc29uKCkpXG5cdFx0XHQudGhlbigocG9rZSkgPT4ge1xuXHRcdFx0XHRhZGRJbWFnZShwb2tlKTtcblxuXHRcdFx0XHRyZXR1cm4geyBwb2tlIH07XG5cdFx0XHR9KTtcblxuXHRcdGNvbnN0IGZsYXZvciA9IGF3YWl0IGZldGNoKFxuXHRcdFx0YGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zcGVjaWVzLyR7cG9rZW1vbn1gLFxuXHRcdFx0e1xuXHRcdFx0XHRtb2RlOiBcImNvcnNcIixcblx0XHRcdH1cblx0XHQpXG5cdFx0XHQudGhlbigoZmxhdm9yKSA9PiBmbGF2b3IuanNvbigpKVxuXHRcdFx0LnRoZW4oKGZsYXZvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhmbGF2b3IpO1xuXHRcdFx0XHRhZGRGbGF2b3IoZmxhdm9yKTtcblx0XHRcdFx0cmV0dXJuIGZsYXZvcjtcblx0XHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHRhbGVydChcIlNvcnJ5LCB0aGlzIHBva2Vtb24gaXNuJ3QgZm91bmQuICBUcnkgYWdhaW5cIik7XG5cdFx0aWYgKG5hbWUgPT09IFwiXCIpIHtcblx0XHRcdGdldFBva2Vtb24oXCJidWxiYXNhdXJcIik7XG5cdFx0XHRzZWFyY2gudmFsdWUgPSBcImJ1bGJhc2F1clwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRQb2tlbW9uKG5hbWUpO1xuXHRcdFx0c2VhcmNoLnZhbHVlID0gbmFtZTtcblx0XHR9XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==