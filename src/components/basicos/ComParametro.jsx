export default function ComParametro(props) {
    
    var status = props.nota >= 6 ? 'aprovado' : 'reprovado';

    return (
        <div id="com-parametro">
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p>O aluno {props.aluno} está {status}!</p>
			<p>A sua nota final foi {props.nota}.</p>
        </div>
    );
}