const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Button } = wp.components;
const { Fragment } = wp.element;
const { RichText, MediaUpload, MediaUploadCheck } = wp.blockEditor;

registerBlockType("cert-blocks/two-images-with-captions", {
    title: __("Two Images with Captions"),
    icon: "format-image",
    category: "cert-block",
    description: __("Two images that each have their own caption."),
    attributes: {
        images: {
            type: "array",
            default: []
        },
        imageCount: {
			type: "number",
			default: 0
		},
		maxCount: {
			type: "number",
			default: 2
		},
		notPreview: {
			type: "boolean",
			default: true
		}
    },

    edit: (props) => {

        let count;
		props.setAttributes({ imageCount: 2 });

        if(props.attributes.imageCount > 0 && props.attributes.images[0] === undefined){
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

		/* display preview image if image is not uploaded*/
		for (count = 0; count < props.attributes.imageCount; count++) {
			if (props.attributes.images[count] && props.attributes.images[count].image_url) {
				previewImage[count] = props.attributes.images[count].image_url;
			}
			if (previewImage[count] === undefined) {
				previewImage[count] = defaultImage;
            }
        }    

        return (
            <div className="two-images-with-caption-editor">
                {props.attributes.notPreview && (
                    <div className="hold-content">
                        {props.attributes.images.map((empty, index) => (
                            <Fragment>
                                <div className="each-content">
                                    <div className="image-container">
                                        <img src={props.attributes.images[index].image_url} />
                                    </div>
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
                                    <div className="text-container">
                                        <RichText 
                                            tagName="div"
                                            className="subtitle-text"
                                            onChange={(new_value) => {
                                                const new_images = [...props.attributes.images];
                                                new_images[index].subtitle = new_value;
                                                props.setAttributes({images: new_images});
                                            }}
                                            value={
                                                props.attributes.images[index].subtitle
                                                ? props.attributes.images[index].subtitle
                                                : `Subtitle for Image ${index + 1}`
                                            }
                                        />
                                        <RichText 
                                            tagName="div"
                                            className="sub-paragraph"
                                            onChange={(new_value) => {
                                                const new_images = [...props.attributes.images];
                                                new_images[index].subParagraph = new_value;
                                                props.setAttributes({images: new_images});
                                            }}
                                            value={
                                                props.attributes.images[index].subParagraph
                                                ? props.attributes.images[index].subParagraph
                                                : `Paragraph for Image ${index + 1}`
                                            }
                                        />

                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                )}
            </div>
        );
    },

    save: (props) => {
        return (
          <div className="two-images-with-captions">
              <div className="hold-the-images-captions">
                  {props.attributes.images.map((image, index)=> (
                      <div className="each-image-caption">
                          <div className="the-image">
                             <img src={props.attributes.images[index].image_url} 
                                className={props.attributes.images[index].image_url === undefined
                                 ? "hide" : "show"
                                }
                             />
                          </div>
                          <div className="the-text">
                            <p>
                                <RichText.Content
                                  value={props.attributes.images[index].subtitle}
                                />
                                {/* <PlainText.Content value={props.attributes.content} /> */}
                            </p>
                            <div className="sub-paragraph">
                                <RichText.Content 
                                    value={props.attributes.images[index].subParagraph}
                                />
                            </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        );

    }

})