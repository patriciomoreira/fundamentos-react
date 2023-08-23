import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line
export default (props) => {

	const [nome, setNome] = useState();
	const [idade, setIdade] = useState();
	const [nerd, setNerd] = useState();
	const [exibir, setExibir] = useState(false);

	function fornecerInformações(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
		setExibir(true);
	}

	return (
		<div>
			<h3>Componente Pai</h3>
			{
			exibir ? 
				<p>O pai se chama {nome} sua idade é {idade} ele {!nerd ? "não" : ""} é nerd!</p> : 
				"Não"
			}
			<IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
		</div>
	);
};
