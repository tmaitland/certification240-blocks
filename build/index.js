/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/article-with-image.js":
/*!******************************************!*\
  !*** ./src/blocks/article-with-image.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ "./src/blocks/components/Tab.js":
/*!**************************************!*\
  !*** ./src/blocks/components/Tab.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





class Tab extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", () => {
      const {
        label,
        onClick
      } = this.props;
      onClick(label);
    });
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label
      }
    } = this;
    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
      className: className,
      onClick: onClick
    }, label);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Tab, "propTypes", {
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./src/blocks/components/Tabs.jsx":
/*!****************************************!*\
  !*** ./src/blocks/components/Tabs.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tab */ "./src/blocks/components/Tab.js");






class Tabs extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClickTabItem", tab => {
      this.setState({
        activeTab: tab
      });
    });

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children
      },
      state: {
        activeTab
      }
    } = this;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "tabs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ol", {
      className: "tab-list"
    }, children.map(child => {
      const {
        label
      } = child.props;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeTab: activeTab,
        key: label,
        label: label,
        onClick: onClickTabItem
      });
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "tab-content"
    }, children.map(child => {
      if (child.props.label !== activeTab) return undefined;
      return child.props.children;
    })));
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Tabs, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(Array).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/blocks/components/TextControl.jsx":
/*!***********************************************!*\
  !*** ./src/blocks/components/TextControl.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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
  useState
} = wp.element;
const {
  Dashicon,
  Button,
  Fragment,
  RadioControl
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
    },
    options: {
      type: "string",
      default: "#FFF9F7"
    },
    image_height: {
      type: "string",
      default: "388px"
    }
  },
  edit: props => {
    const contentImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover'
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
      className: "radio-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioControl, {
      label: "Choose background color: ",
      selected: props.attributes.options,
      options: [{
        label: "Light Pink Background",
        value: "#FFF9F7"
      }, {
        label: "Light Green Background",
        value: "#EEF8F7"
      }],
      onChange: new_value => {
        props.setAttributes({
          options: new_value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioControl, {
      label: "Choose image height: ",
      selected: props.attributes.image_height,
      options: [{
        label: "Tall Image",
        value: "517px"
      }, {
        label: "Short Image",
        value: "388px"
      }],
      onChange: new_value => {
        props.setAttributes({
          image_height: new_value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: props.attributes.options === "#EEF8F7" ? "hold-content light-green" : "hold-content light-pink"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: props.attributes.image_height === "388px" ? "hold-image short" : "hold-image tall",
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
    }))))));
  },
  save: props => {
    const blockProps = useBlockProps.save();
    const contentImageCSS = {
      backgroundImage: `url('${props.attributes.image_url}')`,
      backgroundSize: 'cover'
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: props.attributes.options === "#EEF8F7" ? "img-left-content-right light-green" : "img-left-content-right light-pink"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: props.attributes.image_height === "388px" ? "image-hold short" : "image-hold tall",
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

"use strict";
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

/***/ "./src/blocks/left-right-content-switch.js":
/*!*************************************************!*\
  !*** ./src/blocks/left-right-content-switch.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  Fragment,
  Button,
  RadioControl
} = wp.components;
const {
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
registerBlockType("cert-blocks/left-right-content-switch", {
  title: "Image and Content Switch",
  icon: "image-flip-horizontal",
  category: "cert-block",
  description: __("Switch position of image and content alignment from LTR or RTL"),
  attributes: {
    image_url: {
      type: "string",
      default: "Select Image"
    },
    options: {
      type: "string",
      default: "Image Left"
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

    const imageStyles = {
      width: "312px",
      height: "394px",
      margin: "1rem 0rem",
      objectFit: "cover",
      objectPosition: "center"
    };
    const defaultImage = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";
    let previewImage = [defaultImage];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "left-right-content-switch-editor"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "radio-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioControl, {
      label: "Choose Image alignment: ",
      selected: props.attributes.options,
      options: [{
        label: "Image Align Left",
        value: "Image Left"
      }, {
        label: "Image Align Right",
        value: "Image Right"
      }],
      onChange: new_value => {
        props.setAttributes({
          options: new_value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: props.attributes.options === "Image Left" ? "hold-content-switch img-left" : "hold-content-switch img-right"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      style: imageStyles,
      src: props.attributes.image_url === "Select Image" ? `${previewImage}` : props.attributes.image_url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, useBlockProps, {
      allowedBlocks: ["core/paragraph"],
      className: "paragraph-text",
      placeholder: "Add Inner Block - Paragraph"
    })))));
  },
  save: props => {
    const feImageStyles = {
      width: "412px",
      height: "494px",
      objectFit: "cover",
      objectPosition: "center"
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "left-right-content-switch"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: props.attributes.options === "Image Left" ? "hold-content img-left" : "hold-content img-right"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      style: feImageStyles,
      src: props.attributes.image_url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "hold-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks.Content, useBlockProps))));
  }
});

/***/ }),

