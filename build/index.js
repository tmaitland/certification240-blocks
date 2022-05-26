/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/article-with-image.js":
/*!******************************************!*\
  !*** ./src/blocks/article-with-image.js ***!
  \******************************************/
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
  Dashicon,
  Button
} = wp.components;
const {
  RichText,
  InnerBlocks,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
registerBlockType("cert-blocks/article-with-image", {
  title: __("Article with Image"),
  icon: "media-document",
  category: "cert-block",
  description: __("Article with header and lower left image"),
  attributes: {
    heading: {
      type: "string",
      default: "Article heading goes here"
    },
    image_url: {
      type: "string",
      default: "Article image goes here"
    }
  },
  edit: props => {
    const get_image = img => {
      props.setAttributes({
        image_ID: img.id,
        image_url: img.url,
        image_alt: img.alt
      });
    };

    const defaultImage = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";
    let previewImage = [defaultImage];

    if (props.attributes.image_url == "Article image goes here") {
      props.attributes.image_url = previewImage;
    } else {
      props.attributes.image_url = props.attributes.image_url;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "article-with-image-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-article-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h2",
      value: props.attributes.heading,
      onChange: new_value => {
        props.setAttributes({
          heading: new_value
        });
      },
      className: "article-heading-edit"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
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
        }), "\xA0", __(" Choose Article Image"));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-image-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: props.attributes.image_url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Add Inner Block - Paragraph"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/paragraph"],
      className: "the-text-edit",
      placeholder: "Start typing here to add Inner Block - Paragraph"
    }))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "article-with-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "article-with-image-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "article-text-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.heading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", useBlockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "article-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: props.attributes.image_url
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/blockquote.js":
/*!**********************************!*\
  !*** ./src/blocks/blockquote.js ***!
  \**********************************/
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
  Dashicon
} = wp.components;
const {
  InnerBlocks,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
registerBlockType("cert-blocks/blockquote", {
  title: __('Block Quote'),
  icon: 'format-quote',
  category: 'cert-block',
  description: __('Features a block quote with quotation images'),
  attributes: {},
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "blockquote-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Add Inner Block - Quote"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/quote"],
      className: "quote-edit"
    })));
  },
  save: props => {
    const leftQuote = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/quote-left.png";
    const rightQuote = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/quote-right.png";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "block-quote"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "block-quote-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "quote-images"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: leftQuote,
      className: "left-qt-img"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: rightQuote,
      className: "right-qt-img"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, useBlockProps)));
  }
});

/***/ }),

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
  Dashicon
} = wp.components;
const {
  RichText,
  useBlockProps,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
registerBlockType("cert-blocks/general-info", {
  title: __('General Informational Text'),
  icon: 'text',
  category: 'cert-block',
  description: __('General information text box to accompany other blocks'),
  attributes: {
    info_text: {
      type: "array",
      source: "children",
      selector: "p",
      default: "General Information goes here"
    },
    alignment: {
      type: "string",
      default: "none"
    }
  },
  edit: props => {
    const onChangeAlignment = newAlignment => {
      props.setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps(), {
      className: "informational-text-block-editor"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AlignmentToolbar, {
      value: props.attributes.alignment,
      onChange: onChangeAlignment
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      className: props.attributes.className,
      placeholder: props.attributes.info_text,
      value: props.attributes.info_text,
      onChange: new_value => {
        props.setAttributes({
          info_text: new_value
        });
      },
      style: {
        textAlign: props.attributes.alignment
      }
    }));
  },
  save: props => {
    const blockProps = useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: "hold-text-containers"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "informational-text-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "p",
      className: `info-text-align-${props.attributes.alignment}`,
      value: props.attributes.info_text
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    })));
  }
});

/***/ }),

