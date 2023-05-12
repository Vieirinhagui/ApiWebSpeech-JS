const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

const spanMenorValor = document.getElementById("menor-valor");
spanMenorValor.innerText = menorValor;
const spanMaiorValor = document.getElementById("maior-valor");
spanMaiorValor.innerText = maiorValor;

console.log("O número secreto é: " + numeroSecreto);
