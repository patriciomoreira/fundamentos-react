import React, { cloneElement } from "react";

// eslint-disable-next-line
export default props => {

	console.log(typeof props.children);

	return(
		<div id="familia">
			{
				props.children.map( (filho, i) => {
					return cloneElement(filho, {...props, key: i})
				})
			}
		</div>
	);
}