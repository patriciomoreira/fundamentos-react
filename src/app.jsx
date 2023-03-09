import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

// eslint-disable-next-line
export default _ =>
    <div id='app'>
        <h1 id='titulo'>Aprendendo REACT</h1>

        <Card titulo="Meu Primeiro Card"></Card>

        <Aleatorio min={1} max={10} />

        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Aeee SubTitulo"
            aluno="Patrício"
            nota={9.5}
        />

        <Primeiro />
    </div>