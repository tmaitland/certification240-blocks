const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, TabPanel} = wp.components;
const { RichText, InnerBlocks, useBlockProps} = wp.blockEditor;

import Tabs from "./components/Tabs.jsx";

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

    edit: (props) => {
       
    },

    save: (props) => {
  
    }


});