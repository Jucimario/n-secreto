function verificaSeOChuteEstaCorreto(chute) {
    const numero = + chute.replace('.', '');        
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido</div>`;
        return;
    }
    if (numeroForMaiorQueOValorPermitido(numero)) {

        elementoChute.innerHTML += `<div>O numero deve estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Voce acertou!</h2>
        <h3> o numero secreto: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    }
    else if (numero > numeroSecreto) {

        
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }
    else {
        
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (event) => {
    if (event.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})