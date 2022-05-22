import React from "react";
import { TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
const { Fragment } = wp.element;
const WSTextControl = (props) => {
	let theIndex = props.index;
	let theClassName = props.className;
	let objectName = props.objectName;
	const theAttribute = props.attribute;
	const maxCharacters = props.maxCharacters;
	const label = props.theLabel;
	theIndex == null || theIndex == undefined ? (theIndex = 0) : null;
	theClassName == null || theClassName == undefined
		? (theClassName = "")
		: null;
	const [counter, setCount] = useState(0);
	const [pressedDelete, setpressedDelete] = useState(false);
	const [didPaste, setPasted] = React.useState(false);
	const handleKeyDown = (event) => {
		event.keyCode == 8 ? setpressedDelete(true) : null;
	};
	const handlePaste = (event) => {
		setPasted(true);
		const pasted = event.clipboardData.getData("Text");
		setCount(counter + pasted.length);
	};
	return (
		<div>
			<Fragment>
				<TextControl
					// help={
					// 	// counter > 0 ? `Characters left: ${maxCharacters - counter}` : null
					// 	`Characters left: ${maxCharacters - counter}`
					// }
					label={label}
					onKeyDown={handleKeyDown}
					onPaste={handlePaste}
					onChange={(new_val) => {
						!didPaste ? setCount(counter + 1) : null;
						setPasted(false);
						counter > 0 && pressedDelete == true ? setCount(counter - 1) : null;
						setpressedDelete(false);
						counter > maxCharacters - 1 ? setCount(0) : null;
						counter > maxCharacters - 1 ? (new_val = null) : null;
						props.theHandler(new_val, theIndex, objectName, theAttribute);
					}}
					value={
						theAttribute[theIndex][objectName]
							? theAttribute[theIndex][objectName]
							: ""
					}
					className={theClassName}
				/>
				<div>
					{counter >= 0 && counter < maxCharacters - 1 && (
						<span className="custom-primary-input-alert">{`Characters left: ${
							maxCharacters - counter
						}`}</span>
					)}
					{counter > maxCharacters - 1 && (
						<span
							className={"custom-danger-input-alert"}
						>{`Max ${maxCharacters} characters exceeded`}</span>
					)}
					{counter == maxCharacters - 1 && (
						<span className="custom-warning-input-alert">{`You have 1 character left. Proceeding will delete your text.`}</span>
					)}
				</div>
			</Fragment>
		</div>
	);
};
export default WSTextControl;
