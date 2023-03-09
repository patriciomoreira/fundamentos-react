import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Aleatorio from './componentes/Aleatorio'

// eslint-disable-next-line
export default _ =>
    <div id='app'>
        <h1 id='titulo'>Aprendendo REACT</h1>

        <Aleatorio min={1} max={10}/>

        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Aeee SubTitulo"
            aluno="Patrício"
            nota={9.5}
        />

        <Primeiro />
    </div>