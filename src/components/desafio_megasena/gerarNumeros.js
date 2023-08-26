function gerarNumeroNaoIncluido(min, max, array) {
	const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

	return array.includes(aleatorio)
		? gerarNumeroNaoIncluido(min, max, array)
		: aleatorio;
}

function gerarNumeros(qtd) {

	const numeros = Array(qtd)
		.fill(0)
		.reduce((acumulador) => {
			const numeroGerado = gerarNumeroNaoIncluido(1, 60, acumulador);//se deixar 60 no lugar de qtd da bug 
			return [ ...acumulador , numeroGerado ] ;
		}, [])
		.sort((n1, n2) => n1 - n2);

	return numeros;
}

export default gerarNumeros;