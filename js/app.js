let listaDesenhos = [
  'fa-diamond', 'fa-diamond',
  'fa-paper-plane-o', 'fa-paper-plane-o',
  'fa-anchor', 'fa-anchor',
  'fa-bolt', 'fa-bolt',
  'fa-cube', 'fa-cube',
  'fa-leaf', 'fa-leaf',
  'fa-bicycle', 'fa-bicycle',
  'fa-bomb', 'fa-bomb'
];

embaralhar();

/**
* @description função para embaralhar as cartas e construir o HTML
*/
function embaralhar() {
  listaDesenhos = shuffle(listaDesenhos);
  document.querySelector('.deck').innerHTML = "";

  for(let i = 0; i < listaDesenhos.length; i++) {
    let carta = document.createElement('li');
    carta.className = "card";
    let desenho = document.createElement('i');
    desenho.className = "fa " + listaDesenhos[i];
    carta.appendChild(desenho);
    document.querySelector('.deck').appendChild(carta);
  };
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Evento de click nas cartas
document.querySelector('.deck').addEventListener('click', function(event) {
  virarCarta(event.target);
});

/**
* @description função para virar as cartas
* @param {element} carta
*/
function virarCarta(carta) {
  if (carta.className == "card") {
    carta.className = "card open show";
    cartaAberta(carta);
  };
}

/**
* @description função para abrir a carta
* @param {element} carta
*/
let listaCartaAberta = [];
function cartaAberta(carta) {
  listaCartaAberta.push(carta);
  if(listaCartaAberta.length === 2) {
    if(listaCartaAberta[0].innerHTML === listaCartaAberta[1].innerHTML) {
      acertou();
    } else {
      setTimeout(errou, 500);
      contagemEstrelas();
    };
    contagemMovimentos();
  };
}

/**
* @description função para mostrar que acertou as cartas
*/
function acertou() {
  listaCartaAberta[0].className = "card match";
  listaCartaAberta[1].className = "card match";
  listaCartaAberta = [];
}

/**
* @description função para mostrar que errou as cartas
*/
function errou() {
  listaCartaAberta[0].className = "card";
  listaCartaAberta[1].className = "card";
  listaCartaAberta = [];
}

/**
* @description função para contagem de movimentos errados e contagem de estrelas
* Quando o jogador tiver 5 erros, perde uma estrela
* Quando chegar em 10 erros, perde mais uma estrela
* Ficando somente com 1 estrela
*/
let contadorErros = 0;
let estrela = document.querySelectorAll('.stars i');
function contagemEstrelas() {
  contadorErros++;
  if(contadorErros === 5) {
    estrela[2].className = "fa";
  };
  if(contadorErros === 10) {
    estrela[1].className = "fa";
  };
}

/**
* @description função para contagem de movimentos
*/
let contadorMovimentos = 0;
function contagemMovimentos() {
  contadorMovimentos++;
  document.querySelector('.moves').textContent = contadorMovimentos;
}

// Evento de click no botão de reiniciar
document.querySelector('.restart').addEventListener('click', function() {
  embaralhar();
  contadorErros = 0;
  contadorMovimentos = 0;
  listaCartaAberta = [];
  estrela[1].className = "fa fa-star";
  estrela[2].className = "fa fa-star";
  document.querySelector('.moves').textContent = contadorMovimentos;
})
