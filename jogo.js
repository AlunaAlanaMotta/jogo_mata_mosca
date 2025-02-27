var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === '1') {
    criaMosquitoTempo = 1500;
} else if (nivel === '2') {
    criaMosquitoTempo = 1000; 
} else if (nivel === '3') {
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function () {
    tempo -= 1;

    document.getElementById('cronometro').innerHTML = tempo;
    
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    } 
     
}, 1000);

function posicaoRandomica() {

    let mosca = document.getElementById('mosquito');
    if (mosca) {
        mosca.remove();

       
        
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posicaox = Math.floor(Math.random() * largura) - 90;
    var posicaoy = Math.floor(Math.random() * altura) - 90;

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaox + 'px';
    mosquito.style.top = posicaoy + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);
    tamanhoAleatorio();
}
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    console.log(classe);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}