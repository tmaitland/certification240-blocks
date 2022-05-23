const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button, Dashicon } = wp.components;
const { RichText, InnerBlocks, useBlockProps} = wp.blockEditor;

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

    edit: (props) => {
        return (
            <div {...useBlockProps()} className="text-hero-cta-editor">
                <div className="hold-content-edit">
                    {/*Heading text*/}
                    <RichText
                       multiline="h1"
                       onChange={(new_value)=>{
                           props.setAttributes({heading: new_value});
                       }}
                       value={props.attributes.heading}
                       className="text-heading-edit" 
                    />
                    {/*CTA Button*/}
                    <InnerBlocks
                        allowedBlocks={["core/button"]}
                        className="cta-button"
                        placeholder="Add Inner Block - Button"
                    />

                </div>
            </div>
        );
    },

    save: (props) => {

        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps} className="text-hero-cta">
                <div className="hold-content">
                     {/*Display Header Text*/}
                     <RichText.Content
                        tagName="h1"
                        className="text-heading"
                        value={props.attributes.heading}
                     />
                     {/*Display Header Text styles from toolbar settings*/}
                     <RichText.Content value={props.attributes.content} />
                     {/*Display Inner Block CTA Button and its properties from toolbar settings*/}
                     <span>
                        <InnerBlocks.Content />
                     </span>
                </div>
            </div>
        );
    }
});