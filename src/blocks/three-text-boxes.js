const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon } = wp.components;
const { Fragment } = wp.element;
const { RichText} = wp.blockEditor;

registerBlockType("cert-blocks/three-text-boxes", {
    title:__("Three Text Boxes"),
    icon: "text",
    category: "cert-block",
    description: __("Three text boxes with a header for each"),
    attributes: {
        boxes: {
            type: "array",
            default: []
        },
        boxCount: {
            type: "number",
			default: 0,
        },
        maxCount: {
            type: "number",
			default: 3,
        }, 
        notPreview: {
            type: "boolean",
            default: true
        }
    },

    edit: (props) => {
        let count;
        props.setAttributes({boxCount: 3});

        if (props.attributes.boxCount > 0 &&props.attributes.boxes[0] == undefined) {
			for (count = 0; count < props.attributes.boxCount; count++) {
				props.attributes.boxes.push({});
			}
		}
		if (props.attributes.boxCount == 0) {
			for (count = 0; count < props.attributes.maxCount; count++) {
				props.attributes.boxes.pop();
            }
        }

         return (
            <div className="three-text-boxes-block-editor">
                {props.attributes.notPreview && (
                    <div className="three-boxes-content">
                        {props.attributes.boxes.map((empty, index) => (
                            <div class="each-text-box">
                                <div className="box-heading-text-edit">
                                <RichText 
                                 tagName="div"
                                 onChange={(new_val) => {
                                     const new_boxes = [...props.attributes.boxes];
                                     new_boxes[index].heading = new_val;
                                     props.setAttributes({ boxes: new_boxes });
                                 }}
                                 value={
                                     props.attributes.boxes[index].heading
                                         ? props.attributes.boxes[index].heading
                                         : `Heading ${index + 1}`
                                 }
                                />

                                </div>
                                <div className="box-paragraph-edit">
                                    <RichText
                                        value={props.attributes.boxes[index].paragraph
                                            ? props.attributes.boxes[index].paragraph
                                            : `Paragraph ${index + 1}`}
                                        onChange={(new_val) => {
                                            const new_boxes = [...props.attributes.boxes];
                                            new_boxes[index].paragraph = new_val;
                                            props.setAttributes({ boxes: new_boxes });
                                        }}
                                        index={index}
                                    />
                                </div>
                           </div>
                            
                        ))}
                    </div>
                )}
            </div>
         );       
			

    },

    save: (props) => {
        return(
            <Fragment>
             <div className="three-text-boxes-wp-block">
                 <div className="three-text-boxes-container">
                      {props.attributes.boxes.map((box, index) => (	
                     <Fragment> 
                         <div class="each-box">
                            <h3 className="box-heading"><RichText.Content
                            value={props.attributes.boxes[index].heading}
                            /></h3>
                            <div className="box-paragraph">
                            <RichText.Content
                            value={props.attributes.boxes[index].paragraph}
                            />  
                            </div> 
                         </div>      
                     </Fragment>
                      ))}
 
                 </div>
             </div>
            </Fragment> 
         )
    }
})