/***/ "./src/blocks/img-left-content-right.js":
/*!**********************************************!*\
  !*** ./src/blocks/img-left-content-right.js ***!
  \**********************************************/
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
  Dashicon,
  Button,
  Fragment
} = wp.components;
const {
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
registerBlockType("cert-blocks/img-left-content-right", {
  title: __('Left Image Content Right'),
  icon: "align-left",
  category: "cert-block",
  description: __("A left-aligned image with content aligned to the right"),
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
    const contentImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover',
      height: '400px'
    };

    const get_image = img => {
      props.setAttributes({
        image_ID: img.id,
        image_url: img.url,
        image_alt: img.alt
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "imgl-contentr-wp-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-image-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
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
        }), "\xA0", __(" Choose Content Image"));
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-imgl-contentr"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-image",
      style: contentImageCSS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h2",
      onChange: new_value => {
        props.setAttributes({
          heading: new_value
        });
      },
      value: props.attributes.heading,
      className: "content-heading"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "p",
      placeholder: props.attributes.paragraph,
      onChange: new_value => {
        props.setAttributes({
          paragraph: new_value
        });
      },
      value: props.attributes.paragraph,
      className: "content-paragraph"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps(), {
      allowedBlocks: ["core/button"],
      className: "cta-button",
      placeholder: "Add Inner Block - Button"
    })))));
  },
  save: props => {
    const blockProps = useBlockProps.save();
    const contentImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover'
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: "img-left-content-right"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-hold",
      style: contentImageCSS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "text-hold"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "h2",
      className: "heading-content",
      value: props.attributes.heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.paragraph,
      tagName: "p",
      className: "paragraph-content"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null))));
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
      className: "cta-button",
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

/***/ "./src/blocks/text-hero-cta.js":
/*!*************************************!*\
  !*** ./src/blocks/text-hero-cta.js ***!
  \*************************************/
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
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
registerBlockType("cert-blocks/text-hero-cta", {
  title: __("Text Hero with CTA"),
  icon: "text",
  category: "cert-block",
  description: __("Hero header with text and a CTA button"),
  attributes: {
    heading: {
      type: "string",
      default: "Heading goes here"
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps(), {
      className: "text-hero-cta-editor"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-content-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h1",
      onChange: new_value => {
        props.setAttributes({
          heading: new_value
        });
      },
      value: props.attributes.heading,
      className: "text-heading-edit"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
      allowedBlocks: ["core/button"],
      className: "cta-button",
      placeholder: "Add Inner Block - Button"
    })));
  },
  save: props => {
    const blockProps = useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: "text-hero-cta"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      tagName: "h1",
      className: "text-heading",
      value: props.attributes.heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/three-images.js":
/*!************************************!*\
  !*** ./src/blocks/three-images.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TextControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TextControl */ "./src/blocks/components/TextControl.jsx");


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
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps
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

    const textHandler = _components_TextControl__WEBPACK_IMPORTED_MODULE_2__["default"];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-images-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h2",
      onChange: new_value => {
        props.setAttributes({
          section_heading: new_value
        });
      },
      value: props.attributes.section_heading,
      className: "section-heading-edit"
    }), props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-images-content"
    }, props.attributes.images.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-container",
      style: {
        backgroundImage: `url('${previewImage[index]}')`
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-data-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-link-input"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Image ", index + 1, " Link:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      style: {
        margin: "auto",
        marginTop: "20px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
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
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "image-button-selector",
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dashicon, {
          icon: "format-image",
          size: "20"
        }), "\xA0", __(`Choose Image ${index + 1}`));
      }
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Add Inner Block - Paragraph"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/paragraph"],
      className: "the-text-edit",
      placeholder: "Add Inner Block - Paragraph"
    }))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-images-wp-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      className: "headline",
      tagName: "h2",
      value: props.attributes.section_heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-images-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, props.attributes.images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: "image-link",
      href: props.attributes.images[index].link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
      className: "image-headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.images[index].heading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      className: "the-image",
      src: props.attributes.images[index].image_url
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-extra-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "the-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, useBlockProps)))));
  }
});

/***/ }),

