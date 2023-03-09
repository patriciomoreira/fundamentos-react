import "./Card.css"

// eslint-disable-next-line
export default props => {
    
    return (
        <div className="Card">
            <div className="Tittle">{props.titulo}</div>
            <div className="Content">Conteudo</div>
        </div>
    );
}