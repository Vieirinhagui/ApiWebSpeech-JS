const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-br";

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  resultSpeak = e.results[0][0].transcript;
  console.log(e.results[0][0].transcript);
  exibeChute(resultSpeak);
  validacaoChute(resultSpeak);
}

function exibeChute(resultSpeak) {
  elementoChute.innerHTML = `
    <div> Você disse:</div>
    <span class="box">${resultSpeak}</span>
    `;
}
recognition.addEventListener("end",()=> recognition.start());