/***/ "./src/blocks/tabs.js":
/*!****************************!*\
  !*** ./src/blocks/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tabs_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tabs.jsx */ "./src/blocks/components/Tabs.jsx");
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  TextControl,
  TabPanel
} = wp.components;
const {
  RichText,
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;

registerBlockType("cert-blocks/create-tabs", {
  title: __("Create Tabs with Content"),
  icon: "table-row-after",
  category: "cert-block",
  description: __("Generates clickable tabs that can hold different blocks"),
  attributes: {
    section_heading: {
      type: "string",
      default: "Section heading goes here"
    },
    tabs: {
      type: "array",
      default: []
    },
    tabCount: {
      type: "number",
      default: 0
    },
    maxCount: {
      type: "number"
    },
    notPreview: {
      type: "boolean",
      default: true
    }
  },
  edit: props => {},
  save: props => {}
});

/***/ }),

/***/ "./src/blocks/text-hero-cta.js":
/*!*************************************!*\
  !*** ./src/blocks/text-hero-cta.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/blocks/two-images-with-captions.js":
/*!************************************************!*\
  !*** ./src/blocks/two-images-with-captions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  Dashicon,
  Button
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  RichText,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
registerBlockType("cert-blocks/two-images-with-captions", {
  title: __("Two Images with Captions"),
  icon: "format-image",
  category: "cert-block",
  description: __("Two images that each have their own caption."),
  attributes: {
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
      default: 2
    },
    notPreview: {
      type: "boolean",
      default: true
    }
  },
  edit: props => {
    let count;
    props.setAttributes({
      imageCount: 2
    });

    if (props.attributes.imageCount > 0 && props.attributes.images[0] === undefined) {
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
    /* display preview image if image is not uploaded*/

    for (count = 0; count < props.attributes.imageCount; count++) {
      if (props.attributes.images[count] && props.attributes.images[count].image_url) {
        previewImage[count] = props.attributes.images[count].image_url;
      }

      if (previewImage[count] === undefined) {
        previewImage[count] = defaultImage;
      }
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "two-images-with-caption-editor"
    }, props.attributes.notPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hold-content"
    }, props.attributes.images.map((empty, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "each-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.images[index].image_url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "subtitle-text",
      onChange: new_value => {
        const new_images = [...props.attributes.images];
        new_images[index].subtitle = new_value;
        props.setAttributes({
          images: new_images
        });
      },
      value: props.attributes.images[index].subtitle ? props.attributes.images[index].subtitle : `Subtitle for Image ${index + 1}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "sub-paragraph",
      onChange: new_value => {
        const new_images = [...props.attributes.images];
        new_images[index].subParagraph = new_value;
        props.setAttributes({
          images: new_images
        });
      },
      value: props.attributes.images[index].subParagraph ? props.attributes.images[index].subParagraph : `Paragraph for Image ${index + 1}`
    })))))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "two-images-with-captions"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hold-the-images-captions"
    }, props.attributes.images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "each-image-caption"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "the-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.images[index].image_url,
      className: props.attributes.images[index].image_url === undefined ? "hide" : "show"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "the-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.images[index].subtitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sub-paragraph"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.images[index].subParagraph
    })))))));
  }
});

/***/ }),

/***/ "./src/stylesheets/editor.scss":
/*!*************************************!*\
  !*** ./src/stylesheets/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/stylesheets/reusable.scss":
/*!***************************************!*\
  !*** ./src/stylesheets/reusable.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/stylesheets/styles.scss":
/*!*************************************!*\
  !*** ./src/stylesheets/styles.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
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
/* harmony import */ var _blocks_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/tabs */ "./src/blocks/tabs.js");
/* harmony import */ var _blocks_two_images_with_captions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/two-images-with-captions */ "./src/blocks/two-images-with-captions.js");
/* harmony import */ var _blocks_left_right_content_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/left-right-content-switch */ "./src/blocks/left-right-content-switch.js");















}();
/******/ })()
;
//# sourceMappingURL=index.js.map