// eslint-disable-next-line
export default props => {
	//nerd aleatorio
	const setNerd = _ => {
		return Math.random()> 0.5;
	}


	return(
		<div id="filho">
			<h3>Comonente Filho</h3>
			<button onClick={ evento => { return props.quandoClicar("P", 25, setNerd)} }
			type="button" className="btn btn-outline-dark">Fornecer Informações</button>
		</div>
	);
}