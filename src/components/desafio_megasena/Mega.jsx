import { useState } from "react";

// eslint-disable-next-line
export default props => {

	function gerarNumeroNaoIncluido(min, max, array) {

		const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	
		return array.includes(aleatorio)
			? gerarNumeroNaoIncluido(min, max, array)
			: aleatorio;
	}
	
	function gerarNumeros(qtd) {
	
		const numeros = Array(qtd)
			.fill(0)
			.reduce((acumulador) => {
				const numeroGerado = gerarNumeroNaoIncluido(1, qtd, acumulador);
				return [ ...acumulador , numeroGerado ] ;
			}, [])
			.sort((n1, n2) => n1 - n2);
	
		return numeros;
	}
	
	
	const [qtd, setQtd] = useState(props.qtd);
	const [numeros, setNumeros] = useState(gerarNumeros(qtd));


	return <div id="megasena" className="d-flex flex-wrap text-center">
		<h3 className="m-3 w-100">L O T E R I A</h3>
		{numeros.map((num, id) => <p key={id}className="bola d-inline rounded-circle bg-success p-3 mx-auto text-white">{("0" + num).slice(-2)}</p> ) }
		<input className="mx-auto form-control d-block"type="number" onChange={event => setQtd(+event.target.value)}/>
		<button className="btn btn-success mx-auto my-3" onClick={_=> setNumeros(gerarNumeros(qtd))}>Gerar Números</button>
	</div>
}