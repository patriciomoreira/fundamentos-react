import alunos from "../data/alunos"

// eslint-disable-next-line
export default _ => {
	
	const lista = alunos.map((aluno) => {
		return <li key={aluno.id}>{aluno.id} {aluno.nome} {aluno.nota} </li>
	});
	
	return <>
		<ul>
			{lista}
		</ul>
	</>
}