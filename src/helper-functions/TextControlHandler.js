export const TextControlHandler = (
	inputValue,
	index,
	objectName,
	attribute
) => {
	const thisAttribute = attribute;
	const new_Attribute = [...thisAttribute];
	new_Attribute[index][objectName] = inputValue;
	props.setAttributes({ thisAttributeName: new_Attribute });
};
