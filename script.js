const criarCarta = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');

// Requisito 16
const gStyle = ['newspaper', 'magazine1', 'magazine2'];
const gSize = ['medium', 'big', 'reallybig'];
const gRota = ['rotateleft', 'rotateright'];
const gInc = ['skewleft', 'skewright'];

function gerarCarta() {
  const carta = document.getElementById('carta-texto').value;
  const cartaSeparada = carta.split(' ');
  cartaGerada.innerHTML = '';
  if (!carta || carta === ' ') {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < cartaSeparada.length; index += 1) {
      const span = document.createElement('span');
      cartaGerada.appendChild(span);
      span.innerHTML = cartaSeparada[index];
      span.className = `${gStyle[Math.floor(Math.random() * 3)]} ${gSize[Math.floor(Math.random() * 3)]} ${gRota[Math.floor(Math.random() * 2)]} ${gInc[Math.floor(Math.random() * 2)]}`;
    }
  }
}

criarCarta.addEventListener('click', gerarCarta);
