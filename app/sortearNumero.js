const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * parseInt(maiorValor + 1));
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

//console.log('Numero Secreto: ' + numeroSecreto);