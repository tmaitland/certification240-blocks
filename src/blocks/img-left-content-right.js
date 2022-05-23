const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Button, Fragment } = wp.components;
const { RichText, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps} = wp.blockEditor;

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

    edit: (props) => {
        const contentImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',
            height: '400px'
		};
        const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		}; 

        return (

                <div className="imgl-contentr-wp-block-editor">
                   <div className="edit-image-button">
                    <MediaUploadCheck>
                        <MediaUpload 
                        onSelect={ get_image }
                        render={ ( { open } ) => (
                            <Button 
                            className="media-button"
                            onClick={ open }>
                                <Dashicon icon="format-image" size="20" />&nbsp;
                                {__(" Choose Content Image")}
                            </Button>
                        ) }
                        />    
                    </MediaUploadCheck>
                   </div>
                    <div className="edit-imgl-contentr">
                        <div className="hold-image" style={contentImageCSS}>   
                        </div>
                        <div className="hold-text">
                          {/*Heading text*/}
                          <RichText
                                multiline="h2"
                                onChange={(new_value)=>{
                                    props.setAttributes({heading: new_value});
                                }}
                                value={props.attributes.heading}
                                className="content-heading"
                            />
                            {/**Paragraph text */}
                            <RichText 
                                multiline="p"
                                placeholder={props.attributes.paragraph}
                                onChange={(new_value)=>{
                                    props.setAttributes({paragraph: new_value});
                                }}
                                value={props.attributes.paragraph}
                                className="content-paragraph"
                            />
                            {/*CTA Button*/}
                            <InnerBlocks {...useBlockProps()}
                                allowedBlocks={["core/button"]}
                                className="cta-button"
                                placeholder="Add Inner Block - Button"
                            />    
                        </div>    
                    </div>
                </div>
        )
    },

    save: (props) => {

        const blockProps = useBlockProps.save();

        const contentImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',    
		};

        return (
            <div {...blockProps} className="img-left-content-right">
                <div className="image-hold" style={contentImageCSS}>
                </div>
                <div className="text-hold">
                    <RichText.Content
                        tagName="h2"
                        className="heading-content"
                        value={props.attributes.heading}
                        />
                    {/*Display Header Text styles from toolbar settings*/}
                    <RichText.Content value={props.attributes.content} />
                        {/*Display paragraph text*/}
                    <RichText.Content 
                        value={props.attributes.paragraph}
                        tagName="p"
                        className="paragraph-content"
                     />
                     {/*Display Paragraph Text styles from toolbar settings*/}
                    <RichText.Content value={props.attributes.content} />

                    {/*Display Inner Block CTA Button and its properties from toolbar settings*/}
                    <span >
                        <InnerBlocks.Content />
                    </span>
                </div>
            </div>
        );
    }
})