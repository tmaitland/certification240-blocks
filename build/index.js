/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/landing-header.js":
/*!**************************************!*\
  !*** ./src/blocks/landing-header.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Button
} = wp.components;
const {
  RichText,
  PlainText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
registerBlockType("cert-blocks/landing-header", {
  title: __('Landing Header'),
  icon: 'cover-image',
  category: 'cert-block',
  description: __('Landing page header with image, heading, and paragraph text'),
  attributes: {
    image_url: {
      type: "string",
      default: "Select Image"
    },
    heading: {
      type: "string",
      default: "Headline goes here"
    },
    paragraph: {
      type: "string",
      default: "Add paragraph here"
    }
  },
  edit: props => {
    const headerImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover',
      height: '500px'
    };

    const get_image = img => {
      props.setAttributes({
        image_ID: img.id,
        image_url: img.url,
        image_alt: img.alt
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "full-header-wp-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-full-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      onSelect: get_image,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "media-button",
          onClick: open
        }, props.attributes.image_url);
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image landing-header-image",
      style: headerImageCSS
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "contain-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h1",
      onChange: new_value => {
        props.setAttributes({
          heading: new_value
        });
      },
      value: props.attributes.heading,
      className: "head-heading"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PlainText, {
      multiline: "p",
      onChange: new_value => {
        props.setAttributes({
          paragraph: new_value
        });
      },
      value: props.attributes.paragraph,
      className: "head-paragraph"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/button"] // renderAppender={() => appenderToUse()}
      ,
      className: "hero-cta-button",
      placeholder: "Add Inner Block - Button"
    })))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "landing-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "header-img-bg",
      style: {
        backgroundImage: `url('${props.attributes.image_url}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "relative"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-text-btn"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "h1",
      className: "landing-heading",
      value: props.attributes.heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "landing-paragraph"
    }, props.attributes.paragraph), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", useBlockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null)))));
  }
});

/***/ }),

/***/ "./src/stylesheets/editor.scss":
/*!*************************************!*\
  !*** ./src/stylesheets/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/stylesheets/styles.scss":
/*!*************************************!*\
  !*** ./src/stylesheets/styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/editor.scss */ "./src/stylesheets/editor.scss");
/* harmony import */ var _stylesheets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/styles.scss */ "./src/stylesheets/styles.scss");
/* harmony import */ var _blocks_landing_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/landing-header */ "./src/blocks/landing-header.js");



}();
/******/ })()
;
//# sourceMappingURL=index.js.map