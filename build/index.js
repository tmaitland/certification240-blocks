/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/TextControl.jsx":
/*!***********************************************!*\
  !*** ./src/blocks/components/TextControl.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const {
  Fragment
} = wp.element;

const WSTextControl = props => {
  let theIndex = props.index;
  let theClassName = props.className;
  let objectName = props.objectName;
  const theAttribute = props.attribute;
  const maxCharacters = props.maxCharacters;
  const label = props.theLabel;
  theIndex == null || theIndex == undefined ? theIndex = 0 : null;
  theClassName == null || theClassName == undefined ? theClassName = "" : null;
  const [counter, setCount] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [pressedDelete, setpressedDelete] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [didPaste, setPasted] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);

  const handleKeyDown = event => {
    event.keyCode == 8 ? setpressedDelete(true) : null;
  };

  const handlePaste = event => {
    setPasted(true);
    const pasted = event.clipboardData.getData("Text");
    setCount(counter + pasted.length);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl // help={
  // 	// counter > 0 ? `Characters left: ${maxCharacters - counter}` : null
  // 	`Characters left: ${maxCharacters - counter}`
  // }
  , {
    label: label,
    onKeyDown: handleKeyDown,
    onPaste: handlePaste,
    onChange: new_val => {
      !didPaste ? setCount(counter + 1) : null;
      setPasted(false);
      counter > 0 && pressedDelete == true ? setCount(counter - 1) : null;
      setpressedDelete(false);
      counter > maxCharacters - 1 ? setCount(0) : null;
      counter > maxCharacters - 1 ? new_val = null : null;
      props.theHandler(new_val, theIndex, objectName, theAttribute);
    },
    value: theAttribute[theIndex][objectName] ? theAttribute[theIndex][objectName] : "",
    className: theClassName
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, counter >= 0 && counter < maxCharacters - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "custom-primary-input-alert"
  }, `Characters left: ${maxCharacters - counter}`), counter > maxCharacters - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "custom-danger-input-alert"
  }, `Max ${maxCharacters} characters exceeded`), counter == maxCharacters - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "custom-warning-input-alert"
  }, `You have 1 character left. Proceeding will delete your text.`))));
};

/* harmony default export */ __webpack_exports__["default"] = (WSTextControl);

/***/ }),

/***/ "./src/blocks/general-info-text.js":
/*!*****************************************!*\
  !*** ./src/blocks/general-info-text.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Dashicon
} = wp.components;
const {
  RichText,
  useBlockProps,
  BlockControls
} = wp.blockEditor;
registerBlockType("cert-blocks/general-info", {
  title: __('General Informational Text'),
  icon: 'text',
  category: 'cert-block',
  description: __('General information text box to accompany other blocks'),
  attributes: {
    info_text: {
      type: "string",
      default: "Informational text goes here"
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "informational-text-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      multiline: "p",
      className: "informational-text-box-edit",
      value: props.attributes.info_text,
      onChange: new_value => {
        props.setAttributes({
          info_text: new_value
        });
      }
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "informational-text-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      className: "info-text-box",
      tagName: "p",
      value: props.attributes.info_text
    }));
  }
});

/***/ }),

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
  Button,
  Dashicon
} = wp.components;
const {
  RichText,
  PlainText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps,
  InspectorControls,
  ColorPalette,
  TextControl
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
    },
    imgExists: {
      type: "boolean",
      default: false
    },
    bg_color: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: props => {
    const headerImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover',
      height: "500px"
    };

    const get_image = img => {
      props.setAttributes({
        image_ID: img.id,
        image_url: img.url,
        image_alt: img.alt
      });
    };

    const delete_image = img => {
      props.setAttributes({
        image_ID: null,
        image_url: null,
        image_alt: null
      });
    };

    const addBGColor = hex_bg_color => {
      props.setAttributes({
        bg_color: hex_bg_color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "full-header-wp-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-full-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, !props.attributes.imgExists && !props.attributes.image_url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      onSelect: get_image,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "media-button",
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dashicon, {
          icon: "format-image",
          size: "20"
        }), "\xA0", __(" Choose Background Image"));
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      className: "btn-remove",
      onClick: delete_image
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dashicon, {
      icon: "no",
      size: "20"
    }), "\xA0", __(" Remove Background Image")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
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
      allowedBlocks: ["core/button"],
      className: "hero-cta-button",
      placeholder: "Add Inner Block - Button"
    })))));
  },
  save: props => {
    const headerImageCSS = {
      backgroundImage: `url(${props.attributes.image_url})`
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "landing-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "header-img-bg",
      style: headerImageCSS
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-text-btn"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "h1",
      className: "landing-heading",
      value: props.attributes.heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "p",
      className: "landing-paragraph",
      value: props.attributes.paragraph
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", useBlockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null)))));
  }
});

