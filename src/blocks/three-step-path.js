const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Button, RadioControl } = wp.components;
const { Fragment } = wp.element;
const { RichText, MediaUpload, MediaUploadCheck, InnerBlocks, useBlockProps} = wp.blockEditor;

registerBlockType("cert-blocks/three-step-path", {
    title: __("Three Step Path with Content"),
    icon: "editor-ol",
    category: "cert-block",
    description: __("List of three content pieces with image left align and text right aligned"),
    attributes: {
        section_heading: {
            type: "string",
            default: "Section heading goes here"
        },
        steps: {
			type: "array",
			default: []
		},
		stepCount: {
			type: "number",
			default: 0
		},
		maxCount: {
			type: "number",
			default: 3
		},
		notPreview: {
			type: "boolean",
			default: true
		},
		designImgs: {
			type: "array",
			default: []
		},
		designImgCount: {
			type: "number",
			default: 0
		},
		maxDImgCount: {
			type: "number",
			default: 4
		},
		options: {
            type: "string",
            default: "#FFF9F7"
        },

    },

	edit: (props) => {
		let count;
		props.setAttributes({ stepCount: 3 });

		if (
			props.attributes.stepCount > 0 &&
			props.attributes.steps[0] == undefined
		) {
			for (count = 0; count < props.attributes.stepCount; count++) {
				props.attributes.steps.push({});
			}
		}
		if (props.attributes.stepCount == 0) {
			for (count = 0; count < props.attributes.maxCount; count++) {
				props.attributes.steps.pop();
			}
		}
		const defaultImage =
			wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/image-placeholder.jpg";

		let previewImage = [defaultImage];

		/* display preview image if image is not uploaded*/
		for (count = 0; count < props.attributes.stepCount; count++) {
			if (props.attributes.steps[count] && props.attributes.steps[count].image_url) {
				previewImage[count] = props.attributes.steps[count].image_url;
			}
			if (previewImage[count] === undefined) {
				previewImage[count] = defaultImage;
			}
		}

		/* display buttons to upload small design images */
		let di_count;

		props.setAttributes({ designImgCount: 4 });
		if (
			props.attributes.designImgCount > 0 &&
			props.attributes.designImgs[0] == undefined
		) {
			for (di_count = 0; di_count < props.attributes.designImgCount; di_count++) {
				props.attributes.designImgs.push({});
			}
		}
		if (props.attributes.designImgCount == 0) {
			for (di_count = 0; di_count < props.attributes.maxDImgCount; di_count++) {
				props.attributes.designImgs.pop();
			}
		}


		return (
			<Fragment>
				<div className={props.attributes.options === "#FFF9F7" ? "three-step-path-block-editor light-pink"
								:  props.attributes.options === "#EEF8F7" ? "three-step-path-block-editor light-green"
								: "three-step-path-block-editor" }>
					<div className="radio-select">
						<RadioControl
							label="Choose background color: "
							selected={props.attributes.options}
							options={[
								{ label: "Light Pink Background", value: "#FFF9F7"},
								{ label: "Light Green Background", value: "#EEF8F7"},
								{ label: "No Background Color", value: "transparent"},
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
				<ol class="explanation">
					<li>Design Image 1 - Top Left</li>
					<li>Design Image 2 - Middle Right</li>
					<li>Design Image 3 - Bottom Left</li>
					<li>Design Image 4 - Bottom Right</li>
				</ol>
				{props.attributes.notPreview && (
					<div className="hold-design-img-btns">
						{props.attributes.designImgs.map((empty, index) => (
							<Fragment>
								<div className="hold-design-image">
									<img className={`design-image img-${ index + 1 }`} src={props.attributes.designImgs[index].image_url} />
							
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => {
											const new_designs = [...props.attributes.designImgs];
											new_designs[index].image_alt = media.alt;
											new_designs[index].image_url = media.url;
											new_designs[index].image_id = index;
											props.setAttributes({ designImgs: new_designs });
										}}
										type="image"
										value={props.attributes.designImgs[index].image_id}
										render={({ open }) => (
											<Button
												className={"design-image-button-selector"}
												onClick={open}
											>
												<Dashicon icon="format-image" size="20" />&nbsp;
												{__(`Choose Design Image ${ index + 1 }`)}
											</Button>
										)}
									/>
                                </MediaUploadCheck> 
								</div>
							</Fragment>
						))}
					</div>
				)}
				{props.attributes.notPreview && (
					<div className="three-step-content-edit">
						{props.attributes.steps.map((empty, index)=> (
							<Fragment>
								<div className="three-step-container">
									<div className="image-content-container">
										<div className="image-container"
										style={{
											backgroundImage: `url('${previewImage[index]}')`,
										}}></div>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => {
													const new_steps = [...props.attributes.steps];
													new_steps[index].image_alt = media.alt;
													new_steps[index].image_url = media.url;
													new_steps[index].image_id = index;
													props.setAttributes({ steps: new_steps });
												}}
												type="image"
												value={props.attributes.steps[index].image_id}
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

									</div>				
									<div className="text-content-container">
										<div className="subheading-content-edit">
											<RichText 
												tagName="div"
												onChange={(new_val) => {
													const new_steps = [...props.attributes.steps];
													new_steps[index].heading = new_val;
													props.setAttributes({ steps: new_steps });
												}}
												value={
													props.attributes.steps[index].heading
														? props.attributes.steps[index].heading
														: `Subeading for Step ${index + 1}`
												}
												className="step-heading"
											
											/>
										</div>
										<div className="paragraph-content-edit">
										<RichText 
												tagName="div"
												onChange={(new_val) => {
													const new_steps = [...props.attributes.steps];
													new_steps[index].paragraph = new_val;
													props.setAttributes({ steps: new_steps });
												}}
												value={
													props.attributes.steps[index].paragraph
														? props.attributes.steps[index].paragraph
														: `Paragraph for Step ${index + 1}`
												}
												className="step-paragraph"
											
											/> 
										</div>
									</div>

								</div>
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
		);
	},

	save: (props) => {

		return(
			<Fragment>
				<div className={props.attributes.options === "#FFF9F7" ? "three-step-path-content light-pink"
								: props.attributes.options === "#EEF8F7" ? "three-step-path-content light-green"
								: "three-step-path-content"}>
					<RichText.Content 
					className="headline" 
					tagName="h2" 
					value={props.attributes.section_heading} 
					
					/>
					
					<div className="hold-steps-content">
					{props.attributes.designImgs.map((design, index) => (
						<img className={`the-design-img img-${index + 1}`} src={props.attributes.designImgs[index].image_url} />
					))}
					 {props.attributes.steps.map((step, index) => (
						<div className="each-step">
							<Fragment>
									<div className="step-image" style={`background-image: url(${props.attributes.steps[index].image_url})`}>

									</div>
									<div className="step-text">
										<h3> <RichText.Content
												value={props.attributes.steps[index].heading}
											/>
										</h3>

										<p><RichText.Content 
											value={props.attributes.steps[index].paragraph}
											/>
										</p>
										
									</div>
							</Fragment>
						</div>
						))}

					</div>
					<div className="hold-extra-text" >
						<div className="the-text">
						 <InnerBlocks.Content  {...useBlockProps} />
						</div>
					</div>
				</div>
					
			</Fragment>
		);

	}
})