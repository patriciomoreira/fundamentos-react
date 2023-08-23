function gerarNumeroNaoIncluido(min, max, array) {
	const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

	return array.includes(aleatorio)
		? gerarNumeroNaoIncluido(min, max, array)
		: aleatorio;
}

function gerarNumeros(qtd) {

	const numeros = Array(qtd)
		.fill(0)
		.reduce((acumulador, numAtual) => {
			console.log(acumulador + numAtual);
			return acumulador + numAtual;
		}, 0);

	return numeros;
}

console.log("Numeros: " + gerarNumeros(6));
