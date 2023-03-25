// eslint-disable-next-line
export default (props) => {

    const { min, max } = props;

    var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    return(
        <div id="aleatorio">
            <h2>Sorteio de Números</h2>
            <p>Números digitados foram <b>{min}</b> e <b>{max}</b>.</p>
            <p>O número sorteado foi <b>{ sorteado }</b>.</p>
        </div>
    );
}