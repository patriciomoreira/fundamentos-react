// eslint-disable-next-line
export default props => {
	return(
		<div id="filho">
			<span>{props.nome} </span>
			<span>{props.idade} </span>
			<span>{props.nerd ? "" : "não"} é nerd!</span>
		</div>
	);
}