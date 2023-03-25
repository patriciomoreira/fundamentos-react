import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import './App.css';

// eslint-disable-next-line
export default _ =>
    <div id='app'>
        <h1 id='titulo'>Aprendendo REACT</h1>

        <div className="Cards">

            <Card titulo="#5 - Componentes com Filhos">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="José" sobrenome="ABC" />
                </Familia>
            </Card>

            <Card titulo="DESAFIO ALEATÓRIO" color="#080">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#2" color="#aa5832">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Aeee SubTitulo"
                    aluno="Patrício"
                    nota={9.5}
                />
            </Card>

            <Card titulo="#1" color="#EE82EE">
                <Primeiro />
            </Card>
        </div>

    </div>