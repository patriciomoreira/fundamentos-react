import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'

// eslint-disable-next-line
export default _ =>
    <div id='app'>
        <h1>Aprendendo REACT</h1>

        <ComParametro 
            titulo="Segundo Componente" 
            subtitulo="Aeee SubTitulo" 
            aluno="Patrício" 
            nota={9.5}
        />
        
        <Primeiro/>
    </div>