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
