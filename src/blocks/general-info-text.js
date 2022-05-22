const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon } = wp.components;
const { RichText, useBlockProps, BlockControls} = wp.blockEditor;

registerBlockType("cert-blocks/general-info", {
    title: __('General Informational Text'),
    icon: 'text',
    category: 'cert-block',
    description: __('General information text box to accompany other blocks'),
    attributes: {
        info_text: {
			type: "string",
			default: "Informational text goes here",
		},
    },  
    edit: (props) => {
        return (
         <div className="informational-text-block-editor">
            <RichText
              multiline="p" 
              className="informational-text-box-edit"
              value={props.attributes.info_text}
              onChange={(new_value)=>{
               props.setAttributes({info_text: new_value});
           }}
            />
        </div>
        )
    },

    save: (props) => {
        return (
        <div className="informational-text-container">
            <RichText.Content  
             className="info-text-box" 
             tagName="p" 
             value={props.attributes.info_text} 
            />
        </div>
        )
    }
});

