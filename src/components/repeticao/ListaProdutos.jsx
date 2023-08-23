import produtos from "../data/produtos"

// eslint-disable-next-line
export default _ => {

	const listaProdutos = produtos.map((produto, id) => {
		return <tr key={id}>
			<th scope="row">{id+1}</th>
			<td>{produto.nome}</td>
			<td className="text-start">R$ {produto.valor.toFixed(2).replace('.',(','))}</td>
		</tr>
	});

	return <table className="table table-dark table-hover rounded overflow-hidden table-responsive">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Nome</th>
				<th scope="col">Preço</th>
			</tr>
		</thead>
		<tbody>
			{listaProdutos}
		</tbody>
	</table>
}