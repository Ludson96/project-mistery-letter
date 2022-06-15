// const carta = document.getElementById('carta-texto"');
const criarCarta = document.getElementById('criar-carta');
const textoGerado = document.getElementById('texto-gerado');

function gerarCarta() {
  const carta = document.getElementById('carta-texto');
  textoGerado.innerHTML = carta.value;
}

criarCarta.addEventListener('click', gerarCarta);
