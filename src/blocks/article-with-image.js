const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Button } = wp.components;
const { RichText, InnerBlocks, useBlockProps, MediaUpload, MediaUploadCheck} = wp.blockEditor;

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
        },
    },
    edit: (props) => {
        const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		};
        const defaultImage =
			wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";

		let previewImage = [defaultImage];
	
        if (props.attributes.image_url == "Article image goes here") {
           props.attributes.image_url = previewImage;
        } else {
            props.attributes.image_url = props.attributes.image_url;
        }
		
       return(
           <div className="article-with-image-block-editor">
               <div className="edit-article-text">
                   <RichText 
                    multiline="h2"
                    value={props.attributes.heading}
                    onChange={(new_value)=>{
                        props.setAttributes({heading: new_value});
                    }}
                    className="article-heading-edit"
                   />
                   <MediaUploadCheck>
                    <MediaUpload 
                    onSelect={ get_image }
                    render={ ( { open } ) => (
                        <Button 
                        className="media-button"
                        onClick={ open }>
                            <Dashicon icon="format-image" size="20" />&nbsp;
                            {__(" Choose Article Image")}
                        </Button>
                    ) }
                    />                       
                </MediaUploadCheck>
                <div className="hold-image-edit">
                    <img src={props.attributes.image_url} />
                </div>
                   {/**Paragraph Inner Block */}
                <label>Add Inner Block - Paragraph</label>
				<InnerBlocks {...useBlockProps}
				   allowedBlocks={["core/paragraph"]}
				   className="the-text-edit"
				   placeholder="Start typing here to add Inner Block - Paragraph"
			   />

               </div>

           </div>
       );
    },
    save: (props) => {
        return (
            <div data-aos="fade-up" className="article-with-image">
                <div className="article-with-image-content">
                    <div className="article-text-content">
                        <h2><RichText.Content value={props.attributes.heading} /></h2>
                        <p {...useBlockProps}><InnerBlocks.Content /></p>
                    </div>
                    <div className="article-image">
                        <img src={props.attributes.image_url} />
                    </div>
                </div>
            </div>
        );
    }
})