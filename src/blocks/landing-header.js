const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
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
    },
    edit: (props) => {
        const headerImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',
            height: '500px'
		};
		const get_image = (img) => {
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		};
        
        return (
            <div className="full-header-wp-block-editor">
            <div className="edit-full-header">
                <MediaUploadCheck>
                    <MediaUpload 
                    onSelect={ get_image }
                    render={ ( { open } ) => (
                        <Button 
                        className="media-button"
                        onClick={ open }>{props.attributes.image_url}</Button>
                    ) }
                    />
                    
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
                    // renderAppender={() => appenderToUse()}
                    className="hero-cta-button"
                    placeholder="Add Inner Block - Button"
                />
                   
                </div>

            </div>
        </div>
        )
    } ,
    save: ( props ) => {
      return(
        <div className="landing-header">
				<div
                className="header-img-bg"
                style={{
                    backgroundImage: `url('${props.attributes.image_url}')`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    position: "relative",
                }}
				>
					<div className="hold-text-btn">
                        <RichText.Content
						tagName="h1"
                        className="landing-heading"
						value={props.attributes.heading}
						/>
                        <RichText.Content value={props.attributes.content} />
                        <p className="landing-paragraph">{props.attributes.paragraph}</p>
                        <span {...useBlockProps}>
                        <InnerBlocks.Content />
                        </span>
                    </div>
				</div>
			</div>
      );
    }
});