// eslint-disable-next-line
export default (props) => {
	return (
		<div id="PassoForm">
			<div className="form-label">Passo atual: {props.passo}</div>
			<input
				onChange={event => props.onChange(+event.target.value)}
				value={props.passo}
				type="range"
				className="form-control-range"
				min="1"
				max="10"
				step="1"
				id="passo"
			/>
		</div>
	);
};
