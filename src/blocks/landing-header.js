const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button, Dashicon } = wp.components;
const { RichText, PlainText, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps } = wp.blockEditor;

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
      imgExists : {
          type: "boolean",
          default: false
      },
      bg_color: { 
          type: 'string', 
          default: '#ffffff' 
      }
    },
    edit: (props) => {
        const headerImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',
            height: "500px"
		};
		const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		};
		const delete_image = (img) => {
			props.setAttributes({
				image_ID: null,
				image_url: null,
				image_alt: null,
			});
		};
        const addBGColor = ( hex_bg_color ) => {
            props.setAttributes({
                bg_color: hex_bg_color 
            });
        };
 
        
        return (
        <div className="full-header-wp-block-editor">
            <div className="edit-full-header">
                <MediaUploadCheck>
                {!props.attributes.imgExists && !props.attributes.image_url ? (
                <MediaUpload 
                onSelect={ get_image }
                render={ ( { open } ) => (
                    <Button 
                    className="media-button"
                    onClick={ open }>
                        <Dashicon icon="format-image" size="20" />&nbsp;
                        {__(" Choose Background Image")}
                    </Button>
                ) }
                />    
            ) : <Button className="btn-remove" onClick={delete_image}>
                    <Dashicon icon="no" size="20" />&nbsp;
                        {__(" Remove Background Image")}
                </Button>}
                   
                </MediaUploadCheck>

            </div>
            <div className="image landing-header-image" style={headerImageCSS}>
                <div className="contain-text">
                {/*Heading text*/}
                    <RichText
                        multiline="h1"
                        onChange={(new_value)=>{
                            props.setAttributes({heading: new_value});
                        }}
                        value={props.attributes.heading}
                        className="head-heading"
                    />
                {/**Paragraph text */}
                    <PlainText 
                        multiline="p"
                        onChange={(new_value)=>{
                            props.setAttributes({paragraph: new_value});
                        }}
                        value={props.attributes.paragraph}
                        className="head-paragraph"
                    />
                {/*CTA Button*/}
                <InnerBlocks {...useBlockProps}
                    allowedBlocks={["core/button"]}
                    className="cta-button"
                    placeholder="Add Inner Block - Button"
                />
                   
                </div>
            </div>

        </div>
        )
    } ,
    save: ( props ) => {
        const headerImageCSS = {
			backgroundImage: `url(${props.attributes.image_url})`
		};
      return(
        <div className="landing-header">
            <div
                className="header-img-bg"
                style={headerImageCSS}
				> 
					<div className="hold-text-btn">
                        {/*Display Header Text*/}
                        <RichText.Content
						tagName="h1"
                        className="landing-heading"
						value={props.attributes.heading}
						/>
                         {/*Display Header Text styles from toolbar settings*/}
                        <RichText.Content value={props.attributes.content} />
                        {/*Display Paragraph Text*/}
                        <span>
                         <RichText.Content
                         tagName="p"
                         className="landing-paragraph" 
                         value={props.attributes.paragraph} /> 
                         {/*Display Paragraph Text styles from toolbar settings*/} 
                         <RichText.Content value={props.attributes.content}/>
                        </span>
                        {/*Display Inner Block CTA Button and its properties from toolbar settings*/}
                        <span {...useBlockProps}>
                          <InnerBlocks.Content />
                        </span>
                    </div>
				</div>
             </div>   
      );
    }
});