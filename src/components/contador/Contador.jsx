import { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import PassoForm from "./PassoForm";

class Contador extends Component {

	state = {
		numero : this.props.numeroInicial || 0,
		passo : this.props.passo >= 1 ? this.props.passo : 1
	}
 
	inc = _ => { 
		if(this.state.numero + this.state.passo >= 0)
			this.setState({ numero : this.state.numero + this.state.passo }); 
	}

	dec = _ => { 
		if(this.state.numero - this.state.passo >= 0)
			this.setState({ numero : this.state.numero - this.state.passo }); 
	}

	atualizarPasso = (novoPasso) => {
		this.setState({passo: novoPasso});
	}

	render() {
		return (
			<>
				<Display numero={this.state.numero}/>
				<Buttons passo={this.state.passo} inc={this.inc} dec={this.dec}/>
				<PassoForm onChange={ this.atualizarPasso } passo={ this.state.passo }/>
			</>
		);
	}
}

export default Contador;
