/* VERSÃO ANTIGA
import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'

const elemento = document.getElementById('root');
ReactDOM.render('Olá React! :D', elemento);


ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo Componente" subtitulo="Aeee SubTitulo"/>
    </div>,
    document.getElementById('root')
)
################################################################################
*/

// Nova versão acima react v18

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// eslint-disable-next-line
const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);