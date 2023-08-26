import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UserInfo from "./components/condicional/UserInfo";
import DiretaPai from "./components/comunication/DiretaPai";
import IndiretaPai from "./components/comunication/IndiretaPai";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/desafio_megasena/Mega";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
	<div id="app">
		
		<h1 id="titulo">Aprendendo </h1>

		<div className="Cards">
			<Card titulo="#12 - Mega Sena">
				<Mega qtd={6} totalNums={60}/>
			</Card>

			<Card titulo="#12 - Contador - Baseado em classe" color="#514A9D">
				<Contador numeroInicial={1} passo={1}></Contador>
			</Card>

			<Card titulo="#11 - Formulário - Comp Controlado" color="#6b6827f1">
				<Input></Input>
			</Card>

			<Card titulo="#10 - Comunicão Indireta" color="#42a03f">
				<IndiretaPai></IndiretaPai>
			</Card>

			<Card titulo="#09 - Comunicação Direta" color="#45152f">
				<DiretaPai nome="Patrício" idade={25} nerd={true}></DiretaPai>
			</Card>

			<Card titulo="#8 - Renderização Condicional" color="#4cd8c8">
				<UserInfo user = { {nome: "Patrício", email: "p@mail.com"} }></UserInfo>
				<UserInfo user = { {nome: " ", email: "p@mail.com"} }></UserInfo>
				<ParOuImpar numero={1}></ParOuImpar>
			</Card>

			<Card titulo="#7 - Lista de Produtos" color="#a0b0a9">
				<ListaProdutos></ListaProdutos>
			</Card>

			<Card titulo="#6 - Lista de Alunos" color="#a7a7c9">
				<ListaAlunos></ListaAlunos>
			</Card>

			<Card titulo="#5 - Componentes com Filhos" color="#cc99cc">
				<Familia sobrenome="Silva">
					<FamiliaMembro nome="Pedro" />
					<FamiliaMembro nome="João" />
					<FamiliaMembro nome="José" sobrenome="Diferente" />
				</Familia>
			</Card>

			<Card titulo="DESAFIO ALEATÓRIO" color="#080">
				<Aleatorio min={1} max={10} />
			</Card>

			<Card titulo="#2" color="#aa5832">
				<ComParametro
					titulo="Segundo Componente"
					subtitulo="Aeee SubTitulo"
					aluno="Patrício"
					nota={9.5}
				/>
			</Card>

			<Card titulo="#1" color="#EE82EE">
				<Primeiro />
			</Card>
		</div>
	</div>
);
