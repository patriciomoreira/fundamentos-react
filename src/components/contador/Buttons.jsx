// eslint-disable-next-line
export default (props) => {
	return (
		<div id="buttons">
			<button
				onClick={props.inc}
				className="btn btn-primary btn-sm"
				type="button"
			>
				+ {props.passo}
			</button>
			
			<button
				onClick={props.dec}
				className="btn btn-secondary btn-sm m-1"
				type="button"
			>
				- {props.passo}
			</button>
		</div>
	);
};
