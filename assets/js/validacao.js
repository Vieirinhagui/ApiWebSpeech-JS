function validacaoChute(resultSpeak) {
  const numero = +resultSpeak;
  chuteInvalido(numero);
  if (RangeChute(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido, precisa estar entre ${menorValor} e ${maiorValor}</div>`;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O número era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="bnt-jogar">Jogar Novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-arrow-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-arrow-up"></i></div>`;
  }
}

function chuteInvalido(numero) {
  if (resultSpeak.toUpperCase() === "GAME OVER") {
    document.body.innerHTML = `
        <h2>Game Over</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="bnt-jogar">Jogar Novamente</button>
    `;
    document.body.style.backgroundColor = "black";
  } else {
    elementoChute.innerHTML += `<div>valor invalido</div>`;
  }
}

function RangeChute(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
