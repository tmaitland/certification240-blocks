const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon } = wp.components;
const { RichText, useBlockProps, BlockControls, AlignmentToolbar} = wp.blockEditor;

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
            default: "none",
        },
    },  
    edit: (props) => {
        const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( {
                alignment: newAlignment === undefined ? 'none' : newAlignment,
            } );
        };
        return (
         <div {...useBlockProps()} className="informational-text-block-editor">
             {
            <BlockControls>
                <AlignmentToolbar
                    value={ props.attributes.alignment }
                    onChange={ onChangeAlignment }
                />
            </BlockControls>
            }
            <RichText
              className={props.attributes.className}
              placeholder={props.attributes.info_text}
              value={props.attributes.info_text}
              onChange={(new_value)=>{
               props.setAttributes({info_text: new_value});
              }}
              style={ {textAlign: props.attributes.alignment} }
            />
        </div>
        )
    },

    save: (props) => {
        const blockProps = useBlockProps.save();

        return (
        <div {...blockProps} className="hold-text-containers">
            <div  className="informational-text-container">
                <RichText.Content 
                tagName="p"
                className={`info-text-align-${props.attributes.alignment}`}
                value={props.attributes.info_text}
                />
                <RichText.Content value={props.attributes.content}/>
            </div>

        </div>    
        )
    }
});

