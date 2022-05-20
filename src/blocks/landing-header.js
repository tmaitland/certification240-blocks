const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
const { PlainText, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps } = wp.blockEditor;

registerBlockType("cert-blocks/landing-header", {
    title: __('Landing Header'),
    icon: 'cover-image',
    category: 'cert-block',
    description: __('Landing page header with image, heading, and paragraph text'),
    attributes: {
      image_url: {
          type: "string",
          default: "Image goes here"
      },
      heading: {
          type: "string",
          default: "Headline goes here"
      },
      paragraph: {
          type: "string",
          default: "Add paragraph here"
      },
      button_url: {
          type: "string",
          default: "add button url here"
      }
    },
    edit: (props) => {
        const headerImageCSS = {
			backgroundImage: `url('${props.attributes.image_url}')`,
            backgroundSize: 'cover',
            height: '500px'
		};
		const get_image = (img) => {
			console.log(img);
			props.setAttributes({
				image_ID: img.id,
				image_url: img.url,
				image_alt: img.alt,
			});
		};
       const propsBlock = useBlockProps();

        return (
        <div className="full-header-wp-block-editor">
            <div className="edit-full-header">
                <MediaUploadCheck>
                    <MediaUpload 
                    onSelect={ get_image }
                    render={ ( { open } ) => (
                        <Button 
                        className="media-button"
                        onClick={ open }>Open Media Library</Button>
                    ) }
                    />
                    
                </MediaUploadCheck>

            </div>
            <div className="image landing-header-image" style={headerImageCSS}>
                <div className="contain-text">
                {/*Heading text*/}
                    <PlainText 
                        multiline="h1"
                        placeholder="Add heading here"
                        onChange={(new_value)=>{
                            props.setAttributes({heading: new_value});
                        }}
                        className="head-heading"
                    />
                {/**Paragraph text */}
                    <PlainText 
                        multiline="p"
                        placeholder="Add paragraph here"
                        onChange={(new_value)=>{
                            props.setAttributes({paragraph: new_value});
                        }}
                        className="head-paragraph"
                    />
                {/*CTA Button*/}
                <InnerBlocks {...useBlockProps}
                    allowedBlocks={["core/button"]}
                    // renderAppender={() => appenderToUse()}
                    className="hero-cta-button"
                />
                   
                </div>

            </div>
        </div>
        )
    } ,
    save: ( props ) => {
      console.log("save-edit-props:", props)
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
                        <h1 className="landing-heading">{props.attributes.heading}</h1>
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