const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Fragment, Button, RadioControl } = wp.components;
const { MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps} = wp.blockEditor;

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

    edit: (props) => {

        const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		}; 

        const imageStyles = {
            width: "312px",
            height: "394px",
            margin: "1rem 0rem",
            objectFit: "cover",
            objectPosition: "center"
        }

        const defaultImage =
			wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";

		let previewImage = [defaultImage];

        return (
            <div className="left-right-content-switch-editor">
                <div className="radio-select">
                    <RadioControl
                        label="Choose Image alignment: "
                        selected={props.attributes.options}
                        options={[
                            { label: "Image Align Left", value: "Image Left"},
                            { label: "Image Align Right", value: "Image Right"},
                        ]}
                        onChange={ (new_value)=> {
                            props.setAttributes({
                                options: new_value
                            })
                        }}
                        />
                </div>                
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
                <div 
                className={props.attributes.options === "Image Left"
                            ? "hold-content-switch img-left"
                            : "hold-content-switch img-right"}>
                    <div className="hold-image">
                        <img style={imageStyles} src={
                            props.attributes.image_url === "Select Image" 
                            ? `${previewImage}`
                            : props.attributes.image_url
                         } />
                    </div>
                    <div className="hold-text">
                        <InnerBlocks {...useBlockProps} 
                            allowedBlocks={["core/paragraph"]}
                            className="paragraph-text"
                            placeholder="Add Inner Block - Paragraph"
                        /> 
                    </div>
                </div>
            </div>
        );
    },

    save: (props) => {
        const feImageStyles = {
            height: "494px",
            objectFit: "cover",
            objectPosition: "center"
        }

        return (
            <div data-aos="fade-up" className="left-right-content-switch">
            <div className={props.attributes.options === "Image Left"
                           ? "hold-content img-left"
                           : "hold-content img-right" 
                        }>
                <div 
                className="hold-image">
                    <img style={feImageStyles} src={props.attributes.image_url} />
                </div>
                <div className="hold-text">
                    <InnerBlocks.Content {...useBlockProps} />
                </div>
            </div>
        </div>
        );

    }
})