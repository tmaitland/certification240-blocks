const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button, Dashicon, RadioControl } = wp.components;
const { Fragment } = wp.element;
const { RichText, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps} = wp.blockEditor;

import TextControlComponent from "./components/TextControl";
// import ImgSelector from "../helper-functions/img-selector";

registerBlockType("cert-blocks/three-images", {
    title: __('Three Images with Content'),
    icon: 'images-alt2',
    category: 'cert-block',
    description: __('Three images with title text content for each'),
    attributes: {
        section_heading: {
            type: "string",
            default: "Section heading goes here"
        },
        images: {
			type: "array",
			default: [],
		},
		imageCount: {
			type: "number",
			default: 0,
		},
		maxCount: {
			type: "number",
			default: 3,
		},
		notPreview: {
			type: "boolean",
			default: true,
		},
        options: {
            type: "string",
            default: "#FFF9F7"
        },
    },   
    
    edit: (props) => {

        let count;
		props.setAttributes({ imageCount: 3 });

		if (
			props.attributes.imageCount > 0 &&
			props.attributes.images[0] == undefined
		) {
			for (count = 0; count < props.attributes.imageCount; count++) {
				props.attributes.images.push({});
			}
		}
		if (props.attributes.imageCount == 0) {
			for (count = 0; count < props.attributes.maxCount; count++) {
				props.attributes.images.pop();
			}
		}
		const defaultImage =
			wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";

		let previewImage = [defaultImage];

		for (count = 0; count < props.attributes.imageCount; count++) {
			if (props.attributes.images[count] && props.attributes.images[count].image_url) {
				previewImage[count] = props.attributes.images[count].image_url;
			}
			if (previewImage[count] === undefined) {
				previewImage[count] = defaultImage;
			}
		}

        const textHandler = TextControlComponent;

        return(
        <Fragment>
          <div className={props.attributes.options === "#FFF9F7" ? "three-images-block-editor light-pink" 
                        : props.attributes.options === "#EEF8F7" ? "three-images-block-editor light-green" 
                        : "three-images-block-editor" }>
            <div className="radio-select">
            <RadioControl
                label="Choose background color: "
                selected={props.attributes.options}
                options={[
                    { label: "Light Pink Background", value: "#FFF9F7"},
                    { label: "Light Green Background", value: "#EEF8F7"},
                    { label: "No Background Color", value: "transparent"}
                ]}
                onChange={ (new_value)=> {
                    props.setAttributes({
                        options: new_value
                    })
                }}
                />
            </div>             
          <RichText
                    multiline="h2"
                    onChange={(new_value)=>{
                        props.setAttributes({section_heading: new_value});
                    }}
                    value={props.attributes.section_heading}
                    className="section-heading-edit"
                />
         

            {props.attributes.notPreview && (
                <div className="three-images-content">
                    {props.attributes.images.map((empty, index) => (
                    <Fragment>
                        <div className="image-text">
                            

                            <RichText
                                tagName="div"
                                onChange={(new_val) => {
                                    const new_images = [...props.attributes.images];
                                    new_images[index].heading = new_val;
                                    props.setAttributes({ images: new_images });
                                }}
                                value={
                                    props.attributes.images[index].heading
                                        ? props.attributes.images[index].heading
                                        : `Heading ${index + 1}`
                                }
                                className="image-heading"
                            />
                            </div>
                            <div className="image-container"
                                style={{
                                    backgroundImage: `url('${previewImage[index]}')`,
                                }}
                            >
                               
                            </div>
                            <div className="image-data-container">
                                <div className="image-link-input">
                                    <label>Image { index + 1 } Link:</label>
                                    <RichText
                                        value={props.attributes.images[index].link}
                                        onChange={(new_val) => {
                                            const new_images = [...props.attributes.images];
                                            new_images[index].link = new_val;
                                            props.setAttributes({ images: new_images });
                                        }}
                                        placeholder={`Enter Image ${
                                            index + 1
                                        } URL: (example: https://www.google.com)`}
                                        theHandler={textHandler}
                                        index={index}
                                    />
                                </div>
                                <div
                                    style={{
                                        margin: "auto",
                                        marginTop: "20px",
                                    }}
                                >
                                   <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                const new_images = [...props.attributes.images];
                                                new_images[index].image_alt = media.alt;
                                                new_images[index].image_url = media.url;
                                                new_images[index].image_id = index;
                                                props.setAttributes({ images: new_images });
                                            }}
                                            type="image"
                                            value={props.attributes.images[index].image_id}
                                            render={({ open }) => (
                                                <Button
                                                    className={"image-button-selector"}
                                                    onClick={open}
                                                >
                                                    <Dashicon icon="format-image" size="20" />&nbsp;
                                                    {__(`Choose Image ${ index + 1 }`)}
                                                </Button>
                                            )}
                                        />
                                    </MediaUploadCheck> 
                                    <RichText 
                                        tagName="div"
                                        className="img-paragraph-edit"
                                        value={props.attributes.images[index].paragraph}
                                        onChange={(new_val) => {
                                            const new_images = [...props.attributes.images];
                                            new_images[index].paragraph = new_val;
                                            props.setAttributes({ images: new_images });
                                        }}
                                        placeholder={`Enter Paragraph ${
                                            index + 1 }`}
                                        index={index}    
                                    />
                                </div>
                            </div>
                            <hr/>
                    </Fragment>
                    ))}
                </div>
            )}
            {/*Extra Text*/}
				<label>Add Inner Block - Paragraph</label>
				<InnerBlocks {...useBlockProps}
				   allowedBlocks={["core/paragraph"]}
				   className="the-text-edit"
				   placeholder="Add Inner Block - Paragraph"
			   />
          </div>
        </Fragment>
        )
      
    },

    save: (props) => {
        return(
           <Fragment>
            <div data-aos="fade-up" data-aos-delay="200" className={props.attributes.options === "#FFF9F7" ? "three-images-wp-block light-pink"
                            : props.attributes.options === "#EEF8F7" ? "three-images-wp-block light-green"
                            : "three-images-wp-block"}>
                <RichText.Content 
                 className="headline" 
                 tagName="h2" 
                 value={props.attributes.section_heading} 
                 
                />
                <div className="three-images-container">
                    <Fragment>
                     {props.attributes.images.map((image, index) => (	
                        <a className="image-link"
                           href={props.attributes.images[index].link}>
                            <h3 className="image-headline"><RichText.Content
                             value={props.attributes.images[index].heading}
                            /></h3>
                            <div className="hold-image">
                                <img className="the-image" src={props.attributes.images[index].image_url} />
                                <div className="the-paragraph">
                                    <RichText.Content value={props.attributes.images[index].paragraph} />
                                </div>
                            </div>
                        </a>
           

                     ))}

                    </Fragment>
                </div>
                <div className="hold-extra-text" >
                    <div className="the-text">
                        <InnerBlocks.Content  {...useBlockProps} />
                    </div>
				</div>
            </div>
           </Fragment> 
        )
    }
})