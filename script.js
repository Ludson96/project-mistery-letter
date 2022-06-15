// const carta = document.getElementById('carta-texto"');
const criarCarta = document.getElementById('criar-carta');
const textoGerado = document.getElementById('texto-gerado');

function gerarCarta() {
  const carta = document.getElementById('carta-texto');
  if (!carta.value || carta.value === ' ') {
    textoGerado.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    textoGerado.innerHTML = carta.value;
  }
}

criarCarta.addEventListener('click', gerarCarta);
