const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaSeOChuteEstaCorreto(chute);
}

function exibeChuteNaTela(chute) {

    if (chuteForInvalido(parseInt(chute))) {
        return;
    }
    elementoChute.innerHTML = `
    <div>Voce disse: </div>
    <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());