/***/ "./src/blocks/three-step-path.js":
/*!***************************************!*\
  !*** ./src/blocks/three-step-path.js ***!
  \***************************************/
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
  Dashicon,
  Button
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
registerBlockType("cert-blocks/three-step-path", {
  title: __("Three Step Path with Content"),
  icon: "editor-ol",
  category: "cert-block",
  description: __("List of three content pieces with image left align and text right aligned"),
  attributes: {
    section_heading: {
      type: "string",
      default: "Section heading goes here"
    },
    steps: {
      type: "array",
      default: []
    },
    stepCount: {
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
    },
    designImgs: {
      type: "array",
      default: []
    },
    designImgCount: {
      type: "number",
      default: 0
    },
    maxDImgCount: {
      type: "number",
      default: 4
    }
  },
  edit: props => {
    let count;
    props.setAttributes({
      stepCount: 3
    });

    if (props.attributes.stepCount > 0 && props.attributes.steps[0] == undefined) {
      for (count = 0; count < props.attributes.stepCount; count++) {
        props.attributes.steps.push({});
      }
    }

    if (props.attributes.stepCount == 0) {
      for (count = 0; count < props.attributes.maxCount; count++) {
        props.attributes.steps.pop();
      }
    }

    const defaultImage = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";
    let previewImage = [defaultImage];
    /* display preview image if image is not uploaded*/

    for (count = 0; count < props.attributes.stepCount; count++) {
      if (props.attributes.steps[count] && props.attributes.steps[count].image_url) {
        previewImage[count] = props.attributes.steps[count].image_url;
      }

      if (previewImage[count] === undefined) {
        previewImage[count] = defaultImage;
      }
    }
    /* display buttons to upload small design images */


    let di_count;
    props.setAttributes({
      designImgCount: 4
    });

    if (props.attributes.designImgCount > 0 && props.attributes.designImgs[0] == undefined) {
      for (di_count = 0; di_count < props.attributes.designImgCount; di_count++) {
        props.attributes.designImgs.push({});
      }
    }

    if (props.attributes.designImgCount == 0) {
      for (di_count = 0; di_count < props.attributes.maxDImgCount; di_count++) {
        props.attributes.designImgs.pop();
      }
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-step-path-block-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      multiline: "h2",
      onChange: new_value => {
        props.setAttributes({
          section_heading: new_value
        });
      },
      value: props.attributes.section_heading,
      className: "section-heading-edit"
    }), props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-design-img-btns"
    }, props.attributes.designImgs.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-design-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      className: `design-image img-${index + 1}`,
      src: props.attributes.designImgs[index].image_url
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      onSelect: media => {
        const new_designs = [...props.attributes.designImgs];
        new_designs[index].image_alt = media.alt;
        new_designs[index].image_url = media.url;
        new_designs[index].image_id = index;
        props.setAttributes({
          designImgs: new_designs
        });
      },
      type: "image",
      value: props.attributes.designImgs[index].image_id,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "design-image-button-selector",
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dashicon, {
          icon: "format-image",
          size: "20"
        }), "\xA0", __(`Choose Design Image ${index + 1}`));
      }
    })))))), props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-step-content-edit"
    }, props.attributes.steps.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-step-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "image-container",
      style: {
        backgroundImage: `url('${previewImage[index]}')`
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      onSelect: media => {
        const new_steps = [...props.attributes.steps];
        new_steps[index].image_alt = media.alt;
        new_steps[index].image_url = media.url;
        new_steps[index].image_id = index;
        props.setAttributes({
          steps: new_steps
        });
      },
      type: "image",
      value: props.attributes.steps[index].image_id,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "image-button-selector",
          onClick: open
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dashicon, {
          icon: "format-image",
          size: "20"
        }), "\xA0", __(`Choose Image ${index + 1}`));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "subheading-content-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: "div",
      onChange: new_val => {
        const new_steps = [...props.attributes.steps];
        new_steps[index].heading = new_val;
        props.setAttributes({
          steps: new_steps
        });
      },
      value: props.attributes.steps[index].heading ? props.attributes.steps[index].heading : `Subeading for Step ${index + 1}`,
      className: "step-heading"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "paragraph-content-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: "div",
      onChange: new_val => {
        const new_steps = [...props.attributes.steps];
        new_steps[index].paragraph = new_val;
        props.setAttributes({
          steps: new_steps
        });
      },
      value: props.attributes.steps[index].paragraph ? props.attributes.steps[index].paragraph : `Paragraph for Step ${index + 1}`,
      className: "step-paragraph"
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, "Add Inner Block - Paragraph"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/paragraph"],
      className: "the-text-edit",
      placeholder: "Add Inner Block - Paragraph"
    }))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "three-step-path-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      className: "headline",
      tagName: "h2",
      value: props.attributes.section_heading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-steps-content"
    }, props.attributes.designImgs.map((design, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      className: `the-design-img img-${index + 1}`,
      src: props.attributes.designImgs[index].image_url
    })), props.attributes.steps.map((step, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "each-step"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "step-image",
      style: `background-image: url(${props.attributes.steps[index].image_url})`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "step-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.steps[index].heading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText.Content, {
      value: props.attributes.steps[index].paragraph
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-extra-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "the-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, useBlockProps)))));
  }
});

