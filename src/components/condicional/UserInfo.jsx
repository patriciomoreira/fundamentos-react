import If from "./If";

// eslint-disable-next-line
export default props => {

	return (<>
		<If test  = {props.user && props.nome}>
			<p>Olá, seja bem vindo {props.user.nome || ""}!</p>
		</If>
		<If test  = {!props.user || !props.nome}>
			<p>Olá, seja bem vindo caro cliente!</p>
		</If>
	</>);
}