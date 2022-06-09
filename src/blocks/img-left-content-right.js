const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { useState } = wp.element;
const { Dashicon, Button, Fragment, RadioControl } = wp.components;
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

    edit: (props) => {

        const contentImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',
		};
        const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		}; 
       
        return (

                <div className={props.attributes.options === "#EEF8F7" 
                ? "imgl-contentr-wp-block-editor light-green" 
                : "imgl-contentr-wp-block-editor light-pink"}>
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
                        <div className="radio-select">
                            <RadioControl
                                label="Choose background color: "
                                selected={props.attributes.options}
                                options={[
                                    { label: "Light Pink Background", value: "#FFF9F7"},
                                    { label: "Light Green Background", value: "#EEF8F7"},
                                ]}
                                onChange={ (new_value)=> {
                                    props.setAttributes({
                                        options: new_value
                                    })
                                }}
                                />
                            <RadioControl
                                label="Choose image height: "
                                selected={props.attributes.image_height}
                                options={[
                                    { label: "Tall Image", value: "517px"},
                                    { label: "Short Image", value: "388px"},
                                ]}
                                onChange={ (new_value)=> {
                                    props.setAttributes({
                                        image_height: new_value
                                    })
                                }}
                                />
                                
                        </div>
                        <div className="hold-content">
                            <div className={props.attributes.image_height === "388px" 
                                            ? "hold-image short" 
                                            : "hold-image tall"} 
                                style={contentImageCSS}>   
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
            <div {...blockProps} 
                className={props.attributes.options === "#EEF8F7" 
                ? "img-left-content-right light-green" 
                : "img-left-content-right light-pink" }>

                <div className={props.attributes.image_height === "388px" 
                                ? "image-hold short" 
                                : "image-hold tall"}  
                    style={contentImageCSS}>
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