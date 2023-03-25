import "./Card.css"

// eslint-disable-next-line
export default props => {
    
    const cardStyle = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#008'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Tittle">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
}