/***/ }),

/***/ "./src/blocks/three-images.js":
/*!************************************!*\
  !*** ./src/blocks/three-images.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TextControl */ "./src/blocks/components/TextControl.jsx");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Button,
  Dashicon
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  RichText,
  PlainText,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
 // import ImgSelector from "../helper-functions/img-selector";

registerBlockType("cert-blocks/three-images", {
  title: __('Three Images with Content'),
  icon: 'images-alt2',
  category: 'cert-block',
  description: __('Three images with title text content for each'),
  attributes: {
    section_heading: {
      type: "string",
      default: "Section heading goes here"
    },
    images: {
      type: "array",
      default: []
    },
    imageCount: {
      type: "number",
      default: 0
    },
    maxCount: {
      type: "number",
      default: 3
    },
    notPreview: {
      type: "boolean",
      default: true
    }
  },
  edit: props => {
    let count;
    props.setAttributes({
      imageCount: 3
    });

    if (props.attributes.imageCount > 0 && props.attributes.images[0] == undefined) {
      for (count = 0; count < props.attributes.imageCount; count++) {
        props.attributes.images.push({});
      }
    }

    if (props.attributes.imageCount == 0) {
      for (count = 0; count < props.attributes.maxCount; count++) {
        props.attributes.images.pop();
      }
    }

    const defaultImage = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";
    let previewImage = [defaultImage];

    for (count = 0; count < props.attributes.imageCount; count++) {
      if (props.attributes.images[count] && props.attributes.images[count].image_url) {
        previewImage[count] = props.attributes.images[count].image_url;
      }

      if (previewImage[count] === undefined) {
        previewImage[count] = defaultImage;
      }
    }

    const textHandler = _components_TextControl__WEBPACK_IMPORTED_MODULE_1__["default"];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-images-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      multiline: "h2",
      onChange: new_value => {
        props.setAttributes({
          section_heading: new_value
        });
      },
      value: props.attributes.section_heading,
      className: "section-heading-edit"
    }), props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-images-content"
    }, props.attributes.images.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      onChange: new_val => {
        const new_images = [...props.attributes.images];
        new_images[index].heading = new_val;
        props.setAttributes({
          images: new_images
        });
      },
      value: props.attributes.images[index].heading ? props.attributes.images[index].heading : `Heading ${index + 1}`,
      className: "image-heading"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-container",
      style: {
        backgroundImage: `url('${previewImage[index]}')`
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-data-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-link-input"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Image ", index + 1, " Link:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.images[index].link,
      onChange: new_val => {
        const new_images = [...props.attributes.images];
        new_images[index].link = new_val;
        props.setAttributes({
          images: new_images
        });
      },
      placeholder: `Enter Image ${index + 1} URL: (example: https://www.google.com)`,
      theHandler: textHandler,
      index: index
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        margin: "auto",
        marginTop: "20px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: media => {
        const new_images = [...props.attributes.images];
        new_images[index].image_alt = media.alt;
        new_images[index].image_url = media.url;
        new_images[index].image_id = index;
        props.setAttributes({
          images: new_images
        });
      },
      type: "image",
      value: props.attributes.images[index].image_id,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: "image-button-selector",
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
          icon: "format-image",
          size: "20"
        }), "\xA0", __(`Choose Image ${index + 1}`));
      }
    })))))))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-images-wp-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      className: "headline",
      tagName: "h2",
      value: props.attributes.section_heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-images-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, props.attributes.images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "image-link",
      href: props.attributes.images[index].link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "image-headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.images[index].heading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hold-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "the-image",
      src: props.attributes.images[index].image_url
    }))))))));
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

/***/ "./src/stylesheets/reusable.scss":
/*!***************************************!*\
  !*** ./src/stylesheets/reusable.scss ***!
  \***************************************/
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

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
/* harmony import */ var _stylesheets_reusable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/reusable.scss */ "./src/stylesheets/reusable.scss");
/* harmony import */ var _blocks_landing_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/landing-header */ "./src/blocks/landing-header.js");
/* harmony import */ var _blocks_three_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/three-images */ "./src/blocks/three-images.js");
/* harmony import */ var _blocks_general_info_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/general-info-text */ "./src/blocks/general-info-text.js");






}();
/******/ })()
;
//# sourceMappingURL=index.js.map