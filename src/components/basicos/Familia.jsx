import { cloneElement } from "react";

// eslint-disable-next-line
export default props => {

	return(
		<div id="familia">
			{
				props.children.map( (filho, i) => {
					var sobrenome = filho.props.sobrenome;
					if(!sobrenome || sobrenome === "")
						return cloneElement(filho, {...props, key: i})
					else
						return cloneElement(filho, { key: i})
				})
			}
		</div>
	);
}