// eslint-disable-next-line
export default props => {

	const isPar = props.numero % 2 === 0 ? "Par" : "Impar";

	return <p>
			{props.numero == null ? "Nenhum valor informado!" :
			 "O número " + props.numero + " é " + isPar + "!" }
		</p>
}