/***/ }),

/***/ "./src/blocks/three-text-boxes.js":
/*!****************************************!*\
  !*** ./src/blocks/three-text-boxes.js ***!
  \****************************************/
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
  Fragment
} = wp.element;
const {
  RichText
} = wp.blockEditor;
registerBlockType("cert-blocks/three-text-boxes", {
  title: __("Three Text Boxes"),
  icon: "text",
  category: "cert-block",
  description: __("Three text boxes with a header for each"),
  attributes: {
    boxes: {
      type: "array",
      default: []
    },
    boxCount: {
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
      boxCount: 3
    });

    if (props.attributes.boxCount > 0 && props.attributes.boxes[0] == undefined) {
      for (count = 0; count < props.attributes.boxCount; count++) {
        props.attributes.boxes.push({});
      }
    }

    if (props.attributes.boxCount == 0) {
      for (count = 0; count < props.attributes.maxCount; count++) {
        props.attributes.boxes.pop();
      }
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-text-boxes-block-editor"
    }, props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-boxes-content"
    }, props.attributes.boxes.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "box-heading-text-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      onChange: new_val => {
        const new_boxes = [...props.attributes.boxes];
        new_boxes[index].heading = new_val;
        props.setAttributes({
          boxes: new_boxes
        });
      },
      value: props.attributes.boxes[index].heading ? props.attributes.boxes[index].heading : `Heading ${index + 1}`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "box-paragraph-edit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.boxes[index].paragraph ? props.attributes.boxes[index].paragraph : `Paragraph ${index + 1}`,
      onChange: new_val => {
        const new_boxes = [...props.attributes.boxes];
        new_boxes[index].paragraph = new_val;
        props.setAttributes({
          boxes: new_boxes
        });
      },
      index: index
    }))))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-text-boxes-wp-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "three-text-boxes-container"
    }, props.attributes.boxes.map((box, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "each-box"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "box-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.boxes[index].heading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "box-paragraph"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.boxes[index].paragraph
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
/* harmony import */ var _blocks_img_left_content_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/img-left-content-right */ "./src/blocks/img-left-content-right.js");
/* harmony import */ var _blocks_three_text_boxes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/three-text-boxes */ "./src/blocks/three-text-boxes.js");
/* harmony import */ var _blocks_text_hero_cta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/text-hero-cta */ "./src/blocks/text-hero-cta.js");
/* harmony import */ var _blocks_three_step_path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/three-step-path */ "./src/blocks/three-step-path.js");
/* harmony import */ var _blocks_article_with_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/article-with-image */ "./src/blocks/article-with-image.js");
/* harmony import */ var _blocks_blockquote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/blockquote */ "./src/blocks/blockquote.js");












}();
/******/ })()
;
//# sourceMappingURL=index.js.map